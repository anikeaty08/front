import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const chatContainer = document.getElementById('chatContainer');
            const scrollSpacer = document.getElementById('scrollSpacer');
            const typingIndicator = document.getElementById('typingIndicator');
            
            // Player Elements
            const playBtn = document.getElementById('playAudioBtn');
            const playIcon = document.getElementById('playIcon');
            const progressBar = document.getElementById('audioProgressBar');
            const timerText = document.getElementById('audioTimerText');
            
            // Interaction Elements
            const aiResponseContainer = document.getElementById('aiResponseContainer');
            const quickRepliesWrapper = document.getElementById('quickRepliesWrapper');
            
            let isPlaying = false;
            let aiRespondedToAudio = false; 

            // Scroll para o fim inicial
            chatContainer.scrollTop = chatContainer.scrollHeight;

            function scrollToBottom() {
                setTimeout(() => {
                    chatContainer.scrollTo({ top: chatContainer.scrollHeight, behavior: 'smooth' });
                }, 50);
            }

            // 1. Lógica do Áudio e primeira Resposta
            playBtn.addEventListener('click', () => {
                if (isPlaying) return;
                isPlaying = true;
                playIcon.setAttribute('icon', 'solar:pause-circle-bold');
                
                const duration = 5000;
                const updateInterval = 50; 
                let elapsed = 0;

                const timer = setInterval(() => {
                    elapsed += updateInterval;
                    progressBar.style.width = `${(elapsed / duration) * 100}%`;
                    timerText.textContent = `0:0${Math.floor(elapsed / 1000)}`;

                    if (elapsed >= duration) {
                        clearInterval(timer);
                        playIcon.setAttribute('icon', 'solar:play-circle-bold');
                        isPlaying = false;
                        
                        setTimeout(() => {
                            progressBar.style.width = '0%';
                            timerText.textContent = '0:00';
                        }, 1000);

                        if (!aiRespondedToAudio) {
                            triggerInitialAIResponse();
                        }
                    }
                }, updateInterval);
            });

            function triggerInitialAIResponse() {
                aiRespondedToAudio = true;
                scrollSpacer.insertAdjacentElement('beforebegin', typingIndicator);
                typingIndicator.classList.remove('hidden');
                typingIndicator.classList.add('flex');
                scrollToBottom();

                setTimeout(() => {
                    typingIndicator.classList.add('hidden');
                    typingIndicator.classList.remove('flex');
                    
                    scrollSpacer.insertAdjacentElement('beforebegin', aiResponseContainer);
                    aiResponseContainer.classList.remove('hidden');
                    aiResponseContainer.classList.add('flex');
                    scrollToBottom();
                }, 1500);
            }

            // 2. Lógica das Respostas Rápidas (Botões)
            function handleOptionClick(userText, aiHtmlContent) {
                // Desaparece com os botões
                quickRepliesWrapper.style.opacity = '0';
                setTimeout(() => quickRepliesWrapper.style.display = 'none', 300);

                // Cria balão do usuário
                const userBubble = document.createElement('div');
                userBubble.className = 'flex items-start justify-end max-w-[90%] md:max-w-[70%] self-end mt-2 fade-in';
                userBubble.innerHTML = `
                    <div class="bg-emerald-100 rounded-2xl rounded-tr-sm px-4 py-3 shadow-sm border border-emerald-200/50 relative flex flex-col">
                        <p class="text-sm text-stone-900 leading-relaxed">${userText}</p>
                        <div class="flex items-center justify-end gap-1 mt-1">
                            <span class="text-[10px] text-stone-500 font-medium">Agora</span>
                            <iconify-icon icon="solar:check-read-linear" class="text-emerald-600 text-sm"></iconify-icon>
                        </div>
                    </div>
                `;
                scrollSpacer.insertAdjacentElement('beforebegin', userBubble);
                scrollToBottom();

                // Mostra digitando novamente
                setTimeout(() => {
                    scrollSpacer.insertAdjacentElement('beforebegin', typingIndicator);
                    typingIndicator.classList.remove('hidden');
                    typingIndicator.classList.add('flex');
                    scrollToBottom();
                    
                    // Cria balão da IA após processamento
                    setTimeout(() => {
                        typingIndicator.classList.add('hidden');
                        typingIndicator.classList.remove('flex');

                        const aiBubble = document.createElement('div');
                        aiBubble.className = 'flex items-start max-w-[90%] md:max-w-[70%] mt-2 w-full fade-in';
                        aiBubble.innerHTML = `
                            <div class="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm border border-stone-100 relative w-full sm:w-auto">
                                <p class="text-sm text-stone-800 leading-relaxed">${aiHtmlContent}</p>
                                <div class="flex justify-end mt-1">
                                    <span class="text-[10px] text-stone-400 font-medium">Agora</span>
                                </div>
                            </div>
                        `;
                        scrollSpacer.insertAdjacentElement('beforebegin', aiBubble);
                        scrollToBottom();
                    }, 1200);
                }, 400);
            }

            // Conteúdos das respostas
            const contentCompleto = `Aqui está o seu <strong class="font-medium text-stone-900">Relatório Completo</strong> de hoje:<br><br>• Entradas: <span class="text-emerald-600 font-medium">R$ 1.200,00</span><br>• Saídas: <span class="text-red-500 font-medium">R$ 450,00</span><br>• Saldo Líquido do Dia: <span class="text-blue-600 font-medium">R$ 750,00</span><br><br>Deseja que eu exporte este resumo para PDF?`;
            
            const contentEntradas = `Hoje você teve um total de <strong class="text-emerald-600 font-medium">R$ 1.200,00</strong> em entradas no seu caixa.<br><br>A maior parte deste valor (R$ 800,00) foi originada através de transferências Pix.`;
            
            const contentSaidas = `Suas saídas de hoje totalizam <strong class="text-red-500 font-medium">R$ 450,00</strong>.<br><br>O principal gasto registrado foi referente ao pagamento de boletos de fornecedores (R$ 320,00).`;
            
            const contentCancelar = `Tudo bem! Requisicao cancelada.<br>Se precisar verificar qualquer outro dado sobre suas finanças, é só me chamar.`;

            // Atribuição dos eventos aos botões
            document.getElementById('btnCompleto').addEventListener('click', () => handleOptionClick('Relatório Completo', contentCompleto));
            document.getElementById('btnEntradas').addEventListener('click', () => handleOptionClick('Só Entradas', contentEntradas));
            document.getElementById('btnSaidas').addEventListener('click', () => handleOptionClick('Só Saídas', contentSaidas));
            document.getElementById('btnCancelar').addEventListener('click', () => handleOptionClick('Cancelar', contentCancelar));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full h-full max-w-[1600px] flex bg-white shadow-2xl overflow-hidden relative">

<aside className="hidden md:flex w-[380px] flex-shrink-0 border-r border-stone-200 flex-col bg-white z-10">

<header className="h-16 bg-stone-50 flex items-center justify-between px-4 border-b border-stone-200">
<div className="w-10 h-10 rounded-full bg-stone-300 flex items-center justify-center text-stone-50 font-medium tracking-tight overflow-hidden cursor-pointer">
<img alt="Perfil" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div className="flex gap-4 text-stone-500">
<button className="hover:text-stone-800 transition-colors"><iconify-icon className="text-xl" icon="solar:users-group-rounded-linear"></iconify-icon></button>
<button className="hover:text-stone-800 transition-colors"><iconify-icon className="text-xl" icon="solar:chat-round-dots-linear"></iconify-icon></button>
<button className="hover:text-stone-800 transition-colors"><iconify-icon className="text-xl" icon="solar:menu-dots-vertical-linear"></iconify-icon></button>
</div>
</header>

<div className="p-2 border-b border-stone-200 bg-white">
<div className="bg-stone-100 rounded-lg flex items-center px-3 py-2 gap-3 focus-within:ring-1 focus-within:ring-emerald-500 transition-shadow">
<iconify-icon className="text-stone-400 text-lg" icon="solar:magnifer-linear"></iconify-icon>
<input className="bg-transparent border-none outline-none text-sm w-full placeholder-stone-400 text-stone-700" placeholder="Pesquisar..." type="text"/>
</div>
</div>

<div className="flex-1 overflow-y-auto">

<div className="flex items-center gap-3 px-4 py-3 bg-stone-50 cursor-pointer relative after:content-[''] after:absolute after:left-0 after:top-0 after:bottom-0 after:w-1 after:bg-emerald-500">
<div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white font-medium tracking-tight text-lg flex-shrink-0 shadow-sm">
                        FA
                    </div>
<div className="flex-1 border-b border-stone-100 pb-3 mt-3">
<div className="flex justify-between items-center mb-0.5">
<h3 className="text-sm font-medium text-stone-900 tracking-tight">Finanças AI</h3>
<span className="text-xs text-stone-400 font-medium">10:45</span>
</div>
<div className="flex justify-between items-center">
<p className="text-sm text-stone-500 truncate pr-2">Gravando áudio...</p>
<span className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center text-xs text-white font-medium shadow-sm">2</span>
</div>
</div>
</div>

<div className="flex items-center gap-3 px-4 py-3 hover:bg-stone-50 cursor-pointer transition-colors">
<div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium tracking-tight text-lg flex-shrink-0">
                        S
                    </div>
<div className="flex-1 border-b border-stone-100 pb-3 mt-3">
<div className="flex justify-between items-center mb-0.5">
<h3 className="text-sm font-medium text-stone-900 tracking-tight">Suporte App</h3>
<span className="text-xs text-stone-400 font-medium">Ontem</span>
</div>
<div className="flex justify-between items-center">
<p className="text-sm text-stone-500 truncate pr-2">Seu chamado foi resolvido.</p>
</div>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col bg-[#f0ede6] relative" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg width=\\'80\\' height=\\'80\\' viewBox=\\'0 0 80 80\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'#000000\\' fillOpacity=\\'0.03\\'%3E%3Cpath d=\\'M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z\\' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')'}}>

<header className="h-16 bg-white/95 backdrop-blur-sm flex items-center justify-between px-4 lg:px-6 border-b border-stone-200 z-10 sticky top-0 shadow-sm">
<div className="flex items-center gap-3 cursor-pointer group">
<button className="md:hidden text-stone-500 mr-1"><iconify-icon className="text-xl" icon="solar:arrow-left-linear"></iconify-icon></button>
<div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-medium tracking-tight text-base shadow-sm group-hover:opacity-90 transition-opacity">
                        FA
                    </div>
<div>
<h2 className="text-sm font-medium text-stone-900 tracking-tight">Finanças AI</h2>
<p className="text-xs text-emerald-600 font-medium">Online</p>
</div>
</div>
<div className="flex gap-4 sm:gap-6 text-stone-400">
<button className="hover:text-emerald-600 transition-colors"><iconify-icon className="text-xl" icon="solar:videocamera-linear"></iconify-icon></button>
<button className="hover:text-emerald-600 transition-colors"><iconify-icon className="text-xl" icon="solar:magnifer-linear"></iconify-icon></button>
<button className="hover:text-stone-800 transition-colors hidden sm:block"><iconify-icon className="text-xl" icon="solar:menu-dots-vertical-linear"></iconify-icon></button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 md:p-8 flex flex-col gap-3 relative z-0 scroll-smooth" id="chatContainer">

<div className="flex justify-center my-4">
<span className="bg-white/80 backdrop-blur-md text-stone-500 text-xs font-medium px-4 py-1.5 rounded-full shadow-sm border border-stone-100">Hoje</span>
</div>

<div className="flex items-start max-w-[90%] md:max-w-[70%]">
<div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm border border-stone-100 relative group">
<p className="text-sm text-stone-800 leading-relaxed">Olá! Sou seu assistente financeiro inteligente. Como posso ajudar a organizar suas finanças hoje?</p>
<div className="flex justify-end mt-1">
<span className="text-xs text-stone-400">10:30</span>
</div>
</div>
</div>
<div className="flex items-start justify-end max-w-[90%] md:max-w-[70%] self-end">
<div className="bg-emerald-100 rounded-2xl rounded-tr-sm px-4 py-3 shadow-sm border border-emerald-200/50 relative group flex flex-col">
<p className="text-sm text-stone-900 leading-relaxed">Qual meu saldo atual?</p>
<div className="flex items-center justify-end gap-1 mt-1">
<span className="text-xs text-stone-500">10:31</span>
<iconify-icon className="text-emerald-600 text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
</div>
</div>
<div className="flex items-start max-w-[90%] md:max-w-[70%]">
<div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm border border-stone-100 relative group">
<p className="text-sm text-stone-800 leading-relaxed">Verifiquei suas contas conectadas. Seu saldo atual consolidado é de <strong className="font-medium text-stone-900">R$ 4.520,00</strong>.</p>
<div className="flex justify-end mt-1">
<span className="text-xs text-stone-400">10:31</span>
</div>
</div>
</div>

<div className="flex items-start justify-end max-w-[90%] md:max-w-[70%] self-end mt-2">
<div className="bg-emerald-100 rounded-2xl rounded-tr-sm p-2 shadow-sm border border-emerald-200/50 flex flex-col w-[240px] sm:w-[280px]">
<div className="flex items-center gap-3 px-2 py-1">
<button className="text-emerald-700 hover:text-emerald-800 transition-colors focus:outline-none flex-shrink-0" id="playAudioBtn">
<iconify-icon className="text-4xl drop-shadow-sm" icon="solar:play-circle-bold" id="playIcon"></iconify-icon>
</button>
<div className="flex-1 flex flex-col justify-center h-full gap-1.5">
<div className="w-full h-1.5 bg-emerald-200/80 rounded-full relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-0 bg-emerald-600 rounded-full transition-all ease-linear" id="audioProgressBar" style={{transitionDuration: '50ms'}}></div>
</div>
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-emerald-700/80" id="audioTimerText">0:00</span>
<div className="flex items-center gap-1 opacity-70">
<div className="w-1 h-1.5 bg-emerald-700 rounded-full"></div>
<div className="w-1 h-3 bg-emerald-700 rounded-full"></div>
<div className="w-1 h-2 bg-emerald-700 rounded-full"></div>
<div className="w-1 h-4 bg-emerald-700 rounded-full"></div>
<div className="w-1 h-2 bg-emerald-700 rounded-full"></div>
</div>
</div>
</div>
<div className="w-9 h-9 rounded-full bg-emerald-600 border-2 border-emerald-100 overflow-hidden flex-shrink-0 ml-1">
<img alt="Você" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
</div>
<div className="flex items-center justify-between px-2 mt-1">
<span className="text-xs text-emerald-700/60 font-medium">0:05</span>
<div className="flex items-center gap-1">
<span className="text-[10px] text-emerald-700/60 font-medium">10:45</span>
<iconify-icon className="text-emerald-600 text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="hidden items-start max-w-[90%] md:max-w-[70%] mt-2 fade-in" id="typingIndicator">
<div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm border border-stone-100 flex items-center h-[42px] gap-1.5">
<div className="w-1.5 h-1.5 bg-stone-400 rounded-full dot-typing"></div>
<div className="w-1.5 h-1.5 bg-stone-400 rounded-full dot-typing"></div>
<div className="w-1.5 h-1.5 bg-stone-400 rounded-full dot-typing"></div>
</div>
</div>

<div className="hidden flex-col gap-2 mt-2 w-full fade-in" id="aiResponseContainer">
<div className="flex items-start max-w-[90%] md:max-w-[70%]">
<div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm border border-stone-100">
<p className="text-sm text-stone-800 leading-relaxed">Perfeito, entendi o seu pedido pelo áudio! 🎙️<br/><br/>Já estou processando os dados consolidados do dia. Como prefere visualizar este relatório?</p>
<div className="flex justify-end mt-1">
<span className="text-[10px] text-stone-400 font-medium">10:45</span>
</div>
</div>
</div>

<div className="flex flex-wrap gap-2 ml-2 sm:ml-4 max-w-[90%] mt-1 transition-opacity duration-300" id="quickRepliesWrapper">
<button className="px-3.5 py-1.5 bg-white border border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300 text-xs font-medium rounded-full transition-all shadow-sm flex items-center gap-1.5 group" id="btnCompleto">
<iconify-icon className="text-sm group-hover:scale-110 transition-transform" icon="solar:document-text-linear"></iconify-icon>
                            Relatório Completo
                        </button>
<button className="px-3.5 py-1.5 bg-white border border-stone-200 text-stone-600 hover:bg-stone-50 hover:border-stone-300 text-xs font-medium rounded-full transition-all shadow-sm flex items-center gap-1.5" id="btnEntradas">
<iconify-icon className="text-emerald-500 text-sm" icon="solar:arrow-right-down-linear"></iconify-icon>
                            Só Entradas
                        </button>
<button className="px-3.5 py-1.5 bg-white border border-stone-200 text-stone-600 hover:bg-stone-50 hover:border-stone-300 text-xs font-medium rounded-full transition-all shadow-sm flex items-center gap-1.5" id="btnSaidas">
<iconify-icon className="text-red-500 text-sm" icon="solar:arrow-right-up-linear"></iconify-icon>
                            Só Saídas
                        </button>
<button className="px-3.5 py-1.5 bg-transparent border border-transparent text-stone-400 hover:text-stone-600 hover:bg-stone-100/50 text-xs font-medium rounded-full transition-all" id="btnCancelar">
                            Cancelar
                        </button>
</div>
</div>

<div className="h-6 flex-shrink-0 w-full" id="scrollSpacer"></div>
</div>

<footer className="bg-white/95 backdrop-blur-sm px-4 py-3 sm:px-6 sm:py-4 flex items-end gap-2 sm:gap-4 z-10 border-t border-stone-200">
<button className="p-2 text-stone-400 hover:text-stone-700 transition-colors mb-0.5 rounded-full hover:bg-stone-100 hidden sm:block">
<iconify-icon className="text-2xl" icon="solar:smile-circle-linear"></iconify-icon>
</button>
<button className="p-2 text-stone-400 hover:text-stone-700 transition-colors mb-0.5 rounded-full hover:bg-stone-100">
<iconify-icon className="text-2xl" icon="solar:paperclip-linear"></iconify-icon>
</button>
<div className="flex-1 bg-stone-100 rounded-2xl px-4 py-2.5 sm:py-3 border border-transparent focus-within:border-emerald-500 focus-within:bg-white focus-within:shadow-sm transition-all flex items-center min-h-[44px]">
<textarea className="w-full bg-transparent border-none outline-none text-sm text-stone-800 placeholder-stone-500 resize-none overflow-hidden block" placeholder="Digite uma mensagem..." rows="1"></textarea>
</div>
<button className="w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0 rounded-full bg-emerald-600 flex items-center justify-center text-white hover:bg-emerald-700 transition-colors shadow-sm mb-0.5 group">
<iconify-icon className="text-xl group-hover:scale-110 transition-transform" icon="solar:microphone-2-linear"></iconify-icon>
</button>
</footer>
</main>
</div>



    </>
  );
}
