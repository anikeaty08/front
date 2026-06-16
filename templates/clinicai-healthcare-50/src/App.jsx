import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
cta: '#10B981',
}
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateValues = [0, 2, 5, 10];
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = { transform: `perspective(1000px) rotateX(${value}deg)` };
});
addUtilities({ ...rotateXUtilities, '.perspective-dramatic': { perspective: '2000px' } });
}
]
};

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none">

<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] via-white to-transparent blur-[80px] opacity-60 from-emerald-100/50"></div>
<div className="bg-grid absolute inset-0 opacity-100"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 border-b bg-white/80 backdrop-blur-xl transition-all duration-300 border-neutral-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
<div className="w-8 h-8 relative text-emerald-600 flex items-center justify-center rounded-lg border bg-emerald-50 border-emerald-100">
<iconify-icon icon="solar:health-linear" width="20"></iconify-icon>
</div>
<span className="text-base font-semibold tracking-tight text-neutral-900">CLINIC<span className="text-neutral-400">AI</span></span>
</div>
<div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-neutral-500">
<a className="transition-colors hover:text-black" href="#metodo">Método 3A</a>
<a className="transition-colors hover:text-black" href="#comparativo">Comparativo</a>
<a className="transition-colors hover:text-black" href="#planos">Planos</a>
<a className="transition-colors hover:text-black" href="#faq">Dúvidas</a>
</div>
<div className="flex items-center gap-3">
<a className="group relative px-5 py-2 rounded-full text-[13px] font-semibold transition-all overflow-hidden bg-neutral-900 text-white hover:bg-neutral-800 shadow-md hover:shadow-lg" href="#planos">
<span className="relative z-10 flex items-center gap-1">
                        Garantir minha vaga
                    </span>
<div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent -translate-x-full group-hover:animate-[beam_1s_infinite] via-white/20"></div>
</a>
</div>
</div>
</nav>

<div className="fixed top-16 left-0 right-0 z-40 flex justify-center pointer-events-none">
<div className="backdrop-blur-md border border-red-200 px-4 py-1.5 rounded-b-xl text-[10px] font-medium tracking-wide uppercase flex items-center gap-2 shadow-sm animate-fade-up bg-red-50 text-red-600">
<iconify-icon icon="solar:danger-triangle-linear"></iconify-icon>
            Atenção: Vagas limitadas para novas clínicas este mês
         </div>
</div>

<main className="flex flex-col text-center max-w-[90rem] z-10 mr-auto ml-auto pt-40 pr-4 pb-20 pl-4 relative items-center">

<div className="animate-fade-up delay-100 mb-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border backdrop-blur-md shadow-sm border-neutral-200 bg-white">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-[11px] font-medium tracking-wide uppercase text-neutral-600">Análise gratuita disponível</span>
</div>
</div>

<h1 className="animate-fade-up delay-200 text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[0.95] mb-8 text-neutral-900">
            Transforme seu WhatsApp em uma máquina de <span className="font-serif italic text-emerald-600 font-light pr-2">agendamentos.</span>
</h1>
<p className="animate-fade-up delay-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10 font-light text-neutral-500">
            Marketing digital completo para clínicas + <span className="text-emerald-600 font-medium">IA comercial</span> que atende, qualifica e agenda pacientes automaticamente, 24h por dia.
        </p>

<div className="animate-fade-up delay-500 relative w-full max-w-3xl mx-auto perspective-dramatic group mb-24">

<div className="relative bg-white rounded-xl border shadow-2xl overflow-hidden transform transition-all duration-700 group-hover:rotate-x-2 group-hover:-translate-y-2 border-neutral-200">

<div className="p-4 border-b flex items-center gap-3 border-neutral-100 bg-neutral-50/50">
<iconify-icon className="text-emerald-600" icon="solar:bot-linear"></iconify-icon>
<span className="text-sm text-neutral-500 font-mono">ClinicAI Assistant</span>
<div className="ml-auto flex gap-2">
<span className="hidden sm:inline-flex items-center h-5 px-1.5 rounded border font-mono text-[10px] text-emerald-700 border-emerald-200 bg-emerald-50">Online 24h</span>
</div>
</div>

<div className="p-2 space-y-1">
<div className="flex items-center gap-3 px-3 py-3 rounded-lg border border-emerald-100 bg-emerald-50/50">
<div className="w-6 h-6 rounded bg-emerald-100 flex items-center justify-center text-emerald-600">
<iconify-icon icon="solar:user-check-linear"></iconify-icon>
</div>
<div className="flex flex-col text-left">
<span className="text-xs font-medium text-neutral-900">Novo paciente qualificado</span>
<span className="text-[10px] text-neutral-500">Origem: Instagram Ads • Há 2 min</span>
</div>
<span className="ml-auto text-[10px] font-mono text-emerald-600">Agendado</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors cursor-pointer hover:bg-neutral-50">
<div className="w-6 h-6 rounded flex items-center justify-center bg-neutral-100 text-neutral-500">
<iconify-icon icon="solar:calendar-mark-linear"></iconify-icon>
</div>
<div className="flex flex-col text-left">
<span className="text-xs font-medium text-neutral-700">Confirmando consultas de amanhã...</span>
<span className="text-[10px] text-neutral-400">Automático</span>
</div>
</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors cursor-pointer hover:bg-neutral-50">
<div className="w-6 h-6 rounded flex items-center justify-center bg-neutral-100 text-neutral-500">
<iconify-icon icon="solar:chat-square-call-linear"></iconify-icon>
</div>
<div className="flex flex-col text-left">
<span className="text-xs font-medium text-neutral-700">Recuperando paciente sumido</span>
<span className="text-[10px] text-neutral-400">Follow-up #2</span>
</div>
</div>
</div>
</div>

<div className="absolute -right-12 top-10 w-28 h-28 rounded-xl border bg-white/90 backdrop-blur-md p-3 animate-float flex flex-col justify-between border-neutral-200 shadow-xl" style={{animationDelay: '1s'}}>
<div className="flex items-center justify-between">
<div className="text-[8px] text-neutral-400">Ocupação</div>
<div className="text-[8px] text-emerald-600">98%</div>
</div>

<div className="flex items-end gap-1 h-12 w-full justify-between">
<div className="w-1/5 rounded-sm h-[40%] bg-neutral-100"></div>
<div className="w-1/5 rounded-sm h-[60%] bg-neutral-100"></div>
<div className="w-1/5 rounded-sm h-[50%] bg-neutral-100"></div>
<div className="w-1/5 bg-emerald-500 rounded-sm h-[90%] relative shadow-[0_0_10px_rgba(16,185,129,0.2)]"></div>
</div>
</div>
<div className="absolute -left-8 bottom-10 w-36 h-12 rounded-xl border bg-white/90 backdrop-blur-md p-2 animate-float flex items-center gap-3 border-neutral-200 shadow-xl" style={{animationDelay: '2s'}}>
<div className="w-8 h-8 rounded-full flex items-center justify-center bg-emerald-100 text-emerald-600">
<iconify-icon icon="solar:wallet-money-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-[10px] font-medium text-neutral-900">Pagamento Confirmado</span>
<span className="text-[8px] text-neutral-500">Dr. Ricardo • R$ 450,00</span>
</div>
</div>
</div>
<a className="px-8 py-4 rounded-full text-base font-medium transition-all hover:bg-emerald-500 hover:shadow-[0_10px_40px_-10px_rgba(16,185,129,0.6)] hover:-translate-y-1 active:scale-95 bg-emerald-600 text-white shadow-lg shadow-emerald-600/20" href="#planos">
            SIM! QUERO MAIS PACIENTES
        </a>

<div className="w-full max-w-6xl mx-auto overflow-hidden mask-linear-fade relative opacity-60 hover:opacity-100 transition-opacity duration-500 mt-20">
<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10"></div>
<div className="flex gap-12 animate-marquee w-max">
<span className="text-lg font-semibold flex items-center gap-2 text-neutral-400 grayscale"><iconify-icon className="opacity-50" icon="logos:whatsapp-icon" width="20"></iconify-icon> WhatsApp Business</span>
<span className="text-lg font-semibold flex items-center gap-2 text-neutral-400 grayscale"><iconify-icon className="opacity-50" icon="logos:google-icon" width="20"></iconify-icon> Google Ads</span>
<span className="text-lg font-semibold flex items-center gap-2 text-neutral-400 grayscale"><iconify-icon className="opacity-50" icon="logos:meta-icon" width="20"></iconify-icon> Meta Ads</span>
<span className="text-lg font-semibold flex items-center gap-2 text-neutral-400 grayscale"><iconify-icon icon="solar:calendar-mark-linear" width="20"></iconify-icon> ClinicWeb</span>
<span className="text-lg font-semibold flex items-center gap-2 text-neutral-400 grayscale"><iconify-icon icon="solar:medical-kit-linear" width="20"></iconify-icon> Feegow</span>

<span className="text-lg font-semibold flex items-center gap-2 text-neutral-400 grayscale"><iconify-icon className="opacity-50" icon="logos:whatsapp-icon" width="20"></iconify-icon> WhatsApp Business</span>
<span className="text-lg font-semibold flex items-center gap-2 text-neutral-400 grayscale"><iconify-icon className="opacity-50" icon="logos:google-icon" width="20"></iconify-icon> Google Ads</span>
<span className="text-lg font-semibold flex items-center gap-2 text-neutral-400 grayscale"><iconify-icon className="opacity-50" icon="logos:meta-icon" width="20"></iconify-icon> Meta Ads</span>
<span className="text-lg font-semibold flex items-center gap-2 text-neutral-400 grayscale"><iconify-icon icon="solar:calendar-mark-linear" width="20"></iconify-icon> ClinicWeb</span>
<span className="text-lg font-semibold flex items-center gap-2 text-neutral-400 grayscale"><iconify-icon icon="solar:medical-kit-linear" width="20"></iconify-icon> Feegow</span>
</div>
</div>
</main>

<section className="py-20 px-6 max-w-7xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-4 text-neutral-900">Isso está acontecendo na <span className="font-serif italic text-red-500">sua clínica?</span></h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="glass p-6 rounded-2xl border hover:border-red-200 transition-colors group border-transparent bg-white shadow-sm">
<div className="w-10 h-10 rounded-lg bg-red-50 text-red-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:calendar-mark-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium mb-2 text-neutral-900">Agenda instável</h3>
<p className="text-sm text-neutral-500">Buracos na agenda que derrubam o faturamento mensal.</p>
</div>
<div className="glass p-6 rounded-2xl border hover:border-red-200 transition-colors group border-transparent bg-white shadow-sm">
<div className="w-10 h-10 rounded-lg bg-red-50 text-red-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:chat-square-call-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium mb-2 text-neutral-900">Leads no vácuo</h3>
<p className="text-sm text-neutral-500">Pacientes desistem pela demora no atendimento do WhatsApp.</p>
</div>
<div className="glass p-6 rounded-2xl border hover:border-red-200 transition-colors group border-transparent bg-white shadow-sm">
<div className="w-10 h-10 rounded-lg bg-red-50 text-red-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:user-cross-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium mb-2 text-neutral-900">Sem Follow-up</h3>
<p className="text-sm text-neutral-500">Recepção sem tempo de recuperar pacientes antigos.</p>
</div>
<div className="glass p-6 rounded-2xl border hover:border-red-200 transition-colors group border-transparent bg-white shadow-sm">
<div className="w-10 h-10 rounded-lg bg-red-50 text-red-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:graph-down-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium mb-2 text-neutral-900">Marketing às cegas</h3>
<p className="text-sm text-neutral-500">Investe em anúncios mas não vê paciente na cadeira.</p>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-7xl mx-auto relative" id="metodo">

<div className="mb-16 flex flex-col md:flex-row items-start justify-between gap-8">
<div className="max-w-xl">
<span className="text-emerald-600 font-mono text-xs uppercase tracking-widest mb-2 block">Nosso Sistema Exclusivo</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4 text-neutral-900">Método <span className="font-serif italic text-emerald-600">3A.</span></h2>
<p className="text-sm md:text-base text-neutral-500">Um ecossistema integrado de atração, atendimento e agendamento para garantir previsibilidade de lucro.</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[minmax(300px,auto)]">

<div className="md:col-span-3 lg:col-span-4 bg-white rounded-3xl p-8 relative overflow-hidden group card-shine flex flex-col justify-between border border-neutral-200">
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-6 bg-emerald-50 border-emerald-100 text-emerald-600">
<iconify-icon icon="solar:magnet-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-2 text-neutral-900">1. Atrair</h3>
<ul className="text-sm space-y-2 mt-4 text-neutral-500">
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Tráfego pago de alta intenção</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Landing Pages de Conversão</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Posicionamento de Autoridade</li>
</ul>
</div>

<div className="absolute right-0 bottom-0 w-32 h-32 bg-emerald-50 rounded-tl-full blur-2xl"></div>
</div>

<div className="md:col-span-3 lg:col-span-8 bg-white rounded-3xl p-0 relative overflow-hidden group card-shine border border-emerald-100">
<div className="absolute top-4 right-4 z-20">
<span className="bg-emerald-500 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider text-white shadow-lg shadow-emerald-500/30">IA Exclusiva</span>
</div>
<div className="absolute inset-0 bg-grid opacity-50"></div>

<div className="absolute inset-0 flex items-center justify-center z-0 pt-12 pl-12 opacity-100 group-hover:scale-105 transition-transform duration-700">
<div className="w-full max-w-md bg-white border rounded-tl-2xl shadow-xl p-4 space-y-3 border-neutral-200">
<div className="flex items-end gap-2">
<div className="w-6 h-6 rounded-full flex-shrink-0 bg-neutral-200"></div>
<div className="text-xs p-2 rounded-2xl rounded-bl-none max-w-[80%] bg-neutral-100 text-neutral-600">
                                Olá! Gostaria de saber o valor da consulta.
                             </div>
</div>
<div className="flex items-end gap-2 flex-row-reverse">
<div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 text-white"><iconify-icon icon="solar:bot-bold" width="14"></iconify-icon></div>
<div className="border border-emerald-100 text-xs p-2 rounded-2xl rounded-br-none max-w-[80%] bg-emerald-50 text-emerald-900">
                                Olá! O valor é R$ 350. Temos horário disponível amanhã às 14h. Posso agendar?
                             </div>
</div>
<div className="flex items-end gap-2">
<div className="w-6 h-6 rounded-full flex-shrink-0 bg-neutral-200"></div>
<div className="text-xs p-2 rounded-2xl rounded-bl-none max-w-[80%] bg-neutral-100 text-neutral-600">
                                Pode sim!
                             </div>
</div>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-white via-white/90 to-transparent z-10">
<h3 className="text-2xl font-medium mb-2 text-neutral-900">2. Atender (Automático)</h3>
<p className="text-sm max-w-md text-neutral-500">IA comercial treinada para responder dúvidas, qualificar e agendar 24/7. Sem deixar ninguém no vácuo.</p>
</div>
</div>

<div className="md:col-span-6 lg:col-span-12 bg-white rounded-3xl p-8 relative overflow-hidden group card-shine flex flex-col md:flex-row items-center justify-between gap-8 border border-neutral-200">
<div className="relative z-10 max-w-lg">
<div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-6 bg-emerald-50 border-emerald-100 text-emerald-600">
<iconify-icon icon="solar:calendar-add-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-2 text-neutral-900">3. Agendar</h3>
<p className="text-sm mb-6 text-neutral-500">Integração direta com sua agenda. Redução drástica de No-Show com confirmações automáticas.</p>
<div className="flex gap-4">
<div className="text-center">
<div className="text-2xl font-serif text-neutral-900">100%</div>
<div className="text-[10px] text-neutral-400 uppercase">Integrado</div>
</div>
<div className="w-px h-10 bg-neutral-200"></div>
<div className="text-center">
<div className="text-2xl font-serif text-neutral-900">-80%</div>
<div className="text-[10px] text-neutral-400 uppercase">Faltas</div>
</div>
</div>
</div>

<div className="w-full md:w-1/2 h-32 md:h-full relative opacity-80">
<div className="absolute inset-0 flex items-center justify-around">
<div className="h-full w-px dashed bg-neutral-100 border-r border-dashed border-neutral-200"></div>
<div className="h-full w-px dashed bg-neutral-100 border-r border-dashed border-neutral-200"></div>
<div className="h-full w-px dashed bg-neutral-100 border-r border-dashed border-neutral-200"></div>
</div>
<div className="absolute top-1/2 left-10 right-10 h-12 bg-white rounded border border-emerald-200 shadow-sm flex items-center px-4 gap-3">
<div className="w-2 h-2 rounded-full animate-pulse bg-emerald-500"></div>
<span className="text-xs text-neutral-700 font-medium">Paciente Confirmado</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-5xl mx-auto" id="comparativo">
<div className="bg-white rounded-3xl overflow-hidden border border-neutral-200 shadow-sm">
<div className="grid grid-cols-3 border-b p-6 text-sm font-medium bg-neutral-50 border-neutral-100 text-neutral-900">
<div className="col-span-1">Comparativo</div>
<div className="col-span-1 text-center text-neutral-500">Agências Comuns</div>
<div className="col-span-1 text-center text-emerald-600">ClinicAI</div>
</div>
<div className="divide-y divide-neutral-100">
<div className="grid grid-cols-3 p-6 text-sm transition-colors hover:bg-neutral-50/50">
<div className="text-neutral-700">Atendimento 24h</div>
<div className="text-center text-neutral-400"><iconify-icon className="inline" icon="solar:close-circle-linear"></iconify-icon> Não</div>
<div className="text-center font-medium text-emerald-600"><iconify-icon className="inline" icon="solar:check-circle-bold"></iconify-icon> Sim (IA)</div>
</div>
<div className="grid grid-cols-3 p-6 text-sm transition-colors hover:bg-neutral-50/50">
<div className="text-neutral-700">Foco em Agendamento</div>
<div className="text-center text-neutral-400">Likes/Seguidores</div>
<div className="text-center font-medium text-emerald-600">Paciente na cadeira</div>
</div>
<div className="grid grid-cols-3 p-6 text-sm transition-colors hover:bg-neutral-50/50">
<div className="text-neutral-700">Tempo de Resposta</div>
<div className="text-center text-neutral-400">Horas/Dias</div>
<div className="text-center font-medium text-emerald-600">Imediato</div>
</div>
<div className="grid grid-cols-3 p-6 text-sm transition-colors hover:bg-neutral-50/50">
<div className="text-neutral-700">Recuperação de Leads</div>
<div className="text-center text-neutral-400">Manual (Se der tempo)</div>
<div className="text-center font-medium text-emerald-600">Automática</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-7xl mx-auto" id="planos">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4 text-neutral-900">Escolha como <span className="font-serif italic opacity-80 text-emerald-600">começar.</span></h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="bg-white p-8 rounded-3xl border transition-all duration-300 border-neutral-200 hover:border-neutral-300 hover:shadow-lg">
<h3 className="text-lg font-medium mb-2 text-neutral-900">Posicionamento</h3>
<p className="text-xs text-neutral-500 mb-6 h-10">Para quem precisa construir autoridade.</p>
<div className="space-y-3 mb-8">
<div className="flex items-center gap-2 text-sm text-neutral-600"><iconify-icon className="text-neutral-400" icon="solar:check-circle-linear"></iconify-icon> Social Media Pro</div>
<div className="flex items-center gap-2 text-sm text-neutral-600"><iconify-icon className="text-neutral-400" icon="solar:check-circle-linear"></iconify-icon> Criação de Site</div>
<div className="flex items-center gap-2 text-sm text-neutral-600"><iconify-icon className="text-neutral-400" icon="solar:check-circle-linear"></iconify-icon> Design Premium</div>
</div>
<a className="block w-full py-3 rounded-full border text-center text-sm font-medium transition-colors border-neutral-200 hover:bg-neutral-50 text-neutral-900" href="#">Saber mais</a>
</div>

<div className="bg-white p-8 rounded-3xl border border-emerald-500 relative transform md:-translate-y-4 shadow-xl shadow-emerald-500/10">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase text-white">
                    Recomendado
                </div>
<h3 className="text-xl font-medium mb-2 text-neutral-900">Performance Max</h3>
<p className="text-xs mb-6 h-10 text-neutral-500">A solução completa. Método 3A integral.</p>
<div className="space-y-3 mb-8">
<div className="flex items-center gap-2 text-sm font-medium text-neutral-900"><iconify-icon className="text-emerald-500" icon="solar:check-circle-bold"></iconify-icon> Gestão de Tráfego</div>
<div className="flex items-center gap-2 text-sm font-medium text-neutral-900"><iconify-icon className="text-emerald-500" icon="solar:check-circle-bold"></iconify-icon> IA Comercial (Chat)</div>
<div className="flex items-center gap-2 text-sm font-medium text-neutral-900"><iconify-icon className="text-emerald-500" icon="solar:check-circle-bold"></iconify-icon> CRM Integrado</div>
<div className="flex items-center gap-2 text-sm font-medium text-neutral-900"><iconify-icon className="text-emerald-500" icon="solar:check-circle-bold"></iconify-icon> Relatórios de ROI</div>
</div>
<button className="group relative w-full py-3 rounded-full overflow-hidden bg-emerald-600 font-semibold text-sm transition-colors text-white hover:bg-emerald-500 shadow-md">
<span className="relative z-10">Quero este plano</span>
<div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent -translate-x-full group-hover:animate-[beam_1s_infinite] via-white/40"></div>
</button>
</div>

<div className="bg-white p-8 rounded-3xl border transition-all duration-300 border-neutral-200 hover:border-neutral-300 hover:shadow-lg">
<h3 className="text-lg font-medium mb-2 text-neutral-900">Start IA</h3>
<p className="text-xs text-neutral-500 mb-6 h-10">Para quem já tem tráfego, mas falha no atendimento.</p>
<div className="space-y-3 mb-8">
<div className="flex items-center gap-2 text-sm text-neutral-600"><iconify-icon className="text-neutral-400" icon="solar:check-circle-linear"></iconify-icon> IA no WhatsApp</div>
<div className="flex items-center gap-2 text-sm text-neutral-600"><iconify-icon className="text-neutral-400" icon="solar:check-circle-linear"></iconify-icon> Atendimento 24/7</div>
<div className="flex items-center gap-2 text-sm text-neutral-600"><iconify-icon className="text-neutral-400" icon="solar:check-circle-linear"></iconify-icon> Qualificação de Leads</div>
</div>
<a className="block w-full py-3 rounded-full border text-center text-sm font-medium transition-colors border-neutral-200 hover:bg-neutral-50 text-neutral-900" href="#">Saber mais</a>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-3xl mx-auto" id="faq">
<h2 className="text-3xl font-medium tracking-tight mb-12 text-center text-neutral-900">Dúvidas Frequentes</h2>
<div className="space-y-4">
<details className="group bg-white rounded-xl border border-neutral-200">
<summary className="flex justify-between items-center cursor-pointer p-5 transition-colors text-neutral-700 hover:text-neutral-900">
<span className="font-medium">Substitui minha secretária?</span>
<span className="transition-transform group-open:rotate-180 text-emerald-600"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span>
</summary>
<div className="px-5 pb-5 text-sm leading-relaxed text-neutral-500">
                    Não, a IA potencializa. Ela cuida do repetitivo (dúvidas básicas, confirmações) liberando sua equipe para o atendimento humanizado presencial.
                </div>
</details>
<details className="group bg-white rounded-xl border border-neutral-200">
<summary className="flex justify-between items-center cursor-pointer p-5 transition-colors text-neutral-700 hover:text-neutral-900">
<span className="font-medium">Funciona para qualquer especialidade?</span>
<span className="transition-transform group-open:rotate-180 text-emerald-600"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span>
</summary>
<div className="px-5 pb-5 text-sm leading-relaxed text-neutral-500">
                    Sim. Personalizamos o "cérebro" da IA com as informações da sua clínica, tratamentos e tom de voz específico.
                </div>
</details>
<details className="group bg-white rounded-xl border border-neutral-200">
<summary className="flex justify-between items-center cursor-pointer p-5 transition-colors text-neutral-700 hover:text-neutral-900">
<span className="font-medium">Em quanto tempo vejo resultados?</span>
<span className="transition-transform group-open:rotate-180 text-emerald-600"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span>
</summary>
<div className="px-5 pb-5 text-sm leading-relaxed text-neutral-500">
                    A IA começa a funcionar imediatamente após a configuração. Campanhas de tráfego costumam maturar entre 2 a 4 semanas.
                </div>
</details>
</div>
</section>

<footer className="relative pt-32 pb-12 bg-white overflow-hidden border-t border-neutral-200">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col items-center text-center mb-24">
<h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8 text-neutral-900">
                    Pronto para <span className="font-serif italic text-emerald-600">escalar?</span>
</h2>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="group relative h-12 px-8 rounded-full font-medium text-sm transition-all overflow-hidden flex items-center gap-2 bg-neutral-900 text-white hover:bg-neutral-800 shadow-lg" href="#planos">
<iconify-icon icon="solar:chat-round-dots-bold"></iconify-icon>
<span className="relative z-10">Falar com especialista no WhatsApp</span>
<div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent -translate-x-full group-hover:animate-[beam_0.5s_infinite] via-white/50"></div>
</a>
</div>
<div className="mt-6 flex flex-col gap-1 text-[11px] text-neutral-500">
<span>Vagas limitadas neste mês.</span>
<span>Análise de perfil gratuita.</span>
</div>
</div>
<div className="border-t pt-12 flex flex-col md:flex-row justify-between gap-8 border-neutral-200">
<div className="flex items-center gap-2">
<div className="text-emerald-600">
<iconify-icon icon="solar:health-bold"></iconify-icon>
</div>
<span className="text-xs text-neutral-500">© 2024 ClinicAI.</span>
</div>
<div className="flex gap-8 text-xs text-neutral-500 font-medium">
<a className="transition-colors hover:text-neutral-900" href="#">Instagram</a>
<a className="transition-colors hover:text-neutral-900" href="#">LinkedIn</a>
<a className="transition-colors hover:text-neutral-900" href="#">Termos</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
