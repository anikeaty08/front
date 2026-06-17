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
sans: ['Inter', 'system-ui', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
cow: {
black: '#050505',
white: '#ffffff',
offwhite: '#fafafa',
gray: '#f4f4f5',
}
},
borderRadius: {
'blob': '60% 40% 30% 70% / 60% 30% 70% 40%',
'blob-2': '30% 70% 70% 30% / 30% 30% 70% 70%',
},
animation: {
'float': 'float 10s ease-in-out infinite',
'float-delayed': 'float 12s ease-in-out infinite reverse',
'marquee': 'marquee 25s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
'33%': { transform: 'translate(10px, -20px) rotate(2deg)' },
'66%': { transform: 'translate(-10px, 10px) rotate(-1deg)' },
},
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
}
}
}
}
}



        // Simple Scroll Reveal Script
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
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
      

<div className="noise-bg"></div>

<div className="cow-spot w-[40vw] h-[40vw] -top-20 -left-20 animate-float"></div>
<div className="cow-spot w-[30vw] h-[30vw] top-40 -right-20 animate-float-delayed"></div>

<nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-black/5 px-6 py-4 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-black rounded-blob animate-pulse"></div>
<span className="text-sm font-semibold tracking-tight">AUTOMATION COWS</span>
</div>
<a className="hidden md:block text-xs font-medium uppercase tracking-widest border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors" href="#audit">
            Umów Audyt
        </a>
</nav>

<header className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 relative max-w-7xl mx-auto">
<div className="w-full max-w-4xl">

<div className="inline-flex items-center gap-2 border border-black/10 rounded-full px-3 py-1 mb-8 reveal bg-white">
<span className="w-2 h-2 rounded-full bg-black"></span>
<span className="text-xs font-medium text-neutral-600">Agents v1.0 Live</span>
</div>

<h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter leading-[0.9] mb-8 text-black reveal delay-100">
                AUTOMATION <br/>
<span className="relative inline-block">
                    COWS
                    
<svg className="absolute -top-4 -right-8 w-12 h-12 text-black opacity-10" fill="currentColor" viewbox="0 0 100 100"><path d="M30,50 Q20,20 50,30 T80,50 T50,80 T30,50 Z"></path></svg>
</span>
</h1>
<p className="text-2xl md:text-4xl font-light tracking-tight text-neutral-500 mb-6 reveal delay-150">
                AI agents that do the dirty work.
            </p>

<div className="grid md:grid-cols-2 gap-12 items-start mt-12 border-t border-black/10 pt-12 reveal delay-200">
<div>
<h2 className="text-lg md:text-xl font-normal leading-relaxed">
                        Tworzymy autonomicznych agentów AI, którzy automatyzują rzeczywiste procesy biznesowe — w pełni zintegrowanych z Twoimi systemami.
                    </h2>
</div>
<div className="space-y-4">
<ul className="space-y-3">
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 flex-shrink-0" icon="lucide:check"></iconify-icon>
<span className="text-sm text-neutral-600">Zastąp ręczne procesy agentami AI</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 flex-shrink-0" icon="lucide:check"></iconify-icon>
<span className="text-sm text-neutral-600">Podłącz AI bezpośrednio do swoich narzędzi i API</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 flex-shrink-0" icon="lucide:check"></iconify-icon>
<span className="text-sm text-neutral-600">Oszczędzaj czas, zmniejszaj koszty, skaluj działania</span>
</li>
</ul>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3 text-sm font-medium tracking-wide hover:bg-neutral-800 transition-colors w-full sm:w-auto" href="#audit">
                            👉 Umów darmowy audyt
                        </a>
<a className="inline-flex items-center justify-center gap-2 border border-black/20 text-black px-6 py-3 text-sm font-medium tracking-wide hover:border-black transition-colors w-full sm:w-auto" href="#how">
                            Zobacz jak to działa ↓
                        </a>
</div>
</div>
</div>
</div>
</header>

<section className="border-y border-black/10 bg-neutral-50 py-4 overflow-hidden">
<div className="relative flex overflow-x-hidden group">
<div className="animate-marquee whitespace-nowrap flex gap-16 items-center">

<span className="text-xs uppercase tracking-widest font-medium text-neutral-400">Tworzone przez inżynierów</span>
<span className="text-black text-xl">•</span>
<span className="text-xs uppercase tracking-widest font-medium text-neutral-400">Integracje API</span>
<span className="text-black text-xl">•</span>
<span className="text-xs uppercase tracking-widest font-medium text-neutral-400">Logika biznesowa</span>
<span className="text-black text-xl">•</span>
<span className="text-xs uppercase tracking-widest font-medium text-neutral-400">Bezpieczne i skalowalne</span>
<span className="text-black text-xl">•</span>
<span className="text-xs uppercase tracking-widest font-medium text-neutral-400">Nastawione na ROI</span>
<span className="text-black text-xl">•</span>
<span className="text-xs uppercase tracking-widest font-medium text-neutral-400">Tworzone przez inżynierów</span>
<span className="text-black text-xl">•</span>
<span className="text-xs uppercase tracking-widest font-medium text-neutral-400">Integracje API</span>
<span className="text-black text-xl">•</span>
<span className="text-xs uppercase tracking-widest font-medium text-neutral-400">Logika biznesowa</span>
<span className="text-black text-xl">•</span>
<span className="text-xs uppercase tracking-widest font-medium text-neutral-400">Bezpieczne i skalowalne</span>
<span className="text-black text-xl">•</span>
<span className="text-xs uppercase tracking-widest font-medium text-neutral-400">Nastawione na ROI</span>
</div>
</div>
</section>

<section className="section-dark py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">

<div className="cow-spot top-10 right-10 w-64 h-64"></div>
<div className="cow-spot bottom-10 left-10 w-48 h-48"></div>
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
<div className="reveal">
<h2 className="text-4xl md:text-6xl font-medium tracking-tighter leading-none mb-8">
                    Większość firm nie potrzebuje kolejnego AI.<br/>
<span className="text-neutral-500">Potrzebują mniej ręcznej pracy.</span>
</h2>
</div>
<div className="reveal delay-100">
<p className="text-lg text-neutral-400 mb-8 leading-relaxed">
                    Narzędzia AI są wszędzie, ale większość z nich nic nie robi. Zespoły wciąż marnują czas na ręczne procesy, dane są rozproszone, a systemy niepołączone.
                </p>
<div className="space-y-6">
<div className="flex gap-4 items-start border-l border-neutral-800 pl-4">
<iconify-icon className="text-white shrink-0" icon="lucide:clock" width="24"></iconify-icon>
<div>
<h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-1">Strata czasu</h4>
<p className="text-sm text-neutral-500">Ręczna, powtarzalna praca pochłaniająca czas zespołu.</p>
</div>
</div>
<div className="flex gap-4 items-start border-l border-neutral-800 pl-4">
<iconify-icon className="text-white shrink-0" icon="lucide:database" width="24"></iconify-icon>
<div>
<h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-1">Chaos w danych</h4>
<p className="text-sm text-neutral-500">Dane rozproszone w wielu systemach bez synchronizacji.</p>
</div>
</div>
<div className="flex gap-4 items-start border-l border-neutral-800 pl-4">
<iconify-icon className="text-white shrink-0" icon="lucide:message-square-off" width="24"></iconify-icon>
<div>
<h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-1">Gadatliwe Boty</h4>
<p className="text-sm text-neutral-500">Chatboty, które potrafią gadać — ale nie potrafią działać.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 bg-white relative">
<div className="max-w-7xl mx-auto">
<div className="mb-16 reveal">
<h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-6">
                    Nie tworzymy chatbotów.<br/>
<span className="underline decoration-4 decoration-black underline-offset-4">Tworzymy agentów AI, którzy działają.</span>
</h2>
<p className="text-xl text-neutral-600 max-w-2xl">
                    Automation Cows buduje autonomicznych agentów AI, którzy wykonują konkretne zadania biznesowe — bezpośrednio w Twoich systemach.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-12 items-center">

<div className="space-y-6 reveal delay-100">
<div className="flex items-center gap-4 group">
<div className="cow-check group-hover:bg-neutral-800 transition-colors">
<iconify-icon icon="lucide:check" width="14"></iconify-icon>
</div>
<span className="text-lg font-medium">Integracja z CRM, ERP, bazami danych i API</span>
</div>
<div className="flex items-center gap-4 group">
<div className="cow-check group-hover:bg-neutral-800 transition-colors">
<iconify-icon icon="lucide:check" width="14"></iconify-icon>
</div>
<span className="text-lg font-medium">Realizacja logiki biznesowej i reguł</span>
</div>
<div className="flex items-center gap-4 group">
<div className="cow-check group-hover:bg-neutral-800 transition-colors">
<iconify-icon icon="lucide:check" width="14"></iconify-icon>
</div>
<span className="text-lg font-medium">Praca 24/7 bez nadzoru</span>
</div>
<div className="flex items-center gap-4 group">
<div className="cow-check group-hover:bg-neutral-800 transition-colors">
<iconify-icon icon="lucide:check" width="14"></iconify-icon>
</div>
<span className="text-lg font-medium">Eskalacja do ludzi tylko wtedy, gdy potrzeba</span>
</div>
<div className="mt-8 p-6 bg-neutral-50 border border-black/5 rounded-lg">
<p className="text-sm font-medium tracking-wide">To AI jako zespół pracujący w firmie, a nie zabawka.</p>
</div>
</div>

<div className="relative h-full min-h-[400px] bg-neutral-100 rounded-2xl overflow-hidden border border-black/5 reveal delay-200 flex items-center justify-center p-8">

<div className="grid grid-cols-2 gap-4 w-full max-w-sm opacity-80">
<div className="aspect-square bg-white border border-black/10 rounded-lg p-4 flex flex-col justify-between hover:border-black transition-colors duration-500">
<iconify-icon icon="lucide:webhook" width="32"></iconify-icon>
<span className="text-xs font-mono">POST /api/order</span>
</div>
<div className="aspect-square bg-black text-white rounded-lg p-4 flex flex-col justify-between">
<iconify-icon icon="lucide:cpu" width="32"></iconify-icon>
<span className="text-xs font-mono">Processing...</span>
</div>
<div className="col-span-2 bg-white border border-black/10 rounded-lg p-4 flex items-center justify-between hover:border-black transition-colors duration-500">
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
<span className="text-sm font-medium">Task Completed</span>
</div>
<iconify-icon icon="lucide:check-circle" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-neutral-50 border-y border-black/5">
<div className="max-w-4xl mx-auto text-center reveal">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-8">Czym jest agent AI?</h2>
<p className="text-xl text-neutral-600 mb-12">
                Agent AI to cyfrowy pracownik, który potrafi:
            </p>
<div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-left">
<div className="bg-white p-6 border border-black/5 rounded-xl hover:border-black transition-colors group">
<iconify-icon className="mb-4 text-neutral-400 group-hover:text-black transition-colors" icon="lucide:brain-circuit" width="24"></iconify-icon>
<h3 className="font-medium mb-2">Rozumieć</h3>
<p className="text-sm text-neutral-500">Kontekst i cele biznesowe</p>
</div>
<div className="bg-white p-6 border border-black/5 rounded-xl hover:border-black transition-colors group">
<iconify-icon className="mb-4 text-neutral-400 group-hover:text-black transition-colors" icon="lucide:network" width="24"></iconify-icon>
<h3 className="font-medium mb-2">Komunikować</h3>
<p className="text-sm text-neutral-500">Z wieloma systemami IT</p>
</div>
<div className="bg-white p-6 border border-black/5 rounded-xl hover:border-black transition-colors group">
<iconify-icon className="mb-4 text-neutral-400 group-hover:text-black transition-colors" icon="lucide:git-branch" width="24"></iconify-icon>
<h3 className="font-medium mb-2">Decydować</h3>
<p className="text-sm text-neutral-500">Na podstawie danych i reguł</p>
</div>
<div className="bg-white p-6 border border-black/5 rounded-xl hover:border-black transition-colors group">
<iconify-icon className="mb-4 text-neutral-400 group-hover:text-black transition-colors" icon="lucide:zap" width="24"></iconify-icon>
<h3 className="font-medium mb-2">Wykonywać</h3>
<p className="text-sm text-neutral-500">Zadania automatycznie</p>
</div>
</div>
<div className="mt-12 inline-block border border-black px-6 py-3 rounded-full bg-white relative">
<p className="text-sm font-medium">Pomyśl o nim jak o niezawodnym pracowniku, który nigdy nie śpi i działa bezpośrednio w Twoim stacku IT.</p>

<div className="absolute -bottom-10 left-1/2 -translate-x-1/2 h-8 w-px bg-black/20"></div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
<div className="mb-16 reveal">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-4">Co mogą zrobić nasi agenci AI</h2>
</div>
<div className="grid md:grid-cols-2 gap-6 reveal delay-100">

<div className="group p-8 border border-black/10 rounded-2xl hover:bg-black hover:text-white transition-all duration-300 relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-neutral-100 rounded-blob opacity-0 group-hover:opacity-10 transition-opacity"></div>
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-black group-hover:text-white" icon="lucide:brain" width="24"></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight">Agent Sprzedażowy</h3>
</div>
<ul className="space-y-3 text-sm text-neutral-600 group-hover:text-neutral-300">
<li>• Kwalifikuje przychodzące leady</li>
<li>• Pobiera dane z CRM</li>
<li>• Wysyła spersonalizowane follow-upy</li>
<li>• Automatycznie aktualizuje etap w lejku sprzedaży</li>
</ul>
</div>

<div className="group p-8 border border-black/10 rounded-2xl hover:bg-black hover:text-white transition-all duration-300 relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-neutral-100 rounded-blob opacity-0 group-hover:opacity-10 transition-opacity"></div>
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-black group-hover:text-white" icon="lucide:settings-2" width="24"></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight">Agent Operacyjny</h3>
</div>
<ul className="space-y-3 text-sm text-neutral-600 group-hover:text-neutral-300">
<li>• Monitoruje zamówienia i procesy</li>
<li>• Wykrywa problemy i opóźnienia</li>
<li>• Komunikuje się z klientami i zespołami</li>
<li>• Aktualizuje systemy wewnętrzne</li>
</ul>
</div>

<div className="group p-8 border border-black/10 rounded-2xl hover:bg-black hover:text-white transition-all duration-300 relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-neutral-100 rounded-blob opacity-0 group-hover:opacity-10 transition-opacity"></div>
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-black group-hover:text-white" icon="lucide:pie-chart" width="24"></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight">Agent Finansowy</h3>
</div>
<ul className="space-y-3 text-sm text-neutral-600 group-hover:text-neutral-300">
<li>• Obsługuje faktury</li>
<li>• Wykrywa nieprawidłowości</li>
<li>• Generuje raporty</li>
<li>• Synchronizuje dane z księgowością</li>
</ul>
</div>

<div className="group p-8 border border-black/10 rounded-2xl hover:bg-black hover:text-white transition-all duration-300 relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-neutral-100 rounded-blob opacity-0 group-hover:opacity-10 transition-opacity"></div>
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-black group-hover:text-white" icon="lucide:headphones" width="24"></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight">Agent Supportowy</h3>
</div>
<ul className="space-y-3 text-sm text-neutral-600 group-hover:text-neutral-300">
<li>• Odczytuje i kategoryzuje tickety</li>
<li>• Rozwiązuje powtarzalne problemy</li>
<li>• Eskaluje tylko trudne przypadki</li>
<li>• Uczy się na podstawie historycznych danych</li>
</ul>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-black text-white relative overflow-hidden" id="how">

<div className="cow-spot bg-white/5 w-96 h-96 -left-20 top-20"></div>
<div className="max-w-7xl mx-auto relative z-10">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-16 text-center">Jak budujemy Twoich agentów AI</h2>
<div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
<div className="relative group">
<span className="text-6xl font-semibold text-neutral-800 absolute -top-8 -left-2 -z-10 group-hover:text-neutral-700 transition-colors">01</span>
<h3 className="text-lg font-medium mb-2">Audyt</h3>
<p className="text-xs text-neutral-400">Analizujemy procesy i identyfikujemy możliwości automatyzacji.</p>
</div>
<div className="relative group">
<span className="text-6xl font-semibold text-neutral-800 absolute -top-8 -left-2 -z-10 group-hover:text-neutral-700 transition-colors">02</span>
<h3 className="text-lg font-medium mb-2">Projekt</h3>
<p className="text-xs text-neutral-400">Określamy rolę, logikę i reguły decyzyjne agenta.</p>
</div>
<div className="relative group">
<span className="text-6xl font-semibold text-neutral-800 absolute -top-8 -left-2 -z-10 group-hover:text-neutral-700 transition-colors">03</span>
<h3 className="text-lg font-medium mb-2">Integracja</h3>
<p className="text-xs text-neutral-400">Podłączamy agentów do Twoich narzędzi poprzez API.</p>
</div>
<div className="relative group">
<span className="text-6xl font-semibold text-neutral-800 absolute -top-8 -left-2 -z-10 group-hover:text-neutral-700 transition-colors">04</span>
<h3 className="text-lg font-medium mb-2">Testy</h3>
<p className="text-xs text-neutral-400">Testujemy wszystkie scenariusze i zabezpieczenia.</p>
</div>
<div className="relative group">
<span className="text-6xl font-semibold text-neutral-800 absolute -top-8 -left-2 -z-10 group-hover:text-neutral-700 transition-colors">05</span>
<h3 className="text-lg font-medium mb-2">Wdrożenie</h3>
<p className="text-xs text-neutral-400">Twoi agenci zaczynają pracować w systemach firmy.</p>
</div>
<div className="relative group">
<span className="text-6xl font-semibold text-neutral-800 absolute -top-8 -left-2 -z-10 group-hover:text-neutral-700 transition-colors">06</span>
<h3 className="text-lg font-medium mb-2">Optymalizacja</h3>
<p className="text-xs text-neutral-400">Ciągłe usprawnianie wydajności i ROI.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
<h2 className="text-4xl font-medium tracking-tighter mb-16 text-center">Elastyczne pakiety automatyzacji</h2>
<div className="grid lg:grid-cols-3 gap-8 items-start">

<div className="p-8 border border-black/10 rounded-2xl hover:border-black transition-colors reveal">
<div className="flex items-center gap-2 mb-4">
<div className="w-3 h-3 bg-neutral-300 rounded-full"></div>
<h3 className="text-xl font-semibold">Agent MVP</h3>
</div>
<p className="text-sm text-neutral-500 mb-6 min-h-[40px]">Idealny dla pierwszych testów automatyzacji</p>
<ul className="space-y-3 mb-8 text-sm">
<li>• 1 agent AI</li>
<li>• 1 proces biznesowy</li>
<li>• Do 2 integracji systemowych</li>
<li>• Dostawa w ~30 dni</li>
</ul>
<div className="border-t border-black/5 pt-4">
<span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">Cel</span>
<p className="text-sm font-medium mt-1">Szybkie zweryfikowanie ROI</p>
</div>
</div>

<div className="p-8 border-2 border-black rounded-2xl relative shadow-xl reveal delay-100 bg-white">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full">Popularne</div>
<div className="flex items-center gap-2 mb-4">
<div className="w-3 h-3 bg-black rounded-full animate-pulse"></div>
<h3 className="text-xl font-semibold">Agent Workforce</h3>
</div>
<p className="text-sm text-neutral-500 mb-6 min-h-[40px]">Automatyzacja end-to-end</p>
<ul className="space-y-3 mb-8 text-sm font-medium">
<li>• 2–4 agentów AI</li>
<li>• Pełna automatyzacja procesu</li>
<li>• Wiele integracji API</li>
<li>• Monitoring i optymalizacja</li>
</ul>
<div className="border-t border-black/5 pt-4">
<span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">Cel</span>
<p className="text-sm font-medium mt-1">Zastępuje ręczne procesy</p>
</div>
</div>

<div className="p-8 border border-black/10 rounded-2xl hover:border-black transition-colors reveal delay-200">
<div className="flex items-center gap-2 mb-4">
<div className="w-3 h-3 bg-black rounded-blob"></div>
<h3 className="text-xl font-semibold">Custom System</h3>
</div>
<p className="text-sm text-neutral-500 mb-6 min-h-[40px]">AI jako infrastruktura firmy</p>
<ul className="space-y-3 mb-8 text-sm">
<li>• Własna architektura agentów</li>
<li>• Głębokie integracje systemowe</li>
<li>• Specjalistyczni agenci</li>
<li>• SLA i wsparcie długoterminowe</li>
</ul>
<div className="border-t border-black/5 pt-4">
<span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">Cel</span>
<p className="text-sm font-medium mt-1">Skalowanie bez zwiększania zespołu</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-neutral-50 border-y border-black/5">
<div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16 items-start">
<div className="md:w-1/3">
<h2 className="text-4xl font-medium tracking-tighter mb-6">Dlaczego <br/>Automation Cows?</h2>
<p className="text-sm font-medium border-l-2 border-black pl-4 py-1">
                    Jeśli nie oszczędza czasu ani pieniędzy, nie budujemy tego.
                </p>
</div>
<div className="md:w-2/3 grid sm:grid-cols-2 gap-8">
<div className="space-y-2">
<iconify-icon icon="lucide:code-2" width="24"></iconify-icon>
<h4 className="font-semibold">Inżynierowie, nie sprzedawcy promptów</h4>
</div>
<div className="space-y-2">
<iconify-icon icon="lucide:cable" width="24"></iconify-icon>
<h4 className="font-semibold">Silne doświadczenie w integracjach i API</h4>
</div>
<div className="space-y-2">
<iconify-icon icon="lucide:calculator" width="24"></iconify-icon>
<h4 className="font-semibold">Skupienie na logice biznesowej, nie hype’ie</h4>
</div>
<div className="space-y-2">
<iconify-icon icon="lucide:trending-up" width="24"></iconify-icon>
<h4 className="font-semibold">Budowane pod kątem realnych rezultatów</h4>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-black text-white text-center relative overflow-hidden" id="audit">

<div className="absolute inset-0 flex justify-center items-center pointer-events-none">
<div className="w-[600px] h-[600px] border border-white/5 rounded-full animate-[pulse_4s_infinite]"></div>
<div className="w-[800px] h-[800px] border border-white/5 rounded-full absolute animate-[pulse_4s_infinite_1s]"></div>
</div>
<div className="max-w-3xl mx-auto relative z-10 reveal">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-8">
                Zobacz, co agenci AI mogą zautomatyzować w Twojej firmie.
            </h2>
<p className="text-neutral-400 text-lg mb-12">
                Umów darmowy audyt automatyzacji i otrzymaj plan działania w 30 minut.
            </p>
<button className="bg-white text-black px-8 py-4 text-lg font-medium rounded-sm hover:bg-neutral-200 transition-colors inline-flex items-center gap-2">
                👉 Umów darmowy audyt automatyzacji
            </button>
</div>
</section>

<footer className="py-12 px-6 md:px-12 border-t border-black/5">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<span className="block font-bold tracking-tight text-lg mb-1">AUTOMATION COWS ©</span>
<span className="text-xs text-neutral-500">AI agents that do the dirty work.</span>
</div>
<div className="flex gap-6 text-sm font-medium">
<a className="hover:underline" href="#">Kontakt</a>
<a className="hover:underline" href="#">Polityka prywatności</a>
<a className="hover:underline flex items-center gap-1" href="#">
                    LinkedIn <iconify-icon icon="lucide:arrow-up-right" width="12"></iconify-icon>
</a>
</div>
</div>
</footer>


    </>
  );
}
