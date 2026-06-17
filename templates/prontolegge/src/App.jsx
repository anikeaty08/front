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



// Navigation Handler
function switchView(viewName) {
const allViews = ['dashboard', 'chat', 'calculator', 'ban', 'docs', 'alcohol', 'history', 'settings'];
allViews.forEach(v => {
const el = document.getElementById('view-' + v);
if(el) {
el.classList.add('hidden');
el.classList.remove('animate-slide-up');
}
});
const target = document.getElementById('view-' + viewName);
if(target) {
target.classList.remove('hidden');
void target.offsetWidth;
target.classList.add('animate-slide-up');
if(viewName === 'chat') scrollToBottom();
}
updateNavState(viewName);
}
function updateNavState(view) {
const navMap = {
'dashboard': 'nav-dashboard', 'calculator': 'nav-dashboard', 'ban': 'nav-dashboard', 'docs': 'nav-dashboard', 'alcohol': 'nav-dashboard',
'chat': 'nav-chat',
'history': 'nav-history',
'settings': 'nav-settings'
};
document.querySelectorAll('nav button').forEach(btn => {
btn.classList.remove('text-blue-400');
btn.classList.add('text-slate-500');
const dot = btn.querySelector('.bg-blue-400');
if(dot) dot.remove();
});
const activeId = navMap[view];
if(activeId) {
const btn = document.getElementById(activeId);
if(btn) {
btn.classList.remove('text-slate-500');
btn.classList.add('text-blue-400');
if(!btn.querySelector('.bg-blue-400')) {
btn.insertAdjacentHTML('beforeend', '<span class="absolute bottom-2 w-1 h-1 bg-blue-400 rounded-full shadow-[0_0_8px_rgba(96,165,250,1)]"></span>');
}
}
}
}
// Calculator Logic
function updateCalculator() {
const limit = parseInt(document.getElementById('calc-limit').value);
const speed = parseInt(document.getElementById('calc-speed').value);
const isNight = document.getElementById('toggle-night').classList.contains('bg-blue-600');
document.getElementById('calc-limit-display').textContent = limit + ' km/h';
document.getElementById('calc-speed-display').textContent = speed + ' km/h';
const tolerance = Math.max(5, speed * 0.05);
const netSpeed = speed - tolerance;
const diff = Math.max(0, netSpeed - limit);
let amount = 0, points = 0, susp = 'No', fascia = 'Entro i limiti';
if (diff > 0 && diff <= 10) { amount = 42; points = 0; fascia = 'Fascia 1 (+'+Math.floor(diff)+')'; }
else if (diff > 10 && diff <= 40) { amount = 173; points = 3; fascia = 'Fascia 2 (+'+Math.floor(diff)+')'; }
else if (diff > 40 && diff <= 60) { amount = 543; points = 6; susp = '1-3 mesi'; fascia = 'Fascia 3 (+'+Math.floor(diff)+')'; }
else if (diff > 60) { amount = 845; points = 10; susp = '6-12 mesi'; fascia = 'Fascia 4 (+'+Math.floor(diff)+')'; }
if (isNight && amount > 0) amount = Math.round(amount * 1.33);
document.getElementById('res-amount').textContent = '€' + amount;
document.getElementById('res-points').textContent = points > 0 ? '-' + points : '0';
document.getElementById('res-suspension').textContent = susp;
document.getElementById('res-fascia').innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span> ${fascia}`;
}
// Chat Logic
function sendChatMessage() {
const input = document.getElementById('chat-input');
const msg = input.value.trim();
if(!msg) return;
const container = document.getElementById('chat-messages');
const userHtml = `
<div class="flex items-end gap-3 flex-row-reverse animate-slide-up">
<div class="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center border border-white/5">
<span class="iconify text-white/70" data-icon="lucide:user" data-width="14"></span>
</div>
<div class="bg-blue-600 rounded-[24px] rounded-br-none p-4 max-w-[85%] shadow-[0_0_20px_rgba(37,99,235,0.3)] border border-blue-400/20">
<p class="text-sm leading-relaxed text-white font-medium">${msg}</p>
</div>
</div>`;
container.insertAdjacentHTML('beforeend', userHtml);
input.value = '';
scrollToBottom();
setTimeout(() => {
const botHtml = `
<div class="flex items-start gap-3 animate-slide-up">
<div class="h-8 w-8 rounded-full bg-gradient-to-t from-blue-600 to-cyan-500 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.4)] shrink-0">
<span class="iconify text-white" data-icon="lucide:sparkles" data-width="14"></span>
</div>
<div class="hyper-glass rounded-[24px] rounded-tl-none p-4 max-w-[90%] border-blue-500/10">
<p class="text-sm leading-relaxed text-slate-200 font-light">Ho ricevuto: "${msg}". Sto elaborando la richiesta nel database...</p>
</div>
</div>`;
container.insertAdjacentHTML('beforeend', botHtml);
scrollToBottom();
}, 800);
}
function scrollToBottom() {
const main = document.getElementById('main-container');
main.scrollTo({ top: main.scrollHeight, behavior: 'smooth' });
}



      function switchView(viewName) {
          const views = ['dashboard', 'chat', 'calculator'];

          views.forEach(v => {
              const el = document.getElementById('view-' + v);
              if(el) {
                  el.classList.add('hidden');
                  el.classList.remove('animate-slide-up');
              }
          });

          const target = document.getElementById('view-' + viewName);
          if(target) {
              target.classList.remove('hidden');
              void target.offsetWidth;
              target.classList.add('animate-slide-up');
          }

          // Update Nav visual state
          const navItems = document.querySelectorAll('nav button');
          navItems.forEach(btn => {
              btn.classList.remove('text-blue-400');
              btn.classList.add('text-slate-500');
              const dot = btn.querySelector('.bg-blue-400');
              if(dot) dot.remove();
          });

          let activeNavId = '';
          if(viewName === 'dashboard' || viewName === 'calculator') activeNavId = 'nav-dashboard';
          if(viewName === 'chat') activeNavId = 'nav-chat';

          if(activeNavId) {
              const activeBtn = document.getElementById(activeNavId);
              if(activeBtn) {
                  activeBtn.classList.remove('text-slate-500');
                  activeBtn.classList.add('text-blue-400');
                  if(!activeBtn.querySelector('.bg-blue-400')) {
                      activeBtn.insertAdjacentHTML('beforeend', '<span class="absolute bottom-2 w-1 h-1 bg-blue-400 rounded-full shadow-[0_0_8px_rgba(96,165,250,1)]"></span>');
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
      

<div className="w-full max-w-md h-full relative flex flex-col bg-black overflow-hidden shadow-2xl z-0">

<div className="absolute top-[-20%] left-[-20%] w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[120px] pointer-events-none animate-breathe mix-blend-screen"></div>
<div className="absolute bottom-[-10%] right-[-20%] w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none animate-breathe mix-blend-screen" style={{animationDelay: '2s'}}></div>
<div className="absolute top-[30%] left-[30%] w-[200px] h-[200px] bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none animate-breathe" style={{animationDelay: '4s'}}></div>

<div className="noise-overlay"></div>

<header className="pb-2 flex justify-between items-center z-20 animate-slide-up pt-11 px-5">
<div className="flex flex-col">
<span className="text-[10px] font-semibold text-blue-300/80 tracking-[0.2em] uppercase mb-1 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">
            System Ready
          </span>
<h1 className="font-medium tracking-tight text-white drop-shadow-md text-xl">
            ProntoLegge
          </h1>
</div>

<div className="h-10 w-10 rounded-full hyper-glass flex items-center justify-center overflow-hidden relative group cursor-pointer">
<span className="iconify text-white/80 group-hover:text-white transition-colors" data-icon="lucide:user" data-width="20"></span>
<div className="absolute top-2 right-2.5 h-1.5 w-1.5 bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
</div>
</header>

<main className="flex-1 overflow-y-auto no-scrollbar relative z-10 scroll-smooth px-4 pb-28 pt-2" id="main-container">

<div className="space-y-8 animate-slide-up" id="view-dashboard">

<div className="relative group">
<div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-[30px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="hyper-glass rounded-[30px] flex items-center p-1 pl-5 transition-all duration-300 focus-within:ring-1 focus-within:ring-blue-400/30">
<span className="iconify text-blue-400/80 mr-3" data-icon="lucide:sparkles" data-width="18"></span>
<input className="w-full py-3.5 bg-transparent text-sm text-white placeholder-slate-400/50 focus:outline-none font-light tracking-wide" placeholder="Descrivi l'infrazione..." type="text"/>
<button className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
<span className="iconify text-white" data-icon="lucide:mic" data-width="16"></span>
</button>
</div>
</div>

<div>
<div className="flex justify-between items-end mb-4 px-1">
<h2 className="text-xs font-semibold text-slate-400 tracking-wider uppercase">
                Strumenti Rapidi
              </h2>
</div>
<div className="grid grid-cols-2 gap-3">

<button className="glass-btn hyper-glass p-4 rounded-[28px] flex flex-col items-start gap-3 text-left group hover:bg-white/5 relative overflow-hidden" onclick="switchView('calculator')">
<div className="absolute -right-4 -top-4 w-20 h-20 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-400/30 transition-all"></div>
<div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-white/5 flex items-center justify-center text-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
<span className="iconify" data-icon="lucide:gauge" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div>
<h3 className="text-sm font-medium text-white tracking-tight">
                    Velocità
                  </h3>
<p className="text-[10px] text-slate-400 font-light mt-0.5">
                    Art. 142 CdS
                  </p>
</div>
</button>

<button className="glass-btn hyper-glass p-4 rounded-[28px] flex flex-col items-start gap-3 text-left group hover:bg-white/5 relative overflow-hidden" onclick="switchView('ban')">
<div className="absolute -right-4 -top-4 w-20 h-20 bg-red-500/20 rounded-full blur-2xl group-hover:bg-red-400/30 transition-all"></div>
<div className="h-10 w-10 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/10 border border-white/5 flex items-center justify-center text-red-300 shadow-[0_0_15px_rgba(239,68,68,0.15)]">
<span className="iconify" data-icon="lucide:ban" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div>
<h3 className="text-sm font-medium text-white tracking-tight">
                    Divieti
                  </h3>
<p className="text-[10px] text-slate-400 font-light mt-0.5">
                    Sosta e Fermata
                  </p>
</div>
</button>

<button className="glass-btn hyper-glass p-4 rounded-[28px] flex flex-col items-start gap-3 text-left group hover:bg-white/5 relative overflow-hidden" onclick="switchView('docs')">
<div className="absolute -right-4 -top-4 w-20 h-20 bg-purple-500/20 rounded-full blur-2xl group-hover:bg-purple-400/30 transition-all"></div>
<div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/10 border border-white/5 flex items-center justify-center text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
<span className="iconify" data-icon="lucide:file-warning" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div>
<h3 className="text-sm font-medium text-white tracking-tight">
                    Documenti
                  </h3>
<p className="text-[10px] text-slate-400 font-light mt-0.5">
                    Controllo Patenti
                  </p>
</div>
</button>

<button className="glass-btn hyper-glass p-4 rounded-[28px] flex flex-col items-start gap-3 text-left group hover:bg-white/5 relative overflow-hidden" onclick="switchView('alcohol')">
<div className="absolute -right-4 -top-4 w-20 h-20 bg-emerald-500/20 rounded-full blur-2xl group-hover:bg-emerald-400/30 transition-all"></div>
<div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-white/5 flex items-center justify-center text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
<span className="iconify" data-icon="lucide:wine" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div>
<h3 className="text-sm font-medium text-white tracking-tight">
                    Ebbrezza
                  </h3>
<p className="text-[10px] text-slate-400 font-light mt-0.5">
                    Art. 186 CdS
                  </p>
</div>
</button>
</div>
</div>

<div>
<h2 className="text-xs font-semibold text-slate-400 tracking-wider uppercase mb-4 px-1">
              Attività Recente
            </h2>
<div className="hyper-glass rounded-[32px] p-2 space-y-1">
<div className="p-3 rounded-[24px] hover:bg-white/5 flex items-center justify-between transition-colors cursor-pointer group">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
<span className="iconify text-blue-400" data-icon="lucide:message-circle" data-width="18"></span>
</div>
<div>
<p className="text-sm text-white font-medium group-hover:text-blue-200 transition-colors">
                      Targa Estera
                    </p>
<p className="text-[10px] text-slate-500 font-light">
                      2 min fa • Chat AI
                    </p>
</div>
</div>
<span className="iconify text-slate-600 group-hover:text-slate-400" data-icon="lucide:chevron-right" data-width="16"></span>
</div>
<div className="h-px bg-white/5 mx-4"></div>
<div className="p-3 rounded-[24px] hover:bg-white/5 flex items-center justify-between transition-colors cursor-pointer group">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
<span className="iconify text-orange-400" data-icon="lucide:calculator" data-width="18"></span>
</div>
<div>
<p className="text-sm text-white font-medium group-hover:text-orange-200 transition-colors">
                      Eccesso Velocità
                    </p>
<p className="text-[10px] text-slate-500 font-light">
                      1 ora fa • Calcolatore
                    </p>
</div>
</div>
<span className="iconify text-slate-600 group-hover:text-slate-400" data-icon="lucide:chevron-right" data-width="16"></span>
</div>
</div>
</div>
</div>

<div className="hidden h-full flex flex-col animate-slide-up" id="view-chat">
<div className="flex-1 flex flex-col justify-end space-y-6 pb-6 px-1" id="chat-messages">

<div className="flex items-end gap-3">
<div className="h-8 w-8 rounded-full bg-gradient-to-t from-blue-600 to-cyan-500 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.4)]">
<span className="iconify text-white" data-icon="lucide:sparkles" data-width="14"></span>
</div>
<div className="hyper-glass rounded-[24px] rounded-bl-none p-4 max-w-[85%] border-blue-500/10">
<p className="text-sm leading-relaxed text-slate-200 font-light">
                  Ciao Agente. Sono pronto. Cosa stiamo analizzando oggi?
                </p>
</div>
</div>
</div>

<div className="mt-auto pt-2">
<div className="relative">
<input className="w-full py-4 pl-5 pr-14 hyper-glass rounded-full text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors font-light" id="chat-input" onkeydown="if(event.key === 'Enter') sendChatMessage()" placeholder="Scrivi un messaggio..." type="text"/>
<button className="absolute right-2 top-2 h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-600/30 hover:scale-105 transition-transform active:scale-95" onclick="sendChatMessage()">
<span className="iconify text-white" data-icon="lucide:arrow-up" data-width="20"></span>
</button>
</div>
</div>
</div>

<div className="hidden space-y-6 animate-slide-up pt-2" id="view-calculator">
<div className="flex items-center gap-4 mb-4">
<button className="h-10 w-10 rounded-full hyper-glass flex items-center justify-center hover:bg-white/10 transition-colors" onclick="switchView('dashboard')">
<span className="iconify text-slate-300" data-icon="lucide:arrow-left" data-width="20"></span>
</button>
<h2 className="text-xl font-medium tracking-tight">Calcolo Velocità</h2>
</div>
<div className="hyper-glass p-6 rounded-[36px] space-y-8 relative overflow-hidden">
<div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/10 blur-[50px] rounded-full pointer-events-none"></div>

<div>
<div className="flex justify-between mb-4 items-end">
<label className="text-[11px] text-slate-400 uppercase tracking-widest font-semibold">
                  Limite Strada
                </label>
<div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white font-mono text-sm" id="calc-limit-display">
                  50 km/h
                </div>
</div>
<input className="group" id="calc-limit" max="130" min="30" oninput="updateCalculator()" step="10" type="range" value="50"/>
<div className="flex justify-between mt-2 px-1">
<span className="text-[10px] text-slate-600">30</span>
<span className="text-[10px] text-slate-600">130</span>
</div>
</div>

<div>
<div className="flex justify-between mb-4 items-end">
<label className="text-[11px] text-slate-400 uppercase tracking-widest font-semibold">
                  Velocità Rilevata
                </label>
<div className="px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-200 font-mono text-sm shadow-[0_0_10px_rgba(249,115,22,0.2)]" id="calc-speed-display">
                  92 km/h
                </div>
</div>
<input id="calc-speed" max="250" min="30" oninput="updateCalculator()" step="1" type="range" value="92"/>
</div>

<div className="flex items-center justify-between p-1">
<span className="text-sm text-slate-300 font-light">
                Orario Notturno (22-07)
              </span>
<div className="w-12 h-7 bg-slate-800 rounded-full relative cursor-pointer border border-white/10 shadow-inner" id="toggle-night" onclick="this.classList.toggle('bg-blue-600'); this.querySelector('div').classList.toggle('translate-x-5'); updateCalculator()">
<div className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ease-spring"></div>
</div>
</div>
</div>

<div className="relative rounded-[36px] overflow-hidden p-[1px] shadow-[0_20px_50px_-12px_rgba(59,130,246,0.5)]">
<div className="absolute inset-0 bg-gradient-to-br from-blue-400/50 to-purple-600/50 rounded-[36px]"></div>
<div className="relative bg-black/80 backdrop-blur-xl rounded-[35px] p-6 text-center space-y-5">
<div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[10px] font-bold tracking-widest uppercase" id="res-fascia">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                Fascia 2 (+37 km/h)
              </div>
<div className="py-2">
<span className="text-5xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400" id="res-amount">
                  €173
                </span>
<span className="text-lg text-slate-500">,00</span>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="bg-white/5 border border-white/5 p-3 rounded-2xl">
<span className="block text-slate-400 text-[10px] uppercase tracking-wider mb-1">
                    Punti
                  </span>
<span className="block text-xl font-semibold text-white" id="res-points">
                    -3
                  </span>
</div>
<div className="bg-white/5 border border-white/5 p-3 rounded-2xl">
<span className="block text-slate-400 text-[10px] uppercase tracking-wider mb-1">
                    Sospensione
                  </span>
<span className="block text-xl font-semibold text-slate-500" id="res-suspension">
                    No
                  </span>
</div>
</div>
<button className="w-full py-4 bg-white text-black rounded-[20px] font-semibold text-sm shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-95 transition-transform">
                Aggiungi al Verbale
              </button>
</div>
</div>
</div>

<div className="hidden space-y-6 animate-slide-up pt-2" id="view-ban">
<div className="flex items-center gap-4 mb-4">
<button className="h-10 w-10 rounded-full hyper-glass flex items-center justify-center hover:bg-white/10 transition-colors" onclick="switchView('dashboard')">
<span className="iconify text-slate-300" data-icon="lucide:arrow-left" data-width="20"></span>
</button>
<h2 className="text-xl font-medium tracking-tight">
              Codice della Strada
            </h2>
</div>
<div className="relative">
<span className="iconify absolute left-4 top-3.5 text-slate-400" data-icon="lucide:search" data-width="18"></span>
<input className="w-full pl-11 pr-4 py-3 hyper-glass rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all text-white placeholder-slate-500 font-light" placeholder="Cerca violazione..." type="text"/>
</div>
<div className="space-y-3">
<div className="hyper-glass p-4 rounded-2xl active:scale-[0.98] transition-transform cursor-pointer">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-semibold text-white">
                  Divieto di Sosta
                </h3>
<span className="text-[10px] bg-red-500/20 text-red-200 px-2 py-0.5 rounded-full border border-red-500/20">
                  Art. 158
                </span>
</div>
<p className="text-xs text-slate-400 leading-relaxed">
                Sosta su marciapiede, passaggio pedonale o pista ciclabile.
              </p>
<div className="mt-3 flex items-center gap-3 text-xs">
<span className="text-white font-mono">€ 87,00</span>
<span className="text-yellow-400 font-mono">-2 pt</span>
</div>
</div>
<div className="hyper-glass p-4 rounded-2xl active:scale-[0.98] transition-transform cursor-pointer">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-semibold text-white">
                  Uso del Cellulare
                </h3>
<span className="text-[10px] bg-orange-500/20 text-orange-200 px-2 py-0.5 rounded-full border border-orange-500/20">
                  Art. 173
                </span>
</div>
<p className="text-xs text-slate-400 leading-relaxed">
                Guida con utilizzo di apparecchi radiotelefonici non viva-voce.
              </p>
<div className="mt-3 flex items-center gap-3 text-xs">
<span className="text-white font-mono">€ 165,00</span>
<span className="text-yellow-400 font-mono">-5 pt</span>
</div>
</div>
<div className="hyper-glass p-4 rounded-2xl active:scale-[0.98] transition-transform cursor-pointer">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-semibold text-white">
                  Guida senza Cintura
                </h3>
<span className="text-[10px] bg-blue-500/20 text-blue-200 px-2 py-0.5 rounded-full border border-blue-500/20">
                  Art. 172
                </span>
</div>
<p className="text-xs text-slate-400 leading-relaxed">
                Mancato uso dei dispositivi di ritenuta o sistemi di sicurezza.
              </p>
<div className="mt-3 flex items-center gap-3 text-xs">
<span className="text-white font-mono">€ 83,00</span>
<span className="text-yellow-400 font-mono">-5 pt</span>
</div>
</div>
</div>
</div>

<div className="hidden space-y-6 animate-slide-up pt-2" id="view-docs">
<div className="flex items-center gap-4 mb-4">
<button className="h-10 w-10 rounded-full hyper-glass flex items-center justify-center hover:bg-white/10 transition-colors" onclick="switchView('dashboard')">
<span className="iconify text-slate-300" data-icon="lucide:arrow-left" data-width="20"></span>
</button>
<h2 className="text-xl font-medium tracking-tight">
              Controllo Documenti
            </h2>
</div>
<div className="hyper-glass p-5 rounded-[28px]">
<h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
              Checklist Obbligatoria
            </h3>
<div className="space-y-4">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-6 h-6 rounded-lg border border-white/20 bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
<input className="peer hidden" onchange="this.parentElement.classList.toggle('bg-blue-500', this.checked); this.parentElement.classList.toggle('border-blue-500', this.checked)" type="checkbox"/>
<span className="iconify text-white opacity-0 peer-checked:opacity-100" data-icon="lucide:check" data-width="16"></span>
</div>
<span className="text-sm text-white">
                  Patente di Guida (Validità)
                </span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-6 h-6 rounded-lg border border-white/20 bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
<input className="peer hidden" onchange="this.parentElement.classList.toggle('bg-blue-500', this.checked); this.parentElement.classList.toggle('border-blue-500', this.checked)" type="checkbox"/>
<span className="iconify text-white opacity-0 peer-checked:opacity-100" data-icon="lucide:check" data-width="16"></span>
</div>
<span className="text-sm text-white">Carta di Circolazione</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-6 h-6 rounded-lg border border-white/20 bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
<input className="peer hidden" onchange="this.parentElement.classList.toggle('bg-blue-500', this.checked); this.parentElement.classList.toggle('border-blue-500', this.checked)" type="checkbox"/>
<span className="iconify text-white opacity-0 peer-checked:opacity-100" data-icon="lucide:check" data-width="16"></span>
</div>
<span className="text-sm text-white">Certificato Assicurativo</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-6 h-6 rounded-lg border border-white/20 bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
<input className="peer hidden" onchange="this.parentElement.classList.toggle('bg-blue-500', this.checked); this.parentElement.classList.toggle('border-blue-500', this.checked)" type="checkbox"/>
<span className="iconify text-white opacity-0 peer-checked:opacity-100" data-icon="lucide:check" data-width="16"></span>
</div>
<span className="text-sm text-white">Revisione Periodica</span>
</label>
</div>
</div>
</div>

<div className="hidden space-y-6 animate-slide-up pt-2" id="view-alcohol">
<div className="flex items-center gap-4 mb-4">
<button className="h-10 w-10 rounded-full hyper-glass flex items-center justify-center hover:bg-white/10 transition-colors" onclick="switchView('dashboard')">
<span className="iconify text-slate-300" data-icon="lucide:arrow-left" data-width="20"></span>
</button>
<h2 className="text-xl font-medium tracking-tight">Tasso Alcolemico</h2>
</div>
<div className="hyper-glass p-6 rounded-[36px] flex flex-col items-center justify-center py-10">
<div className="w-40 h-40 rounded-full border-4 border-white/5 flex items-center justify-center relative">
<div className="absolute inset-0 border-4 border-t-emerald-400 border-r-transparent border-b-transparent border-l-transparent rounded-full rotate-45"></div>
<div className="text-center">
<span className="block text-4xl font-bold text-white tracking-tighter">
                  0.0
                </span>
<span className="text-xs text-slate-400 uppercase tracking-widest">
                  g/litro
                </span>
</div>
</div>
<p className="mt-6 text-center text-sm text-slate-400 max-w-[200px]">
              Funzionalità in fase di calibrazione con etilometro bluetooth.
            </p>
</div>
</div>

<div className="hidden space-y-6 animate-slide-up" id="view-history">
<h2 className="text-xl font-medium tracking-tight px-1">Cronologia</h2>
<div className="space-y-2">
<p className="text-xs font-semibold text-slate-500 uppercase tracking-wider pl-2">
              Oggi
            </p>
<div className="hyper-glass rounded-2xl p-4 flex items-center justify-between">
<div className="flex gap-3">
<div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
<span className="iconify" data-icon="lucide:search" data-width="18"></span>
</div>
<div>
<p className="text-sm text-white font-medium">Targa Estera</p>
<p className="text-[10px] text-slate-400">
                    14:30 • Chat Assistant
                  </p>
</div>
</div>
<span className="text-xs text-slate-500">Guarda</span>
</div>
<div className="hyper-glass rounded-2xl p-4 flex items-center justify-between">
<div className="flex gap-3">
<div className="h-10 w-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400">
<span className="iconify" data-icon="lucide:calculator" data-width="18"></span>
</div>
<div>
<p className="text-sm text-white font-medium">Eccesso Velocità</p>
<p className="text-[10px] text-slate-400">11:15 • Calcolatore</p>
</div>
</div>
<span className="text-xs text-slate-500">Guarda</span>
</div>
</div>
</div>

<div className="hidden space-y-6 animate-slide-up" id="view-settings">
<h2 className="text-xl font-medium tracking-tight px-1">Impostazioni</h2>
<div className="hyper-glass rounded-[32px] overflow-hidden">
<div className="p-4 flex items-center justify-between border-b border-white/5">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:moon" data-width="16"></span>
</div>
<span className="text-sm text-white">Modalità Scura</span>
</div>
<div className="w-10 h-6 bg-blue-600 rounded-full relative">
<div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
</div>
</div>
<div className="p-4 flex items-center justify-between border-b border-white/5">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:bell" data-width="16"></span>
</div>
<span className="text-sm text-white">Notifiche</span>
</div>
<div className="w-10 h-6 bg-slate-700 rounded-full relative">
<div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
</div>
</div>
<div className="p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:database" data-width="16"></span>
</div>
<span className="text-sm text-white">Dati Offline</span>
</div>
<span className="text-xs text-blue-400 font-medium">Aggiorna</span>
</div>
</div>
<button className="w-full py-3 text-sm text-red-400 font-medium hyper-glass rounded-xl">
            Esci dal sistema
          </button>
</div>
</main>

<div className="fixed left-0 right-0 flex justify-center z-50 pointer-events-none bottom-4">
<nav className="hyper-glass-nav h-[60px] rounded-[24px] flex items-center px-1 pointer-events-auto gap-0.5">
<button className="relative w-14 h-full flex flex-col items-center justify-center gap-1 text-blue-400 transition-all duration-300 group" id="nav-dashboard" onclick="switchView('dashboard')">
<div className="p-1.5 rounded-xl group-hover:bg-white/5 transition-colors">
<span className="iconify group-hover:scale-110 transition-transform duration-300" data-icon="lucide:layout-grid" data-strokeWidth="2" data-width="20"></span>
</div>
<span className="absolute bottom-2 w-1 h-1 bg-blue-400 rounded-full shadow-[0_0_8px_rgba(96,165,250,1)]"></span>
</button>
<button className="w-14 h-full flex flex-col items-center justify-center gap-1 text-slate-500 hover:text-white transition-all duration-300 group" id="nav-chat" onclick="switchView('chat')">
<div className="p-1.5 rounded-xl group-hover:bg-white/5 transition-colors">
<span className="iconify group-hover:scale-110 transition-transform duration-300" data-icon="lucide:message-square-dashed" data-strokeWidth="1.5" data-width="20"></span>
</div>
</button>
<div className="w-px h-6 bg-white/10 mx-1"></div>
<button className="w-14 h-full flex flex-col items-center justify-center gap-1 text-slate-500 hover:text-white transition-all duration-300 group" id="nav-history" onclick="switchView('history')">
<div className="p-1.5 rounded-xl group-hover:bg-white/5 transition-colors">
<span className="iconify group-hover:scale-110 transition-transform duration-300" data-icon="lucide:history" data-strokeWidth="1.5" data-width="20"></span>
</div>
</button>
<button className="w-14 h-full flex flex-col items-center justify-center gap-1 text-slate-500 hover:text-white transition-all duration-300 group" id="nav-settings" onclick="switchView('settings')">
<div className="p-1.5 rounded-xl group-hover:bg-white/5 transition-colors">
<span className="iconify group-hover:scale-110 transition-transform duration-300" data-icon="lucide:settings-2" data-strokeWidth="1.5" data-width="20"></span>
</div>
</button>
</nav>
</div>
</div>


    </>
  );
}
