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
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
primary: {
50: '#ecfdf5',
100: '#d1fae5',
200: '#a7f3d0',
300: '#6ee7b7',
400: '#34d399',
500: '#10b981', // Main Emerald
600: '#059669',
700: '#047857',
800: '#065f46',
900: '#064e3b',
}
},
boxShadow: {
'glow': '0 20px 40px -10px rgba(16, 185, 129, 0.15)',
}
}
}
}



        // 1. Icons
        lucide.createIcons();

        // 2. Scroll Animation Observer
        const observerOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });

        // 3. Calculator Logic
        let baseRate = 6.5; 
        const zipperCost = 150;
        const ventCost = 50;

        function setProjectType(rate, btnElement) {
            baseRate = rate;
            
            // Reset all buttons style
            document.querySelectorAll('.type-btn').forEach(btn => {
                btn.className = 'type-btn px-4 py-3 text-sm font-medium border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 bg-white transition-all';
            });

            // Set active style
            btnElement.className = 'type-btn active px-4 py-3 text-sm font-medium border rounded-xl transition-all border-slate-900 bg-slate-900 text-white shadow-md transform scale-105';
            
            updateCost();
        }

        function updateCost() {
            const area = parseInt(document.getElementById('area-range').value);
            document.getElementById('area-val').innerText = area;

            const zipper = document.getElementById('zipper-toggle').checked;
            const vent = document.getElementById('vent-toggle').checked;

            let total = area * baseRate;
            if (zipper) total += zipperCost;
            if (vent) total += ventCost;

            // Animate number (simple implementation)
            const el = document.getElementById('total-cost');
            const current = parseInt(el.innerText.replace('.', ''));
            // Just updating text for now, could be animated properly
            el.innerText = Math.floor(total).toLocaleString('nl-NL');
        }

        // Init
        updateCost();
    
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
      

<div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary-200/20 blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] rounded-full bg-blue-100/30 blur-[100px]"></div>
</div>

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 reveal">
<div className="glass-panel rounded-full px-6 py-3 shadow-sm shadow-slate-200/50 flex items-center justify-between w-full max-w-5xl">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-primary-500 flex items-center justify-center rounded-full shadow-lg shadow-primary-500/30">
<i className="text-white w-4 h-4" data-lucide="package" strokeWidth="2"></i>
</div>
<span className="text-base font-semibold tracking-tight text-slate-900">PROWRAP</span>
</div>
<div className="hidden md:flex items-center gap-1 bg-slate-100/50 p-1 rounded-full border border-slate-200/50">
<a className="px-4 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 rounded-full transition-colors" href="#diensten">Diensten</a>
<a className="px-4 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 rounded-full transition-colors" href="#toepassingen">Projecten</a>
<a className="px-4 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 rounded-full transition-colors" href="#calculator">Calculatie</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-5 py-2 text-xs font-semibold text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all hover:scale-105" href="#contact">
                Offerte
            </a>

<button className="md:hidden text-slate-900">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</nav>

<section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="max-w-2xl relative z-10 reveal delay-100">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-100 text-[10px] font-semibold uppercase tracking-wider text-slate-500 mb-8 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse"></span>
                    Nu beschikbaar in Benelux
                </div>
<h1 className="text-5xl sm:text-7xl font-medium tracking-tighter text-slate-900 mb-8 leading-[1.05]">
                    Industriële bescherming <br/>
<span className="font-serif italic text-primary-500 pr-2">tot in perfectie.</span>
</h1>
<p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-lg font-light">
                    Krimpfolie oplossingen voor de bouw en maritieme sector. Wij transformeren kwetsbare projecten tot weerbestendige vestingen.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white bg-primary-500 rounded-full hover:bg-primary-600 transition-all hover:-translate-y-1 shadow-glow group" href="#calculator">
                        Start Calculatie
                        <i className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-slate-600 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-colors shadow-sm" href="#diensten">
                        Bekijk projecten
                    </a>
</div>
<div className="mt-16 flex items-center gap-10 border-t border-slate-200/60 pt-8">
<div>
<p className="text-3xl font-semibold tracking-tight text-slate-900">500+</p>
<p className="text-xs text-slate-400 mt-1">Projecten afgerond</p>
</div>
<div>
<p className="text-3xl font-semibold tracking-tight text-slate-900">100%</p>
<p className="text-xs text-slate-400 mt-1">Recyclebaar LDPE</p>
</div>
</div>
</div>

<div className="relative reveal delay-200">
<div className="absolute inset-0 bg-primary-400 rounded-[3rem] rotate-3 opacity-20 blur-2xl -z-10 transform scale-95 translate-y-4"></div>
<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200 border border-white/50 h-[500px] w-full group">
<img alt="Steigerbouw inpakken" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>

<div className="absolute bottom-8 left-8 right-8 glass-panel p-5 rounded-2xl border-white/20">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center border border-primary-500/20">
<i className="w-6 h-6 text-primary-500" data-lucide="shield-check"></i>
</div>
<div>
<h3 className="text-sm font-semibold text-white">Actief Project</h3>
<p className="text-xs text-slate-200">Rotterdam Haven, Complex B</p>
</div>
<div className="ml-auto flex items-center gap-1.5 px-2 py-1 rounded-full bg-primary-500/20 border border-primary-500/20">
<span className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-pulse"></span>
<span className="text-[10px] font-medium text-primary-100">Live</span>
</div>
</div>
</div>

<div className="absolute top-8 right-8 bg-white p-4 rounded-2xl shadow-lg border border-slate-100 max-w-[160px]">
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Windkracht</span>
<i className="w-3 h-3 text-slate-400" data-lucide="wind"></i>
</div>
<div className="text-2xl font-semibold text-slate-900 tracking-tight">120 <span className="text-sm text-slate-400 font-normal">km/u</span></div>
<div className="w-full bg-slate-100 h-1 rounded-full mt-3">
<div className="bg-primary-500 h-1 rounded-full w-[85%]"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="diensten">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 text-center max-w-2xl mx-auto reveal">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 mb-4">Toepassingen in beeld</h2>
<p className="text-slate-500">
                    Van jachtbouw tot grootschalige renovatie. Onze folie vormt een tweede huid om elk object.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer reveal delay-100">
<img alt="Steigerbouw" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/10 to-slate-900/80"></div>
<div className="absolute bottom-0 left-0 p-8">
<div className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center mb-4 text-white">
<i className="w-5 h-5" data-lucide="construction"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Steiger &amp; Bouw</h3>
<p className="text-sm text-slate-300 line-clamp-2">Complete inkapseling voor stofvrij en droog doorwerken in elk seizoen.</p>
</div>
</div>

<div className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer reveal delay-200">
<img alt="Boten" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/10 to-slate-900/80"></div>
<div className="absolute bottom-0 left-0 p-8">
<div className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center mb-4 text-white">
<i className="w-5 h-5" data-lucide="anchor"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Maritiem</h3>
<p className="text-sm text-slate-300 line-clamp-2">Bescherming tijdens transport en winterstalling voor jachten en commerciële vaart.</p>
</div>
</div>

<div className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer reveal delay-300">
<img alt="Industrie" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/10 to-slate-900/80"></div>
<div className="absolute bottom-0 left-0 p-8">
<div className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center mb-4 text-white">
<i className="w-5 h-5" data-lucide="box"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Transport &amp; Opslag</h3>
<p className="text-sm text-slate-300 line-clamp-2">Inpakken van modules en machines voor export of langdurige buitenopslag.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="calculator">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 reveal">
<span className="text-primary-600 font-semibold tracking-wide text-xs uppercase mb-2 block">Transparante Prijzen</span>
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900">Bereken uw investering</h2>
</div>
<div className="bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-100 p-8 sm:p-12 reveal delay-100">
<div className="grid lg:grid-cols-2 gap-16">

<div className="space-y-10">

<div>
<label className="flex items-center gap-2 text-sm font-semibold text-slate-900 mb-4">
<i className="w-4 h-4 text-primary-500" data-lucide="layers"></i>
                                Type Project
                            </label>
<div className="grid grid-cols-3 gap-3">
<button className="type-btn active px-4 py-3 text-sm font-medium border rounded-xl transition-all border-slate-900 bg-slate-900 text-white shadow-md" onclick="setProjectType(6.5, this)">Steiger</button>
<button className="type-btn px-4 py-3 text-sm font-medium border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 bg-white" onclick="setProjectType(7.5, this)">Boot</button>
<button className="type-btn px-4 py-3 text-sm font-medium border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 bg-white" onclick="setProjectType(12, this)">Object</button>
</div>
</div>

<div>
<div className="flex justify-between items-end mb-6">
<label className="text-sm font-semibold text-slate-900">Oppervlakte</label>
<div className="px-3 py-1 bg-primary-50 text-primary-700 rounded-lg text-sm font-mono font-medium">
<span id="area-val">100</span> m²
                                </div>
</div>
<input className="w-full" id="area-range" max="1000" min="10" oninput="updateCost()" type="range" value="100"/>
<div className="flex justify-between text-[10px] text-slate-400 mt-3 font-medium uppercase tracking-wider">
<span>Klein (10m²)</span>
<span>Groot (1000m²)</span>
</div>
</div>

<div className="space-y-5 pt-4 border-t border-slate-100">
<label className="flex cursor-pointer justify-between items-center group">
<div className="flex items-center gap-3">
<div className="p-2 bg-slate-100 rounded-lg text-slate-500 group-hover:text-primary-600 transition-colors">
<i className="w-4 h-4" data-lucide="door-open"></i>
</div>
<span className="text-sm font-medium text-slate-700">Ritsdeur toegang</span>
</div>
<div className="relative inline-block w-11 h-6 transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-slate-200 appearance-none cursor-pointer transition-all duration-300 top-0.5 left-0.5" id="zipper-toggle" onchange="updateCost()" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-slate-200 cursor-pointer transition-colors duration-300" htmlFor="zipper-toggle"></label>
</div>
</label>
<label className="flex cursor-pointer justify-between items-center group">
<div className="flex items-center gap-3">
<div className="p-2 bg-slate-100 rounded-lg text-slate-500 group-hover:text-primary-600 transition-colors">
<i className="w-4 h-4" data-lucide="fan"></i>
</div>
<span className="text-sm font-medium text-slate-700">Ventilatie pakket</span>
</div>
<div className="relative inline-block w-11 h-6 transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-slate-200 appearance-none cursor-pointer transition-all duration-300 top-0.5 left-0.5" id="vent-toggle" onchange="updateCost()" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-slate-200 cursor-pointer transition-colors duration-300" htmlFor="vent-toggle"></label>
</div>
</label>
</div>
</div>

<div className="relative bg-slate-900 rounded-3xl p-10 flex flex-col justify-between overflow-hidden text-white">

<div className="absolute top-0 right-0 w-64 h-64 bg-primary-500 rounded-full blur-[80px] opacity-20 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500 rounded-full blur-[60px] opacity-20 pointer-events-none"></div>
<div className="relative z-10">
<h4 className="text-slate-400 text-sm font-medium mb-1">Geschatte Totaalprijs</h4>
<div className="text-5xl sm:text-6xl font-serif italic text-primary-400 mb-8">
                                €<span className="font-sans not-italic font-semibold tracking-tighter" id="total-cost">1.500</span>
</div>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-4 h-4 text-primary-500" data-lucide="check-circle-2"></i>
<span>Inclusief LDPE Krimpfolie (300µ)</span>
</div>
<div className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-4 h-4 text-primary-500" data-lucide="check-circle-2"></i>
<span>Inclusief professionele montage</span>
</div>
<div className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-4 h-4 text-primary-500" data-lucide="check-circle-2"></i>
<span>Brandvertragend certificaat</span>
</div>
</div>
</div>
<button className="relative z-10 w-full py-4 bg-white text-slate-900 text-sm font-bold rounded-xl hover:bg-primary-50 transition-colors flex items-center justify-center gap-2 group">
                            Vraag Offerte Aan
                            <i className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">

<div className="relative h-[500px] w-full reveal">
<div className="absolute top-0 left-0 w-3/4 h-3/4 rounded-3xl overflow-hidden shadow-xl border border-white z-10">
<img alt="Detail shot" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute bottom-0 right-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-xl border border-white z-20">
<img alt="Detail shot" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1585713181935-d5f622cc2415?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-primary-900/10 mix-blend-multiply"></div>
</div>

<div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary-100 rounded-full blur-2xl z-0"></div>
</div>
<div className="space-y-8 reveal delay-100">
<h2 className="text-3xl font-medium tracking-tight text-slate-900">
                        Waarom kiezen voor <br/>
<span className="font-serif italic text-primary-600">ProWrap folie?</span>
</h2>
<div className="space-y-6">
<div className="flex gap-5 group">
<div className="mt-1 flex-shrink-0 w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:border-primary-200">
<i className="w-5 h-5 text-slate-700 group-hover:text-primary-500 transition-colors" data-lucide="maximize"></i>
</div>
<div>
<h4 className="text-lg font-medium text-slate-900 mb-2">Naadloze Afdichting</h4>
<p className="text-sm text-slate-500 leading-relaxed">De folie krimpt strak om elke vorm. Geen geklapper, geen scheuren, enkel een strakke huid.</p>
</div>
</div>
<div className="flex gap-5 group">
<div className="mt-1 flex-shrink-0 w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:border-primary-200">
<i className="w-5 h-5 text-slate-700 group-hover:text-primary-500 transition-colors" data-lucide="sun"></i>
</div>
<div>
<h4 className="text-lg font-medium text-slate-900 mb-2">UV &amp; Weerbestendig</h4>
<p className="text-sm text-slate-500 leading-relaxed">Tot 12 maanden UV-garantie. Bestand tegen windstoten tot 10 Bft bij juiste montage.</p>
</div>
</div>
<div className="flex gap-5 group">
<div className="mt-1 flex-shrink-0 w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:border-primary-200">
<i className="w-5 h-5 text-slate-700 group-hover:text-primary-500 transition-colors" data-lucide="leaf"></i>
</div>
<div>
<h4 className="text-lg font-medium text-slate-900 mb-2">Milieubewust</h4>
<p className="text-sm text-slate-500 leading-relaxed">Wij gebruiken uitsluitend 100% recyclebare LDPE folies en verzorgen de afvoer.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800 relative overflow-hidden" id="contact">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-primary-900/30 blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-primary-500 flex items-center justify-center rounded-lg">
<i className="text-white w-5 h-5" data-lucide="package"></i>
</div>
<span className="text-white text-lg font-semibold tracking-tight">PROWRAP</span>
</div>
<p className="text-sm leading-relaxed max-w-sm mb-8 text-slate-400">
                    Specialist in krimpfolie projecten in de Benelux. Wij leveren maatwerk bescherming voor de bouw, industrie en maritieme sector.
                </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-6 text-sm">Snel naar</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-primary-400 transition-colors" href="#">Steigerinkapseling</a></li>
<li><a className="hover:text-primary-400 transition-colors" href="#">Transportverpakking</a></li>
<li><a className="hover:text-primary-400 transition-colors" href="#">Calamiteiten</a></li>
<li><a className="hover:text-primary-400 transition-colors" href="#">Calculatie</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6 text-sm">Contact</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-center gap-3 group">
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
<i className="w-4 h-4 group-hover:text-primary-400" data-lucide="mail"></i>
</div> 
                        info@prowrap.nl
                    </li>
<li className="flex items-center gap-3 group">
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
<i className="w-4 h-4 group-hover:text-primary-400" data-lucide="phone"></i>
</div> 
                        +31 (0)10 123 4567
                    </li>
<li className="flex items-center gap-3 group">
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
<i className="w-4 h-4 group-hover:text-primary-400" data-lucide="map-pin"></i>
</div> 
                        Rotterdam, Nederland
                    </li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
<span>© 2023 ProWrap B.V.</span>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacybeleid</a>
<a className="hover:text-white transition-colors" href="#">Algemene Voorwaarden</a>
</div>
</div>
</footer>



    </>
  );
}
