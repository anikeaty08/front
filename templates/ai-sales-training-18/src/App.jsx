import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Lógica do Textarea
        const textarea = document.getElementById('main-input');
        const sendBtn = document.getElementById('send-btn');
        const sendIcon = sendBtn.querySelector('iconify-icon');

        const updateSendBtnState = () => {
            if (textarea.value.trim().length > 0) {
                sendBtn.classList.add('bg-white', 'text-zinc-900', 'hover:bg-zinc-200');
                sendBtn.classList.remove('bg-white/10', 'text-zinc-400');
            } else {
                sendBtn.classList.remove('bg-white', 'text-zinc-900', 'hover:bg-zinc-200');
                sendBtn.classList.add('bg-white/10', 'text-zinc-400');
            }
        };

        textarea.addEventListener('input', function() {
            this.style.height = '30px';
            this.style.height = (this.scrollHeight) + 'px';
            updateSendBtnState();
        });

        // Lógica de Enviar (Animação)
        sendBtn.addEventListener('click', () => {
            if (!textarea.value.trim()) return;
            
            // Inicia animação
            sendIcon.setAttribute('icon', 'solar:spinner-linear');
            sendIcon.classList.add('animate-spin');
            sendBtn.classList.add('pointer-events-none', 'opacity-80');
            
            // Simula tempo de envio
            setTimeout(() => {
                textarea.value = '';
                textarea.style.height = '30px';
                updateSendBtnState();
                
                sendIcon.classList.remove('animate-spin');
                sendIcon.setAttribute('icon', 'solar:check-circle-linear');
                sendBtn.classList.remove('pointer-events-none', 'opacity-80');
                sendBtn.classList.add('bg-emerald-400', 'text-emerald-950');
                sendBtn.classList.remove('bg-white');
                
                // Retorna ao estado normal
                setTimeout(() => {
                    sendIcon.setAttribute('icon', 'solar:arrow-up-linear');
                    sendBtn.classList.remove('bg-emerald-400', 'text-emerald-950');
                    sendBtn.classList.add('bg-white/10', 'text-zinc-400');
                }, 1500);
            }, 800);
        });

        // Enter para enviar
        textarea.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendBtn.click();
            }
        });

        // Dropdown IA Version
        const aiBtn = document.getElementById('ai-version-btn');
        const aiDropdown = document.getElementById('ai-dropdown');
        const aiIcon = aiBtn.querySelector('iconify-icon:last-child');
        
        let dropdownOpen = false;

        const toggleDropdown = () => {
            dropdownOpen = !dropdownOpen;
            if (dropdownOpen) {
                aiDropdown.classList.remove('hidden');
                setTimeout(() => {
                    aiDropdown.classList.remove('opacity-0', 'translate-y-2');
                    aiDropdown.classList.add('opacity-100', 'translate-y-0');
                    aiIcon.classList.add('rotate-180');
                }, 10);
            } else {
                aiDropdown.classList.remove('opacity-100', 'translate-y-0');
                aiDropdown.classList.add('opacity-0', 'translate-y-2');
                aiIcon.classList.remove('rotate-180');
                setTimeout(() => aiDropdown.classList.add('hidden'), 200);
            }
        };

        aiBtn.addEventListener('click', toggleDropdown);

        // Fecha dropdown ao clicar fora
        document.addEventListener('click', (e) => {
            if (dropdownOpen && !aiBtn.contains(e.target) && !aiDropdown.contains(e.target)) {
                toggleDropdown();
            }
        });

        // Mobile Sidebar
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const closeSidebarBtn = document.getElementById('close-sidebar-btn');
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('mobile-overlay');

        const toggleSidebar = () => {
            const isClosed = sidebar.classList.contains('hidden');
            if (isClosed) {
                sidebar.classList.remove('hidden');
                sidebar.classList.add('absolute', 'inset-y-0', 'left-0', 'z-50', 'shadow-2xl');
                overlay.classList.remove('hidden');
                setTimeout(() => overlay.classList.add('opacity-100'), 10);
            } else {
                sidebar.classList.add('hidden');
                sidebar.classList.remove('absolute', 'inset-y-0', 'left-0', 'z-50', 'shadow-2xl');
                overlay.classList.remove('opacity-100');
                setTimeout(() => overlay.classList.add('hidden'), 300);
            }
        };

        mobileBtn.addEventListener('click', toggleSidebar);
        closeSidebarBtn.addEventListener('click', toggleSidebar);
        overlay.addEventListener('click', toggleSidebar);

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="hidden md:flex w-[260px] flex-col border-r border-white/[0.06] bg-[#1c1c1c] flex-shrink-0 relative transition-transform duration-300" id="sidebar">

<div className="flex items-center justify-between px-4 py-4 h-14">
<div className="flex items-center gap-3 group cursor-pointer">
<div className="w-7 h-7 bg-white/5 rounded-md flex items-center justify-center overflow-hidden border border-white/10 shrink-0 group-hover:bg-white/10 transition-colors duration-300">
<iconify-icon className="text-base text-zinc-300 group-hover:text-white transition-colors" icon="solar:buildings-linear"></iconify-icon>
</div>
<span className="text-sm font-semibold text-zinc-200 tracking-tight group-hover:text-white transition-colors">Seller Treinner</span>
</div>
<button className="md:hidden text-zinc-500 hover:text-zinc-200 transition-colors p-1 rounded-md hover:bg-white/5 active:scale-95" id="close-sidebar-btn">
<iconify-icon className="text-lg" icon="solar:close-circle-linear"></iconify-icon>
</button>
<button className="hidden md:block text-zinc-500 hover:text-zinc-300 transition-colors p-1 rounded-md hover:bg-white/5 active:scale-95">
<iconify-icon className="text-lg" icon="solar:sidebar-minimalistic-linear"></iconify-icon>
</button>
</div>

<div className="flex-1 overflow-y-auto px-3 py-2 flex flex-col gap-1">
<button className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-zinc-200 transition-all duration-200 border border-white/[0.04] hover:border-white/10 mb-4 text-left group active:scale-[0.98]">
<iconify-icon className="text-lg text-zinc-400 group-hover:text-zinc-200 transition-colors" icon="solar:pen-new-square-linear"></iconify-icon>
<span className="text-sm font-medium">Novo treinamento</span>
</button>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/[0.04] text-zinc-400 hover:text-zinc-200 transition-all duration-200 active:scale-[0.98] group" href="#">
<iconify-icon className="text-lg group-hover:-translate-y-0.5 transition-transform" icon="solar:dialog-2-linear"></iconify-icon>
<span className="text-sm font-medium">Coach IA</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/[0.04] text-zinc-400 hover:text-zinc-200 transition-all duration-200 active:scale-[0.98] group" href="#">
<iconify-icon className="text-lg group-hover:-translate-y-0.5 transition-transform" icon="solar:magnifer-linear"></iconify-icon>
<span className="text-sm font-medium">Pesquisar cenários</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/[0.04] text-zinc-400 hover:text-zinc-200 transition-all duration-200 active:scale-[0.98] group" href="#">
<iconify-icon className="text-lg group-hover:-translate-y-0.5 transition-transform" icon="solar:book-bookmark-linear"></iconify-icon>
<span className="text-sm font-medium">Catálogo Premium</span>
</a>

<div className="mt-6 flex flex-col gap-1">
<div className="flex items-center justify-between px-3 py-1 group cursor-pointer">
<span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest group-hover:text-zinc-400 transition-colors">Conversas</span>
<button className="text-zinc-500 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:text-zinc-200 hover:scale-110 active:scale-95" title="Nova conversa">
<iconify-icon className="text-base" icon="solar:add-circle-linear"></iconify-icon>
</button>
</div>
<a className="flex items-center gap-3 px-3 py-1.5 rounded-lg text-zinc-400 hover:bg-white/[0.04] hover:text-zinc-200 transition-all duration-200 group active:scale-[0.98]" href="#">
<iconify-icon className="text-base group-hover:text-emerald-400 transition-colors" icon="solar:chat-round-line-linear"></iconify-icon>
<span className="text-sm font-medium truncate flex-1">Cliente Irritado - Troca</span>
</a>
<a className="flex items-center gap-3 px-3 py-1.5 rounded-lg text-zinc-400 hover:bg-white/[0.04] hover:text-zinc-200 transition-all duration-200 group active:scale-[0.98]" href="#">
<iconify-icon className="text-base group-hover:text-blue-400 transition-colors" icon="solar:chat-round-line-linear"></iconify-icon>
<span className="text-sm font-medium truncate flex-1">Objeção: Concorrente</span>
</a>
<a className="flex items-center gap-3 px-3 py-1.5 rounded-lg text-zinc-400 hover:bg-white/[0.04] hover:text-zinc-200 transition-all duration-200 group active:scale-[0.98]" href="#">
<iconify-icon className="text-base group-hover:text-purple-400 transition-colors" icon="solar:chat-round-line-linear"></iconify-icon>
<span className="text-sm font-medium truncate flex-1">Fechamento - Garantia Estendida</span>
</a>
</div>
<div className="mt-4 flex flex-col gap-1">
<div className="flex items-center justify-between px-3 py-1 group cursor-pointer">
<span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest group-hover:text-zinc-400 transition-colors">Feedbacks</span>
<button className="text-zinc-500 hover:text-zinc-300 transition-transform duration-200 hover:scale-110 active:scale-95">
<iconify-icon className="text-sm" icon="solar:filter-linear"></iconify-icon>
</button>
</div>
<div className="px-3 py-4 text-center border border-dashed border-white/5 bg-white/[0.01] rounded-xl mx-2 mt-2 hover:bg-white/[0.02] hover:border-white/10 transition-colors cursor-pointer group">
<iconify-icon className="text-xl text-zinc-600 mx-auto mb-2 group-hover:text-zinc-400 transition-colors" icon="solar:chat-round-dots-linear"></iconify-icon>
<p className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">Nenhum feedback recente.</p>
</div>
</div>
</div>

<div className="p-3 border-t border-white/[0.06] flex flex-col gap-2">

<div className="bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.05] rounded-xl p-3 flex items-center justify-between group cursor-pointer hover:border-white/10 hover:shadow-lg hover:shadow-black/20 transition-all duration-300 active:scale-[0.98]">
<div className="flex items-start gap-3">
<div className="w-7 h-7 rounded bg-zinc-800/80 flex items-center justify-center shrink-0 border border-white/5 group-hover:bg-zinc-700 transition-colors">
<iconify-icon className="text-base text-amber-400/80 group-hover:text-amber-400 group-hover:scale-110 transition-transform duration-300" icon="solar:medal-ribbon-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-200 line-clamp-1 group-hover:text-white transition-colors">Ranking Semanal</p>
<p className="text-xs text-zinc-500">Suba na liderança</p>
</div>
</div>
<iconify-icon className="text-base text-zinc-600 group-hover:text-zinc-300 group-hover:translate-x-1 transition-all duration-300" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>

<div className="flex items-center justify-between px-2 pt-1 text-zinc-500">
<div className="flex gap-3">
<button className="hover:text-zinc-200 hover:rotate-45 transition-all duration-300 active:scale-90"><iconify-icon className="text-lg" icon="solar:settings-linear"></iconify-icon></button>
<button className="hover:text-zinc-200 hover:scale-110 transition-all duration-300 active:scale-90"><iconify-icon className="text-lg" icon="solar:widget-5-linear"></iconify-icon></button>
<button className="hover:text-zinc-200 hover:-translate-y-0.5 transition-all duration-300 active:scale-90"><iconify-icon className="text-lg" icon="solar:smartphone-linear"></iconify-icon></button>
</div>
<button className="hover:text-zinc-200 hover:scale-110 transition-all duration-300 active:scale-90"><iconify-icon className="text-lg" icon="solar:sidebar-minimalistic-linear"></iconify-icon></button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 relative bg-gradient-to-b from-[#242424] to-[#1e1e1e]">

<header className="h-14 flex items-center justify-between px-4 md:px-6 shrink-0 z-20">
<div className="flex items-center gap-3">
<button className="md:hidden p-2 -ml-2 text-zinc-400 hover:text-zinc-100 bg-white/5 hover:bg-white/10 rounded-lg transition-colors active:scale-95" id="mobile-menu-btn">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>

<div className="relative">
<button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/[0.15] text-zinc-200 text-sm font-semibold transition-all duration-200 active:scale-95 group shadow-sm" id="ai-version-btn">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1 shadow-[0_0_8px_rgba(52,211,153,0.5)] animate-pulse"></div>
                        STI 1.0
                        <iconify-icon className="text-base text-zinc-500 group-hover:text-zinc-300 transition-transform duration-300 group-hover:translate-y-px" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="absolute top-full mt-2 w-48 bg-[#1c1c1c] border border-white/10 rounded-xl shadow-2xl shadow-black/50 overflow-hidden hidden opacity-0 transition-all duration-200 translate-y-2 z-50" id="ai-dropdown">
<div className="p-1.5 flex flex-col gap-0.5">
<button className="w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-zinc-100 bg-white/10 flex items-center gap-2 transition-colors">
<iconify-icon className="text-emerald-400 text-base" icon="solar:check-circle-linear"></iconify-icon>
                                STI 1.0 (Mais rápida)
                            </button>
<button className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-zinc-400 hover:text-zinc-200 hover:bg-white/5 flex items-center gap-2 transition-colors">
<iconify-icon className="text-base" icon="solar:ghost-linear"></iconify-icon>
                                STI Legacy
                            </button>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-3 md:gap-4">
<button className="text-zinc-400 hover:text-zinc-100 hover:-translate-y-0.5 hover:rotate-12 transition-all duration-300 active:scale-90">
<iconify-icon className="text-xl" icon="solar:bell-linear"></iconify-icon>
</button>

<div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 hover:shadow-lg hover:shadow-emerald-900/10 text-zinc-200 text-sm font-semibold cursor-pointer transition-all duration-300 active:scale-95 group">
<iconify-icon className="text-base text-emerald-400 group-hover:scale-110 transition-transform duration-300" icon="solar:pulse-linear"></iconify-icon>
                    Score: 86
                </div>

<button className="w-8 h-8 rounded-full overflow-hidden border border-white/10 focus:ring-2 focus:ring-white/20 hover:ring-2 hover:ring-white/10 transition-all duration-300 active:scale-90">
<img alt="User" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" src="https://ui-avatars.com/api/?name=Carlos+Silva&amp;background=2A2A2A&amp;color=fff"/>
</button>
</div>
</header>

<div className="flex-1 flex flex-col items-center justify-center p-4 md:p-12 relative overflow-y-auto z-10">
<div className="w-full max-w-[720px] mx-auto flex flex-col items-center flex-1 justify-center min-h-[500px] -mt-10 md:-mt-20">

<div className="flex items-center gap-3 mb-8 text-sm font-semibold text-zinc-400 bg-white/5 border border-white/5 px-4 py-1.5 rounded-full shadow-sm hover:bg-white/10 transition-colors duration-300 cursor-default">
<span className="flex items-center gap-1.5 text-zinc-300"><iconify-icon className="text-amber-400" icon="solar:star-fall-linear"></iconify-icon> Nível Sênior</span>
<span className="w-1 h-1 rounded-full bg-zinc-600"></span>
<button className="text-emerald-400 hover:text-emerald-300 transition-colors">Ver trilha de evolução</button>
</div>

<h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-10 text-center animate-[fade-in_0.5s_ease-out]">
                    O que vamos treinar hoje?
                </h1>

<div className="w-full glass-panel rounded-2xl border border-white/10 flex flex-col shadow-2xl shadow-black/40 focus-within:border-white/20 focus-within:ring-2 focus-within:ring-white/5 transition-all duration-300 relative z-20 group hover:border-white/[0.15]" id="input-container">

<div className="px-5 py-5 min-h-[120px] flex items-start">
<textarea className="w-full bg-transparent resize-none outline-none text-zinc-100 placeholder:text-zinc-500 text-lg leading-relaxed h-[30px] overflow-hidden transition-all" id="main-input" placeholder="Descreva o cenário de vendas, cliente ou objeção que deseja simular..." rows="1"></textarea>
</div>

<div className="px-4 pb-4 flex items-center justify-between border-t border-white/[0.04] pt-4">
<div className="flex items-center gap-1.5">
<button className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 hover:-translate-y-0.5 active:scale-95" title="Adicionar contexto">
<iconify-icon className="text-xl" icon="solar:add-circle-linear"></iconify-icon>
</button>
<button className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 hover:-translate-y-0.5 active:scale-95" title="Anexar arquivo">
<iconify-icon className="text-xl" icon="solar:paperclip-linear"></iconify-icon>
</button>
<button className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 hover:-translate-y-0.5 active:scale-95 hidden sm:block" title="Ferramentas">
<iconify-icon className="text-xl" icon="solar:plugin-linear"></iconify-icon>
</button>
</div>
<div className="flex items-center gap-2">
<button className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 hover:-translate-y-0.5 active:scale-95" title="Ditar">
<iconify-icon className="text-xl" icon="solar:microphone-2-linear"></iconify-icon>
</button>

<button className="ml-1 p-2.5 bg-white/10 text-zinc-400 rounded-xl transition-all duration-300 flex items-center justify-center hover:scale-105 active:scale-95" id="send-btn">
<iconify-icon className="text-xl transition-transform duration-300" icon="solar:arrow-up-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="flex items-center justify-between w-full max-w-[700px] mt-4 px-2">
<button className="flex items-center gap-2 text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors duration-200 group">
<iconify-icon className="text-base group-hover:rotate-180 transition-transform duration-500" icon="solar:server-square-linear"></iconify-icon>
                        Acessando base FastShop
                    </button>
<div className="flex gap-2 opacity-60 hover:opacity-100 transition-opacity">
<div className="w-5 h-5 rounded bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"><span className="text-[9px] text-zinc-300 font-semibold">TV</span></div>
<div className="w-5 h-5 rounded bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"><span className="text-[9px] text-zinc-300 font-semibold">EL</span></div>
</div>
</div>

<div className="flex flex-wrap items-center justify-center gap-3 mt-10 w-full max-w-[700px] opacity-0 translate-y-4 animate-[slide-up_0.6s_ease-out_0.2s_forwards]">
<button className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 text-sm font-semibold text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-95 group">
<iconify-icon className="text-base text-rose-400 group-hover:scale-110 transition-transform duration-300" icon="solar:shield-warning-linear"></iconify-icon>
                        Simular Cliente Difícil
                    </button>
<button className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 text-sm font-semibold text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-95 group">
<iconify-icon className="text-base text-emerald-400 group-hover:scale-110 transition-transform duration-300" icon="solar:money-bag-linear"></iconify-icon>
                        Treinar Contorno de Preço
                    </button>
<button className="flex items-center gap-2 px-4 py-2 rounded-full border border-transparent hover:bg-white/5 text-sm font-semibold text-zinc-400 hover:text-white transition-all duration-300 active:scale-95">
                        Ver todos
                        <iconify-icon className="text-base" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="absolute bottom-6 right-6 z-30 hidden lg:block">
<div className="glass-panel border border-white/10 rounded-2xl p-4 w-72 shadow-2xl flex items-start gap-4 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
<div className="flex-1">
<h4 className="text-sm font-semibold text-zinc-100 mb-1 flex items-center gap-1.5">
<iconify-icon className="text-rose-400 text-base" icon="solar:target-linear"></iconify-icon> Foco Sugerido
                    </h4>
<p className="text-xs text-zinc-400 leading-relaxed">A IA sugere treinar o <span className="text-zinc-200 font-semibold border-b border-white/20">fechamento de vendas</span>.</p>
</div>
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/5 group-hover:bg-white/10 group-hover:rotate-12 transition-all duration-300">
<iconify-icon className="text-lg text-amber-400" icon="solar:lightbulb-bolt-linear"></iconify-icon>
</div>
</div>
</div>
</main>

<div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 hidden md:hidden transition-opacity opacity-0" id="mobile-overlay"></div>


<style>
        @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes slide-up {
            from { opacity: 0; transform: translateY(16px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>

    </>
  );
}
