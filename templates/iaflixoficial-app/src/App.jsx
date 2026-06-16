import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
mono: ['"JetBrains Mono"', 'monospace'],
},
colors: {
canvas: '#FAFAFA',
surface: '#FFFFFF',
obsidian: '#0A0A0A',
charcoal: '#262626',
subtle: '#737373',
border: '#E5E5E5',
accent: '#171717',
},
letterSpacing: {
tight: '-0.025em',
tighter: '-0.04em',
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



          (function(){const section=document.getElementById('jornada-aluno');const line=document.getElementById('lifecycle-line');const steps=section.querySelectorAll('.lifecycle-step');function handleScroll(){if(!section)return;const rect=section.getBoundingClientRect();const viewH=window.innerHeight;const travelDistance=rect.height-viewH;const scrolled=-rect.top;let progress=scrolled/travelDistance;progress=Math.max(0,Math.min(1,progress));if(line) line.style.height=(progress*100)+'%';steps.forEach(step=>{const t=parseFloat(step.dataset.threshold);if(progress>=t){if(progress<t+0.2){step.classList.add('active');step.classList.replace('opacity-30','opacity-100');step.style.transform='scale(1.02)';}else{step.classList.add('active');step.classList.replace('opacity-30','opacity-50');step.style.transform='scale(1)';}}else{step.classList.remove('active');step.classList.replace('opacity-100','opacity-30');step.classList.replace('opacity-50','opacity-30');step.style.transform='scale(1)';}});};window.addEventListener('scroll',handleScroll,{passive:true});handleScroll();})();
        


      const container = document.getElementById('canvas-container');
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Performance opt
      container.appendChild(renderer.domElement);

      // Create Particle Field
      // Reduce particle count on mobile for better performance
      const isMobile = window.innerWidth < 768;
      const count = isMobile ? 600 : 1200; 
      const posArray = new Float32Array(count * 3);
      
      for(let i = 0; i < count * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 15; // Spread
      }
      
      geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      
      const material = new THREE.PointsMaterial({
        size: 0.02,
        color: 0x111111,
        transparent: true,
        opacity: 0.8,
      });
      
      const particlesMesh = new THREE.Points(geometry, material);
      scene.add(particlesMesh);
      
      camera.position.z = 3;

      // Mouse Interaction
      let mouseX = 0;
      let mouseY = 0;
      
      document.addEventListener('mousemove', (event) => {
        mouseX = event.clientX / window.innerWidth - 0.5;
        mouseY = event.clientY / window.innerHeight - 0.5;
      });

      // Animate
      const clock = new THREE.Clock();

      const animate = () => {
        const elapsedTime = clock.getElapsedTime();
        
        // Gentle rotation
        particlesMesh.rotation.y = elapsedTime * 0.05;
        
        // Only apply mouse rotation if not on mobile (avoids jerky touch scrolling)
        if(!isMobile) {
            particlesMesh.rotation.x = -mouseY * 0.2;
            particlesMesh.rotation.y += mouseX * 0.2;
        }

        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      }
      
      animate();

      // Resize Handle
      window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="noise-overlay"></div>

<div className="fixed inset-0 z-0 technical-grid pointer-events-none opacity-60"></div>
<div className="fixed inset-0 z-0 opacity-100 mix-blend-multiply" id="canvas-container"></div>

<header className="fixed top-0 left-0 right-0 z-50 w-full px-4 py-3 md:px-12 md:py-4 flex justify-between items-center bg-canvas/80 backdrop-blur-xl border-b border-black/5 transition-all duration-300">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 md:w-9 md:h-9 bg-obsidian text-white flex items-center justify-center rounded-lg shadow-lg shadow-obsidian/10">
<iconify-icon height="20" icon="solar:cpu-bolt-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="font-sans text-sm font-bold tracking-tight text-obsidian">
          IAFLIX
        </span>
</div>
<nav className="hidden md:flex items-center gap-1">
<a className="font-sans text-xs font-medium text-subtle hover:text-obsidian px-4 py-2 rounded-full hover:bg-black/5 transition-all" href="#modulos">
          Módulos
        </a>
<a className="font-sans text-xs font-medium text-subtle hover:text-obsidian px-4 py-2 rounded-full hover:bg-black/5 transition-all" href="#jornada-aluno">
          A Jornada
        </a>
<a className="font-sans text-xs font-medium text-subtle hover:text-obsidian px-4 py-2 rounded-full hover:bg-black/5 transition-all" href="#garantia">
          Garantia
        </a>
</nav>
<div className="flex items-center gap-4">
<a className="group relative isolate overflow-hidden bg-obsidian text-white text-[11px] md:text-xs font-semibold px-4 py-2 md:px-5 md:py-2.5 rounded-lg shadow-lg shadow-obsidian/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]" href="#oferta">
<div className="btn-shimmer-layer absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent z-10"></div>
<span className="relative z-20 flex items-center gap-1.5 md:gap-2">
            Garantir Vaga
            <iconify-icon className="hidden sm:inline-block" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</span>
</a>
</div>
</header>

<div className="z-10 flex flex-col w-full relative">

<section className="relative min-h-[90vh] flex flex-col lg:flex-row items-center justify-between px-4 md:px-12 lg:px-20 pt-28 pb-16 md:pt-32 md:pb-20 gap-12 md:gap-16 overflow-hidden">

<div className="w-full max-w-2xl space-y-8 md:space-y-10 relative z-10">
<div className="space-y-5 md:space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-black/5 shadow-sm animate-fade-in-up self-start">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="font-sans text-[10px] md:text-[11px] font-medium text-subtle tracking-tight uppercase">
                Vagas abertas para nova turma
              </span>
</div>
<h1 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-semibold tracking-tighter text-obsidian leading-[1.1] md:leading-[1.05]">
              Capacitação Profissional em Inteligência Artificial para o
              <span className="shimmer-text relative inline-block mt-1 md:mt-2">
                Novo Mercado Digital.
                <svg className="absolute w-full h-2 md:h-3 -bottom-1 left-0 text-emerald-500/20" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path>
</svg>
</span>
</h1>
<p className="max-w-lg font-sans text-sm md:text-base text-subtle font-medium leading-relaxed">
              Aprenda como criar, automatizar e monetizar usando Inteligência Artificial — mesmo sem conhecimento técnico.
            </p>
</div>
<div className="flex flex-col gap-4">
<div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
<a className="group h-12 w-full sm:w-auto justify-center px-8 rounded-lg bg-obsidian text-white text-sm font-semibold flex items-center gap-3 shadow-xl shadow-obsidian/20 transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-obsidian/30" href="#oferta">
                Desbloquear Acesso Vitalício
                <iconify-icon className="group-hover:text-emerald-400 transition-colors" icon="solar:lock-unlocked-linear" width="18"></iconify-icon>
</a>
<div className="flex items-center justify-center sm:justify-start gap-3 text-[11px] md:text-xs font-medium text-subtle">
<div className="flex -space-x-2">
<img alt="Aluno" className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-canvas bg-white" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
<img alt="Aluno" className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-canvas bg-white" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ane"/>
<img alt="Aluno" className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-canvas bg-white" src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"/>
</div>
<span>+1.200 alunos formados</span>
</div>
</div>

<div className="text-[10px] md:text-[11px] font-medium text-subtle pl-1 flex flex-wrap gap-1 items-center justify-center sm:justify-start">
<span className="line-through opacity-60">Formação avaliada em R$1.997</span>
<span className="text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100 whitespace-nowrap">Disponível hoje por R$497</span>
</div>
</div>
</div>

<div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg aspect-square lg:aspect-[4/3] flex items-center justify-center perspective-1000 mx-auto lg:mx-0">

<div className="absolute inset-0 bg-gradient-radial from-emerald-500/10 to-transparent blur-3xl transform translate-y-10"></div>
<div className="w-full h-full bg-white/60 backdrop-blur-md border border-white/40 shadow-2xl shadow-black/5 rounded-2xl p-1 relative overflow-hidden transition-transform duration-700 hover:rotate-1 hover:scale-[1.01]">
<div className="absolute inset-0 bg-gradient-to-br from-white via-white/50 to-transparent opacity-80"></div>
<div className="relative h-full w-full bg-white rounded-xl border border-black/5 overflow-hidden flex flex-col">

<div className="h-8 md:h-10 border-b border-black/5 flex items-center px-3 md:px-4 justify-between bg-slate-50/50">
<div className="flex gap-1.5">
<div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-subtle/20"></div>
<div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-subtle/20"></div>
<div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-subtle/20"></div>
</div>
<div className="text-[9px] md:text-[10px] text-subtle font-mono opacity-50">iaflix_dashboard.exe</div>
</div>

<div className="flex-1 p-4 md:p-6 flex flex-col items-center justify-center relative">

<svg className="w-full h-full drop-shadow-sm" viewbox="0 0 300 200">

<path className="animate-pulse" d="M150 100 L80 60" stroke="#E5E5E5" stroke-dasharray="4 4" strokeWidth="1.5"></path>
<path d="M150 100 L220 60" stroke="#E5E5E5" stroke-dasharray="4 4" strokeWidth="1.5"></path>
<path d="M150 100 L80 140" stroke="#E5E5E5" stroke-dasharray="4 4" strokeWidth="1.5"></path>
<path d="M150 100 L220 140" stroke="#E5E5E5" stroke-dasharray="4 4" strokeWidth="1.5"></path>

<circle cx="150" cy="100" fill="#0A0A0A" r="25"></circle>
<g transform="translate(138, 88)">
<iconify-icon height="24" icon="solar:bolt-bold" style={{color: 'white'}} width="24"></iconify-icon>
</g>

<rect fill="white" height="30" rx="6" stroke="#E5E5E5" width="60" x="50" y="45"></rect>
<text fill="#555" fontFamily="sans-serif" fontSize="8" font-weight="600" text-anchor="middle" x="80" y="63">INPUT</text>
<rect fill="white" height="30" rx="6" stroke="#E5E5E5" width="60" x="190" y="45"></rect>
<text fill="#555" fontFamily="sans-serif" fontSize="8" font-weight="600" text-anchor="middle" x="220" y="63">ANALYSIS</text>
<rect fill="white" height="30" rx="6" stroke="#E5E5E5" width="60" x="50" y="125"></rect>
<text fill="#555" fontFamily="sans-serif" fontSize="8" font-weight="600" text-anchor="middle" x="80" y="143">ACTION</text>
<rect fill="#171717" height="30" rx="6" width="60" x="190" y="125"></rect>
<text fill="white" fontFamily="sans-serif" fontSize="8" font-weight="600" text-anchor="middle" x="220" y="143">PROFIT</text>

<circle fill="#10B981" r="3">
<animatemotion dur="2s" path="M80 60 L150 100 L220 140" repeatcount="indefinite"></animatemotion>
</circle>
</svg>
<div className="absolute bottom-4 left-0 right-0 text-center">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 text-[9px] md:text-[10px] font-bold tracking-wide border border-emerald-100">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        SYSTEM ACTIVE
                    </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-black/5 py-8 md:py-12 bg-white/50 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-4 md:px-6 overflow-hidden relative">
<div className="flex items-center gap-10 md:gap-16 animate-marquee whitespace-nowrap opacity-50 hover:opacity-100 transition-opacity duration-500">
<span className="text-lg md:text-xl font-bold tracking-tighter flex items-center gap-2"><iconify-icon icon="solar:chat-round-linear"></iconify-icon> ChatGPT</span>
<span className="text-lg md:text-xl font-bold tracking-tighter flex items-center gap-2"><iconify-icon icon="solar:gallery-wide-linear"></iconify-icon> Midjourney</span>
<span className="text-lg md:text-xl font-bold tracking-tighter flex items-center gap-2"><iconify-icon icon="solar:round-transfer-horizontal-linear"></iconify-icon> Make.com</span>
<span className="text-lg md:text-xl font-bold tracking-tighter flex items-center gap-2"><iconify-icon icon="solar:code-circle-linear"></iconify-icon> Claude</span>
<span className="text-lg md:text-xl font-bold tracking-tighter flex items-center gap-2"><iconify-icon icon="solar:magic-stick-linear"></iconify-icon> Leonardo.ai</span>
<span className="text-lg md:text-xl font-bold tracking-tighter flex items-center gap-2"><iconify-icon icon="solar:chat-round-linear"></iconify-icon> ChatGPT</span>
<span className="text-lg md:text-xl font-bold tracking-tighter flex items-center gap-2"><iconify-icon icon="solar:gallery-wide-linear"></iconify-icon> Midjourney</span>
<span className="text-lg md:text-xl font-bold tracking-tighter flex items-center gap-2"><iconify-icon icon="solar:round-transfer-horizontal-linear"></iconify-icon> Make.com</span>
</div>
<div className="absolute inset-y-0 left-0 w-12 md:w-20 bg-gradient-to-r from-canvas to-transparent"></div>
<div className="absolute inset-y-0 right-0 w-12 md:w-20 bg-gradient-to-l from-canvas to-transparent"></div>
</div>
</section>

<section className="relative w-full bg-canvas border-b border-black/5" id="jornada-aluno" style={{height: '350vh'}}>
<div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center">
<div className="max-w-3xl w-full px-4 md:px-12 relative z-10 flex flex-col items-center h-full py-16 md:py-20">
<div className="text-center mb-10 md:mb-16 shrink-0 transition-opacity duration-500 px-4" id="lifecycle-header">
<h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-semibold text-obsidian tracking-tight mb-2 md:mb-3">
                Como Funciona
              </h2>
<p className="text-subtle text-xs md:text-sm max-w-sm mx-auto">
                Um caminho estruturado para sair do zero e se tornar um especialista requisitado.
              </p>
</div>
<div className="relative w-full max-w-xl flex-1 flex flex-col justify-center my-auto px-2 md:px-0">

<div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2"></div>
<div className="absolute left-[20px] md:left-1/2 top-0 w-px bg-obsidian md:-translate-x-1/2 transition-all duration-100 ease-linear h-0 shadow-[0_0_10px_rgba(0,0,0,0.2)]" id="lifecycle-line"></div>
<div className="space-y-12 md:space-y-20 py-8 relative">

<div className="lifecycle-step group flex flex-col md:flex-row items-start md:items-center justify-between w-full opacity-30 transition-all duration-500" data-threshold="0.1">
<div className="w-full md:w-[45%] md:text-right md:pr-10 pl-14 md:pl-0 order-2 md:order-1 mt-1 md:mt-0">
<span className="font-mono text-[9px] md:text-[10px] text-emerald-600 font-bold uppercase tracking-wider mb-1 block">Etapa 01</span>
<h3 className="font-sans text-base md:text-lg font-semibold text-obsidian">Acesse a plataforma</h3>
<p className="text-xs text-subtle mt-1">Sua jornada começa no nosso ambiente completo de capacitação.</p>
</div>
<div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 flex items-start md:items-center justify-center order-1 md:order-2">
<div className="step-dot w-3 h-3 rounded-full bg-canvas border-2 border-border transition-all duration-300 mt-1 md:mt-0"></div>
</div>
<div className="hidden md:block w-[45%] pl-10 order-3">
<iconify-icon className="text-3xl text-subtle/50" icon="solar:book-bookmark-linear"></iconify-icon>
</div>
</div>

<div className="lifecycle-step group flex flex-col md:flex-row items-start md:items-center justify-between w-full opacity-30 transition-all duration-500" data-threshold="0.35">
<div className="hidden md:block w-[45%] text-right pr-10 order-1">
<iconify-icon className="text-3xl text-subtle/50" icon="solar:command-linear"></iconify-icon>
</div>
<div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 flex items-start md:items-center justify-center order-1 md:order-2">
<div className="step-dot w-3 h-3 rounded-full bg-canvas border-2 border-border transition-all duration-300 mt-1 md:mt-0"></div>
</div>
<div className="w-full md:w-[45%] pl-14 md:pl-10 order-2 md:order-3 mt-1 md:mt-0">
<span className="font-mono text-[9px] md:text-[10px] text-emerald-600 font-bold uppercase tracking-wider mb-1 block">Etapa 02</span>
<h3 className="font-sans text-base md:text-lg font-semibold text-obsidian">Siga a trilha estruturada</h3>
<p className="text-xs text-subtle mt-1">Módulos focados no que realmente importa, direto ao ponto.</p>
</div>
</div>

<div className="lifecycle-step group flex flex-col md:flex-row items-start md:items-center justify-between w-full opacity-30 transition-all duration-500" data-threshold="0.6">
<div className="w-full md:w-[45%] md:text-right md:pr-10 pl-14 md:pl-0 order-2 md:order-1 mt-1 md:mt-0">
<span className="font-mono text-[9px] md:text-[10px] text-emerald-600 font-bold uppercase tracking-wider mb-1 block">Etapa 03</span>
<h3 className="font-sans text-base md:text-lg font-semibold text-obsidian">Aplique em cenários reais</h3>
<p className="text-xs text-subtle mt-1">Da criação de conteúdo à engenharia de prompts avançada e agentes.</p>
</div>
<div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 flex items-start md:items-center justify-center order-1 md:order-2">
<div className="step-dot w-3 h-3 rounded-full bg-canvas border-2 border-border transition-all duration-300 mt-1 md:mt-0"></div>
</div>
<div className="hidden md:block w-[45%] pl-10 order-3">
<iconify-icon className="text-3xl text-subtle/50" icon="solar:bolt-circle-linear"></iconify-icon>
</div>
</div>

<div className="lifecycle-step group flex flex-col md:flex-row items-start md:items-center justify-between w-full opacity-30 transition-all duration-500" data-threshold="0.85">
<div className="hidden md:block w-[45%] text-right pr-10 order-1">
<iconify-icon className="text-3xl text-subtle/50" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 flex items-start md:items-center justify-center order-1 md:order-2">
<div className="step-dot w-3 h-3 rounded-full bg-canvas border-2 border-border transition-all duration-300 mt-1 md:mt-0"></div>
</div>
<div className="w-full md:w-[45%] pl-14 md:pl-10 order-2 md:order-3 mt-1 md:mt-0">
<span className="font-mono text-[9px] md:text-[10px] text-emerald-600 font-bold uppercase tracking-wider mb-1 block">Etapa 04</span>
<h3 className="font-sans text-base md:text-lg font-semibold text-obsidian">Automatize ou monetize</h3>
<p className="text-xs text-subtle mt-1">Construa sistemas escaláveis e crie ativos digitais valiosos.</p>
</div>
</div>
</div>
</div>
</div>
</div>

</section>

<section className="py-20 md:py-32 px-4 md:px-12 lg:px-20 bg-canvas" id="modulos">
<div className="max-w-7xl mx-auto">
<div className="mb-10 md:mb-16 text-left md:text-center max-w-2xl mx-auto">
<h2 className="font-sans text-3xl md:text-4xl font-semibold text-obsidian tracking-tight mb-3 md:mb-4">
              O Arsenal Completo
            </h2>
<p className="text-subtle text-sm md:text-base">
              Nossa metodologia é dividida em módulos práticos, direto ao ponto. Sem teoria chata, apenas aplicação real.
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[auto] md:auto-rows-[300px]">

<div className="md:col-span-2 row-span-1 group relative bg-white border border-border rounded-2xl overflow-hidden hover:border-obsidian/20 transition-all duration-500 shadow-sm hover:shadow-xl">
<div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="p-6 md:p-8 h-full flex flex-col justify-between relative z-10">
<div>
<div className="w-10 h-10 bg-canvas border border-border rounded-lg flex items-center justify-center mb-4 text-obsidian">
<iconify-icon icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-obsidian mb-2">Prompt Engineering Masterclass</h3>
<p className="text-sm text-subtle max-w-sm">Aprenda a estruturar comandos complexos, criar personas e extrair 100% do potencial do GPT-4 e Claude 3.</p>
</div>
<div className="w-full bg-obsidian rounded-lg p-4 mt-6 md:mt-4 transform group-hover:translate-y-1 md:group-hover:translate-y-2 transition-transform">
<div className="flex gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
</div>
<div className="font-mono text-[9px] sm:text-[10px] text-white/70 overflow-hidden text-ellipsis whitespace-nowrap">
                     &gt; /imagine prompt: estratégia de marketing viral...
                   </div>
</div>
</div>
</div>

<div className="md:col-span-1 row-span-1 md:row-span-2 group relative bg-obsidian border border-obsidian rounded-2xl overflow-hidden shadow-2xl">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="p-6 md:p-8 h-full flex flex-col relative z-10">
<div className="w-10 h-10 bg-white/10 border border-white/10 rounded-lg flex items-center justify-center mb-4 text-white">
<iconify-icon icon="solar:graph-up-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-white mb-2">Monetização &amp; Carreira</h3>
<p className="text-sm text-white/60 mb-6 md:mb-8">Estratégias para vender serviços de IA, criar produtos digitais e aumentar seu valor de mercado.</p>
<div className="mt-auto space-y-3">
<div className="flex items-center justify-between p-3 bg-white/5 rounded border border-white/10">
<span className="text-xs text-white/80">Consultoria IA</span>
<span className="text-xs font-mono text-emerald-400">R$ 5k+</span>
</div>
<div className="flex items-center justify-between p-3 bg-white/5 rounded border border-white/10">
<span className="text-xs text-white/80">Automação</span>
<span className="text-xs font-mono text-emerald-400">R$ 3k+</span>
</div>
</div>
</div>
</div>

<div className="md:col-span-1 row-span-1 group relative bg-white border border-border rounded-2xl overflow-hidden hover:border-obsidian/20 transition-all duration-500 shadow-sm hover:shadow-xl">
<div className="p-6 md:p-8 h-full flex flex-col relative z-10 min-h-[200px] md:min-h-0">
<div className="w-10 h-10 bg-canvas border border-border rounded-lg flex items-center justify-center mb-4 text-obsidian">
<iconify-icon icon="solar:layers-minimalistic-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-obsidian mb-2">Automação No-Code</h3>
<p className="text-xs text-subtle">Integre IA com WhatsApp, Email e Planilhas usando Make e Zapier.</p>
<div className="mt-auto flex justify-end pt-4">
<iconify-icon className="text-2xl text-subtle group-hover:text-obsidian transition-colors" icon="solar:arrow-right-circle-linear"></iconify-icon>
</div>
</div>
</div>

<div className="md:col-span-1 row-span-1 group relative bg-white border border-border rounded-2xl overflow-hidden hover:border-obsidian/20 transition-all duration-500 shadow-sm hover:shadow-xl">
<div className="p-6 md:p-8 h-full flex flex-col relative z-10 min-h-[200px] md:min-h-0">
<div className="w-10 h-10 bg-canvas border border-border rounded-lg flex items-center justify-center mb-4 text-obsidian">
<iconify-icon icon="solar:gallery-edit-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-obsidian mb-2">IA Criativa</h3>
<p className="text-xs text-subtle">Geração de imagens, vídeos e áudio de nível cinematográfico.</p>
<div className="mt-auto w-full h-10 md:h-12 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg pt-4"></div>
</div>
</div>
</div>

<div className="mt-16 md:mt-24 border-t border-black/5 pt-12 md:pt-20">
<div className="mb-8 md:mb-12 text-left md:text-center">
<h3 className="font-sans text-xl sm:text-2xl font-semibold text-obsidian tracking-tight">Uma verdadeira atualização profissional</h3>
<p className="text-xs sm:text-sm text-subtle mt-2">Um ambiente completo de capacitação com tudo o que você precisa dominar.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">

<div className="flex items-center gap-3"><iconify-icon className="text-emerald-500 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon><span className="text-sm text-obsidian font-medium">Criação de conteúdo com IA</span></div>
<div className="flex items-center gap-3"><iconify-icon className="text-emerald-500 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon><span className="text-sm text-obsidian font-medium">Automação de tarefas do dia a dia</span></div>
<div className="flex items-center gap-3"><iconify-icon className="text-emerald-500 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon><span className="text-sm text-obsidian font-medium">Construção de agentes inteligentes</span></div>
<div className="flex items-center gap-3"><iconify-icon className="text-emerald-500 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon><span className="text-sm text-obsidian font-medium">Engenharia de Prompts</span></div>
<div className="flex items-center gap-3"><iconify-icon className="text-emerald-500 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon><span className="text-sm text-obsidian font-medium">Automação de funis e fluxos</span></div>
<div className="flex items-center gap-3"><iconify-icon className="text-emerald-500 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon><span className="text-sm text-obsidian font-medium">Automação para redes sociais</span></div>
<div className="flex items-center gap-3"><iconify-icon className="text-emerald-500 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon><span className="text-sm text-obsidian font-medium">Estratégias de monetização digital</span></div>
<div className="flex items-center gap-3"><iconify-icon className="text-emerald-500 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon><span className="text-sm text-obsidian font-medium">Criação de produtos digitais</span></div>
<div className="flex items-center gap-3"><iconify-icon className="text-emerald-500 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon><span className="text-sm text-obsidian font-medium">Integração entre ferramentas</span></div>
<div className="flex items-center gap-3"><iconify-icon className="text-emerald-500 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon><span className="text-sm text-obsidian font-medium">Organização e extração de dados</span></div>
<div className="flex items-center gap-3"><iconify-icon className="text-emerald-500 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon><span className="text-sm text-obsidian font-medium">Aplicação de IA em marketing e vendas</span></div>
<div className="flex items-center gap-3"><iconify-icon className="text-emerald-500 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon><span className="text-sm text-obsidian font-medium">Interfaces multimodais</span></div>
<div className="flex items-center gap-3"><iconify-icon className="text-emerald-500 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon><span className="text-sm text-obsidian font-medium">Construção de sistemas escaláveis</span></div>
<div className="flex items-center gap-3"><iconify-icon className="text-emerald-500 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon><span className="text-sm text-obsidian font-medium">Automação de processos de negócio</span></div>
<div className="flex items-center gap-3"><iconify-icon className="text-emerald-500 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon><span className="text-sm text-obsidian font-medium">Criação de ativos digitais com IA</span></div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-4 md:px-12 lg:px-20 bg-canvas border-t border-black/5" id="para-quem-e">
<div className="max-w-7xl mx-auto">
<div className="mb-10 md:mb-16 text-left md:text-center max-w-2xl mx-auto">
<h2 className="font-sans text-3xl md:text-4xl font-semibold text-obsidian tracking-tight mb-4">
              Para Quem é o IAFLIX?
            </h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
<div className="p-5 md:p-6 bg-white border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-canvas border border-border flex items-center justify-center mb-3 md:mb-4"><iconify-icon className="text-obsidian text-lg" icon="solar:wallet-money-linear"></iconify-icon></div>
<p className="text-sm font-semibold text-obsidian">Pessoas que querem gerar renda com IA</p>
</div>
<div className="p-5 md:p-6 bg-white border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-canvas border border-border flex items-center justify-center mb-3 md:mb-4"><iconify-icon className="text-obsidian text-lg" icon="solar:diagram-up-linear"></iconify-icon></div>
<p className="text-sm font-semibold text-obsidian">Empreendedores que querem automatizar operações</p>
</div>
<div className="p-5 md:p-6 bg-white border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-canvas border border-border flex items-center justify-center mb-3 md:mb-4"><iconify-icon className="text-obsidian text-lg" icon="solar:shield-user-linear"></iconify-icon></div>
<p className="text-sm font-semibold text-obsidian">Profissionais que querem se manter relevantes</p>
</div>
<div className="p-5 md:p-6 bg-white border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-canvas border border-border flex items-center justify-center mb-3 md:mb-4"><iconify-icon className="text-obsidian text-lg" icon="solar:pen-new-square-linear"></iconify-icon></div>
<p className="text-sm font-semibold text-obsidian">Criadores que querem produzir mais rápido</p>
</div>
<div className="p-5 md:p-6 bg-white border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-canvas border border-border flex items-center justify-center mb-3 md:mb-4"><iconify-icon className="text-obsidian text-lg" icon="solar:laptop-minimalistic-linear"></iconify-icon></div>
<p className="text-sm font-semibold text-obsidian">Freelancers que querem oferecer novos serviços</p>
</div>
<div className="p-5 md:p-6 bg-white border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-canvas border border-border flex items-center justify-center mb-3 md:mb-4"><iconify-icon className="text-obsidian text-lg" icon="solar:routing-2-linear"></iconify-icon></div>
<p className="text-sm font-semibold text-obsidian">Iniciantes que querem começar do zero</p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-4 md:px-12 bg-white relative overflow-hidden" id="oferta">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[300px] md:h-[500px] bg-gradient-radial from-black/5 to-transparent opacity-50 pointer-events-none"></div>
<div className="max-w-4xl mx-auto relative z-10">

<div className="bg-obsidian rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl pricing-glow flex flex-col md:flex-row min-h-auto md:min-h-[500px]">

<div className="w-full md:w-3/5 p-6 sm:p-8 md:p-12 relative flex flex-col justify-between">

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
<div className="relative z-10">
<div className="inline-block px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full mb-4 md:mb-6">
<span className="text-emerald-400 text-[9px] md:text-[10px] font-bold uppercase tracking-widest">Oferta Exclusiva</span>
</div>
<h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">Acesso Vitalício <span className="text-white/40 block sm:inline">IAFLIX</span></h3>
<p className="text-white/60 text-xs md:text-sm mb-8 md:mb-10">Tudo o que você precisa para dominar a IA, em um único lugar.</p>
<ul className="space-y-4">
<li className="flex items-start gap-3 md:gap-4">
<div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon className="text-emerald-400 text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
<div>
<span className="text-white text-sm font-medium block">Formação Completa (Básico ao Avançado)</span>
<span className="text-white/40 text-xs">Todos os 8 módulos liberados imediatamente.</span>
</div>
</li>
<li className="flex items-start gap-3 md:gap-4">
<div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon className="text-emerald-400 text-xs" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<div>
<span className="text-white text-sm font-medium block">Comunidade VIP no Discord</span>
<span className="text-white/40 text-xs">Networking com especialistas e alunos.</span>
</div>
</li>
<li className="flex items-start gap-3 md:gap-4">
<div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon className="text-emerald-400 text-xs" icon="solar:refresh-circle-linear"></iconify-icon>
</div>
<div>
<span className="text-white text-sm font-medium block">Atualizações Mensais</span>
<span className="text-white/40 text-xs">Novas aulas sempre que uma IA for lançada.</span>
</div>
</li>
<li className="flex items-start gap-3 md:gap-4">
<div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon className="text-emerald-400 text-xs" icon="solar:diploma-verified-linear"></iconify-icon>
</div>
<div>
<span className="text-white text-sm font-medium block">Certificado Reconhecido</span>
<span className="text-white/40 text-xs">Válido para horas complementares e LinkedIn.</span>
</div>
</li>
</ul>
</div>
</div>

<div className="w-full md:w-2/5 bg-white/5 backdrop-blur-sm border-t md:border-t-0 md:border-l border-white/10 p-6 sm:p-8 md:p-12 flex flex-col justify-center items-center text-center relative mt-4 md:mt-0">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"></div>
<div className="relative z-10 w-full">
<p className="text-white/50 text-[10px] md:text-xs font-medium uppercase tracking-wide mb-1">De <span className="line-through">R$ 1.997,00</span> por</p>
<div className="flex items-baseline justify-center gap-1 mb-1 md:mb-2">
<span className="text-white/60 text-sm md:text-lg font-medium">12x de</span>
<span className="text-4xl sm:text-5xl font-bold text-white tracking-tighter">57<span className="text-xl sm:text-2xl">,78</span></span>
</div>
<p className="text-white/80 text-xs md:text-sm font-medium mb-6 md:mb-8">ou R$ 497,00 à vista</p>
<a className="group block w-full relative isolate overflow-hidden bg-white text-obsidian font-bold py-3.5 md:py-4 rounded-xl shadow-xl transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/20 text-xs sm:text-sm" href="https://pay.cakto.com.br/tog2jca_776926">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<span className="relative flex items-center justify-center gap-2">
                       GARANTIR MINHA VAGA
                       <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</a>
<div className="mt-4 md:mt-6 flex items-center justify-center gap-2 opacity-50">
<iconify-icon className="text-white" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-[9px] md:text-[10px] text-white">Pagamento 100% Seguro</span>
</div>
</div>
</div>
</div>

<div className="mt-10 md:mt-12 flex flex-col items-center text-center max-w-lg mx-auto" id="garantia">
<div className="w-10 h-10 md:w-12 md:h-12 bg-canvas border border-border rounded-full flex items-center justify-center mb-3 md:mb-4">
<iconify-icon className="text-obsidian" icon="solar:shield-warning-linear" width="20"></iconify-icon>
</div>
<h4 className="font-bold text-obsidian text-xs md:text-sm mb-1.5 md:mb-2">Garantia de 7 dias sem risco.</h4>
<p className="text-[11px] md:text-xs text-subtle leading-relaxed">
                Acesse a plataforma e explore todos os módulos. Se não for o que você esperava, solicite o reembolso total.
             </p>
</div>
</div>
</section>

<footer className="bg-white border-t border-border/60 py-10 md:py-16 px-4 md:px-12 lg:px-20">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
<div className="flex items-center gap-2 opacity-80">
<div className="w-6 h-6 bg-obsidian text-white flex items-center justify-center rounded-md">
<iconify-icon icon="solar:cpu-bolt-linear" width="14"></iconify-icon>
</div>
<span className="font-bold text-sm tracking-tight text-obsidian">IAFLIX</span>
</div>
<div className="text-[10px] md:text-[11px] text-subtle text-center md:text-right">
<p>© 2024 IAFLIX Educação. Todos os direitos reservados.</p>
<div className="flex gap-4 justify-center md:justify-end mt-2">
<a className="hover:text-obsidian transition-colors" href="#">Termos</a>
<a className="hover:text-obsidian transition-colors" href="#">Privacidade</a>
</div>
</div>
</div>
</footer>
</div>



    </>
  );
}
