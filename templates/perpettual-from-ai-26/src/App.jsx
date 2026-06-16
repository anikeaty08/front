import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        (function(){
            const canvas = document.getElementById("hero3D");
            if(!canvas || !window.THREE) return;
            const scene = new THREE.Scene();
            scene.fog = new THREE.FogExp2(0x050507, 0.015);
            const camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 1000);
            camera.position.set(0, 8, 20);
            const renderer = new THREE.WebGLRenderer({ canvas, alpha:true, antialias:true });
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.setSize(window.innerWidth, window.innerHeight);

            const bhUniforms = { uTime: { value: 0 }, uScroll: { value: 0 } };
            const bhMaterial = new THREE.ShaderMaterial({
              uniforms: bhUniforms,
              vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
              fragmentShader: `
                uniform float uTime; uniform float uScroll; varying vec2 vUv;
                float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
                float noise(vec2 p) { vec2 i = floor(p); vec2 f = fract(p); vec2 u = f*f*(3.0-2.0*f); return mix(mix(hash(i + vec2(0.0,0.0)), hash(i + vec2(1.0,0.0)), u.x), mix(hash(i + vec2(0.0,1.0)), hash(i + vec2(1.0,1.0)), u.x), u.y); }
                float fbm(vec2 p) { float v = 0.0; float a = 0.5; mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5)); for (int i = 0; i < 6; i++) { v += a * noise(p); p = rot * p * 2.0; a *= 0.5; } return v; }
                void main() {
                  vec2 uv = vUv * 2.0 - 1.0; float r = length(uv);
                  float coreRadius = 0.18; float core = smoothstep(coreRadius + 0.02, coreRadius, r);
                  float warpFactor = 0.12 / (r + 0.01); vec2 warpedUv = uv + normalize(uv) * warpFactor; float warpedR = length(warpedUv); float warpedAngle = atan(warpedUv.y, warpedUv.x);
                  float swirlSpeed = uTime * 0.08; float swirl = warpedAngle - warpedR * 2.5 + swirlSpeed;
                  vec2 noiseCoords = vec2(cos(swirl), sin(swirl)) * 1.8 - vec2(uTime * 0.02);
                  float n1 = fbm(noiseCoords * 2.5); float n2 = fbm(noiseCoords * 5.0 + uTime * 0.04);
                  float diskMask = smoothstep(0.9, coreRadius, r); float innerGlowMask = smoothstep(coreRadius + 0.3, coreRadius, r);
                  float intensity = (n1 * 0.5 + 0.5) * diskMask; float highlight = (n2 * 0.5 + 0.5) * innerGlowMask * 2.0;
                  
                  // Adapted to Emerald/Tech Green vibes
                  vec3 deepSpace = vec3(0.01, 0.02, 0.015);
                  vec3 darkEmerald = vec3(0.02, 0.15, 0.08);
                  vec3 plasmaGreen = vec3(0.1, 0.8, 0.5);
                  vec3 coreWhite = vec3(0.95, 1.0, 0.95);

                  vec3 color = mix(deepSpace, darkEmerald, intensity * 1.5);
                  color = mix(color, plasmaGreen, highlight * 0.9);
                  color += coreWhite * pow(innerGlowMask, 4.0) * (0.3 + 0.7 * sin(swirlSpeed * 3.0 + warpedR * 15.0));
                  color = mix(color, vec3(0.0), core);

                  float alpha = (intensity + highlight) * diskMask; alpha = max(alpha, core); alpha *= smoothstep(1.0, 0.5, r);
                  float scrollGlow = 1.0 + uScroll * 0.4; float pulse = 0.95 + 0.05 * sin(uTime * 0.5);
                  gl_FragColor = vec4(color * scrollGlow * pulse, alpha);
                }
              `,
              transparent: true, depthWrite: false, blending: THREE.NormalBlending, fog: false
            });
            const bhMesh = new THREE.Mesh(new THREE.PlaneGeometry(180, 180), bhMaterial);
            bhMesh.position.set(0, 12, -45); bhMesh.renderOrder = -2; scene.add(bhMesh);

            const gridMaterial = new THREE.ShaderMaterial({
              uniforms: { uColor: { value: new THREE.Color(0xffffff) }, uOpacity: { value: 0.0 } },
              vertexShader: `varying vec3 vWorldPosition; void main() { vec4 wPos = modelMatrix * vec4(position, 1.0); vWorldPosition = wPos.xyz; gl_Position = projectionMatrix * viewMatrix * wPos; }`,
              fragmentShader: `uniform vec3 uColor; uniform float uOpacity; varying vec3 vWorldPosition; void main() { vec2 coord = vWorldPosition.xz * 0.55; vec2 grid = abs(fract(coord - 0.5) - 0.5) / (fwidth(coord) * 1.6); float line = min(grid.x, grid.y); float alpha = max(0.0, 1.0 - line); float fade = 1.0 - smoothstep(12.0, 70.0, length(vWorldPosition.xyz - cameraPosition)); gl_FragColor = vec4(uColor, alpha * fade * uOpacity); }`,
              transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, extensions: { derivatives: true }
            });
            const gridPlane = new THREE.Mesh(new THREE.PlaneGeometry(240, 240).rotateX(-Math.PI/2), gridMaterial);
            gridPlane.position.y = -4; scene.add(gridPlane);

            let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0, scrollP = 0, targetScrollP = 0;
            window.addEventListener("mousemove", (e) => { targetX = (e.clientX / window.innerWidth - 0.5); targetY = (e.clientY / window.innerHeight - 0.5); });
            const heroTrack = document.getElementById("hero-track");
            window.addEventListener("scroll", () => {
              if(heroTrack) { const rect = heroTrack.getBoundingClientRect(); targetScrollP = Math.min(1, Math.max(0, -rect.top / (rect.height - window.innerHeight))); }
            });
            window.addEventListener("resize", () => { camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth, window.innerHeight); });

            const clock = new THREE.Clock();
            const contents = document.querySelectorAll('.hero-content');
            function animate() {
              requestAnimationFrame(animate);
              bhUniforms.uTime.value = clock.getElapsedTime();
              mouseX += (targetX - mouseX) * 0.05; mouseY += (targetY - mouseY) * 0.05; scrollP += (targetScrollP - scrollP) * 0.04;
              bhUniforms.uScroll.value = scrollP;
              gridMaterial.uniforms.uOpacity.value += ((0.06 * (1.0 - scrollP)) - gridMaterial.uniforms.uOpacity.value) * 0.05;
              
              camera.position.z += ((20 - scrollP * 65) - camera.position.z) * 0.06;
              camera.position.y += (((8 - scrollP * 6) - mouseY * 2.0) - camera.position.y) * 0.06;
              camera.position.x += (((scrollP * 2) + mouseX * 3.0) - camera.position.x) * 0.06;
              camera.fov += ((60 + scrollP * 45) - camera.fov) * 0.06; camera.updateProjectionMatrix();
              camera.lookAt(mouseX * 4.0, bhMesh.position.y - 4 + scrollP * 12, -20 - scrollP * 30);
              gridPlane.position.x = camera.position.x; gridPlane.position.z = camera.position.z; bhMesh.lookAt(camera.position);

              contents.forEach(el => {
                // Modificado: Fazer fade-out mais rápido e subir mais rápido para não colidir com a próxima seção
                const opacity = 1 - scrollP * 3.0;
                el.style.transform = `scale(${1 + scrollP * 0.8}) translateY(${scrollP * -120}px)`;
                el.style.opacity = Math.max(0, opacity);
                el.style.pointerEvents = opacity <= 0 ? 'none' : 'auto';
              });
              renderer.render(scene, camera);
            }
            animate();
        })();
      


    // Initialize Lucide Icons with proper stroke width
    lucide.createIcons({
      attrs: {
        'stroke-width': 1.5
      }
    });

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));

    // Simple observer for pipeline specific elements
    const pipelineObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.data-visible').forEach(el => pipelineObserver.observe(el));
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-10 bg-gradient-to-b from-transparent via-zinc-950/90 to-zinc-950 pointer-events-none"></div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl rounded-full tactile-glass px-5 py-3 flex items-center justify-between transition-transform duration-500 hover:translate-y-[-2px]">
<div className="flex items-center gap-8 pl-2">
<a className="text-base font-light text-zinc-100 tracking-tight font-mono" href="#">
        opero<span className="text-zinc-500">.so</span>
</a>
<div className="hidden md:flex gap-8">
<a className="text-xs font-light text-zinc-400 hover:text-zinc-100 transition-colors" href="#o-que">Produto</a>
<a className="text-xs font-light text-zinc-400 hover:text-zinc-100 transition-colors" href="#resultados">Resultados</a>
<a className="text-xs font-light text-zinc-400 hover:text-zinc-100 transition-colors" href="#preco">Preços</a>
</div>
</div>
<div className="flex items-center gap-3">
<a className="btn-primary rounded-full px-5 py-2 text-xs font-light" href="#contato">
        Agendar conversa
      </a>
</div>
</nav>



<div className="relative w-full" id="hero-track" style={{height: '170vh'}}>
<section className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center pt-20 pb-12">

<div className="absolute inset-0 -z-10 bg-[#050507]">
<canvas className="w-full h-full block" id="hero3D"></canvas>
</div>
<div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(5,5,7,0.4)_40%,rgba(5,5,7,1)_100%)]"></div>

<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-20 flex flex-col items-center hero-content transition-all duration-300 origin-center">
<div className="inline-flex items-center gap-3 rounded-full tactile-glass px-4 py-2 text-xs text-zinc-300 mb-6 shadow-2xl font-mono uppercase tracking-widest border border-zinc-700/50">
<span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,1)]"></span>
          Infraestrutura de negócio
        </div>
<h1 className="text-5xl sm:text-6xl md:text-7xl font-extralight tracking-tight text-zinc-50 leading-[1.05] drop-shadow-2xl">
          Seu negócio,<br/>
<em className="not-italic text-zinc-500 font-extralight">rodando</em><br/>
          como software.
        </h1>
<p className="mt-6 text-base sm:text-lg text-zinc-400 max-w-2xl font-light leading-relaxed">
          A maioria das empresas perde receita não por falta de cliente — mas porque opera no WhatsApp e em planilha. Nós construímos o sistema que muda isso.
        </p>
<div className="flex flex-wrap items-center justify-center gap-4 mt-8">
<a className="btn-primary rounded-lg px-6 py-3 text-sm font-light flex items-center gap-2" href="#contato">
            Agendar diagnóstico
            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="btn-ghost rounded-lg px-6 py-3 text-sm font-light text-zinc-300 flex items-center gap-2" href="#resultados">
            Ver resultados
            <i className="w-4 h-4" data-lucide="bar-chart-2"></i>
</a>
</div>

<div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 mt-12 pt-8 border-t border-zinc-800/50 w-full max-w-3xl mb-12 sm:mb-20">
<div className="flex flex-col items-center">
<span className="font-mono text-3xl font-light text-zinc-100 tracking-tight">48h</span>
<span className="text-xs text-zinc-500 mt-1 uppercase tracking-widest">para estar no ar</span>
</div>
<div className="flex flex-col items-center">
<span className="font-mono text-3xl font-light text-zinc-100 tracking-tight">40+</span>
<span className="text-xs text-zinc-500 mt-1 uppercase tracking-widest">empresas rodando</span>
</div>
<div className="flex flex-col items-center">
<span className="font-mono text-3xl font-light text-emerald-400 tracking-tight">R$0</span>
<span className="text-xs text-zinc-500 mt-1 uppercase tracking-widest">em planilha</span>
</div>
</div>
</div>


</section>
</div>


<section className="pt-40 pb-24 sm:pt-56 sm:pb-32 relative z-10 border-t border-zinc-900/50 bg-[#09090b]" id="problema">
<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center scroll-animate">
<div className="inline-flex items-center justify-center gap-2 mb-8">
<div className="h-px w-8 bg-zinc-700"></div>
<span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">O Problema</span>
<div className="h-px w-8 bg-zinc-700"></div>
</div>
<p className="text-2xl sm:text-3xl font-light leading-[1.6] text-zinc-300 tracking-tight">
        Você perde lead <span className="line-through text-zinc-600 decoration-zinc-700/50">no meio do WhatsApp</span>.<br/>
        O agendamento fica <span className="line-through text-zinc-600 decoration-zinc-700/50">no caderno ou no grupo</span>.<br/>
        Seu melhor cliente <span className="line-through text-zinc-600 decoration-zinc-700/50">sumiu sem avisar</span> — não porque não gostou de você, mas porque ninguém fez follow-up.
      </p>
<p className="mt-8 text-base sm:text-lg text-zinc-500 font-light max-w-2xl mx-auto">
        As ferramentas que existem foram feitas para grandes empresas nos EUA. Não para o seu negócio. Não para o Brasil.
      </p>
</div>
</section>

<section className="py-24 sm:py-32 relative z-10 bg-[#0a0a0c] border-t border-zinc-900/80 shadow-[inset_0_20px_40px_rgba(0,0,0,0.5)]" id="o-que">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl mb-16 scroll-animate">
<h2 className="text-xs font-mono text-emerald-400 tracking-widest uppercase flex items-center gap-2">
<i className="w-4 h-4" data-lucide="cpu"></i>
          O que construímos
        </h2>
<p className="mt-4 text-3xl font-light tracking-tight text-zinc-100 sm:text-4xl drop-shadow-md">
          Módulos de Operação
        </p>
<p className="mt-4 text-base sm:text-lg text-zinc-400 font-light">
          Abstraímos a complexidade da gestão. Construímos a camada base para você focar em fechar negócios.
        </p>
</div>
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 scroll-animate">
<div className="tactile-base rounded-2xl p-8 group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,1)] relative overflow-hidden flex flex-col border border-zinc-800/50">
<div className="mb-auto">
<div className="w-12 h-12 rounded-xl tactile-inset flex items-center justify-center border border-zinc-800/80 mb-6 shadow-inner relative group-hover:border-emerald-500/30 transition-colors">
<i className="w-6 h-6 text-zinc-300 relative z-10 group-hover:text-emerald-400 transition-colors" data-lucide="magnet"></i>
</div>
<div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">01 — Captar</div>
<h3 className="text-lg font-light tracking-tight text-zinc-100">Motor de Leads</h3>
<p className="mt-3 text-base text-zinc-400 leading-relaxed font-light">
              Todo lead capturado, organizado e com follow-up automático. Nada se perde mais no chat.
            </p>
</div>
</div>
<div className="tactile-base rounded-2xl p-8 group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,1)] relative overflow-hidden flex flex-col border border-zinc-800/50">
<div className="mb-auto">
<div className="w-12 h-12 rounded-xl tactile-inset flex items-center justify-center border border-zinc-800/80 mb-6 shadow-inner relative group-hover:border-emerald-500/30 transition-colors">
<i className="w-6 h-6 text-zinc-300 relative z-10 group-hover:text-emerald-400 transition-colors" data-lucide="calendar"></i>
</div>
<div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">02 — Converter</div>
<h3 className="text-lg font-light tracking-tight text-zinc-100">Agendamento Inteligente</h3>
<p className="mt-3 text-base text-zinc-400 leading-relaxed font-light">
              Agenda que funciona enquanto você dorme. Confirmação, lembrete, cancelamento — automático.
            </p>
</div>
</div>
<div className="tactile-base rounded-2xl p-8 group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,1)] relative overflow-hidden flex flex-col border border-zinc-800/50">
<div className="mb-auto">
<div className="w-12 h-12 rounded-xl tactile-inset flex items-center justify-center border border-zinc-800/80 mb-6 shadow-inner relative group-hover:border-emerald-500/30 transition-colors">
<i className="w-6 h-6 text-zinc-300 relative z-10 group-hover:text-emerald-400 transition-colors" data-lucide="refresh-cw"></i>
</div>
<div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">03 — Reter</div>
<h3 className="text-lg font-light tracking-tight text-zinc-100">Reativação de Clientes</h3>
<p className="mt-3 text-base text-zinc-400 leading-relaxed font-light">
              Reativa quem sumiu. Receita vinda de pessoas que você já conquistou — sem custo de aquisição.
            </p>
</div>
</div>
<div className="tactile-base rounded-2xl p-8 group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,1)] relative overflow-hidden flex flex-col border border-zinc-800/50">
<div className="mb-auto">
<div className="w-12 h-12 rounded-xl tactile-inset flex items-center justify-center border border-zinc-800/80 mb-6 shadow-inner relative group-hover:border-emerald-500/30 transition-colors">
<i className="w-6 h-6 text-zinc-300 relative z-10 group-hover:text-emerald-400 transition-colors" data-lucide="layout-dashboard"></i>
</div>
<div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">04 — Medir</div>
<h3 className="text-lg font-light tracking-tight text-zinc-100">Central de Comando</h3>
<p className="mt-3 text-base text-zinc-400 leading-relaxed font-light">
              Um dashboard. Receita, pipeline, conversão. Sem mais chute sobre o que está funcionando.
            </p>
</div>
</div>
<div className="tactile-base rounded-2xl p-8 group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,1)] relative overflow-hidden flex flex-col border border-zinc-800/50">
<div className="mb-auto">
<div className="w-12 h-12 rounded-xl tactile-inset flex items-center justify-center border border-zinc-800/80 mb-6 shadow-inner relative group-hover:border-emerald-500/30 transition-colors">
<i className="w-6 h-6 text-zinc-300 relative z-10 group-hover:text-emerald-400 transition-colors" data-lucide="smartphone"></i>
</div>
<div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">05 — Possuir</div>
<h3 className="text-lg font-light tracking-tight text-zinc-100">App da Sua Marca</h3>
<p className="mt-3 text-base text-zinc-400 leading-relaxed font-light">
              Sua marca. Seu app. Seus clientes acessam tudo sem precisar trocar de plataforma.
            </p>
</div>
</div>
<div className="tactile-base rounded-2xl p-8 group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,1)] relative overflow-hidden flex flex-col border border-zinc-800/50">
<div className="mb-auto">
<div className="w-12 h-12 rounded-xl tactile-inset flex items-center justify-center border border-zinc-800/80 mb-6 shadow-inner relative group-hover:border-emerald-500/30 transition-colors">
<i className="w-6 h-6 text-zinc-300 relative z-10 group-hover:text-emerald-400 transition-colors" data-lucide="link"></i>
</div>
<div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">06 — Integrar</div>
<h3 className="text-lg font-light tracking-tight text-zinc-100">Camada de Conexão</h3>
<p className="mt-3 text-base text-zinc-400 leading-relaxed font-light">
              WhatsApp, Instagram, CRM, pagamento. Conecta no que você já usa hoje de forma fluida.
            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32 overflow-hidden bg-[#09090b] border-t border-zinc-900 relative" id="como">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-20 scroll-animate">
<h2 className="text-3xl font-light tracking-tight text-zinc-100">
          Como funciona
        </h2>
<p className="mt-4 text-base sm:text-lg text-zinc-400 font-light">
          Um fluxo de trabalho físico para analisar, compilar e implantar sua infraestrutura em tempo recorde.
        </p>
</div>
<div className="relative max-w-5xl mx-auto scroll-animate">

<div className="absolute left-[32px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[18px] rounded-full bg-gradient-to-b from-zinc-800/20 to-zinc-800/10 border border-zinc-800/80 shadow-[inset_0_0_24px_rgba(0,0,0,0.5)] z-0">
<div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-zinc-800 overflow-hidden">
<div className="pipeline-beam absolute left-1/2 -translate-x-1/2 top-0 w-[2px] h-[140px] bg-gradient-to-b from-transparent via-emerald-500 to-transparent shadow-[0_0_18px_rgba(16,185,129,0.6)]"></div>
</div>
</div>

<div className="relative z-10 flex flex-col md:grid md:grid-cols-2 gap-8 items-center mb-16 pl-[80px] md:pl-0 opacity-0 translate-y-8 transition-all duration-700 data-visible">
<div className="w-full text-left md:text-right md:pr-14">
<div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Fase 01</div>
<h3 className="text-2xl font-light text-zinc-100 tracking-tight">Diagnóstico</h3>
<p className="mt-3 text-base text-zinc-400 md:ml-auto max-w-md font-light">
              Mapeamos onde seu negócio está perdendo receita — captação, agendamento, retenção ou os três simultaneamente.
            </p>
</div>
<div className="w-full md:pl-14">
<div className="tactile-glass p-5 rounded-2xl border border-zinc-800/70 flex items-center gap-4">
<div className="w-12 h-12 rounded-xl tactile-inset flex items-center justify-center text-zinc-400 shrink-0">
<i data-lucide="scan" style={{width: '22px', height: '22px'}}></i>
</div>
<div className="flex-1 min-w-0">
<div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden shadow-inner">
<div className="h-full w-[78%] bg-zinc-500 rounded-full"></div>
</div>
<div className="text-[10px] font-mono text-zinc-500 mt-2 tracking-widest uppercase">SCAN_COMPLETO</div>
</div>
</div>
</div>
<div className="absolute left-[32px] md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[38px] h-[38px] z-20">
<div className="w-full h-full rounded-full border border-zinc-700 bg-[radial-gradient(circle_at_center,#18181b,#0a0a0c)] flex items-center justify-center shadow-lg relative step-node-ring">
<div className="w-3 h-3 rounded-full bg-zinc-400 border border-zinc-900"></div>
</div>
</div>
</div>

<div className="relative z-10 flex flex-col md:grid md:grid-cols-2 gap-8 items-center mb-16 pl-[80px] md:pl-0 opacity-0 translate-y-8 transition-all duration-700 data-visible" style={{transitionDelay: '100ms'}}>
<div className="w-full md:pr-14 order-2 md:order-1">
<div className="tactile-glass p-5 rounded-2xl border border-zinc-800/70 flex items-center gap-4">
<div className="flex-1 text-right min-w-0">
<div className="text-[10px] font-mono text-zinc-500 mb-2 tracking-widest uppercase">TEMPO_DE_DEPLOY</div>
<div className="flex justify-end gap-1.5">
<div className="w-6 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
<div className="w-6 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
<div className="w-6 h-1.5 rounded-full bg-zinc-800"></div>
</div>
</div>
<div className="w-12 h-12 rounded-xl tactile-inset flex items-center justify-center text-emerald-400 shrink-0">
<i data-lucide="server" style={{width: '22px', height: '22px'}}></i>
</div>
</div>
</div>
<div className="w-full text-left md:pl-14 order-1 md:order-2">
<div className="text-xs font-mono text-emerald-500/80 uppercase tracking-widest mb-2">Fase 02</div>
<h3 className="text-2xl font-light text-zinc-100 tracking-tight">Construção</h3>
<p className="mt-3 text-base text-zinc-400 max-w-md font-light">
              Implementamos o sistema base em 48 horas. Sem precisar de equipe técnica do seu lado, direto para produção.
            </p>
</div>
<div className="absolute left-[32px] md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[38px] h-[38px] z-20">
<div className="w-full h-full rounded-full border border-emerald-500/30 bg-[radial-gradient(circle_at_center,#18181b,#0a0a0c)] flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.1)] relative step-node-ring">
<div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_12px_#10b981] border border-zinc-900"></div>
</div>
</div>
</div>

<div className="relative z-10 flex flex-col md:grid md:grid-cols-2 gap-8 items-center pl-[80px] md:pl-0 opacity-0 translate-y-8 transition-all duration-700 data-visible" style={{transitionDelay: '200ms'}}>
<div className="w-full text-left md:text-right md:pr-14">
<div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">Fase 03</div>
<h3 className="text-2xl font-light text-zinc-100 tracking-tight">Composição</h3>
<p className="mt-3 text-base text-zinc-400 md:ml-auto max-w-md font-light">
              O sistema melhora com o tempo. Cada mês rodando gera mais dados, tornando os processos mais eficientes e previsíveis.
            </p>
</div>
<div className="w-full md:pl-14">
<div className="tactile-glass p-5 rounded-2xl border border-zinc-800/70 flex flex-col gap-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg tactile-inset flex items-center justify-center text-emerald-400 shrink-0">
<i className="w-5 h-5" data-lucide="rocket"></i>
</div>
<div>
<div className="text-sm text-zinc-200">Ciclo Contínuo</div>
<div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mt-0.5">OTIMIZAÇÃO: ATIVA</div>
</div>
</div>
<div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#10b981] animate-pulse"></div>
</div>
<div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden shadow-inner">
<div className="h-full w-[95%] bg-emerald-500 shadow-[0_0_8px_#10b981]"></div>
</div>
</div>
</div>
<div className="absolute left-[32px] md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[38px] h-[38px] z-20">
<div className="w-full h-full rounded-full border border-emerald-500/50 bg-[radial-gradient(circle_at_center,#18181b,#0a0a0c)] flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.2)] relative step-node-ring">
<div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_15px_#10b981] border border-zinc-900"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32 bg-[#0a0a0c] border-t border-zinc-900 relative z-10 shadow-[inset_0_20px_40px_rgba(0,0,0,0.5)]" id="resultados">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 scroll-animate">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 mb-6 shadow-inner">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse"></div>
<span className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase">Telemetria Verificada</span>
</div>
<h2 className="text-3xl sm:text-4xl font-light tracking-tight text-zinc-100 drop-shadow-md">
          Resultados em produção
        </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto scroll-animate">
<div className="tactile-glass p-8 rounded-[2rem] border border-zinc-800/70 hover:border-emerald-500/30 transition-colors duration-500 group relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full blur-2xl group-hover:bg-emerald-500/10 transition-colors"></div>
<div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4 border border-zinc-800 inline-block px-2 py-1 rounded bg-zinc-900/50">Clínica</div>
<div className="flex items-baseline gap-2 mb-4">
<span className="text-5xl font-extralight text-zinc-100 tracking-tight group-hover:text-emerald-400 transition-colors">−60%</span>
</div>
<div className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-4">Taxa de no-show</div>
<p className="text-base text-zinc-400 font-light leading-relaxed">
            Reduziu faltas operacionais com lembretes automáticos e fluxo de confirmação de consulta integrado.
          </p>
</div>
<div className="tactile-glass p-8 rounded-[2rem] border border-zinc-800/70 hover:border-emerald-500/30 transition-colors duration-500 group relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full blur-2xl group-hover:bg-emerald-500/10 transition-colors"></div>
<div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4 border border-zinc-800 inline-block px-2 py-1 rounded bg-zinc-900/50">Imobiliária</div>
<div className="flex items-baseline gap-2 mb-4">
<span className="text-5xl font-extralight text-zinc-100 tracking-tight group-hover:text-emerald-400 transition-colors">+8</span>
</div>
<div className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-4">Negócios fechados/mês</div>
<p className="text-base text-zinc-400 font-light leading-relaxed">
            Leads que seriam perdidos no volume do WhatsApp, agora rastreados, acompanhados e fechados.
          </p>
</div>
<div className="tactile-glass p-8 rounded-[2rem] border border-zinc-800/70 hover:border-emerald-500/30 transition-colors duration-500 group relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full blur-2xl group-hover:bg-emerald-500/10 transition-colors"></div>
<div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4 border border-zinc-800 inline-block px-2 py-1 rounded bg-zinc-900/50">Academia</div>
<div className="flex items-baseline gap-2 mb-4">
<span className="text-5xl font-extralight text-zinc-100 tracking-tight group-hover:text-emerald-400 transition-colors">+40%</span>
</div>
<div className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-4">Taxa de retenção</div>
<p className="text-base text-zinc-400 font-light leading-relaxed">
            Reativação automática de alunos inativos com campanhas e mensagens altamente personalizadas.
          </p>
</div>
<div className="tactile-glass p-8 rounded-[2rem] border border-zinc-800/70 hover:border-emerald-500/30 transition-colors duration-500 group relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full blur-2xl group-hover:bg-emerald-500/10 transition-colors"></div>
<div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4 border border-zinc-800 inline-block px-2 py-1 rounded bg-zinc-900/50">Networking / BNI</div>
<div className="flex items-baseline gap-2 mb-4">
<span className="text-5xl font-extralight text-zinc-100 tracking-tight group-hover:text-emerald-400 transition-colors">3×</span>
</div>
<div className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-4">Conversão de indicações</div>
<p className="text-base text-zinc-400 font-light leading-relaxed">
            Pipeline de indicações centralizado entre mais de 30 membros — totalmente visível e rastreável.
          </p>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32 bg-[#09090b] border-t border-zinc-900 relative" id="preco">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16 scroll-animate">
<h2 className="text-3xl font-light tracking-tight text-zinc-100">
          Planos de Acesso
        </h2>
<p className="mt-4 text-base sm:text-lg text-zinc-400 font-light">
          Investimento transparente direto na capacidade de processamento do seu negócio.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto scroll-animate">

<div className="tactile-base rounded-[2rem] p-8 border border-zinc-800/80 flex flex-col relative transition-all duration-300 hover:border-zinc-700 hover:shadow-2xl">
<div className="mb-8">
<h3 className="text-lg font-light text-zinc-300 font-mono uppercase tracking-widest mb-2">Fundação</h3>
<div className="mt-4 flex items-baseline text-4xl sm:text-5xl font-extralight tracking-tight text-zinc-100">
              R$5.000
            </div>
<div className="text-xs font-mono text-zinc-500 tracking-widest uppercase mt-2">Pagamento Único</div>
<p className="mt-6 text-base text-zinc-400 font-light leading-relaxed border-t border-zinc-800 pt-6">
              Sistema completo implantado. Motor de leads, agendamento e dashboard. No ar em 48h. Onboarding incluído.
            </p>
</div>
<a className="btn-ghost w-full text-center py-3 rounded-xl text-sm font-light text-zinc-300 mt-auto" href="#contato">
            Agendar diagnóstico
          </a>
</div>

<div className="tactile-glass rounded-[2rem] p-8 border border-emerald-500/30 flex flex-col relative overflow-hidden shadow-[0_0_40px_rgba(16,185,129,0.05)] transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_0_50px_rgba(16,185,129,0.1)]">
<div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-bl-full blur-3xl"></div>
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
<div className="mb-8 relative z-10">
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded border border-emerald-900/50 bg-emerald-950/30 mb-4 shadow-inner">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse"></div>
<span className="text-[10px] text-emerald-400 uppercase tracking-widest font-mono">Recomendado</span>
</div>
<h3 className="text-lg font-light text-zinc-100 font-mono uppercase tracking-widest mb-2">Fundação + Crescimento</h3>
<div className="mt-4 flex flex-col text-4xl sm:text-5xl font-extralight tracking-tight text-white drop-shadow-md">
              R$5.000
              <span className="text-xl text-emerald-400 mt-1 font-light">+ R$600<span className="text-sm text-zinc-500 font-mono uppercase tracking-widest ml-1">/mês</span></span>
</div>
<p className="mt-6 text-base text-zinc-300 font-light leading-relaxed border-t border-zinc-800 pt-6">
              Tudo do plano Fundação, mais otimização mensal, novas automações, suporte prioritário e relatório de performance analítico.
            </p>
</div>
<a className="btn-primary w-full text-center py-3 rounded-xl text-sm font-light text-zinc-900 mt-auto relative z-10" href="#contato">
            Implantar sistema completo
          </a>
</div>
</div>
</div>
</section>

<footer className="relative border-t border-zinc-900 bg-[#050505] pt-24 pb-12 overflow-hidden" id="contato">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-emerald-500/5 blur-[100px] pointer-events-none"></div>
<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 text-center scroll-animate">
<div className="w-16 h-16 rounded-2xl tactile-base mx-auto flex items-center justify-center border border-zinc-800 shadow-[0_10px_20px_rgba(0,0,0,0.5)] mb-8">
<i className="w-6 h-6 text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]" data-lucide="power"></i>
</div>
<h2 className="text-4xl sm:text-5xl font-extralight tracking-tight text-zinc-100">
        Pronto para parar de<br/>operar na planilha?
      </h2>
<p className="mt-6 text-base sm:text-lg text-zinc-400 max-w-lg mx-auto font-light">
        Atendemos um número limitado de clientes por mês. Agende uma conversa de 30 minutos — sem pitch, só diagnóstico operacional.
      </p>
<div className="mt-10 flex flex-col items-center gap-4">
<a className="btn-primary rounded-full px-8 py-3 text-sm font-light flex items-center gap-2" href="https://wa.me/5551999999999" target="_blank">
          Agendar agora
          <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<p className="text-[11px] font-mono text-zinc-600 tracking-widest uppercase mt-4">
          Sem fidelidade. Sem contrato longo. Resultado ou a gente resolve.
        </p>
</div>
</div>

<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24 pt-8 border-t border-zinc-900/50 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
<div className="text-sm font-light text-zinc-300 font-mono">
        opero<span className="text-zinc-600">.so</span>
</div>
<div className="text-xs font-mono text-zinc-600 uppercase tracking-widest">
        Feito no Brasil. © 2025 Opero.
      </div>
</div>
</footer>


    </>
  );
}
