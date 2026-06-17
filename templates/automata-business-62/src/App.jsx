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
display: ['Space Grotesk', 'sans-serif'],
},
colors: {
brand: {
400: '#22d3ee', // Cyan neon
500: '#0ea5e9',
600: '#0284c7',
},
accent: {
400: '#a855f7', // Purple neon
500: '#8b5cf6',
}
},
backgroundImage: {
'neon-gradient': 'linear-gradient(to right, #22d3ee, #a855f7)',
'glass': 'linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
},
animation: {
'flow': 'flow 2s linear infinite',
},
keyframes: {
flow: {
'0%': { strokeDashoffset: '24' },
'100%': { strokeDashoffset: '0' },
}
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
      

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-3 text-white">
<div className="relative w-8 h-8 flex items-center justify-center">
<div className="absolute inset-0 bg-brand-500/20 blur-lg rounded-full"></div>
<iconify-icon className="text-white relative z-10" icon="solar:infinity-bold" width="28"></iconify-icon>
</div>
<span className="font-display font-bold text-xl tracking-tight">Automata</span>
</div>
<a className="hidden md:flex items-center gap-2 text-xs font-semibold uppercase tracking-wider bg-white text-black px-5 py-2.5 rounded-full hover:bg-brand-400 hover:scale-105 transition-all duration-300" href="#contact">
                Bezpłatna Konsultacja
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</header>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[500px] bg-brand-600/10 rounded-full blur-[120px] -z-10"></div>
<div className="absolute top-20 right-0 w-[40vw] h-[400px] bg-accent-500/10 rounded-full blur-[100px] -z-10"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-500/30 bg-brand-500/5 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-400"></span>
</span>
<span className="text-xs font-medium text-brand-400 tracking-wide uppercase">Systemy Automatyzacji 2.0</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                        Zyskaj 10h tygodniowo dzięki <span className="text-gradient">automatyzacji.</span>
</h1>
<p className="text-lg text-slate-400 max-w-xl mb-10 leading-relaxed">
                        Wdrażamy gotowe systemy dla biur księgowych i działów sprzedaży, które działają w tle Twoich ulubionych aplikacji. Szybkie wdrożenie, natychmiastowy efekt.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-brand-400 transition-all flex items-center justify-center gap-2 group" href="#contact">
                            Bezpłatna konsultacja
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<button className="px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 transition-colors backdrop-blur-sm">
                            Zobacz demo
                        </button>
</div>
</div>

<div className="relative">
<div className="glass-panel rounded-2xl p-8 relative z-10 overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-400 to-accent-400"></div>

<div className="flex items-center justify-between gap-4 relative py-12">

<div className="flex flex-col items-center gap-3 relative z-10">
<div className="w-16 h-16 rounded-2xl bg-[#1e1e1e] border border-white/10 flex items-center justify-center shadow-2xl glow-point">
<iconify-icon icon="logos:google-gmail" width="32"></iconify-icon>
</div>
<span className="text-xs text-white font-mono bg-white/10 px-2 py-1 rounded">Nowy Email</span>
</div>

<div className="flex-1 h-[2px] bg-white/10 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-400 to-transparent w-1/2 animate-[shimmer_2s_infinite]"></div>
</div>

<div className="flex flex-col items-center gap-3 relative z-10">
<div className="w-20 h-20 rounded-2xl bg-[#1e1e1e] border border-brand-500/50 flex items-center justify-center shadow-[0_0_30px_-5px_rgba(34,211,238,0.3)]">
<iconify-icon className="text-brand-400 animate-spin-slow" icon="solar:settings-minimalistic-bold-duotone" width="40"></iconify-icon>
</div>
<span className="text-xs text-brand-400 font-mono font-bold">AI Engine</span>
</div>

<div className="flex-1 h-[2px] bg-white/10 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-400 to-transparent w-1/2 animate-[shimmer_2s_infinite_0.5s]"></div>
</div>

<div className="flex flex-col items-center gap-3 relative z-10">
<div className="w-16 h-16 rounded-2xl bg-[#1e1e1e] border border-white/10 flex items-center justify-center shadow-2xl">
<iconify-icon className="text-green-400" icon="solar:file-check-bold-duotone" width="32"></iconify-icon>
</div>
<span className="text-xs text-white font-mono bg-white/10 px-2 py-1 rounded">Faktura OK</span>
</div>
</div>

<div className="mt-8 p-4 rounded-lg bg-black/50 border border-white/5 font-mono text-[10px] text-slate-500 leading-relaxed">
<div className="flex gap-2"><span className="text-purple-400">if</span>(email.hasAttachment &amp;&amp; type === 'pdf') {</div>
<div className="pl-4 flex gap-2"><span className="text-brand-400">await</span> ai.extractData(attachment);</div>
<div className="pl-4 flex gap-2"><span className="text-brand-400">await</span> crm.createEntry(data);</div>
<div className="flex gap-2">} <span className="text-green-400">// Process complete </span></div>
</div>
</div>

<div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-400/20 rounded-full blur-xl"></div>
<div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent-400/20 rounded-full blur-xl"></div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-[#080808]">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
                Brzmi znajomo?
            </h2>
<div className="grid md:grid-cols-2 gap-8">

<div className="group relative p-8 rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent hover:border-red-500/30 transition-colors duration-500">
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-red-500" icon="solar:danger-circle-bold" width="24"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-6 text-red-400">
<iconify-icon icon="solar:document-add-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-white mb-3">Chaos w dokumentach</h3>
<p className="text-slate-400 leading-relaxed mb-6">
                        Zgubione faktury w mailach, ręczne przepisywanie danych do Excela, błędy w kategoryzacji kosztów. Setki godzin rocznie zmarnowane na "papierkologię", zamiast na doradztwo.
                    </p>
<div className="flex items-center gap-2 text-xs font-mono text-red-400/80">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> strata: 15h / tydzień
                    </div>
</div>

<div className="group relative p-8 rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent hover:border-orange-500/30 transition-colors duration-500">
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-orange-500" icon="solar:danger-circle-bold" width="24"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6 text-orange-400">
<iconify-icon icon="solar:smartphone-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-white mb-3">Niewolnik powiadomień</h3>
<p className="text-slate-400 leading-relaxed mb-6">
                        Ciągłe przełączanie się między Instagramem, LinkedIn a CRM. Ręczne odpisywanie na te same pytania od leadów ("Jaka cena?"). Brak czasu na strategię przez mechaniczną publikację.
                    </p>
<div className="flex items-center gap-2 text-xs font-mono text-orange-400/80">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> strata: 10h / tydzień
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-900/10 rounded-full blur-[120px] -z-10"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-brand-400 font-mono text-xs uppercase tracking-widest">Nasze Rozwiązania</span>
<h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">Dwa filary automatyzacji</h2>
</div>
<div className="grid lg:grid-cols-2 gap-8">

<div className="glass-panel p-10 rounded-3xl relative overflow-hidden hover:bg-white/[0.04] transition-all group">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-2xl rounded-full group-hover:bg-blue-500/20 transition-all"></div>
<div className="relative z-10">
<div className="flex items-center gap-4 mb-6">
<div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
<iconify-icon className="text-blue-400" icon="solar:calculator-minimalistic-bold-duotone" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-white">Biuro Księgowe 2.0</h3>
</div>
<p className="text-slate-400 mb-8 leading-relaxed h-20">
                            Zmień archaiczny obieg dokumentów w cyfrową autostradę. Automatyzujemy pobieranie faktur, OCR i wprowadzanie danych do systemu księgowego.
                        </p>
<ul className="space-y-4 border-t border-white/5 pt-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-1" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span className="text-sm text-slate-300">Automatyczny OCR i kategoryzacja kosztów</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-1" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span className="text-sm text-slate-300">Synchronizacja Saldeo / Comarch / wFirma</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-1" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span className="text-sm text-slate-300">Automatyczne monity windykacyjne</span>
</li>
</ul>
</div>
</div>

<div className="glass-panel p-10 rounded-3xl relative overflow-hidden hover:bg-white/[0.04] transition-all group">
<div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-2xl rounded-full group-hover:bg-purple-500/20 transition-all"></div>
<div className="relative z-10">
<div className="flex items-center gap-4 mb-6">
<div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
<iconify-icon className="text-purple-400" icon="solar:rocket-2-bold-duotone" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-white">Growth &amp; Social Media</h3>
</div>
<p className="text-slate-400 mb-8 leading-relaxed h-20">
                            Skaluj sprzedaż bez zatrudniania armii asystentów. Twoje leady dostają odpowiedź w 30 sekund, a content dystrybuuje się sam.
                        </p>
<ul className="space-y-4 border-t border-white/5 pt-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-purple-400 mt-1" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span className="text-sm text-slate-300">Auto-responder dla leadów i synchronizacja z CRM</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-purple-400 mt-1" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span className="text-sm text-slate-300">Cross-posting (LinkedIn, Twitter, IG) z jednego miejsca</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-purple-400 mt-1" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span className="text-sm text-slate-300">Inteligentne follow-upy sprzedażowe</span>
</li>
</ul>
</div>
</div>
</div>
<div className="mt-12 text-center">
<p className="text-sm text-slate-500 font-mono">
                    Technologia: <span className="text-white">Make.com, Zapier, OpenAI, Airtable</span>
</p>
</div>
</div>
</section>

<section className="py-24 bg-black">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">Jak to działa?</h2>
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-12 relative">

<div className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-brand-500 to-transparent opacity-30"></div>

<div className="relative flex gap-6">
<div className="w-12 h-12 rounded-full bg-[#111] border border-brand-500/30 flex items-center justify-center text-white font-bold relative z-10 shrink-0">1</div>
<div>
<h3 className="text-xl font-bold text-white mb-2">Audyt Procesu</h3>
<p className="text-slate-400 text-sm leading-relaxed">Analizujemy, gdzie tracisz czas. Mapujemy przepływ danych i identyfikujemy wąskie gardła.</p>
</div>
</div>

<div className="relative flex gap-6">
<div className="w-12 h-12 rounded-full bg-[#111] border border-brand-500/30 flex items-center justify-center text-white font-bold relative z-10 shrink-0">2</div>
<div>
<h3 className="text-xl font-bold text-white mb-2">Podpięcie "Silnika"</h3>
<p className="text-slate-400 text-sm leading-relaxed">Budujemy i wdrażamy automatyzację. Testujemy scenariusze błędów. Wszystko bez przerywania Twojej pracy.</p>
</div>
</div>

<div className="relative flex gap-6">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white font-bold relative z-10 shrink-0 shadow-[0_0_15px_rgba(34,211,238,0.5)]">3</div>
<div>
<h3 className="text-xl font-bold text-white mb-2">Ty odpoczywasz</h3>
<p className="text-slate-400 text-sm leading-relaxed">System pracuje 24/7. Otrzymujesz tylko gotowe raporty lub powiadomienia o sukcesie.</p>
</div>
</div>
</div>

<div className="relative group cursor-pointer">
<div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-accent-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
<div className="relative rounded-2xl bg-[#111] border border-white/10 aspect-video flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2670&amp;auto=format&amp;fit=crop')] bg-cover bg-center"></div>
<div className="absolute inset-0 bg-black/60"></div>
<div className="relative z-10 flex flex-col items-center gap-4">
<div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon className="text-white ml-1" icon="solar:play-bold" width="24"></iconify-icon>
</div>
<span className="text-sm font-mono text-brand-400">Zobacz demo: Faktura -&gt; Slack (30s)</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-[#0a0a0a]">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 mb-6">
<iconify-icon icon="solar:stopwatch-bold" width="18"></iconify-icon>
<span className="text-sm font-bold uppercase tracking-wide">Szybki Start</span>
</div>
<h3 className="text-2xl md:text-3xl font-bold text-white mb-4">To nie jest wdrożenie IT, które trwa miesiącami.</h3>
<p className="text-lg text-slate-400">
                Otrzymasz działający system w <span className="text-white font-bold border-b border-brand-500">5-7 dni roboczych</span>. Bez przestojów w firmie.
            </p>
</div>
</section>

<section className="py-24 relative" id="contact">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-900/10 rounded-full blur-[100px] -z-10"></div>
<div className="max-w-xl mx-auto px-6">
<div className="glass-panel rounded-2xl p-8 md:p-12">
<h2 className="text-3xl font-bold text-white mb-2 text-center">Sprawdź, co możemy uprościć</h2>
<p className="text-slate-400 text-center mb-8 text-sm">Wypełnij formularz, aby otrzymać bezpłatną wycenę i plan działania.</p>
<form className="space-y-6">
<div>
<label className="block text-xs font-mono text-slate-500 mb-2 uppercase">Imię i Nazwisko</label>
<input className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="Jan Kowalski" type="text"/>
</div>
<div>
<label className="block text-xs font-mono text-slate-500 mb-2 uppercase">Adres Email</label>
<input className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="jan@firma.pl" type="email"/>
</div>
<div>
<label className="block text-xs font-mono text-slate-500 mb-3 uppercase">W jakim obszarze tracisz najwięcej czasu?</label>
<div className="space-y-3">
<label className="flex items-center gap-3 p-3 rounded-lg border border-white/10 hover:bg-white/5 cursor-pointer transition-colors group">
<input className="w-4 h-4 text-brand-500 bg-transparent border-white/30 focus:ring-brand-500 focus:ring-offset-0" name="area" type="radio"/>
<span className="text-sm text-slate-300 group-hover:text-white">Księgowość / Obieg dokumentów</span>
</label>
<label className="flex items-center gap-3 p-3 rounded-lg border border-white/10 hover:bg-white/5 cursor-pointer transition-colors group">
<input className="w-4 h-4 text-brand-500 bg-transparent border-white/30 focus:ring-brand-500 focus:ring-offset-0" name="area" type="radio"/>
<span className="text-sm text-slate-300 group-hover:text-white">Marketing / Social Media / Sprzedaż</span>
</label>
<label className="flex items-center gap-3 p-3 rounded-lg border border-white/10 hover:bg-white/5 cursor-pointer transition-colors group">
<input className="w-4 h-4 text-brand-500 bg-transparent border-white/30 focus:ring-brand-500 focus:ring-offset-0" name="area" type="radio"/>
<span className="text-sm text-slate-300 group-hover:text-white">Inne (Opisz w wiadomości)</span>
</label>
</div>
</div>
<button className="w-full py-4 rounded-lg bg-gradient-to-r from-brand-500 to-accent-500 text-white font-bold hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-shadow" type="button">
                        Wyślij zgłoszenie
                    </button>
<p className="text-xs text-center text-slate-600 mt-4">
                        Twoje dane są bezpieczne. Odpowiadamy w max 24h.
                    </p>
</form>
</div>
</div>
</section>
<footer className="border-t border-white/5 bg-[#020202] py-12 text-center text-slate-600 text-sm">
<p>© 2024 Automata. All rights reserved.</p>
</footer>

    </>
  );
}
