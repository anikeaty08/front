import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded bg-gray-900 text-white">
<iconify-icon className="text-lg" icon="solar:ticket-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tighter text-gray-900">EVNT</span>
</div>
<div className="flex items-center gap-4">
<button className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" type="button">Cancelar</button>
</div>
</div>
</header>
<main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">

<div className="mb-10 max-w-2xl">
<h1 className="text-3xl font-semibold tracking-tight text-gray-900">Solicitação de Cadastro</h1>
<p className="mt-3 text-base text-gray-500 leading-relaxed">Este formulário serve para coletar todas as informações necessárias para criar e publicar um evento com seus respectivos ingressos. Preencha com atenção.</p>
</div>
<form action="#" className="space-y-10" method="POST">

<section className="rounded-2xl border border-gray-200 bg-white shadow-sm ring-1 ring-gray-900/5 overflow-hidden">
<div className="border-b border-gray-200 bg-gray-50/50 px-6 py-5 sm:px-10">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 border border-gray-200 text-gray-600">
<iconify-icon icon="solar:calendar-add-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-lg font-semibold tracking-tight text-gray-900">1. Sobre o Evento</h2>
</div>
</div>
<div className="px-6 py-8 sm:p-10">
<div className="grid grid-cols-1 gap-y-8 sm:grid-cols-6 sm:gap-x-8">

<div className="sm:col-span-6">
<label className="block text-sm font-medium text-gray-900" htmlFor="event-name">Nome do evento <span className="text-red-500">*</span></label>
<div className="mt-2">
<input className="block w-full rounded-lg border-0 py-2.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm transition-all" id="event-name" maxlength="100" name="event-name" placeholder="Ex: Conferência Jovem 2026" type="text"/>
</div>
<p className="mt-2 text-xs text-gray-500">Limite máximo: 100 caracteres.</p>
</div>

<fieldset className="sm:col-span-3">
<legend className="block text-sm font-medium text-gray-900">Tipo de evento <span className="text-red-500">*</span></legend>
<div className="mt-3 space-y-3 sm:flex sm:items-center sm:space-x-6 sm:space-y-0">
<label className="flex items-center gap-x-3 cursor-pointer group">
<input className="h-4 w-4 border-gray-300 text-gray-900 focus:ring-gray-900 cursor-pointer" name="event-type" type="radio" value="evento"/>
<span className="block text-sm font-medium text-gray-700 group-hover:text-gray-900">Evento</span>
</label>
<label className="flex items-center gap-x-3 cursor-pointer group">
<input className="h-4 w-4 border-gray-300 text-gray-900 focus:ring-gray-900 cursor-pointer" name="event-type" type="radio" value="curso"/>
<span className="block text-sm font-medium text-gray-700 group-hover:text-gray-900">Curso</span>
</label>
</div>
</fieldset>

<div className="sm:col-span-3">
<label className="block text-sm font-medium text-gray-900" htmlFor="ministry">Vinculado a ministério?</label>
<div className="mt-2 relative">
<select className="block w-full appearance-none rounded-lg border-0 py-2.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm transition-all bg-white" id="ministry" name="ministry">
<option value="">Selecione um ministério (opcional)</option>
<option value="jovens">Jovens</option>
<option value="casais">Casais</option>
<option value="infantil">Infantil</option>
<option value="mulheres">Mulheres</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
<iconify-icon className="text-gray-400" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>

<div className="sm:col-span-6">
<label className="block text-sm font-medium text-gray-900" htmlFor="description">Descrição do evento <span className="text-red-500">*</span></label>
<div className="mt-2">
<textarea className="block w-full rounded-lg border-0 py-2.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm transition-all" id="description" name="description" placeholder="Explique de forma clara o que é o evento..." rows="4"></textarea>
</div>
</div>

<div className="sm:col-span-3">
<label className="block text-sm font-medium text-gray-900 flex items-center gap-1" htmlFor="important-info">
                                Info. para participantes
                                <iconify-icon className="text-gray-400" icon="solar:info-circle-linear" strokeWidth="1.5" title="Regras, dress code, o que levar"></iconify-icon>
</label>
<div className="mt-2">
<textarea className="block w-full rounded-lg border-0 py-2.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm transition-all" id="important-info" name="important-info" placeholder="Idade mínima, o que levar..." rows="3"></textarea>
</div>
</div>

<div className="sm:col-span-3">
<label className="block text-sm font-medium text-gray-900" htmlFor="schedule">Programação prevista</label>
<div className="mt-2">
<textarea className="block w-full rounded-lg border-0 py-2.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm transition-all" id="schedule" name="schedule" placeholder="08:00 — Abertura
10:00 — Palestra..." rows="3"></textarea>
</div>
</div>

<div className="sm:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8 border-y border-gray-100 py-6 my-2">
<div>
<label className="block text-sm font-medium text-gray-900" htmlFor="category">Classificação do evento</label>
<div className="mt-2 relative">
<select className="block w-full appearance-none rounded-lg border-0 py-2.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm bg-white" id="category" name="category">
<option value="">Selecione</option>
<option value="espiritual">Espiritual</option>
<option value="educacional">Educacional</option>
<option value="social">Social</option>
<option value="infantil">Infantil</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
<iconify-icon className="text-gray-400" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-900 mb-3">Evento em destaque?</label>
<div className="flex items-center gap-4">
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-900"></div>
<span className="ml-3 text-sm font-medium text-gray-700">Destacar na plataforma</span>
</label>
</div>
</div>
</div>

<div className="sm:col-span-6">
<label className="block text-sm font-medium text-gray-900">Imagem de divulgação</label>
<div className="mt-2 flex justify-center rounded-xl border border-dashed border-gray-300 bg-gray-50/50 px-6 py-12 transition-colors hover:bg-gray-50 hover:border-gray-400">
<div className="text-center">
<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-gray-200 mb-4">
<iconify-icon className="text-xl text-gray-600" icon="solar:gallery-add-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="mt-2 flex text-sm leading-6 text-gray-600 justify-center">
<label className="relative cursor-pointer rounded-md font-medium text-gray-900 focus-within:outline-none focus-within:ring-2 focus-within:ring-gray-900 focus-within:ring-offset-2 hover:text-gray-700 hover:underline" htmlFor="file-upload">
<span>Clique para enviar</span>
<input accept="image/png, image/jpeg" className="sr-only" id="file-upload" name="file-upload" type="file"/>
</label>
<p className="pl-1">ou arraste e solte</p>
</div>
<p className="text-xs leading-5 text-gray-500 mt-1">PNG, JPG até 2MB. 1920x1080 recomendado.</p>
</div>
</div>
</div>

<div className="sm:col-span-6">
<h3 className="text-sm font-medium text-gray-900 mb-4">Data e horário do evento <span className="text-red-500">*</span></h3>
<div className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
<div>
<label className="block text-xs font-medium text-gray-600" htmlFor="start-date">Data de início</label>
<input className="mt-1.5 block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm" id="start-date" type="date"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-600" htmlFor="start-time">Hora de início</label>
<input className="mt-1.5 block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm" id="start-time" type="time"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-600" htmlFor="end-date">Data de término</label>
<input className="mt-1.5 block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm" id="end-date" type="date"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-600" htmlFor="end-time">Hora de término</label>
<input className="mt-1.5 block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm" id="end-time" type="time"/>
</div>
</div>
</div>

<div className="sm:col-span-6">
<fieldset>
<legend className="block text-sm font-medium text-gray-900">O evento terá inscrições?</legend>
<div className="mt-3 flex items-center gap-6">
<label className="flex items-center gap-2 cursor-pointer">
<input checked="" className="h-4 w-4 border-gray-300 text-gray-900 focus:ring-gray-900" name="has-registration" type="radio" value="sim"/>
<span className="text-sm font-medium text-gray-700">Sim</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input className="h-4 w-4 border-gray-300 text-gray-900 focus:ring-gray-900" name="has-registration" type="radio" value="nao"/>
<span className="text-sm font-medium text-gray-700">Não</span>
</label>
</div>
</fieldset>

<div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 bg-white border border-gray-200 rounded-xl shadow-sm">
<div>
<label className="block text-xs font-medium text-gray-700" htmlFor="reg-limit">Limite de inscrições</label>
<input className="mt-1.5 block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm" id="reg-limit" placeholder="0 = ilimitado" type="number"/>
</div>
<div className="pt-1">
<label className="block text-xs font-medium text-gray-700 mb-2">Inscrição sem login?</label>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-gray-900"></div>
<span className="ml-2 text-xs text-gray-600">Permitir</span>
</label>
</div>
<div className="pt-1">
<label className="block text-xs font-medium text-gray-700 mb-2">Evento privado?</label>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-gray-900"></div>
<span className="ml-2 text-xs text-gray-600">Apenas com link</span>
</label>
</div>
</div>
</div>

<div className="sm:col-span-6 border-t border-gray-100 pt-8 mt-2">
<h3 className="text-sm font-medium text-gray-900 mb-4 flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
                                Local do evento <span className="text-red-500">*</span>
</h3>
<div className="flex items-center gap-6 mb-5">
<label className="flex items-center gap-2 cursor-pointer">
<input checked="" className="h-4 w-4 border-gray-300 text-gray-900 focus:ring-gray-900" name="location-type" type="radio" value="presencial"/>
<span className="text-sm font-medium text-gray-700">Presencial</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input className="h-4 w-4 border-gray-300 text-gray-900 focus:ring-gray-900" name="location-type" type="radio" value="online"/>
<span className="text-sm font-medium text-gray-700">Online</span>
</label>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="sm:col-span-2">
<label className="block text-xs font-medium text-gray-700" htmlFor="location-name">Nome do local</label>
<input className="mt-1.5 block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm" id="location-name" placeholder="Ex: Igreja Sede" type="text"/>
</div>
<div className="sm:col-span-2">
<label className="block text-xs font-medium text-gray-700" htmlFor="address">Endereço completo</label>
<input className="mt-1.5 block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm" id="address" placeholder="Rua, número, bairro..." type="text"/>
</div>
<div className="sm:col-span-2">
<label className="block text-xs font-medium text-gray-700" htmlFor="complement">Complemento / referência</label>
<input className="mt-1.5 block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm" id="complement" placeholder="Ex: Salão principal, ao lado da praça" type="text"/>
</div>
</div>
</div>

<div className="sm:col-span-6 border-t border-gray-100 pt-8 mt-2">
<h3 className="text-sm font-medium text-gray-900 mb-4 flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
                                Contato para dúvidas <span className="text-red-500">*</span>
</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
<div className="sm:col-span-2">
<label className="block text-xs font-medium text-gray-700" htmlFor="contact-name">Responsável pelo evento</label>
<input className="mt-1.5 block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm" id="contact-name" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700" htmlFor="contact-phone">Telefone</label>
<div className="mt-1.5 relative flex items-center">
<input className="block w-full rounded-md border-0 py-2 px-3 pr-24 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm" id="contact-phone" type="tel"/>
<div className="absolute right-3 flex items-center gap-2">
<span className="text-[10px] text-gray-500 font-medium">WHATSAPP</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-7 h-4 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-green-500"></div>
</label>
</div>
</div>
</div>
<div>
<label className="block text-xs font-medium text-gray-700" htmlFor="contact-email">E-mail</label>
<input className="mt-1.5 block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm" id="contact-email" type="email"/>
</div>
</div>
</div>

<div className="sm:col-span-3">
<label className="block text-sm font-medium text-gray-900" htmlFor="faq">Perguntas frequentes (FAQ)</label>
<div className="mt-2">
<textarea className="block w-full rounded-lg border-0 py-2.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm" id="faq" name="faq" placeholder="Pergunta: ...
Resposta: ..." rows="3"></textarea>
</div>
</div>
<div className="sm:col-span-3">
<label className="block text-sm font-medium text-gray-900" htmlFor="policy">Política de cancelamento</label>
<div className="mt-2">
<textarea className="block w-full rounded-lg border-0 py-2.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm" id="policy" name="policy" placeholder="Explique como funcionam reembolsos..." rows="3"></textarea>
</div>
</div>
</div>
</div>
</section>

<section className="rounded-2xl border border-gray-200 bg-white shadow-sm ring-1 ring-gray-900/5 overflow-hidden">
<div className="border-b border-gray-200 bg-gray-50/50 px-6 py-5 sm:px-10 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 border border-gray-200 text-gray-600">
<iconify-icon icon="solar:ticket-sale-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-lg font-semibold tracking-tight text-gray-900">2. Sobre o Ingresso</h2>
</div>
<button className="text-sm font-medium text-gray-900 bg-white border border-gray-200 shadow-sm rounded-lg px-3 py-1.5 hover:bg-gray-50 transition-colors flex items-center gap-1" type="button">
<iconify-icon icon="solar:add-circle-linear"></iconify-icon> Adicionar tipo
                    </button>
</div>
<div className="px-6 py-8 sm:p-10 relative">

<div className="rounded-xl border border-gray-200 p-6 bg-white shadow-sm relative">
<div className="absolute top-4 right-4">
<button className="text-gray-400 hover:text-red-500 transition-colors" title="Remover ingresso" type="button">
<iconify-icon className="text-lg" icon="solar:trash-bin-trash-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">

<div className="sm:col-span-2">
<label className="block text-xs font-medium text-gray-700 mb-2">Tipo de ingresso <span className="text-red-500">*</span></label>
<div className="flex rounded-md shadow-sm">
<label className="flex-1 text-center cursor-pointer">
<input checked="" className="sr-only peer" name="ticket-type-1" type="radio" value="pago"/>
<div className="py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-l-md peer-checked:bg-gray-900 peer-checked:text-white peer-checked:border-gray-900 transition-colors">Pago</div>
</label>
<label className="flex-1 text-center cursor-pointer">
<input className="sr-only peer" name="ticket-type-1" type="radio" value="gratuito"/>
<div className="py-2 text-sm font-medium text-gray-700 bg-white border-y border-r border-gray-300 rounded-r-md peer-checked:bg-gray-900 peer-checked:text-white peer-checked:border-gray-900 transition-colors">Gratuito</div>
</label>
</div>
</div>
<div className="sm:col-span-4">
<label className="block text-xs font-medium text-gray-700" htmlFor="ticket-name-1">Nome do ingresso <span className="text-red-500">*</span></label>
<input className="mt-1.5 block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm" id="ticket-name-1" placeholder="Ex: Ingresso Geral, Lote 1" type="text"/>
</div>

<div className="sm:col-span-6">
<label className="block text-xs font-medium text-gray-700" htmlFor="ticket-details-1">Detalhes do ingresso</label>
<textarea className="mt-1.5 block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm" id="ticket-details-1" placeholder="O que este ingresso inclui..." rows="2"></textarea>
</div>

<div className="sm:col-span-2">
<label className="block text-xs font-medium text-gray-700" htmlFor="limit-person-1">Limite por pessoa <span className="text-red-500">*</span></label>
<input className="mt-1.5 block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm" id="limit-person-1" min="0" type="number" value="1"/>
<span className="text-[10px] text-gray-500">0 = sem limite</span>
</div>
<div className="sm:col-span-2">
<label className="block text-xs font-medium text-gray-700" htmlFor="limit-total-1">Limite total (qtd) <span className="text-red-500">*</span></label>
<input className="mt-1.5 block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm" id="limit-total-1" min="0" type="number" value="0"/>
<span className="text-[10px] text-gray-500">0 = ilimitado</span>
</div>
<div className="sm:col-span-2">
<label className="block text-xs font-medium text-gray-700" htmlFor="ticket-price-1">Valor unitário <span className="text-red-500">*</span></label>
<div className="relative mt-1.5 rounded-md shadow-sm">
<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
<span className="text-gray-500 sm:text-sm font-medium">R$</span>
</div>
<input className="block w-full rounded-md border-0 py-2 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm font-medium" id="ticket-price-1" placeholder="0,00" type="text"/>
</div>
</div>

<div className="sm:col-span-6 border-t border-gray-100 pt-5 mt-2">
<div className="flex items-center justify-between mb-4">
<h4 className="text-sm font-medium text-gray-900 flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:clock-circle-linear"></iconify-icon>
                                        Disponibilidade de venda <span className="text-red-500">*</span>
</h4>
<div className="relative w-48">
<select className="block w-full appearance-none rounded-md border-0 py-1.5 pl-3 pr-8 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-xs font-medium bg-white">
<option>Por período</option>
<option>Imediatamente</option>
<option>Após outro ingresso</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
<iconify-icon className="text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
<div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
<div>
<label className="block text-[11px] font-medium text-gray-500 uppercase tracking-wide">Início das vendas</label>
<input className="mt-1 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm bg-white" type="date"/>
</div>
<div>
<label className="block text-[11px] font-medium text-gray-500 uppercase tracking-wide">Hora</label>
<input className="mt-1 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm bg-white" type="time"/>
</div>
<div>
<label className="block text-[11px] font-medium text-gray-500 uppercase tracking-wide">Fim das vendas</label>
<input className="mt-1 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm bg-white" type="date"/>
</div>
<div>
<label className="block text-[11px] font-medium text-gray-500 uppercase tracking-wide">Hora</label>
<input className="mt-1 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm bg-white" type="time"/>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="pt-6 border-t border-gray-200">
<div className="flex items-start gap-3 bg-blue-50/50 p-5 rounded-xl border border-blue-100">
<div className="flex h-6 items-center">
<input className="h-5 w-5 rounded border-gray-300 text-gray-900 focus:ring-gray-900 cursor-pointer" id="confirmation" name="confirmation" type="checkbox"/>
</div>
<div className="text-sm leading-6">
<label className="font-medium text-gray-900 cursor-pointer" htmlFor="confirmation">Confirmação de veracidade</label>
<p className="text-gray-500">Declaro que todas as informações fornecidas estão corretas e autorizo o cadastro do evento e dos ingressos conforme descrito acima. Os dados enviados serão analisados antes da publicação do evento.</p>
</div>
</div>
<div className="mt-8 flex items-center justify-end gap-x-4">
<button className="text-sm font-medium leading-6 text-gray-900 hover:text-gray-700" type="button">Salvar rascunho</button>
<button className="rounded-lg bg-gray-900 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 transition-all flex items-center gap-2" type="submit">
                        Enviar solicitação
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="2"></iconify-icon>
</button>
</div>
</div>
</form>
</main>

    </>
  );
}
