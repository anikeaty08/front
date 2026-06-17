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
darkMode: 'class',
theme: {
extend: {
colors: {
magma: {
50: '#fff7ed',
100: '#ffedd5',
500: '#f97316',
600: '#ea580c', // Burnt Orange
700: '#c2410c',
800: '#9a3412',
900: '#7f1d1d', // Deep Red
950: '#050505', // Deepest Matte Black
},
glass: {
surface: 'rgba(5, 5, 5, 0.6)',
border: 'rgba(255, 255, 255, 0.08)',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
animation: {
'blob': 'blob 10s infinite',
'beam': 'beam 4s linear infinite',
'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
beam: {
'0%': { transform: 'rotate(0deg)' },
'100%': { transform: 'rotate(360deg)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



        // Init Icons
        lucide.createIcons();

        // State & DOM Elements
        const modal = document.getElementById('sale-modal');
        const modalContent = document.getElementById('modal-content');
        const drawer = document.getElementById('drawer');
        const successView = document.getElementById('success-view');
        const saleForm = document.getElementById('sale-form');

        // Onboarding
        function endOnboarding() {
            const ob = document.getElementById('onboarding');
            ob.style.opacity = '0';
            setTimeout(() => {
                ob.style.display = 'none';
                // Trigger subtle "Systems Online" blink effect on dashboard
                document.getElementById('view-dashboard').classList.add('animate-pulse');
                setTimeout(() => document.getElementById('view-dashboard').classList.remove('animate-pulse'), 500);
            }, 500);
        }

        // Navigation Logic
        function switchTab(tabId) {
            // Reset nav styles
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.classList.remove('text-magma-500');
                btn.classList.add('text-zinc-500');
            });
            event.currentTarget.classList.remove('text-zinc-500');
            event.currentTarget.classList.add('text-magma-500');

            // Hide all views
            document.getElementById('view-dashboard').classList.add('hidden');
            document.getElementById('view-kanban').classList.add('hidden');
            document.getElementById('view-clients').classList.add('hidden');

            // Show selected view
            if(tabId === 'dashboard') document.getElementById('view-dashboard').classList.remove('hidden');
            if(tabId === 'kanban') document.getElementById('view-kanban').classList.remove('hidden');
            if(tabId === 'clients') document.getElementById('view-clients').classList.remove('hidden');
        }

        // Modal Logic
        function openSaleModal() {
            modal.style.opacity = '1';
            modal.style.pointerEvents = 'auto';
            modalContent.style.transform = 'translateY(0)';
            successView.classList.add('hidden');
            saleForm.reset();
        }

        function closeSaleModal() {
            modalContent.style.transform = 'translateY(100%)';
            modal.style.opacity = '0';
            modal.style.pointerEvents = 'none';
        }

        // Sale Handling
        function handleSale(e) {
            e.preventDefault();
            
            // 1. Audio simulation
            // const audio = new Audio('path_to_sound.mp3'); audio.play(); (Commented for no-assets requirement)

            // 2. Success Animation
            successView.classList.remove('hidden');
            
            // 3. Logic Simulation
            setTimeout(() => {
                closeSaleModal();
                showToast();
                
                // Add notification dot
                document.getElementById('notif-dot').classList.remove('hidden');
                
                // Simulate particle effect flying to bell (Abstracted via simple timeout logic)
            }, 1500);
        }

        function showToast() {
            const toast = document.getElementById('toast');
            toast.style.transform = 'translate(-50%, 0)';
            setTimeout(() => {
                toast.style.transform = 'translate(-50%, -150%)';
            }, 3000);
        }

        // Notification Drawer
        document.getElementById('notif-btn').addEventListener('click', () => {
            drawer.style.transform = 'translateX(0)';
            document.getElementById('notif-dot').classList.add('hidden'); // Clear notification
        });

        document.getElementById('close-drawer').addEventListener('click', () => {
            drawer.style.transform = 'translateX(100%)';
        });

        // Feedback
        function triggerFeedback() {
            // Logic to trigger n8n webhook would go here
            alert("Feedback request sent via WhatsApp API");
        }

        // Kanban simple drag simulation (Visual only)
        const kanbanCards = document.querySelectorAll('.cursor-grab');
        kanbanCards.forEach(card => {
            card.addEventListener('mousedown', () => {
                card.classList.add('scale-95');
            });
            card.addEventListener('mouseup', () => {
                card.classList.remove('scale-95');
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
      

<div className="fixed inset-0 z-0 overflow-hidden">
<div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-magma-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob"></div>
<div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-magma-900 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob" style={{animationDelay: '2s'}}></div>
<div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-magma-800 rounded-full mix-blend-screen filter blur-[120px] opacity-15 animate-blob" style={{animationDelay: '4s'}}></div>
<div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
</div>
<div className="noise-overlay"></div>

<div className="relative z-10 flex flex-col h-screen overflow-hidden font-sans text-sm text-zinc-300" id="app">

<header className="h-16 flex items-center justify-between px-6 border-b border-white/5 bg-magma-950/50 backdrop-blur-md sticky top-0 z-40">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-magma-600 animate-pulse"></div>
<h1 className="text-lg font-semibold tracking-tight text-white text-glow">DASHCORE</h1>
</div>
<button className="relative p-2 rounded-full hover:bg-white/5 transition-colors group" id="notif-btn">
<i className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors stroke-[1.5]" data-lucide="bell"></i>
<span className="absolute top-2 right-2 w-2 h-2 bg-magma-600 rounded-full animate-pulse shadow-[0_0_8px_#ea580c]" id="notif-dot"></span>
</button>
</header>

<main className="flex-1 overflow-y-auto overflow-x-hidden p-4 pb-24 scroll-smooth no-scrollbar" id="main-content">

<div className="space-y-6" id="view-dashboard">

<div className="flex items-center justify-between">
<div>
<p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">System Status: Online</p>
<h2 className="text-2xl font-normal text-white tracking-tight mt-1">Command Center</h2>
</div>
<div className="flex items-center gap-2 bg-white/5 rounded-full px-3 py-1 border border-white/5">
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
<span className="text-xs font-mono text-zinc-300">LIVE</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="border-beam-card h-32">
<div className="border-beam-content h-full p-5 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="text-xs text-zinc-400 font-medium">SALDO TOTAL</span>
<i className="w-4 h-4 text-magma-600" data-lucide="wallet"></i>
</div>
<div>
<h3 className="text-3xl font-mono text-white tracking-tight">R$ 124.592<span className="text-zinc-500 text-lg">,00</span></h3>
<div className="flex items-center gap-1 mt-1 text-emerald-500 text-xs">
<i className="w-3 h-3" data-lucide="trending-up"></i>
<span>+12.5% this week</span>
</div>
</div>
</div>
</div>

<div className="bg-black/40 border border-white/5 backdrop-blur-xl rounded-xl p-5 h-32 relative overflow-hidden group hover:border-white/10 transition-colors">
<div className="absolute bottom-0 left-0 right-0 h-12 opacity-30">

<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 100 20">
<path d="M0 20 L0 15 L10 12 L20 16 L30 10 L40 14 L50 8 L60 12 L70 5 L80 10 L90 4 L100 8 L100 20 Z" fill="url(#gradOrange)"></path>
<path d="M0 15 L10 12 L20 16 L30 10 L40 14 L50 8 L60 12 L70 5 L80 10 L90 4 L100 8" fill="none" stroke="#ea580c" strokeWidth="1" vector-effect="non-scaling-stroke"></path>
<defs>
<lineargradient id="gradOrange" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#ea580c', stopOpacity: '0.5'}}></stop>
<stop offset="100%" style={{stopColor: '#ea580c', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
</svg>
</div>
<div className="relative z-10 flex flex-col justify-between h-full">
<span className="text-xs text-zinc-400 font-medium">FATURAMENTO MENSAL</span>
<h3 className="text-2xl font-mono text-white tracking-tight">R$ 42.850<span className="text-zinc-600 text-sm">,50</span></h3>
</div>
</div>

<div className="bg-black/40 border border-white/5 backdrop-blur-xl rounded-xl p-5 h-32 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="text-xs text-zinc-400 font-medium">LUCRO LÍQUIDO</span>
<i className="w-4 h-4 text-zinc-600" data-lucide="pie-chart"></i>
</div>
<div className="space-y-1">
<h3 className="text-2xl font-mono text-white tracking-tight">R$ 28.100<span className="text-zinc-600 text-sm">,10</span></h3>
<div className="w-full bg-white/5 rounded-full h-1 mt-2">
<div className="bg-gradient-to-r from-magma-800 to-magma-500 h-1 rounded-full w-[65%] shadow-[0_0_10px_#ea580c]"></div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="col-span-1 bg-black/40 border border-white/5 backdrop-blur-xl rounded-xl p-6 flex flex-col items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-magma-900/10 to-transparent"></div>
<h4 className="text-xs text-zinc-400 mb-4 font-medium uppercase tracking-wider relative z-10">ROI Efficiency</h4>
<div className="relative w-32 h-32 flex items-center justify-center">

<svg className="w-full h-full -rotate-90">
<circle cx="64" cy="64" fill="none" r="58" stroke="rgba(255,255,255,0.05)" strokeWidth="8"></circle>
<circle className="drop-shadow-[0_0_8px_rgba(234,88,12,0.6)]" cx="64" cy="64" fill="none" r="58" stroke="#ea580c" stroke-dasharray="364" stroke-dashoffset="60" strokeLinecap="round" strokeWidth="8"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-2xl font-mono font-semibold text-white">5.2x</span>
<span className="text-[10px] text-zinc-500">ROAS</span>
</div>
</div>
<div className="mt-4 w-full flex justify-between text-xs text-zinc-500 font-mono">
<span>ADS: R$ 5k</span>
<span>REV: R$ 26k</span>
</div>
</div>

<div className="col-span-1 md:col-span-2 bg-black/40 border border-white/5 backdrop-blur-xl rounded-xl p-6 relative">
<div className="flex justify-between items-center mb-4">
<h4 className="text-xs text-zinc-400 font-medium uppercase tracking-wider">Growth Trajectory</h4>
<div className="flex gap-2">
<button className="text-[10px] px-2 py-1 bg-white/5 rounded text-white border border-white/10">7D</button>
<button className="text-[10px] px-2 py-1 hover:bg-white/5 rounded text-zinc-500">30D</button>
</div>
</div>
<div className="h-32 w-full flex items-end gap-1">

<div className="w-full bg-white/5 rounded-t h-[40%] hover:bg-magma-900/50 transition-all duration-500"></div>
<div className="w-full bg-white/5 rounded-t h-[60%] hover:bg-magma-900/50 transition-all duration-500"></div>
<div className="w-full bg-white/5 rounded-t h-[30%] hover:bg-magma-900/50 transition-all duration-500"></div>
<div className="w-full bg-white/5 rounded-t h-[80%] hover:bg-magma-900/50 transition-all duration-500 relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10">R$ 597</div>
</div>
<div className="w-full bg-white/5 rounded-t h-[50%] hover:bg-magma-900/50 transition-all duration-500"></div>
<div className="w-full bg-magma-600 rounded-t h-[90%] shadow-[0_0_15px_rgba(234,88,12,0.4)] relative"></div>
</div>
</div>
</div>

<div className="bg-black/40 border border-white/5 backdrop-blur-xl rounded-xl p-5 flex items-center justify-between">
<div>
<span className="text-xs text-zinc-400 font-medium uppercase">NPS Score</span>
<div className="flex items-center gap-2 mt-1">
<span className="text-xl font-mono text-white">72</span>
<span className="text-xs text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">Excellent</span>
</div>
</div>
<button className="px-4 py-2 text-xs font-medium text-white bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-magma-600/50 transition-all flex items-center gap-2" onclick="triggerFeedback()">
<i className="w-3 h-3" data-lucide="message-square"></i>
                        Solicitar Feedback
                    </button>
</div>
</div>

<div className="hidden h-full flex flex-col" id="view-kanban">
<div className="flex justify-between items-center mb-4 px-2">
<h2 className="text-xl font-normal text-white tracking-tight">Pipeline</h2>
<span className="text-xs text-zinc-500 font-mono">8 Active Deals</span>
</div>
<div className="flex gap-4 overflow-x-auto h-[65vh] pb-4 px-2 snap-x">

<div className="min-w-[260px] flex flex-col gap-3 snap-start">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-zinc-600"></div>
<span className="text-xs font-mono text-zinc-400 uppercase">Lead Frio</span>
</div>

<div className="bg-zinc-900/50 border border-white/5 p-4 rounded-lg hover:border-white/10 cursor-grab active:cursor-grabbing group transition-all">
<div className="flex justify-between mb-2">
<span className="text-xs bg-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded">#TAG</span>
</div>
<h4 className="text-sm text-white font-medium">Empresa Alpha</h4>
<p className="text-xs text-zinc-500 mt-1">R$ 597,00</p>
</div>
<div className="bg-zinc-900/50 border border-white/5 p-4 rounded-lg hover:border-white/10 cursor-grab active:cursor-grabbing group transition-all">
<h4 className="text-sm text-white font-medium">Beta Corp</h4>
<p className="text-xs text-zinc-500 mt-1">R$ 597,00</p>
</div>
</div>

<div className="min-w-[260px] flex flex-col gap-3 snap-start">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-magma-500 animate-pulse"></div>
<span className="text-xs font-mono text-magma-500 uppercase">Fechando</span>
</div>

<div className="border-beam-card cursor-grab active:cursor-grabbing">
<div className="border-beam-content bg-zinc-900/90 p-4">
<div className="flex justify-between mb-2">
<span className="text-xs bg-magma-900/30 text-magma-400 border border-magma-900/50 px-1.5 py-0.5 rounded">HOT</span>
<i className="w-3 h-3 text-magma-500" data-lucide="flame"></i>
</div>
<h4 className="text-sm text-white font-medium">Studio Design X</h4>
<p className="text-xs text-zinc-400 mt-1 font-mono">R$ 597,00</p>
<div className="mt-3 flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-zinc-700 border border-black flex items-center justify-center text-[8px]">JD</div>
</div>
</div>
</div>
</div>

<div className="min-w-[260px] flex flex-col gap-3 snap-start" id="col-done">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-xs font-mono text-emerald-500 uppercase">Concluído</span>
</div>
<div className="h-full border-2 border-dashed border-white/5 rounded-lg flex items-center justify-center text-xs text-zinc-600 bg-white/[0.01]">
                             Drop to Close
                         </div>
</div>
</div>
</div>

<div className="hidden space-y-6" id="view-clients">
<div className="flex justify-between items-center">
<h2 className="text-xl font-normal text-white tracking-tight">Base de Clientes</h2>
<button className="flex items-center gap-1 px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-xs text-zinc-300 hover:bg-white/10 hover:text-white transition-all group">
<i className="w-3 h-3 group-hover:text-magma-500" data-lucide="download"></i>
                        CSV
                    </button>
</div>
<div className="border border-white/5 rounded-xl overflow-hidden bg-black/40 backdrop-blur-md">
<table className="w-full text-left border-collapse">
<thead>
<tr className="text-xs text-zinc-500 font-mono border-b border-white/5 bg-white/[0.02]">
<th className="p-4 font-normal">NOME</th>
<th className="p-4 font-normal">STATUS</th>
<th className="p-4 font-normal text-right">VALOR</th>
</tr>
</thead>
<tbody className="text-sm text-zinc-300">
<tr className="laser-row border-b border-white/5 transition-all duration-300 cursor-pointer">
<td className="p-4">
<div className="font-medium text-white">Carlos Silva</div>
<div className="text-xs text-zinc-500">carlos@email.com</div>
</td>
<td className="p-4"><span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 text-xs border border-emerald-500/20">Ativo</span></td>
<td className="p-4 text-right font-mono">R$ 597,00</td>
</tr>
<tr className="laser-row border-b border-white/5 transition-all duration-300 cursor-pointer">
<td className="p-4">
<div className="font-medium text-white">Mariana Costa</div>
<div className="text-xs text-zinc-500">11 9999-9999</div>
</td>
<td className="p-4"><span className="px-2 py-0.5 rounded-full bg-magma-500/10 text-magma-500 text-xs border border-magma-500/20">Pendente</span></td>
<td className="p-4 text-right font-mono">R$ 597,00</td>
</tr>
<tr className="laser-row transition-all duration-300 cursor-pointer">
<td className="p-4">
<div className="font-medium text-white">Tech Solutions</div>
<div className="text-xs text-zinc-500">financeiro@tech.sol</div>
</td>
<td className="p-4"><span className="px-2 py-0.5 rounded-full bg-zinc-500/10 text-zinc-400 text-xs border border-zinc-500/20">Onboarding</span></td>
<td className="p-4 text-right font-mono">R$ 1.200,00</td>
</tr>
</tbody>
</table>
</div>
</div>
</main>

<nav className="h-20 fixed bottom-0 left-0 w-full z-40 px-6 flex items-center justify-between backdrop-blur-xl bg-black/60 border-t border-white/5" id="bottom-nav">
<button className="nav-btn active flex flex-col items-center gap-1 text-magma-500 transition-colors" onclick="switchTab('dashboard')">
<i className="w-5 h-5" data-lucide="layout-dashboard"></i>
<span className="text-[10px] font-medium">Dash</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1 text-zinc-500 hover:text-white transition-colors" onclick="switchTab('kanban')">
<i className="w-5 h-5" data-lucide="kanban-square"></i>
<span className="text-[10px] font-medium">Kanban</span>
</button>

<div className="relative -top-6 group">
<button className="magma-fab w-14 h-14 rounded-full flex items-center justify-center text-white transition-transform transform group-hover:scale-110 active:scale-95 animate-float relative z-10" onclick="openSaleModal()">
<i className="w-7 h-7 stroke-2" data-lucide="plus"></i>
</button>

<div className="absolute top-2 left-2 w-10 h-10 bg-magma-600 blur-[20px] opacity-60 animate-pulse-fast pointer-events-none"></div>
</div>
<button className="nav-btn flex flex-col items-center gap-1 text-zinc-500 hover:text-white transition-colors" onclick="switchTab('clients')">
<i className="w-5 h-5" data-lucide="users"></i>
<span className="text-[10px] font-medium">Clientes</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1 text-zinc-500 hover:text-white transition-colors" onclick="switchTab('finance')">
<i className="w-5 h-5" data-lucide="banknote"></i>
<span className="text-[10px] font-medium">Finan.</span>
</button>
</nav>

<div className="fixed inset-y-0 right-0 w-80 bg-black/90 backdrop-blur-xl border-l border-white/10 transform translate-x-full transition-transform duration-300 z-50 p-6 flex flex-col" id="drawer">
<div className="flex justify-between items-center mb-6">
<h3 className="text-sm font-semibold tracking-wider text-white uppercase">System Logs</h3>
<button className="text-zinc-500 hover:text-white" id="close-drawer"><i className="w-5 h-5" data-lucide="x"></i></button>
</div>
<div className="space-y-4 overflow-y-auto flex-1">

<div className="flex gap-3 relative">
<div className="absolute left-[5px] top-2 bottom-0 w-px bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-magma-500 mt-1.5 relative z-10 ring-4 ring-black"></div>
<div>
<p className="text-xs text-white">Nova Venda Registrada</p>
<p className="text-[10px] text-zinc-500 font-mono mt-0.5">14:02 • API OK</p>
<div className="mt-2 p-2 bg-white/5 rounded border-l-2 border-magma-600 text-xs text-zinc-300">
                            Cliente: Lucas M.<br/>Valor: R$ 597,00
                        </div>
</div>
</div>
<div className="flex gap-3 relative">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-600 mt-1.5 relative z-10 ring-4 ring-black"></div>
<div>
<p className="text-xs text-zinc-300">Campanha Otimizada</p>
<p className="text-[10px] text-zinc-500 font-mono mt-0.5">10:30 • System</p>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center pointer-events-none opacity-0 transition-opacity duration-300" id="sale-modal">

<div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onclick="closeSaleModal()"></div>

<div className="pointer-events-auto bg-[#0a0a0a] w-full sm:w-[450px] rounded-t-2xl sm:rounded-2xl border border-white/10 p-6 transform translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] relative overflow-hidden" id="modal-content">

<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-magma-900 via-magma-500 to-magma-900"></div>
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg font-medium text-white flex items-center gap-2">
<i className="w-4 h-4 text-magma-500" data-lucide="zap"></i>
                        Nova Venda
                    </h3>
<button className="text-zinc-500 hover:text-white" onclick="closeSaleModal()"><i className="w-5 h-5" data-lucide="x"></i></button>
</div>
<form className="space-y-4" id="sale-form" onsubmit="handleSale(event)">
<div>
<label className="text-[10px] uppercase text-zinc-500 font-bold tracking-wider mb-1 block">Valor (Locked)</label>
<div className="relative">
<i className="absolute left-3 top-2.5 w-4 h-4 text-magma-600" data-lucide="lock"></i>
<input className="w-full pl-10 pr-3 py-2 rounded bg-magma-900/10 border-magma-900/30 text-magma-500 font-mono font-bold cursor-not-allowed" disabled="" type="text" value="R$ 597,00"/>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="text-[10px] uppercase text-zinc-500 font-bold tracking-wider mb-1 block">Nome</label>
<input className="w-full px-3 py-2 rounded text-sm" placeholder="Nome Completo" required="" type="text"/>
</div>
<div>
<label className="text-[10px] uppercase text-zinc-500 font-bold tracking-wider mb-1 block">CPF</label>
<input className="w-full px-3 py-2 rounded text-sm font-mono" placeholder="000.000.000-00" type="text"/>
</div>
</div>
<div>
<label className="text-[10px] uppercase text-zinc-500 font-bold tracking-wider mb-1 block">WhatsApp</label>
<input className="w-full px-3 py-2 rounded text-sm font-mono" placeholder="(00) 00000-0000" type="tel"/>
</div>
<button className="w-full py-3 mt-4 bg-magma-600 hover:bg-magma-500 text-white font-medium rounded shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:shadow-[0_0_30px_rgba(234,88,12,0.5)] transition-all flex items-center justify-center gap-2 group" type="submit">
<span className="group-hover:tracking-widest transition-all">PROCESSAR VENDA</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</form>

<div className="hidden absolute inset-0 bg-[#0a0a0a] flex flex-col items-center justify-center z-20" id="success-view">
<div className="w-16 h-16 rounded-full border-2 border-magma-600 flex items-center justify-center text-magma-500 mb-4 animate-[beam_2s_linear_infinite]">
<i className="w-8 h-8" data-lucide="check"></i>
</div>
<h3 className="text-xl text-white font-medium">Venda Registrada</h3>
<p className="text-zinc-500 text-sm mt-2">Sincronizando com n8n...</p>
</div>
</div>
</div>

<div className="fixed top-20 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-xl border border-magma-500/30 text-white px-4 py-2 rounded-full flex items-center gap-3 shadow-[0_0_20px_rgba(0,0,0,0.5)] translate-y-[-150%] transition-transform duration-300 z-[70]" id="toast">
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"></div>
<span className="text-xs font-medium tracking-wide">DADOS ENVIADOS</span>
</div>

<div className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-8 text-center transition-opacity duration-500" id="onboarding">
<div className="w-20 h-20 rounded-full bg-magma-600/20 flex items-center justify-center mb-6 animate-pulse relative">
<i className="w-10 h-10 text-magma-500" data-lucide="cpu"></i>
<div className="absolute inset-0 border border-magma-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
</div>
<h1 className="text-3xl font-bold text-white tracking-tight mb-2">SYSTEM BOOT_</h1>
<p className="text-zinc-400 max-w-xs mx-auto mb-8 font-mono text-xs">Initializing Nexus Core Protocol v2.4. Metrics tracking enabled.</p>
<button className="px-8 py-3 bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-zinc-200 transition-colors rounded-sm" onclick="endOnboarding()">
                Enter Dashboard
            </button>
</div>
</div>



    </>
  );
}
