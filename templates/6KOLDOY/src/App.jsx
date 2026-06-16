import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



  lucide.createIcons();
  const screens=[1,2,3,4,5,6,7,8];
  let navStack=[1];

  function showScreen(n){
    screens.forEach(s=>document.getElementById('screen'+s).classList.add('hidden'));
    document.getElementById('screen'+n).classList.remove('hidden');
    window.scrollTo(0,0);
    lucide.createIcons();
  }
  function toggleBackButtons(){
    const show=navStack.length>1;
    document.querySelectorAll('.backBtn').forEach(b=>b.classList.toggle('hidden',!show));
  }
  function goto(n){
    if(n===navStack[navStack.length-1])return;
    navStack.push(n);
    showScreen(n);
    toggleBackButtons();
  }
  function goback(){
    if(navStack.length<=1)return;
    navStack.pop();
    const prev=navStack[navStack.length-1];
    showScreen(prev);
    toggleBackButtons();
  }
  toggleBackButtons();

  // SIMULADOR
  const plazos=document.querySelectorAll('.plazoBtn');
  let selectedPlazo={dias:0,gat:0};
  plazos.forEach(btn=>btn.addEventListener('click',e=>{
    plazos.forEach(b=>b.classList.remove('ring','ring-indigo-500','bg-neutral-700'));
    e.currentTarget.classList.add('ring','ring-indigo-500','bg-neutral-700');
    selectedPlazo.dias=parseInt(btn.dataset.dias);
    selectedPlazo.gat=parseFloat(btn.dataset.gat);
    calc();
  }));
  document.getElementById('monto').addEventListener('input',calc);
  function calc(){
    const monto=parseFloat(document.getElementById('monto').value)||0;
    if(!monto||!selectedPlazo.dias){updateDisplay(0,0);disableCont();return;}
    const tasa=selectedPlazo.gat/100;
    const gan=monto*tasa*(selectedPlazo.dias/360);
    updateDisplay(gan,monto+gan);enableCont();
  }
  function updateDisplay(gan,tot){
    document.getElementById('ganancia').textContent=currency(gan);
    document.getElementById('total').textContent=currency(tot);
  }
  function currency(n){return n.toLocaleString('es-MX',{style:'currency',currency:'MXN',minimumFractionDigits:2});}
  function btnState(sel,dis){const b=document.querySelector(sel);b.disabled=dis;b.classList.toggle('opacity-50',dis);}
  function disableCont(){btnState('#continueSim',true);}
  function enableCont(){btnState('#continueSim',false);}

  // CONFIRMACIÓN
  document.getElementById('continueSim').addEventListener('click',()=>{
    const monto=parseFloat(document.getElementById('monto').value);
    const fechaFin=calcFecha(selectedPlazo.dias);
    document.getElementById('cMonto').textContent=currency(monto);
    document.getElementById('cPlazo').textContent=selectedPlazo.dias+' días';
    document.getElementById('cGat').textContent=selectedPlazo.gat+'%';
    document.getElementById('cFecha').textContent=fechaFin.toLocaleDateString('es-MX');
  });
  document.getElementById('terms').addEventListener('change',e=>btnState('#confirmBtn',!e.target.checked));

  // CREAR INV
  const inversiones=[];
  function crearInv(){
    goto(4);
    setTimeout(()=>{
      const monto=parseFloat(document.getElementById('monto').value);
      const inv={id:Date.now(),monto,plazo:selectedPlazo.dias,gat:selectedPlazo.gat,fechaFin:calcFecha(selectedPlazo.dias)};
      inversiones.push(inv);
      goto(5);
      renderListado();
    },1500);
  }
  function calcFecha(d){const f=new Date();f.setDate(f.getDate()+d);return f;}

  // LISTADO
  function renderListado(){
    const cont=document.getElementById('listaInv');cont.innerHTML='';
    let total=0;
    inversiones.forEach(inv=>{
      total+=inv.monto;
      const card=document.createElement('button');
      card.className="w-full flex justify-between items-center p-4 bg-neutral-800 rounded-lg hover:bg-neutral-700";
      card.innerHTML=`<div><p class="font-medium">${currency(inv.monto)}</p><p class="text-xs text-neutral-400">${inv.plazo} días • ${inv.gat}%</p></div><i data-lucide="chevron-right" class="w-4 h-4 text-neutral-500"></i>`;
      card.onclick=()=>detalle(inv.id);
      cont.appendChild(card);
    });
    document.getElementById('totalInv').textContent='Total invertido: '+currency(total);
    lucide.createIcons();
  }

  // DETALLE
  let chart;
  function detalle(id){
    const inv=inversiones.find(i=>i.id===id);if(!inv)return;
    document.getElementById('dMonto').textContent=currency(inv.monto);
    document.getElementById('dPlazo').textContent=inv.plazo+' días';
    document.getElementById('dGat').textContent=inv.gat+'%';
    document.getElementById('dFecha').textContent=inv.fechaFin.toLocaleDateString('es-MX');
    goto(8);
    setTimeout(()=>renderChart(inv),300);
  }
  function renderChart(inv){
    const ctx=document.getElementById('progresoChart');if(chart)chart.destroy();
    chart=new Chart(ctx,{type:'doughnut',data:{labels:['Ganado','Capital'],datasets:[{data:[inv.monto*inv.gat/100*(inv.plazo/360),inv.monto],backgroundColor:['#22c55e','#4f46e5'],borderWidth:0}]},options:{plugins:{legend:{display:false}},cutout:'65%'}});
  }

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<main className="w-full max-w-lg mx-auto px-6 py-10 space-y-12">

<section className="space-y-6 animate-entry" id="screen1">
<button className="backBtn hidden focus:outline-none flex items-center gap-2 text-sm text-neutral-400 hover:text-white" onclick="goback()"><i className="w-4 h-4" data-lucide="arrow-left"></i><span className="sr-only">Regresar</span></button>
<h1 className="text-3xl tracking-tight font-semibold">Inversión+</h1>
<p className="text-neutral-400">Invierte parte de tu saldo y genera rendimientos fijo. Elige el plazo que mejor se adapte a tus metas.</p>
<button className="w-full py-3 rounded-md bg-gradient-to-r from-indigo-500 to-purple-600 hover:to-indigo-700 transition-colors" onclick="goto(2)">Comenzar</button>
</section>

<section className="hidden space-y-6 animate-entry" id="screen2">
<button className="backBtn flex items-center gap-2 text-sm text-neutral-400 hover:text-white focus:outline-none" onclick="goback()"><i className="w-4 h-4" data-lucide="arrow-left"></i><span className="sr-only">Regresar</span></button>
<h2 className="text-2xl tracking-tight font-semibold">Elige tu inversión</h2>
<div className="space-y-4">
<label className="block text-sm text-neutral-300">Monto a invertir (MXN)</label>
<input className="w-full py-3 px-4 rounded-md bg-neutral-800 outline-none focus:ring-2 focus:ring-indigo-500" id="monto" min="100" placeholder="0" step="50" type="number"/>
</div>
<div>
<label className="block mb-2 text-sm text-neutral-300">Plazo</label>
<div className="grid grid-cols-2 gap-3" id="plazos">
<button className="plazoBtn py-3 rounded-md bg-neutral-800" data-dias="30" data-gat="10.5">30 días</button>
<button className="plazoBtn py-3 rounded-md bg-neutral-800" data-dias="90" data-gat="12.5">90 días</button>
<button className="plazoBtn py-3 rounded-md bg-neutral-800" data-dias="180" data-gat="10.5">180 días</button>
<button className="plazoBtn py-3 rounded-md bg-neutral-800" data-dias="360" data-gat="8.75">360 días</button>
</div>
</div>
<div className="border border-neutral-800 rounded-lg p-4 space-y-2">
<p className="text-sm text-neutral-400">Rendimiento estimado</p>
<p className="text-2xl font-semibold tracking-tight" id="ganancia">$0.00</p>
<p className="text-sm text-neutral-500">Total al finalizar: <span id="total">$0.00</span></p>
</div>
<button className="w-full py-3 rounded-md bg-indigo-600 opacity-50" disabled="" id="continueSim" onclick="goto(3)">Continuar</button>
</section>

<section className="hidden space-y-6 animate-entry" id="screen3">
<button className="backBtn flex items-center gap-2 text-sm text-neutral-400 hover:text-white focus:outline-none" onclick="goback()"><i className="w-4 h-4" data-lucide="arrow-left"></i><span className="sr-only">Regresar</span></button>
<h2 className="text-2xl tracking-tight font-semibold">Confirma tu inversión</h2>
<div className="space-y-2 text-neutral-300">
<p>Monto: <span className="font-medium text-white" id="cMonto"></span></p>
<p>Plazo: <span className="font-medium text-white" id="cPlazo"></span></p>
<p>GAT Nominal: <span className="font-medium text-white" id="cGat"></span></p>
<p>Fecha de retiro: <span className="font-medium text-white" id="cFecha"></span></p>
</div>
<label className="flex items-start space-x-3">
<input className="mt-1 accent-indigo-600" id="terms" type="checkbox"/>
<span className="text-sm text-neutral-400 select-none">Acepto los <a className="underline hover:text-indigo-400" href="#">términos y condiciones</a></span>
</label>
<button className="w-full py-3 rounded-md bg-indigo-600 opacity-50" disabled="" id="confirmBtn" onclick="crearInv()">Confirmar Inversión</button>
</section>

<section className="hidden flex flex-col items-center justify-center space-y-4 animate-entry" id="screen4">
<button className="backBtn flex items-center gap-2 text-sm text-neutral-400 hover:text-white focus:outline-none" onclick="goback()"><i className="w-4 h-4" data-lucide="arrow-left"></i><span className="sr-only">Regresar</span></button>
<div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
<p>Estamos creando tu Inversión+</p>
</section>

<section className="hidden space-y-6 text-center animate-entry" id="screen5">
<button className="backBtn flex mx-auto items-center gap-2 text-sm text-neutral-400 hover:text-white focus:outline-none" onclick="goback()"><i className="w-4 h-4" data-lucide="arrow-left"></i><span className="sr-only">Regresar</span></button>
<div className="mx-auto w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center">
<i className="w-8 h-8 text-green-400" data-lucide="check"></i>
</div>
<h2 className="text-2xl tracking-tight font-semibold">¡Listo!</h2>
<p className="text-neutral-400">Tu Inversión+ fue creada correctamente.</p>
<button className="w-full py-3 rounded-md bg-gradient-to-r from-indigo-500 to-purple-600 hover:to-indigo-700" onclick="goto(6)">Continuar</button>
</section>

<section className="hidden space-y-6 animate-entry" id="screen6">
<button className="backBtn flex items-center gap-2 text-sm text-neutral-400 hover:text-white focus:outline-none" onclick="goback()"><i className="w-4 h-4" data-lucide="arrow-left"></i><span className="sr-only">Regresar</span></button>
<h2 className="text-2xl tracking-tight font-semibold">Al finalizar tu inversión</h2>
<p className="text-neutral-400">Elige qué quieres que pase con tu dinero</p>
<div className="space-y-4">
<button className="w-full py-3 rounded-md bg-neutral-800 hover:bg-neutral-700">Reinvertir monto + ganancias</button>
<button className="w-full py-3 rounded-md bg-neutral-800 hover:bg-neutral-700">Reinvertir solo el monto</button>
<button className="w-full py-3 rounded-md bg-neutral-800 hover:bg-neutral-700" onclick="goto(7)">Mover todo a Cuenta+</button>
</div>
</section>

<section className="hidden space-y-6 animate-entry" id="screen7">
<button className="backBtn flex items-center gap-2 text-sm text-neutral-400 hover:text-white focus:outline-none" onclick="goback()"><i className="w-4 h-4" data-lucide="arrow-left"></i><span className="sr-only">Regresar</span></button>
<h2 className="text-2xl tracking-tight font-semibold">Mis Inversiones+</h2>
<div className="text-lg font-medium" id="totalInv"></div>
<div className="space-y-4" id="listaInv"></div>
</section>

<section className="hidden space-y-6 animate-entry" id="screen8">
<button className="backBtn flex items-center gap-2 text-sm text-neutral-400 hover:text-white focus:outline-none" onclick="goback()"><i className="w-4 h-4" data-lucide="arrow-left"></i><span className="sr-only">Regresar</span></button>
<h2 className="text-2xl tracking-tight font-semibold">Detalle de la Inversión+</h2>
<div className="space-y-2 text-neutral-300">
<p>Monto: <span className="text-white font-medium" id="dMonto"></span></p>
<p>Plazo: <span className="text-white font-medium" id="dPlazo"></span></p>
<p>GAT Nominal: <span className="text-white font-medium" id="dGat"></span></p>
<p>Fecha de finalización: <span className="text-white font-medium" id="dFecha"></span></p>
</div>
<div className="bg-neutral-800 rounded-lg p-4">
<h3 className="mb-4 font-medium">Progreso</h3>
<canvas id="progresoChart"></canvas>
</div>
</section>
</main>


    </>
  );
}
