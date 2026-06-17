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
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/3dglassherobg-xhxFCKvVSQv5b7qPD9xIZ5yC" width="100%"></iframe></div>

<div className="relative overflow-x-hidden">

<div aria-hidden="true" className="fixed inset-0 -z-10">
<img alt="" className="w-full h-full object-cover" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BG.png-t7ROxOf3ZzQbtRqASVzdAio56Yi2Cj.jpeg" style={{filter: 'saturate(0.9) contrast(0.9)'}}/>
<div className="absolute inset-0 bg-black/65"></div>
</div>

<header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/50 bg-slate-900/80 backdrop-blur-sm" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="h-16 flex items-center justify-between">
<a className="inline-flex items-center gap-3" data-animate="" href="#" style={{opacity: '1', transform: 'none', '--d': '0ms'}}>

<div className="tracking-tight" style={{fontWeight: '600', letterSpacing: '-0.06em', fontSize: '20px', background: 'linear-gradient(92.52deg, var(--main-red) 29.95%, var(--main-yellow) 48.66%, var(--roxo-vibrante) 86.58%)', backgroundSize: '200% 200%', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', animation: 'moveGradient 4s infinite linear'}}>aisa</div>
<div className="text-slate-400 text-xs font-sans font-light" style={{}}>by Escale</div>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="hover:text-[var(--roxo-vibrante)] transition-colors font-medium font-sans text-slate-100" data-animate="" href="#produto" style={{opacity: '1', transform: 'none', '--d': '80ms'}}>Produto</a>
<a className="hover:text-[var(--roxo-vibrante)] transition-colors font-medium font-sans text-slate-100" data-animate="" href="#cases" style={{opacity: '1', transform: 'none', '--d': '160ms'}}>Cases</a>
<a className="hover:text-[var(--roxo-vibrante)] transition-colors font-medium font-sans text-slate-100" data-animate="" href="#quem-somos" style={{opacity: '1', transform: 'none', '--d': '240ms'}}>Quem somos</a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden md:inline-flex items-center px-5 py-2 rounded-lg text-sm text-white transition-shadow font-sans font-light" data-animate="" style={{boxShadow: 'rgba(255, 140, 50, 0.12) 0px 6px 18px', opacity: '1', transform: 'none', '--d': '320ms', backgroundImage: '', backgroundPositionX: '', backgroundPositionY: '', backgroundRepeat: '', backgroundAttachment: '', backgroundOrigin: '', backgroundClip: '', backgroundColor: '', backgroundSize: '200% 200%'}}>Solicite uma demo</button>
<button aria-label="menu" className="md:hidden p-2 rounded-md bg-slate-800 hover:bg-slate-700" style={{}}>

<svg className="text-slate-200" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 18 12" width="18"><path d="M0.75 1.5h16.5M0.75 6h16.5M0.75 10.5h16.5"></path></svg>
</button>
</div>
</div>
</div>
</header>

<main className="pt-24">
<section className="pt-16 pr-6 pb-16 pl-6">
<div className="max-w-4xl text-center mr-auto ml-auto">
<div className="w-[min(92vw,720px)] relative mr-auto mb-6 ml-auto" data-animate="" style={{opacity: '1', transform: 'none', '--d': '400ms'}}>
<div aria-hidden="true" style={{position: 'absolute', inset: '0', pointerEvents: 'none', background: 'linear-gradient(120deg,rgba(255,255,255,0) 30%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0) 70%)', mixBlendMode: 'screen', animation: 'none'}}></div><img alt="aisa" className="w-full h-auto select-none object-cover" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Varia%C3%A7%C3%B5es%20logo-02-oouKSPKdTjwiYsXS7oVsgHNFB4urwK.png?w=800&amp;q=80" style={{filter: 'brightness(1.05) saturate(1.05)', width: 'min(92vw, 980px)', display: 'block', margin: '0px auto'}}/>
</div>
<h1 className="text-5xl md:text-6xl text-white leading-tight mb-4 font-sans tracking-tight font-light" data-animate="" style={{letterSpacing: '-0.01em', opacity: '1', transform: 'none', '--d': '480ms'}}>a agente de IA da Escale para transformar conversas em vendas</h1>
<p className="max-w-3xl mr-auto mb-8 ml-auto font-light text-slate-100" data-animate="" style={{fontWeight: '500', opacity: '1', transform: 'none', '--d': '560ms'}}>Multicanal, especializada e pensada para escalar. Muito além de um chatbot — inteligência aplicada, performance e integração real com seu stack.</p>
<div className="" data-animate="" style={{opacity: '1', transform: 'none', '--d': '640ms'}}>
<button className="px-8 py-3 rounded-full text-lg text-white font-semibold transition-transform transform hover:-translate-y-0.5 font-sans" style={{background: 'linear-gradient(90deg, var(--roxo-vibrante), var(--roxo-claro))'}}>Quero uma demonstração</button>
</div>
</div>
</section>

<section className="pr-6 pb-12 pl-6">
<div className="max-w-6xl mx-auto">
<div className="grid gap-6 bg-slate-900/50 border-slate-700/50 border rounded-2xl pt-8 pr-8 pb-8 pl-8 backdrop-blur-sm" style={{}}>
<div className="text-center" data-animate="" style={{opacity: '1', transform: 'none', d: '720ms'}}>
<h2 className="md:text-3xl text-2xl font-semibold tracking-tight mb-2" style={{}}>
<span className="font-sans font-semibold tracking-tight" style={{color: 'var(--main-red'}}>10+ anos</span> de expertise em vendas agora com IA
    </h2>
<p className="font-medium text-slate-100" style={{}}>
      A Escale ajudou milhares de vendas em Telco, Energia, Seguros e Finance — agora com aisa, tudo em escala e com governança.
    </p>
</div>

<div className="relative">

<div className="overflow-x-auto no-scrollbar -mx-2 pt-6 pr-2 pb-6 pl-2">
<div className="flex items-stretch gap-6 px-2">

<div className="min-w-[260px] w-[260px] rounded-2xl overflow-hidden shadow-xl border border-slate-700/40 bg-gradient-to-tr from-white/5 to-white/3 backdrop-blur-md" style={{}}>
<div className="h-[140px] bg-center bg-cover relative" id="aura-eme3dr9qz" style={{backgroundImage: 'url(https://cdn.prod.website-files.com/679d467e1ba7f0477be7d60e/67aa60414cb570daf413cb8a_bv.svg)'}}></div>
<div className="p-4 bg-white/6 backdrop-blur-sm">
<div className="flex items-start justify-between">
<div className="">
<div className="text-2xl tracking-tight font-sans font-semibold default">+40%</div>
<div className="text-sm mt-1 font-sans text-slate-100" style={{}}>de conversão</div>
<div className="text-slate-500 text-xs mt-1 font-sans font-light" style={{}}>(vs. modelo tradicional)</div>
</div>
<div className="ml-3 self-end">
<span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10">

<svg className="w-4 h-4 text-slate-200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 17L17 7"></path><path d="M7 7h10v10"></path></svg>
</span>
</div>
</div>
</div>
</div>

<div className="min-w-[260px] w-[260px] rounded-2xl overflow-hidden shadow-xl border border-slate-700/40 bg-gradient-to-tr from-white/5 to-white/3 backdrop-blur-md" style={{}}>
<div 679d467e1ba7f0477be7d60e="" 67aa9187e1961d612243b85a_claro.svg"="" className="h-[140px] bg-center bg-cover" id="aura-eme3dt4g7" style={{backgroundImage: 'url(https://cdn.prod.website-files.com/679d467e1ba7f0477be7d60e/67aa9187e1961d612243b85a_claro.svg)'}}></div><div className="p-4 bg-white/6 backdrop-blur-sm">
<div className="flex items-start justify-between">
<div className="">
<div className="text-2xl tracking-tight font-sans font-semibold default" style={{}}>58%</div>
<div className="text-sm mt-1 font-sans text-slate-100" style={{}}>de redução</div>
<div className="text-slate-500 text-xs mt-1 font-sans font-light" style={{}}>custo operacional</div>
</div>
<div className="ml-3 self-end">
<span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10">
<svg className="w-4 h-4 text-slate-200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 17L17 7"></path><path className="" d="M7 7h10v10"></path></svg>
</span>
</div>
</div>
</div>
</div>

<div className="min-w-[260px] w-[260px] rounded-2xl overflow-hidden shadow-xl border border-slate-700/40 bg-gradient-to-tr from-white/5 to-white/3 backdrop-blur-md" style={{}}>
<div className="h-[140px] bg-center bg-cover" style={{backgroundImage: 'url(\'https://cdn.prod.website-files.com/679d467e1ba7f0477be7d60e/67aa919bf2ae86f6435eb480_itau.svg\')'}}></div>
<div className="p-4 bg-white/6 backdrop-blur-sm">
<div className="flex items-start justify-between">
<div className="">
<div className="text-2xl tracking-tight font-sans font-semibold default">R$ 2,1bi</div>
<div className="text-sm mt-1 font-sans text-slate-100" style={{}}>em GMV</div>
<div className="text-slate-500 text-xs mt-1 font-sans font-light" style={{}}>gerado com IA</div>
</div>
<div className="ml-3 self-end">
<span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10">
<svg className="w-4 h-4 text-slate-200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 17L17 7"></path><path d="M7 7h10v10"></path></svg>
</span>
</div>
</div>
</div>
</div>

<div className="min-w-[260px] w-[260px] rounded-2xl overflow-hidden shadow-xl border border-slate-700/40 bg-gradient-to-tr from-white/5 to-white/3 backdrop-blur-md" style={{}}>
<div className="h-[140px] bg-center bg-cover" style={{backgroundImage: 'url(\'https://cdn.prod.website-files.com/679d467e1ba7f0477be7d60e/67b7cee49f006c9f23ac895f_oi.png\')'}}></div>
<div className="p-4 bg-white/6 backdrop-blur-sm">
<div className="flex items-start justify-between">
<div className="">
<div className="text-2xl tracking-tight font-sans font-semibold default">+64%</div>
<div className="text-sm mt-1 font-sans text-slate-100" style={{}}>aumento SQLs</div>
<div className="text-slate-500 text-xs mt-1 font-sans font-light" style={{}}>com campanhas</div>
</div>
<div className="ml-3 self-end">
<span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10">
<svg className="w-4 h-4 text-slate-200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 17L17 7"></path><path d="M7 7h10v10"></path></svg>
</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-4 right-4 flex gap-2">

<button aria-label="Anterior" className="p-2 rounded-full border border-slate-700/30 bg-slate-800 hover:scale-105 transition" style={{}}>

<svg className="w-5 h-5 text-slate-200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m15 18-6-6 6-6"></path></svg>
</button>

<button aria-label="Próximo" className="p-2 rounded-full border border-slate-700/30 bg-slate-800 hover:scale-105 transition" style={{}}>

<svg className="w-5 h-5 text-slate-200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="pr-6 pb-12 pl-6" id="agentes">
<div className="max-w-4xl mx-auto text-center mb-8" data-animate="" style={{opacity: '1', transform: 'none', '--d': '1120ms'}}>
<h2 className="text-2xl md:text-3xl font-sans font-semibold tracking-tight" style={{}}>
<span className="font-sans font-semibold tracking-tight" style={{color: 'var(--roxo-vibrante)'}}>Agentes especializados</span><br/>para cada etapa da jornada comercial
    </h2>
</div>
<div className="max-w-7xl mx-auto px-4">

<div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
<h3 className="max-w-lg text-3xl md:text-4xl font-sans font-semibold tracking-tight leading-tight">
        Nossas inteligências especializadas
        <span className="block text-slate-400 mt-1 text-lg font-sans font-light">para qualificar, converter, ativar e reter em escala</span>
</h3>
<button className="whitespace-nowrap rounded-lg bg-slate-800 px-4 py-2 font-sans font-medium text-white shadow-xl transition-colors hover:bg-slate-700">
        Saiba mais
      </button>
</div>

<div className="mb-6 grid grid-cols-12 gap-4">

<div className="col-span-12 md:col-span-4">
<div className="group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-900/50 border border-slate-700/40 p-8">
<div className="mx-auto mb-6 w-16 h-16 rounded-xl flex items-center justify-center" style={{background: 'linear-gradient(90deg, var(--roxo-vibrante), var(--roxo-claro))'}}>

<svg className="text-white" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<h4 className="text-3xl font-sans font-medium tracking-tight mb-2 text-center">Qualifier Agent</h4>
<p className="text-center font-sans font-light text-slate-100">Identifica, ranqueia e qualifica leads com base em contexto real. Atende todos os contatos, 24/7.</p>

<div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-[color:var(--roxo-vibrante)] to-[color:var(--roxo-claro)] p-4 transition-transform duration-200 group-hover:translate-y-4 group-hover:rotate-[2deg]">
<span className="block text-center font-sans font-semibold text-indigo-50">DEMONSTRAÇÃO</span>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-8">
<div className="group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-900/50 border border-slate-700/40 p-8">
<div className="mx-auto mb-6 w-16 h-16 rounded-xl flex items-center justify-center" style={{background: 'linear-gradient(90deg, var(--main-red), var(--main-yellow))'}}>

<svg className="text-white" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28"><path d="M13 2L3 14h9l-1 8L21 10h-9l1-8z"></path></svg>
</div>
<h4 className="text-3xl font-sans font-medium tracking-tight mb-2 text-center">Closer Agent</h4>
<p className="text-center font-sans font-light text-slate-100">Negocia, supera objeções e conduz até a proposta final. Treinado com técnicas reais de vendas.</p>
<div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-[color:var(--main-red)] to-[color:var(--main-yellow)] p-4 transition-transform duration-200 group-hover:translate-y-4 group-hover:rotate-[2deg]">
<span className="block text-center font-sans font-semibold text-orange-50">DEMONSTRAÇÃO</span>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-12 gap-4">

<div className="col-span-12 md:col-span-8">
<div className="group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-900/50 border border-slate-700/40 p-8">
<div className="mx-auto mb-6 w-16 h-16 rounded-xl flex items-center justify-center" style={{background: 'linear-gradient(90deg, #ff7ab6, #ff4d9e)'}}>

<svg className="text-white" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28"><path d="M2 21s4-1 6-4 4-6 9-9 4-6 4-6-3 1-6 4-9 9-9 9-3 4-4 6z"></path></svg>
</div>
<h4 className="text-3xl font-sans font-medium tracking-tight mb-2 text-center">Activator Agent</h4>
<p className="text-center font-sans font-light text-slate-100">Ativa vendas com integração a sistemas, valida dados e garante pagamento com fluidez.</p>
<div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-rose-400 to-pink-500 p-4 transition-transform duration-200 group-hover:translate-y-4 group-hover:rotate-[2deg]">
<span className="block text-center font-sans font-semibold text-emerald-50">DEMONSTRAÇÃO</span>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-4">
<div className="group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-900/50 border border-slate-700/40 p-8">
<div className="mx-auto mb-6 w-16 h-16 rounded-xl flex items-center justify-center" style={{background: 'linear-gradient(90deg, #34d399, #10b981)'}}>

<svg className="text-white" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28"><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path></svg>
</div>
<h4 className="text-3xl font-sans font-medium tracking-tight mb-2 text-center">Marketer &amp; Collections</h4>
<p className="text-center font-sans font-light text-slate-100">Engajamento automatizado no pré e pós-venda com personalização e eficiência.</p>
<div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-green-400 to-emerald-400 p-4 transition-transform duration-200 group-hover:translate-y-4 group-hover:rotate-[2deg]">
<span className="block text-center font-sans font-semibold text-emerald-50">DEMONSTRAÇÃO</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 pb-12" id="integracoes">
<div className="max-w-6xl mx-auto text-center mb-6" data-animate="" style={{opacity: '1', transform: 'none', '--d': '1200ms'}}>
<h2 className="md:text-3xl text-2xl font-bold tracking-tight" style={{}}>Conectada ao seu stack.<br/><span className="font-sans font-bold tracking-tight" style={{color: 'var(--roxo-vibrante)'}}>Pronta para operar em produção.</span></h2>
<p className="mt-3 font-medium font-sans text-slate-100" style={{}}>Integrada a CRMs, gateways, scoring e mais — segurança e rastreabilidade.</p>
</div>
<div className="max-w-4xl mx-auto">
<div className="grid grid-cols-4 gap-4">
<div className="rounded-lg p-4 bg-slate-800/60 border border-slate-700/40 text-center hover:border-[var(--roxo-claro)] transition" data-animate="" style={{opacity: '1', transform: 'none', '--d': '1280ms'}}>
<div className="w-8 h-8 mx-auto rounded-md bg-slate-700 flex items-center justify-center mb-2" style={{}}>
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path></svg>
</div>
<div className="text-xs font-semibold text-slate-200 font-sans" style={{}}>Salesforce</div>
</div>
<div className="rounded-lg p-4 bg-slate-800/60 border border-slate-700/40 text-center hover:border-[var(--roxo-claro)] transition" data-animate="" style={{opacity: '1', transform: 'none', '--d': '1360ms'}}>
<div className="w-8 h-8 mx-auto rounded-md bg-slate-700 flex items-center justify-center mb-2" style={{}}>
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16"><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div className="text-xs font-semibold text-slate-200 font-sans" style={{}}>HubSpot</div>
</div>
<div className="rounded-lg p-4 bg-slate-800/60 border border-slate-700/40 text-center hover:border-[var(--roxo-claro)] transition" data-animate="" style={{opacity: '1', transform: 'none', '--d': '1440ms'}}>
<div className="w-8 h-8 mx-auto rounded-md bg-slate-700 flex items-center justify-center mb-2" style={{}}>
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16"><path d="M12 2a10 10 0 1 0 0 20"></path></svg>
</div>
<div className="text-xs font-semibold text-slate-200 font-sans" style={{}}>Gateways</div>
</div>
<div className="rounded-lg p-4 bg-slate-800/60 border border-slate-700/40 text-center hover:border-[var(--roxo-claro)] transition" data-animate="" style={{opacity: '1', transform: 'none', '--d': '1520ms'}}>
<div className="w-8 h-8 mx-auto rounded-md bg-slate-700 flex items-center justify-center mb-2" style={{}}>
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16"><path d="M12 2v20"></path></svg>
</div>
<div className="text-xs font-semibold text-slate-200 font-sans" style={{}}>Scoring</div>
</div>
</div>
</div>
</section>

<section className="pr-6 pb-20 pl-6">
<div className="max-w-4xl mx-auto">
<div className="rounded-2xl border border-slate-700/50 bg-slate-900/50 p-8 text-center" style={{}}>
<h2 className="md:text-3xl text-2xl font-bold tracking-tight mb-3" style={{}}>Pronto para escalar com <span className="font-bold tracking-tight" style={{color: 'var(--roxo-vibrante)'}}>IA de verdade?</span></h2>
<p className="max-w-2xl mx-auto mb-6 font-medium font-sans text-slate-100" style={{}}>aisa transforma operações comerciais complexas em resultados concretos. A sua pode ser a próxima.</p>
<button className="px-8 py-3 rounded-full text-lg text-white font-semibold font-sans" style={{background: 'linear-gradient(90deg, var(--roxo-vibrante), var(--roxo-claro))'}}>Quero uma demonstração</button>
</div>
</div>
</section>
</main>

<footer className="bg-slate-900 border-t border-slate-800" style={{}}>
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="">
<div className="text-white mb-3 font-sans" style={{fontWeight: '600', fontSize: '18px', letterSpacing: '-0.06em'}}>aisa</div>
<p className="text-slate-400 text-sm mb-4 font-sans" style={{}}>A agente de IA da Escale para transformar conversas em vendas.</p>
<div className="flex gap-3">
<a className="text-slate-400 hover:text-white" href="#" style={{}}><svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16"><rect height="20" rx="5" width="20" x="2" y="2"></rect><circle cx="12" cy="12" r="4"></circle></svg></a>
<a className="text-slate-400 hover:text-white" href="#" style={{}}></a></div></div></div></div></footer></div>
    </>
  );
}
