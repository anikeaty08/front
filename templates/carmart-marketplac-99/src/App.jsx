import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
blue: {
600: '#2563EB', // Primary
700: '#1D4ED8',
800: '#1E40AF',
900: '#1E3A8A',
},
amber: {
500: '#F59E0B', // Accent
},
zinc: {
100: '#F4F4F5', // Background
}
},
fontFamily: {
serif: ['"IBM Plex Serif"', 'serif'],
sans: ['"Manrope"', 'sans-serif'],
},
boxShadow: {
'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
}
}
}
}



      lucide.createIcons({
          attrs: {
              'stroke-width': 1.5
          }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/60 border-b border-white/40 shadow-sm">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-2 animate-entry">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
<svg className="lucide lucide-car-front w-5 h-5" data-lucide="car-front" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"></path><path d="M7 14h.01"></path><path d="M17 14h.01"></path><rect height="8" rx="2" width="18" x="3" y="10"></rect><path d="M5 18v2"></path><path d="M19 18v2"></path></svg>
</div>
<span className="font-serif text-xl text-blue-600 tracking-tight font-medium">
            CarMart
          </span>
</div>

<div className="hidden md:flex items-center gap-8 animate-entry delay-100">
<a className="text-sm font-medium hover:text-blue-600 transition-colors" href="#como-funciona">
            Como Funciona
          </a>
<a className="text-sm font-medium hover:text-blue-600 transition-colors" href="#para-lojistas">
            Para Lojistas
          </a>
<a className="text-sm font-medium hover:text-blue-600 transition-colors" href="#seguranca">
            Segurança
          </a>
</div>

<div className="flex items-center gap-4 animate-entry delay-100">
<button className="hidden md:block text-sm font-medium px-4 py-2 text-slate-600 hover:text-blue-600 transition-colors">
            Entrar
          </button>
<button className="text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2">
<span>Baixar App</span>
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-200/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-100/30 rounded-full blur-3xl -z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8 max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 border border-blue-100 backdrop-blur-sm animate-entry">
<span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
<span className="text-xs font-medium text-blue-600 uppercase tracking-wide">
              Novo Aplicativo Disponível
            </span>
</div>
<h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-900 leading-[1.15] tracking-tight word-anim font-normal">
<span>O</span>
<span className="">Marketplace</span>
<span className="">Definitivo</span>
<span className="">para</span>
<span>Repasse</span>
<span>de</span>
<span className="">Veículos</span>
</h1>
<p className="md:text-xl leading-relaxed animate-entry delay-200 text-lg font-normal text-slate-500">Conectamos compradores e vendedores com transparência, segurança e eficiência. A plataforma ideal para lojistas.</p>
<div className="flex flex-col sm:flex-row gap-4 animate-entry delay-300">
<button className="text-base font-medium bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl transition-all shadow-xl shadow-blue-600/25 hover:scale-[1.02] flex items-center justify-center gap-2">
              Ver Ofertas
              <svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="hover:bg-slate-50 transition-all hover:border-blue-200 hover:text-blue-600 flex gap-2 text-base font-medium text-slate-700 bg-white border-slate-200 border rounded-2xl pt-4 pr-8 pb-4 pl-8 gap-x-2 gap-y-2 items-center justify-center">
              Vender Veículo
            </button>
</div>
<div className="flex items-center gap-6 text-sm text-slate-400 animate-entry delay-500 pt-4">
<div className="flex items-center gap-2">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-amber-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span>Verificado</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-shield-check w-4 h-4 text-amber-500" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="">Seguro</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-zap w-4 h-4 text-amber-500" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span>Rápido</span>
</div>
</div>
</div>

<div className="relative lg:h-[700px] flex items-center justify-center animate-entry delay-300">
<div className="relative w-[320px] h-[650px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-900 shadow-2xl floating-mockup overflow-hidden z-10">

<div className="w-full h-full bg-zinc-50 flex flex-col relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-32 bg-black rounded-b-2xl z-20"></div>

<div className="pt-10 pb-4 px-5 bg-white border-b border-slate-100 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
<svg className="lucide lucide-user w-4 h-4" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<div className="">
<div className="text-xs text-slate-400">Bom dia,</div>
<div className="text-sm font-bold text-slate-800">Roberto</div>
</div>
</div>
<div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center relative">
<svg className="lucide lucide-bell w-4 h-4 text-slate-600" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute top-0 right-0 w-2 h-2 bg-amber-500 rounded-full"></span>
</div>
</div>

<div className="p-5 space-y-4 overflow-hidden">
<div className="flex justify-between items-center">
<h3 className="font-serif text-slate-800 font-medium">
                    Destaques
                  </h3>
<span className="text-xs text-blue-600 font-medium">
                    Ver todos
                  </span>
</div>

<div className="bg-white rounded-2xl p-3 shadow-sm border border-slate-100">
<div className="h-32 bg-slate-200 rounded-xl mb-3 relative overflow-hidden group">

<div className="absolute inset-0 bg-gradient-to-tr from-slate-300 to-slate-100"></div>
<div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-[10px] font-bold text-slate-700">
                      2023
                    </div>
</div>
<div className="flex justify-between items-start mb-1">
<div className="font-bold text-slate-800 text-sm">
                      Jeep Compass
                    </div>
<div className="text-blue-600 font-bold text-sm">R$ 145k</div>
</div>
<div className="text-xs text-slate-400 mb-3">
                    Longitude T270 • 12.000 km
                  </div>
<button className="w-full py-2 bg-blue-600 text-white rounded-lg text-xs font-medium">
                    Negociar
                  </button>
</div>

<div className="bg-white rounded-2xl p-3 shadow-sm border border-slate-100 opacity-60">
<div className="h-32 bg-slate-200 rounded-xl mb-3"></div>
<div className="h-4 w-2/3 bg-slate-200 rounded mb-2"></div>
</div>
</div>

<div className="mt-auto bg-white border-t border-slate-100 py-4 px-6 flex justify-between items-center">
<svg className="lucide lucide-home w-6 h-6 text-blue-600" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<svg className="lucide lucide-search w-6 h-6 text-slate-300" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<div className="w-12 h-12 bg-blue-600 rounded-full -mt-8 flex items-center justify-center shadow-lg shadow-blue-600/30">
<svg className="lucide lucide-plus w-6 h-6 text-white" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<svg className="lucide lucide-message-circle w-6 h-6 text-slate-300" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
<svg className="lucide lucide-user w-6 h-6 text-slate-300" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-slate-200/60 rounded-full -z-10"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-slate-200/40 rounded-full -z-10"></div>
</div>
</div>
</section>

<section className="py-24 bg-white/40 backdrop-blur-sm relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-4 font-normal">
            Por que escolher o CarMart?
          </h2>
<p className="text-lg text-slate-500">
            Tecnologia de ponta para facilitar o repasse e garantir os melhores
            negócios.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white/60 backdrop-blur-xl border border-white/60 p-8 rounded-3xl shadow-glass hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
<div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-shield-check w-6 h-6 text-blue-600" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-2xl font-normal text-slate-900 font-serif mb-3" style={{}}>100% Seguro</h3>
<p className="leading-relaxed text-base text-slate-500">Todos os usuários são verificados e convidados individualmente para participar da plataformar.</p>
</div>

<div className="bg-white/60 backdrop-blur-xl border border-white/60 p-8 rounded-3xl shadow-glass hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
<div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-zap w-6 h-6 text-amber-500" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-2xl font-normal text-slate-900 font-serif mb-3">
              Negociação Rápida
            </h3>
<p className="leading-relaxed text-base text-slate-500">
              Processo direto e eficiente. Sem intermediários desnecessários
              atrasando seu fechamento.
            </p>
</div>

<div className="bg-white/60 backdrop-blur-xl border border-white/60 p-8 rounded-3xl shadow-glass hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
<div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-trending-up w-6 h-6 text-blue-600" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<h3 className="font-serif text-2xl text-slate-900 mb-3 font-normal">
              Margens Atrativas
            </h3>
<p className="leading-relaxed text-base text-slate-500">
              Encontre veículos abaixo da tabela FIPE. Ideal para quem busca
              lucro na revenda.
            </p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden pt-24 pb-24 relative" id="como-funciona">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 lg:gap-20 gap-x-12 gap-y-12">

<div className="relative group">
<div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent rounded-[2.5rem] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="p-8 lg:p-12 border border-slate-200 bg-white/30 backdrop-blur-sm rounded-[2.5rem] h-full">
<div className="flex items-center gap-4 mb-8">
<span className="px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wide">
                  Comprador
                </span>
<h3 className="font-serif text-3xl text-slate-900 font-normal">
                  Quero Comprar
                </h3>
</div>
<ul className="relative space-y-8">

<div className="absolute left-5 top-4 bottom-4 w-0.5 bg-slate-200 -z-10"></div>
<li className="flex gap-6 items-start">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm text-amber-500 font-serif font-medium text-lg relative z-10">
                    1
                  </div>
<div className="">
<h4 className="font-bold text-slate-800 text-lg mb-1">
                      Envie Propostas
                    </h4>
<p className="leading-relaxed text-sm text-slate-500">
                      Faça sua oferta diretamente para o vendedor e acompanhe o
                      andamento da negociação com agilidade.
                    </p>
</div>
</li>
<li className="flex gap-6 items-start">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm text-amber-500 font-serif font-medium text-lg relative z-10">
                    2
                  </div>
<div className="">
<h4 className="text-lg font-bold text-slate-800 mb-1">Resposta em 24h</h4>
<p className="leading-relaxed text-sm text-slate-500">O vendedor tem até 24h para responder sua proposta.</p>
</div>
</li>
<li className="flex gap-6 items-start">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm text-amber-500 font-serif font-medium text-lg relative z-10">
                    3
                  </div>
<div className="">
<h4 className="text-lg font-bold text-slate-800 mb-1">Contato Direto</h4>
<p className="leading-relaxed text-sm text-slate-500">Com a proposta aprovada você recebe o contato diretamente do vendedor. Sem intermediários.</p>
</div>
</li>
</ul>
</div>
</div>

<div className="relative group">
<div className="absolute inset-0 bg-gradient-to-bl from-amber-50 to-transparent rounded-[2.5rem] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="lg:p-12 bg-white/30 h-full border-slate-200 border rounded-[2.5rem] pt-8 pr-8 pb-8 pl-8 backdrop-blur-sm">
<div className="flex items-center gap-4 mb-8">
<span className="px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-wide">
                  Vendedor
                </span>
<h3 className="font-serif text-3xl text-slate-900 font-normal">
                  Quero Vender
                </h3>
</div>
<ul className="space-y-8 relative">

<div className="absolute left-5 top-4 bottom-4 w-0.5 bg-slate-200 -z-10"></div>
<li className="flex gap-6 items-start">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm text-blue-600 font-serif font-medium text-lg relative z-10">
                    1
                  </div>
<div className="">
<h4 className="font-bold text-slate-800 text-lg mb-1">
                      Cadastre o Veículo
                    </h4>
<p className="leading-relaxed text-sm text-slate-500">Adicione fotos, informações detalhadas e documentação em poucos cliques.</p>
</div>
</li>
<li className="flex gap-6 items-start">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm text-blue-600 font-serif font-medium text-lg relative z-10">
                    2
                  </div>
<div className="">
<h4 className="font-bold text-slate-800 text-lg mb-1">
                      Receba Ofertas
                    </h4>
<p className="leading-relaxed text-sm text-slate-500" style={{}}>Sua oferta alcança todo nossos lojistas interessados instantaneamente.</p>
</div>
</li>
<li className="flex gap-6 items-start">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm text-blue-600 font-serif font-medium text-lg relative z-10">
                    3
                  </div>
<div className="">
<h4 className="font-bold text-slate-800 text-lg mb-1">
                      Venda Rápida
                    </h4>
<p className="text-slate-500 text-sm leading-relaxed">
                      Aceite a melhor proposta e combine a entrega com total
                      praticidade.
                    </p>
</div>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24 relative" id="para-lojistas">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="font-serif text-3xl md:text-4xl text-slate-900 font-normal mb-4">
            Para quem é o CarMart?
          </h2>
<span className="inline-block px-4 py-1 rounded-full bg-zinc-100 text-slate-500 text-sm font-medium">
            Sem taxas escondidas
          </span>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-blue-200 transition-colors">
<div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center mb-4 text-blue-600">
<svg className="lucide lucide-shopping-bag w-5 h-5" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
</div>
<h3 className="font-serif text-xl text-slate-900 mb-2">Compradores</h3>
<p className="text-sm text-slate-500">
              Acesso a estoque exclusivo e preços de repasse antes do mercado
              aberto.
            </p>
</div>

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-blue-200 transition-colors">
<div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center mb-4 text-blue-600">
<svg className="lucide lucide-tags w-5 h-5" data-lucide="tags" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z"></path><path d="M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193"></path><circle cx="10.5" cy="6.5" fill="currentColor" r=".5"></circle></svg>
</div>
<h3 className="font-serif text-xl text-slate-900 mb-2">Vendedores</h3>
<p className="text-sm text-slate-500">
              Liquidez imediata para o seu estoque com ofertas reais e
              competitivas.
            </p>
</div>

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-blue-200 transition-colors">
<div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center mb-4 text-blue-600">
<svg className="lucide lucide-store w-5 h-5" data-lucide="store" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"></path><path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path><path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path></svg>
</div>
<h3 className="font-serif text-xl text-slate-900 mb-2">
              Donos de Loja
            </h3>
<p className="text-sm text-slate-500">
              Ferramenta de gestão completa para girar estoque e aumentar a
              lucratividade.
            </p>
</div>
</div>
</div>
</section>

<section className="pt-24 pr-6 pb-24 pl-6">
<div className="max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden relative bg-gradient-to-br from-blue-600 to-blue-900 shadow-2xl shadow-blue-900/20">

<div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
<div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-12 md:p-20 gap-12">
<div className="max-w-lg text-center md:text-left">
<h2 className="font-serif text-3xl md:text-4xl text-white mb-6 font-normal">
              Leve o CarMart no seu bolso
            </h2>
<p className="text-lg font-light text-blue-100 mb-8" style={{}}>Acompanhe preços, responda propostas e feche negócios de onde estiver. Baixe agora.</p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">

<button className="bg-white text-slate-900 hover:bg-slate-50 px-5 py-2.5 rounded-xl flex items-center gap-3 transition-transform hover:scale-105">
<svg className="lucide lucide-apple w-6 h-6 fill-current" data-lucide="apple" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.528V3a1 1 0 0 1 1-1h0"></path><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"></path></svg>

<div className="text-left">
<div className="text-[10px] font-medium text-slate-500 uppercase leading-none">
                    Download on the
                  </div>
<div className="text-sm font-bold font-sans">App Store</div>
</div>
</button>

<button className="bg-white/10 border border-white/20 text-white hover:bg-white/20 px-5 py-2.5 rounded-xl flex items-center gap-3 transition-transform hover:scale-105 backdrop-blur-sm">
<svg className="lucide lucide-play-circle w-6 h-6" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
<div className="text-left">
<div className="text-[10px] font-medium text-blue-100 uppercase leading-none">
                    GET IT ON
                  </div>
<div className="text-sm font-bold font-sans">Google Play</div>
</div>
</button>
</div>
</div>

<div className="hidden md:block relative w-64 h-64 lg:w-80 lg:h-80 shrink-0">
<div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-full animate-pulse"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-20">
<svg className="lucide lucide-smartphone w-48 h-48 stroke-[0.5]" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-zinc-100 pt-12 pb-8 border-t border-zinc-200">
<div className="flex flex-col md:flex-row gap-6 max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-6 gap-y-6 items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-300 rounded flex items-center justify-center text-white">
<svg className="lucide lucide-car-front w-4 h-4" data-lucide="car-front" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"></path><path d="M7 14h.01"></path><path d="M17 14h.01"></path><rect height="8" rx="2" width="18" x="3" y="10"></rect><path d="M5 18v2"></path><path d="M19 18v2"></path></svg>
</div>
<span className="font-serif text-lg text-slate-500 font-medium">
            CarMart
          </span>
</div>
<div className="text-sm text-slate-400">© 2025 CarMart Tecnologia. Todos os direitos reservados.</div>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-blue-600 transition-colors" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="text-slate-400 hover:text-blue-600 transition-colors" href="#">
<svg className="lucide lucide-linkedin w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(37, 99, 235)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="text-slate-400 hover:text-blue-600 transition-colors" href="#">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
</div>
</div>
</footer>



    </>
  );
}
