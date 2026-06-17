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



      (function() {
        // Collect all elements that should be revealed step by step
        const steps = document.querySelectorAll('.step-element');
        let currentStep = -1;
        
        // Hide all steps initially
        steps.forEach(el => {
          if(el) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.7s ease-out, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
            el.style.display = 'none';
          }
        });
        
        const btn = document.getElementById('nextBtn');
        if(btn) {
          btn.addEventListener('click', () => {
            currentStep++;
            if(currentStep < steps.length) {
              const el = steps[currentStep];
              if(el) {
                // Show element
                el.style.display = '';
                // Trigger reflow to apply transition
                void el.offsetWidth;
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
                
                // Smooth scroll to the newly revealed element
                setTimeout(() => {
                  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 100);
              }
            }
            // Hide button if we reached the last step
            if(currentStep >= steps.length - 1) {
              btn.style.opacity = '0';
              btn.style.transform = 'translateY(10px) scale(0.95)';
              btn.style.pointerEvents = 'none';
            }
          });
        }
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
      

<main className="w-full flex flex-col items-center pt-16 md:pt-24 pb-32 px-6">

<div className="text-center max-w-4xl mx-auto flex flex-col items-center mb-16">
<h1 className="text-5xl md:text-[56px] leading-[1.1] font-medium tracking-tight text-slate-900 mb-6">
          O que tá rolando no mundo da IA
        </h1>
<h2 className="text-2xl md:text-3xl text-slate-500 font-light tracking-tight mb-12 max-w-3xl step-element">
          Edição 25 de Março de 2026
        </h2>
</div>

<div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-4">

<div className="bg-white rounded-[24px] border border-slate-200/80 p-8 flex flex-col hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-slate-300 transition-all step-element">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-900">
<iconify-icon height="24" icon="solar:chat-round-line-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<h4 className="text-xl font-medium tracking-tight text-slate-900">
              Claude Code Channels <span className="text-sm font-normal text-slate-400 ml-1">(20/mar)</span>
</h4>
</div>
<ul className="flex flex-col gap-3 text-base text-slate-500 leading-relaxed">
<li className="flex items-start gap-3">
<span className="text-slate-300 mt-1">•</span>
<span>Você manda mensagem pelo Telegram ou Discord, o Claude executa no seu computador e responde no chat</span>
</li>
<li className="flex items-start gap-3">
<span className="text-slate-300 mt-1">•</span>
<span><strong className="font-medium text-slate-800">Não precisa abrir terminal</strong>, não precisa estar na frente do PC</span>
</li>
<li className="flex items-start gap-3">
<span className="text-slate-300 mt-1">•</span>
<span>No teste do MacStories: buildaram um app iOS e fizeram deploy no iPhone, tudo pelo Telegram</span>
</li>
</ul>
</div>

<div className="bg-white rounded-[24px] border border-slate-200/80 p-8 flex flex-col hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-slate-300 transition-all step-element">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-[#F0B45A]/10 flex items-center justify-center text-[#D99A3B]">
<iconify-icon height="24" icon="solar:smartphone-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<h4 className="text-xl font-medium tracking-tight text-slate-900">
              Claude Dispatch <span className="text-sm font-normal text-slate-400 ml-1">(17/mar)</span>
</h4>
</div>
<ul className="flex flex-col gap-3 text-base text-slate-500 leading-relaxed">
<li className="flex items-start gap-3">
<span className="text-slate-300 mt-1">•</span>
<span>Você manda tarefas pelo app do Claude no celular, ele faz no seu Mac</span>
</li>
<li className="flex items-start gap-3">
<span className="text-slate-300 mt-1">•</span>
<span>Montar relatórios, organizar arquivos, analisar planilhas — <strong className="font-medium text-slate-800">sem sentar no computador</strong></span>
</li>
<li className="flex items-start gap-3">
<span className="text-slate-300 mt-1">•</span>
<span>Seus arquivos não saem da máquina</span>
</li>
</ul>
</div>

<div className="bg-white rounded-[24px] border border-slate-200/80 p-8 flex flex-col hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-slate-300 transition-all step-element">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-900">
<iconify-icon height="24" icon="solar:transfer-horizontal-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<h4 className="text-xl font-medium tracking-tight text-slate-900">
              Channels vs Dispatch
            </h4>
</div>
<ul className="flex flex-col gap-3 text-base text-slate-500 leading-relaxed">
<li className="flex items-start gap-3">
<span className="text-slate-300 mt-1">•</span>
<span><strong className="font-medium text-slate-800">Channels</strong> é pra quem programa — conecta via Telegram/Discord</span>
</li>
<li className="flex items-start gap-3">
<span className="text-slate-300 mt-1">•</span>
<span><strong className="font-medium text-slate-800">Dispatch</strong> é pra trabalho geral — conecta pelo app mobile</span>
</li>
<li className="flex items-start gap-3">
<span className="text-slate-300 mt-1">•</span>
<span>Os dois fazem o Claude virar um assistente que fica ligado esperando suas instruções</span>
</li>
</ul>
</div>

<div className="bg-white rounded-[24px] border border-slate-200/80 p-8 flex flex-col hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-slate-300 transition-all step-element">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-900">
<iconify-icon height="24" icon="solar:bolt-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<h4 className="text-xl font-medium tracking-tight text-slate-900">
              Auto Mode <span className="text-sm font-normal text-slate-400 ml-1">(24/mar)</span>
</h4>
</div>
<ul className="flex flex-col gap-3 text-base text-slate-500 leading-relaxed">
<li className="flex items-start gap-3">
<span className="text-slate-300 mt-1">•</span>
<span>Antes o Claude pedia permissão pra cada ação</span>
</li>
<li className="flex items-start gap-3">
<span className="text-slate-300 mt-1">•</span>
<span>Agora ele analisa sozinho: <strong className="font-medium text-slate-800">se for seguro, faz. Se for arriscado, te pergunta</strong></span>
</li>
<li className="flex items-start gap-3">
<span className="text-slate-300 mt-1">•</span>
<span>Meio-termo entre controle total e rodar no automático sem proteção</span>
</li>
</ul>
</div>

<div className="bg-white rounded-[24px] border border-slate-200/80 p-8 flex flex-col hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-slate-300 transition-all step-element">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-[#F0B45A]/10 flex items-center justify-center text-[#D99A3B]">
<iconify-icon height="24" icon="solar:layers-minimalistic-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<h4 className="text-xl font-medium tracking-tight text-slate-900">
              Figma + Claude Code <span className="text-sm font-normal text-slate-400 ml-1">(fev-mar)</span>
</h4>
</div>
<ul className="flex flex-col gap-3 text-base text-slate-500 leading-relaxed">
<li className="flex items-start gap-3">
<span className="text-slate-300 mt-1">•</span>
<span>Figma e Claude Code agora conversam nos dois sentidos</span>
</li>
<li className="flex items-start gap-3">
<span className="text-slate-300 mt-1">•</span>
<span>Captura a tela do seu app e ela vira um frame editável no Figma</span>
</li>
<li className="flex items-start gap-3">
<span className="text-slate-300 mt-1">•</span>
<span>Edita o design e manda de volta pro código com um link</span>
</li>
<li className="flex items-start gap-3">
<span className="text-slate-300 mt-1">•</span>
<span>Quem usa Figma grátis pode usar o "Talk to Figma MCP" da comunidade</span>
</li>
</ul>
</div>

<div className="bg-white rounded-[24px] border border-slate-200/80 p-8 flex flex-col hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-slate-300 transition-all step-element">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-900">
<iconify-icon height="24" icon="solar:cpu-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<h4 className="text-xl font-medium tracking-tight text-slate-900">
              NemoClaw <span className="text-sm font-normal text-slate-400 ml-1">(16/mar)</span>
</h4>
</div>
<ul className="flex flex-col gap-3 text-base text-slate-500 leading-relaxed">
<li className="flex items-start gap-3">
<span className="text-slate-300 mt-1">•</span>
<span><strong className="font-medium text-slate-800">OpenClaw:</strong> projeto open-source com 247 mil estrelas. Controla um agente AI pelo WhatsApp e Telegram</span>
</li>
<li className="flex items-start gap-3">
<span className="text-slate-300 mt-1">•</span>
<span>A NVIDIA adicionou segurança profissional e modelos rodando local</span>
</li>
<li className="flex items-start gap-3">
<span className="text-slate-300 mt-1">•</span>
<span>Jensen Huang na GTC: "OpenClaw é o sistema operacional da AI pessoal"</span>
</li>
</ul>
</div>

<div className="bg-white rounded-[24px] border border-slate-200/80 p-8 flex flex-col md:col-span-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-slate-300 transition-all step-element">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-900">
<iconify-icon height="24" icon="solar:radar-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<h4 className="text-xl font-medium tracking-tight text-slate-900">
              Radar rápido
            </h4>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
<ul className="flex flex-col gap-3 text-base text-slate-500 leading-relaxed">
<li className="flex items-start gap-3">
<span className="text-slate-300 mt-1">•</span>
<span><strong className="font-medium text-slate-800">GPT-5.4</strong> virou o modelo principal da OpenAI, com 1 milhão de tokens de contexto (5/mar)</span>
</li>
<li className="flex items-start gap-3">
<span className="text-slate-300 mt-1">•</span>
<span><strong className="font-medium text-slate-800">ChatGPT</strong> entrou no Excel em beta (mar)</span>
</li>
<li className="flex items-start gap-3">
<span className="text-slate-300 mt-1">•</span>
<span><strong className="font-medium text-slate-800">Gemini</strong> conectou Gmail, Google Photos e Chrome de graça nos EUA (mar)</span>
</li>
</ul>
<ul className="flex flex-col gap-3 text-base text-slate-500 leading-relaxed">
<li className="flex items-start gap-3">
<span className="text-slate-300 mt-1">•</span>
<span><strong className="font-medium text-slate-800">Manus</strong> lançou app desktop que roda agentes direto no seu computador (mar)</span>
</li>
<li className="flex items-start gap-3">
<span className="text-slate-300 mt-1">•</span>
<span><strong className="font-medium text-slate-800">Meta</strong> lançou agentes que rodam campanhas de anúncios sozinhos (23/mar)</span>
</li>
</ul>
</div>
</div>
</div>

<div className="w-px h-24 bg-gradient-to-b from-transparent via-slate-200 to-transparent my-10 step-element"></div>

<div className="w-full max-w-4xl mx-auto mb-4 text-center step-element">
<h3 className="text-sm font-medium tracking-widest text-slate-400 uppercase mb-8">
          A mudança de modelo mental
        </h3>
<div className="inline-block px-8 py-12 bg-white border border-slate-200/80 rounded-[24px] shadow-sm w-full text-left">
<ul className="text-lg md:text-xl text-slate-600 leading-relaxed flex flex-col gap-8 max-w-3xl mx-auto">
<li className="flex gap-4 items-start">
<iconify-icon className="text-slate-300 mt-1.5 shrink-0" height="24" icon="solar:alt-arrow-right-linear" width="24"></iconify-icon>
<span><strong className="font-medium text-slate-900">Padrão antigo:</strong> você abre o chat, pergunta, lê a resposta, fecha.</span>
</li>
<li className="flex gap-4 items-start">
<iconify-icon className="text-slate-300 mt-1.5 shrink-0" height="24" icon="solar:alt-arrow-right-linear" width="24"></iconify-icon>
<span><strong className="font-medium text-slate-900">Padrão novo:</strong> você delega, vai fazer outra coisa, e o agente te avisa quando terminou.</span>
</li>
<li className="flex gap-4 items-start">
<iconify-icon className="text-[#D99A3B] mt-1.5 shrink-0" height="24" icon="solar:alt-arrow-right-linear" width="24"></iconify-icon>
<span className="text-slate-800">AI deixou de ser ferramenta que você usa. <strong className="font-medium text-slate-900">Virou assistente que trabalha pra você.</strong></span>
</li>
</ul>
</div>
</div>

<div className="w-px h-24 bg-gradient-to-b from-transparent via-slate-200 to-transparent my-10 step-element"></div>

<div className="w-full max-w-4xl mx-auto text-center mt-12 mb-16 step-element flex flex-col items-center">
<h2 className="text-3xl md:text-4xl leading-tight font-medium tracking-tight text-slate-900 mb-6 max-w-3xl">
          "Estamos na transição pro <span className="text-[#D99A3B]">vibe working</span>. Assim como vibe coding permitiu que não-programadores criassem software, vibe working vai permitir que qualquer pessoa produza trabalho profissional."
        </h2>
<span className="text-slate-500 font-light text-lg">Scott White, Head de Produto Enterprise, Anthropic</span>
</div>
</main>
<button className="fixed bottom-8 right-8 bg-white border border-slate-200/80 text-slate-500 rounded-full w-14 h-14 flex items-center justify-center shadow-[0_4px_20px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 hover:text-slate-900 transition-all duration-300 z-50" id="nextBtn" title="Avançar">
<iconify-icon height="24" icon="solar:arrow-down-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</button>


    </>
  );
}
