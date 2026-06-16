import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons({
            attrs: { "stroke-width": 1.5 }
        });

        function switchPage(pageId) {
            // Hide all sections
            const sections = document.querySelectorAll('.page-section');
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // Show target section
            const target = document.getElementById(pageId);
            if (target) {
                target.classList.add('active');
                window.scrollTo({ top: 0, behavior: 'smooth' });
                // Re-initialize icons just in case
                lucide.createIcons();
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-20 items-center">

<div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onclick="switchPage('home')">
<div className="bg-red-600 text-white p-2 rounded-lg">
<i className="w-6 h-6" data-lucide="flame"></i>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight text-slate-900 uppercase">Bombeiros Voluntários</span>
<span className="text-xs tracking-widest text-slate-500 uppercase">Vouzela</span>
</div>
</div>

<div className="hidden md:flex space-x-8 items-center">
<button className="text-sm font-medium text-slate-600 hover:text-red-600 transition-colors" onclick="switchPage('home')">Início</button>
<button className="text-sm font-medium text-slate-600 hover:text-red-600 transition-colors" onclick="switchPage('historia')">Quem Somos</button>
<button className="text-sm font-medium text-slate-600 hover:text-red-600 transition-colors" onclick="switchPage('servicos-geral')">Serviços</button>
<button className="text-sm font-medium text-slate-600 hover:text-red-600 transition-colors" onclick="switchPage('recrutamento')">Recrutamento</button>
</div>

<div className="flex items-center gap-4">
<a className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 transition-all shadow-sm ring-offset-2 focus:ring-2 ring-red-500" href="tel:112">
<i className="w-4 h-4" data-lucide="phone-alert"></i>
<span>EMERGÊNCIA 112</span>
<span className="absolute -top-1 -right-1 flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
</span>
</a>
<button className="md:hidden p-2 text-slate-500 hover:text-slate-900">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</nav>

<main className="flex-grow pt-20">

<div className="page-section active" id="home">

<section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-slate-900">
<div className="absolute inset-0 z-0">
<img alt="Bombeiros em ação" className="w-full h-full object-cover opacity-30" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium tracking-wide mb-6 uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                        Sempre prontos para servir
                    </div>
<h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
                        Proteção, socorro e dedicação <br className="hidden md:block"/> à comunidade de Vouzela.
                    </h1>
<p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                        Somos os Bombeiros Voluntários de Vouzela. Garantimos o socorro 24 horas por dia, 365 dias por ano, com profissionalismo e humanidade.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-900 text-sm font-medium rounded-md hover:bg-slate-100 transition-all shadow-lg" onclick="switchPage('recrutamento')">
                            Seja Voluntário
                            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 text-white text-sm font-medium rounded-md border border-slate-700 hover:bg-slate-700 transition-all" onclick="switchPage('historia')">
                            Apoiar a Corporação
                        </button>
</div>
</div>
</section>

<div className="bg-white border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
<div className="text-center">
<p className="text-3xl font-semibold text-slate-900 tracking-tight">24/7</p>
<p className="text-xs text-slate-500 uppercase tracking-wide mt-1">Disponibilidade</p>
</div>
<div className="text-center pl-4">
<p className="text-3xl font-semibold text-slate-900 tracking-tight">850+</p>
<p className="text-xs text-slate-500 uppercase tracking-wide mt-1">Ocorrências/Ano</p>
</div>
<div className="text-center pl-4">
<p className="text-3xl font-semibold text-slate-900 tracking-tight">65</p>
<p className="text-xs text-slate-500 uppercase tracking-wide mt-1">Voluntários Ativos</p>
</div>
<div className="text-center pl-4">
<p className="text-3xl font-semibold text-slate-900 tracking-tight">22</p>
<p className="text-xs text-slate-500 uppercase tracking-wide mt-1">Viaturas</p>
</div>
</div>
</div>
</div>

<section className="py-16 bg-white border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="md:w-1/3">
<div className="aspect-square bg-slate-100 rounded-xl overflow-hidden shadow-inner relative">
<img alt="Comandante" className="w-full h-full object-cover grayscale opacity-90" src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-slate-900/80 to-transparent">
<p className="text-white font-medium text-sm">O Comandante</p>
</div>
</div>
</div>
<div className="md:w-2/3">
<i className="w-10 h-10 text-red-600 mb-6 opacity-50" data-lucide="quote"></i>
<h2 className="text-2xl font-semibold text-slate-900 mb-6 tracking-tight">Compromisso com Vouzela</h2>
<p className="text-slate-600 leading-relaxed text-lg mb-6 italic">
                                "Liderar este corpo de bombeiros é servir uma comunidade resiliente. O nosso quartel é a casa de todos os Vouzelenses e a nossa missão vai além do socorro: é garantir que, nos momentos mais difíceis, ninguém está sozinho. Contem com o nosso esforço, sacrifício e dedicação total."
                            </p>
<div className="flex items-center gap-4">
<div className="h-px bg-slate-200 flex-grow max-w-[100px]"></div>
<span className="text-sm font-semibold text-slate-900 uppercase tracking-wide">Comando do Corpo de Bombeiros</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">As Nossas Áreas de Atuação</h2>
<p className="text-slate-600">Para além da emergência, prestamos diversos serviços de apoio à população do concelho de Vouzela.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-red-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer" onclick="switchPage('incendios')">
<div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
<i className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" data-lucide="flame"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Combate a Incêndios</h3>
<p className="text-sm text-slate-500 mb-4">Intervenção rápida em incêndios urbanos, industriais e florestais, integrados no DECIR.</p>
<button className="text-xs font-medium text-red-600 flex items-center gap-1 hover:gap-2 transition-all">Saber mais <i className="w-3 h-3" data-lucide="arrow-right"></i></button>
</div>
<div className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer" onclick="switchPage('pre-hospitalar')">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
<i className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" data-lucide="heart-pulse"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Socorro Pré-Hospitalar</h3>
<p className="text-sm text-slate-500 mb-4">Estabilização e transporte de vítimas em coordenação com o CODU (INEM).</p>
<button className="text-xs font-medium text-blue-600 flex items-center gap-1 hover:gap-2 transition-all">Saber mais <i className="w-3 h-3" data-lucide="arrow-right"></i></button>
</div>
<div className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-orange-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer" onclick="switchPage('desencarceramento')">
<div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors">
<i className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors" data-lucide="car"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Desencarceramento</h3>
<p className="text-sm text-slate-500 mb-4">Salvamento de vítimas presas em acidentes rodoviários com equipamento hidráulico.</p>
<button className="text-xs font-medium text-orange-600 flex items-center gap-1 hover:gap-2 transition-all">Saber mais <i className="w-3 h-3" data-lucide="arrow-right"></i></button>
</div>
<div className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-emerald-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer" onclick="switchPage('transporte')">
<div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
<i className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" data-lucide="ambulance"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Transporte de Doentes</h3>
<p className="text-sm text-slate-500 mb-4">Transporte não urgente para consultas, fisioterapia e hemodiálise com conforto.</p>
<button className="text-xs font-medium text-emerald-600 flex items-center gap-1 hover:gap-2 transition-all">Saber mais <i className="w-3 h-3" data-lucide="arrow-right"></i></button>
</div>
<div className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-indigo-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer" onclick="switchPage('prevencao')">
<div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
<i className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" data-lucide="users"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Prevenção e Sensibilização</h3>
<p className="text-sm text-slate-500 mb-4">Formações em escolas, empresas e simulacros para preparar a comunidade.</p>
<button className="text-xs font-medium text-indigo-600 flex items-center gap-1 hover:gap-2 transition-all">Saber mais <i className="w-3 h-3" data-lucide="arrow-right"></i></button>
</div>
<div className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-cyan-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer" onclick="switchPage('agua')">
<div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-600 transition-colors">
<i className="w-6 h-6 text-cyan-600 group-hover:text-white transition-colors" data-lucide="droplets"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Abastecimento de Água</h3>
<p className="text-sm text-slate-500 mb-4">Apoio a populações isoladas, enchimento de reservatórios e piscinas.</p>
<button className="text-xs font-medium text-cyan-600 flex items-center gap-1 hover:gap-2 transition-all">Saber mais <i className="w-3 h-3" data-lucide="arrow-right"></i></button>
</div>
</div>
<div className="mt-12 text-center">
<button className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-200 bg-white text-slate-900 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-all text-sm font-medium" onclick="switchPage('servicos-geral')">
                            Ver todos os detalhes dos serviços <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</section>

<section className="py-20 bg-white border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-10">
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Últimas Atualizações</h2>
<p className="text-slate-500 mt-2">A vida do quartel e os avisos à população.</p>
</div>
<a className="text-sm font-medium text-red-600 hover:text-red-700 flex items-center gap-1" href="#">Ver arquivo <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-100 hover:shadow-md transition-all">
<div className="h-48 bg-slate-200 w-full relative">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">Operacional</div>
</div>
<div className="p-6">
<span className="text-xs text-slate-400 font-medium">12 Out, 2023</span>
<h3 className="font-semibold text-slate-900 mt-2 mb-3">Reforço do dispositivo para época de incêndios</h3>
<p className="text-sm text-slate-600 line-clamp-2">O corpo de bombeiros recebeu duas novas viaturas de combate para reforçar o dispositivo durante o verão.</p>
</div>
</div>
<div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-100 hover:shadow-md transition-all">
<div className="h-48 bg-slate-200 w-full relative">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">Formação</div>
</div>
<div className="p-6">
<span className="text-xs text-slate-400 font-medium">05 Out, 2023</span>
<h3 className="font-semibold text-slate-900 mt-2 mb-3">Curso de TAS concluído com sucesso</h3>
<p className="text-sm text-slate-600 line-clamp-2">Dez novos operacionais terminaram a formação de Tripulante de Ambulância de Socorro.</p>
</div>
</div>
<div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-100 hover:shadow-md transition-all">
<div className="h-48 bg-slate-200 w-full relative">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">Comunidade</div>
</div>
<div className="p-6">
<span className="text-xs text-slate-400 font-medium">28 Set, 2023</span>
<h3 className="font-semibold text-slate-900 mt-2 mb-3">Rastreio de saúde na Praça da República</h3>
<p className="text-sm text-slate-600 line-clamp-2">Estivemos presentes na feira mensal para realizar medições de tensão arterial e glicémia.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">Uma história de coragem no coração de Vouzela</h2>
<p className="text-slate-600 leading-relaxed mb-4">
                                Fundados com o propósito nobre de salvaguardar vidas e bens, os Bombeiros Voluntários de Vouzela são um pilar fundamental da segurança no distrito de Viseu. A nossa história é feita de pessoas altruístas que deram o seu melhor pela causa.
                            </p>
<button className="text-sm font-medium text-red-600 hover:text-red-700 flex items-center gap-1 hover:gap-2 transition-all" onclick="switchPage('historia')">Ler história completa <i className="w-3 h-3" data-lucide="arrow-right"></i></button>
</div>
<div className="relative">
<div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-slate-200">
<img alt="Equipa de Bombeiros" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
</div>
</div>
</section>

<div className="py-12 bg-white border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-8">Apoio Institucional</p>
<div className="flex justify-center items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500 flex-wrap">
<div className="font-bold text-xl text-slate-800">CÂMARA MUNICIPAL</div>
<div className="font-bold text-xl text-slate-800">PROTEÇÃO CIVIL</div>
<div className="font-bold text-xl text-slate-800">INEM</div>
<div className="font-bold text-xl text-slate-800">LIGA DOS BOMBEIROS</div>
</div>
</div>
</div>

<section className="py-24 bg-slate-900 text-white overflow-hidden relative">
<div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/10 blur-3xl transform translate-x-1/2"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Junte-se a nós.</h2>
<p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                Ser bombeiro voluntário é abraçar um estilo de vida de entrega e camaradagem. Oferecemos formação certificada e benefícios sociais.
                            </p>
<button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 transition-all shadow-lg hover:shadow-red-900/20" onclick="switchPage('recrutamento')">
                                Saber mais sobre Recrutamento
                            </button>
</div>
<div className="relative rounded-lg overflow-hidden border border-slate-700">
<img alt="Bombeiro de costas" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
</div>
</div>
</section>
</div>

<div className="page-section" id="servicos-geral">
<div className="bg-slate-900 py-16 lg:py-24 relative overflow-hidden border-b border-slate-800">
<div className="absolute inset-0 bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg')] bg-cover bg-center opacity-10"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<button className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors" onclick="switchPage('home')">
<i className="w-4 h-4" data-lucide="arrow-left"></i> Voltar
                    </button>
<h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">Os Nossos Serviços</h1>
<p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
                        Conheça em detalhe todas as valências operacionais do corpo de bombeiros, desde a emergência pré-hospitalar ao apoio logístico à comunidade.
                    </p>
</div>
</div>
<section className="py-20 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full hover:shadow-lg transition-all duration-300">
<div className="h-48 bg-slate-200 relative">
<div className="absolute inset-0 bg-red-600/10"></div>
<div className="absolute bottom-4 left-4 bg-white p-2 rounded-lg shadow-sm">
<i className="w-6 h-6 text-red-600" data-lucide="flame"></i>
</div>
</div>
<div className="p-8 flex-1 flex flex-col">
<h3 className="text-xl font-semibold text-slate-900 mb-3">Combate a Incêndios</h3>
<p className="text-slate-600 text-sm mb-6 flex-1">Resposta operacional a incêndios rurais, urbanos e industriais com equipas especializadas.</p>
<button className="w-full py-2.5 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 transition-all flex justify-center items-center gap-2" onclick="switchPage('incendios')">
                                    Ver Detalhes <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full hover:shadow-lg transition-all duration-300">
<div className="h-48 bg-slate-200 relative">
<div className="absolute inset-0 bg-blue-600/10"></div>
<div className="absolute bottom-4 left-4 bg-white p-2 rounded-lg shadow-sm">
<i className="w-6 h-6 text-blue-600" data-lucide="heart-pulse"></i>
</div>
</div>
<div className="p-8 flex-1 flex flex-col">
<h3 className="text-xl font-semibold text-slate-900 mb-3">Pré-Hospitalar</h3>
<p className="text-slate-600 text-sm mb-6 flex-1">Emergência médica e estabilização de vítimas em articulação com o INEM.</p>
<button className="w-full py-2.5 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 transition-all flex justify-center items-center gap-2" onclick="switchPage('pre-hospitalar')">
                                    Ver Detalhes <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full hover:shadow-lg transition-all duration-300">
<div className="h-48 bg-slate-200 relative">
<div className="absolute inset-0 bg-orange-600/10"></div>
<div className="absolute bottom-4 left-4 bg-white p-2 rounded-lg shadow-sm">
<i className="w-6 h-6 text-orange-600" data-lucide="car"></i>
</div>
</div>
<div className="p-8 flex-1 flex flex-col">
<h3 className="text-xl font-semibold text-slate-900 mb-3">Desencarceramento</h3>
<p className="text-slate-600 text-sm mb-6 flex-1">Salvamento rodoviário complexo com uso de equipamento hidráulico de alta performance.</p>
<button className="w-full py-2.5 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 transition-all flex justify-center items-center gap-2" onclick="switchPage('desencarceramento')">
                                    Ver Detalhes <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full hover:shadow-lg transition-all duration-300">
<div className="h-48 bg-slate-200 relative">
<div className="absolute inset-0 bg-emerald-600/10"></div>
<div className="absolute bottom-4 left-4 bg-white p-2 rounded-lg shadow-sm">
<i className="w-6 h-6 text-emerald-600" data-lucide="ambulance"></i>
</div>
</div>
<div className="p-8 flex-1 flex flex-col">
<h3 className="text-xl font-semibold text-slate-900 mb-3">Transporte de Doentes</h3>
<p className="text-slate-600 text-sm mb-6 flex-1">Transporte não urgente para consultas, tratamentos e altas hospitalares.</p>
<button className="w-full py-2.5 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 transition-all flex justify-center items-center gap-2" onclick="switchPage('transporte')">
                                    Ver Detalhes <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full hover:shadow-lg transition-all duration-300">
<div className="h-48 bg-slate-200 relative">
<div className="absolute inset-0 bg-indigo-600/10"></div>
<div className="absolute bottom-4 left-4 bg-white p-2 rounded-lg shadow-sm">
<i className="w-6 h-6 text-indigo-600" data-lucide="users"></i>
</div>
</div>
<div className="p-8 flex-1 flex flex-col">
<h3 className="text-xl font-semibold text-slate-900 mb-3">Formação e Prevenção</h3>
<p className="text-slate-600 text-sm mb-6 flex-1">Ações de sensibilização, simulacros e formação à comunidade e empresas.</p>
<button className="w-full py-2.5 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 transition-all flex justify-center items-center gap-2" onclick="switchPage('prevencao')">
                                    Ver Detalhes <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full hover:shadow-lg transition-all duration-300">
<div className="h-48 bg-slate-200 relative">
<div className="absolute inset-0 bg-cyan-600/10"></div>
<div className="absolute bottom-4 left-4 bg-white p-2 rounded-lg shadow-sm">
<i className="w-6 h-6 text-cyan-600" data-lucide="droplets"></i>
</div>
</div>
<div className="p-8 flex-1 flex flex-col">
<h3 className="text-xl font-semibold text-slate-900 mb-3">Abastecimento de Água</h3>
<p className="text-slate-600 text-sm mb-6 flex-1">Fornecimento de água potável ou industrial a populações e empresas.</p>
<button className="w-full py-2.5 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 transition-all flex justify-center items-center gap-2" onclick="switchPage('agua')">
                                    Ver Detalhes <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-section" id="recrutamento">
<div className="bg-slate-900 py-16 lg:py-24 relative overflow-hidden">
<div className="absolute top-0 right-0 w-1/2 h-full bg-red-600/10 blur-3xl transform translate-x-1/4"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<button className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors" onclick="switchPage('home')">
<i className="w-4 h-4" data-lucide="arrow-left"></i> Voltar
                    </button>
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium tracking-wide mb-6 uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                                Inscrições Abertas
                            </div>
<h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">Torna-te um Herói <br/>da Comunidade</h1>
<p className="text-lg text-slate-300 leading-relaxed mb-8">
                                O voluntariado é a força motriz desta casa. Procuramos pessoas com espírito de entrega, coragem e vontade de aprender. Junta-te à nossa família e faz a diferença na vida dos outros.
                            </p>
<a className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 transition-all shadow-lg hover:shadow-red-900/20" href="#formulario-recrutamento">
                                Candidatar-me Agora
                            </a>
</div>
<div className="relative">
<div className="aspect-square rounded-2xl overflow-hidden border border-slate-700 bg-slate-800">
<img alt="Recruta Bombeiro" className="w-full h-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
</div>
</div>
</div>
</div>

<section className="py-20 bg-white border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">O que é preciso?</h2>
<p className="text-slate-600 mt-2">Requisitos básicos para ingresso na carreira de bombeiro voluntário.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="p-8 bg-slate-50 rounded-xl border border-slate-100 text-center">
<i className="w-10 h-10 text-slate-900 mx-auto mb-4" data-lucide="calendar-check"></i>
<h3 className="font-semibold text-slate-900 mb-2">Idade</h3>
<p className="text-sm text-slate-600">Ter idade compreendida entre os 18 e os 45 anos.</p>
</div>
<div className="p-8 bg-slate-50 rounded-xl border border-slate-100 text-center">
<i className="w-10 h-10 text-slate-900 mx-auto mb-4" data-lucide="graduation-cap"></i>
<h3 className="font-semibold text-slate-900 mb-2">Escolaridade</h3>
<p className="text-sm text-slate-600">Escolaridade mínima obrigatória cumprida (consoante a idade).</p>
</div>
<div className="p-8 bg-slate-50 rounded-xl border border-slate-100 text-center">
<i className="w-10 h-10 text-slate-900 mx-auto mb-4" data-lucide="activity"></i>
<h3 className="font-semibold text-slate-900 mb-2">Aptidão</h3>
<p className="text-sm text-slate-600">Robustez física e psicológica para o exercício da função.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row gap-12">
<div className="lg:w-1/3">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">Benefícios do Voluntariado</h2>
<p className="text-slate-600 leading-relaxed mb-6">
                                 Embora o voluntariado seja gratuito, a lei e a associação preveem diversos benefícios sociais como reconhecimento pelo serviço prestado à comunidade.
                             </p>
<div className="p-6 bg-red-50 rounded-xl border border-red-100">
<p className="text-sm text-red-800 font-medium">
                                     "Não buscamos recompensas, mas valorizamos quem cuida de nós."
                                 </p>
</div>
</div>
<div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
<div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
<h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2"><i className="w-4 h-4 text-red-600" data-lucide="book-open"></i> Educação</h4>
<p className="text-sm text-slate-600">Reembolso de propinas e taxas de inscrição no ensino superior e prioridade em creches.</p>
</div>
<div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
<h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2"><i className="w-4 h-4 text-red-600" data-lucide="heart"></i> Saúde</h4>
<p className="text-sm text-slate-600">Isenção de taxas moderadoras e seguro de acidentes pessoais.</p>
</div>
<div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
<h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2"><i className="w-4 h-4 text-red-600" data-lucide="clock"></i> Fiscalidade</h4>
<p className="text-sm text-slate-600">Benefícios em sede de IRS e isenção de IMI (sob condições específicas).</p>
</div>
<div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
<h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2"><i className="w-4 h-4 text-red-600" data-lucide="shield"></i> Social</h4>
<p className="text-sm text-slate-600">Contagem de tempo de serviço bonificado para a reforma.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-b border-slate-200">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-12 text-center">O Caminho até à Farda</h2>
<div className="relative pl-8 border-l-2 border-slate-200 space-y-12">
<div className="relative">
<div className="absolute -left-[41px] top-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
<h4 className="text-xl font-bold text-slate-900 mb-2">Inscrição</h4>
<p className="text-slate-600">Preenchimento do formulário e entrega de documentos no quartel.</p>
</div>
<div className="relative">
<div className="absolute -left-[41px] top-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
<h4 className="text-xl font-bold text-slate-900 mb-2">Admissão como Estagiário</h4>
<p className="text-slate-600">Após testes médicos e físicos, ingressa como Estagiário.</p>
</div>
<div className="relative">
<div className="absolute -left-[41px] top-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
<h4 className="text-xl font-bold text-slate-900 mb-2">Formação Inicial (250h)</h4>
<p className="text-slate-600">Aulas teóricas e práticas sobre combate a incêndios, socorrismo e desencarceramento.</p>
</div>
<div className="relative">
<div className="absolute -left-[41px] top-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
<h4 className="text-xl font-bold text-slate-900 mb-2">Juramento de Bandeira</h4>
<p className="text-slate-600">Conclusão do estágio e ingresso na carreira de Bombeiro Voluntário.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="formulario-recrutamento">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-lg">
<div className="text-center mb-8">
<h3 className="text-2xl font-semibold text-slate-900">Pré-Inscrição</h3>
<p className="text-sm text-slate-500 mt-2">Deixe os seus dados. Entraremos em contacto para agendar uma entrevista.</p>
</div>
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Nome Completo</label>
<input className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all outline-none" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Data de Nascimento</label>
<input className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all outline-none" type="date"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
<input className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all outline-none" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Telefone</label>
<input className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all outline-none" type="tel"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Motivação (Opcional)</label>
<textarea className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all outline-none resize-none" placeholder="Porque quer ser bombeiro?" rows="3"></textarea>
</div>
<button className="w-full py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-all" type="button">Enviar Pré-Candidatura</button>
</form>
</div>
</div>
</section>
</div>

<div className="page-section" id="incendios">
<div className="bg-slate-900 py-16 lg:py-24 relative overflow-hidden">
<div className="absolute inset-0 opacity-20 bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg')] bg-cover bg-center"></div>
<div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900"></div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<button className="mb-8 inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors" onclick="switchPage('servicos-geral')">
<i className="w-4 h-4" data-lucide="arrow-left"></i> Voltar a Serviços
                    </button>
<div className="flex items-center gap-3 mb-4">
<div className="bg-red-600 text-white p-2 rounded-lg inline-flex">
<i className="w-6 h-6" data-lucide="flame"></i>
</div>
<span className="text-red-500 font-medium tracking-wide uppercase text-xs">Área Operacional</span>
</div>
<h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">Combate a Incêndios</h1>
<p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
                        A nossa missão principal. Atuamos na prevenção, deteção e combate a incêndios rurais e urbanos, integrando o Dispositivo Especial de Combate a Incêndios Rurais (DECIR).
                    </p>
</div>
</div>

<div className="bg-white py-20 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-3 gap-12">
<div className="lg:col-span-2 space-y-8">
<div>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-4">Intervenção Rural e Urbana</h2>
<p className="text-slate-600 leading-relaxed mb-4">
                                    O concelho de Vouzela apresenta uma vasta mancha florestal que exige vigilância constante. As nossas equipas de combate a incêndios florestais estão preparadas para atuar em terrenos difíceis.
                                </p>
</div>
<div className="grid sm:grid-cols-2 gap-6">
<div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
<h3 className="font-medium text-slate-900 mb-2 flex items-center gap-2">
<i className="w-4 h-4 text-red-600" data-lucide="truck"></i> Meios Terrestres
                                    </h3>
<ul className="text-sm text-slate-600 space-y-2">
<li>• VFCI (Veículo Florestal de Combate)</li>
<li>• VUCI (Veículo Urbano de Combate)</li>
<li>• VTT (Veículo Tanque Tático)</li>
</ul>
</div>
<div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
<h3 className="font-medium text-slate-900 mb-2 flex items-center gap-2">
<i className="w-4 h-4 text-red-600" data-lucide="users"></i> Equipas
                                    </h3>
<ul className="text-sm text-slate-600 space-y-2">
<li>• EIP (Equipa de Intervenção Permanente)</li>
<li>• ECIN (Equipa de Combate a Incêndios)</li>
<li>• ELAC (Equipa Logística)</li>
</ul>
</div>
</div>
</div>
<div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 h-fit">
<h3 className="font-semibold text-slate-900 mb-6">Em caso de Incêndio</h3>
<ul className="space-y-4 text-sm text-slate-600">
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-red-600 mt-0.5" data-lucide="check"></i>
<span>Ligue imediatamente 112.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-red-600 mt-0.5" data-lucide="check"></i>
<span>Indique a localização exata.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-red-600 mt-0.5" data-lucide="check"></i>
<span>Não corra riscos desnecessários.</span>
</li>
</ul>
</div>
</div>
</div>
</div>

<section className="py-20 bg-slate-50 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="md:w-1/2">
<img alt="Drone View" className="rounded-xl shadow-lg" src="https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
<div className="md:w-1/2">
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight mb-4">Tecnologia ao Serviço da Proteção</h3>
<p className="text-slate-600 leading-relaxed mb-6">
                                A modernização é essencial para um combate eficaz. Utilizamos ferramentas tecnológicas que nos permitem uma análise em tempo real do teatro de operações.
                            </p>
<div className="space-y-4">
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600">
<i className="w-5 h-5" data-lucide="crosshair"></i>
</div>
<div>
<h4 className="font-medium text-slate-900">Georreferenciação</h4>
<p className="text-sm text-slate-500">Mapeamento digital de pontos de água e caminhos florestais para acesso rápido.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600">
<i className="w-5 h-5" data-lucide="radio"></i>
</div>
<div>
<h4 className="font-medium text-slate-900">Comunicações Digitais (SIRESP)</h4>
<p className="text-sm text-slate-500">Rede segura e redundante que garante o contacto permanente entre as equipas no terreno e o comando.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-section" id="pre-hospitalar">
<div className="bg-white py-16 lg:py-24 relative overflow-hidden border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<button className="mb-8 inline-flex items-center gap-2 text-sm text-slate-500 hover:text-red-600 transition-colors" onclick="switchPage('servicos-geral')">
<i className="w-4 h-4" data-lucide="arrow-left"></i> Voltar a Serviços
                    </button>
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="flex items-center gap-3 mb-4">
<div className="bg-blue-600 text-white p-2 rounded-lg inline-flex">
<i className="w-6 h-6" data-lucide="heart-pulse"></i>
</div>
<span className="text-blue-600 font-medium tracking-wide uppercase text-xs">Emergência Médica</span>
</div>
<h1 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6">Socorro Pré-Hospitalar</h1>
<p className="text-lg text-slate-600 leading-relaxed mb-8">
                                A nossa resposta à emergência médica é imediata e qualificada. Trabalhamos em articulação direta com o INEM/CODU para garantir que o suporte de vida chega a quem precisa.
                            </p>
</div>
<div className="relative">
<div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-slate-100">
<img alt="Ambulância Interior" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
</div>
</div>
</div>
</div>

<section className="py-20 bg-slate-50 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight mb-12 text-center">Como funciona o socorro</h3>
<div className="relative">
<div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-200 hidden md:block"></div>
<div className="space-y-12">
<div className="relative flex flex-col md:flex-row items-center justify-between">
<div className="md:w-5/12 text-right pr-8 hidden md:block">
<h4 className="font-bold text-slate-900 text-lg">Chamada 112</h4>
<p className="text-sm text-slate-600 mt-1">O cidadão liga para o número europeu de emergência.</p>
</div>
<div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white z-10 shadow-lg shadow-blue-200">
<span className="font-bold">1</span>
</div>
<div className="md:w-5/12 pl-8">
<h4 className="font-bold text-slate-900 text-lg md:hidden">Chamada 112</h4>
<p className="text-sm text-slate-600 mt-1 md:hidden">O cidadão liga para o número europeu de emergência.</p>
</div>
</div>
<div className="relative flex flex-col md:flex-row items-center justify-between">
<div className="md:w-5/12 text-right pr-8"></div>
<div className="flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-blue-600 text-blue-600 z-10">
<span className="font-bold">2</span>
</div>
<div className="md:w-5/12 pl-8 text-left">
<h4 className="font-bold text-slate-900 text-lg">Triagem CODU</h4>
<p className="text-sm text-slate-600 mt-1">O Centro de Orientação de Doentes Urgentes avalia e aciona os meios.</p>
</div>
</div>
<div className="relative flex flex-col md:flex-row items-center justify-between">
<div className="md:w-5/12 text-right pr-8 hidden md:block">
<h4 className="font-bold text-slate-900 text-lg">Saída de Meios</h4>
<p className="text-sm text-slate-600 mt-1">Os Bombeiros de Vouzela recebem o alerta e a ambulância sai em minutos.</p>
</div>
<div className="flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-blue-600 text-blue-600 z-10">
<span className="font-bold">3</span>
</div>
<div className="md:w-5/12 pl-8">
<h4 className="font-bold text-slate-900 text-lg md:hidden">Saída de Meios</h4>
<p className="text-sm text-slate-600 mt-1 md:hidden">Os Bombeiros de Vouzela recebem o alerta e a ambulância sai em minutos.</p>
</div>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-section" id="desencarceramento">
<div className="bg-slate-900 text-white py-16 lg:py-24 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<button className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors" onclick="switchPage('servicos-geral')">
<i className="w-4 h-4" data-lucide="arrow-left"></i> Voltar a Serviços
                    </button>
<div className="flex flex-col lg:flex-row gap-12 lg:items-center">
<div className="lg:w-1/2">
<div className="flex items-center gap-3 mb-4">
<div className="bg-orange-600 text-white p-2 rounded-lg inline-flex">
<i className="w-6 h-6" data-lucide="car"></i>
</div>
<span className="text-orange-500 font-medium tracking-wide uppercase text-xs">Salvamento Rodoviário</span>
</div>
<h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Desencarceramento</h1>
<p className="text-lg text-slate-300 leading-relaxed mb-6">
                                Quando os segundos contam. O desencarceramento exige precisão cirúrgica e força bruta controlada para libertar vítimas presas em destroços.
                            </p>
</div>
</div>
</div>
</div>
<div className="py-20 bg-white border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-12">
<div>
<h3 className="text-2xl font-semibold text-slate-900 mb-6">Tecnologia de Ponta</h3>
<p className="text-slate-600 mb-6">Dispomos de Veículos de Salvamento Desencarceramento (VSAT) equipados com material hidráulico de última geração.</p>
<ul className="space-y-4">
<li className="flex items-center gap-3 p-3 bg-slate-50 rounded border border-slate-100">
<i className="w-5 h-5 text-orange-500" data-lucide="scissors"></i>
<span className="text-sm font-medium text-slate-700">Tesouras de Corte de Alta Pressão</span>
</li>
<li className="flex items-center gap-3 p-3 bg-slate-50 rounded border border-slate-100">
<i className="w-5 h-5 text-orange-500" data-lucide="maximize-2"></i>
<span className="text-sm font-medium text-slate-700">Expansores e Macacos Hidráulicos</span>
</li>
</ul>
</div>
<div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
<h3 className="text-xl font-semibold text-slate-900 mb-4">Treino Operacional</h3>
<p className="text-sm text-slate-600 mb-6">As nossas equipas realizam treinos semanais para manter a proficiência técnica.</p>
<div className="grid grid-cols-2 gap-4">
<div className="bg-white p-4 rounded text-center border border-slate-100">
<span className="block text-2xl font-bold text-slate-900">50+</span>
<span className="text-xs text-slate-500 uppercase">Horas Treino/Ano</span>
</div>
<div className="bg-white p-4 rounded text-center border border-slate-100">
<span className="block text-2xl font-bold text-slate-900">100%</span>
<span className="text-xs text-slate-500 uppercase">Certificados</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="page-section" id="transporte">
<div className="bg-emerald-50 py-16 lg:py-24 border-b border-emerald-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<button className="mb-8 inline-flex items-center gap-2 text-sm text-emerald-700 hover:text-emerald-900 transition-colors" onclick="switchPage('servicos-geral')">
<i className="w-4 h-4" data-lucide="arrow-left"></i> Voltar a Serviços
                    </button>
<div className="flex items-center gap-3 mb-4">
<div className="bg-emerald-600 text-white p-2 rounded-lg inline-flex">
<i className="w-6 h-6" data-lucide="ambulance"></i>
</div>
<span className="text-emerald-700 font-medium tracking-wide uppercase text-xs">Serviço à Comunidade</span>
</div>
<h1 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6">Transporte de Doentes</h1>
<p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
                        Garantimos o transporte de doentes não urgentes com todo o conforto e segurança. A nossa frota de ambulâncias ABTD e VDTD percorre milhares de quilómetros anualmente para servir a população.
                    </p>
</div>
</div>

<div className="bg-white py-20 border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-3 gap-8">
<div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm">
<div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mb-4 text-emerald-600">
<i className="w-5 h-5" data-lucide="calendar-check"></i>
</div>
<h3 className="font-medium text-lg text-slate-900 mb-2">Consultas e Exames</h3>
<p className="text-sm text-slate-600">Transporte programado para unidades hospitalares em Viseu, Coimbra, Porto e Lisboa.</p>
</div>
<div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm">
<div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mb-4 text-emerald-600">
<i className="w-5 h-5" data-lucide="activity"></i>
</div>
<h3 className="font-medium text-lg text-slate-900 mb-2">Fisioterapia e Diálise</h3>
<p className="text-sm text-slate-600">Transporte regular para tratamentos continuados, com equipas atenciosas e pontuais.</p>
</div>
<div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm">
<div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mb-4 text-emerald-600">
<i className="w-5 h-5" data-lucide="home"></i>
</div>
<h3 className="font-medium text-lg text-slate-900 mb-2">Altas Hospitalares</h3>
<p className="text-sm text-slate-600">Regresso ao domicílio após internamento, garantindo o acompanhamento até à cama do doente.</p>
</div>
</div>
</div>
</div>
</div>

<div className="page-section" id="prevencao">
<div className="bg-slate-900 text-white py-16 lg:py-24 overflow-hidden relative">
<div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-600/20 blur-3xl transform translate-x-1/3"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<button className="mb-8 inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors" onclick="switchPage('servicos-geral')">
<i className="w-4 h-4" data-lucide="arrow-left"></i> Voltar a Serviços
                    </button>
<div className="flex items-center gap-3 mb-4">
<div className="bg-indigo-600 text-white p-2 rounded-lg inline-flex">
<i className="w-6 h-6" data-lucide="users"></i>
</div>
<span className="text-indigo-400 font-medium tracking-wide uppercase text-xs">Cidadania</span>
</div>
<h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Prevenção e Sensibilização</h1>
<p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
                        Acreditamos que a melhor forma de combater o perigo é evitá-lo. Desenvolvemos ações junto da comunidade escolar, empresas e lares de idosos para criar uma cultura de segurança.
                    </p>
</div>
</div>

<div className="bg-white py-20 border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12">
<div className="space-y-8">
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">1</div>
</div>
<div>
<h3 className="text-lg font-medium text-slate-900">Escolas e Infantários</h3>
<p className="text-slate-600 mt-2 text-sm">Realização de simulacros de evacuação e ações de sensibilização sobre o uso do número 112 e prevenção de incêndios.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">2</div>
</div>
<div>
<h3 className="text-lg font-medium text-slate-900">Formação a Empresas</h3>
<p className="text-slate-600 mt-2 text-sm">Cursos de Primeiros Socorros e Manuseamento de Extintores para equipas de segurança de empresas locais.</p>
</div>
</div>
</div>
<div className="bg-indigo-50 rounded-2xl p-8 border border-indigo-100">
<h3 className="font-semibold text-slate-900 mb-4">Quer agendar uma ação?</h3>
<p className="text-sm text-slate-600 mb-6">Contacte a secretaria do comando para agendar visitas de estudo ou formações.</p>
<a className="inline-flex items-center justify-center px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 transition-colors w-full" href="mailto:geral@bvvouzela.pt">
                                Contactar Comando
                            </a>
</div>
</div>
</div>
</div>
</div>

<div className="page-section" id="agua">
<div className="bg-cyan-50 py-16 lg:py-24 border-b border-cyan-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<button className="mb-8 inline-flex items-center gap-2 text-sm text-cyan-700 hover:text-cyan-900 transition-colors" onclick="switchPage('servicos-geral')">
<i className="w-4 h-4" data-lucide="arrow-left"></i> Voltar a Serviços
                    </button>
<div className="flex items-center gap-3 mb-4">
<div className="bg-cyan-600 text-white p-2 rounded-lg inline-flex">
<i className="w-6 h-6" data-lucide="droplets"></i>
</div>
<span className="text-cyan-700 font-medium tracking-wide uppercase text-xs">Apoio Logístico</span>
</div>
<h1 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6">Abastecimento de Água</h1>
<p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
                        Em tempos de seca ou necessidade, somos a linha de apoio. Asseguramos o fornecimento de água a populações isoladas e serviços diversos com os nossos Veículos Tanque.
                    </p>
</div>
</div>
<div className="bg-white py-20 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-12">
<div>
<h3 className="text-xl font-semibold text-slate-900 mb-4">Serviços Disponíveis</h3>
<ul className="space-y-4">
<li className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100">
<i className="w-5 h-5 text-cyan-500" data-lucide="check-circle"></i>
<span className="text-slate-700 font-medium">Abastecimento de reservatórios públicos</span>
</li>
<li className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100">
<i className="w-5 h-5 text-cyan-500" data-lucide="check-circle"></i>
<span className="text-slate-700 font-medium">Enchimento de piscinas (Serviço pago)</span>
</li>
<li className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100">
<i className="w-5 h-5 text-cyan-500" data-lucide="check-circle"></i>
<span className="text-slate-700 font-medium">Lavagem de pavimentos e infraestruturas</span>
</li>
</ul>
</div>
<div className="bg-cyan-900 text-white p-8 rounded-2xl flex flex-col justify-center items-center text-center">
<i className="w-12 h-12 mb-4 text-cyan-400" data-lucide="truck"></i>
<h3 className="text-2xl font-semibold mb-2">VTT - Grande Capacidade</h3>
<p className="text-cyan-100 mb-6">Dispomos de veículos tanque com capacidade superior a 10.000 litros para resposta rápida e eficiente.</p>
<span className="text-xs uppercase tracking-widest text-cyan-400">Capacidade Operacional</span>
</div>
</div>
</div>
</div>
</div>

<div className="page-section" id="historia">
<div className="bg-white py-16 lg:py-24 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<button className="mb-8 inline-flex items-center gap-2 text-sm text-slate-500 hover:text-red-600 transition-colors" onclick="switchPage('home')">
<i className="w-4 h-4" data-lucide="arrow-left"></i> Voltar
                    </button>
<div className="max-w-3xl">
<h1 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6">A Nossa História</h1>
<p className="text-lg text-slate-600 leading-relaxed">
                            Desde a fundação até aos dias de hoje, a Associação Humanitária dos Bombeiros Voluntários de Vouzela tem sido construída por gerações de homens e mulheres dedicados ao próximo.
                        </p>
</div>
</div>
</div>

<div className="bg-white py-20">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="relative border-l-2 border-slate-200 ml-4 space-y-12">
<div className="relative pl-8">
<div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-red-600 border-4 border-white"></div>
<span className="text-xs font-bold text-red-600 tracking-wider uppercase mb-1 block">Fundação</span>
<h3 className="text-xl font-semibold text-slate-900 mb-2">O Início</h3>
<p className="text-slate-600 leading-relaxed text-sm">
                                Fundada por um grupo de cidadãos notáveis de Vouzela, a Associação Humanitária nasceu da necessidade urgente de proteger a vila contra os flagelos dos incêndios que assolavam a região.
                            </p>
</div>
<div className="relative pl-8">
<div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-4 border-white"></div>
<span className="text-xs font-bold text-slate-900 tracking-wider uppercase mb-1 block">Atualidade</span>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Modernização</h3>
<p className="text-slate-600 leading-relaxed text-sm">
                                Hoje, contamos com um corpo ativo profissionalizado e voluntário, viaturas modernas e equipamentos de ponta, mantendo o espírito de sacrifício dos fundadores.
                            </p>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="grid md:grid-cols-4 gap-12">
<div>
<div className="flex items-center gap-3 mb-6">
<i className="w-6 h-6 text-red-600" data-lucide="flame"></i>
<span className="text-white font-semibold">BV Vouzela</span>
</div>
<p className="text-sm leading-relaxed mb-6">Associação Humanitária dos Bombeiros Voluntários de Vouzela.</p>
</div>
<div>
<h4 className="text-white font-medium mb-6">Contactos</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-center gap-3"><i className="w-4 h-4 text-red-500" data-lucide="phone-alert"></i> 112</li>
<li className="flex items-center gap-3"><i className="w-4 h-4" data-lucide="phone"></i> 232 770 000</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Localização</h4>
<p className="text-sm">Rua dos Bombeiros Voluntários, nº 1<br/>3670-000 Vouzela</p>
</div>
</div>
<div className="border-t border-slate-800 mt-16 pt-8 text-xs text-center">
<p>© 2026 Bombeiros Voluntários de Vouzela.</p>
</div>
</div>
</footer>



    </>
  );
}
