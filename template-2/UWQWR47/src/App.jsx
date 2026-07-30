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
    function showScreen(i) {
      screens[current].classList.add('hidden');
      current = i;
      screens[current].classList.remove('hidden');
      document.getElementById('backBtn').classList.toggle('hidden', current === 0 || current === 3);
      const titles = [
        'Inversión+','Simulador','Confirmar','Creando...','Éxito',
        'Al finalizar','Tus inversiones','Detalle Inversión'
      ];
      document.getElementById('headerTitle').textContent = titles[current] || 'Inversión+';
    }
    const nextScreen = () => showScreen(current + 1);
    const prevScreen = () => showScreen(current - 1);

    /* Simulador */
    const amountInput = document.getElementById('amountInput');
    const termSelect  = document.getElementById('termSelect');
    const gainPreview = document.getElementById('gainPreview');
    function updateSimulation() {
      const amount = parseFloat(amountInput.value) || 0;
      const days   = parseInt(termSelect.value);
      const gat    = parseFloat(termSelect.selectedOptions[0].dataset.gat);
      const gain   = amount * gat * (days / 360);
      gainPreview.textContent = gain.toLocaleString('es-MX', { style:'currency', currency:'MXN' });
    }
    updateSimulation();

    /* Confirmación */
    function goToConfirm() {
      document.getElementById('cMonto').textContent = parseFloat(amountInput.value)
        .toLocaleString('es-MX',{style:'currency',currency:'MXN'});
      document.getElementById('cPlazo').textContent = `${termSelect.value} días`;
      const gatPct = (parseFloat(termSelect.selectedOptions[0].dataset.gat)*100).toFixed(2)+'%';
      document.getElementById('cGat').textContent = gatPct;
      const finish = new Date(); finish.setDate(finish.getDate() + parseInt(termSelect.value));
      document.getElementById('cFecha').textContent = finish.toLocaleDateString('es-MX');
      showScreen(2);
    }
    document.getElementById('termsCheck').addEventListener('change', e=>{
      const btn = document.getElementById('confirmBtn');
      btn.disabled = !e.target.checked;
      btn.classList.toggle('opacity-50', !e.target.checked);
    });

    /* Crear inversión (mock) */
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
      }, 1500);
    }

    /* Acciones al vencimiento */
    let selectedPost = null;
    function selectPostAction(i) {
      selectedPost = i;
      document.querySelectorAll('.post-option').forEach((btn,idx)=>{
        if(idx===i){
          btn.classList.add('border-[#00D180]','bg-[#00D180]/10');
        } else {
          btn.classList.remove('border-[#00D180]','bg-[#00D180]/10');
        }
      });
      const cont = document.getElementById('postContinue');
      cont.disabled = false; cont.classList.remove('opacity-50');
    }

    /* Listado y Detalle */
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
        card.className='w-full border rounded-lg p-4 flex flex-col text-left gap-3';
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
      document.getElementById('totalInv').textContent = `Total invertido: ${total.toLocaleString('es-MX',{style:'currency',currency:'MXN'})}`;
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

    /* Post flujo */
    document.querySelector('[data-screen="4"] button').addEventListener('click', ()=>showScreen(5));
    document.getElementById('postContinue').addEventListener('click', ()=>{
      loadInvestments();
      showScreen(6);
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
      

<div className="relative w-[360px] h-[760px] overflow-hidden border border-gray-200 rounded-xl shadow-lg bg-[#ffffff]" id="app">

<header className="sticky top-0 w-full h-14 flex items-center px-4 py-3 border-b border-gray-100 bg-[#ffffff] z-10">
<button className="-ml-2 p-2 hidden" id="backBtn" onClick={(e) => { prevScreen() }}>
<i className="ph ph-caret-left w-6 h-6 text-[#161616]"></i>
</button>
<h1 className="ml-3 text-[18px] font-semibold tracking-tight" id="headerTitle">Inversión+</h1>
</header>

<main className="pt-14 h-full overflow-y-auto">

<section className="min-h-[706px] flex flex-col gap-6 px-4 py-8" data-screen="0">
<h2 className="text-[24px] font-semibold tracking-tight">Invierte y haz crecer tu dinero</h2>
<div className="flex flex-col gap-4">
<div className="flex items-start gap-3">
<i className="ph ph-shield-check w-6 h-6 text-[#161616]"></i>
<p className="text-[14px]">Tu dinero está protegido conforme a los lineamientos regulatorios.</p>
</div>
<div className="flex items-start gap-3">
<i className="ph ph-calendar w-6 h-6 text-[#161616]"></i>
<p className="text-[14px]">Elige entre 30, 90, 180 o 360 días con rendimientos fijos garantizados.</p>
</div>
<div className="flex items-start gap-3">
<i className="ph ph-lock w-6 h-6 text-[#161616]"></i>
<p className="text-[14px]">No podrás retirar tu inversión hasta que el plazo termine.</p>
</div>
</div>
<button className="mt-auto mb-4 bg-[#00D180] text-[#161616] h-14 w-full rounded-[12px] font-semibold" onClick={(e) => { nextScreen() }}>Comenzar</button>
</section>

<section className="hidden min-h-[706px] flex flex-col gap-6 px-4 py-8" data-screen="1">
<h2 className="text-[22px] font-semibold tracking-tight">Elige monto y plazo</h2>

<label className="flex flex-col gap-2">
<span className="text-[14px]">Monto a invertir</span>
<input className="w-full h-12 border rounded-lg px-4 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#00D180]" id="amountInput" min="100" onInput={(e) => { updateSimulation() }} step="100" type="number" value="1000" />
</label>

<label className="flex flex-col gap-2">
<span className="text-[14px]">Plazo (días)</span>
<select className="w-full h-12 border rounded-lg px-4 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#00D180]" id="termSelect" onChange={(e) => { updateSimulation() }}>
<option data-gat="0.1050" value="30">30 días (10.50% GAT)</option>
<option data-gat="0.1250" value="90">90 días (12.50% GAT)</option>
<option data-gat="0.1050" value="180">180 días (10.50% GAT)</option>
<option data-gat="0.0875" value="360">360 días (8.75% GAT)</option>
</select>
</label>

<div className="mt-4 p-4 border rounded-lg flex flex-col gap-2">
<p className="text-[14px]">Ganancia estimada</p>
<p className="text-[20px] font-semibold tracking-tight" id="gainPreview">$0.00 MXN</p>
<p className="text-[12px] text-gray-500">Al finalizar el plazo recibirás tu inversión inicial y la ganancia indicada.</p>
</div>
<button className="mt-auto mb-4 bg-[#00D180] text-[#161616] h-14 w-full rounded-[12px] font-semibold" onClick={(e) => { goToConfirm() }}>Continuar</button>
</section>

<section className="hidden min-h-[706px] flex flex-col gap-6 px-4 py-8" data-screen="2">
<h2 className="text-[22px] font-semibold tracking-tight">Confirma tu inversión</h2>
<div className="flex flex-col gap-4">
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
<label className="flex items-start gap-2 mt-2 text-[14px]">
<input className="mt-1 accent-[#00D180]" id="termsCheck" type="checkbox" />
            Acepto los Términos y Condiciones de Inversión+
          </label>
</div>
<button className="mt-auto mb-4 bg-[#00D180] text-[#161616] h-14 w-full rounded-[12px] font-semibold opacity-50" disabled id="confirmBtn" onClick={(e) => { createInvestment() }}>Confirmar inversión</button>
</section>

<section className="hidden min-h-[706px] flex flex-col items-center justify-center gap-6 px-4 py-8" data-screen="3">
<i className="ph ph-circle-notch w-6 h-6 animate-spin text-[#161616]"></i>
<p className="text-[14px]">Creando tu Inversión...</p>
</section>

<section className="hidden min-h-[706px] flex flex-col items-center gap-6 px-4 py-8" data-screen="4">
<i className="ph ph-check-circle w-6 h-6 text-[#161616]"></i>
<h2 className="text-[22px] font-semibold tracking-tight text-center">¡Tu Inversión+ fue creada!</h2>
<button className="w-full bg-[#00D180] text-[#161616] h-14 rounded-[12px] font-semibold" onClick={(e) => { nextScreen() }}>Continuar</button>
</section>

<section className="hidden min-h-[706px] flex flex-col gap-6 px-4 py-8" data-screen="5">
<h2 className="text-[22px] font-semibold tracking-tight">Al finalizar tu inversión</h2>
<div className="flex flex-col gap-4">
<button className="post-option w-full border rounded-lg h-14 flex items-center justify-between px-4 text-[14px] transition hover:border-[#00D180]/60" onClick={(e) => { selectPostAction(0) }}>Reinvertir monto + ganancias</button>
<button className="post-option w-full border rounded-lg h-14 flex items-center justify-between px-4 text-[14px] transition hover:border-[#00D180]/60" onClick={(e) => { selectPostAction(1) }}>Reinvertir solo el monto</button>
<button className="post-option w-full border rounded-lg h-14 flex items-center justify-between px-4 text-[14px] transition hover:border-[#00D180]/60" onClick={(e) => { selectPostAction(2) }}>Mover todo a Stori Cuenta+</button>
</div>
<button className="mt-auto mb-4 bg-[#00D180] text-[#161616] h-14 w-full rounded-[12px] font-semibold opacity-50" disabled id="postContinue" onClick={(e) => { nextScreen() }}>Guardar Preferencia</button>
</section>

<section className="hidden min-h-[706px] flex flex-col gap-4 px-4 py-8" data-screen="6">
<h2 className="text-[22px] font-semibold tracking-tight">Tus inversiones</h2>
<p className="text-[14px] mb-2" id="totalInv"></p>
<div className="flex flex-col gap-4" id="invList"></div>
<button className="mt-auto mb-4 bg-[#00D180] text-[#161616] h-14 w-full rounded-[12px] font-semibold" onClick={(e) => { resetToSim() }}>Crear nueva inversión</button>
</section>

<section className="hidden min-h-[706px] flex flex-col gap-6 px-4 py-8" data-screen="7">
<h2 className="text-[22px] font-semibold tracking-tight">Detalle Inversión</h2>
<div className="flex flex-col gap-4">
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
<button className="mt-auto mb-4 bg-[#00D180] text-[#161616] h-14 w-full rounded-[12px] font-semibold" onClick={(e) => { backToList() }}>Volver</button>
</section>
</main>
</div>


    </>
  );
}
