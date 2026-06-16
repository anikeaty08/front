import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
chilli: {
50: '#FFF1F2',
100: '#FFE4E6',
500: '#E11D48', /* Rose 600 base */
600: '#BE123C',
900: '#881337',
}
},
animation: {
blob: "blob 10s infinite",
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
},
keyframes: {
blob: {
"0%": { transform: "translate(0px, 0px) scale(1)" },
"33%": { transform: "translate(30px, -50px) scale(1.1)" },
"66%": { transform: "translate(-20px, 20px) scale(0.9)" },
"100%": { transform: "translate(0px, 0px) scale(1)" }
},
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">

<div className="absolute top-0 -left-4 w-96 h-96 bg-chilli-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>

<div className="absolute top-0 -right-4 w-96 h-96 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

<div className="absolute -bottom-32 left-20 w-96 h-96 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50 supports-[backdrop-filter]:bg-white/60">
<div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">

<div className="relative w-12 h-12 overflow-hidden rounded-full border border-slate-100 shadow-sm bg-white group-hover:border-chilli-200 transition-colors">

<img alt="Studio Chilli Logo" className="w-full h-full object-cover p-0.5" onerror="this.src='https://ui-avatars.com/api/?name=SC&amp;background=fff&amp;color=E11D48&amp;size=128&amp;fontSize=0.4'" src="logo.jpg"/>
</div>
<div className="flex flex-col">
<span className="font-bold tracking-tight text-lg leading-none text-slate-900">STUDIO CHILLI</span>
<span className="text-[10px] font-medium text-chilli-600 tracking-wider uppercase">Zdraví &amp; Krása</span>
</div>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-chilli-600 hover:bg-chilli-50/50 px-3 py-1.5 rounded-lg transition-all" href="#sluzby">Služby</a>
<a className="hover:text-chilli-600 hover:bg-chilli-50/50 px-3 py-1.5 rounded-lg transition-all" href="#cenik">Ceník</a>
<a className="hover:text-chilli-600 hover:bg-chilli-50/50 px-3 py-1.5 rounded-lg transition-all" href="#kontakt">Kontakt</a>
</div>
<a className="bg-slate-900 text-white pl-4 pr-5 py-2.5 rounded-full text-xs font-medium hover:bg-chilli-600 hover:shadow-lg hover:shadow-chilli-500/20 transition-all flex items-center gap-2 group" href="tel:603269479">
<i className="w-3.5 h-3.5 group-hover:animate-pulse" data-lucide="phone"></i>
<span>Objednat se</span>
</a>
</div>
</nav>

<section className="pt-40 pb-20 px-6">
<div className="max-w-3xl mx-auto text-center animate-enter">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-chilli-100 bg-white/50 backdrop-blur-sm mb-8 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-chilli-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-chilli-500"></span>
</span>
<span className="text-xs font-semibold text-chilli-900 tracking-wide">Brno - Královo Pole</span>
</div>
<h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                Studio <span className="text-gradient">zdraví,</span> <br className="hidden md:block"/>
<span className="text-gradient">krásy</span> a <span className="text-gradient">stylu.</span>
</h1>
<p className="text-lg md:text-xl text-slate-600 max-w-xl mx-auto mb-12 leading-relaxed">
                Profesionální péče v příjemném prostředí. 
                <span className="text-slate-900 font-medium">Manikúra</span>, 
                <span className="text-slate-900 font-medium">kosmetika</span> a 
                <span className="text-slate-900 font-medium">masáže</span> na jednom místě.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-white/80 border border-slate-200 rounded-full text-sm font-semibold text-slate-700 hover:border-chilli-200 hover:text-chilli-600 hover:bg-white transition-all shadow-sm backdrop-blur-sm" href="#sluzby">
                    Zobrazit služby
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-chilli-600 text-white rounded-full text-sm font-semibold hover:bg-chilli-700 hover:shadow-xl hover:shadow-chilli-500/20 hover:-translate-y-0.5 transition-all shadow-md flex items-center justify-center gap-2" href="tel:603269479">
<i className="w-4 h-4" data-lucide="phone-call"></i>
<span>Zavolat 603 269 479</span>
</a>
</div>
</div>
</section>

<section className="py-20 px-6" id="sluzby">
<div className="max-w-5xl mx-auto">
<div className="flex items-end justify-between mb-10 border-b border-slate-200/60 pb-6">
<div>
<h2 className="text-2xl font-bold tracking-tight text-slate-900">Naše služby</h2>
<p className="text-slate-500 mt-1 text-sm">Vše co potřebujete pro svůj vzhled</p>
</div>
<div className="hidden sm:block">
<span className="text-xs font-bold text-chilli-600 uppercase tracking-widest bg-chilli-50 px-2 py-1 rounded">Komplexní péče</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 bg-white/60 backdrop-blur-md rounded-3xl border border-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(225,29,72,0.1)] hover:border-chilli-100 transition-all duration-300 animate-enter delay-100 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-chilli-50 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-chilli-500 mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
<i className="w-6 h-6" data-lucide="sparkles"></i>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-chilli-600 transition-colors">Manikúra &amp; Nehty</h3>
<p className="text-sm text-slate-600 leading-relaxed">Kompletní péče o ruce, modeláž nehtů UV gelem i akrylem, P-shine a parafínové zábaly.</p>
</div>

<div className="group p-8 bg-white/60 backdrop-blur-md rounded-3xl border border-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(225,29,72,0.1)] hover:border-chilli-100 transition-all duration-300 animate-enter delay-200 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-50 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-purple-500 mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
<i className="w-6 h-6" data-lucide="smile"></i>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">Kosmetika</h3>
<p className="text-sm text-slate-600 leading-relaxed">Úprava a barvení obočí, hloubkové čištění pleti, masky a profesionální líčení.</p>
</div>

<div className="group p-8 bg-white/60 backdrop-blur-md rounded-3xl border border-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(225,29,72,0.1)] hover:border-chilli-100 transition-all duration-300 animate-enter delay-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-50 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-emerald-500 mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
<i className="w-6 h-6" data-lucide="flower-2"></i>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">Epilace &amp; Masáže</h3>
<p className="text-sm text-slate-600 leading-relaxed">Šetrná epilace celého těla a relaxační masáže pro uvolnění stresu a regeneraci.</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-white/50 backdrop-blur-sm border-y border-white" id="cenik">
<div className="max-w-5xl mx-auto">
<h2 className="text-2xl font-bold tracking-tight mb-12 text-gradient-subtle inline-block">Ceník služeb</h2>
<div className="grid md:grid-cols-2 gap-x-16 gap-y-12">

<div className="animate-enter">
<div className="flex items-center gap-3 mb-8 text-chilli-600 bg-chilli-50/50 p-3 rounded-xl w-fit">
<i className="w-5 h-5" data-lucide="sparkles"></i>
<h3 className="font-semibold">Manikúra a modeláž</h3>
</div>
<div className="space-y-1">

<div className="flex justify-between items-center py-3 px-3 rounded-lg hover:bg-slate-50 transition-colors group">
<span className="text-sm text-slate-600 group-hover:text-slate-900 font-medium">Klasická manikúra</span>
<span className="text-sm font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded group-hover:bg-white group-hover:shadow-sm transition-all">150 Kč</span>
</div>
<div className="flex justify-between items-center py-3 px-3 rounded-lg hover:bg-slate-50 transition-colors group">
<span className="text-sm text-slate-600 group-hover:text-slate-900 font-medium">Japonská manikúra P-shine</span>
<span className="text-sm font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded group-hover:bg-white group-hover:shadow-sm transition-all">200 Kč</span>
</div>
<div className="flex justify-between items-center py-3 px-3 rounded-lg hover:bg-slate-50 transition-colors group">
<span className="text-sm text-slate-600 group-hover:text-slate-900 font-medium">Nová modeláž UV gelem</span>
<span className="text-sm font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded group-hover:bg-white group-hover:shadow-sm transition-all">500 Kč</span>
</div>
<div className="flex justify-between items-center py-3 px-3 rounded-lg hover:bg-slate-50 transition-colors group">
<span className="text-sm text-slate-600 group-hover:text-slate-900 font-medium">Nová modeláž akrylem</span>
<span className="text-sm font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded group-hover:bg-white group-hover:shadow-sm transition-all">600 Kč</span>
</div>
<div className="flex justify-between items-center py-3 px-3 rounded-lg hover:bg-slate-50 transition-colors group">
<span className="text-sm text-slate-600 group-hover:text-slate-900 font-medium">Doplnění nehtů</span>
<span className="text-sm font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded group-hover:bg-white group-hover:shadow-sm transition-all">400 Kč</span>
</div>
<div className="flex justify-between items-center py-3 px-3 rounded-lg hover:bg-slate-50 transition-colors group">
<span className="text-sm text-slate-600 group-hover:text-slate-900 font-medium">Gel-lak vč. zdobení</span>
<span className="text-sm font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded group-hover:bg-white group-hover:shadow-sm transition-all">280 Kč</span>
</div>
<div className="flex justify-between items-center py-3 px-3 rounded-lg hover:bg-slate-50 transition-colors group">
<span className="text-sm text-slate-600 group-hover:text-slate-900 font-medium">Odstranění gelových nehtů</span>
<span className="text-sm font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded group-hover:bg-white group-hover:shadow-sm transition-all">200 Kč</span>
</div>
</div>
</div>

<div className="animate-enter delay-100">

<div className="mb-12">
<div className="flex items-center gap-3 mb-8 text-purple-600 bg-purple-50/50 p-3 rounded-xl w-fit">
<i className="w-5 h-5" data-lucide="scan-face"></i>
<h3 className="font-semibold">Kosmetika</h3>
</div>
<div className="space-y-1">
<div className="flex justify-between items-center py-3 px-3 rounded-lg hover:bg-slate-50 transition-colors group">
<span className="text-sm text-slate-600 group-hover:text-slate-900 font-medium">Úprava / Barvení obočí</span>
<span className="text-sm font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded group-hover:bg-white group-hover:shadow-sm transition-all">od 50 Kč</span>
</div>
<div className="flex justify-between items-center py-3 px-3 rounded-lg hover:bg-slate-50 transition-colors group">
<span className="text-sm text-slate-600 group-hover:text-slate-900 font-medium">Hloubkové čištění</span>
<span className="text-sm font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded group-hover:bg-white group-hover:shadow-sm transition-all">od 100 Kč</span>
</div>
<div className="flex justify-between items-center py-3 px-3 rounded-lg hover:bg-slate-50 transition-colors group">
<span className="text-sm text-slate-600 group-hover:text-slate-900 font-medium">Vizážistka - typologie</span>
<span className="text-sm font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded group-hover:bg-white group-hover:shadow-sm transition-all">od 800 Kč</span>
</div>
</div>
</div>

<div>
<div className="flex items-center gap-3 mb-8 text-emerald-600 bg-emerald-50/50 p-3 rounded-xl w-fit">
<i className="w-5 h-5" data-lucide="leaf"></i>
<h3 className="font-semibold">Epilace &amp; Masáže</h3>
</div>
<div className="space-y-1">
<div className="flex justify-between items-center py-3 px-3 rounded-lg hover:bg-slate-50 transition-colors group">
<span className="text-sm text-slate-600 group-hover:text-slate-900 font-medium">Epilace lýtka / celé nohy</span>
<span className="text-sm font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded group-hover:bg-white group-hover:shadow-sm transition-all">220 / 330 Kč</span>
</div>
<div className="flex justify-between items-center py-3 px-3 rounded-lg hover:bg-slate-50 transition-colors group">
<span className="text-sm text-slate-600 group-hover:text-slate-900 font-medium">Masáž (30 min / 60 min)</span>
<span className="text-sm font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded group-hover:bg-white group-hover:shadow-sm transition-all">170 / 400 Kč</span>
</div>
<div className="flex justify-between items-center py-3 px-3 rounded-lg hover:bg-slate-50 transition-colors group">
<span className="text-sm text-slate-600 group-hover:text-slate-900 font-medium">Mokrá pedikúra</span>
<span className="text-sm font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded group-hover:bg-white group-hover:shadow-sm transition-all">od 200 Kč</span>
</div>
</div>
</div>
</div>
</div>
<p className="text-[10px] text-slate-400 mt-12 text-center uppercase tracking-widest font-medium">Ceny jsou orientační</p>
</div>
</section>

<section className="py-20 px-6" id="kontakt">
<div className="max-w-5xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.04)] animate-enter relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-chilli-500 to-purple-500"></div>
<h2 className="text-2xl font-bold tracking-tight mb-8 text-slate-900">Kontakt</h2>
<div className="space-y-8">
<div className="flex gap-5 group">
<div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0 text-slate-500 group-hover:bg-chilli-50 group-hover:text-chilli-600 group-hover:border-chilli-100 transition-all duration-300">
<i className="w-5 h-5" data-lucide="map-pin"></i>
</div>
<div>
<p className="text-sm font-semibold text-slate-900 mb-1">Adresa studia</p>
<p className="text-sm text-slate-500 leading-relaxed">Srbská 53<br/>612 00 Brno-Královo Pole</p>
</div>
</div>
<div className="flex gap-5 group">
<div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0 text-slate-500 group-hover:bg-chilli-50 group-hover:text-chilli-600 group-hover:border-chilli-100 transition-all duration-300">
<i className="w-5 h-5" data-lucide="phone"></i>
</div>
<div>
<p className="text-sm font-semibold text-slate-900 mb-1">Rezervace</p>
<a className="text-lg font-bold text-chilli-600 hover:text-chilli-700 hover:underline decoration-2 underline-offset-4 transition-colors" href="tel:603269479">603 269 479</a>
</div>
</div>
<div className="flex gap-5 group">
<div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0 text-slate-500 group-hover:bg-chilli-50 group-hover:text-chilli-600 group-hover:border-chilli-100 transition-all duration-300">
<i className="w-5 h-5" data-lucide="file-check"></i>
</div>
<div>
<p className="text-sm font-semibold text-slate-900 mb-1">Fakturační údaje</p>
<p className="text-sm text-slate-500 leading-relaxed">Plotní 12/39, 602 00 Brno<br/>IČ: 60524367</p>
</div>
</div>
</div>
<div className="mt-10 pt-8 border-t border-slate-100 grid grid-cols-2 gap-4">
<div className="bg-slate-50/80 p-4 rounded-xl text-center border border-slate-100">
<p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">MHD</p>
<p className="text-xs text-slate-500">Trolejbus 32, Tram 12</p>
</div>
<div className="bg-slate-50/80 p-4 rounded-xl text-center border border-slate-100">
<p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">Parkování</p>
<p className="text-xs text-slate-500">Přímo před studiem</p>
</div>
</div>
</div>

<div className="bg-white rounded-3xl border border-white shadow-[0_8px_30px_-4px_rgba(0,0,0,0.04)] overflow-hidden relative min-h-[400px] flex items-center justify-center animate-enter delay-100 group">

<div className="absolute inset-0 bg-slate-50"></div>
<div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

<div className="absolute w-64 h-64 border border-chilli-100 rounded-full animate-[spin_10s_linear_infinite] opacity-30"></div>
<div className="absolute w-48 h-48 border border-slate-200 rounded-full animate-[spin_15s_linear_infinite_reverse] opacity-40"></div>
<div className="text-center relative z-10 p-8 bg-white/90 backdrop-blur rounded-2xl border border-slate-100 shadow-lg max-w-xs mx-auto transform transition-all group-hover:scale-105">
<div className="w-16 h-16 bg-chilli-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-chilli-600">
<i className="w-8 h-8" data-lucide="map"></i>
</div>
<p className="text-base font-bold text-slate-900">Mapa oblasti</p>
<p className="text-xs text-slate-500 mb-6 mt-1">Brno - Královo Pole, Srbská 53</p>
<a className="inline-flex items-center gap-2 text-xs font-bold bg-slate-900 text-white px-5 py-2.5 rounded-lg hover:bg-chilli-600 transition-colors" href="https://maps.google.com/?q=Studio+Chilli+Brno" target="_blank">
                            Otevřít navigaci
                            <i className="w-3 h-3" data-lucide="external-link"></i>
</a>
</div>
</div>
</div>
</div>
</section>
<footer className="max-w-5xl mx-auto px-6 pt-12 text-center pb-8">
<div className="flex justify-center items-center gap-2 mb-4 opacity-50">
<span className="w-1 h-1 rounded-full bg-slate-400"></span>
<span className="w-1 h-1 rounded-full bg-slate-400"></span>
<span className="w-1 h-1 rounded-full bg-slate-400"></span>
</div>
<p className="text-xs font-medium text-slate-400">© Studio Chilli. Všechna práva vyhrazena.</p>
</footer>


    </>
  );
}
