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



        document.addEventListener('DOMContentLoaded', () => {
            // Inicializa todos os ícones da página
            lucide.createIcons({ strokeWidth: 1.5 });
            
            // --- LÓGICA DA HOME ORIGINAL ---

            // Dynamic Greeting & Text Effect
            const initGreeting = () => {
                const greetingElement = document.getElementById('dynamic-greeting');
                if (!greetingElement) return;
                const hour = new Date().getHours();
                let greetingText = "Boa noite, Sofia";
                if (hour >= 5 && hour < 12) greetingText = "Bom dia, Sofia";
                else if (hour >= 12 && hour < 18) greetingText = "Boa tarde, Sofia";
                
                greetingElement.innerHTML = '';
                greetingText.split('').forEach((char, index) => {
                    const span = document.createElement('span');
                    span.className = 'greeting-char';
                    span.textContent = char === ' ' ? '\u00A0' : char;
                    span.style.animationDelay = `${index * 50}ms`;
                    greetingElement.appendChild(span);
                });
            };
            initGreeting();

            // Sidebar Logic
            const setupSidebar = () => {
                const toggleSidebarBtn = document.getElementById('toggle-sidebar-btn');
                const closeSidebarBtn = document.getElementById('close-sidebar-btn');
                const conversationsSidebar = document.getElementById('conversations-sidebar');
                const sidebarBackdrop = document.getElementById('sidebar-backdrop');
                const conversationsList = document.getElementById('conversations-list');
                if (!toggleSidebarBtn) return;

                const sampleConversations = [
                    { id: 'conv1', title: 'Ideias para Reels', date: 'Ontem' },
                    { id: 'conv2', title: 'Roteiro para TikTok', date: 'Há 3 dias' },
                    { id: 'conv3', title: 'Estratégia de Marketing', date: 'Semana passada' },
                ];
                const openSidebar = () => { conversationsSidebar.classList.remove('-translate-x-full'); sidebarBackdrop.classList.remove('opacity-0', 'pointer-events-none'); };
                const closeSidebar = () => { conversationsSidebar.classList.add('-translate-x-full'); sidebarBackdrop.classList.add('opacity-0', 'pointer-events-none'); };
                toggleSidebarBtn.addEventListener('click', openSidebar);
                closeSidebarBtn.addEventListener('click', closeSidebar);
                sidebarBackdrop.addEventListener('click', closeSidebar);
                const renderConversations = () => {
                    conversationsList.innerHTML = '';
                    sampleConversations.forEach(conv => {
                        const conversationItem = document.createElement('div');
                        conversationItem.className = 'relative group flex items-center justify-between p-3 rounded-lg hover:bg-white/10 cursor-pointer transition-colors';
                        conversationItem.innerHTML = `<div><h4 class="text-white font-medium text-sm">${conv.title}</h4><span class="text-white/60 text-xs">${conv.date}</span></div><div class="relative"><button class="options-btn opacity-0 group-hover:opacity-100 transition-opacity text-white/60 hover:text-white p-1 rounded-full"><i data-lucide="more-horizontal" class="w-4 h-4"></i></button><div class="conversation-options-menu liquid-glass p-2"><a href="#" class="notification-item flex items-center gap-2 px-3 py-2 text-white text-xs"><i data-lucide="pencil" class="w-3 h-3"></i> Renomear</a><a href="#" class="notification-item flex items-center gap-2 px-3 py-2 text-red-400 text-xs"><i data-lucide="trash-2" class="w-3 h-3"></i> Excluir</a></div></div>`;
                        conversationsList.appendChild(conversationItem);
                    });
                    lucide.createIcons({ strokeWidth: 1.5 });
                };
                renderConversations();
                document.body.addEventListener('click', (e) => {
                    const isOptionsBtn = e.target.closest('.options-btn');
                    document.querySelectorAll('.conversation-options-menu').forEach(menu => { if (!isOptionsBtn || !menu.previousElementSibling.contains(isOptionsBtn)) { menu.classList.remove('show'); } });
                    if (isOptionsBtn) { e.stopPropagation(); const menu = isOptionsBtn.nextElementSibling; menu.classList.toggle('show'); }
                });
            };
            setupSidebar();
            
            // Command Bar Logic
            const setupCommandBar = () => {
                const commandInput = document.getElementById('command-input');
                const commandContainer = document.getElementById('command-container');
                const icebreakers = document.getElementById('icebreakers');
                if (!commandInput) return;
                commandInput.addEventListener('focus', () => { icebreakers.style.display = 'flex'; commandContainer.classList.add('is-active'); });
                commandInput.addEventListener('blur', () => { setTimeout(() => { if (document.activeElement !== commandInput && !icebreakers.contains(document.activeElement)) { icebreakers.style.display = 'none'; commandContainer.classList.remove('is-active'); } }, 150); });
                icebreakers.querySelectorAll('button').forEach(button => { button.addEventListener('click', () => { commandInput.value = button.textContent; commandInput.focus(); icebreakers.style.display = 'none'; }); });
            };
            setupCommandBar();

            // Carousel Logic
            const setupCarousel = (idPrefix) => {
                const track = document.getElementById(`${idPrefix}-track`);
                const prevBtn = document.getElementById(`${idPrefix}-prev-btn`);
                const nextBtn = document.getElementById(`${idPrefix}-next-btn`);
                const indicators = document.getElementById(`${idPrefix}-indicators`);
                if (!track) return;
                const items = Array.from(track.children);
                const totalItems = items.length;
                const updateCarousel = () => {
                    const scrollLeft = track.scrollLeft;
                    const maxScrollLeft = track.scrollWidth - track.clientWidth;
                    prevBtn.disabled = scrollLeft < 1;
                    nextBtn.disabled = scrollLeft > maxScrollLeft - 1;
                    if (indicators) {
                        const itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(items[0]).marginRight || 0);
                        const currentIndex = Math.round((scrollLeft + 10) / itemWidth) + 1;
                        indicators.textContent = `${Math.min(currentIndex, totalItems)} / ${totalItems}`;
                    }
                };
                nextBtn.addEventListener('click', () => { const itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(items[0]).marginRight || 0); track.scrollBy({ left: itemWidth, behavior: 'smooth' }); });
                prevBtn.addEventListener('click', () => { const itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(items[0]).marginRight || 0); track.scrollBy({ left: -itemWidth, behavior: 'smooth' }); });
                const observer = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { track.addEventListener('scroll', updateCarousel); window.addEventListener('resize', updateCarousel); updateCarousel(); } else { track.removeEventListener('scroll', updateCarousel); window.removeEventListener('resize', updateCarousel); } }); }, { threshold: 0.1 });
                observer.observe(track);
            };
            setupCarousel('popular');
            setupCarousel('recommended');
            setupCarousel('tools');

            // --- LÓGICA DO HEADER ATUALIZADO ---
            function setupHeaderDropdowns() {
                const bellButton = document.getElementById('bell-button');
                const notificationsDropdown = document.getElementById('notifications-dropdown');
                const profileButton = document.getElementById('profile-button');
                const profileDropdown = document.getElementById('profile-dropdown');
                const creditsInfoBtn = document.getElementById('credits-info-btn');
                const creditsTooltip = document.getElementById('credits-tooltip');
                const closeAllMenus = () => { notificationsDropdown.classList.remove('show'); profileDropdown.classList.remove('show'); creditsTooltip.classList.remove('show'); };
                bellButton.addEventListener('click', (e) => { e.stopPropagation(); const isAlreadyOpen = notificationsDropdown.classList.contains('show'); closeAllMenus(); if (!isAlreadyOpen) notificationsDropdown.classList.add('show'); });
                profileButton.addEventListener('click', (e) => { e.stopPropagation(); const isAlreadyOpen = profileDropdown.classList.contains('show'); closeAllMenus(); if (!isAlreadyOpen) profileDropdown.classList.add('show'); });
                creditsInfoBtn.addEventListener('click', (e) => { e.stopPropagation(); creditsTooltip.classList.toggle('show'); });
                document.addEventListener('click', (e) => { const isInsideDropdown = e.target.closest('.dropdown-menu') || e.target.closest('#bell-button') || e.target.closest('#profile-button'); if (!isInsideDropdown) { closeAllMenus(); } });
            }
            setupHeaderDropdowns();

            function setupUpgradePopup() {
                const invitationContainer = document.getElementById('invitation-container');
                const invitationBackdrop = document.getElementById('invitation-backdrop');
                const invitationSheet = document.getElementById('invitation-sheet');
                const openLink = document.getElementById('upgrade-link');
                const closeBtn = document.getElementById('close-invitation-btn');
                const planCards = document.querySelectorAll('.plan-card');
                const openInvitation = () => { document.body.style.overflow = 'hidden'; invitationSheet.style.transform = ''; void invitationContainer.offsetWidth; invitationContainer.classList.add('active'); invitationBackdrop.classList.add('active'); invitationSheet.classList.add('active'); lucide.createIcons(); };
                const closeInvitation = () => { document.body.style.overflow = ''; invitationContainer.classList.remove('active'); invitationBackdrop.classList.remove('active'); invitationSheet.style.transform = 'translateY(100%)'; setTimeout(() => { invitationSheet.classList.remove('active'); }, 600); };
                openLink.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); openInvitation(); });
                closeBtn.addEventListener('click', closeInvitation);
                invitationBackdrop.addEventListener('click', closeInvitation);
                planCards.forEach(card => { card.addEventListener('click', () => { planCards.forEach(c => c.classList.remove('recommended')); card.classList.add('recommended'); }); });
            }
            setupUpgradePopup();

            // --- LÓGICA DOS CARDS DE PROMPT E MODAL ---
            const promptsData = [
                { 
                    id: "prompt-roteiro-viral-001", 
                    title: "Crie um Roteiro Viral em 30 Segundos", 
                    description: "Transforme qualquer ideia em uma estrutura de roteiro de 3 atos para engajamento máximo.", 
                    type: "text-generation", 
                    tags: ["roteiro", "storytelling"], 
                    compatible_with: ["Claude", "ChatGPT"], 
                    sequence_prompts: ["prompt-titulos-seo-002"], 
                    content: `Você é um especialista em storytelling viral para redes sociais.\n\nCONTEXTO:\n- Tema: [TEMA]\n- Público-alvo: [PÚBLICO-ALVO]\n- Tom de voz: [TOM DE VOZ]\n- Duração: 30-60 segundos\n\nESTRUTURA OBRIGATÓRIA:\n1. GANCHO (0-3s): Uma frase impactante que pare o scroll\n2. DESENVOLVIMENTO (3-45s): Apresente o problema/solução/história\n3. CALL TO ACTION (45-60s): Convide para ação específica\n\nCRITÉRIOS DE SUCESSO:\n- Use linguagem simples e direta\n- Inclua elementos de curiosidade ou surpresa\n- Termine com uma pergunta ou convite à interação\n- Mantenha o ritmo acelerado\n\nCrie o roteiro seguindo exatamente esta estrutura.`, 
                    how_to_use: "Substitua [TEMA], [PÚBLICO-ALVO] e [TOM DE VOZ] pelos seus dados específicos antes de usar o prompt." 
                },
                { 
                    id: "prompt-titulos-seo-002", 
                    title: "Crie Títulos Otimizados para SEO", 
                    description: "Use este prompt para gerar títulos magnéticos e otimizados para mecanismos de busca.", 
                    type: "text-generation", 
                    tags: ["seo", "títulos"], 
                    compatible_with: ["Claude", "ChatGPT"], 
                    content: `Crie 5 títulos otimizados para SEO sobre [TEMA] seguindo estas diretrizes:\n\n1. Entre 50-60 caracteres\n2. Inclua palavra-chave principal no início\n3. Use números quando possível\n4. Inclua gatilhos emocionais\n5. Seja específico e claro\n\nFÓRMULAS TESTADAS:\n- "Como [AÇÃO] em [TEMPO] (Guia [ANO])"\n- "[NÚMERO] Formas de [RESULTADO] sem [OBSTÁCULO]"\n- "O Segredo para [BENEFÍCIO] que [AUTORIDADE] não Conta"\n\nPara cada título, explique brevemente por que ele funciona.`, 
                    how_to_use: "Substitua [TEMA] pelo assunto desejado e ajuste as variáveis conforme necessário." 
                },
                { 
                    id: "prompt-copy-vendas-003", 
                    title: "Copy de Vendas Irresistível", 
                    description: "Crie textos persuasivos que convertem usando gatilhos mentais comprovados.", 
                    type: "text-generation", 
                    tags: ["copywriting", "vendas"], 
                    compatible_with: ["Claude", "ChatGPT"], 
                    content: `Crie uma copy de vendas para [PRODUTO/SERVIÇO] usando a estrutura AIDA:\n\nATENÇÃO:\n- Headline impactante que para o leitor\n- Use números, benefícios ou urgência\n- Máximo de 10 palavras\n\nINTERESSE:\n- Identifique a dor do cliente\n- Apresente estatísticas ou casos de sucesso\n- Use storytelling se apropriado\n\nDESEJO:\n- Liste 3-5 benefícios principais\n- Use prova social (depoimentos, números)\n- Crie urgência ou escassez\n\nAÇÃO:\n- CTA claro e direto\n- Remova objeções\n- Facilite a decisão\n\nGATILHOS MENTAIS A INCLUIR:\n- Escassez, urgência, autoridade, reciprocidade\n\nCrie a copy completa seguindo esta estrutura.`, 
                    how_to_use: "Substitua [PRODUTO/SERVIÇO] pela sua oferta específica e adapte os gatilhos mentais ao seu público." 
                }
            ];

            const toolLogos = { 
                "Claude": `<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/></svg>`, 
                "ChatGPT": `<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z"/></svg>` 
            };

            const modalBackdrop = document.getElementById('prompt-modal-backdrop');
            const modalContainer = document.getElementById('prompt-modal-container');
            let currentPromptId = null, originalCardRect = null, isMobile = window.innerWidth <= 768;

            function populateOficina(promptId) {
                const prompt = promptsData.find(p => p.id === promptId);
                if (!prompt) return;
                
                let howToUseHTML = '', recommendationsHTML = '', promptAreaHTML = '', nextStepsHTML = '';
                
                if (prompt.how_to_use) {
                    howToUseHTML = `<div class="contained-card p-4 relative overflow-hidden card-glow"><div class="relative"><div class="flex items-start gap-3"><i data-lucide="compass" class="w-5 h-5 text-[var(--brand-mint)] flex-shrink-0 mt-1"></i><div><h4 class="font-semibold">Guia Rápido</h4><p class="text-sm text-white/70 mt-1">${prompt.how_to_use}</p></div></div></div></div>`;
                }
                
                if (prompt.compatible_with?.length > 0) {
                    const toolsHTML = prompt.compatible_with.map(tool => 
                        `<div class="tool-logo-card p-2 rounded-lg flex flex-col items-center gap-1" title="${tool}"><div class="w-8 h-8 text-white/70 flex items-center justify-center">${toolLogos[tool] || `<i data-lucide="cpu" class="w-4 h-4"></i>`}</div><span class="text-xs text-white/60">${tool}</span></div>`
                    ).join('');
                    recommendationsHTML = `<div class="contained-card p-4"><h4 class="font-semibold mb-3 flex items-center gap-2"><i data-lucide="verified" class="w-4 h-4 text-[var(--brand-mint)]"></i>Também funciona com</h4><div class="flex items-center flex-wrap gap-3">${toolsHTML}</div></div>`;
                }
                
                if (prompt.content) {
                    const savedContent = localStorage.getItem(prompt.id) || prompt.content;
                    const promptPreviewHTML = savedContent.substring(0, 200).replace(/\n/g, '<br>') + (savedContent.length > 200 ? '...' : '');
                    promptAreaHTML = `<div class="contained-card p-4 space-y-4"><div class="flex justify-between items-center"><h4 class="font-semibold flex items-center gap-2"><i data-lucide="code-2" class="w-4 h-4 text-[var(--brand-mint)]"></i>Prompt Principal</h4><button class="copy-prompt-btn p-2 rounded-lg hover:bg-white/10 transition-colors" title="Copiar prompt"><i data-lucide="copy" class="w-4 h-4"></i></button></div><div id="prompt-display-mode"><div class="prompt-preview">${promptPreviewHTML}</div><button id="expand-prompt-btn" class="mt-3 text-sm font-semibold text-[var(--brand-mint)] hover:text-white transition-colors">Expandir para editar</button></div><div id="prompt-edit-mode" class="hidden"><textarea class="prompt-textarea w-full bg-black/30 p-4 rounded-lg text-sm leading-relaxed border border-white/10 resize-none focus:outline-none focus:border-[var(--brand-pink)]/50 transition-colors" rows="1">${savedContent}</textarea><div class="mt-3 flex items-center gap-3"><button class="save-prompt-btn hidden bg-green-500/20 text-green-300 text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-green-500/30 transition-colors">Salvar Alterações</button><button id="collapse-prompt-btn" class="text-sm text-white/60 hover:text-white transition-colors">Recolher</button></div></div></div>`;
                }
                
                if (prompt.sequence_prompts?.length > 0) {
                    const nextStepsHTMLContent = prompt.sequence_prompts.map(id => {
                        const nextPrompt = promptsData.find(p => p.id === id);
                        return nextPrompt ? `<a href="#" class="next-step-link block bg-white/5 hover:bg-white/10 p-3 rounded-lg transition-colors group" data-next-prompt-id="${id}"><p class="font-semibold text-xs text-[var(--brand-mint)] mb-1">Próximo Passo:</p><p class="font-medium text-sm flex justify-between items-center"><span>${nextPrompt.title}</span><i data-lucide="arrow-right" class="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all"></i></p></a>` : '';
                    }).join('');
                    nextStepsHTML = `<div class="contained-card p-4 relative overflow-hidden card-glow"><div class="relative"><h4 class="font-semibold mb-3 flex items-center gap-2"><i data-lucide="workflow" class="w-4 h-4 text-[var(--brand-mint)]"></i>Jornada Conectada</h4><div class="space-y-3">${nextStepsHTMLContent}</div></div></div>`;
                }
                
                modalContainer.innerHTML = `<button id="close-modal-btn" class="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-colors bg-black/20 hover:bg-black/40 rounded-full z-10"><i data-lucide="x" class="w-5 h-5"></i></button><div class="prompt-modal-inner-content h-full"><div class="p-6 pt-12 md:pt-6 h-full flex flex-col"><div class="flex-shrink-0 flex justify-between items-start mb-6"><h2 id="modal-title" class="text-2xl font-semibold tracking-tight pr-10" style="font-family:'Geist',sans-serif;">${prompt.title}</h2></div><div class="modal-scroll-container flex-grow overflow-y-auto space-y-6 hide-scrollbar -mr-2 pr-2">${howToUseHTML}${recommendationsHTML}${promptAreaHTML}${nextStepsHTML}</div></div></div>`;
                lucide.createIcons({ strokeWidth: 1.5 });
            }

            function openOficina(cardElement) {
                currentPromptId = cardElement.dataset.promptId;
                populateOficina(currentPromptId);
                document.body.style.overflow = 'hidden';
                modalBackdrop.classList.remove('hidden');
                
                if (!isMobile) {
                    originalCardRect = cardElement.getBoundingClientRect();
                    Object.assign(modalContainer.style, {
                        width: `${originalCardRect.width}px`,
                        height: `${originalCardRect.height}px`,
                        top: `${originalCardRect.top}px`,
                        left: `${originalCardRect.left}px`,
                        transform: '',
                        borderRadius: '16px'
                    });
                }
                
                requestAnimationFrame(() => {
                    modalBackdrop.style.opacity = '1';
                    if (!isMobile) {
                        Object.assign(modalContainer.style, {
                            width: 'min(90vw, 800px)',
                            height: 'min(85vh, 750px)',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            borderRadius: '20px'
                        });
                    }
                    setTimeout(() => modalContainer.classList.add('open'), 10);
                });
            }

            function closeOficina() {
                if (!currentPromptId) return;
                document.body.style.overflow = '';
                modalBackdrop.style.opacity = '0';
                modalContainer.classList.remove('open');
                
                if (!isMobile && originalCardRect) {
                    Object.assign(modalContainer.style, {
                        width: `${originalCardRect.width}px`,
                        height: `${originalCardRect.height}px`,
                        top: `${originalCardRect.top}px`,
                        left: `${originalCardRect.left}px`,
                        transform: '',
                        borderRadius: '16px'
                    });
                }
                
                setTimeout(() => {
                    modalBackdrop.classList.add('hidden');
                    currentPromptId = null;
                }, 500);
            }

            function autoResizeTextarea(textarea) {
                textarea.style.height = 'auto';
                textarea.style.height = Math.min(textarea.scrollHeight, 300) + 'px';
            }

            function showToast(message) {
                const toast = document.getElementById('toast-notification');
                toast.textContent = message;
                toast.classList.add('show');
                setTimeout(() => toast.classList.remove('show'), 2000);
            }

            document.body.addEventListener('click', e => {
                const card = e.target.closest('.prompt-card');
                if (card) openOficina(card);
            });

            modalContainer.addEventListener('click', e => {
                if (!currentPromptId) return;
                
                if (e.target.closest('#close-modal-btn')) {
                    closeOficina();
                }
                
                if (e.target.closest('#expand-prompt-btn')) {
                    document.getElementById('prompt-display-mode').classList.add('hidden');
                    document.getElementById('prompt-edit-mode').classList.remove('hidden');
                    const textarea = document.querySelector('.prompt-textarea');
                    autoResizeTextarea(textarea);
                    textarea.focus();
                }
                
                if (e.target.closest('#collapse-prompt-btn')) {
                    document.getElementById('prompt-edit-mode').classList.add('hidden');
                    document.getElementById('prompt-display-mode').classList.remove('hidden');
                }
                
                const copyBtn = e.target.closest('.copy-prompt-btn');
                if (copyBtn) {
                    const editMode = document.getElementById('prompt-edit-mode');
                    const textarea = editMode?.querySelector('.prompt-textarea');
                    const textToCopy = (!editMode?.classList.contains('hidden') && textarea) ? textarea.value : (localStorage.getItem(currentPromptId) || promptsData.find(p=>p.id === currentPromptId).content);
                    navigator.clipboard.writeText(textToCopy).then(() => {
                        showToast('Prompt copiado!');
                    });
                }
                
                if (e.target.closest('.save-prompt-btn')) {
                    const textarea = document.querySelector('.prompt-textarea');
                    localStorage.setItem(currentPromptId, textarea.value);
                    showToast('Alterações salvas!');
                    e.target.closest('.save-prompt-btn').classList.add('hidden');
                }
                
                const nextStepLink = e.target.closest('.next-step-link');
                if (nextStepLink) {
                    e.preventDefault();
                    const nextPromptId = nextStepLink.dataset.nextPromptId;
                    currentPromptId = nextPromptId;
                    populateOficina(nextPromptId);
                }
            });

            modalContainer.addEventListener('input', e => {
                if (e.target.classList.contains('prompt-textarea')) {
                    autoResizeTextarea(e.target);
                    const saveBtn = e.target.closest('.contained-card').querySelector('.save-prompt-btn');
                    if (saveBtn) saveBtn.classList.remove('hidden');
                }
            });

            modalBackdrop.addEventListener('click', closeOficina);
            document.addEventListener('keydown', e => {
                if (e.key === 'Escape' && currentPromptId) closeOficina();
            });
            window.addEventListener('resize', () => {
                isMobile = window.innerWidth <= 768;
            });

            // Smooth scroll to top when logo is clicked
            document.querySelector('a[href="#top"]').addEventListener('click', (e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });
    
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
      <div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10 blur-sm" id="aura-image" style={{backgroundImage: `url("https://i.postimg.cc/Rh7z50WJ/lmarena-image-96.png?w=800&q=80")`}}></div><div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" id="aura-image"></div><div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" id="aura-image"></div><div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" id="aura-image"></div><div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" id="aura-image"></div><div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" id="aura-image"></div><div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" id="aura-image"></div><div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" id="aura-image"></div><div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" id="aura-image"></div><div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" id="aura-image"></div><div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" id="aura-image"></div><div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" id="aura-image"></div><div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" id="aura-image"></div><div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" id="aura-image"></div><div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" id="aura-image"></div>

<div className="fixed inset-0 bg-black/50 z-40 opacity-0 pointer-events-none" id="sidebar-backdrop"></div>
<div className="fixed top-0 left-0 h-full w-full sm:w-80 liquid-glass transform -translate-x-full transition-transform duration-300 ease-in-out z-50 rounded-none border-r border-white/10" id="conversations-sidebar">
<div className="p-4 pt-24 h-full flex flex-col">
<div className="flex justify-between items-center mb-4 px-2">
<h3 className="text-white font-semibold">Conversas</h3>
<button className="text-white/60 hover:text-white liquid-glass-pill w-9 h-9 flex items-center justify-center" id="close-sidebar-btn">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="space-y-1 flex-grow overflow-y-auto hide-scrollbar" id="conversations-list">

</div>
</div>
</div>
<button className="fixed left-4 top-[88px] w-12 h-12 rounded-full liquid-glass-pill flex items-center justify-center shadow-lg z-20" id="toggle-sidebar-btn">
<i className="w-5 h-5 text-white" data-lucide="menu"></i>
</button>

<header className="fixed top-0 left-0 right-0 z-30 pt-3 pr-4 pb-3 pl-4">
<div className="max-w-7xl flex sticky top-0 z-40 mr-auto ml-auto items-center justify-between liquid-glass" style={{padding: `12px 20px`, minHeight: `56px`, borderRadius: `9999px`}}>
<a aria-label="Voltar para a Home" href="#top">
<h1 className="text-xl font-medium text-white tracking-tight" style={{fontFamily: `'Geist',sans-serif`}}>TrendlyAI</h1>
</a>
<div className="flex items-center gap-2">
<div className="relative">
<button className="relative w-11 h-11 flex items-center justify-center text-white rounded-full transition-all hover:bg-white/10 active:scale-95" id="bell-button">
<i className="w-5 h-5" data-lucide="bell"></i>
<span className="absolute top-2 right-2 flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--brand-pink)] opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--brand-pink)]"></span></span>
</button>
<div className="dropdown-menu liquid-glass-opaque p-2 w-[320px]" id="notifications-dropdown">
<div className="p-2 flex justify-between items-center"><h4 className="text-white font-semibold text-sm">Notificações</h4><a className="text-xs text-white/60 hover:text-white transition-colors" href="#">Marcar como lidas</a></div>
<div className="space-y-1"><a className="notification-item block p-3" href="#"><p className="text-sm text-white">Nova trilha de Storytelling disponível!</p><span className="text-xs text-white/60">há 5 min</span></a><a className="notification-item block p-3" href="#"><p className="text-sm text-white">Seu projeto "Roteiro para Reels" foi salvo.</p><span className="text-xs text-white/60">há 2 horas</span></a></div>
<div className="border-t border-white/10 mt-2 pt-2"><a className="block text-center text-xs text-white/70 hover:text-white transition-colors p-2" href="#">Ver todas as notificações</a></div>
</div>
</div>
<div className="relative">
<button className="w-11 h-11 rounded-full flex items-center justify-center transition-all ring-2 ring-transparent hover:ring-white/30 liquid-glass-pill" id="profile-button">
<div className="w-9 h-9 rounded-full overflow-hidden"><img alt="Avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&q=80" /></div>
</button>
<div className="dropdown-menu liquid-glass-opaque p-4 w-72" id="profile-dropdown">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0"><img alt="Avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&q=80" /></div>
<div><h5 className="font-semibold text-white">João da Silva</h5><p className="text-sm text-white/70 flex items-center gap-1.5">✨ <span>Explorador</span></p></div>
</div>
<a className="block text-center w-full px-4 py-2.5 mb-5 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 liquid-glass-pill" href="#">Meu Perfil</a>
<div className="mb-2">
<div className="flex justify-between items-center mb-1.5">
<h6 className="text-xs font-medium text-white/80">Créditos Diários da Salina</h6>
<div className="relative">
<button className="text-white/60 hover:text-white transition-colors" id="credits-info-btn"><i className="w-3.5 h-3.5" data-lucide="info"></i></button>
<div className="credit-tooltip liquid-glass p-3" id="credits-tooltip"><p className="text-xs text-white/90">Seus créditos são usados para conversas com a Salina e se renovam a cada 24h. Precisa de mais? <a className="font-semibold text-[var(--brand-mint)] hover:underline" href="#" id="upgrade-link">Torne-se um Maestro</a> para ter acesso ilimitado.</p></div>
</div>
</div>
<div>
<div className="credits-progress-bar w-full h-3"><div className="credits-progress-fill" style={{width: `60%`}}></div></div>
<p className="text-xs text-right text-white/60 mt-1">3/5</p>
</div>
</div>
<div className="space-y-1 border-t border-white/10 pt-3 mt-4">
<a className="menu-item flex items-center gap-3 p-2.5 text-white text-sm" href="#"><i className="w-4 h-4 text-white/70" data-lucide="gem"></i><span>Gerenciar Assinatura</span></a>
<a className="menu-item flex items-center gap-3 p-2.5 text-white text-sm" href="#"><i className="w-4 h-4 text-white/70" data-lucide="settings"></i><span>Configurações da Conta</span></a>
<a className="menu-item flex items-center gap-3 p-2.5 text-white text-sm" href="#"><i className="w-4 h-4 text-white/70" data-lucide="help-circle"></i><span>Central de Ajuda</span></a>
<div className="border-t border-white/10 my-2"></div>
<a className="menu-item flex items-center gap-3 p-2.5 text-red-400 hover:text-red-300 text-sm" href="#"><i className="w-4 h-4" data-lucide="log-out"></i><span>Sair da Conta</span></a>
</div>
</div>
</div>
</div>
</div>
</header>

<main className="w-full mx-auto pt-24">
<div className="max-w-5xl relative mr-auto ml-auto px-4" id="home-container">

<div className="min-h-[40vh] flex flex-col items-center justify-center mt-12 mb-6">
<div className="mb-6 text-center animate-entry">
<h2 aria-label="Boa tarde, Sofia" className="text-3xl font-semibold text-white tracking-tight" id="dynamic-greeting" style={{fontFamily: `'Geist',sans-serif`}}></h2>
</div>
<div className="w-full max-w-2xl mr-auto ml-auto animate-entry delay-1" id="hero-search">
<div className="flex flex-wrap justify-center gap-2 mb-4" id="icebreakers" style={{display: `none`}}>
<button className="hs-chip" style={{animationDelay: `0s`}}>Me dê ideias para um vídeo</button>
<button className="hs-chip" style={{animationDelay: `100ms`}}>Monte um roteiro para Reels</button>
<button className="hs-chip" style={{animationDelay: `200ms`}}>Crie um plano de estudos</button>
</div>
<div className="hs-outline" id="command-container">
<div className="flex gap-3 bg-white/10 border-white/14 border rounded-2xl p-4 backdrop-blur-md items-center">
<input className="w-full bg-transparent border-none text-white placeholder-white/60 focus:outline-none text-base" id="command-input" placeholder="O que vamos criar hoje?" type="text" />
<button className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 border border-white/14 hover:bg-white/15 liquid-glass-pill" type="submit">
<i className="w-4 h-4 text-white" data-lucide="send"></i>
</button>
</div>
</div>
</div>
</div>
<div className="mt-10 mb-32" id="main-content">

<section className="animate-entry delay-2 mb-20" id="popular">
<div className="flex justify-between items-center mb-6">
<h2 className="text-xl font-semibold tracking-tight" style={{fontFamily: `'Geist',sans-serif`}}>Trilhas Populares</h2>
<div className="flex items-center gap-4">
<div className="text-sm font-medium text-white/60 hidden sm:block" id="popular-indicators"></div>
<a className="text-sm font-medium text-white/80 hover:text-white transition-colors" href="#">Ver todos</a>
</div>
</div>
<div className="relative">
<button className="carousel-nav-btn absolute top-1/2 -left-6 transform -translate-y-1/2 w-12 h-12 rounded-full liquid-glass-pill hidden lg:flex items-center justify-center" id="popular-prev-btn">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
</button>
<button className="carousel-nav-btn absolute top-1/2 -right-6 transform -translate-y-1/2 w-12 h-12 rounded-full liquid-glass-pill hidden lg:flex items-center justify-center" id="popular-next-btn">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</button>
<div className="carousel-container overflow-x-auto hide-scrollbar -mx-2 px-2" id="popular-container">
<ol className="carousel-track flex gap-6" id="popular-track">
<li className="carousel-item w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"><div className="interactive-card rounded-2xl overflow-hidden shadow-[0px_8px_24px_rgba(0,0,0,0.28)] relative h-64 card-glow"><img alt="Marketing digital" className="absolute w-full h-full object-cover" src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&q=80" /><div className="card-overlay absolute inset-0 flex flex-col justify-end"><div className="p-5"><div className="flex items-center gap-2 mb-3"><span className="liquid-glass-tag">Marketing</span><span className="liquid-glass-tag">Iniciante</span></div><h3 className="font-semibold text-white mb-3 text-lg">Marketing Digital para Iniciantes</h3></div></div></div></li>
<li className="carousel-item w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"><div className="interactive-card rounded-2xl overflow-hidden shadow-[0px_8px_24px_rgba(0,0,0,0.28)] relative h-64 card-glow"><img alt="Analytics" className="absolute w-full h-full object-cover" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" /><div className="card-overlay absolute inset-0 flex flex-col justify-end"><div className="p-5"><div className="flex items-center gap-2 mb-3"><span className="liquid-glass-tag">Dados</span><span className="liquid-glass-tag">Avançado</span></div><h3 className="font-semibold text-white mb-3 text-lg">Análise de Dados com Google Analytics</h3></div></div></div></li>
<li className="carousel-item w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"><div className="interactive-card rounded-2xl overflow-hidden shadow-[0px_8px_24px_rgba(0,0,0,0.28)] relative h-64 card-glow"><img alt="Social Media" className="absolute w-full h-full object-cover" src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80" /><div className="card-overlay absolute inset-0 flex flex-col justify-end"><div className="p-5"><div className="flex items-center gap-2 mb-3"><span className="liquid-glass-tag">Social</span><span className="liquid-glass-tag">Iniciante</span></div><h3 className="font-semibold text-white mb-3 text-lg">Gestão de Redes Sociais</h3></div></div></div></li>
<li className="carousel-item w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"><div className="interactive-card rounded-2xl overflow-hidden shadow-[0px_8px_24px_rgba(0,0,0,0.28)] relative h-64 card-glow"><img alt="Strategy" className="absolute w-full h-full object-cover" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" /><div className="card-overlay absolute inset-0 flex flex-col justify-end"><div className="p-5"><div className="flex items-center gap-2 mb-3"><span className="liquid-glass-tag">Estratégia</span><span className="liquid-glass-tag">Intermediário</span></div><h3 className="font-semibold text-white mb-3 text-lg">Planejamento Estratégico Digital</h3></div></div></div></li>
</ol>
</div>
</div>
</section>

<section className="animate-entry delay-3 mb-20" id="recommended">
<div className="flex justify-between items-center mb-6">
<h2 className="text-xl font-semibold tracking-tight" style={{fontFamily: `'Geist',sans-serif`}}>Trilhas recomendadas para você</h2>
<div className="flex items-center gap-4">
<div className="text-sm font-medium text-white/60 hidden sm:block" id="recommended-indicators"></div>
<a className="text-sm font-medium text-white/80 hover:text-white transition-colors" href="#">Ver todos</a>
</div>
</div>
<div className="relative">
<button className="carousel-nav-btn absolute top-1/2 -left-6 transform -translate-y-1/2 w-12 h-12 rounded-full liquid-glass-pill hidden lg:flex items-center justify-center" id="recommended-prev-btn">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
</button>
<button className="carousel-nav-btn absolute top-1/2 -right-6 transform -translate-y-1/2 w-12 h-12 rounded-full liquid-glass-pill hidden lg:flex items-center justify-center" id="recommended-next-btn">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</button>
<div className="carousel-container overflow-x-auto hide-scrollbar -mx-2 px-2" id="recommended-container">
<ol className="carousel-track flex gap-6" id="recommended-track">
<li className="carousel-item w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"><div className="interactive-card rounded-2xl overflow-hidden shadow-[0px_8px_24px_rgba(0,0,0,0.28)] relative h-64 card-glow"><img alt="Vendas Online" className="absolute w-full h-full object-cover" src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&q=80" /><div className="card-overlay absolute inset-0 flex flex-col justify-end"><div className="p-5"><div className="flex items-center gap-2 mb-3"><span className="liquid-glass-tag">Vendas</span><span className="liquid-glass-tag">Intermediário</span></div><h3 className="font-semibold text-white mb-3 text-lg">Funil de Vendas para E-commerce</h3></div></div></div></li>
<li className="carousel-item w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"><div className="interactive-card rounded-2xl overflow-hidden shadow-[0px_8px_24px_rgba(0,0,0,0.28)] relative h-64 card-glow"><img alt="Email Marketing" className="absolute w-full h-full object-cover" src="https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&q=80" /><div className="card-overlay absolute inset-0 flex flex-col justify-end"><div className="p-5"><div className="flex items-center gap-2 mb-3"><span className="liquid-glass-tag">Email</span><span className="liquid-glass-tag">Iniciante</span></div><h3 className="font-semibold text-white mb-3 text-lg">Email Marketing Efetivo</h3></div></div></div></li>
<li className="carousel-item w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"><div className="interactive-card rounded-2xl overflow-hidden shadow-[0px_8px_24px_rgba(0,0,0,0.28)] relative h-64 card-glow"><img alt="SEO" className="absolute w-full h-full object-cover" src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80" /><div className="card-overlay absolute inset-0 flex flex-col justify-end"><div className="p-5"><div className="flex items-center gap-2 mb-3"><span className="liquid-glass-tag">SEO</span><span className="liquid-glass-tag">Intermediário</span></div><h3 className="font-semibold text-white mb-3 text-lg">SEO para Negócios Locais</h3></div></div></div></li>
</ol>
</div>
</div>
</section>

<section className="animate-entry delay-4 mb-20" id="tools">
<div className="flex justify-between items-center mb-6">
<h2 className="text-xl font-semibold tracking-tight" style={{fontFamily: `'Geist',sans-serif`}}>Ferramentas recomendadas pra você</h2>
<div className="flex items-center gap-4">
<div className="text-sm font-medium text-white/60 hidden sm:block" id="tools-indicators"></div>
<a className="text-sm font-medium text-white/80 hover:text-white transition-colors" href="#">Ver todos</a>
</div>
</div>
<div className="relative">
<button className="carousel-nav-btn absolute top-1/2 -left-6 transform -translate-y-1/2 w-12 h-12 rounded-full liquid-glass-pill hidden lg:flex items-center justify-center" id="tools-prev-btn">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
</button>
<button className="carousel-nav-btn absolute top-1/2 -right-6 transform -translate-y-1/2 w-12 h-12 rounded-full liquid-glass-pill hidden lg:flex items-center justify-center" id="tools-next-btn">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</button>
<div className="carousel-container overflow-x-auto hide-scrollbar -mx-2 px-2" id="tools-container">
<ol className="carousel-track flex gap-6" id="tools-track">
<li className="carousel-item w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
<div className="prompt-card relative card-glow" data-prompt-id="prompt-roteiro-viral-001">
<div className="border-glow"><div></div></div>
<div className="relative z-10 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-4 flex-grow">
<div className="flex-1">
<h3 className="text-lg font-semibold text-white mb-2 leading-snug" style={{fontFamily: `'Geist',sans-serif`}}>Crie um Roteiro Viral em 30 Segundos</h3>
<p className="text-sm text-white/70 line-clamp-2 leading-relaxed">Transforme qualquer ideia em uma estrutura de roteiro de 3 atos para engajamento máximo.</p>
</div>
<div className="ml-4 flex-shrink-0">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--brand-pink)] to-[var(--brand-mint)] flex items-center justify-center"><i className="w-5 h-5 text-white" data-lucide="zap"></i></div>
</div>
</div>
<div className="flex flex-wrap gap-2 mb-4"><span className="liquid-glass-tag">roteiro</span><span className="liquid-glass-tag">storytelling</span></div>
<div className="flex items-center justify-between text-xs text-white/50 mt-auto">
<span>Clique para abrir</span>
<div className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="arrow-right"></i></div>
</div>
</div>
</div>
</li>
<li className="carousel-item w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
<div className="prompt-card relative card-glow" data-prompt-id="prompt-titulos-seo-002">
<div className="border-glow"><div></div></div>
<div className="relative z-10 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-4 flex-grow">
<div className="flex-1">
<h3 className="text-lg font-semibold text-white mb-2 leading-snug" style={{fontFamily: `'Geist',sans-serif`}}>Crie Títulos Otimizados para SEO</h3>
<p className="text-sm text-white/70 line-clamp-2 leading-relaxed">Use este prompt para gerar títulos magnéticos e otimizados para mecanismos de busca.</p>
</div>
<div className="ml-4 flex-shrink-0">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--brand-pink)] to-[var(--brand-mint)] flex items-center justify-center"><i className="w-5 h-5 text-white" data-lucide="search"></i></div>
</div>
</div>
<div className="flex flex-wrap gap-2 mb-4"><span className="liquid-glass-tag">seo</span><span className="liquid-glass-tag">títulos</span></div>
<div className="flex items-center justify-between text-xs text-white/50 mt-auto">
<span>Clique para abrir</span>
<div className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="arrow-right"></i></div>
</div>
</div>
</div>
</li>
<li className="carousel-item w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
<div className="prompt-card relative card-glow" data-prompt-id="prompt-copy-vendas-003">
<div className="border-glow"><div></div></div>
<div className="relative z-10 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-4 flex-grow">
<div className="flex-1">
<h3 className="text-lg font-semibold text-white mb-2 leading-snug" style={{fontFamily: `'Geist',sans-serif`}}>Copy de Vendas Irresistível</h3>
<p className="text-sm text-white/70 line-clamp-2 leading-relaxed">Crie textos persuasivos que convertem usando gatilhos mentais comprovados.</p>
</div>
<div className="ml-4 flex-shrink-0">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--brand-pink)] to-[var(--brand-mint)] flex items-center justify-center"><i className="w-5 h-5 text-white" data-lucide="target"></i></div>
</div>
</div>
<div className="flex flex-wrap gap-2 mb-4"><span className="liquid-glass-tag">copywriting</span><span className="liquid-glass-tag">vendas</span></div>
<div className="flex items-center justify-between text-xs text-white/50 mt-auto">
<span>Clique para abrir</span>
<div className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="arrow-right"></i></div>
</div>
</div>
</div>
</li>
</ol>
</div>
</div>
</section>
</div>
</div>
</main>

<div className="fixed inset-0 z-50 flex items-end opacity-0 pointer-events-none" id="invitation-container"><div className="absolute inset-0 bg-black/30 opacity-0" id="invitation-backdrop"></div><div className="liquid-glass relative w-full h-[85vh] md:h-[70vh] rounded-t-2xl flex flex-col transform translate-y-full" id="invitation-sheet"><div className="absolute top-0 left-0 right-0 flex justify-center pt-3 md:hidden"><div className="grabber-bar"></div></div><button className="hidden md:flex absolute top-4 right-4 w-10 h-10 items-center justify-center liquid-glass-pill !rounded-full z-20" id="close-invitation-btn"><i className="w-5 h-5" data-lucide="x"></i></button><div className="flex-grow pt-10 p-6 md:p-10 overflow-y-auto flex flex-col justify-start md:justify-center hide-scrollbar"><div className="text-center mb-8 md:mb-10 relative z-10"><h2 className="text-3xl md:text-5xl font-extrabold tracking-tight invitation-anim" style={{fontFamily: `'Geist', sans-serif`}}>Torne-se o Maestro.</h2><p className="text-white/70 mt-3 max-w-2xl mx-auto invitation-anim" style={{animationDelay: `150ms`}}>Acesso ilimitado a todas as estratégias, instrumentos e ao poder de orquestração do nosso Estúdio.</p></div><div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full mx-auto mb-8 md:mb-10 relative z-10"><div className="plan-card recommended invitation-anim" id="plan-anual" style={{animationDelay: `300ms`}}><div className="card-glow"></div><div className="relative z-10"><div className="flex justify-between items-center mb-4"><h3 className="font-semibold text-lg text-white">Plano Anual</h3><span className="recommendation-tag whitespace-nowrap">✨ Nossa Recomendação</span></div><div className="mb-6"><span className="text-4xl md:text-5xl font-bold text-white tracking-tight">R$149</span><span className="text-white/70">/mês</span><p className="text-xs font-normal text-white/60 mt-2">Cobrado R$1.788 anualmente. Uma economia de 50%.</p></div><button className="cta-button cta-primary cta-light-flow">Entrar para o Estúdio (Anual)</button></div></div><div className="plan-card invitation-anim" id="plan-trimestral" style={{animationDelay: `450ms`}}><div className="relative z-10"><h3 className="font-semibold text-lg text-white mb-4">Plano Trimestral</h3><div className="mb-6"><span className="text-4xl md:text-5xl font-bold text-white tracking-tight">R$299</span><span className="text-white/70">/mês</span><p className="text-xs font-normal text-white/60 mt-2">Cobrado R$897 trimestralmente.</p></div><button className="cta-button cta-secondary">Continuar com o Trimestral</button></div></div></div><div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-white/70 invitation-anim relative z-10" style={{animationDelay: `600ms`}}><div className="flex items-center gap-2"><i className="w-4 h-4 text-[var(--brand-mint)]" data-lucide="shield-check"></i><span>Garantia de 21 Dias</span></div><div className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="lock"></i><span>Compra 100% Segura</span></div><div className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="refresh-cw"></i><span>Cancele a Qualquer Momento</span></div></div></div></div></div>
<div className="prompt-modal-backdrop hidden opacity-0" id="prompt-modal-backdrop"></div>
<div className="prompt-modal-container" id="prompt-modal-container"></div>
<div id="toast-notification">Prompt copiado!</div>


    </>
  );
}
