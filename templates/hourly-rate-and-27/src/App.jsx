import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



lucide.createIcons();

// Calculator logic
const incomeEl = document.getElementById('income');
const expensesEl = document.getElementById('expenses');
const hoursEl   = document.getElementById('hours');
const weeksOffEl= document.getElementById('weeksOff');
const rateDisplay = document.getElementById('rateDisplay');
const calcBtn = document.getElementById('calcBtn');

let doughnut;

function calcRate(){
  const income = +incomeEl.value||0;
  const expenses = +expensesEl.value||0;
  const hours = +hoursEl.value||0;
  const weeksOff = +weeksOffEl.value||0;
  const yearlyHours = hours * (52 - weeksOff);
  const rate = yearlyHours? ((income + expenses) / yearlyHours):0;
  rateDisplay.textContent = '$' + rate.toFixed(2);

  const ctx = document.getElementById('rateChart').getContext('2d');
  if(doughnut) doughnut.destroy();
  doughnut = new Chart(ctx,{
    type:'doughnut',
    data:{
      labels:['Net Income','Expenses'],
      datasets:[{data:[income,expenses],backgroundColor:['#14b8a6','#6366f1'],
        borderWidth:0}]
    },
    options:{plugins:{legend:{labels:{color:'#cbd5e1'}}}}
  });
}
calcBtn.addEventListener('click',calcRate);
window.addEventListener('load',calcRate);

// Package logic
const pkgForm = document.getElementById('packageForm');
const pkgName = document.getElementById('pkgName');
const pkgDesc = document.getElementById('pkgDesc');
const pkgHours= document.getElementById('pkgHours');
const pkgPrice= document.getElementById('pkgPrice');
const pkgList = document.getElementById('packageList');
const shareLink= document.getElementById('shareLink');
const copyBtn = document.getElementById('copyBtn');
const clearBtn = document.getElementById('clearBtn');

function savePackages(pkgs){localStorage.setItem('packages',JSON.stringify(pkgs))}
function getPackages(){return JSON.parse(localStorage.getItem('packages')||'[]')}

function renderPackages(){
  const pkgs = getPackages();
  pkgList.innerHTML='';
  pkgs.forEach((p,i)=>{
    const div=document.createElement('div');
    div.className='p-6 rounded-xl bg-white/5 border border-white/10 relative';
    div.innerHTML=`
      <h4 class="font-medium text-white">${p.name}</h4>
      <p class="text-slate-400 text-sm mt-1">${p.desc}</p>
      <div class="flex items-center gap-4 mt-4">
        <span class="text-xs bg-black/30 rounded-full px-3 py-1">${p.hours||'-'} hrs</span>
        <span class="text-xs bg-black/30 rounded-full px-3 py-1">$${p.price}</span>
        <button data-index="${i}" class="ml-auto hover:text-rose-400" title="Remove">
          <i data-lucide="x" class="w-4 h-4"></i>
        </button>
      </div>`;
    pkgList.appendChild(div);
  });
  lucide.createIcons();
  updateShareLink();
}
function updateShareLink(){
  const pkgs = getPackages();
  if(!pkgs.length){shareLink.value='Build a package to generate link';return;}
  const data=btoa(encodeURIComponent(JSON.stringify(pkgs)));
  shareLink.value=location.origin+location.pathname+'?p='+data;
}
pkgForm.addEventListener('submit',e=>{
  e.preventDefault();
  const pkgs=getPackages();
  pkgs.push({name:pkgName.value,desc:pkgDesc.value,hours:pkgHours.value,price:pkgPrice.value});
  savePackages(pkgs);
  pkgForm.reset();
  renderPackages();
});
pkgList.addEventListener('click',e=>{
  if(e.target.closest('button')){
    const i=e.target.closest('button').dataset.index;
    const pkgs=getPackages();
    pkgs.splice(i,1);
    savePackages(pkgs);
    renderPackages();
  }
});
copyBtn.addEventListener('click',()=>{
  shareLink.select();
  document.execCommand('copy');
  copyBtn.classList.add('bg-teal-700');
  setTimeout(()=>copyBtn.classList.remove('bg-teal-700'),500);
});
clearBtn.addEventListener('click',()=>{
  if(confirm('Clear all saved packages?')){
    localStorage.removeItem('packages');
    renderPackages();
  }
});
renderPackages();

// If link contains ?p=
const params=new URLSearchParams(location.search);
if(params.get('p')){
  try{
    const pkgs=JSON.parse(decodeURIComponent(atob(params.get('p'))));
    savePackages(pkgs);
    renderPackages();
    alert('Packages imported!');
  }catch{}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed inset-x-0 top-0 z-20 backdrop-blur border-b border-white/5">
<div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
<h1 className="text-lg lg:text-xl font-semibold tracking-tight text-white animate-fadeIn" style={{animation: 'fadeIn .8s ease-out .1s forwards'}}>Rate &amp; Package Builder</h1>
<nav className="flex gap-6 text-sm">
<a className="hover:text-teal-400 transition" href="#calc">Calculator</a>
<a className="hover:text-teal-400 transition" href="#packages">Packages</a>
<a className="hover:text-teal-400 transition" href="#share">Share</a>
<button className="flex items-center gap-1 hover:text-rose-400 transition" id="clearBtn" title="Clear local packages">
<i className="w-4 h-4" data-lucide="trash-2"></i><span className="hidden sm:inline">Reset</span>
</button>
</nav>
</div>
</header>
<main className="pt-20 pb-32">

<section className="max-w-6xl mx-auto px-4 mb-24">
<div className="grid md:grid-cols-2 gap-16">
<div className="flex flex-col justify-center" style={{animation: 'slideIn 1s ease-out .2s forwards', opacity: '0'}}>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4">Find your sweet spot.</h2>
<p className="text-slate-400 mb-6">Confidently price your time, assemble irresistible design packages and share them with clients—all in one place.</p>
<a className="inline-flex items-center gap-2 bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 px-6 py-3 rounded-xl border border-teal-500/30 transition" href="#calc">
<i className="w-5 h-5" data-lucide="calculator"></i> Get Started
      </a>
</div>
<div className="relative">
<img alt="Workspace" className="rounded-3xl shadow-2xl opacity-90 object-cover h-96 w-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-transparent via-transparent to-teal-500/10 pointer-events-none"></div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-4 mb-24" id="calc">
<h3 className="text-2xl font-semibold tracking-tight text-white mb-8">Hourly Rate Calculator</h3>
<div className="grid lg:grid-cols-3 gap-12">

<div className="lg:col-span-2 space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<label className="block">
<span className="text-sm text-slate-400">Desired Net Income (Yearly, $)</span>
<input className="block w-full bg-white/5 rounded-lg mt-1 px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500" id="income" type="number" value="90000"/>
</label>
<label className="block">
<span className="text-sm text-slate-400">Yearly Business Expenses ($)</span>
<input className="block w-full bg-white/5 rounded-lg mt-1 px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500" id="expenses" type="number" value="12000"/>
</label>
<label className="block">
<span className="text-sm text-slate-400">Billable Hours / Week</span>
<input className="block w-full bg-white/5 rounded-lg mt-1 px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500" id="hours" type="number" value="25"/>
</label>
<label className="block">
<span className="text-sm text-slate-400">Weeks Off / Year</span>
<input className="block w-full bg-white/5 rounded-lg mt-1 px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500" id="weeksOff" type="number" value="4"/>
</label>
</div>
<button className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-medium px-5 py-3 rounded-lg transition" id="calcBtn">
<i className="w-5 h-5" data-lucide="play-circle"></i> Calculate
      </button>
</div>

<div className="space-y-6">
<div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur" style={{animation: 'fadeIn 1s ease-out .4s forwards', opacity: '0'}}>
<p className="text-sm text-slate-400">Estimated Hourly Rate</p>
<p className="text-4xl font-semibold tracking-tight text-teal-400 mt-2" id="rateDisplay">$0.00</p>
</div>
<div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
<p className="text-sm text-slate-400 mb-4">Income Allocation</p>
<div className="relative">
<canvas height="200" id="rateChart" width="200"></canvas>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-4 mb-24" id="packages">
<h3 className="text-2xl font-semibold tracking-tight text-white mb-8">Packages</h3>

<div className="grid md:grid-cols-2 gap-12">
<div>
<form className="space-y-6" id="packageForm">
<label className="block">
<span className="text-sm text-slate-400">Package Name</span>
<input className="block w-full bg-white/5 rounded-lg mt-1 px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500" id="pkgName" placeholder="e.g. UI Audit" required=""/>
</label>
<label className="block">
<span className="text-sm text-slate-400">Description</span>
<textarea className="block w-full bg-white/5 rounded-lg mt-1 px-4 py-3 h-28 outline-none focus:ring-2 focus:ring-teal-500" id="pkgDesc" placeholder="Short details..." required=""></textarea>
</label>
<div className="grid grid-cols-2 gap-6">
<label className="block">
<span className="text-sm text-slate-400">Estimated Hours</span>
<input className="block w-full bg-white/5 rounded-lg mt-1 px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500" id="pkgHours" placeholder="12" type="number"/>
</label>
<label className="block">
<span className="text-sm text-slate-400">Price ($)</span>
<input className="block w-full bg-white/5 rounded-lg mt-1 px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500" id="pkgPrice" placeholder="1500" required="" type="number"/>
</label>
</div>
<button className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-5 py-3 rounded-lg transition">
<i className="w-5 h-5" data-lucide="plus"></i> Add Package
        </button>
</form>
</div>

<div>
<div className="space-y-6" id="packageList"></div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-4" id="share">
<h3 className="text-2xl font-semibold tracking-tight text-white mb-8">Share with Clients</h3>
<div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div className="flex-1">
<p className="text-sm text-slate-400 mb-2">Public Link</p>
<input className="w-full bg-black/20 rounded-lg px-4 py-3 text-slate-300 outline-none select-all" id="shareLink" readonly="" value="Build a package to generate link"/>
</div>
<button className="flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white px-5 py-3 rounded-lg transition" id="copyBtn">
<i className="w-5 h-5" data-lucide="copy"></i> Copy
    </button>
</div>
</section>
</main>



    </>
  );
}
