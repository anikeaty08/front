import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const form = document.getElementById('evaluation-form');
        const btn = document.getElementById('submit-btn');
        const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');

        // Validação em tempo real para habilitar/desabilitar o botão
        const checkFormValidity = () => {
            let isValid = true;
            inputs.forEach(input => {
                if (!input.value.trim() || (input.type === 'email' && !input.value.includes('@'))) {
                    isValid = false;
                }
            });
            btn.disabled = !isValid;
        };

        inputs.forEach(input => {
            input.addEventListener('input', checkFormValidity);
            input.addEventListener('change', checkFormValidity);
        });

        // Verificação inicial
        checkFormValidity();

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (btn.disabled) return;

            const btnText = document.getElementById('btn-text');
            const btnIcon = document.getElementById('btn-icon');
            const btnSpinner = document.getElementById('btn-spinner');
            
            btn.disabled = true;
            btnText.innerText = "Processando informações...";
            btnIcon.classList.add('hidden');
            btnSpinner.classList.remove('hidden');

            const volumeValue = document.getElementById('volume').value;

            setTimeout(() => {
                const formContainer = document.getElementById('form-container');
                const successContainer = document.getElementById('success-container');
                const isQualified = volumeValue !== '<50';
                
                const titleEl = document.getElementById('success-title');
                const messageEl = document.getElementById('success-message');
                const iconBg = document.getElementById('success-icon-bg');
                const iconSuccess = document.getElementById('icon-success');
                const iconWaitlist = document.getElementById('icon-waitlist');
                
                iconSuccess.classList.add('hidden');
                iconWaitlist.classList.add('hidden');
                
                if (isQualified) {
                    titleEl.innerText = "Perfil Pré-aprovado";
                    messageEl.innerText = "Sua solicitação foi recebida com sucesso. Nossa equipe entrará em contato em breve para apresentar a plataforma e liberar o seu acesso à campanha exclusiva.";
                    iconBg.className = "w-20 h-20 rounded-2xl border mb-8 flex items-center justify-center border-[#5b45ce]/40 bg-[#5b45ce]/15 text-[#c4b5fd] shadow-[0_0_40px_rgba(91,69,206,0.3)]";
                    iconSuccess.classList.remove('hidden');
                } else {
                    titleEl.innerText = "Registro em Fila de Espera";
                    messageEl.innerText = "Como sua operação tem um volume inicial menor que o corte atual, adicionamos seu contato à nossa lista de espera. Avisaremos assim que novas vagas e condições forem liberadas.";
                    iconBg.className = "w-20 h-20 rounded-2xl border mb-8 flex items-center justify-center border-white/[0.08] bg-white/[0.03] text-zinc-400";
                    iconWaitlist.classList.remove('hidden');
                }
                
                formContainer.style.opacity = '0';
                formContainer.style.transform = 'translateY(-1rem)';
                
                setTimeout(() => {
                    formContainer.classList.add('hidden');
                    successContainer.classList.remove('hidden');
                    void successContainer.offsetWidth;
                    successContainer.style.opacity = '1';
                    successContainer.style.transform = 'translateY(0)';
                    
                    document.getElementById('solicitacao').scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 400);

            }, 1800);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-mesh"></div>
<header className="fixed top-0 inset-x-0 z-50 border-b border-white/[0.04] bg-[#030305]/70 backdrop-blur-xl supports-[backdrop-filter]:bg-[#030305]/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex sm:h-16 h-14 items-center justify-between">
<img alt="Brand" className="block w-auto h-8 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/784b56cf-a392-4f3a-b21c-2ecbabe18300_320w.png"/>
<nav className="hidden md:flex items-center gap-8">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-white/[0.04] border border-white/[0.08] px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-white/[0.08] hover:border-white/[0.15] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]" href="#solicitacao">
                        Solicitar participação
                    </a>
</nav>
</div>
</div>
</header>
<section className="sm:pt-48 sm:pb-32 flex flex-col overflow-hidden z-10 pt-36 pb-24 relative items-center justify-center">

<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#7c3aed]/40 to-transparent z-10"></div>
<div className="absolute top-0 inset-x-0 h-[600px] hero-spotlight pointer-events-none"></div>
<div className="absolute top-0 inset-x-0 h-[700px] hero-grid pointer-events-none opacity-50"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/[0.01] blur-[100px] rounded-full pointer-events-none"></div>
<div className="flex flex-col lg:pr-16 lg:pl-16 z-20 text-center max-w-5xl mr-auto ml-auto pr-6 pl-6 relative items-center">
<div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#5b45ce]/30 bg-[#5b45ce]/10 mb-8 backdrop-blur-md shadow-[0_0_24px_rgba(91,69,206,0.15)]">
<div className="flex items-center justify-center w-2.5 h-2.5 relative">
<div className="absolute inset-0 rounded-full bg-[#7c3aed] animate-ping opacity-40"></div>
<div className="w-1.5 h-1.5 rounded-full bg-[#9f7aea]"></div>
</div>
<span className="text-xs font-medium text-[#c4b5fd] tracking-wide uppercase">Campanha Exclusiva • Acesso Controlado</span>
</div>
<h1 className="sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-4xl font-normal text-white tracking-tight mb-6">
                Notificações extrajudiciais em escala, com <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-zinc-500">rastreabilidade<br/>e negociação.</span>
</h1>
<p className="max-w-2xl text-lg sm:text-xl text-zinc-400 leading-relaxed font-normal mb-10">
                Campanha exclusiva para empresas com CNPJ e operação recorrente a partir de 50 notificações por mês. Padronize envios, reduza trabalho manual e prepare o fluxo para negociação dentro da plataforma.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
<a className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-white text-[#030305] px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-zinc-100 hover:shadow-[0_0_32px_rgba(255,255,255,0.15)] hover:scale-[1.02] w-full sm:w-auto" href="#solicitacao">
<span className="">Solicitar participação</span>
<iconify-icon className="text-lg transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>
<div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent relative z-10"></div>
<section className="py-16 sm:py-24 lg:py-32 relative z-10" id="vantagens">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] mb-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.02)]">
<iconify-icon className="text-base text-zinc-400" icon="solar:layers-minimalistic-linear"></iconify-icon>
<span className="text-xs font-medium text-zinc-400 tracking-wide uppercase">Vantagens do Produto</span>
</div>
<h2 className="text-3xl sm:text-4xl lg:text-5xl leading-[1.1] font-normal tracking-tight text-white mb-4">Mais controle operacional. Mais segurança em cada envio.</h2>
<p className="text-lg text-zinc-400 leading-relaxed font-normal mx-auto">Centralize notificações, acompanhe entregas com rastreabilidade e elimine controles manuais que travam operações de volume.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-4 lg:mb-6">
<div className="group glass-card flex flex-col items-start p-8 lg:p-10 rounded-3xl border border-white/[0.04] relative transition-all duration-500 hover:border-white/[0.1] hover:bg-white/[0.03] overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-2xl border border-white/[0.08] bg-[#030305] flex items-center justify-center mb-6 text-zinc-400 group-hover:text-white group-hover:border-[#5b45ce]/50 group-hover:bg-[#5b45ce]/10 transition-all duration-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Força Jurídica</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-normal">Documentos estruturados com rigor jurídico e padrão consistente, dando mais segurança para a sua operação e sustentação para cobranças, negociações e eventuais desdobramentos.</p>
</div>
<div className="group glass-card flex flex-col items-start p-8 lg:p-10 rounded-3xl border border-white/[0.04] relative transition-all duration-500 hover:border-white/[0.1] hover:bg-white/[0.03] overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-2xl border border-white/[0.08] bg-[#030305] flex items-center justify-center mb-6 text-zinc-400 group-hover:text-white group-hover:border-[#5b45ce]/50 group-hover:bg-[#5b45ce]/10 transition-all duration-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
<iconify-icon className="text-2xl" icon="solar:radar-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Rastreabilidade Total</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-normal">Acompanhe envio, entrega, leitura e status de cada notificação com visibilidade centralizada e comprovação do recebimento, sem depender de controles paralelos.</p>
</div>
<div className="group glass-card flex flex-col items-start p-8 lg:p-10 rounded-3xl border border-white/[0.04] relative transition-all duration-500 hover:border-white/[0.1] hover:bg-white/[0.03] overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-2xl border border-white/[0.08] bg-[#030305] flex items-center justify-center mb-6 text-zinc-400 group-hover:text-white group-hover:border-[#5b45ce]/50 group-hover:bg-[#5b45ce]/10 transition-all duration-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
<iconify-icon className="text-2xl" icon="solar:server-square-update-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Padronização e Escala</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-normal">Envie notificações em lote, reduza trabalho manual e substitua planilhas dispersas por um fluxo mais organizado, replicável e preparado para operações de volume.</p>
</div>
</div>
<div className="w-full relative group">
<div className="absolute inset-0 bg-gradient-to-r from-[#5b45ce]/20 via-[#7c3aed]/10 to-transparent rounded-[2rem] blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
<div className="relative glass-card rounded-[2rem] border border-white/[0.06] overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/5 to-transparent opacity-50"></div>
<div className="relative p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
<div className="flex-1 z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#a78bfa]/20 bg-[#a78bfa]/10 mb-6 shadow-[inset_0_1px_0_0_rgba(167,139,250,0.1)]">
<iconify-icon className="text-sm text-[#a78bfa]" icon="solar:cpu-bolt-linear"></iconify-icon>
<span className="text-[10px] font-medium text-[#a78bfa] tracking-wider uppercase">Continuidade da Jornada</span>
</div>
<h3 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white mb-6 leading-[1.1]">
                                Da notificação à negociação, <br/>sem quebrar o fluxo.
                            </h3>
<p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-normal max-w-xl">
                                A entrega não precisa encerrar a operação. Quando houver resposta, sua empresa pode seguir para um fluxo estruturado de negociação dentro da plataforma, com apoio de IA para dar mais velocidade, consistência e acompanhamento às tratativas.
                            </p>
</div>
<div className="w-full lg:w-[400px] h-[300px] relative flex flex-col justify-center items-center z-10 border border-white/[0.04] rounded-3xl bg-[#030305]/50 overflow-hidden shadow-[inset_0_1px_0_0_rgba(255,255,255,0.02)]">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-[#7c3aed]/20 blur-[80px] rounded-full pointer-events-none"></div>
<div className="flex flex-col gap-4 w-full px-8">
<div className="flex items-center gap-3 p-3.5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md animate-float shadow-lg">
<div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
<iconify-icon className="text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<div>
<div className="text-xs text-white font-medium">Notificação Lida</div>
<div className="text-[10px] text-zinc-500">Hoje, 14:32 • Confirmação de entrega</div>
</div>
</div>
<div className="flex items-center gap-3 p-3.5 rounded-2xl border border-[#a78bfa]/20 bg-[#a78bfa]/10 backdrop-blur-md translate-x-6 animate-float-delayed shadow-lg">
<div className="w-8 h-8 rounded-full bg-[#7c3aed]/20 border border-[#7c3aed]/30 flex items-center justify-center text-[#c4b5fd]">
<iconify-icon className="text-sm" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<div>
<div className="text-xs text-white font-medium">Apoio de IA</div>
<div className="text-[10px] text-[#a78bfa]/70">Facilitando a conciliação...</div>
</div>
</div>
<div className="flex items-center gap-3 p-3.5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md translate-x-2 animate-float shadow-lg">
<div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300">
<iconify-icon className="text-sm" icon="solar:hand-shake-linear"></iconify-icon>
</div>
<div>
<div className="text-xs text-white font-medium">Acordo Formalizado</div>
<div className="text-[10px] text-zinc-500">Documento gerado e validado</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent relative z-10"></div>
<section className="py-16 sm:py-24 lg:py-32 relative z-10" id="elegibilidade">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="mb-16 text-center max-w-3xl mx-auto flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] mb-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.02)]">
<iconify-icon className="text-base text-zinc-400" icon="solar:clipboard-check-linear"></iconify-icon>
<span className="text-xs font-medium text-zinc-400 tracking-wide uppercase">Critérios de Participação</span>
</div>
<h2 className="text-3xl sm:text-4xl lg:text-5xl leading-[1.1] font-normal tracking-tight text-white mb-4">Quem pode acessar esta campanha?</h2>
<p className="text-lg text-zinc-400 leading-relaxed font-normal max-w-2xl mx-auto">
                    Esta campanha foi desenhada para operações recorrentes. Não é destinada a demandas pontuais ou uso individual.
                </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="group p-8 rounded-3xl bg-white/[0.01] border border-white/[0.04] flex flex-col hover:bg-white/[0.02] transition-colors duration-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.02)] relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<span className="text-6xl font-light text-white/[0.15] mb-8 block leading-none select-none relative z-10 transition-colors duration-300 group-hover:text-white/[0.25]">01</span>
<div className="relative z-10 mt-auto">
<span className="text-lg text-white font-medium block mb-2 tracking-tight">Apenas empresas com CNPJ</span>
<span className="text-sm text-zinc-400 font-normal leading-relaxed block">Campanha exclusiva para pessoas jurídicas com CNPJ ativo. Não atendemos pessoa física, profissionais autônomos ou demandas individuais.</span>
</div>
</div>
<div className="group p-8 rounded-3xl bg-white/[0.01] border border-white/[0.04] flex flex-col hover:bg-white/[0.02] transition-colors duration-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.02)] relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<span className="text-6xl font-light text-white/[0.15] mb-8 block leading-none select-none relative z-10 transition-colors duration-300 group-hover:text-white/[0.25]">02</span>
<div className="relative z-10 mt-auto">
<span className="text-lg text-white font-medium block mb-2 tracking-tight">Operação com 50+ notificações por mês</span>
<span className="text-sm text-zinc-400 font-normal leading-relaxed block">Esta campanha foi desenhada para empresas com demanda recorrente e volume mínimo de 50 notificações qualificadas por mês.</span>
</div>
</div>
<div className="group p-8 rounded-3xl bg-white/[0.01] border border-white/[0.04] flex flex-col hover:bg-white/[0.02] transition-colors duration-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.02)] relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<span className="text-6xl font-light text-white/[0.15] mb-8 block leading-none select-none relative z-10 transition-colors duration-300 group-hover:text-white/[0.25]">03</span>
<div className="relative z-10 mt-auto">
<span className="text-lg text-white font-medium block mb-2 tracking-tight">Liberação sujeita à análise</span>
<span className="text-sm text-zinc-400 font-normal leading-relaxed block">O acesso à campanha e às condições promocionais depende de uma avaliação rápida do perfil operacional da sua empresa.</span>
</div>
</div>
<div className="group p-8 rounded-3xl bg-white/[0.01] border border-white/[0.04] flex flex-col hover:bg-white/[0.02] transition-colors duration-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.02)] relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<span className="text-6xl font-light text-white/[0.15] mb-8 block leading-none select-none relative z-10 transition-colors duration-300 group-hover:text-white/[0.25]">04</span>
<div className="relative z-10 mt-auto">
<span className="text-lg text-white font-medium block mb-2 tracking-tight">Lista de espera para operações em evolução</span>
<span className="text-sm text-zinc-400 font-normal leading-relaxed block">Se sua operação ainda não atingiu o volume mínimo, você pode entrar na lista de espera para futuras rodadas da campanha.</span>
</div>
</div>
</div>
</div>
</section>
<section className="py-16 sm:py-24 lg:py-32 relative z-10" id="solicitacao">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-[#030305] pointer-events-none"></div>
<div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent pointer-events-none"></div>
<div className="relative max-w-3xl mx-auto px-6 lg:px-8">
<div className="text-center mb-12 flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] mb-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.02)]">
<iconify-icon className="text-base text-zinc-400" icon="solar:document-add-linear"></iconify-icon>
<span className="text-xs font-medium text-zinc-400 tracking-wide uppercase">Avaliação de Perfil</span>
</div>
<h2 className="text-3xl sm:text-4xl lg:text-5xl leading-[1.1] font-normal tracking-tight text-white mb-4">Solicite seu acesso</h2>
<p className="text-lg text-zinc-400 font-normal max-w-xl mx-auto leading-relaxed">Submeta os dados básicos da sua operação. Preencha todos os campos obrigatórios para avaliarmos seu perfil.</p>
</div>
<div className="relative transition-all duration-500" id="form-container">
<div className="glass-panel rounded-3xl p-8 sm:p-10 md:p-12 border border-white/[0.08] shadow-2xl relative overflow-hidden">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent"></div>
<form className="space-y-6" id="evaluation-form" novalidate="">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
<div className="space-y-2 relative group">
<label className="block text-xs font-medium text-zinc-400 ml-1 uppercase tracking-wider" htmlFor="name">Nome do responsável <span className="text-red-400">*</span></label>
<input className="block w-full rounded-xl border border-white/[0.06] bg-white/[0.02] py-3 px-4 text-sm text-white placeholder:text-zinc-600 focus:border-[#5b45ce]/60 focus:bg-white/[0.04] focus:ring-1 focus:ring-[#5b45ce]/60 transition-all duration-300 outline-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]" id="name" name="name" placeholder="Ex: João da Silva" required="" type="text"/>
</div>
<div className="space-y-2 relative group">
<label className="block text-xs font-medium text-zinc-400 ml-1 uppercase tracking-wider" htmlFor="email">E-mail corporativo <span className="text-red-400">*</span></label>
<input className="block w-full rounded-xl border border-white/[0.06] bg-white/[0.02] py-3 px-4 text-sm text-white placeholder:text-zinc-600 focus:border-[#5b45ce]/60 focus:bg-white/[0.04] focus:ring-1 focus:ring-[#5b45ce]/60 transition-all duration-300 outline-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]" id="email" name="email" placeholder="nome@empresa.com.br" required="" type="email"/>
</div>
</div>
<div className="space-y-2 relative group">
<label className="block text-xs font-medium text-zinc-400 ml-1 uppercase tracking-wider" htmlFor="volume">Volume estimado / mês <span className="text-red-400">*</span></label>
<select className="block w-full rounded-xl border border-white/[0.06] bg-white/[0.02] py-3 pl-4 pr-10 text-sm text-white focus:border-[#5b45ce]/60 focus:bg-white/[0.04] focus:ring-1 focus:ring-[#5b45ce]/60 transition-all duration-300 outline-none cursor-pointer shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]" id="volume" name="volume" required="">
<option className="text-zinc-500" disabled="" selected="" value="">Selecione o volume</option>
<option className="bg-[#0f0f13]" value="&lt;50">Menos de 50 notificações</option>
<option className="bg-[#0f0f13]" value="50-99">Entre 50 e 99 notificações</option>
<option className="bg-[#0f0f13]" value="100-499">Entre 100 e 499 notificações</option>
<option className="bg-[#0f0f13]" value="500+">Mais de 500 notificações</option>
</select>
</div>
<div className="pt-6 flex flex-col items-center gap-4">
<button className="w-full relative group overflow-hidden rounded-xl bg-white px-6 py-3.5 text-sm font-medium text-[#030305] transition-all duration-300 hover:bg-zinc-100 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:shadow-none flex items-center justify-center gap-2.5 shadow-[0_0_24px_rgba(255,255,255,0.1)] hover:shadow-[0_0_32px_rgba(255,255,255,0.2)]" disabled="" id="submit-btn" type="submit">
<span className="relative z-10" id="btn-text">Solicitar participação</span>
<iconify-icon className="text-lg relative z-10 transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" id="btn-icon"></iconify-icon>
<iconify-icon className="text-lg relative z-10 hidden animate-spin-slow" icon="solar:spinner-linear" id="btn-spinner"></iconify-icon>
</button>
<p className="text-xs text-zinc-500 font-normal text-center max-w-sm leading-relaxed">
                                Seus dados estão seguros e serão utilizados exclusivamente para análise de perfil e contato corporativo da nossa equipe.
                            </p>
</div>
</form>
</div>
</div>
<div className="hidden relative transition-all duration-500 opacity-0 translate-y-4" id="success-container">
<div className="glass-panel rounded-3xl p-10 sm:p-16 border border-white/[0.08] shadow-2xl text-center flex flex-col items-center">
<div className="w-20 h-20 rounded-2xl border mb-8 flex items-center justify-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]" id="success-icon-bg">
<iconify-icon className="text-3xl hidden" icon="solar:check-read-linear" id="icon-success"></iconify-icon>
<iconify-icon className="text-3xl hidden" icon="solar:archive-linear" id="icon-waitlist"></iconify-icon>
</div>
<h3 className="text-3xl sm:text-4xl tracking-tight font-medium text-white mb-4" id="success-title"></h3>
<p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed font-normal" id="success-message"></p>
</div>
</div>
</div>
</section>
<footer className="mt-auto border-t border-white/[0.06] bg-[#030305] py-8 relative z-10">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<img alt="Arbitralis" className="block opacity-80 w-auto h-5 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/784b56cf-a392-4f3a-b21c-2ecbabe18300_320w.png"/>
<p className="text-[10px] sm:text-xs text-zinc-500 font-normal">
                    © 2025 Arbitralis. Notificações Extrajudiciais e Resolução de Conflitos.
                </p>
</div>
</div>
</footer>


    </>
  );
}
