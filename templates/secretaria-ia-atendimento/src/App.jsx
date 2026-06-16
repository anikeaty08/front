import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    // progress bar
    const progressBar = document.getElementById('progressBar');
    window.addEventListener('scroll', () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const docHeight = (document.documentElement.scrollHeight - document.documentElement.clientHeight) || 1;
      const progress = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
      progressBar.style.width = progress + '%';
    });

    // year
    document.getElementById('year').textContent = new Date().getFullYear();

    // modal open/close
    const openButtons = document.querySelectorAll('[data-open]');
    const closeButtons = document.querySelectorAll('[data-close]');
    function openModal(id){
      const el = document.getElementById(id);
      if(!el) return;
      el.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    }
    function closeModal(id){
      const el = document.getElementById(id);
      if(!el) return;
      el.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }
    openButtons.forEach(btn => btn.addEventListener('click', () => openModal(btn.getAttribute('data-open'))));
    closeButtons.forEach(btn => btn.addEventListener('click', () => closeModal(btn.getAttribute('data-close'))));
    window.addEventListener('keydown', (e) => { if(e.key === 'Escape') closeModal('leadModal'); });

    // checklist
    const checks = new Set();
    const checkScore = document.getElementById('checkScore');
    const checkRows = document.querySelectorAll('.checkrow');

    function renderCheckScore(){
      const n = checks.size;
      if(n === 0){
        checkScore.textContent = 'Marque acima para ver um diagnóstico rápido.';
        return;
      }
      const msg =
        n <= 1 ? 'Sinal amarelo: pequenos ajustes já tendem a melhorar resposta e agendamento.' :
        n <= 3 ? 'Aqui existe perda relevante no WhatsApp. Um playbook + rotinas costuma destravar conversão.' :
        'Você provavelmente está perdendo muitos pacientes por inconsistência e demora. Um sistema completo é prioridade.';
      checkScore.textContent = `${n} ponto(s) marcado(s). ${msg}`;
    }

    checkRows.forEach(row => {
      row.addEventListener('click', () => {
        const key = row.getAttribute('data-check');
        const pressed = row.getAttribute('aria-pressed') === 'true';
        row.setAttribute('aria-pressed', String(!pressed));

        const icon = row.querySelector('iconify-icon');
        if(!pressed){
          checks.add(key);
          row.classList.add('border-[#2D6A4F]/30', 'bg-[#EAF4F0]');
          icon.classList.remove('hidden');
        } else {
          checks.delete(key);
          row.classList.remove('border-[#2D6A4F]/30', 'bg-[#EAF4F0]');
          icon.classList.add('hidden');
        }
        renderCheckScore();
      });
    });

    // demo scenarios
    const scenarios = {
      abertura: {
        title: 'Primeiro contato — sem motivo',
        sub: 'Abrir com acolhimento e coletar contexto sem pressão.',
        tagText: 'prioridade',
        tagClass: 'bg-[#FAF0F3] text-[#8B2E4A]',
        patient: 'Olá, gostaria de informações sobre consulta.',
        agent:
          'Olá! Que bom ter você por aqui.\\n\\n' +
          'Para eu te ajudar da forma mais completa possível, pode me contar um pouquinho do que te trouxe até nós? Cada história é única, e queremos entender a sua.',
        why: 'Uma pergunta aberta cria segurança e evita atendimento genérico. Personalização aumenta resposta.'
      },
      preco: {
        title: 'Preço/convênio — sem perder o lead',
        sub: 'Contextualizar valor e manter a conversa viva com próximo passo.',
        tagText: 'alta frequência',
        tagClass: 'bg-[#FFF3E6] text-[#B7560A]',
        patient: 'Vocês atendem convênio? E qual o valor da consulta?',
        agent:
          'Entendo sua pergunta. Hoje o atendimento é particular, mas posso te explicar como isso costuma funcionar na prática.\\n\\n' +
          'A consulta é onde o médico avalia seu caso com profundidade e define um plano. E, quando há exames, em muitos casos você consegue realizar pelo seu plano.\\n\\n' +
          'Se você me contar rapidamente qual convênio você tem e qual sua principal dúvida, eu te digo o melhor caminho para você.',
        why: 'Não “bate na objeção”. Você reduz risco percebido, dá contexto e puxa 1–2 perguntas para continuar a conversa.'
      },
      sensivel: {
        title: 'Caso sensível — acolher antes de informar',
        sub: 'Primeira frase precisa reconhecer a dor. Só depois vem qualquer orientação.',
        tagText: 'sensibilidade',
        tagClass: 'bg-[#FAF0F3] text-[#8B2E4A]',
        patient: 'Passei por uma perda recente. Quero saber se tem algo que eu possa fazer.',
        agent:
          'Sinto muito pelo que você passou. Isso dói de verdade, e faz sentido você querer respostas.\\n\\n' +
          'O mais importante agora é a gente entender seu histórico com cuidado e sem pressa, para investigar causas e construir um plano claro.\\n\\n' +
          'Você prefere me contar quando foi essa perda e se você já fez algum exame depois disso?',
        why: 'Acolhimento primeiro evita ruído, aumenta confiança e protege a experiência do paciente em um momento vulnerável.'
      },
      reativar: {
        title: 'Reativação — lead que sumiu',
        sub: 'Mensagem curta, humana, sem pressão.',
        tagText: 'follow-up',
        tagClass: 'bg-[#EAF4F0] text-[#2D6A4F]',
        patient: '(sem resposta há alguns dias)',
        agent:
          'Oi, [Nome]. Tudo bem?\\n\\n' +
          'Passei para ver se você ficou com alguma dúvida ou se posso te ajudar em algo.\\n\\n' +
          'Se o momento não estiver bom agora, tudo bem — estou por aqui quando você precisar.',
        why: 'A frase “tudo bem” remove pressão e aumenta a chance de resposta. Reativação funciona melhor sem pitch.'
      }
    };

    const demoTitle = document.getElementById('demoTitle');
    const demoSub = document.getElementById('demoSub');
    const demoTag = document.getElementById('demoTag');
    const demoPatient = document.getElementById('demoPatient');
    const demoAgent = document.getElementById('demoAgent');
    const demoWhy = document.getElementById('demoWhy');
    const scenarioBtns = document.querySelectorAll('.scenarioBtn');

    function setScenario(key){
      const s = scenarios[key];
      if(!s) return;

      demoTitle.textContent = s.title;
      demoSub.textContent = s.sub;

      demoTag.textContent = s.tagText;
      demoTag.className = 'rounded-full px-3 py-1 text-xs font-semibold ' + s.tagClass;

      demoPatient.textContent = s.patient;
      demoAgent.innerHTML = s.agent.replaceAll('\\n', '<br>');
      demoWhy.textContent = s.why;

      scenarioBtns.forEach(b => {
        const active = b.getAttribute('data-s') === key;
        b.classList.toggle('bg-[#1C1418]', active);
        b.classList.toggle('text-white', active);
        b.classList.toggle('border-black/10', !active);
        b.classList.toggle('border-[#1C1418]', active);
      });
    }

    setScenario('abertura');
    scenarioBtns.forEach(btn => btn.addEventListener('click', () => setScenario(btn.getAttribute('data-s'))));

    // copy demo
    const copyBtn = document.getElementById('copyBtn');
    const copyToast = document.getElementById('copyToast');
    copyBtn.addEventListener('click', async () => {
      const text = demoAgent.innerText.trim();
      try{
        await navigator.clipboard.writeText(text);
        copyToast.classList.remove('hidden');
        setTimeout(() => copyToast.classList.add('hidden'), 1400);
      } catch(e){
        copyToast.textContent = 'Não foi possível copiar neste navegador.';
        copyToast.classList.remove('hidden');
        setTimeout(() => {
          copyToast.textContent = 'Copiado.';
          copyToast.classList.add('hidden');
        }, 1800);
      }
    });

    // lead form -> build WhatsApp text + link
    const leadForm = document.getElementById('leadForm');
    const leadDone = document.getElementById('leadDone');
    const waLink = document.getElementById('waLink');
    const copyLead = document.getElementById('copyLead');
    const copyLeadToast = document.getElementById('copyLeadToast');

    function onlyDigits(str){ return (str || '').replace(/\D/g, ''); }

    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nome = document.getElementById('fNome').value.trim();
      const esp = document.getElementById('fEsp').value.trim();
      const wppRaw = document.getElementById('fWpp').value.trim();
      const msg = document.getElementById('fMsg').value.trim();

      const wppDigits = onlyDigits(wppRaw);
      const phone = wppDigits.length >= 10 ? (wppDigits.startsWith('55') ? wppDigits : ('55' + wppDigits)) : '';

      const text =
`Olá! Quero aplicar o Agente de Atendimento na minha clínica.

Nome: ${nome}
Especialidade: ${esp}
Contato: ${wppRaw}

Contexto atual:
${msg || '-'} 

Podemos marcar uma conversa rápida para diagnóstico do atendimento?`;

      const encoded = encodeURIComponent(text);
      const href = phone ? `https://wa.me/${phone}?text=${encoded}` : `https://wa.me/?text=${encoded}`;
      waLink.setAttribute('href', href);

      copyLead.onclick = async () => {
        try{
          await navigator.clipboard.writeText(text);
          copyLeadToast.classList.remove('hidden');
          setTimeout(() => copyLeadToast.classList.add('hidden'), 1400);
        } catch(err){
          copyLeadToast.textContent = 'Não foi possível copiar neste navegador.';
          copyLeadToast.classList.remove('hidden');
          setTimeout(() => {
            copyLeadToast.textContent = 'Copiado.';
            copyLeadToast.classList.add('hidden');
          }, 1800);
        }
      };

      leadDone.classList.remove('hidden');
      leadDone.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-x-0 top-0 z-50 h-1 bg-transparent">
<div className="h-1 w-0 bg-gradient-to-r from-[#C45C7A] via-[#9B7DB8] to-[#C4924A]" id="progressBar" style={{width: '100%'}}></div>
</div>

<header className="sticky top-0 z-40 border-b border-black/5 bg-[#FFFBF8]/80 backdrop-blur">
<div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
<a className="flex items-center gap-3" href="#top">
<div className="flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 bg-white">
<span className="text-sm font-semibold tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>AA</span>
</div>
<div className="leading-tight">
<div className="text-sm font-semibold tracking-tight">Agente de Atendimento</div>
<div className="text-xs text-black/50">para clínicas médicas</div>
</div>
</a>
<nav className="hidden items-center gap-6 md:flex">
<a className="text-sm text-black/70 hover:text-black" href="#como-funciona">Como funciona</a>
<a className="text-sm text-black/70 hover:text-black" href="#prova">Prova</a>
<a className="text-sm text-black/70 hover:text-black" href="#demo">Demo</a>
<a className="text-sm text-black/70 hover:text-black" href="#planos">Planos</a>
</nav>
<div className="flex items-center gap-2">
<a className="hidden rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-black/80 hover:bg-black/[0.02] sm:inline-flex" href="#demo">Ver demo</a>
<button className="inline-flex items-center gap-2 rounded-xl bg-[#1C1418] px-4 py-2 text-sm font-semibold text-white hover:bg-black" data-open="leadModal">
<iconify-icon icon="solar:chat-round-dots-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
          Agendar conversa
        </button>
</div>
</div>
</header>

<main className="relative" id="top">
<section className="relative overflow-hidden bg-[#1C1418]">
<div className="absolute top-0 right-0 bottom-0 left-0">
<div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#C45C7A]/25 blur-3xl"></div>
<div className="-right-24 -top-16 bg-[#9B7DB8]/20 w-80 h-80 rounded-full absolute blur-3xl"></div>
<div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C4924A]/10 blur-3xl"></div>
</div>
<div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
<div className="grid gap-10 lg:grid-cols-2 lg:items-center">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
<span className="h-1.5 w-1.5 rounded-full bg-[#C45C7A]"></span>
              Scripts + qualificação + follow-up com padrão de excelência
            </div>
<h1 className="text-3xl font-semibold tracking-tight text-[#FFFBF8] sm:text-4xl lg:text-5xl" style={{fontFamily: '\'Playfair Display\', serif'}}>
              Transforme o primeiro “oi” em <span className="text-[#E8A0B4] italic font-semibold">confiança</span> — e a confiança em <span className="font-semibold italic text-[#E8C98A]">consultas</span>.
            </h1>
<p className="max-w-xl text-sm leading-7 text-white/60 sm:text-base">
              Um sistema de atendimento que parece humano, acolhe com contexto clínico e conduz com clareza.
              Feito para médicos que querem parar de perder paciente no WhatsApp e ganhar previsibilidade no fluxo de agenda.
            </p>
<div className="flex flex-col gap-3 sm:flex-row sm:items-center">
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#1C1418] hover:bg-white/90" data-open="leadModal">
<iconify-icon icon="solar:calendar-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
                Ver se serve para minha clínica
              </button>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-transparent px-5 py-3 text-sm font-semibold text-white/80 hover:bg-white/5" href="#prova">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
                Ver a prova e os dados
              </a>
</div>
<div className="grid max-w-xl grid-cols-2 gap-3 pt-2 sm:grid-cols-4">
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="text-xl font-semibold text-white tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>5min</div>
<div className="mt-1 text-xs text-white/55">SLA de resposta</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="text-xl font-semibold tracking-tight text-white" style={{fontFamily: '\'Playfair Display\', serif'}}>4</div>
<div className="mt-1 text-xs text-white/55">perguntas-chave</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="text-xl font-semibold tracking-tight text-white" style={{fontFamily: '\'Playfair Display\', serif'}}>+clareza</div>
<div className="mt-1 text-xs text-white/55">menos “vou pensar”</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="text-xl font-semibold text-white tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>humano</div>
<div className="mt-1 text-xs text-white/55">tom acolhedor</div>
</div>
</div>
</div>
<div className="relative">
<div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/30 sm:p-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10">
<iconify-icon className="text-white/80" icon="solar:whatsapp-linear" strokeWidth="1.5" style={{fontSize: '1.5rem'}}></iconify-icon>
</div>
<div className="leading-tight">
<div className="text-sm font-semibold text-white">WhatsApp • Atendimento</div>
<div className="text-xs text-white/55">Acolher → Conectar → Propor</div>
</div>
</div>
<div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70">
                  ao vivo
                </div>
</div>
<div className="mt-5 space-y-4">
<div className="flex items-end gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm">🙋</div>
<div className="max-w-[80%] rounded-2xl rounded-bl-md bg-white/10 p-4 text-sm leading-6 text-white/80">
                    Oi, gostaria de informações sobre consulta.
                  </div>
</div>
<div className="flex items-end justify-end gap-3">
<div className="max-w-[80%] rounded-2xl rounded-br-md bg-gradient-to-br from-[#C45C7A] to-[#8B2E4A] p-4 text-sm leading-6 text-white">
                    Que bom ter você por aqui. Para eu te ajudar da forma mais completa, você pode me contar <span className="text-[#F8D7E1] font-semibold not-italic">um pouquinho</span> do que te trouxe até nós?
                  </div>
<div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm">🧑‍⚕️</div>
</div>
<div className="grid gap-3 sm:grid-cols-3">
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" style={{fontSize: '1.1rem'}}></iconify-icon>
                      Tom certo
                    </div>
<p className="mt-2 text-xs leading-6 text-white/60">
                      Valida emoção antes de informar. Sem frieza, sem “robô”.
                    </p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
<iconify-icon icon="solar:route-linear" strokeWidth="1.5" style={{fontSize: '1.1rem'}}></iconify-icon>
                      Estrutura
                    </div>
<p className="mt-2 text-xs leading-6 text-white/60">
                      Coleta contexto com 1–2 perguntas por mensagem.
                    </p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
<iconify-icon className="" icon="solar:calendar-add-linear" strokeWidth="1.5" style={{fontSize: '1.1rem'}}></iconify-icon>
                      Próximo passo
                    </div>
<p className="mt-2 text-xs leading-6 text-white/60">
                      Sempre termina com ação: horário, pergunta ou proposta.
                    </p>
</div>
</div>
</div>
</div>
<div className="pointer-events-none absolute -bottom-8 -left-8 hidden rounded-3xl border border-black/5 bg-white/70 p-4 shadow-xl backdrop-blur sm:block">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FAF0F3]">
<iconify-icon className="text-[#8B2E4A]" icon="solar:bolt-linear" strokeWidth="1.5" style={{fontSize: '1.4rem'}}></iconify-icon>
</div>
<div className="leading-tight">
<div className="text-sm font-semibold tracking-tight">Velocidade é empatia</div>
<div className="text-xs text-black/55">SLA + playbooks + reativação</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-2 border-t border-white/10 pt-8">
<p className="text-xs uppercase tracking-[0.22em] text-white/40">Para quem é</p>
<div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2 text-sm font-semibold text-white/80">
<iconify-icon icon="solar:stethoscope-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
                Consultórios
              </div>
<p className="leading-6 text-xs text-white/55 mt-2">Médicos que dependem de indicação.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2 text-sm font-semibold text-white/80">
<iconify-icon icon="solar:hospital-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
                Clínicas
              </div>
<p className="leading-6 text-xs text-white/55 mt-2">Operações com recepção e WhatsApp com alto volume.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2 text-sm font-semibold text-white/80">
<iconify-icon icon="solar:chat-square-call-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
                Atendimento
              </div>
<p className="mt-2 text-xs leading-6 text-white/55">Equipes que precisam padronizar sem “robotizar”.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2 text-sm font-semibold text-white/80">
<iconify-icon icon="solar:chart-2-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
                Crescimento
              </div>
<p className="leading-6 text-xs text-white/55 mt-2">Quem quer aumentar conversão sem aumentar tráfego.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#1C1418] border-black/5 border-b relative">
<div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
<div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10">
<div className="absolute -left-6 -top-12 text-8xl font-semibold text-[#C45C7A]/15" style={{fontFamily: '\'Playfair Display\', serif'}}>“</div>
<p className="text-xl font-semibold tracking-tight text-[#FFFBF8] sm:text-2xl" style={{fontFamily: '\'Playfair Display\', serif'}}>
              Quando o paciente manda a primeira mensagem, raramente ele está pedindo só um horário.
              Ele está pedindo <span className="text-[#E8A0B4] italic font-semibold">segurança</span>.
            </p>
<p className="mt-4 text-sm leading-7 text-white/55">
              O agente de atendimento é um conjunto de padrões (tom, perguntas, scripts e follow-up) para que sua clínica responda com consistência — e sem depender de “talento individual”.
            </p>
</div>
<div className="space-y-4">
<div className="rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="flex items-start gap-3">
<div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10">
<iconify-icon className="text-white/80" icon="solar:heart-pulse-linear" strokeWidth="1.5" style={{fontSize: '1.5rem'}}></iconify-icon>
</div>
<div className="">
<div className="text-sm font-semibold text-white/85">Acolhimento com precisão</div>
<p className="mt-1 text-xs leading-6 text-white/55">
                    Não é “texto bonito”. É uma sequência que reduz ansiedade e aumenta resposta.
                  </p>
</div>
</div>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="flex items-start gap-3">
<div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10">
<iconify-icon className="text-white/80" icon="solar:settings-linear" strokeWidth="1.5" style={{fontSize: '1.5rem'}}></iconify-icon>
</div>
<div className="">
<div className="text-sm font-semibold text-white/85">Operação padronizada</div>
<p className="mt-1 text-xs leading-6 text-white/55">
                    SLA, tags, critérios de qualificação e rotinas de reativação.
                  </p>
</div>
</div>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="flex items-start gap-3">
<div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10">
<iconify-icon className="text-white/80" icon="solar:shield-user-linear" strokeWidth="1.5" style={{fontSize: '1.5rem'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-white/85">Sem risco reputacional</div>
<p className="mt-1 text-xs leading-6 text-white/55">
                    Linguagem segura, inclusiva e adequada a cenários sensíveis.
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-black/5" id="prova">
<div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
<div className="grid gap-10 lg:grid-cols-2 lg:items-end">
<div className="">
<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8B2E4A]/80">Prova &amp; diagnóstico</p>
<h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl" style={{fontFamily: '\'Playfair Display\', serif'}}>
              O que normalmente derruba a conversão no WhatsApp
            </h2>
<p className="mt-3 max-w-xl text-sm leading-7 text-black/60 sm:text-base">
              Em operações médicas, o gargalo quase sempre está no atendimento: demora, respostas frias,
              “preço sem contexto”, falta de qualificação e ausência de próximo passo.
            </p>
</div>
<div className="rounded-3xl border border-black/10 bg-white p-6">
<div className="flex items-center justify-between gap-4">
<div>
<div className="text-sm font-semibold tracking-tight">Checklist rápido</div>
<div className="text-xs text-black/55">marque o que acontece hoje</div>
</div>
<div className="rounded-full border border-black/10 bg-black/[0.02] px-3 py-1 text-xs font-semibold text-black/60">2 min</div>
</div>
<div className="mt-5 grid gap-3">
<button aria-pressed="false" className="checkrow group flex items-center justify-between rounded-2xl border border-black/10 bg-white px-4 py-3 text-left hover:bg-black/[0.02]" data-check="0">
<span className="text-sm text-black/70">Demora para responder em horário comercial</span>
<span className="checkui flex h-6 w-6 items-center justify-center rounded-full border border-black/10 bg-white">
<iconify-icon className="hidden text-[#2D6A4F]" icon="solar:check-circle-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
</span>
</button>
<button aria-pressed="false" className="checkrow group flex items-center justify-between rounded-2xl border border-black/10 bg-white px-4 py-3 text-left hover:bg-black/[0.02]" data-check="1">
<span className="text-sm text-black/70">Paciente pergunta “valor” e a conversa morre</span>
<span className="checkui flex h-6 w-6 items-center justify-center rounded-full border border-black/10 bg-white">
<iconify-icon className="hidden text-[#2D6A4F]" icon="solar:check-circle-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
</span>
</button>
<button aria-pressed="false" className="checkrow group flex items-center justify-between rounded-2xl border border-black/10 bg-white px-4 py-3 text-left hover:bg-black/[0.02]" data-check="2">
<span className="text-sm text-black/70">A equipe faz muitas perguntas de uma vez</span>
<span className="checkui flex h-6 w-6 items-center justify-center rounded-full border border-black/10 bg-white">
<iconify-icon className="hidden text-[#2D6A4F]" icon="solar:check-circle-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
</span>
</button>
<button aria-pressed="false" className="checkrow group flex items-center justify-between rounded-2xl border border-black/10 bg-white px-4 py-3 text-left hover:bg-black/[0.02]" data-check="3">
<span className="text-sm text-black/70">Não existe rotina de reativação (lead frio)</span>
<span className="checkui flex h-6 w-6 items-center justify-center rounded-full border border-black/10 bg-white">
<iconify-icon className="hidden text-[#2D6A4F]" icon="solar:check-circle-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
</span>
</button>
<button aria-pressed="false" className="checkrow group flex items-center justify-between rounded-2xl border border-black/10 bg-white px-4 py-3 text-left hover:bg-black/[0.02]" data-check="4">
<span className="text-sm text-black/70">As respostas variam demais entre atendentes</span>
<span className="checkui flex h-6 w-6 items-center justify-center rounded-full border border-black/10 bg-white">
<iconify-icon className="hidden text-[#2D6A4F]" icon="solar:check-circle-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
</span>
</button>
</div>
<div className="mt-5 rounded-2xl border border-black/10 bg-[#FAF0F3] p-4">
<div className="flex items-start gap-3">
<div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl bg-white/70">
<iconify-icon className="text-[#8B2E4A]" icon="solar:lightbulb-linear" strokeWidth="1.5" style={{fontSize: '1.4rem'}}></iconify-icon>
</div>
<div className="flex-1">
<div className="text-sm font-semibold tracking-tight text-black/80">Resultado do seu checklist</div>
<p className="mt-1 text-xs leading-6 text-black/60" id="checkScore">
                    Marque acima para ver um diagnóstico rápido.
                  </p>
</div>
</div>
<div className="mt-3 flex flex-col gap-2 sm:flex-row">
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1C1418] px-4 py-2 text-sm font-semibold text-white hover:bg-black" data-open="leadModal" id="checkCta">
<iconify-icon icon="solar:chat-round-dots-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
                  Quero um plano para minha clínica
                </button>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-black/75 hover:bg-black/[0.02]" href="#como-funciona">
<iconify-icon icon="solar:route-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
                  Ver como funciona
                </a>
</div>
</div>
</div>
</div>
<div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
<div className="rounded-3xl border border-black/10 bg-white p-5">
<div className="text-2xl font-semibold tracking-tight text-[#8B2E4A]" style={{fontFamily: '\'Playfair Display\', serif'}}>SLA</div>
<p className="mt-1 text-xs text-black/55">Regra de resposta rápida e rotas de prioridade.</p>
</div>
<div className="rounded-3xl border border-black/10 bg-white p-5">
<div className="text-2xl font-semibold tracking-tight text-[#8B2E4A]" style={{fontFamily: '\'Playfair Display\', serif'}}>Scripts</div>
<p className="mt-1 text-xs text-black/55">Abertura, preço, casos sensíveis, reativação.</p>
</div>
<div className="rounded-3xl border border-black/10 bg-white p-5">
<div className="text-2xl font-semibold tracking-tight text-[#8B2E4A]" style={{fontFamily: '\'Playfair Display\', serif'}}>Qualificar</div>
<p className="mt-1 text-xs text-black/55">4 infos-chave para personalizar sem travar.</p>
</div>
<div className="rounded-3xl border border-black/10 bg-white p-5">
<div className="text-2xl font-semibold tracking-tight text-[#8B2E4A]" style={{fontFamily: '\'Playfair Display\', serif'}}>Objeções</div>
<p className="mt-1 text-xs text-black/55">Respostas que atacam o medo real, não a frase.</p>
</div>
<div className="rounded-3xl border border-black/10 bg-white p-5">
<div className="text-2xl font-semibold tracking-tight text-[#8B2E4A]" style={{fontFamily: '\'Playfair Display\', serif'}}>Treino</div>
<p className="mt-1 text-xs text-black/55">Padronização da equipe para consistência.</p>
</div>
</div>
</div>
</section>

<section className="border-b border-black/5 bg-[#FFFBF8]" id="como-funciona">
<div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
<div className="grid gap-10 lg:grid-cols-2 lg:items-start">
<div className="">
<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8B2E4A]/80">Como funciona</p>
<h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl" style={{fontFamily: '\'Playfair Display\', serif'}}>
              Você não compra “mensagens”. Você compra um <span className="italic font-semibold text-[#8B2E4A]">sistema</span>.
            </h2>
<p className="mt-3 max-w-xl text-sm leading-7 text-black/60 sm:text-base">
              A entrega é ajustada ao seu contexto clínico: especialidade, ticket, convênios, agenda, equipe e tom de marca.
            </p>
<div className="mt-6 space-y-3">
<div className="rounded-3xl border border-black/10 bg-white p-6">
<div className="flex items-start gap-3">
<div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FAF0F3]">
<iconify-icon className="text-[#8B2E4A]" icon="solar:magnifer-linear" strokeWidth="1.5" style={{fontSize: '1.5rem'}}></iconify-icon>
</div>
<div className="">
<div className="text-sm font-semibold tracking-tight">1) Diagnóstico do atendimento</div>
<p className="mt-1 text-xs leading-6 text-black/60">
                      Mapeamos gargalos: tempo de resposta, padrões de perda, objeções e inconsistências entre atendentes.
                    </p>
</div>
</div>
</div>
<div className="rounded-3xl border border-black/10 bg-white p-6">
<div className="flex items-start gap-3">
<div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#EAF4F0]">
<iconify-icon className="text-[#2D6A4F]" icon="solar:document-text-linear" strokeWidth="1.5" style={{fontSize: '1.5rem'}}></iconify-icon>
</div>
<div className="">
<div className="text-sm font-semibold tracking-tight">2) Playbooks + scripts por cenário</div>
<p className="mt-1 text-xs leading-6 text-black/60">
                      Abertura, qualificação, preço/convênio, casos sensíveis, paciente de outra cidade e reativação.
                    </p>
</div>
</div>
</div>
<div className="rounded-3xl border border-black/10 bg-white p-6">
<div className="flex items-start gap-3">
<div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFF3E6]">
<iconify-icon className="text-[#B7560A]" icon="solar:users-group-rounded-linear" strokeWidth="1.5" style={{fontSize: '1.5rem'}}></iconify-icon>
</div>
<div className="">
<div className="text-sm font-semibold tracking-tight">3) Treinamento + ajustes na equipe</div>
<p className="mt-1 text-xs leading-6 text-black/60">
                      Simulações reais, padrões de linguagem, e regras simples (ex.: máximo 2 perguntas por mensagem).
                    </p>
</div>
</div>
</div>
<div className="rounded-3xl border border-black/10 bg-white p-6">
<div className="flex items-start gap-3">
<div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F0EAF8]">
<iconify-icon className="text-[#5B3F8A]" icon="solar:chart-square-linear" strokeWidth="1.5" style={{fontSize: '1.5rem'}}></iconify-icon>
</div>
<div className="">
<div className="text-sm font-semibold tracking-tight">4) Rotina de melhoria contínua</div>
<p className="mt-1 text-xs leading-6 text-black/60">
                      O atendimento evolui com as objeções e dúvidas reais do seu público (sem perder padronização).
                    </p>
</div>
</div>
</div>
</div>
<div className="mt-6 flex flex-col gap-3 sm:flex-row">
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1C1418] px-5 py-3 text-sm font-semibold text-white hover:bg-black" data-open="leadModal">
<iconify-icon icon="solar:calendar-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
                Agendar diagnóstico
              </button>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-black/75 hover:bg-black/[0.02]" href="#demo">
<iconify-icon icon="solar:chat-round-line-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
                Ver exemplos
              </a>
</div>
</div>
<div className="rounded-3xl border border-black/10 bg-white p-6">
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-semibold tracking-tight">Fluxo de qualificação</div>
<div className="text-xs text-black/55">4 passos para personalizar sem cansar</div>
</div>
<div className="rounded-full border border-black/10 bg-black/[0.02] px-3 py-1 text-xs font-semibold text-black/60">modelo</div>
</div>
<div className="mt-6 grid gap-3">
<div className="rounded-2xl border border-black/10 bg-[#FAF0F3] p-4">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#C45C7A] text-xs font-semibold text-white">1</div>
<div className="text-sm font-semibold tracking-tight">Acolher</div>
</div>
<p className="mt-2 text-xs leading-6 text-black/65">
                  “Seja bem-vinda! Pode me contar um pouquinho do que te trouxe até aqui?”
                </p>
</div>
<div className="rounded-2xl border border-black/10 bg-white p-4">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#C45C7A] text-xs font-semibold text-white">2</div>
<div className="text-sm font-semibold tracking-tight">Tempo</div>
</div>
<p className="mt-2 text-xs leading-6 text-black/65">
                  “Há quanto tempo isso está acontecendo / você está nessa jornada?”
                </p>
</div>
<div className="rounded-2xl border border-black/10 bg-white p-4">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#C45C7A] text-xs font-semibold text-white">3</div>
<div className="text-sm font-semibold tracking-tight">Histórico</div>
</div>
<p className="mt-2 text-xs leading-6 text-black/65">
                  “Você já fez exames ou tem algum diagnóstico prévio?”
                </p>
</div>
<div className="rounded-2xl border border-black/10 bg-white p-4">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#C45C7A] text-xs font-semibold text-white">4</div>
<div className="text-sm font-semibold tracking-tight">Intenção</div>
</div>
<p className="mt-2 text-xs leading-6 text-black/65">
                  “O que você espera dessa consulta? Mais clareza, plano de ação, segunda opinião…?”
                </p>
</div>
</div>
<div className="mt-6 rounded-2xl border border-black/10 bg-black/[0.02] p-4">
<div className="flex items-start gap-3">
<div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl bg-white">
<iconify-icon className="text-black/70" icon="solar:danger-triangle-linear" strokeWidth="1.5" style={{fontSize: '1.35rem'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold tracking-tight">Regra operacional</div>
<p className="mt-1 text-xs leading-6 text-black/60">
                    1–2 perguntas por mensagem. Mais do que isso trava a resposta e aumenta ghosting.
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-black/5" id="demo">
<div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
<div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
<div className="">
<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8B2E4A]/80">Demo rápida</p>
<h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl" style={{fontFamily: '\'Playfair Display\', serif'}}>
              Escolha um cenário e veja o atendimento “como deveria ser”
            </h2>
<p className="mt-3 max-w-2xl text-sm leading-7 text-black/60 sm:text-base">
              Abaixo, exemplos práticos inspirados no book: acolhimento, precisão e condução para próximo passo.
            </p>
</div>
<div className="flex flex-wrap gap-2">
<button className="scenarioBtn rounded-full border bg-white px-4 py-2 text-xs font-semibold text-black/70 hover:bg-black/[0.02] bg-[#1C1418] text-white border-[#1C1418]" data-s="abertura">Primeiro contato</button>
<button className="scenarioBtn rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-black/70 hover:bg-black/[0.02]" data-s="preco">Preço/convênio</button>
<button className="scenarioBtn rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-black/70 hover:bg-black/[0.02]" data-s="sensivel">Caso sensível</button>
<button className="scenarioBtn rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-black/70 hover:bg-black/[0.02]" data-s="reativar">Reativação</button>
</div>
</div>
<div className="mt-8 grid gap-6 lg:grid-cols-2">
<div className="rounded-3xl border border-black/10 bg-white p-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FAF0F3]">
<iconify-icon className="text-[#8B2E4A]" icon="solar:chat-round-linear" strokeWidth="1.5" style={{fontSize: '1.5rem'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold tracking-tight" id="demoTitle">Primeiro contato — sem motivo</div>
<div className="text-xs text-black/55" id="demoSub">Abrir com acolhimento e coletar contexto sem pressão.</div>
</div>
</div>
<div className="rounded-full px-3 py-1 text-xs font-semibold bg-[#FAF0F3] text-[#8B2E4A]" id="demoTag">prioridade</div>
</div>
<div className="mt-6 space-y-4">
<div className="flex items-end gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F0EAF8] text-sm">🙋</div>
<div className="max-w-[82%] rounded-2xl rounded-bl-md bg-black/[0.04] p-4 text-sm leading-6 text-black/70" id="demoPatient">Olá, gostaria de informações sobre consulta.</div>
</div>
<div className="flex items-end justify-end gap-3">
<div className="max-w-[82%] rounded-2xl rounded-br-md bg-gradient-to-br from-[#C45C7A] to-[#8B2E4A] p-4 text-sm leading-6 text-white" id="demoAgent">Olá! Que bom ter você por aqui.<br/><br/>Para eu te ajudar da forma mais completa possível, pode me contar um pouquinho do que te trouxe até nós? Cada história é única, e queremos entender a sua.</div>
<div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FAF0F3] text-sm">🧑‍⚕️</div>
</div>
<div className="rounded-2xl border border-black/10 bg-[#FAF0F3] p-4">
<div className="flex items-start gap-3">
<div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl bg-white/70">
<iconify-icon className="text-[#8B2E4A]" icon="solar:lightbulb-linear" strokeWidth="1.5" style={{fontSize: '1.35rem'}}></iconify-icon>
</div>
<div className="">
<div className="text-sm font-semibold tracking-tight">Por que isso converte</div>
<p className="mt-1 text-xs leading-6 text-black/60" id="demoWhy">Uma pergunta aberta cria segurança e evita atendimento genérico. Personalização aumenta resposta.</p>
</div>
</div>
</div>
<div className="flex flex-col gap-2 sm:flex-row">
<button className="inline-flex items-center justify-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-black/75 hover:bg-black/[0.02]" id="copyBtn">
<iconify-icon icon="solar:copy-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
                  Copiar resposta
                </button>
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1C1418] px-4 py-2 text-sm font-semibold text-white hover:bg-black" data-open="leadModal">
<iconify-icon icon="solar:chat-round-dots-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
                  Quero isso na minha clínica
                </button>
</div>
<p className="hidden text-xs text-[#2D6A4F]" id="copyToast">Copiado.</p>
</div>
</div>
<div className="rounded-3xl border border-black/10 bg-white p-6">
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-semibold tracking-tight">O que vem junto</div>
<div className="text-xs text-black/55">componentes do agente</div>
</div>
<div className="rounded-full border border-black/10 bg-black/[0.02] px-3 py-1 text-xs font-semibold text-black/60">entrega</div>
</div>
<div className="mt-6 grid gap-3 sm:grid-cols-2">
<div className="rounded-2xl border border-black/10 bg-white p-4">
<div className="flex items-center gap-2 text-sm font-semibold tracking-tight">
<iconify-icon className="text-black/70" icon="solar:document-add-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
                  Scripts por cenário
                </div>
<p className="mt-1 text-xs leading-6 text-black/60">Abertura, qualificação, preço, retorno, online, urgências.</p>
</div>
<div className="rounded-2xl border border-black/10 bg-white p-4">
<div className="flex items-center gap-2 text-sm font-semibold tracking-tight">
<iconify-icon className="text-black/70" icon="solar:shield-check-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
                  Linguagem segura
                </div>
<p className="mt-1 text-xs leading-6 text-black/60">Inclui regras de tom para temas sensíveis e diversidade.</p>
</div>
<div className="rounded-2xl border border-black/10 bg-white p-4">
<div className="flex items-center gap-2 text-sm font-semibold tracking-tight">
<iconify-icon className="text-black/70" icon="solar:clock-circle-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
                  SLA e rotas
                </div>
<p className="mt-1 text-xs leading-6 text-black/60">Prioridades, prazos e quando escalar para o médico.</p>
</div>
<div className="rounded-2xl border border-black/10 bg-white p-4">
<div className="flex items-center gap-2 text-sm font-semibold tracking-tight">
<iconify-icon className="text-black/70" icon="solar:repeat-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
                  Reativação
                </div>
<p className="mt-1 text-xs leading-6 text-black/60">Mensagens curtas e humanas para reduzir perdas silenciosas.</p>
</div>
<div className="rounded-2xl border border-black/10 bg-white p-4 sm:col-span-2">
<div className="flex items-center gap-2 text-sm font-semibold tracking-tight">
<iconify-icon className="text-black/70" icon="solar:pen-new-square-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
                  Adaptação à sua especialidade
                </div>
<p className="mt-1 text-xs leading-6 text-black/60">
                  Ajuste do conteúdo para o seu contexto clínico (sem promessas indevidas e sem “texto pronto” genérico).
                </p>
</div>
</div>
<div className="mt-6 rounded-2xl border border-black/10 bg-black/[0.02] p-4">
<div className="flex items-start gap-3">
<div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl bg-white">
<iconify-icon className="text-black/70" icon="solar:lock-keyhole-linear" strokeWidth="1.5" style={{fontSize: '1.35rem'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold tracking-tight">Confidencialidade</div>
<p className="mt-1 text-xs leading-6 text-black/60">
                    Implementação feita com proteção de informações sensíveis e cuidado com o tom médico.
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#FFFBF8]" id="planos">
<div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
<div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
<div className="">
<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8B2E4A]/80">Planos</p>
<h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl" style={{fontFamily: '\'Playfair Display\', serif'}}>
              Um ponto de partida claro, com espaço para personalização
            </h2>
<p className="mt-3 max-w-2xl text-sm leading-7 text-black/60 sm:text-base">
              Você pode começar com o essencial e evoluir para um atendimento mais completo.
            </p>
</div>
<div className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-xs text-black/60">
            Valores e escopo variam por volume e complexidade clínica.
          </div>
</div>
<div className="mt-8 grid gap-6 lg:grid-cols-3">
<div className="rounded-3xl border border-black/10 bg-white p-6">
<div className="flex items-center justify-between">
<div className="text-sm font-semibold tracking-tight">Essencial</div>
<div className="rounded-full bg-black/[0.04] px-3 py-1 text-xs font-semibold text-black/60">start</div>
</div>
<p className="mt-2 text-sm text-black/60">Organize o WhatsApp com padrão e consistência.</p>
<ul className="mt-5 space-y-3 text-sm text-black/70">
<li className="flex gap-2">
<iconify-icon className="text-[#2D6A4F]" icon="solar:check-circle-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
<span>Scripts para 6 cenários mais comuns</span>
</li>
<li className="flex gap-2">
<iconify-icon className="text-[#2D6A4F]" icon="solar:check-circle-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
<span>Fluxo de qualificação em 4 passos</span>
</li>
<li className="flex gap-2">
<iconify-icon className="text-[#2D6A4F]" icon="solar:check-circle-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
<span>Regras de tom e próximos passos</span>
</li>
</ul>
<button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1C1418] px-4 py-2 text-sm font-semibold text-white hover:bg-black" data-open="leadModal">
<iconify-icon icon="solar:chat-round-dots-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
              Quero cotar
            </button>
</div>
<div className="rounded-3xl border border-black/10 bg-[#1C1418] p-6 text-white shadow-2xl shadow-black/20">
<div className="flex items-center justify-between">
<div className="text-sm font-semibold tracking-tight">Clínica</div>
<div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70">mais escolhido</div>
</div>
<p className="mt-2 text-sm text-white/60">Para equipes com volume e necessidade de padronização forte.</p>
<ul className="mt-5 space-y-3 text-sm text-white/80">
<li className="flex gap-2">
<iconify-icon className="text-[#B8D4C4]" icon="solar:check-circle-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
<span className="">Playbook completo por persona e cenário</span>
</li>
<li className="flex gap-2">
<iconify-icon className="text-[#B8D4C4]" icon="solar:check-circle-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
<span className="">Objeções (preço, convênio, indecisão, descrença)</span>
</li>
<li className="flex gap-2">
<iconify-icon className="text-[#B8D4C4]" icon="solar:check-circle-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
<span className="">SLA + rotas de prioridade + rotina de reativação</span>
</li>
</ul>
<button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#1C1418] hover:bg-white/90" data-open="leadModal">
<iconify-icon icon="solar:calendar-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
              Agendar diagnóstico
            </button>
</div>
<div className="rounded-3xl border border-black/10 bg-white p-6">
<div className="flex items-center justify-between">
<div className="text-sm font-semibold tracking-tight">Premium</div>
<div className="rounded-full bg-black/[0.04] px-3 py-1 text-xs font-semibold text-black/60">sob medida</div>
</div>
<p className="mt-2 text-sm text-black/60">Para operações com múltiplas unidades ou especialidades.</p>
<ul className="mt-5 space-y-3 text-sm text-black/70">
<li className="flex gap-2">
<iconify-icon className="text-[#2D6A4F]" icon="solar:check-circle-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
<span>Arquitetura de atendimento completa</span>
</li>
<li className="flex gap-2">
<iconify-icon className="text-[#2D6A4F]" icon="solar:check-circle-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
<span>Padronização por canal (WhatsApp, telefone, direct)</span>
</li>
<li className="flex gap-2">
<iconify-icon className="text-[#2D6A4F]" icon="solar:check-circle-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
<span>Acompanhamento e ajustes periódicos</span>
</li>
</ul>
<button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-black/75 hover:bg-black/[0.02]" data-open="leadModal">
<iconify-icon icon="solar:inbox-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
              Pedir proposta
            </button>
</div>
</div>
<div className="mt-10 rounded-3xl border border-black/10 bg-white p-6">
<div className="grid gap-6 lg:grid-cols-[1.3fr,0.7fr] lg:items-center">
<div className="">
<h3 className="text-lg font-semibold tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Quer ver isso aplicado na sua especialidade?</h3>
<p className="mt-2 text-sm leading-7 text-black/60">
                Dermatologia, ortopedia, ginecologia, endocrinologia, psiquiatria, odontologia… a estrutura é a mesma:
                acolher, qualificar, dar contexto de valor e conduzir para o próximo passo.
              </p>
</div>
<div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1C1418] px-5 py-3 text-sm font-semibold text-white hover:bg-black" data-open="leadModal">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
                Agendar conversa
              </button>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-black/75 hover:bg-black/[0.02]" href="#top">
<iconify-icon icon="solar:arrow-up-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
                Voltar ao topo
              </a>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-black/5 bg-[#1C1418]">
<div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
<div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
<div>
<div className="text-lg font-semibold tracking-tight text-[#FFFBF8]" style={{fontFamily: '\'Playfair Display\', serif'}}>Agente de Atendimento</div>
<p className="mt-2 max-w-md text-xs leading-6 text-white/50">
              Um sistema de atendimento para clínicas médicas: linguagem, estrutura, rotinas e treino — para elevar conversão com consistência.
            </p>
</div>
<div className="grid gap-6 sm:grid-cols-2">
<div className="">
<div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Contato</div>
<div className="mt-3 space-y-2 text-sm text-white/70">
<button className="inline-flex gap-2 hover:bg-white/10 text-sm font-semibold text-white/80 bg-white/5 border-white/10 border rounded-xl pt-2 pr-4 pb-2 pl-4 gap-x-2 gap-y-2 items-center" data-open="leadModal">
<iconify-icon className="" icon="solar:chat-round-dots-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
                  Falar agora
                </button>
<div className="text-xs text-white/45">Retorno em horário comercial.</div>
</div>
</div>
<div>
<div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Notas</div>
<p className="mt-3 text-xs leading-6 text-white/45">
                Conteúdo adaptado por especialidade e contexto. Linguagem alinhada com ética e segurança do atendimento.
              </p>
</div>
</div>
</div>
<div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
<div className="text-xs text-white/35">© <span id="year">2026</span> — Operação de Atendimento</div>
<div className="text-xs text-white/35">Versão demonstrativa</div>
</div>
</div>
</footer>
</main>

<div className="fixed inset-0 z-50" id="leadModal">
<div className="bg-black/50 absolute top-0 right-0 bottom-0 left-0" data-close="leadModal"></div>
<div className="relative mx-auto flex min-h-full max-w-2xl items-center justify-center px-4 py-10">
<div className="w-full rounded-3xl border border-black/10 bg-white shadow-2xl">
<div className="flex items-start justify-between gap-4 border-b border-black/10 p-6">
<div className="">
<div className="text-lg font-semibold tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Agendar conversa</div>
<p className="mt-1 text-sm text-black/60">
              Conte rapidamente sobre sua clínica. Eu retorno com um diagnóstico inicial do atendimento.
            </p>
</div>
<button aria-label="Fechar" className="rounded-xl border border-black/10 bg-white p-2 text-black/70 hover:bg-black/[0.02]" data-close="leadModal">
<iconify-icon className="" height="24" icon="solar:close-circle-linear" strokeWidth="1.5" style={{fontSize: '1.5rem', color: 'rgb(0, 0, 0)'}} width="24"></iconify-icon>
</button>
</div>
<form className="p-6" id="leadForm">
<div className="grid gap-4 sm:grid-cols-2">
<label className="block">
<span className="text-xs font-semibold uppercase tracking-[0.18em] text-black/50">Seu nome</span>
<input className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-black/80 outline-none placeholder:text-black/35 focus:border-black/20" id="fNome" placeholder="Ex.: Dra. Ana" required=""/>
</label>
<label className="block">
<span className="text-xs font-semibold uppercase tracking-[0.18em] text-black/50">Especialidade</span>
<input className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-black/80 outline-none placeholder:text-black/35 focus:border-black/20" id="fEsp" placeholder="Ex.: Dermatologia" required=""/>
</label>
<label className="block sm:col-span-2">
<span className="text-xs font-semibold uppercase tracking-[0.18em] text-black/50">WhatsApp (ou melhor contato)</span>
<input className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-black/80 outline-none placeholder:text-black/35 focus:border-black/20" id="fWpp" placeholder="(DDD) 00000-0000" required=""/>
</label>
<label className="block sm:col-span-2">
<span className="text-xs font-semibold uppercase tracking-[0.18em] text-black/50">O que acontece hoje?</span>
<textarea className="mt-2 w-full resize-none rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-black/80 outline-none placeholder:text-black/35 focus:border-black/20" id="fMsg" placeholder="Ex.: muita gente pergunta valor e some, demora para responder, equipe varia o tom..." rows="4"></textarea>
</label>
</div>
<div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<p className="text-xs text-black/50">
              Ao enviar, você concorda em receber retorno sobre este diagnóstico.
            </p>
<div className="flex gap-2">
<button className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-black/75 hover:bg-black/[0.02]" data-close="leadModal" type="button">
                Cancelar
              </button>
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1C1418] px-4 py-2 text-sm font-semibold text-white hover:bg-black" type="submit">
<iconify-icon icon="solar:paper-plane-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
                Enviar
              </button>
</div>
</div>
<div className="mt-4 hidden rounded-2xl border border-black/10 bg-[#EAF4F0] p-4" id="leadDone">
<div className="flex items-start gap-3">
<div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl bg-white/70">
<iconify-icon className="text-[#2D6A4F]" icon="solar:check-circle-linear" strokeWidth="1.5" style={{fontSize: '1.35rem'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold tracking-tight">Recebido</div>
<p className="mt-1 text-xs leading-6 text-black/60">
                  Mensagem preparada para envio no WhatsApp. Se preferir, copie e mande agora.
                </p>
<div className="mt-3 flex flex-col gap-2 sm:flex-row">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1C1418] px-4 py-2 text-sm font-semibold text-white hover:bg-black" id="waLink" target="_blank">
<iconify-icon icon="solar:whatsapp-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
                    Abrir WhatsApp
                  </a>
<button className="inline-flex items-center justify-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-black/75 hover:bg-black/[0.02]" id="copyLead" type="button">
<iconify-icon icon="solar:copy-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
                    Copiar texto
                  </button>
</div>
<p className="mt-2 hidden text-xs text-[#2D6A4F]" id="copyLeadToast">Copiado.</p>
</div>
</div>
</div>
</form>
</div>
</div>
</div>


    </>
  );
}
