import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      const initThreeJS = () => {
        const container = document.getElementById('canvas-container');
        if (!container) return;
        container.innerHTML = '';

        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0xffffff, 0.002);

        let width = container.clientWidth;
        let height = container.clientHeight;

        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.z = 30;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0xffffff, 1);
        container.appendChild(renderer.domElement);

        const geometry = new THREE.TorusKnotGeometry(9, 2.5, 120, 16);
        const material = new THREE.MeshPhysicalMaterial({
          color: 0xcccccc,
          metalness: 0.1,
          roughness: 0.8,
          wireframe: true,
          transparent: true,
          opacity: 0.15,
        });
        const torusKnot = new THREE.Mesh(geometry, material);
        scene.add(torusKnot);

        const sparkCount = 80;
        const sparkGeo = new THREE.SphereGeometry(0.08, 8, 8);
        const sparkMat = new THREE.MeshBasicMaterial({ color: 0xaaaaaa });
        const sparks = new THREE.InstancedMesh(sparkGeo, sparkMat, sparkCount);

        const dummy = new THREE.Object3D();
        const sparkData = [];
        for (let i = 0; i < sparkCount; i++) {
          sparkData.push({
            speed: 0.0005 + Math.random() * 0.001,
            progress: Math.random(),
            offset: Math.random() * 2,
          });
        }
        scene.add(sparks);

        let targetRotationX = 0;
        let targetRotationY = 0;
        let mouseX = 0;
        let mouseY = 0;
        let windowHalfX = window.innerWidth / 2;
        let windowHalfY = window.innerHeight / 2;

        document.addEventListener('mousemove', (event) => {
          mouseX = (event.clientX - windowHalfX) * 0.001;
          mouseY = (event.clientY - windowHalfY) * 0.001;
          targetRotationY = mouseX * 2.5;
          targetRotationX = mouseY * 2.5;
        });

        const animate = () => {
          requestAnimationFrame(animate);

          torusKnot.rotation.y += (targetRotationY - torusKnot.rotation.y) * 0.05;
          torusKnot.rotation.x += (targetRotationX - torusKnot.rotation.x) * 0.05;

          torusKnot.rotation.y += 0.0006;
          torusKnot.rotation.x += 0.0003;

          sparkData.forEach((spark, i) => {
            spark.progress += spark.speed;
            if (spark.progress > 1) spark.progress = 0;

            const angle = spark.progress * Math.PI * 2;
            dummy.position.set(Math.cos(angle) * (12 + Math.sin(spark.offset) * 2), Math.sin(angle) * (12 + Math.cos(spark.offset) * 2), Math.sin(angle * 2) * 5);

            dummy.position.x += mouseX * 4 - dummy.position.x * 0.01;
            dummy.position.y -= mouseY * 4 + dummy.position.y * 0.01;

            dummy.updateMatrix();
            sparks.setMatrixAt(i, dummy.matrix);
          });

          sparks.instanceMatrix.needsUpdate = true;
          renderer.render(scene, camera);
        };
        animate();

        window.addEventListener('resize', () => {
          width = container.clientWidth;
          height = container.clientHeight;
          windowHalfX = window.innerWidth / 2;
          windowHalfY = window.innerHeight / 2;
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
          renderer.setSize(width, height);
        });
      };

      const initCasesCarousel = () => {
        const scroller = document.getElementById('cases-carousel');
        if (!scroller) return;

        const slides = Array.from(scroller.children).filter((el) => el && el.nodeType === 1);
        const dots = Array.from(document.querySelectorAll('[data-case-dot]'));

        let index = 0;
        let timer = null;
        let isHovering = false;
        let isUserInteracting = false;

        const clampIndex = (i) => {
          if (i < 0) return slides.length - 1;
          if (i >= slides.length) return 0;
          return i;
        };

        const setActiveDot = (i) => {
          dots.forEach((d, di) => {
            d.classList.toggle('bg-neutral-900', di === i);
            d.classList.toggle('bg-neutral-300', di !== i);
          });
        };

        const scrollToIndex = (i, behavior) => {
          if (!slides[i]) return;
          const left = slides[i].offsetLeft;
          scroller.scrollTo({ left, behavior: behavior || 'smooth' });
          index = i;
          setActiveDot(index);
        };

        const start = () => {
          if (timer) clearInterval(timer);
          timer = setInterval(() => {
            if (isHovering || isUserInteracting) return;
            scrollToIndex(clampIndex(index + 1), 'smooth');
          }, 4200);
        };

        const stop = () => {
          if (timer) clearInterval(timer);
          timer = null;
        };

        scroller.addEventListener('mouseenter', () => {
          isHovering = true;
        });
        scroller.addEventListener('mouseleave', () => {
          isHovering = false;
        });

        const markInteracting = () => {
          isUserInteracting = true;
          window.clearTimeout(scroller.__casesIdleTO);
          scroller.__casesIdleTO = window.setTimeout(() => {
            isUserInteracting = false;
          }, 1200);
        };
        scroller.addEventListener('wheel', markInteracting, { passive: true });
        scroller.addEventListener('touchstart', markInteracting, { passive: true });
        scroller.addEventListener('touchmove', markInteracting, { passive: true });
        scroller.addEventListener('pointerdown', markInteracting, { passive: true });

        let raf = null;
        scroller.addEventListener('scroll', () => {
          if (raf) cancelAnimationFrame(raf);
          raf = requestAnimationFrame(() => {
            const center = scroller.scrollLeft + scroller.clientWidth / 2;
            let nearest = 0;
            let best = Infinity;
            slides.forEach((s, i) => {
              const sCenter = s.offsetLeft + s.clientWidth / 2;
              const dist = Math.abs(center - sCenter);
              if (dist < best) {
                best = dist;
                nearest = i;
              }
            });
            if (nearest !== index) {
              index = nearest;
              setActiveDot(index);
            }
          });
        });

        dots.forEach((d) => {
          d.addEventListener('click', () => {
            const i = Number(d.getAttribute('data-case-dot') || '0');
            scrollToIndex(clampIndex(i), 'smooth');
          });
        });

        setActiveDot(index);
        start();

        window.addEventListener('load', () => {
          scrollToIndex(index, 'auto');
        });

        document.addEventListener('visibilitychange', () => {
          if (document.hidden) stop();
          else start();
        });
      };

      window.addEventListener('DOMContentLoaded', () => {
        initThreeJS();
        initCasesCarousel();
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="spline-container fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<iframe frameborder="0" height="100%" src="https://i.ibb.co/v44B1CBk/24334.jpg" width="100%"></iframe>
</div>

<header className="relative w-full h-screen flex flex-col justify-between p-6 sm:p-12 z-10 pointer-events-none overflow-hidden bg-white">
<div id="canvas-container"><canvas height="872" style={{display: 'block', width: '2359px', height: '969px'}} width="2123"></canvas></div>
<div className="flex justify-between items-start pointer-events-auto w-full max-w-[1400px] mx-auto z-10">
<div className="flex items-baseline gap-2">
<div className="text-xl font-medium tracking-tight text-black">Aura</div>
<div className="text-neutral-400 font-geist-mono text-xs">× Arallu Estofados</div>
</div>
<nav className="hidden sm:flex gap-8 text-xs font-normal text-neutral-500 uppercase tracking-wide">
<a className="hover:text-black transition-colors" href="#quem-somos">Quem Somos</a>
<a className="hover:text-black transition-colors" href="#processo">Processo</a>
<a className="hover:text-black transition-colors" href="#aura-pro">Aura Pro</a>
<a className="hover:text-black transition-colors" href="#planos">Planos</a>
<a className="hover:text-black transition-colors" href="#cases">Cases</a>
<a className="hover:text-black transition-colors" href="https://wa.me/5500000000000">WhatsApp</a>
</nav>
</div>
<div className="flex flex-col md:flex-row gap-12 pointer-events-auto z-10 w-full max-w-[1400px] mr-auto mb-4 ml-auto gap-x-12 gap-y-12 items-end justify-between">
<div className="max-w-xs space-y-8">
<p className="text-base leading-relaxed text-neutral-600 font-normal">
            CRM, automações e follow-up inteligente para lojas de estofados premium. Organize seus leads, automatize orçamentos e nunca mais perca uma venda de sofá.
          </p>
<button className="group flex items-center gap-2 text-xs font-medium tracking-widest uppercase border-b border-black pb-1 hover:text-neutral-600 hover:border-neutral-400 transition-all cursor-pointer" onclick="document.getElementById('cenario-atual').scrollIntoView()">
            Ver apresentação <span className="group-hover:translate-y-0.5 transition-transform duration-300">↓</span>
</button>
</div>
<div className="text-right">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[0.85] text-black">
<span className="block">Pare de perder vendas.</span>
<span className="block">Automatize.</span>
</h1>
<p className="md:text-5xl text-3xl font-normal text-neutral-500 tracking-tight mt-3">Uma proposta exclusiva para a Arallu Estofados Premium</p>
</div>
</div>
</header>

<aside className="hidden lg:block fixed left-6 top-1/2 -translate-y-1/2 z-30">
<div className="flex flex-col gap-2 bg-white border-neutral-200 border rounded-full p-2 shadow-sm items-center">
<button className="group grid place-items-center hover:text-black hover:bg-neutral-100 transition relative text-neutral-500 w-10 h-10 rounded-full cursor-pointer" onclick="window.scrollTo(0,0)">
<iconify-icon icon="solar:home-2-linear" width="18"></iconify-icon>
<span className="absolute left-12 bg-neutral-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-geist-mono">Início</span>
</button>
<button className="group grid place-items-center hover:text-black hover:bg-neutral-100 transition relative text-neutral-500 w-10 h-10 rounded-full cursor-pointer" onclick="window.location.href='#processo'">
<iconify-icon icon="solar:flow-linear" width="18"></iconify-icon>
<span className="absolute left-12 bg-neutral-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-geist-mono">Processo</span>
</button>
<button className="group grid place-items-center hover:text-black hover:bg-neutral-100 transition relative text-neutral-500 w-10 h-10 rounded-full cursor-pointer" onclick="window.location.href='#aura-pro'">
<iconify-icon icon="solar:stars-linear" width="18"></iconify-icon>
<span className="absolute left-12 bg-neutral-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-geist-mono">Aura Pro</span>
</button>
<button className="group grid place-items-center hover:text-black hover:bg-neutral-100 transition relative text-neutral-500 w-10 h-10 rounded-full cursor-pointer" onclick="window.location.href='#planos'">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="18"></iconify-icon>
<span className="absolute left-12 bg-neutral-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-geist-mono">Planos</span>
</button>
<a className="group grid place-items-center hover:text-black hover:bg-neutral-100 transition relative text-neutral-500 w-10 h-10 rounded-full cursor-pointer" href="https://wa.me/5500000000000">
<iconify-icon icon="solar:chat-round-linear" width="18"></iconify-icon>
<span className="absolute left-12 bg-neutral-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-geist-mono">WhatsApp</span>
</a>
</div>
</aside>
<main className="relative z-20 bg-white">

<section className="sm:px-8 bg-neutral-50 border-neutral-200 border-t pt-24 pr-6 pb-24 pl-6" id="cenario-atual">
<div className="max-w-6xl mx-auto">
<div className="mb-16">
<div className="flex items-center gap-3 mb-6">
<span className="text-xs font-medium text-neutral-400 uppercase tracking-widest font-geist-mono">O Cenário Atual</span>
<div className="h-px flex-1 bg-neutral-200"></div>
</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 mb-4">Você reconhece algum desses sintomas?</h2>
<p className="text-xl text-neutral-500 font-geist-mono max-w-2xl">Esses são os problemas mais comuns em lojas de estofados que chegam até nós.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-x-6 gap-y-6">
<div className="bg-white border border-neutral-200 rounded-2xl p-6 hover:shadow-sm transition-all">
<iconify-icon className="text-neutral-900 mb-4" icon="solar:clock-circle-linear" width="32"></iconify-icon>
<h3 className="text-xl font-medium mb-2 tracking-tight">Leads demoram horas para receber resposta</h3>
<p className="text-base text-neutral-500 font-geist-mono mb-6">
                O cliente pediu orçamento de um sofá personalizado e só foi respondido no dia seguinte. Ele já comprou no concorrente.
              </p>
<span className="uppercase text-xs font-medium text-neutral-700 tracking-wider bg-neutral-100 rounded pt-1 pr-2 pb-1 pl-2">4–8h tempo médio</span>
</div>
<div className="hover:shadow-sm transition-all bg-white border-neutral-200 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<iconify-icon className="text-neutral-900 mb-4" icon="solar:clipboard-list-linear" width="32"></iconify-icon>
<h3 className="text-xl font-medium mb-2 tracking-tight">Orçamentos enviados e esquecidos</h3>
<p className="text-base text-neutral-500 font-geist-mono mb-6">
                O vendedor manda o preço, o cliente some. Sem follow-up automático, 70% dos orçamentos morrem em silêncio.
              </p>
<span className="uppercase text-xs font-medium text-neutral-700 tracking-wider bg-neutral-100 rounded pt-1 pr-2 pb-1 pl-2">70% sem retorno</span>
</div>
<div className="hover:shadow-sm transition-all bg-white border-neutral-200 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<iconify-icon className="text-neutral-900 mb-4" icon="solar:refresh-linear" width="32"></iconify-icon>
<h3 className="text-xl font-medium mb-2 tracking-tight">Clientes compram e somem</h3>
<p className="text-base text-neutral-500 font-geist-mono mb-6">Sem pós-venda automatizado, você perde avaliações, indicações e a recompra — seja novo modelo ou peças complementares.</p>
<span className="text-xs font-medium bg-neutral-100 px-2 py-1 rounded uppercase tracking-wider text-neutral-700">Desperdício de base</span>
</div>
<div className="bg-white border border-neutral-200 rounded-2xl p-6 hover:shadow-sm transition-all lg:col-span-1">
<iconify-icon className="text-neutral-900 mb-4" icon="solar:pie-chart-2-linear" width="32"></iconify-icon>
<h3 className="text-xl font-medium mb-2 tracking-tight">Zero visibilidade do funil</h3>
<p className="text-base text-neutral-500 font-geist-mono mb-6">
                Quantos orçamentos saíram essa semana? Quantos fecharam? Qual é sua taxa de conversão? Tudo no escuro.
              </p>
<span className="text-xs font-medium bg-neutral-100 px-2 py-1 rounded uppercase tracking-wider text-neutral-700">Ausência de dados</span>
</div>
<div className="bg-white border border-neutral-200 rounded-2xl p-6 hover:shadow-sm transition-all md:col-span-2">
<iconify-icon className="text-neutral-900 mb-4" icon="solar:settings-linear" width="32"></iconify-icon>
<h3 className="text-xl font-medium mb-2 tracking-tight">Resultado depende de quem está no balcão</h3>
<p className="text-base text-neutral-500 font-geist-mono mb-6">Se o vc decide tirar férias, as vendas caem. O processo precisa existir independente de quem atende.</p>
<span className="text-xs font-medium bg-neutral-100 px-2 py-1 rounded uppercase tracking-wider text-neutral-700">Sem previsibilidade</span>
</div>
</div>
</div>
</section>

<section className="px-6 sm:px-8 bg-white border-t border-neutral-100 py-24">
<div className="max-w-6xl mx-auto">
<div className="max-w-4xl">
<div className="flex items-center gap-3 mb-6">
<span className="text-xs font-medium text-neutral-400 uppercase tracking-widest font-geist-mono">O Ativo Precioso</span>
<div className="h-px flex-1 bg-neutral-200"></div>
</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 mb-8">O maior patrimônio da sua loja não está no showroom.</h2>
<blockquote className="border-l border-neutral-200 pl-6 py-2 text-neutral-600">
<p className="text-xl leading-relaxed font-normal">
                "Nós não temos uma empresa de produtos ou serviços. Nós temos uma empresa de relacionamentos com os clientes."
              </p>
<footer className="mt-3 text-xs text-neutral-500 font-geist-mono uppercase tracking-widest">— Dan Kennedy</footer>
</blockquote>
<div className="mt-10 space-y-6 text-lg text-neutral-600 font-geist-mono leading-relaxed">
<p className="">
                A maioria dos lojistas de estofados acredita que o estoque de sofás importados ou o showroom bem decorado é o seu maior ativo. Na realidade, o seu lucro real
                está na sua <span className="text-neutral-900 font-medium">LISTA</span> de contatos.
              </p>
<p className="">
                Hoje você é refém do "aluguel" das redes sociais. Se o custo por lead triplicar amanhã, sua margem desaparece. Ao organizar e possuir sua própria base no CRM
                da Aura, você deixa de alugar a audiência do Instagram e passa a <span className="text-neutral-900 font-medium">POSSUIR</span> o tráfego. Quem possui a lista,
                possui a previsibilidade do faturamento.
              </p>
</div>
</div>
</div>
</section>

<section className="sm:px-8 border-neutral-100 border-t pt-24 pr-6 pb-16 pl-6" id="quem-somos">
<div className="max-w-6xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 mb-6">Dois especialistas. Uma solução completa.</h2>
<p className="text-xl leading-relaxed text-neutral-600 font-geist-mono max-w-3xl">
              A Aura nasceu da combinação entre marketing de performance e automação inteligente — e agora traz esse sistema completo para a Arallu Estofados Premium.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
<div className="flex flex-col sm:flex-row gap-8 items-start bg-neutral-50/50 p-6 md:p-8 rounded-3xl border border-neutral-100">
<div className="w-full sm:w-48 aspect-[3/4] bg-neutral-200 rounded-2xl overflow-hidden flex-shrink-0">
<img alt="Foto Rudson placeholder" className="w-full h-full object-cover grayscale" src="https://i.ibb.co/QFsfFRtY/unnamed.jpg?w=800&amp;q=80"/>
</div>
<div className="space-y-6 pt-2">
<div className="">
<h3 className="text-2xl font-medium text-neutral-900 tracking-tight">Rudson</h3>
<p className="text-xs text-neutral-500 font-geist-mono uppercase tracking-widest mt-2">Especialista em Performance</p>
</div>
<ul className="text-base text-neutral-600 space-y-3 font-geist-mono">
<li>• Marketing &amp; Tráfego Pago</li>
<li className="">• Campanhas de aquisição</li>
<li className="">• Performance para lojas </li>
</ul>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-8 items-start bg-neutral-50/50 p-6 md:p-8 rounded-3xl border border-neutral-100">
<div className="w-full sm:w-48 aspect-[3/4] bg-neutral-200 rounded-2xl overflow-hidden flex-shrink-0">
<img alt="Foto Marco placeholder" className="w-full h-full object-cover grayscale" src="https://i.ibb.co/v44B1CBk/24334.jpg?w=800&amp;q=80"/>
</div>
<div className="space-y-6 pt-2">
<div>
<h3 className="text-2xl font-medium text-neutral-900 tracking-tight">Marco</h3>
<p className="text-xs text-neutral-500 font-geist-mono uppercase tracking-widest mt-2">Especialista em Automação</p>
</div>
<ul className="text-base text-neutral-600 space-y-3 font-geist-mono">
<li>• Automações &amp; IA</li>
<li className="">• Funis e follow-ups</li>
<li className="">• Sistemas automatizados</li>
</ul>
</div>
</div>
</div>
<div className="flex flex-wrap gap-4 mt-12 items-center">
<a className="px-6 py-3 rounded-lg bg-neutral-900 text-white font-normal hover:bg-neutral-800 transition-colors font-geist-mono text-base" href="#planos">Ver planos</a>
<a className="hover:bg-neutral-50 transition-colors text-base font-normal text-neutral-900 font-geist-mono border-neutral-200 border rounded-lg pt-3 pr-6 pb-3 pl-6" href="https://wa.me/5500000000000">Chamar no WhatsApp</a>
<div className="ml-auto hidden sm:flex items-center gap-2 px-3 py-2 rounded-full bg-green-50 text-green-700 border border-green-200 text-xs font-geist-mono w-fit">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
              Disponível para novos projetos
            </div>
</div>
</div>
</section>

<section className="sm:px-8 bg-white border-neutral-200 border-t pt-24 pr-6 pb-24 pl-6">
<div className="max-w-6xl mx-auto">
<div className="mb-12">
<div className="flex items-center gap-3 mb-6">
<span className="text-xs font-medium text-neutral-400 uppercase tracking-widest font-geist-mono">CRM — PIPELINE PARA ESTOFADOS</span>
<div className="h-px flex-1 bg-neutral-200"></div>
</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 mb-4">Um pipeline construído para a realidade da sua loja.</h2>
<p className="text-lg text-neutral-500 font-geist-mono max-w-3xl leading-relaxed">
              Cada etapa reflete o processo real de venda de um sofá personalizado — desde o primeiro contato até a entrega e o pós-venda automatizado.
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 md:gap-3">

<div className="bg-white border border-neutral-200 rounded-xl p-4">
<div className="flex items-start gap-3">
<iconify-icon className="text-neutral-400" icon="solar:user-plus-linear" width="22"></iconify-icon>
<div className="min-w-0">
<div className="flex items-center gap-2">
<span className="bg-neutral-900 text-white text-xs rounded-full px-2 py-0.5 font-geist-mono">1</span>
<span className="font-medium text-sm text-neutral-900">Novo Lead</span>
</div>
<p className="text-xs text-neutral-500 font-geist-mono mt-1">Lead entra pelo formulário, WhatsApp ou redes sociais</p>
</div>
</div>
</div>
<div className="hidden md:flex items-center justify-center text-neutral-300">
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
<div className="md:hidden flex items-center justify-center text-neutral-300">
<iconify-icon icon="solar:arrow-down-linear" width="18"></iconify-icon>
</div>

<div className="bg-white border border-neutral-200 rounded-xl p-4">
<div className="flex items-start gap-3">
<iconify-icon className="text-neutral-400" icon="solar:chat-round-linear" width="22"></iconify-icon>
<div className="min-w-0">
<div className="flex items-center gap-2">
<span className="bg-neutral-900 text-white text-xs rounded-full px-2 py-0.5 font-geist-mono">2</span>
<span className="font-medium text-sm text-neutral-900">Contato Iniciado</span>
</div>
<p className="text-xs text-neutral-500 font-geist-mono mt-1">Primeiro contato feito. Automação dispara mensagem de boas-vindas</p>
</div>
</div>
</div>
<div className="hidden md:flex items-center justify-center text-neutral-300">
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
<div className="md:hidden flex items-center justify-center text-neutral-300">
<iconify-icon icon="solar:arrow-down-linear" width="18"></iconify-icon>
</div>

<div className="bg-white border border-neutral-200 rounded-xl p-4">
<div className="flex items-start gap-3">
<iconify-icon className="text-neutral-400" icon="solar:ruler-angular-linear" width="22"></iconify-icon>
<div className="min-w-0">
<div className="flex items-center gap-2">
<span className="bg-neutral-900 text-white text-xs rounded-full px-2 py-0.5 font-geist-mono">3</span>
<span className="font-medium text-sm text-neutral-900">Medidas Solicitadas</span>
</div>
<p className="text-xs text-neutral-500 font-geist-mono mt-1">Vendedor solicita foto da sala e medidas aproximadas</p>
</div>
</div>
</div>

<div className="md:col-span-5 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 md:gap-3">


<div className="bg-white border border-neutral-200 rounded-xl p-4">
<div className="flex items-start gap-3">
<iconify-icon className="text-neutral-400" icon="solar:document-text-linear" width="22"></iconify-icon>
<div className="min-w-0">
<div className="flex items-center gap-2">
<span className="bg-neutral-900 text-white text-xs rounded-full px-2 py-0.5 font-geist-mono">4</span>
<span className="font-medium text-sm text-neutral-900">Orçamento Enviado</span>
</div>
<p className="text-xs text-neutral-500 font-geist-mono mt-1">Proposta personalizada enviada com modelos, tecidos e preço</p>
</div>
</div>
</div>
<div className="hidden md:flex items-center justify-center text-neutral-300">
<iconify-icon className="" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
<div className="md:hidden flex items-center justify-center text-neutral-300">
<iconify-icon icon="solar:arrow-down-linear" width="18"></iconify-icon>
</div>

<div className="bg-white border border-neutral-200 rounded-xl p-4">
<div className="flex items-start gap-3">
<iconify-icon className="text-neutral-400" icon="solar:clock-circle-linear" width="22"></iconify-icon>
<div className="min-w-0">
<div className="flex items-center gap-2">
<span className="bg-neutral-900 text-white text-xs rounded-full px-2 py-0.5 font-geist-mono">5</span>
<span className="font-medium text-sm text-neutral-900">Cliente Analisando</span>
</div>
<p className="text-xs text-neutral-500 font-geist-mono mt-1">
                      Follow-up automático ativado. Sistema acompanha sem o vendedor precisar lembrar
                    </p>
</div>
</div>
</div>
<div className="hidden md:flex items-center justify-center text-neutral-300">
<iconify-icon className="" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
<div className="md:hidden flex items-center justify-center text-neutral-300">
<iconify-icon icon="solar:arrow-down-linear" width="18"></iconify-icon>
</div>

<div className="bg-white border border-neutral-200 rounded-xl p-4">
<div className="flex items-start gap-3">
<iconify-icon className="text-neutral-400" icon="solar:hand-shake-linear" width="22"></iconify-icon>
<div className="min-w-0">
<div className="flex items-center gap-2">
<span className="bg-neutral-900 text-white text-xs rounded-full px-2 py-0.5 font-geist-mono">6</span>
<span className="font-medium text-sm text-neutral-900">Negociação</span>
</div>
<p className="text-xs text-neutral-500 font-geist-mono mt-1">Ajuste de medidas, tecido ou condição de pagamento</p>
</div>
</div>
</div>
</div>

<div className="md:col-span-5 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 md:gap-3">

<div className="bg-white border border-neutral-200 rounded-xl p-4">
<div className="flex items-start gap-3">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear" width="22"></iconify-icon>
<div className="min-w-0">
<div className="flex items-center gap-2">
<span className="bg-neutral-900 text-white text-xs rounded-full px-2 py-0.5 font-geist-mono">7</span>
<span className="font-medium text-sm text-neutral-900">Venda Fechada</span>
</div>
<p className="text-xs text-neutral-500 font-geist-mono mt-1">Pedido confirmado. Cliente movido para produção automaticamente</p>
</div>
</div>
</div>
<div className="hidden md:flex items-center justify-center text-neutral-300">
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
<div className="md:hidden flex items-center justify-center text-neutral-300">
<iconify-icon icon="solar:arrow-down-linear" width="18"></iconify-icon>
</div>

<div className="bg-white border border-neutral-200 rounded-xl p-4">
<div className="flex items-start gap-3">
<iconify-icon className="text-neutral-400" icon="solar:settings-linear" width="22"></iconify-icon>
<div className="min-w-0">
<div className="flex items-center gap-2">
<span className="bg-neutral-900 text-white text-xs rounded-full px-2 py-0.5 font-geist-mono">8</span>
<span className="font-medium text-sm text-neutral-900">Produção</span>
</div>
<p className="text-xs text-neutral-500 font-geist-mono mt-1">Cliente recebe update automático: "Seu sofá está em produção"</p>
</div>
</div>
</div>
<div className="hidden md:flex items-center justify-center text-neutral-300">
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
<div className="md:hidden flex items-center justify-center text-neutral-300">
<iconify-icon icon="solar:arrow-down-linear" width="18"></iconify-icon>
</div>

<div className="bg-white border border-neutral-200 rounded-xl p-4">
<div className="flex items-start gap-3">
<iconify-icon className="text-neutral-400" icon="solar:delivery-linear" width="22"></iconify-icon>
<div className="min-w-0">
<div className="flex items-center gap-2">
<span className="bg-neutral-900 text-white text-xs rounded-full px-2 py-0.5 font-geist-mono">9</span>
<span className="font-medium text-sm text-neutral-900">Entrega Realizada</span>
</div>
<p className="text-xs text-neutral-500 font-geist-mono mt-1">Entrega concluída. Fluxo de pós-venda e avaliação é acionado</p>
</div>
</div>
</div>
</div>
</div>

<div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 md:p-8 mt-12">
<h3 className="text-xl font-medium tracking-tight text-neutral-900">Visão do gestor — métricas em tempo real</h3>
<p className="font-geist-mono text-neutral-500 text-sm mt-2">Todas essas métricas ficam visíveis no dashboard. Chega de gestão no escuro.</p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
<div className="">
<iconify-icon className="text-neutral-400" icon="solar:document-text-linear" width="28"></iconify-icon>
<div className="text-sm font-medium text-neutral-700 mt-2">Orçamentos enviados</div>
</div>
<div className="">
<iconify-icon className="text-neutral-400" icon="solar:check-circle-linear" width="28"></iconify-icon>
<div className="text-sm font-medium text-neutral-700 mt-2">Vendas fechadas</div>
</div>
<div className="">
<iconify-icon className="text-neutral-400" icon="solar:user-check-rounded-linear" width="28"></iconify-icon>
<div className="text-sm font-medium text-neutral-700 mt-2">Leads qualificados</div>
</div>
<div className="">
<iconify-icon className="text-neutral-400" icon="solar:graph-new-up-linear" width="28"></iconify-icon>
<div className="text-sm font-medium text-neutral-700 mt-2">Taxa de conversão</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:px-8 text-white bg-neutral-900 pt-24 pr-6 pb-24 pl-6">
<div className="max-w-4xl mr-auto ml-auto">
<div className="text-center mb-16">
<span className="uppercase block text-xs font-medium text-neutral-500 tracking-widest font-geist-mono mb-4">Fluxos de recontato da operação organizada</span>
<h2 className="md:text-4xl text-3xl font-medium tracking-tight mb-6">Follow-up automático — pare de perder orçamentos</h2>
<p className="text-lg text-neutral-400 font-geist-mono">
              Após o orçamento ser enviado, essa sequência dispara automaticamente via WhatsApp — sem o vendedor precisar lembrar de nada.
            </p>
</div>
<div className="space-y-0 border-t border-neutral-800">
<div className="flex flex-col md:flex-row justify-between md:items-center py-6 border-b border-neutral-800 gap-4">
<div className="flex gap-4 items-center">
<span className="shrink-0 text-xs text-neutral-500 font-geist-mono w-14">4h</span>
<div className="flex items-center gap-2 font-normal text-neutral-300">
<iconify-icon className="" icon="logos:whatsapp-icon" width="20"></iconify-icon>
<span className="text-sm">WhatsApp</span>
</div>
</div>
<span className="text-base text-neutral-400 md:text-right w-full md:w-auto font-geist-mono">"Conseguiu ver o orçamento que enviamos? Qualquer dúvida estou por aqui!"</span>
</div>
<div className="flex flex-col md:flex-row justify-between md:items-center py-6 border-b border-neutral-800 gap-4">
<div className="flex gap-4 items-center">
<span className="shrink-0 text-xs text-neutral-500 font-geist-mono w-14">20h</span>
<div className="flex items-center gap-2 font-normal text-neutral-300">
<iconify-icon className="" icon="logos:whatsapp-icon" width="20"></iconify-icon>
<span className="text-sm">WhatsApp</span>
</div>
</div>
<span className="md:text-right md:w-auto text-base text-neutral-400 font-geist-mono w-full">"Se precisar ajustar medidas, tecido ou cor, podemos adaptar sem problema. Quer que eu refaça o orçamento com alguma mudança?"</span>
</div>

<div className="flex flex-col md:flex-row justify-between md:items-center py-6 border-b border-neutral-800 gap-4">
<div className="flex gap-4 items-center">
<span className="shrink-0 text-xs text-neutral-500 font-geist-mono w-14">48h</span>
<div className="flex items-center gap-2 font-normal text-neutral-300">
<iconify-icon className="" icon="logos:whatsapp-icon" width="20"></iconify-icon>
<span className="text-sm">WhatsApp</span>
</div>
</div>
<span className="md:text-right md:w-auto text-base text-neutral-400 font-geist-mono w-full">"Oii, esqueceu de mim? consegui uma condição bem bacana pra vc aqui"</span>
</div>

<div className="flex flex-col md:flex-row justify-between md:items-start py-6 border-b border-neutral-800 gap-4">
<div className="flex gap-4 items-center mt-1">
<span className="shrink-0 text-xs text-neutral-500 font-geist-mono w-14">72h</span>
<div className="flex items-center gap-2 font-normal text-neutral-300">
<iconify-icon className="" icon="logos:whatsapp-icon" width="20"></iconify-icon>
<span className="text-sm">WhatsApp</span>
</div>
</div>
<div className="flex flex-col md:items-end w-full md:w-auto gap-4">
<span className="md:text-right leading-relaxed text-base text-neutral-400 font-geist-mono max-w-lg">"Estou sendo insistente né? 
Se não quiser mais receber mensagens, é só me avisar que paro de te incomodar, ok? posso te apresentar um modelo que sai bastante aqui?"</span>
<button className="px-4 py-2 rounded-lg border border-neutral-700 text-neutral-300 text-xs font-normal hover:bg-neutral-800 hover:text-white transition-colors flex items-center gap-2 w-fit">
<iconify-icon icon="solar:forbidden-linear" width="14"></iconify-icon> Parar mensagens
                            </button>
</div>
</div>
</div>
</div>
</section>

<section className="sm:px-8 bg-white border-neutral-200 border-t pt-24 pr-6 pb-24 pl-6" id="planos">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900">Escolha o nível de operação da Arallu
            </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center h-full" id="plans-wrap">

<div className="plan-card bg-neutral-900 text-white rounded-3xl p-8 shadow-2xl relative border border-neutral-800 flex flex-col justify-between h-full min-h-[500px]" data-index="0" onmouseenter="document.getElementById('plans-wrap').setAttribute('data-active', '0')" onmouseleave="document.getElementById('plans-wrap').removeAttribute('data-active')">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-medium px-4 py-1 rounded-full uppercase tracking-widest whitespace-nowrap">
                MAIS RECOMENDADO</div>
<div className="">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-4 block">Plano 1</span>
<h3 className="text-xl font-medium mb-2 tracking-tight">Operação Organizada</h3>
<div className="text-3xl font-medium mb-4 tracking-tight">R$
                  2.999<span className="text-base text-neutral-500 font-normal"> implantação + R$ 299/mês</span></div>
<p className="text-sm text-neutral-400 font-geist-mono mb-6">Antes de pensar em escalar, a loja precisa ter
                  processo. Esse plano organiza toda a operação comercial da Arallu do zero.</p>
<ul className="text-base text-neutral-300 space-y-4 mb-8">
<li className="flex gap-3"><iconify-icon className="text-green-500 mt-1 shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon> CRM configurado para loja de estofados</li>
<li className="flex gap-3"><iconify-icon className="text-green-500 mt-1 shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon> Pipeline completo (Novo Lead → Entrega Realizada)</li>
<li className="flex gap-3"><iconify-icon className="text-green-500 mt-1 shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon> Follow-up automático de orçamento via WhatsApp</li>
</ul>
</div>
<p className="text-sm text-neutral-500 font-geist-mono mt-8 border-t border-neutral-800 pt-6">Tudo que a Arallu
                precisa para parar de depender da sorte e vender com processo.</p>
</div>

<div className="plan-card border border-neutral-200 rounded-3xl p-8 flex flex-col justify-between bg-white h-full relative" data-index="1" onmouseenter="document.getElementById('plans-wrap').setAttribute('data-active', '1')" onmouseleave="document.getElementById('plans-wrap').removeAttribute('data-active')">
<div className="">
<span className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-4 block">Plano 2</span>
<h3 className="text-xl font-medium mb-2 tracking-tight">Operação Avançada</h3>
<div className="text-2xl font-medium mb-4 tracking-tight">R$
                  4.497<span className="text-base text-neutral-400 font-normal"> implantação + R$ 299/mês</span></div>
<p className="text-sm text-neutral-500 font-geist-mono mb-6">Tudo do Plano 1, mais duas estratégias avançadas e
                  reativação da base. Os exemplos abaixo são sugestões — as estratégias são definidas juntos no diagnóstico.</p>
<ul className="text-base text-neutral-500 space-y-4 mb-8">
<li className="flex gap-3"><iconify-icon className="text-neutral-400 mt-1 shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon> Tudo do Plano 1</li>
<li className="flex gap-3"><iconify-icon className="text-neutral-400 mt-1 shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon> Landing page de orçamento personalizada</li>
<li className="flex gap-3"><iconify-icon className="text-neutral-400 mt-1 shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon> Quiz de qualificação do sofá ideal</li>
</ul>
</div>
<p className="text-sm text-neutral-400 font-geist-mono mt-8 border-t border-neutral-100 pt-6">Para quem já quer sair na
                frente e ativar crescimento desde o início.</p>
</div>

<div className="plan-card border border-neutral-200 rounded-3xl p-8 flex flex-col justify-between bg-white h-full relative" data-index="2" onmouseenter="document.getElementById('plans-wrap').setAttribute('data-active', '2')" onmouseleave="document.getElementById('plans-wrap').removeAttribute('data-active')">
<div className="">
<span className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-4 block">Plano 3</span>
<h3 className="text-xl font-medium mb-2 tracking-tight">Sob Medida</h3>
<div className="text-2xl font-medium tracking-tight mb-4">Sob consulta</div>
<p className="text-sm text-neutral-500 font-geist-mono mb-6">Proposta 100% personalizada. Escopo, entregas e valor são
                  definidos juntos, do zero, conforme a necessidade real da Arallu.</p>
<ul className="text-base text-neutral-500 space-y-4 mb-8">
<li className="flex gap-3"><iconify-icon className="text-neutral-400 mt-1 shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon> Tudo do Plano 2</li>
<li className="flex gap-3"><iconify-icon className="text-neutral-400 mt-1 shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon> Estratégias definidas no diagnóstico</li>
<li className="flex gap-3"><iconify-icon className="text-neutral-400 mt-1 shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon> Valor sob consulta após alinhamento</li>
</ul>
</div>
<p className="text-sm text-neutral-400 font-geist-mono mt-8 border-t border-neutral-100 pt-6">Desenhado para operações que
                precisam de soluções além do padrão.</p>
</div>
</div>
</div>
</section>

<section className="px-6 sm:px-8 bg-white border-t border-neutral-200 py-24">
<div className="max-w-6xl mx-auto">
<div className="mb-12">
<div className="flex items-center gap-3 mb-6">
<span className="text-xs font-medium text-neutral-400 uppercase tracking-widest font-geist-mono">OS TRÊS PLANOS</span>
<div className="h-px flex-1 bg-neutral-200"></div>
</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 mb-4">
              Três planos, uma lógica clara: organizar, escalar, personalizar.
            </h2>
<p className="text-lg text-neutral-600 font-geist-mono leading-relaxed max-w-4xl">
              O Plano 1 estrutura toda a operação comercial da Arallu — CRM, pipeline, follow-up e pós-venda. O Plano 2
              adiciona landing page, quiz de qualificação e reativação da base. O Plano 3 é construído sob medida, com escopo
              definido conforme a demanda.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-neutral-50/50 border border-neutral-200 rounded-2xl p-6 md:p-8">
<h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-6">Plano 1 — Operação organizada</h3>
<ul className="text-base text-neutral-600 space-y-3 font-geist-mono">
<li className="flex gap-3"><iconify-icon className="text-neutral-400 mt-1 shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon> CRM + pipeline completo (9 etapas)</li>
<li className="flex gap-3"><iconify-icon className="text-neutral-400 mt-1 shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon> Follow-up automático de orçamento</li>
<li className="flex gap-3"><iconify-icon className="text-neutral-400 mt-1 shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon> Automação de pós-venda</li>
</ul>
</div>
<div className="bg-white border border-neutral-200 rounded-2xl p-6 md:p-8">
<h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-6">Plano 2 — Operação avançada</h3>
<ul className="text-base text-neutral-600 space-y-3 font-geist-mono">
<li className="flex gap-3"><iconify-icon className="text-neutral-400 mt-1 shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon> Tudo do Plano 1</li>
<li className="flex gap-3"><iconify-icon className="text-neutral-400 mt-1 shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon> Landing page + quiz de qualificação</li>
<li className="flex gap-3"><iconify-icon className="text-neutral-400 mt-1 shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon> Reativação da base de clientes</li>
</ul>
</div>
<div className="bg-white border border-neutral-200 rounded-2xl p-6 md:p-8">
<h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-6">Plano 3 — Sob medida</h3>
<ul className="text-base text-neutral-600 space-y-3 font-geist-mono">
<li className="flex gap-3"><iconify-icon className="text-neutral-400 mt-1 shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon> Tudo do Plano 2</li>
<li className="flex gap-3"><iconify-icon className="text-neutral-400 mt-1 shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon> Estratégias e integrações sob demanda</li>
<li className="flex gap-3"><iconify-icon className="text-neutral-400 mt-1 shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon> Escopo definido no diagnóstico</li>
</ul>
</div>
</div>
</div>
</section>

<section className="sm:px-8 bg-white border-neutral-200 border-t pt-24 pr-6 pb-24 pl-6" id="processo">
<div className="mx-auto max-w-6xl">
<div className="mb-16">
<div className="flex items-center gap-3 mb-6">
<span className="text-xs font-medium text-neutral-400 uppercase tracking-widest font-geist-mono">PLANO 1 — IMPLEMENTAÇÃO</span>
<div className="h-px flex-1 bg-neutral-200"></div>
</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 mb-4">Como funciona a implementação para a Arallu</h2>
<p className="leading-relaxed text-base text-neutral-500 font-geist-mono max-w-3xl">
              O prazo de até 10 dias se refere à implementação do plano 1: organização do CRM, pipeline e fluxos automáticos principais da operação comercial da Arallu.
            </p>
</div>
<div className="space-y-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="">
<div className="flex items-center gap-2 mb-4">
<span className="px-3 py-1 text-xs bg-neutral-900 text-white rounded-full font-geist-mono uppercase tracking-widest">Dia 1</span>
<span className="text-sm text-neutral-500 font-geist-mono font-normal">Diagnóstico</span>
</div>
<h3 className="text-2xl font-medium text-neutral-900 mb-4 tracking-tight">Reunião de Diagnóstico</h3>
<p className="leading-relaxed text-lg text-neutral-600 font-geist-mono mb-6">
                  Mapeamos a operação atual da Arallu: como chegam os leads, como os orçamentos são feitos, onde as vendas travam. Definimos a estrutura ideal do pipeline para
                  a realidade da loja.
                </p>
</div>
<div className="bg-neutral-50 border border-neutral-200 rounded-2xl aspect-video overflow-hidden">
<a className="block w-full h-full" href="https://ibb.co/QjxgVBbt" rel="noopener noreferrer" target="_blank">
<img alt="Funil de IA no CRM" className="w-full h-full object-cover" loading="lazy" src="https://i.ibb.co/Kz8PgZ0S/Gemini-Generated-Image-kqeeb5kqeeb5kqee.png"/>
</a>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="order-1 lg:order-2">
<div className="flex items-center gap-2 mb-4">
<span className="px-3 py-1 text-xs bg-neutral-900 text-white rounded-full font-geist-mono uppercase tracking-widest">Dias 2–5</span>
<span className="text-sm text-neutral-500 font-geist-mono font-normal">Setup</span>
</div>
<h3 className="text-2xl font-medium text-neutral-900 mb-4 tracking-tight">Configuração do Ambiente</h3>
<p className="leading-relaxed text-lg text-neutral-600 font-geist-mono mb-6">
                  Configuramos o CRM com o pipeline completo da Arallu — das 9 etapas — e estruturamos os fluxos principais da operação comercial.
                </p>
</div>
<div className="order-2 lg:order-1 bg-neutral-50 border border-neutral-200 rounded-2xl aspect-video overflow-hidden">
<a className="block w-full h-full" href="https://ibb.co/Kx44Cmvp" rel="noopener noreferrer" target="_blank">
<img alt="Setup do CRM — conexões e funis" className="w-full h-full object-cover" loading="lazy" src="https://i.ibb.co/Ldjj4v7X/unnamed-4.jpg"/>
</a>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="">
<div className="flex items-center gap-2 mb-4">
<span className="px-3 py-1 text-xs bg-neutral-900 text-white rounded-full font-geist-mono uppercase tracking-widest">Dias 6–8</span>
<span className="text-sm text-neutral-500 font-geist-mono font-normal">Automação</span>
</div>
<h3 className="text-2xl font-medium text-neutral-900 mb-4 tracking-tight">Automações e Follow-ups</h3>
<p className="leading-relaxed text-lg text-neutral-600 font-geist-mono mb-6">
                  Implementamos o follow-up automático de orçamento, as mensagens de acompanhamento de produção e entrega, e o fluxo de solicitação de avaliação pós-venda.
                </p>
</div>
<div className="bg-neutral-50 border border-neutral-200 rounded-2xl aspect-video overflow-hidden">
<a className="block w-full h-full" href="https://ibb.co/W4bsRP3W" rel="noopener noreferrer" target="_blank">
<img alt="Automações e follow-up no CRM" className="w-full h-full object-cover" loading="lazy" src="https://i.ibb.co/FLSnd0Wb/unnamed-7.jpg"/>
</a>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="order-1 lg:order-2">
<div className="flex items-center gap-2 mb-4">
<span className="px-3 py-1 text-xs bg-neutral-900 text-white rounded-full font-geist-mono uppercase tracking-widest">Dias 9–10</span>
<span className="text-sm text-neutral-500 font-geist-mono font-normal">Entrega</span>
</div>
<h3 className="text-2xl font-medium text-neutral-900 mb-4 tracking-tight">Testes, Ajustes &amp; Entrega</h3>
<p className="leading-relaxed text-lg text-neutral-600 font-geist-mono mb-6">
                  Testamos todos os fluxos, ajustamos com base nos produtos e equipe da Arallu, treinamos o time e entregamos a operação pronta para rodar.
                </p>
</div>
<div className="order-2 lg:order-1 bg-neutral-50 border border-neutral-200 rounded-2xl aspect-video overflow-hidden">
<a className="block w-full h-full" href="https://ibb.co/Y7zdPMfK" rel="noopener noreferrer" target="_blank">
<img alt="Entrega do CRM — testes e dashboard" className="w-full h-full object-cover" loading="lazy" src="https://i.ibb.co/PZ7WFn1b/unnamed-6.jpg"/>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 sm:px-8 bg-white border-t border-neutral-200 py-24">
<div className="max-w-6xl mx-auto">
<div className="bg-neutral-900 text-white rounded-3xl border border-neutral-800 p-8 md:p-12">
<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900 px-4 py-2 text-xs font-medium uppercase tracking-widest text-neutral-200 font-geist-mono">
                  CAMADA AVANÇADA — O QUE MAIS É POSSÍVEL
                </div>
<h2 className="mt-6 text-3xl md:text-4xl font-medium tracking-tight text-white">A operação base organiza. As estratégias avançadas escalam.</h2>
<p className="mt-4 text-lg text-neutral-300 font-geist-mono leading-relaxed max-w-2xl">
                  Depois que o CRM e o pipeline estão rodando, essas são as estratégias que podemos ativar para a Arallu crescer com inteligência — cada uma com objetivo claro e
                  resultado esperado.
                </p>
</div>
<div className="flex flex-col gap-3 w-full md:w-auto">
<a className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-white text-neutral-900 px-6 py-3 text-base font-normal font-geist-mono hover:bg-neutral-100 transition-colors" href="https://wa.me/5500000000000">
                  Quero saber mais
                  <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<span className="text-xs text-neutral-500 font-geist-mono">Cada estratégia pode ser contratada separadamente ou em conjunto.</span>
</div>
</div>
<p className="mt-10 text-sm text-neutral-400 font-geist-mono">Exemplos do que pode ser desenvolvido nessa camada:</p>
<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-6">
<iconify-icon className="text-neutral-200" icon="solar:page-linear" width="22"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-white mt-3 mb-3">Landing Page de Orçamento</h3>
<p className="text-sm text-neutral-300 font-geist-mono leading-relaxed">
                  Criamos uma página dedicada dentro da plataforma com o título "Peça seu orçamento de sofá personalizado". O lead preenche o formulário, cai direto no CRM já na
                  etapa correta do pipeline e recebe a mensagem automática de boas-vindas — sem nenhuma ação manual do vendedor.
                </p>
<div className="mt-4 text-xs bg-neutral-800 text-neutral-300 px-2 py-1 rounded uppercase tracking-wider font-geist-mono w-fit">Captação automática</div>
</div>
<div className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-6">
<iconify-icon className="text-neutral-200" icon="solar:dialog-2-linear" width="22"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-white mt-3 mb-3">Quiz do Sofá Ideal</h3>
<p className="text-sm text-neutral-300 font-geist-mono leading-relaxed">
                  Um formulário inteligente que qualifica o lead antes de chegar no vendedor. As perguntas mapeiam: tamanho da sala, estilo desejado (moderno, clássico), cor,
                  tecido, quantidade de lugares e cidade. A resposta final que o lead recebe é: "Seu sofá ideal custa entre R$X e R$Y. Quer receber o orçamento?" — aumentando a
                  intenção de compra antes do primeiro contato.
                </p>
<div className="mt-4 text-xs bg-neutral-800 text-neutral-300 px-2 py-1 rounded uppercase tracking-wider font-geist-mono w-fit">Qualificação inteligente</div>
</div>
<div className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-6">
<iconify-icon className="text-neutral-200" icon="solar:gallery-wide-linear" width="22"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-white mt-3 mb-3">Catálogo Automatizado de Modelos</h3>
<p className="text-sm text-neutral-300 font-geist-mono leading-relaxed">
                  Montamos o catálogo da Arallu dentro da plataforma — com fotos, tecidos disponíveis e medidas de cada modelo. Quando o lead entra no funil, ele recebe
                  automaticamente: "Veja nossos modelos mais vendidos" — sem o vendedor precisar enviar nada. O cliente chega na conversa já tendo visto os produtos.
                </p>
<div className="mt-4 text-xs bg-neutral-800 text-neutral-300 px-2 py-1 rounded uppercase tracking-wider font-geist-mono w-fit">Enviado automaticamente</div>
</div>
<div className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-6">
<iconify-icon className="text-neutral-200" icon="solar:stars-linear" width="22"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-white mt-3 mb-3">Automação de Prova Social</h3>
<p className="text-sm text-neutral-300 font-geist-mono leading-relaxed">
                  No momento certo do funil — quando o cliente está analisando o orçamento — o sistema envia automaticamente fotos de entregas recentes, avaliações e depoimentos.
                  Exemplo: "Esse modelo que você pediu foi entregue ontem para uma cliente aqui em [cidade]. Olha como ficou!" com foto. Isso gera confiança sem nenhum esforço
                  do vendedor.
                </p>
<div className="mt-4 text-xs bg-neutral-800 text-neutral-300 px-2 py-1 rounded uppercase tracking-wider font-geist-mono w-fit">Gatilho de confiança</div>
</div>
<div className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-6">
<iconify-icon className="text-neutral-200" icon="solar:refresh-circle-linear" width="22"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-white mt-3 mb-3">Campanhas de Reativação de Base</h3>
<p className="text-sm text-neutral-300 font-geist-mono leading-relaxed">
                  Clientes que compraram há mais de 6 meses têm alto potencial de recompra — reforma do estofado, novo modelo para outro cômodo, presente para alguém da família.
                  Criamos uma campanha com sequência de mensagens específica para esse perfil. Resultado: vendas geradas da base que você já possui, sem gastar nada em tráfego.
                </p>
<div className="mt-4 text-xs bg-neutral-800 text-neutral-300 px-2 py-1 rounded uppercase tracking-wider font-geist-mono w-fit">Sem custo de aquisição</div>
</div>
<div className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-6">
<iconify-icon className="text-neutral-200" icon="solar:cpu-linear" width="22"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-white mt-3 mb-3">IA de Detecção de Intenção de Compra</h3>
<p className="text-sm text-neutral-300 font-geist-mono leading-relaxed">
                  Quando um disparo em massa é enviado para a base, as respostas chegam misturadas — quem quer comprar, quem só tem dúvida, quem respondeu por engano. Nossa IA lê
                  as respostas e classifica automaticamente: leads quentes vão direto para o vendedor, os demais entram em nurturing. O vendedor foca só em quem está pronto para
                  fechar.
                </p>
<div className="mt-4 text-xs bg-neutral-800 text-neutral-300 px-2 py-1 rounded uppercase tracking-wider font-geist-mono w-fit">Foco total em quem compra</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:px-8 overflow-hidden bg-neutral-50 border-neutral-200 border-t pt-24 pr-0 pb-24 pl-0" id="cases">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16 px-6 sm:px-0">
<iconify-icon className="text-neutral-300 mb-4" icon="solar:arrow-down-linear" width="32"></iconify-icon>
<h2 className="text-3xl font-medium tracking-tight text-neutral-900 mb-2">Cases Reais</h2>
<p className="text-base text-neutral-500 font-geist-mono">Role para o lado e veja resultados de quem implementou o sistema da Aura.</p>
</div>
<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 px-6 sm:px-0 hide-scrollbar" id="cases-carousel">
<div className="min-w-full snap-center bg-white border border-neutral-200 rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center shadow-sm">
<div className="flex-1 space-y-8">
<iconify-icon className="text-neutral-300" icon="solar:quote-up-linear" width="40"></iconify-icon>
<h3 className="lg:text-2xl leading-relaxed text-xl font-normal italic text-neutral-700">
                  "Vcs transformaram minha loja. Antes os leads morriam perdidos lá e hoje meu vendedor só foca em quem realmente quer fechar. Ficou top msm amigo"
                </h3>
<div className="pt-6 border-t border-neutral-100">
<div className="font-medium text-lg text-neutral-900">Ágata Lohn</div>
<div className="uppercase text-sm text-neutral-500 tracking-widest font-geist-mono mt-1">Achei Meu iPhone — Florianópolis</div>
</div>
</div>
<div className="lg:w-[400px] aspect-square flex flex-col shrink-0 text-neutral-400 bg-neutral-100 w-full border-neutral-200 border rounded-2xl items-center justify-center">
<iconify-icon icon="solar:gallery-minimalistic-linear" width="40"></iconify-icon>
<span className="text-xs font-geist-mono mt-3 uppercase tracking-widest text-neutral-500">Print do funil</span>
</div>
</div>
<div className="min-w-full snap-center bg-white border border-neutral-200 rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center shadow-sm">
<div className="flex-1 space-y-8">
<iconify-icon className="text-neutral-300" icon="solar:quote-up-linear" width="40"></iconify-icon>
<h3 className="lg:text-2xl leading-relaxed text-xl font-normal italic text-neutral-700">
                  "Com o CRM e com a Bia, melhorou muito mesmo. Ela até vende sozinha como já te mandei. E tudo fica mais organizado lá na plataforma. Amo msm"
                </h3>
<div className="pt-6 border-t border-neutral-100">
<div className="text-lg font-medium text-neutral-900">Miriam — Mercado.com</div>
<div className="uppercase text-sm text-neutral-500 tracking-widest font-geist-mono mt-1">Loja Apple · Ribeirão Preto</div>
</div>
</div>
<div className="lg:w-[400px] aspect-square flex flex-col shrink-0 bg-neutral-100 w-full border-neutral-200 border rounded-2xl overflow-hidden">
<img alt="Print dos resultados — Felipe — Kai Imports" className="w-full h-full object-cover" loading="lazy" src="https://i.ibb.co/3HWGXk4/feedback.png"/>
</div>
</div>
<div className="min-w-full snap-center bg-white border border-neutral-200 rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center shadow-sm">
<div className="flex-1 space-y-8">
<iconify-icon className="text-neutral-300" icon="solar:quote-up-linear" width="40"></iconify-icon>
<h3 className="lg:text-2xl leading-relaxed text-xl font-normal italic text-neutral-700">
                  "Tá ficando. Aquele follow up que vc fez ficou top, muito fora da curva. Gosto muito do trabalho de vcs e sempre indico"
                </h3>
<div className="pt-6 border-t border-neutral-100">
<div className="text-lg font-medium text-neutral-900">Felipe — Kai Imports</div>
<div className="uppercase text-sm text-neutral-500 tracking-widest font-geist-mono mt-1">Loja Apple — Guarulhos/SP</div>
</div>
</div>
<div className="w-full lg:w-[400px] aspect-square bg-neutral-100 rounded-2xl border border-neutral-200 shrink-0 overflow-hidden">
<div className="w-full lg:w-[400px] aspect-square bg-neutral-100 rounded-2xl border border-neutral-200 shrink-0 overflow-hidden">
<a className="block w-full h-full" href="https://ibb.co/DgjZSptQ" rel="noopener noreferrer" target="_blank">
<img alt="Print do dashboard" className="w-full h-full object-cover" loading="lazy" src="https://i.ibb.co/bRGk8JPX/35841e59-4825-4292-be44-6ba807fe96ad.jpg"/>
</a>
</div>
</div>
</div>
</div>
<div className="flex items-center justify-center gap-2 px-6 sm:px-0">
<button aria-label="Case 1" className="w-2.5 h-2.5 rounded-full bg-neutral-900" data-case-dot="0" type="button"></button>
<button aria-label="Case 2" className="w-2.5 h-2.5 rounded-full bg-neutral-300" data-case-dot="1" type="button"></button>
<button aria-label="Case 3" className="w-2.5 h-2.5 rounded-full bg-neutral-300" data-case-dot="2" type="button"></button>
</div>
</div>
</section>

<footer className="bg-white border-t border-neutral-200 px-6 sm:px-8">
<div className="mx-auto max-w-6xl py-12 md:py-20">
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-between items-center">
<div>
<div className="font-medium text-xl tracking-tight mb-2">Aura</div>
<p className="text-neutral-500 text-base font-geist-mono">© 2026 Aura · Sistema de Vendas para Estofados Premium</p>
</div>
<div className="flex flex-col md:flex-row gap-6 md:justify-end items-start md:items-center text-base font-normal text-neutral-600">
<div className="flex items-center gap-2 px-3 py-2 rounded-full bg-green-50 text-green-700 border border-green-200 text-xs font-geist-mono">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                Disponível para novos projetos
              </div>
<nav className="flex gap-6">
<a className="hover:text-black transition" href="https://wa.me/5500000000000">WhatsApp</a>
<a className="hover:text-black transition" href="#">Instagram</a>
</nav>
</div>
</div>
</div>
</footer>
</main>

  
Taxa de conversão
    </>
  );
}
