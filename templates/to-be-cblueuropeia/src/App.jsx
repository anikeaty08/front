import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons();

        // Tab Navigation
        function switchTab(tabId) {
            ['home', 'diary', 'chat', 'profile'].forEach(id => {
                document.getElementById(`view-${id}`).classList.add('hidden');
                document.getElementById(`tab-${id}`).classList.remove('text-black');
                document.getElementById(`tab-${id}`).classList.add('text-zinc-400');
            });
            document.getElementById(`view-${tabId}`).classList.remove('hidden');
            document.getElementById(`tab-${tabId}`).classList.add('text-black');
            document.getElementById(`tab-${tabId}`).classList.remove('text-zinc-400');

            // Toggle floating bubble visibility
            const floatingChat = document.getElementById('floating-chat');
            if (tabId === 'chat' || tabId === 'diary') {
                floatingChat.classList.add('hidden');
            } else {
                floatingChat.classList.remove('hidden');
            }
        }

        // Home: Physio Play Mock
        function playPhysio() {
            const btn = document.getElementById('physio-play');
            btn.classList.toggle('scale-110');
            setTimeout(() => { btn.classList.toggle('scale-110'); }, 200);
        }

        // ====== INTELLIGENT AI DIARY FLOW ======
        let diaryState = 0;
        const chatContainer = document.getElementById('diary-chat');
        const statusText = document.getElementById('diary-status');
        const micBtn = document.getElementById('btn-mic');
        const actionsContainer = document.getElementById('diary-actions');

        function appendChat(role, htmlContent) {
            const div = document.createElement('div');
            div.className = `flex gap-3 max-w-[90%] chat-bubble-enter ${role === 'user' ? 'self-end flex-row-reverse w-[85%]' : ''}`;
            
            let avatar = role === 'ai' 
                ? `<div class="w-8 h-8 rounded-full bg-zinc-100 border border-zinc-200 flex-shrink-0 flex items-center justify-center mt-1"><i data-lucide="sparkles" class="text-black w-4 h-4"></i></div>`
                : '';
            
            let bubbleClass = role === 'ai'
                ? `bg-white border border-zinc-200 rounded-2xl rounded-tl-sm p-4 shadow-sm w-full`
                : `bg-black text-white rounded-2xl rounded-tr-sm p-4 shadow-sm w-full`;

            let textClass = role === 'ai' ? 'text-zinc-700' : 'text-zinc-100';

            div.innerHTML = `
                ${avatar}
                <div class="${bubbleClass}">
                    ${htmlContent}
                </div>
            `;
            chatContainer.appendChild(div);
            chatContainer.scrollTop = chatContainer.scrollHeight;
            lucide.createIcons();
        }

        function handleDiaryFlow() {
            if (diaryState === 0) {
                // State 1: Start Initial Recording
                micBtn.classList.remove('bg-black');
                micBtn.classList.add('bg-red-600', 'animate-pulse');
                micBtn.innerHTML = `<i data-lucide="square" class="w-6 h-6 text-white fill-white"></i>`;
                statusText.innerText = "A escutar (Toque para parar)...";
                lucide.createIcons();
                diaryState = 1;
            } 
            else if (diaryState === 1) {
                // State 2: Process Initial Audio
                micBtn.classList.remove('bg-red-600', 'animate-pulse');
                micBtn.classList.add('bg-zinc-100', 'cursor-not-allowed');
                micBtn.innerHTML = `<i data-lucide="loader" class="w-6 h-6 text-zinc-500 animate-spin"></i>`;
                statusText.innerText = "A processar áudio...";
                lucide.createIcons();
                diaryState = 2;

                setTimeout(() => {
                    appendChat('user', `<p class="text-sm font-light leading-relaxed">"Ao almoço comi um bife de frango grelhado com arroz."</p>`);
                    statusText.innerText = "A analisar contexto clínico...";
                    
                    setTimeout(() => {
                        // AI asks non-judgmental follow-up for missing data (liquids, emotion, context)
                        appendChat('ai', `
                            <p class="text-sm font-light leading-relaxed">Registo transcrito perfeitamente. Deseja acrescentar se acompanhou com alguma bebida ou como se sentiu durante este momento?</p>
                        `);
                        
                        micBtn.classList.remove('bg-zinc-100', 'cursor-not-allowed');
                        micBtn.classList.add('bg-black');
                        micBtn.innerHTML = `<i data-lucide="mic" class="w-6 h-6"></i>`;
                        statusText.innerText = "Toque para responder";
                        lucide.createIcons();
                        diaryState = 3;
                    }, 1200);
                }, 1500);
            }
            else if (diaryState === 3) {
                // State 4: Start Follow-up Recording
                micBtn.classList.remove('bg-black');
                micBtn.classList.add('bg-red-600', 'animate-pulse');
                micBtn.innerHTML = `<i data-lucide="square" class="w-6 h-6 text-white fill-white"></i>`;
                statusText.innerText = "A escutar...";
                lucide.createIcons();
                diaryState = 4;
            }
            else if (diaryState === 4) {
                // State 5: Process Follow-up and Structure Data
                micBtn.classList.remove('bg-red-600', 'animate-pulse');
                micBtn.classList.add('bg-zinc-100', 'cursor-not-allowed');
                micBtn.innerHTML = `<i data-lucide="loader" class="w-6 h-6 text-zinc-500 animate-spin"></i>`;
                statusText.innerText = "A estruturar dados de forma invisível...";
                lucide.createIcons();
                
                setTimeout(() => {
                    appendChat('user', `<p class="text-sm font-light leading-relaxed">"Sim, bebi apenas um copo de água. Sinto-me bem, estava a almoçar com colegas."</p>`);
                    
                    setTimeout(() => {
                        // AI generates the invisible structured summary for the user to confirm
                        appendChat('ai', `
                            <p class="text-sm font-light mb-3">Obrigado. Resumo estruturado para a sua equipa clínica:</p>
                            <div class="bg-zinc-50 border border-zinc-100 rounded-xl p-4 space-y-2.5">
                                <div class="flex items-start justify-between gap-4"><span class="text-xs text-zinc-400 font-light w-16 shrink-0 uppercase tracking-wide mt-0.5">Alimentos</span> <span class="text-sm font-medium text-black text-right">Frango grelhado, arroz</span></div>
                                <div class="flex items-start justify-between gap-4"><span class="text-xs text-zinc-400 font-light w-16 shrink-0 uppercase tracking-wide mt-0.5">Líquidos</span> <span class="text-sm font-medium text-black text-right">Água (1 copo)</span></div>
                                <div class="flex items-start justify-between gap-4"><span class="text-xs text-zinc-400 font-light w-16 shrink-0 uppercase tracking-wide mt-0.5">Local</span> <span class="text-sm font-medium text-black text-right">—</span></div>
                                <div class="flex items-start justify-between gap-4"><span class="text-xs text-zinc-400 font-light w-16 shrink-0 uppercase tracking-wide mt-0.5">Companhia</span> <span class="text-sm font-medium text-black text-right">Colegas</span></div>
                                <div class="flex items-start justify-between gap-4"><span class="text-xs text-zinc-400 font-light w-16 shrink-0 uppercase tracking-wide mt-0.5">Estado</span> <span class="text-sm font-medium text-black text-right">Bem</span></div>
                            </div>
                        `);

                        micBtn.style.display = 'none';
                        actionsContainer.innerHTML = `
                            <div class="flex gap-3 w-full max-w-[300px]">
                                <button onclick="resetDiaryFlow()" class="flex-1 py-3.5 bg-white border border-zinc-200 text-black text-xs font-medium tracking-widest uppercase rounded-full hover:bg-zinc-50 transition-all">
                                    Editar
                                </button>
                                <button onclick="confirmDiary()" class="flex-[2] py-3.5 bg-black text-white text-xs font-medium tracking-widest uppercase rounded-full shadow-lg hover:bg-zinc-800 transition-all flex items-center justify-center gap-2">
                                    <i data-lucide="check-circle-2" class="w-4 h-4"></i> Confirmar
                                </button>
                            </div>
                        `;
                        statusText.innerText = "Por favor, valide o registo";
                        lucide.createIcons();
                        diaryState = 5;
                    }, 1800);
                }, 1000);
            }
        }

        function confirmDiary() {
            actionsContainer.innerHTML = '';
            statusText.innerText = "Registo finalizado com sucesso.";
            appendChat('ai', `
                <div class="flex items-center gap-3">
                    <div class="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center shrink-0">
                        <i data-lucide="check" class="w-3.5 h-3.5"></i>
                    </div>
                    <p class="text-sm font-medium text-black">Registo guardado e partilhado de forma segura com a equipa.</p>
                </div>
            `);
        }

        function resetDiaryFlow() {
            // Implementation for edit flow (resets state for demo purposes)
            location.reload(); 
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
<img alt="Clinic Architecture" className="w-full h-full object-cover grayscale brightness-50 contrast-125 object-center" src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20"></div>

<div className="absolute -top-[50vh] -left-[20vw] w-[150vh] h-[150vh] animate-spin-slow opacity-15 pointer-events-none mix-blend-screen flex items-center justify-center">
<svg className="w-[80%] h-[80%]" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<path d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="none" id="circlePath"></path>
<text className="text-[5px] tracking-[0.4em] uppercase font-light fill-white">
<textpath href="#circlePath" startoffset="0%">
                        TO BE • YOURSELF • TO BE • YOURSELF • TO BE • YOURSELF • TO BE • YOURSELF •
                    </textpath>
</text>
</svg>
</div>
</div>

<div className="flex flex-col md:p-12 z-10 w-full h-full max-w-[1600px] mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 relative justify-between">

<header className="flex w-full items-start justify-between">
<div className="flex flex-col">
<span className="text-4xl tracking-tight font-extralight text-white uppercase">To Be.</span>
<span className="text-sm font-serif italic font-light text-white/80 mt-1">Clínica by Teresa Branco</span>
</div>
<div className="flex items-center gap-4">
<button className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-md">
<i className="w-4 h-4" data-lucide="info"></i>
<span className="text-xs font-light tracking-widest uppercase">Informações</span>
</button>
<button className="w-12 h-12 rounded-full bg-black/40 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-md">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</header>

<div className="flex-1 flex flex-col lg:flex-row gap-12 lg:mt-0 h-full mt-8 gap-x-12 gap-y-12 items-center justify-between">

<div className="flex flex-col z-20 lg:w-auto lg:mt-0 w-full max-w-xl mt-10 items-start">
<h1 className="md:text-7xl leading-tight text-5xl font-light italic text-white tracking-tight font-serif drop-shadow-lg">Saúde, equilíbrio e bem-estar</h1>
<p className="leading-relaxed text-base font-light text-white/70 max-w-md mt-6">
                    Um sistema inteligente que acompanha os seus passos em segurança. A complexidade invisível por trás da sua simplicidade diária.
                </p>
<button className="md:mt-16 md:w-20 md:h-20 flex hover:bg-white hover:text-black transition-all duration-500 group text-white w-16 h-16 border-white/30 border rounded-full mt-10 backdrop-blur-sm items-center justify-center">
<i className="w-6 h-6 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</button>
</div>

<div className="relative w-[340px] h-[720px] sm:w-[375px] sm:h-[812px] bg-white rounded-[3rem] border-[14px] border-zinc-900 shadow-2xl overflow-hidden shrink-0 flex flex-col transform scale-90 sm:scale-100 origin-center lg:origin-right ring-1 ring-white/10 z-30">


<div className="-translate-x-1/2 bg-zinc-900 w-32 h-6 z-50 rounded-b-2xl absolute top-0 left-1/2"></div><header className="flex shrink-0 z-40 bg-white/90 h-16 border-zinc-100 border-b pt-3 pr-6 pl-6 relative backdrop-blur-md items-center justify-between">
<span className="text-2xl tracking-tight font-extralight text-black uppercase">To Be.</span>
<button className="text-black hover:text-zinc-500 transition-colors">
<i className="w-5 h-5" data-lucide="bell"></i>
</button>
</header>

<div className="flex-1 relative w-full h-full bg-white text-black overflow-hidden" id="app-views">

<main className="absolute inset-0 overflow-y-auto no-scrollbar pb-32 z-10 w-full transition-opacity duration-300" id="view-home">

<div className="px-5 pt-6 pb-2">
<div className="bg-zinc-50 border border-zinc-100 rounded-2xl p-4 flex flex-col gap-1.5 shadow-sm">
<span className="text-xs uppercase tracking-widest text-zinc-400 font-medium">Hoje para si</span>
<div className="flex items-start gap-2">
<i className="w-4 h-4 text-black mt-0.5" data-lucide="zap"></i>
<p className="text-sm font-light text-black">Foco na energia e hidratação regular. Último registo foi efetuado ontem.</p>
</div>
</div>
</div>

<div className="px-5 py-4">
<h1 className="text-4xl tracking-tight font-serif italic font-light text-black mb-5">
<span className="text-zinc-400 mr-2">Olá,</span>Ana.
                            </h1>
<button className="w-full bg-black text-white rounded-full py-4 text-sm font-medium tracking-wide hover:bg-zinc-800 transition-colors shadow-md flex items-center justify-center gap-2">
<i className="w-5 h-5 text-white/70" data-lucide="clipboard-list"></i>
                                Ver Plano Alimentar
                            </button>
</div>

<div className="px-5 py-2">
<div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
<div className="shrink-0 bg-white border border-zinc-200 rounded-2xl p-3.5 w-[140px] shadow-sm">
<span className="block text-3xl tracking-tight font-serif italic text-black font-light">7</span>
<span className="text-xs text-zinc-500 font-light leading-snug mt-1 block">Dias de registo<br/>consecutivo</span>
</div>
<div className="shrink-0 bg-white border border-zinc-200 rounded-2xl p-3.5 w-[140px] shadow-sm">
<span className="block text-3xl tracking-tight font-serif italic text-black font-light">3.8</span>
<span className="text-xs text-zinc-500 font-light leading-snug mt-1 block">Nível médio<br/>de energia</span>
</div>
</div>
</div>

<div className="px-5 py-4">
<div className="bg-white border border-zinc-200 rounded-3xl p-6 shadow-sm flex flex-col items-center text-center gap-4 relative overflow-hidden group hover:border-zinc-300 transition-colors">
<div className="absolute top-0 right-0 w-24 h-24 bg-zinc-50 rounded-bl-[4rem] -z-10 transition-transform group-hover:scale-110"></div>
<div className="flex flex-col items-center gap-1">
<span className="text-lg font-serif italic font-light text-black tracking-tight">Registo Rápido</span>
<p className="text-xs text-zinc-500 font-light">Assistente clínico de voz.</p>
</div>
<button className="w-20 h-20 bg-black rounded-full flex items-center justify-center text-white hover:scale-105 transition-all shadow-lg ring-4 ring-zinc-50" onclick="switchTab('diary'); setTimeout(handleDiaryFlow, 300);">
<i className="w-7 h-7" data-lucide="mic"></i>
</button>
<p className="text-sm text-zinc-600 font-light px-4">"O que consumiu recentemente?"</p>
<button className="mt-1 text-xs font-medium text-black hover:text-zinc-500 transition-colors flex items-center gap-1" onclick="switchTab('diary')">
                                    Abrir Diário Completo <i className="w-3 h-3" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="px-5 py-4">
<div className="flex items-center justify-between mb-4 px-1">
<h2 className="text-xl tracking-tight font-serif italic font-light text-black">Fisioterapia</h2>
<span className="text-[10px] font-medium px-2 py-1 bg-zinc-100 text-black rounded-md tracking-widest uppercase">Hoje</span>
</div>
<div className="bg-white rounded-3xl border border-zinc-200 p-2 shadow-sm">
<div className="relative rounded-2xl overflow-hidden aspect-video bg-zinc-900 group cursor-pointer mb-3" onclick="playPhysio()">
<img alt="Fisioterapia" className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-60 transition-opacity duration-500" src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-14 h-14 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white transition-transform duration-300" id="physio-play">
<i className="w-6 h-6 ml-1 fill-white" data-lucide="play"></i>
</div>
</div>
<div className="absolute bottom-3 left-3 flex items-center gap-2">
<span className="text-xs font-light text-white bg-black/50 px-3 py-1.5 rounded-lg backdrop-blur-md tracking-wide">8 Minutos</span>
</div>
</div>
<div className="px-3 pb-2">
<p className="text-sm font-medium text-black tracking-tight">Mobilidade Articular Matinal</p>
<p className="text-xs text-zinc-500 mt-1 font-light">Prescrito para melhoria postural (Dra. Joana).</p>
</div>
</div>
</div>
</main>

<main className="absolute inset-0 flex flex-col hidden z-10 w-full bg-zinc-50 transition-opacity duration-300" id="view-diary">
<div className="p-6 pt-6 pb-3 border-b border-zinc-200 bg-white z-20 shadow-sm">
<h1 className="text-3xl tracking-tight font-serif italic font-light text-black">Diário Clínico</h1>
<p className="text-sm text-zinc-500 mt-1 font-light">Estruturação invisível de dados.</p>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar p-5 space-y-5 pb-40 flex flex-col" id="diary-chat">

<div className="flex gap-3 max-w-[90%] chat-bubble-enter">
<div className="w-8 h-8 rounded-full bg-zinc-100 border border-zinc-200 flex-shrink-0 flex items-center justify-center mt-1">
<i className="text-black w-4 h-4" data-lucide="sparkles"></i>
</div>
<div className="bg-white border border-zinc-200 rounded-2xl rounded-tl-sm p-4 shadow-sm w-full">
<p className="text-sm text-zinc-700 leading-relaxed font-light">
                                        Olá Ana. Pressione o microfone e descreva o seu momento alimentar mais recente.
                                    </p>
</div>
</div>
</div>

<div className="absolute bottom-20 left-0 right-0 p-5 bg-gradient-to-t from-zinc-50 via-zinc-50/90 to-transparent flex flex-col items-center justify-end z-20">
<span className="text-xs text-zinc-400 mb-4 font-light tracking-wide h-4 transition-opacity" id="diary-status">Toque para falar</span>
<div className="w-full flex justify-center" id="diary-actions">
<button className="relative w-16 h-16 rounded-full bg-black text-white flex items-center justify-center shadow-xl hover:scale-105 transition-all duration-300" id="btn-mic" onclick="handleDiaryFlow()">
<i className="w-6 h-6" data-lucide="mic"></i>
</button>
</div>
</div>
</main>

<main className="absolute inset-0 flex flex-col hidden z-10 w-full transition-opacity duration-300 bg-white" id="view-chat">
<div className="p-6 pt-8 pb-4 border-b border-zinc-100">
<h1 className="text-3xl tracking-tight font-serif italic font-light text-black">Chat Clínico</h1>
<p className="text-sm text-zinc-500 mt-2 tracking-wide font-light">
                                Comunicação direta com a equipa.
                            </p>
</div>
<div className="flex-1 overflow-y-auto no-scrollbar">
<div className="px-5 py-4 space-y-3">

<div className="p-4 rounded-2xl border border-zinc-200 bg-zinc-50 flex items-start gap-4 cursor-pointer hover:border-black transition-colors">
<div className="relative shrink-0">
<div className="w-12 h-12 rounded-full bg-zinc-200 overflow-hidden">
<img className="w-full h-full object-cover grayscale opacity-90" src="https://images.unsplash.com/photo-1594824436951-7f1262dce8a4?w=200&amp;h=200&amp;fit=crop"/>
</div>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-black rounded-full border-2 border-zinc-50"></div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-0.5">
<h3 className="text-sm font-medium text-black tracking-tight truncate">Dra. Teresa Branco</h3>
<span className="text-[10px] text-zinc-400 font-light shrink-0">Agora</span>
</div>
<p className="text-sm text-zinc-800 font-light line-clamp-2">Os resultados mostram uma excelente evolução estrutural.</p>
</div>
</div>

<div className="p-4 rounded-2xl border border-zinc-100 bg-white flex items-start gap-4 cursor-pointer hover:border-zinc-300 transition-colors">
<div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center bg-zinc-50 text-zinc-400 shrink-0">
<i className="w-5 h-5" data-lucide="users"></i>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-0.5">
<h3 className="text-sm font-medium text-black tracking-tight truncate">Equipa Multidisciplinar</h3>
<span className="text-[10px] text-zinc-400 font-light shrink-0">Ontem</span>
</div>
<p className="text-sm text-zinc-500 font-light line-clamp-1">Nutrição: Plano atualizado no sistema.</p>
</div>
</div>
</div>

<div className="p-5 mt-4 border-t border-zinc-100 bg-zinc-50/50">
<p className="text-xs text-zinc-500 font-light mb-3">Iniciar novo assunto:</p>
<div className="flex flex-col gap-2.5">
<button className="bg-white border border-zinc-200 rounded-xl p-3.5 text-sm text-left font-light text-black hover:border-black transition-colors flex items-center justify-between group">
                                        Dúvida sobre alimentação <i className="w-4 h-4 text-zinc-300 group-hover:text-black" data-lucide="arrow-right"></i>
</button>
<button className="bg-white border border-zinc-200 rounded-xl p-3.5 text-sm text-left font-light text-black hover:border-black transition-colors flex items-center justify-between group">
                                        Partilhar sintomas de hoje <i className="w-4 h-4 text-zinc-300 group-hover:text-black" data-lucide="arrow-right"></i>
</button>
<button className="bg-white border border-zinc-200 rounded-xl p-3.5 text-sm text-left font-light text-black hover:border-black transition-colors flex items-center justify-between group">
                                        Dificuldade em seguir o plano <i className="w-4 h-4 text-zinc-300 group-hover:text-black" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</main>

<main className="absolute inset-0 overflow-y-auto no-scrollbar hidden z-10 w-full transition-opacity duration-300 bg-white" id="view-profile">
<div className="p-6 pt-10 flex flex-col items-center border-b border-zinc-100">
<div className="w-24 h-24 rounded-full bg-zinc-50 border border-zinc-200 mb-5 flex items-center justify-center text-zinc-400 shadow-sm relative">
<i className="w-10 h-10" data-lucide="user"></i>
<div className="absolute bottom-0 right-0 w-6 h-6 bg-black rounded-full border-2 border-white flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
<i className="w-3 h-3" data-lucide="cog"></i>
</div>
</div>
<h2 className="text-3xl font-serif italic font-light text-black tracking-tight">Ana Silva</h2>
<p className="text-xs tracking-widest uppercase text-zinc-400 mt-2 font-medium">ID: TB-8492</p>
</div>
<div className="p-5 space-y-3 pb-24">
<button className="w-full p-4 rounded-2xl border border-zinc-200 bg-white flex items-center justify-between hover:bg-zinc-50 transition-colors shadow-sm">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-black">
<i className="w-5 h-5" data-lucide="clipboard-list"></i>
</div>
<span className="text-sm font-medium text-black tracking-tight">Plano Alimentar Ativo</span>
</div>
<i className="w-4 h-4 text-zinc-300" data-lucide="arrow-right"></i>
</button>
<button className="w-full p-4 rounded-2xl border border-zinc-200 bg-white flex items-center justify-between hover:bg-zinc-50 transition-colors shadow-sm">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-black">
<i className="w-5 h-5" data-lucide="dumbbell"></i>
</div>
<span className="text-sm font-medium text-black tracking-tight">Plano de Treino Físico</span>
</div>
<i className="w-4 h-4 text-zinc-300" data-lucide="arrow-right"></i>
</button>
<button className="w-full p-4 rounded-2xl border border-zinc-200 bg-white flex items-center justify-between hover:bg-zinc-50 transition-colors shadow-sm">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-black">
<i className="w-5 h-5" data-lucide="line-chart"></i>
</div>
<span className="text-sm font-medium text-black tracking-tight">Métricas e Evolução</span>
</div>
<i className="w-4 h-4 text-zinc-300" data-lucide="arrow-right"></i>
</button>
</div>
</main>

<button className="absolute bottom-24 right-5 w-14 h-14 bg-black text-white rounded-full shadow-2xl flex items-center justify-center z-30 hover:scale-105 transition-transform" id="floating-chat" onclick="switchTab('chat')">
<i className="w-6 h-6" data-lucide="message-circle"></i>
</button>
</div>

<nav className="absolute bottom-0 left-0 right-0 h-20 bg-white/95 backdrop-blur-md border-t border-zinc-200 flex justify-around items-center px-2 pb-4 z-40">
<button className="nav-btn flex flex-col items-center gap-1.5 w-16 text-black transition-colors" id="tab-home" onclick="switchTab('home')">
<i className="w-6 h-6" data-lucide="home"></i>
<span className="text-[10px] uppercase tracking-widest font-medium">Início</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1.5 w-16 text-zinc-400 hover:text-black transition-colors" id="tab-diary" onclick="switchTab('diary')">
<i className="w-6 h-6" data-lucide="book"></i>
<span className="text-[10px] uppercase tracking-widest font-medium">Diário</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1.5 w-16 text-zinc-400 hover:text-black transition-colors" id="tab-chat" onclick="switchTab('chat')">
<i className="w-6 h-6" data-lucide="message-circle"></i>
<span className="text-[10px] uppercase tracking-widest font-medium">Chat</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1.5 w-16 text-zinc-400 hover:text-black transition-colors" id="tab-profile" onclick="switchTab('profile')">
<i className="w-6 h-6" data-lucide="user"></i>
<span className="text-[10px] uppercase tracking-widest font-medium">Perfil</span>
</button>
</nav>
</div>
</div>
</div>



    </>
  );
}
