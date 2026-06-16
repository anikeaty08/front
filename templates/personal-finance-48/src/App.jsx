import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        // Simple Tab Switcher for Mockup
        function switchTab(tab) {
            const btnDash = document.getElementById('btn-dashboard');
            const btnAnal = document.getElementById('btn-analytics');
            const viewDash = document.getElementById('view-dashboard');
            const viewAnal = document.getElementById('view-analytics');

            if(tab === 'dashboard') {
                viewDash.classList.remove('hidden');
                viewAnal.classList.add('hidden');
                
                btnDash.classList.remove('text-slate-400');
                btnDash.classList.add('bg-indigo-500/10', 'text-indigo-400', 'border', 'border-indigo-500/20');
                
                btnAnal.classList.add('text-slate-400');
                btnAnal.classList.remove('bg-indigo-500/10', 'text-indigo-400', 'border', 'border-indigo-500/20');
            } else {
                viewDash.classList.add('hidden');
                viewAnal.classList.remove('hidden');

                btnAnal.classList.remove('text-slate-400');
                btnAnal.classList.add('bg-indigo-500/10', 'text-indigo-400', 'border', 'border-indigo-500/20');

                btnDash.classList.add('text-slate-400');
                btnDash.classList.remove('bg-indigo-500/10', 'text-indigo-400', 'border', 'border-indigo-500/20');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030712]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex font-semibold text-indigo-400 tracking-tight bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 w-8 h-8 border-white/10 border rounded-lg items-center justify-center">
                    BP
                </div>
<span className="text-white font-medium tracking-tight">Budget Pro</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#features">Funkcje</a>
<a className="hover:text-white transition-colors" href="#roadmap">Roadmap</a>
<a className="hover:text-white transition-colors" href="#how-it-works">Jak to działa</a>
<a className="hover:text-white transition-colors" href="#pricing">Cennik</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium hover:text-white transition-colors" href="#">Logowanie</a>
<a className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/20" href="#">
                    Rozpocznij
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] -z-10 opacity-40"></div>
<div className="absolute top-20 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] -z-10 opacity-30"></div>
<div className="max-w-7xl mx-auto px-6 text-center z-10 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Nowość: AI Skanowanie Paragonów
            </div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6 leading-tight">
                Twoje finanse.<br/>
<span className="text-gradient">Pod pełną kontrolą.</span>
</h1>
<p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Budget Pro to zaawansowany manager finansowy, który zamienia chaos w klarowność. 
                Importuj wyciągi, skanuj paragony i analizuj wydatki z precyzją AI.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<button className="w-full sm:w-auto px-8 py-3.5 bg-white text-black rounded-lg font-medium hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
<i className="w-5 h-5" data-lucide="rocket"></i>
                    Załóż darmowe konto
                </button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-white/5 border border-white/10 text-white rounded-lg font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
<i className="w-5 h-5" data-lucide="play-circle"></i>
                    Zobacz demo
                </button>
</div>

<div className="relative max-w-[1200px] mx-auto">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-20"></div>
<div className="relative bg-[#050505] border border-white/10 rounded-xl shadow-2xl overflow-hidden h-[850px] md:h-[800px] flex text-left">

<div className="w-64 bg-[#0a0a0a] border-r border-white/5 flex flex-col hidden md:flex shrink-0 z-20">
<div className="p-6">
<div className="flex items-center gap-3 mb-1">
<div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">BP</div>
<div className="">
<div className="text-white font-semibold text-sm">Budget Pro</div>
<div className="flex items-center gap-1 text-[10px] text-indigo-400">
<i className="w-3 h-3" data-lucide="cloud"></i> Cloud Sync
                                    </div>
</div>
</div>
</div>
<div className="px-3 space-y-1 flex-1">
<div className="px-3 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 mt-2">Menu</div>

<button className="w-full flex items-center gap-3 px-3 py-2 bg-indigo-500/10 text-indigo-400 rounded-lg text-sm border border-indigo-500/20 font-medium transition-all" id="btn-dashboard" onclick="switchTab('dashboard')">
<i className="w-4 h-4" data-lucide="layout-grid"></i> Dashboard
                            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white rounded-lg text-sm transition-colors font-medium">
<i className="w-4 h-4" data-lucide="wallet"></i> Transakcje
                            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white rounded-lg text-sm transition-colors font-medium" id="btn-analytics" onclick="switchTab('analytics')">
<i className="w-4 h-4" data-lucide="bar-chart-3"></i> Analityka
                            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white rounded-lg text-sm transition-colors font-medium">
<i className="w-4 h-4" data-lucide="pie-chart"></i> Budżety
                            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white rounded-lg text-sm transition-colors font-medium">
<i className="w-4 h-4" data-lucide="target"></i> Cele oszczędnościowe
                            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white rounded-lg text-sm transition-colors font-medium">
<i className="w-4 h-4" data-lucide="refresh-cw"></i> Stałe płatności
                            </button>
<div className="px-3 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 mt-6">Ustawienia</div>
<button className="w-full flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white rounded-lg text-sm transition-colors font-medium">
<i className="w-4 h-4" data-lucide="tag"></i> Kategorie
                            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white rounded-lg text-sm transition-colors font-medium">
<i className="w-4 h-4" data-lucide="file-text"></i> Raporty
                            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white rounded-lg text-sm transition-colors font-medium">
<i className="w-4 h-4" data-lucide="settings"></i> Ustawienia
                            </button>
</div>

<div className="p-4 border-t border-white/5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-xs font-bold text-indigo-400 border border-indigo-500/30">KA</div>
<div>
<div className="text-white text-xs font-medium">kaesen@op.pl</div>
<div className="text-indigo-400 text-[10px]">PRO Plan</div>
</div>
</div>
<button className="text-slate-500 hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="log-out"></i>
</button>
</div>
</div>
</div>

<div className="flex-1 bg-black overflow-y-auto relative">

<div className="p-6 md:p-10 animate-fade-in" id="view-dashboard">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
<div>
<h2 className="text-3xl font-semibold text-white tracking-tight">Dashboard</h2>
<p className="text-slate-500 text-sm mt-1">Przegląd Twoich finansów • piątek, 6 lutego 2026</p>
</div>
<button className="px-4 py-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2 shadow-lg shadow-indigo-500/20">
<i className="w-4 h-4" data-lucide="plus-circle"></i>
                                    Dodaj transakcję
                                </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">

<div className="bg-[#0e121b] border border-white/5 rounded-xl p-5 relative overflow-hidden group hover:border-white/10 transition-all">
<div className="flex justify-between items-start mb-4">
<span className="text-slate-400 text-xs font-medium">Saldo</span>
<div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
<i className="w-4 h-4" data-lucide="wallet"></i>
</div>
</div>
<div className="text-2xl font-bold text-white tracking-tight mb-1">2310.62 zł</div>
<div className="text-xs text-rose-500 font-medium">-46.5% <span className="text-slate-600 font-normal">vs poprzedni miesiąc</span></div>
</div>

<div className="bg-[#0e121b] border border-white/5 rounded-xl p-5 relative overflow-hidden group hover:border-white/10 transition-all">
<div className="flex justify-between items-start mb-4">
<span className="text-slate-400 text-xs font-medium">Dochody</span>
<div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
<i className="w-4 h-4" data-lucide="arrow-down-left"></i>
</div>
</div>
<div className="text-2xl font-bold text-white tracking-tight mb-1">6438.96 zł</div>
<div className="text-xs text-slate-500 font-medium">W tym miesiącu</div>
</div>

<div className="bg-[#0e121b] border border-white/5 rounded-xl p-5 relative overflow-hidden group hover:border-white/10 transition-all">
<div className="flex justify-between items-start mb-4">
<span className="text-slate-400 text-xs font-medium">Wydatki</span>
<div className="p-2 rounded-lg bg-rose-500/10 text-rose-400">
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</div>
</div>
<div className="text-2xl font-bold text-white tracking-tight mb-1">4128.34 zł</div>
<div className="text-xs text-slate-500 font-medium">W tym miesiącu</div>
</div>

<div className="bg-[#0e121b] border border-white/5 rounded-xl p-5 relative overflow-hidden group hover:border-white/10 transition-all">
<div className="flex justify-between items-start mb-4">
<span className="text-slate-400 text-xs font-medium">Oszczędności</span>
<div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
<i className="w-4 h-4" data-lucide="safe"></i>
</div>
</div>
<div className="text-2xl font-bold text-white tracking-tight mb-1">1550.00 zł</div>
<div className="text-xs text-slate-500 font-medium">Aktualne cele</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">

<div className="bg-[#0e121b] border border-white/5 rounded-xl p-6">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-semibold text-white">Trend miesięczny</h3>
<div className="flex items-center gap-4 text-xs">
<div className="flex items-center gap-2 text-emerald-400">
<div className="w-3 h-1 rounded-full bg-emerald-400"></div> Dochody
                                            </div>
<div className="flex items-center gap-2 text-rose-400">
<div className="w-3 h-1 rounded-full bg-rose-400"></div> Wydatki
                                            </div>
</div>
</div>
<div className="h-64 w-full relative">

<div className="absolute left-0 top-0 bottom-6 w-10 flex flex-col justify-between text-[10px] text-slate-600 font-medium text-right pr-2">
<span>14k</span>
<span>10k</span>
<span>6k</span>
<span>2k</span>
<span>0</span>
</div>

<div className="absolute left-10 right-0 top-0 bottom-6 flex flex-col justify-between z-0">
<div className="border-b border-white/[0.03] w-full h-0"></div>
<div className="border-b border-white/[0.03] w-full h-0"></div>
<div className="border-b border-white/[0.03] w-full h-0"></div>
<div className="border-b border-white/[0.03] w-full h-0"></div>
<div className="border-b border-white/[0.03] w-full h-0"></div>
</div>

<div className="absolute left-10 right-0 top-2 bottom-6 z-10">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 400 200">
<path d="M0,40 C50,80 100,190 150,190 C200,190 250,50 300,50 C350,50 400,100 400,120" fill="none" stroke="#10b981" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
<path d="M0,50 C60,100 120,195 180,195 C240,195 240,120 300,120 C350,120 400,150 400,160" fill="none" stroke="#f43f5e" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
</svg>
</div>

<div className="absolute left-10 right-0 bottom-0 flex justify-between text-[10px] text-slate-500 font-medium pt-2">
<span>wrz</span>
<span>paź</span>
<span>lis</span>
<span>gru</span>
<span>sty</span>
<span>lut</span>
</div>
</div>
</div>

<div className="bg-[#0e121b] border border-white/5 rounded-xl p-6 flex flex-col items-center justify-center">
<div className="w-full text-left mb-4"><h3 className="text-sm font-semibold text-white">Wydatki wg kategorii</h3></div>
<div className="relative w-48 h-48 rounded-full mb-6" style={{background: 'conic-gradient(#f97316 0% 65%, #3b82f6 65% 75%, #8b5cf6 75% 80%, #22c55e 80% 90%, #eab308 90% 100%)'}}>
<div className="absolute inset-4 bg-[#0e121b] rounded-full"></div>
</div>
<div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs">
<div className="flex items-center gap-2 text-slate-300"><div className="w-2 h-2 rounded-full bg-orange-500"></div> Czynsz i rachunki</div>
<div className="flex items-center gap-2 text-slate-300"><div className="w-2 h-2 rounded-full bg-rose-500"></div> Jedzenie na wynos</div>
<div className="flex items-center gap-2 text-slate-300"><div className="w-2 h-2 rounded-full bg-blue-500"></div> Zakupy spożywcze</div>
<div className="flex items-center gap-2 text-slate-300"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> Subskrypcje</div>
</div>
</div>
</div>
</div>

<div className="hidden p-6 md:p-10 animate-fade-in flex flex-col h-full" id="view-analytics">

<div className="mb-8">
<h2 className="text-3xl font-semibold text-white tracking-tight">Analityka</h2>
<p className="text-slate-500 text-sm mt-1">Szczegółowe raporty i prognozy</p>
</div>

<div className="flex flex-col md:flex-row justify-between items-center bg-[#0e121b] p-1.5 rounded-xl border border-white/5 mb-8">
<div className="flex gap-1 w-full md:w-auto mb-2 md:mb-0">
<button className="px-4 py-1.5 rounded-lg bg-[#2e3442] text-white text-xs font-medium">Miesiąc</button>
<button className="px-4 py-1.5 rounded-lg text-slate-400 hover:text-white text-xs font-medium transition-colors">Kwartał</button>
<button className="px-4 py-1.5 rounded-lg text-[#6366f1] bg-[#6366f1]/10 border border-[#6366f1]/20 text-xs font-medium">Rok</button>
</div>
<div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
<div className="flex items-center gap-4 bg-[#1a1f2e] px-2 py-1 rounded-lg border border-white/5">
<button className="w-6 h-6 flex items-center justify-center text-slate-400 hover:text-white"><i className="w-4 h-4" data-lucide="chevron-left"></i></button>
<span className="text-sm font-semibold text-white">2026</span>
<button className="w-6 h-6 flex items-center justify-center text-slate-400 hover:text-white"><i className="w-4 h-4" data-lucide="chevron-right"></i></button>
</div>
<button className="px-4 py-1.5 bg-[#1a1f2e] hover:bg-[#252b3b] border border-white/5 text-white rounded-lg text-xs font-medium transition-colors">Dziś</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

<div className="bg-[#0b0f19] border border-white/5 rounded-xl p-5 relative overflow-hidden">
<div className="flex justify-between items-start mb-6">
<span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">ZMIANA</span>
<div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
<i className="w-3.5 h-3.5" data-lucide="arrow-down"></i>
</div>
</div>
<div className="text-3xl font-bold text-white tracking-tight mb-1">-88.3%</div>
<div className="text-[10px] text-slate-500">vs poprzedni okres</div>
</div>

<div className="bg-[#0b0f19] border border-white/5 rounded-xl p-5 relative overflow-hidden">
<div className="flex justify-between items-start mb-6">
<span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">NAJDROŻSZY DZIEŃ</span>
<div className="w-6 h-6 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500">
<i className="w-3.5 h-3.5" data-lucide="flame"></i>
</div>
</div>
<div className="text-3xl font-bold text-white tracking-tight mb-1">3545 zł</div>
<div className="text-[10px] text-slate-500">4 sty</div>
</div>

<div className="bg-[#0b0f19] border border-white/5 rounded-xl p-5 relative overflow-hidden">
<div className="flex justify-between items-start mb-6">
<span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">ŚREDNIA DZIENNA</span>
<div className="w-6 h-6 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500">
<i className="w-3.5 h-3.5" data-lucide="bar-chart-2"></i>
</div>
</div>
<div className="text-3xl font-bold text-white tracking-tight mb-1">369 zł</div>
<div className="text-[10px] text-slate-500">na dzień</div>
</div>

<div className="bg-[#0b0f19] border border-white/5 rounded-xl p-5 relative overflow-hidden">
<div className="flex justify-between items-start mb-6">
<span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">TOP KATEGORIA</span>
<div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
<i className="w-3.5 h-3.5" data-lucide="star"></i>
</div>
</div>
<div className="text-3xl font-bold text-white tracking-tight mb-1">65%</div>
<div className="text-[10px] text-slate-500">Czynsz i rachunki</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1">

<div className="bg-[#0b0f19] border border-white/5 rounded-xl p-6 flex flex-col">
<div className="flex justify-between items-start mb-6">
<h3 className="text-sm font-semibold text-white">Porównanie miesięczne</h3>
<i className="w-4 h-4 text-indigo-400" data-lucide="bar-chart"></i>
</div>

<div className="flex justify-center gap-4 mb-6 text-[10px]">
<div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-sm bg-[#10b981]"></div> <span className="text-slate-400">Dochody</span></div>
<div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-sm bg-[#f43f5e]"></div> <span className="text-slate-400">Wydatki</span></div>
<div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-sm bg-[#6366f1]"></div> <span className="text-slate-400">Saldo</span></div>
</div>

<div className="relative flex-1 min-h-[250px] w-full px-4">

<div className="absolute inset-0 flex flex-col justify-between text-[9px] text-slate-600 font-medium">
<div className="flex w-full items-center"><span className="w-8 text-right pr-2">14 000</span><div className="flex-1 h-[1px] bg-white/[0.03]"></div></div>
<div className="flex w-full items-center"><span className="w-8 text-right pr-2">12 000</span><div className="flex-1 h-[1px] bg-white/[0.03]"></div></div>
<div className="flex w-full items-center"><span className="w-8 text-right pr-2">10 000</span><div className="flex-1 h-[1px] bg-white/[0.03]"></div></div>
<div className="flex w-full items-center"><span className="w-8 text-right pr-2">8 000</span><div className="flex-1 h-[1px] bg-white/[0.03]"></div></div>
<div className="flex w-full items-center"><span className="w-8 text-right pr-2">6 000</span><div className="flex-1 h-[1px] bg-white/[0.03]"></div></div>
<div className="flex w-full items-center"><span className="w-8 text-right pr-2">4 000</span><div className="flex-1 h-[1px] bg-white/[0.03]"></div></div>
<div className="flex w-full items-center"><span className="w-8 text-right pr-2">2 000</span><div className="flex-1 h-[1px] bg-white/[0.03]"></div></div>
<div className="flex w-full items-center"><span className="w-8 text-right pr-2">0</span><div className="flex-1 h-[1px] bg-white/[0.03]"></div></div>
<div className="flex w-full items-center"><span className="w-8 text-right pr-2">-2 000</span><div className="flex-1 h-[1px] bg-white/[0.03]"></div></div>
</div>

<div className="absolute inset-0 left-10 right-0 top-3 bottom-8 flex justify-between items-end px-2">

<div className="flex gap-1 h-full items-end w-full justify-center">
<div className="w-5 bg-[#10b981] rounded-t-sm h-[65%]"></div>
<div className="w-5 bg-[#f43f5e] rounded-t-sm h-[70%]"></div>
</div>

<div className="flex gap-1 h-full items-end w-full justify-center">
<div className="w-5 bg-[#10b981] rounded-t-sm h-[38%]"></div>
<div className="w-5 bg-[#f43f5e] rounded-t-sm h-[36%]"></div>
</div>

<div className="flex gap-1 h-full items-end w-full justify-center">

</div>

<div className="flex gap-1 h-full items-end w-full justify-center">

</div>

<div className="flex gap-1 h-full items-end w-full justify-center">
<div className="w-5 bg-[#10b981] rounded-t-sm h-[65%]"></div>
<div className="w-5 bg-[#f43f5e] rounded-t-sm h-[25%]"></div>
</div>

<div className="flex gap-1 h-full items-end w-full justify-center">
<div className="w-5 bg-[#10b981] rounded-t-sm h-[38%]"></div>
<div className="w-5 bg-[#f43f5e] rounded-t-sm h-[25%]"></div>
</div>
</div>

<div className="absolute inset-0 left-10 right-0 top-3 bottom-8 pointer-events-none">
<svg height="100%" preserveaspectratio="none" width="100%">
<path d="M40,240 L110,230 L180,235 L250,235 L320,160 L390,190" fill="none" stroke="#6366f1" strokeWidth="2"></path>
<circle cx="40" cy="240" fill="#0b0f19" r="3" stroke="#6366f1" strokeWidth="2"></circle>
<circle cx="110" cy="230" fill="#0b0f19" r="3" stroke="#6366f1" strokeWidth="2"></circle>
<circle cx="180" cy="235" fill="#0b0f19" r="3" stroke="#6366f1" strokeWidth="2"></circle>
<circle cx="250" cy="235" fill="#0b0f19" r="3" stroke="#6366f1" strokeWidth="2"></circle>
<circle cx="320" cy="160" fill="#0b0f19" r="3" stroke="#6366f1" strokeWidth="2"></circle>
<circle cx="390" cy="190" fill="#0b0f19" r="3" stroke="#6366f1" strokeWidth="2"></circle>
</svg>
</div>

<div className="absolute bottom-0 left-10 right-0 flex justify-between text-[10px] text-slate-500 font-medium pt-2">
<span className="w-full text-center">wrz 25</span>
<span className="w-full text-center">paź 25</span>
<span className="w-full text-center">lis 25</span>
<span className="w-full text-center">gru 25</span>
<span className="w-full text-center">sty 26</span>
<span className="w-full text-center">lut 26</span>
</div>
</div>
</div>

<div className="bg-[#0b0f19] border border-white/5 rounded-xl p-6 flex flex-col">
<div className="flex justify-between items-start mb-2">
<h3 className="text-sm font-semibold text-white">Mapa wydatków</h3>
<i className="w-4 h-4 text-rose-500" data-lucide="calendar"></i>
</div>
<div className="text-[10px] text-slate-500 mb-6">luty 2026 • Im ciemniejszy kolor, tym więcej wydane</div>

<div className="flex-1 flex flex-col">

<div className="grid grid-cols-7 mb-2">
<div className="text-center text-[10px] text-slate-500">Pn</div>
<div className="text-center text-[10px] text-slate-500">Wt</div>
<div className="text-center text-[10px] text-slate-500">Śr</div>
<div className="text-center text-[10px] text-slate-500">Cz</div>
<div className="text-center text-[10px] text-slate-500">Pt</div>
<div className="text-center text-[10px] text-slate-500">Sb</div>
<div className="text-center text-[10px] text-slate-500">Nd</div>
</div>

<div className="grid grid-cols-7 gap-1.5 flex-1">

<div></div><div></div><div></div><div></div><div></div><div></div>

<div className="aspect-square rounded bg-[#161b26] flex items-center justify-center text-[10px] text-white heatmap-cell">1</div>

<div className="aspect-square rounded bg-[#161b26] flex items-center justify-center text-[10px] text-white heatmap-cell">2</div>
<div className="aspect-square rounded bg-[#161b26] flex items-center justify-center text-[10px] text-white heatmap-cell">3</div>
<div className="aspect-square rounded bg-[#f43f5e] flex items-center justify-center text-[10px] text-white heatmap-cell shadow-lg shadow-rose-900/40">4</div>
<div className="aspect-square rounded bg-[#161b26] flex items-center justify-center text-[10px] text-white heatmap-cell">5</div>
<div className="aspect-square rounded bg-[#1e293b] border border-indigo-500 flex items-center justify-center text-[10px] text-white heatmap-cell relative">
                                                6
                                            </div>
<div className="aspect-square rounded bg-[#161b26] flex items-center justify-center text-[10px] text-white heatmap-cell">7</div>
<div className="aspect-square rounded bg-[#161b26] flex items-center justify-center text-[10px] text-white heatmap-cell">8</div>

<div className="aspect-square rounded bg-[#161b26] flex items-center justify-center text-[10px] text-white heatmap-cell">9</div>
<div className="aspect-square rounded bg-[#161b26] flex items-center justify-center text-[10px] text-white heatmap-cell">10</div>
<div className="aspect-square rounded bg-[#161b26] flex items-center justify-center text-[10px] text-white heatmap-cell">11</div>
<div className="aspect-square rounded bg-[#161b26] flex items-center justify-center text-[10px] text-white heatmap-cell">12</div>
<div className="aspect-square rounded bg-[#161b26] flex items-center justify-center text-[10px] text-white heatmap-cell">13</div>
<div className="aspect-square rounded bg-[#161b26] flex items-center justify-center text-[10px] text-white heatmap-cell">14</div>
<div className="aspect-square rounded bg-[#161b26] flex items-center justify-center text-[10px] text-white heatmap-cell">15</div>

<div className="aspect-square rounded bg-[#161b26] flex items-center justify-center text-[10px] text-white heatmap-cell">16</div>
<div className="aspect-square rounded bg-[#161b26] flex items-center justify-center text-[10px] text-white heatmap-cell">17</div>
<div className="aspect-square rounded bg-[#161b26] flex items-center justify-center text-[10px] text-white heatmap-cell">18</div>
<div className="aspect-square rounded bg-[#161b26] flex items-center justify-center text-[10px] text-white heatmap-cell">19</div>
<div className="aspect-square rounded bg-[#161b26] flex items-center justify-center text-[10px] text-white heatmap-cell">20</div>
<div className="aspect-square rounded bg-[#161b26] flex items-center justify-center text-[10px] text-white heatmap-cell">21</div>
<div className="aspect-square rounded bg-[#161b26] flex items-center justify-center text-[10px] text-white heatmap-cell">22</div>

<div className="aspect-square rounded bg-[#161b26] flex items-center justify-center text-[10px] text-white heatmap-cell">23</div>
<div className="aspect-square rounded bg-[#161b26] flex items-center justify-center text-[10px] text-white heatmap-cell">24</div>
<div className="aspect-square rounded bg-[#161b26] flex items-center justify-center text-[10px] text-white heatmap-cell">25</div>
<div className="aspect-square rounded bg-[#161b26] flex items-center justify-center text-[10px] text-white heatmap-cell">26</div>
<div className="aspect-square rounded bg-[#161b26] flex items-center justify-center text-[10px] text-white heatmap-cell">27</div>
<div className="aspect-square rounded bg-[#161b26] flex items-center justify-center text-[10px] text-white heatmap-cell">28</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-950/50" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">Wszystko, czego potrzebujesz</h2>
<p className="text-slate-400">Kompletny zestaw narzędzi do zarządzania budżetem domowym i firmowym.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:camera-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Inteligentny Skaner</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Zrób zdjęcie paragonu lub wgraj PDF. Nasze AI automatycznie odczyta datę, kwotę i przypisze kategorię w ułamku sekundy.
                    </p>
</div>

<div className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="" icon="solar:chart-square-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Zaawansowana Analityka</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Wizualizuj swoje wydatki na interaktywnych wykresach. Śledź trendy, mapy cieplne wydatków i prognozy na przyszłe miesiące.
                    </p>
</div>

<div className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:cloud-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Cloud Sync</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Twoje dane są bezpieczne i zawsze dostępne. Synchronizacja w czasie rzeczywistym między wszystkimi Twoimi urządzeniami.
                    </p>
</div>

<div className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:target-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Cele i Budżety</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Ustaw limity wydatków dla kategorii. Zdefiniuj cele oszczędnościowe (np. wakacje) i śledź postęp w realizacji marzeń.
                    </p>
</div>

<div className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="" icon="solar:file-download-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Eksport Danych</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Pełna kontrola nad danymi. Generuj profesjonalne raporty PDF, eksportuj do Excel (XLSX) lub CSV jednym kliknięciem.
                    </p>
</div>

<div className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:refresh-circle-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Cykliczne Płatności</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Zapomnij o ręcznym wpisywaniu czynszu czy subskrypcji. Ustaw płatności stałe, a Budget Pro doda je automatycznie.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-[#030712]" id="roadmap">

<div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>
<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-300 text-xs font-medium mb-4">
<iconify-icon className="text-purple-400" icon="solar:map-point-wave-bold"></iconify-icon>
                        Przyszłość aplikacji
                    </div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Mapa Rozwoju</h2>
<p className="text-slate-400 mt-4 max-w-xl">
                        Nieustannie pracujemy nad nowymi funkcjami. Zobacz, co przygotowaliśmy w nadchodzących aktualizacjach Budget Pro.
                    </p>
</div>
<button className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white text-sm font-medium transition-colors flex items-center gap-2">
<iconify-icon icon="solar:vote-linear"></iconify-icon>
                    Zagłosuj na funkcje
                </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative p-6 rounded-2xl bg-[#0b0f19] border border-white/5 hover:border-indigo-500/30 transition-all duration-300 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4 border border-indigo-500/20">
<iconify-icon icon="solar:calendar-add-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Inteligentne Płatności</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-4">
                            Automatyczne dodawanie transakcji w określone dni (np. Netflix co 15-tego). Przewidywanie kosztów i opcja "pomiń następną płatność".
                        </p>
<div className="flex items-center gap-2 text-xs font-medium text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded w-fit">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-500"></span>
</span>
                            W trakcie prac
                        </div>
</div>
</div>

<div className="group relative p-6 rounded-2xl bg-[#0b0f19] border border-white/5 hover:border-purple-500/30 transition-all duration-300 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4 border border-purple-500/20">
<iconify-icon icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Smart Insights &amp; AI</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-4">
                            "Zostanie Ci X zł na koniec miesiąca". Wykrywanie anomalii w wydatkach i spersonalizowane sugestie oszczędności oparte na AI.
                        </p>
<div className="flex items-center gap-2 text-xs font-medium text-purple-400 bg-purple-500/10 px-2 py-1 rounded w-fit">
                            Planowane Q3 2026
                        </div>
</div>
</div>

<div className="group relative p-6 rounded-2xl bg-[#0b0f19] border border-white/5 hover:border-emerald-500/30 transition-all duration-300 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 border border-emerald-500/20">
<iconify-icon icon="solar:bank-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Integracje Bankowe (PSD2)</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-4">
                            Bezpieczny import transakcji bezpośrednio z Twojego banku w czasie rzeczywistym. Auto-kategoryzacja na podstawie historii.
                        </p>
<div className="flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded w-fit">
                            Planowane Q4 2026
                        </div>
</div>
</div>

<div className="group relative p-6 rounded-2xl bg-[#0b0f19] border border-white/5 hover:border-rose-500/30 transition-all duration-300 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-400 mb-4 border border-rose-500/20">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Współdzielenie Budżetu</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-4">
                            Wspólne konto dla par. Podział rachunków 50/50, czat przy transakcjach i transparentne rozliczenia "Kto za to zapłacił?".
                        </p>
<div className="flex items-center gap-2 text-xs font-medium text-rose-400 bg-rose-500/10 px-2 py-1 rounded w-fit">
                            Backlog
                        </div>
</div>
</div>

<div className="group relative p-6 rounded-2xl bg-[#0b0f19] border border-white/5 hover:border-blue-500/30 transition-all duration-300 overflow-hidden md:col-span-2 lg:col-span-2">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0 border border-blue-500/20">
<iconify-icon icon="solar:document-text-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-2">Zaawansowane Raporty &amp; Eksporty</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-4 max-w-2xl">
                                Generowanie raportów podatkowych (PIT), zestawienia dla księgowej oraz customowe raporty. Eksport do Google Sheets z automatyczną synchronizacją danych w tle.
                            </p>
<div className="flex items-center gap-2 text-xs font-medium text-blue-400 bg-blue-500/10 px-2 py-1 rounded w-fit">
                                Backlog
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="how-it-works">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative order-2 lg:order-1">

<div className="relative aspect-square max-w-md mx-auto">
<div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 bg-[#0f172a] border border-white/10 rounded-xl p-6 shadow-2xl rotate-[-6deg] z-10">
<div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
<div className="w-8 h-8 rounded bg-red-500/10 flex items-center justify-center text-red-400">
<iconify-icon icon="solar:file-pdf-linear"></iconify-icon>
</div>
<span className="text-xs text-slate-500">mbank_wyciag.pdf</span>
</div>
<div className="space-y-3 opacity-30">
<div className="h-2 w-full bg-slate-600 rounded"></div>
<div className="h-2 w-3/4 bg-slate-600 rounded"></div>
<div className="h-2 w-full bg-slate-600 rounded"></div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 bg-[#0f172a]/90 backdrop-blur-md border border-indigo-500/30 rounded-xl p-6 shadow-2xl rotate-[6deg] z-20 animate-float">
<div className="flex items-center gap-2 mb-6 text-indigo-400">
<iconify-icon className="animate-spin" icon="solar:magic-stick-3-linear"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wider">AI Processing</span>
</div>
<div className="space-y-4">
<div className="p-2 bg-white/5 rounded border border-white/5 flex justify-between items-center">
<span className="text-xs text-slate-300">Data</span>
<span className="text-xs text-emerald-400">✓ 24.10.2023</span>
</div>
<div className="p-2 bg-white/5 rounded border border-white/5 flex justify-between items-center">
<span className="text-xs text-slate-300">Kwota</span>
<span className="text-xs text-emerald-400">✓ 149.00 PLN</span>
</div>
<div className="p-2 bg-white/5 rounded border border-white/5 flex justify-between items-center">
<span className="text-xs text-slate-300">Kategoria</span>
<span className="text-xs text-indigo-400">Subskrypcje</span>
</div>
</div>
<div className="mt-6 pt-4 border-t border-white/5 text-center">
<div className="inline-flex items-center gap-1 text-xs text-slate-400">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon>
                                Zapisano w bazie
                            </div>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">Importuj z dowolnego źródła</h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">1</div>
<div>
<h3 className="text-lg font-medium text-white mb-2">Automatyzacja Excel i CSV</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                                Masz historię z banku w Excelu? Wrzuć plik, a my inteligentnie zmapujemy kolumny i wykryjemy kategorie na podstawie opisów transakcji.
                            </p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">2</div>
<div>
<h3 className="text-lg font-medium text-white mb-2">Analiza PDF (Wyciągi bankowe)</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                                Obsługujemy natywne wyciągi z większości polskich banków (mBank, PKO, ING, Santander). System wyciąga z nich esencję.
                            </p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">3</div>
<div>
<h3 className="text-lg font-medium text-white mb-2">Skanowanie Paragonów (OCR)</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                                Korzystając z biblioteki Tesseract.js oraz modeli AI, zamieniamy zdjęcie pogniecionego paragonu w uporządkowane dane cyfrowe.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#060a12]" id="pricing">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white mb-4">Proste zasady</h2>
<p className="text-slate-400">Wybierz plan dopasowany do Twoich potrzeb finansowych.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="p-8 rounded-2xl bg-[#0b0f19] border border-white/5 flex flex-col">
<h3 className="text-xl font-medium text-white mb-2">Starter</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-bold text-white">0 zł</span>
<span className="text-slate-500">/ mies</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
                            Ręczne dodawanie transakcji
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
                            Podstawowe wykresy
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
                            Do 5 budżetów
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
                            Eksport do CSV
                        </li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/10 text-white font-medium hover:bg-white/5 transition-colors">
                        Wybierz Starter
                    </button>
</div>

<div className="relative group p-[1px] rounded-2xl bg-gradient-to-b from-indigo-500 to-purple-600">
<div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 blur opacity-20 transition-opacity group-hover:opacity-40"></div>
<div className="relative h-full bg-[#0b0f19] rounded-2xl p-8 flex flex-col">
<div className="absolute top-0 right-0 px-3 py-1 bg-indigo-500 rounded-bl-xl rounded-tr-xl text-xs font-bold text-white uppercase tracking-wide">
                            Polecane
                        </div>
<h3 className="text-xl font-medium text-white mb-2">Budget Pro</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-bold text-white">19 zł</span>
<span className="text-slate-500">/ mies</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-bold"></iconify-icon>
                                Wszystko co w Starter
                            </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-bold"></iconify-icon>
                                 (Skanowanie paragonów)
                            </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-bold"></iconify-icon>
                                Import PDF i Excel
                            </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-bold"></iconify-icon>
                                Pełne raporty i prognozy
                            </li>
</ul>
<button className="w-full py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/25">
                            Rozpocznij okres próbny
                        </button>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#030712] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-16">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center text-indigo-400 text-xs font-bold">
                            BP
                        </div>
<span className="text-white font-medium">Budget Pro</span>
</div>
<p className="text-slate-500 text-sm max-w-xs">
                        Nowoczesne narzędzie do zarządzania finansami osobistymi z wykorzystaniem sztucznej inteligencji.
                    </p>
</div>
<div className="flex gap-16">
<div>
<h4 className="text-white font-medium mb-4 text-sm">Produkt</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Funkcje</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Cennik</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Aktualizacje</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Firma</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">O nas</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Kontakt</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Polityka prywatności</a></li>
</ul>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-600" style={{}}>© 2026 Budget Pro. Wszystkie prawa zastrzeżone.</p>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="logos:twitter" width="16"></iconify-icon></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="logos:github-icon" width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
