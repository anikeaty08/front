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
      

<nav>
<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
<span className="text-base font-semibold tracking-tight" style={{color: '#1A1A2E', letterSpacing: '-0.03em'}}>aura</span>
<div className="hidden-center gap-8">
<a className="text-xs font-medium" href="#beneficios" style={{color: '#4A4A5A', textDecoration: 'none'}}>Benefícios</a>
<a className="text-xs font-medium" href="#planos" style={{color: '#4A4A5A', textDecoration: 'none'}}>Planos</a>
<a className="text-xs font-medium" href="#como-funciona" style={{color: '#4A4A5A', textDecoration: 'none'}}>Como funciona</a>
<a className="btnsemibold px-4 py-2 rounded-lg" href="#cta-final">Começar grátis</a>
</div>
<a className="md:hidden btn-gold text-xs font-semibold px-4 py-2 rounded-lg" href="#cta-final">Começar grátis</a>
</div>
</nav>

<section className="pt-20 pb-24-6" style={{background: '#F5F3EF'}}>
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
<div className="fade-up">
<div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full text-xs font-medium" style={{background: '#EDEAE4', color: '#C8A96E', border: '1px8A96E33'}}>
<iconify-icon icon="solar:star-linear" style={{fontSize: '14px', color: '#C8A96E'}} width="14"></iconify-icon>
          Sistema de orçamento para estética
        </div>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-4" style={{color: '#1A1A line-height:1.15'}}>
          Chega de perder tempo com orçamento.
        </h1>
<p className="text-base font-medium mb-4" style={{color: '#C8A96E', lineHeight: '1.6'}}>
          Agora você monta em segundos, imprime na hora e aindaabe quem ainda não fechou.
        </p>
<p className="text-sm mb-8 leading-relaxed" style={{color: '#4A4A5A', maxWidth: '480px'}}>
          Uma ferramenta feita para esteticistas e clínicas que cansaram de montarçamento no Word, no Excel ou de cabeça — errando a conta, esquecendo o desconto ou perdendo tempo enquanto a paciente espera.
        </p>
<a className="btn-gold text-sm font-semibold px-6 py-3. inline-flex items-center gap-2" href="#cta-final">
<iconify-icon icon="solar:play-circle-linear" style={{fontSize: '18px'}} width="18"></iconify-icon>
          Experimente grátis por 30 dias — sem cartão
        </a>
<p className="mt-3 text-xs" style={{color: '#4A4A5A', opacity: '0.7'}}>Sem cadastro complicado. Sem compromisso.</p>

<div className="fade-up-2 relative">
<div className="rounded-2xl p-6 shadow-sm" style={{background: '#FFFFFF', border: '1px solid #EDEAE4'}}>
<div className="flex items-center gap-2 mb-5">
<div className="w-2.5 h-2.5 rounded-full" h-2.5="" rounded-full"="" style={{background: '#EDEAE4'}} w-2.5=""></div>
<div className="w-2.5 h-2.5 rounded-full" style={{background: '#C8A96E', opacity: '0.5'}}></div>
<span className="ml-2 text-xs font-medium" style={{color: '#4A4A5A'}}>Novo Orçamento</span>
</div>
<div className="mb-4">
<div className="text-xs font-medium mb-1.5" px-3="" py-2="" rounded-lg="" style={{background: '#F5F3EF', color: '#1A1A2E', border: '1px solid #EDEAE4'}} text-sm"="">Mariana Costa</div>
</div>
<div className="mb-4">
<div className="text-xs font-medium mb-2" style={{color: '#4A4A5A'}}>Tratamentos selecionados</div>
<div className="space-y-2flex items-center justify-between rounded-lg px-3 py-2.5" style={{background: '#F5F3EF', border: '1px solid #EDEAE4'}}>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:check-circle-linear" style={{fontSize: '16px', color: '#C8A96E'}} width="16"></iconify-icon>
<span className="text-xs font-medium" style={{color: '#1A1A2E'}}>Limpeza de Pele Prof</span>
</div>
<span className="text-xs font-semibold" style={{color: '#1A1A2E'}}>R$ 180</span>
</div>
<div className="flex items-center justify-between rounded-lg px-3 py-2.5" style={{background: '#F5F3EF', border: '1px solid #EDEAE4'}}>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:check-circle-linear" style={{fontSize: '16px', color: '#C8A96E'}} width="16"></iconify-icon>
<span className="text-xs font-medium" font-semibold"="" style={{color: '#1A1A2E'}} text-xs="">R$ 640</span>
</div>
<div className="flex items-center justify-between rounded-lg px-3 py-2.5" style={{background: '#F5F3EF', border: '1px solid #EDEAE4'}}>
<div className="flex items-center gap-2">
<iconify-icon font-medium"="" icon="solar:check-circle-linear" style={{color: '#1A1A2E'}} text-xs="">Hidratação Facial · 3 sessões
</iconify-icon></div>
<span className="text-xs font-semibold" style={{color: '#1A1A2E'}}>R$ 360</span>
</div>
</div>
</div>
<div className="rounded-xl p-4 mb-4" style={{background: '#1A1A2E'}}>
<div className="flex justify-between items-center mb-1text-xs" style={{color: 'rgba(255,255,255,0.6)'}}>Subtotal
<span className="text-xs" style={{color: 'rgba(255,255,255,0.6)'}}>R$ 1.180,00</span>
</div>
<div className="flex justify-between items-center mb-2">
<span className="text-xs" style={{color: '#C8A96E'}}>Desconto (10%)</span>
<span className="text-xs" style={{color: '#C8A96E'}}>− R$ 118</span>
</div>
<div className="flex justify-between items-center pt-2" style={{borderTop: '1px solid rgba(255,255,255,0.1)'}}>
<span className="text-sm font-semibold" style={{color: '#FFFFFF'}}>Total</span>
<span className="text-sm font-semibold" style={{color: '#C8A96E'}}>R$ 1.062,00</span>
</div>
</div>
<button className="btn-gold w-full text-xs font-semibold py items-center justify-center gap-2">
<iconify-icon icon="solar:file-download-linear" style={{fontSize: '16px'}} width="16"></iconify-icon>
            Gerar PDF com logo da clínica
          </button>
</div>
<div className="absolute -bottom-3 -right-3 rounded-xl px-3 py-2 shadow-md items-center gap-2" style={{background: '#FFFFFF', border: '1px solid #EDEAE4'}}>
<iconify-icon icon="solar:clock-circle-linear" style={{fontSize: '16px', color: '#C8A96E'}} width="16"></iconify-icon>
<span className="text-xs font-medium" style={{color: '#1A1A2E'}}>Gerado em 18 segundos</span>
</div>
</div>
</div>
</div></section>

<div className="card-hover rounded-2xl p-5 flex items-start gap-4" style={{background: '#FFFFFF', border: '1px solid #D9D5CE'}}>
<div className="h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#F5F3EF', border: '1px solid #EDEAE4'}}>
<iconify-icon icon="solar:documents-linear" style={{fontSize: '18px', color: '#C8A96E'}} width="18"></iconify-icon>
</div>
<p className="text-sm leading-relaxed" style={{color: '#4A4A5A'}}>Parar o atendimento pra ir bus tabela de preços</p>
</div>
<div className="card-hover rounded-2xl p-5 flex items-start gap-4" style={{background: '#FFFFFF', border: '1px solid #D9D5CE'}}>
<div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#F5F3EF', border: '1px solid #EDEAE4'}}>
<iconify-icon icon="solar:calculator-linear" style={{fontSize: '18px', color: '#C8A96E'}} width="18"></iconify-icon>
</div>
<p card-hover="" className="text-sm leading-relaxed" flex="" gap-4"="" items-start="" p-5="" rounded-2xl="" style={{background: '#FFFFFF', border: '1px solid #D9D5CE'}}>
<div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#F5F3EF', border: '1px solid #EDEAE4'}}>
<iconify-icon icon="solar:user-cross-linear" style={{fontSize: '18px', color: '#C8A96E'}} width="18"></iconify-icon>
</div>sm leading-relaxed" style={{color: '#4A4A5A'}}&gt;Secretária colocar quantidade de sessões errada no orçamento</p>
</div>
<div className="card-hover rounded-2xl p-5 flex items-start gap-4" style={{background: '#FFFFFF', border: '1px solid #D9D5CE'}}>
<div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#F5F3EF', border: '1px solid #EDEAE4'}}>
<iconify-icon icon="solar:-linear" style={{fontSize: '18px', color: '#C8A96E'}} width="18"></iconify-icon>
</div>
<p className="text-sm leading-relaxed" style={{color: '#4A4A5A'}}>Não saber quais pacientes ainda não fecharam o plano</p>
</div>
<div className="card-hover rounded-2xl p-5 flex items-start gap-4" style={{background: '#FFFFFF', border: '1px solid #D9D5CE'}}>
<div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '# border:1px solid #EDEAE4'}}>
<iconify-icon icon="solar:box-linear" style={{fontSize: '18px', color: '#C8A96E'}} width="18"></iconify-icon>
</div>
<p className="text-sm leading-relaxed" style={{color: '#4A4A5A'}}>Não ter como montar um combo especial para campanha</p>
</div>
<div className="card-hover rounded-2xl p-5 flex items-start gap-4" style={{background: '#FFFFFF', border: '1px solid #D9D5CE'}}>-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#F5F3EF', border: '1px solid #EDEAE4'}}&gt;
            <iconify-icon icon="solar:chart-square-linear" style={{fontSize: '18px', color: '#C8A96E'}} width="18"></iconify-icon>
</div>
<p className="text-sm leading-relaxed" style={{color: '#4A4A5A'}}>Usar Excel ou Word e perder tempo toda vez</p>




<section className="py-20 px-6" id="beneficios" style={{background: '#FFFFFF'}}>
<div className="max-w-6xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight mb-3" style={{color: '#1A1A2E'}}>Com o sistema, isso muda do primeiro dia</h2>
<p="color:#4a4a5a; auto;"="" margin:0="" max-width:400px;="">Cada funcionalidade foi pensada para o dia a dia da clínica, não para complicar.
</p="color:#4a4a5a;></div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
<div className="card-hover rounded-2xl p-6" style={{background: '#FFFFFF', border: '1px solid #EDEAE4'}}>
<div className="w-10xl flex items-center justify-center mb-4" style={{background: '#F5F3EF'}}>
<iconify-icon icon="solar:bolt-linear" style={{fontSize: '20px', color: '#C8A96E'}} width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold mb-2" style={{color: '#1A1A2E'}}>Orçamento em segundos</h3>
<p className="text-xs leading-relaxed" style={{color: '#4A4A5A'}}>Cadast seus tratamentos uma vez. Monte qualquer combinação na hora, com desconto automático.</p>
</div>
<div className="card-hover rounded-2xl p-6" style={{background: '#FFFFFF', border: '1px solid #EDEAE4'}}>
<div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{background: '#F5F3EF'}}>
<iconify-icon icon="solar:file-text-linear" style={{fontSize: '20px', color: '#C8A96E'}} width="">
</iconify-icon></div>
<h3 className="text-sm font-semibold mb-2" style={{color: '#1A1A2E'}}>PDF profissional com sua logo</h3>
<p className="text-xs leading-relaxed" style={{color: '#4A4A5A'}}>O paciente recebe um documento com a identidade da sua clínica. Passa confiança desde o primeiro contato.</p>
</div>
<div classxl="" p-6"="" style={{background: '#FFFFFF', border: '1px solid #EDEAE4'}}>
<div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{background: '#F5F3EF'}}>
<iconify-icon icon="solar:gift-linear" style={{fontSize: '20px', color: '#C8A96E'}} width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold mb-2" style={{color: '#1A1A2E'}}>Combos e pacotes sem calculadora</h3>
<p className="text-xscolor:#4A4A5A;">Crie pacotes especiais para campanhas com valor real, desconto e parcelas — tudo calculado automaticamente.</p>
</div>
<div className="card-hover rounded-2xl p-6" style={{background: '#FFFFFF', border: '1px solid #EDEAE4'}}>
<div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{background: '#F5F3EF'}}>
<iconhistory-linear" style={{fontSize: '20px', color: '#C8A96E'}} width="20">
</iconhistory-linear"></div>
<h3 className="text-sm font-semibold mb-2" style={{color: '#1A1A2E'}}>Histórico de orçamentos</h3>
<p className="text-xs leading-relaxed" style={{color: '#4A4A5A'}}>Veja quais foram aprovados, quais estão pendentes e entre em contato com quem ainda não fechou.</p>
</div>
<div className="card-hover rounded-2xl p-6" style={{background: '#FFFFFFEDEAE4'}}>
<div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{background: '#F5F3EF'}}>
<iconify-icon icon="solar:user-heart-linear" style={{fontSize: '20px', color: '#C8A96E'}} width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold mb-2" style={{color: '#1A1A2E'}}>Simples para qualquer perfil</h3>
<p className="text-xs leading-relaxed" style={{color: '#4A4A5A'}}>Secretá tinham dificuldade com tecnologia aprenderam em menos de 15 minutos. Testado na prática.</p>
</div>
<div className="card-hover rounded-2xl p-6" style={{background: '#FFFFFF', border: '1px solid #EDEAE4'}}>
<div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{background: '#F5F3EF'}}>
<iconify-icon icon="solar:devicessize:20px; color:#C8A96E;" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold mb-2" style={{color: '#1A1A2E'}}>Funciona no celular e no computador</h3>
<p className="text-xs leading-relaxed" style={{color: '#4A4A5A'}}>Acesse de qualquer lugar, a qualquer hora, sem instalar nada.</p>
</div>
      &gt;
  </div></div></section>

<section className="py-20 px-6" style={{background: '#1A1A2E'}}>
<div className="max-w-3xl mx-auto text-center">
<span className="text-6xl font-semibold leading-none" style={{color: '#C8A96E', lineHeight: '1', display: 'block', marginBottom: '12px', fontFamily: 'Georgia, serif'}}>"</span>
      quote className="text-lg md:text-xl font-medium leading-relaxed mb-8" style={{color: '#FFFFFF', fontWeight: '400'}}&gt;
        Uma coisa que eu queria não era só um aplicativo que fizesse o orçamento, mas que mostrasse umrico — se o cliente fechou, se não fechou — pra poder entrar em contato de novo. Esse sistema resolveu isso.
      
<div className="flex items-center justify-center gap-3">
<div className="w-9full flex items-center justify-center text-xs font-semibold" style={{background: '#C8A96E22', border: '1px solid #C8A96E44', color: '#C8A96E'}}>JF</div>
<div className="text-left">
<p className="text-xs font-medium" style={{color: '#C8A96E'}}>Juliana Ferreira</p>
<p className="text-xs" style={{color: 'rgba(255,255,255,0.45)'}}>steticista · São Paulo, SP</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6" id="planos" style={{background: '#F5F3EF'}}>
<div className="max-w-6xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight mb-3" style={{color: '#1A1A2E'}}>Comece grátis.ua quando quiser.</h2>
<p className="text-sm" style={{color: '#4A4A5A'}}>Sem surpresas. Sem letras miúdas.</p>
</div>
<div className="grid md:grid-cols-3 gap-6 items-start">

<div className="rounded-2xl p-6" style={{background: '#FFFFFF', border: '1px solid #EDEAE4'}}>
<div className="mb-6">
<p font-semibold="" mb-1"="" style={{color: '#4A4A5A', letterSpacing: '0.06em', textTransform: 'uppercase'}}>Gratuito</p>
<div className="flex items-end gap-1 mb-1">
<span className="text-3xl font-semibold tracking-tight" style={{color: '#1A1A2E'}}>R$ 0</span>
</div>
<p className="text-xs" style={{color: '#4A4A5A'}}>Para</p>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-2.5">
<iconify-icon icon="solar:check-circle-linear" style={{fontSize: '16px', color: '#C8A96E', flexShrink: '0', marginTop: '1px'}} width="16"></iconify-icon>
<span className="text-xs" style={{color: '#4A4A5A'}}>Até 10amentos cadastrados</span>
</li>
<li className="flex items-start gap-2.5">
<iconify-icon icon="solar:check-circle-linear" style={{fontSize: '16px', color: '#C8A96E', flexShrink: '0', marginTop: '1px'}} width="16"></iconify-icon>
<span className="text-xs" style={{color: '#4A4A5A'}}>Até 5 pacotes</span>
</li>
<li className="flex items-start gap-2.5">
<iconify-icon icon="solar:check-circle-linear" style={{fontSize: '16px', color: '#C8A96E', flexShrink: 'px'}} width="16"></iconify-icon>
<span className="text-xs" style={{color: '#4A4A5A'}}>Geração de PDF</span>
</li>
<li className="flex items-start gap-2.5">
<iconify-icon icon="solar:check-circle-linear" style={{fontSize: '16px', color: '#C8A96E', flexShrink: '0', marginTop: '1px'}} width="16"></iconify-icon>
<span className="text-xs" style={{color: '#4A4A5A'}}>Logo da clínica</span>
</li>
<li className="flex items-start gap-2.5">
<iconify-icon icon="solar:check-circle-linear" style={{flexShrink: '0', marginTop: '1px'}} width="16"></iconify-icon>
<span className="text-xs" style={{color: '#4A4A5A'}}>Histórico local (no navegador)</span>
</li>
</ul>
<a className="btn-outline-white w-full text-xs font-semibold py-3 rounded-xl flex items-center justify-center" href="#cta-final" style={{borderColor: '#EDEAE4', color: '#1:transparent', border: '1.5px solid #EDEAE4'}}>
            Começar grátis
          </a>
</div>

<div className="rounded-2xl p-6 relative" style={{background: '#FFFFFF', border: '2px solid #C8A96E'}}>
<div className="absolute -top-3 left-1/2 -translate-x-1/2 &lt;span class=" font-semibold="" px-3="" py-1="" rounded-full"="" style={{background: '#C8A96E', color: '#FFFFFF', whiteSpace: 'nowrap'}} text-xs="">✦ Mais popular
</div>
<div className="mb-6">
<p className="text-xs font-semibold mb-1" style={{color: '#C8A96E', letterSpacing: '0.06em', textTransform: 'uppercase'}}>Trial 30 dias</p>
<div className="flex items-end gap-1 mb class=" font-semibold="" style={{color: '#1A1A2E'}} text-3xl="" tracking-tight"="">Grátis
</div>
<p className="text-xs" style={{color: '#4A4A5A'}}>por 30 dias completos</p>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-2.5">
<iconify-icon icon="solar:check-circle-linear" style={{fontSize: '16px', color: '#C8A96E', flexShrink: '0', marginTop: '1px'}} width="16"></iconify-icon>
<span className="text-xs" style={{}}>Tudo do Premium liberado</span>
</li>
<li className="flex items-start gap-2.5">
<iconify-icon icon="solar:check-circle-linear" style={{fontSize: '16px', color: '#C8A96E', flexShrink: '0', marginTop: '1px'}} width="16"></iconify-icon>
<span className="text-xs" style={{color: '#4A4A5A'}}>Ilimitado: tratamentos e pacotes</span>
</li>
<li className="flex items-start gap-2.5">
<iconify-icon icon="" style={{fontSize: '16px', color: '#C8A96E', flexShrink: '0', marginTop: '1px'}} width="16"></iconify-icon>
<span className="text-xs" style={{color: '#4A4A5A'}}>Backup automático</span>
</li>
<li className="flex items-start gap-2.5">
<iconify-icon icon="solar:check-circle-linear" style={{fontSize: '16px', color: '#C8A96E', flexShrink: '0', marginTop: '1px'}} width="16"></iconify-icon>
<span className="text-xs" style={{color: '#4A4A5A'}}>Acesso em qualquer disposit</span></li>
<li className="flex items-start gap-2.5">
<iconify-icon icon="solar:check-circle-linear" style={{fontSize: '16px', color: '#C8A96E', flexShrink: '0', marginTop: '1px'}} width="16"></iconify-icon>
<span className="text-xs" style={{color: '#4A4A5A'}}>Múltiplas usuárias</span>
</li>
<li className="flex items-start gap-2.5">
<iconify-icon icon="solar:check-circle-linear" style={{fontSize: '16px', color: '#C8A96E', flexShrink: '0', marginTop: '1px'}} width="">
<span className="text-xs" style={{color: '#4A4A5A'}}>Módulo de custo de procedimento</span>
</iconify-icon></li>
</ul>
<a className="btn-gold w-full text-xs font-semibold py-3 rounded-xl flex items-center justify-center gap-2" href="#cta-final">
<iconify-icon icon="solar:play-circle-linear" style={{fontSize: '16px'}} width="16"></iconify-icon>
            Ativar m trial grátis
          </a>
</div>

<div className="rounded-2xl p-6" style={{background: '#1A1A2E', border: '1px solid #1A1A2E'}}>
<div className="mb-6">
<p className="text-xs font-semibold mb-1" style={{color: '#C8A96E', letterSpacing: '0.06em', textTransform: 'uppercase'}}>Premium</p>
<div className="flex items-end gap-1 mb-1">
<span className="text-lg font-medium" font-semibold="" style={{color: '#FFFFFF'}} text-3xl="" tracking-tight"="">197</span>
</div>
<p className="text-xs" style={{color: 'rgba(255,255,255,0.45)'}}>licença única · sem mensalidade</p>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-2.5">
<iconify-icon icon="solar:check-circle-linear16px; color:#C8A96E; flex-shrink:0; margin-top:1px;" width="16"></iconify-icon>
<span className="text-xs" style={{color: 'rgba(255,255,255,0.7)'}}>Tudo do Trial, para sempre</span>
</li>
<li className="flex items-start gap-2.5">
<iconify-icon icon="solar:check-circle-linear" style={{fontSize: '16px', color: '#C8A96E', flexShrink: '0', marginTop: '1px'}} width="16"></iconify-icon>
<span className="text-xs" style={{color: 'rgba(.7)'}}>Histórico permanente</span>
</li>
<li className="flex items-start gap-2.5">
<iconify-icon icon="solar:check-circle-linear" style={{fontSize: '16px', color: '#C8A96E', flexShrink: '0', marginTop: '1px'}} width="16"></iconify-icon>
<span className="text-xs" style={{color: 'rgba(255,255,255,0.7)'}}>Suporte via WhatsApp</span>
</li>
<li className="flex items-start gap-2.5">
<iconify-icon icon="solar:check-circle-linear" style={{fontSize: '16px', color: '#C8A96E', flexShr: '1px'}} width="16"></iconify-icon>
<span className="text-xs" style={{color: 'rgba(255,255,255,0.7)'}}>Atualizações inclusas</span>
</li>
</ul>
<a className="btn-outline-white w-full text-xs font-semibold py-3 rounded-xl flex items-center justify-center" href="#cta-final">
            Quero o Premium
          </a>
</div>
</div>
</div>
</section>

<section className="py-20 px-6" id="como:#FFFFFF;">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-14">
<h2 className="text-3xl font-semibold tracking-tight mb-3" style={{color: '#1A1A2E'}}>Em 3 passos simples</h2>
<p className="text-sm" style={{color: '#4A4A5A'}}>Do cadastro ao PDF entregue. Sem complicação.</p>
</div>
<divcols-3 gap-8="" relative"="">

<div className="hidden md:block absolute top-5 left-1/3 right-1/3 h-px" style={{background: 'linear-gradient(90deg, #EDEAE4, #C8A96E44, #EDEAE4)', zIndex: '0'}}></div>
<div className="text-center relative z class=" flex="" font-semibold"="" h-11="" items-center="" justify-center="" mb-5="" mx-auto="" rounded-full="" style={{background: '#C8A96E', color: '#FFFFFF', boxShadow: '0 0 0 4px #FFFFFF, 0 0 0 5px #EDEAE4'}} text-sm="" w-11="">1</div>
<h3 className="text-sm font-semibold mb-2" style={{color: '#1A1A2E'}}>Cadast seus tratamentos</h3>
<p className="text-xs leading-relaxed" style={{color: '#4A4A5A'}}>Uma vez só. Preço, categoria, desconto por número de sessões. Tudo organizado do seu jeito.</p>
</divcols-3></div>
<div className="text-center relative z-10">
<div className="w-11 h-11 rounded-full flex items-center-5 text-sm font-semibold" style={{background: '#C8A96E', color: '#FFFFFF', boxShadow: '0 0 0 4px #FFFFFF, 0 0 0 5px #EDEAE4'}}>2</div>
<h3 className="text-sm font-semibold mb-2" style={{color: '#1A1A2E'}}>Monte o orçamento</h3>
<p className="text-xs leading-relaxed" style={{color: '#4A4A5A'}}>Selecione os tratamentos, defina as sessões, aplique descional e escolha o parcelamento.</p>
</div>
<div className="text-center relative z-10">
<div className="w-11 h-11 rounded-full flex items-center justify-center mx-auto mb-5 text-sm font-semibold" style={{background: '#C8A96E', color: '#FFFFFF', boxShadow: '0 0 0 4px #FFFFFF, 0 0 0 5px #EDEAE4'}}>3</div>
<h3 className="text-sm font-semibold mb-2" style={{color: '#1A1A2E'}}>Entregue o PDFissional</h3>
<p className="text-xs leading-relaxed" style={{color: '#4A4A5A'}}>Imprima ou envie pelo WhatsApp. Com a logo da sua clínica, nome do paciente e data.</p>
</div>


<div #edeae4;"="" :1px="" className="mt-14 rounded-2xl overflow-hidden" solid="">
<div className="px-5 py-3 flex items-center gap-2" style={{background: '#F5F3EF', borderBottom: '1px solid #EDEAE4'}}>
<div className="w-2 h-2 rounded-full" style={{background: '#EDEAE4'}}></div>
<div className="w-2 h-2 rounded-full" style={{background: '#EDEAE4'}}></div>
<div 8a96e;="" className="w-2 h-2 rounded-full" opacity:0.5;"=""></div>
<span className="ml-2 text-xs" style={{color: '#4A4A5A'}}>Visualização do orçamento gerado</span>
</div>
<div className="p-6 md:p-8" style={{background: '#FFFFFF'}}>
<div className="max-w-md mx-auto">
<div className="flex items-start justify-between mb-6">
<div>
<p className="text-xs font-semibold tracking-0.5" style={{color: '#1A1A2E'}}>Clínica Bella Forma</p>
<p className="text-xs" style={{color: '#4A4A5A'}}>contato@bellaforma.com.br</p>
</div>
<div className="text-right">
<p className="text-xs font-semibold" style={{color: '#C8A96E'}}>ORÇAMENTO</p>
<p className="text-xs" style={{color: '#4A4A5A'}}>#0 · 14/07/2025</p>
</div>
</div>
<div className="mb-4 pb-4" style={{borderBottom: '1px solid #EDEAE4'}}>
<p className="text-xs font-medium mb-0.5" style={{color: '#4A4A5A'}}>Paciente</p>
<p className="text-sm font-semibold" style={{color: '#1A1A2E'}}>Mariana Costa</p>

<div className="flex justify-between">
<span className="text-xs" style={{color: '#4A4A5A'}}>Limpeza de Pele Profunda × 1</span>
<span className="text-xs font-medium" style={{color: '#1A1A2E'}}>R$ 180,00</span>
</div>
<div className="flex justify-between">-xs" style={{color: '#4A4A5A'}}&gt;Peeling Químico × 4 sessões
<span className="text-xs font-medium" style={{color: '#1A1A2E'}}>R$ 640,00</span>
</div>
<div className="flex justify-between">
<span className="text-xs" style={{color: '#4A4A5A'}}>Hidratação Facial × 3 sessões</span>
<span className="text-xs font-medium" style={{color: '#1A1A2E'}}>R$ 360,00</span>
</div>
<div className="rounded-xl p-4" style={{background: '#F5F3EF', border: '1px solid #EDEAE4'}}>
<div className="flex justify-between mb-1">
<span className="text-xs" style={{color: '#4A4A5A'}}>Subtotal</span>
<span className="text-xs" style={{color: '#4A4A5A'}}>R$ 1.180,00</span>
</div>
<div className="flex justify-between mb-2">
<span className="text-xs" style={{color: '#C8A96E'}} text-xs"="">− R$ 118,00</span>
</div>
<div className="flex justify-between pt-2" style={{borderTop: '1px solid #EDEAE4'}}>
<span className="text-sm font-semibold" style={{color: '#1A1A2E'}}>Total</span>
<span className="text-sm font-semibold" style={{color: '#1A1A2E'}}>R$ 1.062,00</span>
</div>
<p-1.5" style={{color: '#4A4A5A'}}>ou 3× de R$ 354,00 sem juros
</p-1.5"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6" style={{background: '#EDEAE4'}}>
<div className="max-w-4xl mx-auto">
<div className="text-center mb-10class=" font-semibold="" mb-4"="" style={{color: '#1A1A2E'}} text-3xl="" tracking-tight="">Sem risco. Sem compromisso.
<p className="text-sm leading-relaxed mx-auto" style={{color: '#4A4A5A', maxWidth: '520px'}}>
          Você tem 30 dias para usar tudo, do jeito que precisar, sem pagar nada e sem informarão. Se ao final do trial você quiser continuar com o Premium, é um pagamento único de R$ 197 — sem mensalidade, sem surpresa. Se preferir continuar na versão gratuita, tudo bem também
      </p></div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="rounded-2xl p-5 text-center card-hover" style={{background: '#FFFFFF', border: '1px solid #D9D5CE'}}>
<div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3" style={{background: '#F5F3EF'}}>
<iconify-icon icon="solar:-linear" style={{fontSize: '20px', color: '#C8A96E'}} width="20"></iconify-icon>
</div>
<p className="text-xs font-medium" style={{color: '#1A1A2E'}}>Sem cartão de crédito</p>
</div>
<div className="rounded-2xl p-5 text-center card-hover" style={{background: '#FFFFFF', border: '1px solid #D9D5CE'}}>
<div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto:#F5F3EF;">
<iconify-icon icon="solar:document-linear" style={{fontSize: '20px', color: '#C8A96E'}} width="20"></iconify-icon>
</div>
<p className="text-xs font-medium" style={{color: '#1A1A2E'}}>Sem contrato</p>
</div>
<div className="rounded-2xl p-5 text-center card-hover" style={{background: '#FFFFFF', border: '1px solid #D9D5CE'}}>
<div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3" style={{background: '#F5F3EF'}}>
<iconify-icon icon="-linear" style={{fontSize: '20px', color: '#C8A96E'}} width="20"></iconify-icon>
</div>
<p className="text-xs font-medium" style={{color: '#1A1A2E'}}>Seus dados protegidos</p>
</div>
<div className="rounded-2xl p-5 text-center card-hover" style={{background: '#FFFFFF', border: '1px solid #D9D5CE'}}>
<div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3" style={{background: '#F5F3EF'}}>
<iconify-icon 20"="" icon="solar:exit-linear" style={{fontSize: '20px', color: '#='}}></iconify-icon>
</div>
<p className="text-xs font-medium" style={{color: '#1A1A2E'}}>Cancele quando quiser</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 text-center" id="cta-final" style={{background: '#1A1A2E'}}>
<div className="max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-ibold tracking-tight mb-4" style={{color: '#FFFFFF'}}>Sua clínica merece uma ferramenta à altura.</h2>
<p className="text-base font-medium mb-8" style={{color: '#C8A96E'}}>Comece hoje. É grátis.</p>
<a className="btn-gold inline-flex items-center gap-3 text-sm-8 py-4 rounded-xl mb-4" href="#">
<iconify-icon icon="solar:play-circle-linear" style={{fontSize: '20px'}} width="20"></iconify-icon>
        Experimentar grátis por 30 dias
      </a>
<p className="text-xs" style={{color: 'rgba(255,255,255,0.45)'}}>Sem cartão. Sem cadastro complicado. Sem compromisso.</p>
</div> RODAPÉ --&gt;
  <footer className="px-6 py-10" style={{background: '#0F0F1A'}}>
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
<span className="text-sm font-semibold tracking-tight" style={{color: 'rgba(255,255,255,0.6)', letterSpacing: '-em'}}>aura</span>
<div className="flex items-center gap-6">
<a className="text-xs" href="#" onmouseout="this.style.color='rgba(255,255,255,0.4)'" onmouseover="this.style.color='rgba(255,255,255,0.7)'" style={{color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 0.15s'}}>Política de priv<span style={{color: 'rgba(255,255,255,0.15)', fontSize: '10px'}}>|</span>
<a className="text-xs" href="#" onmouseout="this.style.color='rgba(255,255,255,0.4)'" onmouseover="this.style.color='rgba(255,255,255,0.7)'" style={{color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 0.15s'}}>Contato</a>
</a></div>
</div></footer></section>
    </>
  );
}
