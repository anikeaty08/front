import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons();
    });

    const form   = document.getElementById('calcForm');
    const inputs = Array.from(form.querySelectorAll('input'));
    const btnCal = document.getElementById('btnCalcular');
    const resEl  = document.getElementById('resultado');
    const btnCTA = document.getElementById('btnFalar');

    const validate = () => {
      const allFilled = inputs.every(i => i.value.trim() !== '');
      btnCal.disabled = !allFilled;
      btnCal.classList.toggle('opacity-60', !allFilled);
      btnCal.classList.toggle('cursor-not-allowed', !allFilled);
    };
    inputs.forEach(i => i.addEventListener('input', validate));

    btnCal.addEventListener('click', () => {
      const rawValue = document.getElementById('valor').value
        .replace(/\./g,'')
        .replace(',','.');
      const valorConta = parseFloat(rawValue);
      if (isNaN(valorConta) || valorConta <= 0) return;

      const reduzido = (valorConta * 0.10).toLocaleString('pt-BR',
        { style:'currency', currency:'BRL' });

      resEl.textContent = `Com energia solar sua conta de luz pode chegar aproximadamente a ${reduzido}.`;
      resEl.classList.remove('hidden');
      btnCTA.classList.remove('hidden');
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="relative min-h-screen overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="" className="w-full h-full object-cover object-center" src="https://i.imgur.com/b4DgG97.jpeg" style={{mixBlendMode: 'luminosity', opacity: '0.45'}}/>

<div className="hidden md:block absolute inset-0 pointer-events-none">
<div className="absolute inset-0" style="
               background: linear-gradient(90deg, 
                 rgba(253,245,216,0.93) 0%,
                 rgba(253,245,216,0.85) 26%,
                 rgba(253,245,216,0.68) 48%,
                 rgba(253,245,216,0.35) 72%,
                 rgba(253,245,216,0.07) 95%,
                 rgba(253,245,216,0) 100%
               );
             ">
</div>
</div>

<div className="md:hidden absolute inset-0" style="
             background: linear-gradient(180deg, 
               rgba(253,245,216,0.93) 0%,
               rgba(253,245,216,0.85) 35%,
               rgba(253,245,216,0.65) 62%,
               rgba(253,245,216,0.30) 85%,
               rgba(253,245,216,0.07) 97%,
               rgba(253,245,216,0) 100%
             );
           "></div>
</div>

<nav className="relative z-10 px-6 py-6">
<div className="max-w-7xl mx-auto flex items-center justify-between">
<div className="flex items-center">
<span className="inline-flex items-center justify-center w-8 h-8 bg-amber-400 rounded-full">
<i className="w-5 h-5 text-[#0D2B20]" data-lucide="sun"></i>
</span>
<span className="ml-3 text-xl font-semibold tracking-tight">SunSmart</span>
</div>
<div className="hidden md:flex space-x-8 text-sm">
<a className="text-gray-700 hover:text-[#0D2B20] transition" href="#">Início</a>
<a className="text-gray-700 hover:text-[#0D2B20] transition" href="#">Vantagens</a>
<a className="text-gray-700 hover:text-[#0D2B20] transition" href="#">Projetos</a>
<a className="text-gray-700 hover:text-[#0D2B20] transition" href="#">Contato</a>
</div>
<a className="px-4 py-2 text-sm font-medium bg-amber-500 text-black rounded-lg hover:bg-amber-400 transition" href="#">Simular Agora</a>
</div>
</nav>

<section className="relative z-10 px-6 pt-16 pb-24">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

<div className="relative z-10">

<div className="md:hidden absolute inset-0" style={{background: 'rgba(253,245,216,0.90)', borderRadius: '1rem', ZIndex: '-10'}}></div>
<div className="inline-block px-3 py-1 mb-6 text-xs font-medium bg-amber-500/20 text-amber-700 rounded-full">Energia limpa e acessível</div>
<h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">Reduza até 90% da sua conta de luz com energia solar</h1>
<p className="text-lg text-gray-700 mb-8 max-w-lg">
            O dinheiro que você economiza em um ano pode pagar IPTU, IPVA, dar entrada em um carro, viajar com a família ou até reformar sua casa.
          </p>
<div className="space-y-4 mb-12">
<div className="flex items-start space-x-3">
<span className="flex-shrink-0 rounded-md bg-amber-500/10 p-1">
<i className="w-5 h-5 text-amber-400" data-lucide="zap"></i>
</span>
<span className="text-sm text-gray-900">Instalação rápida e sem burocracia</span>
</div>
<div className="flex items-start space-x-3">
<span className="flex-shrink-0 rounded-md bg-amber-500/10 p-1">
<i className="w-5 h-5 text-amber-400" data-lucide="wallet"></i>
</span>
<span className="text-sm text-gray-900">Economia garantida já no primeiro mês</span>
</div>
</div>
</div>

<div className="relative z-20">

<div className="absolute inset-0" style={{background: 'rgba(253,245,216,0.13)', borderRadius: '1rem', ZIndex: '-10'}}></div>
<form className="relative bg-white rounded-2xl shadow-2xl border border-[#F2E6C5] p-8 space-y-6 w-full" id="calcForm">
<h2 className="text-xl font-semibold tracking-tight mb-2 flex items-center gap-2 text-[#0D2B20]">
<i className="w-5 h-5 text-amber-400" data-lucide="calculator"></i>
              Calcule sua economia
            </h2>
<div className="grid md:grid-cols-2 gap-4">
<div>
<label className="block text-sm text-[#9F9471] mb-1" htmlFor="nome">
<span className="inline-block align-middle mr-1">
<i className="w-4 h-4 text-amber-300" data-lucide="user"></i>
</span>
                  Nome
                </label>
<input className="w-full bg-[#FAF6EA] border border-[#EDE6D0] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 text-[#0D2B20]" id="nome" type="text"/>
</div>
<div>
<label className="block text-sm text-[#9F9471] mb-1" htmlFor="telefone">
<span className="inline-block align-middle mr-1">
<i className="w-4 h-4 text-amber-300" data-lucide="phone"></i>
</span>
                  Telefone / WhatsApp
                </label>
<input className="w-full bg-[#FAF6EA] border border-[#EDE6D0] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 text-[#0D2B20]" id="telefone" type="tel"/>
</div>
<div>
<label className="block text-sm text-[#9F9471] mb-1" htmlFor="cidade">
<span className="inline-block align-middle mr-1">
<i className="w-4 h-4 text-amber-300" data-lucide="map-pin"></i>
</span>
                  Cidade
                </label>
<input className="w-full bg-[#FAF6EA] border border-[#EDE6D0] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 text-[#0D2B20]" id="cidade" type="text"/>
</div>
<div>
<label className="block text-sm text-[#9F9471] mb-1" htmlFor="valor">
<span className="inline-block align-middle mr-1">
<i className="w-4 h-4 text-amber-300" data-lucide="credit-card"></i>
</span>
                  Valor da sua conta de luz (R$)
                </label>
<input className="w-full bg-[#FAF6EA] border border-[#EDE6D0] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 text-[#0D2B20]" id="valor" inputmode="decimal" placeholder="Ex.: 450,75" type="text"/>
</div>
</div>
<button className="w-full px-6 py-3 bg-amber-500 text-black text-sm font-medium rounded-lg transition opacity-60 cursor-not-allowed flex items-center justify-center gap-2" disabled="" id="btnCalcular" type="button">
<i className="w-5 h-5" data-lucide="arrow-right-circle"></i>
              Calcular agora
            </button>
<p className="text-sm text-[#9F9471] hidden" id="resultado"></p>
<button className="relative w-full px-6 py-3 bg-emerald-500 text-white text-sm font-medium rounded-lg hidden overflow-hidden animate-pulse flex items-center justify-center gap-2" id="btnFalar" type="button">
<span className="absolute inline-flex h-full w-full rounded-lg bg-emerald-500 opacity-75 animate-ping"></span>
<span className="relative flex items-center gap-1">
<i className="w-5 h-5" data-lucide="message-circle"></i>
                Fale com um especialista agora
              </span>
</button>
</form>
</div>
</div>
</section>
</div>


    </>
  );
}
