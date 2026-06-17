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
      

<div aria-hidden="true" className="fixed top-0 w-full h-screen bg-cover bg-center -z-10 opacity-30" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ef746e07-1077-42d6-952e-81f3116cc0fc_3840w.png\')', filter: 'blur(100px)'}}>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-slate-200/50 bg-white/90 backdrop-blur-md shadow-sm transition-all">
<div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-2">

<img alt="Logo Binha Baterias" className="w-[88px] h-auto object-contain" height="30" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ef746e07-1077-42d6-952e-81f3116cc0fc_3840w.png" width="88"/>
</div>

<a aria-label="Falar no WhatsApp" className="flex items-center bg-[#FFC102] hover:bg-[#FF9501] text-[#002E44] px-4 py-3 rounded-full transition-all duration-200 shadow-lg shadow-orange-500/10 hover:shadow-xl hover:-translate-y-0.5 group uppercase tracking-wide" href="https://wa.me/">
<iconify-icon height="24" icon="logos:whatsapp-icon" width="24"></iconify-icon>
</a>
</div>
</nav>

<main className="pt-24 bg-[#002E44] relative overflow-hidden pb-20">

<div className="absolute inset-0 bg-gradient-to-r from-[#002E44] via-[#002E44] to-[#002E44]/40 z-0"></div>
<div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#FFC102]/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
<div className="max-w-6xl mx-auto px-6 pt-12 relative z-10">
<div className="grid md:grid-cols-2 gap-12 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFC102] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFC102]"></span>
</span>
<h2 className="text-xs font-semibold text-[#FFC102] uppercase tracking-wide">Plantão: Bateria arriou? O Binha chegou!</h2>
</div>
<h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                        Bateria nova com 
                        <span className="text-[#FFC102]">preço de distribuidora.</span>
</h1>
<p className="text-lg text-slate-300 max-w-lg leading-relaxed font-light">
                        Revendedor Autorizado Moura e Heliar. Levamos a maquininha até você e instalamos na hora. Sem taxas escondidas.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
<button className="w-full sm:w-auto h-14 px-8 bg-[#FFC102] text-[#002E44] rounded-xl font-bold text-base hover:bg-[#FF9501] hover:-translate-y-1 transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,193,2,0.3)]">
<iconify-icon height="16" icon="logos:whatsapp-icon" width="16"></iconify-icon>
                            PEDIR SOCORRO AGORA
                        </button>
</div>
</div>

<div className="relative hidden md:block">
<div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group bg-[#001E2E]">
<div className="absolute inset-0 bg-[#002E44]/10 group-hover:bg-transparent transition-colors z-10"></div>

<img alt="Técnico Binha Baterias realizando instalação" className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700" fetchpriority="high" height="500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e8091b7f-abb5-4621-9dcd-9b320603ee0f_800w.jpg" width="600"/>
</div>
<div className="absolute -z-10 -right-4 -bottom-4 w-full h-full border-2 border-[#FFC102]/30 rounded-2xl"></div>
</div>
</div>

<div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-10">
<div className="flex flex-col items-center md:items-start gap-1">
<iconify-icon className="text-[#FFC102]" height="24" icon="solar:scooter-linear" width="24"></iconify-icon>
<span className="text-sm font-bold text-white">Chegada Express</span>
<span className="text-xs text-slate-400">Entrega voando pra você</span>
</div>
<div className="flex flex-col items-center md:items-start gap-1">
<iconify-icon className="text-[#FFC102]" height="24" icon="solar:verified-check-linear" width="24"></iconify-icon>
<span className="text-sm font-bold text-white">Produto Original</span>
<span className="text-xs text-slate-400">Selo do Inmetro e Garantia</span>
</div>
<div className="flex flex-col items-center md:items-start gap-1">
<iconify-icon className="text-[#FFC102]" height="24" icon="solar:wallet-linear" width="24"></iconify-icon>
<span className="text-sm font-bold text-white">Facilitado</span>
<span className="text-xs text-slate-400">Parcele na entrega</span>
</div>
<div className="flex flex-col items-center md:items-start gap-1">
<iconify-icon className="text-[#FFC102]" height="24" icon="solar:hand-shake-linear" width="24"></iconify-icon>
<span className="text-sm font-bold text-white">Instalação Grátis</span>
<span className="text-xs text-slate-400">Serviço de cortesia</span>
</div>
</div>
</div>
</main>

<section className="py-24 px-6 bg-white border-b border-slate-200">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight mb-12 text-[#002E44]">O que o Binha resolve pra você?</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="group p-6 rounded-xl border border-slate-200 bg-white hover:border-[#FFC102] hover:shadow-lg hover:shadow-[#FFC102]/10 transition-all duration-300">
<div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-[#002E44] mb-6 group-hover:bg-[#002E44] group-hover:text-[#FFC102] transition-colors">
<iconify-icon icon="solar:wheel-angle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-lg mb-2 text-[#002E44]">Socorro Automotivo</h3>
<p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600">
                        Carro não pega? Vamos até sua casa, trabalho ou onde parou. Testamos tudo antes de condenar a bateria.
                    </p>
</div>

<div className="group p-6 rounded-xl border border-slate-200 bg-white hover:border-[#FFC102] hover:shadow-lg hover:shadow-[#FFC102]/10 transition-all duration-300">
<div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-[#002E44] mb-6 group-hover:bg-[#002E44] group-hover:text-[#FFC102] transition-colors">
<iconify-icon icon="solar:bicycling-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-lg mb-2 text-[#002E44]">Baterias de Moto</h3>
<p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600">
                        Linha completa para sua moto. Moura e Heliar com a tecnologia certa para durar mais.
                    </p>
</div>

<div className="group p-6 rounded-xl border border-slate-200 bg-white hover:border-[#FFC102] hover:shadow-lg hover:shadow-[#FFC102]/10 transition-all duration-300">
<div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-[#002E44] mb-6 group-hover:bg-[#002E44] group-hover:text-[#FFC102] transition-colors">
<iconify-icon icon="solar:clipboard-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-lg mb-2 text-[#002E44]">Teste de Alternador</h3>
<p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600">
                        Não trocamos peça à toa. Fazemos o check-up elétrico gratuito para garantir que o problema é mesmo a bateria.
                    </p>
</div>

<div className="group p-6 rounded-xl border border-slate-200 bg-white hover:border-[#FFC102] hover:shadow-lg hover:shadow-[#FFC102]/10 transition-all duration-300">
<div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-[#002E44] mb-6 group-hover:bg-[#002E44] group-hover:text-[#FFC102] transition-colors">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-lg mb-2 text-[#002E44]">Start-Stop e EFB</h3>
<p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600">
                        Especialista em carros modernos. Temos as baterias AGM e EFB originais de montadora com a codificação correta.
                    </p>
</div>

<div className="group p-6 rounded-xl border border-slate-200 bg-white hover:border-[#FFC102] hover:shadow-lg hover:shadow-[#FFC102]/10 transition-all duration-300">
<div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-[#002E44] mb-6 group-hover:bg-[#002E44] group-hover:text-[#FFC102] transition-colors">
<iconify-icon icon="solar:bus-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-lg mb-2 text-[#002E44]">Linha Pesada</h3>
<p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600">
                        Baterias parrudas para caminhão, ônibus e vans. Preço especial para frotistas e motoristas de app.
                    </p>
</div>

<div className="group p-6 rounded-xl border border-slate-200 bg-white hover:border-[#FFC102] hover:shadow-lg hover:shadow-[#FFC102]/10 transition-all duration-300">
<div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-[#002E44] mb-6 group-hover:bg-[#002E44] group-hover:text-[#FFC102] transition-colors">
<iconify-icon icon="solar:refresh-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-lg mb-2 text-[#002E44]">Logística Reversa</h3>
<p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600">
                        Comprando com a gente, sua bateria velha vale desconto na base de troca e tem o descarte ecológico certo.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 border-b border-slate-200 py-24 px-6 overflow-hidden">
<div className="max-w-6xl mx-auto text-center">
<h2 className="text-3xl font-semibold tracking-tight text-[#002E44] mb-16">Como funciona o atendimento do Binha</h2>
<div className="relative">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 border-t-[3px] border-dashed border-slate-300 -z-0 -translate-y-1/2"></div>
<div className="grid md:grid-cols-4 gap-8 relative z-10">

<div className="bg-[#002E44] rounded-xl p-8 flex flex-col items-center text-center shadow-xl hover:-translate-y-2 transition-transform duration-300 h-full">
<div className="w-24 h-24 rounded-full border-[3px] border-[#FFC102] bg-[#002E44] flex items-center justify-center text-[#FFC102] mb-6 shadow-lg relative">
<div className="absolute -top-3 bg-[#FFC102] text-[#002E44] text-xs font-bold px-2 py-0.5 rounded-full">1</div>
<iconify-icon height="36" icon="logos:whatsapp-icon" width="36"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-white uppercase mb-3">Manda um Zap</h3>
<p className="text-slate-300 text-sm leading-relaxed">
                            Chame a gente no WhatsApp. Nosso atendimento é humanizado e rápido, sem robô enrolando.
                        </p>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-8 flex flex-col items-center text-center shadow-xl hover:-translate-y-2 transition-transform duration-300 h-full">
<div className="w-24 h-24 rounded-full border-[3px] border-[#002E44] bg-white flex items-center justify-center text-[#002E44] mb-6 shadow-lg relative">
<div className="absolute -top-3 bg-[#002E44] text-white text-xs font-bold px-2 py-0.5 rounded-full">2</div>
<iconify-icon height="40" icon="solar:wheel-angle-linear" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-[#002E44] uppercase mb-3">O Binha Vai</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                            Um técnico especializado sai na hora com a bateria certa pro seu veículo. Chegamos voando!
                        </p>
</div>

<div className="bg-[#002E44] rounded-xl p-8 flex flex-col items-center text-center shadow-xl hover:-translate-y-2 transition-transform duration-300 h-full">
<div className="w-24 h-24 rounded-full border-[3px] border-[#FFC102] bg-[#002E44] flex items-center justify-center text-[#FFC102] mb-6 shadow-lg relative">
<div className="absolute -top-3 bg-[#FFC102] text-[#002E44] text-xs font-bold px-2 py-0.5 rounded-full">3</div>
<iconify-icon height="40" icon="solar:bolt-linear" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-white uppercase mb-3">Troca na Hora</h3>
<p className="text-slate-300 text-sm leading-relaxed">
                            Instalamos a bateria nova e testamos se o seu carro está gerando carga direitinho.
                        </p>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-8 flex flex-col items-center text-center shadow-xl hover:-translate-y-2 transition-transform duration-300 h-full">
<div className="w-24 h-24 rounded-full border-[3px] border-[#002E44] bg-white flex items-center justify-center text-[#002E44] mb-6 shadow-lg relative">
<div className="absolute -top-3 bg-[#002E44] text-white text-xs font-bold px-2 py-0.5 rounded-full">4</div>
<iconify-icon height="40" icon="solar:card-linear" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-[#002E44] uppercase mb-3">Pagamento</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                            Pronto! Agora você escolhe qual melhor forma de pagamento para você, recebe a garantia oficial e segue viagem.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-b border-slate-200 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-white to-white pointer-events-none"></div>
<div className="max-w-6xl mx-auto relative z-10">
<div className="text-center mb-16 space-y-3">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#002E44]">
                    TEMOS A BATERIA <br className="md:hidden"/> <span className="text-slate-400">QUE VOCÊ PRECISA</span>
</h2>
<p className="text-slate-500 text-lg">As melhores marcas do mercado com garantia de fábrica.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">

<div className="group flex flex-col items-center bg-slate-50 rounded-xl p-6 hover:shadow-xl hover:bg-white hover:scale-105 transition-all duration-300 border border-transparent hover:border-slate-200">
<h3 className="text-sm font-bold uppercase tracking-wider text-[#002E44] mb-2">Carros</h3>
<div className="w-12 h-1 bg-[#FFC102] rounded-full mb-6 group-hover:w-20 transition-all duration-300"></div>
<div className="w-full aspect-[4/3] relative rounded-xl overflow-hidden mb-2 bg-[#002E44]">
<img alt="Bateria para Carros" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" height="240" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7257ec10-d3a0-4252-a4d4-1e2a4b37ff83_320w.png" width="320"/>
</div>
</div>

<div className="group flex flex-col items-center bg-slate-50 rounded-2xl p-6 hover:shadow-xl hover:bg-white hover:scale-105 transition-all duration-300 border border-transparent hover:border-slate-200">
<h3 className="text-sm font-bold uppercase tracking-wider text-[#002E44] mb-2">Caminhões</h3>
<div className="w-12 h-1 bg-[#FFC102] rounded-full mb-6 group-hover:w-20 transition-all duration-300"></div>
<div className="w-full aspect-[4/3] relative rounded-xl overflow-hidden mb-2 bg-[#002E44]">
<img alt="Bateria para Caminhões" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" height="240" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a69b8c3d-1506-4db6-ba43-23d55d2e5b6b_800w.png" width="320"/>
</div>
</div>

<div className="group flex flex-col items-center bg-slate-50 rounded-xl p-6 hover:shadow-xl hover:bg-white hover:scale-105 transition-all duration-300 border border-transparent hover:border-slate-200">
<h3 className="text-sm font-bold uppercase tracking-wider text-[#002E44] mb-2">Motos</h3>
<div className="w-12 h-1 bg-[#FFC102] rounded-full mb-6 group-hover:w-20 transition-all duration-300"></div>
<div className="w-full aspect-[4/3] relative rounded-xl overflow-hidden mb-2 bg-[#002E44]">
<img alt="Bateria para Motos" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" height="240" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6faff4ac-7fd9-407d-b02c-342635ca8f08_320w.png" width="320"/>
</div>
</div>

<div className="group flex flex-col items-center bg-slate-50 rounded-xl p-6 hover:shadow-xl hover:bg-white hover:scale-105 transition-all duration-300 border border-transparent hover:border-slate-200">
<h3 className="text-sm font-bold uppercase tracking-wider text-[#002E44] mb-2">NOBREAKS</h3>
<div className="w-12 h-1 bg-[#FFC102] rounded-full mb-6 group-hover:w-20 transition-all duration-300"></div>
<div className="w-full aspect-[4/3] relative rounded-xl overflow-hidden mb-2 bg-[#002E44]">
<img alt="Bateria para Nobreaks" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" height="240" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6a5595b4-1fbf-4696-a2c1-501a4f8240c9_320w.png" width="320"/>
</div>
</div>
</div>
<div className="text-center justify-center max-w-2xl mx-auto space-y-8">
<p className="text-lg md:text-xl font-semibold text-[#002E44] tracking-tight">
                    NÃO DEIXE SEU CARRO PARADO. FALE COM O BINHA AGORA!
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 pt-2 justify-center">
<button className="w-full sm:w-auto h-14 px-8 bg-[#FFC102] text-[#002E44] rounded-xl font-bold text-base hover:bg-[#FF9501] hover:-translate-y-1 transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,193,2,0.3)]">
<iconify-icon height="16" icon="logos:whatsapp-icon" width="16"></iconify-icon>
                        PEDIR SOCORRO AGORA
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#002E44] overflow-hidden relative" id="brands">
<div className="max-w-6xl mx-auto px-6 mb-12 text-center relative z-10">
<h2 className="text-2xl font-semibold tracking-tight text-white">Parceiro Oficial das Melhores Marcas</h2>
<p className="text-slate-400 text-sm mt-2">Aqui você tem garantia total e procedência</p>
</div>

<div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#002E44] to-transparent z-20 pointer-events-none"></div>
<div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#002E44] to-transparent z-20 pointer-events-none"></div>
<div className="pause-on-hover scroller relative z-10">

<div className="scroller__inner flex gap-16 md:gap-24 items-center pl-16 md:pl-24">

<img alt="Moura" className="h-16 w-auto object-contain" height="64" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c41948b8-0749-466e-92f5-103cb5238a70_320w.png" width="128"/>
<img alt="Heliar" className="h-24 w-auto object-contain" height="96" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eff57f52-c7df-4d2a-9ba5-6325740e89ce_320w.png" width="128"/>
<img alt="ACDelco" className="h-24 w-auto object-contain" height="96" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5f34f9c6-7f31-401f-bce1-8f11f031111b_320w.png" width="128"/>
<img alt="Bosch" className="h-10 w-auto object-contain" height="40" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8042badc-9fe0-4db7-87f8-9bc2d3f1a422_320w.png" width="128"/>
<img alt="Zetta" className="h-10 w-auto object-contain" height="40" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8e8a1ad9-ed6f-4f3f-bf87-af1ae70a36fc_320w.webp" width="128"/>

<img alt="Moura" className="h-16 w-auto object-contain" height="64" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c41948b8-0749-466e-92f5-103cb5238a70_320w.png" width="128"/>
<img alt="Heliar" className="h-24 w-auto object-contain" height="96" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eff57f52-c7df-4d2a-9ba5-6325740e89ce_320w.png" width="128"/>
<img alt="ACDelco" className="h-24 w-auto object-contain" height="96" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5f34f9c6-7f31-401f-bce1-8f11f031111b_320w.png" width="128"/>
<img alt="Bosch" className="h-10 w-auto object-contain" height="40" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8042badc-9fe0-4db7-87f8-9bc2d3f1a422_320w.png" width="128"/>
<img alt="Zetta" className="h-10 w-auto object-contain" height="40" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8e8a1ad9-ed6f-4f3f-bf87-af1ae70a36fc_320w.webp" width="128"/>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50 border-t border-slate-200" id="reviews">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col justify-between gap-6 mb-12">
<div className="space-y-2">
<div className="flex items-center gap-2 mb-2">
<iconify-icon height="20" icon="logos:google-icon" width="20"></iconify-icon>
<span className="text-sm font-semibold text-slate-600">Avaliações 5 Estrelas</span>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-[#002E44]">Quem chama o Binha, recomenda!</h2>
</div>
<div className="flex items-center gap-8 bg-white border border-slate-200 px-6 py-4 rounded-lg">
<div className="text-right">
<div className="flex text-[#FFC102]">
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
</div>
<span className="text-xs text-slate-500 font-medium">Excelência em atendimento</span>
</div>
<div className="text-3xl font-bold text-[#002E44]">5.0</div>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 bg-[#002E44] rounded-full flex items-center justify-center text-white font-bold text-sm">MC</div>
<div>
<h4 className="font-medium text-sm text-[#002E44]">Marcos Cavalcanti</h4>
<span className="text-xs text-slate-400">Há 3 dias</span>
</div>
<iconify-icon className="ml-auto opacity-50" height="16" icon="logos:google-icon" width="16"></iconify-icon>
</div>
<div className="flex text-[#FFC102] mb-3 text-xs gap-0.5">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 leading-relaxed">
                        "Atendimento top! Mandei msg e em menos de 10 min já me responderam. O técnico chegou rápido, trocou a bateria da minha SUV e o preço foi o melhor que achei."
                    </p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 font-bold text-sm">PL</div>
<div>
<h4 className="font-medium text-sm text-[#002E44]">Paula Lima</h4>
<span className="text-xs text-slate-400">Há 2 semanas</span>
</div>
<iconify-icon className="ml-auto opacity-50" height="16" icon="logos:google-icon" width="16"></iconify-icon>
</div>
<div className="flex text-[#FFC102] mb-3 text-xs gap-0.5">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 leading-relaxed">
                        "O Binha Baterias me salvou num domingo à noite. Honestidade total, testaram antes de trocar e me explicaram tudo. Indico de olhos fechados!"
                    </p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 bg-[#FF9501] rounded-full flex items-center justify-center text-white font-bold text-sm">RO</div>
<div>
<h4 className="font-medium text-sm text-[#002E44]">Roberto Oliveira</h4>
<span className="text-xs text-slate-400">Há 1 mês</span>
</div>
<iconify-icon className="ml-auto opacity-50" height="16" icon="logos:google-icon" width="16"></iconify-icon>
</div>
<div className="flex text-[#FFC102] mb-3 text-xs gap-0.5">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 leading-relaxed">
                        "Preço justo e serviço de primeira. Comprei uma Moura pro meu caminhão, entregaram e instalaram super rápido. Profissionais de verdade."
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-t border-slate-200">
<div className="max-w-6xl mx-auto">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-[#002E44] mb-4">Onde a gente atende?</h2>
<p className="text-slate-500 leading-relaxed">
                            Nossa equipe está em ponto estratégico para chegar rapidinho até você. Estamos prontos para atender na sua casa, escritório ou no meio da rua.
                        </p>
</div>
<div className="space-y-4">
<div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200 shadow-sm">
<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#FF9501] shrink-0">
<iconify-icon height="20" icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-[#002E44] text-sm">Cobertura Completa</h4>
<p className="text-sm text-slate-500 mt-1">Rod. BR-101, 431 - Amparo, Santo Antônio de Jesus - BA, 44572-420</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200 shadow-sm">
<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#FF9501] shrink-0">
<iconify-icon height="20" icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-[#002E44] text-sm">Horário Estendido</h4>
<p className="text-sm text-slate-500 mt-1">Atendimento de Segunda a Domingo. Consulte disponibilidade 24h.</p>
</div>
</div>
</div>
</div>
<div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-lg border border-slate-200 group bg-slate-100">

<iframe allowfullscreen="" className="map-filter w-full h-full object-cover" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.909143637228!2d-39.286633321914444!3d-12.97766272725978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x73e2b6505243219%3A0x2dea7af73b0eceee!2sBinha%20Baterias!5e0!3m2!1spt-BR!2sbr!4v1770297528910!5m2!1spt-BR!2sbr" style={{border: '0'}} width="100%">
</iframe>

<div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-64 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-slate-200 shadow-lg pointer-events-none">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs font-semibold text-[#002E44] uppercase tracking-wide">Técnicos Online</span>
</div>
<p className="text-xs text-slate-500 mt-2">Chegada estimada: <span className="font-bold text-[#002E44]">40-50 min</span></p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8 px-6">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
<div className="space-y-4">
<div className="flex items-center gap-2">
<img alt="Binha Baterias" height="30" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ef746e07-1077-42d6-952e-81f3116cc0fc_3840w.png" width="88"/>
</div>
<p className="text-sm text-slate-500 max-w-xs">
                        Sua melhor opção em baterias automotivas. Rapidez, preço justo e as melhores marcas do mercado.
                    </p>
</div>
<div className="grid grid-cols-1 gap-12">
<div>
<h4 className="font-medium text-sm text-[#002E44] mb-4">Fale Conosco</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li className="flex items-center gap-2">
<iconify-icon className="text-[#FF9501]" height="14" icon="solar:phone-linear" width="14"></iconify-icon>
                                (11) 99999-9999
                            </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-[#FF9501]" height="14" icon="solar:map-point-linear" width="14"></iconify-icon>
                                Santo Antônio de Jesus - BA
                        </li></ul>
</div>
</div>
</div>
<div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2026 Binha Baterias. Todos os direitos reservados.</p>
<div className="flex gap-4">
<a aria-label="Instagram" className="text-slate-400 hover:text-[#E1306C] transition-colors" href="https://www.instagram.com/binhabaterias/" target="_blank">
<iconify-icon height="20" icon="logos:instagram-icon" strokeWidth="1.5" style={{filter: 'grayscale(1)'}} width="20"></iconify-icon>
</a>
<a aria-label="Facebook" className="text-slate-400 hover:text-[#1877F2] transition-colors" href="#">
<iconify-icon height="20" icon="logos:facebook" strokeWidth="1.5" style={{filter: 'grayscale(1)'}} width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

<a aria-label="WhatsApp" className="fixed bottom-6 right-6 z-50 bg-[#FFC102] text-[#002E44] p-4 rounded-full shadow-lg hover:shadow-xl hover:bg-[#FF9501] transition-all duration-300 flex items-center gap-2 group" href="https://wa.me/">
<iconify-icon height="24" icon="logos:whatsapp-icon" width="24"></iconify-icon>
</a>

    </>
  );
}
