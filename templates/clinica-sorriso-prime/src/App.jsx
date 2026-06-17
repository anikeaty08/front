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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
<iconify-icon className="text-lg" icon="solar:smile-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="font-semibold text-lg tracking-tight text-slate-900">Sorriso Prime</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-blue-600 transition-colors" href="#home">Home</a>
<a className="hover:text-blue-600 transition-colors" href="#servicos">Serviços</a>
<a className="hover:text-blue-600 transition-colors" href="#sobre">Sobre</a>
<a className="hover:text-blue-600 transition-colors" href="#contato">Contato</a>
</div>
<div className="hidden md:flex">
<a className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors duration-300 shadow-sm" href="#contato">
                    Agendar Avaliação
                </a>
</div>

<button className="md:hidden text-slate-600" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-16 left-0 w-full bg-white border-b border-slate-200 p-6 flex flex-col gap-4 shadow-lg" id="mobile-menu">
<a className="text-base font-medium text-slate-700" href="#home">Home</a>
<a className="text-base font-medium text-slate-700" href="#servicos">Serviços</a>
<a className="text-base font-medium text-slate-700" href="#sobre">Sobre</a>
<a className="bg-blue-600 text-white text-center py-2.5 rounded-lg text-sm font-medium" href="#contato">Agendar Avaliação</a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden" id="home">

<div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
<div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-slate-200/50 rounded-full blur-3xl -z-10"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

<div className="relative z-10 reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/50 text-blue-600 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
</span>
                    Clínica odontológica
                </div>
<h1 className="font-semibold text-4xl lg:text-5xl xl:text-6xl tracking-tight leading-[1.15] mb-6 text-slate-900">
                    Seu sorriso merece <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">cuidado especializado</span>
</h1>
<p className="text-base lg:text-lg text-slate-500 mb-8 max-w-lg leading-relaxed">
                    Na Sorriso Prime Odontologia oferecemos tratamentos modernos e personalizados para cuidar da saúde e estética do seu sorriso.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-blue-600 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition-all shadow-sm text-center flex items-center justify-center gap-2" href="#contato">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
                        Agende pelo WhatsApp
                    </a>
</div>
</div>

<div className="relative reveal delay-200">
<div className="relative rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 h-[400px] lg:h-[500px] border border-white/60">
<img alt="Consultório Odontológico Moderno" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>

<div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-slate-100 flex items-center gap-3">
<div className="bg-green-50 p-2 rounded-lg text-green-600">
<iconify-icon className="text-xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="font-semibold text-sm text-slate-900 tracking-tight">Atendimento Humanizado</p>
<p className="text-xs text-slate-500">Com foco no seu bem-estar</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 bg-white border-y border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="flex items-start gap-4 reveal">
<div className="w-10 h-10 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-center text-blue-600 shrink-0">
<iconify-icon className="text-xl" icon="solar:heart-angle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-base text-slate-900 mb-1">Atendimento humanizado</h3>
<p className="text-sm text-slate-500">Cuidado centrado em você, com empatia e conforto em todas as etapas.</p>
</div>
</div>
<div className="flex items-start gap-4 reveal delay-100">
<div className="w-10 h-10 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-center text-blue-600 shrink-0">
<iconify-icon className="text-xl" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-base text-slate-900 mb-1">Tecnologia avançada</h3>
<p className="text-sm text-slate-500">Equipamentos modernos para diagnósticos precisos e tratamentos seguros.</p>
</div>
</div>
<div className="flex items-start gap-4 reveal delay-200">
<div className="w-10 h-10 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-center text-blue-600 shrink-0">
<iconify-icon className="text-xl" icon="solar:star-shine-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-base text-slate-900 mb-1">Resultados duradouros</h3>
<p className="text-sm text-slate-500">Foco em estética natural e funcionalidade para um sorriso perfeito.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="servicos">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<h2 className="font-semibold text-3xl text-slate-900 mb-4 tracking-tight">Nossos Serviços</h2>
<p className="text-sm text-slate-500">Especialidades completas para transformar a saúde e a estética do seu sorriso com máxima qualidade.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:border-blue-200 transition-colors group reveal">
<div className="flex items-start justify-between mb-4">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
<iconify-icon className="text-2xl" icon="solar:tooth-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<h3 className="font-semibold text-lg text-slate-900 mb-2 tracking-tight">Implantes dentários</h3>
<p className="text-sm text-slate-500 leading-relaxed">Reposição segura e definitiva de dentes perdidos com tecnologia moderna, recuperando sua função mastigatória e autoestima.</p>
</div>
<div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:border-blue-200 transition-colors group reveal delay-100">
<div className="flex items-start justify-between mb-4">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
<iconify-icon className="text-2xl" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<h3 className="font-semibold text-lg text-slate-900 mb-2 tracking-tight">Lentes de contato dental</h3>
<p className="text-sm text-slate-500 leading-relaxed">Transformação estética do sorriso com lâminas ultrafinas de porcelana, ajustando cor, formato e alinhamento dos dentes.</p>
</div>
<div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:border-blue-200 transition-colors group reveal">
<div className="flex items-start justify-between mb-4">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
<iconify-icon className="text-2xl" icon="solar:moon-stars-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<h3 className="font-semibold text-lg text-slate-900 mb-2 tracking-tight">Clareamento dental</h3>
<p className="text-sm text-slate-500 leading-relaxed">Tratamento profissional seguro e eficaz para remover manchas e deixar o sorriso visivelmente mais branco e saudável.</p>
</div>
<div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:border-blue-200 transition-colors group reveal delay-100">
<div className="flex items-start justify-between mb-4">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
<iconify-icon className="text-2xl" icon="solar:minimize-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<h3 className="font-semibold text-lg text-slate-900 mb-2 tracking-tight">Ortodontia</h3>
<p className="text-sm text-slate-500 leading-relaxed">Correção do alinhamento dentário com aparelhos modernos, incluindo opções discretas, para um sorriso alinhado e funcional.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-200" id="sobre">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16 items-center">

<div className="lg:w-1/2 relative reveal">
<div className="grid grid-cols-2 gap-4">
<img alt="Estrutura da Clínica" className="rounded-2xl object-cover h-64 w-full shadow-sm transform translate-y-6" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<img alt="Atendimento Odontológico" className="rounded-2xl object-cover h-64 w-full shadow-sm" src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
</div>

<div className="lg:w-1/2 reveal delay-100">
<h2 className="font-semibold text-3xl lg:text-4xl text-slate-900 mb-6 tracking-tight">
                        Sobre a <span className="text-blue-600">Sorriso Prime</span>
</h2>
<div className="space-y-4 text-sm lg:text-base text-slate-500 leading-relaxed">
<p>
                            A Sorriso Prime Odontologia nasceu com o propósito de oferecer tratamentos odontológicos modernos, seguros e acessíveis para toda a família.
                        </p>
<p>
                            Nossa equipe é formada por profissionais experientes que utilizam tecnologia de ponta para garantir diagnósticos precisos e resultados de alta qualidade em cada procedimento.
                        </p>
<p>
                            Acreditamos que um sorriso saudável transforma a autoestima e melhora a qualidade de vida. É por isso que dedicamos atenção aos mínimos detalhes, priorizando sempre o seu conforto.
                        </p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 pt-24 pb-12 text-slate-400" id="contato">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
<div className="lg:col-span-5">
<h2 className="font-semibold text-3xl text-white mb-4 tracking-tight">Contato</h2>
<p className="text-sm text-slate-400 mb-8 max-w-md leading-relaxed">
                        Entre em contato e agende sua avaliação. Nossa equipe está pronta para receber você com o cuidado que seu sorriso merece.
                    </p>
<a className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-blue-500 transition-colors shadow-sm" href="#">
<iconify-icon className="text-lg" icon="solar:whatsapp-linear" strokeWidth="1.5"></iconify-icon>
                        Agendar via WhatsApp
                    </a>
</div>
<div className="lg:col-span-3 lg:col-start-7">
<h4 className="text-white font-medium mb-6">Informações</h4>
<ul className="space-y-5 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-blue-400 shrink-0 mt-0.5" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<span>Brasília – DF</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-lg text-blue-400 shrink-0" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
<span className="hover:text-white transition-colors cursor-pointer">(61) 99999-9999</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-lg text-blue-400 shrink-0" icon="solar:smartphone-linear" strokeWidth="1.5"></iconify-icon>
<span>WhatsApp para agendamento</span>
</li>
</ul>
</div>
<div className="lg:col-span-3">
<h4 className="text-white font-medium mb-6">Horário de Atendimento</h4>
<ul className="space-y-3 text-sm">
<li className="flex justify-between border-b border-slate-800 pb-2">
<span>Segunda a sexta</span>
<span className="text-slate-300">08h às 18h</span>
</li>
<li className="flex justify-between pt-1">
<span>Sábado e Domingo</span>
<span className="text-slate-500">Fechado</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
<div className="flex items-center gap-2 mb-4 md:mb-0">
<div className="w-6 h-6 bg-slate-800 rounded flex items-center justify-center text-white">
<iconify-icon icon="solar:smile-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="font-medium text-slate-300">Sorriso Prime Odontologia</span>
</div>
<p>© 2023 Todos os direitos reservados.</p>
</div>
</div>
</footer>

    </>
  );
}
