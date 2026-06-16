import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            let currentStep = 1;
            let highestStepReached = 1;
            const totalSteps = 7;

            const nextBtn = document.getElementById('btn-next');
            const prevBtn = document.getElementById('btn-prev');
            const stepViews = document.querySelectorAll('.step-view');
            const sidebarItems = document.querySelectorAll('.sidebar-step');
            const progressBar = document.getElementById('progress-bar');
            const progressText = document.getElementById('progress-text');
            const headerTitle = document.getElementById('header-title');
            const nameInput = document.getElementById('campaignName');
            const reviewName = document.getElementById('review-name');

            const stepTitles = [
                "Tipo de Campanha", "Conteúdo", "Editor Visual", 
                "Segmentação", "Interatividade", "Agendamento", "Revisão"
            ];

            const stepSubtitles = [
                "Definir formato", "Mídia e informações", "Cores e layout",
                "Público alvo", "Ações e links", "Datas e horários", "Conferir e publicar"
            ];

            function updateUI() {
                // Update text content from inputs before reaching Review step
                if(currentStep === totalSteps && nameInput && reviewName) {
                    reviewName.textContent = nameInput.value || "Campanha sem nome";
                }

                // Update Views
                stepViews.forEach((view, idx) => {
                    if(idx + 1 === currentStep) view.classList.remove('hidden');
                    else view.classList.add('hidden');
                });

                // Update Header
                headerTitle.textContent = stepTitles[currentStep - 1];

                // Update Buttons
                if(currentStep === 1) {
                    prevBtn.classList.add('invisible');
                } else {
                    prevBtn.classList.remove('invisible');
                }

                if(currentStep === totalSteps) {
                    nextBtn.innerHTML = `Publicar <iconify-icon icon="solar:check-circle-linear" class="text-lg"></iconify-icon>`;
                    nextBtn.classList.replace('bg-[#5B7FFF]', 'bg-emerald-500');
                    nextBtn.classList.replace('hover:bg-blue-600', 'hover:bg-emerald-600');
                } else {
                    nextBtn.innerHTML = `Avançar <iconify-icon icon="solar:arrow-right-linear" class="text-lg"></iconify-icon>`;
                    nextBtn.classList.replace('bg-emerald-500', 'bg-[#5B7FFF]');
                    nextBtn.classList.replace('hover:bg-emerald-600', 'hover:bg-blue-600');
                }

                // Update Progress
                const progress = Math.round((currentStep / totalSteps) * 100);
                progressBar.style.width = `${progress}%`;
                progressText.textContent = `${progress}%`;

                // Update Sidebar Styles
                sidebarItems.forEach((item, idx) => {
                    const stepNum = idx + 1;
                    const iconContainer = item.querySelector('.icon-container');
                    const title = item.querySelector('.step-title');
                    const subtitle = item.querySelector('.step-subtitle');

                    // Reset Base Classes
                    item.className = 'sidebar-step flex items-start gap-3 p-2 rounded-lg cursor-pointer transition-all';
                    iconContainer.innerHTML = '';
                    subtitle.textContent = stepSubtitles[idx];
                    
                    if (stepNum < currentStep) {
                        // Completed Status
                        item.classList.add('group');
                        iconContainer.innerHTML = '<iconify-icon icon="solar:check-circle-bold" class="text-xl text-emerald-500"></iconify-icon>';
                        iconContainer.className = 'icon-container mt-0.5 bg-white rounded-full transition-all';
                        title.className = 'step-title font-medium text-gray-900';
                        subtitle.className = 'step-subtitle text-xs text-gray-500 mt-0.5';
                    } else if (stepNum === currentStep) {
                        // Active Status
                        item.classList.add('bg-blue-50/50', 'border', 'border-blue-100/50');
                        iconContainer.innerHTML = `
                            <div class="absolute inset-0 bg-[#5B7FFF] opacity-20 rounded-full animate-pulse"></div>
                            <div class="w-2.5 h-2.5 bg-[#5B7FFF] rounded-full"></div>
                        `;
                        iconContainer.className = 'icon-container mt-0.5 bg-white rounded-full relative flex items-center justify-center w-5 h-5 transition-all';
                        title.className = 'step-title font-medium text-[#5B7FFF]';
                        subtitle.className = 'step-subtitle text-xs text-blue-600/70 mt-0.5';
                    } else if (stepNum <= highestStepReached) {
                        // Re-visitable step that is not active currently
                        item.classList.add('group', 'hover:bg-gray-50');
                        iconContainer.className = 'icon-container mt-0.5 bg-white rounded-full flex items-center justify-center w-5 h-5 border-2 border-gray-200 group-hover:border-[#5B7FFF] transition-colors';
                        title.className = 'step-title font-medium text-gray-700 group-hover:text-[#5B7FFF] transition-colors';
                        subtitle.className = 'step-subtitle text-xs text-gray-500 mt-0.5 hidden';
                    } else {
                        // Pending/Locked Status
                        item.classList.add('opacity-50', 'cursor-not-allowed');
                        iconContainer.className = 'icon-container mt-0.5 bg-white rounded-full flex items-center justify-center w-5 h-5 border-2 border-gray-200';
                        title.className = 'step-title font-medium text-gray-400';
                        subtitle.className = 'step-subtitle text-xs text-gray-400 mt-0.5 hidden';
                    }
                });
            }

            // Click Handlers
            nextBtn.addEventListener('click', () => {
                if(currentStep < totalSteps) {
                    currentStep++;
                    if(currentStep > highestStepReached) {
                        highestStepReached = currentStep;
                    }
                    updateUI();
                } else {
                    // Final submission
                    alert('🎉 Campanha publicada com sucesso!');
                    window.location.href = 'index.html'; // Exit flow and return to Dashboard
                }
            });

            prevBtn.addEventListener('click', () => {
                if(currentStep > 1) {
                    currentStep--;
                    updateUI();
                }
            });

            // Restrict clicking sidebar items based on progress
            sidebarItems.forEach(item => {
                item.addEventListener('click', () => {
                    const targetStep = parseInt(item.getAttribute('data-step'));
                    // User can only jump to steps they have already unlocked
                    if (targetStep <= highestStepReached) {
                        currentStep = targetStep;
                        updateUI();
                    }
                });
            });

            // Template Modal Logic
            const modal = document.getElementById('templateModal');
            const btnOpenTpl = document.getElementById('btn-open-templates');
            const btnCloseTpl = document.getElementById('btn-close-templates');
            const backdrop = document.getElementById('modal-backdrop');
            const tplButtons = document.querySelectorAll('.select-template-btn');

            const toggleModal = () => modal.classList.toggle('hidden');
            
            if(btnOpenTpl) btnOpenTpl.addEventListener('click', toggleModal);
            if(btnCloseTpl) btnCloseTpl.addEventListener('click', toggleModal);
            if(backdrop) backdrop.addEventListener('click', toggleModal);
            
            tplButtons.forEach(btn => {
                btn.addEventListener('click', () => {
                    toggleModal();
                    alert('Template aplicado e configurado para sua campanha!');
                });
            });

            // Mock File Upload interaction
            const dropzone = document.getElementById('dropzone');
            const fakeItem = document.getElementById('fake-upload-item');
            const fakeUploadBar = document.getElementById('fake-upload-bar');
            const fakeUploadStatus = document.getElementById('fake-upload-status');
            
            if(dropzone && fakeItem) {
                dropzone.addEventListener('click', () => {
                    fakeItem.classList.remove('hidden');
                    fakeUploadBar.style.width = '0%';
                    fakeUploadStatus.textContent = 'Enviando...';
                    fakeUploadStatus.classList.replace('text-emerald-500', 'text-[#5B7FFF]');
                    fakeUploadBar.classList.replace('bg-emerald-500', 'bg-[#5B7FFF]');
                    
                    setTimeout(() => {
                        fakeUploadBar.style.width = '100%';
                        setTimeout(() => {
                            fakeUploadStatus.textContent = 'Concluído';
                            fakeUploadStatus.classList.replace('text-[#5B7FFF]', 'text-emerald-500');
                            fakeUploadBar.classList.replace('bg-[#5B7FFF]', 'bg-emerald-500');
                        }, 300);
                    }, 500);
                });
            }

            // Interactive Canvas Mock Logic
            const canvasElements = document.querySelectorAll('.canvas-element');
            canvasElements.forEach(el => {
                el.addEventListener('click', (e) => {
                    e.stopPropagation();
                    canvasElements.forEach(c => c.classList.remove('selected'));
                    el.classList.add('selected');
                });
            });

            // Init Setup
            updateUI();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-[300px] bg-white border-r border-gray-200 flex flex-col shrink-0 z-10 shadow-[4px_0_24px_rgba(0,0,0,0.02)] hidden md:flex">

<div className="h-16 px-6 flex items-center shrink-0 border-b border-gray-100">
<a className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors" href="index.html">
<iconify-icon className="text-lg" icon="solar:arrow-left-linear"></iconify-icon>
<span className="font-medium">Sair do Editor</span>
</a>
</div>
<div className="p-6">
<h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-6">Etapas da Campanha</h2>
<nav className="space-y-1 relative" id="sidebar-nav">

<div className="absolute left-[11px] top-4 bottom-4 w-px bg-gray-100 -z-10"></div>

<div className="sidebar-step flex items-start gap-3 p-2 bg-blue-50/50 rounded-lg cursor-pointer border border-blue-100/50 transition-all" data-step="1">
<div className="icon-container mt-0.5 bg-white rounded-full relative flex items-center justify-center w-5 h-5">
<div className="absolute inset-0 bg-[#5B7FFF] opacity-20 rounded-full animate-pulse"></div>
<div className="w-2.5 h-2.5 bg-[#5B7FFF] rounded-full"></div>
</div>
<div>
<div className="step-title font-medium text-[#5B7FFF]">Tipo de Campanha</div>
<div className="step-subtitle text-xs text-blue-600/70 mt-0.5">Definir formato</div>
</div>
</div>
<div className="sidebar-step flex items-start gap-3 p-2 rounded-lg cursor-pointer group hover:bg-gray-50 transition-all" data-step="2">
<div className="icon-container mt-0.5 bg-white rounded-full flex items-center justify-center w-5 h-5 border-2 border-gray-200 group-hover:border-gray-300 transition-colors"></div>
<div>
<div className="step-title font-medium text-gray-500 group-hover:text-gray-900 transition-colors">Conteúdo</div>
<div className="step-subtitle text-xs text-gray-500 mt-0.5 hidden">Mídia e informações</div>
</div>
</div>
<div className="sidebar-step flex items-start gap-3 p-2 rounded-lg cursor-pointer group hover:bg-gray-50 transition-all" data-step="3">
<div className="icon-container mt-0.5 bg-white rounded-full flex items-center justify-center w-5 h-5 border-2 border-gray-200 group-hover:border-gray-300 transition-colors"></div>
<div>
<div className="step-title font-medium text-gray-500 group-hover:text-gray-900 transition-colors">Editor Visual</div>
<div className="step-subtitle text-xs text-gray-500 mt-0.5 hidden">Cores e layout</div>
</div>
</div>
<div className="sidebar-step flex items-start gap-3 p-2 rounded-lg cursor-pointer group hover:bg-gray-50 transition-all" data-step="4">
<div className="icon-container mt-0.5 bg-white rounded-full flex items-center justify-center w-5 h-5 border-2 border-gray-200 group-hover:border-gray-300 transition-colors"></div>
<div>
<div className="step-title font-medium text-gray-500 group-hover:text-gray-900 transition-colors">Segmentação</div>
<div className="step-subtitle text-xs text-gray-500 mt-0.5 hidden">Público alvo</div>
</div>
</div>
<div className="sidebar-step flex items-start gap-3 p-2 rounded-lg cursor-pointer group hover:bg-gray-50 transition-all" data-step="5">
<div className="icon-container mt-0.5 bg-white rounded-full flex items-center justify-center w-5 h-5 border-2 border-gray-200 group-hover:border-gray-300 transition-colors"></div>
<div>
<div className="step-title font-medium text-gray-500 group-hover:text-gray-900 transition-colors">Interatividade</div>
<div className="step-subtitle text-xs text-gray-500 mt-0.5 hidden">Ações e links</div>
</div>
</div>
<div className="sidebar-step flex items-start gap-3 p-2 rounded-lg cursor-pointer group hover:bg-gray-50 transition-all" data-step="6">
<div className="icon-container mt-0.5 bg-white rounded-full flex items-center justify-center w-5 h-5 border-2 border-gray-200 group-hover:border-gray-300 transition-colors"></div>
<div>
<div className="step-title font-medium text-gray-500 group-hover:text-gray-900 transition-colors">Agendamento</div>
<div className="step-subtitle text-xs text-gray-500 mt-0.5 hidden">Datas e horários</div>
</div>
</div>
<div className="sidebar-step flex items-start gap-3 p-2 rounded-lg cursor-pointer group hover:bg-gray-50 transition-all" data-step="7">
<div className="icon-container mt-0.5 bg-white rounded-full flex items-center justify-center w-5 h-5 border-2 border-gray-200 group-hover:border-gray-300 transition-colors"></div>
<div>
<div className="step-title font-medium text-gray-500 group-hover:text-gray-900 transition-colors">Revisão</div>
<div className="step-subtitle text-xs text-gray-500 mt-0.5 hidden">Conferir e publicar</div>
</div>
</div>
</nav>
</div>

<div className="mt-auto p-6 border-t border-gray-100 bg-gray-50/50">
<div className="flex justify-between items-center text-xs mb-2">
<span className="text-gray-500 font-medium">Progresso</span>
<span className="text-gray-900 font-medium" id="progress-text">14%</span>
</div>
<div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
<div className="h-full bg-[#5B7FFF] w-[14%] rounded-full transition-all duration-300 ease-in-out" id="progress-bar"></div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-white relative">

<header className="h-16 px-6 md:px-8 flex items-center justify-between shrink-0 bg-white border-b border-gray-100 z-10">
<div className="flex items-center gap-4">

<a className="md:hidden text-gray-400 hover:text-gray-700 flex items-center transition-colors" href="index.html">
<iconify-icon className="text-xl" icon="solar:arrow-left-linear"></iconify-icon>
</a>
<h1 className="text-lg tracking-tight font-medium text-gray-900" id="header-title">Tipo de Campanha</h1>
</div>
<div className="flex items-center gap-3">
<button className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-[#5B7FFF] bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors border border-blue-100" id="btn-open-templates">
<iconify-icon className="text-lg" icon="solar:library-linear"></iconify-icon>
                    Biblioteca de Templates
                </button>
<button className="text-gray-400 hover:text-gray-700 transition-colors p-2 rounded-lg hover:bg-gray-50">
<iconify-icon className="text-xl" icon="solar:menu-dots-bold"></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto px-6 md:px-8 py-8 md:py-10 custom-scrollbar relative">
<div className="max-w-4xl mx-auto pb-10">

<div className="step-view space-y-8" id="step-1">
<div>
<h2 className="text-xl tracking-tight font-medium text-gray-900">Escolha o formato</h2>
<p className="text-sm text-gray-500 mt-1">Selecione como sua campanha será apresentada aos usuários na rede.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
<label className="relative border border-[#5B7FFF] bg-blue-50/20 rounded-xl p-5 cursor-pointer flex flex-col gap-3 transition-all hover:border-[#5B7FFF]/80 ring-1 ring-[#5B7FFF] shadow-sm">
<input checked="" className="absolute right-5 top-5 text-[#5B7FFF] focus:ring-[#5B7FFF] h-4 w-4" name="camp_type" type="radio"/>
<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-blue-100 text-[#5B7FFF] shadow-sm">
<iconify-icon className="text-xl" icon="solar:gallery-wide-linear"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-gray-900">Banner Interativo</h3>
<p className="text-xs text-gray-500 mt-1 leading-relaxed">Exiba imagens ou vídeos com botão de ação antes da liberação do Wi-Fi.</p>
</div>
</label>
<label className="relative border border-gray-200 bg-white rounded-xl p-5 cursor-pointer flex flex-col gap-3 transition-all hover:border-gray-300">
<input className="absolute right-5 top-5 text-[#5B7FFF] focus:ring-[#5B7FFF] h-4 w-4" name="camp_type" type="radio"/>
<div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100 text-gray-500">
<iconify-icon className="text-xl" icon="solar:star-ring-linear"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-gray-900">Pesquisa de Satisfação</h3>
<p className="text-xs text-gray-500 mt-1 leading-relaxed">Colete avaliações e direcione os melhores para o Google Reviews.</p>
</div>
</label>
<label className="relative border border-gray-200 bg-white rounded-xl p-5 cursor-pointer flex flex-col gap-3 transition-all hover:border-gray-300">
<input className="absolute right-5 top-5 text-[#5B7FFF] focus:ring-[#5B7FFF] h-4 w-4" name="camp_type" type="radio"/>
<div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100 text-gray-500">
<iconify-icon className="text-xl" icon="solar:video-frame-linear"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-gray-900">Vídeo Obrigado</h3>
<p className="text-xs text-gray-500 mt-1 leading-relaxed">Force a visualização de um vídeo curto (5 a 15s) antes do acesso.</p>
</div>
</label>
<label className="relative border border-gray-200 bg-white rounded-xl p-5 cursor-pointer flex flex-col gap-3 transition-all hover:border-gray-300">
<input className="absolute right-5 top-5 text-[#5B7FFF] focus:ring-[#5B7FFF] h-4 w-4" name="camp_type" type="radio"/>
<div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100 text-gray-500">
<iconify-icon className="text-xl" icon="solar:ticket-sale-linear"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-gray-900">Cupom de Desconto</h3>
<p className="text-xs text-gray-500 mt-1 leading-relaxed">Gere e exiba um QR code ou código de desconto exclusivo.</p>
</div>
</label>
</div>
</div>

<div className="step-view space-y-8 hidden max-w-2xl" id="step-2">
<div>
<h2 className="text-xl tracking-tight font-medium text-gray-900">Informações e Mídia</h2>
<p className="text-sm text-gray-500 mt-1">Defina o nome da sua campanha e faça o upload dos arquivos visuais principais.</p>
</div>
<div className="space-y-5">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="campaignName">
                                Nome da Campanha <span className="text-red-500">*</span>
</label>
<input className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5B7FFF]/20 focus:border-[#5B7FFF] transition-all text-sm text-gray-900 placeholder-gray-400" id="campaignName" placeholder="Ex: Campanha Institucional Q3" type="text" value="Promoção de Verão 2024"/>
</div>
<div>
<div className="flex justify-between items-end mb-1.5">
<label className="block text-sm font-medium text-gray-700" htmlFor="campaignDesc">Descrição</label>
<span className="text-xs text-gray-400">Opcional</span>
</div>
<textarea className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5B7FFF]/20 focus:border-[#5B7FFF] transition-all text-sm text-gray-900 placeholder-gray-400 resize-none" id="campaignDesc" placeholder="Adicione notas internas sobre esta campanha..." rows="3"></textarea>
</div>
</div>
<hr className="border-gray-100"/>
<div className="space-y-4">
<div className="flex justify-between items-center">
<h3 className="text-sm font-medium text-gray-900">Upload de Fundo/Mídia</h3>
<span className="text-xs text-gray-500">Opcional</span>
</div>

<div className="border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:border-[#5B7FFF] hover:bg-blue-50/30 transition-colors cursor-pointer group" id="dropzone">
<div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-3 group-hover:bg-blue-100 transition-colors">
<iconify-icon className="text-2xl text-gray-400 group-hover:text-[#5B7FFF] transition-colors" icon="solar:cloud-upload-linear"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-gray-900 mb-1">Arraste a imagem de fundo ou clique para upload</h4>
<p className="text-xs text-gray-500 max-w-xs">Formatos aceitos: JPG, PNG. Recomendado: 1080x1920px.</p>
</div>

<div className="flex items-center p-3 bg-white border border-gray-200 rounded-lg shadow-sm hidden" id="fake-upload-item">
<div className="w-10 h-10 rounded-md bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100 text-[#5B7FFF]">
<iconify-icon className="text-xl" icon="solar:gallery-linear"></iconify-icon>
</div>
<div className="ml-3 flex-1 min-w-0 pr-3">
<div className="flex justify-between items-center mb-1">
<p className="text-sm font-medium text-gray-900 truncate">fundo-promo.png</p>
<span className="text-xs font-medium text-[#5B7FFF]" id="fake-upload-status">Enviando...</span>
</div>
<div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-[#5B7FFF] w-[0%] rounded-full transition-all duration-300" id="fake-upload-bar"></div>
</div>
</div>
</div>
</div>
</div>

<div className="step-view hidden" id="step-3">
<div className="mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
<div>
<h2 className="text-xl tracking-tight font-medium text-gray-900">Editor Visual</h2>
<p className="text-sm text-gray-500 mt-1">Desenhe sua campanha e veja o preview real na página de login do Wi-Fi.</p>
</div>

<div className="flex items-center gap-1 bg-gray-100 p-1 rounded-lg shrink-0">
<button className="px-3 py-1.5 text-xs font-medium bg-white text-gray-900 shadow-sm rounded-md transition-all">Livre</button>
<button className="px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-900 rounded-md transition-all">Template</button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-5 flex flex-col gap-6">

<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
<div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
<h3 className="text-sm font-medium text-gray-900 flex items-center gap-2">
<iconify-icon className="text-gray-400 text-lg" icon="solar:layers-linear"></iconify-icon> Camadas de Texto
                                    </h3>
<button className="text-[#5B7FFF] hover:text-blue-700 text-xs font-medium flex items-center gap-1">
<iconify-icon className="text-sm" icon="solar:add-circle-linear"></iconify-icon> Adicionar
                                    </button>
</div>
<div className="p-3 space-y-2">

<div className="group flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg border border-transparent hover:border-gray-200 transition-colors cursor-pointer">
<iconify-icon className="text-gray-400" icon="solar:text-field-linear"></iconify-icon>
<div className="flex-1">
<input className="w-full bg-transparent text-sm font-medium text-gray-900 focus:outline-none focus:border-b focus:border-[#5B7FFF]" type="text" value="Promoção de Verão"/>
</div>
<div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1 text-gray-400 hover:text-gray-900 rounded"><iconify-icon icon="solar:pen-linear"></iconify-icon></button>
<button className="p-1 text-gray-400 hover:text-red-500 rounded"><iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon></button>
</div>
</div>

<div className="group flex items-center gap-3 p-2 bg-blue-50/30 rounded-lg border border-blue-100 transition-colors cursor-pointer">
<iconify-icon className="text-[#5B7FFF]" icon="solar:text-field-linear"></iconify-icon>
<div className="flex-1">
<input className="w-full bg-transparent text-sm font-medium text-gray-900 focus:outline-none focus:border-b focus:border-[#5B7FFF]" type="text" value="Ganhe 20% OFF"/>
</div>
<div className="flex items-center gap-1">
<button className="p-1 text-gray-400 hover:text-gray-900 rounded"><iconify-icon icon="solar:pen-linear"></iconify-icon></button>
<button className="p-1 text-gray-400 hover:text-red-500 rounded"><iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon></button>
</div>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
<div className="px-4 py-3 border-b border-gray-100 bg-gray-50/50">
<h3 className="text-sm font-medium text-gray-900 flex items-center gap-2">
<iconify-icon className="text-gray-400 text-lg" icon="solar:pallete-2-linear"></iconify-icon> Estilo (Ganhe 20% OFF)
                                    </h3>
</div>
<div className="p-4 space-y-4">

<div>
<label className="block text-xs font-medium text-gray-500 mb-1.5">Tipografia</label>
<select className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5B7FFF]/20 focus:border-[#5B7FFF] text-sm text-gray-900">
<option>Inter (Padrão)</option>
<option>Roboto</option>
<option>Montserrat</option>
</select>
</div>
<div className="grid grid-cols-2 gap-4">

<div>
<label className="block text-xs font-medium text-gray-500 mb-1.5">Tamanho</label>
<div className="flex items-center border border-gray-300 rounded-lg overflow-hidden shadow-sm">
<button className="px-3 py-1.5 bg-gray-50 text-gray-500 hover:bg-gray-100 border-r border-gray-300">-</button>
<input className="w-full text-center text-sm font-medium focus:outline-none" type="text" value="24"/>
<button className="px-3 py-1.5 bg-gray-50 text-gray-500 hover:bg-gray-100 border-l border-gray-300">+</button>
</div>
</div>

<div>
<label className="block text-xs font-medium text-gray-500 mb-1.5">Cor do Texto</label>
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-md bg-white border border-gray-300 shadow-sm cursor-pointer ring-2 ring-offset-2 ring-gray-200"></div>
<div className="w-8 h-8 rounded-md bg-gray-900 border border-gray-300 shadow-sm cursor-pointer"></div>
<div className="w-8 h-8 rounded-md bg-[#5B7FFF] border border-gray-200 shadow-sm cursor-pointer"></div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
<div className="p-4 flex items-center justify-between">
<div>
<label className="block text-xs font-medium text-gray-900">Cor de Fundo da Campanha</label>
<p className="text-[10px] text-gray-500 mt-0.5">Visível se não houver imagem.</p>
</div>
<input className="w-8 h-8 rounded cursor-pointer border-0 p-0 bg-transparent" type="color" value="#5B7FFF"/>
</div>
</div>
</div>

<div className="lg:col-span-7 flex justify-center bg-gray-50/50 rounded-2xl py-6 px-4">

<div className="w-[320px] h-[650px] bg-white rounded-[2.5rem] border-[10px] border-gray-900 shadow-2xl relative overflow-hidden flex flex-col shrink-0">

<div className="h-6 w-full bg-white flex justify-between items-center px-5 text-[10px] font-medium text-gray-900 shrink-0 z-20">
<span>09:41</span>
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:cell-signal-full-bold"></iconify-icon>
<iconify-icon icon="solar:wi-fi-bold"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:battery-charge-bold"></iconify-icon>
</div>
</div>

<div className="flex-1 flex flex-col bg-gray-50 relative overflow-y-auto custom-scrollbar">

<div className="bg-white p-5 text-center shrink-0 border-b border-gray-100">
<div className="w-10 h-10 bg-gray-100 rounded-full mx-auto mb-2 flex items-center justify-center">
<iconify-icon className="text-gray-400 text-lg" icon="solar:shop-linear"></iconify-icon>
</div>
<h3 className="font-medium text-gray-900 text-sm">Bem-vindo ao Wi-Fi</h3>
<p className="text-xs text-gray-500">Faça login para navegar grátis.</p>
</div>

<div className="relative w-full aspect-square bg-[#5B7FFF] flex flex-col items-center justify-center p-6 shrink-0 group overflow-hidden">

<div className="canvas-element absolute top-10 left-1/2 -translate-x-1/2 w-[80%] text-center cursor-move hover:ring-1 hover:ring-white/50 p-2 transition-all">
<p className="text-white/80 text-sm font-medium uppercase tracking-widest">Promoção de Verão</p>
</div>

<div className="canvas-element selected absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center cursor-move p-2 transition-all">
<h2 className="text-white text-3xl font-semibold tracking-tight leading-none drop-shadow-md">Ganhe 20% OFF</h2>
</div>

<div className="absolute bottom-6 right-6 opacity-20 pointer-events-none">
<iconify-icon className="text-white text-6xl" icon="solar:sun-bold"></iconify-icon>
</div>
</div>

<div className="p-5 flex flex-col gap-3 mt-auto bg-white shrink-0">
<div className="bg-gray-100 h-10 rounded-lg flex items-center px-3 gap-2 text-gray-400">
<iconify-icon icon="solar:user-linear"></iconify-icon>
<span className="text-xs">Seu Nome</span>
</div>
<button className="w-full bg-gray-900 text-white font-medium text-sm py-3 rounded-lg shadow-sm">
                                            Conectar à Internet
                                        </button>
<p className="text-[10px] text-center text-gray-400 mt-2">Ao conectar, você concorda com os termos de uso.</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="step-view space-y-8 hidden max-w-2xl" id="step-4">
<div>
<h2 className="text-xl tracking-tight font-medium text-gray-900">Público Alvo</h2>
<p className="text-sm text-gray-500 mt-1">Defina quem verá esta campanha ao conectar na sua rede Wi-Fi.</p>
</div>
<div className="space-y-6">

<div className="space-y-3">
<label className="flex items-start gap-3 p-4 border border-[#5B7FFF] bg-blue-50/20 rounded-xl cursor-pointer">
<input checked="" className="mt-0.5 text-[#5B7FFF] focus:ring-[#5B7FFF] h-4 w-4" name="audience" type="radio"/>
<div>
<h3 className="font-medium text-gray-900 text-sm">Todos os Clientes</h3>
<p className="text-xs text-gray-500 mt-0.5">Exibir para qualquer pessoa que se conectar na rede.</p>
</div>
</label>
<label className="flex items-start gap-3 p-4 border border-gray-200 bg-white rounded-xl cursor-pointer hover:border-gray-300 transition-colors">
<input className="mt-0.5 text-[#5B7FFF] focus:ring-[#5B7FFF] h-4 w-4" name="audience" type="radio"/>
<div>
<h3 className="font-medium text-gray-900 text-sm">Público Personalizado</h3>
<p className="text-xs text-gray-500 mt-0.5">Filtrar por idade, gênero, ou quantidade de visitas.</p>
</div>
</label>
</div>

<div className="grid grid-cols-2 gap-4 p-5 bg-gray-50 border border-gray-100 rounded-xl opacity-60 pointer-events-none">
<div>
<label className="block text-xs font-medium text-gray-700 mb-1">Faixa Etária</label>
<select className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-500" disabled="">
<option>Todas as idades</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1">Gênero</label>
<select className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-500" disabled="">
<option>Todos</option>
</select>
</div>
<div className="col-span-2">
<label className="block text-xs font-medium text-gray-700 mb-1">Frequência do Cliente</label>
<select className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-500" disabled="">
<option>Novos e Recorrentes</option>
</select>
</div>
</div>
</div>
</div>

<div className="step-view space-y-8 hidden max-w-2xl" id="step-5">
<div>
<h2 className="text-xl tracking-tight font-medium text-gray-900">Ações e Destino</h2>
<p className="text-sm text-gray-500 mt-1">Configure o que acontece quando o usuário interage com a campanha.</p>
</div>
<div className="space-y-6">
<div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl bg-white shadow-sm">
<div>
<h3 className="font-medium text-gray-900 text-sm">Habilitar Botão de Ação (CTA)</h3>
<p className="text-xs text-gray-500 mt-0.5">Adiciona um botão clicável abaixo da sua mídia.</p>
</div>
<input checked="" className="custom-toggle" type="checkbox"/>
</div>
<div className="space-y-4 p-5 border border-gray-100 bg-gray-50/50 rounded-xl">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5">Texto do Botão</label>
<input className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5B7FFF]/20 focus:border-[#5B7FFF] text-sm text-gray-900" type="text" value="Saiba mais"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5">URL de Destino</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-gray-400" icon="solar:link-linear"></iconify-icon>
</div>
<input className="w-full pl-9 pr-3 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5B7FFF]/20 focus:border-[#5B7FFF] text-sm text-gray-900" placeholder="https://seusite.com.br/promo" type="url"/>
</div>
</div>
</div>
</div>
</div>

<div className="step-view space-y-8 hidden max-w-2xl" id="step-6">
<div>
<h2 className="text-xl tracking-tight font-medium text-gray-900">Período de Veiculação</h2>
<p className="text-sm text-gray-500 mt-1">Defina quando a campanha iniciará e terminará na sua rede.</p>
</div>
<div className="space-y-6">
<div className="flex items-center gap-3 p-4 bg-blue-50/50 border border-blue-100 rounded-xl text-sm">
<iconify-icon className="text-[#5B7FFF] text-xl shrink-0" icon="solar:calendar-linear"></iconify-icon>
<p className="text-gray-700">A campanha rodará <strong>continuamente</strong> até que você defina uma data de término.</p>
</div>
<div className="grid grid-cols-2 gap-5">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5">Data de Início</label>
<input className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5B7FFF]/20 focus:border-[#5B7FFF] text-sm text-gray-900" type="date"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5">Hora de Início</label>
<input className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5B7FFF]/20 focus:border-[#5B7FFF] text-sm text-gray-900" type="time" value="08:00"/>
</div>
</div>
<div className="flex items-center gap-2 mt-2">
<input className="custom-checkbox" id="hasEnd" type="checkbox"/>
<label className="text-sm text-gray-700 cursor-pointer" htmlFor="hasEnd">Definir data de encerramento</label>
</div>
</div>
</div>

<div className="step-view space-y-8 hidden" id="step-7">
<div>
<h2 className="text-xl tracking-tight font-medium text-gray-900">Tudo pronto! Revise sua Campanha</h2>
<p className="text-sm text-gray-500 mt-1">Confira os detalhes finais antes de publicar na sua rede Wi-Fi.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

<div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col gap-4">
<h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">Resumo da Configuração</h3>
<div className="divide-y divide-gray-200">
<div className="py-3 flex flex-col gap-1">
<span className="text-xs font-medium text-gray-500 uppercase">Nome</span>
<span className="text-sm font-medium text-gray-900" id="review-name">Promoção de Verão 2024</span>
</div>
<div className="py-3 flex flex-col gap-1">
<span className="text-xs font-medium text-gray-500 uppercase">Público Alvo</span>
<span className="text-sm font-medium text-gray-900">Todos os Clientes</span>
</div>
<div className="py-3 flex flex-col gap-1">
<span className="text-xs font-medium text-gray-500 uppercase">Ação / CTA</span>
<span className="text-sm font-medium text-[#5B7FFF] hover:underline cursor-pointer">"Saiba mais" -&gt; seusite.com.br</span>
</div>
<div className="py-3 flex flex-col gap-1">
<span className="text-xs font-medium text-gray-500 uppercase">Período</span>
<span className="text-sm font-medium text-gray-900">Contínuo (a partir de hoje)</span>
</div>
</div>
<div className="flex items-start gap-3 p-4 bg-emerald-50 rounded-xl border border-emerald-100 mt-2">
<iconify-icon className="text-emerald-500 text-xl mt-0.5 shrink-0" icon="solar:shield-check-linear"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-emerald-800">Pronto para ativação</h4>
<p className="text-xs text-emerald-600 mt-0.5">Sua campanha atende a todos os requisitos e começará a ser exibida assim que publicada.</p>
</div>
</div>
</div>

<div className="flex flex-col items-center justify-center bg-gray-50 p-6 rounded-xl border border-gray-100">
<span className="text-xs font-medium text-gray-500 mb-4">Preview Final no Login</span>

<div className="w-[240px] h-[480px] bg-white rounded-[2rem] border-[6px] border-gray-900 shadow-lg relative overflow-hidden flex flex-col shrink-0">

<div className="h-4 w-full bg-white flex justify-end items-center px-3 text-[8px] font-medium text-gray-900 shrink-0 z-20 gap-1">
<iconify-icon icon="solar:wi-fi-bold"></iconify-icon>
<iconify-icon icon="solar:battery-charge-bold"></iconify-icon>
</div>
<div className="flex-1 flex flex-col bg-gray-50 relative">

<div className="bg-white p-3 text-center shrink-0 border-b border-gray-100">
<div className="w-6 h-6 bg-gray-100 rounded-full mx-auto mb-1 flex items-center justify-center">
<iconify-icon className="text-gray-400 text-xs" icon="solar:shop-linear"></iconify-icon>
</div>
<h3 className="font-medium text-gray-900 text-[10px]">Bem-vindo ao Wi-Fi</h3>
</div>

<div className="relative w-full aspect-square bg-[#5B7FFF] flex flex-col items-center justify-center p-4 shrink-0 overflow-hidden">
<p className="text-white/80 text-[10px] font-medium uppercase tracking-widest absolute top-6">Promoção de Verão</p>
<h2 className="text-white text-xl font-semibold tracking-tight text-center drop-shadow-sm">Ganhe 20% OFF</h2>
<iconify-icon className="text-white/20 text-4xl absolute bottom-3 right-3 pointer-events-none" icon="solar:sun-bold"></iconify-icon>
</div>

<div className="p-3 w-full bg-white text-center border-b border-gray-100">
<button className="w-full bg-[#5B7FFF] text-white font-medium text-xs py-2 rounded shadow-sm">
                                            Saiba mais
                                        </button>
</div>

<div className="p-3 mt-auto bg-white shrink-0">
<button className="w-full bg-gray-900 text-white font-medium text-[10px] py-2 rounded">
                                            Conectar
                                        </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<footer className="h-16 border-t border-gray-200 bg-white flex items-center justify-between px-6 md:px-8 shrink-0 z-10 shadow-[0_-4px_24px_rgba(0,0,0,0.02)]">
<button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors invisible" id="btn-prev">
                Voltar
            </button>
<div className="flex items-center gap-3">
<button className="hidden sm:block px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors shadow-sm">
                    Salvar Rascunho
                </button>
<button className="flex items-center gap-2 bg-[#5B7FFF] hover:bg-blue-600 text-white px-5 py-2 rounded-lg font-medium text-sm shadow-sm transition-all active:scale-[0.98]" id="btn-next">
                    Avançar
                    <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</footer>
</main>

<div className="hidden fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" id="templateModal">
<div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity" id="modal-backdrop"></div>
<div className="relative bg-white rounded-2xl shadow-xl w-full max-w-5xl max-h-[90vh] flex flex-col overflow-hidden">
<div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-white z-10">
<div>
<h2 className="text-lg tracking-tight font-medium text-gray-900">Biblioteca de Templates</h2>
<p className="text-xs text-gray-500 mt-0.5">Escolha um design pronto para acelerar sua criação.</p>
</div>
<button className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors" id="btn-close-templates">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto bg-gray-50/30 p-6 custom-scrollbar">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
<div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0 w-full sm:w-auto">
<button className="px-3 py-1.5 text-sm font-medium bg-gray-900 text-white rounded-full whitespace-nowrap shadow-sm">Todos</button>
<button className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-full whitespace-nowrap transition-colors">Avaliações</button>
<button className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-full whitespace-nowrap transition-colors">Produtos</button>
<button className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-full whitespace-nowrap transition-colors">Eventos</button>
<button className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-full whitespace-nowrap transition-colors">Promoções</button>
</div>
<div className="relative w-full sm:w-64 shrink-0">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-lg text-gray-400" icon="solar:magnifer-linear"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-[#5B7FFF]/20 focus:border-[#5B7FFF]" placeholder="Buscar templates..." type="text"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-xl border border-gray-200 overflow-hidden group hover:shadow-md transition-all flex flex-col">
<div className="aspect-[3/4] bg-gray-100 relative overflow-hidden">
<img alt="Template" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&amp;h=600&amp;fit=crop"/>
<div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
<button className="select-template-btn bg-white text-gray-900 font-medium text-sm px-5 py-2.5 rounded-lg shadow-sm hover:scale-105 transition-transform">
                                    Usar Template
                                </button>
</div>
</div>
<div className="p-4 mt-auto">
<div className="flex items-center justify-between mb-1">
<h3 className="font-medium text-gray-900 text-sm">Lançamento Burger</h3>
<span className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-[10px] font-medium uppercase tracking-wide">Produtos</span>
</div>
<p className="text-xs text-gray-500">Imagem + CTA + Texto</p>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 overflow-hidden group hover:shadow-md transition-all flex flex-col">
<div className="aspect-[3/4] bg-gray-100 relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center bg-gray-900">
<h2 className="text-white text-2xl font-bold tracking-tight px-6 text-center">Black Friday -50%</h2>
</div>
<div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
<button className="select-template-btn bg-white text-gray-900 font-medium text-sm px-5 py-2.5 rounded-lg shadow-sm hover:scale-105 transition-transform">
                                    Usar Template
                                </button>
</div>
</div>
<div className="p-4 mt-auto">
<div className="flex items-center justify-between mb-1">
<h3 className="font-medium text-gray-900 text-sm">Promoção Relâmpago</h3>
<span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded text-[10px] font-medium uppercase tracking-wide">Promoções</span>
</div>
<p className="text-xs text-gray-500">Fundo escuro + Contagem regressiva</p>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 overflow-hidden group hover:shadow-md transition-all flex flex-col">
<div className="aspect-[3/4] bg-white relative overflow-hidden flex flex-col items-center justify-center p-6 text-center border-b border-gray-100">

<div className="w-14 h-14 bg-white border border-gray-100 rounded-full shadow-sm flex items-center justify-center mb-5 text-[#4285F4]">
<svg height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.456 10.154c.123.659.19 1.348.19 2.067c0 5.624-3.764 9.623-9.449 9.623A9.84 9.84 0 0 1 2.353 12a9.84 9.84 0 0 1 9.844-9.844c2.658 0 4.879.978 6.583 2.566l-2.775 2.775V7.49c-1.033-.984-2.344-1.489-3.808-1.489c-3.248 0-5.888 2.744-5.888 5.993c0 3.248 2.64 5.993 5.888 5.993c3.498 0 5.013-2.31 5.385-4.498h-5.385v-3.344h9.262Z" fill="currentColor"></path></svg>
</div>
<h3 className="text-base font-semibold text-gray-900 mb-2">Avalie-nos no Google</h3>
<p className="text-xs text-gray-500 mb-4 px-2">Sua opinião é muito importante para nós. Compartilhe sua experiência!</p>
<div className="flex gap-1 text-[#FBBC05] mb-6">
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
</div>
<div className="w-full bg-[#1A73E8] text-white text-xs font-medium px-4 py-2.5 rounded-lg shadow-sm">Deixar avaliação</div>
<div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
<button className="select-template-btn bg-white text-gray-900 font-medium text-sm px-5 py-2.5 rounded-lg shadow-sm hover:scale-105 transition-transform">
                                    Usar Template
                                </button>
</div>
</div>
<div className="p-4 mt-auto">
<div className="flex items-center justify-between mb-1">
<h3 className="font-medium text-gray-900 text-sm">Google Review Padrão</h3>
<span className="px-2 py-0.5 bg-yellow-50 text-yellow-700 rounded text-[10px] font-medium uppercase tracking-wide">Avaliações</span>
</div>
<p className="text-xs text-gray-500">Captação de avaliações no Google</p>
</div>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
