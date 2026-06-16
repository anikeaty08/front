import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    lucide.createIcons();

    /* Copy link */
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(refLink.value).then(() => {
        copyMsg.classList.remove('hidden');
        setTimeout(() => copyMsg.classList.add('hidden'), 1800);
      });
    });

    /* Chart */
    new Chart(document.getElementById('refChart').getContext('2d'), {
      type: 'line',
      data: {
        labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
        datasets: [{
          data: [5, 9, 7, 14, 12, 17, 11],
          tension:.4,
          borderColor:'#6366F1',
          backgroundColor:'rgba(99,102,241,.12)',
          fill:true,
          pointRadius:4,
          pointBackgroundColor:'#6366F1'
        }]
      },
      options:{
        plugins:{legend:{display:false}},
        scales:{
          y:{grid:{color:'#f3f4f6'},ticks:{stepSize:5,color:'#6b7280'}},
          x:{grid:{display:false},ticks:{color:'#6b7280'}}
        }
      }
    });

    /* Staggered load */
    window.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('[data-animate]').forEach((el,i)=>{
        setTimeout(()=>{el.classList.remove('opacity-0','translate-y-4');},i*80+200);
      });
    });

    /* Tabs */
    document.querySelectorAll('.tab-btn').forEach(btn=>{
      btn.addEventListener('click',()=>{
        const target = btn.dataset.tab;

        /* update buttons */
        document.querySelectorAll('.tab-btn').forEach(b=>{
          const active = b.dataset.tab===target;
          b.setAttribute('aria-selected',active);
          b.dataset.active=active;
        });

        /* update panels */
        document.querySelectorAll('[data-panel]').forEach(p=>{
          const show = p.dataset.panel===target;
          p.hidden=!show;
          if(show){
            p.classList.remove('opacity-0','translate-y-4');
            /* refresh icons in newly shown content */
            lucide.createIcons();
          }
        });
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen flex flex-col">

<header className="bg-white shadow-sm">
<div className="max-w-7xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
<h1 className="text-2xl font-semibold tracking-tight flex items-center gap-2 opacity-0 translate-y-4 transition-all duration-700" data-animate="">
<svg className="w-6 h-6 stroke-gray-900" data-lucide="users"></svg>
          Referral Program
        </h1>
<button aria-label="Support" className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium hover:bg-gray-100 transition opacity-0 translate-y-4" data-animate="">
<svg className="w-5 h-5 stroke-gray-900" data-lucide="life-buoy"></svg>
</button>
</div>
</header>

<main className="flex-1">
<div className="max-w-7xl mx-auto px-6 sm:px-8 py-10">

<nav aria-label="Referral tabs" className="mb-8 flex gap-4 border-b border-gray-200" role="tablist">
<button aria-controls="overviewPanel" aria-selected="true" className="tab-btn py-2 px-1 text-sm font-medium border-b-2 border-transparent data-[active=true]:border-indigo-600 data-[active=true]:text-indigo-600 transition" data-active="true" data-tab="overview" role="tab">
            Overview
          </button>
<button aria-controls="leaderboardPanel" aria-selected="false" className="tab-btn py-2 px-1 text-sm font-medium border-b-2 border-transparent data-[active=true]:border-indigo-600 data-[active=true]:text-indigo-600 transition" data-tab="leaderboard" role="tab">
            Leaderboard
          </button>
<button aria-controls="settingsPanel" aria-selected="false" className="tab-btn py-2 px-1 text-sm font-medium border-b-2 border-transparent data-[active=true]:border-indigo-600 data-[active=true]:text-indigo-600 transition" data-tab="settings" role="tab">
            Settings
          </button>
</nav>

<div>

<section className="grid gap-10" data-panel="overview" id="overviewPanel" role="tabpanel">

<div className="grid sm:grid-cols-3 gap-6">
<div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 opacity-0 translate-y-4 transition-all duration-700" data-animate="">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded-md bg-indigo-50">
<svg className="w-5 h-5 stroke-indigo-600" data-lucide="gift"></svg>
</div>
<span className="text-sm font-medium text-gray-500">Rewards Earned</span>
</div>
<p className="text-3xl font-semibold tracking-tight">$2,560</p>
</div>
<div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 opacity-0 translate-y-4 transition-all duration-700" data-animate="" style={{transitionDelay: '120ms'}}>
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded-md bg-emerald-50">
<svg className="w-5 h-5 stroke-emerald-600" data-lucide="user-plus"></svg>
</div>
<span className="text-sm font-medium text-gray-500">Total Referrals</span>
</div>
<p className="text-3xl font-semibold tracking-tight">187</p>
</div>
<div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 opacity-0 translate-y-4 transition-all duration-700" data-animate="" style={{transitionDelay: '240ms'}}>
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded-md bg-yellow-50">
<svg className="w-5 h-5 stroke-yellow-600" data-lucide="activity"></svg>
</div>
<span className="text-sm font-medium text-gray-500">Conversion Rate</span>
</div>
<p className="text-3xl font-semibold tracking-tight">32.4%</p>
</div>
</div>

<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex flex-col sm:flex-row sm:items-center gap-4 opacity-0 translate-y-4 transition-all duration-700" data-animate="">
<div className="flex-1 w-full">
<label className="sr-only" htmlFor="refLink">Referral link</label>
<input className="w-full text-sm border border-gray-300 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" id="refLink" readonly="" value="https://example.com/?ref=YOURCODE"/>
</div>
<button aria-live="polite" className="flex items-center gap-2 bg-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-indigo-700 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600" id="copyBtn">
<svg className="w-4 h-4 stroke-white" data-lucide="copy"></svg>
                Copy
              </button>
<span className="text-sm text-emerald-600 font-medium hidden" id="copyMsg">Copied!</span>
</div>

<div className="grid lg:grid-cols-3 gap-6">

<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 lg:col-span-2 opacity-0 translate-y-4 transition-all duration-700" data-animate="">
<h2 className="text-lg font-semibold tracking-tight mb-4">Weekly Referrals</h2>
<div>
<div>
<canvas height="140" id="refChart"></canvas>
</div>
</div>
</div>

<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 opacity-0 translate-y-4 transition-all duration-700" data-animate="" style={{transitionDelay: '120ms'}}>
<h2 className="text-lg font-semibold tracking-tight mb-4">Recent Sign-ups</h2>
<ul className="divide-y divide-gray-200">
<li className="py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Olivia Rhye" className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<span className="text-sm">Olivia Rhye</span>
</div>
<span className="text-xs text-gray-500">2h ago</span>
</li>
<li className="py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="James Lee" className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<span className="text-sm">James Lee</span>
</div>
<span className="text-xs text-gray-500">5h ago</span>
</li>
<li className="py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Eleanor Pena" className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<span className="text-sm">Eleanor Pena</span>
</div>
<span className="text-xs text-gray-500">1d ago</span>
</li>
<li className="py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Devon Lane" className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<span className="text-sm">Devon Lane</span>
</div>
<span className="text-xs text-gray-500">2d ago</span>
</li>
</ul>
</div>
</div>
</section>

<section className="opacity-0 translate-y-4 transition-all duration-700" data-animate="" data-panel="leaderboard" hidden="" id="leaderboardPanel" role="tabpanel">
<h2 className="text-xl font-semibold tracking-tight mb-6">Top Referrers</h2>
<div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-x-auto">
<table className="min-w-full text-sm">
<thead className="bg-gray-50">
<tr>
<th className="py-3 px-4 text-left font-medium text-gray-500">User</th>
<th className="py-3 px-4 text-left font-medium text-gray-500">Referrals</th>
<th className="py-3 px-4 text-left font-medium text-gray-500">Reward</th>
<th className="py-3 px-4 text-left font-medium text-gray-500">Progress</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-200">

<tr>
<td className="py-4 px-4 flex items-center gap-3">
<img alt="Courtney Henry" className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1552058544-f2b08422138a?w=1080&amp;q=80"/>
                      Courtney Henry
                    </td>
<td className="py-4 px-4">42</td>
<td className="py-4 px-4">$640</td>
<td className="py-4 px-4">
<div className="w-40 h-2 bg-gray-100 rounded">
<div className="bg-indigo-600 h-2 rounded" style={{width: '78%'}}></div>
</div>
</td>
</tr>
<tr>
<td className="py-4 px-4 flex items-center gap-3">
<img alt="Albert Flores" className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=1080&amp;q=80"/>
                      Albert Flores
                    </td>
<td className="py-4 px-4">37</td>
<td className="py-4 px-4">$565</td>
<td className="py-4 px-4">
<div className="w-40 h-2 bg-gray-100 rounded">
<div className="bg-emerald-600 h-2 rounded" style={{width: '69%'}}></div>
</div>
</td>
</tr>
<tr>
<td className="py-4 px-4 flex items-center gap-3">
<img alt="Kathryn Murphy" className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=1080&amp;q=80"/>
                      Kathryn Murphy
                    </td>
<td className="py-4 px-4">29</td>
<td className="py-4 px-4">$440</td>
<td className="py-4 px-4">
<div className="w-40 h-2 bg-gray-100 rounded">
<div className="bg-amber-500 h-2 rounded" style={{width: '55%'}}></div>
</div>
</td>
</tr>
<tr>
<td className="py-4 px-4 flex items-center gap-3">
<img alt="Devon Lane" className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=1080&amp;q=80"/>
                      Devon Lane
                    </td>
<td className="py-4 px-4">23</td>
<td className="py-4 px-4">$350</td>
<td className="py-4 px-4">
<div className="w-40 h-2 bg-gray-100 rounded">
<div className="bg-fuchsia-600 h-2 rounded" style={{width: '44%'}}></div>
</div>
</td>
</tr>
<tr>
<td className="py-4 px-4 flex items-center gap-3">
<img alt="Eleanor Pena" className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1080&amp;q=80"/>
                      Eleanor Pena
                    </td>
<td className="py-4 px-4">19</td>
<td className="py-4 px-4">$290</td>
<td className="py-4 px-4">
<div className="w-40 h-2 bg-gray-100 rounded">
<div className="bg-sky-600 h-2 rounded" style={{width: '36%'}}></div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</section>

<section className="opacity-0 translate-y-4 transition-all duration-700" data-animate="" data-panel="settings" hidden="" id="settingsPanel" role="tabpanel">
<h2 className="text-xl font-semibold tracking-tight mb-6">Settings</h2>

<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
<div className="flex items-center">
<input className="peer sr-only" id="notifyToggle" type="checkbox"/>
<label className="block w-10 h-6 rounded-full bg-gray-300 peer-checked:bg-indigo-600 relative cursor-pointer transition" htmlFor="notifyToggle">
<span className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow peer-checked:translate-x-4 transition"></span>
</label>
<span className="ml-3 text-sm">Email me weekly summary</span>
</div>
</div>

<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
<label className="block text-sm font-medium mb-2" htmlFor="payout">Preferred payout method</label>
<select className="w-full text-sm border border-gray-300 rounded-md py-2 px-3 bg-white hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" id="payout">
<option>PayPal</option>
<option>Bank transfer</option>
<option>Crypto (USDC)</option>
</select>
</div>
</section>
</div>
</div>
</main>

<footer className="text-center text-xs text-gray-500 py-6 opacity-0 translate-y-4 transition-all duration-700" data-animate="">
      © 2024 Your Company. All rights reserved.
    </footer>
</div>



    </>
  );
}
