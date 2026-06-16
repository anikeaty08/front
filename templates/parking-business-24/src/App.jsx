import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



(function (w, d, s, l, i) {
w[l] = w[l] || [];
w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
var f = d.getElementsByTagName(s)[0],
j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
j.async = true; j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-MT8KQXB');



(function (m, e, t, r, i, k, a) {
m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
m[i].l = 1 * new Date();
k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r;
a.parentNode.insertBefore(k, a)
})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
ym(51598715, "init", {
clickmap: true,
trackLinks: true,
accurateTrackBounce: true,
webvisor: true
});



!function (f, b, e, v, n, t, s) {
if (f.fbq) return; n = f.fbq = function () {
n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
};
if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
n.queue = []; t = b.createElement(e); t.async = !0;
t.src = v; s = b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t, s)
}(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '6641203179326346');
fbq('track', 'PageView');



    // Header burger + overlay (characteristic behavior)
    const overlay = document.querySelector('.i-overlay');
    const burgerBtn = document.querySelector('.i-burger');
    const headerNav = document.querySelector('.header__nav');

    function openMenu() {
      headerNav.classList.remove('hidden');
      overlay.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    }
    function closeMenu() {
      headerNav.classList.add('hidden');
      overlay.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }

    burgerBtn?.addEventListener('click', () => {
      const isOpen = !headerNav.classList.contains('hidden');
      isOpen ? closeMenu() : openMenu();
    });
    overlay?.addEventListener('click', () => {
      closeMenu();
      closeAllModals();
    });

    // Lang toggle (dropdown)
    const langMain = document.querySelector('.toggle-lang__main');
    const langList = document.querySelector('.toggle-lang');
    langMain?.addEventListener('click', (e) => {
      e.stopPropagation();
      langList?.classList.toggle('hidden');
    });
    document.addEventListener('click', () => {
      if (langList && !langList.classList.contains('hidden')) langList.classList.add('hidden');
    });

    // Modal system (characteristic: js-open-modal + js-get-youtube)
    function closeAllModals() {
      document.querySelectorAll('.c-modal').forEach(m => {
        m.classList.add('hidden');
        const iframe = m.querySelector('iframe');
        if (iframe) iframe.src = '';
      });
    }

    function openModalById(id) {
      closeAllModals();
      const modal = document.getElementById(id);
      if (!modal) return;
      modal.classList.remove('hidden');
      overlay.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');

      const youtubeWrap = modal.querySelector('.js-get-youtube');
      if (youtubeWrap) {
        const url = youtubeWrap.getAttribute('data-youtube') || '';
        const iframe = youtubeWrap.querySelector('iframe');
        if (iframe && url) iframe.src = url;
      }
    }

    document.querySelectorAll('.js-open-modal').forEach(a => {
      a.addEventListener('click', (e) => {
        const target = a.getAttribute('data-target');
        if (!target) return;
        e.preventDefault();
        openModalById(target);
      });
    });

    document.querySelectorAll('.js-close-modal').forEach(btn => {
      btn.addEventListener('click', () => {
        closeAllModals();
        overlay.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeMenu();
        closeAllModals();
        overlay.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      }
    });

    // Demo toast + progress (kept behavior)
    const demoToast = document.getElementById('demoToast');
    const toastTitle = document.getElementById('toastTitle');
    const toastText = document.getElementById('toastText');
    const toastIcon = document.getElementById('toastIcon');
    const btnFecharToast = document.getElementById('btnFecharToast');

    const progressBar = document.getElementById('progressBar');
    const progressLabel = document.getElementById('progressLabel');
    const tempoGratisLabel = document.getElementById('tempoGratisLabel');
    const pontosLabel = document.getElementById('pontosLabel');
    const checkinsLabel = document.getElementById('checkinsLabel');
    const beneficiosLabel = document.getElementById('beneficiosLabel');
    const faltamLabel = document.getElementById('faltamLabel');

    let pontos = 120;
    let progresso = 62;
    let tempoGratis = 30;
    let checkins = 3;
    let beneficios = 2;

    function showToast(title, text, icon) {
      toastTitle.textContent = title;
      toastText.textContent = text;
      toastIcon.setAttribute('icon', icon);
      demoToast.classList.remove('hidden');
    }

    function hideToast() {
      demoToast.classList.add('hidden');
    }

    function setProgress(value) {
      progresso = Math.max(0, Math.min(100, value));
      progressBar.style.width = progresso + '%';
      progressLabel.textContent = progresso + '%';
    }

    function renderStats() {
      pontosLabel.textContent = String(pontos);
      checkinsLabel.textContent = String(checkins);
      beneficiosLabel.textContent = String(beneficios);
      tempoGratisLabel.textContent = tempoGratis + ' min';

      const faltam = Math.max(0, Math.round((70 - progresso) * 3.75)); // approximation just to keep label meaningful
      faltamLabel.textContent = 'Faltam ' + faltam + ' pontos';
    }

    document.getElementById('btnSimularVisita')?.addEventListener('click', () => {
      pontos += 35;
      setProgress(progresso + 12);
      renderStats();
      showToast(
        'Visita registrada',
        'QR Code da loja escaneado. +35 pontos. Continue para desbloquear mais minutos grátis.',
        'solar:qr-code-linear'
      );
    });

    document.getElementById('btnResgatar')?.addEventListener('click', () => {
      if (progresso < 70) {
        showToast('Quase lá', 'Faça mais uma visita para liberar +15 minutos.', 'solar:clock-circle-linear');
        return;
      }
      tempoGratis += 15;
      beneficios += 1;
      setProgress(22);
      renderStats();
      showToast(
        'Benefício resgatado',
        'Você ganhou +15 minutos grátis no estacionamento. Benefício aplicado imediatamente.',
        'solar:gift-linear'
      );
    });

    btnFecharToast?.addEventListener('click', hideToast);
    renderStats();

    // Form -> generates WhatsApp/email message (no auto-send)
    const btnParticipar = document.getElementById('btnParticipar');
    const btnLevar = document.getElementById('btnLevar');
    const formStatus = document.getElementById('formStatus');
    const formStatusText = document.getElementById('formStatusText');

    function buildMessage(intent) {
      const nome = (document.getElementById('nome').value || '').trim();
      const tel = (document.getElementById('telefone').value || '').trim();
      const email = (document.getElementById('email').value || '').trim();
      const perfil = (document.getElementById('perfil').value || '').trim();
      const cidade = (document.getElementById('cidade').value || '').trim();
      const msg = (document.getElementById('mensagem').value || '').trim();

      const perfilLabel = perfil ? perfil : 'não informado';
      const header = intent === 'participar'
        ? 'Quero participar do projeto piloto (Estacionamento que Gera Negócios).'
        : 'Quero levar o projeto para meu estacionamento/galeria.';

      const lines = [
        header,
        '',
        'Dados de contato:',
        `- Nome: ${nome || '—'}`,
        `- Telefone: ${tel || '—'}`,
        `- E-mail: ${email || '—'}`,
        `- Perfil: ${perfilLabel}`,
        `- Cidade: ${cidade || '—'}`,
        '',
        'Contexto do local:',
        msg ? `- ${msg}` : '- —',
        '',
        'Próximo passo: podemos agendar uma conversa de 20 minutos para validar o piloto?'
      ];

      return lines.join('\n');
    }

    async function copyToClipboard(text) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (e) {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.setAttribute('readonly', '');
        ta.style.position = 'fixed';
        ta.style.left = '-9999rem';
        ta.style.top = '0';
        document.body.appendChild(ta);
        ta.select();
        const ok = document.execCommand('copy');
        document.body.removeChild(ta);
        return ok;
      }
    }

    async function handleIntent(intent) {
      const text = buildMessage(intent);
      const ok = await copyToClipboard(text);

      formStatus.classList.remove('hidden');
      formStatusText.textContent = ok
        ? 'Mensagem pronta e copiada. Cole no WhatsApp ou e-mail para enviar.'
        : 'Mensagem pronta. Selecione e copie manualmente para enviar.';

      showToast(
        'Mensagem pronta',
        ok ? 'Copiada para a área de transferência.' : 'Não foi possível copiar automaticamente.',
        'solar:chat-round-dots-linear'
      );
    }

    btnParticipar?.addEventListener('click', () => handleIntent('participar'));
    btnLevar?.addEventListener('click', () => handleIntent('levar'));

    // Special video toggler (characteristic)
    const wrap = document.querySelector('.special-video__wrap');
    const v1 = wrap?.querySelectorAll('.special-video__video')[0];
    const v2 = wrap?.querySelectorAll('.special-video__video')[1];
    const prevBtn = wrap?.querySelector('.special-video__btn--prev');
    const nextBtn = wrap?.querySelector('.special-video__btn--next');

    function setVideo(activeIndex) {
      if (!v1 || !v2 || !prevBtn || !nextBtn) return;
      const isFirst = activeIndex === 0;

      v1.classList.toggle('hidden', !isFirst);
      v2.classList.toggle('hidden', isFirst);

      v1.muted = true; v2.muted = true;
      if (isFirst) {
        v2.pause();
        try { v1.play(); } catch (e) {}
      } else {
        v1.pause();
        try { v2.play(); } catch (e) {}
      }

      prevBtn.disabled = isFirst;
      nextBtn.disabled = !isFirst;
    }

    prevBtn?.addEventListener('click', () => setVideo(0));
    nextBtn?.addEventListener('click', () => setVideo(1));
    setVideo(0);
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<noscript><iframe height="0" src="https://www.googletagmanager.com/ns.html?id=GTM-MT8KQXB" style={{display: 'none', visibility: 'hidden'}} width="0"></iframe></noscript>


<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute -top-32 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl"></div>
<div className="absolute top-64 right-[-10rem] h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-3xl"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.12),rgba(2,6,23,0.9)_55%,rgba(2,6,23,1))]"></div>
<div className="absolute inset-0 opacity-[0.08]" style={{backgroundImage: 'linear-gradient(to right, rgba(148,163,184,0.22) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.22) 1px, transparent 1px)', backgroundSize: '3rem 3rem'}}></div>
</div>
<div className="i-overlay fixed inset-0 z-40 hidden bg-black/60 backdrop-blur-sm"></div>

<header className="header sticky top-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur">
<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
<a className="inline-flex items-center gap-3" href="#topo">
<div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5">
<span className="text-sm font-semibold tracking-tight text-slate-100" style={{fontFamily: 'Manrope, Inter, system-ui'}}>EN</span>
</div>
<div className="leading-tight">
<div className="text-sm font-semibold tracking-tight text-slate-100">Estacionamento + Negócios</div>
<div className="text-xs text-slate-400">Sistema por QR Code • Benefícios em tempo real</div>
</div>
</a>
<div className="flex items-center gap-3">
<div className="toggle-lang__wrapper relative hidden sm:block">
<button className="toggle-lang__main inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-200 hover:bg-white/10" type="button">
            EN
            <iconify-icon className="text-base text-slate-300" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="toggle-lang absolute right-0 mt-2 hidden w-44 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/95 shadow-xl shadow-black/30">
<a className="block px-4 py-2 text-xs text-slate-200 hover:bg-white/5" href="/ru/">RU</a>
<a className="block px-4 py-2 text-xs text-slate-200 hover:bg-white/5" href="/ch/">CH</a>
<a className="block px-4 py-2 text-xs text-slate-200 hover:bg-white/5" href="/jp/">JP</a>
<a className="block px-4 py-2 text-xs text-slate-200 hover:bg-white/5" href="/de/">DE</a>
<a className="block px-4 py-2 text-xs text-slate-200 hover:bg-white/5" href="/fr/">FR</a>
<a className="block px-4 py-2 text-xs text-slate-200 hover:bg-white/5" href="/it/">IT</a>
<a className="block px-4 py-2 text-xs text-slate-200 hover:bg-white/5" href="/pr/">PR</a>
<a className="block px-4 py-2 text-xs text-slate-200 hover:bg-white/5" href="/sp/">SP</a>
<a className="block px-4 py-2 text-xs text-slate-200 hover:bg-white/5" href="/nr/">NR</a>
<a className="block px-4 py-2 text-xs text-slate-200 hover:bg-white/5" href="/sw/">SW</a>
<a className="block px-4 py-2 text-xs text-slate-200 hover:bg-white/5" href="/dn/">DN</a>
<a className="block px-4 py-2 text-xs text-slate-200 hover:bg-white/5" href="/lt/">LT</a>
</div>
</div>
<div className="i-burger__wrapper">
<button aria-label="Menu" className="i-burger inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10" type="button">
<iconify-icon className="text-xl text-slate-200" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</div>
<nav className="header__nav hidden border-t border-white/5 bg-slate-950/80 backdrop-blur">
<div className="mx-auto grid max-w-7xl gap-2 px-4 py-4 sm:px-6 lg:px-8 md:grid-cols-12">
<a className="header__nav-item md:col-span-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 hover:bg-white/10" href="#problema">Problema</a>
<a className="header__nav-item md:col-span-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 hover:bg-white/10" href="#como-funciona">Como funciona</a>
<a className="header__nav-item md:col-span-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 hover:bg-white/10" href="#beneficios">Benefícios</a>
<a className="header__nav-item md:col-span-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 hover:bg-white/10" href="#modelo">Modelo</a>
<a className="header__nav-item md:col-span-12 rounded-xl bg-indigo-500 px-4 py-3 text-sm font-medium text-white hover:bg-indigo-400" href="#agenda">
          Agendar uma conversa
        </a>
</div>
</nav>
</header>

<main id="topo">

<section className="mx-auto max-w-7xl px-4 pb-10 pt-12 sm:px-6 lg:px-8 lg:pt-16">
<div className="grid items-start gap-10 lg:grid-cols-12">
<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            Projeto comercial • piloto em galeria/estacionamento
          </div>
<h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
            Transforme vagas vazias em mais clientes, mais consumo e mais receita.
          </h1>
<p className="mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
            Um sistema simples, ativado por QR Code, que incentiva pessoas a estacionar, permanecer mais tempo e consumir nas lojas da galeria.
          </p>
<div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
<div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
<iconify-icon className="text-xl text-indigo-200" icon="solar:parking-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="text-sm text-slate-200">
                O estacionamento deixa de ser custo. <span className="text-slate-100 font-medium">Vira parte do negócio.</span>
</div>
</div>
</div>
<div className="mt-7 flex flex-col gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-500 px-5 py-3 text-sm font-medium text-white shadow-sm shadow-indigo-500/20 hover:bg-indigo-400" href="#agenda">
              Quero conhecer o projeto
              <iconify-icon className="text-lg" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-100 hover:bg-white/10 js-open-modal" data-target="video-watch" href="#video-watch">
              Ver como funciona
              <iconify-icon className="text-lg" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-xl text-slate-200" icon="solar:qr-code-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="text-sm font-medium text-slate-100">QR Code</div>
</div>
<div className="mt-2 text-xs text-slate-400">Sem curva de aprendizado</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-xl text-slate-200" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="text-sm font-medium text-slate-100">Tempo como moeda</div>
</div>
<div className="mt-2 text-xs text-slate-400">Benefício imediato e claro</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-xl text-slate-200" icon="solar:chart-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="text-sm font-medium text-slate-100">Dados reais</div>
</div>
<div className="mt-2 text-xs text-slate-400">Resultados mensuráveis</div>
</div>
</div>
</div>

<div className="lg:col-span-5">
<div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-sm">
<div className="flex items-center justify-between gap-4">
<div>
<div className="text-sm font-semibold tracking-tight text-slate-50">Visão do app (exemplo)</div>
<div className="mt-1 text-xs text-slate-400">Check-in • pontos • tempo grátis</div>
</div>
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/40 px-3 py-1 text-xs text-slate-200">
<iconify-icon className="text-base" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                baixo atrito
              </div>
</div>
<div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/40 p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-500/15 text-indigo-200 border border-indigo-400/20">
<iconify-icon className="text-xl" icon="solar:ticket-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="leading-tight">
<div className="text-sm font-medium text-slate-100">Tempo grátis disponível</div>
<div className="text-xs text-slate-400">Acumulado por visitas</div>
</div>
</div>
<div className="text-right">
<div className="text-2xl font-semibold tracking-tight text-slate-50" id="tempoGratisLabel">30 min</div>
<div className="text-xs text-slate-400">agora</div>
</div>
</div>
<div className="mt-4 grid grid-cols-3 gap-3">
<div className="rounded-2xl border border-white/10 bg-white/5 p-3">
<div className="text-xs text-slate-400">Pontos</div>
<div className="mt-1 text-lg font-semibold tracking-tight text-slate-50" id="pontosLabel">120</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-3">
<div className="text-xs text-slate-400">Check-ins</div>
<div className="mt-1 text-lg font-semibold tracking-tight text-slate-50" id="checkinsLabel">3</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-3">
<div className="text-xs text-slate-400">Benefícios</div>
<div className="mt-1 text-lg font-semibold tracking-tight text-slate-50" id="beneficiosLabel">2</div>
</div>
</div>
<div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-slate-100">Próximo desbloqueio</div>
<div className="text-xs text-slate-400">+15 min</div>
</div>
<div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
<div className="h-full rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300" id="progressBar" style={{width: '62%'}}></div>
</div>
<div className="mt-2 flex items-center justify-between text-xs text-slate-400">
<span id="faltamLabel">Faltam 45 pontos</span>
<span id="progressLabel">62%</span>
</div>
</div>
</div>
<div className="mt-5 grid gap-3 sm:grid-cols-2">
<button className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-100 hover:bg-white/10" id="btnSimularVisita">
                Simular visita em loja
                <iconify-icon className="text-lg" icon="solar:shop-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500/90 px-4 py-3 text-sm font-medium text-white hover:bg-emerald-400" id="btnResgatar">
                Resgatar benefício
                <iconify-icon className="text-lg" icon="solar:gift-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="mt-4 hidden rounded-2xl border border-white/10 bg-slate-950/50 p-4" id="demoToast">
<div className="flex items-start gap-3">
<div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl bg-white/5 border border-white/10">
<iconify-icon className="text-xl text-slate-200" icon="solar:bell-linear" id="toastIcon" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="min-w-0">
<div className="text-sm font-medium text-slate-100" id="toastTitle">Atualização</div>
<div className="mt-1 text-xs text-slate-400" id="toastText">Tudo pronto.</div>
</div>
<button aria-label="Fechar" className="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10" id="btnFecharToast">
<iconify-icon className="text-lg" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
<div className="mt-4 text-xs text-slate-500">
              Demonstração ilustrativa para explicar o conceito na reunião.
            </div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8" id="problema">
<div className="grid gap-8 lg:grid-cols-12 lg:items-start">
<div className="lg:col-span-5">
<h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">O problema</h2>
<p className="mt-3 text-sm text-slate-300 sm:text-base">
            Hoje a realidade é clara. Existe fluxo — mas ele não é aproveitado.
          </p>
</div>
<div className="lg:col-span-7">
<div className="grid gap-3 sm:grid-cols-2">
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 border border-white/10">
<iconify-icon className="text-xl text-slate-200" icon="solar:parking-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="text-sm font-medium text-slate-100">Vagas vazias</div>
</div>
<div className="mt-2 text-xs text-slate-400">Ocupação irregular em vários horários.</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 border border-white/10">
<iconify-icon className="text-xl text-slate-200" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="text-sm font-medium text-slate-100">Baixa permanência</div>
</div>
<div className="mt-2 text-xs text-slate-400">Cliente resolve rápido e vai embora.</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 border border-white/10">
<iconify-icon className="text-xl text-slate-200" icon="solar:bag-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="text-sm font-medium text-slate-100">Vendas perdidas</div>
</div>
<div className="mt-2 text-xs text-slate-400">Menos tempo no local, menos consumo.</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 border border-white/10">
<iconify-icon className="text-xl text-slate-200" icon="solar:money-bag-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="text-sm font-medium text-slate-100">Potencial não capturado</div>
</div>
<div className="mt-2 text-xs text-slate-400">Estacionamento perde faturamento indireto.</div>
</div>
</div>
<div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/40 p-5">
<div className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-xl text-indigo-200" icon="solar:info-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<div className="text-sm font-medium text-slate-100">O fluxo existe.</div>
<div className="mt-1 text-xs text-slate-400">Mas não é convertido em permanência, compra e recorrência.</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8" id="como-funciona">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">Como funciona na prática</h2>
<p className="mt-3 max-w-3xl text-sm text-slate-300 sm:text-base">
            Três etapas simples, com benefício claro em cada passo.
          </p>
</div>
<a className="hidden items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 hover:bg-white/10 lg:inline-flex" href="#agenda">
          Ver piloto
          <iconify-icon className="text-lg" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="mt-8 grid gap-4 lg:grid-cols-3">
<div className="rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center gap-3">
<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500/15 border border-indigo-400/20 text-indigo-200">
<span className="text-sm font-semibold tracking-tight" style={{fontFamily: 'Manrope, Inter, system-ui'}}>1</span>
</div>
<div>
<div className="text-sm font-semibold tracking-tight text-slate-50">Check-in no estacionamento</div>
<div className="text-xs text-slate-400">QR Code • entrada</div>
</div>
</div>
<p className="mt-4 text-sm text-slate-300">
            Ao estacionar, o cliente escaneia um QR Code e faz check-in no app.
          </p>
<div className="mt-4 space-y-2">
<div className="flex items-start gap-2 text-xs text-slate-300">
<iconify-icon className="mt-0.5 text-base text-emerald-300" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Tempo grátis disponível</span>
</div>
<div className="flex items-start gap-2 text-xs text-slate-300">
<iconify-icon className="mt-0.5 text-base text-emerald-300" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Pontos iniciais</span>
</div>
<div className="flex items-start gap-2 text-xs text-slate-300">
<iconify-icon className="mt-0.5 text-base text-emerald-300" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Benefícios possíveis</span>
</div>
</div>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center gap-3">
<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500/15 border border-indigo-400/20 text-indigo-200">
<span className="text-sm font-semibold tracking-tight" style={{fontFamily: 'Manrope, Inter, system-ui'}}>2</span>
</div>
<div>
<div className="text-sm font-semibold tracking-tight text-slate-50">Circulação pelo comércio</div>
<div className="text-xs text-slate-400">lojas • cafés • academia</div>
</div>
</div>
<p className="mt-4 text-sm text-slate-300">
            Ao visitar estabelecimentos, o cliente escaneia o QR Code da loja e ganha pontos automaticamente.
          </p>
<div className="mt-4 space-y-2">
<div className="flex items-start gap-2 text-xs text-slate-300">
<iconify-icon className="mt-0.5 text-base text-emerald-300" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Pontos por visita</span>
</div>
<div className="flex items-start gap-2 text-xs text-slate-300">
<iconify-icon className="mt-0.5 text-base text-emerald-300" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Desbloqueio de benefícios</span>
</div>
<div className="flex items-start gap-2 text-xs text-slate-300">
<iconify-icon className="mt-0.5 text-base text-emerald-300" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Incentivo à permanência</span>
</div>
</div>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center gap-3">
<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/15 border border-emerald-400/20 text-emerald-200">
<span className="text-sm font-semibold tracking-tight" style={{fontFamily: 'Manrope, Inter, system-ui'}}>3</span>
</div>
<div>
<div className="text-sm font-semibold tracking-tight text-slate-50">Benefício real e imediato</div>
<div className="text-xs text-slate-400">tempo • promoções • vantagens</div>
</div>
</div>
<p className="mt-4 text-sm text-slate-300">
            Os pontos se transformam em vantagens que o cliente entende na hora — sem abstração.
          </p>
<div className="mt-4 space-y-2">
<div className="flex items-start gap-2 text-xs text-slate-300">
<iconify-icon className="mt-0.5 text-base text-cyan-200" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>+15, +30 ou +60 min grátis</span>
</div>
<div className="flex items-start gap-2 text-xs text-slate-300">
<iconify-icon className="mt-0.5 text-base text-cyan-200" icon="solar:tag-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Promoções exclusivas nas lojas</span>
</div>
<div className="flex items-start gap-2 text-xs text-slate-300">
<iconify-icon className="mt-0.5 text-base text-cyan-200" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Vantagens diretas no consumo</span>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8" id="beneficios">
<div className="grid gap-8 lg:grid-cols-12 lg:items-start">
<div className="lg:col-span-4">
<h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">Benefícios para todos</h2>
<p className="mt-3 text-sm text-slate-300 sm:text-base">
            Usuário ganha, lojista vende mais, estacionamento lucra. Um ecossistema alinhado.
          </p>
</div>
<div className="lg:col-span-8">
<div className="grid gap-4 lg:grid-cols-3">
<div className="rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 border border-white/10">
<iconify-icon className="text-xl text-slate-200" icon="solar:user-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="text-sm font-semibold tracking-tight text-slate-50">Cliente final</div>
</div>
<ul className="mt-4 space-y-2 text-xs text-slate-300">
<li className="flex gap-2"><iconify-icon className="mt-0.5 text-base text-emerald-300" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>Mais tempo grátis no estacionamento</li>
<li className="flex gap-2"><iconify-icon className="mt-0.5 text-base text-emerald-300" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>Descontos e vantagens reais</li>
<li className="flex gap-2"><iconify-icon className="mt-0.5 text-base text-emerald-300" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>Sensação de recompensa por estar ali</li>
<li className="flex gap-2"><iconify-icon className="mt-0.5 text-base text-emerald-300" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>Motivo claro para ficar mais tempo</li>
</ul>
<div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-xs text-slate-400">
                O cliente não quer ir embora rápido.
              </div>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 border border-white/10">
<iconify-icon className="text-xl text-slate-200" icon="solar:shop-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="text-sm font-semibold tracking-tight text-slate-50">Lojistas</div>
</div>
<div className="mt-4 space-y-4">
<div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
<div className="text-xs font-medium text-slate-100">Mais fluxo qualificado</div>
<div className="mt-1 text-xs text-slate-400">Pessoas presentes, com tempo disponível e maior chance de consumo.</div>
</div>
<div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
<div className="text-xs font-medium text-slate-100">Promoções que funcionam</div>
<div className="mt-1 text-xs text-slate-400">Ofertas ativadas na hora certa, simples e mensuráveis.</div>
</div>
<div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
<div className="text-xs font-medium text-slate-100">Dados reais</div>
<div className="mt-1 text-xs text-slate-400">Visitas, origem e resgates — sem achismo.</div>
</div>
</div>
<div className="mt-4 text-xs text-slate-400">
                Não é publicidade genérica. <span className="text-slate-200 font-medium">É cliente presente.</span>
</div>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 border border-white/10">
<iconify-icon className="text-xl text-slate-200" icon="solar:parking-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="text-sm font-semibold tracking-tight text-slate-50">Estacionamento</div>
</div>
<ul className="mt-4 space-y-2 text-xs text-slate-300">
<li className="flex gap-2"><iconify-icon className="mt-0.5 text-base text-emerald-300" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>Maior ocupação média das vagas</li>
<li className="flex gap-2"><iconify-icon className="mt-0.5 text-base text-emerald-300" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>Aumento do tempo por veículo</li>
<li className="flex gap-2"><iconify-icon className="mt-0.5 text-base text-emerald-300" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>Fidelização de usuários</li>
<li className="flex gap-2"><iconify-icon className="mt-0.5 text-base text-emerald-300" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>Diferencial competitivo na região</li>
</ul>
<div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-xs text-slate-400">
                O estacionamento deixa de ser passivo. <span className="text-slate-200 font-medium">Vira parte ativa do ecossistema.</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8" id="modelo">
<div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
<div className="grid gap-8 lg:grid-cols-12 lg:items-start">
<div className="lg:col-span-5">
<h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">Modelo de negócio</h2>
<p className="mt-3 text-sm text-slate-300 sm:text-base">
              Viável no piloto e escalável para outras galerias.
            </p>
<div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/40 p-5">
<div className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-xl text-emerald-200" icon="solar:checklist-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<div className="text-sm font-medium text-slate-100">Por que funciona</div>
<div className="mt-2 space-y-2 text-xs text-slate-400">
<div className="flex items-start gap-2"><iconify-icon className="mt-0.5 text-base text-emerald-300" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>Resolve um problema real</div>
<div className="flex items-start gap-2"><iconify-icon className="mt-0.5 text-base text-emerald-300" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>Incentiva o comportamento certo</div>
<div className="flex items-start gap-2"><iconify-icon className="mt-0.5 text-base text-emerald-300" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>Benefício claro para todos</div>
<div className="flex items-start gap-2"><iconify-icon className="mt-0.5 text-base text-emerald-300" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>Baixo atrito tecnológico</div>
<div className="flex items-start gap-2"><iconify-icon className="mt-0.5 text-base text-emerald-300" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>Fácil de implementar</div>
</div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="grid gap-4 sm:grid-cols-2">
<div className="rounded-3xl border border-white/10 bg-slate-950/40 p-6">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-indigo-200" icon="solar:shop-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="text-sm font-semibold tracking-tight text-slate-50">Para lojistas</div>
</div>
<ul className="mt-4 space-y-2 text-xs text-slate-300">
<li className="flex gap-2"><iconify-icon className="mt-0.5 text-base text-emerald-300" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>Plano mensal acessível</li>
<li className="flex gap-2"><iconify-icon className="mt-0.5 text-base text-emerald-300" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>Campanhas patrocinadas</li>
<li className="flex gap-2"><iconify-icon className="mt-0.5 text-base text-emerald-300" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>Patrocínio de tempo grátis</li>
</ul>
</div>
<div className="rounded-3xl border border-white/10 bg-slate-950/40 p-6">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-indigo-200" icon="solar:parking-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="text-sm font-semibold tracking-tight text-slate-50">Para o estacionamento</div>
</div>
<ul className="mt-4 space-y-2 text-xs text-slate-300">
<li className="flex gap-2"><iconify-icon className="mt-0.5 text-base text-emerald-300" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>Aumento de ocupação</li>
<li className="flex gap-2"><iconify-icon className="mt-0.5 text-base text-emerald-300" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>Receita indireta</li>
<li className="flex gap-2"><iconify-icon className="mt-0.5 text-base text-emerald-300" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>Dados estratégicos</li>
<li className="flex gap-2"><iconify-icon className="mt-0.5 text-base text-emerald-300" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>Modelo replicável</li>
</ul>
</div>
</div>
<div className="mt-4 rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-xl text-emerald-200" icon="solar:hand-money-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<div className="text-sm font-medium text-slate-100">O sistema se paga e cresce junto com o local</div>
<div className="mt-1 text-xs text-slate-400">Mais permanência → mais consumo → mais valor para todos.</div>
</div>
</div>
</div>
<div className="mt-4 grid gap-4 sm:grid-cols-2">
<div className="rounded-3xl border border-white/10 bg-slate-950/40 p-6">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-slate-200" icon="solar:smartphone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="text-sm font-semibold tracking-tight text-slate-50">Tecnologia simples</div>
</div>
<div className="mt-3 space-y-2 text-xs text-slate-300">
<div className="flex gap-2"><iconify-icon className="mt-0.5 text-base text-emerald-300" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>App leve (funciona no celular)</div>
<div className="flex gap-2"><iconify-icon className="mt-0.5 text-base text-emerald-300" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>Painel simples para lojistas</div>
</div>
</div>
<div className="rounded-3xl border border-white/10 bg-slate-950/40 p-6">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-slate-200" icon="solar:database-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="text-sm font-semibold tracking-tight text-slate-50">Gestão com dados</div>
</div>
<div className="mt-3 space-y-2 text-xs text-slate-300">
<div className="flex gap-2"><iconify-icon className="mt-0.5 text-base text-emerald-300" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>Quantas pessoas visitaram</div>
<div className="flex gap-2"><iconify-icon className="mt-0.5 text-base text-emerald-300" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>Origem e resgates</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8" id="agenda">
<div className="grid gap-8 lg:grid-cols-12 lg:items-start">
<div className="lg:col-span-6">
<h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">Próximo passo</h2>
<p className="mt-3 text-sm text-slate-300 sm:text-base">
            Vamos validar em um estacionamento piloto com implementação rápida, teste real, ajustes finos e escala.
          </p>
<div className="mt-6 grid gap-3 sm:grid-cols-2">
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-indigo-200" icon="solar:rocket-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="text-sm font-medium text-slate-100">Implementação rápida</div>
</div>
<div className="mt-1 text-xs text-slate-400">QR Codes + configuração inicial.</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-indigo-200" icon="solar:lab-flask-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="text-sm font-medium text-slate-100">Teste real</div>
</div>
<div className="mt-1 text-xs text-slate-400">Ajuste por comportamento e dados.</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-indigo-200" icon="solar:tuning-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="text-sm font-medium text-slate-100">Ajustes finos</div>
</div>
<div className="mt-1 text-xs text-slate-400">Campanhas e regras de pontuação.</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-indigo-200" icon="solar:diagram-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="text-sm font-medium text-slate-100">Escala</div>
</div>
<div className="mt-1 text-xs text-slate-400">Replicável em outras galerias.</div>
</div>
</div>
</div>
<div className="lg:col-span-6">
<div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-sm font-semibold tracking-tight text-slate-50">Agendar uma conversa</div>
<div className="mt-1 text-xs text-slate-400">Preencha para receber uma proposta do piloto e fluxo de implantação.</div>
</div>
<div className="hidden rounded-2xl border border-white/10 bg-slate-950/40 px-3 py-2 text-xs text-slate-200 sm:inline-flex items-center gap-2">
<iconify-icon className="text-base" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                20 min
              </div>
</div>
<form className="mt-6 grid gap-4" onsubmit="return false;">
<div className="grid gap-4 sm:grid-cols-2">
<div>
<label className="text-xs font-medium text-slate-200">Nome</label>
<input className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-indigo-400/40 focus:bg-slate-950/60" id="nome" placeholder="Seu nome" type="text"/>
</div>
<div>
<label className="text-xs font-medium text-slate-200">WhatsApp / telefone</label>
<input className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-indigo-400/40 focus:bg-slate-950/60" id="telefone" placeholder="(00) 00000-0000" type="tel"/>
</div>
</div>
<div>
<label className="text-xs font-medium text-slate-200">E-mail</label>
<input className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-indigo-400/40 focus:bg-slate-950/60" id="email" placeholder="voce@empresa.com" type="email"/>
</div>
<div className="grid gap-4 sm:grid-cols-2">
<div>
<label className="text-xs font-medium text-slate-200">Perfil</label>
<div className="relative">
<select className="mt-2 w-full appearance-none rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 pr-11 text-sm text-slate-100 outline-none focus:border-indigo-400/40 focus:bg-slate-950/60" id="perfil">
<option selected="" value="">Selecione</option>
<option value="estacionamento">Estacionamento</option>
<option value="galeria">Gestão da galeria</option>
<option value="lojista">Lojista</option>
<option value="parceiro">Parceiro / operação</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
<iconify-icon className="text-lg text-slate-400" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
<div>
<label className="text-xs font-medium text-slate-200">Cidade</label>
<input className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-indigo-400/40 focus:bg-slate-950/60" id="cidade" placeholder="Sua cidade" type="text"/>
</div>
</div>
<div>
<label className="text-xs font-medium text-slate-200">Mensagem (opcional)</label>
<textarea className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-indigo-400/40 focus:bg-slate-950/60" id="mensagem" placeholder="Conte rapidamente o cenário do local (vagas, lojas, horários de pico...)" rows="4"></textarea>
</div>
<div className="mt-2 grid gap-3 sm:grid-cols-2">
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-500 px-5 py-3 text-sm font-medium text-white shadow-sm shadow-indigo-500/20 hover:bg-indigo-400" id="btnParticipar">
                  Quero participar do projeto
                  <iconify-icon className="text-lg" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-100 hover:bg-white/10" id="btnLevar">
                  Quero levar para meu estacionamento
                  <iconify-icon className="text-lg" icon="solar:parking-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="hidden rounded-2xl border border-white/10 bg-slate-950/50 p-4" id="formStatus">
<div className="flex items-start gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-500/15 border border-emerald-400/20">
<iconify-icon className="text-xl text-emerald-200" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-100">Pronto</div>
<div className="mt-1 text-xs text-slate-400" id="formStatusText">Copiamos sua mensagem para você enviar no WhatsApp.</div>
</div>
</div>
</div>
<div className="text-xs text-slate-500">
                Ao enviar, você gera uma mensagem pronta para WhatsApp/e-mail (sem envio automático).
              </div>
</form>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
<div className="rounded-3xl border border-white/10 bg-gradient-to-b from-indigo-500/15 to-white/5 p-6 sm:p-10">
<div className="grid items-center gap-8 lg:grid-cols-12">
<div className="lg:col-span-8">
<h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">Transforme seu estacionamento em um gerador de negócios.</h2>
<p className="mt-3 text-sm text-slate-300 sm:text-base">
              Isso não é teoria. É uma solução prática, pensada para o mundo real.
            </p>
</div>
<div className="lg:col-span-4">
<div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-500 px-5 py-3 text-sm font-medium text-white shadow-sm shadow-indigo-500/20 hover:bg-indigo-400" href="#agenda">
                Agendar uma conversa
                <iconify-icon className="text-lg" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-100 hover:bg-white/10" href="#topo">
                Voltar ao topo
                <iconify-icon className="text-lg" icon="solar:arrow-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>
</div>
<footer className="mt-10 border-t border-white/5 pt-6">
<div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
<div className="text-xs text-slate-500">
<span className="font-medium text-slate-300">EN</span> • Estacionamento que Gera Negócios
          </div>
<div className="flex items-center gap-4 text-xs text-slate-500">
<a className="hover:text-slate-300" href="#problema">Conteúdo</a>
<a className="hover:text-slate-300" href="#agenda">Contato</a>
</div>
</div>
</footer>
</section>
</main>

<div className="c-modal fixed inset-0 z-50 hidden" id="video-watch">
<div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
<div className="relative mx-auto flex min-h-full max-w-4xl items-center px-4 py-10 sm:px-6 lg:px-8">
<div className="w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-950/90 shadow-xl shadow-black/40">
<div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
<div className="text-sm font-semibold tracking-tight text-slate-100">Watch video</div>
<button aria-label="Close" className="js-close-modal inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10">
<iconify-icon className="text-xl" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="p-5">
<div className="c-modal-video js-get-youtube aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black" data-youtube="https://www.youtube.com/embed/meiJ35yKqKA">
<iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="h-full w-full" frameborder="0" src="" title="Video"></iframe>
</div>
<div className="mt-4 text-xs text-slate-400">
            Como funciona na prática — conceito e jornada do usuário.
          </div>
</div>
</div>
</div>
</div>

<div className="special-video__wrap fixed bottom-4 right-4 z-40 hidden sm:block">
<div className="w-[18rem] overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60 shadow-lg shadow-black/40 backdrop-blur">
<div className="relative">
<video autoplay="" className="special-video__video special-video__video--active w-full" loop="" muted="" playsinline="">
<source src="video/1.mp4" type="video/mp4"/>
</video>
<video className="special-video__video special-video__video--hidden hidden w-full" loop="" muted="" playsinline="">
<source src="video/2.mp4" type="video/mp4"/>
</video>
<div className="absolute left-0 top-0 m-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-slate-200">
<iconify-icon className="text-base" icon="solar:video-frame-play-horizontal-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
          preview
        </div>
</div>
<div className="special-video__btn-list grid grid-cols-2 gap-2 p-3">
<button className="btn btn--primary special-video__btn special-video__btn--prev inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-100 hover:bg-white/10" disabled="">
          Prev
        </button>
<button className="btn btn--primary special-video__btn special-video__btn--next inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-500 px-3 py-2 text-xs font-medium text-white hover:bg-indigo-400">
          Next
        </button>
</div>
</div>
</div>



    </>
  );
}
