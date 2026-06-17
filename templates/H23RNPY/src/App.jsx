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
      
lucide.createIcons();

/* ─── State ─────────────────────────────────────────────────────────── */
let current = 1;
const rates = {30:10.5, 90:12.5, 180:10.5, 360:8.75};
const investments = [];
let invest = {amount:0, days:0, gat:0, gain:0, end:''};

/* ─── Navigation helpers ─────────────────────────────────────────────── */
function goTo(n){
  document.getElementById('step'+current).classList.add('hidden');
  current = n;
  const section = document.getElementById('step'+current);
  section.classList.remove('hidden');
  section.scrollIntoView({behavior:'smooth'});
  if(current===7) renderList();
  if(current===8) renderChart();
}

function nextStep(){
  if(current===4){ // loader delay
    setTimeout(()=>goTo(current+1),1800);
  }else{
    goTo(current+1);
  }
}

/* ─── Simulation logic ──────────────────────────────────────────────── */
function selectTerm(btn){
  document.querySelectorAll('.term-btn').forEach(b=>b.classList.remove('border-indigo-600','bg-indigo-50'));
  btn.classList.add('border-indigo-600','bg-indigo-50');
  document.getElementById('continue2').disabled=false;
  invest.days = +btn.dataset.days;
  invest.gat = rates[invest.days];
  simulate();
}

function simulate(){
  const amount = +document.getElementById('amount').value;
  if(!amount || !invest.days) return;
  const gain = +(amount * (invest.gat/100) * (invest.days/360)).toFixed(2);
  invest.amount = amount;
  invest.gain = gain;
  document.getElementById('simBox').classList.remove('hidden');
  document.getElementById('gain').innerText = '$'+gain.toLocaleString();
  document.getElementById('rateLabel').innerText = 'GAT Nominal: '+invest.gat+'%';
}

function toggleConfirm(){
  document.getElementById('confirmBtn').disabled=!document.getElementById('terms').checked;
}

/* ─── List & Detail rendering ───────────────────────────────────────── */
function renderList(){
  const container = document.getElementById('listContainer');
  container.innerHTML='';
  let total=0;
  investments.forEach((inv,i)=>{
    total+=inv.amount;
    const row=document.createElement('div');
    row.className='p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50';
    row.innerHTML=`<div><p class="font-medium">$${inv.amount.toLocaleString()}</p><p class="text-xs text-gray-500">${inv.days} días • ${inv.gat}%</p></div><i data-lucide="chevron-right" class="w-4 h-4 text-gray-400"></i>`;
    row.onclick=()=>openDetail(i);
    container.appendChild(row);
  });
  lucide.createIcons();
  document.getElementById('totalInv').innerText='$'+total.toLocaleString();
}

let chart;
function renderChart(){
  // placeholder chart until an item is selected
  if(chart){chart.destroy();chart=null;}
  const ctx=document.getElementById('chart');
  if(ctx){
    chart=new Chart(ctx,{type:'line',data:{labels:['','','','',''],datasets:[{data:[0,0,0,0,0],borderColor:'#4f46e5',fill:false}]},options:{plugins:{legend:{display:false}},scales:{y:{display:false},x:{display:false}},responsive:true,maintainAspectRatio:false}});
  }
}
function openDetail(i){
  const inv=investments[i];
  goTo(8);
  document.getElementById('detMonto').innerText='$'+inv.amount.toLocaleString();
  document.getElementById('detPlazo').innerText=inv.days+' días';
  document.getElementById('detGAT').innerText=inv.gat+'%';
  document.getElementById('detFecha').innerText=new Date(inv.end).toLocaleDateString('es-MX');

  if(chart) chart.destroy();
  const dates=[], data=[];
  const start=new Date();
  for(let d=0; d<=inv.days; d+=Math.round(inv.days/5)){
    const date=new Date(start.getTime()+d*864e5);
    dates.push(date.toLocaleDateString('es-MX',{month:'short',day:'numeric'}));
    data.push((inv.amount*(1+inv.gat/100*d/360)).toFixed(2));
  }
  chart=new Chart(document.getElementById('chart'),{
    type:'line',
    data:{labels:dates,datasets:[{data,borderColor:'#4f46e5',backgroundColor:'rgba(99,102,241,.1)',fill:true,tension:.4}]},
    options:{plugins:{legend:{display:false}},scales:{y:{display:false},x:{display:false}},responsive:true,maintainAspectRatio:false}
  });
}

/* ─── Event bindings (replaces inline handlers) ──────────────────────── */
document.getElementById('startBtn').addEventListener('click',nextStep);
document.getElementById('continue2').addEventListener('click',()=>{
  const endDate=new Date(Date.now()+ invest.days*864e5);
  invest.end=endDate;
  document.getElementById('sumMonto').innerText='$'+invest.amount.toLocaleString();
  document.getElementById('sumPlazo').innerText=invest.days+' días';
  document.getElementById('sumGAT').innerText=invest.gat+'%';
  document.getElementById('sumDate').innerText=endDate.toLocaleDateString('es-MX');
  nextStep();
});
document.getElementById('confirmBtn').addEventListener('click',()=>{
  investments.push({...invest});
  nextStep(); // to loader
});
document.getElementById('toAfter').addEventListener('click',nextStep);
document.getElementById('afterBtn').addEventListener('click',nextStep);
document.getElementById('backToList').addEventListener('click',()=>goTo(7));
document.querySelectorAll('.optionCard').forEach(card=>{
  card.addEventListener('click',()=>{
    document.querySelectorAll('.optionCard').forEach(c=>c.classList.remove('border-indigo-600','bg-indigo-50'));
    card.classList.add('border-indigo-600','bg-indigo-50');
    card.querySelector('input').checked=true;
    document.getElementById('afterBtn').disabled=false;
  });
});

/* ─── Basic placeholder chart for first load ─────────────────────────── */
renderChart();

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
      

<div className="max-w-md mx-auto p-6 space-y-8" id="app">

<section className="space-y-6 animate-fade-in-down" id="step1">
<header className="space-y-2">
<h1 className="text-3xl font-semibold tracking-tight">Descubre Inversión+</h1>
<p className="text-gray-600">Haz crecer tu dinero a plazos fijos con rendimientos superiores.</p>
</header>
<ul className="space-y-3">
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-indigo-600" data-lucide="shield-check"></i>
<span>Plazos flexibles de 30 a 360 días.</span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-indigo-600" data-lucide="wallet"></i>
<span>Retiros automáticos al finalizar el plazo.</span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-indigo-600" data-lucide="line-chart"></i>
<span>Rendimientos hasta 12.50% GAT Nominal Anual.</span>
</li>
</ul>
<button aria-label="Comenzar" className="w-full py-3 rounded-lg bg-indigo-600 text-white font-medium transition-transform hover:bg-indigo-700 active:scale-95 shadow-md" id="startBtn">
    Comenzar
  </button>
</section>

<section className="hidden space-y-6 animate-fade-in-down" id="step2">
<header className="space-y-1">
<h2 className="text-2xl font-semibold tracking-tight">Configura tu inversión</h2>
<p className="text-gray-600">Elige el monto y plazo para estimar tus ganancias.</p>
</header>
<div className="space-y-4">
<label className="block">
<span className="text-sm font-medium">Monto a invertir (MXN)</span>
<input className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" id="amount" min="100" oninput="simulate()" placeholder="0" step="100" type="number"/>
</label>
<div>
<span className="text-sm font-medium">Plazo</span>
<div className="grid grid-cols-2 gap-3 mt-2">
<button className="term-btn py-2 rounded-lg border border-gray-300 font-medium" data-days="30" onclick="selectTerm(this)">30 días</button>
<button className="term-btn py-2 rounded-lg border border-gray-300 font-medium" data-days="90" onclick="selectTerm(this)">90 días</button>
<button className="term-btn py-2 rounded-lg border border-gray-300 font-medium" data-days="180" onclick="selectTerm(this)">180 días</button>
<button className="term-btn py-2 rounded-lg border border-gray-300 font-medium" data-days="360" onclick="selectTerm(this)">360 días</button>
</div>
</div>
<div className="hidden rounded-lg bg-indigo-50 p-4" id="simBox">
<h3 className="text-lg font-semibold tracking-tight">Tu ganancia estimada:</h3>
<p className="text-2xl font-semibold text-indigo-700" id="gain">—</p>
<p className="text-sm text-gray-600" id="rateLabel">GAT Nominal: —</p>
</div>
</div>
<button className="w-full py-3 rounded-lg bg-indigo-400 text-white font-medium transition" disabled="" id="continue2">Continuar</button>
</section>

<section className="hidden space-y-6 animate-fade-in-down" id="step3">
<header className="space-y-1">
<h2 className="text-2xl font-semibold tracking-tight">Confirma tu inversión</h2>
</header>
<div className="space-y-2 rounded-lg border border-gray-200 p-4">
<div className="flex justify-between"><span>Monto</span><span className="font-medium" id="sumMonto"></span></div>
<div className="flex justify-between"><span>Plazo</span><span className="font-medium" id="sumPlazo"></span></div>
<div className="flex justify-between"><span>GAT Nominal</span><span className="font-medium" id="sumGAT"></span></div>
<div className="flex justify-between"><span>Fecha de retiro</span><span className="font-medium" id="sumDate"></span></div>
</div>
<label className="flex items-start gap-3">
<input className="w-5 h-5 accent-indigo-600" id="terms" onchange="toggleConfirm()" type="checkbox"/>
<span>Acepto los <a className="text-indigo-600 underline" href="#">términos y condiciones</a>.</span>
</label>
<button className="w-full py-3 rounded-lg bg-indigo-400 text-white font-medium transition" disabled="" id="confirmBtn">Confirmar inversión</button>
</section>

<section className="hidden flex flex-col items-center justify-center h-[60vh] space-y-6 animate-fade-in-down" id="step4">
<div className="relative">
<div className="w-16 h-16 border-4 border-indigo-300 rounded-full animate-spin"></div>
<i className="absolute inset-0 m-auto w-10 h-10 text-indigo-600" data-lucide="loader-2"></i>
</div>
<p className="text-lg font-medium">Estamos creando tu Inversión…</p>
</section>

<section className="hidden space-y-8 text-center animate-fade-in-down" id="step5">
<div className="flex items-center justify-center">
<div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
<i className="w-10 h-10 text-green-500" data-lucide="check"></i>
</div>
</div>
<h2 className="text-2xl font-semibold tracking-tight">¡Inversión creada!</h2>
<p>Te avisaremos cuando tu inversión llegue a su fecha de vencimiento.</p>
<button className="w-full py-3 rounded-lg bg-indigo-600 text-white font-medium transition hover:bg-indigo-700" id="toAfter">Continuar</button>
</section>

<section className="hidden space-y-6 animate-fade-in-down" id="step6">
<header className="space-y-1">
<h2 className="text-2xl font-semibold tracking-tight">Al finalizar tu inversión</h2>
<p className="text-gray-600">Elige qué quieres hacer con tu dinero.</p>
</header>
<div className="space-y-3">
<label className="optionCard flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:border-indigo-500">
<input className="radioHidden" name="after" type="radio" value="all"/>
<span>Reinvertir monto + ganancias</span>
</label>
<label className="optionCard flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:border-indigo-500">
<input className="radioHidden" name="after" type="radio" value="principal"/>
<span>Reinvertir solo el monto invertido</span>
</label>
<label className="optionCard flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:border-indigo-500">
<input className="radioHidden" name="after" type="radio" value="none"/>
<span>Mover todo a Stori Cuenta+</span>
</label>
</div>
<button className="w-full py-3 rounded-lg bg-indigo-400 text-white font-medium transition" disabled="" id="afterBtn">Guardar preferencia</button>
</section>

<section className="hidden space-y-6 animate-fade-in-down" id="step7">
<header className="space-y-1">
<h2 className="text-2xl font-semibold tracking-tight">Tus inversiones</h2>
<p className="text-gray-600">Resumen general</p>
</header>
<div className="flex justify-between items-end">
<span className="text-sm text-gray-500">Total invertido</span>
<span className="text-2xl font-semibold text-indigo-700" id="totalInv">$0</span>
</div>
<div className="divide-y border rounded-lg">
<div id="listContainer"></div>
</div>
</section>

<section className="hidden space-y-6 animate-fade-in-down" id="step8">
<button className="flex items-center gap-2 text-sm text-indigo-600 hover:underline" id="backToList">
<i className="w-4 h-4" data-lucide="chevron-left"></i> Volver a listado
  </button>
<h2 className="text-2xl font-semibold tracking-tight">Detalle de Inversión</h2>
<div className="space-y-2 rounded-lg border border-gray-200 p-4">
<div className="flex justify-between"><span>Monto</span><span className="font-medium" id="detMonto"></span></div>
<div className="flex justify-between"><span>Plazo</span><span className="font-medium" id="detPlazo"></span></div>
<div className="flex justify-between"><span>GAT Nominal</span><span className="font-medium" id="detGAT"></span></div>
<div className="flex justify-between"><span>Fecha de finalización</span><span className="font-medium" id="detFecha"></span></div>
</div>
<div className="relative">
<canvas height="200" id="chart"></canvas>
</div>
</section>
</div>


<style>
@keyframes fade-in-down{0%{opacity:0;transform:translateY(-10px)}100%{opacity:1;transform:translateY(0)}}
.animate-fade-in-down{animation:fade-in-down .4s ease-out both}
.radioHidden{appearance:none;width:1.2rem;height:1.2rem;border:2px solid #c7d2fe;border-radius:9999px;position:relative}
.radioHidden:checked{border-color:#4f46e5;background-color:#4f46e5}
.radioHidden:checked::after{content:'';position:absolute;inset:3px;border-radius:9999px;background:#fff}
</style>

    </>
  );
}
