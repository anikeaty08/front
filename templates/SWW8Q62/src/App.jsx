import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    lucide.createIcons();
    const screens = Array.from(document.querySelectorAll('[data-screen]'));
    const backBtn = document.getElementById('backBtn');
    let historyStack = [];

    function showScreen(id) {
      screens.forEach(s => s.classList.toggle('hidden', s.dataset.screen !== id));
      document.querySelectorAll('[data-screen]:not(.hidden) [data-lucide]').forEach(i => lucide.createIcons({icons: {[i.getAttribute('data-lucide')]: lucide.icons[i.getAttribute('data-lucide')]} , attrs: {class: i.getAttribute('class')}}));
      backBtn.classList.toggle('hidden', historyStack.length === 0);
      document.getElementById('headerTitle').textContent = {'intro':'Inversión+','simulator':'Simulador','confirm':'Confirmar','loader':'','success':'Éxito','after':'Al finalizar','list':'Inversiones','detail':'Detalle'}[id]||'';
    }

    function navigate(next) {
      const current = screens.find(s=>!s.classList.contains('hidden')).dataset.screen;
      historyStack.push(current);
      showScreen(next);
    }
    backBtn.onclick = () => {
      const prev = historyStack.pop();
      showScreen(prev);
    };

    document.querySelectorAll('[data-next]').forEach(btn=>btn.onclick=()=>navigate(btn.closest('[data-screen]').dataset.screen==='success'?'after':btn.closest('[data-screen]').dataset.screen==='intro'?'simulator':btn.closest('[data-screen]').dataset.screen==='after'?'list':'confirm'));

    // Simulator logic
    const rates={30:10.5,90:12.5,180:10.5,360:8.75};
    let simData={amount:0,days:0,gain:0};

    const amountInput=document.getElementById('amountInput');
    const termBtns=document.querySelectorAll('.term-btn');
    const gainOutput=document.getElementById('gainOutput');
    const maturityOutput=document.getElementById('maturityOutput');
    const contBtn=document.querySelector('[data-screen="simulator"] [data-next]');

    amountInput.oninput=calc;
    termBtns.forEach(b=>b.onclick=()=>{termBtns.forEach(x=>x.classList.remove('bg-emerald-500','text-slate-900'));b.classList.add('bg-emerald-500','text-slate-900');simData.days=+b.dataset.days;calc();});

    function calc(){
      simData.amount=parseFloat(amountInput.value)||0;
      if(simData.amount && simData.days){
        const gat=rates[simData.days]; // anual
        simData.gain=simData.amount*(gat/100)*(simData.days/360);
        gainOutput.textContent='$'+simData.gain.toFixed(2);
        const mat=new Date();mat.setDate(mat.getDate()+simData.days);
        maturityOutput.textContent='Fecha de retiro: '+mat.toLocaleDateString('es-MX');
        contBtn.disabled=false;
      }else{
        gainOutput.textContent='$0.00';
        maturityOutput.textContent='';
        contBtn.disabled=true;
      }
    }

    // Confirm screen populate
    const cAmount=document.getElementById('cAmount');
    const cDays=document.getElementById('cDays');
    const cGat=document.getElementById('cGat');
    const cDate=document.getElementById('cDate');
    const confirmBtn=document.getElementById('confirmBtn');
    const termsChk=document.getElementById('termsChk');
    contBtn.onclick=()=>{
      navigate('confirm');
      cAmount.textContent='$'+simData.amount.toFixed(2);
      cDays.textContent=simData.days+' días';
      cGat.textContent=rates[simData.days]+'%';
      const mat=new Date();mat.setDate(mat.getDate()+simData.days);
      cDate.textContent=mat.toLocaleDateString('es-MX');
      confirmBtn.disabled=!termsChk.checked;
    };
    termsChk.onchange=()=>confirmBtn.disabled=!termsChk.checked;

    // Loader & Success & investments storage
    let investments=[];
    confirmBtn.onclick=()=>{
      navigate('loader');
      setTimeout(()=>{
        // store investment
        const mat=new Date();mat.setDate(mat.getDate()+simData.days);
        investments.push({...simData,mat:mat});
        navigate('success');
      },2000);
    };

    // After save
    const afterSaveBtn=document.getElementById('afterSaveBtn');
    document.querySelectorAll('.optionCard').forEach(card=>{
      card.onclick=()=>{
        document.querySelectorAll('.optionCard').forEach(c=>c.classList.remove('ring-2','ring-emerald-500'));
        card.classList.add('ring-2','ring-emerald-500');
        card.querySelector('.radio').checked=true;
        afterSaveBtn.disabled=false;
      };
    });
    afterSaveBtn.onclick=()=>{
      navigate('list');
      loadList();
    };

    // Load list
    function loadList(){
      const list=document.getElementById('invList');
      list.innerHTML='';
      let total=0;
      investments.forEach((inv,i)=>{
        total+=inv.amount;
        const daysLeft=Math.max(0,Math.ceil((inv.mat-new Date())/86400000));
        const pct=100*(1-daysLeft/inv.days);
        const id='chart'+i;
        list.insertAdjacentHTML('beforeend',`
          <div class="bg-slate-800 p-4 rounded-lg flex flex-col gap-3 cursor-pointer hover:bg-slate-700 transition" data-index="${i}">
            <div class="flex justify-between text-sm"><span>Monto</span><span>$${inv.amount.toFixed(2)}</span></div>
            <div class="flex justify-between text-sm"><span>Días restantes</span><span>${daysLeft}</span></div>
            <div class="flex items-center gap-3">
              <div class="relative w-24 h-2 bg-slate-700 rounded">
                <div style="width:${pct}%" class="h-2 bg-emerald-500 rounded"></div>
              </div>
              <span class="text-xs">${Math.round(pct)}%</span>
            </div>
            <div class="text-xs text-slate-500">Termina: ${inv.mat.toLocaleDateString('es-MX')}</div>
          </div>
        `);
      });
      document.getElementById('totalInv').textContent='$'+total.toFixed(2);

      list.querySelectorAll('[data-index]').forEach(card=>{
        card.onclick=()=>{showDetail(card.dataset.index);};
      });
    }

    function showDetail(i){
      const inv=investments[i];
      document.getElementById('dAmount').textContent='$'+inv.amount.toFixed(2);
      document.getElementById('dDays').textContent=inv.days+' días';
      document.getElementById('dGat').textContent=rates[inv.days]+'%';
      document.getElementById('dMat').textContent=inv.mat.toLocaleDateString('es-MX');
      document.getElementById('dGain').textContent='$'+inv.gain.toFixed(2);
      navigate('detail');
    }

    // Fade-in animation
    const style=document.createElement('style');
    style.textContent='@keyframes fadeIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}';
    document.head.appendChild(style);

    // Init
    showScreen('intro');
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative w-[360px] h-[760px] overflow-hidden bg-slate-900 rounded-xl shadow-2xl" id="app">

<header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-4 h-14">
<h1 className="text-lg font-semibold tracking-tight" id="headerTitle">Inversión+</h1>
<button className="p-2 rounded-lg hover:bg-slate-800 hidden" id="backBtn">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
</button>
</header>

<main className="pt-14 h-full overflow-y-auto snap-y snap-mandatory">

<section className="snap-start h-full flex flex-col items-center text-center gap-6 px-6 pt-16 animate-[fadeIn_0.8s_ease-out]" data-screen="intro">
<img alt="" className="w-40 h-40 rounded-full object-cover shadow-lg opacity-90" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<h2 className="text-2xl font-semibold tracking-tight">Conoce Inversión+</h2>
<ul className="text-sm text-slate-300 space-y-3">
<li className="flex items-start gap-2"><i className="w-5 h-5 text-emerald-400" data-lucide="shield-check"></i> Tu dinero está protegido</li>
<li className="flex items-start gap-2"><i className="w-5 h-5 text-emerald-400" data-lucide="clock"></i> Elige plazos de 30, 90, 180 o 360 días</li>
<li className="flex items-start gap-2"><i className="w-5 h-5 text-emerald-400" data-lucide="lock"></i> No podrás retirarlo hasta finalizar el plazo</li>
</ul>
<button className="mt-auto mb-8 w-full py-3 bg-emerald-500 rounded-lg font-medium hover:bg-emerald-400 transition" data-next="">Empezar</button>
</section>

<section className="hidden snap-start h-full flex flex-col gap-6 px-6 pt-8" data-screen="simulator">
<h2 className="text-xl font-semibold tracking-tight">Ingresa tu inversión</h2>
<label className="text-sm text-slate-400">Monto a invertir (MXN)</label>
<input className="w-full py-3 px-4 rounded-lg bg-slate-800 text-2xl font-semibold text-right tracking-tight focus:outline-none focus:ring-2 focus:ring-emerald-500" id="amountInput" inputmode="decimal" placeholder="0" type="number"/>
<label className="text-sm text-slate-400 mt-4">Plazo</label>
<div className="grid grid-cols-4 gap-2" id="termBtns">
<button className="term-btn py-2 rounded-lg bg-slate-800 hover:bg-slate-700 focus:bg-emerald-500 transition" data-days="30">30d</button>
<button className="term-btn py-2 rounded-lg bg-slate-800 hover:bg-slate-700 focus:bg-emerald-500 transition" data-days="90">90d</button>
<button className="term-btn py-2 rounded-lg bg-slate-800 hover:bg-slate-700 focus:bg-emerald-500 transition" data-days="180">180d</button>
<button className="term-btn py-2 rounded-lg bg-slate-800 hover:bg-slate-700 focus:bg-emerald-500 transition" data-days="360">360d</button>
</div>
<div className="bg-slate-800 p-4 rounded-lg mt-8 flex flex-col gap-2">
<p className="text-sm text-slate-400">Ganancia estimada</p>
<p className="text-2xl font-semibold tracking-tight" id="gainOutput">$0.00</p>
<p className="text-xs text-slate-500" id="maturityOutput"></p>
</div>
<button className="mt-auto mb-8 w-full py-3 bg-emerald-500 rounded-lg font-medium hover:bg-emerald-400 transition disabled:bg-slate-700 disabled:text-slate-500" data-next="" disabled="">Continuar</button>
</section>

<section className="hidden snap-start h-full flex flex-col gap-6 px-6 pt-8" data-screen="confirm">
<h2 className="text-xl font-semibold tracking-tight">Confirma tu Inversión+</h2>
<div className="bg-slate-800 p-4 rounded-lg flex flex-col gap-3">
<div className="flex justify-between text-sm">
<span>Monto a invertir</span><span className="font-semibold" id="cAmount">$0</span>
</div>
<div className="flex justify-between text-sm">
<span>Plazo</span><span className="font-semibold" id="cDays">-</span>
</div>
<div className="flex justify-between text-sm">
<span>GAT Nominal</span><span className="font-semibold" id="cGat">-</span>
</div>
<div className="flex justify-between text-sm">
<span>Fecha de retiro</span><span className="font-semibold" id="cDate">-</span>
</div>
</div>
<label className="inline-flex items-center gap-2 select-none">
<input className="w-4 h-4 accent-emerald-500 rounded" id="termsChk" type="checkbox"/>
<span className="text-xs">Acepto los términos y condiciones</span>
</label>
<button className="mt-auto mb-8 w-full py-3 bg-emerald-500 rounded-lg font-medium hover:bg-emerald-400 transition disabled:bg-slate-700 disabled:text-slate-500" disabled="" id="confirmBtn">Confirmar</button>
</section>

<section className="hidden snap-start h-full flex flex-col items-center justify-center gap-6" data-screen="loader">
<div className="animate-spin rounded-full border-4 border-slate-700 border-t-emerald-500 w-12 h-12"></div>
<p className="text-sm">Creando tu Inversión...</p>
</section>

<section className="hidden snap-start h-full flex flex-col items-center justify-center gap-6 animate-[fadeIn_0.8s_ease-out]" data-screen="success">
<i className="w-16 h-16 text-emerald-500" data-lucide="check-circle"></i>
<h2 className="text-xl font-semibold tracking-tight">¡Listo!</h2>
<p className="text-sm text-center px-8">Tu Inversión+ se creó correctamente</p>
<button className="w-40 py-3 bg-emerald-500 rounded-lg font-medium hover:bg-emerald-400 transition mt-4" data-next="">Continuar</button>
</section>

<section className="hidden snap-start h-full flex flex-col gap-6 px-6 pt-8" data-screen="after">
<h2 className="text-xl font-semibold tracking-tight">Al finalizar tu Inversión+</h2>
<div className="flex flex-col gap-4">
<label className="optionCard flex items-center gap-3 bg-slate-800 rounded-lg p-4 cursor-pointer hover:bg-slate-700 transition">
<input className="radio hidden" name="afterOpt" type="radio" value="all"/>
<i className="w-5 h-5" data-lucide="refresh-ccw"></i>
<span className="text-sm">Reinvertir monto + ganancias</span>
</label>
<label className="optionCard flex items-center gap-3 bg-slate-800 rounded-lg p-4 cursor-pointer hover:bg-slate-700 transition">
<input className="radio hidden" name="afterOpt" type="radio" value="principal"/>
<i className="w-5 h-5" data-lucide="repeat"></i>
<span className="text-sm">Reinvertir solo el monto</span>
</label>
<label className="optionCard flex items-center gap-3 bg-slate-800 rounded-lg p-4 cursor-pointer hover:bg-slate-700 transition">
<input className="radio hidden" name="afterOpt" type="radio" value="none"/>
<i className="w-5 h-5" data-lucide="log-out"></i>
<span className="text-sm">Enviar todo a Stori Cuenta+</span>
</label>
</div>
<button className="mt-auto mb-8 w-full py-3 bg-emerald-500 rounded-lg font-medium hover:bg-emerald-400 transition disabled:bg-slate-700 disabled:text-slate-500" disabled="" id="afterSaveBtn">Guardar</button>
</section>

<section className="hidden snap-start h-full flex flex-col gap-6 px-6 pt-8" data-screen="list">
<h2 className="text-xl font-semibold tracking-tight">Mis Inversiones</h2>
<div className="text-sm">Total invertido: <span className="font-semibold" id="totalInv">$0</span></div>
<div className="flex flex-col gap-4 mt-2" id="invList"></div>
</section>

<section className="hidden snap-start h-full flex flex-col gap-6 px-6 pt-8" data-screen="detail">
<h2 className="text-xl font-semibold tracking-tight">Detalle Inversión</h2>
<div className="bg-slate-800 p-4 rounded-lg flex flex-col gap-3">
<div className="flex justify-between text-sm"><span>Monto invertido</span><span className="font-semibold" id="dAmount">$0</span></div>
<div className="flex justify-between text-sm"><span>Plazo</span><span className="font-semibold" id="dDays">-</span></div>
<div className="flex justify-between text-sm"><span>GAT Nominal</span><span className="font-semibold" id="dGat">-</span></div>
<div className="flex justify-between text-sm"><span>Fecha de finalización</span><span className="font-semibold" id="dMat">-</span></div>
<div className="flex justify-between text-sm"><span>Ganancia estimada</span><span className="font-semibold" id="dGain">-</span></div>
</div>
</section>
</main>
</div>



    </>
  );
}
