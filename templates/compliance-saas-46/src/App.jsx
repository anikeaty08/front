import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'media',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'system-ui', 'sans-serif'],
},
colors: {
indigo: {
400: '#818cf8',
500: '#6366f1',
600: '#4f46e5',
},
slate: {
850: '#151e2e',
900: '#0f172a',
950: '#020617',
}
},
animation: {
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // Initialize Icons
        lucide.createIcons();

        // Simple Form Handler (Prevention)
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = this.querySelector('button[type="submit"]');
            const originalText = btn.innerText;
            
            btn.innerHTML = '<span class="flex items-center justify-center gap-2"><svg class="animate-spin h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Zapisywanie...</span>';
            
            setTimeout(() => {
                btn.innerHTML = 'Dziękujemy! Sprawdź skrzynkę.';
                btn.classList.add('bg-green-600', 'hover:bg-green-700', 'dark:bg-green-500', 'dark:hover:bg-green-600', 'text-white', 'dark:text-white');
                document.getElementById('email').value = '';
                document.getElementById('industry').value = '';
            }, 1500);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 grid-mask pointer-events-none z-0 opacity-60"></div>
<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/20 dark:bg-indigo-500/10 blur-[100px] rounded-full z-0 pointer-events-none"></div>

<header className="fixed top-0 w-full z-50 border-b border-slate-200/50 dark:border-slate-800/50 glass-panel transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>
<span className="font-semibold text-lg tracking-tight">aura.build</span>
</div>

<div className="flex items-center gap-4">

<div className="relative group hidden sm:block">
<button className="flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="globe"></i>
<span>PL</span>
<i className="w-3 h-3" data-lucide="chevron-down"></i>
</button>

<div className="absolute right-0 top-full mt-2 w-24 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right p-1">
<a className="block px-3 py-2 text-xs text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/30 rounded-md" href="#">Polski</a>
<a className="block px-3 py-2 text-xs text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md transition-colors" href="#">English</a>
<a className="block px-3 py-2 text-xs text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md transition-colors" href="#">Deutsch</a>
<a className="block px-3 py-2 text-xs text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md transition-colors" href="#">Français</a>
</div>
</div>
<div className="h-4 w-px bg-slate-300 dark:bg-slate-700 hidden sm:block"></div>

<div className="flex items-center gap-3">
<div className="relative group">
<button className="text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors cursor-not-allowed opacity-70">
                            Log in
                        </button>
<div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-slate-900 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Coming Soon</div>
</div>
<div className="relative group">
<button className="text-sm font-medium bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-4 py-2 rounded-full opacity-70 cursor-not-allowed">
                            Register
                        </button>
<div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-slate-900 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Coming Soon</div>
</div>
</div>
</div>
</div>
</header>
<main className="relative z-10 pt-32 pb-16">

<section className="max-w-5xl mx-auto px-4 text-center mb-24 animate-fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50 text-indigo-600 dark:text-indigo-400 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Nowa generacja compliance
            </div>
<h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tighter text-slate-900 dark:text-white mb-6 leading-[1.1]">
                Zbuduj <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400">aurę bezpieczeństwa</span> w swojej firmie.
            </h1>
<p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Zapomnij o karach za wygasłe dokumenty. <span className="text-slate-900 dark:text-slate-200 font-medium">aura.build</span> to najprostszy tracker dla branży budowlanej, technicznej i medycznej. Dodaj dokument w 15 sekund, resztę zrobimy my.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="group relative inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 bg-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 ring-offset-slate-50 dark:ring-offset-slate-950 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40" href="#waitlist">
                    Dołącz do listy oczekujących
                    <i className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
<span className="absolute -top-3 -right-3 px-2 py-0.5 bg-yellow-400 text-yellow-950 text-[10px] font-bold rounded-full transform rotate-12 shadow-sm border border-yellow-200">-50%</span>
</a>
<button className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-slate-600 dark:text-slate-300 transition-all duration-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full hover:bg-slate-50 dark:hover:bg-slate-750 hover:border-slate-300">
<i className="w-4 h-4 mr-2 text-indigo-500" data-lucide="play-circle"></i>
                    Zobacz jak to działa
                </button>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 mb-32">
<div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
<div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-8 overflow-hidden h-full">
<div className="flex items-center gap-2 mb-4 text-red-500 dark:text-red-400 font-medium text-sm">
<i className="w-4 h-4" data-lucide="x-circle"></i>
                            Chaos w Excelu
                        </div>
<h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2 tracking-tight">Ryzyko i niepewność</h3>
<p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Przeoczone terminy, ręczne wprowadzanie danych i brak powiadomień.</p>

<div className="bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 p-4 text-xs font-mono opacity-80 select-none">
<div className="grid grid-cols-3 gap-2 border-b border-slate-200 dark:border-slate-800 pb-2 mb-2 text-slate-400">
<span>Nazwa</span>
<span>Data</span>
<span>Status</span>
</div>
<div className="grid grid-cols-3 gap-2 py-1.5 items-center">
<span className="text-slate-600 dark:text-slate-300">UDT Wózek #01</span>
<span className="text-red-500">2023-10-12</span>
<span className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-1.5 py-0.5 rounded text-[10px] w-fit">Expired</span>
</div>
<div className="grid grid-cols-3 gap-2 py-1.5 items-center">
<span className="text-slate-600 dark:text-slate-300">BHP Jan K.</span>
<span className="text-orange-500">2023-11-01</span>
<span className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-1.5 py-0.5 rounded text-[10px] w-fit">Overdue</span>
</div>
<div className="grid grid-cols-3 gap-2 py-1.5 items-center opacity-40">
<span>Gaśnica A2</span>
<span>???</span>
<span>---</span>
</div>
</div>
</div>
</div>

<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
<div className="relative bg-white dark:bg-slate-900 border border-indigo-100 dark:border-indigo-900/30 rounded-xl p-6 sm:p-8 overflow-hidden h-full shadow-2xl shadow-indigo-500/10">
<div className="flex items-center gap-2 mb-4 text-indigo-600 dark:text-indigo-400 font-medium text-sm">
<i className="w-4 h-4" data-lucide="check-circle-2"></i>
                            Aura Dashboard
                        </div>
<h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2 tracking-tight">Pełna kontrola</h3>
<p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Automatyczne alerty, skanowanie OCR i widok "Health Score" Twojej firmy.</p>

<div className="bg-white dark:bg-slate-950 rounded-lg border border-slate-100 dark:border-slate-800 p-4 shadow-sm select-none">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="shield"></i>
</div>
<div>
<div className="text-xs text-slate-500">Compliance Score</div>
<div className="text-sm font-bold text-slate-900 dark:text-white">98% Bezpieczeństwa</div>
</div>
</div>
<div className="text-xs font-medium text-indigo-600 bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded-full">Active</div>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between text-xs p-2 rounded bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
<div className="flex items-center gap-2">
<i className="w-3.5 h-3.5 text-slate-400" data-lucide="calendar-clock"></i>
<span className="text-slate-700 dark:text-slate-300">Przegląd windy #4</span>
</div>
<span className="text-slate-500">za 45 dni</span>
</div>
<div className="flex items-center justify-between text-xs p-2 rounded bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
<div className="flex items-center gap-2">
<i className="w-3.5 h-3.5 text-slate-400" data-lucide="user-check"></i>
<span className="text-slate-700 dark:text-slate-300">Licencja SEP Marek W.</span>
</div>
<span className="text-slate-500">za 120 dni</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 mb-32">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white mb-4">Funkcje zaprojektowane dla profesjonalistów</h2>
<p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">SaaS for compliance, który oszczędza Twój czas i chroni przed mandatami.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(250px,auto)]">

<div className="md:col-span-2 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 flex flex-col justify-between hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors group">
<div className="mb-6">
<div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
<i className="w-5 h-5" data-lucide="scan-text"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Smart Scan (OCR)</h3>
<p className="text-slate-500 dark:text-slate-400">Zrób zdjęcie dokumentu telefonem. Nasza AI automatycznie odczyta typ, datę wystawienia i datę ważności, wprowadzając dane do systemu za Ciebie.</p>
</div>
<div className="relative w-full h-32 bg-slate-50 dark:bg-slate-950 rounded-lg overflow-hidden border border-slate-100 dark:border-slate-800">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-48 h-1 bg-indigo-500/20 absolute top-1/2 -translate-y-1/2 animate-pulse"></div>
<div className="w-1 h-12 bg-indigo-500/20 absolute left-1/2 -translate-x-1/2 animate-pulse"></div>
<i className="w-12 h-12 text-indigo-200 dark:text-indigo-800/50" data-lucide="file-check"></i>
</div>
</div>
</div>

<div className="md:col-span-1 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors group">
<div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center text-orange-600 dark:text-orange-400 mb-4 group-hover:scale-110 transition-transform">
<i className="w-5 h-5" data-lucide="bell-ring"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Kaskadowe Alerty</h3>
<p className="text-slate-500 dark:text-slate-400 text-sm">SMS, E-mail i Push. Powiadomimy Ciebie, managera i pracownika. Skalujemy intensywność powiadomień wraz ze zbliżającym się terminem, zanim zrobi to urząd.</p>
</div>

<div className="md:col-span-1 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors group">
<div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform">
<i className="w-5 h-5" data-lucide="qr-code"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">QR Asset Tagging</h3>
<p className="text-slate-500 dark:text-slate-400 text-sm">Drukuj unikalne kody na maszyny i urządzenia. Inspektor sprawdza status jednym skanem telefonu. Brak papierologii na placu budowy.</p>
</div>

<div className="md:col-span-2 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors group flex flex-col md:flex-row gap-6 items-center">
<div className="flex-1">
<div className="w-10 h-10 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center text-pink-600 dark:text-pink-400 mb-4 group-hover:scale-110 transition-transform">
<i className="w-5 h-5" data-lucide="languages"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Multi-Language Support</h3>
<p className="text-slate-500 dark:text-slate-400">Jeden system dla Twoich oddziałów w całej Europie. Interfejs i powiadomienia w języku pracownika.</p>
</div>
<div className="flex gap-3">
<span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-mono rounded">PL</span>
<span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-mono rounded">EN</span>
<span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-mono rounded">DE</span>
<span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-mono rounded">FR</span>
</div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-4 mb-24 relative" id="waitlist">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-50/50 dark:to-indigo-950/20 pointer-events-none rounded-3xl"></div>
<div className="relative bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 shadow-2xl shadow-indigo-500/10 border border-slate-200 dark:border-slate-800 text-center overflow-hidden">

<div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
<h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white mb-4 tracking-tight">Zostań Early Adopterem</h2>
<p className="text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto">
                    Zapisz się dziś, a otrzymasz <strong className="text-indigo-600 dark:text-indigo-400">dożywotni rabat 50%</strong> na plan Pro oraz priorytetowy dostęp do wersji Beta przed wszystkimi.
                </p>
<form className="max-w-md mx-auto space-y-4">
<div className="text-left">
<label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5 ml-1" htmlFor="email">Adres E-mail</label>
<div className="relative">
<input className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder:text-slate-400" id="email" placeholder="jan@firma.pl" required="" type="email"/>
<i className="absolute right-4 top-3.5 w-5 h-5 text-slate-400" data-lucide="mail"></i>
</div>
</div>
<div className="text-left">
<label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5 ml-1" htmlFor="industry">Branża</label>
<div className="relative">
<select className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all cursor-pointer" id="industry">
<option className="text-slate-400" disabled="" selected="" value="">Wybierz branżę...</option>
<option value="construction">Budownictwo</option>
<option value="transport">Transport i Logistyka</option>
<option value="services">Usługi Techniczne</option>
<option value="medical">Medycyna</option>
<option value="other">Inne</option>
</select>
<i className="absolute right-4 top-3.5 w-5 h-5 text-slate-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<button className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold py-3.5 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-all duration-200 mt-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5" type="submit">
                        Zapisz się na listę
                    </button>
<p className="text-xs text-slate-400 mt-4 text-center">
                        Brak spamu. Możesz się wypisać w każdej chwili.
                    </p>
</form>
</div>
</section>
</main>

<footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-12 relative z-10">
<div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-200 dark:bg-slate-800 rounded flex items-center justify-center text-slate-600 dark:text-slate-400">
<i className="w-3.5 h-3.5" data-lucide="shield"></i>
</div>
<span className="text-sm font-semibold text-slate-700 dark:text-slate-300 tracking-tight">aura.build</span>
</div>
<div className="flex gap-6 text-sm text-slate-500 dark:text-slate-400">
<a className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" href="#">Polityka Prywatności</a>
<a className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" href="#">Regulamin</a>
<a className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" href="#">Kontakt</a>
</div>
<div className="text-xs text-slate-400">
                © 2023 Aura Build Systems. All rights reserved.
            </div>
</div>
</footer>



    </>
  );
}
