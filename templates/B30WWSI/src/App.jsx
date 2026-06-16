import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize Lucide icons with consistent stroke width
      window.addEventListener('DOMContentLoaded', () => {
        if (window.lucide && typeof window.lucide.createIcons === 'function') {
          window.lucide.createIcons({
            attrs: { 'stroke-width': 1.5 }
          });
        }
        // Year
        const y = document.getElementById('year');
        if (y) y.textContent = new Date().getFullYear();
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_10%_10%,rgba(99,102,241,0.08),transparent),radial-gradient(50%_50%_at_90%_20%,rgba(56,189,248,0.08),transparent)]"></div>
<div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[80rem] h-[30rem] blur-3xl opacity-30 bg-gradient-to-r from-indigo-600/20 via-sky-500/20 to-cyan-500/20 rounded-full"></div>
</div>

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-[#0B0E14]/60 border-b border-white/5">
<div className="mx-auto max-w-7xl px-6">
<div className="flex h-16 items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="h-8 w-8 rounded-md grid place-items-center ring-1 ring-white/10 bg-white/5 text-slate-100 group-hover:ring-indigo-400/40 transition-colors">
<span className="text-xs font-semibold tracking-tight">OA</span>
</div>
<span className="text-slate-100 text-base sm:text-lg font-semibold tracking-tight">Onebase Agenda</span>
</a>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-slate-200 ring-1 ring-white/10 hover:ring-slate-300/30 hover:text-white transition-colors" href="#precos">
<i className="w-4 h-4" data-lucide="info"></i>
              Planos
            </a>
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold tracking-tight bg-indigo-500 text-white hover:bg-indigo-400 active:bg-indigo-500/90 ring-1 ring-indigo-400/30 hover:ring-indigo-300/50 shadow-sm shadow-indigo-950/30 transition-all" href="#cadastro">
<i className="w-4 h-4" data-lucide="user-plus"></i>
              Fazer Cadastro
            </a>
</div>
</div>
</div>
</header>
<main>

<section className="relative">
<div className="mx-auto max-w-7xl px-6 pt-14 pb-10 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-20">
<div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
<div className="space-y-6">
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
                Mais clientes, menos mensagens. Agendamentos automáticos para você atender mais.
              </h1>
<p className="text-slate-400 text-base sm:text-lg">
                Compartilhe seu link, receba horários confirmados e foque no que importa: atender seus clientes.
              </p>
<div className="flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold tracking-tight bg-indigo-500 text-white hover:bg-indigo-400 active:bg-indigo-500/90 ring-1 ring-indigo-400/30 hover:ring-indigo-300/50 shadow-sm shadow-indigo-950/30 transition-all" href="#precos" id="cadastro">
<i className="w-5 h-5" data-lucide="rocket"></i>
                  Fazer Cadastro
                </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium text-slate-200 ring-1 ring-white/10 hover:ring-slate-300/30 hover:text-white transition-all" href="#como-funciona">
<i className="w-5 h-5" data-lucide="mouse-pointer"></i>
                  Ver como funciona
                </a>
</div>
<ul className="grid sm:grid-cols-3 gap-3 pt-4">
<li className="flex items-center gap-3 rounded-lg ring-1 ring-white/10 bg-white/5 px-3 py-2 hover:ring-indigo-400/30 transition-colors">
<i className="w-5 h-5 text-indigo-400" data-lucide="calendar"></i>
<span className="text-sm font-medium">Agenda Online</span>
</li>
<li className="flex items-center gap-3 rounded-lg ring-1 ring-white/10 bg-white/5 px-3 py-2 hover:ring-indigo-400/30 transition-colors">
<i className="w-5 h-5 text-sky-400" data-lucide="message-circle"></i>
<span className="text-sm font-medium">Agendamento via WhatsApp</span>
</li>
<li className="flex items-center gap-3 rounded-lg ring-1 ring-white/10 bg-white/5 px-3 py-2 hover:ring-indigo-400/30 transition-colors">
<i className="w-5 h-5 text-cyan-400" data-lucide="link-2"></i>
<span className="text-sm font-medium">Link de Agendamento Copiável</span>
</li>
</ul>
</div>

<div className="relative">
<div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-indigo-500/10 via-sky-400/10 to-cyan-400/10 blur-2xl"></div>
<div className="relative rounded-xl border border-white/10 bg-[#0F1420]/80 backdrop-blur p-4 sm:p-6 shadow-2xl shadow-black/40">
<div className="flex items-center justify-between pb-3">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-white/5 ring-1 ring-white/10 grid place-items-center">
<i className="w-4 h-4 text-indigo-400" data-lucide="calendar-check-2"></i>
</div>
<div>
<p className="text-sm text-slate-300 font-medium">Agendar Consulta</p>
<p className="text-xs text-slate-500">com Ana Costa</p>
</div>
</div>
<span className="text-xs text-slate-400">Fuso: BRT</span>
</div>
<div className="grid grid-cols-7 gap-2 border-t border-white/5 pt-4">

<button className="flex flex-col items-center gap-1 rounded-md px-2 py-2 ring-1 ring-white/10 hover:ring-indigo-400/30 hover:bg-white/5 transition">
<span className="text-[10px] text-slate-400">Seg</span>
<span className="text-sm font-medium">12</span>
</button>
<button className="flex flex-col items-center gap-1 rounded-md px-2 py-2 ring-1 ring-white/10 hover:ring-indigo-400/30 hover:bg-white/5 transition">
<span className="text-[10px] text-slate-400">Ter</span>
<span className="text-sm font-medium">13</span>
</button>
<button className="flex flex-col items-center gap-1 rounded-md px-2 py-2 ring-1 ring-indigo-400/40 bg-indigo-500/10 transition">
<span className="text-[10px] text-indigo-300">Qua</span>
<span className="text-sm font-semibold text-white">14</span>
</button>
<button className="flex flex-col items-center gap-1 rounded-md px-2 py-2 ring-1 ring-white/10 hover:ring-indigo-400/30 hover:bg-white/5 transition">
<span className="text-[10px] text-slate-400">Qui</span>
<span className="text-sm font-medium">15</span>
</button>
<button className="flex flex-col items-center gap-1 rounded-md px-2 py-2 ring-1 ring-white/10 hover:ring-indigo-400/30 hover:bg-white/5 transition">
<span className="text-[10px] text-slate-400">Sex</span>
<span className="text-sm font-medium">16</span>
</button>
<button className="flex flex-col items-center gap-1 rounded-md px-2 py-2 ring-1 ring-white/10 opacity-50 cursor-not-allowed">
<span className="text-[10px] text-slate-500">Sáb</span>
<span className="text-sm font-medium">17</span>
</button>
<button className="flex flex-col items-center gap-1 rounded-md px-2 py-2 ring-1 ring-white/10 opacity-50 cursor-not-allowed">
<span className="text-[10px] text-slate-500">Dom</span>
<span className="text-sm font-medium">18</span>
</button>
</div>

<div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
<button className="w-full rounded-md px-3 py-2 text-sm ring-1 ring-white/10 bg-white/5 hover:ring-indigo-400/40 hover:bg-indigo-500/10 transition">09:00</button>
<button className="w-full rounded-md px-3 py-2 text-sm ring-1 ring-white/10 bg-white/5 hover:ring-indigo-400/40 hover:bg-indigo-500/10 transition">10:30</button>
<button className="w-full rounded-md px-3 py-2 text-sm ring-1 ring-white/10 bg-white/5 hover:ring-indigo-400/40 hover:bg-indigo-500/10 transition">11:00</button>
<button className="w-full rounded-md px-3 py-2 text-sm ring-1 ring-white/10 bg-white/5 hover:ring-indigo-400/40 hover:bg-indigo-500/10 transition">14:00</button>
<button className="w-full rounded-md px-3 py-2 text-sm ring-1 ring-white/10 bg-white/5 hover:ring-indigo-400/40 hover:bg-indigo-500/10 transition">15:30</button>
<button className="w-full rounded-md px-3 py-2 text-sm ring-1 ring-white/10 bg-white/5 hover:ring-indigo-400/40 hover:bg-indigo-500/10 transition">16:00</button>
</div>
<div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
<div className="flex items-center gap-3">
<img alt="Cliente" className="h-8 w-8 rounded-full ring-1 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm text-slate-300">Cliente: João Silva</p>
<p className="text-xs text-slate-500">Consulta de 30 minutos</p>
</div>
</div>
<button className="inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm font-medium bg-emerald-500 text-white hover:bg-emerald-400 ring-1 ring-emerald-400/30 hover:ring-emerald-300/50 transition">
<i className="w-4 h-4" data-lucide="check-circle-2"></i>
                    Confirmar
                  </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="como-funciona">
<div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:py-20">
<div className="max-w-3xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Você recebe um link, o cliente escolhe o horário e está agendado.</h2>
<p className="mt-3 text-slate-400">Sem planilhas, sem vai e volta no chat. Tudo direto na sua agenda.</p>
</div>
<div className="mt-10 grid lg:grid-cols-2 gap-10 lg:gap-16">
<div className="grid sm:grid-cols-3 gap-4">
<div className="rounded-lg p-4 ring-1 ring-white/10 bg-white/5 hover:ring-indigo-400/30 transition">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-indigo-400" data-lucide="notebook-pen"></i>
<h3 className="text-sm font-semibold tracking-tight text-white">Crie sua Agenda</h3>
</div>
<p className="mt-2 text-sm text-slate-400">Defina serviços, duração e horários disponíveis em poucos cliques.</p>
</div>
<div className="rounded-lg p-4 ring-1 ring-white/10 bg-white/5 hover:ring-indigo-400/30 transition">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-sky-400" data-lucide="link"></i>
<h3 className="text-sm font-semibold tracking-tight text-white">Link de Agendamento</h3>
</div>
<p className="mt-2 text-sm text-slate-400">Compartilhe o link por WhatsApp, Instagram ou onde preferir.</p>
</div>
<div className="rounded-lg p-4 ring-1 ring-white/10 bg-white/5 hover:ring-indigo-400/30 transition">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-cyan-400" data-lucide="layout-dashboard"></i>
<h3 className="text-sm font-semibold tracking-tight text-white">Painel do Profissional</h3>
</div>
<p className="mt-2 text-sm text-slate-400">Visualize, confirme e gerencie seus atendimentos em um só lugar.</p>
</div>
</div>

<div className="relative">
<div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-indigo-500/10 via-sky-400/10 to-cyan-400/10 blur-2xl"></div>
<div className="relative rounded-xl border border-white/10 bg-[#0F1420]/80 backdrop-blur p-4 sm:p-6 shadow-2xl shadow-black/40">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-white/5 ring-1 ring-white/10 grid place-items-center">
<i className="w-4 h-4 text-indigo-400" data-lucide="user-cog"></i>
</div>
<div>
<p className="text-sm font-medium text-slate-200">Painel do Profissional</p>
<p className="text-xs text-slate-500">Hoje • 14:00 — 18:00</p>
</div>
</div>
<div className="inline-flex items-center gap-2 rounded-md px-2.5 py-1.5 text-xs ring-1 ring-emerald-400/30 text-emerald-300 bg-emerald-500/10">
<i className="w-3.5 h-3.5" data-lucide="check"></i>
                    5 agendamentos
                  </div>
</div>
<div className="mt-4 grid sm:grid-cols-2 gap-3">

<div className="rounded-lg p-3 ring-1 ring-white/10 bg-white/5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Cliente" className="h-8 w-8 rounded-full ring-1 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm text-slate-200">Mariana Alves</p>
<p className="text-xs text-slate-500">Corte • 30 min</p>
</div>
</div>
<span className="text-xs text-slate-400">14:00</span>
</div>
<div className="mt-2 flex items-center gap-2">
<i className="w-4 h-4 text-sky-400" data-lucide="message-square-dashed"></i>
<p className="text-xs text-slate-400 truncate">Mensagem confirmada no WhatsApp</p>
</div>
</div>
<div className="rounded-lg p-3 ring-1 ring-white/10 bg-white/5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Cliente" className="h-8 w-8 rounded-full ring-1 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm text-slate-200">Thiago Rocha</p>
<p className="text-xs text-slate-500">Consultoria • 60 min</p>
</div>
</div>
<span className="text-xs text-slate-400">15:00</span>
</div>
<div className="mt-2 flex items-center gap-2">
<i className="w-4 h-4 text-indigo-400" data-lucide="bell-ring"></i>
<p className="text-xs text-slate-400 truncate">Lembrete automático em 2h</p>
</div>
</div>
<div className="rounded-lg p-3 ring-1 ring-white/10 bg-white/5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Cliente" className="h-8 w-8 rounded-full ring-1 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1545996124-0501ebae84d0?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm text-slate-200">Carlos Lima</p>
<p className="text-xs text-slate-500">Retorno • 30 min</p>
</div>
</div>
<span className="text-xs text-slate-400">16:30</span>
</div>
<div className="mt-2 flex items-center gap-2">
<i className="w-4 h-4 text-emerald-400" data-lucide="shield-check"></i>
<p className="text-xs text-slate-400 truncate">Confirmado</p>
</div>
</div>
<div className="rounded-lg p-3 ring-1 ring-white/10 bg-white/5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Cliente" className="h-8 w-8 rounded-full ring-1 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div>
<p className="text-sm text-slate-200">Roberta Dias</p>
<p className="text-xs text-slate-500">Avaliação • 45 min</p>
</div>
</div>
<span className="text-xs text-slate-400">17:15</span>
</div>
<div className="mt-2 flex items-center gap-2">
<i className="w-4 h-4 text-rose-400" data-lucide="x-octagon"></i>
<p className="text-xs text-slate-400 truncate">Cancelado pelo cliente</p>
</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-indigo-400" data-lucide="bar-chart-3"></i>
<p className="text-xs text-slate-400">Taxa de comparecimento: 96%</p>
</div>
<button className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-xs font-medium bg-white/5 text-slate-200 hover:bg-white/10 ring-1 ring-white/10 hover:ring-indigo-400/30 transition">
<i className="w-3.5 h-3.5" data-lucide="download"></i>
                    Exportar
                  </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:py-20">
<div className="max-w-3xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Por que Utilizar?</h2>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-4 lg:gap-6">
<div className="rounded-xl p-5 ring-1 ring-white/10 bg-white/5 hover:ring-indigo-400/30 transition">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-indigo-400" data-lucide="clock-8"></i>
<h3 className="text-base font-semibold tracking-tight text-white">Mais Tempo Livre</h3>
</div>
<p className="mt-2 text-sm text-slate-400">Menos mensagens, menos burocracia.</p>
</div>
<div className="rounded-xl p-5 ring-1 ring-white/10 bg-white/5 hover:ring-indigo-400/30 transition">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-sky-400" data-lucide="calendar-range"></i>
<h3 className="text-base font-semibold tracking-tight text-white">Agenda Cheia</h3>
</div>
<p className="mt-2 text-sm text-slate-400">Menos furos, mais atendimentos.</p>
</div>
<div className="rounded-xl p-5 ring-1 ring-white/10 bg-white/5 hover:ring-indigo-400/30 transition">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-cyan-400" data-lucide="folder-check"></i>
<h3 className="text-base font-semibold tracking-tight text-white">Tudo Sob Controle</h3>
</div>
<p className="mt-2 text-sm text-slate-400">Dados organizados e acessíveis.</p>
</div>
</div>
</div>
</section>

<section className="relative" id="precos">
<div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:py-20">
<div className="max-w-3xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Investimento que se paga rápido</h2>
<p className="mt-3 text-slate-400">Escolha o plano ideal para o seu momento.</p>
</div>
<div className="mt-10 grid lg:grid-cols-2 gap-6">

<div className="relative rounded-2xl ring-1 ring-white/10 bg-white/5 p-6 lg:p-8 hover:ring-indigo-400/30 transition">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-emerald-400" data-lucide="leaf"></i>
<h3 className="text-lg font-semibold tracking-tight text-white">Plano Base</h3>
</div>
<div className="text-right">
<p className="text-2xl font-semibold tracking-tight text-white">R$ 97<span className="text-base font-medium text-slate-400">/mês</span></p>
</div>
</div>
<ul className="mt-5 space-y-3">
<li className="flex items-start gap-3 text-sm text-slate-300">
<i className="w-4 h-4 text-emerald-400 mt-0.5" data-lucide="check"></i>
                  Link de agendamento
                </li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<i className="w-4 h-4 text-emerald-400 mt-0.5" data-lucide="check"></i>
                  Painel do profissional
                </li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<i className="w-4 h-4 text-emerald-400 mt-0.5" data-lucide="check"></i>
                  WhatsApp com mensagem personalizada
                </li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<i className="w-4 h-4 text-emerald-400 mt-0.5" data-lucide="check"></i>
                  Suporte por e-mail
                </li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<i className="w-4 h-4 text-emerald-400 mt-0.5" data-lucide="check"></i>
                  Cancelamento a qualquer momento
                </li>
</ul>
<div className="mt-6">
<a className="inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold tracking-tight bg-indigo-500 text-white hover:bg-indigo-400 active:bg-indigo-500/90 ring-1 ring-indigo-400/30 hover:ring-indigo-300/50 shadow-sm shadow-indigo-950/30 transition" href="#cadastro">
<i className="w-4 h-4" data-lucide="user-plus"></i>
                  Fazer Cadastro
                </a>
</div>
</div>

<div className="relative rounded-2xl ring-1 ring-indigo-400/30 bg-gradient-to-b from-indigo-500/10 to-transparent p-6 lg:p-8">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-indigo-400" data-lucide="zap"></i>
<h3 className="text-lg font-semibold tracking-tight text-white">Plano Avançado</h3>
</div>
<div className="text-right">
<p className="text-2xl font-semibold tracking-tight text-white">R$ 187<span className="text-base font-medium text-slate-400">/mês</span></p>
</div>
</div>
<ul className="mt-5 space-y-3">
<li className="flex items-start gap-3 text-sm text-slate-300">
<i className="w-4 h-4 text-indigo-400 mt-0.5" data-lucide="plus"></i>
                  Tudo do plano base +
                </li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<i className="w-4 h-4 text-indigo-400 mt-0.5" data-lucide="bell-ring"></i>
                  Envio automático de lembretes
                </li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<i className="w-4 h-4 text-indigo-400 mt-0.5" data-lucide="calendar-days"></i>
                  Painel de agendamentos e cancelamentos
                </li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<i className="w-4 h-4 text-indigo-400 mt-0.5" data-lucide="headphones"></i>
                  Suporte prioritário
                </li>
</ul>
<div className="mt-6">
<a className="inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold tracking-tight bg-white/5 text-slate-200 hover:bg-white/10 ring-1 ring-white/10 hover:ring-indigo-400/40 transition" href="https://wa.me/5511999999999" rel="noopener" target="_blank">
<i className="w-4 h-4" data-lucide="messages-square"></i>
                  Entrar em Contato
                </a>
</div>
</div>
</div>

<div className="mt-6 text-xs text-slate-500">
            Preços em reais (BRL). Impostos já inclusos. Cobrança recorrente mensal.
          </div>
</div>
</section>
</main>

<footer className="border-t border-white/5">
<div className="mx-auto max-w-7xl px-6 py-10">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md grid place-items-center ring-1 ring-white/10 bg-white/5 text-slate-100">
<span className="text-xs font-semibold tracking-tight">OA</span>
</div>
<div>
<p className="text-sm font-medium text-slate-200">Onebase Sistemas LTDA</p>
<p className="text-xs text-slate-500">CNPJ 00.000.000/0000-00 • São Paulo, SP</p>
</div>
</div>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-slate-200 ring-1 ring-white/10 hover:ring-emerald-400/30 hover:bg-white/5 transition" href="https://wa.me/5511999999999" rel="noopener" target="_blank">
<i className="w-4 h-4 text-emerald-400" data-lucide="whatsapp"></i>
              WhatsApp
            </a>
</div>
</div>
<div className="mt-6 text-[11px] text-slate-500">
          © <span id="year">2025</span> Onebase Agenda. Todos os direitos reservados.
        </div>
</div>
</footer>


    </>
  );
}
