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



        // 1. CURSOR
        const cursor = document.getElementById('customCursor');
        let mouseX = -100, mouseY = -100, cursorX = -100, cursorY = -100;
        document.addEventListener('mousemove', e => { mouseX = e.clientX; mouseY = e.clientY; if(cursorX===-100){cursorX=mouseX;cursorY=mouseY} });
        function animateCursor() {
            cursorX += (mouseX - cursorX) * 0.15; cursorY += (mouseY - cursorY) * 0.15;
            cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
            requestAnimationFrame(animateCursor);
        }
        animateCursor();
        document.querySelectorAll('a, button, input, textarea, .group').forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
        });

        // 2. HERO IMAGE SWAP
        const heroBg = document.getElementById('hero-bg');
        window.updateHero = (key) => {
            const maps = {
                imagine: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a129d405-4675-47b4-bc00-07c1052de5a3_3840w.png',
                build: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/da32c594-6a70-43d2-ae2d-c44faa07320e_3840w.png',
                deploy: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eb3c4477-45ed-439e-be43-36fc7ab0230e_3840w.png'
            };
            heroBg.style.backgroundImage = `url('${maps[key]}')`;
        };

        // 3. MODALS (Video & Pilotage)
        window.openAutoModal = function() {
            const d = document.createElement('div');
            d.className = 'fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4';
            d.onclick = e => { if(e.target === d) d.remove(); };
            d.innerHTML = `<div class="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10"><button onclick="this.closest('.fixed').remove()" class="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20"><iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon></button><video src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" class="w-full h-full object-cover" autoplay muted loop controls></video></div>`;
            document.body.appendChild(d);
        };
        window.openPilotageModal = function() {
            const d = document.createElement('div');
            d.className = 'fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4';
            d.onclick = e => { if(e.target === d) d.remove(); };
            d.innerHTML = `<div class="w-full max-w-4xl bg-[#121212] border border-white/10 rounded-3xl p-8 text-white shadow-2xl overflow-hidden relative" style="cursor: auto;"><button onclick="this.closest('.fixed').remove()" class="absolute top-6 right-6 text-neutral-500 hover:text-white"><iconify-icon icon="solar:close-circle-linear" width="32"></iconify-icon></button><h2 class="text-2xl font-semibold mb-6 flex items-center gap-3"><span class="w-2 h-2 bg-blue-500 rounded-full"></span>Pilotage Intelligent</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-8"><div><input type="text" placeholder="Entrez votre secteur (ex: Retail)..." class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white mb-6 focus:border-blue-500 outline-none transition-colors" oninput="document.getElementById('p-sector').innerText = this.value || 'votre activité'"><div class="bg-white/5 rounded-xl p-6 border border-white/5 mb-4"><div class="text-xs text-neutral-400 uppercase tracking-widest mb-2">Prévision 30j</div><div class="text-3xl font-light text-emerald-400">+24.5%</div><p class="text-sm text-neutral-500 mt-2">Hausse de la demande estimée pour <span id="p-sector" class="text-white">votre activité</span>.</p></div></div><div class="space-y-3"><div class="p-4 bg-white/5 border border-white/5 rounded-xl flex gap-4 items-center hover:bg-white/10 transition-colors cursor-pointer group"><div class="p-2 bg-blue-500/20 text-blue-400 rounded-lg"><iconify-icon icon="solar:bolt-linear" width="20"></iconify-icon></div><div><h4 class="font-medium text-sm group-hover:text-blue-300">Action recommandée</h4><p class="text-xs text-neutral-500">Automatiser le service client</p></div></div><div class="p-4 bg-white/5 border border-white/5 rounded-xl flex gap-4 items-center hover:bg-white/10 transition-colors cursor-pointer group"><div class="p-2 bg-purple-500/20 text-purple-400 rounded-lg"><iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon></div><div><h4 class="font-medium text-sm group-hover:text-purple-300">Opportunité</h4><p class="text-xs text-neutral-500">Segment inexploité détecté</p></div></div></div></div></div>`;
            document.body.appendChild(d);
        };

        // 4. CHATBOT LOGIC
        window.toggleChat = function() {
            document.getElementById('chatbot-overlay').classList.toggle('open');
        }

        window.sendMainPrompt = function() {
            const mainInput = document.getElementById('main-prompt-input');
            const msg = mainInput.value;
            if(msg.trim()) {
                mainInput.value = '';
                toggleChat();
                // Send to internal chat
                setTimeout(() => {
                    addChatMessage(msg, 'user');
                    simulateBotResponse();
                }, 300);
            }
        }

        window.pmReply = function() {
            const pmInput = document.getElementById('pm-input');
            const msg = pmInput.value;
            if(msg.trim()) {
                addChatMessage(msg, 'user');
                pmInput.value = '';
                simulateBotResponse();
            }
        }

        function addChatMessage(text, type) {
            const container = document.getElementById('pm-msgs');
            const d = document.createElement('div');
            d.className = `pm-msg ${type}`;
            d.textContent = text;
            container.appendChild(d);
            container.scrollTop = container.scrollHeight;
        }

        function simulateBotResponse() {
            const container = document.getElementById('pm-msgs');
            // Typing indicator
            setTimeout(() => {
                const typing = document.createElement('div');
                typing.className = 'pm-msg bot typing';
                typing.innerHTML = '<span class="animate-pulse">...</span>';
                typing.id = 'bot-typing';
                container.appendChild(typing);
                container.scrollTop = container.scrollHeight;

                setTimeout(() => {
                    document.getElementById('bot-typing').remove();
                    addChatMessage("J'analyse votre demande. Je prépare une architecture technique adaptée à ces contraintes.", 'bot');
                }, 1500);
            }, 500);
        }

        // Stack Animation Logic
        (function() {
            const section = document.getElementById('pinned-stack-section');
            function initStackAnimation() {
                const cards = section ? section.querySelectorAll('.card-panel') : [];
                if (!section || cards.length === 0) return;
                function update() {
                    const rect = section.getBoundingClientRect();
                    const viewportHeight = window.innerHeight;
                    const distance = section.offsetHeight - viewportHeight;
                    if (distance <= 0) return;
                    const top = -rect.top;
                    let p = Math.max(0, Math.min(1, top / distance));
                    const card3 = cards[0]; const card2 = cards[1]; const card1 = cards[2];
                    if (p < 0.5) {
                        const p1 = p * 2;
                        if(card1) { const y1 = p1 * -110; const r1 = p1 * -3; const s1 = 1 - (0.05 * p1); card1.style.transform = `translateY(${y1}%) rotate(${r1}deg) scale(${s1})`; card1.style.opacity = 1 - Math.pow(p1, 2); }
                        if(card2) { const s2 = 0.92 + (0.08 * p1); const y2 = 40 - (40 * p1); card2.style.transform = `scale(${s2}) translateY(${y2}px)`; card2.style.opacity = 0.8 + (0.2 * p1); }
                        if(card3) { const s3 = 0.84 + (0.08 * p1); const y3 = 80 - (40 * p1); card3.style.transform = `scale(${s3}) translateY(${y3}px)`; card3.style.opacity = 0.6 + (0.2 * p1); }
                    } else {
                        const p2 = (p - 0.5) * 2;
                        if(card1) { card1.style.transform = `translateY(-120%) rotate(-5deg)`; card1.style.opacity = 0; }
                        if(card2) { const y2_out = p2 * -110; const r2 = p2 * 3; const s2 = 1 - (0.05 * p2); card2.style.transform = `translateY(${y2_out}%) rotate(${r2}deg) scale(${s2})`; card2.style.opacity = 1 - Math.pow(p2, 2); }
                        if(card3) { const s3 = 0.92 + (0.08 * p2); const y3 = 40 - (40 * p2); card3.style.transform = `scale(${s3}) translateY(${y3}px)`; card3.style.opacity = 0.8 + (0.2 * p2); }
                    }
                }
                window.addEventListener('scroll', () => requestAnimationFrame(update));
                window.addEventListener('resize', update);
                update();
            }
            if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', initStackAnimation); } else { initStackAnimation(); }
        })();
    
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
      

<div className="custom-cursor" id="customCursor">
<svg viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l10 10-10 10L2 12z" stroke="#00FFFF" strokeLinecap="round" strokeLinejoin="round" style={{stroke: 'rgb(255, 69, 0)'}}></path>
</svg>
</div>

<div className="pm-o" id="chatbot-overlay">
<div className="pm-c">
<div className="pm-h">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-purple-900/20">
<iconify-icon icon="solar:stars-minimalistic-linear" width="18"></iconify-icon>
</div>
<div>
<div className="font-semibold text-white tracking-tight text-sm">Assistant Architecture</div>
<div className="text-xs text-neutral-400 flex items-center gap-1"><span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block"></span> En ligne</div>
</div>
</div>
<button className="text-neutral-500 hover:text-white transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10" onclick="toggleChat()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="pm-msgs no-scrollbar" id="pm-msgs">

<div className="pm-msg bot">
                    Bonjour. Je suis l'intelligence de PiNGs. Décrivez votre projet ou votre problématique technique, je générerai une architecture adaptée.
                </div>
</div>
<div className="pm-i-area">
<div className="relative">
<input className="w-full bg-white/5 border border-white/10 rounded-full pl-6 pr-12 py-4 text-white placeholder-neutral-500 outline-none focus:border-white/30 transition-colors text-sm" id="pm-input" onkeydown="if(event.key==='Enter') pmReply()" placeholder="Posez une question à l'IA..." type="text"/>
<button className="absolute right-2 top-2 h-10 w-10 bg-white text-black rounded-full flex items-center justify-center hover:scale-105 transition-transform" onclick="pmReply()">
<iconify-icon icon="solar:arrow-up-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<button className="fixed bottom-8 right-8 z-[9000] w-14 h-14 bg-black text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform border border-white/10 group" onclick="toggleChat()">
<iconify-icon className="group-hover:rotate-12 transition-transform" icon="solar:chat-round-dots-linear" width="28"></iconify-icon>
<span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
</button>

<nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center pointer-events-none mix-blend-difference text-white">
<a className="pointer-events-auto hover:scale-105 transition-transform duration-300" href="#">
<img alt="PiNGs Logo" className="h-9 w-auto object-contain invert" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1fc6fbb6-3b2c-428d-97f8-edf9c8fcf554_1600w.png"/>
</a>
<button className="pointer-events-auto hover:scale-110 transition-transform">
<iconify-icon height="40" icon="solar:hamburger-menu-linear" width="40"></iconify-icon>
</button>
</nav>

<section className="relative w-full h-screen overflow-hidden group select-none flex items-center justify-center border-b-thick bg-black" id="hero-trigger">
<div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-transition duration-700 ease-in-out" id="hero-bg" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a129d405-4675-47b4-bc00-07c1052de5a3_3840w.png\')'}}>
<div className="absolute inset-0 bg-black/40"></div>
</div>
<div className="flex flex-col w-full h-full z-10 relative items-center justify-center pointer-events-none">
<h1 className="flex flex-col items-center leading-[0.85] select-none font-bold tracking-tight pointer-events-auto">
<span className="text-[13vw] sm:text-[14vw] transition-all duration-300 hover:text-[#00A3FF] active:scale-95 cursor-pointer z-30 tracking-tight drop-shadow-2xl text-white" onclick="updateHero('imagine')">IMAGINE</span>
<span className="text-[13vw] sm:text-[14vw] transition-all duration-300 hover:text-[#CCFF00] active:scale-95 cursor-pointer z-20 tracking-tight drop-shadow-2xl text-white" onclick="updateHero('build')">BUILD</span>
<span className="text-[13vw] sm:text-[14vw] transition-all duration-300 hover:text-[#FF0066] active:scale-95 cursor-pointer z-10 tracking-tight drop-shadow-2xl text-white" onclick="updateHero('deploy')">DEPLOY</span>
</h1>
</div>
<div className="absolute bottom-10 w-full text-center z-30 pointer-events-none">
<div className="flex flex-wrap justify-center gap-3 px-4">
<span className="text-xs font-medium uppercase tracking-widest border px-4 py-2 rounded-full backdrop-blur-md text-white border-white/20">Systèmes Autonomes</span>
<span className="text-xs font-medium uppercase tracking-widest border px-4 py-2 rounded-full backdrop-blur-md text-white border-white/20">Intelligence Industrielle</span>
</div>
</div>
</section>

<main className="z-20 bg-white relative">
<section className="w-full max-w-7xl mx-auto pt-20 pb-16 px-6 border-b-thick">
<div className="text-center max-w-5xl mx-auto mb-12">
<h1 className="leading-[1.05] sm:text-4xl md:text-5xl lg:text-7xl text-3xl font-extrabold tracking-tighter text-center max-w-6xl mr-auto ml-auto">
<span className="inline-block transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#1E5799] hover:via-[#7B2D8E] hover:to-[#C4388A]">Transformez</span>
<span className="inline-block transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#1E5799] hover:via-[#7B2D8E] hover:to-[#C4388A]">vos</span>
<span className="inline-block transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#1E5799] hover:via-[#7B2D8E] hover:to-[#C4388A]">idées</span>
<span className="inline-block transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#1E5799] hover:via-[#7B2D8E] hover:to-[#C4388A]">en</span>
<span className="inline-block transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#1E5799] hover:via-[#7B2D8E] hover:to-[#C4388A]">solutions</span>
<span className="inline-block transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#1E5799] hover:via-[#7B2D8E] hover:to-[#C4388A]">digitales.</span>
</h1>
<p className="text-lg md:text-xl font-light text-neutral-500 mt-6">L'intelligence artificielle au service de votre architecture.</p>
</div>

<div className="relative max-w-4xl mx-auto transition-all duration-700" id="static-composer-container">
<div className="relative rounded-3xl border border-neutral-200 bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
<textarea className="w-full min-h-[200px] bg-transparent p-8 pb-24 text-xl outline-none resize-none placeholder-neutral-400 font-light" id="main-prompt-input" placeholder="Décrivez votre projet ici..."></textarea>
<div className="absolute left-6 bottom-6 flex gap-3">
<button className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-50 border border-neutral-200 text-sm font-medium hover:bg-neutral-100 transition-colors group/btn">
<iconify-icon className="group-hover/btn:rotate-12 transition-transform" icon="solar:magic-stick-3-linear"></iconify-icon> Studio AI
                  </button>
<button className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-50 border border-neutral-200 text-sm font-medium hover:bg-neutral-100 transition-colors">
<iconify-icon icon="solar:paperclip-linear"></iconify-icon> Attach
                  </button>
</div>
<button className="absolute right-6 bottom-6 h-12 w-12 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg cursor-pointer" id="main-send-btn" onclick="sendMainPrompt()">
<iconify-icon height="24" icon="solar:arrow-up-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA] border-b-thick">
<div className="container mx-auto px-6 max-w-7xl">
<div className="mb-16">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight">Une méthode claire,<br/>portée par <span className="text-neutral-400">quatre piliers</span>.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="group h-[480px] bg-white rounded-2xl border border-neutral-200 p-8 flex flex-col justify-between hover:border-neutral-400 transition-all cursor-pointer relative overflow-hidden" onclick="openAutoModal()">
<div className="absolute inset-0 bg-gradient-to-br from-neutral-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center mb-6 bg-white group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-2">Automatisation</h3>
<p className="text-neutral-500 font-light text-sm">Agents intelligents pour tâches complexes.</p>
</div>
<div className="relative z-10 flex items-center gap-2 text-sm font-medium group-hover:text-blue-600 transition-colors">
                        Voir la démo <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
<div className="group h-[480px] bg-neutral-900 rounded-2xl border border-neutral-800 p-8 flex flex-col justify-between relative overflow-hidden text-white cursor-pointer" onclick="openPilotageModal()">
<div className="absolute inset-0 opacity-50 group-hover:scale-105 transition-transform duration-700">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7f043651-eb65-461f-a8c8-59089f883943_800w.jpg"/>
</div>
<div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full border border-white/20 bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-2">Pilotage IA</h3>
<p className="text-neutral-400 font-light text-sm">Tableaux de bord prédictifs temps réel.</p>
</div>
</div>
<div className="group h-[480px] bg-white rounded-2xl border border-neutral-200 p-8 flex flex-col justify-between hover:border-neutral-400 transition-all cursor-pointer">
<div>
<div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center mb-6 bg-white group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:gallery-wide-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-2">Génératif</h3>
<p className="text-neutral-500 font-light text-sm">Création de contenu média à l'infini.</p>
</div>
</div>
<div className="group h-[480px] bg-neutral-950 rounded-2xl border border-neutral-800 p-8 flex flex-col justify-between relative overflow-hidden text-white cursor-pointer">
<img className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9a0709be-fbd5-4705-b33d-e78a0b1dffac_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-12 h-12 rounded-full border border-white/20 bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:gamepad-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-medium tracking-tight mb-2">Gamification</h3>
<p className="text-neutral-400 font-light text-sm">Expériences immersives et engageantes.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-[#F5F5F5] border-b-thick" style={{height: '300vh'}}>
<div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<span className="text-[15vw] font-bold text-neutral-200 select-none opacity-60">MÉTHODE</span>
</div>
<div className="md:px-12 md:pb-20 w-full pt-20 pr-6 pb-20 pl-6 relative" id="pinned-stack-section">
<div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden bg-[#f2f2f2]">
<div className="flex whitespace-nowrap animate-marquee opacity-[0.05]">
<span className="text-[30vh] leading-none font-medium tracking-tight text-black mx-4 uppercase">NOTRE MÉTHODOLOGIE</span>
<span className="text-[30vh] leading-none font-medium tracking-tight text-black mx-4 uppercase">NOTRE MÉTHODOLOGIE</span>
<span className="text-[30vh] leading-none font-medium tracking-tight text-black mx-4 uppercase">NOTRE MÉTHODOLOGIE</span>
</div>
</div>
<div className="aspect-[4/5] md:aspect-[16/9] w-full max-w-5xl mx-auto mt-20 mb-20 relative" id="card-stack">
<div className="card-panel absolute inset-0 bg-white rounded-[32px] shadow-2xl overflow-hidden border border-black/5" style={{zIndex: '10'}}>
<div className="absolute inset-0">
<img alt="Scale-up" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/77ad152d-c90c-4579-a652-7ca633965aae_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90"></div>
</div>
<div className="md:p-12 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex gap-3">
<span className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-medium tracking-widest uppercase">SCALE</span>
<span className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-medium tracking-widest uppercase">2026</span>
</div>
<div className="flex flex-col md:flex-row md:items-end gap-8 justify-between">
<div className="max-w-2xl">
<h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4 tracking-tight leading-[0.95]">Déploiement à l’échelle &amp;<br/>création illimitée</h3>
<p className="text-white/80 text-lg md:text-xl font-normal leading-relaxed max-w-lg">On déploie les solutions, on accompagne la montée en charge — et on active toute la partie créative : contenus, expériences, gamification.</p>
</div>
</div>
</div>
</div>
<div className="card-panel absolute inset-0 bg-white rounded-[32px] shadow-2xl overflow-hidden border border-black/5" style={{zIndex: '10'}}>
<div className="absolute inset-0">
<img alt="Intelligence" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2c36768d-9349-490d-bc2b-428d168542d1_3840w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90"></div>
</div>
<div className="md:p-12 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex gap-3">
<span className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-medium tracking-widest uppercase">AUTOMATION</span>
<span className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-medium tracking-widest uppercase">AGENTS IA</span>
</div>
<div className="flex flex-col md:flex-row md:items-end gap-8 justify-between">
<div className="max-w-2xl">
<h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4 tracking-tight leading-[0.95]">Conception technique &amp;<br/>mise en production</h3>
<p className="text-white/80 text-lg md:text-xl font-normal leading-relaxed max-w-lg">On transforme le diagnostic métier en dispositifs concrets. Sélection des bons outils IA, intégration à vos systèmes et déploiement sécurisé.</p>
</div>
</div>
</div>
</div>
<div className="card-panel overflow-hidden bg-white border-black/5 border rounded-[32px] absolute top-0 right-0 bottom-0 left-0 shadow-2xl" style={{zIndex: '10'}}>
<div className="absolute top-0 right-0 bottom-0 left-0">
<img alt="PINGS" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/866b787c-246d-4470-8fc5-612a6c655876_1600w.jpg"/>
<div className="bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="flex flex-col md:p-12 h-full z-20 pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-end">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 w-full">
<div className="max-w-xl">
<div className="flex items-center gap-2 mb-4">
<span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white uppercase tracking-wider border border-white/20 shadow-sm">Cartographie</span>
<span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white uppercase tracking-wider border border-white/20 shadow-sm">Audit</span>
</div>
<h3 className="text-4xl md:text-5xl font-medium tracking-tight text-white leading-[1.1] mb-2">Diagnostic Métier</h3>
<p className="text-gray-300 text-base md:text-lg font-light leading-relaxed max-w-lg line-clamp-3 md:line-clamp-none">Analyse approfondie de votre production pour architecturer un écosystème créatif scalable et performant.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b-thick overflow-hidden bg-[#FAFAFA] w-full pt-24 pb-24">
<div className="px-6 mb-8 max-w-[90vw] mx-auto flex justify-between items-end">
<h2 className="text-3xl font-bold tracking-tight">Témoignages</h2>
<div className="flex gap-2">
<span className="text-xs font-mono uppercase opacity-50">Swipe pour explorer</span>
</div>
</div>
<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-8 no-scrollbar w-full">
<div className="snap-center shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] aspect-video relative rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-500">
<img alt="Showcase Visual" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/79557bf7-3c23-470d-a66c-58a818b75240_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
<div className="absolute top-6 left-6 text-white z-10">
<div className="flex items-center gap-3">
<img alt="Coach" className="w-8 h-8 object-cover bg-center border-white border-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/79557bf7-3c23-470d-a66c-58a818b75240_320w.jpg"/>
<span className="text-sm font-medium tracking-wide">Denise, Influenceuse</span>
</div>
</div>
<div className="absolute bottom-6 left-6 text-white z-10">
<p className="leading-5 text-sm font-light bg-black/30 max-w-[280px] border-white/10 border rounded-xl p-4 backdrop-blur-md">Campagne de contenu génératif à grande échelle.</p>
</div>
</div>
<div className="snap-center shrink-0 md:w-[60vw] lg:w-[45vw] aspect-video overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-500 w-[85vw] rounded-3xl relative shadow-lg">
<img alt="Industrie" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="bg-cover bg-center absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/Capture%20d%E2%80%99e%CC%81cran%202026-02-06%20a%CC%80%2013.19.58.png\')'}}>
<div className="absolute top-0 right-0 bottom-0 left-0">
<img alt="Portrait of mature butcher in workshop" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6481b3e2-9844-48f8-ad36-b3b98613e74c_1600w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
</div>
</div>
<div className="z-10 text-white absolute top-6 left-6">
<div className="flex items-center gap-3">
<div className="flex bg-blue-600 w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6481b3e2-9844-48f8-ad36-b3b98613e74c_320w.png)] bg-cover bg-center border-white border-2 rounded-full items-center justify-center"></div>
<span className="text-sm font-medium tracking-wide">Marcel, boucher</span>
</div>
</div>
<div className="absolute bottom-6 left-6 text-white z-10">
<p className="leading-5 text-sm font-extralight bg-black/30 max-w-[280px] border-white/10 border rounded-xl p-4 backdrop-blur-md">Son outil de gestion ? Son instinct, et maintenant l'IA.</p>
</div>
</div>
<div className="snap-center shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] aspect-video relative rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-500">
<img alt="Retail" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d0481816-ee3c-4221-9f44-7cc0c038bfeb_1600w.jpg"/>
<div className="bg-gradient-to-t from-black/80 via-transparent to-black/20 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-6 left-6 text-white z-10">
<div className="flex items-center gap-3">
<div className="flex bg-green-600 w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d0481816-ee3c-4221-9f44-7cc0c038bfeb_320w.jpg)] bg-cover bg-center border-white border-2 rounded-full items-center justify-center"></div>
<span className="text-sm font-medium tracking-wide">Pauline, architecte</span>
</div>
</div>
<div className="absolute bottom-6 left-6 text-white z-10">
<p className="leading-5 text-sm font-light bg-black/30 max-w-[280px] border-white/10 border rounded-xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-md">Parcours client augmenté en point de vente physique.</p>
</div>
</div>
</div>
</section>

<section className="border-b-thick overflow-hidden text-white bg-[#050505] pt-32 pr-6 pb-32 pl-6 relative">
<div className="z-10 text-center max-w-4xl mr-auto ml-auto relative">
<h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-12">Prêt à changer de dimension ?</h2>
<a className="inline-flex items-center gap-4 text-2xl md:text-3xl font-semibold hover:text-blue-500 transition-colors border-b border-white/30 pb-2 hover:border-blue-500" href="mailto:hello@pings.agency">
                Parlons de votre projet
                <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</section>

<section className="border-b-thick py-24 overflow-hidden bg-white">
<div className="sm:px-6 lg:px-8 w-full max-w-7xl mr-auto ml-auto pr-4 pl-4" style={{animation: 'fadeSlideIn 1s ease-out 0.8s both'}}>
<p className="text-sm font-medium text-gray-500 font-geist text-center mb-12 uppercase tracking-widest">Ils nous font confiance</p>
<div className="relative w-full overflow-hidden overflow-x-hidden" style={{WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'}}>
<div className="flex sm:gap-16 animate-marquee hover:[animation-play-state:paused] w-max gap-x-12 gap-y-12 items-center" style={{animation: 'scroll 20s linear infinite'}}>
<div className="group flex items-center justify-center transition-all duration-300">
<img alt="RCF" className="h-10 w-auto object-contain transition-all duration-300 hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dcfd99a6-493f-49a9-b42f-7a655fee670a_1600w.jpg"/>
</div>
<div className="group flex items-center justify-center transition-all duration-300">
<img alt="Casino" className="h-8 w-auto object-contain transition-all duration-300 hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c38bd3ab-656a-4c54-be63-c54f39511d8b_1600w.png"/>
</div>
<div className="group flex items-center justify-center transition-all duration-300">
<img alt="Media Participations" className="h-12 w-auto object-contain transition-all duration-300 hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b8b769a7-399b-4ec2-8193-8365dd76352a_1600w.jpg"/>
</div>
<div className="group flex items-center justify-center transition-all duration-300">
<img alt="BPI France" className="h-12 w-auto object-contain transition-all duration-300 hover:scale-110 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/449952eb-3558-4bac-9f16-6a4b6691c2fd_1600w.webp"/>
</div>
<div className="group flex items-center justify-center transition-all duration-300">
<img alt="Yellow Square" className="h-10 w-auto object-contain transition-all duration-300 hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dad7881e-1845-401d-af67-ee06e7f6ab07_1600w.png"/>
</div>
<div className="group flex items-center justify-center transition-all duration-300">
<img alt="Dupuis" className="h-8 w-auto object-contain transition-all duration-300 hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1d4d6f49-8883-4e48-bb84-15d0158501d8_1600w.png"/>
</div>
<div className="group flex items-center justify-center transition-all duration-300">
<img alt="Darty" className="h-10 w-auto object-contain transition-all duration-300 hover:scale-110 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f8d8317d-1621-486a-9034-9d44e72d0e20_1600w.jpg"/>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white py-16 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
<div>
<img alt="Logo" className="h-8 mb-6 opacity-30" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1fc6fbb6-3b2c-428d-97f8-edf9c8fcf554_1600w.png"/>
<p className="text-sm text-neutral-400">© 2024 PiNGs Agency. Tous droits réservés.</p>
</div>
<div className="flex gap-8">
<a className="text-neutral-500 hover:text-black" href="#">Legal</a>
<a className="text-neutral-500 hover:text-black" href="#">Twitter</a>
<a className="text-neutral-500 hover:text-black" href="#">LinkedIn</a>
</div>
</div>
</footer>
</main>



    </>
  );
}
