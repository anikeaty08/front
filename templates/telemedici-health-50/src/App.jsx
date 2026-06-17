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



        function toggleAccordion(id) {
            const content = document.getElementById(`content-${id}`);
            const icon = document.getElementById(`icon-${id}`);
            const isOpened = content.classList.contains('active');

            // Close all active accordions first to keep it clean (optional behavior)
            // If you want multiple open, remove this block
            document.querySelectorAll('.accordion-content').forEach(el => {
                if(el.id !== `content-${id}`) el.classList.remove('active');
            });
            document.querySelectorAll('.rotate-icon').forEach(el => {
                if(el.id !== `icon-${id}`) el.classList.remove('active');
            });

            // Toggle clicked
            if (!isOpened) {
                content.classList.add('active');
                icon.classList.add('active');
            } else {
                content.classList.remove('active');
                icon.classList.remove('active');
            }
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
      

<nav className="fixed top-0 w-full z-50 glass-header transition-all duration-300">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 group-hover:scale-95 transition-transform duration-300">
<iconify-icon icon="solar:leaf-linear" strokeWidth="2" width="18"></iconify-icon>
</div>
<span className="font-semibold text-lg tracking-tighter text-slate-900 group-hover:text-emerald-600 transition-colors">
                    receitas<span className="text-slate-400 font-normal">.site</span>
</span>
</a>

<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#como-funciona">Como funciona</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#faq">Dúvidas</a>
<button className="bg-slate-900 hover:bg-black text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20 flex items-center gap-2">
                    Iniciar agora
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>

<button className="md:hidden text-slate-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
<div className="aurora-bg"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10">
<div className="flex flex-col items-center text-center max-w-3xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-slate-600 tracking-tight">Plantão Médico Online Agora</span>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-slate-900 tracking-tighter mb-6 leading-[1.1]">
                    Renove sua receita <br className="hidden sm:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">sem sair de casa.</span>
</h1>
<p className="text-lg text-slate-500 mb-10 leading-relaxed font-light max-w-xl mx-auto">
                    Telemedicina focada na continuidade do seu tratamento. Avaliação rápida, segura e receita digital válida em todo o Brasil.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full text-base font-medium transition-all shadow-xl shadow-emerald-500/20 hover:-translate-y-0.5 flex items-center justify-center gap-2">
<iconify-icon icon="solar:notes-minimalistic-linear" width="20"></iconify-icon>
                        Solicitar Receita
                    </button>
<button className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-full text-base font-medium transition-all flex items-center justify-center gap-2">
                        Verificar medicamentos
                    </button>
</div>

<div className="mt-12 flex flex-wrap justify-center items-center gap-6 sm:gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-600" icon="solar:shield-check-linear" width="20"></iconify-icon>
<span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">ICP-Brasil</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-600" icon="solar:lock-password-linear" width="20"></iconify-icon>
<span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Dados Seguros</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-600" icon="solar:verified-check-linear" width="20"></iconify-icon>
<span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">CRM Ativo</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-slate-100" id="como-funciona">
<div className="max-w-5xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tighter">Processo Simplificado</h2>
<p className="text-slate-500 mt-2 font-light">Tecnologia a favor da sua saúde em 3 passos.</p>
</div>
<div className="grid md:grid-cols-3 gap-6 h-auto md:h-96">

<div className="md:col-span-1 bg-slate-50 rounded-3xl p-8 border border-slate-100 relative overflow-hidden group hover:border-emerald-200 transition-colors duration-300">
<div className="relative z-10">
<div className="w-12 h-12 bg-white rounded-2xl border border-slate-100 flex items-center justify-center text-slate-900 mb-6 shadow-sm">
<span className="font-bold font-mono">1</span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2 tracking-tight">Triagem Digital</h3>
<p className="text-sm text-slate-500 leading-relaxed">Preencha seus dados e envie foto da receita anterior ou laudo.</p>
</div>

<iconify-icon className="absolute -bottom-4 -right-4 text-slate-200 group-hover:text-emerald-100 transition-colors duration-500 rotate-[-15deg]" icon="solar:clipboard-check-linear" width="140"></iconify-icon>
</div>

<div className="md:col-span-1 bg-slate-50 rounded-3xl p-8 border border-slate-100 relative overflow-hidden group hover:border-emerald-200 transition-colors duration-300">
<div className="relative z-10">
<div className="w-12 h-12 bg-white rounded-2xl border border-slate-100 flex items-center justify-center text-slate-900 mb-6 shadow-sm">
<span className="font-bold font-mono">2</span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2 tracking-tight">Teleconsulta</h3>
<p className="text-sm text-slate-500 leading-relaxed">Vídeo chamada rápida com médico para validar a continuidade.</p>
</div>
<iconify-icon className="absolute -bottom-4 -right-4 text-slate-200 group-hover:text-emerald-100 transition-colors duration-500 rotate-[-15deg]" icon="solar:videocamera-record-linear" width="140"></iconify-icon>
</div>

<div className="md:col-span-1 bg-slate-900 rounded-3xl p-8 border border-slate-800 relative overflow-hidden group">
<div className="relative z-10 text-white">
<div className="w-12 h-12 bg-white/10 rounded-2xl border border-white/10 flex items-center justify-center text-white mb-6 backdrop-blur-md">
<span className="font-bold font-mono">3</span>
</div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">Receita no WhatsApp</h3>
<p className="text-sm text-slate-400 leading-relaxed">Link com assinatura digital enviado direto para seu celular.</p>
<div className="mt-8 inline-flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
<div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                            Entrega Imediata
                        </div>
</div>

<div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA]">
<div className="max-w-5xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tighter mb-6">Critérios de Atendimento</h2>
<p className="text-slate-500 mb-8 font-light">Seguimos protocolos rigorosos para garantir sua segurança. Nem todo medicamento pode ser prescrito via telemedicina sem exame físico prévio.</p>
<div className="space-y-6">

<div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
<div className="flex items-center gap-3 mb-4">
<div className="bg-emerald-100 text-emerald-600 p-1.5 rounded-lg">
<iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon>
</div>
<span className="font-semibold text-slate-900 tracking-tight">O que renovamos</span>
</div>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="mt-0.5 text-slate-400" icon="solar:pill-linear"></iconify-icon>
                                    Uso contínuo (Pressão, Diabetes, Tireoide)
                                </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="mt-0.5 text-slate-400" icon="solar:pill-linear"></iconify-icon>
                                    Antidepressivos (Receita Branca 2 vias)
                                </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="mt-0.5 text-slate-400" icon="solar:pill-linear"></iconify-icon>
                                    Antibióticos (Avaliação específica)
                                </li>
</ul>
</div>
</div>
</div>

<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-transparent rounded-[2rem] transform rotate-3 scale-95 opacity-50"></div>
<div className="relative bg-white p-8 rounded-[2rem] border border-slate-200 shadow-xl">
<div className="flex items-center gap-3 mb-6">
<div className="bg-rose-50 text-rose-500 p-1.5 rounded-lg">
<iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon>
</div>
<span className="font-semibold text-slate-900 tracking-tight">Não atendemos</span>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
<span className="text-sm font-medium text-slate-700">Receitas Amarelas/Azuis</span>
<span className="text-[10px] font-bold bg-slate-200 text-slate-500 px-2 py-0.5 rounded">LEI</span>
</div>
<div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
<span className="text-sm font-medium text-slate-700">Emergências Médicas</span>
<span className="text-[10px] font-bold bg-slate-200 text-slate-500 px-2 py-0.5 rounded">PS</span>
</div>
<div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
<span className="text-sm font-medium text-slate-700">Laudos para afastamento</span>
<span className="text-[10px] font-bold bg-slate-200 text-slate-500 px-2 py-0.5 rounded">INSS</span>
</div>
</div>
<div className="mt-8 pt-6 border-t border-slate-100 text-center">
<p className="text-xs text-slate-400">Em caso de dúvida, devolvemos seu dinheiro integralmente.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100" id="faq">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tighter mb-4">Perguntas Frequentes</h2>
<p className="text-slate-500 text-sm max-w-lg mx-auto">Tire suas dúvidas sobre o processo, legalidade e funcionamento da nossa plataforma.</p>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="space-y-4">

<div className="group border border-slate-200 rounded-xl bg-white hover:border-emerald-200 transition-colors">
<button className="w-full flex justify-between items-center p-5 text-left font-medium text-slate-800" onclick="toggleAccordion(1)">
<span>A receita digital é aceita em qualquer farmácia?</span>
<iconify-icon className="text-slate-400 rotate-icon group-hover:text-emerald-500" icon="solar:alt-arrow-down-linear" id="icon-1" width="20"></iconify-icon>
</button>
<div className="accordion-content" id="content-1">
<div className="p-5 pt-0 text-sm text-slate-500 leading-relaxed">
                                Sim. As receitas possuem QR Code e assinatura digital padrão ICP-Brasil, sendo aceitas em qualquer farmácia do território nacional por regulamentação da Anvisa.
                            </div>
</div>
</div>

<div className="group border border-slate-200 rounded-xl bg-white hover:border-emerald-200 transition-colors">
<button className="w-full flex justify-between items-center p-5 text-left font-medium text-slate-800" onclick="toggleAccordion(2)">
<span>Quais as formas de pagamento?</span>
<iconify-icon className="text-slate-400 rotate-icon group-hover:text-emerald-500" icon="solar:alt-arrow-down-linear" id="icon-2" width="20"></iconify-icon>
</button>
<div className="accordion-content" id="content-2">
<div className="p-5 pt-0 text-sm text-slate-500 leading-relaxed">
                                Aceitamos PIX para aprovação imediata e Cartão de Crédito. Utilizamos processadores de pagamento seguros e criptografados.
                            </div>
</div>
</div>

<div className="group border border-slate-200 rounded-xl bg-white hover:border-emerald-200 transition-colors">
<button className="w-full flex justify-between items-center p-5 text-left font-medium text-slate-800" onclick="toggleAccordion(3)">
<span>Se o médico não aprovar, recebo reembolso?</span>
<iconify-icon className="text-slate-400 rotate-icon group-hover:text-emerald-500" icon="solar:alt-arrow-down-linear" id="icon-3" width="20"></iconify-icon>
</button>
<div className="accordion-content" id="content-3">
<div className="p-5 pt-0 text-sm text-slate-500 leading-relaxed">
                                Com certeza. Se durante a triagem ou consulta o médico identificar que não é possível renovar sua receita digitalmente, estornamos 100% do valor pago.
                            </div>
</div>
</div>

<div className="group border border-slate-200 rounded-xl bg-white hover:border-emerald-200 transition-colors">
<button className="w-full flex justify-between items-center p-5 text-left font-medium text-slate-800" onclick="toggleAccordion(4)">
<span>Quanto tempo demora o atendimento?</span>
<iconify-icon className="text-slate-400 rotate-icon group-hover:text-emerald-500" icon="solar:alt-arrow-down-linear" id="icon-4" width="20"></iconify-icon>
</button>
<div className="accordion-content" id="content-4">
<div className="p-5 pt-0 text-sm text-slate-500 leading-relaxed">
                                O processo todo leva em média 15 a 30 minutos. Após preencher seus dados, você entra em uma fila de espera curta para a validação médica.
                            </div>
</div>
</div>
</div>

<div className="space-y-4">

<div className="group border border-slate-200 rounded-xl bg-white hover:border-emerald-200 transition-colors">
<button className="w-full flex justify-between items-center p-5 text-left font-medium text-slate-800" onclick="toggleAccordion(5)">
<span>Posso renovar receita amarela ou azul?</span>
<iconify-icon className="text-slate-400 rotate-icon group-hover:text-emerald-500" icon="solar:alt-arrow-down-linear" id="icon-5" width="20"></iconify-icon>
</button>
<div className="accordion-content" id="content-5">
<div className="p-5 pt-0 text-sm text-slate-500 leading-relaxed">
                                Não. Receitas de controle especial (Amarelas A e Azuis B) exigem o talão físico por lei e não podem ser emitidas digitalmente, apenas a Receita de Controle Especial em duas vias (branca).
                            </div>
</div>
</div>

<div className="group border border-slate-200 rounded-xl bg-white hover:border-emerald-200 transition-colors">
<button className="w-full flex justify-between items-center p-5 text-left font-medium text-slate-800" onclick="toggleAccordion(6)">
<span>Preciso baixar algum aplicativo?</span>
<iconify-icon className="text-slate-400 rotate-icon group-hover:text-emerald-500" icon="solar:alt-arrow-down-linear" id="icon-6" width="20"></iconify-icon>
</button>
<div className="accordion-content" id="content-6">
<div className="p-5 pt-0 text-sm text-slate-500 leading-relaxed">
                                Não é necessário. Todo o processo é feito pelo navegador do seu celular ou computador, e a receita chega via SMS ou WhatsApp.
                            </div>
</div>
</div>

<div className="group border border-slate-200 rounded-xl bg-white hover:border-emerald-200 transition-colors">
<button className="w-full flex justify-between items-center p-5 text-left font-medium text-slate-800" onclick="toggleAccordion(7)">
<span>O atendimento funciona no fim de semana?</span>
<iconify-icon className="text-slate-400 rotate-icon group-hover:text-emerald-500" icon="solar:alt-arrow-down-linear" id="icon-7" width="20"></iconify-icon>
</button>
<div className="accordion-content" id="content-7">
<div className="p-5 pt-0 text-sm text-slate-500 leading-relaxed">
                                Sim! Temos médicos de plantão todos os dias, incluindo sábados, domingos e feriados, das 07h às 23h.
                            </div>
</div>
</div>

<div className="group border border-slate-200 rounded-xl bg-white hover:border-emerald-200 transition-colors">
<button className="w-full flex justify-between items-center p-5 text-left font-medium text-slate-800" onclick="toggleAccordion(8)">
<span>É seguro enviar meus dados?</span>
<iconify-icon className="text-slate-400 rotate-icon group-hover:text-emerald-500" icon="solar:alt-arrow-down-linear" id="icon-8" width="20"></iconify-icon>
</button>
<div className="accordion-content" id="content-8">
<div className="p-5 pt-0 text-sm text-slate-500 leading-relaxed">
                                Totalmente. Seguimos a LGPD e utilizamos criptografia de ponta a ponta. Seus dados médicos são confidenciais e acessados apenas pelo médico responsável.
                            </div>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center">
<button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full text-base font-medium transition-all shadow-xl shadow-emerald-500/20 hover:-translate-y-0.5 inline-flex items-center gap-2">
                    Iniciar Avaliação
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</section>

<footer className="bg-slate-50 pt-16 pb-12 border-t border-slate-100">
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
<div>
<a className="flex items-center gap-2 mb-4 opacity-80 hover:opacity-100 transition-opacity" href="#">
<div className="w-6 h-6 bg-slate-900 rounded-md flex items-center justify-center text-white">
<iconify-icon icon="solar:leaf-linear" width="14"></iconify-icon>
</div>
<span className="font-semibold text-base tracking-tighter text-slate-900">receitas.site</span>
</a>
<p className="text-sm text-slate-500 max-w-xs">Saúde digital acessível e ética.</p>
</div>
<div className="flex gap-6">
<a className="text-sm text-slate-500 hover:text-emerald-600 transition-colors" href="#">Termos</a>
<a className="text-sm text-slate-500 hover:text-emerald-600 transition-colors" href="#">Privacidade</a>
<a className="text-sm text-slate-500 hover:text-emerald-600 transition-colors" href="#">Contato</a>
</div>
</div>
<div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 receitas.site. Todos os direitos reservados.</p>
<div className="flex items-center gap-2 text-xs text-slate-400 bg-white px-3 py-1 rounded-full border border-slate-100 shadow-sm">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Sistema Operacional: Normal
                </div>
</div>
</div>
</footer>


    </>
  );
}
