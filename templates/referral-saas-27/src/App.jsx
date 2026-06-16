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
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
primary: {
50: '#ecfdf5',
100: '#d1fae5',
200: '#a7f3d0',
300: '#6ee7b7',
400: '#34d399',
500: '#10b981', // Brand Primary
600: '#059669',
700: '#047857',
},
secondary: {
400: '#60a5fa',
500: '#3b82f6', // Brand Secondary
600: '#2563eb',
},
slate: {
850: '#1e293b', // Custom dark
}
},
boxShadow: {
'glow': '0 0 20px rgba(16, 185, 129, 0.15)',
}
}
}
}



        // --- 1. LIVE SALES FEED LOGIC ---
        const names = ["Maria", "Pedro", "Carla", "João", "Ana", "Lucas", "Beatriz", "Rafael"];
        const actions = ["indicou", "referenciou", "trouxe"];
        const feedContainer = document.getElementById('sales-feed');
        const totalElement = document.getElementById('feed-total');
        let totalValue = 1247.00;

        function createFeedItem() {
            const name1 = names[Math.floor(Math.random() * names.length)];
            let name2 = names[Math.floor(Math.random() * names.length)];
            while(name1 === name2) name2 = names[Math.floor(Math.random() * names.length)]; // prevent same name
            const value = (Math.random() * (200 - 50) + 50).toFixed(2);
            
            const item = document.createElement('div');
            item.className = 'flex items-center gap-4 p-3 rounded-lg border border-slate-100 bg-white shadow-sm animate-fade-in-down';
            item.innerHTML = `
                <div class="w-8 h-8 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center shrink-0">
                    <iconify-icon icon="solar:cart-large-linear"></iconify-icon>
                </div>
                <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-slate-900 truncate">
                        <span class="text-primary-600">${name1}</span> ${actions[Math.floor(Math.random() * actions.length)]} ${name2}
                    </p>
                    <p class="text-xs text-slate-400">Agora mesmo</p>
                </div>
                <div class="text-right">
                    <p class="text-sm font-mono font-medium text-slate-900">R$ ${value.replace('.', ',')}</p>
                </div>
            `;
            
            // Add new item to top
            feedContainer.insertBefore(item, feedContainer.firstChild);
            
            // Update Total with simple animation
            totalValue += parseFloat(value);
            totalElement.innerText = "R$ " + totalValue.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            
            // Remove old items if too many
            if(feedContainer.children.length > 4) {
                feedContainer.lastChild.remove();
            }
        }

        // Initialize with some data
        for(let i=0; i<3; i++) createFeedItem();
        
        // Loop
        setInterval(createFeedItem, 4000);


        // --- 2. ROI CALCULATOR LOGIC ---
        const inputs = {
            sales: document.getElementById('input-sales'),
            ticket: document.getElementById('input-ticket'),
            rate: document.getElementById('input-rate')
        };
        
        const displays = {
            sales: document.getElementById('val-sales'),
            ticket: document.getElementById('val-ticket'),
            rate: document.getElementById('val-rate'),
            revenue: document.getElementById('out-revenue'),
            clients: document.getElementById('out-clients')
        };

        function calculateROI() {
            const sales = parseInt(inputs.sales.value);
            const ticket = parseInt(inputs.ticket.value);
            const rate = parseInt(inputs.rate.value);

            // Update Input Displays
            displays.sales.innerText = sales;
            displays.ticket.innerText = ticket;
            displays.rate.innerText = rate + "%";

            // Calculate Results
            const newClients = Math.round(sales * (rate / 100));
            const extraRevenue = newClients * ticket;

            // Animate Numbers (Simple text update)
            displays.clients.innerText = "+" + newClients;
            displays.revenue.innerText = "R$ " + extraRevenue.toLocaleString('pt-BR');
        }

        // Add Listeners
        Object.values(inputs).forEach(input => {
            input.addEventListener('input', calculateROI);
        });

        // Initial Calc
        calculateROI();


        // --- 3. ACCORDION LOGIC ---
        function toggleAccordion(button) {
            const content = button.nextElementSibling;
            const icon = button.querySelector('iconify-icon');
            
            // Close others if needed (optional, keeping simple here)
            
            if (content.classList.contains('open')) {
                content.classList.remove('open');
                icon.style.transform = 'rotate(0deg)';
                button.classList.remove('bg-slate-50');
            } else {
                content.classList.add('open');
                icon.style.transform = 'rotate(180deg)';
                button.classList.add('bg-slate-50');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 backdrop-blur-md border-b transition-all duration-200 bg-white/80 border-slate-100" style={{}}>
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between" style={{}}>

<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded-lg border flex items-center justify-center text-primary-500 group-hover:border-primary-200 transition-colors bg-slate-50 border-slate-200" style={{}}>
<iconify-icon className="" icon="solar:chart-square-linear" width="20"></iconify-icon>
</div>
<span className="font-semibold tracking-tight text-slate-900" style={{}}>MGM System</span>
</div>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-primary-600" href="#como-funciona" style={{}}>Como funciona</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-primary-600" href="#roi" style={{}}>ROI</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-primary-600" href="#pricing" style={{}}>Preço</a>
</nav>

<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 bg-slate-900 text-white hover:bg-slate-800" style={{}}>
                    Começar Teste
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>

<button className="md:hidden p-2 text-slate-600" style={{}}>
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</header>

<section className="overflow-hidden pt-32 pb-20 relative">

<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] -z-10 from-primary-50/50 via-white to-white"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="flex flex-col items-start gap-6 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border shadow-sm animate-fade-in-down bg-white border-primary-200" style={{animationDelay: '0.1s'}}>
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-primary-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
</span>
<span className="text-xs font-medium text-slate-600" style={{}}>Para marcas B4You 🚀</span>
</div>
<h1 className="text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] animate-fade-in-down text-slate-900" style={{animationDelay: '0.2s'}}>
                    CAC subindo? <br/>
<span className="text-slate-400" style={{}}>Seus clientes vendem por você.</span>
</h1>
<p className="text-lg text-slate-500 max-w-md leading-relaxed animate-fade-in-down" style={{animationDelay: '0.3s'}}>
                    Transforme compradores em embaixadores ativos. Rastreie o boca-a-boca e automatize recompensas sem sair do dashboard.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-down" style={{animationDelay: '0.4s'}}>
<button className="w-full sm:w-auto px-8 py-3.5 bg-primary-500 font-medium rounded-xl hover:shadow-lg hover:shadow-primary-500/20 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 text-white hover:bg-primary-600" style={{}}>
                        Começar Teste Grátis
                    </button>
<a className="w-full sm:w-auto px-8 py-3.5 font-medium transition-colors flex items-center justify-center gap-2 text-slate-600 hover:text-slate-900" href="#roi" style={{}}>
<iconify-icon icon="solar:calculator-linear" width="20"></iconify-icon>
                        Ver calculadora ROI
                    </a>
</div>
</div>

<div className="lg:ml-auto animate-fade-in-down w-full max-w-md mr-auto ml-auto relative perspective-1000" style={{animationDelay: '0.5s'}}>

<div className="rounded-2xl border shadow-2xl overflow-hidden relative bg-white border-slate-200 shadow-slate-200/50" style={{}}>

<div className="px-6 py-4 border-b flex justify-between items-center relative z-20 border-slate-100 bg-slate-50/50" style={{}}>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs font-semibold uppercase tracking-wider text-slate-500" style={{}}>Vendas Indiretas</span>
</div>
<span className="text-xs text-slate-400" style={{}}>Tempo Real</span>
</div>

<div className="flex flex-col gap-4 h-[320px] overflow-hidden p-6 relative" id="sales-feed"><div className="flex items-center gap-4 p-3 rounded-lg border border-slate-100 bg-white shadow-sm animate-fade-in-down" style={{}}>
<div className="w-8 h-8 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:cart-large-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-slate-900 truncate" style={{}}>
<span className="text-primary-600">Ana</span> referenciou Rafael
                    </p>
<p className="text-xs text-slate-400" style={{}}>Agora mesmo</p>
</div>
<div className="text-right">
<p className="text-sm font-mono font-medium text-slate-900" style={{}}>R$ 160,68</p>
</div>
</div><div className="flex items-center gap-4 p-3 rounded-lg border border-slate-100 bg-white shadow-sm animate-fade-in-down" style={{}}>
<div className="w-8 h-8 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:cart-large-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-slate-900 truncate" style={{}}>
<span className="text-primary-600">Lucas</span> indicou Maria
                    </p>
<p className="text-xs text-slate-400" style={{}}>Agora mesmo</p>
</div>
<div className="text-right">
<p className="text-sm font-mono font-medium text-slate-900" style={{}}>R$ 108,50</p>
</div>
</div><div className="flex items-center gap-4 p-3 rounded-lg border border-slate-100 bg-white shadow-sm animate-fade-in-down" style={{}}>
<div className="w-8 h-8 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:cart-large-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-slate-900 truncate" style={{}}>
<span className="text-primary-600">Carla</span> trouxe Ana
                    </p>
<p className="text-xs text-slate-400" style={{}}>Agora mesmo</p>
</div>
<div className="text-right">
<p className="text-sm font-mono font-medium text-slate-900" style={{}}>R$ 119,91</p>
</div>
</div><div className="flex items-center gap-4 p-3 rounded-lg border shadow-sm animate-fade-in-down border-slate-100 bg-white" style={{}}>
<div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-primary-50 text-primary-600">
<iconify-icon icon="solar:cart-large-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium truncate text-slate-900" style={{}}>
<span className="text-primary-600">Pedro</span> indicou Ana
                    </p>
<p className="text-xs text-slate-400" style={{}}>Agora mesmo</p>
</div>
<div className="text-right">
<p className="text-sm font-mono font-medium text-slate-900" style={{}}>R$ 114,07</p>
</div>
</div><div className="flex items-center gap-4 p-3 rounded-lg border shadow-sm animate-fade-in-down border-slate-100 bg-white" style={{}}>
<div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-primary-50 text-primary-600">
<iconify-icon icon="solar:cart-large-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium truncate text-slate-900" style={{}}>
<span className="text-primary-600">Lucas</span> trouxe João
                    </p>
<p className="text-xs text-slate-400" style={{}}>Agora mesmo</p>
</div>
<div className="text-right">
<p className="text-sm font-mono font-medium text-slate-900" style={{}}>R$ 171,82</p>
</div>
</div><div className="flex items-center gap-4 p-3 rounded-lg border shadow-sm animate-fade-in-down border-slate-100 bg-white" style={{}}>
<div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-primary-50 text-primary-600">
<iconify-icon icon="solar:cart-large-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium truncate text-slate-900" style={{}}>
<span className="text-primary-600">João</span> referenciou Maria
                    </p>
<p className="text-xs text-slate-400" style={{}}>Agora mesmo</p>
</div>
<div className="text-right">
<p className="text-sm font-mono font-medium text-slate-900" style={{}}>R$ 104,47</p>
</div>
</div>
<div className="flex items-center gap-4 p-3 rounded-lg border shadow-sm animate-fade-in-down border-slate-100 bg-white" style={{}}>
<div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-primary-50 text-primary-600">
<iconify-icon icon="solar:cart-large-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium truncate text-slate-900" style={{}}>
<span className="text-primary-600">Carla</span> referenciou Rafael
                                </p>
<p className="text-xs text-slate-400" style={{}}>Agora mesmo</p>
</div>
<div className="text-right">
<p className="text-sm font-mono font-medium text-slate-900" style={{}}>R$ 102,22</p>
</div>
</div>
<div className="flex items-center gap-4 p-3 rounded-lg border shadow-sm animate-fade-in-down border-slate-100 bg-white" style={{}}>
<div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-primary-50 text-primary-600">
<iconify-icon icon="solar:cart-large-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium truncate text-slate-900" style={{}}>
<span className="text-primary-600">Rafael</span> indicou Ana
                                </p>
<p className="text-xs text-slate-400" style={{}}>Agora mesmo</p>
</div>
<div className="text-right">
<p className="text-sm font-mono font-medium text-slate-900" style={{}}>R$ 166,67</p>
</div>
</div>
</div>

<div className="px-6 py-4 flex justify-between items-center relative z-20 bg-slate-900 text-white" style={{}}>
<span className="text-sm text-slate-400" style={{}}>Total hoje:</span>
<span className="font-mono text-lg font-medium text-primary-400" id="feed-total">R$ 1.636,09</span>
</div>
</div>

<div className="absolute -top-10 -right-10 w-64 h-64 rounded-full blur-3xl -z-10 bg-primary-300/20"></div>
<div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full blur-3xl -z-10 bg-secondary-300/20"></div>
</div>
</div>
</section>

<section className="py-24 border-y bg-slate-50 border-slate-200" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900" style={{}}>Seu CAC dobrou nos últimos 2 anos?</h2>
<p className="mt-4 text-slate-500" style={{}}>Você não está sozinho. O modelo antigo de ads está quebrando.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-xl border shadow-sm hover:shadow-md transition-all duration-300 group bg-white border-slate-200" style={{}}>
<div className="w-12 h-12 rounded-lg text-orange-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-orange-50">
<iconify-icon icon="solar:graph-down-linear" width="28"></iconify-icon>
</div>
<p className="text-4xl font-semibold text-orange-500 tracking-tight mb-2">+47%</p>
<p className="text-sm font-medium text-slate-900" style={{}}>Aumento no CAC</p>
<p className="text-sm text-slate-500 mt-1" style={{}}>Média de mercado desde 2022.</p>
</div>

<div className="p-8 rounded-xl border shadow-sm hover:shadow-md transition-all duration-300 group bg-white border-slate-200" style={{}}>
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-slate-100 text-slate-600" style={{}}>
<iconify-icon icon="solar:users-group-rounded-linear" width="28"></iconify-icon>
</div>
<p className="text-4xl font-semibold tracking-tight mb-2 text-slate-900" style={{}}>70%</p>
<p className="text-sm font-medium text-slate-900" style={{}}>Indicações invisíveis</p>
<p className="text-sm text-slate-500 mt-1" style={{}}>Acontecem offline e você perde dados.</p>
</div>

<div className="p-8 rounded-xl border shadow-sm hover:shadow-md transition-all duration-300 group bg-white border-slate-200" style={{}}>
<div className="w-12 h-12 rounded-lg text-red-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-red-50">
<iconify-icon icon="solar:target-linear" width="28"></iconify-icon>
</div>
<p className="text-4xl font-semibold text-red-500 tracking-tight mb-2">10x</p>
<p className="text-sm font-medium text-slate-900" style={{}}>Gasto dos gigantes</p>
<p className="text-sm text-slate-500 mt-1" style={{}}>Impossível competir só com ads.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" style={{}}>
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4 text-slate-900" style={{}}>
                Transforme cada venda em <span className="text-primary-500">3 vendas novas</span>
</h2>
<p className="text-lg text-slate-500 mb-16" style={{}}>Automático. Rastreável. Sem esforço.</p>

<div className="relative border rounded-2xl shadow-xl p-8 md:p-12 bg-white border-slate-100" style={{}}>
<div className="flex flex-col md:flex-row justify-between items-center gap-8 relative">

<div className="absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2 hidden md:block z-0">
<svg height="2" width="100%">
<line className="flow-line" stroke="#e2e8f0" stroke-dasharray="8 8" strokeWidth="2" x1="0" x2="100%" y1="1" y2="1"></line>
</svg>
</div>

<div className="relative z-10 flex flex-col items-center gap-4 p-2 bg-white" style={{}}>
<div className="w-16 h-16 rounded-2xl border flex items-center justify-center shadow-sm bg-slate-50 border-slate-200 text-slate-700" style={{}}>
<iconify-icon icon="solar:cart-large-linear" width="32"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-900" style={{}}>Cliente Compra</span>
</div>

<div className="relative z-10 flex flex-col items-center gap-4 p-2 bg-white" style={{}}>
<div className="w-16 h-16 rounded-2xl border text-blue-500 flex items-center justify-center shadow-sm animate-pulse bg-blue-50 border-blue-100">
<iconify-icon icon="solar:letter-linear" width="32"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-900" style={{}}>Recebe Link</span>
</div>

<div className="relative z-10 flex flex-col items-center gap-4 p-2 bg-white" style={{}}>
<div className="w-16 h-16 rounded-2xl border text-green-500 flex items-center justify-center shadow-sm bg-green-50 border-green-100">
<iconify-icon icon="solar:share-circle-linear" width="32"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-900" style={{}}>Compartilha</span>
</div>

<div className="relative z-10 flex flex-col items-center gap-4 p-2 bg-white" style={{}}>
<div className="w-16 h-16 rounded-2xl bg-primary-500 border flex items-center justify-center shadow-lg shadow-primary-500/30 border-primary-600 text-white" style={{}}>
<iconify-icon icon="solar:bag-check-linear" width="32"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-900" style={{}}>Amigo Compra</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="roi" style={{}}>
<div className="max-w-6xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-start">

<div className="rounded-2xl border shadow-lg p-8 bg-white border-slate-200" style={{}}>
<h3 className="text-2xl font-semibold tracking-tight mb-8 text-slate-900" style={{}}>Calcule seu Potencial</h3>
<div className="space-y-8">

<div>
<div className="flex justify-between mb-2">
<label className="text-sm font-medium text-slate-700" style={{}}>Vendas por mês</label>
<span className="font-mono text-sm font-medium text-primary-600" id="val-sales">100</span>
</div>
<input id="input-sales" max="1000" min="10" step="10" type="range" value="100"/>
</div>

<div>
<div className="flex justify-between mb-2">
<label className="text-sm font-medium text-slate-700" style={{}}>Ticket Médio (R$)</label>
<span className="font-mono text-sm font-medium text-primary-600" id="val-ticket">150</span>
</div>
<input id="input-ticket" max="1000" min="50" step="10" type="range" value="150"/>
</div>

<div>
<div className="flex justify-between mb-2">
<label className="text-sm font-medium text-slate-700" style={{}}>Taxa de Indicação (%)</label>
<span className="font-mono text-sm font-medium text-primary-600" id="val-rate">20%</span>
</div>
<input id="input-rate" max="50" min="5" step="1" type="range" value="20"/>
</div>
<div className="h-px bg-slate-100" style={{}}></div>

<div className="grid grid-cols-2 gap-6">
<div>
<p className="text-xs text-slate-500 uppercase tracking-wide mb-1" style={{}}>Faturamento Extra</p>
<p className="text-3xl font-semibold tracking-tight text-slate-900" id="out-revenue" style={{}}>R$ 3.000</p>
</div>
<div>
<p className="text-xs text-slate-500 uppercase tracking-wide mb-1" style={{}}>Novos Clientes</p>
<p className="text-3xl font-semibold tracking-tight text-slate-900" id="out-clients" style={{}}>+20</p>
</div>
</div>
<button className="w-full py-3 font-medium rounded-lg transition-colors bg-slate-900 text-white hover:bg-slate-800" style={{}}>
                            Começar agora
                        </button>
</div>
</div>

<div className="flex flex-col justify-center h-full pt-8 lg:pt-0">
<div className="relative pl-8 border-l-4 border-primary-500">
<iconify-icon className="absolute -top-8 -left-5 text-primary-200 bg-slate-50" icon="solar:quote-up-square-linear" style={{}} width="48"></iconify-icon>
<blockquote className="text-2xl font-medium leading-relaxed italic mb-6 text-slate-900" style={{}}>
                            "Gerei R$ 4.200 em vendas indiretas no primeiro mês. O CAC caiu de R$ 85 para R$ 62. É dinheiro grátis."
                        </blockquote>
<div>
<p className="font-semibold text-slate-900" style={{}}>Pedro Silva</p>
<p className="text-sm text-slate-500" style={{}}>Fundador da Aura Wear</p>
</div>
<div className="flex gap-3 mt-8">
<span className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-medium bg-green-50 text-green-700">
<iconify-icon icon="solar:graph-up-linear"></iconify-icon> 42 vendas indiretas
                            </span>
<span className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700">
<iconify-icon icon="solar:arrow-down-linear"></iconify-icon> 28% redução de CAC
                            </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="como-funciona">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-8">

<div className="group p-8 border rounded-2xl hover:shadow-xl transition-all duration-300 border-slate-200 hover:border-primary-300 hover:shadow-slate-200/50 bg-white" style={{}}>
<div className="w-12 h-12 rounded-lg text-primary-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-primary-50">
<iconify-icon icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2 text-slate-900" style={{}}>Zero esforço. Tudo automático.</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6" style={{}}>
                        Cliente compra → sistema gera cupom único + link rastreável em 5 segundos. Você não faz nada.
                    </p>
<div className="rounded-lg p-4 font-mono text-xs border flex items-center gap-2 bg-slate-50 text-slate-600 border-slate-100" style={{}}>
<span className="text-green-500">✓</span> Gerado: <span className="px-2 py-0.5 rounded shadow-sm border bg-white border-slate-200 text-slate-900" style={{}}>MARIA1234</span>
</div>
</div>

<div className="group p-8 border rounded-2xl hover:shadow-xl transition-all duration-300 border-slate-200 hover:border-primary-300 hover:shadow-slate-200/50 bg-white" style={{}}>
<div className="w-12 h-12 rounded-lg text-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-blue-50">
<iconify-icon icon="solar:globe-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2 text-slate-900" style={{}}>Boca-a-boca agora é rastreável</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6" style={{}}>
                        Links únicos funcionam online e offline. Veja geo, devices e horários.
                    </p>
<div className="h-12 flex items-end gap-1 px-4 border-b border-slate-100" style={{}}>
<div className="w-1/4 h-[40%] rounded-t group-hover:h-[60%] transition-all duration-500 bg-blue-100"></div>
<div className="w-1/4 h-[70%] rounded-t group-hover:h-[90%] transition-all duration-500 delay-75 bg-blue-200"></div>
<div className="w-1/4 h-[50%] rounded-t group-hover:h-[80%] transition-all duration-500 delay-100 bg-blue-300"></div>
<div className="w-1/4 bg-blue-500 h-[80%] rounded-t group-hover:h-full transition-all duration-500 delay-150"></div>
</div>
</div>

<div className="group p-8 border rounded-2xl hover:shadow-xl transition-all duration-300 border-slate-200 hover:border-primary-300 hover:shadow-slate-200/50 bg-white" style={{}}>
<div className="w-12 h-12 rounded-lg text-indigo-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-indigo-50">
<iconify-icon icon="solar:chart-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2 text-slate-900" style={{}}>Analytics que importam</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6" style={{}}>
                        Veja top ambassadors, ROI por indicação e vendas indiretas vs ads em tempo real.
                    </p>
</div>

<div className="group p-8 border rounded-2xl hover:shadow-xl transition-all duration-300 border-slate-200 hover:border-primary-300 hover:shadow-slate-200/50 bg-white" style={{}}>
<div className="w-12 h-12 rounded-lg text-yellow-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-yellow-50" style={{}}>
<iconify-icon icon="solar:gift-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2 text-slate-900" style={{}}>Você decide o que funciona</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6" style={{}}>
                        Desconto, produto físico, ou comissão em R$. Configure em 2 cliques.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden bg-slate-50" style={{}}>
<div className="max-w-4xl mx-auto px-6">
<div className="relative">

<div className="absolute left-8 top-0 bottom-0 w-px md:left-1/2 md:-ml-px border-l border-dashed bg-slate-200 border-slate-300" style={{}}></div>

<div className="relative z-10 mb-16 md:flex md:justify-between items-center group">
<div className="hidden md:block w-5/12 text-right pr-12">
<h3 className="text-xl font-semibold text-slate-900" style={{}}>Configure em 3 minutos</h3>
<p className="text-slate-500 text-sm mt-2" style={{}}>Defina recompensas, metas, cupom base. Use template pronto ou crie do zero.</p>
</div>
<div className="flex-shrink-0 w-16 h-16 rounded-full border-4 text-primary-500 font-bold text-2xl flex items-center justify-center shadow-md relative z-10 md:mx-auto mb-4 md:mb-0 group-hover:scale-110 group-hover:border-primary-100 transition-all duration-300 bg-white border-primary-50" style={{}}>
                        1
                    </div>
<div className="md:w-5/12 pl-4 md:pl-12">

<div className="md:hidden mb-4">
<h3 className="text-xl font-semibold text-slate-900" style={{}}>Configure em 3 minutos</h3>
<p className="text-slate-500 text-sm mt-2" style={{}}>Defina recompensas e metas rapidamente.</p>
</div>
<div className="p-4 rounded-lg shadow-sm border rotate-1 group-hover:rotate-0 transition-transform bg-white border-slate-200" style={{}}>
<div className="flex items-center gap-3 mb-2">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="h-2 w-20 rounded bg-slate-100" style={{}}></div>
</div>
<div className="space-y-2">
<div className="h-2 w-full rounded bg-slate-50" style={{}}></div>
<div className="h-2 w-2/3 rounded bg-slate-50" style={{}}></div>
</div>
</div>
</div>
</div>

<div className="relative z-10 mb-16 md:flex md:justify-between items-center flex-row-reverse group">
<div className="hidden md:block w-5/12 text-left pl-12">
<h3 className="text-xl font-semibold text-slate-900" style={{}}>Sistema roda sozinho</h3>
<p className="text-slate-500 text-sm mt-2" style={{}}>Cada venda gera cupom + link + email. Zero esforço operacional seu.</p>
</div>
<div className="flex-shrink-0 w-16 h-16 rounded-full border-4 text-secondary-500 font-bold text-2xl flex items-center justify-center shadow-md relative z-10 md:mx-auto mb-4 md:mb-0 group-hover:scale-110 group-hover:border-secondary-100 transition-all duration-300 bg-white border-secondary-50" style={{}}>
                        2
                    </div>
<div className="md:w-5/12 pr-4 md:pr-12">

<div className="md:hidden mb-4 pl-4">
<h3 className="text-xl font-semibold text-slate-900" style={{}}>Sistema roda sozinho</h3>
<p className="text-slate-500 text-sm mt-2" style={{}}>Automação total de emails e cupons.</p>
</div>
<div className="p-4 rounded-lg shadow-sm border -rotate-1 group-hover:rotate-0 transition-transform flex items-center justify-center gap-4 bg-white border-slate-200" style={{}}>
<iconify-icon className="group-hover:text-secondary-400 group-hover:-translate-y-1 transition-all text-slate-300" icon="solar:letter-linear" style={{}} width="24"></iconify-icon>
<iconify-icon className="text-slate-200" icon="solar:arrow-right-linear" style={{}} width="16"></iconify-icon>
<iconify-icon className="group-hover:text-secondary-400 group-hover:-translate-y-1 transition-all delay-75 text-slate-300" icon="solar:letter-linear" style={{}} width="24"></iconify-icon>
<iconify-icon className="text-slate-200" icon="solar:arrow-right-linear" style={{}} width="16"></iconify-icon>
<iconify-icon className="group-hover:text-secondary-400 group-hover:-translate-y-1 transition-all delay-100 text-slate-300" icon="solar:letter-linear" style={{}} width="24"></iconify-icon>
</div>
</div>
</div>

<div className="relative z-10 md:flex md:justify-between items-center group">
<div className="hidden md:block w-5/12 text-right pr-12">
<h3 className="text-xl font-semibold text-slate-900" style={{}}>Veja ROI em tempo real</h3>
<p className="text-slate-500 text-sm mt-2" style={{}}>Dashboard atualiza a cada venda. Libere recompensas quando metas forem batidas.</p>
</div>
<div className="flex-shrink-0 w-16 h-16 rounded-full border-4 font-bold text-2xl flex items-center justify-center shadow-md relative z-10 md:mx-auto mb-4 md:mb-0 group-hover:scale-110 group-hover:border-slate-200 transition-all duration-300 bg-white border-slate-100 text-slate-900" style={{}}>
                        3
                    </div>
<div className="md:w-5/12 pl-4 md:pl-12">

<div className="md:hidden mb-4">
<h3 className="text-xl font-semibold text-slate-900" style={{}}>Veja ROI em tempo real</h3>
<p className="text-slate-500 text-sm mt-2" style={{}}>Dashboard atualizado ao vivo.</p>
</div>
<div className="p-4 rounded-lg shadow-sm border rotate-1 group-hover:rotate-0 transition-transform bg-white border-slate-200" style={{}}>
<div className="flex justify-between items-end h-16">
<div className="w-1/5 h-1/2 rounded-t bg-primary-100"></div>
<div className="w-1/5 h-2/3 rounded-t bg-primary-200"></div>
<div className="w-1/5 h-3/4 rounded-t bg-primary-300"></div>
<div className="w-1/5 bg-primary-500 h-full rounded-t"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-2xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-center mb-12 tracking-tight text-slate-900" style={{}}>Perguntas Frequentes</h2>
<div className="space-y-4">

<div className="border rounded-lg overflow-hidden border-slate-200" style={{}}>
<button className="w-full flex justify-between items-center p-5 text-left transition-colors bg-white hover:bg-slate-50" onclick="toggleAccordion(this)" style={{}}>
<span className="font-medium text-slate-900" style={{}}>Como sei que meus clientes vão compartilhar?</span>
<iconify-icon className="transition-transform duration-300 text-slate-400" icon="solar:alt-arrow-down-linear" style={{}}></iconify-icon>
</button>
<div className="accordion-content bg-slate-50" style={{}}>
<p className="p-5 text-sm leading-relaxed border-t text-slate-600 border-slate-100" style={{}}>
                            Recompensas atrativas funcionam. Em testes, 30%+ dos clientes compartilham pelo menos 1 vez. Se sua recompensa for boa (produto grátis, desconto 20%+), a taxa sobe.
                        </p>
</div>
</div>

<div className="border rounded-lg overflow-hidden border-slate-200" style={{}}>
<button className="w-full flex justify-between items-center p-5 text-left transition-colors bg-white hover:bg-slate-50" onclick="toggleAccordion(this)" style={{}}>
<span className="font-medium text-slate-900" style={{}}>Funciona para indicações offline?</span>
<iconify-icon className="transition-transform duration-300 text-slate-400" icon="solar:alt-arrow-down-linear" style={{}}></iconify-icon>
</button>
<div className="accordion-content bg-slate-50" style={{}}>
<p className="p-5 text-sm leading-relaxed border-t text-slate-600 border-slate-100" style={{}}>
                            Sim! Links únicos rastreiam mesmo quando compartilhado pessoalmente. Se o amigo usar o cupom na compra, você vê quem indicou.
                        </p>
</div>
</div>

<div className="border rounded-lg overflow-hidden border-slate-200" style={{}}>
<button className="w-full flex justify-between items-center p-5 text-left transition-colors bg-white hover:bg-slate-50" onclick="toggleAccordion(this)" style={{}}>
<span className="font-medium text-slate-900" style={{}}>Preciso saber programar?</span>
<iconify-icon className="transition-transform duration-300 text-slate-400" icon="solar:alt-arrow-down-linear" style={{}}></iconify-icon>
</button>
<div className="accordion-content bg-slate-50" style={{}}>
<p className="p-5 text-sm leading-relaxed border-t text-slate-600 border-slate-100" style={{}}>
                            Zero código. Você cria o programa em 3 minutos: escolhe recompensa, define meta, ativa. Sistema faz o resto.
                        </p>
</div>
</div>

<div className="border rounded-lg overflow-hidden border-slate-200" style={{}}>
<button className="w-full flex justify-between items-center p-5 text-left transition-colors bg-white hover:bg-slate-50" onclick="toggleAccordion(this)" style={{}}>
<span className="font-medium text-slate-900" style={{}}>E se eu quiser parar o programa?</span>
<iconify-icon className="transition-transform duration-300 text-slate-400" icon="solar:alt-arrow-down-linear" style={{}}></iconify-icon>
</button>
<div className="accordion-content bg-slate-50" style={{}}>
<p className="p-5 text-sm leading-relaxed border-t text-slate-600 border-slate-100" style={{}}>
                            Você controla quando desativar. Recomendamos avisar clientes com 30 dias de antecedência para entregarem recompensas acumuladas.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-secondary-600"></div>

<div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIi8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiLz4KPC9zdmc+')]"></div>
<div className="relative max-w-2xl mx-auto px-6 text-center text-white" style={{}}>
<h2 className="text-4xl font-semibold tracking-tight mb-4">Pronto para transformar clientes em embaixadores?</h2>
<p className="text-lg mb-10 text-white/80">Configure em 3 minutos. Sem cartão de crédito. Teste grátis.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
<button className="w-full sm:w-auto px-8 py-4 font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 bg-white text-primary-700" style={{}}>
                    Começar Teste Grátis
                </button>
<button className="w-full sm:w-auto px-8 py-4 bg-transparent border font-medium rounded-xl transition-colors border-white/30 text-white hover:bg-white/10" style={{}}>
                    Falar com a gente
                </button>
</div>
<div className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
<span className="flex items-center gap-2">
<iconify-icon className="text-white" icon="solar:check-circle-linear" style={{}}></iconify-icon> Integração nativa B4You
                </span>
<span className="flex items-center gap-2">
<iconify-icon className="text-white" icon="solar:check-circle-linear" style={{}}></iconify-icon> 30 dias grátis
                </span>
<span className="flex items-center gap-2">
<iconify-icon className="text-white" icon="solar:check-circle-linear" style={{}}></iconify-icon> Suporte WhatsApp
                </span>
</div>
</div>
</section>

<footer className="border-t pt-16 pb-8 bg-slate-900 border-slate-800" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1">
<div className="flex items-center gap-2 mb-4 text-white" style={{}}>
<iconify-icon icon="solar:chart-square-linear" width="24"></iconify-icon>
<span className="font-semibold tracking-tight">MGM System</span>
</div>
<p className="text-sm text-slate-400" style={{}}>Sistema de indicação para marcas B4You.</p>
</div>

<div>
<h4 className="font-medium mb-4 text-white" style={{}}>Produto</h4>
<ul className="space-y-2 text-sm text-slate-400" style={{}}>
<li><a className="transition-colors hover:text-white" href="#">Como funciona</a></li>
<li><a className="transition-colors hover:text-white" href="#">Calculadora ROI</a></li>
<li><a className="transition-colors hover:text-white" href="#">Preço</a></li>
</ul>
</div>

<div>
<h4 className="font-medium mb-4 text-white" style={{}}>Suporte</h4>
<ul className="space-y-2 text-sm text-slate-400" style={{}}>
<li><a className="transition-colors hover:text-white" href="#">FAQ</a></li>
<li><a className="transition-colors hover:text-white" href="#">Contato</a></li>
<li><a className="transition-colors hover:text-white" href="#">WhatsApp</a></li>
</ul>
</div>

<div>
<h4 className="font-medium mb-4 text-white" style={{}}>Legal</h4>
<ul className="space-y-2 text-sm text-slate-400" style={{}}>
<li><a className="transition-colors hover:text-white" href="#">Termos de Uso</a></li>
<li><a className="transition-colors hover:text-white" href="#">Privacidade</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 border-slate-800" style={{}}>
<p className="text-slate-500 text-sm" style={{}}>© 2026 MGM System. Todos os direitos reservados.</p>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-xs text-slate-500" style={{}}>Sistemas operacionais</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
