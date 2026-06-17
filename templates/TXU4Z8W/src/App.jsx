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
      
    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons();
    });

    const form   = document.getElementById('calcForm');
    const inputs = Array.from(form.querySelectorAll('input'));
    const btnCal = document.getElementById('btnCalcular');
    const sunRes = document.getElementById('sunResult');
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

      const reduzido = valorConta * 0.10;
      const economiaAnual = (valorConta - reduzido) * 12;

      const reduzidoStr = reduzido.toLocaleString('pt-BR',
        { style:'currency', currency:'BRL' });
      const economiaAnualStr = economiaAnual.toLocaleString('pt-BR',
        { style:'currency', currency:'BRL' });

      resEl.innerHTML = `<span class="font-semibold text-[#0D2B20]">Com energia solar, sua conta de luz pode cair para aproximadamente <span class="text-amber-500">${reduzidoStr}</span>.<br>Uma economia de <span class="text-emerald-600">${economiaAnualStr}</span> todos os anos.</span>`;
      sunRes.classList.remove('hidden');
      btnCTA.classList.remove('hidden');
      setTimeout(() => {
        sunRes.querySelector('svg').classList.remove('spin-sun');
      }, 1800);
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
      
<div className="relative min-h-screen overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="" className="w-full h-full object-center object-cover" src="https://verdolin.com.br/institucional/wp-content/uploads/2025/07/AnyConv.com__painel-solar-monocristalino-e-painel-solar-policristalino.webp?w=800&amp;q=80" style={{mixBlendMode: 'luminosity', opacity: '0.45'}}/>
<div className="hidden md:block absolute inset-0 pointer-events-none">
<div className="absolute inset-0" style={{background: 'linear-gradient(90deg, rgba(253,245,216,0.93) 0%, rgba(253,245,216,0.85) 26%, rgba(253,245,216,0.68) 48%, rgba(253,245,216,0.35) 72%, rgba(253,245,216,0.07) 95%, rgba(253,245,216,0) 100%)'}}></div>
</div>
<div className="md:hidden absolute inset-0" style={{background: 'linear-gradient(180deg, rgba(253,245,216,0.93) 0%, rgba(253,245,216,0.85) 35%, rgba(253,245,216,0.65) 62%, rgba(253,245,216,0.30) 85%, rgba(253,245,216,0.07) 97%, rgba(253,245,216,0) 100%)'}}></div>
</div>

<section className="relative z-10 pt-16 pr-6 pb-24 pl-6">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

<div className="relative z-20">
<div className="inline-block px-3 py-1 mb-6 text-xs font-medium bg-amber-500/20 text-amber-700 rounded-full">Energia limpa e acessível</div>
<h1 className="md:text-5xl leading-tight text-4xl font-semibold text-amber-600 tracking-tight mb-6">Reduza até 90% da sua conta de luz com energia solar</h1>
<p className="max-w-lg text-xl text-gray-700 mb-8">O dinheiro que você economiza em um ano pode pagar IPTU, IPVA, dar entrada em um carro novo, viajar com a família e até mesmo reformar sua casa.</p>
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
<input className="w-full focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm text-[#0D2B20] bg-[#FAF6EA] border-[#EDE6D0] border rounded-lg pt-2 pr-3 pb-2 pl-3 transition" id="nome" placeholder="Ex.: Maria Silva" type="text"/>
</div>
<div className="">
<label className="block text-sm text-[#9F9471] mb-1" htmlFor="telefone">
<span className="inline-block align-middle mr-1">
<svg className="lucide lucide-phone w-4 h-4 text-amber-300" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</span>
                  Telefone / WhatsApp
                </label>
<input className="w-full bg-[#FAF6EA] border border-[#EDE6D0] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 text-[#0D2B20] transition" id="telefone" placeholder="DDD + número" type="tel"/>
</div>
<div className="">
<label className="block text-sm text-[#9F9471] mb-1" htmlFor="cidade">
<span className="inline-block align-middle mr-1">
<svg className="lucide lucide-map-pin w-4 h-4 text-amber-300" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</span>
                  Cidade
                </label>
<input className="w-full bg-[#FAF6EA] border border-[#EDE6D0] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 text-[#0D2B20] transition" id="cidade" placeholder="Ex.: Campinas" type="text"/>
</div>
<div>
<label className="block text-sm text-[#9F9471] mb-1" htmlFor="valor">
<span className="inline-block align-middle mr-1">
<svg className="lucide lucide-credit-card w-4 h-4 text-amber-300" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</span>
                  Valor da sua conta de luz (R$)
                </label>
<input className="w-full bg-[#FAF6EA] border border-[#EDE6D0] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 text-[#0D2B20] transition" id="valor" inputmode="decimal" placeholder="Ex.: 450,75" type="text"/>
</div>
</div>
<button className="w-full px-6 py-3 bg-amber-500 text-black text-sm font-semibold rounded-lg shadow-sm transition flex items-center justify-center gap-2 opacity-60 cursor-not-allowed hover:shadow-md hover:scale-[1.01] hover:bg-amber-400 active:scale-95 focus:ring-2 focus:ring-amber-400 focus:ring-offset-2" disabled="" id="btnCalcular" type="button">
<svg className="lucide lucide-arrow-right-circle w-5 h-5" data-lucide="arrow-right-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m12 16 4-4-4-4"></path><path d="M8 12h8"></path></svg>
              CALCULAR AGORA
            </button>
<div className="hidden flex flex-col items-center mt-4" id="sunResult">
<span className="inline-block mb-2">
<svg className="w-9 h-9 text-amber-300 spin-sun" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" fill="currentColor" opacity="0.7" r="5"></circle>
<g stroke="currentColor" strokeWidth="2">
<path d="M12 2v2"></path>
<path d="M12 20v2"></path>
<path d="M2 12h2"></path>
<path d="M20 12h2"></path>
<path d="M4.93 4.93l1.41 1.41"></path>
<path d="M17.66 17.66l1.41 1.41"></path>
<path d="M4.93 19.07l1.41-1.41"></path>
<path d="M17.66 6.34l1.41-1.41"></path>
</g>
</svg>
</span>
<p className="text-base font-medium text-amber-800 text-center animate-fade-in" id="resultado"></p>
<p className="text-xs text-[#8c825e] mt-2">Lembre-se: há sempre a tarifa mínima cobrada pela companhia de energia.</p>
</div>
<a className="relative w-full px-6 py-3 bg-emerald-500 text-white text-sm font-semibold rounded-lg hidden overflow-hidden animate-pulse flex items-center justify-center gap-2 shadow-sm transition hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2" href="https://api.whatsapp.com/send/?phone=5531985167248&amp;text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es&amp;type=phone_number&amp;app_absent=0" id="btnFalar" rel="noopener" target="_blank">
<span className="absolute inline-flex h-full w-full rounded-lg bg-emerald-500 opacity-75 animate-ping"></span>
<span className="relative flex items-center gap-2">

<svg aria-hidden="true" className="w-6 h-6" fill="none" focusable="false" height="22" viewbox="0 0 32 32" width="22" xmlns="http://www.w3.org/2000/svg"><g><path d="M16.001 3.2c-7.073 0-12.8 5.728-12.8 12.8 0 2.264.601 4.448 1.744 6.368L3.2 28.8l6.608-1.713C11.729 28.4 13.844 28.8 16 28.8c7.072 0 12.8-5.728 12.8-12.8 0-7.072-5.728-12.8-12.799-12.8zm0 23.04c-2.001 0-3.953-.536-5.648-1.552l-.401-.24-3.92 1.016 1.04-3.808-.256-.393c-1.104-1.696-1.687-3.663-1.687-5.679 0-6.016 4.896-10.912 10.912-10.912s10.912 4.896 10.912 10.912c0 6.017-4.896 10.912-10.912 10.912zm6.08-8.704c-.336-.168-1.984-.977-2.288-1.089-.304-.112-.528-.168-.752.168-.224.336-.864 1.088-1.056 1.312-.192.224-.384.253-.72.084-.336-.168-1.408-.519-2.682-1.655-.992-.881-1.664-1.969-1.856-2.305-.192-.336-.02-.515.146-.683.151-.15.336-.392.504-.584.168-.192.224-.336.336-.56.112-.224.056-.42-.028-.588-.084-.168-.752-1.816-1.032-2.472-.272-.653-.552-.563-.752-.573-.192-.009-.413-.011-.632-.011s-.588.084-.896.393c-.304.305-1.168 1.142-1.168 2.778s1.196 3.226 1.362 3.451c.168.224 2.36 3.606 5.728 4.916.8.345 1.423.552 1.911.705.803.256 1.532.22 2.108.134.643-.096 1.984-.808 2.263-1.588.279-.779.279-1.447.196-1.588-.084-.14-.304-.224-.64-.392z" fill="#fff"></path><path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm0 29.6c7.507 0 13.6-6.093 13.6-13.6S23.507 2.4 16 2.4 2.4 8.493 2.4 16 8.493 29.6 16 29.6z" fill="#25D366"></path></g></svg>
                Fale com um especialista agora
              </span>
</a>
</form>
</div>
</div>
</section>
</div>


    </>
  );
}
