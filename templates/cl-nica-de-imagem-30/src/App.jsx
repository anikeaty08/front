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
      

<header className="sticky top-0 z-50 w-full border-b border-zinc-200/50 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-8">
<a className="text-xl font-medium tracking-tighter text-zinc-900" href="#">
                    LUMINA
                </a>
<nav className="hidden md:flex gap-6">
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#exames">Exames</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#unidades">Unidades</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#convenios">Convênios</a>
</nav>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors" href="#resultados">
<iconify-icon className="text-lg" icon="solar:user-circle-linear"></iconify-icon>
                    Resultados
                </a>
<a className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 transition-all" href="#agendar">
                    Agendar Exame
                </a>
<button className="md:hidden p-2 text-zinc-500">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</header>
<main>

<section className="relative overflow-hidden bg-white pt-24 pb-32 sm:pt-32 sm:pb-40">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#f4f4f5_1px,transparent_1px),linear-gradient(to_bottom,#f4f4f5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600 mb-8">
<iconify-icon className="text-sm" icon="solar:stethoscop-linear"></iconify-icon>
                    Nova unidade inaugurada no Centro
                </div>
<h1 className="mx-auto max-w-4xl text-5xl font-medium tracking-tight text-zinc-900 sm:text-7xl">
                    Precisão que ilumina o seu diagnóstico.
                </h1>
<p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-500 leading-relaxed">
                    Tecnologia médica de ponta unida ao cuidado humanizado. Agende seus exames de imagem e acesse seus resultados em uma plataforma única, rápida e segura.
                </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-zinc-800 transition-all" href="#agendar">
<iconify-icon className="text-lg" icon="solar:calendar-add-linear"></iconify-icon>
                        Agendar Agora
                    </a>
<a className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white border border-zinc-200 px-6 py-3 text-sm font-medium text-zinc-900 shadow-sm hover:bg-zinc-50 transition-all" href="#resultados">
<iconify-icon className="text-lg" icon="solar:document-text-linear"></iconify-icon>
                        Portal do Paciente
                    </a>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50" id="exames">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mb-12 max-w-3xl">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl">Exames disponíveis</h2>
<p className="mt-4 text-base text-zinc-500">Realizamos uma ampla gama de exames de imagem com equipamentos de última geração para garantir a máxima clareza nos resultados.</p>
</div>
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

<div className="group relative rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-200">
<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:screencast-2-linear"></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-medium tracking-tight text-zinc-900">Ressonância Magnética</h3>
<p className="text-sm text-zinc-500 mb-6 line-clamp-2">Imagens de alta resolução de órgãos e tecidos internos sem radiação ionizante.</p>
<a className="inline-flex items-center gap-1 text-sm font-medium text-zinc-900 hover:text-zinc-600" href="#">
                            Saiba mais <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group relative rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-200">
<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:health-linear"></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-medium tracking-tight text-zinc-900">Tomografia Computadorizada</h3>
<p className="text-sm text-zinc-500 mb-6 line-clamp-2">Exames rápidos e precisos para diagnósticos detalhados de diversas áreas do corpo.</p>
<a className="inline-flex items-center gap-1 text-sm font-medium text-zinc-900 hover:text-zinc-600" href="#">
                            Saiba mais <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group relative rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-200">
<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:soundwave-linear"></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-medium tracking-tight text-zinc-900">Ultrassonografia</h3>
<p className="text-sm text-zinc-500 mb-6 line-clamp-2">Avaliação em tempo real com tecnologia 3D e 4D para acompanhamento seguro.</p>
<a className="inline-flex items-center gap-1 text-sm font-medium text-zinc-900 hover:text-zinc-600" href="#">
                            Saiba mais <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group relative rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-200">
<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:bone-linear"></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-medium tracking-tight text-zinc-900">Raio-X Digital</h3>
<p className="text-sm text-zinc-500 mb-6 line-clamp-2">Exames radiográficos com menor dose de radiação e entrega imediata de imagens.</p>
<a className="inline-flex items-center gap-1 text-sm font-medium text-zinc-900 hover:text-zinc-600" href="#">
                            Saiba mais <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-white py-24" id="resultados">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

<div>
<div className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-800 mb-6">
                            Portal do Paciente
                        </div>
<h2 className="text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl mb-6">
                            Seus resultados na palma da mão, em minutos.
                        </h2>
<p className="text-base text-zinc-500 mb-8 leading-relaxed">
                            Esqueça a necessidade de buscar exames presencialmente. Assim que o laudo for assinado pelo médico radiologista, você e seu médico solicitante recebem uma notificação.
                        </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-zinc-900 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<div>
<p className="text-sm font-medium text-zinc-900">Histórico completo</p>
<p className="text-sm text-zinc-500">Acesse exames anteriores para comparação e acompanhamento.</p>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-zinc-900 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<div>
<p className="text-sm font-medium text-zinc-900">Imagens em DICOM</p>
<p className="text-sm text-zinc-500">Visualizador avançado integrado diretamente no navegador.</p>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-zinc-900 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<div>
<p className="text-sm font-medium text-zinc-900">Compartilhamento seguro</p>
<p className="text-sm text-zinc-500">Envie um link seguro temporário para o seu médico.</p>
</div>
</li>
</ul>
<a className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-zinc-800 transition-all" href="#">
                            Acessar Meus Exames
                        </a>
</div>

<div className="relative rounded-2xl border border-zinc-200 bg-zinc-50/50 p-2 shadow-sm sm:p-4">
<div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
<div className="mb-6 flex items-center justify-between border-b border-zinc-100 pb-4">
<div>
<h3 className="text-base font-medium text-zinc-900">Últimos Resultados</h3>
<p className="text-xs text-zinc-500">Atualizado hoje às 14:30</p>
</div>
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-zinc-500">
<iconify-icon className="text-sm" icon="solar:magnifier-linear"></iconify-icon>
</div>
</div>
<div className="space-y-4">

<div className="flex items-center justify-between rounded-lg border border-zinc-100 p-3 hover:bg-zinc-50 transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 text-zinc-600">
<iconify-icon className="text-lg" icon="solar:document-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-900">RM de Crânio</p>
<p className="text-xs text-zinc-500">12 Out 2023 • Dr. Carlos Silva</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Pronto</span>
<button className="text-zinc-400 hover:text-zinc-900 transition-colors">
<iconify-icon className="text-xl" icon="solar:download-linear"></iconify-icon>
</button>
</div>
</div>

<div className="flex items-center justify-between rounded-lg border border-zinc-100 p-3 hover:bg-zinc-50 transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 text-zinc-600">
<iconify-icon className="text-lg" icon="solar:health-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-900">TC de Tórax</p>
<p className="text-xs text-zinc-500">05 Set 2023 • Dra. Ana Paula</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="inline-flex items-center rounded-full bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600 ring-1 ring-inset ring-zinc-500/10">Visualizado</span>
<button className="text-zinc-400 hover:text-zinc-900 transition-colors">
<iconify-icon className="text-xl" icon="solar:download-linear"></iconify-icon>
</button>
</div>
</div>

<div className="flex items-center justify-between rounded-lg border border-zinc-100 p-3 hover:bg-zinc-50 transition-colors cursor-pointer opacity-70">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 text-zinc-600">
<iconify-icon className="text-lg" icon="solar:test-tube-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-900">Análises Clínicas</p>
<p className="text-xs text-zinc-500">Agendado para 20 Out 2023</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Agendado</span>
</div>
</div>
</div>
</div>

<div className="absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-br from-zinc-200 to-transparent opacity-50 blur-xl"></div>
</div>
</div>
</div>
</section>

<section className="py-24" id="agendar">
<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
<div className="relative isolate overflow-hidden rounded-3xl bg-zinc-900 px-6 py-16 text-center shadow-sm sm:px-16">
<h2 className="mx-auto max-w-2xl text-3xl font-medium tracking-tight text-white sm:text-4xl">
                        Simplifique o cuidado com sua saúde.
                    </h2>
<p className="mx-auto mt-4 max-w-xl text-base text-zinc-300">
                        Nossa agenda online está disponível 24 horas por dia. Escolha o melhor horário, selecione o convênio ou modalidade particular de forma autônoma.
                    </p>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-100 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:calendar-linear"></iconify-icon>
                            Abrir Agenda Online
                        </a>
<a className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-transparent border border-zinc-700 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800 transition-colors" href="#">
                            Atendimento via WhatsApp
                        </a>
</div>

<svg aria-hidden="true" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]" viewbox="0 0 1024 1024">
<circle cx="512" cy="512" fill="url(#gradient)" fillOpacity="0.1" r="512"></circle>
<defs>
<radialgradient id="gradient">
<stop stop-color="white"></stop>
<stop offset="1" stop-color="white"></stop>
</radialgradient>
</defs>
</svg>
</div>
</div>
</section>
</main>

<footer className="border-t border-zinc-200 bg-white pt-16 pb-8">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
<div className="lg:col-span-1">
<a className="text-lg font-medium tracking-tighter text-zinc-900" href="#">
                        LUMINA
                    </a>
<p className="mt-4 text-sm text-zinc-500 leading-relaxed max-w-xs">
                        Clínica de diagnóstico por imagem focada em precisão, tecnologia e atendimento humanizado.
                    </p>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900">Serviços</h4>
<ul className="mt-4 space-y-2">
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Ressonância Magnética</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Tomografia</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Ultrassonografia</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Raio-X</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900">Pacientes</h4>
<ul className="mt-4 space-y-2">
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Agendamento Online</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Portal de Resultados</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Convênios Atendidos</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Preparo de Exames</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900">Contato</h4>
<ul className="mt-4 space-y-2">
<li className="text-sm text-zinc-500">Av. Paulista, 1000 - São Paulo, SP</li>
<li className="text-sm text-zinc-500">contato@luminaimagem.com.br</li>
<li className="text-sm text-zinc-500">(11) 4000-0000</li>
</ul>
</div>
</div>
<div className="mt-16 border-t border-zinc-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-zinc-400">
                    © 2023 Lumina Imagem Médica. Todos os direitos reservados.
                </p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">Termos</a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">Privacidade</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
