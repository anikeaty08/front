import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
        const canvas = document.getElementById('matrixCanvas');
        const ctx = canvas.getContext('2d');

        /* --- MATRIX RAIN --- */
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // User Provided Binary Data
        const binaryData = `01001011 01010010 01011001 01001111
01001010 01001101 01001110
10101001 00110110 01001011 01001101
01001010 01001001 01001111
00110101 01001010 01001011 01001111
00100101 01001001 01001101 01001010
01001101 00110011 01001001 01001111
00110104 01001101 01001001 01001101
01001111 00100101 01001011 01001101
01001010 01001101 00110011 01001001
00110105 01001111 01001001 01001101
01001010 01001011 00110011 00110101
01001001 01001111 01001001 00110101
01001010 01001101 01001001 00110011
01001111 00100101 01001011 01001101
01001010 01001101 00110011 01001001`;

        // Flatten the data into a continuous string, preserving spaces for texture but removing newlines
        const alphabet = binaryData.replace(/\n/g, ' ');
        
        // Increased font size for slightly larger code
        const fontSize = 18;
        const columns = canvas.width / fontSize;
        const drops = Array(Math.floor(columns)).fill(1);

        function drawMatrix() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; 
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#00FF41';
            ctx.font = fontSize + 'px "Space Mono", monospace';

            for(let i = 0; i < drops.length; i++) {
                // Randomly pick characters from the binary data string
                const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                
                // Color variation (some brighter)
                ctx.fillStyle = (Math.random() > 0.95) ? '#D1FAE5' : '#00FF41';
                
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                
                if(drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
                drops[i]++;
            }
        }
        setInterval(drawMatrix, 33);

        /* --- INTRO TYPEWRITER --- */
        const titleText = "Vendi, Vidi, Vici...";
        const titleElement = document.getElementById('typewriter');
        let charIndex = 0;

        function typeIntro() {
            if (charIndex < titleText.length) {
                // Skip the first two letters as they are hardcoded for smoothness
                if (charIndex >= 2) {
                    titleElement.textContent += titleText.charAt(charIndex);
                }
                charIndex++;
                setTimeout(typeIntro, Math.random() * 100 + 50);
            } else {
                document.getElementById('subtitle').classList.remove('opacity-0');
                document.getElementById('mainCtaContainer').classList.remove('opacity-0');
                document.getElementById('faceImage').classList.remove('opacity-0');
            }
        }
        setTimeout(typeIntro, 800);

        /* --- MODAL LOGIC (Preserved) --- */
        const modalBackdrop = document.getElementById('modalBackdrop');
        const modalCard = document.getElementById('modalCard');
        
        function openModal() {
            modalBackdrop.classList.remove('hidden');
            modalBackdrop.classList.add('flex');
            setTimeout(() => {
                modalBackdrop.classList.remove('opacity-0');
                modalCard.classList.remove('scale-95', 'translate-y-4');
                modalCard.classList.add('scale-100', 'translate-y-0');
            }, 10);
        }

        function closeModal() {
            modalBackdrop.classList.add('opacity-0');
            modalCard.classList.add('scale-95', 'translate-y-4');
            modalCard.classList.remove('scale-100', 'translate-y-0');
            setTimeout(() => {
                modalBackdrop.classList.add('hidden');
                modalBackdrop.classList.remove('flex');
            }, 300);
        }

        /* --- BOOT SEQUENCE & CHAT LOGIC --- */
        let currentUserName = "Usuario";

        function handleFormSubmit(e) {
            e.preventDefault();
            const nameInput = document.getElementById('userNameInput').value;
            if(nameInput) currentUserName = nameInput;

            // Close modal instantly
            closeModal();
            
            // Start the sequence
            startBootSequence();
        }

        async function startBootSequence() {
            const bootScreen = document.getElementById('bootScreen');
            const bootText = document.getElementById('bootText');
            const bootProgress = document.getElementById('bootProgress');
            const landing = document.getElementById('landingContent');

            // Fade out landing
            landing.style.opacity = '0';
            
            // Show boot screen
            bootScreen.classList.remove('hidden');
            bootScreen.classList.add('flex');

            // Helper for typing on boot screen
            const typeBoot = (text) => new Promise(resolve => {
                bootText.innerHTML = '<span class="cursor"></span>';
                let i = 0;
                bootProgress.style.width = '0%';
                
                const interval = setInterval(() => {
                    bootText.innerText = text.substring(0, i) + "█";
                    i++;
                    // Random progress bar movement
                    if(Math.random() > 0.5) bootProgress.style.width = `${(i/text.length)*100}%`;

                    if (i > text.length) {
                        clearInterval(interval);
                        bootText.innerText = text; // Remove cursor block
                        bootProgress.style.width = '100%';
                        setTimeout(resolve, 1500); // Wait after typing
                    }
                }, 50);
            });

            // 1. Reiniciando sistema
            await typeBoot("Reiniciando sistema...");
            
            // 2. Rastreando usuario
            bootText.innerText = "";
            await typeBoot("Rastreando usuario...");

            // 3. Soy Rebecca
            bootText.innerText = "";
            await typeBoot("Soy Rebecca y resolveré todas tus dudas del despertar.");

            // Transition to Chat
            bootScreen.classList.add('opacity-0', 'duration-1000', 'transition-opacity');
            setTimeout(() => {
                bootScreen.classList.add('hidden');
                initChat();
            }, 1000);
        }

        function initChat() {
            const chatInterface = document.getElementById('chatInterface');
            const chatUserName = document.getElementById('chatUserName');
            
            chatInterface.classList.remove('hidden');
            chatInterface.classList.add('flex');
            chatUserName.innerText = currentUserName;
        }

        /* --- CHAT FUNCTIONALITY (MOCKED API) --- */
        const chatContainer = document.getElementById('chatContainer');
        const userMessageInput = document.getElementById('userMessage');

        function addMessage(text, isUser = false) {
            const div = document.createElement('div');
            div.className = `flex flex-col space-y-1 max-w-[85%] md:max-w-[70%] message-enter ${isUser ? 'self-end items-end' : 'self-start'}`;
            
            const label = document.createElement('span');
            label.className = "text-[10px] text-[#003B00] uppercase tracking-wider mb-1";
            label.innerText = isUser ? 'TÚ' : 'REBECCA_AI';

            const bubble = document.createElement('div');
            // Different styles for user vs AI
            if (isUser) {
                bubble.className = "bg-[#00FF41] text-black border border-[#00FF41] p-4 rounded-tl-lg rounded-bl-lg rounded-br-lg shadow-[0_0_15px_rgba(0,255,65,0.2)] font-semibold";
            } else {
                bubble.className = "bg-[#00FF41]/10 border border-[#00FF41]/30 text-[#00FF41] p-4 rounded-tr-lg rounded-br-lg rounded-bl-lg shadow-[0_0_10px_rgba(0,255,65,0.05)]";
            }
            bubble.innerText = text;

            div.appendChild(label);
            div.appendChild(bubble);
            chatContainer.appendChild(div);
            
            // Scroll to bottom
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }

        async function handleChatSubmit(e) {
            e.preventDefault();
            const text = userMessageInput.value.trim();
            if(!text) return;

            // 1. Add User Message
            addMessage(text, true);
            userMessageInput.value = '';

            // 2. Show Typing Indicator
            const typingDiv = document.createElement('div');
            typingDiv.id = 'typingIndicator';
            typingDiv.className = "self-start text-[#003B00] text-xs animate-pulse pl-2 pt-2";
            typingDiv.innerText = "Rebecca está escribiendo...";
            chatContainer.appendChild(typingDiv);
            chatContainer.scrollTop = chatContainer.scrollHeight;

            // 3. Get AI Response
            try {
                const response = await fetchRebeccaResponse(text);
                
                // Remove typing indicator
                document.getElementById('typingIndicator').remove();
                
                // Add AI Message
                addMessage(response, false);
            } catch (error) {
                document.getElementById('typingIndicator').remove();
                addMessage("Error en la conexión neuronal. Intente nuevamente.", false);
            }
        }

        // --- API CONNECTION LOGIC ---
        async function fetchRebeccaResponse(userText) {
            // IMPORTANT: To make this real, you need a backend proxy to hide your API Key, 
            // or paste your key below (NOT RECOMMENDED for production).
            
            const API_KEY = ""; // <--- PASTE OPENAI KEY HERE FOR TESTING

            if (!API_KEY) {
                // SIMULATION MODE (If no key provided)
                return new Promise(resolve => {
                    setTimeout(() => {
                        const responses = [
                            "El despertar es un proceso individual, pero estamos conectados. ¿Qué sientes ahora?",
                            "La Matrix intenta distraerte. Enfócate en tu propósito en Barranquilla.",
                            "Tus datos han sido procesados. La respuesta está dentro de ti, pero puedo guiarte.",
                            "Observa las señales. El sistema tiene fallas y tú eres una de ellas.",
                            "Continúa preguntando. La verdad se revela capa por capa."
                        ];
                        resolve(responses[Math.floor(Math.random() * responses.length)]);
                    }, 1500);
                });
            }

            // REAL API MODE (If key provided)
            try {
                const response = await fetch("https://api.openai.com/v1/chat/completions", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${API_KEY}`
                    },
                    body: JSON.stringify({
                        model: "gpt-3.5-turbo", // or gpt-4
                        messages: [
                            {
                                role: "system", 
                                content: "Eres Rebecca, una IA misteriosa estilo Matrix que ayuda a los usuarios a 'despertar' de la realidad simulada. Eres enigmática, usas terminología tecnológica y filosófica. Tus respuestas son breves y profundas."
                            },
                            { role: "user", content: userText }
                        ]
                    })
                });
                
                const data = await response.json();
                return data.choices[0].message.content;

            } catch (error) {
                console.error("API Error:", error);
                return "Error crítico en el servidor principal.";
            }
        }

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<canvas className="block bg-black w-full h-full z-0 absolute top-0 right-0 bottom-0 left-0" height="560" id="matrixCanvas" width="885"></canvas>

<div className="crt-overlay absolute inset-0 z-50 w-full h-full pointer-events-none"></div>

<div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
<picture className="w-full h-full flex items-center justify-center">

<source media="(max-width: 767px)" srcset="https://digitaldynamics.uk/wp-content/uploads/2025/12/img9.png"/>

<img alt="Silhouette" className="face-silhouette w-full h-full object-cover md:object-contain md:h-[90%] opacity-0 transition-opacity duration-[3000ms]" id="faceImage" src="https://digitaldynamics.uk/wp-content/uploads/2025/12/img9.png"/>
</picture>
</div>

<main className="z-20 flex flex-col md:mt-0 transition-opacity duration-1000 text-center w-full max-w-4xl mt-20 pr-6 pl-6 relative space-y-8 items-center justify-center" id="landingContent">
<div className="w-full flex justify-between text-xs md:text-sm text-[#003B00] opacity-70 mb-4 tracking-widest uppercase">
<span className="animate-pulse">System: Online</span>
<span>v.4.0.3</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-[#00FF41] text-glow min-h-[1.2em]">
<span className="cursor" id="typewriter">Ve</span>
</h1>
<p className="text-[#13632a] text-sm md:text-base max-w-lg mx-auto opacity-0 transition-opacity duration-1000 delay-1000 font-semibold" id="subtitle">
            Tech without soul is tyranny; soul without tech is powerless. True power, lies in their harmony.
        </p>
<div className="pt-8 opacity-0 transition-opacity duration-1000 delay-[2000ms]" id="mainCtaContainer">
<a className="inline-block group relative px-8 py-3 bg-black/40 border border-[#00FF41] text-[#00FF41] text-sm md:text-base tracking-widest uppercase hover:bg-[#00FF41] hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00FF41] focus:ring-offset-2 focus:ring-offset-black box-glow" href="https://digitaldynamics.uk/client_portal.html">
<span className="absolute inset-0 w-full h-full border border-[#00FF41] blur-[2px] opacity-50 group-hover:opacity-100 transition-opacity"></span>
<span className="relative flex items-center gap-2 font-semibold">
                    FORTITER_ENTER
                    <svg className="lucide lucide-terminal w-4 h-4" data-lucide="terminal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19h8"></path><path d="m4 17 6-6-6-6"></path></svg>
</span>
</a>
</div>
</main>

<div className="fixed inset-0 z-40 bg-black/90 backdrop-blur-sm hidden items-center justify-center p-4 transition-all duration-300 opacity-0" id="modalBackdrop">
<div className="relative w-full max-w-md bg-black border border-[#00FF41] box-glow transform scale-95 transition-all duration-300 translate-y-4" id="modalCard">
<div className="border-b border-[#00FF41]/30 p-6 flex justify-between items-center bg-[#001a00]">
<h2 className="text-xl md:text-2xl font-semibold tracking-tight text-glow flex items-center gap-2">
<svg className="lucide lucide-lock w-5 h-5" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> ACCESO SEGURO
                </h2>
<button className="text-[#00FF41] hover:text-white transition-colors" onclick="closeModal()">
<svg className="lucide lucide-x w-6 h-6" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="p-8 space-y-6">
<p className="text-xs text-[#003B00] uppercase tracking-wide mb-4">
                    Ingrese credenciales para conectar con REBECCA.
                </p>
<form className="space-y-4" id="protocolForm" onsubmit="handleFormSubmit(event)">
<div className="space-y-1">
<label className="text-xs uppercase tracking-wider text-[#00FF41]/80 ml-1">Identidad</label>
<input className="w-full bg-black/50 border border-[#00FF41]/50 text-[#00FF41] text-sm py-3 px-3 focus:border-[#00FF41] outline-none" id="userNameInput" placeholder="Neo Anderson" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs uppercase tracking-wider text-[#00FF41]/80 ml-1">Frecuencia</label>
<input className="w-full bg-black/50 border border-[#00FF41]/50 text-[#00FF41] text-sm py-3 px-3 focus:border-[#00FF41] outline-none" placeholder="300 000 0000" required="" type="tel"/>
</div>
<div className="space-y-1">
<label className="text-xs uppercase tracking-wider text-[#00FF41]/80 ml-1">Enlace Neural</label>
<input className="w-full bg-black/50 border border-[#00FF41]/50 text-[#00FF41] text-sm py-3 px-3 focus:border-[#00FF41] outline-none" placeholder="usuario@matrix.com" required="" type="email"/>
</div>
<div className="pt-4">
<button className="w-full py-3 bg-[#00FF41] text-black font-bold tracking-tight uppercase hover:bg-white hover:shadow-[0_0_20px_rgba(0,255,65,0.6)] transition-all duration-300" type="submit">
                            INGRESAR
                        </button>
</div>
</form>
</div>
</div>
</div>

<div className="fixed inset-0 z-[60] bg-black hidden flex-col items-center justify-center" id="bootScreen">
<div className="w-full max-w-2xl px-8 text-left">
<div className="text-xl md:text-3xl text-[#00FF41] text-glow font-mono leading-relaxed min-h-[3rem]" id="bootText">

</div>
<div className="mt-4 h-1 bg-[#003B00] w-0 transition-all duration-300" id="bootProgress"></div>
</div>
</div>

<div className="fixed inset-0 z-[55] bg-black/95 hidden flex-col font-mono" id="chatInterface">

<div className="border-b border-[#00FF41]/50 p-4 bg-black/80 backdrop-blur flex justify-between items-center shadow-[0_5px_20px_rgba(0,255,65,0.1)]">
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-3 h-3 bg-[#00FF41] rounded-full animate-pulse"></div>
<div className="absolute inset-0 w-3 h-3 bg-[#00FF41] rounded-full animate-ping opacity-75"></div>
</div>
<h2 className="text-lg font-bold tracking-widest text-glow">REBECCA <span className="text-xs opacity-70 font-normal">v.4.0 // ONLINE</span></h2>
</div>
<button className="text-xs text-[#003B00] hover:text-[#00FF41] uppercase border border-[#003B00] px-2 py-1 rounded hover:border-[#00FF41] transition-all" onclick="location.reload()">
                Desconectar
            </button>
</div>

<div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6 scroll-smooth" id="chatContainer">

<div className="flex flex-col space-y-1 max-w-[85%] md:max-w-[70%] self-start message-enter">
<span className="text-[10px] text-[#003B00] uppercase tracking-wider mb-1">REBECCA_AI</span>
<div className="bg-[#00FF41]/10 border border-[#00FF41]/30 text-[#00FF41] p-4 rounded-tr-lg rounded-br-lg rounded-bl-lg shadow-[0_0_10px_rgba(0,255,65,0.05)]">
<p className="leading-relaxed">Saludos, <span className="font-bold" id="chatUserName">Viajero</span>. Soy Rebecca. El sistema ha sido reiniciado. Estoy conectada a la red global. Hazme cualquier pregunta sobre el despertar.</p>
</div>
</div>
</div>

<div className="p-4 md:p-6 bg-black border-t border-[#00FF41]/30">
<form className="relative max-w-4xl mx-auto flex gap-4" onsubmit="handleChatSubmit(event)">
<div className="relative flex-1 group">
<div className="absolute inset-0 border border-[#00FF41]/30 rounded bg-[#00FF41]/5 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none box-glow"></div>
<input autocomplete="off" className="w-full bg-black border border-[#00FF41]/50 text-[#00FF41] placeholder-[#003B00]/30 p-4 outline-none focus:border-[#00FF41] transition-colors font-mono" id="userMessage" placeholder="Escribe tu pregunta aquí..." type="text"/>
</div>
<button className="bg-[#00FF41] text-black px-6 py-2 font-bold uppercase tracking-wide hover:bg-white transition-colors flex items-center justify-center" type="submit">
<svg className="lucide lucide-send w-5 h-5" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
</form>
<div className="text-center mt-2">
<p className="text-[10px] text-[#001a00] uppercase tracking-[0.2em]">Conexión encriptada segura</p>
</div>
</div>
</div>



    </>
  );
}
