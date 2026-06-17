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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Custom Cursor Logic
        const cursor = document.getElementById('cursor');
        const cursorGlow = document.getElementById('cursor-glow');

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            // Glow follows with a slight delay/smoothness
            cursorGlow.animate({
                left: `${e.clientX}px`,
                top: `${e.clientY}px`
            }, { duration: 500, fill: "forwards" });
        });

        // Hide cursor when leaving window
        document.addEventListener('mouseout', () => {
            cursor.style.opacity = '0';
            cursorGlow.style.opacity = '0';
        });
        document.addEventListener('mouseover', () => {
            cursor.style.opacity = '1';
            cursorGlow.style.opacity = '1';
        });

        // Clock Update
        function updateTime() {
            const now = new Date();
            const timeString = now.toLocaleTimeString('pt-PT', { hour12: false });
            document.getElementById('time-display').innerText = `T:${timeString}`;
        }
        setInterval(updateTime, 1000);
        updateTime();

        // Terminal Logic
        const inputField = document.getElementById('terminal-input');
        const btn = document.getElementById('terminal-btn');
        const output = document.getElementById('terminal-output');

        function executeCommand() {
            const val = inputField.value.trim().toUpperCase();
            if(val === '') return;

            // Simulating system processing
            inputField.disabled = true;
            btn.disabled = true;
            btn.innerText = "RUN...";
            
            setTimeout(() => {
                output.classList.remove('hidden');
                output.classList.add('animate-pulse'); // quick flash
                setTimeout(() => output.classList.remove('animate-pulse'), 500);
                
                inputField.disabled = false;
                btn.disabled = false;
                btn.innerText = "ENTER";
                inputField.value = "";
                
                // Scroll to output
                output.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 800);
        }

        btn.addEventListener('click', executeCommand);
        inputField.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') executeCommand();
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
      

<div id="cursor"></div>
<div id="cursor-glow"></div>

<div className="fixed inset-0 bg-grid pointer-events-none -z-10"></div>
<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] bg-zinc-800/20 blur-[100px] rounded-full pointer-events-none -z-10"></div>

<header className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference pointer-events-none">
<div className="font-medium tracking-tighter text-xl text-white">RP</div>
<div className="flex flex-col items-end gap-1">
<div className="flex items-center gap-2 text-xs text-zinc-400 font-mono tracking-tight uppercase">
<div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
                System Online
            </div>
<div className="text-[0.65rem] text-zinc-600 font-mono" id="time-display"></div>
</div>
</header>

<section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 relative pt-20 pb-12 z-10">
<div className="max-w-4xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs text-zinc-400 font-mono mb-8 hover-target cursor-none">
<iconify-icon className="text-white" icon="solar:cpu-bolt-linear"></iconify-icon>
                Technology Experience Architect
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[0.9] text-white glow-text mb-8">
                Romeu <br/>
<span className="text-zinc-500">Pacheco.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-2xl mb-12">
                Construtor de tecnologia. Arquiteto de experiências. Entre código, hardware e realidade. Cria sistemas que não vivem apenas no ecrã — interagem com pessoas, espaços e emoções.
            </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
<a className="hover-target group flex items-center gap-3 text-sm font-medium tracking-tight text-black bg-white px-6 py-3 rounded-full hover:bg-zinc-200 transition-colors cursor-none" href="#experiencia">
                    Iniciar Sequência
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<span className="text-xs text-zinc-500 font-mono uppercase tracking-widest flex items-center gap-2">
<iconify-icon icon="solar:info-circle-linear"></iconify-icon>
                    Onde tecnologia é extensão humana
                </span>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 lg:px-24 z-10">
<div className="max-w-4xl">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-16 leading-tight text-zinc-300">
                Enquanto muitos digitalizam processos, <br/>
<span className="text-white glow-text">eu reinvento a experiência.</span>
</h2>
<div className="flex flex-col gap-8">

<div className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-12 border-b border-white/5 pb-8 hover-target cursor-none">
<div className="text-xs text-zinc-600 font-mono md:w-12">01</div>
<div className="text-zinc-600 line-through decoration-zinc-800 text-sm md:text-base w-48">Criar apps</div>
<iconify-icon className="text-zinc-700 hidden md:block" icon="solar:arrow-right-linear"></iconify-icon>
<div className="text-lg md:text-xl font-medium tracking-tight text-zinc-300 group-hover:text-white transition-colors">Sistemas que vivem no mundo real</div>
</div>

<div className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-12 border-b border-white/5 pb-8 hover-target cursor-none">
<div className="text-xs text-zinc-600 font-mono md:w-12">02</div>
<div className="text-zinc-600 line-through decoration-zinc-800 text-sm md:text-base w-48">Pensar em features</div>
<iconify-icon className="text-zinc-700 hidden md:block" icon="solar:arrow-right-linear"></iconify-icon>
<div className="text-lg md:text-xl font-medium tracking-tight text-zinc-300 group-hover:text-white transition-colors">Pensar em impacto e narrativa</div>
</div>

<div className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-12 pb-8 hover-target cursor-none">
<div className="text-xs text-zinc-600 font-mono md:w-12">03</div>
<div className="text-zinc-600 line-through decoration-zinc-800 text-sm md:text-base w-48">Acompanhar o futuro</div>
<iconify-icon className="text-zinc-700 hidden md:block" icon="solar:arrow-right-linear"></iconify-icon>
<div className="text-lg md:text-xl font-medium tracking-tight text-zinc-300 group-hover:text-white transition-colors">Construir o ambiente onde ele acontece</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 lg:px-24 z-10">
<div className="mb-12 flex items-center justify-between">
<h2 className="text-2xl font-medium tracking-tighter">O Ecossistema.</h2>
<div className="h-px bg-white/10 flex-grow ml-8"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="glass-panel rounded-3xl p-8 md:col-span-2 flex flex-col justify-between hover-target cursor-none group">
<div className="flex justify-between items-start mb-12">
<div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
<iconify-icon className="text-xl text-white" icon="solar:box-minimalistic-linear"></iconify-icon>
</div>
<div className="text-xs text-zinc-500 font-mono">STATUS: ATIVO</div>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight mb-3">Liderança &amp; Produto</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed max-w-lg">
                        Cofundador da <span className="text-white font-medium">Lokk</span>, uma das soluções mais avançadas do mundo em smart lockers. Lidera a <span className="text-white font-medium">Purple Profile</span>, desenvolvendo produtos digitais inovadores com escala global.
                    </p>
</div>
</div>

<div className="glass-panel rounded-3xl p-8 flex flex-col justify-between hover-target cursor-none group">
<div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-12">
<iconify-icon className="text-xl text-zinc-400 group-hover:text-white transition-colors" icon="solar:programming-linear"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight mb-2">IA + Mundo Físico</h3>
<p className="text-sm text-zinc-500 font-light">Inteligência artificial aplicada a interfaces tangíveis e ambientes inteligentes.</p>
</div>
</div>

<div className="glass-panel rounded-3xl p-8 flex flex-col justify-between hover-target cursor-none group">
<div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-12">
<iconify-icon className="text-xl text-zinc-400 group-hover:text-white transition-colors" icon="solar:server-minimalistic-linear"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight mb-2">Cloud Distribuída</h3>
<p className="text-sm text-zinc-500 font-light">Arquiteturas robustas que ligam o software à infraestrutura física com latência zero.</p>
</div>
</div>

<div className="glass-panel rounded-3xl p-8 flex flex-col justify-between hover-target cursor-none group">
<div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-12">
<iconify-icon className="text-xl text-zinc-400 group-hover:text-white transition-colors" icon="solar:user-speak-rounded-linear"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight mb-2">Engenharia Emocional</h3>
<p className="text-sm text-zinc-500 font-light">Sistemas que reconhecem e reagem ao humano, criando uma ligação real.</p>
</div>
</div>

<div className="glass-panel rounded-3xl p-8 flex flex-col justify-center items-center text-center hover-target cursor-none group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
<div className="text-xs font-mono text-zinc-500 mb-2 z-10">IN DEVELOPMENT</div>
<h3 className="text-2xl font-medium tracking-tighter text-white z-10">SCI Interface</h3>
<p className="text-xs text-zinc-500 mt-2 z-10">Smart City Interface Protocol</p>
</div>
</div>
</section>

<section className="py-32 px-6 flex justify-center items-center relative z-10" id="experiencia">
<div className="w-full max-w-2xl glass-panel rounded-2xl overflow-hidden shadow-2xl shadow-black/50">

<div className="bg-zinc-900/80 px-4 py-3 border-b border-white/5 flex items-center justify-between">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="text-xs font-mono text-zinc-500">experiencia.exe</div>
<div className="w-4 h-4"></div> 
</div>

<div className="p-6 md:p-8">
<div className="text-sm font-mono text-zinc-400 mb-6">
<p className="mb-1">&gt; Conectando ao servidor principal...</p>
<p className="mb-4">&gt; Conexão estabelecida. Sistema aguardando input.</p>
<p className="text-zinc-300">Queres ver o futuro ou queres construí-lo?</p>
</div>
<div className="flex items-center gap-3 bg-black/50 border border-white/10 rounded-lg p-1 focus-within:border-white/30 transition-colors">
<span className="text-zinc-500 font-mono pl-3">RP:~#</span>
<input autocomplete="off" className="bg-transparent text-white text-sm font-mono outline-none w-full py-2 placeholder:text-zinc-700 hover-target cursor-none" id="terminal-input" placeholder="Insere comando (ex: CONSTRUIR)" type="text"/>
<button className="bg-white/10 hover:bg-white/20 text-white text-xs font-mono px-4 py-2 rounded-md transition-colors hover-target cursor-none" id="terminal-btn">ENTER</button>
</div>

<div className="hidden mt-6 border-t border-white/10 pt-6" id="terminal-output">
<div className="relative overflow-hidden mb-4">
<div className="loader-line"></div>
</div>
<div className="flex flex-col gap-3">
<div className="flex items-start gap-3 text-sm text-zinc-300 font-light">
<iconify-icon className="text-green-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<p>Acesso concedido. Bem-vindo à camada de arquitetura.</p>
</div>
<div className="bg-white/5 border border-white/10 rounded-lg p-4 mt-2">
<p className="text-xs font-mono text-zinc-400 mb-2 uppercase tracking-widest border-b border-white/10 pb-2">Manifesto Desbloqueado</p>
<p className="text-sm text-zinc-300 leading-relaxed font-light">
                                "A tecnologia deixou de ser uma ferramenta. É o ambiente onde respiramos. Os sistemas de amanhã não vão precisar de ecrãs para funcionar; vão viver nas paredes, nos objetos, nos espaços. O meu trabalho é escrever o código que dá alma a esse mundo físico."
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 flex justify-center items-center text-center z-10 border-t border-white/5">
<h2 className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-tighter max-w-4xl leading-[1.1]">
            "Nunca foi tão fácil criar algo impossível. <br/>
<span className="text-zinc-600">A IA não substitui pessoas — substitui limitações."</span>
</h2>
</section>

<footer className="py-8 px-6 text-center text-xs text-zinc-600 font-mono flex flex-col md:flex-row justify-between items-center gap-4 z-10 bg-black">
<div>© Romeu Pacheco. Todos os sistemas operacionais.</div>
<div className="flex gap-4">
<a className="hover:text-white transition-colors hover-target cursor-none" href="#">LINKEDIN</a>
<a className="hover:text-white transition-colors hover-target cursor-none" href="#">GITHUB</a>
<a className="hover:text-white transition-colors hover-target cursor-none" href="#">EMAIL</a>
</div>
</footer>



    </>
  );
}
