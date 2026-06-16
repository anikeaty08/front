import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
      mobileMenu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => mobileMenu.classList.add('hidden'));
      });
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-nav border-b border-neutral-200/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a ="text-lg="" font-semibold="" href="#top" tracking-widest="" uppercase"="">Empreiteiro15</a>
<div className="hidden md:flex gap-8 text-sm font-medium text-neutral-500">
<a className="transition-colors hover:text-neutral-900" href="#inicio">Página inicial</a>
<a className="transition-colors hover:text-neutral-900" href="#galeria">Galeria</a>
<a className="transition-colors hover:text-neutral-900" href="#servicos">Serviços</a>
<a className="transition-colors hover:text-neutral-900" href="#sobre">Sobre</a>
<a className="transition-colors hover:text-neutral-900" href="#depoimentos">Depoimentos</a>
<a className="transition-colors hover:text-neutral-900" href="#contato">Contato</a>
</div>
<a className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium tracking-wide transition-colors group bg-neutral-900 text-neutral-50 hover:bg-neutral-800" href="https://empreiteiro15.wixsite.com/empreiteiro/formul-rio">
        Peça seu orçamento
        <iconify-icon className="text-neutral-50 transition-transform group-hover:translate-x-0.5" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
</a>
<button aria-label="Abrir menu" className="md:hidden p-2 text-neutral-600" id="menuBtn">
<iconify-icon icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="1.5rem"></iconify-icon>
</button>
</div>

<div className="md:hidden hidden border-t border-neutral-200/60 bg-white/80 backdrop-blur" id="mobileMenu">
<div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3 text-sm font-medium text-neutral-700">
<a className="py-1" href="#inicio">Página inicial</a>
<a className="py-1" href="#galeria">Galeria</a>
<a className="py-1" href="#servicos">Serviços</a>
<a className="py-1" href="#sobre">Sobre</a>
<a className="py-1" href="#depoimentos">Depoimentos</a>
<a className="py-1" href="#contato">Contato</a>
<a className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-medium tracking-wide bg-neutral-900 text-white" href="https://empreiteiro15.wixsite.com/empreiteiro/formul-rio">
          Peça seu orçamento
          <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
</a>
</div>
</div>
</nav>

<header className="relative pt-24 pb-12 lg:pt-32 lg:pb-12 overflow-hidden bg-white" id="inicio">
<div className="max-w-[1440px] mx-auto px-6" id="top">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">

<div className="lg:col-span-7 flex flex-col gap-10 lg:gap-14">
<div className="space-y-3 lg:space-y-5">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-neutral-900">
              Peça sua avaliação <span className="text-neutral-500">agora mesmo</span>
</h1>
<p className="text-neutral-600 text-sm md:text-base max-w-xl font-light leading-relaxed">
              Quer executar sua <span className="font-medium">reforma geral</span> ou construção com a confiança de um profissional especializado?
              Ganhe tempo e economize dinheiro em um investimento tranquilo e organizado.
            </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 pt-2">
<a className="inline-flex items-center justify-center h-12 px-6 rounded-full text-sm font-medium tracking-wide transition-all shadow-sm bg-neutral-900 text-white hover:bg-neutral-800" href="https://empreiteiro15.wixsite.com/empreiteiro/formul-rio">
                Peça seu orçamento
              </a>
<a className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors" href="#servicos">
                Ver serviços
                <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
</a>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
<div className="rounded-2xl border border-neutral-200 bg-white p-5">
<div className="flex items-center gap-2 text-xs font-medium text-neutral-500">
<iconify-icon icon="solar:document-text-linear" style={{strokeWidth: '1.5'}} width="1.1rem"></iconify-icon>
                Conformidade
              </div>
<div className="mt-2 text-sm text-neutral-800 font-medium">ABNT NBR 16280:2014</div>
<p className="mt-1 text-xs text-neutral-500 leading-relaxed">Laudo de reformas e adequação quando aplicável.</p>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white p-5">
<div className="flex items-center gap-2 text-xs font-medium text-neutral-500">
<iconify-icon icon="solar:hammer-linear" style={{strokeWidth: '1.5'}} width="1.1rem"></iconify-icon>
                Execução
              </div>
<div className="mt-2 text-sm text-neutral-800 font-medium">Do alicerce ao acabamento</div>
<p className="mt-1 text-xs text-neutral-500 leading-relaxed">Obra organizada e acompanhamento com um só responsável.</p>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white p-5">
<div className="flex items-center gap-2 text-xs font-medium text-neutral-500">
<iconify-icon icon="solar:home-2-linear" style={{strokeWidth: '1.5'}} width="1.1rem"></iconify-icon>
                Atuação
              </div>
<div className="mt-2 text-sm text-neutral-800 font-medium">Residencial e comercial</div>
<p className="mt-1 text-xs text-neutral-500 leading-relaxed">Apartamentos, casas, sobrados e prédios.</p>
</div>
</div>
<div className="hidden md:block relative h-64 w-full rounded-[2rem] overflow-hidden mt-auto group shadow-sm border border-neutral-100 bg-neutral-100">
<img alt="Serviços de reforma" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://static.wixstatic.com/media/04bb7e_97e70b6a626048c7857e21ee956b3f71.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 to-transparent pointer-events-none"></div>
</div>
</div>

<div className="lg:col-span-5 relative min-h-[520px] rounded-[2rem] overflow-hidden shadow-xl group bg-neutral-100">
<img alt="Reforma e acabamentos" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://static.wixstatic.com/media/04bb7e_a5b1e61a576d44729e3ec8f369ac186b.jpg"/>
<div className="absolute top-6 left-6 max-w-[260px] rounded-2xl p-4 shadow-xl bg-white/95 backdrop-blur border border-white/30">
<p className="text-xs font-medium text-neutral-700 leading-relaxed">
              Peça já seu orçamento e tenha a garantia de estar resolvendo sua dor de cabeça com um só administrador.
            </p>
<a className="mt-4 inline-flex items-center justify-center w-full h-10 rounded-full text-xs font-medium tracking-wide bg-neutral-900 text-white hover:bg-neutral-800 transition-colors" href="https://empreiteiro15.wixsite.com/empreiteiro/formul-rio">
              Solicitar visita para avaliação
            </a>
</div>
<div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10">
<p className="text-sm max-w-md font-light leading-relaxed text-white/90">
              Disponibilidade para serviços em: <span className="font-medium">pintura</span> (textura, grafiato, massa corrida),
              <span className="font-medium">gesso</span> (sanca, drywall, forro), <span className="font-medium">elétrica</span>,
              telhados, portas e batentes, além de <span className="font-medium">pisos</span>, azulejos, pastilhas e porcelanatos.
            </p>
</div>
</div>
</div>
</div>
</header>

<div className="w-full h-72 md:h-[32rem] relative overflow-hidden bg-neutral-200">
<img alt="Galeria de reformas" className="w-full h-full object-cover grayscale opacity-90" src="https://static.wixstatic.com/media/04bb7e_456beaa25bfa4ed3ac949bdd72674afa.jpg"/>
<div className="absolute inset-0 bg-neutral-900/10"></div>
</div>

<section className="py-24 px-6 bg-white" id="servicos">
<div className="max-w-7xl mx-auto">
<div className="mb-14 md:flex justify-between items-end gap-8">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Nossos serviços incluem</h2>
<p className="text-neutral-500 max-w-2xl text-sm md:text-base font-light leading-relaxed">
            Construção civil com laudo de reformas e adequação à ABNT NBR 16280:2014. Do alicerce ao acabamento, com credibilidade e organização.
          </p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors" href="https://empreiteiro15.wixsite.com/empreiteiro/pagina2">
          Mais serviços
          <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="rounded-2xl border border-neutral-200 bg-white overflow-hidden shadow-sm">
<div className="h-48 bg-neutral-100">
<img alt="Gesso / sanca" className="w-full h-full object-cover" src="https://static.wixstatic.com/media/04bb7e_a5b1e61a576d44729e3ec8f369ac186b.jpg"/>
</div>
<div className="p-6">
<div className="flex items-center gap-2 text-xs font-medium text-neutral-500 uppercase tracking-wider">
<iconify-icon icon="solar:layers-linear" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
              Gesso
            </div>
<h3 className="mt-2 text-lg font-medium tracking-tight">Gesso / sanca</h3>
<p className="mt-2 text-sm text-neutral-500 font-light leading-relaxed">Sanca, drywall e forro, com acabamento limpo e alinhado.</p>
</div>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white overflow-hidden shadow-sm">
<div className="h-48 bg-neutral-100">
<img alt="Porcelanato / pastilha" className="w-full h-full object-cover" src="https://static.wixstatic.com/media/04bb7e_199e9ff5098a4231a7be9694a7b6b06f.jpg"/>
</div>
<div className="p-6">
<div className="flex items-center gap-2 text-xs font-medium text-neutral-500 uppercase tracking-wider">
<iconify-icon icon="solar:tile-linear" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
              Revestimentos
            </div>
<h3 className="mt-2 text-lg font-medium tracking-tight">Porcelanato / pastilha</h3>
<p className="mt-2 text-sm text-neutral-500 font-light leading-relaxed">Pisos, azulejos, pastilhas e porcelanatos com precisão.</p>
</div>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white overflow-hidden shadow-sm">
<div className="h-48 bg-neutral-100">
<img alt="Pintura / grafiato" className="w-full h-full object-cover" src="https://static.wixstatic.com/media/4b74809a2ac1f13b7f215e8c471af5d5.jpg"/>
</div>
<div className="p-6">
<div className="flex items-center gap-2 text-xs font-medium text-neutral-500 uppercase tracking-wider">
<iconify-icon icon="solar:paint-roller-linear" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
              Pintura
            </div>
<h3 className="mt-2 text-lg font-medium tracking-tight">Pintura / grafiato</h3>
<p className="mt-2 text-sm text-neutral-500 font-light leading-relaxed">Pintura em geral, textura, grafiato e massa corrida.</p>
</div>
</div>
</div>
<div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
<div className="lg:col-span-7 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
<h4 className="text-sm font-medium tracking-tight text-neutral-900">Também atendemos</h4>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-neutral-600 font-light">
<div className="flex items-start gap-3">
<iconify-icon className="text-neutral-700 mt-0.5" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}} width="1.1rem"></iconify-icon>
<span>Elétrica em geral (incluindo instalação de quadro de força)</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-neutral-700 mt-0.5" icon="solar:home-angle-linear" style={{strokeWidth: '1.5'}} width="1.1rem"></iconify-icon>
<span>Estruturação para telhados</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-neutral-700 mt-0.5" icon="solar:door-linear" style={{strokeWidth: '1.5'}} width="1.1rem"></iconify-icon>
<span>Colocação de portas e batentes</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-neutral-700 mt-0.5" icon="solar:buildings-2-linear" style={{strokeWidth: '1.5'}} width="1.1rem"></iconify-icon>
<span>Apartamentos, casas, sobrados e prédios residenciais ou comerciais</span>
</div>
</div>
</div>
<div className="lg:col-span-5 rounded-2xl border border-neutral-200 bg-white p-6">
<h4 className="text-sm font-medium tracking-tight text-neutral-900">Links principais</h4>
<div className="mt-4 space-y-3 text-sm">
<a className="flex items-center justify-between rounded-xl border border-neutral-200 px-4 py-3 hover:bg-neutral-50 transition-colors" href="https://empreiteiro15.wixsite.com/empreiteiro/galeria">
<span className="text-neutral-800 font-medium">Galeria</span>
<span className="text-neutral-500">/galeria</span>
</a>
<a className="flex items-center justify-between rounded-xl border border-neutral-200 px-4 py-3 hover:bg-neutral-50 transition-colors" href="https://empreiteiro15.wixsite.com/empreiteiro/pagina2">
<span className="text-neutral-800 font-medium">Serviços</span>
<span className="text-neutral-500">/pagina2</span>
</a>
<a className="flex items-center justify-between rounded-xl border border-neutral-200 px-4 py-3 hover:bg-neutral-50 transition-colors" href="https://empreiteiro15.wixsite.com/empreiteiro/sobre">
<span className="text-neutral-800 font-medium">Sobre</span>
<span className="text-neutral-500">/sobre</span>
</a>
<a className="flex items-center justify-between rounded-xl border border-neutral-200 px-4 py-3 hover:bg-neutral-50 transition-colors" href="https://empreiteiro15.wixsite.com/empreiteiro/pagina3">
<span className="text-neutral-800 font-medium">Depoimentos</span>
<span className="text-neutral-500">/pagina3</span>
</a>
<a className="flex items-center justify-between rounded-xl border border-neutral-200 px-4 py-3 hover:bg-neutral-50 transition-colors" href="https://empreiteiro15.wixsite.com/empreiteiro/formul-rio">
<span className="text-neutral-800 font-medium">Formulário / Orçamento</span>
<span className="text-neutral-500">/formul-rio</span>
</a>
<a className="flex items-center justify-between rounded-xl border border-neutral-200 px-4 py-3 hover:bg-neutral-50 transition-colors" href="https://empreiteiro15.wixsite.com/empreiteiro/mapa">
<span className="text-neutral-800 font-medium">Contato</span>
<span className="text-neutral-500">/mapa</span>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-50 border-t border-neutral-200" id="galeria">
<div className="max-w-7xl mx-auto">
<div className="flex items-end justify-between gap-6 mb-12">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-3">Orçamentos atendidos</h2>
<p className="text-neutral-500 text-sm md:text-base font-light max-w-2xl">
            Alguns exemplos de solicitações e tipos de reforma atendidos.
          </p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors" href="https://empreiteiro15.wixsite.com/empreiteiro/galeria">
          Abrir galeria completa
          <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<a className="group rounded-2xl border border-neutral-200 bg-white overflow-hidden shadow-sm" href="https://empreiteiro15.wixsite.com/empreiteiro/galeria">
<div className="h-56 bg-neutral-100 overflow-hidden">
<img alt="Reforma de cozinha e pintura de apto" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://static.wixstatic.com/media/04bb7e_456beaa25bfa4ed3ac949bdd72674afa.jpg"/>
</div>
<div className="p-6">
<h3 className="text-lg font-medium tracking-tight text-neutral-900">Reforma de cozinha e pintura de apto</h3>
<p className="mt-2 text-sm text-neutral-500 font-light">“pintura simples de paredes e portas, e troca de piso frio cozinha e área de serviço.”</p>
<div className="mt-4 text-xs font-medium text-neutral-600">Simone - São Caetano/sp</div>
</div>
</a>
<a className="group rounded-2xl border border-neutral-200 bg-white overflow-hidden shadow-sm" href="https://empreiteiro15.wixsite.com/empreiteiro/galeria">
<div className="h-56 bg-neutral-100 overflow-hidden">
<img alt="Reforma de paredes e estruturas" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://static.wixstatic.com/media/04bb7e_cb64a3804ec440b7842b907e33b9153c.jpg"/>
</div>
<div className="p-6">
<h3 className="text-lg font-medium tracking-tight text-neutral-900">Reforma de paredes e estruturas</h3>
<p className="mt-2 text-sm text-neutral-500 font-light">Levantar parede e reboque</p>
<div className="mt-4 text-xs font-medium text-neutral-600">Izilda - São Bernardo/sp</div>
</div>
</a>
<a className="group rounded-2xl border border-neutral-200 bg-white overflow-hidden shadow-sm" href="https://empreiteiro15.wixsite.com/empreiteiro/galeria">
<div className="h-56 bg-neutral-100 overflow-hidden">
<img alt="Garagem - reforma área externa" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://static.wixstatic.com/media/04bb7e_24aac5821d4349c488bff5d23e3cc5bc.jpg"/>
</div>
<div className="p-6">
<h3 className="text-lg font-medium tracking-tight text-neutral-900">Garagem — reforma área externa</h3>
<p className="mt-2 text-sm text-neutral-500 font-light">Refazer contrapiso, colocar piso na garagem</p>
<div className="mt-4 text-xs font-medium text-neutral-600">Marcus - São Mateus/sp</div>
</div>
</a>
</div>
<div className="mt-10 sm:hidden">
<a className="inline-flex w-full items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-medium tracking-wide bg-neutral-900 text-white" href="https://empreiteiro15.wixsite.com/empreiteiro/galeria">
          Abrir galeria completa
          <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-t border-neutral-200" id="sobre">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
<div className="lg:w-1/2 w-full">
<div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative bg-neutral-100 border border-neutral-200">
<img alt="Empreiteiro15 Obras" className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700" src="https://static.wixstatic.com/media/04bb7e_97e70b6a626048c7857e21ee956b3f71.jpg"/>
<div className="absolute bottom-5 left-5 backdrop-blur px-4 py-2 rounded-md border border-white/20 bg-white/90">
<p className="text-xs font-medium text-neutral-900">Empreiteiro15 Obras</p>
</div>
</div>
</div>
<div className="lg:w-1/2 w-full">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-neutral-900 mb-6">
          A forma <span className="text-neutral-400">simples</span> de fazer sua <span className="text-neutral-400">reforma</span>.
        </h2>
<div className="space-y-5 text-sm md:text-base leading-relaxed text-neutral-600 font-light max-w-xl">
<p>
            Você conhece um bom pintor, um pedreiro de confiança ou até um mestre de obras para executar seus projetos?
            Aqui você encontra um responsável para coordenar o trabalho e entregar com qualidade.
          </p>
<p>
            Atuamos com obras e reformas em apartamentos, casas, sobrados e prédios residenciais ou comerciais, com organização e transparência.
          </p>
</div>
<div className="mt-8 flex flex-wrap gap-3">
<div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-medium text-neutral-700">
<iconify-icon icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
            Um só administrador
          </div>
<div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-medium text-neutral-700">
<iconify-icon icon="solar:calendar-linear" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
            Planejamento e execução
          </div>
<div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-medium text-neutral-700">
<iconify-icon icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
            Segurança e viabilização
          </div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-900 text-white" id="depoimentos">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-2">Depoimentos</h2>
<p className="text-neutral-300 font-light max-w-2xl">Pedidos reais e exemplos de necessidades atendidas.</p>
</div>
<a className="text-sm border-b pb-1 transition-colors border-neutral-700 hover:border-white" href="https://empreiteiro15.wixsite.com/empreiteiro/pagina3">
          Ver mais
        </a>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
<p className="text-sm text-white/90 font-light leading-relaxed">
            “É um apto novo que vão ser entregue agora até dia 24/10/2015 Gostaria de um orçamento para fazer rebaixamento de teto com sancas, iluminação em todos os ambiente.Planta em anexo.”
          </p>
<div className="mt-4 text-xs text-neutral-400">Rafael, São Paulo, SP</div>
</div>
<div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
<p className="text-sm text-white/90 font-light leading-relaxed">
            “Eu estou enviando a planta da sala, tem aproximadamente 5,70 x 5,30 teto foi rebaixado e ainda está no gesso, precisando preparar para pintura. A altura das paredes é de 2,60 Aproximadamente de 90m² a 100m².”
          </p>
<div className="mt-4 text-xs text-neutral-400">Viviane, São Bernardo, SP</div>
</div>
<div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
<p className="text-sm text-white/90 font-light leading-relaxed">
            “Abertura de uma porta, fechamento de outra, abertura e reenquadramento de parede."
          </p>
<div className="mt-4 text-xs text-neutral-400">Eduardo, São Bernardo/SP</div>
</div>
</div>
</div>
</section>

<section className="py-28 px-6 text-center bg-neutral-50" id="contato">
<div className="max-w-3xl mx-auto">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-6 text-neutral-900">
        Pronto para começar sua reforma?
      </h2>
<p className="text-neutral-500 text-base md:text-lg mb-10 max-w-2xl mx-auto font-light">
        Para solicitação dos serviços, entre em contato através do formulário e nos informe seu endereço onde você gostaria de ter uma visita para uma avaliação sem compromisso.
      </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
<a className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-2xl text-sm font-medium tracking-wide transition-colors bg-neutral-900 text-white hover:bg-neutral-800" href="https://empreiteiro15.wixsite.com/empreiteiro/formul-rio">
          Abrir formulário de orçamento
          <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-2xl text-sm font-medium tracking-wide transition-colors bg-white text-neutral-900 border border-neutral-200 hover:bg-neutral-50" href="https://empreiteiro15.wixsite.com/empreiteiro/mapa">
          Página de contato
          <iconify-icon icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
</a>
</div>
<p className="mt-6 text-xs text-neutral-400">© 2015 por EMPREITEIRO15. Conteúdo e links preservados do site original.</p>
</div>
</section>

<footer className="border-t pt-16 pb-10 px-6 bg-white border-neutral-200">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
<div className="col-span-1 md:col-span-2">
<a className="text-lg font-semibold tracking-widest uppercase block mb-4" href="#inicio">Empreiteiro15</a>
<p className="text-neutral-500 text-sm max-w-md leading-relaxed font-light">
            Serviços de reforma residencial e construção civil com organização, transparência e execução do alicerce ao acabamento.
          </p>
</div>
<div>
<h4 className="font-medium text-sm mb-4 text-neutral-900">Páginas</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="transition-colors hover:text-neutral-900" href="https://empreiteiro15.wixsite.com/empreiteiro">Página inicial</a></li>
<li><a className="transition-colors hover:text-neutral-900" href="https://empreiteiro15.wixsite.com/empreiteiro/galeria">Galeria</a></li>
<li><a className="transition-colors hover:text-neutral-900" href="https://empreiteiro15.wixsite.com/empreiteiro/pagina2">Serviços</a></li>
<li><a className="transition-colors hover:text-neutral-900" href="https://empreiteiro15.wixsite.com/empreiteiro/sobre">Sobre</a></li>
<li><a className="transition-colors hover:text-neutral-900" href="https://empreiteiro15.wixsite.com/empreiteiro/pagina3">Depoimentos</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-sm mb-4 text-neutral-900">Contato</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li className="flex items-center gap-2">
<iconify-icon icon="solar:mailbox-linear" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
<a className="hover:text-neutral-900 transition-colors" href="https://empreiteiro15.wixsite.com/empreiteiro/formul-rio">Formulário</a>
</li>
<li className="flex items-center gap-2">
<iconify-icon icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
<a className="hover:text-neutral-900 transition-colors" href="https://empreiteiro15.wixsite.com/empreiteiro/mapa">Página de contato</a>
</li>
</ul>
</div>
</div>
<div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4 border-neutral-100">
<p className="text-xs text-neutral-400">© 2015 por EMPREITEIRO15.</p>
<div className="flex gap-4 text-xs text-neutral-400">
<a className="hover:text-neutral-900 transition-colors" href="https://empreiteiro15.wixsite.com/empreiteiro">Site original</a>
<span className="text-neutral-200">|</span>
<a className="hover:text-neutral-900 transition-colors" href="https://empreiteiro15.wixsite.com/empreiteiro/galeria">Galeria</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
