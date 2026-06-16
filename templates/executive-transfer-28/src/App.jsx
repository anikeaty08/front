import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Render lucide icons
      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();
      });

      // Mobile menu
      const menuBtn = document.getElementById('menuBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      if (menuBtn) {
        menuBtn.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
          menuBtn.innerHTML = mobileMenu.classList.contains('hidden') ? '<i data-lucide="menu" class="w-5 h-5"></i>' : '<i data-lucide="x" class="w-5 h-5"></i>';
          lucide.createIcons();
        });
      }

      // Current year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Phone mask (basic)
      const tel = document.getElementById('telefone');
      if (tel) {
        tel.addEventListener('input', (e) => {
          let v = e.target.value.replace(/\D/g, '').slice(0, 11);
          if (v.length > 0) v = '(' + v;
          if (v.length > 3) v = v.slice(0, 3) + ') ' + v.slice(3);
          if (v.length > 10) v = v.slice(0, 10) + ' ' + v.slice(10);
          if (v.length > 15) v = v.slice(0, 15) + '-' + v.slice(15);
          e.target.value = v;
        });
      }

      // Form submission (AJAX)
      const form = document.getElementById('contactForm');
      const btn = document.getElementById('submitBtn');
      const msg = document.getElementById('formMsg');

      // Replace with your Formspree endpoint if desired
      const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mnqerkrk';

      if (form) {
        form.addEventListener('submit', async (e) => {
          e.preventDefault();
          msg.textContent = '';
          msg.className = 'mt-4 text-sm';
          if (form.company && form.company.value.trim() !== '') {
            return; // honeypot
          }
          btn.disabled = true;
          btn.classList.add('opacity-80', 'cursor-not-allowed');
          btn.innerHTML = '<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> Enviando...';
          lucide.createIcons();

          try {
            const formData = new FormData(form);
            const res = await fetch(FORMSPREE_ENDPOINT, {
              method: 'POST',
              headers: { 'Accept': 'application/json' },
              body: formData
            });

            if (res.ok) {
              msg.textContent = 'Recebemos sua solicitação. Em instantes entraremos em contato.';
              msg.classList.add('text-green-400');
              form.reset();
            } else {
              throw new Error('Falha no envio');
            }
          } catch (error) {
            msg.innerHTML = 'Não foi possível enviar agora. Tente novamente ou envie para <a href="mailto:contato@transfersoldi.com" class="underline">contato@transfersoldi.com</a>.';
            msg.classList.add('text-red-400');
          } finally {
            btn.disabled = false;
            btn.classList.remove('opacity-80', 'cursor-not-allowed');
            btn.innerHTML = '<i data-lucide="send" class="w-4 h-4"></i> Enviar solicitação';
            lucide.createIcons();
          }
        });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="hidden md:block bg-neutral-950/80 border-b border-neutral-800">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
<p className="text-xs text-neutral-400">Atendimento 24/7 • São Paulo e região</p>
<div className="flex items-center gap-4">
<a className="text-xs text-neutral-300 hover:text-white transition" href="tel:+5511999999999">
<span className="inline-flex items-center gap-1"><i className="w-3.5 h-3.5" data-lucide="phone"></i> +55 (11) 99999-9999</span>
</a>
<a className="text-xs text-neutral-300 hover:text-white transition" href="mailto:contato@transfersoldi.com">
<span className="inline-flex items-center gap-1"><i className="w-3.5 h-3.5" data-lucide="mail"></i> contato@transfersoldi.com</span>
</a>
</div>
</div>
</div>

<header className="sticky top-0 z-40 bg-neutral-950/80 backdrop-blur border-b border-neutral-900">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<a className="flex items-center gap-2" href="#">
<div className="h-8 w-8 rounded-md bg-gradient-to-br from-yellow-400 via-amber-400 to-yellow-600 shadow-[0_0_30px_-10px_rgba(251,191,36,.8)]"></div>
<span className="text-lg tracking-tight font-semibold">Transfer Soldi</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm text-neutral-300 hover:text-white transition" href="#servicos">Serviços</a>
<a className="text-sm text-neutral-300 hover:text-white transition" href="#frota">Frota</a>
<a className="text-sm text-neutral-300 hover:text-white transition" href="#sobre">Sobre</a>
<a className="text-sm text-neutral-300 hover:text-white transition" href="#depoimentos">Depoimentos</a>
<a className="text-sm text-neutral-300 hover:text-white transition" href="#contato">Contato</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 rounded-md px-4 py-2 bg-gradient-to-r from-yellow-400 to-amber-500 text-neutral-950 text-sm font-medium hover:brightness-110 transition" href="#contato">
<i className="w-4 h-4" data-lucide="calendar"></i> Reservar agora
            </a>
<button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-300 hover:text-white hover:bg-neutral-800" id="menuBtn">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</div>
<div className="md:hidden hidden pb-4" id="mobileMenu">
<div className="grid gap-2">
<a className="px-2 py-2 rounded text-sm text-neutral-300 hover:text-white hover:bg-neutral-800" href="#servicos">Serviços</a>
<a className="px-2 py-2 rounded text-sm text-neutral-300 hover:text-white hover:bg-neutral-800" href="#frota">Frota</a>
<a className="px-2 py-2 rounded text-sm text-neutral-300 hover:text-white hover:bg-neutral-800" href="#sobre">Sobre</a>
<a className="px-2 py-2 rounded text-sm text-neutral-300 hover:text-white hover:bg-neutral-800" href="#depoimentos">Depoimentos</a>
<a className="px-2 py-2 rounded text-sm text-neutral-900 bg-gradient-to-r from-yellow-400 to-amber-500" href="#contato">Reservar agora</a>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="absolute inset-0">
<img alt="São Paulo à noite" className="h-full w-full object-cover opacity-40" src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&amp;w=1800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/70 to-neutral-950"></div>
</div>
<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-28">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-neutral-800/70 bg-neutral-900/60 px-3 py-1 text-xs text-neutral-300">
<i className="w-3.5 h-3.5 text-yellow-400" data-lucide="shield-check"></i>
              Conforto, segurança e pontualidade
            </div>
<h1 className="mt-5 text-4xl md:text-5xl tracking-tight font-semibold">
              Transfer executivo em São Paulo feito do seu jeito
            </h1>
<p className="mt-4 text-neutral-300 text-base leading-relaxed">
              Aeroportos, hotéis, eventos e rotas corporativas com motoristas profissionais e frota de alto padrão. Atendimento 24/7.
            </p>
<div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-neutral-950 text-sm font-medium hover:brightness-110 transition" href="#contato">
<i className="w-4 h-4" data-lucide="send"></i> Solicitar orçamento
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 bg-neutral-900/70 ring-1 ring-neutral-800 text-sm text-neutral-200 hover:bg-neutral-800 transition" href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20reservar%20um%20transfer.">
<i className="w-4 h-4 text-green-400" data-lucide="message-circle"></i> Falar no WhatsApp
              </a>
</div>
<div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-neutral-900/70 ring-1 ring-neutral-800 flex items-center justify-center">
<i className="w-4.5 h-4.5 text-yellow-400" data-lucide="clock"></i>
</div>
<div>
<p className="text-sm font-medium tracking-tight">Pontual</p>
<p className="text-xs text-neutral-400">Chegue no horário</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-neutral-900/70 ring-1 ring-neutral-800 flex items-center justify-center">
<i className="w-4.5 h-4.5 text-yellow-400" data-lucide="user-round-check"></i>
</div>
<div>
<p className="text-sm font-medium tracking-tight">Motoristas Pro</p>
<p className="text-xs text-neutral-400">Experientes e discretos</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-neutral-900/70 ring-1 ring-neutral-800 flex items-center justify-center">
<i className="w-4.5 h-4.5 text-yellow-400" data-lucide="car"></i>
</div>
<div>
<p className="text-sm font-medium tracking-tight">Frota Executiva</p>
<p className="text-xs text-neutral-400">Sedãs e SUVs</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-neutral-900/70 ring-1 ring-neutral-800 flex items-center justify-center">
<i className="w-4.5 h-4.5 text-yellow-400" data-lucide="sun-moon"></i>
</div>
<div>
<p className="text-sm font-medium tracking-tight">24/7</p>
<p className="text-xs text-neutral-400">Sempre disponível</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-6 bg-gradient-to-tr from-yellow-400/10 to-amber-500/0 rounded-3xl blur-2xl"></div>
<div className="relative rounded-3xl overflow-hidden ring-1 ring-neutral-800 bg-neutral-900/60">
<img alt="Carro executivo" className="w-full h-[380px] object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-neutral-950/80 to-transparent">
<p className="text-sm text-neutral-200">Experiência premium porta a porta</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24" id="servicos">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
<div className="flex items-end justify-between">
<div>
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold">Serviços executivos</h2>
<p className="mt-2 text-neutral-400 text-sm">Soluções sob medida para cada necessidade</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm text-yellow-400 hover:text-yellow-300 transition" href="#contato">
            Solicitar cotação <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="group rounded-2xl overflow-hidden ring-1 ring-neutral-800 bg-neutral-900/40 hover:bg-neutral-900/60 transition">
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 to-transparent z-10"></div>
<img alt="Aeroporto de Guarulhos" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute bottom-3 left-3 z-10">
<span className="inline-flex items-center gap-2 rounded-full bg-neutral-950/70 px-3 py-1 text-xs ring-1 ring-neutral-800">
<i className="w-3.5 h-3.5 text-yellow-400" data-lucide="plane"></i> Aeroportos
                </span>
</div>
</div>
<div className="p-5">
<h3 className="text-lg tracking-tight font-semibold">Transfer em aeroportos</h3>
<p className="mt-2 text-sm text-neutral-400">Traslado de/para GRU, CGH e VCP. Monitoramento de voos e espera cortesia.</p>
</div>
</article>
<article className="group rounded-2xl overflow-hidden ring-1 ring-neutral-800 bg-neutral-900/40 hover:bg-neutral-900/60 transition">
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 to-transparent z-10"></div>
<img alt="Reuniões executivas" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-3 left-3 z-10">
<span className="inline-flex items-center gap-2 rounded-full bg-neutral-950/70 px-3 py-1 text-xs ring-1 ring-neutral-800">
<i className="w-3.5 h-3.5 text-yellow-400" data-lucide="briefcase"></i> Corporativo
                </span>
</div>
</div>
<div className="p-5">
<h3 className="text-lg tracking-tight font-semibold">Transporte executivo</h3>
<p className="mt-2 text-sm text-neutral-400">Reuniões, roadshows, agendas por hora e deslocamentos entre escritórios.</p>
</div>
</article>
<article className="group rounded-2xl overflow-hidden ring-1 ring-neutral-800 bg-neutral-900/40 hover:bg-neutral-900/60 transition">
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 to-transparent z-10"></div>
<img alt="Recepção no aeroporto" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="absolute bottom-3 left-3 z-10">
<span className="inline-flex items-center gap-2 rounded-full bg-neutral-950/70 px-3 py-1 text-xs ring-1 ring-neutral-800">
<i className="w-3.5 h-3.5 text-yellow-400" data-lucide="handshake"></i> Receptivo
                </span>
</div>
</div>
<div className="p-5">
<h3 className="text-lg tracking-tight font-semibold">Receptivo em aeroportos</h3>
<p className="mt-2 text-sm text-neutral-400">Boas-vindas na chegada, auxílio com bagagens e condução até o veículo.</p>
</div>
</article>
<article className="group rounded-2xl overflow-hidden ring-1 ring-neutral-800 bg-neutral-900/40 hover:bg-neutral-900/60 transition">
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 to-transparent z-10"></div>
<img alt="City tour SP" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1449452198679-05c7fd30f416?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-3 left-3 z-10">
<span className="inline-flex items-center gap-2 rounded-full bg-neutral-950/70 px-3 py-1 text-xs ring-1 ring-neutral-800">
<i className="w-3.5 h-3.5 text-yellow-400" data-lucide="map"></i> City Tour
                </span>
</div>
</div>
<div className="p-5">
<h3 className="text-lg tracking-tight font-semibold">City tour e lazer</h3>
<p className="mt-2 text-sm text-neutral-400">Roteiros personalizados por pontos turísticos e gastronômicos.</p>
</div>
</article>
<article className="group rounded-2xl overflow-hidden ring-1 ring-neutral-800 bg-neutral-900/40 hover:bg-neutral-900/60 transition">
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 to-transparent z-10"></div>
<img alt="Eventos e shows" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute bottom-3 left-3 z-10">
<span className="inline-flex items-center gap-2 rounded-full bg-neutral-950/70 px-3 py-1 text-xs ring-1 ring-neutral-800">
<i className="w-3.5 h-3.5 text-yellow-400" data-lucide="ticket"></i> Eventos
                </span>
</div>
</div>
<div className="p-5">
<h3 className="text-lg tracking-tight font-semibold">Feiras e eventos</h3>
<p className="mt-2 text-sm text-neutral-400">Operação dedicada para equipes, artistas e executivos.</p>
</div>
</article>
<article className="group rounded-2xl overflow-hidden ring-1 ring-neutral-800 bg-neutral-900/40 hover:bg-neutral-900/60 transition">
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 to-transparent z-10"></div>
<img alt="Longa distância" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-3 left-3 z-10">
<span className="inline-flex items-center gap-2 rounded-full bg-neutral-950/70 px-3 py-1 text-xs ring-1 ring-neutral-800">
<i className="w-3.5 h-3.5 text-yellow-400" data-lucide="route"></i> Intermunicipal
                </span>
</div>
</div>
<div className="p-5">
<h3 className="text-lg tracking-tight font-semibold">Viagens e longa distância</h3>
<p className="mt-2 text-sm text-neutral-400">Conforto absoluto para trajetos entre cidades e estados.</p>
</div>
</article>
</div>
</div>
</section>

<section className="scroll-mt-24" id="frota">
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-yellow-500/5 to-transparent pointer-events-none"></div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div className="order-2 lg:order-1">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold">Frota executiva</h2>
<p className="mt-3 text-neutral-300 text-sm leading-relaxed">
                Sedãs e SUVs com ar-condicionado, água, Wi‑Fi sob demanda e motoristas uniformizados. Opções blindadas sob consulta.
              </p>
<div className="mt-6 grid sm:grid-cols-2 gap-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-neutral-900 ring-1 ring-neutral-800 flex items-center justify-center">
<i className="w-4.5 h-4.5 text-yellow-400" data-lucide="sprout"></i>
</div>
<p className="text-sm text-neutral-300">Higienização constante</p>
</div>
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-neutral-900 ring-1 ring-neutral-800 flex items-center justify-center">
<i className="w-4.5 h-4.5 text-yellow-400" data-lucide="wifi"></i>
</div>
<p className="text-sm text-neutral-300">Wi‑Fi sob demanda</p>
</div>
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-neutral-900 ring-1 ring-neutral-800 flex items-center justify-center">
<i className="w-4.5 h-4.5 text-yellow-400" data-lucide="shield"></i>
</div>
<p className="text-sm text-neutral-300">Opção blindada</p>
</div>
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-neutral-900 ring-1 ring-neutral-800 flex items-center justify-center">
<i className="w-4.5 h-4.5 text-yellow-400" data-lucide="luggage"></i>
</div>
<p className="text-sm text-neutral-300">Porta‑malas generoso</p>
</div>
</div>
<a className="mt-8 inline-flex items-center gap-2 rounded-md px-4 py-2 bg-neutral-900 ring-1 ring-neutral-800 text-sm hover:bg-neutral-800 transition" href="#contato">
<i className="w-4 h-4 text-yellow-400" data-lucide="info"></i> Solicitar catálogo
              </a>
</div>
<div className="order-1 lg:order-2">
<div className="relative rounded-3xl overflow-hidden ring-1 ring-neutral-800 bg-gradient-to-tr from-neutral-900 to-neutral-800">
<img alt="Sedã executivo escuro" className="w-full h-[420px] object-cover" src="https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&amp;w=1800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 to-transparent"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-neutral-900">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
<h2 className="text-3xl tracking-tight font-semibold">Como funciona</h2>
<div className="mt-10 grid md:grid-cols-3 gap-6">
<div className="rounded-2xl ring-1 ring-neutral-800 bg-neutral-900/40 p-6">
<div className="h-10 w-10 rounded-md bg-neutral-900 ring-1 ring-neutral-800 flex items-center justify-center">
<i className="w-5 h-5 text-yellow-400" data-lucide="file-input"></i>
</div>
<h3 className="mt-4 text-lg tracking-tight font-semibold">1. Envie os dados</h3>
<p className="mt-2 text-sm text-neutral-400">Preencha o formulário com origem, destino, data e preferências.</p>
</div>
<div className="rounded-2xl ring-1 ring-neutral-800 bg-neutral-900/40 p-6">
<div className="h-10 w-10 rounded-md bg-neutral-900 ring-1 ring-neutral-800 flex items-center justify-center">
<i className="w-5 h-5 text-yellow-400" data-lucide="badge-check"></i>
</div>
<h3 className="mt-4 text-lg tracking-tight font-semibold">2. Confirmação</h3>
<p className="mt-2 text-sm text-neutral-400">Enviamos a proposta e confirmamos o motorista e o veículo.</p>
</div>
<div className="rounded-2xl ring-1 ring-neutral-800 bg-neutral-900/40 p-6">
<div className="h-10 w-10 rounded-md bg-neutral-900 ring-1 ring-neutral-800 flex items-center justify-center">
<i className="w-5 h-5 text-yellow-400" data-lucide="navigation"></i>
</div>
<h3 className="mt-4 text-lg tracking-tight font-semibold">3. Viagem</h3>
<p className="mt-2 text-sm text-neutral-400">Acompanhamento em tempo real e suporte durante todo o trajeto.</p>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24" id="sobre">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div>
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold">Excelência em cada detalhe</h2>
<p className="mt-3 text-neutral-300 text-sm leading-relaxed">
              A Transfer Soldi oferece serviço executivo com foco em segurança, discrição e pontualidade. Operamos com motoristas experientes e processos claros para sua tranquilidade.
            </p>
<div className="mt-6 grid sm:grid-cols-2 gap-4">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-yellow-400" data-lucide="star"></i>
<p className="text-sm text-neutral-300">Avaliações excelentes</p>
</div>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-yellow-400" data-lucide="shield-alert"></i>
<p className="text-sm text-neutral-300">Seguro e regulamentado</p>
</div>
</div>
</div>
<div className="rounded-3xl overflow-hidden ring-1 ring-neutral-800">
<img alt="Motorista executivo" className="w-full h-[360px] object-cover" src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&amp;w=1800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24" id="depoimentos">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
<h2 className="text-3xl tracking-tight font-semibold">O que clientes dizem</h2>
<div className="mt-8 grid md:grid-cols-3 gap-6">
<div className="rounded-2xl ring-1 ring-neutral-800 bg-neutral-900/40 p-6">
<div className="flex items-center gap-3">
<img alt="Cliente" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium tracking-tight">Mariana S.</p>
<p className="text-xs text-neutral-400">Evento no Expo SP</p>
</div>
</div>
<p className="mt-4 text-sm text-neutral-300">Pontuais e extremamente profissionais. Veículo impecável. Recomendo.</p>
</div>
<div className="rounded-2xl ring-1 ring-neutral-800 bg-neutral-900/40 p-6">
<div className="flex items-center gap-3">
<img alt="Cliente" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium tracking-tight">Ricardo L.</p>
<p className="text-xs text-neutral-400">Transfer GRU</p>
</div>
</div>
<p className="mt-4 text-sm text-neutral-300">Monitoraram meu voo e ajustaram o horário sem custo. Excelente atendimento.</p>
</div>
<div className="rounded-2xl ring-1 ring-neutral-800 bg-neutral-900/40 p-6">
<div className="flex items-center gap-3">
<img alt="Cliente" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium tracking-tight">Ana P.</p>
<p className="text-xs text-neutral-400">Rodízio de visitas</p>
</div>
</div>
<p className="mt-4 text-sm text-neutral-300">Agendamento por hora muito prático, motorista super atencioso.</p>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24" id="contato">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
<div className="grid lg:grid-cols-2 gap-10">
<div>
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold">Solicite seu orçamento</h2>
<p className="mt-3 text-neutral-300 text-sm">Responderemos rapidamente por e‑mail ou WhatsApp. Se preferir, chame direto pelo botão ao lado.</p>
<div className="mt-6 rounded-2xl ring-1 ring-neutral-800 bg-neutral-900/40 p-5">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-yellow-400 mt-0.5" data-lucide="info"></i>
<p className="text-sm text-neutral-400">Inclua número do voo para chegadas em GRU/CGH e informe bagagens especiais.</p>
</div>
</div>
<div className="mt-8 grid sm:grid-cols-2 gap-4">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-yellow-400" data-lucide="map-pin"></i>
<p className="text-sm text-neutral-300">São Paulo • GRU • CGH • VCP</p>
</div>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-yellow-400" data-lucide="phone"></i>
<a className="text-sm text-neutral-300 hover:text-white" href="tel:+5511999999999">+55 (11) 99999‑9999</a>
</div>
</div>
</div>
<div>
<form className="rounded-2xl ring-1 ring-neutral-800 bg-neutral-900/40 p-6" id="contactForm">
<input autocomplete="off" className="hidden" name="company" tabindex="-1" type="text"/>
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs text-neutral-400 mb-1" htmlFor="nome">Nome</label>
<input className="w-full rounded-md bg-neutral-900 border border-neutral-800 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-500/40" id="nome" name="nome" placeholder="Seu nome" required=""/>
</div>
<div>
<label className="block text-xs text-neutral-400 mb-1" htmlFor="telefone">Telefone/WhatsApp</label>
<input className="w-full rounded-md bg-neutral-900 border border-neutral-800 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-500/40" id="telefone" name="telefone" placeholder="(11) 9 9999-9999" required=""/>
</div>
<div>
<label className="block text-xs text-neutral-400 mb-1" htmlFor="email">E‑mail</label>
<input className="w-full rounded-md bg-neutral-900 border border-neutral-800 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-500/40" id="email" name="email" placeholder="voce@empresa.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs text-neutral-400 mb-1" htmlFor="quando">Data e hora</label>
<input className="w-full rounded-md bg-neutral-900 border border-neutral-800 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-500/40" id="quando" name="quando" type="datetime-local"/>
</div>
<div>
<label className="block text-xs text-neutral-400 mb-1" htmlFor="origem">Origem</label>
<input className="w-full rounded-md bg-neutral-900 border border-neutral-800 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-500/40" id="origem" name="origem" placeholder="Endereço, aeroporto, hotel..." required=""/>
</div>
<div>
<label className="block text-xs text-neutral-400 mb-1" htmlFor="destino">Destino</label>
<input className="w-full rounded-md bg-neutral-900 border border-neutral-800 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-500/40" id="destino" name="destino" placeholder="Endereço, cidade..." required=""/>
</div>
</div>
<div className="mt-4">
<label className="block text-xs text-neutral-400 mb-1" htmlFor="mensagem">Detalhes (nº do voo, passageiros, bagagens)</label>
<textarea className="w-full rounded-md bg-neutral-900 border border-neutral-800 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-500/40" id="mensagem" name="mensagem" placeholder="Conte como podemos ajudar" rows="4"></textarea>
</div>
<input name="_subject" type="hidden" value="Nova solicitação de orçamento — Transfer Soldi"/>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<button className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-neutral-950 text-sm font-medium hover:brightness-110 transition" id="submitBtn" type="submit">
<i className="w-4 h-4" data-lucide="send"></i> Enviar solicitação
                </button>
<a className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 bg-neutral-900 ring-1 ring-neutral-800 text-sm text-neutral-200 hover:bg-neutral-800 transition" href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20de%20transfer.">
<i className="w-4 h-4 text-green-400" data-lucide="message-circle"></i> WhatsApp
                </a>
</div>
<p className="mt-4 text-sm" id="formMsg"></p>
</form>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-900">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
<h2 className="text-3xl tracking-tight font-semibold">Perguntas frequentes</h2>
<div className="mt-8 space-y-4">
<details className="group rounded-xl ring-1 ring-neutral-800 bg-neutral-900/40 p-5">
<summary className="flex items-center justify-between cursor-pointer">
<span className="text-sm font-medium tracking-tight">O voo atrasou. Vocês aguardam?</span>
<i className="w-5 h-5 text-neutral-400 transition group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-neutral-400">Sim. Monitoramos o voo e ajustamos o horário de retirada. Incluímos tolerância de espera na chegada.</p>
</details>
<details className="group rounded-xl ring-1 ring-neutral-800 bg-neutral-900/40 p-5">
<summary className="flex items-center justify-between cursor-pointer">
<span className="text-sm font-medium tracking-tight">Vocês oferecem veículos blindados?</span>
<i className="w-5 h-5 text-neutral-400 transition group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-neutral-400">Disponível sob consulta antecipada e sujeito a agenda.</p>
</details>
<details className="group rounded-xl ring-1 ring-neutral-800 bg-neutral-900/40 p-5">
<summary className="flex items-center justify-between cursor-pointer">
<span className="text-sm font-medium tracking-tight">Como funciona o pagamento?</span>
<i className="w-5 h-5 text-neutral-400 transition group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-neutral-400">Emitimos link de pagamento ou faturamos para empresas cadastradas.</p>
</details>
</div>
</div>
</section>

<section className="relative">
<div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-amber-500/5"></div>
<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
<div className="rounded-3xl ring-1 ring-neutral-800 bg-neutral-900/60 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
<div>
<h3 className="text-2xl tracking-tight font-semibold">Pronto para sua próxima viagem?</h3>
<p className="mt-2 text-sm text-neutral-300">Agende agora e tenha uma experiência impecável do início ao fim.</p>
</div>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md px-5 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-neutral-950 text-sm font-medium hover:brightness-110 transition" href="#contato">
<i className="w-4 h-4" data-lucide="calendar"></i> Reservar agora
            </a>
<a className="inline-flex items-center gap-2 rounded-md px-5 py-3 bg-neutral-900 ring-1 ring-neutral-800 text-sm text-neutral-200 hover:bg-neutral-800 transition" href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20quero%20reservar%20um%20transfer.">
<i className="w-4 h-4 text-green-400" data-lucide="message-circle"></i> WhatsApp
            </a>
</div>
</div>
</div>
</section>

<footer className="border-t border-neutral-900">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div className="flex items-center gap-3">
<div className="h-7 w-7 rounded-md bg-gradient-to-br from-yellow-400 via-amber-400 to-yellow-600"></div>
<p className="text-sm font-medium tracking-tight">Transfer Soldi</p>
</div>
<p className="text-xs text-neutral-500">© <span id="year"></span> Transfer Soldi. Todos os direitos reservados.</p>
<div className="flex items-center gap-4 text-neutral-400">
<a className="text-xs hover:text-neutral-200" href="#servicos">Serviços</a>
<a className="text-xs hover:text-neutral-200" href="#frota">Frota</a>
<a className="text-xs hover:text-neutral-200" href="#contato">Contato</a>
</div>
</div>
</div>
</footer>

<a className="fixed bottom-5 right-5 inline-flex items-center justify-center h-12 w-12 rounded-full bg-green-500 hover:bg-green-400 text-white shadow-lg shadow-green-500/30 transition" href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20preciso%20de%20um%20transfer%20em%20SP.">
<i className="w-6 h-6" data-lucide="message-circle"></i>
</a>


    </>
  );
}
