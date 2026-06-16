import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // State Management
        let chatState = 'collapsed'; // collapsed, expanded, full
        let step = 0;
        
        // DOM Elements
        const chatContainer = document.getElementById('chat-container');
        const chatMessages = document.getElementById('chat-messages');
        const chatInputArea = document.getElementById('chat-input-area');
        const chatPreview = document.getElementById('chat-preview');
        const quickReplies = document.getElementById('quick-replies');
        const navbar = document.getElementById('navbar');
        const exitBtn = document.getElementById('exit-chat-btn');
        const userInput = document.getElementById('user-input');
        const headerChevron = document.getElementById('header-chevron');
        const typingIndicator = document.getElementById('typing-indicator');

        // Scroll Logic for Auto-Expand
        window.addEventListener('scroll', () => {
            if (chatState === 'full') return;
            const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
            
            // Auto expand if user scrolls significantly deep
            if (scrollPercent > 40 && chatState === 'collapsed') {
                toggleChatExpand(true);
            }
        });

        function updateUIState() {
            if (chatState === 'collapsed') {
                // Collapsed Style
                chatContainer.className = "fixed z-50 bg-white shadow-xl overflow-hidden chat-transition flex flex-col border border-slate-200 bottom-4 right-4 left-4 h-16 sm:w-[400px] sm:left-auto sm:right-6 rounded-2xl cursor-pointer hover:shadow-2xl hover:-translate-y-1";
                chatInputArea.classList.add('hidden');
                chatMessages.classList.add('opacity-0', 'pointer-events-none');
                chatPreview.classList.remove('opacity-0');
                headerChevron.setAttribute('data-icon', 'lucide:chevron-up');
            } else if (chatState === 'expanded') {
                // Expanded Style (widget)
                chatContainer.className = "fixed z-50 bg-white shadow-2xl overflow-hidden chat-transition flex flex-col border border-slate-200 bottom-4 right-4 left-4 h-[550px] sm:w-[400px] sm:left-auto sm:right-6 rounded-2xl";
                chatInputArea.classList.remove('hidden');
                chatMessages.classList.remove('opacity-0', 'pointer-events-none');
                chatPreview.classList.add('opacity-0');
                headerChevron.setAttribute('data-icon', 'lucide:chevron-down');
                exitBtn.classList.add('hidden');
                navbar.classList.remove('-translate-y-full');
            } else if (chatState === 'full') {
                // Full Screen Style
                chatContainer.className = "fixed inset-0 z-50 bg-white flex flex-col chat-transition rounded-none";
                chatInputArea.classList.remove('hidden');
                chatMessages.classList.remove('opacity-0', 'pointer-events-none');
                chatPreview.classList.add('opacity-0');
                exitBtn.classList.remove('hidden');
                navbar.classList.add('-translate-y-full');
            }
        }

        function toggleChatExpand(forceExpand = false) {
            if (chatState === 'full') return; // Do nothing if in full mode via header click
            
            if (chatState === 'collapsed' || forceExpand) {
                chatState = 'expanded';
            } else {
                chatState = 'collapsed';
            }
            updateUIState();
        }

        function forceOpenChat() {
            chatState = 'full';
            updateUIState();
        }

        function exitFullChat() {
            chatState = 'expanded';
            updateUIState();
        }

        function scrollToBottom() {
            chatMessages.scrollTo({ top: chatMessages.scrollHeight, behavior: 'smooth' });
        }

        // Messaging Logic
        function addMessage(text, sender = 'ai') {
            const div = document.createElement('div');
            const isAi = sender === 'ai';
            
            div.className = `flex gap-3 max-w-[90%] fade-enter ${!isAi ? 'ml-auto flex-row-reverse' : ''}`;
            
            const avatar = isAi 
                ? `<div class="w-8 h-8 rounded-full bg-white border border-slate-200 flex-shrink-0 flex items-center justify-center mt-1 text-[#000080]"><span class="iconify" data-icon="lucide:sparkles" data-width="16" data-stroke-width="1.5"></span></div>`
                : `<div class="w-8 h-8 rounded-full bg-[#000080] flex-shrink-0 flex items-center justify-center mt-1"><span class="iconify text-white" data-icon="lucide:user" data-width="16" data-stroke-width="1.5"></span></div>`;

            const bubbleClass = isAi
                ? 'bg-white border border-slate-200 text-slate-700 rounded-tl-none'
                : 'bg-[#000080] text-white rounded-tr-none';

            div.innerHTML = `
                ${avatar}
                <div class="flex flex-col gap-1">
                    <div class="${bubbleClass} p-3 rounded-2xl shadow-sm text-base leading-relaxed">
                        ${text}
                    </div>
                </div>
            `;
            
            chatMessages.appendChild(div);
            scrollToBottom();
        }

        function showTyping() {
            typingIndicator.classList.remove('hidden');
            scrollToBottom();
        }

        function hideTyping() {
            typingIndicator.classList.add('hidden');
        }

        function handleReply(val) {
            if(chatState === 'collapsed') toggleChatExpand(true);
            
            let text = "";
            if (val === 'start') text = "Sí, quiero empezar";
            if (val === 'info') text = "Tengo algunas dudas";
            
            addMessage(text, 'user');
            quickReplies.innerHTML = '';
            
            showTyping();
            
            setTimeout(() => {
                hideTyping();
                processAiResponse(val);
            }, 1000);
        }

        function handleEnter(e) {
            if (e.key === 'Enter') sendMessage();
        }

        function sendMessage() {
            const text = userInput.value.trim();
            if (!text) return;
            
            if(chatState === 'collapsed') toggleChatExpand(true);

            addMessage(text, 'user');
            userInput.value = '';
            showTyping();
            
            setTimeout(() => {
                hideTyping();
                processAiResponse('generic');
            }, 1200);
        }

        function processAiResponse(intent) {
            if (step === 0) {
                step = 1;
                addMessage("Perfecto. Para encontrar la mejor oferta para ti, necesito saber: ¿Cuál es tu situación laboral actual?");
                createQuickOptions([
                    { label: "Asalariado (Empresa Privada)", val: "privada" },
                    { label: "Gobierno / Público", val: "publico" },
                    { label: "Independiente", val: "independiente" },
                    { label: "Jubilado", val: "jubilado" }
                ]);
            } else if (step === 1) {
                step = 2;
                addMessage("Gracias. ¿Cuál es el monto aproximado que deseas solicitar?");
                // Here we let them type free text
            } else if (step === 2) {
                step = 3;
                addMessage("Entendido. Basado en ese monto, ¿qué plazo de pago prefieres?");
                createQuickOptions([
                    { label: "12 - 24 Meses", val: "short" },
                    { label: "36 - 48 Meses", val: "medium" },
                    { label: "60+ Meses", val: "long" }
                ]);
            } else {
                addMessage("¡Excelente! Estoy analizando las mejores opciones con nuestros bancos aliados...");
                setTimeout(() => {
                    addMessage("He encontrado 3 opciones pre-aprobadas. Para verlas, por favor ingresa tu número de celular para enviarte el código de acceso.");
                }, 1500);
            }
        }

        function createQuickOptions(options) {
            quickReplies.innerHTML = '';
            options.forEach(opt => {
                const btn = document.createElement('button');
                btn.className = "whitespace-nowrap px-4 py-2 bg-white border border-slate-200 text-slate-700 text-sm font-normal rounded-full hover:bg-slate-50 transition-colors hover:border-[#000080] hover:text-[#000080]";
                btn.innerText = opt.label;
                btn.onclick = () => {
                    addMessage(opt.label, 'user');
                    quickReplies.innerHTML = '';
                    showTyping();
                    setTimeout(() => {
                        hideTyping();
                        processAiResponse(opt.val);
                    }, 800);
                };
                quickReplies.appendChild(btn);
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-40 glass-panel border-b border-slate-200/50 transition-transform duration-500" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3 cursor-pointer" onclick="window.scrollTo(0,0)">

<svg className="shrink-0" fill="none" height="32" viewbox="0 0 100 100" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M15 20 H80 C91.0457 20 100 28.9543 100 40 C100 46 97 51 92 55 L60 80 H25 C13.9543 80 5 71.0457 5 60 L30 40 L15 20 Z" fill="#000080" mask="url(#cut-top)"></path>
<path d="M85 80 H20 C8.9543 80 0 71.0457 0 60 C0 54 3 49 8 45 L40 20 H75 C86.0457 20 95 28.9543 95 40 L70 60 L85 80 Z" fill="#FF5500" mask="url(#cut-bottom)"></path>
<defs>
<mask id="cut-top">
<rect fill="white" height="100" width="100"></rect>
<path d="M-10 60 C 20 60 40 40 110 40 V 110 H -10 Z" fill="black"></path>
</mask>
<mask id="cut-bottom">
<rect fill="white" height="100" width="100"></rect>
<path d="M-10 60 C 20 60 40 40 110 40 V -10 H -10 Z" fill="black"></path>
</mask>
</defs>
</svg>
<span className="text-slate-900 font-medium tracking-tight text-xl">Preztamos<span className="text-slate-400 font-light">.ai</span></span>
</div>
<div className="flex items-center gap-8">
<a className="text-base font-normal text-slate-500 hover:text-slate-900 transition-colors hidden sm:block" href="#como-funciona">Cómo funciona</a>
<a className="text-base font-medium text-[#FF5500] hover:text-[#cc4400] transition-colors" href="#chat-trigger" onclick="forceOpenChat()">
                    Ingresar
                </a>
</div>
</div>
</nav>

<main className="pt-24 pb-32 w-full transition-all duration-700 ease-in-out" id="main-content">

<section className="max-w-4xl mx-auto px-6 mb-24 sm:mb-32 pt-10">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-8 shadow-sm">
<span className="iconify text-[#000080]" data-icon="lucide:sparkles" data-strokeWidth="1.5" data-width="14"></span>
<span className="text-xs font-medium text-blue-900 uppercase tracking-wide">Conoce a Zeta</span>
</div>
<h1 className="text-4xl sm:text-7xl font-medium text-slate-900 tracking-tight leading-[1.05] mb-8">
                El préstamo que necesitas,<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#000080] to-blue-600">sin ir al banco.</span>
</h1>
<p className="text-xl sm:text-2xl text-slate-500 leading-relaxed mb-10 max-w-2xl font-light">
                Zeta conecta tu perfil con los mejores bancos de Panamá en segundos. Compara tasas, elige tu cuota y recibe el dinero sin filas.
            </p>
<div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
<button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-lg bg-[#000080] px-8 font-normal text-white text-base transition-all duration-300 hover:bg-[#0f1758] hover:shadow-lg focus:outline-none hover:-translate-y-0.5 shadow-blue-900/20 shadow-lg" onclick="forceOpenChat()">
<span className="mr-2">Hablar con Zeta</span>
<span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="18"></span>
</button>
<div className="flex items-center gap-2 text-base text-slate-500 px-2">
<span className="iconify text-emerald-500" data-icon="lucide:shield-check" data-strokeWidth="1.5" data-width="16"></span>
<span>Datos seguros (Ley 81)</span>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 mb-24 sm:mb-32" id="como-funciona">
<h2 className="text-3xl sm:text-4xl font-medium text-slate-900 tracking-tight mb-12">
                Tu crédito en 3 pasos
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="group relative">
<div className="absolute -inset-2 rounded-xl bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative p-2">
<div className="w-12 h-12 rounded-lg bg-orange-50 border border-orange-100 text-[#FF5500] flex items-center justify-center mb-4">
<span className="iconify" data-icon="lucide:message-square" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2">1. Chatea</h3>
<p className="text-slate-500 text-base leading-relaxed">Responde unas preguntas simples a Zeta. Ella estructurará tu perfil financiero ideal.</p>
</div>
</div>

<div className="group relative">
<div className="absolute -inset-2 rounded-xl bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative p-2">
<div className="w-12 h-12 rounded-lg bg-blue-50 border border-blue-100 text-[#000080] flex items-center justify-center mb-4">
<span className="iconify" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2">2. Compara</h3>
<p className="text-slate-500 text-base leading-relaxed">Zeta busca ofertas reales de múltiples bancos. Visualiza claramente la tasa, el plazo y tu letra.</p>
</div>
</div>

<div className="group relative">
<div className="absolute -inset-2 rounded-xl bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative p-2">
<div className="w-12 h-12 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
<span className="iconify" data-icon="lucide:check-circle" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2">3. Recibe</h3>
<p className="text-slate-500 text-base leading-relaxed">Elige la mejor opción y recibe los fondos directamente en tu cuenta bancaria.</p>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 pb-24 border-t border-slate-100 pt-16">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight">
                    ¿Por qué Preztamos?
                </h2>
<div className="flex gap-2">
<span className="px-3 py-1 rounded-full bg-slate-100 text-sm font-normal text-slate-600">Sin filas</span>
<span className="px-3 py-1 rounded-full bg-slate-100 text-sm font-normal text-slate-600">100% Digital</span>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="p-5 rounded-xl border border-slate-200 bg-white hover:border-[#000080]/30 transition-colors group">
<div className="flex items-center justify-between mb-3">
<span className="text-lg font-medium text-slate-900">Privacidad total</span>
<span className="iconify text-slate-300 group-hover:text-[#000080] transition-colors" data-icon="lucide:lock" data-strokeWidth="1.5" data-width="20"></span>
</div>
<p className="text-base text-slate-500">Tus datos solo se comparten con la entidad que tú elijas, bajo estrictos protocolos de seguridad.</p>
</div>
<div className="p-5 rounded-xl border border-slate-200 bg-white hover:border-[#FF5500]/30 transition-colors group">
<div className="flex items-center justify-between mb-3">
<span className="text-lg font-medium text-slate-900">Poder de negociación</span>
<span className="iconify text-slate-300 group-hover:text-[#FF5500] transition-colors" data-icon="lucide:trending-up" data-strokeWidth="1.5" data-width="20"></span>
</div>
<p className="text-base text-slate-500">Al competir por tu perfil, las entidades financieras te ofrecen mejores tasas que yendo a la sucursal.</p>
</div>
</div>
</section>

<footer className="max-w-7xl mx-auto px-6 py-12 border-t border-slate-200 text-center sm:text-left">
<div className="flex flex-col sm:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 Preztamos.ai. Todos los derechos reservados.</p>
<div className="flex gap-4">
<a className="text-xs text-slate-400 hover:text-slate-600" href="#">Términos</a>
<a className="text-xs text-slate-400 hover:text-slate-600" href="#">Privacidad</a>
</div>
</div>
</footer>
</main>

<div className="fixed z-50 bg-white shadow-2xl overflow-hidden chat-transition flex flex-col border border-slate-200/80 bottom-4 right-4 left-4 rounded-2xl h-16 sm:w-[400px] sm:left-auto sm:right-6" id="chat-container">

<div className="flex items-center justify-between px-4 py-3 bg-white border-b border-slate-50 cursor-pointer select-none" id="chat-header" onclick="toggleChatExpand()">
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center overflow-hidden text-[#000080]">

<span className="iconify" data-icon="lucide:sparkles" data-strokeWidth="1.5" data-width="20"></span>
</div>
<span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></span>
</div>
<div className="flex flex-col">
<span className="text-base font-medium text-slate-900 leading-tight">Zeta</span>
<span className="text-xs text-slate-500 font-normal">IA Financiera • En línea</span>
</div>
</div>

<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-slate-600 p-1">
<span className="iconify" data-icon="lucide:chevron-up" data-strokeWidth="1.5" data-width="20" id="header-chevron"></span>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto bg-slate-50/50 p-4 space-y-4 scrollbar-hide opacity-0 pointer-events-none transition-opacity duration-300" id="chat-messages">
<div className="text-center py-2">
<span className="text-xs text-slate-400 font-normal bg-slate-100 px-2 py-1 rounded-full">Hoy</span>
</div>

<div className="flex gap-3 max-w-[90%]">
<div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex-shrink-0 flex items-center justify-center mt-1 text-[#000080]">
<span className="iconify" data-icon="lucide:sparkles" data-strokeWidth="1.5" data-width="16"></span>
</div>
<div className="flex flex-col gap-1">
<div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none shadow-sm text-base text-slate-700 leading-relaxed">
                        Hola, soy Zeta. ¿Buscas un préstamo personal con aprobación rápida?
                    </div>
</div>
</div>
</div>

<div className="hidden px-4 pb-2 text-xs text-slate-400 flex items-center gap-1" id="typing-indicator">
<span>Zeta escribiendo</span>
<div className="flex gap-0.5 ml-1">
<div className="w-1 h-1 bg-slate-400 rounded-full typing-dot"></div>
<div className="w-1 h-1 bg-slate-400 rounded-full typing-dot"></div>
<div className="w-1 h-1 bg-slate-400 rounded-full typing-dot"></div>
</div>
</div>

<div className="p-3 bg-white border-t border-slate-100 hidden" id="chat-input-area">

<div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide" id="quick-replies">
<button className="whitespace-nowrap px-4 py-2 bg-[#000080] text-white text-sm font-normal rounded-full shadow-sm hover:shadow-md active:scale-95 transition-all" onclick="handleReply('start')">
                    Sí, quiero empezar
                </button>
<button className="whitespace-nowrap px-4 py-2 bg-white border border-slate-200 text-slate-700 text-sm font-normal rounded-full hover:bg-slate-50 transition-colors" onclick="handleReply('info')">
                    Tengo dudas
                </button>
</div>

<div className="relative flex items-center gap-2">
<input className="w-full bg-slate-50 border border-transparent rounded-full py-2.5 pl-4 pr-10 text-base text-slate-900 focus:bg-white focus:border-slate-300 focus:ring-0 outline-none placeholder:text-slate-400 transition-all" id="user-input" onkeypress="handleEnter(event)" placeholder="Escribe a Zeta..." type="text"/>
<button className="absolute right-1.5 p-1.5 bg-slate-200 text-slate-600 rounded-full hover:bg-[#000080] hover:text-white transition-colors" onclick="sendMessage()">
<span className="iconify" data-icon="lucide:arrow-up" data-strokeWidth="1.5" data-width="18"></span>
</button>
</div>
</div>

<div className="absolute inset-0 top-0 left-0 flex items-center justify-between px-4 pl-16 pointer-events-none opacity-100 transition-opacity duration-300" id="chat-preview">
<span className="text-base font-normal text-slate-600 truncate">Hablemos sobre tu préstamo...</span>
<span className="w-2 h-2 rounded-full bg-[#FF5500] animate-pulse"></span>
</div>
</div>

<button className="fixed top-4 right-4 z-[60] p-2 bg-slate-100 text-slate-900 rounded-full hidden hover:bg-slate-200 transition-all shadow-md" id="exit-chat-btn" onclick="exitFullChat()">
<span className="iconify" data-icon="lucide:x" data-strokeWidth="1.5" data-width="20"></span>
</button>


    </>
  );
}
