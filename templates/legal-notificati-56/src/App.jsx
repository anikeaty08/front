import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
        
        const spinnerSvg = `<svg class="animate-spin w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>`;

        let resendInterval;
        let isAudioPlaying = false;
        let speechUtterance = null;

        document.querySelectorAll('details[name="faq-sheet"]').forEach((detail) => {
            detail.addEventListener('toggle', (e) => {
                if (detail.open) {
                    document.querySelectorAll('details[name="faq-sheet"]').forEach((otherDetail) => {
                        if (otherDetail !== detail && otherDetail.open) {
                            otherDetail.removeAttribute('open');
                        }
                    });
                }
            });
        });

        function filterNotifications(status, chipElement) {
            document.querySelectorAll('.filter-chip').forEach(c => {
                c.classList.remove('bg-zinc-900', 'text-white');
                c.classList.add('bg-zinc-100', 'text-zinc-600');
            });
            
            chipElement.classList.remove('bg-zinc-100', 'text-zinc-600');
            chipElement.classList.add('bg-zinc-900', 'text-white');

            let visibleCount = 0;
            document.querySelectorAll('.notification-card').forEach(card => {
                if(status === 'todos' || card.dataset.status === status) {
                    card.style.display = 'block';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });

            const emptyState = document.getElementById('empty-state');
            const emptyText = document.getElementById('empty-state-text');
            
            if(emptyState && emptyText) {
                if (visibleCount === 0) {
                    emptyState.classList.remove('hidden');
                    emptyState.classList.add('flex');
                    
                    let statusName = status;
                    if(status === 'enviado') statusName = 'enviada';
                    if(status === 'resolvido') statusName = 'resolvida';
                    
                    if (status === 'todos') {
                        emptyText.innerText = "Você não tem nenhuma notificação por hora. Pode ficar tranquilo.";
                    } else {
                        emptyText.innerText = `Você não tem nenhuma notificação ${statusName} por hora. Pode ficar tranquilo.`;
                    }
                } else {
                    emptyState.classList.add('hidden');
                    emptyState.classList.remove('flex');
                }
            }
        }

        function navTo(viewId) {
            if (window.speechSynthesis) {
                window.speechSynthesis.cancel();
                isAudioPlaying = false;
                speechUtterance = null;
                document.querySelectorAll('.audio-icon-container').forEach(container => {
                    const btn = container.closest('button');
                    if (btn) {
                        const text = btn.querySelector('.audio-btn-text');
                        resetAudioButton(btn, container, text);
                    }
                });
            }

            document.querySelectorAll('.view-section').forEach(el => {
                el.classList.remove('flex');
                el.classList.add('hidden');
            });
            const targetView = document.getElementById(viewId);
            targetView.classList.remove('hidden');
            targetView.classList.add('flex');
            
            const userMenu = document.getElementById('header-user-menu');
            const mainHeader = document.getElementById('main-header');
            
            const isAppView = ['view-dashboard', 'view-dashboard-loading', 'view-notification-detail', 'view-response', 'view-response-success'].includes(viewId);
            
            if(['view-dashboard', 'view-dashboard-loading', 'view-response-success'].includes(viewId)) {
                mainHeader.classList.remove('hidden');
                mainHeader.classList.add('flex');
            } else {
                mainHeader.classList.add('hidden');
                mainHeader.classList.remove('flex');
            }

            if(isAppView) {
                if(userMenu) userMenu.classList.remove('hidden');
                if(userMenu) userMenu.classList.add('flex');
            } else {
                if(userMenu) userMenu.classList.add('hidden');
                if(userMenu) userMenu.classList.remove('flex');
            }

            if(viewId === 'view-activation') resetActivation();
            if(viewId === 'view-verification') {
                resetVerification();
                startResendTimer();
            }
            if(viewId === 'view-response') {
                document.getElementById('ai-feedback-container').classList.add('hidden');
            }
            
            window.scrollTo(0,0);
        }

        function navToDashboardFromSuccess() {
            navTo('view-dashboard-loading');
            
            setTimeout(() => {
                const pendingItem = document.querySelector('.notification-card[data-id="notif-1"]');
                if (pendingItem) {
                    pendingItem.dataset.status = 'enviado';
                    
                    const tag = pendingItem.querySelector('.status-tag');
                    if(tag) {
                        tag.className = 'status-tag inline-flex items-center gap-1.5 bg-zinc-100 text-zinc-600 text-sm font-medium px-2.5 py-1 rounded-md';
                        tag.innerHTML = `<iconify-icon icon="solar:check-circle-linear" class="text-base"></iconify-icon> Resposta enviada`;
                    }
                    
                    const redLine = pendingItem.querySelector('.status-indicator');
                    if (redLine) redLine.remove();
                }

                // Reset filter to 'todos'
                const firstChip = document.querySelector('.filter-chip');
                if(firstChip) filterNotifications('todos', firstChip);

                navTo('view-dashboard');
            }, 1500);
        }

        const docInput = document.getElementById('doc-input');
        const emailInput = document.getElementById('email-input');
        const btnActivation = document.getElementById('btn-activation');

        if(docInput) docInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length <= 11) {
                value = value.replace(/(\d{3})(\d)/, '$1.$2');
                value = value.replace(/(\d{3})(\d)/, '$1.$2');
                value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
            } else {
                value = value.replace(/^(\d{2})(\d)/, '$1.$2');
                value = value.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
                value = value.replace(/\.(\d{3})(\d)/, '.$1/$2');
                value = value.replace(/(\d{4})(\d)/, '$1-$2');
            }
            e.target.value = value.slice(0, 18);
            validateActivationForm();
        });

        if(emailInput) emailInput.addEventListener('input', validateActivationForm);

        function validateActivationForm() {
            const docValid = docInput.value.replace(/\D/g, '').length >= 11;
            const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);

            if (docValid && emailValid) {
                btnActivation.classList.remove('opacity-50', 'cursor-not-allowed', 'pointer-events-none');
            } else {
                btnActivation.classList.add('opacity-50', 'cursor-not-allowed', 'pointer-events-none');
            }
        }

        function handleActivation() {
            const errText = document.getElementById('doc-error');
            docInput.classList.remove('ring-red-300', 'text-red-900', 'focus:ring-red-500');
            errText.classList.add('hidden');

            if (docInput.value === '000.000.000-00') {
                docInput.classList.add('ring-red-300', 'text-red-900', 'focus:ring-red-500');
                errText.classList.remove('hidden');
                return;
            }

            const originalText = btnActivation.innerHTML;
            btnActivation.innerHTML = `${spinnerSvg} Enviando...`;
            btnActivation.classList.add('opacity-90', 'pointer-events-none');
            btnActivation.classList.remove('flex-row-reverse');
            
            if(emailInput.value) {
                const emailParts = emailInput.value.split('@');
                if(emailParts.length === 2) {
                    const name = emailParts[0];
                    const maskedName = name.length > 2 ? name.substring(0, 2) + '***' : name + '***';
                    document.getElementById('display-email').innerText = `${maskedName}@${emailParts[1]}`;
                } else {
                    document.getElementById('display-email').innerText = emailInput.value;
                }
            }

            setTimeout(() => {
                btnActivation.innerHTML = originalText;
                btnActivation.classList.remove('opacity-90', 'pointer-events-none');
                btnActivation.classList.add('flex-row-reverse');
                navTo('view-verification');
                setTimeout(() => document.querySelector('.otp-input').focus(), 100);
            }, 800);
        }

        function resetActivation() {
            if(docInput) {
                docInput.classList.remove('ring-red-300', 'text-red-900', 'focus:ring-red-500');
                document.getElementById('doc-error').classList.add('hidden');
                validateActivationForm();
            }
        }

        const otpInputs = document.querySelectorAll('.otp-input');
        const btnVerify = document.getElementById('btn-verify');

        otpInputs.forEach((input, index) => {
            input.addEventListener('input', (e) => {
                input.value = input.value.replace(/[^0-9]/g, '').slice(0, 1);
                if (input.value && index < otpInputs.length - 1) {
                    otpInputs[index + 1].disabled = false;
                    otpInputs[index + 1].focus();
                }
                checkOtpComplete();
            });
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Backspace' && !input.value && index > 0) {
                    otpInputs[index - 1].focus();
                    otpInputs[index - 1].value = '';
                    checkOtpComplete();
                }
            });
        });

        function checkOtpComplete() {
            const isComplete = Array.from(otpInputs).every(input => input.value.length === 1);
            if (isComplete) {
                btnVerify.classList.remove('opacity-50', 'cursor-not-allowed', 'pointer-events-none');
            } else {
                btnVerify.classList.add('opacity-50', 'cursor-not-allowed', 'pointer-events-none');
                resetOtpError();
            }
        }

        function handleVerify() {
            const otpValue = Array.from(otpInputs).map(i => i.value).join('');
            const errContainer = document.getElementById('otp-error');
            const errMsg = document.getElementById('otp-error-msg');
            
            resetOtpError();

            if (otpValue === '000000') {
                otpInputs.forEach(input => input.classList.add('ring-red-300', 'text-red-900', 'focus:ring-red-500'));
                errMsg.innerText = "Código incorreto. Tente novamente.";
                errContainer.classList.remove('hidden');
                if (navigator.vibrate) navigator.vibrate(200);
                setTimeout(() => {
                    otpInputs.forEach(i => i.value = '');
                    otpInputs[0].focus();
                    checkOtpComplete();
                }, 1500);
                return;
            }

            const originalText = btnVerify.innerHTML;
            btnVerify.innerHTML = `${spinnerSvg} Verificando...`;
            btnVerify.classList.add('opacity-90', 'pointer-events-none');
            btnVerify.classList.remove('flex-row-reverse');

            setTimeout(() => {
                btnVerify.innerHTML = originalText;
                btnVerify.classList.remove('opacity-90', 'pointer-events-none');
                btnVerify.classList.add('flex-row-reverse');
                navTo('view-success');
                
                setTimeout(() => {
                    if(document.getElementById('view-success').classList.contains('flex')) {
                        navTo('view-notification-detail');
                    }
                }, 2000);

            }, 1000);
        }

        function resetOtpError() {
            document.getElementById('otp-error').classList.add('hidden');
            otpInputs.forEach(input => input.classList.remove('ring-red-300', 'text-red-900', 'focus:ring-red-500'));
        }

        function resetVerification() {
            otpInputs.forEach((i, idx) => {
                i.value = '';
                if(idx > 0) i.disabled = true;
            });
            resetOtpError();
            checkOtpComplete();
        }

        function startResendTimer() {
            clearInterval(resendInterval);
            const btn = document.getElementById('resend-btn');
            const textSpan = document.getElementById('resend-text');
            
            btn.classList.add('text-zinc-400', 'pointer-events-none');
            btn.classList.remove('text-zinc-900', 'hover:text-zinc-600');
            
            let timeLeft = 30;
            textSpan.innerText = `Reenviar código em 00:${timeLeft.toString().padStart(2, '0')}`;
            
            resendInterval = setInterval(() => {
                timeLeft--;
                if(timeLeft <= 0) {
                    clearInterval(resendInterval);
                    textSpan.innerText = "Reenviar código";
                    btn.classList.remove('text-zinc-400', 'pointer-events-none');
                    btn.classList.add('text-zinc-900', 'hover:text-zinc-600');
                } else {
                    textSpan.innerText = `Reenviar código em 00:${timeLeft.toString().padStart(2, '0')}`;
                }
            }, 1000);
        }

        function handleResend() {
            resetOtpError();
            startResendTimer();
        }

        function fillResponse(text) {
            const textarea = document.getElementById('response-msg');
            textarea.value = text;
            textarea.focus();
            textarea.dispatchEvent(new Event('input'));
        }

        function handleFileUpload(input) {
            if(!input.files || input.files.length === 0) return;
            const file = input.files[0];
            const list = document.getElementById('uploaded-files-list');
            
            const item = document.createElement('div');
            item.className = 'flex items-center justify-between p-3.5 bg-white border border-zinc-200 rounded-xl shadow-sm group hover:border-zinc-300 transition-colors';
            item.innerHTML = `
                <div class="flex items-center gap-3 overflow-hidden">
                    <div class="w-10 h-10 shrink-0 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100/50">
                        <iconify-icon icon="solar:document-check-linear" class="text-xl"></iconify-icon>
                    </div>
                    <div class="min-w-0">
                        <p class="text-sm font-medium text-zinc-900 truncate">${file.name}</p>
                        <p class="text-xs text-zinc-500 font-medium mt-0.5">${Math.max(1, (file.size / 1024).toFixed(0))} KB</p>
                    </div>
                </div>
                <button onclick="this.parentElement.remove()" class="p-2 text-zinc-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors outline-none cursor-pointer relative z-10" title="Remover anexo">
                    <iconify-icon icon="solar:trash-bin-trash-linear" class="text-xl"></iconify-icon>
                </button>
            `;
            list.appendChild(item);
            input.value = ''; 
        }

        const responseMsgInput = document.getElementById('response-msg');
        const btnSendResponse = document.getElementById('btn-send-response');
        const aiContainer = document.getElementById('ai-feedback-container');
        const aiText = document.getElementById('ai-feedback-text');
        const aiApply = document.getElementById('ai-feedback-apply');

        responseMsgInput.addEventListener('input', (e) => {
            aiContainer.classList.add('hidden');
            if (e.target.value.trim().length > 0) {
                btnSendResponse.classList.remove('opacity-50', 'cursor-not-allowed');
                btnSendResponse.classList.add('hover:bg-black', 'hover:-translate-y-0.5', 'hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)]');
            } else {
                btnSendResponse.classList.add('opacity-50', 'cursor-not-allowed');
                btnSendResponse.classList.remove('hover:bg-black', 'hover:-translate-y-0.5', 'hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)]');
            }
        });

        function analyzeText(text) {
            const lower = text.toLowerCase().trim();
            if (lower.length < 4 || /^(k+|h+a+h+a+|a+s+d+f+|kkk|rsrs)/.test(lower) || lower === 'nada a ver' || lower === 'teste') {
                return { valid: false, reason: "Essa notificação tem validade jurídica. Por favor, forneça uma resposta séria e contextualizada." };
            }
            if (lower.includes('não sei') || lower.includes('q isso') || lower.includes('desconheço') || lower.includes('o que é isso')) {
                return { 
                    valid: false, 
                    reason: "Parece que você tem dúvidas sobre essa cobrança. Que tal responder de forma mais clara e objetiva para que analisem o seu caso?",
                    suggestion: "Prezados, desconheço a origem desta cobrança. Solicito maiores esclarecimentos e o envio de documentos ou demonstrativos que comprovem este débito, para que eu possa analisar."
                };
            }
            return { valid: true };
        }

        function handleSendResponse() {
            if(btnSendResponse.classList.contains('opacity-50')) return;

            const val = responseMsgInput.value;
            const analysis = analyzeText(val);

            if (!analysis.valid) {
                aiText.innerText = analysis.reason;
                if (analysis.suggestion) {
                    aiApply.classList.remove('hidden');
                    aiApply.onclick = () => {
                        fillResponse(analysis.suggestion);
                        aiContainer.classList.add('hidden');
                    };
                } else {
                    aiApply.classList.add('hidden');
                }
                aiContainer.classList.remove('hidden');
                return;
            }

            aiContainer.classList.add('hidden');

            const btnText = document.getElementById('btn-send-text');
            const btnIcon = document.getElementById('btn-send-icon');
            
            btnSendResponse.classList.remove('flex-row-reverse');
            btnIcon.style.display = 'none';
            btnText.innerHTML = `<span class="flex items-center justify-center gap-2"><iconify-icon icon="solar:stars-linear" class="text-xl animate-pulse text-indigo-400"></iconify-icon> Analisando resposta...</span>`;
            
            btnSendResponse.classList.add('pointer-events-none', 'bg-zinc-800');
            btnSendResponse.classList.remove('bg-zinc-900', 'hover:bg-black', 'hover:-translate-y-0.5', 'hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)]');

            setTimeout(() => {
                btnSendResponse.classList.remove('bg-zinc-800');
                btnSendResponse.classList.add('bg-emerald-600');
                btnText.innerHTML = `<span class="flex items-center justify-center gap-2"><iconify-icon icon="solar:check-circle-linear" class="text-xl text-white"></iconify-icon> Resposta bem fundamentada</span>`;
                
                setTimeout(() => {
                    btnSendResponse.classList.remove('bg-emerald-600');
                    btnSendResponse.classList.add('bg-zinc-900');
                    btnText.innerHTML = `${spinnerSvg} Registrando protocolo...`;
                    
                    setTimeout(() => {
                        btnText.innerHTML = `Enviar resposta oficial`;
                        btnIcon.style.display = 'block';
                        btnSendResponse.classList.add('flex-row-reverse');
                        btnSendResponse.classList.remove('pointer-events-none');
                        btnSendResponse.classList.add('bg-zinc-900', 'hover:bg-black', 'hover:-translate-y-0.5', 'hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)]');
                        
                        document.getElementById('response-msg').value = '';
                        document.getElementById('response-msg').dispatchEvent(new Event('input'));
                        document.getElementById('uploaded-files-list').innerHTML = '';
                        navTo('view-response-success');
                    }, 1500);
                }, 1500);
            }, 2000);
        }
        
        function getFemalePtBrVoice() {
            const voices = window.speechSynthesis.getVoices();
            return voices.find(v => v.lang === 'pt-BR' && (v.name.toLowerCase().includes('female') || v.name.toLowerCase().includes('luciana') || v.name.toLowerCase().includes('google português do brasil'))) 
                || voices.find(v => v.lang.startsWith('pt'));
        }

        if (window.speechSynthesis) {
            window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
        }

        function toggleAudio(btnEl) {
            const container = btnEl.querySelector('.audio-icon-container');
            const text = btnEl.querySelector('.audio-btn-text');

            if (!window.speechSynthesis) {
                alert("Seu navegador não suporta a função de áudio.");
                return;
            }

            if (!speechUtterance) {
                const textToRead = "Olá, Regyane. Você recebeu uma notificação extrajudicial da Telecom Brasil referente a uma fatura em aberto de serviços de telecomunicação. O valor pendente é de um mil, duzentos e quarenta e sete reais e cinquenta centavos, com vencimento para o dia 26 de março de 2026. A mensagem anexa solicita a regularização o quanto antes para evitar a aplicação de juros, multas ou possíveis medidas judiciais. Eles informam que existem diversas opções de pagamento e negociação disponíveis. Eu recomendo que você leia com atenção os documentos anexados abaixo para entender todos os detalhes desta pendência e poder decidir como responder.";
                
                speechUtterance = new SpeechSynthesisUtterance(textToRead);
                speechUtterance.lang = 'pt-BR';
                speechUtterance.rate = 1.05;
                speechUtterance.pitch = 1.1;

                const femaleVoice = getFemalePtBrVoice();
                if(femaleVoice) {
                    speechUtterance.voice = femaleVoice;
                }

                speechUtterance.onend = function() {
                    isAudioPlaying = false;
                    resetAudioButton(btnEl, container, text);
                    speechUtterance = null;
                };

                speechUtterance.onpause = function() {
                    isAudioPlaying = false;
                    resetAudioButton(btnEl, container, text);
                    text.innerText = "Continuar resumo";
                };

                speechUtterance.onresume = function() {
                    isAudioPlaying = true;
                    setAudioPlayingState(container, text);
                };
            }

            if (isAudioPlaying) {
                window.speechSynthesis.pause();
            } else {
                if (window.speechSynthesis.paused) {
                    window.speechSynthesis.resume();
                } else {
                    window.speechSynthesis.cancel();
                    window.speechSynthesis.speak(speechUtterance);
                    isAudioPlaying = true;
                    setAudioPlayingState(container, text);
                }
            }
        }

        function resetAudioButton(btnEl, container, text) {
            container.innerHTML = `<iconify-icon icon="solar:play-circle-linear" class="text-xl text-zinc-400"></iconify-icon>`;
            text.innerText = "Ouvir resumo";
        }

        function setAudioPlayingState(container, text) {
            container.innerHTML = `
                <div class="playing-bars">
                    <span></span><span></span><span></span><span></span>
                </div>
            `;
            text.innerText = "Pausar resumo";
        }

        function openBottomSheet() {
            const overlay = document.getElementById('faq-bottom-sheet');
            const sheet = document.getElementById('faq-sheet-content');
            overlay.classList.remove('pointer-events-none');
            overlay.classList.remove('opacity-0');
            sheet.classList.remove('translate-y-full');
        }

        function closeBottomSheet() {
            const overlay = document.getElementById('faq-bottom-sheet');
            const sheet = document.getElementById('faq-sheet-content');
            sheet.classList.add('translate-y-full');
            overlay.classList.add('opacity-0');
            setTimeout(() => {
                overlay.classList.add('pointer-events-none');
            }, 300);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="lg:w-[45%] flex flex-col min-h-screen z-10 bg-white w-full relative">

<header className="hidden lg:px-12 lg:pt-12 transition-opacity w-full max-w-2xl mr-auto ml-auto pt-8 pr-6 pl-6 items-center justify-between" id="main-header">
<div className="flex items-center gap-2 cursor-pointer group" onclick="navTo('view-dashboard')">
<div className="flex items-center -space-x-2 transition-transform duration-300 group-hover:scale-105">
<svg className="text-zinc-900" fill="none" height="28" viewbox="0 0 24 24" width="28">
<path d="M12 2L22 20H2L12 2Z" fill="currentColor"></path>
</svg>
<svg className="text-zinc-400 opacity-90 mix-blend-multiply" fill="none" height="28" viewbox="0 0 24 24" width="28">
<path d="M12 2L22 20H2L12 2Z" fill="currentColor"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="text-2xl font-normal tracking-tight text-zinc-900 leading-none">arbitralis</span>
<span className="text-xs tracking-widest text-zinc-400 font-medium mt-0.5 uppercase">Câmara</span>
</div>
</div>
<div className="hidden items-center gap-3" id="header-user-menu">
<button className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-sm">
<i className="w-5 h-5" data-lucide="user" strokeWidth="1.5"></i>
</button>
</div>
</header>
<main className="flex-1 flex flex-col lg:px-12 lg:py-12 w-full max-w-lg mr-auto ml-auto pt-8 pr-6 pb-8 pl-6">

<section className="view-section flex flex-col fade-in flex-1 w-full" id="view-context">
<div className="flex items-center justify-between mb-8 mt-2">
<div className="flex items-center gap-2">
<div className="flex items-center -space-x-1.5">
<svg className="text-zinc-900" fill="none" height="24" viewbox="0 0 24 24" width="24">
<path d="M12 2L22 20H2L12 2Z" fill="currentColor"></path>
</svg>
<svg className="text-zinc-400 opacity-90 mix-blend-multiply" fill="none" height="24" viewbox="0 0 24 24" width="24">
<path d="M12 2L22 20H2L12 2Z" fill="currentColor"></path>
</svg>
</div>
<span className="text-lg font-normal tracking-tight text-zinc-900 leading-none mt-0.5">arbitralis</span>
</div>
<div className="flex gap-1.5 shrink-0 w-16 items-center">
<div className="h-1 flex-1 bg-blue-600 rounded-full"></div>
<div className="h-1 flex-1 bg-zinc-200 rounded-full"></div>
<div className="h-1 flex-1 bg-zinc-200 rounded-full"></div>
</div>
</div>
<div className="mt-2 mb-8">
<h1 className="text-3xl font-normal text-zinc-900 tracking-tight mb-3">Você recebeu uma notificação extrajudicial</h1>
<p className="leading-relaxed text-lg text-zinc-500">Para ver os detalhes com segurança, confirme sua identidade.</p>
</div>
<div className="mb-8 space-y-5">
<div className="flex bg-zinc-50 border-zinc-100 border rounded-2xl p-5 gap-4 items-start">
<i className="w-7 h-7 shrink-0 text-blue-600 mt-0.5" data-lucide="file-text" strokeWidth="1.5"></i>
<div className="">
<h3 className="text-lg font-medium text-zinc-900 tracking-tight mb-2">O que é notificação extrajudicial?</h3>
<p className="leading-relaxed text-base text-zinc-600">É uma comunicação formal usada para informar uma pendência financeira ou jurídica. Você tem prazo e direito de resposta.</p>
</div>
</div>
<div className="flex gap-4 bg-zinc-50 border-zinc-100 border rounded-2xl pt-5 pr-5 pb-5 pl-5 gap-x-4 gap-y-4 items-start">
<i className="w-7 h-7 shrink-0 text-blue-600 mt-0.5" data-lucide="shield-check" strokeWidth="1.5"></i>
<div className="">
<h3 className="text-lg font-medium text-zinc-900 tracking-tight mb-2">Qual é o papel da Arbitralis?</h3>
<p className="leading-relaxed text-base text-zinc-600">É a plataforma usada para registrar e acompanhar essa comunicação com segurança e validade jurídica.</p>
</div>
</div>
</div>
<div className="flex flex-col mt-auto pt-0 gap-x-y-3 gap-y-3">
<button className="hover:bg-black transition-all outline-none flex group gap-2 text-base font-medium text-white bg-zinc-900 w-full rounded-xl pt-4 pb-4 gap-x-2 gap-y-2 items-center justify-center flex-row-reverse" onclick="navTo('view-activation')">
<iconify-icon className="text-xl transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
                        Verificar minha identidade
                    </button>
<a className="hover:text-zinc-900 transition-colors outline-none flex items-center justify-center gap-2 text-base font-medium text-zinc-600 w-full pt-4 pb-4 flex-row-reverse" href="#">
<iconify-icon className="text-lg" icon="solar:arrow-right-up-linear"></iconify-icon>
                        Conheça a Arbitralis 
                    </a>
</div>
</section>

<section className="view-section hidden flex-col w-full fade-in flex-1" id="view-activation">
<div className="flex items-center justify-between mb-8 mt-2">
<div className="flex items-center gap-2">
<div className="flex items-center -space-x-1.5">
<svg className="text-zinc-900" fill="none" height="24" viewbox="0 0 24 24" width="24">
<path d="M12 2L22 20H2L12 2Z" fill="currentColor"></path>
</svg>
<svg className="text-zinc-400 opacity-90 mix-blend-multiply" fill="none" height="24" viewbox="0 0 24 24" width="24">
<path d="M12 2L22 20H2L12 2Z" fill="currentColor"></path>
</svg>
</div>
<span className="text-lg font-normal tracking-tight text-zinc-900 leading-none mt-0.5">arbitralis</span>
</div>
<div className="flex items-center gap-1.5 w-16 shrink-0">
<div className="h-1 flex-1 bg-blue-600 rounded-full"></div>
<div className="h-1 flex-1 bg-blue-600 rounded-full"></div>
<div className="h-1 flex-1 bg-zinc-200 rounded-full"></div>
</div>
</div>
<div className="flex flex-col flex-1 pb-2 w-full max-w-[360px] mx-auto pt-4">
<div className="inline-flex items-center gap-1.5 self-start bg-white border border-zinc-200 text-zinc-600 text-sm font-medium px-4 py-2 rounded-full mb-8 shadow-sm">
<iconify-icon className="text-zinc-500 text-base" icon="solar:lock-linear"></iconify-icon>
                        Verificação segura
                    </div>
<div className="mb-8">
<h2 className="text-3xl font-normal tracking-tight text-zinc-900 mb-4">Confirmar acesso</h2>
<p className="text-xl text-zinc-500 leading-relaxed">
                            Para acessar esta notificação com segurança, informe seu CPF ou CNPJ e um e-mail para receber o código de 6 dígitos.
                        </p>
</div>
<div className="space-y-6 text-left">
<div className="relative">
<label className="block text-base font-medium text-zinc-900 mb-2" htmlFor="doc-input">CPF ou CNPJ</label>
<input className="block w-full rounded-xl border-0 py-3.5 px-4 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-200 placeholder:text-zinc-400 hover:bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-inset focus:ring-zinc-900 transition-all text-base outline-none" id="doc-input" placeholder="000.000.000-00" type="text"/>
<p className="hidden absolute -bottom-6 left-0 text-sm text-red-600 flex items-center gap-1 font-medium" id="doc-error">
<iconify-icon className="text-base" icon="solar:danger-circle-linear"></iconify-icon>
                                Documento não encontrado.
                            </p>
</div>
<div className="relative">
<label className="block text-base font-medium text-zinc-900 mb-2" htmlFor="email-input">E-mail</label>
<input className="block w-full rounded-xl border-0 py-3.5 px-4 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-200 placeholder:text-zinc-400 hover:bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-inset focus:ring-zinc-900 transition-all text-base outline-none" id="email-input" placeholder="exemplo@email.com" type="email"/>
<div className="flex items-start gap-2 mt-3">
<iconify-icon className="shrink-0 mt-0.5 text-zinc-400 text-base" icon="solar:info-circle-linear"></iconify-icon>
<p className="text-base text-zinc-500 leading-relaxed">
                                    Você receberá o código de acesso neste e-mail.
                                </p>
</div>
</div>
</div>
<div className="mt-auto pt-8 mb-2">
<button className="w-full bg-zinc-900 text-white rounded-xl py-4 text-base font-medium hover:bg-black transition-all outline-none flex items-center justify-center gap-2 shadow-sm opacity-50 cursor-not-allowed pointer-events-none flex-row-reverse" id="btn-activation" onclick="handleActivation()">
<iconify-icon className="text-xl opacity-70" icon="solar:arrow-right-linear"></iconify-icon>
                            Enviar código
                        </button>
</div>
</div>
</section>

<section className="view-section hidden flex-col w-full fade-in flex-1" id="view-verification">
<div className="flex items-center justify-between mb-8 mt-2">
<div className="flex items-center gap-2">
<div className="flex items-center -space-x-1.5">
<svg className="text-zinc-900" fill="none" height="24" viewbox="0 0 24 24" width="24">
<path d="M12 2L22 20H2L12 2Z" fill="currentColor"></path>
</svg>
<svg className="text-zinc-400 opacity-90 mix-blend-multiply" fill="none" height="24" viewbox="0 0 24 24" width="24">
<path d="M12 2L22 20H2L12 2Z" fill="currentColor"></path>
</svg>
</div>
<span className="text-lg font-normal tracking-tight text-zinc-900 leading-none mt-0.5">arbitralis</span>
</div>
<div className="flex items-center gap-1.5 w-16 shrink-0">
<div className="h-1 flex-1 bg-blue-600 rounded-full"></div>
<div className="h-1 flex-1 bg-blue-600 rounded-full"></div>
<div className="h-1 flex-1 bg-blue-600 rounded-full"></div>
</div>
</div>
<div className="flex flex-col flex-1 pb-2 w-full max-w-[360px] mx-auto pt-2">
<div className="inline-flex items-center gap-1.5 self-start bg-white border border-zinc-200 text-zinc-700 text-sm font-medium px-4 py-2 rounded-full mb-6 shadow-sm">
<iconify-icon className="text-zinc-500 text-base" icon="solar:letter-linear"></iconify-icon>
                        Confirmação de e-mail
                    </div>
<div className="mb-6">
<h2 className="text-3xl font-normal tracking-tight text-zinc-900 mb-3">Verifique seu e-mail</h2>
<p className="text-xl text-zinc-500 leading-relaxed">
                            Enviamos um código de 6 dígitos para <br/><span className="font-medium text-zinc-900" id="display-email">se***@email.com</span>.
                        </p>
</div>
<div className="mb-2">
<label className="block text-base font-medium text-zinc-900 mb-4">Digite o código para continuar</label>
<div className="flex justify-between gap-2.5" id="otp-container">
<input autocomplete="one-time-code" className="w-full aspect-[4/5] text-center text-2xl font-medium rounded-xl ring-1 ring-inset ring-zinc-200 focus:ring-2 focus:ring-zinc-900 outline-none transition-all focus:bg-white shadow-sm otp-input" inputmode="numeric" maxlength="1" pattern="[0-9]*" type="number"/>
<input className="w-full aspect-[4/5] text-center text-2xl font-medium rounded-xl ring-1 ring-inset ring-zinc-200 focus:ring-2 focus:ring-zinc-900 outline-none transition-all focus:bg-white shadow-sm otp-input" disabled="" inputmode="numeric" maxlength="1" pattern="[0-9]*" type="number"/>
<input className="w-full aspect-[4/5] text-center text-2xl font-medium rounded-xl ring-1 ring-inset ring-zinc-200 focus:ring-2 focus:ring-zinc-900 outline-none transition-all focus:bg-white shadow-sm otp-input" disabled="" inputmode="numeric" maxlength="1" pattern="[0-9]*" type="number"/>
<input className="w-full aspect-[4/5] text-center text-2xl font-medium rounded-xl ring-1 ring-inset ring-zinc-200 focus:ring-2 focus:ring-zinc-900 outline-none transition-all focus:bg-white shadow-sm otp-input" disabled="" inputmode="numeric" maxlength="1" pattern="[0-9]*" type="number"/>
<input className="w-full aspect-[4/5] text-center text-2xl font-medium rounded-xl ring-1 ring-inset ring-zinc-200 focus:ring-2 focus:ring-zinc-900 outline-none transition-all focus:bg-white shadow-sm otp-input" disabled="" inputmode="numeric" maxlength="1" pattern="[0-9]*" type="number"/>
<input className="w-full aspect-[4/5] text-center text-2xl font-medium rounded-xl ring-1 ring-inset ring-zinc-200 focus:ring-2 focus:ring-zinc-900 outline-none transition-all focus:bg-white shadow-sm otp-input" disabled="" inputmode="numeric" maxlength="1" pattern="[0-9]*" type="number"/>
</div>
</div>
<div className="h-6 mt-1">
<p className="hidden text-sm font-medium text-red-600 flex items-center gap-1.5 justify-center" id="otp-error">
<iconify-icon className="text-base" icon="solar:danger-circle-linear"></iconify-icon>
<span id="otp-error-msg">Código inválido ou incorreto.</span>
</p>
</div>
<div className="mt-4 text-center">
<div className="flex flex-col gap-4 items-center">
<button className="text-base font-medium text-zinc-400 pointer-events-none transition-colors flex items-center gap-1.5" id="resend-btn" onclick="handleResend()">
<iconify-icon className="text-base" icon="solar:clock-circle-linear"></iconify-icon>
<span id="resend-text">Reenviar código em 00:30</span>
</button>
</div>
</div>
<div className="flex flex-col mt-auto pt-8 mb-2 gap-y-3">
<button className="w-full bg-zinc-900 text-white rounded-xl py-4 text-base font-medium hover:bg-black transition-all outline-none flex items-center justify-center gap-2 opacity-50 cursor-not-allowed pointer-events-none shadow-sm flex-row-reverse" id="btn-verify" onclick="handleVerify()">
<iconify-icon className="text-xl opacity-70" icon="solar:arrow-right-linear"></iconify-icon>
                            Verificar código
                        </button>
<button className="hover:text-zinc-900 transition-colors outline-none flex items-center justify-center gap-2 text-base font-medium text-zinc-600 w-full py-4 flex-row-reverse" onclick="navTo('view-activation')">
<iconify-icon className="text-base" icon="solar:pen-linear"></iconify-icon>
                            Corrigir e-mail
                        </button>
</div>
</div>
</section>

<section className="view-section hidden flex-col w-full fade-in flex-1 items-center justify-center relative overflow-hidden" id="view-success">
<div className="w-full max-w-[400px] mx-auto flex flex-col items-center relative z-20 -mt-12">
<div className="relative mb-8">
<div className="absolute inset-0 bg-emerald-500/10 blur-2xl rounded-full scale-[2.5]"></div>
<div className="w-24 h-24 bg-white border border-zinc-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-[2rem] flex items-center justify-center relative z-10 ring-1 ring-zinc-900/5">
<div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center border border-emerald-100/50">
<iconify-icon className="text-3xl text-emerald-600" icon="solar:check-circle-linear"></iconify-icon>
</div>
</div>
</div>
<h2 className="text-3xl font-normal tracking-tight text-zinc-900 mb-6 text-center">Identidade confirmada</h2>
<div className="flex items-center justify-center gap-3 bg-white border border-zinc-200 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] px-6 py-4 rounded-full">
<i className="w-5 h-5 text-zinc-400 animate-spin" data-lucide="loader" strokeWidth="1.5"></i>
<p className="text-base font-medium text-zinc-700 tracking-tight">
                            Carregando detalhes da notificação
                        </p>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full px-6 lg:px-12 pointer-events-none translate-y-16 lg:translate-y-24">
<div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/80 to-white z-10 h-[120%] -top-[10%]"></div>
<div className="w-full max-w-lg mx-auto">
<div className="animate-pulse flex flex-col w-full opacity-30">
<div className="flex items-center gap-3 mb-6">
<div className="h-6 w-32 bg-zinc-200 rounded"></div>
</div>
<div className="space-y-3 mb-10">
<div className="h-10 w-[85%] bg-zinc-200 rounded-lg"></div>
<div className="h-10 w-[60%] bg-zinc-200 rounded-lg"></div>
</div>
<div className="bg-zinc-50/50 rounded-2xl p-5 border border-zinc-100 flex items-center gap-5">
<div className="w-14 h-14 shrink-0 rounded-full bg-zinc-200 border border-zinc-200/50"></div>
<div className="flex-1 space-y-3">
<div className="h-4 w-1/3 bg-zinc-200 rounded"></div>
<div className="h-2 w-full bg-zinc-200 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="view-section hidden flex-col w-full fade-in flex-1" id="view-dashboard-loading">
<div className="mb-8">
<h2 className="text-3xl font-normal tracking-tight text-zinc-900 mb-3">Suas notificações</h2>
<p className="text-xl text-zinc-500">Acompanhe e responda suas pendências.</p>
</div>
<div className="flex gap-2 mb-8">
<div className="h-9 w-20 bg-zinc-200 rounded-full animate-pulse"></div>
<div className="h-9 w-24 bg-zinc-100 rounded-full animate-pulse"></div>
<div className="h-9 w-24 bg-zinc-100 rounded-full animate-pulse"></div>
</div>
<div className="flex-1 space-y-5">
<div className="bg-white border border-zinc-100 rounded-2xl p-6 relative overflow-hidden animate-pulse shadow-sm">
<div className="flex justify-between items-start mb-4">
<div className="h-6 w-32 bg-zinc-100 rounded-md"></div>
<div className="h-4 w-12 bg-zinc-50 rounded"></div>
</div>
<div className="h-6 w-3/4 bg-zinc-200 rounded mb-3"></div>
<div className="space-y-2 mb-6">
<div className="h-4 w-1/2 bg-zinc-100 rounded"></div>
<div className="h-4 w-1/3 bg-zinc-100 rounded"></div>
</div>
<div className="flex items-center justify-between border-t border-zinc-50 pt-5 mt-2">
<div className="flex flex-col gap-2">
<div className="h-3 w-20 bg-zinc-50 rounded"></div>
<div className="h-5 w-24 bg-zinc-200 rounded"></div>
</div>
<div className="h-5 w-24 bg-zinc-100 rounded"></div>
</div>
</div>
</div>
</section>

<section className="view-section hidden flex-col w-full fade-in flex-1" id="view-dashboard">
<div className="mb-6">
<h2 className="text-3xl font-normal tracking-tight text-zinc-900 mb-3">Suas notificações</h2>
<p className="text-xl text-zinc-500">Acompanhe e responda suas pendências.</p>
</div>

<div className="flex gap-2 overflow-x-auto no-scrollbar mb-6 pb-2 -mx-6 px-6 lg:mx-0 lg:px-0">
<button className="filter-chip bg-zinc-900 text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors outline-none" onclick="filterNotifications('todos', this)">Todos</button>
<button className="filter-chip bg-zinc-100 text-zinc-600 hover:bg-zinc-200 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors outline-none" onclick="filterNotifications('urgente', this)">Urgentes</button>
<button className="filter-chip bg-zinc-100 text-zinc-600 hover:bg-zinc-200 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors outline-none" onclick="filterNotifications('pendente', this)">Pendentes</button>
<button className="filter-chip bg-zinc-100 text-zinc-600 hover:bg-zinc-200 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors outline-none" onclick="filterNotifications('enviado', this)">Enviados</button>
<button className="filter-chip bg-zinc-100 text-zinc-600 hover:bg-zinc-200 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors outline-none" onclick="filterNotifications('resolvido', this)">Resolvidos</button>
</div>

<div className="flex-1 space-y-4" id="dashboard-content">

<div className="hidden flex-col items-center justify-center py-16 px-6 text-center bg-zinc-50 border border-zinc-200 border-dashed rounded-2xl fade-in" id="empty-state">
<div className="w-16 h-16 bg-white border border-zinc-200 rounded-full flex items-center justify-center mb-5 shadow-sm">
<iconify-icon className="text-3xl text-zinc-400" icon="solar:smile-circle-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-2">Tudo certo por aqui!</h3>
<p className="text-base text-zinc-500 max-w-[280px] leading-relaxed" id="empty-state-text">
                            Você não tem nenhuma notificação urgente por hora. Pode ficar tranquilo.
                        </p>
</div>

<div className="notification-card bg-white border border-zinc-200 rounded-2xl p-6 hover:border-zinc-300 transition-all duration-300 cursor-pointer group relative overflow-hidden shadow-sm hover:shadow-md" data-id="notif-1" data-status="urgente" onclick="navTo('view-notification-detail')">
<div className="absolute top-0 left-0 w-1 h-full bg-red-500 rounded-l-2xl status-indicator"></div>
<div className="flex justify-between items-start mb-4 pl-3">
<span className="status-tag inline-flex items-center gap-1.5 bg-red-50 text-red-600 text-sm font-medium px-2.5 py-1 rounded-md">
<iconify-icon className="text-base" icon="solar:danger-circle-linear"></iconify-icon>
                                Vence em 2 dias
                            </span>
<span className="text-sm text-zinc-400 font-medium mt-1">Ontem</span>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-3 pl-3">Cobrança de Serviços — Fatura em Aberto</h3>
<div className="flex flex-col gap-2 mb-6 pl-3">
<p className="text-base text-zinc-600 flex items-center gap-2">
<iconify-icon className="text-lg text-zinc-400" icon="solar:buildings-linear"></iconify-icon>
                                Telecom Brasil S.A.
                            </p>
<p className="text-base text-zinc-600 flex items-center gap-2">
<iconify-icon className="text-lg text-zinc-400" icon="solar:calendar-linear"></iconify-icon>
                                Vencimento: <span className="text-red-600 font-medium ml-1">26/03/2026</span>
</p>
</div>
<div className="flex items-center justify-between border-t border-zinc-100 pt-5 mt-2 pl-3">
<div className="flex flex-col gap-1">
<span className="text-xs text-zinc-400 uppercase tracking-widest font-medium">Valor pendente</span>
<span className="text-base font-medium text-zinc-900">R$ 1.247,50</span>
</div>
<span className="text-base font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors flex items-center gap-1.5 flex-row-reverse">
<iconify-icon className="text-xl transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
                                Ver detalhes
                            </span>
</div>
</div>

<div className="notification-card bg-white border border-zinc-200 rounded-2xl p-6 hover:border-zinc-300 transition-all duration-300 cursor-pointer group relative overflow-hidden shadow-sm hover:shadow-md" data-status="pendente" onclick="navTo('view-notification-detail')">
<div className="flex justify-between items-start mb-4">
<span className="inline-flex items-center gap-1.5 bg-orange-50 text-orange-600 text-sm font-medium px-2.5 py-1 rounded-md">
<iconify-icon className="text-base" icon="solar:info-circle-linear"></iconify-icon>
                                Pendente
                            </span>
<span className="text-sm text-zinc-400 font-medium mt-1">Há 3 dias</span>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-3">Renegociação de Dívida e Condições</h3>
<div className="flex flex-col gap-2 mb-6">
<p className="text-base text-zinc-600 flex items-center gap-2">
<iconify-icon className="text-lg text-zinc-400" icon="solar:bank-linear"></iconify-icon>
                                Banco Nacional S.A.
                            </p>
<p className="text-base text-zinc-600 flex items-center gap-2">
<iconify-icon className="text-lg text-zinc-400" icon="solar:calendar-linear"></iconify-icon>
                                Vencimento: <span className="text-zinc-900 font-medium ml-1">10/04/2026</span>
</p>
</div>
<div className="flex items-center justify-between border-t border-zinc-100 pt-5 mt-2">
<div className="flex flex-col gap-1">
<span className="text-xs text-zinc-400 uppercase tracking-widest font-medium">Valor proposto</span>
<span className="text-base font-medium text-zinc-900">R$ 5.430,00</span>
</div>
<span className="text-base font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors flex items-center gap-1.5 flex-row-reverse">
<iconify-icon className="text-xl transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
                                Ver detalhes
                            </span>
</div>
</div>

<div className="notification-card bg-white border border-zinc-200 rounded-2xl p-6 hover:border-zinc-300 transition-all duration-300 cursor-pointer group relative overflow-hidden shadow-sm hover:shadow-md" data-status="enviado" onclick="navTo('view-notification-detail')">
<div className="flex justify-between items-start mb-4">
<span className="inline-flex items-center gap-1.5 bg-zinc-100 text-zinc-600 text-sm font-medium px-2.5 py-1 rounded-md">
<iconify-icon className="text-base" icon="solar:check-circle-linear"></iconify-icon>
                                Resposta enviada
                            </span>
<span className="text-sm text-zinc-400 font-medium mt-1">10 Mar</span>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-3">Notificação de Regras Condominiais</h3>
<div className="flex flex-col gap-2 mb-6">
<p className="text-base text-zinc-600 flex items-center gap-2">
<iconify-icon className="text-lg text-zinc-400" icon="solar:home-angle-linear"></iconify-icon>
                                Condomínio Residencial
                            </p>
<p className="text-base text-zinc-600 flex items-center gap-2">
<iconify-icon className="text-lg text-zinc-400" icon="solar:calendar-linear"></iconify-icon>
                                Vencimento: <span className="text-zinc-900 font-medium ml-1">15/03/2026</span>
</p>
</div>
<div className="flex items-center justify-between border-t border-zinc-100 pt-5 mt-2">
<div className="flex flex-col gap-1">
<span className="text-xs text-zinc-400 uppercase tracking-widest font-medium">Valor</span>
<span className="text-base font-medium text-zinc-500">Sem valor atrelado</span>
</div>
<span className="text-base font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors flex items-center gap-1.5 flex-row-reverse">
<iconify-icon className="text-xl transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
                                Ver detalhes
                            </span>
</div>
</div>

<div className="notification-card bg-white border border-zinc-200 rounded-2xl p-6 hover:border-zinc-300 transition-all duration-300 cursor-pointer group relative overflow-hidden shadow-sm hover:shadow-md" data-status="resolvido" onclick="navTo('view-notification-detail')">
<div className="flex justify-between items-start mb-4">
<span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-600 text-sm font-medium px-2.5 py-1 rounded-md">
<iconify-icon className="text-base" icon="solar:shield-check-linear"></iconify-icon>
                                Acordo fechado
                            </span>
<span className="text-sm text-zinc-400 font-medium mt-1">02 Mar</span>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-3">Quitação de Exames Laboratoriais</h3>
<div className="flex flex-col gap-2 mb-6">
<p className="text-base text-zinc-600 flex items-center gap-2">
<iconify-icon className="text-lg text-zinc-400" icon="solar:hospital-linear"></iconify-icon>
                                Clínica Médica São João
                            </p>
<p className="text-base text-zinc-600 flex items-center gap-2">
<iconify-icon className="text-lg text-zinc-400" icon="solar:calendar-linear"></iconify-icon>
                                Vencimento: <span className="text-zinc-900 font-medium ml-1">05/03/2026</span>
</p>
</div>
<div className="flex items-center justify-between border-t border-zinc-100 pt-5 mt-2">
<div className="flex flex-col gap-1">
<span className="text-xs text-zinc-400 uppercase tracking-widest font-medium">Valor pago</span>
<span className="text-base font-medium text-emerald-600">R$ 350,00</span>
</div>
<span className="text-base font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors flex items-center gap-1.5 flex-row-reverse">
<iconify-icon className="text-xl transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
                                Ver histórico
                            </span>
</div>
</div>
</div>
</section>

<section className="view-section hidden flex-col w-full fade-in flex-1 relative pb-6" id="view-notification-detail">
<div className="sticky top-0 bg-white/90 backdrop-blur-xl z-30 pt-4 pb-4 mb-6 -mx-6 px-6 lg:-mx-12 lg:px-12 flex items-center justify-between border-b border-zinc-200/60 shadow-sm">
<button className="p-2 -ml-2 text-zinc-400 hover:text-zinc-900 transition-colors rounded-xl hover:bg-zinc-50 outline-none" onclick="navTo('view-dashboard')">
<iconify-icon className="text-2xl" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<div className="flex items-center gap-2">
<svg className="text-zinc-900" fill="none" height="24" viewbox="0 0 24 24" width="24">
<path d="M12 2L22 20H2L12 2Z" fill="currentColor"></path>
</svg>
<span className="text-xl font-normal tracking-tight text-zinc-900 leading-none">arbitralis</span>
</div>
<button className="p-2 -mr-2 text-zinc-400 hover:text-zinc-900 transition-colors rounded-xl hover:bg-zinc-50 outline-none">
<iconify-icon className="text-2xl" icon="solar:printer-linear"></iconify-icon>
</button>
</div>
<div className="mb-6">
<div className="flex flex-wrap items-center gap-2 mb-4">
<span className="text-xs font-medium text-zinc-500 bg-zinc-100 ring-1 ring-zinc-200/50 px-2 py-1 rounded-md uppercase tracking-wide">NOT-202603-000216</span>
</div>
<h2 className="text-2xl lg:text-3xl font-normal tracking-tight text-zinc-900 leading-tight mb-4">Cobrança de Serviços — Fatura em Aberto</h2>
<div className="flex items-center gap-2 text-base text-zinc-500">
<div className="w-7 h-7 rounded-full bg-zinc-50 flex items-center justify-center border border-zinc-200 shadow-sm">
<iconify-icon className="text-sm text-zinc-500" icon="solar:buildings-linear"></iconify-icon>
</div>
<span>Enviado por <strong className="font-medium text-zinc-900">Telecom Brasil S.A.</strong></span>
</div>
</div>
<div className="border border-zinc-200 bg-zinc-50/50 rounded-2xl p-6 mb-8 shadow-sm">
<div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-6">
<div className="flex flex-col gap-1.5">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Valor</span>
<span className="text-xl font-medium text-zinc-900 tracking-tight">R$ 1.247,50</span>
</div>
<div className="flex flex-col gap-1.5">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Nº Notificação</span>
<span className="text-base font-medium text-zinc-900 tracking-tight">NOT-202603-000216</span>
</div>
<div className="flex flex-col gap-1.5">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Recebimento</span>
<span className="text-base font-medium text-zinc-900 tracking-tight">12/03/2026</span>
</div>
<div className="flex flex-col gap-1.5">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Vencimento</span>
<span className="text-base font-medium text-red-600 tracking-tight">26/03/2026</span>
</div>
</div>
<div className="w-full h-px bg-zinc-200/60 my-6"></div>
<p className="text-lg text-zinc-600 leading-relaxed mb-6">
                        Prezado(a) Regyane Ferreira de Moura, identificamos uma pendência em aberto referente ao contrato número NOT-202603-000216, com vencimento em 17/03/2026, no valor de R$ 145,00. Solicitamos que regularize esta situação o mais breve possível para evitar a aplicação de juros e multas contratuais, além de possíveis medidas judiciais cabíveis. Para sua comodidade, disponibilizamos diversas formas de pagamento. Entre em contato conosco através dos canais abaixo para maiores informações ou para negociar condições especiais de quitação.
                    </p>
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-medium text-zinc-700 bg-white border border-zinc-200 shadow-sm px-5 py-3 rounded-xl hover:bg-zinc-50 hover:text-zinc-900 transition-all outline-none" onclick="toggleAudio(this)">
<div className="audio-icon-container flex items-center justify-center w-5 h-5">
<iconify-icon className="text-xl text-zinc-400" icon="solar:play-circle-linear"></iconify-icon>
</div>
<span className="audio-btn-text">Ouvir resumo</span>
</button>
</div>
<div className="mb-10">
<h3 className="text-xs font-medium text-zinc-400 uppercase tracking-widest mb-4">Anexos</h3>
<div className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm">
<div className="flex items-center justify-between p-4 hover:bg-zinc-50 transition-colors cursor-pointer group border-b border-zinc-100">
<div className="flex items-center gap-4 overflow-hidden">
<div className="w-10 h-10 shrink-0 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100/50">
<iconify-icon className="text-xl" icon="solar:document-text-linear"></iconify-icon>
</div>
<div className="min-w-0">
<p className="text-base font-medium text-zinc-900 truncate group-hover:underline underline-offset-2">Notificação_Extrajudicial.pdf</p>
<p className="text-xs text-zinc-500 uppercase tracking-wide font-medium mt-1">245 KB</p>
</div>
</div>
<div className="w-10 h-10 shrink-0 rounded-full flex items-center justify-center text-zinc-400 group-hover:text-zinc-900 transition-colors">
<iconify-icon className="text-xl" icon="solar:download-linear"></iconify-icon>
</div>
</div>
<div className="flex items-center justify-between p-4 hover:bg-zinc-50 transition-colors cursor-pointer group">
<div className="flex items-center gap-4 overflow-hidden">
<div className="w-10 h-10 shrink-0 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100/50">
<iconify-icon className="text-xl" icon="solar:chart-2-linear"></iconify-icon>
</div>
<div className="min-w-0">
<p className="text-base font-medium text-zinc-900 truncate group-hover:underline underline-offset-2">Demonstrativo_Debito.pdf</p>
<p className="text-xs text-zinc-500 uppercase tracking-wide font-medium mt-1">128 KB</p>
</div>
</div>
<div className="w-10 h-10 shrink-0 rounded-full flex items-center justify-center text-zinc-400 group-hover:text-zinc-900 transition-colors">
<iconify-icon className="text-xl" icon="solar:download-linear"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="mb-4">
<h3 className="text-xs font-medium text-zinc-400 uppercase tracking-widest mb-2">Quais são os próximos passos?</h3>
<p className="text-base text-zinc-500 mb-6 leading-relaxed">Siga as orientações abaixo para analisar e resolver esta pendência com segurança.</p>
<div className="relative pl-4 border-l-2 border-zinc-100 space-y-8 ml-2">
<div className="relative">
<div className="absolute -left-[27px] w-6 h-6 rounded-full bg-zinc-100 ring-[3px] ring-white flex items-center justify-center top-0">
<span className="text-[11px] font-semibold text-zinc-600">1</span>
</div>
<h4 className="text-base font-medium text-zinc-900 mb-1 mt-0.5">Leia os documentos</h4>
<p className="text-base text-zinc-500 leading-relaxed">Verifique os anexos acima para entender a origem da cobrança.</p>
</div>
<div className="relative">
<div className="absolute -left-[27px] w-6 h-6 rounded-full bg-zinc-100 ring-[3px] ring-white flex items-center justify-center top-0">
<span className="text-[11px] font-semibold text-zinc-600">2</span>
</div>
<h4 className="text-base font-medium text-zinc-900 mb-1 mt-0.5">Decida sua ação</h4>
<p className="text-base text-zinc-500 leading-relaxed">Você pode pagar, renegociar ou contestar o débito formalmente.</p>
</div>
<div className="relative">
<div className="absolute -left-[27px] w-6 h-6 rounded-full bg-zinc-900 ring-[3px] ring-white flex items-center justify-center top-0 shadow-sm">
<span className="text-[11px] font-semibold text-white">3</span>
</div>
<h4 className="text-base font-medium text-zinc-900 mb-1 mt-0.5">Envie sua resposta</h4>
<p className="text-base text-zinc-500 leading-relaxed">Responda oficialmente pela plataforma antes do vencimento do prazo.</p>
</div>
</div>
</div>
<div className="h-16"></div>
<div className="mt-auto pt-8 sticky bottom-0 bg-gradient-to-t from-white via-white/95 to-transparent z-20 pb-8 -mx-6 px-6 lg:-mx-12 lg:px-12 pointer-events-none flex flex-col gap-3">
<button className="w-full bg-zinc-900 text-white rounded-2xl py-4 text-base font-medium hover:bg-black transition-all outline-none flex items-center justify-center gap-2 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transform hover:-translate-y-0.5 duration-200 pointer-events-auto flex-row-reverse" onclick="navTo('view-response')">
<iconify-icon className="text-xl opacity-80" icon="solar:arrow-right-linear"></iconify-icon>
                        Responder notificação
                    </button>
<button className="w-full bg-white border border-zinc-200 text-zinc-700 rounded-2xl py-3.5 text-base font-medium hover:bg-zinc-50 transition-all outline-none flex items-center justify-center gap-2 pointer-events-auto shadow-sm flex-row-reverse" onclick="openBottomSheet()">
<iconify-icon className="text-xl text-zinc-500" icon="solar:question-circle-linear"></iconify-icon>
                        Dúvidas sobre a notificação?
                    </button>
</div>
</section>

<section className="view-section hidden flex-col w-full fade-in flex-1 relative" id="view-response">
<div className="sticky top-0 bg-white/90 backdrop-blur-xl z-30 pt-4 pb-4 mb-8 -mx-6 px-6 lg:-mx-12 lg:px-12 flex items-center justify-between border-b border-zinc-200/60 shadow-sm">
<button className="p-2 -ml-2 text-zinc-400 hover:text-zinc-900 transition-colors rounded-xl hover:bg-zinc-50 outline-none" onclick="navTo('view-notification-detail')">
<iconify-icon className="text-2xl" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<div className="flex items-center gap-2">
<svg className="text-zinc-900" fill="none" height="24" viewbox="0 0 24 24" width="24">
<path d="M12 2L22 20H2L12 2Z" fill="currentColor"></path>
</svg>
<span className="text-xl font-normal tracking-tight text-zinc-900 leading-none">arbitralis</span>
</div>
<button className="p-2 -mr-2 text-zinc-400 hover:text-zinc-900 transition-colors rounded-xl hover:bg-zinc-50 outline-none">
<iconify-icon className="text-2xl" icon="solar:printer-linear"></iconify-icon>
</button>
</div>
<h2 className="text-3xl font-normal tracking-tight text-zinc-900 mb-4">Sua Resposta</h2>
<p className="text-xl text-zinc-500 mb-10 leading-relaxed">
                    Sua mensagem será enviada com segurança e anexada com validade legal ao processo.
                </p>
<div className="mb-10">
<span className="block text-xs text-zinc-400 uppercase tracking-widest font-medium mb-4">Sugestões rápidas</span>
<div className="flex overflow-x-auto gap-3 pb-3 no-scrollbar -mx-6 px-6 lg:mx-0 lg:px-0 lg:flex-wrap">
<button className="shrink-0 px-5 py-3 bg-white border border-zinc-200 rounded-full text-base font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-colors" onclick="fillResponse('Gostaria de entender melhor como chegaram a este valor. Podemos revisar?')">
                            Quero entender o cálculo
                        </button>
<button className="shrink-0 px-5 py-3 bg-white border border-zinc-200 rounded-full text-base font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-colors" onclick="fillResponse('Tenho interesse em negociar. Gostaria de verificar a possibilidade de parcelamento do valor pendente.')">
                            Tenho interesse em negociar
                        </button>
<button className="shrink-0 px-5 py-3 bg-white border border-zinc-200 rounded-full text-base font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-colors" onclick="fillResponse('Já realizei este pagamento. Segue o comprovante em anexo.')">
                            Já paguei
                        </button>
</div>
</div>
<div className="mb-8">
<label className="block text-xs text-zinc-400 uppercase tracking-widest font-medium mb-3" htmlFor="response-msg">Sua mensagem</label>
<textarea className="block w-full rounded-2xl border-0 py-4 px-5 text-zinc-900 ring-1 ring-inset ring-zinc-200 placeholder:text-zinc-400 hover:bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-inset focus:ring-zinc-900 transition-all text-base outline-none resize-none" id="response-msg" placeholder="Escreva aqui os detalhes da sua resposta..." rows="7"></textarea>

<div className="hidden mt-4 p-4 rounded-xl bg-orange-50 border border-orange-100 text-orange-900 text-sm" id="ai-feedback-container">
<div className="flex gap-2">
<iconify-icon className="text-xl text-orange-600 shrink-0 mt-0.5" icon="solar:shield-warning-linear"></iconify-icon>
<div className="flex flex-col items-start gap-3 w-full">
<p className="leading-relaxed" id="ai-feedback-text"></p>
<button className="hidden bg-white border border-orange-200 text-orange-800 px-4 py-2 rounded-lg font-medium hover:bg-orange-100 transition-colors shadow-sm outline-none" id="ai-feedback-apply">
                                    Usar sugestão
                                </button>
</div>
</div>
</div>
</div>
<div className="mb-4">
<label className="block text-xs text-zinc-400 uppercase tracking-widest font-medium mb-3">Anexos</label>
<div className="flex flex-col gap-3 mb-4 empty:hidden" id="uploaded-files-list">

</div>
<label className="flex flex-col items-center justify-center w-full h-24 rounded-xl border-2 border-dashed border-zinc-200 bg-zinc-50 hover:bg-zinc-100 hover:border-zinc-300 transition-colors cursor-pointer group">
<div className="flex items-center justify-center gap-2">
<iconify-icon className="text-xl text-zinc-400 group-hover:text-zinc-900 transition-colors" icon="solar:add-circle-linear"></iconify-icon>
<p className="text-sm text-zinc-500 font-medium tracking-tight">Adicionar documento</p>
</div>
<input className="hidden" multiple="" onchange="handleFileUpload(this)" type="file"/>
</label>
</div>
<div className="h-16"></div>
<div className="mt-auto pt-8 sticky bottom-0 bg-gradient-to-t from-white via-white/95 to-transparent z-20 pb-8 -mx-6 px-6 lg:-mx-12 lg:px-12 pointer-events-none flex flex-col gap-3">
<button className="w-full bg-zinc-900 text-white rounded-2xl py-4 text-base font-medium transition-all outline-none flex items-center justify-center gap-2 shadow-[0_8px_30px_rgb(0,0,0,0.08)] pointer-events-auto opacity-50 cursor-not-allowed flex-row-reverse" id="btn-send-response" onclick="handleSendResponse()">
<iconify-icon className="text-xl opacity-80" icon="solar:arrow-right-linear" id="btn-send-icon"></iconify-icon>
<span id="btn-send-text">Enviar resposta oficial</span>
</button>
<button className="w-full bg-white border border-zinc-200 text-zinc-700 rounded-2xl py-3.5 text-base font-medium hover:bg-zinc-50 transition-all outline-none flex items-center justify-center gap-2 pointer-events-auto shadow-sm flex-row-reverse" onclick="openBottomSheet()">
<iconify-icon className="text-xl text-zinc-500" icon="solar:question-circle-linear"></iconify-icon>
                        Dúvidas sobre a notificação?
                    </button>
</div>
</section>

<section className="view-section hidden flex-col w-full text-center fade-in py-12 justify-center flex-1" id="view-response-success">
<div className="w-24 h-24 bg-zinc-50 rounded-full flex items-center justify-center mx-auto mb-8 ring-1 ring-zinc-100">
<iconify-icon className="text-5xl text-zinc-900" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h2 className="text-3xl font-normal tracking-tight text-zinc-900 mb-4">Resposta registrada</h2>
<p className="text-xl text-zinc-500 mb-10 max-w-[280px] mx-auto leading-relaxed">
                    O remetente foi notificado. Sua manifestação possui total validade jurídica.
                </p>
<div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 mb-12 w-full max-w-sm mx-auto">
<span className="block text-xs text-zinc-400 uppercase tracking-widest font-medium mb-3">Número do Protocolo</span>
<span className="block text-xl font-mono font-medium text-zinc-900 tracking-wide">ARB-2026-89912</span>
</div>
<div className="space-y-4 w-full">
<button className="w-full bg-zinc-900 text-white rounded-xl py-4 text-base font-medium hover:bg-black transition-all outline-none" onclick="navToDashboardFromSuccess()">
                        Ir para Início
                    </button>
<button className="w-full py-4 text-base font-medium text-zinc-600 hover:text-zinc-900 transition-colors outline-none bg-white border border-zinc-200 hover:border-zinc-300 rounded-xl flex items-center justify-center gap-2">
<iconify-icon className="text-xl" icon="solar:download-linear"></iconify-icon>
                        Baixar comprovante
                    </button>
</div>
</section>
</main>
</div>

<div className="hidden lg:flex overflow-hidden flex-col xl:p-24 text-white bg-[#09090b] w-[55%] border-zinc-800 border-l pt-16 pr-16 pb-16 pl-16 relative justify-end">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black opacity-100"></div>
<div className="absolute inset-0 grid-pattern opacity-30"></div>
<div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-zinc-800/20 rounded-full blur-[120px] mix-blend-screen"></div>
<div className="relative z-10 grid grid-cols-2 gap-16 mt-auto max-w-3xl">
<div className="group">
<div className="h-0.5 w-8 bg-white/20 mb-6 transition-all duration-500 group-hover:w-12 group-hover:bg-white/60"></div>
<h3 className="text-sm font-medium tracking-widest uppercase mb-4 text-white/80">Segurança Jurídica</h3>
<p className="text-lg text-white/50 leading-relaxed font-normal">Procedimentos pautados pelo rigor técnico e legal, garantindo plena validade e segurança às decisões.</p>
</div>
<div className="group">
<div className="h-0.5 w-8 bg-white/20 mb-6 transition-all duration-500 group-hover:w-12 group-hover:bg-white/60"></div>
<h3 className="text-sm font-medium tracking-widest uppercase mb-4 text-white/80">Método e Confiança</h3>
<p className="text-lg text-white/50 leading-relaxed font-normal">Excelência na resolução de conflitos, unindo agilidade processual com a solidez de um corpo técnico.</p>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 flex items-end justify-center pointer-events-none opacity-0 transition-opacity duration-300" id="faq-bottom-sheet">
<div className="absolute inset-0 bg-zinc-900/40 backdrop-blur-sm transition-opacity" onclick="closeBottomSheet()"></div>
<div className="bg-white w-full max-w-xl rounded-t-[2rem] p-6 lg:p-10 transform translate-y-full transition-transform duration-300 ease-out pointer-events-auto relative z-10 max-h-[90vh] overflow-y-auto no-scrollbar shadow-2xl" id="faq-sheet-content">
<div className="w-12 h-1.5 bg-zinc-200 rounded-full mx-auto mb-8"></div>
<h2 className="text-2xl font-normal tracking-tight text-zinc-900 mb-8">Dúvidas Frequentes</h2>
<div className="space-y-3 mb-10 faq-accordion-container">
<details className="group bg-zinc-50 border border-zinc-200 rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden overflow-hidden" name="faq-sheet">
<summary className="flex items-center justify-between cursor-pointer text-base font-medium text-zinc-800 p-5 outline-none hover:bg-zinc-100/50 transition-colors">
                        O que acontece se eu não responder?
                        <span className="w-8 h-8 shrink-0 rounded-full bg-zinc-200/50 flex items-center justify-center text-zinc-500 group-open:rotate-45 transition-transform">
<iconify-icon className="text-xl" icon="solar:add-circle-linear"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 pt-1">
<p className="text-base text-zinc-500 leading-relaxed">A falta de resposta pode ser interpretada como desinteresse, permitindo o início de procedimentos judiciais e possíveis bloqueios.</p>
</div>
</details>
<details className="group bg-zinc-50 border border-zinc-200 rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden overflow-hidden" name="faq-sheet">
<summary className="flex items-center justify-between cursor-pointer text-base font-medium text-zinc-800 p-5 outline-none hover:bg-zinc-100/50 transition-colors">
                        Como posso propor um acordo?
                        <span className="w-8 h-8 shrink-0 rounded-full bg-zinc-200/50 flex items-center justify-center text-zinc-500 group-open:rotate-45 transition-transform">
<iconify-icon className="text-xl" icon="solar:add-circle-linear"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 pt-1">
<p className="text-base text-zinc-500 leading-relaxed">Utilize o botão "Responder notificação" na tela principal para enviar sua proposta formal com segurança e validade jurídica.</p>
</div>
</details>
<details className="group bg-zinc-50 border border-zinc-200 rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden overflow-hidden" name="faq-sheet">
<summary className="flex items-center justify-between cursor-pointer text-base font-medium text-zinc-800 p-5 outline-none hover:bg-zinc-100/50 transition-colors">
                        Qual é o prazo para resposta?
                        <span className="w-8 h-8 shrink-0 rounded-full bg-zinc-200/50 flex items-center justify-center text-zinc-500 group-open:rotate-45 transition-transform">
<iconify-icon className="text-xl" icon="solar:add-circle-linear"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 pt-1">
<p className="text-base text-zinc-500 leading-relaxed">O prazo consta no documento anexo e no resumo da notificação. Geralmente, varia de 5 a 15 dias corridos após o recebimento.</p>
</div>
</details>
<details className="group bg-zinc-50 border border-zinc-200 rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden overflow-hidden" name="faq-sheet">
<summary className="flex items-center justify-between cursor-pointer text-base font-medium text-zinc-800 p-5 outline-none hover:bg-zinc-100/50 transition-colors">
                        Meus dados estão seguros?
                        <span className="w-8 h-8 shrink-0 rounded-full bg-zinc-200/50 flex items-center justify-center text-zinc-500 group-open:rotate-45 transition-transform">
<iconify-icon className="text-xl" icon="solar:add-circle-linear"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 pt-1">
<p className="text-base text-zinc-500 leading-relaxed">Sim. Utilizamos criptografia de ponta e seguimos todas as normas da LGPD para proteger seus dados e documentos na plataforma.</p>
</div>
</details>
<details className="group bg-zinc-50 border border-zinc-200 rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden overflow-hidden" name="faq-sheet">
<summary className="flex items-center justify-between cursor-pointer text-base font-medium text-zinc-800 p-5 outline-none hover:bg-zinc-100/50 transition-colors">
                        Serei processado por isso?
                        <span className="w-8 h-8 shrink-0 rounded-full bg-zinc-200/50 flex items-center justify-center text-zinc-500 group-open:rotate-45 transition-transform">
<iconify-icon className="text-xl" icon="solar:add-circle-linear"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 pt-1">
<p className="text-base text-zinc-500 leading-relaxed">Esta é uma tentativa amigável e extrajudicial. A plataforma apenas registra a comunicação, mas processos judiciais dependem exclusivamente da decisão do remetente.</p>
</div>
</details>
</div>
<div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-4 flex items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-white border border-zinc-200 rounded-full flex items-center justify-center shrink-0 shadow-sm">
<iconify-icon className="text-xl text-zinc-600" icon="solar:headphones-round-sound-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-900 tracking-tight">Dúvidas adicionais?</h3>
<p className="text-xs text-zinc-500">Fale com um especialista</p>
</div>
</div>
<button className="bg-white border border-zinc-200 text-zinc-900 rounded-xl px-4 py-2 text-sm font-medium hover:bg-zinc-50 transition-colors outline-none shrink-0 shadow-sm" onclick="closeBottomSheet()">
                    Falar com suporte
                </button>
</div>
</div>
</div>


    </>
  );
}
