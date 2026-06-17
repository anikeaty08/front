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



    // Config
    const COMPANY = {
      name: "Nexa Telecom",
      whatsapp: "5511999999999" // substitua pelo número real
    };

    const encode = (s) => encodeURIComponent(s || "");
    const onlyDigits = (s) => (s || "").replace(/\D+/g, "");
    const safeText = (s) => (s || "").toString().trim();

    function buildWhatsAppLink(message) {
      return `https://wa.me/${COMPANY.whatsapp}?text=${encode(message)}`;
    }

    function openWhatsApp(message) {
      const url = buildWhatsAppLink(message);
      window.open(url, "_blank", "noopener,noreferrer");
    }

    function planMessage(plan) {
      return [
        `Olá! Gostaria de informações sobre o plano: ${plan}.`,
        `Pode me ajudar com disponibilidade, valores e instalação?`,
      ].join("\n");
    }

    // Year
    document.getElementById("year").textContent = new Date().getFullYear();

    // Mobile menu
    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener("click", () => {
        const isOpen = !mobileMenu.classList.contains("hidden");
        mobileMenu.classList.toggle("hidden");
        menuBtn.setAttribute("aria-expanded", String(!isOpen));
      });

      mobileMenu.querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", () => {
          mobileMenu.classList.add("hidden");
          menuBtn.setAttribute("aria-expanded", "false");
        });
      });
    }

    // WhatsApp buttons (generic)
    const genericWhatsButtons = ["btnWhatsTop", "btnWhatsPlans", "btnWhatsContact", "btnWhatsFloat"];
    genericWhatsButtons.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.addEventListener("click", (e) => {
        e.preventDefault();
        openWhatsApp(`Olá! Vim pelo site da ${COMPANY.name}. Gostaria de informações sobre planos e disponibilidade.`);
      });
    });

    // B2B WhatsApp
    const btnWhatsB2B = document.getElementById("btnWhatsB2B");
    if (btnWhatsB2B) {
      btnWhatsB2B.addEventListener("click", () => {
        openWhatsApp(
          [
            `Olá! Tenho interesse em um plano empresarial / link dedicado com a ${COMPANY.name}.`,
            `Pode me enviar uma proposta com IP fixo/SLA (se disponível) e condições?`
          ].join("\n")
        );
      });
    }

    // Plan-specific WhatsApp
    document.querySelectorAll(".btnWhatsPlan").forEach((btn) => {
      btn.addEventListener("click", () => {
        const plan = btn.getAttribute("data-plan") || "Plano de Internet";
        openWhatsApp(planMessage(plan));
      });
    });

    // Hero lead form -> WhatsApp
    const leadHero = document.getElementById("leadHero");
    if (leadHero) {
      leadHero.addEventListener("submit", (e) => {
        e.preventDefault();
        const fd = new FormData(leadHero);
        const local = safeText(fd.get("local"));
        const servico = safeText(fd.get("servico"));
        const nome = safeText(fd.get("nome"));
        const telefone = safeText(fd.get("telefone"));

        const msg = [
          `Olá! Vim pelo site da ${COMPANY.name} e gostaria de verificar disponibilidade.`,
          `Nome: ${nome}`,
          `Telefone: ${telefone}`,
          `Local: ${local}`,
          `Serviço: ${servico}`
        ].join("\n");

        openWhatsApp(msg);
      });
    }

    // Coverage form -> WhatsApp
    const coverageForm = document.getElementById("coverageForm");
    if (coverageForm) {
      coverageForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const fd = new FormData(coverageForm);
        const cidade = safeText(fd.get("cidade"));
        const bairro = safeText(fd.get("bairro"));
        const tipo = safeText(fd.get("tipo"));

        const msg = [
          `Olá! Quero consultar cobertura com a ${COMPANY.name}.`,
          `Cidade: ${cidade}`,
          `Bairro: ${bairro}`,
          `Tipo: ${tipo}`,
        ].join("\n");

        openWhatsApp(msg);
      });
    }

    // Contact form -> WhatsApp
    const contactForm = document.getElementById("contactForm");
    const formStatus = document.getElementById("formStatus");
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const fd = new FormData(contactForm);
        const nome = safeText(fd.get("nome"));
        const telefone = safeText(fd.get("telefone"));
        const email = safeText(fd.get("email"));
        const mensagem = safeText(fd.get("mensagem"));

        const msg = [
          `Olá! Vim pelo site da ${COMPANY.name}.`,
          `Nome: ${nome}`,
          `Telefone: ${telefone}`,
          `E-mail: ${email}`,
          mensagem ? `Mensagem: ${mensagem}` : null
        ].filter(Boolean).join("\n");

        if (formStatus) {
          formStatus.classList.remove("hidden");
          formStatus.textContent = "Abrindo WhatsApp com sua mensagem pronta...";
        }
        openWhatsApp(msg);

        // Gentle reset
        setTimeout(() => {
          contactForm.reset();
          if (formStatus) formStatus.textContent = "Se preferir, você também pode ligar diretamente. 🙂";
          // remove emoji not allowed by developer? Keep clean:
          if (formStatus) formStatus.textContent = "Se preferir, você também pode ligar diretamente.";
        }, 600);
      });
    }

    // Smooth anchor focus helper (accessibility)
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", () => {
        const id = a.getAttribute("href").slice(1);
        const target = document.getElementById(id);
        if (target) setTimeout(() => target.setAttribute("tabindex", "-1"), 0);
        if (target) setTimeout(() => target.focus({ preventScroll: true }), 50);
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
      

<a className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-slate-900 focus:shadow-lg" href="#conteudo">
    Pular para o conteúdo
  </a>

<div className="border-b border-white/10 bg-slate-950/70 backdrop-blur">
<div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
<div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-300">
<span className="inline-flex items-center gap-2">
<iconify-icon height="18" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<a className="hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400/60 rounded" href="tel:+551140000000">+55 (11) 4000-0000</a>
</span>
<span className="hidden sm:inline text-white/20">•</span>
<span className="inline-flex items-center gap-2">
<iconify-icon height="18" icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<a className="hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400/60 rounded" href="mailto:contato@nexatelecom.com.br">contato@nexatelecom.com.br</a>
</span>
<span className="hidden md:inline text-white/20">•</span>
<span className="hidden md:inline-flex items-center gap-2">
<iconify-icon height="18" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
          Suporte 24h e atendimento humanizado
        </span>
</div>
<div className="flex items-center gap-2">
<a className="rounded-xl bg-white/5 px-3 py-2 text-xs font-medium text-slate-200 ring-1 ring-white/10 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400/60" href="#cobertura">
          Ver cobertura
        </a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500/90 px-3 py-2 text-xs font-medium text-white shadow-sm shadow-sky-500/20 hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300" href="#" id="btnWhatsTop">
<iconify-icon height="18" icon="solar:chat-round-dots-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
          WhatsApp
        </a>
</div>
</div>
</div>

<header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/65 backdrop-blur">
<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
<a className="group inline-flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-sky-400/60 rounded-xl" href="#inicio">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
<span className="text-base font-semibold tracking-tight" style={{fontFamily: '\'Space Grotesk\', Inter, system-ui, sans-serif'}}>NT</span>
</span>
<span className="flex flex-col leading-tight">
<span className="text-sm font-semibold tracking-tight" style={{fontFamily: '\'Space Grotesk\', Inter, system-ui, sans-serif'}}>Nexa Telecom</span>
<span className="text-xs text-slate-300">Internet • Telefonia • Suporte</span>
</span>
</a>
<nav aria-label="Navegação principal" className="hidden items-center gap-1 md:flex">
<a className="rounded-xl px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400/60" href="#planos">Planos</a>
<a className="rounded-xl px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400/60" href="#servicos">Serviços</a>
<a className="rounded-xl px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400/60" href="#sobre">Sobre</a>
<a className="rounded-xl px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400/60" href="#vantagens">Vantagens</a>
<a className="rounded-xl px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400/60" href="#depoimentos">Depoimentos</a>
<a className="rounded-xl px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400/60" href="#contato">Contato</a>
</nav>
<div className="flex items-center gap-2">
<a className="hidden sm:inline-flex items-center justify-center gap-2 rounded-xl bg-white px-3 py-2 text-sm font-semibold text-slate-950 shadow-sm hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-300" href="#planos">
<iconify-icon height="18" icon="solar:tag-price-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
          Ver planos
        </a>
<button aria-controls="mobileMenu" aria-expanded="false" aria-label="Abrir menu" className="md:hidden inline-flex items-center justify-center rounded-xl bg-white/5 p-2 ring-1 ring-white/10 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400/60" id="menuBtn">
<iconify-icon height="22" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</button>
</div>
</div>

<div className="md:hidden hidden border-t border-white/10" id="mobileMenu">
<div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 gap-2">
<a className="rounded-xl bg-white/5 px-3 py-3 text-sm font-medium text-slate-100 ring-1 ring-white/10 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400/60" href="#planos">Planos</a>
<a className="rounded-xl bg-white/5 px-3 py-3 text-sm font-medium text-slate-100 ring-1 ring-white/10 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400/60" href="#servicos">Serviços</a>
<a className="rounded-xl bg-white/5 px-3 py-3 text-sm font-medium text-slate-100 ring-1 ring-white/10 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400/60" href="#sobre">Sobre</a>
<a className="rounded-xl bg-white/5 px-3 py-3 text-sm font-medium text-slate-100 ring-1 ring-white/10 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400/60" href="#vantagens">Vantagens</a>
<a className="rounded-xl bg-white/5 px-3 py-3 text-sm font-medium text-slate-100 ring-1 ring-white/10 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400/60" href="#depoimentos">Depoimentos</a>
<a className="rounded-xl bg-sky-500/90 px-3 py-3 text-sm font-semibold text-white hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300" href="#contato">Contato</a>
</div>
</div>
</div>
</header>
<main id="conteudo">

<section className="relative overflow-hidden" id="inicio">
<div className="absolute inset-0">
<div className="absolute -top-24 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-sky-500/20 blur-3xl"></div>
<div className="absolute -bottom-24 right-0 h-[28rem] w-[28rem] rounded-full bg-indigo-500/15 blur-3xl"></div>
<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950"></div>
</div>
<div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
<div className="grid items-center gap-10 lg:grid-cols-2">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 text-xs font-medium text-slate-200 ring-1 ring-white/10">
<iconify-icon height="18" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
              Conexão estável, baixa latência e suporte 24h
            </div>
<h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl" style={{fontFamily: '\'Space Grotesk\', Inter, system-ui, sans-serif'}}>
              Internet fibra e telefonia com performance para sua rotina.
            </h1>
<p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              A Nexa Telecom entrega <strong className="font-semibold text-slate-100">internet banda larga e fibra óptica</strong>, <strong className="font-semibold text-slate-100">telefonia fixa e móvel</strong> e um atendimento que resolve de verdade.
              Planos claros, instalação ágil e suporte técnico especializado.
            </p>
<div className="flex flex-col gap-3 sm:flex-row sm:items-center">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 shadow-sm hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-300" href="#planos">
<iconify-icon height="18" icon="solar:rocket-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                Escolher meu plano
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400/60" href="#contato">
<iconify-icon height="18" icon="solar:headphones-round-sound-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                Falar com um consultor
              </a>
</div>
<div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
<div className="flex items-center gap-2 text-sm font-semibold text-white">
<iconify-icon height="18" icon="solar:wifi-router-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                  Wi‑Fi otimizado
                </div>
<p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Orientação de posicionamento e ajustes para melhor cobertura.
                </p>
</div>
<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
<div className="flex items-center gap-2 text-sm font-semibold text-white">
<iconify-icon height="18" icon="solar:gamepad-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                  Baixa latência
                </div>
<p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Ideal para videochamadas, aulas online e jogos.
                </p>
</div>
<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
<div className="flex items-center gap-2 text-sm font-semibold text-white">
<iconify-icon height="18" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                  Atendimento próximo
                </div>
<p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Sem enrolação: você fala com quem resolve.
                </p>
</div>
</div>
</div>
<div className="relative">
<div className="rounded-3xl bg-gradient-to-b from-white/10 to-white/5 p-5 ring-1 ring-white/10">
<div className="rounded-2xl bg-slate-950/60 p-5 ring-1 ring-white/10">
<div className="flex items-start justify-between gap-4">
<div>
<p className="text-xs font-medium text-slate-300">Diagnóstico rápido</p>
<h2 className="mt-1 text-xl font-semibold tracking-tight text-white" style={{fontFamily: '\'Space Grotesk\', Inter, system-ui, sans-serif'}}>Teste de interesse</h2>
<p className="mt-2 text-sm text-slate-300">
                      Informe seu bairro e o tipo de serviço. Retornamos com disponibilidade e condições.
                    </p>
</div>
<div className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
<iconify-icon height="26" icon="solar:map-point-wave-linear" style={{strokeWidth: '1.5'}} width="26"></iconify-icon>
</div>
</div>
<form aria-label="Formulário de interesse" className="mt-5 grid gap-3" id="leadHero">
<label className="grid gap-1">
<span className="text-xs font-medium text-slate-200">Bairro / Cidade</span>
<input autocomplete="address-level2" className="h-11 w-full rounded-xl bg-white/5 px-3 text-sm text-white placeholder:text-slate-400 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400/60" name="local" placeholder="Ex.: Centro, São Paulo" required=""/>
</label>
<label className="grid gap-1">
<span className="text-xs font-medium text-slate-200">Serviço desejado</span>
<select className="h-11 w-full appearance-none rounded-xl bg-white/5 px-3 pr-10 text-sm text-white ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400/60" name="servico">
<option className="bg-slate-950" value="Internet Fibra">Internet Fibra</option>
<option className="bg-slate-950" value="Telefonia Fixa">Telefonia Fixa</option>
<option className="bg-slate-950" value="Telefonia Móvel">Telefonia Móvel</option>
<option className="bg-slate-950" value="Combo (Internet + Telefonia)">Combo (Internet + Telefonia)</option>
<option className="bg-slate-950" value="Suporte Técnico">Suporte Técnico</option>
</select>
</label>
<div className="grid gap-3 sm:grid-cols-2">
<label className="grid gap-1">
<span className="text-xs font-medium text-slate-200">Nome</span>
<input autocomplete="name" className="h-11 w-full rounded-xl bg-white/5 px-3 text-sm text-white placeholder:text-slate-400 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400/60" name="nome" placeholder="Seu nome" required=""/>
</label>
<label className="grid gap-1">
<span className="text-xs font-medium text-slate-200">Telefone</span>
<input autocomplete="tel" className="h-11 w-full rounded-xl bg-white/5 px-3 text-sm text-white placeholder:text-slate-400 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400/60" inputmode="tel" name="telefone" placeholder="(11) 9xxxx-xxxx" required=""/>
</label>
</div>
<button className="mt-1 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-sky-500/90 px-4 text-sm font-semibold text-white shadow-sm shadow-sky-500/20 hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300" type="submit">
<iconify-icon height="18" icon="solar:chat-line-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Solicitar contato
                  </button>
<p className="text-xs text-slate-400">
                    Ao enviar, você concorda em receber contato da Nexa Telecom por WhatsApp/ligação para informar disponibilidade e valores.
                  </p>
</form>
</div>
</div>
<div className="mt-5 grid gap-3 sm:grid-cols-3">
<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
<p className="text-xs text-slate-300">Instalação</p>
<p className="mt-1 text-sm font-semibold text-white">Ágil e agendada</p>
</div>
<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
<p className="text-xs text-slate-300">Monitoramento</p>
<p className="mt-1 text-sm font-semibold text-white">Rede acompanhada</p>
</div>
<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
<p className="text-xs text-slate-300">Suporte</p>
<p className="mt-1 text-sm font-semibold text-white">Especialistas 24h</p>
</div>
</div>
</div>
</div>

<div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
<a className="group rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400/60" href="#planos">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
<iconify-icon height="22" icon="solar:router-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-white">Planos de Internet</p>
<p className="text-xs text-slate-300">Fibra com performance</p>
</div>
</div>
<iconify-icon className="text-slate-300 group-hover:text-white" height="20" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</a>
<a className="group rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400/60" href="#servicos">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
<iconify-icon height="22" icon="solar:call-chat-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-white">Telefonia</p>
<p className="text-xs text-slate-300">Fixa e móvel</p>
</div>
</div>
<iconify-icon className="text-slate-300 group-hover:text-white" height="20" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</a>
<a className="group rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400/60" href="#vantagens">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
<iconify-icon height="22" icon="solar:shield-up-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-white">Por que escolher</p>
<p className="text-xs text-slate-300">Diferenciais reais</p>
</div>
</div>
<iconify-icon className="text-slate-300 group-hover:text-white" height="20" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</a>
<a className="group rounded-2xl bg-sky-500/15 p-4 ring-1 ring-sky-400/20 hover:bg-sky-500/20 focus:outline-none focus:ring-2 focus:ring-sky-400/60" href="#contato">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="rounded-2xl bg-sky-500/15 p-3 ring-1 ring-sky-400/20">
<iconify-icon height="22" icon="solar:chat-round-call-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-white">Fale agora</p>
<p className="text-xs text-slate-200">WhatsApp e ligação</p>
</div>
</div>
<iconify-icon className="text-slate-100" height="20" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</a>
</div>
</div>
</section>

<section className="border-t border-white/10 bg-slate-950" id="planos">
<div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
<div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl" style={{fontFamily: '\'Space Grotesk\', Inter, system-ui, sans-serif'}}>Planos e Serviços</h2>
<p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
              Escolha um plano de internet fibra, telefonia ou combo. Valores e condições podem variar conforme disponibilidade e região.
            </p>
</div>
<div className="flex flex-col gap-2 sm:flex-row">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400/60" href="#cobertura">
<iconify-icon height="18" icon="solar:map-point-search-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
              Consultar cobertura
            </a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500/90 px-4 py-3 text-sm font-semibold text-white hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300" href="#" id="btnWhatsPlans">
<iconify-icon height="18" icon="solar:chat-square-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
              Pedir proposta
            </a>
</div>
</div>
<div className="mt-10 grid gap-4 lg:grid-cols-3">

<article className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
<header className="flex items-start justify-between gap-4">
<div>
<p className="text-xs font-medium text-slate-300">Internet Fibra</p>
<h3 className="mt-1 text-xl font-semibold tracking-tight text-white" style={{fontFamily: '\'Space Grotesk\', Inter, system-ui, sans-serif'}}>Fibra Essencial</h3>
</div>
<div className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
<iconify-icon height="22" icon="solar:wifi-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
</header>
<div className="mt-5 flex items-end justify-between">
<div>
<p className="text-xs text-slate-300">Velocidade</p>
<p className="mt-1 text-3xl font-semibold tracking-tight text-white">300 <span className="text-base font-medium text-slate-300">Mbps</span></p>
</div>
<div className="text-right">
<p className="text-xs text-slate-300">A partir de</p>
<p className="mt-1 text-2xl font-semibold tracking-tight text-white">R$ 99,90<span className="text-sm font-medium text-slate-300">/mês</span></p>
</div>
</div>
<ul className="mt-6 space-y-3 text-sm text-slate-200">
<li className="flex gap-2">
<iconify-icon height="18" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                Ideal para streaming, redes sociais e home office leve
              </li>
<li className="flex gap-2">
<iconify-icon height="18" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                Suporte técnico especializado 24h
              </li>
<li className="flex gap-2">
<iconify-icon height="18" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                Instalação agendada e acompanhamento
              </li>
</ul>
<div className="mt-6 grid gap-2">
<a className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-white px-4 text-sm font-semibold text-slate-950 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-300" href="#contato">
<iconify-icon height="18" icon="solar:paper-plane-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                Quero este plano
              </a>
<button className="btnWhatsPlan inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-white/5 px-4 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400/60" data-plan="Fibra Essencial 300Mbps">
<iconify-icon height="18" icon="solar:chat-round-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                Tirar dúvidas no WhatsApp
              </button>
</div>
</article>

<article className="relative rounded-3xl bg-gradient-to-b from-sky-500/15 to-white/5 p-6 ring-1 ring-sky-400/25">
<div className="absolute -top-3 left-6 inline-flex items-center gap-2 rounded-full bg-sky-500/90 px-3 py-1.5 text-xs font-semibold text-white shadow-sm shadow-sky-500/20">
<iconify-icon height="16" icon="solar:fire-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
              Mais escolhido
            </div>
<header className="flex items-start justify-between gap-4 pt-2">
<div>
<p className="text-xs font-medium text-slate-200">Internet Fibra</p>
<h3 className="mt-1 text-xl font-semibold tracking-tight text-white" style={{fontFamily: '\'Space Grotesk\', Inter, system-ui, sans-serif'}}>Fibra Turbo</h3>
</div>
<div className="rounded-2xl bg-sky-500/15 p-3 ring-1 ring-sky-400/20">
<iconify-icon height="22" icon="solar:flash-circle-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
</header>
<div className="mt-5 flex items-end justify-between">
<div>
<p className="text-xs text-slate-200">Velocidade</p>
<p className="mt-1 text-3xl font-semibold tracking-tight text-white">600 <span className="text-base font-medium text-slate-200">Mbps</span></p>
</div>
<div className="text-right">
<p className="text-xs text-slate-200">A partir de</p>
<p className="mt-1 text-2xl font-semibold tracking-tight text-white">R$ 129,90<span className="text-sm font-medium text-slate-200">/mês</span></p>
</div>
</div>
<ul className="mt-6 space-y-3 text-sm text-slate-100">
<li className="flex gap-2">
<iconify-icon height="18" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                Perfeito para família, múltiplos dispositivos e streaming 4K
              </li>
<li className="flex gap-2">
<iconify-icon height="18" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                Melhor desempenho para jogos e videochamadas
              </li>
<li className="flex gap-2">
<iconify-icon height="18" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                Prioridade de atendimento em horários críticos
              </li>
</ul>
<div className="mt-6 grid gap-2">
<a className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-white px-4 text-sm font-semibold text-slate-950 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-300" href="#contato">
<iconify-icon height="18" icon="solar:bag-2-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                Assinar agora
              </a>
<button className="btnWhatsPlan inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-sky-500/90 px-4 text-sm font-semibold text-white hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300" data-plan="Fibra Turbo 600Mbps">
<iconify-icon height="18" icon="solar:chat-round-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                Garantir oferta no WhatsApp
              </button>
</div>
</article>

<article className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
<header className="flex items-start justify-between gap-4">
<div>
<p className="text-xs font-medium text-slate-300">Combo</p>
<h3 className="mt-1 text-xl font-semibold tracking-tight text-white" style={{fontFamily: '\'Space Grotesk\', Inter, system-ui, sans-serif'}}>Fibra + Telefonia</h3>
</div>
<div className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
<iconify-icon height="22" icon="solar:call-medicine-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
</header>
<div className="mt-5 flex items-end justify-between">
<div>
<p className="text-xs text-slate-300">Internet</p>
<p className="mt-1 text-3xl font-semibold tracking-tight text-white">500 <span className="text-base font-medium text-slate-300">Mbps</span></p>
</div>
<div className="text-right">
<p className="text-xs text-slate-300">A partir de</p>
<p className="mt-1 text-2xl font-semibold tracking-tight text-white">R$ 149,90<span className="text-sm font-medium text-slate-300">/mês</span></p>
</div>
</div>
<ul className="mt-6 space-y-3 text-sm text-slate-200">
<li className="flex gap-2">
<iconify-icon height="18" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                Telefonia fixa com ligações para todo o Brasil (consulte regras)
              </li>
<li className="flex gap-2">
<iconify-icon height="18" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                Número portável e instalação integrada
              </li>
<li className="flex gap-2">
<iconify-icon height="18" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                Economia e um único atendimento
              </li>
</ul>
<div className="mt-6 grid gap-2">
<a className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-white px-4 text-sm font-semibold text-slate-950 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-300" href="#contato">
<iconify-icon height="18" icon="solar:hand-money-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                Montar meu combo
              </a>
<button className="btnWhatsPlan inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-white/5 px-4 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400/60" data-plan="Combo Fibra 500Mbps + Telefonia">
<iconify-icon height="18" icon="solar:chat-round-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                Falar no WhatsApp
              </button>
</div>
</article>
</div>
<div className="mt-6 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
<div className="max-w-2xl">
<h3 className="text-lg font-semibold tracking-tight text-white" style={{fontFamily: '\'Space Grotesk\', Inter, system-ui, sans-serif'}}>Planos corporativos e link dedicado</h3>
<p className="mt-2 text-sm text-slate-300">
                Para empresas: IP fixo, SLA, redundância e atendimento prioritário. Projetos sob medida para condomínios e operações críticas.
              </p>
</div>
<button className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-white px-4 text-sm font-semibold text-slate-950 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-300" id="btnWhatsB2B">
<iconify-icon height="18" icon="solar:case-round-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
              Solicitar proposta B2B
            </button>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10 bg-slate-950" id="servicos">
<div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
<div className="grid gap-10 lg:grid-cols-2 lg:items-start">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl" style={{fontFamily: '\'Space Grotesk\', Inter, system-ui, sans-serif'}}>Serviços para casa e empresa</h2>
<p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
              Uma estrutura completa de telecom para simplificar seu dia a dia: conectividade, voz e suporte com time técnico experiente.
            </p>
<div className="mt-8 grid gap-4 sm:grid-cols-2">
<div className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10">
<div className="flex items-center gap-3">
<div className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
<iconify-icon height="22" icon="solar:earth-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-white" style={{fontFamily: '\'Space Grotesk\', Inter, system-ui, sans-serif'}}>Internet fibra</h3>
</div>
<p className="mt-3 text-sm text-slate-300">
                  Upload e download consistentes, ideal para trabalho remoto, streaming e múltiplos dispositivos.
                </p>
</div>
<div className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10">
<div className="flex items-center gap-3">
<div className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
<iconify-icon height="22" icon="solar:smartphone-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-white" style={{fontFamily: '\'Space Grotesk\', Inter, system-ui, sans-serif'}}>Telefonia móvel</h3>
</div>
<p className="mt-3 text-sm text-slate-300">
                  Planos com cobertura nacional, portabilidade e atendimento local para você não ficar na mão.
                </p>
</div>
<div className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10">
<div className="flex items-center gap-3">
<div className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
<iconify-icon height="22" icon="solar:phone-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-white" style={{fontFamily: '\'Space Grotesk\', Inter, system-ui, sans-serif'}}>Telefonia fixa</h3>
</div>
<p className="mt-3 text-sm text-slate-300">
                  Voz com estabilidade, recursos de atendimento e possibilidade de combo com internet.
                </p>
</div>
<div className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10">
<div className="flex items-center gap-3">
<div className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
<iconify-icon height="22" icon="solar:settings-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-white" style={{fontFamily: '\'Space Grotesk\', Inter, system-ui, sans-serif'}}>Suporte técnico</h3>
</div>
<p className="mt-3 text-sm text-slate-300">
                  Atendimento especializado 24h, testes de rede e orientação de configuração.
                </p>
</div>
</div>
</div>
<div className="rounded-3xl bg-gradient-to-b from-white/10 to-white/5 p-6 ring-1 ring-white/10">
<div className="rounded-2xl bg-slate-950/55 p-6 ring-1 ring-white/10">
<h3 className="text-xl font-semibold tracking-tight text-white" style={{fontFamily: '\'Space Grotesk\', Inter, system-ui, sans-serif'}}>O que você recebe na prática</h3>
<p className="mt-2 text-sm text-slate-300">
                Mais do que “megabits”: entrega consistente, transparência e atendimento de ponta a ponta.
              </p>
<div className="mt-6 space-y-4">
<div className="flex gap-3">
<div className="mt-0.5 rounded-2xl bg-white/5 p-2 ring-1 ring-white/10">
<iconify-icon height="20" icon="solar:graph-up-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-white">Velocidade real no uso diário</p>
<p className="mt-1 text-xs text-slate-300">Rede dimensionada e monitorada para evitar quedas e instabilidade.</p>
</div>
</div>
<div className="flex gap-3">
<div className="mt-0.5 rounded-2xl bg-white/5 p-2 ring-1 ring-white/10">
<iconify-icon height="20" icon="solar:headphones-round-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-white">Suporte que acompanha até resolver</p>
<p className="mt-1 text-xs text-slate-300">Equipe treinada e processos claros de atendimento.</p>
</div>
</div>
<div className="flex gap-3">
<div className="mt-0.5 rounded-2xl bg-white/5 p-2 ring-1 ring-white/10">
<iconify-icon height="20" icon="solar:shield-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-white">Segurança e boas práticas</p>
<p className="mt-1 text-xs text-slate-300">Orientações para Wi‑Fi, senhas, dispositivos e performance.</p>
</div>
</div>
</div>
<div className="mt-6 grid gap-2 sm:grid-cols-2">
<a className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-white px-4 text-sm font-semibold text-slate-950 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-300" href="#contato">
<iconify-icon height="18" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                  Agendar instalação
                </a>
<a className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-white/5 px-4 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400/60" href="#depoimentos">
<iconify-icon height="18" icon="solar:stars-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                  Ver avaliações
                </a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10 bg-slate-950" id="sobre">
<div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
<div className="grid gap-10 lg:grid-cols-2 lg:items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl" style={{fontFamily: '\'Space Grotesk\', Inter, system-ui, sans-serif'}}>Sobre nós</h2>
<p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
              A <strong className="font-semibold text-slate-100">Nexa Telecom</strong> é uma empresa de telecomunicações focada em entregar conectividade com atendimento próximo.
              Investimos em infraestrutura, monitoramento e equipe técnica para oferecer uma experiência de internet e telefonia que você percebe no dia a dia.
            </p>
<div className="mt-6 grid gap-4 sm:grid-cols-3">
<div className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10">
<p className="text-xs text-slate-300">Experiência</p>
<p className="mt-2 text-lg font-semibold tracking-tight text-white" style={{fontFamily: '\'Space Grotesk\', Inter, system-ui, sans-serif'}}>+10 anos</p>
<p className="mt-1 text-xs text-slate-300">No mercado de conectividade</p>
</div>
<div className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10">
<p className="text-xs text-slate-300">Foco</p>
<p className="mt-2 text-lg font-semibold tracking-tight text-white" style={{fontFamily: '\'Space Grotesk\', Inter, system-ui, sans-serif'}}>Qualidade</p>
<p className="mt-1 text-xs text-slate-300">Estabilidade e suporte</p>
</div>
<div className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10">
<p className="text-xs text-slate-300">Atendimento</p>
<p className="mt-2 text-lg font-semibold tracking-tight text-white" style={{fontFamily: '\'Space Grotesk\', Inter, system-ui, sans-serif'}}>24h</p>
<p className="mt-1 text-xs text-slate-300">Humanizado e ágil</p>
</div>
</div>
</div>
<div className="rounded-3xl bg-gradient-to-b from-white/10 to-white/5 p-6 ring-1 ring-white/10">
<div className="rounded-2xl bg-slate-950/55 p-6 ring-1 ring-white/10">
<h3 className="text-xl font-semibold tracking-tight text-white" style={{fontFamily: '\'Space Grotesk\', Inter, system-ui, sans-serif'}}>Missão, visão e valores</h3>
<div className="mt-6 space-y-4">
<div className="flex gap-3">
<div className="mt-0.5 rounded-2xl bg-white/5 p-2 ring-1 ring-white/10">
<iconify-icon height="20" icon="solar:flag-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-white">Missão</p>
<p className="mt-1 text-xs text-slate-300">Conectar pessoas e empresas com qualidade, transparência e suporte que resolve.</p>
</div>
</div>
<div className="flex gap-3">
<div className="mt-0.5 rounded-2xl bg-white/5 p-2 ring-1 ring-white/10">
<iconify-icon height="20" icon="solar:eye-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-white">Visão</p>
<p className="mt-1 text-xs text-slate-300">Ser referência regional em fibra e telefonia, com excelência de atendimento.</p>
</div>
</div>
<div className="flex gap-3">
<div className="mt-0.5 rounded-2xl bg-white/5 p-2 ring-1 ring-white/10">
<iconify-icon height="20" icon="solar:heart-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-white">Valores</p>
<p className="mt-1 text-xs text-slate-300">Respeito ao cliente, ética, melhoria contínua e responsabilidade.</p>
</div>
</div>
</div>
<div className="mt-6 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
<div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
<p className="text-sm font-medium text-slate-200">Quer levar a Nexa para o seu endereço?</p>
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500/90 px-4 py-2.5 text-sm font-semibold text-white hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300" href="#contato">
<iconify-icon height="18" icon="solar:chat-round-call-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Solicitar contato
                  </a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10 bg-slate-950" id="vantagens">
<div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
<div className="max-w-3xl">
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl" style={{fontFamily: '\'Space Grotesk\', Inter, system-ui, sans-serif'}}>Por que escolher a Nexa Telecom</h2>
<p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
            Diferenciais pensados para reduzir problemas e aumentar a sua produtividade: estabilidade, atendimento e clareza.
          </p>
</div>
<div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
<div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
<div className="flex items-center gap-3">
<div className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
<iconify-icon height="22" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-white" style={{fontFamily: '\'Space Grotesk\', Inter, system-ui, sans-serif'}}>Suporte 24h</h3>
</div>
<p className="mt-3 text-sm text-slate-300">
              Atendimento técnico a qualquer hora, com registro e acompanhamento do chamado.
            </p>
</div>
<div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
<div className="flex items-center gap-3">
<div className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
<iconify-icon height="22" icon="solar:users-group-two-rounded-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-white" style={{fontFamily: '\'Space Grotesk\', Inter, system-ui, sans-serif'}}>Atendimento dedicado</h3>
</div>
<p className="mt-3 text-sm text-slate-300">
              Você fala com pessoas — sem roteiros confusos — para resolver com agilidade.
            </p>
</div>
<div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
<div className="flex items-center gap-3">
<div className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
<iconify-icon height="22" icon="solar:buildings-2-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-white" style={{fontFamily: '\'Space Grotesk\', Inter, system-ui, sans-serif'}}>Cobertura regional</h3>
</div>
<p className="mt-3 text-sm text-slate-300">
              Expansão contínua e foco em qualidade por área atendida. Consulte disponibilidade.
            </p>
</div>
<div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
<div className="flex items-center gap-3">
<div className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
<iconify-icon height="22" icon="solar:shield-network-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-white" style={{fontFamily: '\'Space Grotesk\', Inter, system-ui, sans-serif'}}>Rede monitorada</h3>
</div>
<p className="mt-3 text-sm text-slate-300">
              Acompanhamento de performance e atuação preventiva para manter a estabilidade.
            </p>
</div>
<div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
<div className="flex items-center gap-3">
<div className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
<iconify-icon height="22" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-white" style={{fontFamily: '\'Space Grotesk\', Inter, system-ui, sans-serif'}}>Planos claros</h3>
</div>
<p className="mt-3 text-sm text-slate-300">
              Informações objetivas de velocidade, condições e valores para você comparar sem surpresas.
            </p>
</div>
<div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
<div className="flex items-center gap-3">
<div className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
<iconify-icon height="22" icon="solar:bolt-circle-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-white" style={{fontFamily: '\'Space Grotesk\', Inter, system-ui, sans-serif'}}>Instalação ágil</h3>
</div>
<p className="mt-3 text-sm text-slate-300">
              Agendamento rápido e orientação de uso para deixar tudo funcionando desde o primeiro dia.
            </p>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10 bg-slate-950" id="depoimentos">
<div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
<div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl" style={{fontFamily: '\'Space Grotesk\', Inter, system-ui, sans-serif'}}>Depoimentos de clientes</h2>
<p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
              Opiniões reais ou simuladas para demonstração. Você pode substituir por avaliações do Google ou cases.
            </p>
</div>
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400/60" href="#contato">
<iconify-icon height="18" icon="solar:pen-new-square-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
            Quero ser cliente
          </a>
</div>
<div className="mt-10 grid gap-4 lg:grid-cols-3">
<figure className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
<span className="text-sm font-semibold tracking-tight">LM</span>
</div>
<div>
<figcaption className="text-sm font-semibold text-white">Lucas M.</figcaption>
<p className="text-xs text-slate-300">Home office</p>
</div>
</div>
<div aria-label="Avaliação 5 de 5" className="inline-flex items-center gap-1 text-sky-300">
<iconify-icon height="18" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
</div>
<blockquote className="mt-4 text-sm leading-relaxed text-slate-200">
              “Depois que mudei para a fibra, as chamadas de vídeo pararam de travar. Suporte respondeu rápido e ajustou meu Wi‑Fi em poucos minutos.”
            </blockquote>
</figure>
<figure className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
<span className="text-sm font-semibold tracking-tight">AP</span>
</div>
<div>
<figcaption className="text-sm font-semibold text-white">Ana P.</figcaption>
<p className="text-xs text-slate-300">Família e streaming</p>
</div>
</div>
<div aria-label="Avaliação 5 de 5" className="inline-flex items-center gap-1 text-sky-300">
<iconify-icon height="18" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
</div>
<blockquote className="mt-4 text-sm leading-relaxed text-slate-200">
              “Instalação foi no prazo, equipe educada e a internet aguenta tudo: TV, celular, notebook e videogame ao mesmo tempo.”
            </blockquote>
</figure>
<figure className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
<span className="text-sm font-semibold tracking-tight">RB</span>
</div>
<div>
<figcaption className="text-sm font-semibold text-white">Rafael B.</figcaption>
<p className="text-xs text-slate-300">Pequena empresa</p>
</div>
</div>
<div aria-label="Avaliação 5 de 5" className="inline-flex items-center gap-1 text-sky-300">
<iconify-icon height="18" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
</div>
<blockquote className="mt-4 text-sm leading-relaxed text-slate-200">
              “O atendimento é muito superior. Quando preciso, consigo falar com técnico e resolver sem perder tempo. A estabilidade melhorou bastante.”
            </blockquote>
</figure>
</div>
</div>
</section>

<section className="border-t border-white/10 bg-slate-950" id="cobertura">
<div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
<div className="grid gap-10 lg:grid-cols-2 lg:items-center">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl" style={{fontFamily: '\'Space Grotesk\', Inter, system-ui, sans-serif'}}>Cobertura e disponibilidade</h2>
<p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
              Verifique rapidamente se atendemos seu endereço. Se ainda não chegamos, registramos seu interesse para avisar quando expandirmos.
            </p>
<div className="mt-8 grid gap-4 sm:grid-cols-2">
<div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
<div className="flex items-center gap-3">
<div className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
<iconify-icon height="22" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-white" style={{fontFamily: '\'Space Grotesk\', Inter, system-ui, sans-serif'}}>Atendimento por região</h3>
</div>
<p className="mt-3 text-sm text-slate-300">
                  Concentração em áreas atendidas para manter qualidade e rapidez no suporte.
                </p>
</div>
<div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
<div className="flex items-center gap-3">
<div className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
<iconify-icon height="22" icon="solar:compass-square-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-white" style={{fontFamily: '\'Space Grotesk\', Inter, system-ui, sans-serif'}}>Expansão contínua</h3>
</div>
<p className="mt-3 text-sm text-slate-300">
                  Novos bairros são habilitados conforme demanda e viabilidade técnica.
                </p>
</div>
</div>
</div>
<div className="rounded-3xl bg-gradient-to-b from-white/10 to-white/5 p-6 ring-1 ring-white/10">
<div className="rounded-2xl bg-slate-950/55 p-6 ring-1 ring-white/10">
<h3 className="text-xl font-semibold tracking-tight text-white" style={{fontFamily: '\'Space Grotesk\', Inter, system-ui, sans-serif'}}>Consultar cobertura</h3>
<p className="mt-2 text-sm text-slate-300">Preencha o mínimo e receba retorno com disponibilidade.</p>
<form aria-label="Formulário de cobertura" className="mt-6 grid gap-3" id="coverageForm">
<label className="grid gap-1">
<span className="text-xs font-medium text-slate-200">Cidade</span>
<input className="h-11 rounded-xl bg-white/5 px-3 text-sm text-white placeholder:text-slate-400 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400/60" name="cidade" placeholder="Ex.: São Paulo" required=""/>
</label>
<label className="grid gap-1">
<span className="text-xs font-medium text-slate-200">Bairro</span>
<input className="h-11 rounded-xl bg-white/5 px-3 text-sm text-white placeholder:text-slate-400 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400/60" name="bairro" placeholder="Ex.: Vila Mariana" required=""/>
</label>
<label className="grid gap-1">
<span className="text-xs font-medium text-slate-200">Tipo</span>
<select className="h-11 w-full appearance-none rounded-xl bg-white/5 px-3 pr-10 text-sm text-white ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400/60" name="tipo">
<option className="bg-slate-950" value="Residencial">Residencial</option>
<option className="bg-slate-950" value="Empresarial">Empresarial</option>
<option className="bg-slate-950" value="Condomínio">Condomínio</option>
</select>
</label>
<button className="mt-1 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-white px-4 text-sm font-semibold text-slate-950 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-300" type="submit">
<iconify-icon height="18" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                  Consultar agora
                </button>
<p className="text-xs text-slate-400">
                  Resposta via WhatsApp/ligação com prazos de instalação e melhores ofertas disponíveis.
                </p>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10 bg-slate-950" id="contato">
<div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
<div className="grid gap-10 lg:grid-cols-2 lg:items-start">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl" style={{fontFamily: '\'Space Grotesk\', Inter, system-ui, sans-serif'}}>Fale com a Nexa Telecom</h2>
<p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
              Envie seus dados e um consultor retorna com disponibilidade, valores e condições. Se preferir, chame direto no WhatsApp.
            </p>
<div className="mt-8 grid gap-4 sm:grid-cols-2">
<a className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400/60" href="tel:+551140000000">
<div className="flex items-center gap-3">
<div className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
<iconify-icon height="22" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-white">Ligar agora</p>
<p className="mt-1 text-xs text-slate-300">+55 (11) 4000-0000</p>
</div>
</div>
</a>
<a className="rounded-3xl bg-sky-500/15 p-6 ring-1 ring-sky-400/25 hover:bg-sky-500/20 focus:outline-none focus:ring-2 focus:ring-sky-400/60" href="#" id="btnWhatsContact">
<div className="flex items-center gap-3">
<div className="rounded-2xl bg-sky-500/15 p-3 ring-1 ring-sky-400/25">
<iconify-icon height="22" icon="solar:chat-round-call-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-white">WhatsApp</p>
<p className="mt-1 text-xs text-slate-200">Atendimento rápido</p>
</div>
</div>
</a>
</div>
<div className="mt-6 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
<h3 className="text-base font-semibold tracking-tight text-white" style={{fontFamily: '\'Space Grotesk\', Inter, system-ui, sans-serif'}}>Horário de atendimento</h3>
<div className="mt-3 grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
<p className="inline-flex items-center gap-2">
<iconify-icon height="18" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                  Suporte: 24h (todos os dias)
                </p>
<p className="inline-flex items-center gap-2">
<iconify-icon height="18" icon="solar:users-group-two-rounded-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                  Comercial: Seg–Sáb (consulte)
                </p>
</div>
</div>
</div>
<div className="rounded-3xl bg-gradient-to-b from-white/10 to-white/5 p-6 ring-1 ring-white/10">
<div className="rounded-2xl bg-slate-950/55 p-6 ring-1 ring-white/10">
<h3 className="text-xl font-semibold tracking-tight text-white" style={{fontFamily: '\'Space Grotesk\', Inter, system-ui, sans-serif'}}>Formulário de contato</h3>
<p className="mt-2 text-sm text-slate-300">
                Preencha e clique em enviar. Abriremos uma conversa com a mensagem pronta para agilizar seu atendimento.
              </p>
<form aria-label="Formulário de contato" className="mt-6 grid gap-3" id="contactForm">
<div className="grid gap-3 sm:grid-cols-2">
<label className="grid gap-1">
<span className="text-xs font-medium text-slate-200">Nome</span>
<input autocomplete="name" className="h-11 rounded-xl bg-white/5 px-3 text-sm text-white placeholder:text-slate-400 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400/60" name="nome" placeholder="Seu nome" required=""/>
</label>
<label className="grid gap-1">
<span className="text-xs font-medium text-slate-200">Telefone</span>
<input autocomplete="tel" className="h-11 rounded-xl bg-white/5 px-3 text-sm text-white placeholder:text-slate-400 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400/60" inputmode="tel" name="telefone" placeholder="(11) 9xxxx-xxxx" required=""/>
</label>
</div>
<label className="grid gap-1">
<span className="text-xs font-medium text-slate-200">E-mail</span>
<input autocomplete="email" className="h-11 rounded-xl bg-white/5 px-3 text-sm text-white placeholder:text-slate-400 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400/60" name="email" placeholder="voce@exemplo.com" required="" type="email"/>
</label>
<label className="grid gap-1">
<span className="text-xs font-medium text-slate-200">Mensagem (opcional)</span>
<textarea className="w-full rounded-xl bg-white/5 px-3 py-3 text-sm text-white placeholder:text-slate-400 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400/60" name="mensagem" placeholder="Ex.: Quero o plano de 600 Mbps. Meu bairro é..." rows="4"></textarea>
</label>
<div className="grid gap-2 sm:grid-cols-2">
<button className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-sky-500/90 px-4 text-sm font-semibold text-white hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300" type="submit">
<iconify-icon height="18" icon="solar:chat-line-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Enviar pelo WhatsApp
                  </button>
<a className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-white px-4 text-sm font-semibold text-slate-950 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-300" href="mailto:contato@nexatelecom.com.br">
<iconify-icon height="18" icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Enviar por e-mail
                  </a>
</div>
<p aria-live="polite" className="hidden text-xs text-slate-300" id="formStatus" role="status"></p>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-slate-950">
<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
<div className="grid gap-10 lg:grid-cols-3">
<div>
<div className="inline-flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
<span className="text-base font-semibold tracking-tight" style={{fontFamily: '\'Space Grotesk\', Inter, system-ui, sans-serif'}}>NT</span>
</span>
<div className="leading-tight">
<p className="text-sm font-semibold tracking-tight text-white" style={{fontFamily: '\'Space Grotesk\', Inter, system-ui, sans-serif'}}>Nexa Telecom</p>
<p className="text-xs text-slate-300">Conectando você ao que importa</p>
</div>
</div>
<p className="mt-4 text-sm leading-relaxed text-slate-300">
              Internet fibra, telefonia fixa e móvel, suporte 24h e atendimento ao cliente com foco em resolução.
            </p>
</div>
<div className="grid gap-6 sm:grid-cols-2 lg:col-span-2">
<div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
<h3 className="text-base font-semibold tracking-tight text-white" style={{fontFamily: '\'Space Grotesk\', Inter, system-ui, sans-serif'}}>Contato</h3>
<div className="mt-4 space-y-3 text-sm text-slate-200">
<p className="flex items-center gap-2">
<iconify-icon height="18" icon="solar:phone-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<a className="hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400/60 rounded" href="tel:+551140000000">+55 (11) 4000-0000</a>
</p>
<p className="flex items-center gap-2">
<iconify-icon height="18" icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<a className="hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400/60 rounded" href="mailto:contato@nexatelecom.com.br">contato@nexatelecom.com.br</a>
</p>
<p className="flex items-center gap-2">
<iconify-icon height="18" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                  Av. Central, 1000 — Centro, São Paulo — SP
                </p>
</div>
</div>
<div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
<h3 className="text-base font-semibold tracking-tight text-white" style={{fontFamily: '\'Space Grotesk\', Inter, system-ui, sans-serif'}}>Links rápidos</h3>
<div className="mt-4 grid grid-cols-2 gap-2 text-sm">
<a className="rounded-xl bg-white/5 px-3 py-2 text-slate-200 ring-1 ring-white/10 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400/60" href="#inicio">Home</a>
<a className="rounded-xl bg-white/5 px-3 py-2 text-slate-200 ring-1 ring-white/10 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400/60" href="#planos">Planos</a>
<a className="rounded-xl bg-white/5 px-3 py-2 text-slate-200 ring-1 ring-white/10 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400/60" href="#servicos">Serviços</a>
<a className="rounded-xl bg-white/5 px-3 py-2 text-slate-200 ring-1 ring-white/10 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400/60" href="#sobre">Sobre</a>
<a className="rounded-xl bg-white/5 px-3 py-2 text-slate-200 ring-1 ring-white/10 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400/60" href="#vantagens">Vantagens</a>
<a className="rounded-xl bg-sky-500/90 px-3 py-2 font-semibold text-white hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300" href="#contato">Contato</a>
</div>
<div className="mt-6 flex flex-wrap gap-2">
<a aria-label="Instagram" className="rounded-xl bg-white/5 px-3 py-2 text-xs font-medium text-slate-200 ring-1 ring-white/10 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400/60" href="#">
<span className="inline-flex items-center gap-2">
<iconify-icon height="18" icon="solar:camera-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Instagram
                  </span>
</a>
<a aria-label="Facebook" className="rounded-xl bg-white/5 px-3 py-2 text-xs font-medium text-slate-200 ring-1 ring-white/10 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400/60" href="#">
<span className="inline-flex items-center gap-2">
<iconify-icon height="18" icon="solar:share-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Facebook
                  </span>
</a>
<a aria-label="LinkedIn" className="rounded-xl bg-white/5 px-3 py-2 text-xs font-medium text-slate-200 ring-1 ring-white/10 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400/60" href="#">
<span className="inline-flex items-center gap-2">
<iconify-icon height="18" icon="solar:case-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    LinkedIn
                  </span>
</a>
</div>
</div>
</div>
</div>
<div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
<p className="text-xs text-slate-400">© <span id="year"></span> Nexa Telecom. Todos os direitos reservados.</p>
<p className="text-xs text-slate-400">CNPJ e informações legais podem ser adicionados aqui.</p>
</div>
</div>
</footer>

<div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 sm:bottom-6 sm:right-6">
<a aria-label="Chamar no WhatsApp" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-500/95 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300" href="#" id="btnWhatsFloat">
<iconify-icon height="20" icon="solar:chat-round-call-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
        WhatsApp
      </a>
<a aria-label="Ligar agora" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/5 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400/60" href="tel:+551140000000">
<iconify-icon height="20" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
        Ligar
      </a>
</div>
</main>


    </>
  );
}
