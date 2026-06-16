import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Init Icons
        lucide.createIcons();

        // File Input UI Logic
        const fileInput = document.getElementById('arquivo');
        const fileNameSpan = document.getElementById('file-name');

        fileInput.addEventListener('change', function(e) {
            if (this.files && this.files.length > 0) {
                fileNameSpan.textContent = this.files[0].name;
                fileNameSpan.classList.remove('text-neutral-300');
                fileNameSpan.classList.add('text-emerald-400', 'font-medium');
            } else {
                fileNameSpan.textContent = 'Anexar arquivo';
                fileNameSpan.classList.remove('text-emerald-400', 'font-medium');
                fileNameSpan.classList.add('text-neutral-300');
            }
        });

        // Form Submission Logic
        const form = document.getElementById('requestForm');
        const submitBtn = document.getElementById('submitBtn');
        const btnLoader = document.getElementById('btnLoader');
        const modal = document.getElementById('successModal');
        const modalBackdrop = document.getElementById('modalBackdrop');
        const modalPanel = document.getElementById('modalPanel');
        let timerInterval;

        form.addEventListener('submit', async function(e) {
            e.preventDefault();

            // UI Loading State
            submitBtn.disabled = true;
            btnLoader.classList.remove('hidden');

            const formData = new FormData(form);

            try {
                // Sending to Webhook
                const response = await fetch('https://hook.us1.make.com/51qam97czwhfvowf6n7j1j5cpwvyp2z2', {
                    method: 'POST',
                    body: formData
                });

                if (response.ok) {
                    showModal();
                    form.reset();
                    // Reset file input label
                    fileNameSpan.textContent = 'Anexar arquivo';
                    fileNameSpan.classList.remove('text-emerald-400', 'font-medium');
                    fileNameSpan.classList.add('text-neutral-300');
                } else {
                    alert('Erro ao enviar. Tente novamente.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Erro de conexão. Verifique sua internet.');
            } finally {
                // Reset Button State
                submitBtn.disabled = false;
                btnLoader.classList.add('hidden');
            }
        });

        // Modal Functions
        function showModal() {
            modal.classList.remove('hidden');
            
            // Start Timer Logic
            const redirectBtn = document.getElementById('redirectBtn');
            let timeLeft = 20;
            
            // Reset state
            redirectBtn.classList.add('opacity-50', 'cursor-not-allowed', 'pointer-events-none');
            redirectBtn.innerHTML = `<span>Aguarde ${timeLeft}s...</span>`;
            
            timerInterval = setInterval(() => {
                timeLeft--;
                if (timeLeft > 0) {
                    redirectBtn.innerHTML = `<span>Aguarde ${timeLeft}s...</span>`;
                } else {
                    clearInterval(timerInterval);
                    redirectBtn.classList.remove('opacity-50', 'cursor-not-allowed', 'pointer-events-none');
                    redirectBtn.innerHTML = `Ver Todas Solicitações <i data-lucide="arrow-right" class="w-4 h-4" stroke-width="1.5"></i>`;
                    lucide.createIcons(); // Re-render icons inside button
                }
            }, 1000);

            // Animate in
            setTimeout(() => {
                modalBackdrop.classList.remove('opacity-0');
                modalPanel.classList.remove('opacity-0', 'translate-y-4', 'sm:translate-y-0', 'sm:scale-95');
                modalPanel.classList.add('opacity-100', 'translate-y-0', 'sm:scale-100');
            }, 10);
        }

        function closeModal() {
            // Clear timer if closed early
            if(timerInterval) clearInterval(timerInterval);

            // Animate out
            modalBackdrop.classList.add('opacity-0');
            modalPanel.classList.remove('opacity-100', 'translate-y-0', 'sm:scale-100');
            modalPanel.classList.add('opacity-0', 'translate-y-4', 'sm:translate-y-0', 'sm:scale-95');
            
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 text-white opacity-90 hover:opacity-100 transition-opacity">
<div className="p-1.5 bg-white/10 rounded-lg border border-white/5">
<i className="w-5 h-5 text-emerald-400" data-lucide="layers" strokeWidth="1.5"></i>
</div>
<span className="font-medium text-sm tracking-tight">Solicitações</span>
</div>
<a className="flex items-center gap-2 text-xs font-medium text-neutral-400 hover:text-emerald-400 transition-colors" href="https://www.notion.so/controle-paneas/2f9e9b7d87188012bcfddf727f574f13?v=2f9e9b7d871880a1b100000c37a53bc9" target="_blank">
                Ver todas
                <i className="w-3.5 h-3.5" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
</div>
</header>

<main className="flex-grow pt-28 pb-20 px-4 sm:px-6 relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] max-w-2xl bg-emerald-900/10 blur-[100px] -z-10 rounded-full pointer-events-none"></div>
<div className="max-w-md mx-auto space-y-8">

<div className="space-y-2 text-center sm:text-left">
<h1 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">Nova solicitação</h1>
<p className="text-neutral-400 text-sm leading-relaxed">Preencha os dados abaixo para registrar a movimentação.</p>
</div>

<form className="space-y-6" id="requestForm">

<div className="space-y-2">
<label className="text-xs font-medium text-neutral-400 uppercase tracking-wide ml-1">Tipo de Registro <span className="text-emerald-500">*</span></label>
<div className="grid grid-cols-3 gap-2 p-1 bg-neutral-900/50 border border-white/5 rounded-xl">
<label className="cursor-pointer relative">
<input className="peer sr-only" name="registro" required="" type="radio" value="Atualização"/>
<div className="w-full py-2.5 text-sm font-medium text-center text-neutral-500 rounded-lg peer-checked:bg-neutral-800 peer-checked:text-white peer-checked:shadow-sm transition-all-custom hover:text-neutral-300">
                                Atualização
                            </div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" name="registro" type="radio" value="Novo"/>
<div className="w-full py-2.5 text-sm font-medium text-center text-neutral-500 rounded-lg peer-checked:bg-neutral-800 peer-checked:text-white peer-checked:shadow-sm transition-all-custom hover:text-neutral-300">
                                Novo
                            </div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" name="registro" type="radio" value="Não sei"/>
<div className="w-full py-2.5 text-sm font-medium text-center text-neutral-500 rounded-lg peer-checked:bg-neutral-800 peer-checked:text-white peer-checked:shadow-sm transition-all-custom hover:text-neutral-300">
                                Não sei
                            </div>
</label>
</div>
</div>

<div className="space-y-2">
<label className="text-xs font-medium text-neutral-400 uppercase tracking-wide ml-1">Movimentação <span className="text-emerald-500">*</span></label>
<div className="grid grid-cols-2 gap-3">

<label className="cursor-pointer group">
<input className="peer sr-only" name="tipo" required="" type="radio" value="Saída"/>
<div className="h-full p-4 rounded-xl border border-white/10 bg-neutral-900/30 hover:bg-neutral-900 hover:border-white/20 peer-checked:border-red-500/50 peer-checked:bg-red-950/10 peer-checked:ring-1 peer-checked:ring-red-500/50 transition-all-custom flex flex-col items-center gap-2 text-center">
<div className="p-2 rounded-full bg-white/5 text-neutral-400 group-hover:text-white peer-checked:text-red-400 peer-checked:bg-red-500/10 transition-colors">
<i className="w-5 h-5" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
<span className="text-sm font-medium text-neutral-300 group-hover:text-white peer-checked:text-red-400">Saída</span>
</div>
</label>

<label className="cursor-pointer group">
<input className="peer sr-only" name="tipo" type="radio" value="Entrada"/>
<div className="h-full p-4 rounded-xl border border-white/10 bg-neutral-900/30 hover:bg-neutral-900 hover:border-white/20 peer-checked:border-emerald-500/50 peer-checked:bg-emerald-950/10 peer-checked:ring-1 peer-checked:ring-emerald-500/50 transition-all-custom flex flex-col items-center gap-2 text-center">
<div className="p-2 rounded-full bg-white/5 text-neutral-400 group-hover:text-white peer-checked:text-emerald-400 peer-checked:bg-emerald-500/10 transition-colors">
<i className="w-5 h-5" data-lucide="arrow-down-left" strokeWidth="1.5"></i>
</div>
<span className="text-sm font-medium text-neutral-300 group-hover:text-white peer-checked:text-emerald-400">Entrada</span>
</div>
</label>
</div>
</div>

<div className="space-y-2">
<label className="text-xs font-medium text-neutral-400 uppercase tracking-wide ml-1" htmlFor="descricao">Descrição <span className="text-emerald-500">*</span></label>
<textarea className="w-full bg-neutral-900/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all-custom resize-none" id="descricao" name="descricao" placeholder="Ex: Pagamento referente a licença anual do software..." required="" rows="3"></textarea>
</div>

<div className="space-y-2">
<label className="text-xs font-medium text-neutral-400 uppercase tracking-wide ml-1">Comprovante / Boleto</label>
<div className="relative">
<input accept=".pdf,.jpg,.jpeg,.png" className="peer sr-only" id="arquivo" name="arquivo" type="file"/>
<label className="file-drop-zone flex items-center justify-between w-full px-4 py-3 border border-dashed border-white/15 rounded-xl bg-neutral-900/30 cursor-pointer transition-all-custom group" htmlFor="arquivo">
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-neutral-800 text-neutral-400 group-hover:text-emerald-400 transition-colors">
<i className="w-5 h-5" data-lucide="upload-cloud" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col">
<span className="text-sm text-neutral-300 group-hover:text-white transition-colors truncate max-w-[180px] sm:max-w-[220px]" id="file-name">Anexar arquivo</span>
<span className="text-[10px] text-neutral-500 uppercase">PDF, JPG, PNG</span>
</div>
</div>
<span className="text-xs font-medium text-neutral-500 group-hover:text-emerald-500 transition-colors bg-white/5 px-2 py-1 rounded">Buscar</span>
</label>
</div>
</div>

<div className="space-y-2">
<label className="text-xs font-medium text-neutral-400 uppercase tracking-wide ml-1" htmlFor="observacao">Observação para Matheus</label>
<textarea className="w-full bg-neutral-900/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all-custom resize-none" id="observacao" name="observacao" placeholder="Algum detalhe extra?" rows="2"></textarea>
</div>

<div className="pt-2">
<button className="group relative w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-medium py-3.5 rounded-xl shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_-5px_rgba(16,185,129,0.5)] transition-all duration-300 transform active:scale-[0.99]" id="submitBtn" type="submit">
<span id="btnText">Enviar Solicitação</span>
<i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" strokeWidth="1.5"></i>

<div className="hidden absolute inset-0 flex items-center justify-center bg-emerald-500 rounded-xl" id="btnLoader">
<svg className="animate-spin h-5 w-5 text-neutral-950" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
<path className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"></path>
</svg>
</div>
</button>
</div>
</form>
<div className="text-center">
<p className="text-[10px] text-neutral-600">Sistema interno de controle financeiro.</p>
</div>
</div>
</main>

<div aria-labelledby="modal-title" aria-modal="true" className="fixed inset-0 z-[100] hidden" id="successModal" role="dialog">

<div className="fixed inset-0 bg-[#050505]/90 backdrop-blur-sm transition-opacity opacity-0" id="modalBackdrop"></div>
<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

<div className="relative transform overflow-hidden rounded-2xl bg-neutral-900 border border-white/10 text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-sm opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" id="modalPanel">
<div className="p-6 text-center space-y-5">
<div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/20">
<i className="h-7 w-7 text-emerald-500" data-lucide="check" strokeWidth="2"></i>
</div>
<div className="space-y-2">
<h3 className="text-lg font-medium text-white tracking-tight" id="modal-title">Solicitação Enviada</h3>
<p className="text-sm text-neutral-400">Os dados foram encaminhados com sucesso para o processamento.</p>
</div>
</div>
<div className="px-6 pb-6 pt-2">
<a className="inline-flex w-full justify-center items-center gap-2 rounded-xl bg-white px-3 py-3 text-sm font-medium text-black shadow-sm hover:bg-neutral-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white opacity-50 cursor-not-allowed pointer-events-none" href="https://www.notion.so/controle-paneas/2f9e9b7d87188012bcfddf727f574f13?v=2f9e9b7d871880a1b100000c37a53bc9" id="redirectBtn" target="_blank">
<span>Aguarde 10s...</span>
</a>
<button className="mt-3 w-full inline-flex justify-center rounded-xl bg-transparent px-3 py-2 text-sm font-medium text-neutral-500 hover:text-neutral-300 transition-colors" onclick="closeModal()" type="button">
                            Fechar e enviar nova
                        </button>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
