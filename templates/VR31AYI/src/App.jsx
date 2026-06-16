import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      display: ['Space Grotesk', 'sans-serif']
    },
    extend: {
      colors: {
        primary: {
          500:'#06b6d4',
          600:'#0891b2',
          700:'#0e7490'
        }
      },
      boxShadow:{
        'inner-strong':'inset 0 0 0 1px rgba(255,255,255,0.1), inset 0 0 0 2px rgba(255,255,255,0.05)'
      }
    }
  }
}



lucide.createIcons();

const formatter = new Intl.NumberFormat('en-US',{notation:'compact',compactDisplay:'short'});
const usd = new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',minimumFractionDigits:2});

const requestsInput = document.getElementById('requests');
const transferInput = document.getElementById('transfer');
const storageInput = document.getElementById('storage');
const cacheInput = document.getElementById('cache');
const requestsLabel = document.getElementById('requestsLabel');
const transferLabel = document.getElementById('transferLabel');
const storageLabel = document.getElementById('storageLabel');

function updateLabels(){
  requestsLabel.textContent = formatter.format(requestsInput.value);
  transferLabel.textContent = transferInput.value + 'GB';
  storageLabel.textContent = storageInput.value + 'GB';
}
updateLabels();

function calc(){
  const requestCostPerK = 0.03;
  const transferCostPerGB = 0.09;
  const storageCostPerGB = 0.05;

  const requestCost = (requestsInput.value / 1000) * requestCostPerK;
  const transferCost = transferInput.value * transferCostPerGB;
  const storageCost = storageInput.value * storageCostPerGB;

  document.getElementById('requestCost').textContent = usd.format(requestCost);
  document.getElementById('transferCost').textContent = usd.format(transferCost);
  document.getElementById('storageCost').textContent = usd.format(storageCost);
  document.getElementById('total').textContent = usd.format(requestCost + transferCost + storageCost);
}
calc();

[requestsInput,transferInput,storageInput,cacheInput].forEach(el=>{
  el.addEventListener('input',()=>{updateLabels();calc();});
});

document.getElementById('resetBtn').addEventListener('click',()=>{
  requestsInput.value=500000;
  transferInput.value=100;
  storageInput.value=50;
  cacheInput.value=24;
  updateLabels();
  calc();
});

document.getElementById('shareBtn').addEventListener('click',async()=>{
  const url=new URL(location.href);
  url.searchParams.set('requests',requestsInput.value);
  url.searchParams.set('transfer',transferInput.value);
  url.searchParams.set('storage',storageInput.value);
  url.searchParams.set('cache',cacheInput.value);
  await navigator.clipboard.writeText(url.toString());
  alert('Pricing quote link copied!');
});

document.querySelectorAll('.tab-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.tab-btn').forEach(b=>{
      b.classList.remove('bg-primary-600','text-white');
      b.classList.add('hover:bg-white/10');
    });
    btn.classList.add('bg-primary-600','text-white');
    btn.classList.remove('hover:bg-white/10');
  });
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<header className="w-full px-8 pt-20 pb-24 relative overflow-hidden">
<div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-transparent via-cyan-900/30 to-transparent"></div>
<div className="relative max-w-6xl mx-auto grid grid-cols-12 gap-8">
<div className="col-span-12 lg:col-span-6 flex flex-col gap-6">
<h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight font-medium">Flexible API<br/>Pricing Made Simple</h1>
<p className="max-w-md text-sm sm:text-base text-white/70">Scale effortlessly with transparent pricing. Pay only for the requests you make and the data you process.</p>
</div>
<div className="col-span-12">
<section className="mx-auto md:-mt-10 bg-white/5 backdrop-blur-md rounded-xl shadow-inner-strong ring-1 ring-white/10 overflow-hidden max-w-3xl" id="calculator">
<div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/10">

<div className="flex-1 p-8 space-y-6">
<div>
<h3 className="text-sm font-medium mb-4">Choose your use case</h3>
<div className="flex gap-2">
<button className="tab-btn text-xs px-3 py-1.5 rounded-md border border-white/10 bg-primary-600 hover:bg-primary-700 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500" data-tab="analytics">Analytics</button>
<button className="tab-btn text-xs px-3 py-1.5 rounded-md border border-white/10 hover:bg-white/10" data-tab="realtime">Real-time</button>
<button className="tab-btn text-xs px-3 py-1.5 rounded-md border border-white/10 hover:bg-white/10" data-tab="batch">Batch</button>
<button className="tab-btn text-xs px-3 py-1.5 rounded-md border border-white/10 hover:bg-white/10" data-tab="enterprise">Enterprise</button>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="text-xs mb-1 block">Processing Power</label>
<input className="w-full bg-transparent text-sm border border-white/10 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600" id="power" min="512" step="256" type="number" value="2048"/>
</div>
<div>
<label className="text-xs mb-1 block">API Endpoints</label>
<input className="w-full bg-transparent text-sm border border-white/10 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600" id="endpoints" min="1" type="number" value="5"/>
</div>
</div>
<div>
<label className="text-xs mb-2 block">Monthly Requests <span className="float-right text-white/60" id="requestsLabel">500k</span></label>
<input id="requests" max="5000000" min="0" step="10000" type="range" value="500000"/>
</div>
<div>
<label className="text-xs mb-2 block">Data Transfer GB <span className="float-right text-white/60" id="transferLabel">100</span></label>
<input id="transfer" max="1000" min="0" step="5" type="range" value="100"/>
</div>
<div>
<label className="text-xs mb-2 block">Storage Required GB <span className="float-right text-white/60" id="storageLabel">50</span></label>
<input id="storage" max="500" min="0" step="5" type="range" value="50"/>
</div>
<div>
<label className="text-xs mb-1 block">Cache Duration</label>
<div className="relative">
<input className="w-full bg-transparent text-sm border border-white/10 rounded-md px-3 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-primary-600" id="cache" min="0" type="number" value="24"/>
<span className="absolute inset-y-0 right-3 flex items-center text-xs text-white/40">hours</span>
</div>
</div>
</div>

<div className="w-full md:max-w-xs shrink-0 p-8 space-y-6">
<div className="flex items-center justify-between text-xs">
<button className="flex items-center gap-1 hover:text-primary-500" id="resetBtn">
<i className="w-3.5 h-3.5" data-lucide="rotate-ccw"></i> Reset
              </button>
<button className="flex items-center gap-1 hover:text-primary-500" id="shareBtn">
<i className="w-3.5 h-3.5" data-lucide="share"></i> Share Quote
              </button>
</div>
<div>
<label className="text-xs mb-1 block">Deployment Region</label>
<div className="relative">
<select className="w-full pr-10" id="region">
<option>US East</option>
<option>EU West</option>
<option>Asia Pacific</option>
</select>
<i className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-white/50" data-lucide="chevron-down"></i>
</div>
</div>
<div className="text-xs space-y-1">
<div className="flex justify-between">
<span className="text-white/60">Setup fee</span>
<span className="text-white" id="setupFee">$29.00</span>
</div>
<div className="flex justify-between">
<span className="text-white/40 pl-3">Initial configuration</span>
<span className="text-white/60">$29.00</span>
</div>
</div>
<div className="text-xs space-y-1">
<h4 className="font-medium text-white/70 mb-2">Monthly breakdown</h4>
<div className="flex justify-between">
<span className="text-white/60">API requests</span>
<span className="text-white" id="requestCost">$15.00</span>
</div>
<div className="flex justify-between">
<span className="text-white/60">Data transfer</span>
<span className="text-white" id="transferCost">$9.00</span>
</div>
<div className="flex justify-between">
<span className="text-white/60">Storage</span>
<span className="text-white" id="storageCost">$2.50</span>
</div>
</div>
<div className="flex items-end justify-between pt-4">
<div className="text-white/60 text-sm">Monthly</div>
<div className="text-4xl font-display" id="total">$26.50</div>
</div>
<button className="w-full bg-primary-600 hover:bg-primary-700 focus-visible:ring-2 focus-visible:ring-primary-500 rounded-md py-2 text-sm font-medium transition-colors" id="cta">Start Building</button>
</div>
</div>
</section>
</div>
</div>
</header>
<footer className="mt-auto bg-[#0f172a] pt-16 pb-20 px-8">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-3">
<div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="zap"></i>
</div>
<span className="font-medium">CloudFlow API</span>
</div>
<nav className="flex flex-wrap gap-6 text-sm text-white/70">
<a className="hover:text-white" href="#">Documentation</a>
<a className="hover:text-white" href="#">Updates</a>
<a className="hover:text-white" href="#">Examples</a>
<a className="hover:text-white" href="#">Pricing</a>
<a className="hover:text-white" href="#">Contact</a>
</nav>
</div>
</footer>


    </>
  );
}
