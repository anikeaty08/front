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



const screens = document.querySelectorAll('[data-screen]');
const gatRates = {30:10.5,90:12.5,180:10.5,360:8.75};
let state={invs:[],sim:{amount:5000,days:30,gat:gatRates[30],gain:0},selectedIdx:null};

function go(n){screens.forEach(s=>s.classList.toggle('hidden',s.dataset.screen!=n));lucide.createIcons();}
function updateSim(){
 const amount=+document.getElementById('amountRange').value;
 const days=+document.getElementById('plazoSelect').value;
 const gat=gatRates[days];
 const gain=+(amount*gat/100*days/360).toFixed(2);
 state.sim={amount,days,gat,gain,fecha:calcDate(days)};
 document.getElementById('amountLabel').innerText=amount.toLocaleString();
 document.getElementById('gananciaTxt').innerText=`$${gain.toLocaleString()}`;
 document.getElementById('gatTxt').innerText=`${gat}%`;
}
function calcDate(days){
 const d=new Date();d.setDate(d.getDate()+days);
 return d.toLocaleDateString('es-MX',{day:'2-digit',month:'short',year:'numeric'});
}
function nextFromSim(){
 updateConfirm();
 go(3);
}
function updateConfirm(){
 const {amount,days,gat,fecha}=state.sim;
 document.getElementById('confMonto').innerText=`$${amount.toLocaleString()}`;
 document.getElementById('confPlazo').innerText=`${days} días`;
 document.getElementById('confGat').innerText=`${gat}%`;
 document.getElementById('confFecha').innerText=fecha;
}
function toggleConfirmBtn(){
 document.getElementById('confirmBtn').disabled=!document.getElementById('termsChk').checked;
 document.getElementById('confirmBtn').classList.toggle('bg-indigo-600/50',!document.getElementById('termsChk').checked);
}
function createInvestment(){
 go(4);
 setTimeout(()=>{state.invs.push({...state.sim,start:new Date()});renderList();go(5);},2000);
}
function renderList(){
 const list=document.getElementById('investList');list.innerHTML='';
 let total=0;
 state.invs.forEach((inv,idx)=>{
   total+=inv.amount;
   const daysLeft=Math.max(0,Math.ceil((new Date(inv.start).getTime()+inv.days*864e5-Date.now())/864e5));
   const perc=((inv.days-daysLeft)/inv.days*100).toFixed(1);
   const item=document.createElement('div');
   item.className='bg-neutral-800 border border-neutral-700 rounded-lg p-4 flex justify-between items-center cursor-pointer hover:border-indigo-600 transition';
   item.onclick=()=>showDetail(idx);
   item.innerHTML=`
     <div>
       <p class="text-sm font-medium">$${inv.amount.toLocaleString()}</p>
       <p class="text-xs text-neutral-400">${daysLeft} días restantes</p>
       <p class="text-xs text-neutral-600">${inv.fecha}</p>
     </div>
     <div class="w-16 h-16"><canvas id="chart${idx}"></canvas></div>`;
   list.appendChild(item);
   setTimeout(()=>makeCircle(`chart${idx}`,perc),0);
 });
 document.getElementById('totalInv').innerText=`$${total.toLocaleString()}`;
}
function makeCircle(id,perc){
 new Chart(document.getElementById(id),{
   type:'doughnut',
   data:{datasets:[{data:[perc,100-perc],backgroundColor:['#6366f1','#1f2937'],borderWidth:0}]},
   options:{cutout:'70%',plugins:{tooltip:{enabled:false},legend:{display:false}}}
 });
}
function showDetail(idx){
 state.selectedIdx=idx;
 const inv=state.invs[idx];
 const daysLeft=Math.max(0,Math.ceil((new Date(inv.start).getTime()+inv.days*864e5-Date.now())/864e5));
 document.getElementById('detMonto').innerText=`$${inv.amount.toLocaleString()}`;
 document.getElementById('detPlazo').innerText=`${inv.days} días`;
 document.getElementById('detGat').innerText=`${inv.gat}%`;
 document.getElementById('detFecha').innerText=inv.fecha;
 document.getElementById('detRestantes').innerText=`${daysLeft} días`;
 setTimeout(()=>makeCircle('detailChart',((inv.days-daysLeft)/inv.days*100).toFixed(1)),0);
 go(8);
}
function resetToIntro(){document.getElementById('termsChk').checked=false;toggleConfirmBtn();go(1);}
updateSim();go(1);lucide.createIcons();

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
      

<div className="w-[360px] h-[760px] bg-neutral-900 text-white rounded-2xl overflow-hidden shadow-xl relative" id="app">

<section className="w-full h-full flex flex-col justify-between p-6 space-y-4" data-screen="1">
<div className="space-y-4">
<img alt="Safe money" className="rounded-lg object-cover w-full h-40 shadow-md transition duration-300 hover:brightness-110" src="https://source.unsplash.com/360x200/?safe,lock"/>
<h1 className="text-2xl tracking-tight font-semibold">Bienvenido a Inversión+</h1>
<ul className="list-disc list-inside text-sm space-y-1 text-neutral-300">
<li>Tu dinero está protegido</li>
<li>No podrás retirarlo hasta finalizar el plazo</li>
<li>Plazos disponibles y rendimientos:</li>
<li className="ml-4">30 días → 10.50 % GAT Nominal</li>
<li className="ml-4">90 días → 12.50 %</li>
<li className="ml-4">180 días → 10.50 %</li>
<li className="ml-4">360 días → 8.75 %</li>
</ul>
</div>
<button className="w-full py-3 bg-indigo-600 rounded-lg font-medium transition hover:bg-indigo-500" onclick="go(2)">Comenzar</button>
</section>

<section className="hidden w-full h-full flex flex-col p-6 justify-between" data-screen="2">
<div className="space-y-5">
<h2 className="text-xl tracking-tight font-semibold">Define tu inversión</h2>
<div>
<label className="text-sm text-neutral-400">Monto: <span id="amountLabel"></span> MXN</label>
<input className="w-full accent-indigo-600" id="amountRange" max="50000" min="500" oninput="updateSim()" step="500" type="range" value="5000"/>
</div>
<div>
<label className="text-sm text-neutral-400">Plazo (días)</label>
<select className="w-full mt-1 bg-neutral-800 border border-neutral-700 rounded-lg py-2 px-3 focus:outline-none" id="plazoSelect" onchange="updateSim()">
<option value="30">30</option>
<option value="90">90</option>
<option value="180">180</option>
<option value="360">360</option>
</select>
</div>
<div className="bg-neutral-800 border border-neutral-700 rounded-lg p-4 flex justify-between items-center">
<div>
<p className="text-xs text-neutral-400">Ganarías</p>
<p className="text-lg font-semibold" id="gananciaTxt"></p>
</div>
<div>
<p className="text-xs text-neutral-400">GAT Nominal</p>
<p className="text-lg font-semibold" id="gatTxt"></p>
</div>
</div>
</div>
<button className="w-full py-3 bg-indigo-600 rounded-lg font-medium transition hover:bg-indigo-500" onclick="nextFromSim()">Continuar</button>
</section>

<section className="hidden w-full h-full flex flex-col p-6 justify-between" data-screen="3">
<div className="space-y-5">
<h2 className="text-xl tracking-tight font-semibold">Confirma tu Inversión+</h2>
<div className="space-y-2 bg-neutral-800 border border-neutral-700 rounded-lg p-4">
<div className="flex justify-between text-sm"><span>Monto</span><span id="confMonto"></span></div>
<div className="flex justify-between text-sm"><span>Plazo</span><span id="confPlazo"></span></div>
<div className="flex justify-between text-sm"><span>GAT Nominal</span><span id="confGat"></span></div>
<div className="flex justify-between text-sm"><span>Fecha retiro</span><span id="confFecha"></span></div>
</div>
<label className="flex items-start space-x-3 select-none cursor-pointer">
<input className="accent-indigo-600 mt-1" id="termsChk" onchange="toggleConfirmBtn()" type="checkbox"/>
<span className="text-xs text-neutral-300">Acepto los términos y condiciones</span>
</label>
</div>
<button className="w-full py-3 bg-indigo-600/50 rounded-lg font-medium transition disabled:cursor-not-allowed" disabled="" id="confirmBtn" onclick="createInvestment()">Invertir ahora</button>
</section>

<section className="hidden w-full h-full flex flex-col items-center justify-center space-y-4 p-6" data-screen="4">
<div className="w-14 h-14 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
<p className="text-sm text-neutral-400 text-center">Estamos creando tu Inversión…</p>
</section>

<section className="hidden w-full h-full flex flex-col items-center justify-between p-6" data-screen="5">
<div className="flex flex-col items-center space-y-4 mt-24">
<i className="w-16 h-16 text-green-500" data-lucide="check-circle"></i>
<h2 className="text-2xl tracking-tight font-semibold text-center">¡Inversión creada!</h2>
<p className="text-sm text-neutral-400 text-center">Tu dinero ya está generando rendimientos.</p>
</div>
<button className="w-full py-3 bg-indigo-600 rounded-lg font-medium transition hover:bg-indigo-500" onclick="go(6)">Continuar</button>
</section>

<section className="hidden w-full h-full flex flex-col p-6 space-y-6" data-screen="6">
<h2 className="text-xl tracking-tight font-semibold">Al finalizar tu inversión</h2>
<div className="space-y-3" id="actionRadios">
<label className="flex items-center space-x-3 bg-neutral-800 p-3 rounded-lg border border-neutral-700 cursor-pointer">
<input className="accent-indigo-600" name="afterAction" type="radio" value="all"/>
<span className="text-sm">Reinvertir monto + ganancias</span>
</label>
<label className="flex items-center space-x-3 bg-neutral-800 p-3 rounded-lg border border-neutral-700 cursor-pointer">
<input className="accent-indigo-600" name="afterAction" type="radio" value="capital"/>
<span className="text-sm">Reinvertir solo el monto</span>
</label>
<label className="flex items-center space-x-3 bg-neutral-800 p-3 rounded-lg border border-neutral-700 cursor-pointer">
<input className="accent-indigo-600" name="afterAction" type="radio" value="none"/>
<span className="text-sm">Mover todo a Stori Cuenta+</span>
</label>
</div>
<button className="mt-auto w-full py-3 bg-indigo-600 rounded-lg font-medium transition hover:bg-indigo-500" onclick="go(7)">Guardar</button>
</section>

<section className="hidden w-full h-full flex flex-col p-6 space-y-4" data-screen="7">
<h2 className="text-xl tracking-tight font-semibold">Mis Inversiones</h2>
<div className="space-y-3 overflow-y-auto flex-1 pr-2" id="investList"></div>
<div className="pt-2 border-t border-neutral-700">
<div className="flex justify-between text-sm mb-3"><span>Total invertido</span><span id="totalInv"></span></div>
<button className="w-full py-3 bg-indigo-600 rounded-lg font-medium transition hover:bg-indigo-500" onclick="resetToIntro()">Nueva Inversión</button>
</div>
</section>

<section className="hidden w-full h-full flex flex-col p-6 space-y-4" data-screen="8">
<button className="flex items-center space-x-1 text-sm text-neutral-400 hover:text-white transition" onclick="go(7)">
<i className="w-4 h-4" data-lucide="chevron-left"></i><span>Volver</span>
</button>
<h2 className="text-xl tracking-tight font-semibold">Detalle de Inversión</h2>
<div className="bg-neutral-800 border border-neutral-700 rounded-lg p-4 space-y-2">
<div className="flex justify-between text-sm"><span>Monto invertido</span><span id="detMonto"></span></div>
<div className="flex justify-between text-sm"><span>Plazo</span><span id="detPlazo"></span></div>
<div className="flex justify-between text-sm"><span>GAT Nominal</span><span id="detGat"></span></div>
<div className="flex justify-between text-sm"><span>Fecha finalización</span><span id="detFecha"></span></div>
<div className="flex justify-between text-sm"><span>Días restantes</span><span id="detRestantes"></span></div>
</div>
<div className="flex justify-center mt-4">
<div className="w-32 h-32"><canvas id="detailChart"></canvas></div>
</div>
</section>
</div>


    </>
  );
}
