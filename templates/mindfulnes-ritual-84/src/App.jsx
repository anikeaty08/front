import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
light: '#A8D5BA',
DEFAULT: '#5FA883',
dark: '#2C2C2C',
bg: '#F5F2ED',
soft: '#E8F5ED',
accent: '#E7FFDB'
}
},
boxShadow: {
'soft': '0 4px 20px rgba(95, 168, 131, 0.08)',
'card': '0 2px 8px rgba(0, 0, 0, 0.04)',
}
}
}
}



        // 1. ICONOS
        lucide.createIcons();

        // 2. RELOJ EN TIEMPO REAL
        function updateTime() {
            const now = new Date();
            const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            document.getElementById('real-time-clock').textContent = `SON LAS ${timeString}`;
        }
        setInterval(updateTime, 1000);
        updateTime();

        // 3. CHAT INTERACTIVO
        const chatMessages = document.getElementById('chat-messages');
        const inputArea = document.getElementById('chat-input-area');
        const userInput = document.getElementById('user-input');
        const sendBtn = document.getElementById('send-btn');
        let chatState = 0;
        let userData = {};

        // Función auxiliar para delay
        const delay = ms => new Promise(res => setTimeout(res, ms));

        // Función para crear burbuja de mensaje
        function createBubble(text, isUser = false) {
            const div = document.createElement('div');
            div.className = `flex w-full ${isUser ? 'justify-end' : 'justify-start'} animate-message mb-3`;
            
            const bubble = document.createElement('div');
            bubble.className = `max-w-[85%] p-3 text-sm rounded-lg shadow-sm leading-relaxed ${
                isUser 
                ? 'bg-[#E7FFDB] text-gray-800 rounded-tr-none' 
                : 'bg-white text-gray-800 rounded-tl-none'
            }`;
            bubble.innerHTML = text; // Permite HTML dentro
            
            const meta = document.createElement('div');
            meta.className = `text-[9px] mt-1 text-gray-400 ${isUser ? 'text-right' : 'text-left'} opacity-70`;
            const now = new Date();
            meta.innerText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            
            // Añadir check si es usuario
            if(isUser) meta.innerHTML += ' <i data-lucide="check-check" class="w-3 h-3 inline ml-0.5 text-blue-400"></i>';

            div.appendChild(bubble);
            bubble.appendChild(meta);
            chatMessages.appendChild(div);
            chatMessages.scrollTop = chatMessages.scrollHeight;
            lucide.createIcons();
        }

        // Indicador de escribiendo
        function showTyping() {
            const div = document.createElement('div');
            div.id = 'typing-indicator';
            div.className = 'flex w-full justify-start mb-3 animate-message';
            div.innerHTML = `
                <div class="bg-white p-3 rounded-lg rounded-tl-none shadow-sm flex gap-1 items-center h-9">
                    <div class="w-1.5 h-1.5 bg-gray-400 rounded-full typing-dot"></div>
                    <div class="w-1.5 h-1.5 bg-gray-400 rounded-full typing-dot"></div>
                    <div class="w-1.5 h-1.5 bg-gray-400 rounded-full typing-dot"></div>
                </div>
            `;
            chatMessages.appendChild(div);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function removeTyping() {
            const el = document.getElementById('typing-indicator');
            if (el) el.remove();
        }

        async function botReply(text) {
            showTyping();
            await delay(1200); // Simula tiempo de pensamiento
            removeTyping();
            createBubble(text);
        }

        // Flujo del chat
        async function startChat() {
            await delay(800);
            await botReply("Hola. Tu cerebro borra los momentos bonitos. 🧠");
            await delay(1000);
            await botReply("Vamos a rescatar algo de hoy antes de que se pierda. ¿Dónde ocurrió tu momento?");
            
            // Mostrar opciones
            showOptions([
                { text: "🏠 En casa / Familia", val: "familia" },
                { text: "💼 Trabajo / Proyectos", val: "trabajo" },
                { text: "🌱 Un momento para mí", val: "personal" },
                { text: "👥 Con alguien especial", val: "pareja" }
            ]);
        }

        function showOptions(options) {
            const div = document.createElement('div');
            div.className = 'flex flex-wrap gap-2 justify-center mt-2 animate-message';
            div.id = 'chat-options';
            
            options.forEach(opt => {
                const btn = document.createElement('button');
                btn.className = 'bg-white border border-brand-DEFAULT/30 text-brand-dark px-4 py-2 rounded-full text-xs font-medium hover:bg-brand-DEFAULT hover:text-white transition-colors shadow-sm';
                btn.innerText = opt.text;
                btn.onclick = () => handleOptionClick(opt);
                div.appendChild(btn);
            });
            chatMessages.appendChild(div);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        async function handleOptionClick(option) {
            document.getElementById('chat-options').remove();
            createBubble(option.text, true);
            userData.category = option.val;
            
            await botReply("Excelente. Ahora, piensa en esos 5 segundos exactos.");
            await botReply("¿Qué pasó? Cuéntamelo en una frase breve.");
            
            // Habilitar input
            inputArea.classList.remove('opacity-50', 'pointer-events-none');
            userInput.focus();
            chatState = 1;
        }

        async function handleInput() {
            const text = userInput.value.trim();
            if (!text) return;
            
            userInput.value = '';
            createBubble(text, true);
            inputArea.classList.add('opacity-50', 'pointer-events-none');

            if (chatState === 1) {
                userData.moment = text;
                await botReply("Hermoso. ✨");
                await botReply("Estoy creando tu postal...");
                await delay(2000);
                
                // Generar postal visual dentro del chat
                const postalHTML = `
                    <div class="bg-[#F5F2ED] p-4 rounded border border-black/10 mt-2 max-w-[240px]">
                        <div class="border-b border-black/10 pb-2 mb-2">
                            <p class="text-[10px] uppercase text-gray-400 tracking-widest">GUARDADO EL ${new Date().toLocaleDateString()}</p>
                        </div>
                        <p class="font-serif italic text-lg text-brand-dark mb-2">"El momento"</p>
                        <p class="font-serif text-xs text-gray-600 leading-relaxed">${userData.moment}</p>
                        <div class="mt-3 pt-2 border-t border-black/5 flex justify-end">
                            <div class="w-4 h-4 bg-brand-DEFAULT rounded-full flex items-center justify-center text-white text-[8px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                            </div>
                        </div>
                    </div>
                `;
                createBubble(postalHTML);
                await delay(1000);
                await botReply("Así se siente guardar lo bonito. ¿Te gustaría hacerlo un hábito?");
                
                // Botón final
                const btnDiv = document.createElement('div');
                btnDiv.className = 'flex justify-center mt-4 animate-message';
                btnDiv.innerHTML = `<a href="#pricing" class="bg-brand-DEFAULT text-white px-6 py-2 rounded-full text-sm font-medium shadow-md hover:bg-brand-dark transition-colors">Ver planes</a>`;
                chatMessages.appendChild(btnDiv);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }
        }

        sendBtn.onclick = handleInput;
        userInput.onkeypress = (e) => { if(e.key === 'Enter') handleInput(); };

        // Iniciar chat al cargar si es visible, o cuando se haga scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && chatState === 0) {
                    startChat();
                    observer.disconnect();
                }
            });
        }, { threshold: 0.5 });
        observer.observe(document.getElementById('demo-chat'));

        // 4. SELECCIÓN DE PLAN
        function selectPlan(planName) {
            alert(`Has seleccionado el plan ${planName}. En una versión real, esto te llevaría al checkout.`);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-brand-bg/80 backdrop-blur-md border-b border-black/5">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2.5">

<div className="w-8 h-8 text-brand-DEFAULT">
<svg className="w-full h-full" fill="none" viewbox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
<path d="M20 38C20 38 36 30 36 14C36 8 30 2 20 2C10 2 4 8 4 14C4 30 20 38 20 38Z" fill="currentColor" fillOpacity="0.2"></path>
<path d="M20 34C20 34 32 27 32 14C32 9 27 4 20 4C13 4 8 9 8 14C8 27 20 34 20 34Z" fill="currentColor"></path>
<path d="M20 4V34M20 18L28 12M20 24L12 18" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="font-medium tracking-tight text-sm text-gray-800">Guarda lo Bonito</span>
</div>
<a className="text-xs font-medium bg-brand-dark text-white px-5 py-2 rounded-full hover:bg-black transition-colors shadow-sm" href="#pricing">
                Empezar
            </a>
</div>
</nav>

<section className="pt-32 pb-16 px-6 relative overflow-hidden">
<div className="max-w-3xl mx-auto text-center z-10 relative">
<div className="inline-flex items-center gap-2 bg-white border border-black/5 px-3 py-1 rounded-full mb-6 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-DEFAULT opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-DEFAULT"></span>
</span>
<span className="text-xs font-medium text-gray-500 uppercase tracking-wider" id="real-time-clock">CARGANDO HORA...</span>
</div>
<h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] mb-5 text-brand-dark">
                ¿Qué pasó hoy que<br/><span className="text-brand-DEFAULT font-serif italic">valió la pena?</span>
</h1>
<p className="text-base md:text-lg text-gray-600 mb-2 font-normal">Piénsalo 5 segundos.</p>
<div className="h-px w-16 bg-brand-DEFAULT/30 mx-auto my-6"></div>
<div className="space-y-4 max-w-xl mx-auto">
<p className="text-sm md:text-base text-gray-500 leading-relaxed font-light">
                    ¿Se te hizo difícil? ¿Lo primero que vino fue algo negativo?<br/>
<span className="text-brand-dark font-medium">No es tu culpa.</span> Tu cerebro evolucionó para recordar peligros.
                </p>
<button className="group flex flex-col items-center mx-auto mt-8 gap-2 cursor-pointer transition-all hover:translate-y-1" onclick="document.getElementById('demo-chat').scrollIntoView({behavior: 'smooth'})">
<span className="text-sm font-medium text-brand-DEFAULT">Rescata tu momento ahora</span>
<i className="w-5 h-5 text-brand-DEFAULT animate-bounce" data-lucide="arrow-down"></i>
<span className="text-[10px] text-gray-400 uppercase tracking-widest">(Toma 60 segundos)</span>
</button>
</div>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-light/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
</section>

<section className="py-12 md:py-20 px-4 bg-gradient-to-b from-transparent to-white" id="demo-chat">
<div className="max-w-md mx-auto bg-white rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden relative h-[600px] flex flex-col">

<div className="bg-[#F0F2F5] p-4 flex items-center gap-3 border-b border-gray-200 z-10">
<div className="w-10 h-10 text-brand-DEFAULT bg-white rounded-full flex items-center justify-center shadow-sm">
<svg className="w-6 h-6" fill="none" viewbox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
<path d="M20 38C20 38 36 30 36 14C36 8 30 2 20 2C10 2 4 8 4 14C4 30 20 38 20 38Z" fill="currentColor"></path>
<path d="M20 4V34M20 18L28 12M20 24L12 18" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<h3 className="text-sm font-semibold text-gray-800">Guarda lo Bonito</h3>
<p className="text-[10px] text-brand-DEFAULT font-medium">En línea</p>
</div>
</div>

<div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#EFEAE2] relative" id="chat-messages">
<div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{backgroundImage: 'url(\'https://www.transparenttextures.com/patterns/cubes.png\')'}}></div>

</div>

<div className="p-3 bg-[#F0F2F5] border-t border-gray-200">
<div className="flex gap-2 opacity-50 pointer-events-none transition-opacity duration-300" id="chat-input-area">
<input className="flex-1 bg-white rounded-full px-4 py-2 text-sm border-none focus:ring-0 focus:outline-none placeholder-gray-400" id="user-input" placeholder="Escribe aquí..." type="text"/>
<button className="w-9 h-9 bg-brand-DEFAULT rounded-full flex items-center justify-center text-white transition-transform active:scale-95" id="send-btn">
<i className="w-4 h-4 ml-0.5" data-lucide="send"></i>
</button>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-white border-t border-gray-100">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-4">Postales que la gente guarda</h2>
<p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto font-light">
                    Esto es lo puedes hacer en el momento que tú decidas. Un hábito que cambia cómo vives.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-[#F5F2ED] p-6 rounded-xl shadow-card hover:shadow-soft transition-shadow duration-300 flex flex-col h-full border border-black/5">
<div className="mb-4 flex items-center gap-2 border-b border-black/10 pb-2">
<span className="text-xs uppercase tracking-widest text-gray-400">Para:</span>
<span className="text-sm font-medium">Ti</span>
</div>
<h3 className="font-serif italic text-xl mb-4 text-brand-dark">"Cuando importa de verdad"</h3>
<p className="font-serif text-gray-600 leading-relaxed text-sm flex-grow">
                        Hoy entregaste ese proyecto pensando en cada detalle. No porque tenías que hacerlo, sino porque sabías que para tu cliente realmente importaba. Viste su reacción cuando lo recibió. Ese momento donde recordaste por qué haces lo que haces. Crear valor para alguien más te llena. Y hoy lo sentiste.
                    </p>
<div className="mt-6 pt-4 border-t border-black/5 flex justify-between items-center opacity-50">
<span className="text-[10px] uppercase tracking-wider">Hace 2 horas</span>
<i className="w-3 h-3" data-lucide="bookmark"></i>
</div>
</div>

<div className="bg-[#F5F2ED] p-0 rounded-xl shadow-card hover:shadow-soft transition-shadow duration-300 flex flex-col h-full border border-black/5 overflow-hidden">
<div className="h-48 bg-gray-200 w-full overflow-hidden relative">

<div className="absolute inset-0 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&amp'}}></div>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="mb-2 flex items-center gap-2">
<span className="text-xs uppercase tracking-widest text-gray-400">Para:</span>
<span className="text-sm font-medium">Juanga</span>
</div>
<h3 className="font-serif italic text-xl mb-3 text-brand-dark">"Libres y felices"</h3>
<p className="font-serif text-gray-600 leading-relaxed text-sm flex-grow">
                            Fue un atardecer juntos. Amé estar presente mientras Franco decía 'chau sol'. Lo más significativo fue vernos libres, felices y disfrutando plenamente.
                        </p>
</div>
</div>

<div className="bg-[#F5F2ED] p-6 rounded-xl shadow-card hover:shadow-soft transition-shadow duration-300 flex flex-col h-full border border-black/5">
<div className="mb-4 flex items-center gap-2 border-b border-black/10 pb-2">
<span className="text-xs uppercase tracking-widest text-gray-400">Para:</span>
<span className="text-sm font-medium">Mí</span>
</div>
<h3 className="font-serif italic text-xl mb-4 text-brand-dark">"Me elegí hoy"</h3>
<p className="font-serif text-gray-600 leading-relaxed text-sm flex-grow">
                        Esa pausa de 10 minutos solo para ti. Cerraste la puerta, respiraste, y por primera vez en días sentiste que no le debías nada a nadie. Te lo merecías.
                    </p>
<div className="mt-6 pt-4 border-t border-black/5 flex justify-between items-center opacity-50">
<span className="text-[10px] uppercase tracking-wider">Ayer</span>
<i className="w-3 h-3" data-lucide="bookmark"></i>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-white">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-12">Imagina terminar cada día así</h2>
<div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-8 md:p-12 relative">
<div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
<div className="text-center group">
<div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-soft transition-colors duration-300 text-brand-dark">
<i className="w-6 h-6" data-lucide="message-square"></i>
</div>
<p className="text-sm font-medium">Recibes una<br/>pregunta</p>
</div>
<i className="hidden md:block w-5 h-5 text-brand-light" data-lucide="arrow-right"></i>
<i className="md:hidden w-5 h-5 text-brand-light" data-lucide="arrow-down"></i>
<div className="text-center group">
<div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-soft transition-colors duration-300 text-brand-dark">
<i className="w-6 h-6" data-lucide="moon"></i>
</div>
<p className="text-sm font-medium">Respondes cuando<br/>tú decidas</p>
</div>
<i className="hidden md:block w-5 h-5 text-brand-light" data-lucide="arrow-right"></i>
<i className="md:hidden w-5 h-5 text-brand-light" data-lucide="arrow-down"></i>
<div className="text-center group">
<div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-soft transition-colors duration-300 text-brand-dark">
<i className="w-6 h-6" data-lucide="sparkles"></i>
</div>
<p className="text-sm font-medium">Recibes tu<br/>postal</p>
</div>
</div>
<div className="mt-10 pt-8 border-t border-gray-100">
<p className="font-serif italic text-lg text-brand-dark">"Hoy importó."</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 bg-brand-bg/50" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4 text-brand-dark">Elige tu ritmo</h2>
<p className="text-gray-500 text-base font-light">Cancela o cambia de plan cuando quieras. Sin compromiso.</p>
</div>

<div className="w-full overflow-x-auto pb-12 -mx-4 px-4 md:mx-0 md:px-0">

<div className="min-w-[1000px] bg-white rounded-3xl table-shadow border border-gray-100 overflow-hidden mx-auto">
<table className="w-full border-collapse">

<thead>
<tr className="text-left">
<th className="sticky-col bg-white p-8 w-1/5 min-w-[200px] z-20 border-b border-gray-100">
<span className="text-sm font-medium text-gray-500">Comparar planes</span>
</th>
<th className="p-8 w-1/5 min-w-[200px] text-center border-b border-gray-100 align-top group hover:bg-gray-50/50 transition-colors">
<div className="flex flex-col items-center">
<div className="mb-4">
<svg className="w-8 h-8 text-yellow-400 fill-current" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h3 className="text-base font-medium text-brand-dark mb-1">Necesidad</h3>
<span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">MENSUAL</span>
</div>
</th>
<th className="p-8 w-1/5 min-w-[200px] text-center border-b border-gray-100 align-top group hover:bg-gray-50/50 transition-colors">
<div className="flex flex-col items-center">
<div className="mb-4">
<svg className="w-8 h-8 text-yellow-300 fill-current" viewbox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</div>
<h3 className="text-base font-medium text-brand-dark mb-1">Pausa</h3>
<span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">QUINCENAL</span>
</div>
</th>
<th className="relative p-8 w-1/5 min-w-[200px] text-center border-b border-transparent bg-brand-soft/40 align-top">

<div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#FFD700] text-black/80 px-4 py-1.5 rounded-b-lg text-[10px] font-bold tracking-wider uppercase shadow-sm whitespace-nowrap z-10">
                                        ★ Más Popular
                                    </div>
<div className="flex flex-col items-center pt-2">
<div className="mb-4">
<svg className="w-8 h-8 text-brand-DEFAULT fill-current" viewbox="0 0 24 24"><path d="M7 17C7 17 4 10 7 7C10 4 17 7 17 7C17 7 20 14 17 17C14 20 7 17 7 17Z"></path></svg>
</div>
<h3 className="text-base font-medium text-brand-dark mb-1">Ritual</h3>
<span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">SEMANAL</span>
</div>
</th>
<th className="p-8 w-1/5 min-w-[200px] text-center border-b border-gray-100 align-top group hover:bg-gray-50/50 transition-colors">
<div className="flex flex-col items-center">
<div className="mb-4">
<svg className="w-8 h-8 text-green-600 fill-current" viewbox="0 0 24 24"><path d="M12 2C12 2 12 10 12 10C12 10 18 12 20 18C20 18 20 6 12 2Z"></path><path d="M12 10C12 10 6 12 4 18C4 18 4 6 12 2Z"></path><path d="M12 10L12 22"></path></svg>
</div>
<h3 className="text-base font-medium text-brand-dark mb-1">Hábito</h3>
<span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">DIARIO</span>
</div>
</th>
</tr>
</thead>
<tbody className="text-sm font-light">

<tr>
<td className="sticky-col bg-white p-6 pl-8 font-medium text-gray-500 border-b border-gray-50 z-20">Precio</td>
<td className="p-6 text-center border-b border-gray-50">
<span className="text-3xl font-medium text-brand-dark tracking-tight">USD 4</span><span className="text-gray-400 text-xs font-normal">/mes</span>
</td>
<td className="p-6 text-center border-b border-gray-50">
<span className="text-3xl font-medium text-brand-dark tracking-tight">USD 6</span><span className="text-gray-400 text-xs font-normal">/mes</span>
</td>
<td className="p-6 text-center border-b border-transparent bg-brand-soft/40">
<span className="text-3xl font-medium text-brand-dark tracking-tight">USD 8</span><span className="text-gray-400 text-xs font-normal">/mes</span>
</td>
<td className="p-6 text-center border-b border-gray-50">
<span className="text-3xl font-medium text-brand-dark tracking-tight">USD 11</span><span className="text-gray-400 text-xs font-normal">/mes</span>
</td>
</tr>

<tr>
<td className="sticky-col bg-white p-6 pl-8 font-medium text-gray-500 border-b border-gray-50 z-20">Postales</td>
<td className="p-6 text-center border-b border-gray-50 text-gray-500">Ilimitadas</td>
<td className="p-6 text-center border-b border-gray-50 text-gray-500">Ilimitadas</td>
<td className="p-6 text-center border-b border-transparent bg-brand-soft/40 text-brand-dark">Ilimitadas</td>
<td className="p-6 text-center border-b border-gray-50 text-gray-500">Ilimitadas</td>
</tr>

<tr>
<td className="sticky-col bg-white p-6 pl-8 font-medium text-gray-500 border-b border-gray-50 z-20">Recordatorio</td>
<td className="p-6 text-center border-b border-gray-50 text-gray-500">1 vez al mes</td>
<td className="p-6 text-center border-b border-gray-50 text-gray-500">Cada 15 días</td>
<td className="p-6 text-center border-b border-transparent bg-brand-soft/40 text-brand-dark">Cada 7 días</td>
<td className="p-6 text-center border-b border-gray-50 text-gray-500">Diario</td>
</tr>

<tr>
<td className="sticky-col bg-white p-6 pl-8 font-medium text-gray-500 border-b border-gray-50 z-20">Costo/postal</td>
<td className="p-6 text-center border-b border-gray-50 text-brand-dark font-medium">USD 4.00</td>
<td className="p-6 text-center border-b border-gray-50 text-brand-dark font-medium">USD 3.00</td>
<td className="p-6 text-center border-b border-transparent bg-brand-soft/40 text-brand-dark font-semibold">USD 2.00</td>
<td className="p-6 text-center border-b border-gray-50 text-brand-dark font-medium">USD 0.37</td>
</tr>

<tr>
<td className="sticky-col bg-white p-6 pl-8 border-t border-gray-50 z-20"></td>
<td className="p-8 text-center border-t border-gray-50">
<button className="w-full py-3 rounded-lg bg-gray-100 hover:bg-gray-200 text-brand-dark text-xs font-semibold uppercase tracking-widest transition-colors" onclick="selectPlan('Mensual')">Elegir</button>
</td>
<td className="p-8 text-center border-t border-gray-50">
<button className="w-full py-3 rounded-lg bg-gray-100 hover:bg-gray-200 text-brand-dark text-xs font-semibold uppercase tracking-widest transition-colors" onclick="selectPlan('Quincenal')">Elegir</button>
</td>
<td className="p-8 text-center border-t border-transparent bg-brand-soft/40">
<button className="w-full py-3 rounded-lg bg-white border border-brand-light/30 hover:border-brand-DEFAULT text-brand-dark text-xs font-bold uppercase tracking-widest shadow-sm hover:shadow-md transition-all" onclick="selectPlan('Semanal')">Empezar</button>
</td>
<td className="p-8 text-center border-t border-gray-50">
<button className="w-full py-3 rounded-lg bg-gray-100 hover:bg-gray-200 text-brand-dark text-xs font-semibold uppercase tracking-widest transition-colors" onclick="selectPlan('Diario')">Elegir</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#F5F2ED] text-brand-dark text-center relative overflow-hidden flex flex-col items-center justify-center min-h-[60vh]">
<div className="relative z-10 max-w-4xl mx-auto">
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-4 text-[#2C2C2C] leading-[0.95]">
                Tu cerebro va a borrar<br/>
<span className="text-[#2C2C2C]/30">lo que pasó hoy.</span>
</h2>
<p className="text-xl md:text-2xl text-[#2C2C2C] mb-12 font-medium tracking-tight">A menos que lo rescates.</p>

<button className="group relative px-8 py-4 rounded-full font-medium text-lg transition-all transform hover:-translate-y-1 active:scale-95 flex items-center gap-3 mx-auto shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] bg-gradient-to-b from-white to-[#F7F5F2] border border-black/5" onclick="document.getElementById('demo-chat').scrollIntoView({behavior: 'smooth'})">
<span className="text-xl">💛</span>
<span className="text-brand-dark font-semibold tracking-wide">Empezar mi ritual ahora</span>
</button>
<p className="mt-8 text-sm text-[#2C2C2C]/30 font-light">60 segundos para probarlo. Gratis. Sin tarjeta.</p>
</div>
</section>

<footer className="bg-[#fafafa] py-12 px-6 border-t border-gray-200 text-sm">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 opacity-60">
<i className="w-3 h-3" data-lucide="lock"></i>
<span>Privacidad Total</span>
<span className="mx-2">•</span>
<span>Cancela cuando quieras</span>
</div>
<div className="flex flex-col md:flex-row items-center gap-6 text-gray-500">
<span>Guarda lo Bonito © 2025</span>
<div className="flex gap-4">
<a className="hover:text-brand-DEFAULT" href="#">Instagram</a>
<a className="hover:text-brand-DEFAULT" href="#">Términos</a>
<a className="hover:text-brand-DEFAULT" href="#">Privacidad</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
