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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- TRANSLATIONS DICTIONARY ---
        const translations = {
            pt: {
                meta_title: "LusiTech — Automações e Agentes de AI para Empresas Portuguesas",
                meta_desc: "Implementamos automações e agentes de AI que eliminam tarefas repetitivas, qualificam leads e escalam operações. Auditoria gratuita em 30 minutos.",
                nav_services: "Serviços", nav_process: "Processo", nav_results: "Resultados", nav_faq: "FAQ", nav_contact: "Contacto", nav_cta: "Falar Connosco",
                hero_eyebrow: "Automações & Agentes de AI",
                hero_h1_1: "O teu negócio a trabalhar", hero_h1_2: "enquanto tu dormes.",
                hero_sub: "Implementamos automações e agentes de AI que eliminam tarefas repetitivas, qualificam leads e escalam operações — sem contratar mais ninguém.",
                hero_cta_primary: "Agenda uma Auditoria", hero_cta_secondary: "Ver como funciona",
                hero_ui_title: "Tarefas para AI — Aprovadas e em execução",
                hero_ui_task1_title: "278 leads por reativar", hero_ui_task1_desc: "Emails redigidos e enviados",
                hero_ui_task2_title: "Executar limpeza no CRM",
                hero_ui_task3_title: "Proposta enviada", hero_ui_task3_desc: "A aguardar resposta",
                hero_social_proof: "Já ajudámos empresas portuguesas a recuperar tempo e receita com AI",
                prob_eyebrow: "O Custo do Status Quo", prob_h2: "Cada dia sem AI é um dia a trabalhar para a concorrência.",
                prob_1_bad: "A tua equipa perde horas em tarefas que uma máquina faz em segundos.", prob_1_good: "Automações de AI executam-nas 24/7, sem erros, sem baixas, sem queixas.",
                prob_2_bad: "Leads entram e ficam dias sem resposta — quando respondes, já compraram noutro sítio.", prob_2_good: "Agentes de AI respondem em segundos, qualificam e agendam reuniões automaticamente.",
                prob_3_bad: "Não sabes o que a tua equipa faz, quanto custa nem o que traz em retorno.", prob_3_good: "Dashboards e relatórios automáticos dão-te visibilidade total em tempo real.",
                prob_4_bad: "Contratar mais pessoas aumenta o custo mas não resolve o problema raiz.", prob_4_good: "AI escala as tuas operações sem adicionar headcount — só resultados.",
                serv_eyebrow: "Serviços", serv_h2: "Soluções de AI à medida do teu negócio.", serv_sub: "Não vendemos software. Implementamos sistemas que resolvem problemas reais.",
                serv_1_title: "Automação de Processos", serv_1_desc: "Identificamos e automatizamos os fluxos que mais consomem tempo da tua equipa — facturação, propostas, relatórios, follow-ups e muito mais.",
                serv_2_title: "Agentes de AI", serv_2_desc: "Agentes inteligentes que atendem clientes, qualificam leads e agendam reuniões — por chamada, WhatsApp, email ou chat, a qualquer hora do dia.",
                serv_3_title: "Integração de Sistemas", serv_3_desc: "Ligamos o teu CRM, ERP, email e ferramentas de gestão numa única cadeia automatizada. Sem copy-paste, sem erros humanos, sem duplicação.",
                serv_4_title: "Relatórios e Dashboards", serv_4_desc: "Visibilidade total das tuas operações, leads e receita em tempo real. Toma decisões com dados, não com instinto.",
                proc_eyebrow: "Como Funciona", proc_h2: "Simples, rápido e sem fricção da tua parte.",
                proc_1_title: "Passo 1 — Auditoria Gratuita", proc_1_desc: "Começamos com uma sessão de 30 minutos para entender o teu negócio, identificar os maiores gargalos e calcular o impacto real de os resolver com AI.",
                proc_2_title: "Passo 2 — Proposta Personalizada", proc_2_desc: "Em 48h recebes um plano detalhado com as soluções específicas para o teu caso, timeline de implementação e ROI estimado.",
                proc_3_title: "Passo 3 — Implementação", proc_3_desc: "A nossa equipa trata de tudo — configuração, integração e testes. Tu validas, nós executamos. Sem complexidade técnica da tua parte.",
                proc_4_title: "Passo 4 — Optimização Contínua", proc_4_desc: "Após o go-live, monitorizamos, ajustamos e optimizamos continuamente para garantir que o sistema melhora com o tempo.",
                res_eyebrow: "Resultados Reais", res_h2: "Não leves a nossa palavra — vê os números.",
                res_met_1_t: "de leads qualificadas", res_met_1_d: "em média nos primeiros 90 dias",
                res_met_2_t: "por semana recuperadas", res_met_2_d: "por colaborador em tarefas automatizadas",
                res_met_3_t: "dias de implementação", res_met_3_d: "do diagnóstico à primeira automação em produção",
                test_1_q: "\"Atuamos muito no setor imobiliário e precisávamos de maior suporte para as nossas leads inbound. O agente de AI que a LusiTech implementou tem sido excepcional — +15% de aumento de reuniões agendadas logo no primeiro mês.\"",
                test_2_q: "\"Precisávamos de automatizar o envio de propostas e os fluxos de email. A parceria com a LusiTech removeu muita ambiguidade das nossas operações. Serviço muito profissional. Recomendo.\"",
                test_3_q: "\"A nossa equipa comercial passou a focar exclusivamente em fechar negócios. O resto — qualificação, follow-up, agendamento — ficou todo do lado da AI.\"", test_3_r: "Directora Comercial",
                test_4_q: "\"Tínhamos leads a entrar por vários canais sem nenhum processo definido. Agora tudo é capturado, qualificado e encaminhado automaticamente. É outra empresa.\"",
                ben_eyebrow: "Porquê a LusiTech", ben_h2: "O que ganhas quando trabalhas connosco.",
                ben_1_t: "Mais Produtividade", ben_1_d: "A tua equipa foca no que gera valor — nós tratamos do resto.",
                ben_2_t: "Melhor Experiência do Cliente", ben_2_d: "Respostas imediatas e consistentes em todos os canais, 24 horas por dia.",
                ben_3_t: "Cobertura 24/7", ben_3_d: "Os teus agentes de AI nunca descansam, não têm baixas nem dias maus.",
                ben_4_t: "Redução de Custos", ben_4_d: "Menos trabalho manual, menos erros, menos custos operacionais fixos.",
                ben_5_t: "Decisões Baseadas em Dados", ben_5_d: "Relatórios automáticos com os KPIs que realmente importam para o teu negócio.",
                ben_6_t: "Escalabilidade Sem Limite", ben_6_d: "O volume pode triplicar — os teus sistemas acompanham sem fricção.",
                faq_eyebrow: "FAQ", faq_h2: "Tens perguntas. Nós temos respostas.",
                faq_1_q: "Como é que a AI pode ajudar o meu negócio em específico?", faq_1_a: "Começamos sempre por uma auditoria gratuita onde analisamos os teus processos, identificamos os maiores gargalos e calculamos o impacto real de os automatizar. Só avançamos se o ROI for claro.",
                faq_2_q: "Preciso de saber programar ou ter equipa técnica?", faq_2_a: "Não. Tratamos de tudo — configuração, integração, testes e manutenção. A tua equipa só precisa de validar o que foi construído.",
                faq_3_q: "Quanto tempo demora a implementação?", faq_3_a: "Depende da complexidade, mas a maioria dos projectos está operacional entre 10 a 21 dias após o início do processo.",
                faq_4_q: "Qual é o investimento necessário?", faq_4_a: "Cada solução é orçamentada à medida após a auditoria gratuita. O valor reflecte o impacto esperado — e na maioria dos casos o ROI é atingido nos primeiros 60 a 90 dias.",
                faq_5_q: "Os agentes de AI substituem a minha equipa?", faq_5_a: "Não. Libertam a tua equipa de tarefas repetitivas para que possam focar no que realmente cria valor — relações, estratégia e crescimento.",
                faq_6_q: "E se o sistema não funcionar como esperado?", faq_6_a: "Todos os nossos projectos incluem um período de validação e ajuste após o go-live. Só fechamos o projecto quando os resultados estão confirmados.",
                faq_7_q: "Os meus dados estão seguros?", faq_7_a: "Sim. Trabalhamos com ferramentas e protocolos que cumprem o RGPD. Os teus dados nunca são partilhados com terceiros.",
                faq_8_q: "Posso começar com uma automação pequena e escalar depois?", faq_8_a: "Absolutamente. Muitos clientes começam com um processo específico e expandem à medida que vêem resultados. A arquitectura é sempre construída para escalar.",
                roi_eyebrow: "Calcula o teu retorno", roi_h2: "Quanto é que a ineficiência te está a custar por mês?",
                roi_s1: "Horas perdidas em tarefas repetitivas por semana", roi_s2: "Leads sem resposta por mês", roi_s3: "Valor médio de um cliente (€)",
                roi_out_1: "Estás a perder aproximadamente", roi_out_1_sub: "por mês", roi_out_2: "Com a LusiTech, poderias recuperar", roi_out_2_sub: "nos próximos 90 dias", roi_cta: "Quero recuperar esse valor",
                cont_eyebrow: "Vamos Falar", cont_h2: "Agenda a tua auditoria gratuita.", cont_sub: "30 minutos. Sem compromisso. Com um plano concreto no final.",
                form_name: "Nome *", form_phone: "Telefone *", form_company: "Empresa *", form_text: "Descreve brevemente o teu maior problema operacional...",
                form_ind_placeholder: "Sector *", form_ind_1: "Saúde", form_ind_2: "Imobiliário", form_ind_3: "Retalho", form_ind_4: "Serviços", form_ind_5: "Tecnologia", form_ind_6: "Outro",
                form_cha_placeholder: "Principal desafio *", form_cha_1: "Automatizar processos internos", form_cha_2: "Qualificar e responder a leads", form_cha_3: "Integrar ferramentas e sistemas", form_cha_4: "Obter visibilidade e relatórios",
                form_btn: "Submeter Pedido de Auditoria", form_success: "Pedido recebido! Entraremos em contacto em menos de 24 horas.",
                cont_info_res: "Resposta garantida em menos de 24 horas", cont_or: "Ou agenda directamente:", cont_btn: "Agendar Auditoria",
                foot_tag: "Inteligência que trabalha. Resultados que ficam.", foot_priv: "Política de Privacidade", foot_term: "Termos e Condições", foot_copy: "© 2025 LusiTech · Portugal · Todos os direitos reservados"
            },
            en: {
                meta_title: "LusiTech — AI Automations & Agents for Portuguese Businesses",
                meta_desc: "We deploy AI automations and agents that eliminate repetitive tasks, qualify leads and scale operations. Free 30-min audit.",
                nav_services: "Services", nav_process: "Process", nav_results: "Results", nav_faq: "FAQ", nav_contact: "Contact", nav_cta: "Talk to us",
                hero_eyebrow: "AI Automations & Agents",
                hero_h1_1: "Your business running", hero_h1_2: "while you sleep.",
                hero_sub: "We deploy AI automations and agents that eliminate repetitive tasks, qualify leads and scale operations — without hiring anyone new.",
                hero_cta_primary: "Book an Audit", hero_cta_secondary: "See how it works",
                hero_ui_title: "Tasks for AI — Approved and running",
                hero_ui_task1_title: "278 leads to reactivate", hero_ui_task1_desc: "Emails drafted and sent",
                hero_ui_task2_title: "Run CRM cleanup",
                hero_ui_task3_title: "Proposal sent", hero_ui_task3_desc: "Awaiting response",
                hero_social_proof: "Helping Portuguese businesses save time and grow revenue with AI",
                prob_eyebrow: "The Cost of Doing Nothing", prob_h2: "Every day without AI is a day working for your competitors.",
                prob_1_bad: "Your team wastes hours on tasks a machine completes in seconds.", prob_1_good: "AI automations run them 24/7 — no errors, no sick days, no complaints.",
                prob_2_bad: "Leads come in and wait days for a reply — by then they've bought elsewhere.", prob_2_good: "AI agents respond in seconds, qualify leads and book meetings automatically.",
                prob_3_bad: "You don't know what your team does, what it costs or what it returns.", prob_3_good: "Automated dashboards give you full real-time visibility.",
                prob_4_bad: "Hiring more people raises costs but doesn't fix the root problem.", prob_4_good: "AI scales your operations without adding headcount — just results.",
                serv_eyebrow: "Services", serv_h2: "AI solutions tailored to your business.", serv_sub: "We don't sell software. We implement systems that solve real problems.",
                serv_1_title: "Process Automation", serv_1_desc: "We identify and automate the workflows draining your team's time — invoicing, proposals, reports, follow-ups and much more.",
                serv_2_title: "AI Agents", serv_2_desc: "Intelligent agents that handle clients, qualify leads and book meetings — via call, WhatsApp, email or chat, around the clock.",
                serv_3_title: "Systems Integration", serv_3_desc: "We connect your CRM, ERP, email and management tools into one automated chain. No copy-paste, no human errors, no duplication.",
                serv_4_title: "Reporting & Dashboards", serv_4_desc: "Full visibility over your operations, leads and revenue in real time. Make decisions with data, not gut feeling.",
                proc_eyebrow: "How it Works", proc_h2: "Simple, fast and frictionless on your end.",
                proc_1_title: "Step 1 — Free Audit", proc_1_desc: "We start with a 30-minute session to understand your business, identify the biggest bottlenecks and calculate the real impact of solving them with AI.",
                proc_2_title: "Step 2 — Custom Proposal", proc_2_desc: "Within 48 hours you receive a detailed plan with the specific solutions for your case, implementation timeline and estimated ROI.",
                proc_3_title: "Step 3 — Implementation", proc_3_desc: "Our team handles everything — setup, integration and testing. You validate, we execute. No technical complexity on your end.",
                proc_4_title: "Step 4 — Continuous Optimisation", proc_4_desc: "After go-live, we monitor, adjust and continuously optimise to ensure the system improves over time.",
                res_eyebrow: "Real Results", res_h2: "Don't take our word for it — see the numbers.",
                res_met_1_t: "qualified leads", res_met_1_d: "on average in the first 90 days",
                res_met_2_t: "hrs/week recovered", res_met_2_d: "per employee from automated tasks",
                res_met_3_t: "days to go live", res_met_3_d: "from diagnosis to first automation live",
                test_1_q: "\"We operate heavily in real estate and needed better support for our inbound leads. The AI agent LusiTech deployed has been exceptional — +15% more meetings booked in the very first month.\"",
                test_2_q: "\"We needed to automate proposal delivery and email workflows. Partnering with LusiTech removed a lot of friction from our operations. Very professional service. Highly recommended.\"",
                test_3_q: "\"Our sales team now focuses exclusively on closing deals. Everything else — qualification, follow-up, scheduling — is fully handled by AI.\"", test_3_r: "Sales Director",
                test_4_q: "\"We had leads coming in through multiple channels with no defined process. Now everything is captured, qualified and routed automatically. It's a different company.\"",
                ben_eyebrow: "Why LusiTech", ben_h2: "What you gain when you work with us.",
                ben_1_t: "More Productivity", ben_1_d: "Your team focuses on what generates value — we handle the rest.",
                ben_2_t: "Better Client Experience", ben_2_d: "Immediate, consistent responses across all channels, 24 hours a day.",
                ben_3_t: "24/7 Coverage", ben_3_d: "Your AI agents never rest, never call in sick, never have bad days.",
                ben_4_t: "Cost Reduction", ben_4_d: "Less manual work, fewer errors, lower fixed operational costs.",
                ben_5_t: "Data-Driven Decisions", ben_5_d: "Automatic reports with the KPIs that actually matter for your business.",
                ben_6_t: "Limitless Scalability", ben_6_d: "Volume can triple — your systems keep up without friction.",
                faq_eyebrow: "FAQ", faq_h2: "You have questions. We have answers.",
                faq_1_q: "How can AI actually help my specific business?", faq_1_a: "We always start with a free audit where we analyse your processes, identify the biggest bottlenecks and calculate the real impact of automating them. We only proceed if the ROI is clear.",
                faq_2_q: "Do I need to know how to code or have a technical team?", faq_2_a: "Not at all. We handle everything — setup, integration, testing and maintenance. Your team only needs to validate what was built.",
                faq_3_q: "How long does implementation take?", faq_3_a: "It depends on complexity, but most projects are live within 10 to 21 days from the start of the process.",
                faq_4_q: "What is the investment required?", faq_4_a: "Each solution is priced after the free audit. The cost reflects the expected impact — and in most cases ROI is achieved within the first 60 to 90 days.",
                faq_5_q: "Do AI agents replace my team?", faq_5_a: "No. They free your team from repetitive tasks so they can focus on what actually creates value — relationships, strategy and growth.",
                faq_6_q: "What if the system doesn't work as expected?", faq_6_a: "All our projects include a validation and adjustment period after go-live. We only close the project when results are confirmed.",
                faq_7_q: "Is my data safe?", faq_7_a: "Yes. We work with tools and protocols that comply with GDPR. Your data is never shared with third parties.",
                faq_8_q: "Can I start with a small automation and scale later?", faq_8_a: "Absolutely. Many clients start with one specific process and expand as they see results. The architecture is always built to scale.",
                roi_eyebrow: "Calculate your return", roi_h2: "How much is inefficiency costing you every month?",
                roi_s1: "Hours lost to repetitive tasks per week", roi_s2: "Leads without a response per month", roi_s3: "Average client value (€)",
                roi_out_1: "You're losing approximately", roi_out_1_sub: "per month", roi_out_2: "With LusiTech, you could recover", roi_out_2_sub: "in the next 90 days", roi_cta: "I want to recover that value",
                cont_eyebrow: "Let's Talk", cont_h2: "Book your free audit.", cont_sub: "30 minutes. No commitment. With a concrete plan at the end.",
                form_name: "Full Name *", form_phone: "Phone *", form_company: "Company *", form_text: "Briefly describe your biggest operational challenge...",
                form_ind_placeholder: "Industry *", form_ind_1: "Health", form_ind_2: "Real Estate", form_ind_3: "Retail", form_ind_4: "Services", form_ind_5: "Technology", form_ind_6: "Other",
                form_cha_placeholder: "Main challenge *", form_cha_1: "Automate internal processes", form_cha_2: "Qualify and respond to leads", form_cha_3: "Integrate tools and systems", form_cha_4: "Get visibility and reporting",
                form_btn: "Submit Audit Request", form_success: "Request received! We'll be in touch within 24 hours.",
                cont_info_res: "Response guaranteed within 24 hours", cont_or: "Or book directly:", cont_btn: "Book Audit",
                foot_tag: "Intelligence that works. Results that last.", foot_priv: "Privacy Policy", foot_term: "Terms and Conditions", foot_copy: "© 2025 LusiTech · Portugal · All rights reserved"
            }
        };

        // --- I18N LOGIC ---
        function setLanguage(lang) {
            localStorage.setItem('lang', lang);
            document.documentElement.lang = lang;
            
            // Toggle Button States
            document.getElementById('btn-pt').className = lang === 'pt' ? 'text-[#F0F0F0] transition-colors' : 'text-[#555555] hover:text-[#F0F0F0] transition-colors';
            document.getElementById('btn-en').className = lang === 'en' ? 'text-[#F0F0F0] transition-colors' : 'text-[#555555] hover:text-[#F0F0F0] transition-colors';

            // Swap Text
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[lang][key]) {
                    el.innerHTML = translations[lang][key]; // innerHTML used to preserve spans
                }
            });

            // Swap Placeholders
            document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                const key = el.getAttribute('data-i18n-placeholder');
                if (translations[lang][key]) el.placeholder = translations[lang][key];
            });

            // Re-render Calculator currency symbol based on lang if needed (keeping € for both as requested)
            calculateROI();
        }

        // --- MOBILE MENU ---
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        let menuOpen = false;

        function toggleMobileMenu() {
            menuOpen = !menuOpen;
            if (menuOpen) {
                mobileMenu.classList.remove('hidden');
                setTimeout(() => mobileMenu.classList.remove('opacity-0'), 10);
                document.body.style.overflow = 'hidden';
                mobileMenuBtn.innerHTML = '<iconify-icon icon="solar:close-circle-linear" width="24" stroke-width="1.5"></iconify-icon>';
            } else {
                mobileMenu.classList.add('opacity-0');
                setTimeout(() => mobileMenu.classList.add('hidden'), 300);
                document.body.style.overflow = '';
                mobileMenuBtn.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" width="24" stroke-width="1.5"></iconify-icon>';
            }
        }
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
        document.querySelectorAll('.mobile-link').forEach(link => link.addEventListener('click', toggleMobileMenu));

        // --- SCROLL ANIMATIONS (Intersection Observer) ---
        const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    
                    // Number counter animation trigger
                    const counters = entry.target.querySelectorAll('[data-counter]');
                    counters.forEach(counter => {
                        if (!counter.classList.contains('counted')) {
                            animateValue(counter, 0, parseInt(counter.getAttribute('data-counter')), 2000);
                            counter.classList.add('counted');
                        }
                    });

                    obs.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 60) {
                nav.classList.add('backdrop-blur-md', 'bg-[#0a0a0a]/80', 'border-[#222222]');
                nav.classList.remove('border-transparent');
            } else {
                nav.classList.remove('backdrop-blur-md', 'bg-[#0a0a0a]/80', 'border-[#222222]');
                nav.classList.add('border-transparent');
            }
        });

        // --- NUMBER ANIMATION ---
        function animateValue(obj, start, end, duration) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                // easeOutQuart
                const easeProgress = 1 - Math.pow(1 - progress, 4); 
                obj.innerHTML = Math.floor(easeProgress * (end - start) + start);
                if (progress < 1) window.requestAnimationFrame(step);
            };
            window.requestAnimationFrame(step);
        }

        // --- FAQ ACCORDION ---
        function toggleAccordion(element) {
            const isActive = element.classList.contains('active');
            document.querySelectorAll('.accordion-item').forEach(el => el.classList.remove('active'));
            if (!isActive) element.classList.add('active');
        }

        // --- ROI CALCULATOR ---
        const sliderHours = document.getElementById('slider-hours');
        const sliderLeads = document.getElementById('slider-leads');
        const sliderValue = document.getElementById('slider-value');
        
        function formatNumber(num) {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }

        function calculateROI() {
            const hours = parseInt(sliderHours.value);
            const leads = parseInt(sliderLeads.value);
            const value = parseInt(sliderValue.value);

            document.getElementById('val-hours').innerText = hours;
            document.getElementById('val-leads').innerText = leads;
            document.getElementById('val-value').innerText = formatNumber(value);

            const conversionRate = 0.15;
            const hourlyRate = 25;
            const weeksPerMonth = 4.3;

            const monthlyLoss = (hours * hourlyRate * weeksPerMonth) + (leads * conversionRate * value);
            const recovery = monthlyLoss * 3;

            document.getElementById('out-loss').innerText = formatNumber(Math.round(monthlyLoss));
            document.getElementById('out-recover').innerText = formatNumber(Math.round(recovery));
        }

        [sliderHours, sliderLeads, sliderValue].forEach(el => el.addEventListener('input', calculateROI));

        // --- CAROUSEL AUTO-SCROLL ---
        const carousel = document.getElementById('carousel');
        let scrollInterval;
        
        function startCarousel() {
            scrollInterval = setInterval(() => {
                if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 10) {
                    carousel.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    carousel.scrollBy({ left: 300, behavior: 'smooth' });
                }
            }, 5000);
        }
        
        carousel.addEventListener('mouseenter', () => clearInterval(scrollInterval));
        carousel.addEventListener('mouseleave', startCarousel);
        // Start on load after slight delay
        setTimeout(startCarousel, 2000);

        // --- FORM SUBMISSION ---
        function submitForm(e) {
            e.preventDefault();
            const btn = document.getElementById('submit-btn');
            const spinner = document.getElementById('spinner');
            const successMsg = document.getElementById('form-success');
            
            btn.classList.add('opacity-50', 'cursor-not-allowed');
            spinner.classList.remove('hidden');
            
            // Simulate API Call
            setTimeout(() => {
                btn.classList.remove('opacity-50', 'cursor-not-allowed');
                spinner.classList.add('hidden');
                document.getElementById('contact-form').reset();
                successMsg.classList.remove('hidden');
                setTimeout(() => successMsg.classList.add('hidden'), 5000);
            }, 1500);
        }

        // --- INIT ---
        document.addEventListener('DOMContentLoaded', () => {
            const savedLang = localStorage.getItem('lang') || 'pt';
            setLanguage(savedLang);
            calculateROI();
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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 py-4 border-b border-transparent" id="navbar">
<div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

<a className="font-display font-semibold tracking-tight text-xl text-[#F0F0F0] flex items-center gap-1" href="#">
                LusiTech<span className="w-1.5 h-1.5 rounded-full bg-[#5B6AF5] mt-1"></span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#888888]">
<a className="hover:text-[#F0F0F0] transition-colors" data-i18n="nav_services" href="#servicos">Serviços</a>
<a className="hover:text-[#F0F0F0] transition-colors" data-i18n="nav_process" href="#processo">Processo</a>
<a className="hover:text-[#F0F0F0] transition-colors" data-i18n="nav_results" href="#resultados">Resultados</a>
<a className="hover:text-[#F0F0F0] transition-colors" data-i18n="nav_faq" href="#faq">FAQ</a>
<a className="hover:text-[#F0F0F0] transition-colors" data-i18n="nav_contact" href="#contacto">Contacto</a>
</div>

<div className="hidden md:flex items-center gap-6">

<div className="flex items-center text-xs font-semibold tracking-widest">
<button className="text-[#F0F0F0] transition-colors hover:text-white" id="btn-pt" onclick="setLanguage('pt')">PT</button>
<span className="w-[1px] h-3 bg-[#2A2A2A] mx-3"></span>
<button className="text-[#555555] transition-colors hover:text-white" id="btn-en" onclick="setLanguage('en')">EN</button>
</div>

<a className="text-xs font-semibold tracking-[0.12em] uppercase bg-gradient-to-r from-[#5B6AF5] to-[#8B5CF6] text-white px-5 py-2.5 rounded-md hover:shadow-[0_0_16px_rgba(91,106,245,0.4)] transition-all" data-i18n="nav_cta" href="#contacto">Falar Connosco</a>
</div>

<button className="md:hidden text-[#F0F0F0]" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<div className="fixed inset-0 bg-[#0A0A0A] z-40 hidden flex-col items-center justify-center gap-8 opacity-0 transition-opacity duration-300" id="mobile-menu">
<a className="mobile-link text-xl font-display font-semibold text-[#888888] hover:text-white" data-i18n="nav_services" href="#servicos">Serviços</a>
<a className="mobile-link text-xl font-display font-semibold text-[#888888] hover:text-white" data-i18n="nav_process" href="#processo">Processo</a>
<a className="mobile-link text-xl font-display font-semibold text-[#888888] hover:text-white" data-i18n="nav_results" href="#resultados">Resultados</a>
<a className="mobile-link text-xl font-display font-semibold text-[#888888] hover:text-white" data-i18n="nav_faq" href="#faq">FAQ</a>
<a className="mobile-link text-xl font-display font-semibold text-[#888888] hover:text-white" data-i18n="nav_contact" href="#contacto">Contacto</a>
<div className="flex items-center gap-4 mt-4">
<button className="text-sm font-semibold tracking-widest text-[#F0F0F0]" onclick="setLanguage('pt'); toggleMobileMenu()">PT</button>
<span className="w-[1px] h-4 bg-[#2A2A2A]"></span>
<button className="text-sm font-semibold tracking-widest text-[#555555]" onclick="setLanguage('en'); toggleMobileMenu()">EN</button>
</div>
</div>

<section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden" id="hero">
<div className="bg-mesh"></div>
<div className="bg-noise"></div>
<div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">

<div className="flex flex-col items-start z-10 reveal">
<span className="text-xs font-inter uppercase tracking-[0.18em] text-[#5B6AF5] mb-6" data-i18n="hero_eyebrow">Automações &amp; Agentes de AI</span>
<h1 className="font-display font-semibold tracking-tight text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
<span data-i18n="hero_h1_1">O teu negócio a trabalhar</span><br/>
<span className="text-gradient" data-i18n="hero_h1_2">enquanto tu dormes.</span>
</h1>
<p className="text-base md:text-lg text-[#888888] leading-relaxed mb-10 max-w-lg" data-i18n="hero_sub">
                    Implementamos automações e agentes de AI que eliminam tarefas repetitivas, qualificam leads e escalam operações — sem contratar mais ninguém.
                </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="text-xs font-semibold tracking-[0.12em] uppercase bg-gradient-to-r from-[#5B6AF5] to-[#8B5CF6] text-white px-8 py-4 rounded-md text-center hover:shadow-[0_0_24px_rgba(91,106,245,0.4)] transition-all" data-i18n="hero_cta_primary" href="https://cal.com/lusitech/reuniao-de-auditoria" target="_blank">Agenda uma Auditoria</a>
<a className="text-xs font-semibold tracking-[0.12em] uppercase bg-transparent border border-[#222222] text-[#F0F0F0] px-8 py-4 rounded-md text-center hover:bg-[#161616] transition-all" data-i18n="hero_cta_secondary" href="#processo">Ver como funciona</a>
</div>
</div>

<div className="relative z-10 w-full max-w-md mx-auto lg:ml-auto reveal" style={{transitionDelay: '200ms'}}>
<div className="bg-[#161616] border border-[#222222] rounded-xl p-6 shadow-[0_24px_80px_rgba(0,0,0,0.8)] relative overflow-hidden group hover:shadow-[0_0_40px_rgba(91,106,245,0.15)] transition-shadow duration-500">

<div className="absolute top-0 right-0 w-32 h-32 bg-[#5B6AF5] rounded-full blur-[80px] opacity-20"></div>
<div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#222222]">
<iconify-icon className="text-[#5B6AF5]" icon="solar:cpu-linear" width="20"></iconify-icon>
<span className="font-mono text-xs text-[#888888] uppercase tracking-wider" data-i18n="hero_ui_title">Tarefas para AI — Em execução</span>
</div>
<div className="space-y-5">

<div className="flex items-start gap-3">
<div className="mt-0.5 w-4 h-4 rounded-full bg-[#22C55E]/20 flex items-center justify-center shrink-0">
<iconify-icon className="text-[#22C55E]" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<div>
<p className="text-sm text-[#F0F0F0] font-medium mb-1" data-i18n="hero_ui_task1_title">278 leads por reativar</p>
<p className="text-xs text-[#888888]" data-i18n="hero_ui_task1_desc">Emails redigidos e enviados</p>
</div>
</div>

<div className="flex items-start gap-3">
<div className="mt-0.5 w-4 h-4 shrink-0 flex items-center justify-center">
<iconify-icon className="text-[#5B6AF5] animate-spin" icon="solar:refresh-circle-linear" style={{animationDuration: '3s'}} width="16"></iconify-icon>
</div>
<div className="w-full">
<p className="text-sm text-[#F0F0F0] font-medium mb-2 flex justify-between">
<span data-i18n="hero_ui_task2_title">Executar limpeza no CRM</span>
<span className="text-xs text-[#5B6AF5]">70%</span>
</p>
<div className="w-full h-1 bg-[#222] rounded-full overflow-hidden">
<div className="h-full bg-[#5B6AF5] animate-progress"></div>
</div>
</div>
</div>

<div className="flex items-start gap-3">
<div className="mt-1 w-2 h-2 rounded-full bg-[#8B5CF6] shrink-0 animate-pulse-dot ml-1"></div>
<div className="ml-1">
<p className="text-sm text-[#F0F0F0] font-medium mb-1" data-i18n="hero_ui_task3_title">Proposta enviada</p>
<p className="text-xs text-[#888888]" data-i18n="hero_ui_task3_desc">A aguardar resposta</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full border-t border-[#222222] bg-[#0A0A0A]/80 backdrop-blur-sm py-4 reveal">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs text-[#888888] font-medium tracking-wide" data-i18n="hero_social_proof">Já ajudámos empresas portuguesas a recuperar tempo e receita com AI</p>
</div>
</div>
</section>

<section className="py-20 md:py-32 relative border-b border-[#222222]/50" id="problema">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<span className="text-xs font-inter uppercase tracking-[0.18em] text-[#5B6AF5] mb-4 block" data-i18n="prob_eyebrow">O Custo do Status Quo</span>
<h2 className="font-display font-semibold tracking-tight text-3xl md:text-4xl text-[#F0F0F0]" data-i18n="prob_h2">Cada dia sem AI é um dia a trabalhar para a concorrência.</h2>
</div>
<div className="grid md:grid-cols-2 gap-x-12 gap-y-8">

<div className="bg-[#111111] p-6 rounded-lg border border-[#222222] reveal">
<div className="flex gap-4">
<iconify-icon className="text-[#555555] shrink-0 mt-1" icon="solar:close-circle-linear" width="24"></iconify-icon>
<p className="text-sm text-[#888888] leading-relaxed" data-i18n="prob_1_bad">A tua equipa perde horas em tarefas que uma máquina faz em segundos.</p>
</div>
</div>
<div className="bg-[#161616] p-6 rounded-lg border border-[#5B6AF5]/30 reveal relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-[#5B6AF5]/5 to-transparent pointer-events-none"></div>
<div className="flex gap-4 relative z-10">
<iconify-icon className="text-[#22C55E] shrink-0 mt-1" icon="solar:check-circle-linear" width="24"></iconify-icon>
<p className="text-sm text-[#F0F0F0] leading-relaxed font-medium" data-i18n="prob_1_good">Automações de AI executam-nas 24/7, sem erros, sem baixas, sem queixas.</p>
</div>
</div>

<div className="bg-[#111111] p-6 rounded-lg border border-[#222222] reveal">
<div className="flex gap-4">
<iconify-icon className="text-[#555555] shrink-0 mt-1" icon="solar:close-circle-linear" width="24"></iconify-icon>
<p className="text-sm text-[#888888] leading-relaxed" data-i18n="prob_2_bad">Leads entram e ficam dias sem resposta — quando respondes, já compraram noutro sítio.</p>
</div>
</div>
<div className="bg-[#161616] p-6 rounded-lg border border-[#5B6AF5]/30 reveal relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-[#5B6AF5]/5 to-transparent pointer-events-none"></div>
<div className="flex gap-4 relative z-10">
<iconify-icon className="text-[#22C55E] shrink-0 mt-1" icon="solar:check-circle-linear" width="24"></iconify-icon>
<p className="text-sm text-[#F0F0F0] leading-relaxed font-medium" data-i18n="prob_2_good">Agentes de AI respondem em segundos, qualificam e agendam reuniões automaticamente.</p>
</div>
</div>

<div className="bg-[#111111] p-6 rounded-lg border border-[#222222] reveal">
<div className="flex gap-4">
<iconify-icon className="text-[#555555] shrink-0 mt-1" icon="solar:close-circle-linear" width="24"></iconify-icon>
<p className="text-sm text-[#888888] leading-relaxed" data-i18n="prob_3_bad">Não sabes o que a tua equipa faz, quanto custa nem o que traz em retorno.</p>
</div>
</div>
<div className="bg-[#161616] p-6 rounded-lg border border-[#5B6AF5]/30 reveal relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-[#5B6AF5]/5 to-transparent pointer-events-none"></div>
<div className="flex gap-4 relative z-10">
<iconify-icon className="text-[#22C55E] shrink-0 mt-1" icon="solar:check-circle-linear" width="24"></iconify-icon>
<p className="text-sm text-[#F0F0F0] leading-relaxed font-medium" data-i18n="prob_3_good">Dashboards e relatórios automáticos dão-te visibilidade total em tempo real.</p>
</div>
</div>

<div className="bg-[#111111] p-6 rounded-lg border border-[#222222] reveal">
<div className="flex gap-4">
<iconify-icon className="text-[#555555] shrink-0 mt-1" icon="solar:close-circle-linear" width="24"></iconify-icon>
<p className="text-sm text-[#888888] leading-relaxed" data-i18n="prob_4_bad">Contratar mais pessoas aumenta o custo mas não resolve o problema raiz.</p>
</div>
</div>
<div className="bg-[#161616] p-6 rounded-lg border border-[#5B6AF5]/30 reveal relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-[#5B6AF5]/5 to-transparent pointer-events-none"></div>
<div className="flex gap-4 relative z-10">
<iconify-icon className="text-[#22C55E] shrink-0 mt-1" icon="solar:check-circle-linear" width="24"></iconify-icon>
<p className="text-sm text-[#F0F0F0] leading-relaxed font-medium" data-i18n="prob_4_good">AI escala as tuas operações sem adicionar headcount — só resultados.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 relative" id="servicos">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:w-2/3 reveal">
<span className="text-xs font-inter uppercase tracking-[0.18em] text-[#5B6AF5] mb-4 block" data-i18n="serv_eyebrow">Serviços</span>
<h2 className="font-display font-semibold tracking-tight text-3xl md:text-4xl text-[#F0F0F0] mb-4" data-i18n="serv_h2">Soluções de AI à medida do teu negócio.</h2>
<p className="text-base text-[#888888]" data-i18n="serv_sub">Não vendemos software. Implementamos sistemas que resolvem problemas reais.</p>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="bg-[#161616] border border-[#222222] rounded-xl p-8 hover:shadow-[0_0_24px_rgba(91,106,245,0.12)] transition-all duration-300 group reveal">
<div className="w-12 h-12 bg-[#1A1A2E] rounded-lg flex items-center justify-center mb-6">
<iconify-icon className="text-[#5B6AF5]" icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="font-display font-semibold text-xl text-[#F0F0F0] mb-3" data-i18n="serv_1_title">Automação de Processos</h3>
<p className="text-sm text-[#888888] leading-relaxed mb-6" data-i18n="serv_1_desc">Identificamos e automatizamos os fluxos que mais consomem tempo da tua equipa — facturação, propostas, relatórios, follow-ups e muito mais.</p>

<div className="h-1 bg-[#222] rounded-full overflow-hidden w-24 group-hover:w-full transition-all duration-1000">
<div className="h-full bg-gradient-to-r from-[#5B6AF5] to-[#8B5CF6] w-full"></div>
</div>
</div>

<div className="bg-[#161616] border border-[#222222] rounded-xl p-8 hover:shadow-[0_0_24px_rgba(91,106,245,0.12)] transition-all duration-300 group reveal" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 bg-[#1A1A2E] rounded-lg flex items-center justify-center mb-6">
<iconify-icon className="text-[#5B6AF5]" icon="solar:chat-round-dots-linear" width="24"></iconify-icon>
</div>
<h3 className="font-display font-semibold text-xl text-[#F0F0F0] mb-3" data-i18n="serv_2_title">Agentes de AI</h3>
<p className="text-sm text-[#888888] leading-relaxed mb-6" data-i18n="serv_2_desc">Agentes inteligentes que atendem clientes, qualificam leads e agendam reuniões — por chamada, WhatsApp, email ou chat, a qualquer hora do dia.</p>
<div className="flex gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
<div className="w-2 h-2 rounded-full bg-[#5B6AF5] animate-bounce" style={{animationDelay: '0ms'}}></div>
<div className="w-2 h-2 rounded-full bg-[#5B6AF5] animate-bounce" style={{animationDelay: '150ms'}}></div>
<div className="w-2 h-2 rounded-full bg-[#5B6AF5] animate-bounce" style={{animationDelay: '300ms'}}></div>
</div>
</div>

<div className="bg-[#161616] border border-[#222222] rounded-xl p-8 hover:shadow-[0_0_24px_rgba(91,106,245,0.12)] transition-all duration-300 group reveal" style={{transitionDelay: '200ms'}}>
<div className="w-12 h-12 bg-[#1A1A2E] rounded-lg flex items-center justify-center mb-6">
<iconify-icon className="text-[#5B6AF5]" icon="solar:link-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="font-display font-semibold text-xl text-[#F0F0F0] mb-3" data-i18n="serv_3_title">Integração de Sistemas</h3>
<p className="text-sm text-[#888888] leading-relaxed mb-6" data-i18n="serv_3_desc">Ligamos o teu CRM, ERP, email e ferramentas de gestão numa única cadeia automatizada. Sem copy-paste, sem erros humanos, sem duplicação.</p>
<div className="flex items-center gap-2 text-[#444] group-hover:text-[#5B6AF5] transition-colors">
<iconify-icon icon="solar:database-linear" width="16"></iconify-icon>
<span className="w-8 h-[1px] bg-current"></span>
<iconify-icon icon="solar:server-square-linear" width="16"></iconify-icon>
</div>
</div>

<div className="bg-[#161616] border border-[#222222] rounded-xl p-8 hover:shadow-[0_0_24px_rgba(91,106,245,0.12)] transition-all duration-300 group reveal" style={{transitionDelay: '300ms'}}>
<div className="w-12 h-12 bg-[#1A1A2E] rounded-lg flex items-center justify-center mb-6">
<iconify-icon className="text-[#5B6AF5]" icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<h3 className="font-display font-semibold text-xl text-[#F0F0F0] mb-3" data-i18n="serv_4_title">Relatórios e Dashboards</h3>
<p className="text-sm text-[#888888] leading-relaxed mb-6" data-i18n="serv_4_desc">Visibilidade total das tuas operações, leads e receita em tempo real. Toma decisões com dados, não com instinto.</p>
<div className="flex items-end gap-1 h-6">
<div className="w-2 bg-[#222] group-hover:bg-[#5B6AF5] h-2 transition-all duration-300"></div>
<div className="w-2 bg-[#222] group-hover:bg-[#5B6AF5] h-4 transition-all duration-300 delay-75"></div>
<div className="w-2 bg-[#222] group-hover:bg-[#5B6AF5] h-3 transition-all duration-300 delay-150"></div>
<div className="w-2 bg-[#222] group-hover:bg-[#8B5CF6] h-6 transition-all duration-300 delay-200"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 relative border-t border-[#222222]/50" id="processo">
<div className="max-w-3xl mx-auto px-6 text-center mb-16 reveal">
<span className="text-xs font-inter uppercase tracking-[0.18em] text-[#5B6AF5] mb-4 block" data-i18n="proc_eyebrow">Como Funciona</span>
<h2 className="font-display font-semibold tracking-tight text-3xl md:text-4xl text-[#F0F0F0]" data-i18n="proc_h2">Simples, rápido e sem fricção da tua parte.</h2>
</div>
<div className="max-w-4xl mx-auto px-6 relative">

<div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-[#222222] -translate-x-1/2"></div>
<div className="space-y-12 relative">

<div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full reveal">
<div className="hidden md:block w-5/12 text-right pr-8">
<h3 className="font-display font-semibold text-lg text-[#F0F0F0] mb-2" data-i18n="proc_1_title">Passo 1 — Auditoria Gratuita</h3>
<p className="text-sm text-[#888888]" data-i18n="proc_1_desc">Começamos com uma sessão de 30 minutos para entender o teu negócio, identificar os maiores gargalos e calcular o impacto real de os resolver com AI.</p>
</div>
<div className="w-8 h-8 absolute left-6 md:left-1/2 -translate-x-1/2 bg-[#0A0A0A] border-2 border-[#5B6AF5] rounded-full flex items-center justify-center z-10 shadow-[0_0_12px_rgba(91,106,245,0.4)]">
<span className="text-xs font-mono text-[#F0F0F0]">1</span>
</div>
<div className="pl-12 md:pl-8 md:w-5/12 w-full mt-2 md:mt-0">
<div className="md:hidden mb-2">
<h3 className="font-display font-semibold text-lg text-[#F0F0F0]" data-i18n="proc_1_title">Passo 1 — Auditoria Gratuita</h3>
</div>
<p className="text-sm text-[#888888] md:hidden mb-4" data-i18n="proc_1_desc">Começamos com uma sessão de 30 minutos para entender o teu negócio, identificar os maiores gargalos e calcular o impacto real de os resolver com AI.</p>
<div className="bg-[#161616] border border-[#222] p-4 rounded-lg inline-flex items-center gap-3">
<iconify-icon className="text-[#5B6AF5]" icon="solar:calendar-date-linear" width="20"></iconify-icon>
<span className="text-xs font-mono text-[#888888]">cal.com/lusitech</span>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse items-start md:items-center justify-between w-full reveal">
<div className="hidden md:block w-5/12 text-left pl-8">
<h3 className="font-display font-semibold text-lg text-[#F0F0F0] mb-2" data-i18n="proc_2_title">Passo 2 — Proposta Personalizada</h3>
<p className="text-sm text-[#888888]" data-i18n="proc_2_desc">Em 48h recebes um plano detalhado com as soluções específicas para o teu caso, timeline de implementação e ROI estimado.</p>
</div>
<div className="w-8 h-8 absolute left-6 md:left-1/2 -translate-x-1/2 bg-[#0A0A0A] border-2 border-[#222] rounded-full flex items-center justify-center z-10 transition-colors duration-500 hover:border-[#5B6AF5]">
<span className="text-xs font-mono text-[#888888]">2</span>
</div>
<div className="pl-12 md:pr-8 md:pl-0 md:w-5/12 w-full mt-2 md:mt-0 md:text-right">
<div className="md:hidden mb-2">
<h3 className="font-display font-semibold text-lg text-[#F0F0F0]" data-i18n="proc_2_title">Passo 2 — Proposta Personalizada</h3>
</div>
<p className="text-sm text-[#888888] md:hidden mb-4" data-i18n="proc_2_desc">Em 48h recebes um plano detalhado com as soluções específicas para o teu caso, timeline de implementação e ROI estimado.</p>
<div className="bg-[#161616] border border-[#222] p-4 rounded-lg inline-flex items-center gap-3">
<iconify-icon className="text-[#888888]" icon="solar:document-text-linear" width="20"></iconify-icon>
<span className="text-xs font-mono text-[#888888]">Plano_Acao.pdf</span>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full reveal">
<div className="hidden md:block w-5/12 text-right pr-8">
<h3 className="font-display font-semibold text-lg text-[#F0F0F0] mb-2" data-i18n="proc_3_title">Passo 3 — Implementação</h3>
<p className="text-sm text-[#888888]" data-i18n="proc_3_desc">A nossa equipa trata de tudo — configuração, integração e testes. Tu validas, nós executamos. Sem complexidade técnica da tua parte.</p>
</div>
<div className="w-8 h-8 absolute left-6 md:left-1/2 -translate-x-1/2 bg-[#0A0A0A] border-2 border-[#222] rounded-full flex items-center justify-center z-10 transition-colors duration-500 hover:border-[#5B6AF5]">
<span className="text-xs font-mono text-[#888888]">3</span>
</div>
<div className="pl-12 md:pl-8 md:w-5/12 w-full mt-2 md:mt-0">
<div className="md:hidden mb-2">
<h3 className="font-display font-semibold text-lg text-[#F0F0F0]" data-i18n="proc_3_title">Passo 3 — Implementação</h3>
</div>
<p className="text-sm text-[#888888] md:hidden mb-4" data-i18n="proc_3_desc">A nossa equipa trata de tudo — configuração, integração e testes. Tu validas, nós executamos. Sem complexidade técnica da tua parte.</p>
<div className="w-32 h-2 bg-[#222] rounded-full overflow-hidden">
<div className="w-2/3 h-full bg-[#5B6AF5]"></div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse items-start md:items-center justify-between w-full reveal">
<div className="hidden md:block w-5/12 text-left pl-8">
<h3 className="font-display font-semibold text-lg text-[#F0F0F0] mb-2" data-i18n="proc_4_title">Passo 4 — Optimização Contínua</h3>
<p className="text-sm text-[#888888]" data-i18n="proc_4_desc">Após o go-live, monitorizamos, ajustamos e optimizamos continuamente para garantir que o sistema melhora com o tempo.</p>
</div>
<div className="w-8 h-8 absolute left-6 md:left-1/2 -translate-x-1/2 bg-[#0A0A0A] border-2 border-[#222] rounded-full flex items-center justify-center z-10 transition-colors duration-500 hover:border-[#5B6AF5]">
<span className="text-xs font-mono text-[#888888]">4</span>
</div>
<div className="pl-12 md:pr-8 md:pl-0 md:w-5/12 w-full mt-2 md:mt-0 md:text-right">
<div className="md:hidden mb-2">
<h3 className="font-display font-semibold text-lg text-[#F0F0F0]" data-i18n="proc_4_title">Passo 4 — Optimização Contínua</h3>
</div>
<p className="text-sm text-[#888888] md:hidden mb-4" data-i18n="proc_4_desc">Após o go-live, monitorizamos, ajustamos e optimizamos continuamente para garantir que o sistema melhora com o tempo.</p>
<iconify-icon className="text-[#22C55E]" icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 relative bg-[#111111] border-y border-[#222222]" id="resultados">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<span className="text-xs font-inter uppercase tracking-[0.18em] text-[#5B6AF5] mb-4 block" data-i18n="res_eyebrow">Resultados Reais</span>
<h2 className="font-display font-semibold tracking-tight text-3xl md:text-4xl text-[#F0F0F0]" data-i18n="res_h2">Não leves a nossa palavra — vê os números.</h2>
</div>

<div className="grid md:grid-cols-3 gap-6 mb-20">
<div className="bg-[#161616] border border-[#222] p-8 rounded-xl text-center shadow-[0_0_30px_rgba(91,106,245,0.05)] reveal">
<div className="font-display font-semibold text-4xl md:text-5xl text-gradient mb-2">+<span data-counter="40">0</span>%</div>
<h3 className="text-sm font-semibold text-[#F0F0F0] mb-1" data-i18n="res_met_1_t">de leads qualificadas</h3>
<p className="text-xs text-[#888888]" data-i18n="res_met_1_d">em média nos primeiros 90 dias</p>
</div>
<div className="bg-[#161616] border border-[#222] p-8 rounded-xl text-center shadow-[0_0_30px_rgba(91,106,245,0.05)] reveal" style={{transitionDelay: '100ms'}}>
<div className="font-display font-semibold text-4xl md:text-5xl text-gradient mb-2"><span data-counter="8">0</span>h</div>
<h3 className="text-sm font-semibold text-[#F0F0F0] mb-1" data-i18n="res_met_2_t">por semana recuperadas</h3>
<p className="text-xs text-[#888888]" data-i18n="res_met_2_d">por colaborador em tarefas automatizadas</p>
</div>
<div className="bg-[#161616] border border-[#222] p-8 rounded-xl text-center shadow-[0_0_30px_rgba(91,106,245,0.05)] reveal" style={{transitionDelay: '200ms'}}>
<div className="font-display font-semibold text-4xl md:text-5xl text-gradient mb-2">&lt; <span data-counter="14">0</span></div>
<h3 className="text-sm font-semibold text-[#F0F0F0] mb-1" data-i18n="res_met_3_t">dias de implementação</h3>
<p className="text-xs text-[#888888]" data-i18n="res_met_3_d">do diagnóstico à primeira automação em produção</p>
</div>
</div>

<div className="relative reveal">
<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 no-scrollbar scroll-smooth" id="carousel">

<div className="snap-start shrink-0 w-[85vw] md:w-[400px] bg-[#161616] border border-[#222] p-8 rounded-xl flex flex-col justify-between">
<div>
<div className="flex text-[#5B6AF5] mb-4 gap-1 text-sm">★★★★★</div>
<p className="text-sm text-[#888888] leading-relaxed mb-6 italic" data-i18n="test_1_q">"Atuamos muito no setor imobiliário e precisávamos de maior suporte para as nossas leads inbound. O agente de AI que a LusiTech implementou tem sido excepcional — +15% de aumento de reuniões agendadas logo no primeiro mês."</p>
</div>
<div>
<p className="text-sm font-semibold text-[#F0F0F0]">Afonso Brandão</p>
<p className="text-xs text-[#555555]">Founder &amp; CEO, AfteREC</p>
</div>
</div>

<div className="snap-start shrink-0 w-[85vw] md:w-[400px] bg-[#161616] border border-[#222] p-8 rounded-xl flex flex-col justify-between">
<div>
<div className="flex text-[#5B6AF5] mb-4 gap-1 text-sm">★★★★★</div>
<p className="text-sm text-[#888888] leading-relaxed mb-6 italic" data-i18n="test_2_q">"Precisávamos de automatizar o envio de propostas e os fluxos de email. A parceria com a LusiTech removeu muita ambiguidade das nossas operações. Serviço muito profissional. Recomendo."</p>
</div>
<div>
<p className="text-sm font-semibold text-[#F0F0F0]">Iuri B. Carvalho</p>
<p className="text-xs text-[#555555]">Founder &amp; Operator, Framer Labs</p>
</div>
</div>

<div className="snap-start shrink-0 w-[85vw] md:w-[400px] bg-[#161616] border border-[#222] p-8 rounded-xl flex flex-col justify-between">
<div>
<div className="flex text-[#5B6AF5] mb-4 gap-1 text-sm">★★★★★</div>
<p className="text-sm text-[#888888] leading-relaxed mb-6 italic" data-i18n="test_3_q">"A nossa equipa comercial passou a focar exclusivamente em fechar negócios. O resto — qualificação, follow-up, agendamento — ficou todo do lado da AI."</p>
</div>
<div>
<p className="text-sm font-semibold text-[#F0F0F0]">Ana Ferreira</p>
<p className="text-xs text-[#555555]" data-i18n="test_3_r">Directora Comercial</p>
</div>
</div>

<div className="snap-start shrink-0 w-[85vw] md:w-[400px] bg-[#161616] border border-[#222] p-8 rounded-xl flex flex-col justify-between">
<div>
<div className="flex text-[#5B6AF5] mb-4 gap-1 text-sm">★★★★★</div>
<p className="text-sm text-[#888888] leading-relaxed mb-6 italic" data-i18n="test_4_q">"Tínhamos leads a entrar por vários canais sem nenhum processo definido. Agora tudo é capturado, qualificado e encaminhado automaticamente. É outra empresa."</p>
</div>
<div>
<p className="text-sm font-semibold text-[#F0F0F0]">Ricardo Mendes</p>
<p className="text-xs text-[#555555]">CEO</p>
</div>
</div>
</div>

<div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-[#111111] to-transparent pointer-events-none hidden md:block"></div>
<div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-[#111111] to-transparent pointer-events-none hidden md:block"></div>
</div>
</div>
</section>

<section className="py-20 md:py-32 relative" id="beneficios">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:w-2/3 reveal">
<span className="text-xs font-inter uppercase tracking-[0.18em] text-[#5B6AF5] mb-4 block" data-i18n="ben_eyebrow">Porquê a LusiTech</span>
<h2 className="font-display font-semibold tracking-tight text-3xl md:text-4xl text-[#F0F0F0]" data-i18n="ben_h2">O que ganhas quando trabalhas connosco.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-[#161616] border border-[#222] p-6 rounded-xl reveal">
<iconify-icon className="text-[#5B6AF5] mb-4" icon="solar:bolt-linear" width="24"></iconify-icon>
<h3 className="font-display font-semibold text-base text-[#F0F0F0] mb-2" data-i18n="ben_1_t">Mais Produtividade</h3>
<p className="text-sm text-[#888888]" data-i18n="ben_1_d">A tua equipa foca no que gera valor — nós tratamos do resto.</p>
</div>
<div className="bg-[#161616] border border-[#222] p-6 rounded-xl reveal" style={{transitionDelay: '50ms'}}>
<iconify-icon className="text-[#5B6AF5] mb-4" icon="solar:chat-round-check-linear" width="24"></iconify-icon>
<h3 className="font-display font-semibold text-base text-[#F0F0F0] mb-2" data-i18n="ben_2_t">Melhor Experiência do Cliente</h3>
<p className="text-sm text-[#888888]" data-i18n="ben_2_d">Respostas imediatas e consistentes em todos os canais, 24 horas por dia.</p>
</div>
<div className="bg-[#161616] border border-[#222] p-6 rounded-xl reveal" style={{transitionDelay: '100ms'}}>
<iconify-icon className="text-[#5B6AF5] mb-4" icon="solar:clock-circle-linear" width="24"></iconify-icon>
<h3 className="font-display font-semibold text-base text-[#F0F0F0] mb-2" data-i18n="ben_3_t">Cobertura 24/7</h3>
<p className="text-sm text-[#888888]" data-i18n="ben_3_d">Os teus agentes de AI nunca descansam, não têm baixas nem dias maus.</p>
</div>
<div className="bg-[#161616] border border-[#222] p-6 rounded-xl reveal" style={{transitionDelay: '150ms'}}>
<iconify-icon className="text-[#5B6AF5] mb-4" icon="solar:wad-of-money-linear" width="24"></iconify-icon>
<h3 className="font-display font-semibold text-base text-[#F0F0F0] mb-2" data-i18n="ben_4_t">Redução de Custos</h3>
<p className="text-sm text-[#888888]" data-i18n="ben_4_d">Menos trabalho manual, menos erros, menos custos operacionais fixos.</p>
</div>
<div className="bg-[#161616] border border-[#222] p-6 rounded-xl reveal" style={{transitionDelay: '200ms'}}>
<iconify-icon className="text-[#5B6AF5] mb-4" icon="solar:chart-square-linear" width="24"></iconify-icon>
<h3 className="font-display font-semibold text-base text-[#F0F0F0] mb-2" data-i18n="ben_5_t">Decisões Baseadas em Dados</h3>
<p className="text-sm text-[#888888]" data-i18n="ben_5_d">Relatórios automáticos com os KPIs que realmente importam para o teu negócio.</p>
</div>
<div className="bg-[#161616] border border-[#222] p-6 rounded-xl reveal" style={{transitionDelay: '250ms'}}>
<iconify-icon className="text-[#5B6AF5] mb-4" icon="solar:maximize-square-linear" width="24"></iconify-icon>
<h3 className="font-display font-semibold text-base text-[#F0F0F0] mb-2" data-i18n="ben_6_t">Escalabilidade Sem Limite</h3>
<p className="text-sm text-[#888888]" data-i18n="ben_6_d">O volume pode triplicar — os teus sistemas acompanham sem fricção.</p>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 relative bg-[#111111] border-y border-[#222222]" id="calculadora">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<span className="text-xs font-inter uppercase tracking-[0.18em] text-[#5B6AF5] mb-4 block" data-i18n="roi_eyebrow">Calcula o teu retorno</span>
<h2 className="font-display font-semibold tracking-tight text-3xl md:text-4xl text-[#F0F0F0]" data-i18n="roi_h2">Quanto é que a ineficiência te está a custar por mês?</h2>
</div>
<div className="bg-[#161616] border border-[#222] p-8 md:p-12 rounded-2xl shadow-[0_0_40px_rgba(91,106,245,0.08)] reveal">
<div className="grid md:grid-cols-2 gap-12 items-center">

<div className="space-y-8">
<div>
<div className="flex justify-between mb-3 text-sm">
<label className="text-[#F0F0F0] font-medium" data-i18n="roi_s1">Horas perdidas em tarefas repetitivas por semana</label>
<span className="text-[#5B6AF5] font-mono"><span id="val-hours">20</span>h</span>
</div>
<input className="w-full" id="slider-hours" max="40" min="1" type="range" value="20"/>
</div>
<div>
<div className="flex justify-between mb-3 text-sm">
<label className="text-[#F0F0F0] font-medium" data-i18n="roi_s2">Leads sem resposta por mês</label>
<span className="text-[#5B6AF5] font-mono" id="val-leads">100</span>
</div>
<input className="w-full" id="slider-leads" max="500" min="10" type="range" value="100"/>
</div>
<div>
<div className="flex justify-between mb-3 text-sm">
<label className="text-[#F0F0F0] font-medium" data-i18n="roi_s3">Valor médio de um cliente (€)</label>
<span className="text-[#5B6AF5] font-mono"><span id="val-value">1000</span>€</span>
</div>
<input className="w-full" id="slider-value" max="10000" min="100" step="100" type="range" value="1000"/>
</div>
</div>

<div className="bg-[#0A0A0A] p-8 rounded-xl border border-[#222] text-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-[#5B6AF5]/10 to-transparent pointer-events-none"></div>
<p className="text-sm text-[#888888] mb-2" data-i18n="roi_out_1">Estás a perder aproximadamente</p>
<div className="font-display font-semibold text-4xl text-[#EF4444] mb-1"><span id="out-loss">17150</span>€</div>
<p className="text-xs text-[#555555] mb-8" data-i18n="roi_out_1_sub">por mês</p>
<div className="h-[1px] w-full bg-[#222] mb-8"></div>
<p className="text-sm text-[#888888] mb-2" data-i18n="roi_out_2">Com a LusiTech, poderias recuperar</p>
<div className="font-display font-semibold text-3xl text-[#22C55E] mb-2"><span id="out-recover">51450</span>€</div>
<p className="text-xs text-[#555555] mb-8" data-i18n="roi_out_2_sub">nos próximos 90 dias</p>
<a className="block w-full text-xs font-semibold tracking-[0.12em] uppercase bg-gradient-to-r from-[#5B6AF5] to-[#8B5CF6] text-white px-6 py-4 rounded-md text-center hover:shadow-[0_0_24px_rgba(91,106,245,0.4)] transition-all" data-i18n="roi_cta" href="https://cal.com/lusitech/reuniao-de-auditoria" target="_blank">Quero recuperar esse valor</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 relative max-w-3xl mx-auto px-6" id="faq">
<div className="text-center mb-16 reveal">
<span className="text-xs font-inter uppercase tracking-[0.18em] text-[#5B6AF5] mb-4 block" data-i18n="faq_eyebrow">FAQ</span>
<h2 className="font-display font-semibold tracking-tight text-3xl md:text-4xl text-[#F0F0F0]" data-i18n="faq_h2">Tens perguntas. Nós temos respostas.</h2>
</div>
<div className="space-y-4 reveal" id="faq-container">

<div className="accordion-item bg-[#161616] border border-[#222] rounded-lg overflow-hidden cursor-pointer" onclick="toggleAccordion(this)">
<div className="p-6 flex justify-between items-center">
<h3 className="font-medium text-sm text-[#F0F0F0] pr-8" data-i18n="faq_1_q">Como é que a AI pode ajudar o meu negócio em específico?</h3>
<iconify-icon className="accordion-icon text-[#888] transition-transform duration-300 shrink-0" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
<div className="accordion-content px-6 bg-[#111]">
<p className="text-sm text-[#888888] pb-6 leading-relaxed" data-i18n="faq_1_a">Começamos sempre por uma auditoria gratuita onde analisamos os teus processos, identificamos os maiores gargalos e calculamos o impacto real de os automatizar. Só avançamos se o ROI for claro.</p>
</div>
</div>
<div className="accordion-item bg-[#161616] border border-[#222] rounded-lg overflow-hidden cursor-pointer" onclick="toggleAccordion(this)">
<div className="p-6 flex justify-between items-center">
<h3 className="font-medium text-sm text-[#F0F0F0] pr-8" data-i18n="faq_2_q">Preciso de saber programar ou ter equipa técnica?</h3>
<iconify-icon className="accordion-icon text-[#888] transition-transform duration-300 shrink-0" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
<div className="accordion-content px-6 bg-[#111]">
<p className="text-sm text-[#888888] pb-6 leading-relaxed" data-i18n="faq_2_a">Não. Tratamos de tudo — configuração, integração, testes e manutenção. A tua equipa só precisa de validar o que foi construído.</p>
</div>
</div>
<div className="accordion-item bg-[#161616] border border-[#222] rounded-lg overflow-hidden cursor-pointer" onclick="toggleAccordion(this)">
<div className="p-6 flex justify-between items-center">
<h3 className="font-medium text-sm text-[#F0F0F0] pr-8" data-i18n="faq_3_q">Quanto tempo demora a implementação?</h3>
<iconify-icon className="accordion-icon text-[#888] transition-transform duration-300 shrink-0" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
<div className="accordion-content px-6 bg-[#111]">
<p className="text-sm text-[#888888] pb-6 leading-relaxed" data-i18n="faq_3_a">Depende da complexidade, mas a maioria dos projectos está operacional entre 10 a 21 dias após o início do processo.</p>
</div>
</div>
<div className="accordion-item bg-[#161616] border border-[#222] rounded-lg overflow-hidden cursor-pointer" onclick="toggleAccordion(this)">
<div className="p-6 flex justify-between items-center">
<h3 className="font-medium text-sm text-[#F0F0F0] pr-8" data-i18n="faq_4_q">Qual é o investimento necessário?</h3>
<iconify-icon className="accordion-icon text-[#888] transition-transform duration-300 shrink-0" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
<div className="accordion-content px-6 bg-[#111]">
<p className="text-sm text-[#888888] pb-6 leading-relaxed" data-i18n="faq_4_a">Cada solução é orçamentada à medida após a auditoria gratuita. O valor reflecte o impacto esperado — e na maioria dos casos o ROI é atingido nos primeiros 60 a 90 dias.</p>
</div>
</div>
<div className="accordion-item bg-[#161616] border border-[#222] rounded-lg overflow-hidden cursor-pointer" onclick="toggleAccordion(this)">
<div className="p-6 flex justify-between items-center">
<h3 className="font-medium text-sm text-[#F0F0F0] pr-8" data-i18n="faq_5_q">Os agentes de AI substituem a minha equipa?</h3>
<iconify-icon className="accordion-icon text-[#888] transition-transform duration-300 shrink-0" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
<div className="accordion-content px-6 bg-[#111]">
<p className="text-sm text-[#888888] pb-6 leading-relaxed" data-i18n="faq_5_a">Não. Libertam a tua equipa de tarefas repetitivas para que possam focar no que realmente cria valor — relações, estratégia e crescimento.</p>
</div>
</div>
<div className="accordion-item bg-[#161616] border border-[#222] rounded-lg overflow-hidden cursor-pointer" onclick="toggleAccordion(this)">
<div className="p-6 flex justify-between items-center">
<h3 className="font-medium text-sm text-[#F0F0F0] pr-8" data-i18n="faq_6_q">E se o sistema não funcionar como esperado?</h3>
<iconify-icon className="accordion-icon text-[#888] transition-transform duration-300 shrink-0" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
<div className="accordion-content px-6 bg-[#111]">
<p className="text-sm text-[#888888] pb-6 leading-relaxed" data-i18n="faq_6_a">Todos os nossos projectos incluem um período de validação e ajuste após o go-live. Só fechamos o projecto quando os resultados estão confirmados.</p>
</div>
</div>
<div className="accordion-item bg-[#161616] border border-[#222] rounded-lg overflow-hidden cursor-pointer" onclick="toggleAccordion(this)">
<div className="p-6 flex justify-between items-center">
<h3 className="font-medium text-sm text-[#F0F0F0] pr-8" data-i18n="faq_7_q">Os meus dados estão seguros?</h3>
<iconify-icon className="accordion-icon text-[#888] transition-transform duration-300 shrink-0" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
<div className="accordion-content px-6 bg-[#111]">
<p className="text-sm text-[#888888] pb-6 leading-relaxed" data-i18n="faq_7_a">Sim. Trabalhamos com ferramentas e protocolos que cumprem o RGPD. Os teus dados nunca são partilhados com terceiros.</p>
</div>
</div>
<div className="accordion-item bg-[#161616] border border-[#222] rounded-lg overflow-hidden cursor-pointer" onclick="toggleAccordion(this)">
<div className="p-6 flex justify-between items-center">
<h3 className="font-medium text-sm text-[#F0F0F0] pr-8" data-i18n="faq_8_q">Posso começar com uma automação pequena e escalar depois?</h3>
<iconify-icon className="accordion-icon text-[#888] transition-transform duration-300 shrink-0" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
<div className="accordion-content px-6 bg-[#111]">
<p className="text-sm text-[#888888] pb-6 leading-relaxed" data-i18n="faq_8_a">Absolutamente. Muitos clientes começam com um processo específico e expandem à medida que vêem resultados. A arquitectura é sempre construída para escalar.</p>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 relative border-t border-[#222222]/50 bg-[#0A0A0A]" id="contacto">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div className="reveal">
<span className="text-xs font-inter uppercase tracking-[0.18em] text-[#5B6AF5] mb-4 block" data-i18n="cont_eyebrow">Vamos Falar</span>
<h2 className="font-display font-semibold tracking-tight text-3xl md:text-4xl text-[#F0F0F0] mb-3" data-i18n="cont_h2">Agenda a tua auditoria gratuita.</h2>
<p className="text-sm text-[#888888] mb-10" data-i18n="cont_sub">30 minutos. Sem compromisso. Com um plano concreto no final.</p>
<form className="space-y-6" id="contact-form" onsubmit="submitForm(event)">
<div className="grid grid-cols-2 gap-6">
<div>
<input className="w-full bg-transparent border-b border-[#222] py-3 text-sm text-[#F0F0F0] placeholder-[#555] focus:outline-none focus:border-[#5B6AF5] transition-colors" data-i18n-placeholder="form_name" id="form-name" placeholder="Nome *" required="" type="text"/>
</div>
<div>
<input className="w-full bg-transparent border-b border-[#222] py-3 text-sm text-[#F0F0F0] placeholder-[#555] focus:outline-none focus:border-[#5B6AF5] transition-colors" id="form-email" placeholder="Email *" required="" type="email"/>
</div>
</div>
<div className="grid grid-cols-2 gap-6">
<div>
<input className="w-full bg-transparent border-b border-[#222] py-3 text-sm text-[#F0F0F0] placeholder-[#555] focus:outline-none focus:border-[#5B6AF5] transition-colors" data-i18n-placeholder="form_phone" id="form-phone" placeholder="Telefone *" required="" type="tel"/>
</div>
<div>
<input className="w-full bg-transparent border-b border-[#222] py-3 text-sm text-[#F0F0F0] placeholder-[#555] focus:outline-none focus:border-[#5B6AF5] transition-colors" data-i18n-placeholder="form_company" id="form-company" placeholder="Empresa *" required="" type="text"/>
</div>
</div>

<div className="relative">
<select className="w-full bg-transparent border-b border-[#222] py-3 text-sm text-[#555] focus:outline-none focus:border-[#5B6AF5] transition-colors appearance-none cursor-pointer" id="form-industry" required="">
<option data-i18n="form_ind_placeholder" disabled="" selected="" value="">Sector *</option>
<option data-i18n="form_ind_1" value="Saúde">Saúde</option>
<option data-i18n="form_ind_2" value="Imobiliário">Imobiliário</option>
<option data-i18n="form_ind_3" value="Retalho">Retalho</option>
<option data-i18n="form_ind_4" value="Serviços">Serviços</option>
<option data-i18n="form_ind_5" value="Tecnologia">Tecnologia</option>
<option data-i18n="form_ind_6" value="Outro">Outro</option>
</select>
<iconify-icon className="absolute right-0 top-4 text-[#555] pointer-events-none" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
<div className="relative">
<select className="w-full bg-transparent border-b border-[#222] py-3 text-sm text-[#555] focus:outline-none focus:border-[#5B6AF5] transition-colors appearance-none cursor-pointer" id="form-challenge" required="">
<option data-i18n="form_cha_placeholder" disabled="" selected="" value="">Principal desafio *</option>
<option data-i18n="form_cha_1" value="1">Automatizar processos internos</option>
<option data-i18n="form_cha_2" value="2">Qualificar e responder a leads</option>
<option data-i18n="form_cha_3" value="3">Integrar ferramentas e sistemas</option>
<option data-i18n="form_cha_4" value="4">Obter visibilidade e relatórios</option>
<option data-i18n="form_ind_6" value="5">Outro</option>
</select>
<iconify-icon className="absolute right-0 top-4 text-[#555] pointer-events-none" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
<div>
<textarea className="w-full bg-transparent border-b border-[#222] py-3 text-sm text-[#F0F0F0] placeholder-[#555] focus:outline-none focus:border-[#5B6AF5] transition-colors resize-none" data-i18n-placeholder="form_text" id="form-desc" placeholder="Descreve brevemente o teu maior problema operacional..." rows="3"></textarea>
</div>
<button className="w-full text-xs font-semibold tracking-[0.12em] uppercase bg-[#161616] border border-[#222] text-[#F0F0F0] py-4 rounded-md hover:border-[#5B6AF5] hover:text-[#5B6AF5] transition-all flex justify-center items-center gap-2" id="submit-btn" type="submit">
<span data-i18n="form_btn">Submeter Pedido de Auditoria</span>
<iconify-icon className="animate-spin hidden" icon="solar:refresh-circle-linear" id="spinner" width="16"></iconify-icon>
</button>
<div className="hidden text-sm text-[#22C55E] bg-[#22C55E]/10 border border-[#22C55E]/20 p-4 rounded-md mt-4 text-center" data-i18n="form_success" id="form-success">
                            Pedido recebido! Entraremos em contacto em menos de 24 horas.
                        </div>
</form>
</div>

<div className="lg:pl-16 reveal" style={{transitionDelay: '100ms'}}>
<div className="bg-[#111111] p-8 md:p-12 rounded-2xl border border-[#222] h-full flex flex-col justify-center">
<div className="flex items-center gap-3 mb-8">
<div className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse"></div>
<span className="text-xs font-mono text-[#888888] uppercase tracking-wider" data-i18n="cont_info_res">Resposta garantida em menos de 24 horas</span>
</div>
<div className="space-y-6 mb-12">
<a className="flex items-center gap-4 text-[#F0F0F0] hover:text-[#5B6AF5] transition-colors group" href="mailto:geral@lusitech.eu">
<div className="w-10 h-10 rounded-full bg-[#1A1A2E] flex items-center justify-center group-hover:bg-[#5B6AF5]/20 transition-colors">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<span className="text-base font-medium">geral@lusitech.eu</span>
</a>
<a className="flex items-center gap-4 text-[#F0F0F0] hover:text-[#5B6AF5] transition-colors group" href="tel:+351917911767">
<div className="w-10 h-10 rounded-full bg-[#1A1A2E] flex items-center justify-center group-hover:bg-[#5B6AF5]/20 transition-colors">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<span className="text-base font-medium">+351 917 911 767</span>
</a>
<div className="flex gap-4 pt-2">
<a className="w-10 h-10 rounded-full border border-[#222] flex items-center justify-center text-[#888] hover:text-[#5B6AF5] hover:border-[#5B6AF5] transition-all" href="https://www.instagram.com/lusitech.ai/" target="_blank">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-[#222] flex items-center justify-center text-[#888] hover:text-[#5B6AF5] hover:border-[#5B6AF5] transition-all" href="https://linkedin.com/company/lusitech-ai" target="_blank">
<iconify-icon icon="solar:suitcase-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="pt-8 border-t border-[#222]">
<p className="text-sm text-[#888888] mb-4" data-i18n="cont_or">Ou agenda directamente:</p>
<a className="inline-block text-xs font-semibold tracking-[0.12em] uppercase bg-gradient-to-r from-[#5B6AF5] to-[#8B5CF6] text-white px-6 py-3 rounded-md hover:shadow-[0_0_16px_rgba(91,106,245,0.4)] transition-all" data-i18n="cont_btn" href="https://cal.com/lusitech/reuniao-de-auditoria" target="_blank">Agendar Auditoria</a>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-[#222222] bg-[#0A0A0A]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

<div className="md:col-span-1">
<a className="font-display font-semibold tracking-tight text-xl text-[#F0F0F0] flex items-center gap-1 mb-4" href="#">
                        LusiTech<span className="w-1.5 h-1.5 rounded-full bg-[#5B6AF5] mt-1"></span>
</a>
<p className="text-xs text-[#888888]" data-i18n="foot_tag">Inteligência que trabalha. Resultados que ficam.</p>
</div>

<div className="flex flex-col gap-3">
<a className="text-xs text-[#888888] hover:text-[#F0F0F0] transition-colors w-fit" data-i18n="nav_services" href="#servicos">Serviços</a>
<a className="text-xs text-[#888888] hover:text-[#F0F0F0] transition-colors w-fit" data-i18n="nav_process" href="#processo">Processo</a>
<a className="text-xs text-[#888888] hover:text-[#F0F0F0] transition-colors w-fit" data-i18n="nav_results" href="#resultados">Resultados</a>
<a className="text-xs text-[#888888] hover:text-[#F0F0F0] transition-colors w-fit" data-i18n="nav_faq" href="#faq">FAQ</a>
<a className="text-xs text-[#888888] hover:text-[#F0F0F0] transition-colors w-fit" data-i18n="nav_contact" href="#contacto">Contacto</a>
</div>

<div className="flex flex-col gap-3">
<a className="text-xs text-[#888888] hover:text-[#F0F0F0] transition-colors w-fit" href="mailto:geral@lusitech.eu">geral@lusitech.eu</a>
<a className="text-xs text-[#888888] hover:text-[#F0F0F0] transition-colors w-fit" href="tel:+351917911767">+351 917 911 767</a>
</div>

<div className="flex flex-col gap-3">
<a className="text-xs text-[#888888] hover:text-[#F0F0F0] transition-colors w-fit" href="https://www.instagram.com/lusitech.ai/" target="_blank">Instagram</a>
<a className="text-xs text-[#888888] hover:text-[#F0F0F0] transition-colors w-fit" href="https://linkedin.com/company/lusitech-ai" target="_blank">LinkedIn</a>
<a className="text-xs text-[#888888] hover:text-[#F0F0F0] transition-colors w-fit mt-2" data-i18n="foot_priv" href="#">Política de Privacidade</a>
<a className="text-xs text-[#888888] hover:text-[#F0F0F0] transition-colors w-fit" data-i18n="foot_term" href="#">Termos e Condições</a>
</div>
</div>
<div className="border-t border-[#222] pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-[#555555]">
<p data-i18n="foot_copy">© 2025 LusiTech · Portugal · Todos os direitos reservados</p>
</div>
</div>
</footer>


    </>
  );
}
