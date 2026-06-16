import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
darkMode: 'media',
theme: {
extend: {
fontFamily: { sans: ['Inter', 'sans-serif'] },
colors: {
gold: {
50: '#fbf8f2',
100: '#f5eee1',
200: '#ebdbbf',
300: '#dfc294',
400: '#d4a563',
500: '#c58d3c',
600: '#b87631',
700: '#9a5c2b',
800: '#7f4b27',
900: '#673e23',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // (Lógica base mantida e expandida com foco no dashboard)
        function navigateTo(viewId) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            document.querySelectorAll('.view-section').forEach(el => {
                el.classList.add('hidden');
                el.classList.remove('fade-in');
            });
            const target = document.getElementById(viewId + '-view');
            if (target) {
                target.classList.remove('hidden');
                void target.offsetWidth; 
                target.classList.add('fade-in');
            }
            if(viewId === 'dashboard') {
                switchDashTab('tickets'); // Default
            }
        }

        function handleLogin(e) {
            if(e) e.preventDefault();
            document.getElementById('nav-user-btn').classList.add('text-gold-600', 'dark:text-gold-400');
            navigateTo('dashboard');
        }

        // --- Lógica do Dashboard ---
        function switchDashTab(tabId) {
            // Esconder todas as tabs
            ['tickets', 'history', 'settings'].forEach(id => {
                document.getElementById('tab-' + id).classList.add('hidden');
                document.getElementById('tab-' + id).classList.remove('fade-in');
                
                // Reset style dos botões
                const btn = document.getElementById('btn-tab-' + id);
                btn.className = "dash-tab w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 text-sm font-medium dark:hover:bg-zinc-900/50 dark:hover:text-zinc-50 transition-colors text-left border border-transparent";
            });

            // Mostrar ativa
            const activeTab = document.getElementById('tab-' + tabId);
            activeTab.classList.remove('hidden');
            void activeTab.offsetWidth; // reflow
            activeTab.classList.add('fade-in');

            // Set botão ativo
            const activeBtn = document.getElementById('btn-tab-' + tabId);
            activeBtn.className = "dash-tab w-full flex items-center gap-3 px-3 py-2.5 rounded-xl bg-gold-50 dark:bg-gold-500/10 text-gold-700 dark:text-gold-400 text-sm font-medium transition-colors text-left border border-gold-200/50 dark:border-gold-500/20";
        }

        // --- Lógica Modal Gestão de Bilhete ---
        function openTicketActionModal(startPanel = 'options') {
            const overlay = document.getElementById('ticket-modal-overlay');
            const modal = document.getElementById('ticket-modal');
            
            overlay.classList.remove('hidden');
            switchTicketPanel(startPanel); // Define que painel mostra à direita
            
            setTimeout(() => {
                overlay.classList.remove('opacity-0');
                modal.classList.remove('scale-95', 'opacity-0');
                modal.classList.add('scale-100', 'opacity-100');
            }, 10);
        }

        function closeTicketModal() {
            const overlay = document.getElementById('ticket-modal-overlay');
            const modal = document.getElementById('ticket-modal');
            
            modal.classList.remove('scale-100', 'opacity-100');
            modal.classList.add('scale-95', 'opacity-0');
            overlay.classList.add('opacity-0');
            
            setTimeout(() => {
                overlay.classList.add('hidden');
                switchTicketPanel('options'); // reset interior
            }, 300);
        }

        function switchTicketPanel(panelId) {
            const panels = ['options', 'transfer', 'cancel', 'success'];
            
            panels.forEach(id => {
                const p = document.getElementById('tm-panel-' + id);
                if (id === panelId) {
                    p.style.transform = 'translateX(0)';
                } else {
                    // Mover os outros para a direita para esconder
                    p.style.transform = 'translateX(100%)';
                }
            });
        }

        function handleTicketAction(e, type) {
            e.preventDefault();
            
            // Simular processamento da ação
            const btn = e.target.querySelector('button[type="submit"]');
            const origText = btn.innerHTML;
            btn.innerHTML = '<iconify-icon icon="solar:spinner-linear" class="animate-spin text-lg"></iconify-icon> A processar...';
            btn.disabled = true;

            setTimeout(() => {
                // Setup Mensagem de Sucesso
                const title = document.getElementById('success-msg-title');
                const desc = document.getElementById('success-msg-desc');
                
                if(type === 'transfer') {
                    title.innerText = 'Bilhete Transferido';
                    desc.innerText = 'Um convite foi enviado para o email indicado. O bilhete está agora pendente de aceitação.';
                } else if(type === 'cancel') {
                    title.innerText = 'Bilhete Cancelado';
                    desc.innerText = 'Reembolso no valor de 120,00€ processado com sucesso. Poderá demorar 3-5 dias úteis a refletir na conta.';
                }

                switchTicketPanel('success');
                
                // Limpar botão para proxima vez
                btn.innerHTML = origText;
                btn.disabled = false;
                e.target.reset();
            }, 1200);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-40 w-full border-b border-zinc-200/80 bg-white/70 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/70">
<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-8">

<button className="transition-opacity hover:opacity-70 flex items-center justify-center" onclick="navigateTo('home')">
<img alt="Virtude Group" className="h-6 sm:h-8 w-auto object-contain" src="https://virtudegroup.com/wp-content/uploads/2026/02/logovirtude.png"/>
</button>

<nav className="hidden md:flex items-center gap-6 text-sm font-normal text-zinc-500 dark:text-zinc-400">
<button className="hover:text-gold-600 dark:hover:text-gold-400 transition-colors" onclick="navigateTo('home')">Descobrir</button>
<button className="hover:text-gold-600 dark:hover:text-gold-400 transition-colors">Música</button>
<button className="hover:text-gold-600 dark:hover:text-gold-400 transition-colors">Corporate</button>
</nav>
</div>
<div className="flex items-center gap-2 sm:gap-4">
<div className="hidden lg:flex relative group">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 text-lg group-focus-within:text-gold-500 transition-colors" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<input className="h-9 w-64 rounded-full border border-zinc-200 bg-zinc-100/50 pl-10 pr-4 text-sm font-normal outline-none transition-all focus:border-gold-500/50 focus:bg-white focus:ring-1 focus:ring-gold-500/50 dark:border-zinc-800 dark:bg-zinc-900/50 dark:focus:border-gold-500/50 dark:focus:bg-zinc-900 dark:placeholder-zinc-500" placeholder="Pesquisar eventos..." type="text"/>
</div>

<button className="relative flex h-9 w-9 items-center justify-center rounded-full text-zinc-500 hover:bg-gold-50 hover:text-gold-600 dark:text-zinc-400 dark:hover:bg-gold-500/10 dark:hover:text-gold-400 transition-colors" onclick="navigateTo('cart')">
<iconify-icon className="text-xl" icon="solar:cart-large-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="absolute right-1.5 top-1.5 flex h-2 w-2 rounded-full bg-gold-500 hidden" id="cart-badge"></span>
</button>

<button className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-500 hover:bg-gold-50 hover:text-gold-600 dark:text-zinc-400 dark:hover:bg-gold-500/10 dark:hover:text-gold-400 transition-colors" id="nav-user-btn" onclick="navigateTo('login')">
<iconify-icon className="text-xl" icon="solar:user-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</header>
<main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

<div className="view-section space-y-12 fade-in" id="home-view">

<div className="group relative overflow-hidden rounded-[2rem] bg-zinc-900 aspect-square sm:aspect-[21/9] min-h-[400px] lg:min-h-[500px] flex items-end border border-zinc-200/50 dark:border-zinc-800/50 cursor-pointer" onclick="navigateTo('details')">

<img alt="Featured Event" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>
<div className="relative z-10 w-full p-6 sm:p-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="max-w-2xl">
<span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-black/50 backdrop-blur-md border border-gold-500/30 text-xs font-medium text-gold-400 mb-4 tracking-wide uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span> Bilhetes à Venda
                        </span>
<h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-3">Gala Anual Virtude</h1>
<p className="text-base sm:text-lg font-normal text-zinc-300 max-w-xl">Aceda ao evento mais prestigiado do ano. Desfrute de um jantar premium e atuações exclusivas no Coliseu dos Recreios.</p>
</div>
<div className="flex items-center gap-3 shrink-0 self-start md:self-auto">
<button className="hidden sm:flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors border border-white/10" onclick="event.stopPropagation();">
<iconify-icon className="text-xl" icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<button className="h-12 px-8 rounded-full bg-gold-500 text-black text-sm font-medium transition-all hover:bg-gold-600 shadow-sm flex items-center gap-2" onclick="event.stopPropagation(); navigateTo('details')">
                            Reservar Agora
                        </button>
<button className="hidden sm:flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors border border-white/10" onclick="event.stopPropagation();">
<iconify-icon className="text-xl" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
<div className="w-8 h-1 rounded-full bg-gold-500"></div>
<div className="w-2 h-1 rounded-full bg-white/30"></div>
<div className="w-2 h-1 rounded-full bg-white/30"></div>
</div>
</div>

<div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
<h2 className="text-2xl font-medium tracking-tight">Em Destaque</h2>
<div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 hide-scrollbar">
<button className="px-4 py-2 shrink-0 rounded-full bg-black text-gold-400 border border-gold-500/20 text-sm font-medium transition-colors shadow-sm">Todos</button>
<button className="px-4 py-2 shrink-0 rounded-full border border-zinc-200 text-zinc-600 hover:border-gold-500/30 hover:text-gold-600 text-sm font-medium dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-gold-500/30 dark:hover:text-gold-400 transition-colors">Música</button>
<button className="px-4 py-2 shrink-0 rounded-full border border-zinc-200 text-zinc-600 hover:border-gold-500/30 hover:text-gold-600 text-sm font-medium dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-gold-500/30 dark:hover:text-gold-400 transition-colors">Corporate</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

<div className="group cursor-pointer flex flex-col gap-4" onclick="navigateTo('details')">
<div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 relative">
<img alt="Gala Virtude" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-medium text-gold-400 shadow-sm border border-gold-500/20">
                                Múltiplas Sessões
                            </div>
</div>
<div className="flex items-start justify-between gap-4">
<div>
<p className="text-xs font-medium text-gold-600 dark:text-gold-500 mb-1">Música • Corporate</p>
<h3 className="text-lg font-medium tracking-tight mb-1 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">Gala Anual Virtude</h3>
<p className="text-sm text-zinc-500 dark:text-zinc-400">Coliseu dos Recreios, Lisboa</p>
</div>
<span className="text-sm font-medium px-2.5 py-1 bg-gold-50 dark:bg-gold-500/10 text-gold-700 dark:text-gold-400 rounded-lg shrink-0 border border-gold-200/50 dark:border-gold-500/20">120 €</span>
</div>
</div>
</div>
</div>
</div>

<div className="hidden view-section fade-in" id="details-view">

<nav className="flex items-center gap-2 text-sm font-normal text-zinc-500 dark:text-zinc-400 mb-8">
<button className="hover:text-gold-600 dark:hover:text-gold-400 transition-colors" onclick="navigateTo('home')">Início</button>
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-zinc-900 dark:text-zinc-50">Gala Anual Virtude</span>
</nav>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
<div className="lg:col-span-2 space-y-8">
<div className="aspect-video w-full overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50">
<img alt="Gala Virtude" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div>
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-4">Gala Anual Virtude</h1>
<p className="text-base font-normal text-zinc-500 dark:text-zinc-400 leading-relaxed">Uma noite de excelência dedicada aos nossos parceiros e clientes...</p>
</div>
</div>
<div className="lg:col-span-1">
<div className="sticky top-24 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
<h2 className="text-lg font-medium tracking-tight mb-4">Selecionar Bilhetes</h2>
<div className="space-y-3 mb-8">

<div className="group flex items-center justify-between p-4 rounded-2xl border border-zinc-200 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-900/20 transition-colors hover:border-gold-500/50">
<div>
<h3 className="text-sm font-medium group-hover:text-gold-600 transition-colors">Acesso Simples</h3>
<p className="text-base font-medium mt-2">120,00 €</p>
</div>
<div className="flex items-center gap-3 bg-white dark:bg-zinc-900 rounded-full border border-zinc-200 dark:border-zinc-800 p-1">
<button className="flex h-7 w-7 items-center justify-center rounded-full text-zinc-500 hover:bg-gold-50 hover:text-gold-600 transition-colors" onclick="updateQty('geral', -1)"><iconify-icon icon="solar:minus-linear"></iconify-icon></button>
<span className="text-sm font-medium w-4 text-center" id="qty-geral">0</span>
<button className="flex h-7 w-7 items-center justify-center rounded-full text-zinc-500 hover:bg-gold-50 hover:text-gold-600 transition-colors" onclick="updateQty('geral', 1)"><iconify-icon icon="solar:add-linear"></iconify-icon></button>
</div>
</div>
</div>
<div className="flex items-center justify-between pt-4 border-t border-zinc-200 dark:border-zinc-800 mb-6">
<span className="text-sm text-zinc-500">Total</span>
<span className="text-2xl font-medium tracking-tight" id="subtotal-display">0,00 €</span>
</div>
<button className="w-full h-12 rounded-full bg-gold-500 text-black text-sm font-medium transition-all hover:bg-gold-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-sm" disabled="" id="add-to-cart-btn" onclick="addToCart()">
                            Adicionar ao Carrinho
                        </button>
</div>
</div>
</div>
</div>


<div className="hidden view-section fade-in max-w-5xl mx-auto" id="cart-view"><h1 className="text-3xl font-medium tracking-tight mb-8">O seu carrinho</h1></div>
<div className="hidden view-section fade-in max-w-sm mx-auto pt-10" id="login-view"><h1 className="text-2xl font-medium tracking-tight mb-2 text-center">Bem-vindo de volta</h1><button className="w-full h-11 mt-4 rounded-full bg-gold-500 text-black text-sm font-medium transition-all hover:bg-gold-600 shadow-sm" onclick="handleLogin(event)">Entrar (Demo)</button></div>
<div className="hidden view-section fade-in max-w-sm mx-auto pt-10" id="register-view"><h1 className="text-2xl font-medium tracking-tight mb-2 text-center">Criar Conta</h1></div>

<div className="hidden view-section fade-in" id="dashboard-view">
<div className="flex flex-col md:flex-row gap-8 lg:gap-12">

<div className="w-full md:w-64 shrink-0 space-y-2">
<div className="pb-6 mb-4 border-b border-zinc-200 dark:border-zinc-800">
<div className="w-16 h-16 rounded-full bg-gold-50 dark:bg-gold-500/10 flex items-center justify-center text-gold-600 dark:text-gold-500 mb-4 border border-gold-200/50 dark:border-gold-500/20">
<span className="text-xl font-medium">JS</span>
</div>
<h2 className="text-xl font-medium tracking-tight">João Silva</h2>
<p className="text-sm text-zinc-500">joao.silva@exemplo.com</p>
</div>
<nav className="space-y-1">
<button className="dash-tab w-full flex items-center gap-3 px-3 py-2.5 rounded-xl bg-gold-50 dark:bg-gold-500/10 text-gold-700 dark:text-gold-400 text-sm font-medium transition-colors text-left border border-gold-200/50 dark:border-gold-500/20" id="btn-tab-tickets" onclick="switchDashTab('tickets')">
<iconify-icon className="text-lg" icon="solar:ticket-linear"></iconify-icon>
                            Os Meus Bilhetes
                        </button>
<button className="dash-tab w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 text-sm font-medium dark:hover:bg-zinc-900/50 dark:hover:text-zinc-50 transition-colors text-left border border-transparent" id="btn-tab-history" onclick="switchDashTab('history')">
<iconify-icon className="text-lg" icon="solar:history-linear"></iconify-icon>
                            Histórico de Compras
                        </button>
<button className="dash-tab w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 text-sm font-medium dark:hover:bg-zinc-900/50 dark:hover:text-zinc-50 transition-colors text-left border border-transparent" id="btn-tab-settings" onclick="switchDashTab('settings')">
<iconify-icon className="text-lg" icon="solar:settings-linear"></iconify-icon>
                            Definições de Conta
                        </button>
<button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-red-500 hover:bg-red-50 text-sm font-medium dark:hover:bg-red-950/30 transition-colors text-left mt-4 border border-transparent" onclick="navigateTo('login')">
<iconify-icon className="text-lg" icon="solar:logout-2-linear"></iconify-icon>
                            Terminar Sessão
                        </button>
</nav>
</div>

<div className="flex-1 overflow-hidden">

<div className="space-y-6 fade-in" id="tab-tickets">
<h2 className="text-xl font-medium tracking-tight">Próximos Eventos</h2>

<div className="flex flex-col sm:flex-row rounded-3xl border border-zinc-200 bg-white overflow-hidden dark:border-zinc-800 dark:bg-zinc-950 shadow-sm group hover:border-gold-500/30 transition-colors">
<div className="w-full sm:w-48 h-48 sm:h-auto bg-zinc-100 dark:bg-zinc-900 relative shrink-0">
<img className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-6 flex-1 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium px-2.5 py-1 bg-green-50 text-green-600 rounded-lg dark:bg-green-500/10 dark:text-green-400 border border-green-200/50 dark:border-green-500/20 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Válido
                                        </span>
<span className="text-sm text-zinc-500 font-mono">#VIRT-8472</span>
</div>
<h3 className="text-xl font-medium tracking-tight mb-1 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">Gala Anual Virtude</h3>
<p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4 flex items-center gap-2">
<iconify-icon icon="solar:calendar-linear"></iconify-icon> 12 Ago 2024 • Coliseu dos Recreios
                                    </p>
</div>
<div className="flex flex-wrap items-center gap-3">
<button className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-gold-500 text-black text-sm font-medium hover:bg-gold-600 transition-colors shadow-sm flex items-center justify-center gap-2" onclick="openTicketActionModal('view')">
<iconify-icon className="text-lg" icon="solar:qr-code-linear"></iconify-icon> Ver Bilhete
                                    </button>
<button className="px-5 py-2.5 rounded-xl border border-zinc-200 text-zinc-900 text-sm font-medium hover:border-gold-500/30 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-50 dark:hover:border-gold-500/30 dark:hover:bg-zinc-900 transition-colors flex items-center justify-center gap-2" onclick="openTicketActionModal('options')">
<iconify-icon className="text-lg" icon="solar:menu-dots-linear"></iconify-icon> Opções
                                    </button>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row rounded-3xl border border-zinc-200 bg-white/50 overflow-hidden dark:border-zinc-800 dark:bg-zinc-950/50 opacity-70 group">
<div className="w-full sm:w-40 h-32 sm:h-auto bg-zinc-100 dark:bg-zinc-900 relative shrink-0">
<img className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&amp;w=800"/>
</div>
<div className="p-5 flex-1 flex flex-col justify-center">
<div className="flex items-center justify-between mb-1">
<span className="text-xs font-medium px-2.5 py-1 bg-zinc-100 text-zinc-500 rounded-lg dark:bg-zinc-900 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800">Evento Passado</span>
</div>
<h3 className="text-base font-medium tracking-tight mb-1">Tech Innovation Summit</h3>
<p className="text-sm text-zinc-500 dark:text-zinc-400">25 Set 2023 • Altice Arena</p>
</div>
</div>
</div>

<div className="space-y-6 hidden" id="tab-history">
<h2 className="text-xl font-medium tracking-tight">Histórico de Compras</h2>
<div className="rounded-3xl border border-zinc-200 bg-white overflow-hidden dark:border-zinc-800 dark:bg-zinc-950 shadow-sm divide-y divide-zinc-100 dark:divide-zinc-800/50">

<div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-zinc-50 dark:hover:bg-zinc-900/30 transition-colors">
<div>
<p className="text-sm font-medium mb-0.5">Encomenda #ORD-9921</p>
<p className="text-xs text-zinc-500 mb-2">15 Junho 2024 • Cartão final 4242</p>
<p className="text-sm text-zinc-900 dark:text-zinc-100">1x Gala Anual Virtude</p>
</div>
<div className="flex items-center justify-between sm:justify-end gap-6 sm:w-1/3">
<span className="text-base font-medium">120,00 €</span>
<button className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-500 hover:bg-gold-50 hover:text-gold-600 dark:hover:bg-gold-500/10 dark:hover:text-gold-400 transition-colors border border-zinc-200 dark:border-zinc-800" title="Descarregar Fatura">
<iconify-icon className="text-lg" icon="solar:document-text-linear"></iconify-icon>
</button>
</div>
</div>

<div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-zinc-50 dark:hover:bg-zinc-900/30 transition-colors">
<div>
<p className="text-sm font-medium mb-0.5">Encomenda #ORD-8433</p>
<p className="text-xs text-zinc-500 mb-2">02 Setembro 2023 • MB Way</p>
<p className="text-sm text-zinc-900 dark:text-zinc-100">1x Tech Innovation Summit</p>
</div>
<div className="flex items-center justify-between sm:justify-end gap-6 sm:w-1/3">
<span className="text-base font-medium">250,00 €</span>
<button className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-500 hover:bg-gold-50 hover:text-gold-600 dark:hover:bg-gold-500/10 dark:hover:text-gold-400 transition-colors border border-zinc-200 dark:border-zinc-800" title="Descarregar Fatura">
<iconify-icon className="text-lg" icon="solar:document-text-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="hidden" id="tab-settings">
<h2 className="text-xl font-medium tracking-tight mb-6">Definições de Conta</h2>
<form className="max-w-2xl space-y-8" onsubmit="event.preventDefault()">

<div className="space-y-4 rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950 shadow-sm">
<h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-50 border-b border-zinc-100 dark:border-zinc-800/50 pb-3 mb-4">Dados Pessoais</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs text-zinc-500 mb-1.5 ml-1">Nome Próprio</label>
<input className="w-full h-11 rounded-xl border border-zinc-200 bg-zinc-50 dark:bg-zinc-900 px-4 text-sm outline-none transition-all focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 dark:border-zinc-800" type="text" value="João"/>
</div>
<div>
<label className="block text-xs text-zinc-500 mb-1.5 ml-1">Apelido</label>
<input className="w-full h-11 rounded-xl border border-zinc-200 bg-zinc-50 dark:bg-zinc-900 px-4 text-sm outline-none transition-all focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 dark:border-zinc-800" type="text" value="Silva"/>
</div>
<div className="sm:col-span-2">
<label className="block text-xs text-zinc-500 mb-1.5 ml-1">Email</label>
<input className="w-full h-11 rounded-xl border border-zinc-200 bg-zinc-50 dark:bg-zinc-900 px-4 text-sm outline-none transition-all focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 dark:border-zinc-800" type="email" value="joao.silva@exemplo.com"/>
</div>
</div>
</div>

<div className="space-y-4 rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950 shadow-sm">
<h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-50 border-b border-zinc-100 dark:border-zinc-800/50 pb-3 mb-4">Preferências de Comunicação</h3>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-10 h-5 rounded-full bg-zinc-200 peer-checked:bg-gold-500 dark:bg-zinc-800 transition-colors relative after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-5 peer-checked:after:border-white"></div>
</div>
<span className="text-sm text-zinc-600 dark:text-zinc-400">Receber novidades e convites exclusivos Virtude</span>
</label>
</div>
<button className="h-11 px-8 rounded-full bg-black text-gold-400 text-sm font-medium transition-all hover:bg-gold-500 hover:text-black shadow-sm" type="submit">
                                Guardar Alterações
                            </button>
</form>
</div>
</div>
</div>
</div>
</main>

<footer className="border-t border-zinc-200 bg-white mt-auto dark:border-zinc-800 dark:bg-zinc-950">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<img alt="Virtude Group" className="h-5 w-auto object-contain opacity-80 grayscale dark:grayscale-0 dark:opacity-100 transition-all hover:opacity-100 hover:grayscale-0" src="https://virtudegroup.com/wp-content/uploads/2026/02/logovirtude.png"/>
<span className="text-xs text-zinc-500 dark:text-zinc-400 border-l border-zinc-200 dark:border-zinc-800 pl-3">© 2024. Todos os direitos reservados.</span>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[60] bg-zinc-950/80 backdrop-blur-md transition-opacity duration-300 opacity-0 hidden flex items-center justify-center p-4" id="ticket-modal-overlay">
<div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl transition-all duration-300 scale-95 opacity-0 dark:bg-zinc-900 border border-gold-500/20 overflow-hidden flex flex-col max-h-[90vh]" id="ticket-modal">

<div className="flex items-center justify-between p-5 border-b border-zinc-100 dark:border-zinc-800/50 bg-zinc-50/50 dark:bg-zinc-950/50">
<div className="flex items-center gap-3">
<span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-50 text-gold-600 dark:bg-gold-500/10 dark:text-gold-400 border border-gold-200/50 dark:border-gold-500/20">
<iconify-icon className="text-lg" icon="solar:ticket-linear"></iconify-icon>
</span>
<h2 className="text-lg font-medium tracking-tight">Gestão de Bilhete</h2>
</div>
<button className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-500 hover:bg-gold-50 hover:text-gold-600 dark:hover:bg-gold-500/10 dark:hover:text-gold-400 transition-colors" onclick="closeTicketModal()">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>

<div className="flex-1 overflow-y-auto flex flex-col sm:flex-row relative">

<div className="w-full sm:w-1/2 p-6 sm:p-8 flex flex-col items-center justify-center border-b sm:border-b-0 sm:border-r border-zinc-100 dark:border-zinc-800/50 bg-white dark:bg-zinc-900 shrink-0">
<div className="text-center mb-6 w-full">
<span className="inline-block px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-medium dark:bg-green-500/10 dark:text-green-400 border border-green-200/50 dark:border-green-500/20 mb-3">
                            Pronto para Check-in
                        </span>
<h3 className="text-xl font-medium tracking-tight">Gala Anual Virtude</h3>
<p className="text-sm text-zinc-500 mt-1">Lugar Reservado • Acesso Simples</p>
</div>

<div className="bg-white p-4 rounded-2xl border-2 border-zinc-100 dark:border-zinc-800 shadow-sm mb-6 relative group cursor-pointer hover:border-gold-500/30 transition-colors" title="Clique para ampliar">

<img alt="QR Code" className="w-40 h-40 object-contain rounded-lg" src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&amp;data=VIRTUDE-8472-JOAO-SILVA"/>
<div className="absolute inset-0 bg-white/80 dark:bg-zinc-950/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl">
<iconify-icon className="text-2xl text-gold-600 dark:text-gold-400" icon="solar:maximize-linear"></iconify-icon>
</div>
</div>
<div className="w-full bg-zinc-50 dark:bg-zinc-950/50 rounded-xl p-4 text-center border border-zinc-200 dark:border-zinc-800">
<p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Código do Bilhete</p>
<p className="text-lg font-mono font-medium tracking-widest">#VIRT-8472</p>
</div>
</div>

<div className="w-full sm:w-1/2 bg-zinc-50/50 dark:bg-zinc-950/30 relative overflow-hidden">

<div className="p-6 h-full flex flex-col justify-center space-y-3 transition-transform duration-300" id="tm-panel-options">
<h4 className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-2 uppercase tracking-wide px-2">Opções Disponíveis</h4>
<button className="w-full flex items-center justify-between p-4 rounded-2xl bg-white border border-zinc-200 hover:border-gold-500/50 hover:shadow-sm transition-all dark:bg-zinc-900 dark:border-zinc-800 text-left group" onclick="switchTicketPanel('transfer')">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
<iconify-icon className="text-lg" icon="solar:forward-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">Transferir Bilhete</p>
<p className="text-xs text-zinc-500 mt-0.5">Enviar para um convidado</p>
</div>
</div>
<iconify-icon className="text-zinc-300 group-hover:text-gold-500 transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
<button className="w-full flex items-center justify-between p-4 rounded-2xl bg-white border border-zinc-200 hover:border-gold-500/50 hover:shadow-sm transition-all dark:bg-zinc-900 dark:border-zinc-800 text-left group">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
<iconify-icon className="text-lg" icon="solar:printer-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">Descarregar PDF</p>
<p className="text-xs text-zinc-500 mt-0.5">Guardar offline ou imprimir</p>
</div>
</div>
<iconify-icon className="text-zinc-300 group-hover:text-gold-500 transition-colors" icon="solar:download-linear"></iconify-icon>
</button>
<button className="w-full flex items-center justify-between p-4 rounded-2xl bg-white border border-zinc-200 hover:border-red-500/50 hover:shadow-sm transition-all dark:bg-zinc-900 dark:border-zinc-800 text-left group mt-4" onclick="switchTicketPanel('cancel')">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400">
<iconify-icon className="text-lg" icon="solar:close-circle-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-red-600 dark:text-red-400">Cancelar Bilhete</p>
<p className="text-xs text-zinc-500 mt-0.5">Pedir reembolso total</p>
</div>
</div>
<iconify-icon className="text-zinc-300 group-hover:text-red-500 transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="absolute inset-0 p-6 flex flex-col justify-center bg-zinc-50/50 dark:bg-zinc-950/30 transition-transform duration-300 translate-x-full" id="tm-panel-transfer">
<button className="mb-6 flex items-center gap-2 text-sm text-zinc-500 hover:text-gold-600 transition-colors" onclick="switchTicketPanel('options')">
<iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon> Voltar
                        </button>
<div className="mb-6 text-center">
<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 mb-3">
<iconify-icon className="text-2xl" icon="solar:forward-linear"></iconify-icon>
</div>
<h4 className="text-lg font-medium tracking-tight">Transferir Bilhete</h4>
<p className="text-xs text-zinc-500 mt-2">O destinatário receberá um email com as instruções para resgatar o bilhete.</p>
</div>
<form className="space-y-4" onsubmit="handleTicketAction(event, 'transfer')">
<div>
<label className="block text-xs text-zinc-500 mb-1.5 ml-1">Email do Convidado</label>
<input className="w-full h-11 rounded-xl border border-zinc-200 bg-white dark:bg-zinc-900 px-4 text-sm outline-none transition-all focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 dark:border-zinc-800" placeholder="exemplo@email.com" required="" type="email"/>
</div>
<button className="w-full h-11 rounded-full bg-blue-600 text-white text-sm font-medium transition-all hover:bg-blue-700 shadow-sm mt-2 flex items-center justify-center gap-2" type="submit">
<iconify-icon icon="solar:plain-linear"></iconify-icon> Enviar Convite
                            </button>
</form>
</div>

<div className="absolute inset-0 p-6 flex flex-col justify-center bg-zinc-50/50 dark:bg-zinc-950/30 transition-transform duration-300 translate-x-full" id="tm-panel-cancel">
<button className="mb-6 flex items-center gap-2 text-sm text-zinc-500 hover:text-gold-600 transition-colors" onclick="switchTicketPanel('options')">
<iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon> Voltar
                        </button>
<div className="mb-6 text-center">
<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400 mb-3 border border-red-200/50 dark:border-red-500/20">
<iconify-icon className="text-2xl" icon="solar:danger-circle-linear"></iconify-icon>
</div>
<h4 className="text-lg font-medium tracking-tight text-red-600 dark:text-red-400">Tem a certeza?</h4>
<p className="text-xs text-zinc-500 mt-2 leading-relaxed">
                                Irá perder acesso a este bilhete de imediato. Como o evento é daqui a mais de 48 horas, receberá um reembolso integral de <strong>120,00 €</strong> no seu método de pagamento original.
                            </p>
</div>
<form className="mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-800" onsubmit="handleTicketAction(event, 'cancel')">
<button className="w-full h-11 rounded-full bg-red-600 text-white text-sm font-medium transition-all hover:bg-red-700 shadow-sm flex items-center justify-center gap-2" type="submit">
                                Confirmar Cancelamento
                            </button>
</form>
</div>

<div className="absolute inset-0 p-6 flex flex-col items-center justify-center bg-zinc-50/50 dark:bg-zinc-950/30 transition-transform duration-300 translate-x-full" id="tm-panel-success">
<div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-500 dark:bg-green-500/10 border border-green-200/50 dark:border-green-500/20 mb-4 scale-90 fade-in">
<iconify-icon className="text-3xl" icon="solar:check-read-linear"></iconify-icon>
</div>
<h4 className="text-lg font-medium tracking-tight mb-2" id="success-msg-title">Ação Concluída</h4>
<p className="text-sm text-zinc-500 text-center mb-8" id="success-msg-desc">Processado com sucesso.</p>
<button className="h-11 px-8 rounded-full border border-zinc-200 bg-transparent text-sm font-medium transition-all hover:border-gold-500/30 hover:text-gold-600 dark:border-zinc-800 dark:hover:border-gold-500/30 dark:hover:text-gold-400" onclick="closeTicketModal()">
                            Fechar Janela
                        </button>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
