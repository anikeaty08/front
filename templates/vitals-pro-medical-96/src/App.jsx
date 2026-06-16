import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // Initialize Lucide Icons
      lucide.createIcons();

      // Pricing Toggle Logic
      function togglePricing() {
          const isAnnual = document.getElementById('pricing-toggle').checked;

          // Base monthly prices
          const p1Month = 547;
          const p2Month = 997;

          // Apply 18% discount for annual calculation (and display monthly equivalent)
          const p1AnnualMo = Math.round(p1Month * 0.82);
          const p2AnnualMo = Math.round(p2Month * 0.82);

          document.getElementById('price-plan1').innerText = isAnnual ? p1AnnualMo : p1Month;
          document.getElementById('price-plan2').innerText = isAnnual ? p2AnnualMo : p2Month;

          // Update labels
          const labelMensal = document.getElementById('label-mensal');
          const labelAnual = document.getElementById('label-anual');

          if(isAnnual) {
              labelMensal.classList.remove('text-slate-900');
              labelMensal.classList.add('text-slate-600');
              labelAnual.classList.remove('text-slate-600');
              labelAnual.classList.add('text-slate-900');
          } else {
              labelMensal.classList.add('text-slate-900');
              labelMensal.classList.remove('text-slate-600');
              labelAnual.classList.add('text-slate-600');
              labelAnual.classList.remove('text-slate-900');
          }

          // Update period text
          const periodLabels = document.querySelectorAll('.price-period');
          periodLabels.forEach(label => {
              label.innerText = isAnnual ? '/mês (cobrado anualmente)' : '/mês';
          });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex-shrink-0 flex items-center gap-2.5 cursor-pointer">
<div className="w-8 h-8 rounded-md overflow-hidden bg-white shadow-sm ring-1 ring-slate-100 flex items-center justify-center">
<img alt="Vitals Pro Mark" className="w-12 h-12 clip-logo scale-[1.5] -translate-y-1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<span className="text-xl font-semibold tracking-tight text-slate-900">
              VITALS
              <span className="text-teal-600">PRO</span>
</span>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-base font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#recursos">
              Recursos
            </a>
<a className="text-base font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#planos">
              Planos
            </a>
<a className="text-base font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#contato">
              Contato
            </a>
</div>

<div className="hidden md:flex items-center space-x-4">
<a className="text-base font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#contato">
              Login
            </a>
<a className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-slate-900 hover:bg-slate-800 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900" href="#contato">
              Agendar Demonstração
            </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-slate-600 hover:text-slate-900 focus:outline-none">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-50 via-slate-50 to-slate-50"></div>
<div className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-teal-100/20 ring-1 ring-slate-100 sm:-mr-80 lg:-mr-96"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
<div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-teal-700 bg-teal-50 ring-1 ring-inset ring-teal-600/20 mb-8">
<span className="flex w-2 h-2 rounded-full bg-teal-500 mr-2"></span>
          Software Médico Premium
        </div>
<h1 className="mx-auto max-w-4xl text-5xl font-semibold tracking-tight text-slate-900 sm:text-7xl mb-6">
          Gestão de excelência para
          <br className="hidden sm:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600">
            clínicas que exigem o melhor.
          </span>
</h1>
<p className="mx-auto max-w-2xl text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed">
          Elimine a burocracia, assuma o controle do seu faturamento e ofereça
          uma experiência de saúde tecnológica para seus pacientes. Desenhado
          para médicos especialistas e clínicas em expansão.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border border-transparent rounded-full shadow-sm text-lg font-medium text-white bg-teal-600 hover:bg-teal-700 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-600" href="#contato">
            Começar agora
            <i className="ml-2 w-5 h-5 stroke-[1.5]" data-lucide="arrow-right"></i>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border border-slate-200 rounded-full text-lg font-medium text-slate-700 bg-white hover:bg-slate-50 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-200" href="#recursos">
            Conhecer a plataforma
          </a>
</div>
<div className="mt-14 flex items-center justify-center gap-x-8 gap-y-4 flex-wrap text-slate-500">
<div className="flex items-center gap-2 text-base">
<i className="w-5 h-5 text-teal-500 stroke-[1.5]" data-lucide="check-circle-2"></i>
            Faturamento preciso
          </div>
<div className="flex items-center gap-2 text-base">
<i className="w-5 h-5 text-teal-500 stroke-[1.5]" data-lucide="check-circle-2"></i>
            Prontuário inteligente
          </div>
<div className="flex items-center gap-2 text-base">
<i className="w-5 h-5 text-teal-500 stroke-[1.5]" data-lucide="check-circle-2"></i>
            Adequado à LGPD
          </div>
</div>
<div className="mt-20 lg:mt-24 relative max-w-5xl mx-auto">
<div className="absolute -inset-0.5 bg-gradient-to-br from-teal-400 to-slate-800 rounded-[2rem] blur-xl opacity-30"></div>
<img alt="Plataforma no MacBook" className="relative rounded-[2rem] shadow-2xl ring-1 ring-slate-900/5 w-full object-cover aspect-[16/9]" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;q=80&amp;w=2426"/>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="recursos">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="mb-16 max-w-3xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
            Tecnologia projetada para aumentar sua produtividade.
          </h2>
<p className="text-lg text-slate-600">
            Um ecossistema completo que automatiza rotinas maçantes, permitindo
            que você foque no que realmente importa: a saúde e a experiência do
            seu paciente.
          </p>
</div>
<div className="space-y-24 mt-12">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
<div className="order-2 lg:order-1 relative">
<div className="absolute -inset-4 bg-teal-50/50 rounded-3xl -z-10"></div>
<img alt="Médico usando plataforma" className="rounded-2xl shadow-xl ring-1 ring-slate-100 object-cover aspect-[4/3] w-full" src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&amp;fit=crop&amp;q=80&amp;w=2070"/>
</div>
<div className="order-1 lg:order-2 lg:pl-8">
<div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center mb-6 ring-1 ring-teal-100">
<i className="w-6 h-6 text-teal-600 stroke-[1.5]" data-lucide="calendar-clock"></i>
</div>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 mb-4">
                Agenda Inteligente e Prontuário
              </h3>
<p className="text-lg text-slate-600 leading-relaxed mb-6">
                Reduza as faltas a quase zero com confirmações automatizadas via
                WhatsApp. Acesse o histórico completo em segundos e prescreva de
                forma digital com segurança total.
              </p>
<ul className="space-y-4 text-base text-slate-600">
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-teal-500 shrink-0" data-lucide="check-circle-2"></i>
                  Modelos pré-definidos de anamnese
                </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-teal-500 shrink-0" data-lucide="check-circle-2"></i>
                  Assinatura digital nativa
                </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-teal-500 shrink-0" data-lucide="check-circle-2"></i>
                  Integração com telemedicina
                </li>
</ul>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
<div className="lg:pr-8">
<div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center mb-6 ring-1 ring-slate-200">
<i className="w-6 h-6 text-slate-700 stroke-[1.5]" data-lucide="smartphone"></i>
</div>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 mb-4">
                A gestão na palma da sua mão
              </h3>
<p className="text-lg text-slate-600 leading-relaxed mb-6">
                Gerencie sua clínica de qualquer lugar com uma experiência
                fluida. Acompanhe indicadores, responda a pacientes e autorize
                pagamentos pelo seu celular.
              </p>
<ul className="space-y-4 text-base text-slate-600">
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-slate-400 shrink-0" data-lucide="check-circle-2"></i>
                  Notificações push em tempo real
                </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-slate-400 shrink-0" data-lucide="check-circle-2"></i>
                  Portal do paciente integrado
                </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-slate-400 shrink-0" data-lucide="check-circle-2"></i>
                  Compatível com iOS e Android
                </li>
</ul>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-slate-50/80 rounded-3xl -z-10"></div>
<img alt="Aplicativo mobile" className="rounded-2xl shadow-xl ring-1 ring-slate-100 object-cover aspect-[4/3] w-full" src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&amp;fit=crop&amp;q=80&amp;w=2070"/>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
<div className="order-2 lg:order-1 relative">
<div className="absolute -inset-4 bg-teal-50/50 rounded-3xl -z-10"></div>
<img alt="Dashboard financeiro no notebook" className="rounded-2xl shadow-xl ring-1 ring-slate-100 object-cover aspect-[4/3] w-full" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;q=80&amp;w=2070"/>
</div>
<div className="order-1 lg:order-2 lg:pl-8">
<div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center mb-6 ring-1 ring-teal-100">
<i className="w-6 h-6 text-teal-600 stroke-[1.5]" data-lucide="bar-chart-3"></i>
</div>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 mb-4">
                Dashboard Financeiro Premium
              </h3>
<p className="text-lg text-slate-600 leading-relaxed mb-6">
                Assuma o controle total do faturamento. Automação de repasses,
                conciliação bancária inteligente e relatórios visuais que guiam
                o crescimento da sua clínica.
              </p>
<ul className="space-y-4 text-base text-slate-600">
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-teal-500 shrink-0" data-lucide="check-circle-2"></i>
                  DRE automatizado e painéis de BI
                </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-teal-500 shrink-0" data-lucide="check-circle-2"></i>
                  Emissão de notas fiscais em lote
                </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-teal-500 shrink-0" data-lucide="check-circle-2"></i>
                  Segurança bancária e LGPD
                </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="planos">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
            Planos flexíveis para o seu crescimento.
          </h2>
<p className="text-lg text-slate-600 mb-8">
            Estruturas transparentes sem surpresas no fim do mês. Escolha o
            ideal para o tamanho da sua operação.
          </p>

<div className="flex items-center justify-center gap-4">
<span className="text-base font-medium text-slate-600" id="label-mensal">
              Mensal
            </span>
<label className="relative inline-flex items-center cursor-pointer" htmlFor="pricing-toggle">
<input checked="" className="sr-only peer" id="pricing-toggle" onchange="togglePricing()" type="checkbox"/>
<div className="w-12 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
</label>
<span className="text-base font-medium text-slate-900" id="label-anual">
              Anual
              <span className="text-xs text-teal-600 font-semibold bg-teal-50 px-2 py-0.5 rounded-full ml-1">
                -18% off
              </span>
</span>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">

<div className="bg-white rounded-3xl p-8 ring-1 ring-slate-200 shadow-sm">
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">
              Consultório
            </h3>
<p className="text-base text-slate-500 mb-6 h-12">
              O essencial para médicos independentes e pequenos espaços.
            </p>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-3xl font-medium text-slate-600">R$</span>
<span className="text-5xl font-semibold tracking-tight text-slate-900" id="price-plan1">
                448
              </span>
<span className="text-base text-slate-500 price-period">/mês</span>
</div>
<p className="text-sm text-slate-500 mb-8 font-medium">
              Até 2 médicos inclusos. (+R$250 por médico extra)
            </p>
<a className="block w-full text-center px-4 py-3 rounded-full text-base font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 ring-1 ring-inset ring-slate-200 transition-colors mb-8" href="#contato">
              Começar agora
            </a>
<ul className="space-y-4 text-base text-slate-600">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" data-lucide="check"></i>
                Agenda Inteligente completa
              </li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" data-lucide="check"></i>
                Prontuário Eletrônico
              </li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" data-lucide="check"></i>
                Faturamento e caixa básico
              </li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" data-lucide="check"></i>
                Suporte via chat
              </li>
</ul>
</div>

<div className="bg-slate-900 rounded-3xl p-8 ring-1 ring-slate-900 shadow-xl relative scale-100 lg:scale-105 z-10">
<div className="absolute top-0 inset-x-0 flex justify-center -translate-y-1/2">
<span className="bg-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                Mais escolhido
              </span>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-2">
              Clínica Pro
            </h3>
<p className="text-base text-slate-400 mb-6 h-12">
              Para clínicas em expansão que precisam de gestão financeira
              avançada.
            </p>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-3xl font-medium text-slate-400">R$</span>
<span className="text-5xl font-semibold tracking-tight text-white" id="price-plan2">
                817
              </span>
<span className="text-base text-slate-400 price-period">/mês</span>
</div>
<p className="text-sm text-slate-400 mb-8 font-medium">
              Até 5 médicos inclusos. (+R$250 por médico extra)
            </p>
<a className="block w-full text-center px-4 py-3 rounded-full text-base font-medium text-white bg-teal-600 hover:bg-teal-500 transition-colors mb-8 shadow-sm" href="#contato">
              Agendar Demonstração
            </a>
<ul className="space-y-4 text-base text-slate-300">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" data-lucide="check"></i>
                Tudo do plano Consultório
              </li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" data-lucide="check"></i>
                Repasses financeiros automáticos
              </li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" data-lucide="check"></i>
                Relatórios gerenciais avançados
              </li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" data-lucide="check"></i>
                Controle de estoque de materiais
              </li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" data-lucide="check"></i>
                Suporte prioritário (SLA 4h)
              </li>
</ul>
</div>

<div className="bg-white rounded-3xl p-8 ring-1 ring-slate-200 shadow-sm">
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">
              Enterprise
            </h3>
<p className="text-base text-slate-500 mb-6 h-12">
              Solução corporativa para policlínicas e grandes redes de saúde.
            </p>
<div className="mb-6 flex items-baseline gap-1 h-[4.5rem] items-center">
<span className="text-4xl font-semibold tracking-tight text-slate-900">
                Sob medida
              </span>
</div>
<p className="text-sm text-slate-500 mb-8 font-medium">
              Para mais de 5 médicos ou demandas específicas.
            </p>
<a className="block w-full text-center px-4 py-3 rounded-full text-base font-medium text-slate-700 bg-white hover:bg-slate-50 ring-1 ring-inset ring-slate-200 transition-colors mb-8" href="#contato">
              Falar com Consultor
            </a>
<ul className="space-y-4 text-base text-slate-600">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" data-lucide="check"></i>
                Tudo do plano Clínica Pro
              </li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" data-lucide="check"></i>
                Múltiplas unidades
              </li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" data-lucide="check"></i>
                Acesso à API para integrações
              </li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" data-lucide="check"></i>
                Gerente de sucesso dedicado (CSM)
              </li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" data-lucide="check"></i>
                Treinamento in-loco (opcional)
              </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100" id="contato">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div>
<h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-slate-900 mb-6 leading-tight">
              Pronto para elevar o nível da sua clínica?
            </h2>
<p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Agende uma demonstração VIP com nossos especialistas. Entenderemos
              o cenário atual da sua clínica e mostraremos na prática como o
              Vitals Pro pode otimizar seu tempo e aumentar seus ganhos.
            </p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center shrink-0">
<i className="w-6 h-6 text-teal-600 stroke-[1.5]" data-lucide="clock"></i>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900">
                    Implementação Expressa
                  </h4>
<p className="text-base text-slate-500">
                    Migramos seus dados em até 48h sem interromper seus
                    atendimentos.
                  </p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center shrink-0">
<i className="w-6 h-6 text-teal-600 stroke-[1.5]" data-lucide="headset"></i>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900">
                    Suporte Premium
                  </h4>
<p className="text-base text-slate-500">
                    Equipe humanizada disponível por WhatsApp e telefone.
                  </p>
</div>
</div>
</div>
</div>

<div className="bg-slate-50 rounded-3xl p-8 sm:p-10 ring-1 ring-slate-200">
<form action="#" className="space-y-6" method="POST">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium leading-6 text-slate-900 mb-2" htmlFor="first-name">
                    Nome completo
                  </label>
<input className="block w-full rounded-lg border-0 py-3 px-4 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 text-base shadow-sm bg-white" id="first-name" name="first-name" placeholder="Dr. João Silva" type="text"/>
</div>
<div>
<label className="block text-sm font-medium leading-6 text-slate-900 mb-2" htmlFor="phone">
                    WhatsApp
                  </label>
<input className="block w-full rounded-lg border-0 py-3 px-4 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 text-base shadow-sm bg-white" id="phone" name="phone" placeholder="(00) 00000-0000" type="tel"/>
</div>
</div>
<div>
<label className="block text-sm font-medium leading-6 text-slate-900 mb-2" htmlFor="email">
                  E-mail corporativo
                </label>
<input className="block w-full rounded-lg border-0 py-3 px-4 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 text-base shadow-sm bg-white" id="email" name="email" placeholder="joao@suaclinica.com.br" type="email"/>
</div>
<div>
<label className="block text-sm font-medium leading-6 text-slate-900 mb-2" htmlFor="clinic">
                  Nome da Clínica
                </label>
<input className="block w-full rounded-lg border-0 py-3 px-4 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 text-base shadow-sm bg-white" id="clinic" name="clinic" placeholder="Clínica Médica Silva" type="text"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="relative">
<label className="block text-sm font-medium leading-6 text-slate-900 mb-2" htmlFor="doctors">
                    Número de Médicos
                  </label>
<select className="block w-full rounded-lg border-0 py-3 pl-4 pr-10 text-slate-900 ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 text-base shadow-sm bg-white appearance-none cursor-pointer" id="doctors" name="doctors">
<option>Apenas eu</option>
<option>2 a 4 médicos</option>
<option>5 a 10 médicos</option>
<option>Mais de 10 médicos</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 top-8 flex items-center px-3 text-slate-500">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</div>
</div>
<div className="relative">
<label className="block text-sm font-medium leading-6 text-slate-900 mb-2" htmlFor="specialty">
                    Especialidade Principal
                  </label>
<select className="block w-full rounded-lg border-0 py-3 pl-4 pr-10 text-slate-900 ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 text-base shadow-sm bg-white appearance-none cursor-pointer" id="specialty" name="specialty">
<option>Clínica Geral</option>
<option>Dermatologia</option>
<option>Ginecologia</option>
<option>Oftalmologia</option>
<option>Psiquiatria</option>
<option>Outra</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 top-8 flex items-center px-3 text-slate-500">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</div>
</div>
</div>
<div className="pt-2">
<button className="w-full flex items-center justify-center px-8 py-4 border border-transparent rounded-full shadow-sm text-lg font-medium text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition-all" type="submit">
                  Solicitar Demonstração VIP
                </button>
<p className="text-center text-sm text-slate-500 mt-4 flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="lock"></i>
                  Seus dados estão seguros conosco.
                </p>
</div>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded overflow-hidden bg-white shadow-sm ring-1 ring-slate-100 flex items-center justify-center">
<img alt="Vitals Pro Mark" className="w-10 h-10 clip-logo scale-[1.5] -translate-y-0.5" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<span className="text-base font-semibold tracking-tight text-slate-900">
              VITALS
              <span className="text-teal-600">PRO</span>
</span>
</div>
<div className="flex gap-6 text-sm text-slate-500 font-medium">
<a className="hover:text-slate-900 transition-colors" href="#">
              Termos de Uso
            </a>
<a className="hover:text-slate-900 transition-colors" href="#">
              Política de Privacidade
            </a>
<a className="hover:text-slate-900 transition-colors" href="#">
              Suporte
            </a>
</div>
</div>
<div className="mt-8 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
<p>© 2024 Vitals Pro. Todos os direitos reservados.</p>
<p>Desenvolvido para alta performance em saúde.</p>
</div>
</div>
</footer>


    </>
  );
}
