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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
slate: {
25: '#FCFCFD',
50: '#F8F9FA',
100: '#F1F3F5',
200: '#E9ECEF',
300: '#DEE2E6',
400: '#CED4DA',
500: '#ADB5BD',
600: '#868E96',
700: '#495057',
800: '#343A40',
900: '#212529',
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
      

<aside className="w-full md:w-64 bg-white border-b md:border-b-0 md:border-r border-slate-200 flex flex-col justify-between shrink-0 z-20">
<div>

<div className="h-16 flex items-center px-6 border-b border-slate-100 md:border-none">
<span className="text-sm font-semibold tracking-tighter text-slate-900 uppercase">ATELIER.</span>
</div>

<nav className="px-3 py-6 space-y-1">
<div className="px-3 py-2 flex items-center gap-3 text-slate-400">
<span className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-100 text-[10px] font-medium text-slate-500">
<span className="iconify" data-icon="lucide:check" data-width="12"></span>
</span>
<span className="text-sm font-medium line-through decoration-slate-300">Projekt Basis</span>
</div>
<div className="px-3 py-2 flex items-center gap-3 text-slate-900 bg-slate-50 rounded-lg">
<span className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-medium shadow-sm">2</span>
<span className="text-sm font-medium">Design &amp; Ästhetik</span>
</div>
<div className="px-3 py-2 flex items-center gap-3 text-slate-500 hover:text-slate-700 transition-colors cursor-not-allowed opacity-60">
<span className="flex items-center justify-center w-5 h-5 rounded-full border border-slate-200 text-[10px] font-medium">3</span>
<span className="text-sm font-medium">Inhalt &amp; Struktur</span>
</div>
<div className="px-3 py-2 flex items-center gap-3 text-slate-500 hover:text-slate-700 transition-colors cursor-not-allowed opacity-60">
<span className="flex items-center justify-center w-5 h-5 rounded-full border border-slate-200 text-[10px] font-medium">4</span>
<span className="text-sm font-medium">Technik</span>
</div>
</nav>
</div>

<div className="p-6 border-t border-slate-100 hidden md:block">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
<span className="iconify" data-icon="lucide:help-circle" data-width="16"></span>
</div>
<div>
<p className="text-xs font-medium text-slate-900">Hilfe benötigt?</p>
<p className="text-xs text-slate-500">support@atelier.ch</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto no-scrollbar relative bg-slate-25">
<div className="max-w-3xl mx-auto px-6 py-12 md:py-16">

<header className="mb-12">
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-600 mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Projekt ID: #CHE-2940
                </div>
<h1 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-3">Visuelle Ausrichtung</h1>
<p className="text-slate-500 text-base md:text-lg font-light leading-relaxed max-w-2xl">
                    Um Ihre Marke digital präzise abzubilden, benötigen wir ein Verständnis Ihrer ästhetischen Präferenzen. Bitte nehmen Sie sich einen Moment Zeit für diese Auswahl.
                </p>
</header>

<form className="space-y-12" onsubmit="event.preventDefault();">

<section className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
<div className="flex items-center gap-3 mb-6">
<span className="iconify text-slate-400" data-icon="lucide:sliders-horizontal" data-width="20"></span>
<h2 className="text-base font-medium text-slate-900">Stil-Polarität</h2>
</div>
<div className="space-y-8">

<div className="relative">
<div className="flex justify-between text-xs font-medium text-slate-500 mb-3 uppercase tracking-wider">
<span>Minimalistisch</span>
<span>Expressiv</span>
</div>
<input className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer" max="100" min="1" type="range" value="30"/>
<div className="mt-2 flex justify-between text-xs text-slate-400">
<span>Weniger ist mehr</span>
<span>Visuell reichhaltig</span>
</div>
</div>

<div className="relative border-t border-slate-100 pt-8">
<div className="flex justify-between text-xs font-medium text-slate-500 mb-3 uppercase tracking-wider">
<span>Klassisch / Seriös</span>
<span>Modern / Verspielt</span>
</div>
<input className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer" max="100" min="1" type="range" value="65"/>
</div>
</div>
</section>

<section className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
<div className="flex items-center gap-3 mb-6">
<span className="iconify text-slate-400" data-icon="lucide:palette" data-width="20"></span>
<h2 className="text-base font-medium text-slate-900">Farbwelt</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<label className="group relative cursor-pointer">
<input className="peer sr-only" name="color_theme" type="radio"/>
<div className="p-4 rounded-lg border border-slate-200 bg-white hover:border-slate-300 transition-all peer-checked:ring-2 peer-checked:ring-slate-900 peer-checked:border-transparent">
<div className="flex gap-2 mb-3">
<div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-100"></div>
<div className="w-8 h-8 rounded-full bg-white border border-slate-200"></div>
<div className="w-8 h-8 rounded-full bg-slate-200 border border-slate-100"></div>
</div>
<span className="block text-sm font-medium text-slate-900">Monochrom</span>
<span className="block text-xs text-slate-500 mt-1">Stark, zeitlos, Fokus auf Typografie.</span>
</div>
<div className="absolute top-4 right-4 text-slate-900 opacity-0 peer-checked:opacity-100 transition-opacity">
<span className="iconify" data-icon="lucide:check-circle-2" data-width="18"></span>
</div>
</label>

<label className="group relative cursor-pointer">
<input className="peer sr-only" name="color_theme" type="radio"/>
<div className="p-4 rounded-lg border border-slate-200 bg-white hover:border-slate-300 transition-all peer-checked:ring-2 peer-checked:ring-slate-900 peer-checked:border-transparent">
<div className="flex gap-2 mb-3">
<div className="w-8 h-8 rounded-full bg-[#0F172A] border border-slate-100"></div>
<div className="w-8 h-8 rounded-full bg-[#3B82F6] border border-slate-100"></div>
<div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200"></div>
</div>
<span className="block text-sm font-medium text-slate-900">Tech &amp; Trust</span>
<span className="block text-xs text-slate-500 mt-1">Blautöne, Weißraum, Seriosität.</span>
</div>
<div className="absolute top-4 right-4 text-slate-900 opacity-0 peer-checked:opacity-100 transition-opacity">
<span className="iconify" data-icon="lucide:check-circle-2" data-width="18"></span>
</div>
</label>

<label className="group relative cursor-pointer">
<input className="peer sr-only" name="color_theme" type="radio"/>
<div className="p-4 rounded-lg border border-slate-200 bg-white hover:border-slate-300 transition-all peer-checked:ring-2 peer-checked:ring-slate-900 peer-checked:border-transparent">
<div className="flex gap-2 mb-3">
<div className="w-8 h-8 rounded-full bg-[#292524] border border-slate-100"></div>
<div className="w-8 h-8 rounded-full bg-[#D6D3D1] border border-slate-100"></div>
<div className="w-8 h-8 rounded-full bg-[#F5F5F4] border border-slate-200"></div>
</div>
<span className="block text-sm font-medium text-slate-900">Organisch</span>
<span className="block text-xs text-slate-500 mt-1">Erdtöne, warm, nahbar.</span>
</div>
<div className="absolute top-4 right-4 text-slate-900 opacity-0 peer-checked:opacity-100 transition-opacity">
<span className="iconify" data-icon="lucide:check-circle-2" data-width="18"></span>
</div>
</label>
</div>
<div className="mt-6 pt-6 border-t border-slate-100">
<label className="flex items-start gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border border-slate-300 rounded bg-white peer-checked:bg-slate-900 peer-checked:border-slate-900 transition-colors"></div>
<span className="iconify absolute left-0.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" data-icon="lucide:check" data-width="16"></span>
</div>
<div className="text-sm">
<span className="font-medium text-slate-900">Vorhandenes Corporate Design nutzen</span>
<p className="text-slate-500 text-xs mt-0.5">Wir verwenden Ihre bestehenden Markenrichtlinien (Upload im nächsten Schritt).</p>
</div>
</label>
</div>
</section>

<section className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
<div className="flex items-center gap-3 mb-6">
<span className="iconify text-slate-400" data-icon="lucide:globe" data-width="20"></span>
<h2 className="text-base font-medium text-slate-900">Referenzen</h2>
</div>
<div className="space-y-4">
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Websites, die Ihnen gefallen</label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="iconify text-slate-400" data-icon="lucide:link" data-width="16"></span>
</div>
<input className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-lg text-sm bg-slate-50 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-1 focus:bg-white transition-all" placeholder="z.B. https://stripe.com" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Was gefällt Ihnen daran besonders?</label>
<textarea className="block w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm bg-slate-50 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-1 focus:bg-white transition-all resize-none" placeholder="z.B. Die klare Typografie und die subtilen Animationen..." rows="3"></textarea>
</div>
</div>
</section>
</form>

<div className="mt-12 flex items-center justify-between pt-6 border-t border-slate-200">
<button className="group flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-all" type="button">
<span className="iconify group-hover:-translate-x-0.5 transition-transform" data-icon="lucide:arrow-left" data-width="16"></span>
                    Zurück
                </button>
<div className="flex items-center gap-4">
<span className="hidden sm:block text-xs text-slate-400">Automatisch gespeichert</span>
<button className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-slate-900 text-white text-sm font-medium shadow-sm hover:bg-slate-800 hover:shadow-md transition-all focus:ring-2 focus:ring-offset-2 focus:ring-slate-900" type="button">
                        Weiter zu Inhalt
                        <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</div>

<div className="mt-16 text-center">
<p className="text-xs text-slate-400 font-medium tracking-wide uppercase">Atelier Zürich</p>
</div>
</div>
</main>

    </>
  );
}
