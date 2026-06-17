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



        // DOM Elements
        const form = document.getElementById('cancellation-form');
        const emailInput = document.getElementById('email');
        const fileInput = document.getElementById('document');
        const submitBtn = document.getElementById('submit-btn');
        const uploadPlaceholder = document.getElementById('upload-placeholder');
        const fileInfo = document.getElementById('file-info');
        const filenameDisplay = document.getElementById('filename');
        const dropZone = document.getElementById('drop-zone');
        
        // Error Elements
        const emailError = document.getElementById('email-error');
        const fileError = document.getElementById('file-error');
        const generalError = document.getElementById('general-error');
        const validationSummary = document.getElementById('validation-summary');

        // Helper: Validate Email
        const isValidEmail = (email) => {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        };

        // File Input Handling
        fileInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            handleFileSelection(file);
        });

        // Drag & Drop Visuals
        dropZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropZone.classList.add('bg-[#09090b]/80', 'border-[#14F195]/50');
        });
        
        dropZone.addEventListener('dragleave', (e) => {
            e.preventDefault();
            dropZone.classList.remove('bg-[#09090b]/80', 'border-[#14F195]/50');
        });

        dropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropZone.classList.remove('bg-[#09090b]/80', 'border-[#14F195]/50');
            
            const file = e.dataTransfer.files[0];
            if (file) {
                fileInput.files = e.dataTransfer.files; 
                handleFileSelection(file);
            }
        });

        function handleFileSelection(file) {
            if (!file) return;

            // Clear errors on new selection
            fileError.classList.add('hidden');
            validationSummary.classList.add('hidden');

            // Validate Size (10MB)
            if (file.size > 10 * 1024 * 1024) {
                fileError.textContent = "O arquivo excede o limite de 10MB.";
                fileError.classList.remove('hidden');
                fileInput.value = ''; 
                resetFileVisuals();
                return;
            }

            // Validate Extension
            const validTypes = ['image/jpeg', 'image/png', 'application/pdf'];
            if (!validTypes.includes(file.type)) {
                fileError.textContent = "Formato inválido. Use JPG, PNG ou PDF.";
                fileError.classList.remove('hidden');
                fileInput.value = ''; 
                resetFileVisuals();
                return;
            }

            // Success Visuals
            uploadPlaceholder.classList.add('hidden');
            fileInfo.classList.remove('hidden');
            fileInfo.classList.add('flex');
            filenameDisplay.textContent = file.name;
        }

        function resetFileVisuals() {
            uploadPlaceholder.classList.remove('hidden');
            fileInfo.classList.add('hidden');
            fileInfo.classList.remove('flex');
        }

        // Real-time validation clear for email
        emailInput.addEventListener('input', () => {
             emailError.classList.add('hidden');
             validationSummary.classList.add('hidden');
        });

        // Form Submission
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Reset Errors
            let hasError = false;
            emailError.classList.add('hidden');
            fileError.classList.add('hidden');
            generalError.classList.add('hidden');
            validationSummary.classList.add('hidden');
            
            // Validate Email
            if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
                emailError.classList.remove('hidden');
                hasError = true;
            }

            // Validate File
            if (!fileInput.files.length) {
                fileError.classList.remove('hidden');
                hasError = true;
            }

            if (hasError) {
                validationSummary.classList.remove('hidden');
                return;
            }

            // Set Loading State
            setLoading(true);

            // Prepare Payload
            const formData = new FormData();
            formData.append('email', emailInput.value);
            formData.append('documento', fileInput.files[0]);
            formData.append('timestamp', new Date().toISOString());

            try {
                // Simulate API call 
                await new Promise(resolve => setTimeout(resolve, 2000)); 

                // Success
                showSuccess();

            } catch (error) {
                console.error('Error:', error);
                generalError.classList.remove('hidden');
            } finally {
                setLoading(false);
            }
        });

        function setLoading(isLoading) {
            if (isLoading) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = `
                    <svg class="spinner" width="20px" height="20px" viewBox="0 0 50 50">
                        <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
                    </svg>
                    <span>Enviando...</span>
                `;
            } else {
                if (!document.getElementById('form-container').classList.contains('hidden')) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = `
                        <span>Solicitar Análise</span>
                        <iconify-icon icon="solar:arrow-right-linear" width="18" stroke-width="2"></iconify-icon>
                    `;
                }
            }
        }

        function showSuccess() {
            document.getElementById('form-container').classList.add('hidden');
            document.getElementById('success-card').classList.remove('hidden');
        }
    
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
      

<main className="flex-grow flex items-center justify-center p-4 sm:p-6 w-full">
<div className="w-full max-w-[520px] flex flex-col gap-6 pt-8 sm:pt-12" id="main-container">

<header className="text-center sm:text-left mb-2">
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-2">
                    Solicitação de Cancelamento
                </h1>
<p className="text-sm text-slate-400">
                    Preencha o formulário abaixo para iniciar o processo de análise.
                </p>
</header>

<div className="hidden animate-fade-in" id="success-card">
<div className="bg-[#0D1117] border border-white/5 rounded-2xl p-8 text-center flex flex-col items-center gap-4 shadow-[0_0_50px_-20px_rgba(20,241,149,0.1)]">
<div className="w-16 h-16 rounded-full bg-[#14F195]/10 flex items-center justify-center mb-2">
<iconify-icon className="text-[#14F195]" icon="solar:check-circle-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h2 className="text-xl font-semibold text-white tracking-tight">Solicitação Enviada</h2>
<p className="text-sm text-slate-400 leading-relaxed max-w-xs">
                        Sua solicitação foi registrada com sucesso. Nossa equipe jurídica analisará o caso e retornará em até 5 dias úteis.
                    </p>
<button className="mt-4 text-sm font-medium text-[#14F195] hover:text-[#00C896] transition-colors flex items-center gap-2" onclick="window.location.reload()">
<iconify-icon icon="solar:arrow-left-linear" width="16"></iconify-icon>
                        Voltar para a página inicial
                    </button>
</div>
</div>

<div className="flex flex-col gap-6" id="form-container">

<div className="bg-[#14F195]/5 border-l-2 border-[#14F195] rounded-r-lg p-6 relative overflow-hidden">
<div className="flex gap-4">
<div className="shrink-0 mt-0.5 text-[#14F195]">
<iconify-icon icon="solar:info-circle-linear" width="20"></iconify-icon>
</div>
<p className="text-sm text-slate-300 leading-relaxed">
                            Lamentamos que o produto não tenha atendido às suas expectativas. Informamos que o download e a utilização da planilha configuram a efetiva prestação do serviço digital, nos termos aplicáveis às contratações dessa natureza. Ainda assim, iremos analisar o seu caso de forma individualizada. Para tanto, solicitamos que preencha e envie os dados abaixo para a devida verificação.
                        </p>
</div>
</div>

<form className="bg-[#0D1117] border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col gap-6 shadow-xl shadow-black/40" id="cancellation-form">

<div className="flex flex-col gap-2">
<label className="text-xs font-medium uppercase tracking-wider text-slate-500" htmlFor="email">
                            E-mail da Compra
                        </label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500 group-focus-within:text-[#14F195] transition-colors">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<input className="w-full bg-[#09090b] text-white text-sm border border-white/10 rounded-lg py-3 pl-10 pr-4 placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-[#14F195] focus:border-[#14F195] transition-all hover:border-white/20" id="email" name="email" placeholder="seu@email.com" type="email"/>
</div>
<span className="text-xs text-red-400 hidden flex items-center gap-1 mt-1" id="email-error">
<iconify-icon icon="solar:danger-circle-linear"></iconify-icon>
                            Campo obrigatório: informe um e-mail válido.
                        </span>
</div>

<div className="flex flex-col gap-2">
<label className="text-xs font-medium uppercase tracking-wider text-slate-500 flex justify-between items-center">
<span>Documento de Identidade</span>
<span className="text-[10px] normal-case bg-white/5 px-2 py-0.5 rounded text-slate-400">JPG, PNG, PDF (Max 10MB)</span>
</label>
<p className="text-xs text-slate-400/80 mb-1 leading-relaxed">
                            Para fins de verificação de identidade, será necessário o envio de documento oficial com foto.
                        </p>
<div className="relative w-full h-32 rounded-lg border border-dashed border-white/10 bg-[#09090b] hover:bg-[#09090b]/80 hover:border-[#14F195]/50 transition-all cursor-pointer flex flex-col items-center justify-center text-center group" id="drop-zone">
<input accept=".jpg,.jpeg,.png,.pdf" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" id="document" name="document" type="file"/>

<div className="flex flex-col items-center gap-2 px-4 pointer-events-none transition-opacity duration-300" id="upload-placeholder">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform group-hover:text-[#14F195] text-slate-400">
<iconify-icon icon="solar:upload-linear" width="20"></iconify-icon>
</div>
<p className="text-sm text-slate-400">
<span className="text-[#14F195] font-medium">Clique para enviar</span> ou arraste o arquivo
                                </p>
<p className="text-xs text-slate-600">Comprovação de titularidade</p>
</div>

<div className="hidden flex-col items-center gap-2 px-4 pointer-events-none animate-pulse-once" id="file-info">
<div className="w-10 h-10 rounded-full bg-[#14F195]/10 text-[#14F195] flex items-center justify-center">
<iconify-icon icon="solar:document-text-linear" width="20"></iconify-icon>
</div>
<p className="text-sm text-white font-medium truncate max-w-[200px]" id="filename"></p>
<p className="text-xs text-[#14F195]">Arquivo anexado</p>
</div>
</div>
<span className="text-xs text-red-400 hidden flex items-center gap-1 mt-1" id="file-error">
<iconify-icon icon="solar:danger-circle-linear"></iconify-icon>
                            Campo obrigatório: anexe um documento válido.
                        </span>
</div>

<div className="hidden bg-red-500/5 border border-red-500/20 rounded-lg p-3 flex items-center gap-3" id="validation-summary">
<iconify-icon className="text-red-400 shrink-0" icon="solar:danger-triangle-linear"></iconify-icon>
<p className="text-xs text-red-300">
                            Por favor, preencha todos os campos obrigatórios antes de continuar.
                        </p>
</div>

<button className="w-full bg-[#14F195] hover:bg-[#00C896] text-[#050505] font-semibold text-sm py-3.5 rounded-lg transition-all shadow-[0_0_20px_-5px_rgba(20,241,149,0.3)] hover:shadow-[0_0_25px_-5px_rgba(20,241,149,0.5)] flex items-center justify-center gap-2 mt-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:shadow-none transform active:scale-[0.98]" id="submit-btn" type="submit">
<span>Solicitar Análise</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="2" width="18"></iconify-icon>
</button>
<p className="text-center text-xs text-red-400 hidden" id="general-error">
                        Não foi possível enviar sua solicitação. Tente novamente.
                    </p>
</form>
</div>

<footer className="text-center pb-8 pt-4">
<p className="text-xs text-slate-600">
                    © 2024. Todos os direitos reservados.
                    <br/>Protegido por criptografia SSL de 256 bits.
                </p>
</footer>
</div>
</main>


    </>
  );
}
