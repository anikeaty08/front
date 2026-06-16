import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Data: Questions List
        const questions = [
            "Minha agenda muda frequentemente em função de demandas inesperadas.",
            "Costumo trabalhar em várias frentes ao mesmo tempo.",
            "Sei identificar quais poucas atividades têm maior impacto nos meus resultados.",
            "Dedico tempo regularmente para revisar a forma como trabalho.",
            "Grande parte do meu dia é consumida por respostas rápidas e ajustes pontuais.",
            "Consigo eliminar atividades sem sentir que estou deixando algo importante para trás.",
            "Tomo decisões de priorização mesmo com informações incompletas.",
            "Meu trabalho tende a ser mais reativo do que planejado.",
            "Tenho clareza sobre onde meu tempo gera mais retorno.",
            "Manter muitas tarefas em andamento me dá sensação de segurança.",
            "Consigo manter meu planejamento e blocos de execução mesmo com caos.",
            "Sustento follow-ups difíceis até obter uma decisão e liberar espaço.",
            "Consigo dizer “não agora” para urgências fora das prioridades.",
            "Faço visitas de pós-venda para fortalecer relacionamento.",
            "Conduzo o fluxo de venda com método, sem pular etapas.",
            "Meu dia costuma ser consumido por ajustes e incêndios.",
            "Trabalho em muitas frentes para não perder oportunidades.",
            "Quando a pressão aumenta, aumento o volume, não a clareza.",
            "Mantenho oportunidades no funil mesmo sabendo que não vão fechar.",
            "Finalizo semanas com muitas decisões sem avanço real."
        ];

        // Elements
        const leadForm = document.getElementById('lead-form');
        const stepLead = document.getElementById('step-lead');
        const stepQuestions = document.getElementById('step-questions');
        const container = document.getElementById('questions-container');
        const progressBar = document.getElementById('progress-bar');
        const progressText = document.getElementById('progress-text');
        const countDisplay = document.getElementById('completed-count');
        const submitBtn = document.getElementById('submit-btn');
        const formDiagnosis = document.getElementById('diagnosis-form');
        const modal = document.getElementById('success-modal');
        const modalContent = document.getElementById('modal-content');

        // User Data Storage
        let userData = {};

        // Step 1: Handle Lead Submit
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Capture Data
            userData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                whatsapp: document.getElementById('whatsapp').value
            };

            // UI Transition
            const btn = leadForm.querySelector('button');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> Carregando...';
            lucide.createIcons();

            setTimeout(() => {
                stepLead.classList.add('hidden');
                stepQuestions.classList.remove('hidden');
                // Trigger reflow for animation
                void stepQuestions.offsetWidth;
                stepQuestions.classList.remove('opacity-0');
                stepQuestions.classList.add('fade-in');
                
                // Init Icons for the new section
                lucide.createIcons();
                
                // Update Progress Text
                progressText.innerText = "Em andamento";
                
                // Scroll to top lightly
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 600);
        });

        // Step 2: Render Questions
        questions.forEach((q, index) => {
            const num = index + 1;
            const html = `
                <div class="bg-white rounded-xl border border-gray-200 shadow-sm p-5 hover:border-[#b2613b]/30 hover:shadow-md transition-all duration-300 group">
                    <div class="flex flex-col h-full justify-between gap-4">
                        <div class="flex gap-3">
                            <span class="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded bg-gray-50 text-[10px] font-semibold text-gray-400 border border-gray-100 mt-0.5">
                                ${num < 10 ? '0'+num : num}
                            </span>
                            <p class="text-sm font-medium text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">${q}</p>
                        </div>
                        
                        <div class="w-full bg-gray-50 rounded-lg p-1.5 border border-gray-100">
                            <div class="flex justify-between items-center mb-1 px-1">
                                <span class="text-[9px] uppercase tracking-wider font-bold text-gray-300">Discordo</span>
                                <span class="text-[9px] uppercase tracking-wider font-bold text-gray-300">Concordo</span>
                            </div>
                            <div class="flex justify-between gap-1">
                                ${[1, 2, 3, 4, 5].map(val => `
                                    <label class="relative cursor-pointer flex-1">
                                        <input type="radio" name="q${num}" value="${val}" class="peer sr-only" required>
                                        <div class="h-9 w-full flex items-center justify-center rounded-md bg-white border border-gray-200 text-xs font-semibold text-gray-400 transition-all duration-200 
                                            hover:border-[#b2613b] hover:text-[#b2613b]
                                            peer-checked:bg-[#139016] peer-checked:border-[#139016] peer-checked:text-white peer-checked:shadow-sm">
                                            ${val}
                                        </div>
                                    </label>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', html);
        });

        // Logic: Progress & Validation
        formDiagnosis.addEventListener('change', () => {
            const data = new FormData(formDiagnosis);
            let answered = 0;
            
            for(let pair of data.entries()) answered++;

            // Update UI
            countDisplay.innerText = answered;
            const percent = (answered / questions.length) * 100;
            progressBar.style.width = `${percent}%`;

            if (answered === questions.length) {
                submitBtn.disabled = false;
                submitBtn.classList.add('bg-[#139016]', 'hover:bg-[#0f7a12]', 'shadow-md');
            } else {
                submitBtn.disabled = true;
                submitBtn.classList.remove('bg-[#139016]', 'hover:bg-[#0f7a12]', 'shadow-md');
            }
        });

        // Submit Final
        formDiagnosis.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Loading State
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i><span>Analisando...</span>`;
            lucide.createIcons();

            setTimeout(() => {
                // Populate Modal Data
                document.getElementById('modal-user-name').innerText = userData.name.split(' ')[0];
                document.getElementById('modal-user-email').innerText = userData.email;

                // Show Modal
                modal.classList.remove('hidden');
                void modal.offsetWidth; 
                modal.classList.remove('opacity-0');
                modalContent.classList.remove('scale-95');
                
                // Collect All Data
                const formData = new FormData(formDiagnosis);
                const answers = {};
                formData.forEach((value, key) => answers[key] = value);
                
                const finalPayload = { ...userData, answers };
                console.log("Full Submission:", finalPayload);

            }, 1500);
        });

        // Initial Icon Render
        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 bg-opacity-95 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-4 lg:px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="bg-[#139016]/10 p-2 rounded-lg text-[#139016]">
<i className="w-5 h-5" data-lucide="sprout" strokeWidth="1.5"></i>
</div>
<span className="text-sm font-semibold tracking-tight text-gray-900 uppercase">AGRO<span className="text-[#b2613b]">DIAG</span></span>
</div>
<div className="text-xs font-medium text-gray-400 flex items-center gap-2">
<span className="hidden sm:inline" id="progress-text">Aguardando início</span>
<span className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded text-[10px]">v1.2</span>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-1 bg-gray-100">
<div className="bg-[#139016] h-full transition-all duration-500 ease-out w-0 shadow-[0_0_10px_rgba(19,144,22,0.5)]" id="progress-bar"></div>
</div>
</header>
<main className="max-w-6xl mx-auto px-4 lg:px-6 mt-8 sm:mt-12">

<div className="mb-8 text-center sm:text-left border-b border-gray-200 pb-8">
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-3">
                Diagnóstico de Gestão do Tempo e Prioridades
            </h1>
<p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-3xl">
                Avalie sua rotina no campo ou escritório. O diagnóstico é dividido em duas etapas: identificação e avaliação.
            </p>
</div>

<section className="max-w-xl mx-auto fade-in" id="step-lead">
<div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8">
<div className="flex items-center gap-3 mb-6">
<div className="h-8 w-8 rounded-full bg-[#139016]/10 flex items-center justify-center text-[#139016]">
<i className="w-4 h-4" data-lucide="user"></i>
</div>
<h2 className="text-lg font-medium text-gray-900">Seus Dados</h2>
</div>
<form className="space-y-5" id="lead-form">
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5 uppercase tracking-wide" htmlFor="name">Nome Completo</label>
<input className="block w-full rounded-lg border-gray-200 shadow-sm text-sm focus:border-[#139016] focus:ring-[#139016] py-2.5 px-3 transition-colors bg-gray-50/50 focus:bg-white placeholder-gray-400" id="name" placeholder="Ex: João da Silva" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5 uppercase tracking-wide" htmlFor="email">E-mail Corporativo</label>
<input className="block w-full rounded-lg border-gray-200 shadow-sm text-sm focus:border-[#139016] focus:ring-[#139016] py-2.5 px-3 transition-colors bg-gray-50/50 focus:bg-white placeholder-gray-400" id="email" placeholder="joao@empresa.com.br" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5 uppercase tracking-wide" htmlFor="whatsapp">WhatsApp</label>
<div className="relative">
<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 text-sm pointer-events-none">
<i className="w-3.5 h-3.5" data-lucide="phone"></i>
</span>
<input className="block w-full pl-9 rounded-lg border-gray-200 shadow-sm text-sm focus:border-[#139016] focus:ring-[#139016] py-2.5 px-3 transition-colors bg-gray-50/50 focus:bg-white placeholder-gray-400" id="whatsapp" placeholder="(00) 00000-0000" required="" type="tel"/>
</div>
</div>
<div className="pt-4">
<button className="w-full flex items-center justify-center gap-2 bg-[#139016] hover:bg-[#0f7a12] text-white text-sm font-medium py-3 px-4 rounded-lg shadow-sm hover:shadow transition-all duration-200 focus:ring-4 focus:ring-[#139016]/20" type="submit">
<span>Iniciar Diagnóstico</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<p className="text-[10px] text-gray-400 text-center mt-3">
                            Seus dados estão seguros e serão utilizados apenas para envio do relatório.
                        </p>
</div>
</form>
</div>
</section>

<section className="hidden opacity-0 transition-opacity duration-500" id="step-questions">
<form className="space-y-8" id="diagnosis-form">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6" id="questions-container">

</div>

<div className="bg-white border-t border-gray-200 mt-8 pt-6 pb-2 sticky bottom-0 z-10 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] sm:shadow-none sm:static sm:bg-transparent sm:border-t-0">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-0">
<div className="text-xs text-gray-500 font-medium">
<span className="text-[#139016] font-bold" id="completed-count">0</span> de 20 perguntas respondidas
                        </div>
<button className="w-full sm:w-auto px-8 py-3 bg-[#139016] text-white text-sm font-medium rounded-lg shadow-sm hover:bg-[#0f7a12] focus:ring-4 focus:ring-[#139016]/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none transition-all duration-200 flex items-center justify-center gap-2 group" disabled="" id="submit-btn" type="submit">
<span>Gerar Relatório</span>
<i className="w-4 h-4" data-lucide="file-check" strokeWidth="1.5"></i>
</button>
</div>
</div>
</form>
</section>
</main>

<div className="fixed inset-0 z-[60] hidden bg-gray-900/40 backdrop-blur-sm flex items-center justify-center p-4 opacity-0 transition-opacity duration-300" id="success-modal">
<div className="bg-white rounded-xl shadow-2xl max-w-sm w-full p-6 text-center transform scale-95 transition-transform duration-300 border border-gray-100" id="modal-content">
<div className="mx-auto flex items-center justify-center h-14 w-14 rounded-full bg-[#139016]/10 mb-5">
<i className="h-7 w-7 text-[#139016]" data-lucide="check" strokeWidth="2"></i>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Diagnóstico Concluído!</h3>
<p className="text-sm text-gray-500 mb-6 leading-relaxed">Obrigado, <span className="font-medium text-gray-800" id="modal-user-name"></span>. Sua análise completa foi enviada para <span className="font-medium text-gray-800" id="modal-user-email"></span>.</p>
<button className="w-full inline-flex justify-center items-center gap-2 rounded-lg shadow-sm px-4 py-2.5 bg-gray-900 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors" onclick="location.reload()">
<i className="w-4 h-4" data-lucide="rotate-ccw"></i>
                Novo Diagnóstico
            </button>
</div>
</div>


    </>
  );
}
