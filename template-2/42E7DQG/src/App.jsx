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



    /* Navegación */
    const screens = document.querySelectorAll('[data-screen]');
    let current = 0;
    const headerTitle = document.getElementById('headerTitle');
    const backBtn = document.getElementById('backBtn');
    const titles = [
      'Inversión+','Simulador','Confirmar','Creando...','Éxito',
      'Al finalizar','Tus inversiones','Detalle Inversión'
    ];
    function drawIcons(){
      if (window.lucide) lucide.createIcons({attrs:{'stroke-width':1.5,stroke:'#161616'}});
    }
    function showScreen(i) {
      screens[current].classList.add('hidden');
      current = i;
      screens[current].classList.remove('hidden');
      backBtn.classList.toggle('hidden', current === 0 || current === 3);
      headerTitle.textContent = titles[current] || 'Inversión+';
      drawIcons();
    }
    const nextScreen = () => showScreen(Math.min(current + 1, screens.length - 1));
    const prevScreen = () => showScreen(Math.max(current - 1, 0));

    /* Simulador */
    const amountInput = document.getElementById('amountInput');
    const termSelect  = document.getElementById('termSelect');
    const gainPreview = document.getElementById('gainPreview');
    function updateSimulation() {
      const amount = parseFloat(amountInput.value) || 0;
      const days   = parseInt(termSelect.value);
      const gat    = parseFloat(termSelect.selectedOptions[0].dataset.gat);
      const gain   = amount * gat * (days / 360);
      gainPreview.textContent = gain.toLocaleString('es-MX',{style:'currency',currency:'MXN'});
    }
    updateSimulation();

    /* Confirmar */
    function goToConfirm() {
      document.getElementById('cMonto').textContent = parseFloat(amountInput.value)
        .toLocaleString('es-MX',{style:'currency',currency:'MXN'});
      document.getElementById('cPlazo').textContent = `${termSelect.value} días`;
      document.getElementById('cGat').textContent = (parseFloat(termSelect.selectedOptions[0].dataset.gat)*100).toFixed(2)+'%';
      const finish = new Date(); finish.setDate(finish.getDate()+parseInt(termSelect.value));
      document.getElementById('cFecha').textContent = finish.toLocaleDateString('es-MX');
      showScreen(2);
    }

    /* Checkbox habilita confirmar */
    document.getElementById('termsCheck').addEventListener('change', e=>{
      const btn = document.getElementById('confirmBtn');
      btn.disabled = !e.target.checked;
      btn.classList.toggle('opacity-50', !e.target.checked);
      btn.classList.toggle('cursor-not-allowed', !e.target.checked);
    });

    /* Crear inversión */
    let investments = [];
    function createInvestment() {
      showScreen(3);
      setTimeout(()=>{
        investments.push({
          id: Date.now(),
          monto: parseFloat(amountInput.value),
          plazo: parseInt(termSelect.value),
          gat : parseFloat(termSelect.selectedOptions[0].dataset.gat),
          inicio: new Date()
        });
        showScreen(4);
      }, 1600);
    }

    /* Post-Flujo */
    let selectedPost = null;
    function selectPostAction(i) {
      selectedPost = i;
      document.querySelectorAll('.post-option').forEach((btn,idx)=>{
        btn.classList.toggle('border-[#00D180]', idx === i);
        btn.classList.toggle('bg-[#00D180]/10', idx === i);
      });
      const cont = document.getElementById('postContinue');
      cont.disabled = false;
      cont.classList.remove('opacity-50','cursor-not-allowed');
    }

    /* Listado */
    function resetToSim(){ showScreen(1); }
    function loadInvestments(){
      const list = document.getElementById('invList'); list.innerHTML='';
      let total = 0;
      const today = new Date();
      investments.forEach(inv=>{
        const end = new Date(inv.inicio); end.setDate(end.getDate()+inv.plazo);
        const remaining = Math.max(0, Math.ceil((end-today)/(1000*60*60*24)));
        const progress = ((inv.plazo-remaining)/inv.plazo)*100;
        total += inv.monto;

        const card = document.createElement('button');
        card.className='w-full border border-[#A8A8A8] rounded-[12px] p-4 flex flex-col text-left gap-3 transition hover:border-[#00D180]/60';
        card.onclick=()=>showDetail(inv.id);
        card.innerHTML=`
          <div class="flex justify-between text-[14px]">
            <span>Monto</span>
            <span>${inv.monto.toLocaleString('es-MX',{style:'currency',currency:'MXN'})}</span>
          </div>
          <div class="h-2 bg-gray-200 rounded-full">
            <div class="h-full bg-[#00D180] rounded-full" style="width:${progress}%"></div>
          </div>
          <div class="flex justify-between text-[12px] text-gray-500">
            <span>Días restantes</span><span>${remaining}</span>
          </div>
          <div class="flex justify-between text-[12px] text-gray-500">
            <span>Termina</span><span>${end.toLocaleDateString('es-MX')}</span>
          </div>
        `;
        list.appendChild(card);
      });
      document.getElementById('totalInv').textContent =
        `Total invertido: ${total.toLocaleString('es-MX',{style:'currency',currency:'MXN'})}`;
    }
    function showDetail(id){
      const inv = investments.find(i=>i.id===id); if(!inv) return;
      document.getElementById('dMonto').textContent = inv.monto.toLocaleString('es-MX',{style:'currency',currency:'MXN'});
      document.getElementById('dPlazo').textContent = `${inv.plazo} días`;
      document.getElementById('dGat').textContent = (inv.gat*100).toFixed(2)+'%';
      const end = new Date(inv.inicio); end.setDate(end.getDate()+inv.plazo);
      document.getElementById('dFecha').textContent = end.toLocaleDateString('es-MX');
      const remaining = Math.max(0, Math.ceil((end-new Date())/(1000*60*60*24)));
      document.getElementById('dDias').textContent = remaining;
      showScreen(7);
    }
    const backToList = () => showScreen(6);

    /* Navegación específica */
    document.querySelector('[data-screen="4"] button').addEventListener('click', ()=>showScreen(5));
    document.getElementById('postContinue').addEventListener('click', ()=>{
      loadInvestments();
      showScreen(6);
    });

    /* Inicializar iconos cuando el DOM esté listo */
    document.addEventListener('DOMContentLoaded', drawIcons);
  
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
      
<div className="w-[360px] h-[760px] mx-auto flex flex-col bg-[#ffffff] shadow-lg" id="app">

<header className="h-14 flex items-center px-4 py-3 border-b border-gray-100 select-none">
<button aria-label="Volver" className="p-2 -ml-2 hidden" id="backBtn" onClick={(e) => { prevScreen() }}>
<i className="w-6 h-6 text-[#161616]" data-lucide="chevron-left"></i>
</button>
<h1 className="ml-3 text-[18px] font-normal" id="headerTitle">Inversión+</h1>
</header>

<main className="flex-1 relative">

<section className="w-full h-full flex flex-col px-4 pt-6 mb-6 gap-6" data-screen="0">
<h2 className="text-[16px] font-bold">Invierte y haz crecer tu dinero</h2>
<div className="flex flex-col gap-6">
<div className="flex items-start gap-3">
<i className="w-6 h-6 text-[#161616]" data-lucide="shield-check"></i>
<p className="text-[14px] leading-snug">Tu dinero está protegido conforme a los lineamientos regulatorios.</p>
</div>
<div className="flex items-start gap-3">
<i className="w-6 h-6 text-[#161616]" data-lucide="calendar-clock"></i>
<p className="text-[14px] leading-snug">Elige entre 30, 90, 180 o 360 días con rendimientos fijos garantizados.</p>
</div>
<div className="flex items-start gap-3">
<i className="w-6 h-6 text-[#161616]" data-lucide="lock"></i>
<p className="text-[14px] leading-snug">No podrás retirar tu inversión hasta que el plazo termine.</p>
</div>
</div>
<div className="mt-auto mb-4">
<button className="bg-[#00D180] text-[#161616] h-14 w-full rounded-[12px] font-bold transition hover:brightness-90 active:scale-[.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00D180]" onClick={(e) => { nextScreen() }}>Comenzar</button>
</div>
</section>

<section className="hidden w-full h-full flex flex-col px-4 pt-6 mb-6 gap-6" data-screen="1">
<h2 className="text-[16px] font-bold">Elige monto y plazo</h2>
<label className="flex flex-col gap-2">
<span className="text-[14px]">Monto a invertir</span>
<input className="w-full h-14 border border-[#A8A8A8] rounded-[12px] py-2 px-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#00D180]" id="amountInput" min="100" onInput={(e) => { updateSimulation() }} step="100" type="number" value="1000" />
</label>
<label className="flex flex-col gap-2">
<span className="text-[14px]">Plazo (días)</span>
<select className="w-full h-14 border border-[#A8A8A8] rounded-[12px] py-2 px-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#00D180]" id="termSelect" onChange={(e) => { updateSimulation() }}>
<option data-gat="0.1050" value="30">30 días (10.50% GAT)</option>
<option data-gat="0.1250" value="90">90 días (12.50% GAT)</option>
<option data-gat="0.1050" value="180">180 días (10.50% GAT)</option>
<option data-gat="0.0875" value="360">360 días (8.75% GAT)</option>
</select>
</label>
<div className="p-4 border border-[#A8A8A8] rounded-[12px] flex flex-col gap-2">
<p className="text-[14px]">Ganancia estimada</p>
<p className="text-[20px] font-semibold" id="gainPreview">$0.00 MXN</p>
<p className="text-[12px] text-gray-500 leading-snug">Al finalizar el plazo recibirás tu inversión inicial y la ganancia indicada.</p>
</div>
<div className="mt-auto mb-4">
<button className="bg-[#00D180] text-[#161616] h-14 w-full rounded-[12px] font-bold transition hover:brightness-90 active:scale-[.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00D180]" onClick={(e) => { goToConfirm() }}>Continuar</button>
</div>
</section>

<section className="hidden w-full h-full flex flex-col px-4 pt-6 mb-6 gap-6" data-screen="2">
<h2 className="text-[16px] font-bold">Confirma tu inversión</h2>
<div className="flex flex-col gap-6">
<div className="flex justify-between text-[14px]">
<span>Monto a invertir</span><span className="font-medium" id="cMonto"></span>
</div>
<div className="flex justify-between text-[14px]">
<span>Plazo</span><span className="font-medium" id="cPlazo"></span>
</div>
<div className="flex justify-between text-[14px]">
<span>GAT Nominal</span><span className="font-medium" id="cGat"></span>
</div>
<div className="flex justify-between text-[14px]">
<span>Fecha de término</span><span className="font-medium" id="cFecha"></span>
</div>
<label className="flex items-start gap-3 mt-2 text-[14px] select-none cursor-pointer">
<input className="appearance-none w-6 h-6 border border-[#A8A8A8] rounded-[4px] flex-none grid place-content-center peer" id="termsCheck" type="checkbox" />
<span>Acepto los Términos y Condiciones de Inversión+</span>
<svg className="absolute w-6 h-6 text-[#00D180] hidden peer-checked:block pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
</label>
</div>
<div className="mt-auto mb-4">
<button className="bg-[#00D180] text-[#161616] h-14 w-full rounded-[12px] font-bold opacity-50 cursor-not-allowed transition active:scale-[.98]" disabled id="confirmBtn" onClick={(e) => { createInvestment() }}>Confirmar inversión</button>
</div>
</section>

<section className="hidden w-full h-full flex flex-col items-center justify-center gap-4" data-screen="3">
<div className="relative">
<i className="w-6 h-6 animate-spin text-[#161616]" data-lucide="loader"></i>
<span className="sr-only" role="status">Creando tu inversión…</span>
</div>
<p aria-live="polite" className="text-[14px]">Creando tu inversión…</p>
</section>

<section className="hidden w-full h-full flex flex-col items-center px-4 pt-6 mb-6 gap-6" data-screen="4">
<i className="w-6 h-6 text-[#00D180]" data-lucide="check-circle"></i>
<h2 className="text-[16px] font-bold text-center">¡Tu Inversión+ fue creada!</h2>
<div className="mt-auto mb-4 w-full">
<button className="bg-[#00D180] text-[#161616] h-14 w-full rounded-[12px] font-bold transition hover:brightness-90 active:scale-[.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00D180]" onClick={(e) => { nextScreen() }}>Continuar</button>
</div>
</section>

<section className="hidden w-full h-full flex flex-col px-4 pt-6 mb-6 gap-6" data-screen="5">
<h2 className="text-[16px] font-bold">Al finalizar tu inversión</h2>
<div className="flex flex-col gap-6">
<button className="post-option w-full border border-[#A8A8A8] rounded-[12px] h-14 flex items-center justify-between px-4 text-[14px] transition hover:border-[#00D180]/60" onClick={(e) => { selectPostAction(0) }}>Reinvertir monto + ganancias</button>
<button className="post-option w-full border border-[#A8A8A8] rounded-[12px] h-14 flex items-center justify-between px-4 text-[14px] transition hover:border-[#00D180]/60" onClick={(e) => { selectPostAction(1) }}>Reinvertir solo el monto</button>
<button className="post-option w-full border border-[#A8A8A8] rounded-[12px] h-14 flex items-center justify-between px-4 text-[14px] transition hover:border-[#00D180]/60" onClick={(e) => { selectPostAction(2) }}>Mover todo a Stori Cuenta+</button>
</div>
<div className="mt-auto mb-4">
<button className="bg-[#00D180] text-[#161616] h-14 w-full rounded-[12px] font-bold opacity-50 cursor-not-allowed transition active:scale-[.98]" disabled id="postContinue" onClick={(e) => { nextScreen() }}>Guardar Preferencia</button>
</div>
</section>

<section className="hidden w-full h-full flex flex-col px-4 pt-6 mb-6 gap-4" data-screen="6">
<h2 className="text-[16px] font-bold">Tus inversiones</h2>
<p className="text-[14px] mb-2" id="totalInv"></p>
<div className="flex-1 flex flex-col gap-6 overflow-y-auto pr-1" id="invList"></div>
<div className="mt-auto mb-4">
<button className="bg-[#00D180] text-[#161616] h-14 w-full rounded-[12px] font-bold transition hover:brightness-90 active:scale-[.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00D180]" onClick={(e) => { resetToSim() }}>Crear nueva inversión</button>
</div>
</section>

<section className="hidden w-full h-full flex flex-col px-4 pt-6 mb-6 gap-6" data-screen="7">
<h2 className="text-[16px] font-bold">Detalle Inversión</h2>
<div className="flex flex-col gap-6">
<div className="flex justify-between text-[14px]">
<span>Monto invertido</span><span className="font-medium" id="dMonto"></span>
</div>
<div className="flex justify-between text-[14px]">
<span>Plazo</span><span className="font-medium" id="dPlazo"></span>
</div>
<div className="flex justify-between text-[14px]">
<span>GAT Nominal</span><span className="font-medium" id="dGat"></span>
</div>
<div className="flex justify-between text-[14px]">
<span>Fecha de término</span><span className="font-medium" id="dFecha"></span>
</div>
<div className="flex justify-between text-[14px]">
<span>Días restantes</span><span className="font-medium" id="dDias"></span>
</div>
</div>
<div className="mt-auto mb-4">
<button className="bg-[#00D180] text-[#161616] h-14 w-full rounded-[12px] font-bold transition hover:brightness-90 active:scale-[.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00D180]" onClick={(e) => { backToList() }}>Volver</button>
</div>
</section>
</main>
</div>


    </>
  );
}
