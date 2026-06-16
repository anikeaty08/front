import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Time functionality
        (function () {
            // Setting to Lisbon time for Portugal context
            const tz = 'Europe/Lisbon';
            const timeEl = document.getElementById('tz-time');
            const offsetEl = document.getElementById('tz-offset');

            function tick() {
                const now = new Date();
                const fmt = new Intl.DateTimeFormat('pt-PT', { 
                    timeZone: tz, 
                    hour12: false, 
                    hour: '2-digit', 
                    minute: '2-digit', 
                    second: '2-digit' 
                });
                timeEl.textContent = fmt.format(now);
                
                // Simple check for BST/GMT
                // Note: Accurate offset text logic is complex without libraries, 
                // keeping it simple or static based on request constraints.
                // offsetEl.textContent = "(WET)"; 
                
                setTimeout(tick, 1000);
            }

            tick();
        })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="aura-background-component fixed top-0 w-full h-screen -z-10 hue-rotate-90">
<div className="spline-container absolute top-0 left-0 w-full h-full -z-10 opacity-60">
<iframe frameborder="0" height="100%" id="aura-spline" src="https://my.spline.design/waveform-gm8Mc7BoEALZZ8ggTHi5kSGc" width="100%"></iframe>
</div>
</div>
<section className="relative overflow-hidden pb-20">

<div className="relative">
<div className="flex w-full max-w-4xl mt-0 mr-auto ml-auto justify-center">
<div className="relative flex flex-col items-center">
<div className="h-24 w-7 mix-blend-multiply bg-neutral-800 rounded-b-md"></div>
<div className="-mt-1 h-6 w-12 rounded-md bg-neutral-900 shadow-lg shadow-neutral-900/20"></div>
<div className="-mt-2 h-3 w-8 rounded-b-xl bg-neutral-300 shadow-[inset_0_-1px_0_0_rgba(0,0,0,0.15)]"></div>
</div>
</div>
</div>

<div className="relative -mt-2 w-full max-w-4xl shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)] bg-white border-neutral-200 rounded-[32px] mr-auto mb-12 ml-auto">
<div className="sm:p-8 md:p-10 pt-6 pr-6 pb-6 pl-6">

<div className="flex gap-4 flex-wrap mb-8 items-center justify-between">
<div className="flex items-center gap-3 text-sm">
<div className="flex items-center gap-2 text-neutral-700">
<iconify-icon className="text-neutral-400" icon="solar:map-point-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="font-geist">Baseado em <span className="font-medium text-neutral-800 font-geist">Portimão, PT</span> • Global</span>
</div>
</div>
<div className="hidden sm:flex items-center gap-2 text-sm">
<iconify-icon className="text-neutral-400" icon="solar:globe-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-neutral-700 font-geist">Fuso Horário <span className="text-neutral-500" data-locked="true" id="tz-offset">(GMT)</span></span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-400 hidden sm:block" icon="solar:clock-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="font-mono text-xl sm:text-2xl tracking-tight text-neutral-900" id="tz-time">10:04:10</span>
</div>
</div>

<div className="relative w-full h-64 sm:h-96 rounded-3xl overflow-hidden mb-10">
<img alt="Anderson Emerick Work" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bc819a3-7a42-4526-87e3-bac09aee5b03_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<p className="text-sm font-medium opacity-90 tracking-wide uppercase">Fotografia &amp; Vídeo</p>
</div>
</div>
<h1 className="max-w-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-4xl font-medium tracking-tight mb-8 mt-2">
                    Sou Anderson,<img alt="Anderson portrait" className="inline-block align-middle h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 ring-1 ring-neutral-200 object-cover rounded-xl mr-2 ml-2 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/06687691-3a60-408a-8c5f-f696f7958a83_800w.png"/> elevando a sua marca <img alt="Stage photo" className="inline-block align-middle h-10 w-16 sm:h-12 sm:w-20 md:h-14 md:w-24 ring-1 ring-neutral-200 object-cover rounded-xl mr-2 ml-2" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cca2f2b1-4d5d-43ab-9713-cafeb40a61b5_1600w.jpg"/> através de lentes internacionais.
                </h1>
<p className="max-w-2xl sm:text-lg text-base text-neutral-600 font-geist mt-4 leading-relaxed">
                    Mais de 500 eventos internacionais, fotógrafo de grandes personalidades e empresários. De Nova York e São Paulo para o Algarve.
                </p>

<div className="flex flex-col gap-3 sm:flex-row sm:gap-4 mt-8">
<a className="group inline-flex items-center justify-center gap-3 shadow-orange-900/10 transition duration-150 ease-out hover:-translate-y-0.5 text-base font-medium text-white font-geist bg-[#08080a] rounded-full pt-3 pr-6 pb-3 pl-6 shadow-lg" href="#contacto">
                        Pedir Orçamento
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/30 text-white">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="2" width="16"></iconify-icon>
</span>
</a>
<a className="inline-flex items-center justify-center transition-colors hover:bg-neutral-100 text-base font-medium text-neutral-800 font-geist bg-neutral-100/60 border-neutral-200 border rounded-full pt-3 pr-6 pb-3 pl-6" href="#portfolio">Ver Portfólio</a>
</div>

<div className="flex text-sm bg-neutral-100/50 rounded-2xl mt-10 pt-3 pr-4 pb-3 pl-4 items-center justify-between border border-neutral-100">
<div className="flex items-center gap-3">
<span className="inline-flex items-center gap-1.5 rounded-full bg-white ring-1 ring-neutral-200 px-2.5 py-1 text-xs text-neutral-700">
<span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
<span className="font-geist font-medium">Apenas 2 Vagas (Março)</span>
</span>
<div className="hidden sm:flex items-center gap-2 text-neutral-600">
<iconify-icon className="text-neutral-400" icon="solar:camera-linear" width="16"></iconify-icon>
<span className="font-geist"><span className="font-medium text-neutral-800">Anderson Emerick</span> • PT</span>
</div>
</div>
<a className="group inline-flex items-center gap-1.5 text-neutral-900 hover:text-neutral-600 transition-colors" href="https://wa.me/351000000000">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
<span className="font-geist tracking-tight text-lg sm:text-xl font-medium">WhatsApp</span>
</a>
<div className="hidden md:flex items-center gap-3">
<a className="inline-flex items-center gap-1.5 ring-1 ring-neutral-200 bg-white rounded-full px-3 py-1.5 text-neutral-800 transition-colors hover:text-amber-600" href="#contact">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
<span className="font-geist font-medium">Email</span>
</a>
</div>
</div>

<section className="mt-16" id="portfolio">
<div className="flex sm:mb-8 mb-6 items-end justify-between">
<div className="">
<p className="text-[11px] sm:text-xs uppercase text-neutral-500 tracking-widest font-geist">(01) Trabalhos Recentes</p>
<h3 className="mt-2 text-2xl sm:text-3xl tracking-tight font-geist font-medium">Histórias que convencem.</h3>
</div>
<a className="hidden sm:inline-flex items-center gap-2 ring-1 ring-neutral-200 hover:shadow text-sm text-neutral-700 font-geist bg-white rounded-full pt-2 pr-4 pb-2 pl-4 transition-all" href="#work">
                            Ver Galeria
                            <iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">

<div className="flex flex-col gap-4 sm:gap-5">
<a className="group relative overflow-hidden ring-1 ring-neutral-200 bg-neutral-100 rounded-3xl shadow-sm" href="#">
<img alt="O Poder do Network" className="h-64 w-full transition-transform duration-700 group-hover:scale-105 object-cover grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6fc14dc1-23b6-4439-a879-f485d9dc7531_1600w.jpg"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70 font-geist mb-1 uppercase tracking-wide">Evento • Networking</p>
<div className="flex items-center justify-between">
<h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">O Poder do Network</h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md">
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</div>
<p className="text-xs text-white/50 mt-1">NYC, Orlando, Miami</p>
</div>
</a>
<a className="group relative overflow-hidden ring-1 ring-neutral-200 bg-neutral-100 rounded-3xl shadow-sm" href="#">
<img alt="Thiago Nigro" className="h-72 w-full transition-transform duration-700 group-hover:scale-105 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1a740be9-c16d-491e-9e5a-1d561b44a935_800w.jpg"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70 font-geist mb-1 uppercase tracking-wide">Celebridade • Finanças</p>
<div className="flex items-center justify-between">
<h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">Thiago Nigro</h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md">
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</div>
</div>
</a>
</div>

<div className="flex flex-col gap-4 sm:gap-5">
<a className="group relative overflow-hidden ring-1 ring-neutral-200 bg-neutral-100 rounded-3xl shadow-sm" href="#">
<img alt="Ana Castela" className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5182bfe8-3294-4cf8-b490-33859c516e9a_800w.jpg"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70 font-geist mb-1 uppercase tracking-wide">Tour USA • Palco</p>
<div className="flex items-center justify-between">
<h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">Ana Castela</h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md">
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</div>
<p className="text-xs text-white/50 mt-1">2.694 likes</p>
</div>
</a>
<a className="group relative overflow-hidden ring-1 ring-neutral-200 bg-neutral-100 rounded-3xl shadow-sm" href="#">
<img alt="Algarve Vibes" className="h-56 w-full transition-transform duration-700 group-hover:scale-105 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0cf81421-a3b0-41cb-9af1-2b7ba975ee4e_800w.jpg"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70 font-geist mb-1 uppercase tracking-wide">Lifestyle • Portugal</p>
<div className="flex items-center justify-between">
<h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">Algarve Vibes</h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md">
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</div>
</div>
</a>
</div>

<div className="flex flex-col gap-4 sm:gap-5">
<a className="group relative overflow-hidden ring-1 ring-neutral-200 bg-neutral-100 rounded-3xl shadow-sm" href="#">
<img alt="Leilão Neymar" className="h-64 w-full transition-transform duration-700 group-hover:scale-105 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0bffc5a7-fef1-406a-8890-27f43a1ed851_1600w.jpg"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70 font-geist mb-1 uppercase tracking-wide">Beneficente • Gala</p>
<div className="flex items-center justify-between">
<h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">Fundação Neymar Jr.</h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md">
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</div>
</div>
</a>
<a className="group relative overflow-hidden ring-1 ring-neutral-200 bg-neutral-100 rounded-3xl shadow-sm" href="#">
<img alt="Flávio Augusto" className="h-72 w-full transition-transform duration-700 group-hover:scale-105 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c920d31f-46c8-4f39-957b-9a8d8e511a1a_800w.jpg"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70 font-geist mb-1 uppercase tracking-wide">Business • Forbes</p>
<div className="flex items-center justify-between">
<h4 className="sm:text-lg text-base font-medium text-white tracking-tight font-geist">Flávio Augusto</h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md">
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</div>
<p className="text-xs text-white/50 mt-1">Boston, USA</p>
</div>
</a>
</div>
</div>
<div className="mt-8 sm:mt-10 flex justify-center sm:hidden">
<a className="inline-flex items-center gap-2 rounded-full bg-white ring-1 ring-neutral-200 px-5 py-3 text-sm text-neutral-700 hover:shadow font-geist w-full justify-center" href="#work">
                            Ver Galeria Completa
                            <iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
</section>

<section className="mt-20">
<div className="flex sm:mb-8 mb-6 items-end justify-between">
<div className="">
<p className="text-[11px] sm:text-xs uppercase text-neutral-500 tracking-widest font-geist">(02) Sobre</p>
<h3 className="mt-2 text-2xl sm:text-3xl tracking-tight font-geist font-medium">Por trás da lente.</h3>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">

<div className="lg:col-span-8">
<div className="relative overflow-hidden bg-white ring-1 ring-neutral-200 rounded-3xl shadow-sm">
<img alt="Anderson at work" className="h-80 sm:h-96 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8cfa0961-8c53-4d57-b87c-3b8eaffcd08b_800w.jpg"/>
<div className="p-6 sm:p-8">
<div className="prose prose-neutral max-w-none">
<p className="text-lg text-neutral-800 font-geist leading-relaxed mb-4 font-medium">
                                            Com experiência internacional em 3 países e 9 cidades, meu trabalho é capturar a autoridade e a essência de marcas pessoais e grandes eventos.
                                        </p>
<p className="text-neutral-600 font-geist mb-4 leading-relaxed">
                                            A minha jornada inclui a cobertura de personalidades como Thiago Nigro e Flávio Augusto, além de eventos icônicos como o Leilão da Fundação Neymar e o "Poder do Network" em Nova York. Não se trata apenas de fotos, mas de construir narrativas visuais que elevam o valor percebido da sua marca.
                                        </p>
<p className="text-neutral-600 font-geist leading-relaxed">
                                            Agora baseado no Algarve, trago essa bagagem global para capturar momentos únicos em Portugal, com a mesma qualidade que conquistou os maiores palcos do empreendedorismo.
                                        </p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-4 sm:gap-5">

<div className="ring-1 ring-neutral-200 bg-white rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-sm">
<div className="flex gap-2 text-xs text-neutral-500 mb-4 items-center uppercase tracking-wider">
<iconify-icon icon="solar:chart-square-linear" width="16"></iconify-icon>
<span className="font-geist">Números</span>
</div>
<div className="space-y-4">
<div className="">
<p className="text-2xl font-medium tracking-tight text-neutral-900 font-geist">500+</p>
<p className="text-sm text-neutral-600 font-geist">Eventos Cobertos</p>
</div>
<div className="">
<p className="text-2xl font-medium tracking-tight text-neutral-900 font-geist">649K</p>
<p className="text-sm text-neutral-600 font-geist">Views num Vídeo</p>
</div>
<div className="">
<p className="text-2xl font-medium tracking-tight text-neutral-900 font-geist">84.5K</p>
<p className="text-sm text-neutral-600 font-geist">Likes num Post</p>
</div>
</div>
</div>

<div className="bg-neutral-900 rounded-3xl shadow-sm p-6 text-white">
<div className="flex items-center gap-2 text-white/60 text-xs mb-4 uppercase tracking-wider">
<iconify-icon icon="solar:camera-minimalistic-linear" width="16"></iconify-icon>
<span className="font-geist">Equipamento</span>
</div>
<div className="space-y-3">
<div className="flex justify-between items-center">
<span className="text-white/90 text-sm font-geist">4K Cinema</span>
<span className="text-white/50 text-xs font-geist">Vídeo</span>
</div>
<div className="flex justify-between items-center">
<span className="text-white/90 text-sm font-geist">Full Frame</span>
<span className="text-white/50 text-xs font-geist">Foto</span>
</div>
<div className="flex justify-between items-center">
<span className="text-white/90 text-sm font-geist">Drone</span>
<span className="text-white/50 text-xs font-geist">Aéreo</span>
</div>
</div>
</div>

<div className="ring-1 ring-neutral-200 bg-white rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-sm">
<div className="flex gap-2 text-xs text-neutral-500 mb-4 items-center uppercase tracking-wider">
<iconify-icon icon="solar:star-linear" width="16"></iconify-icon>
<span className="font-geist">Clientes</span>
</div>
<div className="space-y-2">
<p className="text-sm text-neutral-700 font-geist font-medium">Thiago Nigro (Primo Rico)</p>
<p className="text-sm text-neutral-700 font-geist font-medium">Flávio Augusto (Wise Up)</p>
<p className="text-sm text-neutral-700 font-geist font-medium">Fundação Neymar Jr.</p>
<p className="text-sm text-neutral-700 font-geist font-medium">Ana Castela</p>
</div>
</div>
</div>
</div>
</section>

<section className="mt-20">
<div className="relative overflow-hidden bg-neutral-900 rounded-3xl">
<div className="relative z-10 sm:p-8 md:p-12 pt-5 pr-5 pb-5 pl-5">

<div className="flex items-start justify-between">
<div className="flex items-center gap-2 text-white/60 text-xs uppercase tracking-wider">
<iconify-icon icon="solar:layers-linear" width="16"></iconify-icon>
<span className="font-geist">O Que Faço</span>
</div>
<div className="flex items-baseline gap-2">
<h2 className="sm:text-6xl md:text-7xl leading-[1.05] text-5xl text-white tracking-tight font-geist font-medium">Serviços.</h2>
</div>
</div>

<div className="ring-1 ring-white/10 overflow-hidden bg-white/5 rounded-2xl mt-8 backdrop-blur-3xl">

<details className="group open:bg-white/5" open="">
<summary className="list-none cursor-pointer">
<div className="flex items-center gap-4 justify-between border-b border-white/10 p-4 sm:p-5">
<div className="text-white/40 text-[11px] font-geist">(01)</div>
<div className="flex-1 min-w-0">
<p className="text-white font-medium tracking-tight font-geist text-lg">Personal Branding</p>
</div>
<div className="shrink-0 h-8 w-8 rounded-full bg-white/10 ring-1 ring-white/15 flex items-center justify-center text-white transition-transform group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</div>
</div>
</summary>
<div className="sm:p-6 pt-4 pr-4 pb-4 pl-4">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
<div className="lg:col-span-7 flex items-start gap-4">
<div className="shrink-0 h-16 w-24 rounded-xl overflow-hidden ring-1 ring-white/20 bg-white/10">
<img alt="Personal Branding" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e5ba2d39-1252-4203-be16-abafeda0849b_800w.jpg"/>
</div>
<div className="">
<h3 className="text-white font-medium tracking-tight font-geist text-lg">Posicionamento de Autoridade</h3>
<p className="text-neutral-400 text-sm mt-2 font-geist leading-relaxed">Fotos executivas no seu ambiente real de trabalho. Nada de estúdio genérico. O meu estilo é colocar a câmera dentro da narrativa do seu talento.</p>
</div>
</div>
<div className="lg:col-span-5">
<div className="flex items-center justify-between">
<p className="text-white/60 text-xs font-geist uppercase tracking-wide">Inclui</p>
</div>
<div className="mt-3 flex flex-wrap gap-2">
<span className="inline-flex items-center rounded-full bg-white/10 ring-1 ring-white/20 text-white text-xs px-3 py-1.5 font-geist">LinkedIn</span>
<span className="inline-flex items-center rounded-full bg-white/10 ring-1 ring-white/20 text-white text-xs px-3 py-1.5 font-geist">Press Kits</span>
<span className="inline-flex items-center rounded-full bg-white/10 ring-1 ring-white/20 text-white text-xs px-3 py-1.5 font-geist">Sites</span>
<span className="inline-flex items-center rounded-full bg-white/10 ring-1 ring-white/20 text-white text-xs px-3 py-1.5 font-geist">Lifestyle</span>
</div>
</div>
</div>
</div>
</details>

<details className="group">
<summary className="list-none cursor-pointer">
<div className="flex items-center gap-4 justify-between border-b border-white/10 p-4 sm:p-5">
<div className="text-white/40 text-[11px] font-geist">(02)</div>
<div className="flex-1 min-w-0">
<p className="text-white font-medium tracking-tight font-geist text-lg">Produção de Vídeo &amp; Reels</p>
</div>
<div className="shrink-0 h-8 w-8 rounded-full bg-white/10 ring-1 ring-white/15 flex items-center justify-center text-white transition-transform group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</div>
</div>
</summary>
<div className="p-4 sm:p-6">
<p className="text-neutral-300 text-sm max-w-3xl font-geist leading-relaxed">
                                            Criativos para redes sociais, vídeos imobiliários, aftermovies cinematográficos e institucionais em 4K. O mesmo pipeline que gerou 649K views num único vídeo.
                                        </p>
</div>
</details>

<details className="group">
<summary className="list-none cursor-pointer">
<div className="flex items-center gap-4 justify-between border-b border-white/10 p-4 sm:p-5">
<div className="text-white/40 text-[11px] font-geist">(03)</div>
<div className="flex-1 min-w-0">
<p className="text-white font-medium tracking-tight font-geist text-lg">Fotografia de Evento</p>
</div>
<div className="shrink-0 h-8 w-8 rounded-full bg-white/10 ring-1 ring-white/15 flex items-center justify-center text-white transition-transform group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</div>
</div>
</summary>
<div className="p-4 sm:p-6">
<p className="text-neutral-300 text-sm max-w-3xl font-geist leading-relaxed">
                                            Conferências, workshops e lançamentos. Entrega em tempo real para o seu time de social media enquanto o evento acontece. O olhar que cobriu o Leilão Neymar.
                                        </p>
</div>
</details>

<details className="group">
<summary className="list-none cursor-pointer">
<div className="flex items-center gap-4 justify-between p-4 sm:p-5">
<div className="text-white/40 text-[11px] font-geist">(04)</div>
<div className="flex-1 min-w-0">
<p className="text-white font-medium tracking-tight font-geist text-lg">Pacote Mensal</p>
</div>
<div className="shrink-0 h-8 w-8 rounded-full bg-white/10 ring-1 ring-white/15 flex items-center justify-center text-white transition-transform group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</div>
</div>
</summary>
<div className="p-4 sm:p-6 border-t border-white/10">
<p className="text-neutral-300 text-sm max-w-3xl font-geist leading-relaxed mb-4">
                                            Contrato recorrente para marcas que precisam de conteúdo constante. Apenas 2 vagas disponíveis para Março/Abril 2026.
                                        </p>
<a className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm font-medium" href="https://wa.me/351000000000">
                                            Consultar Disponibilidade
                                            <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</details>
</div>
</div>
</div>
</section>

<section className="mt-20">
<div className="relative w-full max-w-4xl mr-auto ml-auto">
<div className="relative overflow-hidden bg-neutral-900 rounded-3xl">
<div className="relative z-10 sm:p-8 md:p-10 pt-6 pr-6 pb-6 pl-6">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

<div className="lg:col-span-7">
<div className="flex items-center gap-3 mb-6">
<div className="h-12 w-12 rounded-full bg-white/10 ring-1 ring-white/20 flex items-center justify-center text-amber-400 font-serif italic text-xl">
                                                Ae
                                            </div>
<div className="">
<h3 className="text-xl font-medium text-white tracking-tight font-geist">Anderson Emerick</h3>
<p className="text-white/60 text-sm font-geist">Fotografia &amp; Vídeo</p>
</div>
</div>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-3">
<iconify-icon className="text-white/60" icon="solar:map-point-linear" width="18"></iconify-icon>
<span className="text-white/80 text-sm font-geist">Portimão, Algarve • Disponível Globalmente</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-white/60" icon="solar:chat-round-dots-linear" width="18"></iconify-icon>
<a className="text-white/80 hover:text-white transition-colors text-sm font-geist" href="https://wa.me/351000000000">WhatsApp Direto</a>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-white/60" icon="solar:letter-linear" width="18"></iconify-icon>
<a className="text-white/80 hover:text-white transition-colors text-sm font-geist" href="mailto:contato@andersonemerick.com">contato@andersonemerick.com</a>
</div>
</div>

<a className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-neutral-900 px-6 py-3 rounded-full text-sm font-medium transition-colors font-geist shadow-lg shadow-amber-900/20" href="https://wa.me/351000000000">
                                            Vamos Trabalhar Juntos
                                            <iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>

<div className="lg:col-span-5">
<div className="grid grid-cols-2 gap-8">

<div className="">
<h4 className="text-white font-medium mb-4 font-geist">Serviços</h4>
<ul className="space-y-2">
<li><a className="text-white/60 hover:text-white transition-colors text-sm font-geist" href="#">Personal Branding</a></li>
<li><a className="text-white/60 hover:text-white transition-colors text-sm font-geist" href="#">Eventos Corporativos</a></li>
<li><a className="text-white/60 hover:text-white transition-colors text-sm font-geist" href="#">Produção de Vídeo</a></li>
<li><a className="text-white/60 hover:text-white transition-colors text-sm font-geist" href="#">Mentoria</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-4 font-geist">Links</h4>
<ul className="space-y-2">
<li><a className="text-white/60 hover:text-white transition-colors text-sm font-geist" href="#">Portfólio</a></li>
<li><a className="text-white/60 hover:text-white transition-colors text-sm font-geist" href="#">Sobre Mim</a></li>
<li><a className="text-white/60 hover:text-white transition-colors text-sm font-geist" href="#">Investimento</a></li>
<li><a className="text-white/60 hover:text-white transition-colors text-sm font-geist" href="#">Contato</a></li>
</ul>
</div>
</div>

<div className="mt-8">
<h4 className="text-white font-medium mb-4 font-geist">Redes Sociais</h4>
<div className="flex gap-3">
<a className="flex items-center justify-center h-10 w-10 rounded-full bg-white/10 ring-1 ring-white/20 text-white/80 hover:text-white hover:bg-white/20 transition-all" href="https://www.instagram.com/andersonemeriick/" target="_blank">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="flex items-center justify-center h-10 w-10 rounded-full bg-white/10 ring-1 ring-white/20 text-white/80 hover:text-white hover:bg-white/20 transition-all" href="#">
<iconify-icon icon="solar:videocamera-record-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</div>

<div className="border-t border-white/10 mt-10 pt-6">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-white/50 text-xs font-geist">© 2026 Anderson Emerick. Todos os direitos reservados.</p>
<div className="flex items-center gap-6 text-xs">
<a className="text-white/50 hover:text-white/80 transition-colors font-geist" href="#">Privacidade</a>
<a className="text-white/50 hover:text-white/80 transition-colors font-geist" href="#">Termos</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
</section>


    </>
  );
}
