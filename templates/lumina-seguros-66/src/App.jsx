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
      

<header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-xl font-semibold tracking-tighter text-[#000f9f] flex items-center gap-2" href="#">
<iconify-icon className="text-[#000f9f]" icon="solar:shield-check-linear" width="24"></iconify-icon>
                LUMINA SEGUROS
            </a>

<nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-[#000f9f] transition-colors" href="#quem-somos">Quem somos</a>
<a className="hover:text-[#000f9f] transition-colors" href="#seguros">Nossos seguros</a>
<a className="hover:text-[#000f9f] transition-colors" href="#sinistro">Sinistro</a>
<a className="hover:text-[#000f9f] transition-colors" href="#documentos">Documentos</a>
<a className="hover:text-[#000f9f] transition-colors" href="#representantes">Representantes</a>
<a className="hover:text-[#000f9f] transition-colors" href="#links">Links</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-[#000f9f] rounded-lg hover:bg-[#000f9f]/90 transition-all focus:ring-2 focus:ring-offset-2 focus:ring-[#000f9f]" href="#contato">
                    Fale conosco
                </a>

<button className="lg:hidden text-slate-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white -z-10"></div>
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#000f9f] text-xs font-medium mb-8">
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
                Excelência em proteção há 20 anos
            </div>
<h1 className="text-4xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-6 leading-tight">
                Proteção que abraça <br/>
<span className="text-[#000f9f]">o seu futuro.</span>
</h1>
<p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                Oferecemos mais do que apólices; entregamos tranquilidade, confiança e um cuidado genuíno com o que é mais importante para você e sua família.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-[#000f9f] rounded-lg hover:bg-[#000f9f]/90 transition-all shadow-lg shadow-blue-900/10" href="#seguros">
                    Conheça nossos seguros
                    <iconify-icon className="ml-2" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-all" href="#sinistro">
<iconify-icon className="mr-2" icon="solar:document-add-linear" width="18"></iconify-icon>
                    Abrir um sinistro
                </a>
</div>
</div>
</section>

<section className="py-12 border-y border-slate-100 bg-slate-50/50">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
<div className="flex items-center gap-4 text-slate-900">
<iconify-icon className="text-[#000f9f]" icon="solar:heart-angle-linear" width="32"></iconify-icon>
<span className="text-lg font-medium tracking-tight">Cuidar de você é a nossa prioridade.</span>
</div>
<p className="text-sm text-slate-500 font-light max-w-md">
                Em cada etapa da vida, estamos presentes para garantir que seus sonhos permaneçam seguros.
            </p>
</div>
</section>

<section className="py-24 bg-white" id="seguros">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Nossas Soluções</h2>
<p className="text-slate-500 font-light max-w-2xl">
                    Um portfólio completo desenhado para atender às suas necessidades, desde a proteção do seu lar até a segurança dos seus negócios.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-6 rounded-xl border border-slate-100 bg-white hover:border-[#000f9f]/30 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#000f9f] mb-4 group-hover:bg-[#000f9f] group-hover:text-white transition-colors">
<iconify-icon icon="solar:shield-up-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Garantia Estendida Original</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Prolongue a proteção dos seus bens duráveis com a mesma tranquilidade da garantia de fábrica.
                    </p>
</div>

<div className="group p-6 rounded-xl border border-slate-100 bg-white hover:border-[#000f9f]/30 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#000f9f] mb-4 group-hover:bg-[#000f9f] group-hover:text-white transition-colors">
<iconify-icon icon="solar:user-hand-up-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Seguro Prestamista Individual</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Segurança financeira para quitar obrigações em momentos imprevistos, protegendo seu patrimônio.
                    </p>
</div>

<div className="group p-6 rounded-xl border border-slate-100 bg-white hover:border-[#000f9f]/30 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#000f9f] mb-4 group-hover:bg-[#000f9f] group-hover:text-white transition-colors">
<iconify-icon icon="solar:hospital-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Diária de Internação Hospitalar</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Apoio financeiro para cobrir despesas e garantir conforto durante períodos de recuperação.
                    </p>
</div>

<div className="group p-6 rounded-xl border border-slate-100 bg-white hover:border-[#000f9f]/30 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#000f9f] mb-4 group-hover:bg-[#000f9f] group-hover:text-white transition-colors">
<iconify-icon icon="solar:home-smile-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Microsseguro Residencial</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Proteção acessível para o seu lar, com sorteios mensais que premiam sua escolha inteligente.
                    </p>
</div>

<div className="group p-6 rounded-xl border border-slate-100 bg-white hover:border-[#000f9f]/30 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#000f9f] mb-4 group-hover:bg-[#000f9f] group-hover:text-white transition-colors">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Seguro Prestamista Coletivo</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Soluções robustas para grupos e empresas, garantindo estabilidade para todos os envolvidos.
                    </p>
</div>

<div className="group p-6 rounded-xl border border-slate-100 bg-white hover:border-[#000f9f]/30 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#000f9f] mb-4 group-hover:bg-[#000f9f] group-hover:text-white transition-colors">
<iconify-icon icon="solar:user-heart-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Microsseguro de Pessoas</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Coberturas essenciais de vida e acidentes pessoais com custos reduzidos e sorteios.
                    </p>
</div>

<div className="group p-6 rounded-xl border border-slate-100 bg-white hover:border-[#000f9f]/30 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#000f9f] mb-4 group-hover:bg-[#000f9f] group-hover:text-white transition-colors">
<iconify-icon icon="solar:box-minimalistic-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Seguro Riscos Diversos</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Coberturas específicas para equipamentos e bens que exigem proteção especializada.
                    </p>
</div>

<div className="group p-6 rounded-xl border border-slate-100 bg-white hover:border-[#000f9f]/30 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#000f9f] mb-4 group-hover:bg-[#000f9f] group-hover:text-white transition-colors">
<iconify-icon icon="solar:card-check-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Seguro de Crédito Interno</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Proteção contra inadimplência comercial, permitindo que sua empresa cresça com segurança.
                    </p>
</div>

<div className="group p-6 rounded-xl border border-slate-100 bg-white hover:border-[#000f9f]/30 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#000f9f] mb-4 group-hover:bg-[#000f9f] group-hover:text-white transition-colors">
<iconify-icon icon="solar:case-round-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Microsseguro Empresarial</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Proteção sob medida para pequenos e médios negócios, blindando seu esforço empreendedor.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="quem-somos">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-[#000f9f] font-medium text-sm tracking-wide uppercase mb-4 block">Nossa Essência</span>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                    Construindo relações baseadas em ética e transparência.
                </h2>
<div className="space-y-6 text-slate-600 font-light leading-relaxed">
<p>
                        Somos uma instituição dedicada a proteger o que realmente importa. Nossa trajetória é marcada pela solidez financeira e pelo compromisso inabalável com a responsabilidade social e o bem-estar de nossos segurados.
                    </p>
<p>
                        Acreditamos que o seguro é, acima de tudo, um instrumento de dignidade. Por isso, trabalhamos incansavelmente para oferecer um atendimento humanizado, ágil e acolhedor, garantindo que você nunca se sinta desamparado.
                    </p>
</div>
<div className="mt-8 pt-8 border-t border-slate-200 grid grid-cols-2 gap-8">
<div>
<div className="text-3xl font-semibold text-[#000f9f] tracking-tight">100%</div>
<div className="text-sm text-slate-500 mt-1">Compromisso com o cliente</div>
</div>
<div>
<div className="text-3xl font-semibold text-[#000f9f] tracking-tight">24h</div>
<div className="text-sm text-slate-500 mt-1">Suporte e assistência</div>
</div>
</div>
</div>

<div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden bg-slate-200">
<div className="absolute inset-0 bg-gradient-to-tr from-[#000f9f] to-blue-400 opacity-90 mix-blend-multiply"></div>
<div className="absolute inset-0 flex items-center justify-center p-12">
<div className="text-white">
<iconify-icon className="mb-6 opacity-80" icon="solar:shield-star-linear" width="64"></iconify-icon>
<h3 className="text-2xl font-medium tracking-tight mb-2">Segurança para o futuro</h3>
<p className="opacity-80 font-light">
                            Nossa missão é garantir que cada passo do seu caminho seja dado com confiança.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Por que escolher a Lumina?</h2>
<p className="text-slate-500 font-light">Diferenciais que garantem a sua tranquilidade.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="flex flex-col items-start">
<div className="p-3 bg-blue-50 rounded-lg text-[#000f9f] mb-4">
<iconify-icon icon="solar:buildings-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Solidez e Confiança</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">
                        Uma estrutura financeira robusta para honrar todos os compromissos com agilidade.
                    </p>
</div>

<div className="flex flex-col items-start">
<div className="p-3 bg-blue-50 rounded-lg text-[#000f9f] mb-4">
<iconify-icon icon="solar:chat-round-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Atendimento Humanizado</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">
                        Pessoas cuidando de pessoas. Nossa equipe está pronta para ouvir e resolver.
                    </p>
</div>

<div className="flex flex-col items-start">
<div className="p-3 bg-blue-50 rounded-lg text-[#000f9f] mb-4">
<iconify-icon icon="solar:folder-with-files-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Portfólio Completo</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">
                        Soluções integradas que cobrem todas as áreas da sua vida pessoal e profissional.
                    </p>
</div>

<div className="flex flex-col items-start">
<div className="p-3 bg-blue-50 rounded-lg text-[#000f9f] mb-4">
<iconify-icon icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Futuro Protegido</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">
                        Foco no longo prazo, garantindo a sustentabilidade da sua proteção hoje e amanhã.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#000f9f] relative overflow-hidden">

<div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
</section>
    </>
  );
}
