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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
blue: '#3b82f6',
dark: '#020617',
surface: '#0B1121',
}
},
backgroundImage: {
'hero-glow': 'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.15) 0%, rgba(2, 6, 23, 0) 70%)',
'card-gradient': 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
}
}
}
}



        // Init Icons
        lucide.createIcons();

        // Webhook Configuration
        const WEBHOOK_URL = 'YOUR_WEBHOOK_URL_HERE'; 

        // Phone Mask
        const phoneInput = document.getElementById('phone');
        phoneInput.addEventListener('input', function (e) {
            let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
            e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
        });

        // Form Logic
        document.getElementById('leadForm').addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitBtn = document.getElementById('submitBtn');
            const btnText = submitBtn.querySelector('span');
            
            // Loading State
            submitBtn.disabled = true;
            btnText.innerText = 'Processando...';
            submitBtn.classList.add('opacity-75');

            // Gather Data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData.entries());
            data.timestamp = new Date().toISOString();

            try {
                // Simulate sending data
                console.log('Sending data:', data);
                await new Promise(resolve => setTimeout(resolve, 1500)); 

                // Success Animation
                document.querySelector('#form .bg-[#020617]\\/50').classList.add('hidden'); // Hide form container
                document.getElementById('successMessage').classList.remove('hidden');
                document.getElementById('successMessage').classList.add('flex');

            } catch (error) {
                console.error('Error:', error);
                alert('Erro ao enviar. Tente novamente.');
                submitBtn.disabled = false;
                btnText.innerText = 'Solicitar Análise';
                submitBtn.classList.remove('opacity-75');
            }
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
      

<header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#020617]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
<div className="w-2.5 h-2.5 bg-blue-500 rounded-sm"></div>
</div>
<span className="text-lg font-medium tracking-tight text-white">CO-B.</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="#metodo">O Método</a>
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="#resultados">Resultados</a>
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="#quem-somos">Quem Somos</a>
</nav>
<a className="hidden sm:inline-flex items-center px-4 py-2 text-xs font-medium text-white bg-white/5 border border-white/10 rounded-md hover:bg-white/10 transition-all" href="#form">
                Area do Cliente
            </a>
</div>
</header>
<main className="relative pt-16">

<section className="relative pt-16 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-hero-glow opacity-60 -z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

<div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 w-fit mx-auto lg:mx-0">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span className="text-[11px] font-medium text-blue-300 tracking-wide uppercase">Vagas abertas para Março</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium text-white tracking-tight leading-[1.05]">
                        Aumente suas vendas <br/> <span className="text-slate-500">em 5 passos.</span>
</h1>
<p className="text-lg text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                        Estruturamos sua operação de aquisição online com a mesma metodologia usada pelas empresas que mais crescem no Brasil. Sem "hacks", apenas engenharia de dados.
                    </p>
<div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
<div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/5">
<i className="w-4 h-4 text-blue-500" data-lucide="shield-check"></i>
<span className="text-xs text-slate-300">Certificado Google Partner</span>
</div>
<div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/5">
<i className="w-4 h-4 text-blue-500" data-lucide="award"></i>
<span className="text-xs text-slate-300">Meta Business Preferred</span>
</div>
</div>
</div>

<div className="lg:col-span-5 relative z-10" id="form">
<div className="absolute -inset-0.5 bg-gradient-to-b from-blue-500/30 to-purple-500/30 rounded-xl blur opacity-30"></div>
<div className="relative bg-[#0B1121] border border-white/10 rounded-xl p-1 shadow-2xl">
<div className="bg-[#020617]/50 rounded-lg p-6 sm:p-8 backdrop-blur-sm">
<div className="mb-6">
<h3 className="text-lg font-medium text-white tracking-tight mb-1">Diagnóstico de Escala</h3>
<p className="text-xs text-slate-400">Receba um plano de ação personalizado gratuitamente.</p>
</div>
<form className="space-y-3" id="leadForm">
<input id="utm_source" name="utm_source" type="hidden"/>
<div className="space-y-3">
<input className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2.5 text-sm text-white placeholder-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" name="name" placeholder="Nome da empresa" required="" type="text"/>
<div className="grid grid-cols-2 gap-3">
<input className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2.5 text-sm text-white placeholder-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" name="contact" placeholder="Seu nome" required="" type="text"/>
<input className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2.5 text-sm text-white placeholder-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" id="phone" name="phone" placeholder="WhatsApp" required="" type="tel"/>
</div>
<input className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2.5 text-sm text-white placeholder-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" name="email" placeholder="Email corporativo" required="" type="email"/>
<div className="relative">
<select className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2.5 text-sm text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none appearance-none cursor-pointer" name="revenue" required="">
<option className="text-slate-500" disabled="" selected="" value="">Investimento Mensal em Ads</option>
<option className="bg-slate-900" value="none">Ainda não invisto</option>
<option className="bg-slate-900" value="1k-5k">R$ 1.000 a R$ 5.000</option>
<option className="bg-slate-900" value="5k-15k">R$ 5.000 a R$ 15.000</option>
<option className="bg-slate-900" value="15k+">Acima de R$ 15.000</option>
</select>
<i className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<button className="w-full mt-4 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium py-3 rounded-md transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_-5px_rgba(37,99,235,0.3)]" id="submitBtn" type="submit">
<span>Solicitar Análise</span>
<i className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</button>
</form>

<div className="hidden absolute inset-0 bg-[#0B1121] z-20 flex flex-col items-center justify-center text-center rounded-xl p-6" id="successMessage">
<div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-3">
<i className="w-6 h-6 text-green-500" data-lucide="check"></i>
</div>
<h3 className="text-white font-medium mb-1">Recebido!</h3>
<p className="text-xs text-slate-400">Entraremos em contato em breve.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="metodo">
<div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-blue-950/20 to-[#020617] -z-10"></div>
<div className="max-w-3xl mx-auto px-6 text-center mb-20">
<span className="text-blue-500 text-xs font-medium tracking-wider uppercase">Metodologia CO-B.</span>
<h2 className="text-3xl lg:text-4xl font-medium text-white mt-3 tracking-tight">Como funciona nossa operação?</h2>
<p className="text-slate-400 mt-4 font-light">Um processo linear e transparente para tirar sua empresa da estagnação.</p>
</div>
<div className="max-w-4xl mx-auto px-6 relative">

<div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px timeline-line -translate-x-1/2 md:translate-x-0"></div>

<div className="space-y-12 md:space-y-24 relative">

<div className="flex flex-col md:flex-row items-center gap-8 group">
<div className="flex-1 md:text-right order-2 md:order-1">
<h3 className="text-xl font-medium text-white mb-2 group-hover:text-blue-400 transition-colors">Diagnóstico Profundo</h3>
<p className="text-sm text-slate-400 leading-relaxed">Análise completa do seu funil atual, concorrentes e unit economics para encontrar os gargalos.</p>
</div>
<div className="relative z-10 w-12 h-12 rounded-full bg-[#0B1121] border border-blue-500/30 flex items-center justify-center shrink-0 order-1 md:order-2 shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)]">
<span className="text-blue-500 font-bold text-sm">01</span>
</div>
<div className="flex-1 order-3 hidden md:block"></div>
</div>

<div className="flex flex-col md:flex-row items-center gap-8 group">
<div className="flex-1 hidden md:block order-1"></div>
<div className="relative z-10 w-12 h-12 rounded-full bg-[#0B1121] border border-blue-500/30 flex items-center justify-center shrink-0 order-1 md:order-2 shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)]">
<span className="text-blue-500 font-bold text-sm">02</span>
</div>
<div className="flex-1 order-2 md:order-3">
<h3 className="text-xl font-medium text-white mb-2 group-hover:text-blue-400 transition-colors">Planejamento de Canais</h3>
<p className="text-sm text-slate-400 leading-relaxed">Definição do mix de mídia (Google, Meta, LinkedIn) baseado onde seu cliente ideal realmente está.</p>
</div>
</div>

<div className="flex flex-col md:flex-row items-center gap-8 group">
<div className="flex-1 md:text-right order-2 md:order-1">
<h3 className="text-xl font-medium text-white mb-2 group-hover:text-blue-400 transition-colors">Setup de Rastreamento</h3>
<p className="text-sm text-slate-400 leading-relaxed">Implementação de API de Conversões e GA4. Se não podemos medir com precisão, não anunciamos.</p>
</div>
<div className="relative z-10 w-12 h-12 rounded-full bg-[#0B1121] border border-blue-500/30 flex items-center justify-center shrink-0 order-1 md:order-2 shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)]">
<span className="text-blue-500 font-bold text-sm">03</span>
</div>
<div className="flex-1 order-3 hidden md:block"></div>
</div>

<div className="flex flex-col md:flex-row items-center gap-8 group">
<div className="flex-1 hidden md:block order-1"></div>
<div className="relative z-10 w-12 h-12 rounded-full bg-[#0B1121] border border-blue-500/30 flex items-center justify-center shrink-0 order-1 md:order-2 shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)]">
<span className="text-blue-500 font-bold text-sm">04</span>
</div>
<div className="flex-1 order-2 md:order-3">
<h3 className="text-xl font-medium text-white mb-2 group-hover:text-blue-400 transition-colors">Execução Criativa</h3>
<p className="text-sm text-slate-400 leading-relaxed">Design e Copy focados em conversão. Criamos anúncios que param o scroll e geram cliques qualificados.</p>
</div>
</div>

<div className="flex flex-col md:flex-row items-center gap-8 group">
<div className="flex-1 md:text-right order-2 md:order-1">
<h3 className="text-xl font-medium text-white mb-2 group-hover:text-blue-400 transition-colors">Otimização Contínua</h3>
<p className="text-sm text-slate-400 leading-relaxed">Análise diária de métricas. Cortamos o que é ruim, escalamos o que funciona. Otimização por ROI.</p>
</div>
<div className="relative z-10 w-12 h-12 rounded-full bg-[#0B1121] border border-blue-500/30 flex items-center justify-center shrink-0 order-1 md:order-2 shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)]">
<span className="text-blue-500 font-bold text-sm">05</span>
</div>
<div className="flex-1 order-3 hidden md:block"></div>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-[#020617] bg-white rounded-lg hover:bg-slate-200 transition-all shadow-lg hover:shadow-white/10" href="#form">
                        Começar Agora
                    </a>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#020617]">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="relative rounded-2xl bg-white/5 border border-white/5 p-8 overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

<div className="flex items-end justify-between h-64 gap-2 mt-8">
<div className="w-full bg-blue-900/30 rounded-t-sm h-[30%] group-hover:h-[35%] transition-all duration-500 relative"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-slate-500">M1</div></div>
<div className="w-full bg-blue-900/40 rounded-t-sm h-[45%] group-hover:h-[50%] transition-all duration-500 delay-75 relative"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-slate-500">M2</div></div>
<div className="w-full bg-blue-800/50 rounded-t-sm h-[40%] group-hover:h-[42%] transition-all duration-500 delay-100 relative"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-slate-500">M3</div></div>
<div className="w-full bg-blue-700/60 rounded-t-sm h-[60%] group-hover:h-[65%] transition-all duration-500 delay-150 relative"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-slate-500">M4</div></div>
<div className="w-full bg-blue-600/80 rounded-t-sm h-[75%] group-hover:h-[85%] transition-all duration-500 delay-200 relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-blue-600 text-white text-[10px] font-bold rounded shadow-lg">+142%</div>
</div>
<div className="w-full bg-blue-500 rounded-t-sm h-[90%] group-hover:h-[95%] transition-all duration-500 delay-300 relative shadow-[0_0_20px_rgba(59,130,246,0.4)]"></div>
</div>

<div className="absolute top-6 left-6 px-4 py-3 bg-[#0B1121]/90 backdrop-blur border border-white/10 rounded-lg shadow-xl">
<p className="text-[10px] text-slate-400 uppercase tracking-wider">Custo por Aquisição</p>
<p className="text-xl font-semibold text-white mt-1 flex items-center gap-2">
                            R$ 14,20
                            <span className="text-[10px] text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded">-12%</span>
</p>
</div>
</div>

<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-6">O que é Google &amp; Facebook Ads?</h2>
<p className="text-slate-400 mb-6 leading-relaxed">
                        Não é apenas sobre "impulsionar". É sobre aparecer para a pessoa certa, no momento exato em que ela busca sua solução (Google) ou despertar o desejo em quem tem o perfil de compra (Facebook/Instagram).
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" data-lucide="check-circle"></i>
<div>
<strong className="text-white text-sm block">Intenção de Compra</strong>
<span className="text-sm text-slate-500">Capturamos quem já está procurando seu produto.</span>
</div>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" data-lucide="check-circle"></i>
<div>
<strong className="text-white text-sm block">Segmentação Laser</strong>
<span className="text-sm text-slate-500">Direcionamos anúncios por cargo, interesse e comportamento.</span>
</div>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" data-lucide="check-circle"></i>
<div>
<strong className="text-white text-sm block">Remarketing Inteligente</strong>
<span className="text-sm text-slate-500">Recuperamos quem visitou seu site mas não comprou.</span>
</div>
</li>
</ul>
</div>
</div>
</section>

<section className="py-24 bg-[#0B1121]">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1">
<h2 className="text-3xl font-medium text-white tracking-tight mb-6">Mensagem focada no perfil do seu cliente.</h2>
<p className="text-slate-400 mb-8 font-light text-lg">
                        Criamos a comunicação visual e textual que conecta com as dores reais do seu público.
                    </p>
<div className="space-y-3">
<div className="flex items-center gap-4 p-4 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
<i className="w-5 h-5" data-lucide="users"></i>
</div>
<span className="text-sm text-slate-300">Públicos Personalizados (Lookalike)</span>
</div>
<div className="flex items-center gap-4 p-4 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
<i className="w-5 h-5" data-lucide="target"></i>
</div>
<span className="text-sm text-slate-300">Geolocalização Precisa</span>
</div>
<div className="flex items-center gap-4 p-4 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
<i className="w-5 h-5" data-lucide="message-square"></i>
</div>
<span className="text-sm text-slate-300">Copywriting Persuasivo</span>
</div>
</div>
</div>

<div className="order-1 lg:order-2 relative flex justify-center">

<div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full"></div>

<div className="relative z-10 w-72 h-96 bg-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex items-center justify-center">
<svg className="w-full h-full text-slate-700 bg-slate-800" fill="currentColor" viewbox="0 0 24 24">
<rect fill="currentColor" height="100%" width="100%"></rect>
<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#334155"></path>
</svg>

<div className="absolute -right-6 top-12 bg-[#020617] border border-white/10 p-3 rounded-lg shadow-xl animate-float" style={{animationDelay: '0s'}}>
<i className="w-5 h-5 text-blue-500" data-lucide="thumbs-up"></i>
</div>
<div className="absolute -left-6 bottom-20 bg-[#020617] border border-white/10 p-3 rounded-lg shadow-xl animate-float" style={{animationDelay: '2s'}}>
<i className="w-5 h-5 text-green-500" data-lucide="trending-up"></i>
</div>
<div className="absolute right-0 bottom-8 bg-[#020617] border border-white/10 p-3 rounded-lg shadow-xl animate-float" style={{animationDelay: '1s'}}>
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
<span className="text-[10px] text-white font-medium">Live Sales</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-[#020617] overflow-hidden" id="resultados">
<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl font-medium text-white mb-6">Em quanto tempo vou ver resultados?</h2>
<p className="text-slate-400 mb-12">Acompanhe tudo na palma da sua mão com nosso dashboard mobile.</p>

<div className="relative mx-auto w-[280px] h-[550px] bg-[#0B1121] border-8 border-slate-800 rounded-[3rem] shadow-2xl overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-xl z-20"></div>

<div className="w-full h-full bg-[#020617] overflow-y-auto pt-10 px-4 pb-4 no-scrollbar">

<div className="flex items-center justify-between mb-6">
<span className="text-xs font-bold text-white">Dashboard</span>
<div className="w-6 h-6 rounded-full bg-slate-800"></div>
</div>

<div className="bg-blue-600 rounded-xl p-4 mb-4 text-left shadow-lg shadow-blue-900/20">
<p className="text-[10px] text-blue-200 mb-1">Faturamento (Mês)</p>
<p className="text-2xl font-bold text-white mb-3">R$ 142.305</p>
<div className="flex items-end gap-1 h-12">
<div className="w-full bg-white/20 rounded-sm h-[40%]"></div>
<div className="w-full bg-white/20 rounded-sm h-[60%]"></div>
<div className="w-full bg-white/20 rounded-sm h-[50%]"></div>
<div className="w-full bg-white/20 rounded-sm h-[80%]"></div>
<div className="w-full bg-white rounded-sm h-[100%] shadow-[0_0_10px_white]"></div>
</div>
</div>

<div className="space-y-2">
<div className="bg-white/5 rounded-lg p-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 text-xs"><i className="w-3 h-3" data-lucide="arrow-up"></i></div>
<div className="text-left">
<p className="text-[10px] text-white">Leads Hoje</p>
<p className="text-[10px] text-slate-500">Meta: 45</p>
</div>
</div>
<span className="text-sm font-bold text-white">52</span>
</div>
<div className="bg-white/5 rounded-lg p-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 text-xs"><i className="w-3 h-3" data-lucide="mouse-pointer"></i></div>
<div className="text-left">
<p className="text-[10px] text-white">CTR Médio</p>
<p className="text-[10px] text-slate-500">Google Ads</p>
</div>
</div>
<span className="text-sm font-bold text-white">4.2%</span>
</div>
<div className="bg-white/5 rounded-lg p-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 text-xs"><i className="w-3 h-3" data-lucide="dollar-sign"></i></div>
<div className="text-left">
<p className="text-[10px] text-white">ROAS</p>
<p className="text-[10px] text-slate-500">Retorno</p>
</div>
</div>
<span className="text-sm font-bold text-white">12x</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium text-white text-center mb-16 tracking-tight">Benefícios da Consultoria</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="p-6 bg-white/[0.02] border border-white/5 rounded-xl hover:border-blue-500/30 transition-all group">
<i className="w-8 h-8 text-blue-500 mb-4 group-hover:scale-110 transition-transform" data-lucide="filter"></i>
<h3 className="text-white font-medium mb-2">Leads Qualificados</h3>
<p className="text-sm text-slate-400">Filtramos curiosos. Entregamos oportunidades reais para seu time comercial.</p>
</div>
<div className="p-6 bg-white/[0.02] border border-white/5 rounded-xl hover:border-blue-500/30 transition-all group">
<i className="w-8 h-8 text-blue-500 mb-4 group-hover:scale-110 transition-transform" data-lucide="bar-chart-2"></i>
<h3 className="text-white font-medium mb-2">Relatórios em Tempo Real</h3>
<p className="text-sm text-slate-400">Sem PDFs mensais chatos. Acesso a um dashboard vivo 24/7.</p>
</div>
<div className="p-6 bg-white/[0.02] border border-white/5 rounded-xl hover:border-blue-500/30 transition-all group">
<i className="w-8 h-8 text-blue-500 mb-4 group-hover:scale-110 transition-transform" data-lucide="zap"></i>
<h3 className="text-white font-medium mb-2">Velocidade de Implementação</h3>
<p className="text-sm text-slate-400">Campanhas no ar em até 5 dias úteis após o onboarding.</p>
</div>
<div className="p-6 bg-white/[0.02] border border-white/5 rounded-xl hover:border-blue-500/30 transition-all group">
<i className="w-8 h-8 text-blue-500 mb-4 group-hover:scale-110 transition-transform" data-lucide="users"></i>
<h3 className="text-white font-medium mb-2">Equipe Especialista</h3>
<p className="text-sm text-slate-400">Designers, copys e gestores sêniores trabalhando na sua conta.</p>
</div>
<div className="p-6 bg-white/[0.02] border border-white/5 rounded-xl hover:border-blue-500/30 transition-all group">
<i className="w-8 h-8 text-blue-500 mb-4 group-hover:scale-110 transition-transform" data-lucide="smartphone"></i>
<h3 className="text-white font-medium mb-2">Páginas de Alta Conversão</h3>
<p className="text-sm text-slate-400">Construímos landing pages otimizadas para mobile e velocidade.</p>
</div>
<div className="p-6 bg-white/[0.02] border border-white/5 rounded-xl hover:border-blue-500/30 transition-all group">
<i className="w-8 h-8 text-blue-500 mb-4 group-hover:scale-110 transition-transform" data-lucide="refresh-cw"></i>
<h3 className="text-white font-medium mb-2">Processo de Otimização</h3>
<p className="text-sm text-slate-400">Testes A/B constantes para reduzir seu custo por venda.</p>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="quem-somos">
<div className="absolute inset-0 bg-blue-600 -z-20"></div>
<div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-black/20 -z-10"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-semibold text-white mb-12">Por que escolher a CO-B?</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 border-y border-white/10 py-8">
<div>
<p className="text-4xl font-bold text-white mb-1">+5.000</p>
<p className="text-blue-200 text-sm">Campanhas Criadas</p>
</div>
<div>
<p className="text-4xl font-bold text-white mb-1">+R$ 20M</p>
<p className="text-blue-200 text-sm">Gerenciados em Ads</p>
</div>
<div>
<p className="text-4xl font-bold text-white mb-1">98%</p>
<p className="text-blue-200 text-sm">Taxa de Retenção</p>
</div>
</div>

<div className="relative w-full max-w-4xl mx-auto h-[400px] bg-blue-900 rounded-2xl overflow-hidden shadow-2xl border border-white/20 group">

<svg className="w-full h-full text-blue-800" fill="currentColor" viewbox="0 0 24 24"><rect fill="currentColor" height="100%" width="100%"></rect></svg>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-center">
<div className="flex justify-center gap-4 mb-4">
<div className="w-24 h-24 rounded-full bg-blue-500 border-4 border-white/20"></div>
<div className="w-24 h-24 rounded-full bg-blue-400 border-4 border-white/20"></div>
</div>
<p className="text-white font-medium text-lg">Fundadores &amp; Estrategistas</p>
<p className="text-blue-200 text-sm">Foco total no seu resultado</p>
</div>
</div>
</div>
<div className="mt-8">
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-blue-600 bg-white rounded-lg hover:bg-slate-100 transition-all shadow-xl" href="#form">
                        Agendar reunião com especialistas
                    </a>
</div>
</div>
</section>

<section className="py-24 bg-[#020617]">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl font-medium text-white text-center mb-16">Este serviço é para quem?</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-gradient-to-b from-[#0B1121] to-[#020617] border border-white/5 hover:border-blue-500/30 transition-all">
<div className="w-12 h-12 bg-blue-900/20 rounded-lg flex items-center justify-center mb-6 text-blue-500">
<i className="w-6 h-6" data-lucide="building-2"></i>
</div>
<h3 className="text-lg font-medium text-white mb-3">Prestadores de Serviço</h3>
<p className="text-sm text-slate-400 leading-relaxed">Clínicas, escritórios de advocacia, construtoras e consultorias que precisam de leads qualificados recorrentes.</p>
</div>

<div className="p-8 rounded-2xl bg-gradient-to-b from-[#0B1121] to-[#020617] border border-white/5 hover:border-blue-500/30 transition-all">
<div className="w-12 h-12 bg-blue-900/20 rounded-lg flex items-center justify-center mb-6 text-blue-500">
<i className="w-6 h-6" data-lucide="shopping-bag"></i>
</div>
<h3 className="text-lg font-medium text-white mb-3">E-commerce</h3>
<p className="text-sm text-slate-400 leading-relaxed">Lojas virtuais que buscam escalar vendas com ROAS saudável e estratégias de recuperação de carrinho.</p>
</div>

<div className="p-8 rounded-2xl bg-gradient-to-b from-[#0B1121] to-[#020617] border border-white/5 hover:border-blue-500/30 transition-all">
<div className="w-12 h-12 bg-blue-900/20 rounded-lg flex items-center justify-center mb-6 text-blue-500">
<i className="w-6 h-6" data-lucide="rocket"></i>
</div>
<h3 className="text-lg font-medium text-white mb-3">SaaS &amp; Startups</h3>
<p className="text-sm text-slate-400 leading-relaxed">Empresas de tecnologia que precisam reduzir o CAC e aumentar o LTV através de aquisição eficiente.</p>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-3xl mx-auto px-6 border-t border-white/5">
<h2 className="text-2xl font-medium text-white text-center mb-12">Perguntas Frequentes</h2>
<div className="space-y-4">
<details className="group bg-white/[0.02] border border-white/5 rounded-lg overflow-hidden transition-all duration-300 open:bg-white/[0.05]">
<summary className="flex justify-between items-center p-5 cursor-pointer list-none text-slate-200 font-medium hover:text-white">
<span>Quanto preciso investir em anúncios?</span>
<i className="w-4 h-4 text-slate-500 transition-transform group-open:rotate-45" data-lucide="plus"></i>
</summary>
<div className="px-5 pb-5 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                        Recomendamos um investimento mínimo inicial de R$ 1.500,00 mensais em mídia paga para termos dados suficientes para otimização e resultados relevantes.
                    </div>
</details>
<details className="group bg-white/[0.02] border border-white/5 rounded-lg overflow-hidden transition-all duration-300 open:bg-white/[0.05]">
<summary className="flex justify-between items-center p-5 cursor-pointer list-none text-slate-200 font-medium hover:text-white">
<span>Vocês fazem os criativos (imagens e vídeos)?</span>
<i className="w-4 h-4 text-slate-500 transition-transform group-open:rotate-45" data-lucide="plus"></i>
</summary>
<div className="px-5 pb-5 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                        Sim. Temos um time de design focado em performance. Criamos os banners estáticos e roteirizamos vídeos. A captação de vídeo, quando necessária, é orientada por nós mas feita pelo cliente.
                    </div>
</details>
<details className="group bg-white/[0.02] border border-white/5 rounded-lg overflow-hidden transition-all duration-300 open:bg-white/[0.05]">
<summary className="flex justify-between items-center p-5 cursor-pointer list-none text-slate-200 font-medium hover:text-white">
<span>Existe fidelidade contratual?</span>
<i className="w-4 h-4 text-slate-500 transition-transform group-open:rotate-45" data-lucide="plus"></i>
</summary>
<div className="px-5 pb-5 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                        Trabalhamos com contratos de 6 ou 12 meses, pois estratégias de growth precisam de maturação. Porém, temos cláusulas de saída baseadas em performance.
                    </div>
</details>
</div>
</section>

<footer className="border-t border-white/10 bg-[#020617] py-12 text-center md:text-left">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div>
<a className="flex items-center justify-center md:justify-start gap-2 mb-2" href="#">
<div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
<span className="text-lg font-medium text-white tracking-tight">CO-B.</span>
</a>
<p className="text-slate-500 text-xs">Growth Intelligence &amp; Performance.</p>
</div>
<div className="flex gap-6">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="message-circle"></i></a>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-8 pt-8 border-t border-white/5">
<p className="text-slate-600 text-xs text-center">© 2024 CO-B Marketing. Todos os direitos reservados.</p>
</div>
</footer>
</main>



    </>
  );
}
