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
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
zinc: {
850: '#1f1f22', // Custom dark
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}



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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-1 group" href="#">

<svg className="h-5 w-auto text-zinc-900" fill="currentColor" viewbox="0 0 110 20" xmlns="http://www.w3.org/2000/svg">
<text fontFamily="Inter, sans-serif" fontSize="16" font-weight="600" letter-spacing="0.1em" x="0" y="15">
              AUDACES
            </text>
</svg>
</a>
<div className="hidden md:flex items-center gap-6 text-sm text-zinc-500 font-medium">
<a className="hover:text-zinc-900 transition-colors" href="#summary">
            Sumário
          </a>
<a className="hover:text-zinc-900 transition-colors" href="#market">
            Mercado
          </a>
<a className="hover:text-zinc-900 transition-colors" href="#specs">
            Projeto
          </a>
<a className="hover:text-zinc-900 transition-colors" href="#financials">
            Financeiro
          </a>
</div>
<a className="hidden sm:inline-flex h-9 items-center justify-center rounded-md bg-zinc-900 px-4 text-xs font-medium text-white shadow transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950" href="https://wa.me/351926504180?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20investir%20no%20projeto%20Zion%20Oasis." target="_blank">
          Investir Agora
        </a>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden border-b border-zinc-100 bg-grid-pattern">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600 mb-8 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
          Documento Confidencial • Fev 2026
        </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-zinc-900 mb-6 max-w-4xl leading-[1.1]">
          Zion Oasis.
          <br/>
<span className="text-zinc-400">36 Moradias</span>
</h1>
<p className="text-lg md:text-xl text-zinc-500 max-w-2xl leading-relaxed font-light mb-10">
          Um projeto exclusivo em Almadena, Lagos. 36 moradias premium com
          piscina privativa e uma excelente oportunidade de investimento com
          alto retorno.
        </p>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
<div className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-white p-6 transition-all hover:shadow-lg hover:border-zinc-300">
<div className="flex items-center gap-2 mb-3 text-zinc-500">
<iconify-icon icon="solar:wallet-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-wider">
                CAPEX Total
              </span>
</div>
<div className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-900">
              €14.07M
            </div>
</div>
<div className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-white p-6 transition-all hover:shadow-lg hover:border-zinc-300">
<div className="flex items-center gap-2 mb-3 text-zinc-500">
<iconify-icon icon="solar:graph-new-up-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-wider">
                Receita (VGV)
              </span>
</div>
<div className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-900">
              €21.83M
            </div>
</div>
<div className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-white p-6 transition-all hover:shadow-lg hover:border-zinc-300">
<div className="flex items-center gap-2 mb-3 text-zinc-500">
<iconify-icon icon="solar:hand-money-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-wider">
                Lucro Bruto
              </span>
</div>
<div className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-900">
              €7.75M
            </div>
<div className="mt-1 text-xs text-emerald-600 font-medium">
              +55,1% Margem
            </div>
</div>
<div className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-white p-6 transition-all hover:shadow-lg hover:border-zinc-300">
<div className="flex items-center gap-2 mb-3 text-zinc-500">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-wider">
                ROI Projetado
              </span>
</div>
<div className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-900">
              55,1%
            </div>
<div className="mt-1 text-xs text-zinc-400">Prazo 18 Meses</div>
</div>
</div>
</div>

<div className="absolute top-0 right-0 -z-10 h-full w-1/3 bg-gradient-to-l from-zinc-50 to-transparent"></div>
</section>

<section className="border-zinc-100 border-b pt-12 pb-12">
<div className="max-w-7xl mx-auto px-6">
<h3 className="text-sm font-medium uppercase tracking-wider text-zinc-400 mb-6 flex items-center gap-2">
<iconify-icon icon="solar:gallery-linear" width="16"></iconify-icon>
          Galeria do Projeto
        </h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-96 md:h-[500px]">

<div className="md:col-span-2 relative overflow-hidden rounded-xl bg-zinc-100 group">
<img alt="Exterior Render" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://page.gensparksite.com/get_upload_url/6714929d5d8622d40bb4030fe651a1cd03c5022831fc42ce40c3247804e3bb50/default/23dd525a-b9ea-4fdd-a4ca-135a2ae34cef"/>
<div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/60 to-transparent w-full">
<p className="text-white text-sm font-medium">
                Vista Geral - Zion Oasis, Almadena
              </p>
</div>
</div>

<div className="flex flex-col gap-4">
<div className="relative overflow-hidden rounded-xl bg-zinc-100 flex-1 group">
<img alt="Interior Living" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b4021d19-4961-40a8-b308-77c795fcc457_1600w.jpg"/>
<div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/50 to-transparent w-full">
<p className="text-xs font-medium text-white">
                  Vista da fachada exterior
                </p>
</div>
</div>
<div className="relative overflow-hidden rounded-xl bg-zinc-100 flex-1 group">
<img alt="Pool Amenity" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/219265d4-f376-4a6a-8e22-b87d56d29d22_1600w.png"/>
<div className="bg-gradient-to-t from-black/50 to-transparent w-full pt-4 pr-4 pb-4 pl-4 absolute bottom-0 left-0">
<p className="text-xs font-medium text-white">
                  Interior - Sala e cozinha aberta
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-32 grid grid-cols-1 md:grid-cols-12 max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6 gap-x-12 gap-y-12 items-start" id="summary">
<div className="md:col-span-4">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-900 mb-4">
          Sumário Executivo
        </h2>
<div className="h-1 w-12 bg-zinc-900 rounded-full"></div>
</div>
<div className="md:col-span-8 space-y-6 text-zinc-600 leading-relaxed font-light">
<p className="text-lg font-normal text-zinc-900">
          O projeto
          <span className="font-medium">Zion Oasis</span>
          integra o pipeline de desenvolvimento imobiliário residencial em Lagos
          da promotora Audaces Capital.
        </p>
<p className="">
          Situado em Almadena, uma das localizações mais valorizadas do Algarve,
          o projeto consiste na construção de
          <strong className="">36 moradias premium</strong>
          (T2 e T3) com piscina privativa, jardim e acabamentos de alto padrão.
        </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
<div className="p-4 bg-zinc-50 rounded-lg border border-zinc-100">
<p className="text-xs text-zinc-400 uppercase tracking-wider mb-1">
              Preço Médio
            </p>
<p className="text-zinc-900 font-medium">€4.549/m²</p>
</div>
<div className="p-4 bg-zinc-50 rounded-lg border border-zinc-100">
<p className="text-xs text-zinc-400 uppercase tracking-wider mb-1">
              Status
            </p>
<p className="text-zinc-900 font-medium">
              Projeto Aprovado (Início Q2 2026)
            </p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-zinc-50 border-y border-zinc-200" id="market">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-900 mb-6">
            Análise de Mercado
          </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
<div className="mb-4 p-2 bg-blue-50 w-fit rounded-lg text-blue-600">
<iconify-icon icon="solar:globus-linear" width="24"></iconify-icon>
</div>
<h4 className="font-medium text-zinc-900 mb-2">Almadena, Lagos</h4>
<p className="text-sm text-zinc-500 leading-relaxed">
                5 km do centro de Lagos e 90 km do Aeroporto de Faro. Acesso
                rápido às Praias de Luz e Burgau, golfe e infraestrutura
                internacional.
              </p>
</div>
<div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
<div className="mb-4 p-2 bg-emerald-50 w-fit rounded-lg text-emerald-600">
<iconify-icon icon="solar:chart-2-linear" width="24"></iconify-icon>
</div>
<h4 className="font-medium text-zinc-900 mb-2">Dados SIR (Lagos)</h4>
<ul className="text-sm text-zinc-500 space-y-2">
<li className="flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon>
                  Preço Médio: €5.123/m²
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon>
                  Valorização: +12% (2024-2025)
                </li>
</ul>
</div>
<div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
<div className="mb-4 p-2 bg-purple-50 w-fit rounded-lg text-purple-600">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h4 className="font-medium text-zinc-900 mb-2">
                Absorção &amp; Demanda
              </h4>
<p className="text-sm text-zinc-500 leading-relaxed">
                Velocidade de vendas de 7 a 9 meses. Forte demanda internacional
                por moradias com piscina e escassez de oferta nova.
              </p>
</div>
</div>
</div>

<div className="w-full h-80 bg-zinc-200 rounded-xl mb-12 relative overflow-hidden flex items-center justify-center border border-zinc-300">

<iframe className="absolute inset-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500" frameborder="0" height="100%" src="https://www.google.com/maps/d/u/2/embed?mid=1Eckmw1FsHYNsT_A2VC9-MGxXzUw7k0c&amp;ehbc=2E312F&amp;noprof=1" style={{border: '0'}} width="100%"></iframe>
<div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-xs font-medium text-zinc-800 shadow-lg pointer-events-none">
<span className="w-2 h-2 bg-blue-600 rounded-full inline-block mr-1"></span>
            Comparáveis na Zona
          </div>
</div>

<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-medium text-zinc-900">
            Comparáveis de Mercado Completos
          </h3>
<span className="text-xs text-zinc-400 bg-zinc-100 px-2 py-1 rounded">
            14 Imóveis Analisados
          </span>
</div>
<div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white shadow-sm">
<table className="w-full text-left text-sm whitespace-nowrap">
<thead className="bg-zinc-50 border-b border-zinc-200">
<tr>
<th className="px-6 py-4 font-medium text-zinc-500 text-xs uppercase tracking-wider">
                  Localização
                </th>
<th className="px-6 py-4 font-medium text-zinc-500 text-xs uppercase tracking-wider">
                  Tipologia
                </th>
<th className="px-6 py-4 font-medium text-zinc-500 text-xs uppercase tracking-wider text-right">
                  Área (m²)
                </th>
<th className="px-6 py-4 font-medium text-zinc-500 text-xs uppercase tracking-wider text-right">
                  Preço Total (€)
                </th>
<th className="px-6 py-4 font-medium text-zinc-500 text-xs uppercase tracking-wider text-right">
                  Preço/m²
                </th>
<th className="px-6 py-4 font-medium text-zinc-500 text-xs uppercase tracking-wider text-center">
                  Fonte
                </th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-100">
<tr className="bg-blue-50/50">
<td className="px-6 py-4 font-semibold text-blue-900 flex items-center gap-2">
<iconify-icon className="text-blue-600" icon="solar:star-bold"></iconify-icon>
                  ZION OASIS
                </td>
<td className="px-6 py-4 font-medium text-zinc-900">T2 / T3</td>
<td className="px-6 py-4 text-zinc-700 font-mono text-right">
                  124 - 140
                </td>
<td className="px-6 py-4 text-zinc-700 font-mono text-right">
                  478.000 - 718.850
                </td>
<td className="px-6 py-4 font-bold text-blue-700 font-mono text-right">
                  3.855 - 5.135
                </td>
<td className="px-6 py-4 text-center">
<span className="inline-flex items-center justify-center rounded bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
                    Projeto
                  </span>
</td>
</tr>
<tr className="hover:bg-zinc-50 transition-colors">
<td className="px-6 py-3 text-zinc-600">Espiche Golf Premium</td>
<td className="px-6 py-3 text-zinc-500">T3</td>
<td className="px-6 py-3 text-zinc-500 font-mono text-right">
                  150
                </td>
<td className="px-6 py-3 text-zinc-500 font-mono text-right">
                  950.000
                </td>
<td className="px-6 py-3 text-zinc-500 font-mono text-right">
                  6.333
                </td>
<td className="px-6 py-3 text-center">-</td>
</tr>
<tr className="hover:bg-zinc-50 transition-colors">
<td className="px-6 py-3 text-zinc-600">Lagos Premium Residence</td>
<td className="px-6 py-3 text-zinc-500">T3</td>
<td className="px-6 py-3 text-zinc-500 font-mono text-right">
                  120
                </td>
<td className="px-6 py-3 text-zinc-500 font-mono text-right">
                  750.000
                </td>
<td className="px-6 py-3 text-zinc-500 font-mono text-right">
                  6.250
                </td>
<td className="px-6 py-3 text-center">-</td>
</tr>
<tr className="hover:bg-zinc-50 transition-colors">
<td className="px-6 py-3 text-zinc-600">Salema Beach Villas</td>
<td className="px-6 py-3 text-zinc-500">T3</td>
<td className="px-6 py-3 text-zinc-500 font-mono text-right">
                  110
                </td>
<td className="px-6 py-3 text-zinc-500 font-mono text-right">
                  680.000
                </td>
<td className="px-6 py-3 text-zinc-500 font-mono text-right">
                  6.182
                </td>
<td className="px-6 py-3 text-center">-</td>
</tr>
<tr className="hover:bg-zinc-50 transition-colors">
<td className="px-6 py-3 text-zinc-600">Burgau Sea Gardens</td>
<td className="px-6 py-3 text-zinc-500">T3</td>
<td className="px-6 py-3 text-zinc-500 font-mono text-right">
                  140
                </td>
<td className="px-6 py-3 text-zinc-500 font-mono text-right">
                  850.000
                </td>
<td className="px-6 py-3 text-zinc-500 font-mono text-right">
                  6.071
                </td>
<td className="px-6 py-3 text-center">-</td>
</tr>
<tr className="hover:bg-zinc-50 transition-colors">
<td className="px-6 py-3 text-zinc-600">Meia Praia Resort</td>
<td className="px-6 py-3 text-zinc-500">T2</td>
<td className="px-6 py-3 text-zinc-500 font-mono text-right">85</td>
<td className="px-6 py-3 text-zinc-500 font-mono text-right">
                  480.000
                </td>
<td className="px-6 py-3 text-zinc-500 font-mono text-right">
                  5.647
                </td>
<td className="px-6 py-3 text-center">-</td>
</tr>
<tr className="hover:bg-zinc-50 transition-colors">
<td className="px-6 py-3 text-zinc-600">Luz Residence</td>
<td className="px-6 py-3 text-zinc-500">T2</td>
<td className="px-6 py-3 text-zinc-500 font-mono text-right">95</td>
<td className="px-6 py-3 text-zinc-500 font-mono text-right">
                  520.000
                </td>
<td className="px-6 py-3 text-zinc-500 font-mono text-right">
                  5.474
                </td>
<td className="px-6 py-3 text-center">-</td>
</tr>
</tbody>
</table>
</div>
<p className="mt-4 text-xs text-zinc-400 text-right">
          *Valores de referência baseados em listagens ativas
          (Idealista/Supercasa) - Fev 2026.
        </p>
</div>
</section>

<section className="py-20 max-w-7xl mx-auto px-6" id="specs">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
<div className="">
<h2 className="text-2xl font-medium tracking-tight text-zinc-900 mb-8">
            Ficha Técnica
          </h2>
<div className="space-y-6">
<div className="flex items-start gap-4 pb-6 border-b border-zinc-100">
<div className="bg-zinc-100 p-2 rounded-lg text-zinc-900">
<iconify-icon icon="solar:buildings-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-900">Dimensão</p>
<p className="text-sm text-zinc-500">
                  4.800 m² ABC / 18.000 m² Lote
                </p>
</div>
</div>
<div className="flex items-start gap-4 pb-6 border-b border-zinc-100">
<div className="bg-zinc-100 p-2 rounded-lg text-zinc-900">
<iconify-icon icon="solar:key-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-900">Unidades</p>
<p className="text-sm text-zinc-500">36 Moradias (T2 e T3)</p>
</div>
</div>
<div className="flex items-start gap-4 pb-6 border-b border-zinc-100">
<div className="bg-zinc-100 p-2 rounded-lg text-zinc-900">
<iconify-icon icon="solar:garage-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-900">Estacionamento</p>
<p className="text-sm text-zinc-500">
                  Estacionamento privativo por moradia
                </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-zinc-100 p-2 rounded-lg text-zinc-900">
<iconify-icon icon="solar:smart-home-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-900">Características</p>
<p className="text-sm text-zinc-500">
                  Construção LSF, Certificação A+, Piscina Privativa, Jardim.
                </p>
</div>
</div>
</div>
<div className="mt-10 p-6 bg-zinc-900 rounded-xl text-white">
<h3 className="uppercase text-sm font-medium text-zinc-400 tracking-wider mb-4">
              Documentação
            </h3>
<ul className="space-y-3 text-sm">
<li>
<a className="flex items-center gap-2 hover:text-blue-300 transition-colors cursor-pointer" href="https://drive.google.com/open?id=1vfu7-vo_ZIRZzIstGnk-VGsvg1vpchvo&amp;usp=drive_fs" target="_blank">
<iconify-icon icon="solar:folder-with-files-linear"></iconify-icon>
                  Documentação Completa
                </a>
</li>
<li>
<a className="flex items-center gap-2 hover:text-blue-300 transition-colors cursor-pointer" href="https://docs.google.com/spreadsheets/d/1R-KvuwqwEkySZI8JFkiMpI3qOBtPDNvv?rtpof=true&amp;usp=drive_fs" target="_blank">
<iconify-icon icon="solar:document-text-linear"></iconify-icon>
                  Business Plan
                </a>
</li>
<li>
<a className="flex items-center gap-2 hover:text-blue-300 transition-colors cursor-pointer" href="https://drive.google.com/open?id=10jMSNvvMa0V_NdXy51_b18Ed4Zto0tub&amp;usp=drive_fs" target="_blank">
<iconify-icon icon="solar:file-check-linear"></iconify-icon>
                  Resumos Executivos
                </a>
</li>
<li>
<a className="flex items-center gap-2 hover:text-blue-300 transition-colors cursor-pointer" href="https://drive.google.com/open?id=1bgBkA36UlU05elsKJrwL8rMnvboZgv4X&amp;usp=drive_fs" target="_blank">
<iconify-icon icon="solar:ruler-pen-linear"></iconify-icon>
                  Plantas e Projetos
                </a>
</li>
<li>
<a className="flex items-center gap-2 hover:text-blue-300 transition-colors cursor-pointer" href="https://drive.google.com/open?id=17pKvMrsAww81lnKyngzP4i11uFQ-7Al8&amp;usp=drive_fs" target="_blank">
<iconify-icon icon="solar:documents-linear"></iconify-icon>
                  Estudos e Material Complementar
                </a>
</li>
<li className="flex items-center gap-2 hover:text-blue-300 transition-colors cursor-pointer">
<iconify-icon icon="solar:box-minimalistic-linear"></iconify-icon>
                Render 3D do Projeto
              </li>
</ul>
</div>
</div>

<div className="">
<h2 className="text-2xl font-medium tracking-tight text-zinc-900 mb-8">
            Mix de Tipologias
          </h2>
<div className="bg-white border border-zinc-200 rounded-xl overflow-hidden">
<div className="p-4 border-b border-zinc-100 bg-zinc-50/50 flex justify-between items-center">
<span className="text-xs font-medium uppercase text-zinc-500 tracking-wider">
                Tipologia
              </span>
<span className="text-xs font-medium uppercase text-zinc-500 tracking-wider">
                Área Privativa
              </span>
</div>
<div className="divide-y divide-zinc-100">
<div className="p-4 flex justify-between items-center group hover:bg-zinc-50 transition-colors">
<div className="flex items-center gap-3">
<span className="w-8 h-8 rounded-full bg-zinc-100 text-zinc-600 flex items-center justify-center text-xs font-medium">
                    14x
                  </span>
<span className="text-sm font-medium text-zinc-900">T2</span>
</div>
<span className="text-sm text-zinc-500 font-mono">124 m²</span>
</div>
<div className="p-4 flex justify-between items-center group hover:bg-zinc-50 transition-colors">
<div className="flex items-center gap-3">
<span className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-medium">
                    22x
                  </span>
<span className="text-sm font-medium text-zinc-900">T3</span>
</div>
<span className="text-sm text-zinc-500 font-mono">140 m²</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-zinc-900 text-zinc-300" id="financials">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12">
<span className="text-blue-500 font-medium tracking-tight text-sm uppercase mb-2 block">
            Estrutura Financeira
          </span>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">
            Custos &amp; Investimentos
          </h2>
</div>

<div className="flex flex-col gap-12">

<div className="bg-zinc-800/50 rounded-xl border border-zinc-800 overflow-hidden">
<div className="p-4 border-b border-zinc-800 bg-zinc-800/80 flex justify-between items-center">
<h3 className="text-sm font-medium text-white uppercase tracking-wider">
                7.1 Custos &amp; Investimentos (CAPEX Detalhado)
              </h3>
</div>
<div className="overflow-x-auto scrollbar-hide">
<table className="w-full text-left text-xs whitespace-nowrap">
<thead className="bg-zinc-800/30 text-zinc-500 border-b border-zinc-800/50">
<tr>
<th className="px-4 py-3 font-medium">Descrição</th>
<th className="px-4 py-3 text-right font-medium">m²</th>
<th className="px-4 py-3 text-right font-medium">Custo/m²</th>
<th className="px-4 py-3 text-right font-medium">Custo %</th>
<th className="px-4 py-3 text-right font-medium">Custos (€)</th>
<th className="px-4 py-3 text-right font-medium">Taxas</th>
<th className="px-4 py-3 text-right font-medium">
                      Custo Taxas (€)
                    </th>
<th className="px-4 py-3 text-right font-medium">Total (€)</th>
<th className="px-4 py-3 text-right font-medium">% CAPEX</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-800/50 text-zinc-300">

<tr className="bg-zinc-800/40">
<td className="px-4 py-2 text-[11px] font-semibold text-zinc-400 uppercase tracking-wide" colspan="9">
                      AQUISIÇÃO
                    </td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-4 py-2.5 font-medium text-white pl-6">
                      Aquisição da Propriedade
                    </td>
<td className="px-4 py-2.5 text-right font-mono">18.000</td>
<td className="px-4 py-2.5 text-right font-mono">€ 55,00</td>
<td className="px-4 py-2.5 text-right text-zinc-500">-</td>
<td className="px-4 py-2.5 text-right font-mono">990.000,00</td>
<td className="px-4 py-2.5 text-right font-mono">7,30%</td>
<td className="px-4 py-2.5 text-right font-mono">72.270,00</td>
<td className="px-4 py-2.5 text-right font-mono text-white font-medium">
                      1.062.270,00
                    </td>
<td className="px-4 py-2.5 text-right font-mono">7,54%</td>
</tr>

<tr className="bg-zinc-800/40">
<td className="px-4 py-2 text-[11px] font-semibold text-zinc-400 uppercase tracking-wide" colspan="9">
                      CONSTRUÇÃO E DESENVOLVIMENTO
                    </td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-4 py-2.5 pl-6">
                      Área Bruta Construída do Projeto
                    </td>
<td className="px-4 py-2.5 text-right font-mono">4.800</td>
<td className="px-4 py-2.5 text-right font-mono">€ 1.724,76</td>
<td className="px-4 py-2.5 text-right text-zinc-500">-</td>
<td className="px-4 py-2.5 text-right font-mono">
                      8.278.854,20
                    </td>
<td className="px-4 py-2.5 text-right font-mono">6,0%</td>
<td className="px-4 py-2.5 text-right font-mono">496.731,25</td>
<td className="px-4 py-2.5 text-right font-mono text-white">
                      8.775.585,45
                    </td>
<td className="px-4 py-2.5 text-right font-mono">62,33%</td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-4 py-2.5 pl-6">
                      Infraestrutura e Arruamentos
                    </td>
<td className="px-4 py-2.5 text-right font-mono">4.800</td>
<td className="px-4 py-2.5 text-right font-mono">€ 200,87</td>
<td className="px-4 py-2.5 text-right text-zinc-500">-</td>
<td className="px-4 py-2.5 text-right font-mono">964.165,15</td>
<td className="px-4 py-2.5 text-right font-mono">6,0%</td>
<td className="px-4 py-2.5 text-right font-mono">57.849,91</td>
<td className="px-4 py-2.5 text-right font-mono text-white">
                      1.022.015,06
                    </td>
<td className="px-4 py-2.5 text-right font-mono">7,26%</td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-4 py-2.5 pl-6">
                      Projetos Arquitetônicos + Especialidades
                    </td>
<td className="px-4 py-2.5 text-right text-zinc-500">-</td>
<td className="px-4 py-2.5 text-right text-zinc-500">-</td>
<td className="px-4 py-2.5 text-right text-zinc-500">-</td>
<td className="px-4 py-2.5 text-right font-mono">280.000,00</td>
<td className="px-4 py-2.5 text-right font-mono">23,0%</td>
<td className="px-4 py-2.5 text-right font-mono">64.400,00</td>
<td className="px-4 py-2.5 text-right font-mono text-white">
                      344.400,00
                    </td>
<td className="px-4 py-2.5 text-right font-mono">2,45%</td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-4 py-2.5 pl-6">
                      Gestão, Salários, Infra-estrutura Empresa, BDI
                    </td>
<td className="px-4 py-2.5 text-right text-zinc-500">-</td>
<td className="px-4 py-2.5 text-right text-zinc-500">-</td>
<td className="px-4 py-2.5 text-right font-mono">2,50%</td>
<td className="px-4 py-2.5 text-right font-mono">544.722,63</td>
<td className="px-4 py-2.5 text-right font-mono">23,0%</td>
<td className="px-4 py-2.5 text-right font-mono">125.286,20</td>
<td className="px-4 py-2.5 text-right font-mono text-white">
                      670.008,83
                    </td>
<td className="px-4 py-2.5 text-right font-mono">4,76%</td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-4 py-2.5 pl-6">Render em 3D - Studio 5D</td>
<td className="px-4 py-2.5 text-right font-mono">4.800</td>
<td className="px-4 py-2.5 text-right text-zinc-500">-</td>
<td className="px-4 py-2.5 text-right font-mono">0,50%</td>
<td className="px-4 py-2.5 text-right font-mono">46.215,10</td>
<td className="px-4 py-2.5 text-right font-mono">23,0%</td>
<td className="px-4 py-2.5 text-right font-mono">10.629,47</td>
<td className="px-4 py-2.5 text-right font-mono text-white">
                      56.844,57
                    </td>
<td className="px-4 py-2.5 text-right font-mono">0,40%</td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-4 py-2.5 pl-6">
                      Gestão e Fiscalização de Obras
                    </td>
<td className="px-4 py-2.5 text-right font-mono">4.800</td>
<td className="px-4 py-2.5 text-right text-zinc-500">-</td>
<td className="px-4 py-2.5 text-right font-mono">2,00%</td>
<td className="px-4 py-2.5 text-right font-mono">184.860,39</td>
<td className="px-4 py-2.5 text-right font-mono">23,0%</td>
<td className="px-4 py-2.5 text-right font-mono">42.517,89</td>
<td className="px-4 py-2.5 text-right font-mono text-white">
                      227.378,28
                    </td>
<td className="px-4 py-2.5 text-right font-mono">1,61%</td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-4 py-2.5 pl-6">Seguros de Obras</td>
<td className="px-4 py-2.5 text-right font-mono">4.800</td>
<td className="px-4 py-2.5 text-right text-zinc-500">-</td>
<td className="px-4 py-2.5 text-right font-mono">0,75%</td>
<td className="px-4 py-2.5 text-right font-mono">69.322,65</td>
<td className="px-4 py-2.5 text-right font-mono">23,0%</td>
<td className="px-4 py-2.5 text-right font-mono">15.944,21</td>
<td className="px-4 py-2.5 text-right font-mono text-white">
                      85.266,85
                    </td>
<td className="px-4 py-2.5 text-right font-mono">0,61%</td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-4 py-2.5 pl-6">
                      Serviços de Concessionárias
                    </td>
<td className="px-4 py-2.5 text-right text-zinc-500">-</td>
<td className="px-4 py-2.5 text-right text-zinc-500">-</td>
<td className="px-4 py-2.5 text-right font-mono">0,80%</td>
<td className="px-4 py-2.5 text-right font-mono">73.944,15</td>
<td className="px-4 py-2.5 text-right font-mono">23,0%</td>
<td className="px-4 py-2.5 text-right font-mono">17.007,16</td>
<td className="px-4 py-2.5 text-right font-mono text-white">
                      90.951,31
                    </td>
<td className="px-4 py-2.5 text-right font-mono">0,65%</td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-4 py-2.5 pl-6">
                      Licenças + TRIU + Compensação CML
                    </td>
<td className="px-4 py-2.5 text-right font-mono">4.800</td>
<td className="px-4 py-2.5 text-right text-zinc-500">-</td>
<td className="px-4 py-2.5 text-right text-zinc-500">-</td>
<td className="px-4 py-2.5 text-right font-mono">30.000,00</td>
<td className="px-4 py-2.5 text-right font-mono">23,0%</td>
<td className="px-4 py-2.5 text-right font-mono">6.900,00</td>
<td className="px-4 py-2.5 text-right font-mono text-white">
                      36.900,00
                    </td>
<td className="px-4 py-2.5 text-right font-mono">0,26%</td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-4 py-2.5 pl-6">
                      Custos Administrativos e Garantias Bancárias
                    </td>
<td className="px-4 py-2.5 text-right text-zinc-500">-</td>
<td className="px-4 py-2.5 text-right text-zinc-500">-</td>
<td className="px-4 py-2.5 text-right font-mono">0,50%</td>
<td className="px-4 py-2.5 text-right font-mono">46.215,10</td>
<td className="px-4 py-2.5 text-right font-mono">0,0%</td>
<td className="px-4 py-2.5 text-right text-zinc-500">-</td>
<td className="px-4 py-2.5 text-right font-mono text-white">
                      46.215,10
                    </td>
<td className="px-4 py-2.5 text-right font-mono">0,33%</td>
</tr>

<tr className="bg-zinc-800/40">
<td className="px-4 py-2 text-[11px] font-semibold text-zinc-400 uppercase tracking-wide" colspan="9">
                      COMERCIALIZAÇÃO
                    </td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-4 py-2.5 pl-6">
                      Custos de Vendas (Comissões)
                    </td>
<td className="px-4 py-2.5 text-right text-zinc-500">-</td>
<td className="px-4 py-2.5 text-right text-zinc-500">-</td>
<td className="px-4 py-2.5 text-right font-mono">5,00%</td>
<td className="px-4 py-2.5 text-right font-mono">
                      1.089.445,25
                    </td>
<td className="px-4 py-2.5 text-right font-mono">23,0%</td>
<td className="px-4 py-2.5 text-right font-mono">250.572,41</td>
<td className="px-4 py-2.5 text-right font-mono text-white">
                      1.340.017,66
                    </td>
<td className="px-4 py-2.5 text-right font-mono">9,52%</td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-4 py-2.5 pl-6">Custos de Marketing</td>
<td className="px-4 py-2.5 text-right text-zinc-500">-</td>
<td className="px-4 py-2.5 text-right text-zinc-500">-</td>
<td className="px-4 py-2.5 text-right font-mono">1,00%</td>
<td className="px-4 py-2.5 text-right font-mono">217.889,05</td>
<td className="px-4 py-2.5 text-right font-mono">23,0%</td>
<td className="px-4 py-2.5 text-right font-mono">50.114,48</td>
<td className="px-4 py-2.5 text-right font-mono text-white">
                      268.003,53
                    </td>
<td className="px-4 py-2.5 text-right font-mono">1,90%</td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-4 py-2.5 pl-6">Custos Jurídicos</td>
<td className="px-4 py-2.5 text-right text-zinc-500">-</td>
<td className="px-4 py-2.5 text-right text-zinc-500">-</td>
<td className="px-4 py-2.5 text-right font-mono">0,20%</td>
<td className="px-4 py-2.5 text-right font-mono">43.577,81</td>
<td className="px-4 py-2.5 text-right font-mono">23,0%</td>
<td className="px-4 py-2.5 text-right font-mono">10.022,90</td>
<td className="px-4 py-2.5 text-right font-mono text-white">
                      53.600,71
                    </td>
<td className="px-4 py-2.5 text-right font-mono">0,38%</td>
</tr>

<tr className="bg-zinc-800/20 border-t border-zinc-700">
<td className="px-4 py-3 font-medium text-white">
                      Subtotal Custos
                    </td>
<td className="px-4 py-3 text-right text-zinc-500">-</td>
<td className="px-4 py-3 text-right font-mono text-white">
                      12.859.211,47
                    </td>
<td className="px-4 py-3 text-right text-zinc-500">-</td>
<td className="px-4 py-3 text-right font-mono">1.220.245,88</td>
<td className="px-4 py-3 text-right text-zinc-500">-</td>
<td className="px-4 py-3 text-right text-zinc-500">-</td>
<td className="px-4 py-3 text-right font-mono text-white font-medium">
                      14.079.457,34
                    </td>
<td className="px-4 py-3 text-right text-zinc-500">-</td>
</tr>
<tr className="bg-zinc-800 border-t border-zinc-700">
<td className="px-4 py-4 font-bold text-white uppercase text-xs">
                      TOTAL CAPEX
                    </td>
<td className="px-4 py-4 text-right text-zinc-500">-</td>
<td className="px-4 py-4 text-right font-bold font-mono text-white text-sm">
                      12.859.211,47
                    </td>
<td className="px-4 py-4 text-right text-zinc-500">-</td>
<td className="px-4 py-4 text-right font-bold font-mono text-white text-sm">
                      1.220.245,88
                    </td>
<td className="px-4 py-4 text-right text-zinc-500">-</td>
<td className="px-4 py-4 text-right text-zinc-500">-</td>
<td className="px-4 py-4 text-right font-bold font-mono text-emerald-400 text-sm">
                      14.079.457,34
                    </td>
<td className="px-4 py-4 text-right font-bold font-mono text-white text-xs">
                      100,00%
                    </td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="bg-zinc-800/50 rounded-xl border border-zinc-800 overflow-hidden">
<div className="p-4 border-b border-zinc-800 bg-zinc-800/80 flex justify-between items-center">
<h3 className="text-sm font-medium text-white uppercase tracking-wider">
                7.2 Receitas Projetadas (VGV)
              </h3>
</div>
<div className="overflow-x-auto scrollbar-hide max-h-[600px]">
<table className="w-full text-left text-xs whitespace-nowrap">
<thead className="bg-zinc-800/30 text-zinc-500 border-b border-zinc-800/50 sticky top-0 backdrop-blur-md z-10">
<tr>
<th className="px-6 py-3 font-medium">Casa</th>
<th className="px-6 py-3 text-right font-medium">Lote</th>
<th className="px-6 py-3 text-center font-medium">Tipologia</th>
<th className="px-6 py-3 text-right font-medium">
                      Implantação (m²)
                    </th>
<th className="px-6 py-3 text-right font-medium">
                      Construção (m²)
                    </th>
<th className="px-6 py-3 text-right font-medium">€/m²</th>
<th className="px-6 py-3 text-right font-medium">Preço (€)</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-800/50 text-zinc-300">

<tr className="bg-blue-900/20">
<td className="px-6 py-3 text-[11px] font-semibold text-blue-400 uppercase tracking-wide" colspan="7">
                      MORADIAS T3 (140m² construção) - 22 UNIDADES
                    </td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-6 py-2.5 font-mono">1</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      250,0 m²
                    </td>
<td className="px-6 py-2.5 text-center font-medium text-white">
                      T3
                    </td>
<td className="px-6 py-2.5 text-right font-mono">72</td>
<td className="px-6 py-2.5 text-right font-mono">140</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      3.957
                    </td>
<td className="px-6 py-2.5 text-right font-mono text-white font-medium">
                      554.000
                    </td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-6 py-2.5 font-mono">3</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      163,0 m²
                    </td>
<td className="px-6 py-2.5 text-center font-medium text-white">
                      T3
                    </td>
<td className="px-6 py-2.5 text-right font-mono">72</td>
<td className="px-6 py-2.5 text-right font-mono">140</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      4.300
                    </td>
<td className="px-6 py-2.5 text-right font-mono text-white font-medium">
                      602.000
                    </td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-6 py-2.5 font-mono">5</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      138,0 m²
                    </td>
<td className="px-6 py-2.5 text-center font-medium text-white">
                      T3
                    </td>
<td className="px-6 py-2.5 text-right font-mono">72</td>
<td className="px-6 py-2.5 text-right font-mono">140</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      4.235
                    </td>
<td className="px-6 py-2.5 text-right font-mono text-white font-medium">
                      592.900
                    </td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-6 py-2.5 font-mono">7</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      138,0 m²
                    </td>
<td className="px-6 py-2.5 text-center font-medium text-white">
                      T3
                    </td>
<td className="px-6 py-2.5 text-right font-mono">72</td>
<td className="px-6 py-2.5 text-right font-mono">140</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      4.235
                    </td>
<td className="px-6 py-2.5 text-right font-mono text-white font-medium">
                      592.900
                    </td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-6 py-2.5 font-mono">9</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      138,0 m²
                    </td>
<td className="px-6 py-2.5 text-center font-medium text-white">
                      T3
                    </td>
<td className="px-6 py-2.5 text-right font-mono">72</td>
<td className="px-6 py-2.5 text-right font-mono">140</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      4.447
                    </td>
<td className="px-6 py-2.5 text-right font-mono text-white font-medium">
                      622.545
                    </td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-6 py-2.5 font-mono">11</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      138,0 m²
                    </td>
<td className="px-6 py-2.5 text-center font-medium text-white">
                      T3
                    </td>
<td className="px-6 py-2.5 text-right font-mono">72</td>
<td className="px-6 py-2.5 text-right font-mono">140</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      4.447
                    </td>
<td className="px-6 py-2.5 text-right font-mono text-white font-medium">
                      622.545
                    </td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-6 py-2.5 font-mono">13</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      138,0 m²
                    </td>
<td className="px-6 py-2.5 text-center font-medium text-white">
                      T3
                    </td>
<td className="px-6 py-2.5 text-right font-mono">72</td>
<td className="px-6 py-2.5 text-right font-mono">140</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      4.447
                    </td>
<td className="px-6 py-2.5 text-right font-mono text-white font-medium">
                      622.545
                    </td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-6 py-2.5 font-mono">15</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      138,0 m²
                    </td>
<td className="px-6 py-2.5 text-center font-medium text-white">
                      T3
                    </td>
<td className="px-6 py-2.5 text-right font-mono">72</td>
<td className="px-6 py-2.5 text-right font-mono">140</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      4.447
                    </td>
<td className="px-6 py-2.5 text-right font-mono text-white font-medium">
                      622.545
                    </td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-6 py-2.5 font-mono">17</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      138,0 m²
                    </td>
<td className="px-6 py-2.5 text-center font-medium text-white">
                      T3
                    </td>
<td className="px-6 py-2.5 text-right font-mono">72</td>
<td className="px-6 py-2.5 text-right font-mono">140</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      4.447
                    </td>
<td className="px-6 py-2.5 text-right font-mono text-white font-medium">
                      622.545
                    </td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-6 py-2.5 font-mono">19</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      186,0 m²
                    </td>
<td className="px-6 py-2.5 text-center font-medium text-white">
                      T3
                    </td>
<td className="px-6 py-2.5 text-right font-mono">72</td>
<td className="px-6 py-2.5 text-right font-mono">140</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      4.579
                    </td>
<td className="px-6 py-2.5 text-right font-mono text-white font-medium">
                      641.025
                    </td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-6 py-2.5 font-mono">21</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      281,0 m²
                    </td>
<td className="px-6 py-2.5 text-center font-medium text-white">
                      T3
                    </td>
<td className="px-6 py-2.5 text-right font-mono">72</td>
<td className="px-6 py-2.5 text-right font-mono">140</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      4.860
                    </td>
<td className="px-6 py-2.5 text-right font-mono text-white font-medium">
                      680.400
                    </td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-6 py-2.5 font-mono">22</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      232,5 m²
                    </td>
<td className="px-6 py-2.5 text-center font-medium text-white">
                      T3
                    </td>
<td className="px-6 py-2.5 text-right font-mono">72</td>
<td className="px-6 py-2.5 text-right font-mono">140</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      4.718
                    </td>
<td className="px-6 py-2.5 text-right font-mono text-white font-medium">
                      660.450
                    </td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-6 py-2.5 font-mono">23</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      232,5 m²
                    </td>
<td className="px-6 py-2.5 text-center font-medium text-white">
                      T3
                    </td>
<td className="px-6 py-2.5 text-right font-mono">72</td>
<td className="px-6 py-2.5 text-right font-mono">140</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      4.718
                    </td>
<td className="px-6 py-2.5 text-right font-mono text-white font-medium">
                      660.450
                    </td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-6 py-2.5 font-mono">24</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      280,0 m²
                    </td>
<td className="px-6 py-2.5 text-center font-medium text-white">
                      T3
                    </td>
<td className="px-6 py-2.5 text-right font-mono">72</td>
<td className="px-6 py-2.5 text-right font-mono">140</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      4.851
                    </td>
<td className="px-6 py-2.5 text-right font-mono text-white font-medium">
                      679.140
                    </td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-6 py-2.5 font-mono">25</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      280,0 m²
                    </td>
<td className="px-6 py-2.5 text-center font-medium text-white">
                      T3
                    </td>
<td className="px-6 py-2.5 text-right font-mono">72</td>
<td className="px-6 py-2.5 text-right font-mono">140</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      4.851
                    </td>
<td className="px-6 py-2.5 text-right font-mono text-white font-medium">
                      679.140
                    </td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-6 py-2.5 font-mono">26</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      232,5 m²
                    </td>
<td className="px-6 py-2.5 text-center font-medium text-white">
                      T3
                    </td>
<td className="px-6 py-2.5 text-right font-mono">72</td>
<td className="px-6 py-2.5 text-right font-mono">140</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      4.718
                    </td>
<td className="px-6 py-2.5 text-right font-mono text-white font-medium">
                      660.450
                    </td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-6 py-2.5 font-mono">27</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      297,0 m²
                    </td>
<td className="px-6 py-2.5 text-center font-medium text-white">
                      T3
                    </td>
<td className="px-6 py-2.5 text-right font-mono">72</td>
<td className="px-6 py-2.5 text-right font-mono">140</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      5.135
                    </td>
<td className="px-6 py-2.5 text-right font-mono text-white font-medium">
                      718.850
                    </td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-6 py-2.5 font-mono">33</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      190,0 m²
                    </td>
<td className="px-6 py-2.5 text-center font-medium text-white">
                      T3
                    </td>
<td className="px-6 py-2.5 text-right font-mono">72</td>
<td className="px-6 py-2.5 text-right font-mono">140</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      4.809
                    </td>
<td className="px-6 py-2.5 text-right font-mono text-white font-medium">
                      673.200
                    </td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-6 py-2.5 font-mono">34</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      152,0 m²
                    </td>
<td className="px-6 py-2.5 text-center font-medium text-white">
                      T3
                    </td>
<td className="px-6 py-2.5 text-right font-mono">72</td>
<td className="px-6 py-2.5 text-right font-mono">140</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      4.693
                    </td>
<td className="px-6 py-2.5 text-right font-mono text-white font-medium">
                      657.030
                    </td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-6 py-2.5 font-mono">35</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      152,0 m²
                    </td>
<td className="px-6 py-2.5 text-center font-medium text-white">
                      T3
                    </td>
<td className="px-6 py-2.5 text-right font-mono">72</td>
<td className="px-6 py-2.5 text-right font-mono">140</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      4.906
                    </td>
<td className="px-6 py-2.5 text-right font-mono text-white font-medium">
                      686.895
                    </td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-6 py-2.5 font-mono">36</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      190,0 m²
                    </td>
<td className="px-6 py-2.5 text-center font-medium text-white">
                      T3
                    </td>
<td className="px-6 py-2.5 text-right font-mono">72</td>
<td className="px-6 py-2.5 text-right font-mono">140</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      5.027
                    </td>
<td className="px-6 py-2.5 text-right font-mono text-white font-medium">
                      703.800
                    </td>
</tr>
<tr className="bg-blue-900/10 border-t border-zinc-700">
<td className="px-6 py-3 font-medium text-blue-300" colspan="6">
                      Subtotal T3 (22 moradias)
                    </td>
<td className="px-6 py-3 text-right font-bold font-mono text-blue-300">
                      13.557.255
                    </td>
</tr>

<tr className="bg-emerald-900/20">
<td className="px-6 py-3 text-[11px] font-semibold text-emerald-400 uppercase tracking-wide" colspan="7">
                      MORADIAS T2 (124m² construção) - 14 UNIDADES
                    </td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-6 py-2.5 font-mono">2</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      123,4 m²
                    </td>
<td className="px-6 py-2.5 text-center font-medium text-white">
                      T2
                    </td>
<td className="px-6 py-2.5 text-right font-mono">62</td>
<td className="px-6 py-2.5 text-right font-mono">124</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      4.240
                    </td>
<td className="px-6 py-2.5 text-right font-mono text-white font-medium">
                      525.800
                    </td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-6 py-2.5 font-mono">4</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      123,5 m²
                    </td>
<td className="px-6 py-2.5 text-center font-medium text-white">
                      T2
                    </td>
<td className="px-6 py-2.5 text-right font-mono">62</td>
<td className="px-6 py-2.5 text-right font-mono">124</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      4.240
                    </td>
<td className="px-6 py-2.5 text-right font-mono text-white font-medium">
                      525.800
                    </td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-6 py-2.5 font-mono">6</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      123,5 m²
                    </td>
<td className="px-6 py-2.5 text-center font-medium text-white">
                      T2
                    </td>
<td className="px-6 py-2.5 text-right font-mono">62</td>
<td className="px-6 py-2.5 text-right font-mono">124</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      4.240
                    </td>
<td className="px-6 py-2.5 text-right font-mono text-white font-medium">
                      525.800
                    </td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-6 py-2.5 font-mono">8</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      123,5 m²
                    </td>
<td className="px-6 py-2.5 text-center font-medium text-white">
                      T2
                    </td>
<td className="px-6 py-2.5 text-right font-mono">62</td>
<td className="px-6 py-2.5 text-right font-mono">124</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      4.240
                    </td>
<td className="px-6 py-2.5 text-right font-mono text-white font-medium">
                      525.800
                    </td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-6 py-2.5 font-mono">10</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      123,5 m²
                    </td>
<td className="px-6 py-2.5 text-center font-medium text-white">
                      T2
                    </td>
<td className="px-6 py-2.5 text-right font-mono">62</td>
<td className="px-6 py-2.5 text-right font-mono">124</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      4.452
                    </td>
<td className="px-6 py-2.5 text-right font-mono text-white font-medium">
                      552.090
                    </td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-6 py-2.5 font-mono">12</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      123,5 m²
                    </td>
<td className="px-6 py-2.5 text-center font-medium text-white">
                      T2
                    </td>
<td className="px-6 py-2.5 text-right font-mono">62</td>
<td className="px-6 py-2.5 text-right font-mono">124</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      4.452
                    </td>
<td className="px-6 py-2.5 text-right font-mono text-white font-medium">
                      552.090
                    </td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-6 py-2.5 font-mono">14</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      123,5 m²
                    </td>
<td className="px-6 py-2.5 text-center font-medium text-white">
                      T2
                    </td>
<td className="px-6 py-2.5 text-right font-mono">62</td>
<td className="px-6 py-2.5 text-right font-mono">124</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      3.855
                    </td>
<td className="px-6 py-2.5 text-right font-mono text-white font-medium">
                      478.000
                    </td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-6 py-2.5 font-mono">16</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      123,5 m²
                    </td>
<td className="px-6 py-2.5 text-center font-medium text-white">
                      T2
                    </td>
<td className="px-6 py-2.5 text-right font-mono">62</td>
<td className="px-6 py-2.5 text-right font-mono">124</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      4.452
                    </td>
<td className="px-6 py-2.5 text-right font-mono text-white font-medium">
                      552.090
                    </td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-6 py-2.5 font-mono">18</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      123,5 m²
                    </td>
<td className="px-6 py-2.5 text-center font-medium text-white">
                      T2
                    </td>
<td className="px-6 py-2.5 text-right font-mono">62</td>
<td className="px-6 py-2.5 text-right font-mono">124</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      4.452
                    </td>
<td className="px-6 py-2.5 text-right font-mono text-white font-medium">
                      552.090
                    </td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-6 py-2.5 font-mono">20</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      123,5 m²
                    </td>
<td className="px-6 py-2.5 text-center font-medium text-white">
                      T2
                    </td>
<td className="px-6 py-2.5 text-right font-mono">62</td>
<td className="px-6 py-2.5 text-right font-mono">124</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      4.452
                    </td>
<td className="px-6 py-2.5 text-right font-mono text-white font-medium">
                      552.090
                    </td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-6 py-2.5 font-mono">28</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      123,5 m²
                    </td>
<td className="px-6 py-2.5 text-center font-medium text-white">
                      T2
                    </td>
<td className="px-6 py-2.5 text-right font-mono">62</td>
<td className="px-6 py-2.5 text-right font-mono">124</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      4.664
                    </td>
<td className="px-6 py-2.5 text-right font-mono text-white font-medium">
                      578.380
                    </td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-6 py-2.5 font-mono">29</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      123,5 m²
                    </td>
<td className="px-6 py-2.5 text-center font-medium text-white">
                      T2
                    </td>
<td className="px-6 py-2.5 text-right font-mono">62</td>
<td className="px-6 py-2.5 text-right font-mono">124</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      4.664
                    </td>
<td className="px-6 py-2.5 text-right font-mono text-white font-medium">
                      578.380
                    </td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-6 py-2.5 font-mono">30</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      123,5 m²
                    </td>
<td className="px-6 py-2.5 text-center font-medium text-white">
                      T2
                    </td>
<td className="px-6 py-2.5 text-right font-mono">62</td>
<td className="px-6 py-2.5 text-right font-mono">124</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      4.664
                    </td>
<td className="px-6 py-2.5 text-right font-mono text-white font-medium">
                      578.380
                    </td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-6 py-2.5 font-mono">31</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      123,5 m²
                    </td>
<td className="px-6 py-2.5 text-center font-medium text-white">
                      T2
                    </td>
<td className="px-6 py-2.5 text-right font-mono">62</td>
<td className="px-6 py-2.5 text-right font-mono">124</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      4.664
                    </td>
<td className="px-6 py-2.5 text-right font-mono text-white font-medium">
                      578.380
                    </td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-6 py-2.5 font-mono">32</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      123,5 m²
                    </td>
<td className="px-6 py-2.5 text-center font-medium text-white">
                      T2
                    </td>
<td className="px-6 py-2.5 text-right font-mono">62</td>
<td className="px-6 py-2.5 text-right font-mono">124</td>
<td className="px-6 py-2.5 text-right font-mono text-zinc-400">
                      4.664
                    </td>
<td className="px-6 py-2.5 text-right font-mono text-white font-medium">
                      578.380
                    </td>
</tr>
<tr className="bg-emerald-900/10 border-t border-zinc-700">
<td className="px-6 py-3 font-medium text-emerald-300" colspan="6">
                      Subtotal T2 (14 moradias)
                    </td>
<td className="px-6 py-3 text-right font-bold font-mono text-emerald-300">
                      8.281.350
                    </td>
</tr>

<tr className="bg-zinc-800 border-t border-zinc-700">
<td className="px-6 py-4 font-bold text-white uppercase text-xs" colspan="6">
                      VGV TOTAL - Receita Total de Vendas (36 Moradias)
                    </td>
<td className="px-6 py-4 text-right font-bold font-mono text-white text-sm">
                      21.838.605
                    </td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
<div className="flex items-center gap-3 mb-2 text-zinc-400">
<div className="p-2 bg-zinc-900 rounded-lg border border-zinc-700">
<iconify-icon icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium uppercase tracking-wider">
                  Receita Total (VGV)
                </span>
</div>
<div className="text-2xl lg:text-3xl font-bold tracking-tight text-white font-mono mt-4">
                € 21.838.605
              </div>
</div>
<div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
<div className="flex items-center gap-3 mb-2 text-zinc-400">
<div className="p-2 bg-zinc-900 rounded-lg border border-zinc-700">
<iconify-icon icon="solar:wallet-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium uppercase tracking-wider">
                  (-) CAPEX Total
                </span>
</div>
<div className="text-2xl lg:text-3xl font-bold tracking-tight text-white font-mono mt-4">
                € (14.079.457)
              </div>
</div>
<div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 relative overflow-hidden group">
<div className="absolute right-0 top-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
<div className="flex items-center gap-3 mb-2 text-zinc-400">
<div className="p-2 bg-zinc-900 rounded-lg border border-zinc-700 text-emerald-500">
<iconify-icon icon="solar:wad-of-money-bold" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium uppercase tracking-wider">
                  Lucro Bruto do Projeto
                </span>
</div>
<div className="text-2xl lg:text-3xl font-bold tracking-tight text-white font-mono">
                € 7.759.148
              </div>
<div className="flex items-center gap-2 mt-2">
<span className="inline-flex items-center rounded-md bg-emerald-400/10 px-2 py-1 text-xs font-medium text-emerald-400 ring-1 ring-inset ring-emerald-400/20">
                  Margem Bruta sobre CAPEX: 55,1%
                </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-3xl mx-auto px-6 text-center" id="contact">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900 mb-6">
        Próximos Passos
      </h2>
<p className="text-zinc-500 leading-relaxed mb-10">
        A região de Luz-Almadena atrai predominantemente compradores
        internacionais (EUA, UK, UE). Estratégia focada em pré-venda com forte
        demanda. Estruturas disponíveis: Equity Partnership, Co-Investment e
        Mezzanine Financing.
      </p>
<div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-xl shadow-zinc-200/50">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<div className="text-left">
<p className="text-xs uppercase tracking-wider text-zinc-400 font-medium mb-1">
              Contato para Investidores
            </p>
<h3 className="text-lg font-medium text-zinc-900">
              Walter Sousa | Paulo Vendrame
            </h3>
<p className="text-zinc-500 text-sm">Audaces Capital Team</p>
</div>
<a className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-zinc-900 px-6 py-3 text-sm font-medium text-white shadow hover:bg-zinc-800 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2" href="https://wa.me/351926504180?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o%20sobre%20o%20projeto%20Zion%20Oasis." target="_blank">
<iconify-icon icon="solar:letter-linear" width="18"></iconify-icon>
            Solicitar Reunião
          </a>
</div>
</div>
</section>

<footer className="bg-zinc-50 py-12 border-t border-zinc-200">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 text-xs text-zinc-400 leading-relaxed">
<div>

<div className="mb-6">
<svg className="h-6 w-auto text-black" fill="currentColor" viewbox="0 0 110 20" xmlns="http://www.w3.org/2000/svg">
<text fontFamily="Inter, sans-serif" fontSize="16" font-weight="600" letter-spacing="0.1em" x="0" y="15">
                AUDACES
              </text>
</svg>
</div>
<strong className="block text-zinc-900 mb-2">
            Sobre a Audaces Capital
          </strong>
          Promotora imobiliária especializada em desenvolvimento residencial
          premium em Portugal. Atuamos na estruturação completa de operações, da
          seleção de ativos e estudos de viabilidade à arquitetura, engenharia,
          construção e comercialização.
        </div>
<div className="mt-0 md:mt-12">
<strong className="block text-zinc-900 mb-2">Disclaimer</strong>
          Este documento é uma análise preliminar para discussão inicial. As
          projeções financeiras baseiam-se em premissas de mercado validadas,
          sujeitas a ajustes durante due diligence detalhada. Não constitui
          oferta pública de valores mobiliários.
        </div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-zinc-200 flex justify-between items-center text-xs text-zinc-400">
<span>© 2026 Audaces Capital. Todos os direitos reservados.</span>
<div className="flex gap-4">
<a className="hover:text-zinc-600" href="#">Privacidade</a>
<a className="hover:text-zinc-600" href="#">Termos</a>
</div>
</div>
</footer>

    </>
  );
}
