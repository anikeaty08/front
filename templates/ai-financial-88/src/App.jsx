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
      

<div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
<div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-violet-700/20 blur-[120px] mix-blend-screen"></div>
<div className="absolute top-[10%] -right-[20%] w-[60vw] h-[60vw] rounded-[40%_60%_70%_30%] bg-fuchsia-600/20 blur-[140px] mix-blend-screen"></div>
<div className="absolute -bottom-[20%] left-[10%] w-[80vw] h-[60vw] rounded-[60%_40%_30%_70%] bg-blue-700/20 blur-[150px] mix-blend-screen"></div>
<div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>
</div>

<nav className="relative z-50 w-full border-b border-white/5 bg-slate-950/40 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-fuchsia-500 to-violet-500 flex items-center justify-center shadow-lg shadow-fuchsia-500/20">
<iconify-icon className="text-white text-lg" icon="solar:stars-linear"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tight text-white">Nico</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
<a className="hover:text-white transition-colors" href="#problema">Por que usar</a>
<a className="hover:text-white transition-colors" href="#funciona">Como funciona</a>
<a className="hover:text-white transition-colors" href="#recursos">Recursos</a>
</div>
<div>
<a className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white transition-all bg-white/10 hover:bg-white/15 border border-white/10 rounded-full backdrop-blur-md" href="#">
                    Testar agora
                </a>
</div>
</div>
</nav>

<section className="relative z-10 pt-20 pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="flex flex-col items-start text-left z-20">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-300 text-sm font-medium mb-8 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-500"></span>
</span>
                    Inteligência Artificial no seu WhatsApp
                </div>
<h1 className="text-5xl md:text-7xl lg:text-[5rem] leading-[1.1] font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/60 mb-6">
                    Seu assistente financeiro no WhatsApp
                </h1>
<p className="text-lg md:text-xl font-medium text-slate-300 mb-10 max-w-lg leading-relaxed">
                    Controle sua vida com mensagens simples. Sem planilhas chatas, sem apps complexos. Apenas converse com o Nico e ele organiza tudo para você.
                </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white transition-all bg-gradient-to-r from-fuchsia-600 to-violet-600 rounded-full hover:shadow-[0_0_40px_-10px_rgba(192,38,211,0.5)] overflow-hidden" href="#">
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
<span className="relative">Começar agora gratuitamente</span>
<iconify-icon className="relative group-hover:translate-x-1 transition-transform text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-slate-200 transition-all bg-white/5 hover:bg-white/10 border border-white/10 rounded-full backdrop-blur-md" href="#">
                        Ver demonstração
                    </a>
</div>
<div className="mt-12 flex items-center gap-4 text-sm font-medium text-slate-400">
<div className="flex -space-x-2">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-slate-950" src="https://i.pravatar.cc/100?img=1"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-slate-950" src="https://i.pravatar.cc/100?img=2"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-slate-950" src="https://i.pravatar.cc/100?img=3"/>
</div>
<span>Junte-se a +5.000 usuários no controle.</span>
</div>
</div>

<div className="relative lg:ml-auto w-full max-w-[320px] mx-auto mt-12 lg:mt-0 h-[650px]">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[80%] bg-gradient-to-tr from-[#00a884]/30 to-[#005c4b]/30 blur-3xl rounded-full z-0"></div>

<div className="absolute -right-[14px] top-36 w-8 h-24 bg-gradient-to-l from-[#926045] to-[#c49377] rounded-r-3xl transform rotate-[2deg] z-0 shadow-inner"></div>
<div className="absolute -right-[18px] top-64 w-8 h-24 bg-gradient-to-l from-[#814f34] to-[#b38266] rounded-r-3xl transform rotate-[4deg] z-0 shadow-inner"></div>
<div className="absolute -right-[14px] top-92 w-8 h-20 bg-gradient-to-l from-[#703e23] to-[#a27155] rounded-r-3xl transform rotate-[6deg] z-0 shadow-inner"></div>

<div className="absolute inset-0 bg-[#0b141a] rounded-[3rem] shadow-2xl border-[6px] border-[#1a1c1e] overflow-hidden ring-1 ring-white/20 z-10 flex flex-col">

<div className="h-12 w-full bg-[#1f2c34] flex items-end justify-between px-6 pb-2 z-20 shrink-0">
<span className="text-white text-[13px] font-semibold tracking-tight">14:32</span>

<div className="absolute top-2 left-1/2 -translate-x-1/2 w-[30%] h-[26px] bg-black rounded-full z-30"></div>
<div className="flex items-center gap-1.5 text-white">
<iconify-icon className="text-xs" icon="solar:cellular-linear"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:wi-fi-linear"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:battery-charge-linear"></iconify-icon>
</div>
</div>

<div className="bg-[#1f2c34] px-2 py-2 flex items-center gap-2 z-10 relative border-b border-[#313d45]/50 shrink-0 shadow-sm">
<div className="flex items-center text-[#aebac1] cursor-pointer">
<iconify-icon className="text-[22px]" icon="solar:arrow-left-linear"></iconify-icon>
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-500 to-violet-600 flex items-center justify-center ml-0.5 relative">
<iconify-icon className="text-white text-lg" icon="solar:smart-speaker-minimalistic-linear"></iconify-icon>
<span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#00a884] border-2 border-[#1f2c34] rounded-full"></span>
</div>
</div>
<div className="flex-1 cursor-pointer">
<h3 className="text-[15px] font-medium text-[#e9edef] leading-tight mb-0.5">Acessor Nico</h3>
<p className="text-[12px] text-[#8696a0] leading-tight font-medium">bot comercial</p>
</div>
<div className="flex gap-4 text-[#aebac1] mr-2">
<iconify-icon className="text-[22px]" icon="solar:videocamera-record-linear"></iconify-icon>
<iconify-icon className="text-[20px]" icon="solar:phone-linear"></iconify-icon>
<iconify-icon className="text-[22px] ml-1" icon="solar:menu-dots-bold"></iconify-icon>
</div>
</div>

<div className="flex-1 p-3 flex flex-col gap-2 overflow-y-auto wa-bg-pattern relative z-0">

<div className="flex justify-center my-2">
<span className="bg-[#1f2c34] text-[#8696a0] text-[11px] font-medium px-3 py-1 rounded-lg shadow-sm">HOJE</span>
</div>

<div className="self-end max-w-[85%] relative mt-2 group">
<div className="absolute -right-2 top-0 w-3 h-3 bg-[#005c4b] z-0" style={{clipPath: 'polygon(0 0, 100% 0, 0 100%)'}}></div>
<div className="relative bg-[#005c4b] text-[#e9edef] rounded-lg rounded-tr-none px-2.5 py-1.5 shadow-sm text-[15px] leading-relaxed z-10">
                                Gastei 120 no mercado hoje
                                <div className="float-right mt-2 ml-2 flex items-center gap-1">
<span className="text-[10px] text-[#8696a0] font-medium">14:32</span>
<iconify-icon className="text-[#53bdeb] text-[14px]" icon="solar:check-read-linear"></iconify-icon>
</div>
</div>
</div>

<div className="self-start max-w-[90%] w-full relative mt-2">
<div className="absolute -left-2 top-0 w-3 h-3 bg-[#202c33] z-0" style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%)'}}></div>
<div className="relative bg-[#202c33] text-[#e9edef] rounded-lg rounded-tl-none p-2.5 shadow-sm text-[15px] leading-relaxed z-10">
<p className="mb-3">Anotado! 🛒 Adicionei à sua planilha.</p>
<p className="font-semibold text-[#e9edef] mb-1">*Despesa Registrada*</p>
<p className="mb-0">💰 Valor: R$ 120,00</p>
<p className="mb-0">🏷️ Categoria: Supermercado</p>
<p className="mb-3">💳 Cartão: Nubank final 4021</p>
<p className="font-semibold text-[#e9edef] mb-1">📊 *Orçamento do mês*</p>
<p className="mb-1 text-[#00a884] font-medium">Restam R$ 850,00</p>
<div className="float-right mt-1 ml-2 flex items-center">
<span className="text-[10px] text-[#8696a0] font-medium">14:32</span>
</div>
<div className="clear-both"></div>
</div>
</div>
</div>

<div className="bg-[#1f2c34] p-2 flex items-end gap-2 z-10 relative shrink-0">
<div className="flex-1 bg-[#2a3942] rounded-3xl px-3 py-2.5 flex items-end gap-3 min-h-[44px]">
<iconify-icon className="text-[#8696a0] text-[24px] shrink-0" icon="solar:emoji-funny-circle-linear"></iconify-icon>
<span className="text-[#8696a0] text-[16px] flex-1 pb-0.5 font-medium leading-tight">Mensagem</span>
<div className="flex gap-4 shrink-0 pb-0.5">
<iconify-icon className="text-[#8696a0] text-[22px] transform -rotate-45" icon="solar:paperclip-linear"></iconify-icon>
<iconify-icon className="text-[#8696a0] text-[22px]" icon="solar:camera-linear"></iconify-icon>
</div>
</div>
<div className="w-12 h-12 rounded-full bg-[#00a884] flex items-center justify-center text-[#111b21] shadow-sm shrink-0">
<iconify-icon className="text-[22px]" icon="solar:microphone-2-bold"></iconify-icon>
</div>
</div>
</div>

<div className="absolute -left-[20px] bottom-32 w-12 h-[150px] bg-gradient-to-tr from-[#c49377] to-[#ebc4b0] rounded-full shadow-[6px_4px_15px_rgba(0,0,0,0.4)] transform -rotate-[16deg] origin-bottom flex items-start justify-end p-1 z-30 ring-1 ring-[#ebc4b0]/20">
<div className="w-3.5 h-6 bg-white/20 rounded-full mt-2 mr-1"></div>
</div>
<div className="absolute -left-12 -bottom-24 w-[380px] h-[260px] bg-gradient-to-tr from-[#926045] to-[#d3a992] rounded-full z-20 blur-[3px] opacity-95 transform rotate-6 shadow-2xl pointer-events-none"></div>
</div>
</div>
</section>

<section className="relative z-10 py-24 bg-slate-950/50 border-y border-white/5 backdrop-blur-sm" id="problema">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">A gestão financeira atual está quebrada.</h2>
<p className="text-lg font-medium text-slate-400">Você já tentou planilhas, dezenas de aplicativos e cadernos. No fim, a fricção vence e você desiste de anotar.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="group relative bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 p-8 rounded-3xl transition-all duration-300 backdrop-blur-md">
<div className="w-12 h-12 rounded-2xl bg-slate-800/80 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-slate-300 text-2xl" icon="solar:document-text-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Planilhas dão trabalho</h3>
<p className="text-lg text-slate-400 font-medium leading-relaxed">Abrir o computador, logar, procurar a célula certa. É muito esforço para registrar um café de R$ 10.</p>
</div>
<div className="group relative bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 p-8 rounded-3xl transition-all duration-300 backdrop-blur-md">
<div className="w-12 h-12 rounded-2xl bg-slate-800/80 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-slate-300 text-2xl" icon="solar:smartphone-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Apps são complexos</h3>
<p className="text-lg text-slate-400 font-medium leading-relaxed">Interfaces cheias de botões, abas e gráficos confusos que você não precisa para o dia a dia.</p>
</div>
<div className="group relative bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 p-8 rounded-3xl transition-all duration-300 backdrop-blur-md">
<div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-2xl bg-fuchsia-500/20 border border-fuchsia-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-fuchsia-400 text-2xl" icon="solar:cpu-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">O cérebro esquece</h3>
<p className="text-lg text-slate-400 font-medium leading-relaxed">Se você não anotar na hora, não anota mais. A fricção é a inimiga do controle financeiro.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 overflow-hidden" id="funciona">
<div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2 hidden md:block"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">Tecnologia invisível,<br/>resultados visíveis.</h2>
<p className="text-lg font-medium text-slate-400">Funciona exatamente onde você já passa seu tempo: no WhatsApp.</p>
</div>
<div className="space-y-24">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1 relative group">
<div className="absolute inset-0 bg-violet-500/20 blur-2xl rounded-3xl group-hover:bg-violet-500/30 transition-colors duration-500"></div>
<div className="relative bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-white font-semibold text-lg border border-white/5">1</div>
<h4 className="text-2xl font-semibold tracking-tight text-white">Envie uma mensagem</h4>
</div>
<p className="text-lg text-slate-400 font-medium mb-6">Pode ser texto ou áudio. Fale naturalmente, como se contasse para um amigo.</p>
<div className="bg-slate-950/50 rounded-2xl p-4 border border-white/5 font-mono text-sm text-slate-300">
<span className="text-fuchsia-400">🎙️</span> "Paguei a luz hoje, deu 185 reais"
                            </div>
</div>
</div>
<div className="order-1 md:order-2 md:pl-12">
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Sem formulários.</h3>
<p className="text-lg text-slate-400 font-medium leading-relaxed">Nossa IA entende o contexto, valor, categoria e até a data, apenas lendo ou ouvindo sua mensagem no WhatsApp.</p>
</div>
</div>
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="md:pr-12">
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Organização automática.</h3>
<p className="text-lg text-slate-400 font-medium leading-relaxed">O Nico processa a informação em milissegundos, categoriza a despesa ou receita e alimenta seu banco de dados pessoal de forma invisível.</p>
</div>
<div className="relative group">
<div className="absolute inset-0 bg-fuchsia-500/20 blur-2xl rounded-3xl group-hover:bg-fuchsia-500/30 transition-colors duration-500"></div>
<div className="relative bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-white font-semibold text-lg border border-white/5">2</div>
<h4 className="text-2xl font-semibold tracking-tight text-white">IA processa tudo</h4>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3 text-lg font-medium text-slate-300 bg-white/5 p-3 rounded-xl border border-white/5">
<iconify-icon className="text-green-400 text-xl" icon="solar:check-circle-linear"></iconify-icon> Extraindo valor: R$ 185,00
                                </div>
<div className="flex items-center gap-3 text-lg font-medium text-slate-300 bg-white/5 p-3 rounded-xl border border-white/5">
<iconify-icon className="text-green-400 text-xl" icon="solar:check-circle-linear"></iconify-icon> Categoria: Contas Residenciais
                                </div>
<div className="flex items-center gap-3 text-lg font-medium text-slate-300 bg-white/5 p-3 rounded-xl border border-white/5">
<iconify-icon className="text-green-400 text-xl" icon="solar:check-circle-linear"></iconify-icon> Status: Pago
                                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 bg-slate-900/20 border-t border-white/5" id="recursos">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">Simples na superfície,<br/>poderoso no núcleo.</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all backdrop-blur-sm">
<iconify-icon className="text-fuchsia-400 text-3xl mb-6" icon="solar:microphone-2-linear"></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Reconhecimento de Áudio</h3>
<p className="text-lg text-slate-400 font-medium">Não pode digitar? Mande um áudio e o Nico transcreve e organiza a despesa perfeitamente.</p>
</div>
<div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all backdrop-blur-sm">
<iconify-icon className="text-violet-400 text-3xl mb-6" icon="solar:pie-chart-2-linear"></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Relatórios instantâneos</h3>
<p className="text-lg text-slate-400 font-medium">Pergunte "Quanto gastei com ifood este mês?" e receba um resumo visual no próprio chat.</p>
</div>
<div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all backdrop-blur-sm">
<iconify-icon className="text-blue-400 text-3xl mb-6" icon="solar:bell-bing-linear"></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Lembretes proativos</h3>
<p className="text-lg text-slate-400 font-medium">O Nico te lembra de contas a vencer e avisa quando você está perto do limite do orçamento.</p>
</div>
<div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all backdrop-blur-sm">
<iconify-icon className="text-pink-400 text-3xl mb-6" icon="solar:calculator-minimalistic-linear"></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Divisão de contas</h3>
<p className="text-lg text-slate-400 font-medium">Anote gastos compartilhados. O Nico calcula quem deve quanto para quem em segundos.</p>
</div>
<div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all backdrop-blur-sm lg:col-span-2 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-fuchsia-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
<div className="flex-1">
<iconify-icon className="text-slate-300 text-3xl mb-6" icon="solar:server-square-linear"></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Exportação para onde quiser</h3>
<p className="text-lg text-slate-400 font-medium">Apesar de não precisar de planilhas, seus dados são seus. Exporte para Notion, Excel, Google Sheets ou via API a qualquer momento com um simples comando.</p>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
<iconify-icon className="text-green-400 text-xl" icon="solar:document-text-linear"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
<iconify-icon className="text-slate-300 text-xl" icon="solar:book-bookmark-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-violet-950 to-slate-950 -z-10"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-fuchsia-600/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-white mb-6">Pronto para ter controle total?</h2>
<p className="text-xl text-slate-300 font-medium mb-12 max-w-2xl mx-auto">Adicione o Nico aos seus contatos agora mesmo e transforme seu WhatsApp na ferramenta financeira mais poderosa que você já usou.</p>
<a className="inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-medium text-white transition-all bg-white hover:bg-slate-100 text-slate-950 rounded-full hover:scale-105 duration-300 shadow-[0_0_50px_-12px_rgba(255,255,255,0.5)]" href="#">
<iconify-icon className="text-xl" icon="solar:chat-round-dots-linear"></iconify-icon>
                Adicionar no WhatsApp
            </a>
<p className="mt-8 text-sm font-medium text-slate-400">Sem cartão de crédito. Teste grátis por 14 dias.</p>
</div>
</section>

<footer className="relative z-10 border-t border-white/10 bg-slate-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-md bg-gradient-to-tr from-fuchsia-500 to-violet-500 flex items-center justify-center">
<iconify-icon className="text-white text-xs" icon="solar:stars-linear"></iconify-icon>
</div>
<span className="text-base font-semibold tracking-tight text-white">Nico</span>
</div>
<div className="flex gap-6 text-sm font-medium text-slate-500">
<a className="hover:text-slate-300 transition-colors" href="#">Termos</a>
<a className="hover:text-slate-300 transition-colors" href="#">Privacidade</a>
<a className="hover:text-slate-300 transition-colors" href="#">Contato</a>
</div>
<p className="text-sm font-medium text-slate-600">© 2024 Acessor Nico. Todos os direitos reservados.</p>
</div>
</footer>

    </>
  );
}
