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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons();

        // Tabs Logic
        function switchTab(tabId) {
            document.getElementById('tab-abrir').classList.add('hidden');
            document.getElementById('tab-trocar').classList.add('hidden');
            document.getElementById('btn-abrir').className = 'flex-1 py-3 text-base font-medium rounded-lg transition-all duration-300 text-slate-400 hover:text-white relative z-10';
            document.getElementById('btn-trocar').className = 'flex-1 py-3 text-base font-medium rounded-lg transition-all duration-300 text-slate-400 hover:text-white relative z-10';
            
            document.getElementById('tab-' + tabId).classList.remove('hidden');
            document.getElementById('btn-' + tabId).className = 'flex-1 py-3 text-base font-medium rounded-lg transition-all duration-300 text-white bg-white/10 shadow-sm ring-1 ring-white/10 relative z-10';
        }

        // Intersection Observer for Animations (replaces custom CSS .reveal)
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.setAttribute('data-visible', 'true');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.js-reveal').forEach(el => observer.observe(el));

        // Hero Canvas Animation (Adapted colors)
        const canvas = document.getElementById('hero-canvas');
        if (canvas) {
            const ctx = canvas.getContext('2d');
            let width, height, time = 0;
            
            function resize() {
                width = canvas.width = window.innerWidth;
                height = canvas.height = window.innerHeight;
            }
            window.addEventListener('resize', resize);
            resize();
            
            function animate() {
                time += 0.0015;
                ctx.fillStyle = '#02040a';
                ctx.fillRect(0, 0, width, height);
                ctx.globalCompositeOperation = 'screen';
                
                const numFolds = 28;
                for (let i = 0; i < numFolds; i++) {
                    const normalizedX = i / numFolds;
                    const xPos = (normalizedX * width) + Math.sin(time * 2 + i) * (width * 0.05);
                    const foldWidth = (width / numFolds) * 3;
                    
                    const baseIntensity = Math.sin(normalizedX * Math.PI) * 0.6 + 0.4;
                    const waveIntensity = (Math.sin(time * 3 + i * 0.4) + 1) * 0.5;
                    const gradientBoost = (normalizedX * 0.5) + 0.5;
                    const finalIntensity = baseIntensity * waveIntensity * gradientBoost;
                    
                    const grad = ctx.createLinearGradient(0, 0, 0, height);
                    grad.addColorStop(0, `rgba(2, 4, 10, 0)`);
                    grad.addColorStop(0.4, `rgba(60, 50, 20, ${finalIntensity * 0.2})`);
                    grad.addColorStop(0.7, `rgba(184, 152, 24, ${finalIntensity * 0.5})`);
                    grad.addColorStop(1, `rgba(255, 230, 140, ${finalIntensity * 0.9})`);
                    
                    ctx.fillStyle = grad;
                    ctx.beginPath();
                    ctx.rect(xPos - foldWidth / 2, 0, foldWidth, height);
                    ctx.fill();
                }
                
                ctx.globalCompositeOperation = 'source-over';
                requestAnimationFrame(animate);
            }
            animate();
        }
    
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
      

<nav className="fixed w-full top-0 z-50 bg-[#02040a]/70 backdrop-blur-2xl border-b border-white/[0.05] transition-all duration-300">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-2" href="#">
<img alt="Hórus" className="hover:opacity-100 transition-opacity opacity-90 h-8 invert brightness-0" src="https://media.discordapp.net/attachments/1179456209869619331/1337422998632140810/Horus.png?ex=67a75fe1&amp;is=67a60e61&amp;hm=46d3e6ba1c3f2b604b3168c4d5bf06c5f7dcd8ab1d06e2329c29cc46e855c7a5&amp;=&amp;format=webp&amp;quality=lossless"/>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-slate-400">
<a className="hover:text-white transition-colors duration-200" href="#solucoes">Soluções</a>
<a className="hover:text-white transition-colors duration-200" href="#diferenciais">Diferenciais</a>
<a className="hover:text-white transition-colors duration-200" href="#servicos">Serviços</a>
<a className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.05] rounded-lg backdrop-blur-sm transition-all duration-200" href="#cta">Contato</a>
</div>
<button className="md:hidden text-slate-400 hover:text-white">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<section className="relative min-h-screen overflow-x-hidden flex flex-col pt-16">
<canvas className="absolute inset-0 z-0 w-full h-full pointer-events-none opacity-80" height="687" id="hero-canvas" width="1056"></canvas>
<div className="relative z-10 flex flex-col flex-grow w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-16 md:pt-32">
<main className="flex-grow flex flex-col justify-center pb-32 pt-8 md:pt-0 max-w-3xl">
<div className="transition-all duration-1000 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 js-reveal opacity-0 mb-6 translate-y-8" data-visible="true">
<span className="text-sm font-medium tracking-wide text-[#b89818] uppercase">
                        Precisa abrir sua empresa ou quer uma contabilidade realmente melhor?
                    </span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.05] font-medium tracking-tight text-white mb-8 opacity-0 translate-y-8 transition-all duration-1000 delay-100 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 js-reveal" data-visible="true">
                    A Contabilidade Da Hórus Resolve Em Minutos O Que Outros Pedem Semanas.
                </h1>
<p className="md:text-xl leading-relaxed transition-all duration-1000 delay-200 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 js-reveal text-lg text-slate-400 opacity-0 max-w-2xl mb-10 translate-y-8" data-visible="true">
                    Abertura de CNPJ, contabilidade mensal, certificado digital na hora e suporte humano que atende quando você precisa. Em todo o Brasil.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 mb-8 opacity-0 translate-y-8 transition-all duration-1000 delay-300 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 js-reveal" data-visible="true">
<a className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#b89818] hover:bg-[#a38615] text-white transition-all duration-300 flex items-center justify-center text-base font-medium group shadow-[0_0_20px_rgba(184,152,24,0.3)] hover:shadow-[0_0_30px_rgba(184,152,24,0.5)]" href="#cta">
                        Quero abrir minha empresa
                        <i className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/[0.1] transition-all duration-300 flex items-center justify-center text-base font-medium" href="#cta">
                        Quero uma contabilidade melhor
                    </a>
</div>
<div className="flex gap-2 transition-all duration-1000 delay-500 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 js-reveal text-base text-slate-500 opacity-0 translate-y-8 items-center" data-visible="true">
<i className="w-5 h-5 text-[#b89818]" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span>Atendimento humano. Sem robô. Sem fila.</span>
</div>
</main>
</div>
</section>

<section className="py-16 border-y border-white/[0.05] overflow-hidden relative bg-white/[0.02]">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#02040a] to-transparent z-10 pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#02040a] to-transparent z-10 pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 mb-12 text-center opacity-0 translate-y-8 transition-all duration-1000 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 js-reveal" data-visible="true">
<h2 className="text-xl md:text-2xl font-normal tracking-tight text-slate-300 max-w-2xl mx-auto mb-4">
                Empresas em todo o Brasil já confiam na Hórus para cuidar da contabilidade
            </h2>
<p className="text-lg text-slate-500">
                Especialistas em contabilidade para empresas de serviço e profissionais que precisam de agilidade e segurança.
            </p>
</div>
<div className="flex overflow-hidden select-none" style={{maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'}}>
<div className="flex flex-shrink-0 min-w-full justify-around gap-16 px-8 items-center opacity-40" style={{animation: 'scroll 40s linear infinite'}}>
<div className="font-normal tracking-widest text-lg flex items-center gap-3 text-white"><i className="w-6 h-6" data-lucide="stethoscope" strokeWidth="1.5"></i> MÉDICOS</div>
<div className="font-normal tracking-widest text-lg flex items-center gap-3 text-white"><i className="w-6 h-6" data-lucide="scale" strokeWidth="1.5"></i> ADVOGADOS</div>
<div className="font-normal tracking-widest text-lg flex items-center gap-3 text-white"><i className="w-6 h-6" data-lucide="pen-tool" strokeWidth="1.5"></i> ARQUITETOS</div>
<div className="font-normal tracking-widest text-lg flex items-center gap-3 text-white"><i className="w-6 h-6" data-lucide="building-2" strokeWidth="1.5"></i> ENGENHEIROS</div>
<div className="font-normal tracking-widest text-lg flex items-center gap-3 text-white"><i className="w-6 h-6" data-lucide="code" strokeWidth="1.5"></i> DESENVOLVEDORES</div>
<div className="font-normal tracking-widest text-lg flex items-center gap-3 text-white"><i className="w-6 h-6" data-lucide="briefcase" strokeWidth="1.5"></i> PRESTADORES</div>
</div>
<div className="flex flex-shrink-0 min-w-full justify-around gap-16 px-8 items-center opacity-40" style={{animation: 'scroll 40s linear infinite'}}>
<div className="font-normal tracking-widest text-lg flex items-center gap-3 text-white"><i className="w-6 h-6" data-lucide="stethoscope" strokeWidth="1.5"></i> MÉDICOS</div>
<div className="font-normal tracking-widest text-lg flex items-center gap-3 text-white"><i className="w-6 h-6" data-lucide="scale" strokeWidth="1.5"></i> ADVOGADOS</div>
<div className="font-normal tracking-widest text-lg flex items-center gap-3 text-white"><i className="w-6 h-6" data-lucide="pen-tool" strokeWidth="1.5"></i> ARQUITETOS</div>
<div className="font-normal tracking-widest text-lg flex items-center gap-3 text-white"><i className="w-6 h-6" data-lucide="building-2" strokeWidth="1.5"></i> ENGENHEIROS</div>
<div className="font-normal tracking-widest text-lg flex items-center gap-3 text-white"><i className="w-6 h-6" data-lucide="code" strokeWidth="1.5"></i> DESENVOLVEDORES</div>
<div className="font-normal tracking-widest text-lg flex items-center gap-3 text-white"><i className="w-6 h-6" data-lucide="briefcase" strokeWidth="1.5"></i> PRESTADORES</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative bg-[#02040a]">
<div className="absolute top-20 left-10 w-[500px] h-[500px] bg-[#b89818]/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-20 opacity-0 translate-y-8 transition-all duration-1000 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 js-reveal" data-visible="true">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-6">
                    "Eu pago todo mês, mas na hora que preciso, parece que estou pedindo um favor."
                </h2>
<p className="text-lg text-slate-400 leading-relaxed">
                    Se você ainda não tem uma empresa, a frase acima é a realidade hoje no mercado. Pergunte a qualquer PJ. Todos os dias, pessoas chegam até nós com os mesmos problemas.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-[2rem] p-8 md:p-10 transition-all duration-500 hover:bg-white/[0.04] hover:border-[#b89818]/30 group opacity-0 translate-y-8 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 js-reveal" data-visible="true">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#b89818] mb-6 group-hover:bg-[#b89818] group-hover:text-white transition-all duration-500">
<i className="w-6 h-6" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<p className="text-xl font-medium tracking-tight text-white mb-4">"A gente aceita de contador o que não aceitaria de nenhum outro profissional."</p>
<p className="text-base text-slate-400 leading-relaxed">
                        Você paga todo mês, sem falta. Quando precisa de um documento, espera 15 dias. Quando liga, ninguém atende. Quando entregam, cometem erros.
                    </p>
</div>
<div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-[2rem] p-8 md:p-10 transition-all duration-500 hover:bg-white/[0.04] hover:border-[#b89818]/30 group opacity-0 translate-y-8 delay-100 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 js-reveal" data-visible="true">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#b89818] mb-6 group-hover:bg-[#b89818] group-hover:text-white transition-all duration-500">
<i className="w-6 h-6" data-lucide="alert-circle" strokeWidth="1.5"></i>
</div>
<p className="text-xl font-medium tracking-tight text-white mb-4">"Tenho medo de escolher errado e me ferrar com a Receita."</p>
<p className="text-base text-slate-400 leading-relaxed">
                        Um dev recebeu proposta de R$12 mil/mês. Não tinha CNPJ. Enquanto pesquisava como abrir, a empresa contratou outro. Perdeu R$72 mil no ano por burocracia.
                    </p>
</div>
<div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-[2rem] p-8 md:p-10 transition-all duration-500 hover:bg-white/[0.04] hover:border-[#b89818]/30 group opacity-0 translate-y-8 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 js-reveal" data-visible="true">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#b89818] mb-6 group-hover:bg-[#b89818] group-hover:text-white transition-all duration-500">
<i className="w-6 h-6" data-lucide="phone-call" strokeWidth="1.5"></i>
</div>
<p className="text-xl font-medium tracking-tight text-white mb-4">"Ligo para o meu contador e ninguém atende."</p>
<p className="text-base text-slate-400 leading-relaxed">
                        Um médico faturou R$40 mil. O banco pediu demonstrações. O escritório demorou por lentidão. O dinheiro ficou travado por semanas.
                    </p>
</div>
<div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-[2rem] p-8 md:p-10 transition-all duration-500 hover:bg-white/[0.04] hover:border-[#b89818]/30 group opacity-0 translate-y-8 delay-100 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 js-reveal" data-visible="true">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#b89818] mb-6 group-hover:bg-[#b89818] group-hover:text-white transition-all duration-500">
<i className="w-6 h-6" data-lucide="shield-alert" strokeWidth="1.5"></i>
</div>
<p className="text-xl font-medium tracking-tight text-white mb-4">"Meu contador erra e quem paga a multa sou eu."</p>
<p className="text-base text-slate-400 leading-relaxed">
                        Um empresário precisava de crédito para expandir. O contador entregou o balanço tarde demais. Os documentos venceram. O crescimento parou.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative bg-[#02040a]" id="solucoes">
<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:32px_32px] pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-center text-white mb-16 opacity-0 translate-y-8 transition-all duration-1000 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 js-reveal" data-visible="true">
                Do primeiro CNPJ à contabilidade completa: a Hórus cuida de tudo
            </h2>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white/[0.03] backdrop-blur-3xl border border-white/[0.08] rounded-[2.5rem] p-10 md:p-12 relative overflow-hidden group opacity-0 translate-y-8 transition-all duration-1000 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 js-reveal hover:border-[#b89818]/40 hover:bg-white/[0.05]">
<div className="absolute top-0 right-0 w-64 h-64 bg-[#b89818]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#b89818]/20 transition-all duration-700 pointer-events-none"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-[#b89818]">
<i className="w-7 h-7" data-lucide="rocket" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-6">Quer abrir seu CNPJ?</h3>
<p className="text-lg text-slate-400 leading-relaxed mb-10 flex-grow">
                            Você não precisa entender de contabilidade. A gente escolhe o tipo certo de empresa para o seu perfil, abre tudo, emite seu certificado digital na hora e te acompanha desde o dia 1. Você foca no que sabe fazer, a parte chata é com a gente.
                        </p>
<a className="inline-flex items-center text-base font-medium text-[#b89818] hover:text-[#a38615] transition-colors" href="#cta">
                            Quero abrir minha empresa 
                            <i className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="bg-white/[0.03] backdrop-blur-3xl border border-white/[0.08] rounded-[2.5rem] p-10 md:p-12 relative overflow-hidden group opacity-0 translate-y-8 transition-all duration-1000 delay-100 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 js-reveal hover:border-[#b89818]/40 hover:bg-white/[0.05]">
<div className="absolute top-0 left-0 w-64 h-64 bg-slate-500/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 group-hover:bg-slate-400/20 transition-all duration-700 pointer-events-none"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-white">
<i className="w-7 h-7" data-lucide="building-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-6">Sente que merece uma contabilidade melhor?</h3>
<div className="text-lg text-slate-400 leading-relaxed mb-10 space-y-4 flex-grow">
<p>A gente cuida de todo o processo. Contatamos o escritório anterior, pedimos os documentos e assumimos a responsabilidade. Seus dados ficam seguros no app.</p>
<p>Seu calendário fica organizado. Quando muda a lei, você sabe antes de virar problema.</p>
</div>
<a className="inline-flex items-center justify-center w-full px-6 py-4 bg-white/5 backdrop-blur-sm text-white text-base font-medium rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300" href="#cta">
                            Quero conhecer a Hórus
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative bg-[#02040a] border-t border-white/[0.05]">
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center opacity-0 translate-y-8 transition-all duration-1000 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 js-reveal">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-8">
                O que a Hórus faz não é extraordinário. É o que toda contabilidade deveria fazer.
            </h2>
<p className="text-lg text-slate-400 leading-relaxed mb-12">
                A Hórus nasceu para ser a contabilidade que a gente gostaria que existisse quando precisou: rápida, presente e humana. A verdade é que não fazemos nada de outro mundo. Isso deveria ser o mínimo. Mas no mercado, virou exceção.
            </p>
<div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
<div className="flex items-center gap-4 bg-white/[0.02] border border-white/[0.05] p-5 rounded-2xl">
<i className="w-6 h-6 text-[#b89818] shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-base text-slate-200">A gente atende o telefone.</span>
</div>
<div className="flex items-center gap-4 bg-white/[0.02] border border-white/[0.05] p-5 rounded-2xl">
<i className="w-6 h-6 text-[#b89818] shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-base text-slate-200">Entrega seu documento rápido.</span>
</div>
<div className="flex items-center gap-4 bg-white/[0.02] border border-white/[0.05] p-5 rounded-2xl">
<i className="w-6 h-6 text-[#b89818] shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-base text-slate-200">Avisa quando muda a lei.</span>
</div>
<div className="flex items-center gap-4 bg-white/[0.02] border border-white/[0.05] p-5 rounded-2xl">
<i className="w-6 h-6 text-[#b89818] shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-base text-slate-200">Explica com paciência.</span>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative bg-[#02040a]" id="diferenciais">
<div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#b89818]/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 -translate-x-1/3"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-center text-white mb-16 max-w-3xl mx-auto opacity-0 translate-y-8 transition-all duration-1000 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 js-reveal">
                O que você encontra na Hórus e não encontra em nenhuma outra contabilidade
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">

<div className="md:col-span-2 bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] p-8 md:p-10 rounded-[2rem] flex flex-col justify-between relative overflow-hidden group hover:border-white/10 transition-colors opacity-0 translate-y-8 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 js-reveal">
<div className="absolute top-0 right-0 p-8 opacity-5 text-[#b89818] group-hover:opacity-10 group-hover:scale-110 transition-all duration-700 pointer-events-none">
<i className="w-32 h-32" data-lucide="smartphone" strokeWidth="1"></i>
</div>
<div className="relative z-10 mb-8">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#b89818] mb-6">
<i className="w-6 h-6" data-lucide="smartphone" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-4">1. App próprio com tudo na mão</h3>
<p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                            Documentos, guias, boletos — abre, baixa, copia o código e paga. Está no banco e o gerente pediu algo? Abre o app e mostra na tela. Sem ligar, sem esperar.
                        </p>
</div>
<div className="bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/5 relative z-10 w-full md:w-4/5 mt-auto">
<p className="text-sm font-medium text-white mb-1">"E se eu trocar de contador, perco documentos?"</p>
<p className="text-sm text-slate-400">Não. Na transição, organizamos tudo no app. Só você tem acesso. Seguro e sem perdas.</p>
</div>
</div>

<div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] p-8 md:p-10 rounded-[2rem] flex flex-col group hover:border-white/10 transition-colors opacity-0 translate-y-8 delay-100 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 js-reveal">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#b89818] mb-6">
<i className="w-6 h-6" data-lucide="check-circle-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-4">2. Certificado em 5 min</h3>
<p className="text-lg text-slate-400 leading-relaxed mb-8 flex-grow">
                        Todo mundo demora de 7 a 15 dias. Nós emitimos na hora, para o Brasil inteiro. As pessoas saem rindo de tão rápido.
                    </p>
<div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/5 mt-auto">
<p className="text-sm text-slate-400">Seu certificado antigo ficou com o ex-contador? Emitimos um novo em 5 min.</p>
</div>
</div>

<div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] p-8 md:p-10 rounded-[2rem] group hover:border-white/10 transition-colors opacity-0 translate-y-8 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 js-reveal">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#b89818] mb-6">
<i className="w-6 h-6" data-lucide="users" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-4">3. Suporte humano de verdade</h3>
<p className="text-lg text-slate-400 leading-relaxed">
                        Mais de 10 profissionais dedicados. Você liga, alguém atende. Aqui você não é o cliente 501, você tem um nome. Nenhuma pergunta é boba.
                    </p>
</div>

<div className="md:col-span-2 bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] p-8 md:p-10 rounded-[2rem] flex flex-col md:flex-row gap-8 items-start justify-between group hover:border-white/10 transition-colors opacity-0 translate-y-8 delay-100 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 js-reveal">
<div className="flex-1">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#b89818] mb-6">
<i className="w-6 h-6" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-4">4. Velocidade inigualável</h3>
<p className="text-lg text-slate-400 leading-relaxed mb-4">
                            Demonstração financeira para o banco? 5 minutos. Certidão? Minutos. Enquanto seu contador atual lê o e-mail, nós já resolvemos.
                        </p>
</div>
<div className="w-full md:w-2/5 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/5 shrink-0">
<div className="flex items-center gap-3 mb-3">
<i className="w-6 h-6 text-[#b89818]" data-lucide="eye" strokeWidth="1.5"></i>
<h4 className="text-lg font-medium text-white tracking-tight">5. Sem surpresas</h4>
</div>
<p className="text-sm text-slate-400 leading-relaxed">Mudou a lei? Disparo automático. Calendário no app com cada prazo. Nunca mais pego de surpresa ou multado por esquecimento.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-[#02040a] border-t border-white/[0.05]">
<div className="max-w-5xl mx-auto px-6 relative z-10">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-center text-white mb-16 opacity-0 translate-y-8 transition-all duration-1000 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 js-reveal">
                O processo simples para abrir ou trocar de contabilidade
            </h2>

<div className="flex p-1.5 bg-white/[0.03] backdrop-blur-md rounded-xl border border-white/[0.08] mb-16 max-w-md mx-auto relative opacity-0 translate-y-8 transition-all duration-1000 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 js-reveal">
<button className="flex-1 py-3 text-base font-medium rounded-lg transition-all duration-300 text-white bg-white/10 shadow-sm ring-1 ring-white/10 relative z-10" id="btn-abrir" onclick="switchTab('abrir')">
                    Abrir empresa
                </button>
<button className="flex-1 py-3 text-base font-medium rounded-lg transition-all duration-300 text-slate-400 hover:text-white relative z-10" id="btn-trocar" onclick="switchTab('trocar')">
                    Quero contabilidade melhor
                </button>
</div>

<div className="block" id="tab-abrir">
<div className="grid md:grid-cols-3 gap-8 relative before:absolute before:top-12 before:left-16 before:right-16 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent hidden md:block before:z-0">
<div className="relative z-10 text-center">
<div className="w-16 h-16 rounded-full bg-[#0a0f1a] border border-white/10 text-white text-xl font-normal flex items-center justify-center mx-auto mb-6">1</div>
<h4 className="text-xl font-medium tracking-tight text-white mb-3">Fala com a gente</h4>
<p className="text-base text-slate-400">Entendemos seu perfil em 5 minutos.</p>
</div>
<div className="relative z-10 text-center mt-8 md:mt-0">
<div className="w-16 h-16 rounded-full bg-[#0a0f1a] border border-white/10 text-white text-xl font-normal flex items-center justify-center mx-auto mb-6">2</div>
<h4 className="text-xl font-medium tracking-tight text-white mb-3">A gente cuida de tudo</h4>
<p className="text-base text-slate-400">CNPJ, registro, certificado, regime tributário.</p>
</div>
<div className="relative z-10 text-center mt-8 md:mt-0">
<div className="w-16 h-16 rounded-full bg-[#b89818] border border-[#b89818] text-white text-xl font-normal flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(184,152,24,0.3)]">3</div>
<h4 className="text-xl font-medium tracking-tight text-white mb-3">Sua empresa nasce</h4>
<p className="text-base text-slate-400">App funcionando, suporte ativo, calendário em dia.</p>
</div>
</div>
</div>

<div className="hidden" id="tab-trocar">
<div className="grid md:grid-cols-3 gap-8 relative before:absolute before:top-12 before:left-16 before:right-16 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent hidden md:block before:z-0">
<div className="relative z-10 text-center">
<div className="w-16 h-16 rounded-full bg-[#0a0f1a] border border-white/10 text-white text-xl font-normal flex items-center justify-center mx-auto mb-6">1</div>
<h4 className="text-xl font-medium tracking-tight text-white mb-3">Fala com a gente</h4>
<p className="text-base text-slate-400">Entendemos sua situação e o que incomoda.</p>
</div>
<div className="relative z-10 text-center mt-8 md:mt-0">
<div className="w-16 h-16 rounded-full bg-[#0a0f1a] border border-white/10 text-white text-xl font-normal flex items-center justify-center mx-auto mb-6">2</div>
<h4 className="text-xl font-medium tracking-tight text-white mb-3">Transição invisível</h4>
<p className="text-base text-slate-400">Contatamos o ex-contador. Você não faz nada.</p>
</div>
<div className="relative z-10 text-center mt-8 md:mt-0">
<div className="w-16 h-16 rounded-full bg-[#b89818] border border-[#b89818] text-white text-xl font-normal flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(184,152,24,0.3)]">3</div>
<h4 className="text-xl font-medium tracking-tight text-white mb-3">Sinta a diferença</h4>
<p className="text-base text-slate-400">App pronto, documentos seguros, velocidade real.</p>
</div>
</div>
</div>
<div className="text-center mt-20 opacity-0 translate-y-8 transition-all duration-1000 delay-100 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 js-reveal flex flex-col sm:flex-row justify-center gap-4">
<a className="px-8 py-3.5 rounded-xl bg-[#b89818] hover:bg-[#a38615] text-white transition-all duration-300 flex items-center justify-center text-base font-medium" href="#cta">
                    Quero abrir minha empresa
                </a>
<a className="px-8 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-white transition-all duration-300 flex items-center justify-center text-base font-medium" href="#cta">
                    Quero conhecer a Hórus
                </a>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative bg-[#02040a]" id="servicos">
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-16 opacity-0 translate-y-8 transition-all duration-1000 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 js-reveal">
<p className="text-sm font-medium tracking-widest text-[#b89818] uppercase mb-4">Nossos Serviços</p>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-6">
                    Tudo Que Sua Empresa Precisa. Num Lugar Só.
                </h2>
<p className="text-lg text-slate-400 leading-relaxed">
                    A Hórus foi criada para empresas e profissionais que precisam de agilidade, organização e suporte real.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white/[0.02] border border-white/[0.05] p-8 rounded-3xl hover:bg-white/[0.04] transition-colors opacity-0 translate-y-8 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 js-reveal">
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-[#b89818]">
<i className="w-6 h-6" data-lucide="file-plus" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Abertura de empresa</h3>
<p className="text-base text-slate-400 leading-relaxed">Do zero ao CNPJ pronto. Regime certo. Certificado na hora. Você não entende de contabilidade e não precisa.</p>
</div>
<div className="bg-white/[0.02] border border-white/[0.05] p-8 rounded-3xl hover:bg-white/[0.04] transition-colors opacity-0 translate-y-8 delay-100 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 js-reveal">
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-[#b89818]">
<i className="w-6 h-6" data-lucide="calculator" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Contabilidade Mensal</h3>
<p className="text-base text-slate-400 leading-relaxed">Escrituração, guias, obrigações, relatórios no app. Em tempo real, com suporte no mesmo dia.</p>
</div>
<div className="bg-white/[0.02] border border-white/[0.05] p-8 rounded-3xl hover:bg-white/[0.04] transition-colors opacity-0 translate-y-8 delay-200 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 js-reveal">
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-[#b89818]">
<i className="w-6 h-6" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Certificado Digital</h3>
<p className="text-base text-slate-400 leading-relaxed">Apenas 5 minutos. Não 15 dias. Emissão rápida válida para todo território nacional.</p>
</div>
<div className="bg-white/[0.02] border border-white/[0.05] p-8 rounded-3xl hover:bg-white/[0.04] transition-colors opacity-0 translate-y-8 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 js-reveal">
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-[#b89818]">
<i className="w-6 h-6" data-lucide="line-chart" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">BPO Financeiro</h3>
<p className="text-base text-slate-400 leading-relaxed">Fluxo de caixa, conciliação bancária, contas a pagar. A gente organiza, você empreende.</p>
</div>
<div className="bg-white/[0.02] border border-white/[0.05] p-8 rounded-3xl hover:bg-white/[0.04] transition-colors opacity-0 translate-y-8 delay-100 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 js-reveal">
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-[#b89818]">
<i className="w-6 h-6" data-lucide="lock" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Holding &amp; Blindagem</h3>
<p className="text-base text-slate-400 leading-relaxed">Proteção do que você construiu. Transferência de bens com total segurança jurídica.</p>
</div>
<div className="bg-white/[0.02] border border-white/[0.05] p-8 rounded-3xl hover:bg-white/[0.04] transition-colors opacity-0 translate-y-8 delay-200 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 js-reveal">
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-[#b89818]">
<i className="w-6 h-6" data-lucide="building" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Empreendimentos</h3>
<p className="text-base text-slate-400 leading-relaxed">Assessoria jurídica, financeira e contábil completa para projetos imobiliários.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/[0.05] overflow-hidden relative bg-white/[0.02]">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#02040a] to-transparent z-10 pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#02040a] to-transparent z-10 pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 mb-16 text-center opacity-0 translate-y-8 transition-all duration-1000 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 js-reveal">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">
                Eles Poderiam Ter Escolhido Qualquer Contabilidade. Escolheram A Hórus.
            </h2>
</div>
<div className="flex overflow-hidden hover:[animation-play-state:paused]" style={{maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'}}>
<div className="flex flex-shrink-0 gap-6 px-3" style={{animation: 'scroll 40s linear infinite'}}>
<div className="w-[380px] bg-white/[0.03] border border-white/[0.05] p-8 rounded-[2rem] shrink-0">
<div className="flex items-center gap-4 mb-5">
<div className="w-12 h-12 rounded-full bg-white/10 shrink-0 border border-white/20"></div>
<div>
<p className="text-base font-medium text-white">Lucas Mendes</p>
<p className="text-sm text-slate-400">Desenvolvedor Software</p>
</div>
</div>
<p className="text-base text-slate-300 leading-relaxed italic">"Abertura em tempo recorde e o app facilita muito. Não troco a Hórus por nada."</p>
</div>
<div className="w-[380px] bg-white/[0.03] border border-white/[0.05] p-8 rounded-[2rem] shrink-0">
<div className="flex items-center gap-4 mb-5">
<div className="w-12 h-12 rounded-full bg-white/10 shrink-0 border border-white/20"></div>
<div>
<p className="text-base font-medium text-white">Dra. Camila Nogueira</p>
<p className="text-sm text-slate-400">Médica Plantonista</p>
</div>
</div>
<p className="text-base text-slate-300 leading-relaxed italic">"Transição transparente. Hoje cuidam de tudo enquanto foco nos plantões. Suporte impecável."</p>
</div>
<div className="w-[380px] bg-white/[0.03] border border-white/[0.05] p-8 rounded-[2rem] shrink-0">
<div className="flex items-center gap-4 mb-5">
<div className="w-12 h-12 rounded-full bg-white/10 shrink-0 border border-white/20"></div>
<div>
<p className="text-base font-medium text-white">Roberto Alves</p>
<p className="text-sm text-slate-400">Empresário</p>
</div>
</div>
<p className="text-base text-slate-300 leading-relaxed italic">"Balanço urgente pro banco enviado em minutos. Velocidade que nunca vi no mercado."</p>
</div>
<div className="w-[380px] bg-white/[0.03] border border-white/[0.05] p-8 rounded-[2rem] shrink-0">
<div className="flex items-center gap-4 mb-5">
<div className="w-12 h-12 rounded-full bg-white/10 shrink-0 border border-white/20"></div>
<div>
<p className="text-base font-medium text-white">Juliana Costa</p>
<p className="text-sm text-slate-400">Arquiteta</p>
</div>
</div>
<p className="text-base text-slate-300 leading-relaxed italic">"Tiraram todas dúvidas com paciência. Finalmente sinto que minha empresa está segura."</p>
</div>

<div className="w-[380px] bg-white/[0.03] border border-white/[0.05] p-8 rounded-[2rem] shrink-0">
<div className="flex items-center gap-4 mb-5">
<div className="w-12 h-12 rounded-full bg-white/10 shrink-0 border border-white/20"></div>
<div>
<p className="text-base font-medium text-white">Lucas Mendes</p>
<p className="text-sm text-slate-400">Desenvolvedor Software</p>
</div>
</div>
<p className="text-base text-slate-300 leading-relaxed italic">"Abertura em tempo recorde e o app facilita muito."</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative bg-[#02040a]" id="cta">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#b89818]/10 rounded-[100%] blur-[120px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 opacity-0 translate-y-8 transition-all duration-1000 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 js-reveal">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-8 leading-tight">
                A Contabilidade Que Você Queria Ter Está A Uma Conversa De Distância
            </h2>
<p className="text-lg text-slate-400 mb-10">
                Em 5 minutos de conversa, sem enrolação e sem compromisso, você descobre:
            </p>
<div className="flex flex-col md:flex-row justify-center gap-6 mb-12 text-left">
<div className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.05] py-3 px-5 rounded-xl">
<i className="w-5 h-5 text-[#b89818]" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-base text-slate-200">Se seu tipo de empresa está correto</span>
</div>
<div className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.05] py-3 px-5 rounded-xl">
<i className="w-5 h-5 text-[#b89818]" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-base text-slate-200">Se está pagando imposto a mais</span>
</div>
<div className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.05] py-3 px-5 rounded-xl">
<i className="w-5 h-5 text-[#b89818]" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-base text-slate-200">Como organizar de forma simples</span>
</div>
</div>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="px-8 py-4 rounded-xl bg-[#b89818] hover:bg-[#a38615] text-white transition-all duration-300 flex items-center justify-center text-base font-medium shadow-[0_0_20px_rgba(184,152,24,0.3)]" href="#">
                    Quero abrir minha empresa
                </a>
<a className="px-8 py-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-white transition-all duration-300 flex items-center justify-center text-base font-medium" href="#">
                    Quero conhecer a Hórus
                </a>
</div>
</div>
</section>

<footer className="border-t border-white/[0.05] py-12 bg-[#02040a]">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
<img alt="Hórus" className="h-10 invert brightness-0 mb-8 opacity-80" src="https://media.discordapp.net/attachments/1179456209869619331/1337422998632140810/Horus.png?ex=67a75fe1&amp;is=67a60e61&amp;hm=46d3e6ba1c3f2b604b3168c4d5bf06c5f7dcd8ab1d06e2329c29cc46e855c7a5&amp;=&amp;format=webp&amp;quality=lossless"/>
<p className="text-sm text-slate-500 max-w-sm mb-8 leading-relaxed">
                Hórus Gestão Financeira e Contábil<br/>
                Rua Monsenhor Leite, 200 - Sala 03 - Centro<br/>
                Boa Esperança - MG | Atendimento no Brasil inteiro
            </p>
<div className="flex gap-6 mb-8">
<a className="text-slate-500 hover:text-white transition-colors" href="#">WhatsApp</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">Instagram</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">E-mail</a>
</div>
<div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-600">
<a className="hover:text-slate-400" href="#">Início</a>
<a className="hover:text-slate-400" href="#">Nossos serviços</a>
<a className="hover:text-slate-400" href="#">Gestão financeira</a>
<a className="hover:text-slate-400" href="#">Gestão contábil</a>
<a className="hover:text-slate-400" href="#">Parceiros</a>
<a className="hover:text-slate-400" href="#">Depoimentos</a>
<a className="hover:text-slate-400" href="#">Contato</a>
<a className="hover:text-slate-400" href="#">Quem somos</a>
<a className="hover:text-slate-400" href="#">Área VIP</a>
<a className="hover:text-slate-400" href="#">Portal do cliente</a>
</div>
</div>
</footer>


    </>
  );
}
