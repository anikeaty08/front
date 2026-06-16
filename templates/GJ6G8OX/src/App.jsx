import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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
        { style:'currency', currency:'BR' });

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
<img alt="" className="w-full h-full object-center object-cover" src="https://verdolin.com.br/institucional/wp-content/uploads/2025/07/AnyConv.com__painel-solar-monocristalino-e-painel-solar-policristalino.webp?w=800&amp;q=80" style={{mixBlendMode: 'luminosity', opacity: '0.45'}}/>

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

<section className="relative z-10 pt-16 pr-6 pb-24 pl-6">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

<div className="relative z-20">

<div className="inline-block px-3 py-1 mb-6 text-xs font-medium bg-amber-500/20 text-amber-700 rounded-full">Energia limpa e acessível</div>
<h1 className="md:text-5xl leading-tight text-4xl font-bold text-amber-600 tracking-tight mb-6">Reduza até 90% da sua conta de luz com energia solar</h1>
<p className="max-w-lg text-xl text-gray-700 mb-8">
            O dinheiro que você economiza em um ano pode pagar IPTU, IPVA, dar entrada em um carro, viajar com a família ou até reformar sua casa.
          </p>
<div className="space-y-4 mb-12">
<div className="flex items-start space-x-3">
<span className="flex-shrink-0 rounded-md bg-amber-500/10 p-1">
<svg className="lucide lucide-zap w-5 h-5 text-amber-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</span>
<span className="text-base text-gray-900">Instalação rápida e sem burocracia</span>
</div>
<div className="flex items-start space-x-3">
<span className="flex-shrink-0 rounded-md bg-amber-500/10 p-1">
<svg className="lucide lucide-wallet w-5 h-5 text-amber-400" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</span>
<span className="text-base text-gray-900">Economia garantida já no primeiro mês</span>
</div>
</div>
</div>

<div className="relative z-20">

<div className="absolute inset-0" style={{background: 'rgba(253,245,216,0.13)', borderRadius: '1rem', ZIndex: '-10'}}></div>
<form className="relative bg-white rounded-2xl shadow-2xl border border-[#F2E6C5] p-8 space-y-6 w-full" id="calcForm">
<h2 className="text-xl font-semibold tracking-tight mb-2 flex items-center gap-2 text-[#0D2B20]">
<svg className="lucide lucide-calculator w-5 h-5 text-amber-400" data-lucide="calculator" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" width="16" x="4" y="2"></rect><line x1="8" x2="16" y1="6" y2="6"></line><line x1="16" x2="16" y1="14" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg>
 Calcule sua economia
            </h2>
<div className="grid md:grid-cols-2 gap-4">
<div className="">
<label className="block text-sm text-[#9F9471] mb-1" htmlFor="nome">
<span className="inline-block align-middle mr-1">
<svg className="lucide lucide-user w-4 h-4 text-amber-300" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</span>
                  Nome
                </label>
<input className="w-full focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm text-[#0D2B20] bg-[#FAF6EA] border-[#EDE6D0] border rounded-lg pt-2 pr-3 pb-2 pl-3" id="nome" placeholder="Ex.: Maria Silva" type="text"/>
</div>
<div className="">
<label className="block text-sm text-[#9F9471] mb-1" htmlFor="telefone">
<span className="inline-block align-middle mr-1">
<svg className="lucide lucide-phone w-4 h-4 text-amber-300" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</span>
                  Telefone / WhatsApp
                </label>
<input className="w-full bg-[#FAF6EA] border border-[#EDE6D0] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 text-[#0D2B20]" id="telefone" placeholder="DDD + número" type="tel"/>
</div>
<div className="">
<label className="block text-sm text-[#9F9471] mb-1" htmlFor="cidade">
<span className="inline-block align-middle mr-1">
<svg className="lucide lucide-map-pin w-4 h-4 text-amber-300" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</span>
                  Cidade
                </label>
<input className="w-full bg-[#FAF6EA] border border-[#EDE6D0] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 text-[#0D2B20]" id="cidade" placeholder="Ex.: Campinas" type="text"/>
</div>
<div className="">
<label className="block text-sm text-[#9F9471] mb-1" htmlFor="valor">
<span className="inline-block align-middle mr-1">
<svg className="lucide lucide-credit-card w-4 h-4 text-amber-300" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</span>
                  Valor da sua conta de luz (R$)
                </label>
<input className="w-full bg-[#FAF6EA] border border-[#EDE6D0] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 text-[#0D2B20]" id="valor" inputmode="decimal" placeholder="Ex.: 450,75" type="text"/>
</div>
</div>
<button className="w-full px-6 py-3 bg-amber-500 text-black text-sm font-medium rounded-lg transition opacity-60 cursor-not-allowed flex items-center justify-center gap-2" disabled="" id="btnCalcular" type="button">
<svg className="lucide lucide-arrow-right-circle w-5 h-5" data-lucide="arrow-right-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m12 16 4-4-4-4"></path><path d="M8 12h8"></path></svg>
              Calcular agora
            </button>
<p className="text-sm text-[#9F9471] hidden" id="resultado"></p>
<button className="relative w-full px-6 py-3 bg-emerald-500 text-white text-sm font-medium rounded-lg hidden overflow-hidden animate-pulse flex items-center justify-center gap-2" id="btnFalar" type="button">
<span className="absolute inline-flex h-full w-full rounded-lg bg-emerald-500 opacity-75 animate-ping"></span>
<span className="relative flex items-center gap-1">
<svg className="lucide lucide-message-circle w-5 h-5" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
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
