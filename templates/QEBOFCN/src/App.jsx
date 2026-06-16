import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Init icons
      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({
          attrs: {
            stroke: 'currentColor',
            'stroke-width': 1.5,
          },
        });
      });

      // Tabs
      const tabButtons = document.querySelectorAll('.tab-btn');
      const sections = {
        overview: document.getElementById('section-overview'),
        holdings: document.getElementById('section-holdings'),
        accounts: document.getElementById('section-accounts'),
        plans: document.getElementById('section-plans'),
      };
      const mobileActionBar = document.getElementById('mobileActionBar');

      function setActiveTab(tab) {
        Object.values(sections).forEach(s => s.classList.add('hidden'));
        sections[tab].classList.remove('hidden');
        if (mobileActionBar) {
          if (tab === 'holdings') {
            mobileActionBar.classList.remove('hidden');
          } else {
            mobileActionBar.classList.add('hidden');
          }
        }
        lucide.createIcons({ attrs: { stroke: 'currentColor', 'stroke-width': 1.5 } });
      }

      tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          tabButtons.forEach(b => {
            b.classList.remove('bg-neutral-100');
            b.style.color = '';
          });
          btn.classList.add('bg-neutral-100');
          btn.style.color = '#0A6EE7';
          setActiveTab(btn.dataset.tab);
        });
      });

      // Chart: Allocation
      const allocCtx = document.getElementById('allocChart');
      if (allocCtx) {
        const data = {
          labels: ['Thai Stock', 'Global Stock', 'Fixed Income', 'Mutual Fund', 'Structured', 'Derivatives'],
          datasets: [{
            data: [35, 22, 18, 12, 8, 5],
            backgroundColor: ['#0A6EE7', '#60A5FA', '#93C5FD', '#1E293B', '#EB6101', '#CBD5E1'],
            borderWidth: 0,
          }],
        };
        new Chart(allocCtx, {
          type: 'doughnut',
          data,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '62%',
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: '#0f172a',
                padding: 10,
                titleColor: '#fff',
                bodyColor: '#fff',
                cornerRadius: 8,
              },
            },
          },
        });
      }

      // Quick chips filter
      const chipButtons = document.querySelectorAll('.chip-asset');
      const holdingsList = document.getElementById('holdingsList');
      const holdingCards = () => Array.from(document.querySelectorAll('.holding-card'));
      chipButtons.forEach(chip => {
        chip.addEventListener('click', () => {
          chipButtons.forEach(c => c.classList.remove('bg-neutral-100'));
          chip.classList.add('bg-neutral-100');
          const t = chip.dataset.asset;
          holdingCards().forEach(card => {
            if (t === 'all' || card.dataset.type === t) {
              card.classList.remove('hidden');
            } else {
              card.classList.add('hidden');
            }
          });
        });
      });

      // Search + Filters + Sort
      const searchInput = document.getElementById('searchInput');
      const filterAsset = document.getElementById('filterAsset');
      const filterAccount = document.getElementById('filterAccount');
      const sortBy = document.getElementById('sortBy');
      const resetFilters = document.getElementById('resetFilters');

      function applyListFilters() {
        const q = (searchInput?.value || '').toLowerCase().trim();
        const a = filterAsset?.value || 'all';
        const acc = filterAccount?.value || 'all';

        holdingCards().forEach(card => {
          const text = card.textContent.toLowerCase();
          const matchQ = q === '' || text.includes(q);
          const matchA = a === 'all' || card.dataset.type === a;
          const matchAcc = acc === 'all' || card.dataset.account === acc;
          card.classList.toggle('hidden', !(matchQ && matchA && matchAcc));
        });

        // Sorting
        const cards = holdingCards().filter(c => !c.classList.contains('hidden'));
        const parent = holdingsList;
        cards.sort((x, y) => {
          const vx = Number(x.dataset.value || 0);
          const vy = Number(y.dataset.value || 0);
          const px = Number(x.dataset.pl || 0);
          const py = Number(y.dataset.pl || 0);
          switch (sortBy?.value) {
            case 'value_desc': return vy - vx;
            case 'value_asc': return vx - vy;
            case 'pl_desc': return py - px;
            case 'pl_asc': return px - py;
            default: return 0;
          }
        });
        cards.forEach(c => parent.appendChild(c));
      }

      [searchInput, filterAsset, filterAccount, sortBy].forEach(el => {
        el && el.addEventListener('input', applyListFilters);
        el && el.addEventListener('change', applyListFilters);
      });

      resetFilters && resetFilters.addEventListener('click', () => {
        if (filterAsset) filterAsset.value = 'all';
        if (filterAccount) filterAccount.value = 'all';
        if (sortBy) sortBy.value = 'value_desc';
        if (searchInput) searchInput.value = '';
        applyListFilters();
      });

      // Drawer controls
      const filterDrawer = document.getElementById('filterDrawer');
      const openFilter = document.getElementById('openFilter');
      const fabFilter = document.getElementById('fabFilter');
      const closeDrawer = document.getElementById('closeDrawer');
      const closeDrawerBtn = document.getElementById('closeDrawerBtn');
      const applyFilters = document.getElementById('applyFilters');
      const clearFilters = document.getElementById('clearFilters');

      function toggleDrawer(show) {
        if (show) {
          filterDrawer.classList.remove('hidden');
        } else {
          filterDrawer.classList.add('hidden');
        }
      }
      ;[openFilter, fabFilter].forEach(btn => btn && btn.addEventListener('click', () => toggleDrawer(true)));
      ;[closeDrawer, closeDrawerBtn].forEach(btn => btn && btn.addEventListener('click', () => toggleDrawer(false)));

      // Drawer filter state
      const assetChecks = Array.from(document.querySelectorAll('.filter-asset-type'));
      const accountChecks = Array.from(document.querySelectorAll('.filter-account'));

      applyFilters && applyFilters.addEventListener('click', () => {
        const selectedAssets = assetChecks.filter(c => c.checked).map(c => c.value);
        const selectedAccounts = accountChecks.filter(c => c.checked).map(c => c.value);

        holdingCards().forEach(card => {
          const byAsset = selectedAssets.length === 0 || selectedAssets.includes(card.dataset.type);
          const byAcc = selectedAccounts.length === 0 || selectedAccounts.includes(card.dataset.account);
          const q = (searchInput?.value || '').toLowerCase().trim();
          const text = card.textContent.toLowerCase();
          const matchQ = q === '' || text.includes(q);
          card.classList.toggle('hidden', !(byAsset && byAcc && matchQ));
        });

        toggleDrawer(false);
      });

      clearFilters && clearFilters.addEventListener('click', () => {
        assetChecks.forEach(c => c.checked = false);
        accountChecks.forEach(c => c.checked = false);
        applyListFilters();
      });

      // Ensure initial state: Overview active, mobile bar hidden
      applyListFilters();
      setActiveTab('overview');
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="mx-auto w-full max-w-6xl">

<header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8">
<div className="flex h-16 items-center gap-6">

<a className="shrink-0 inline-flex items-center gap-2" href="#">
<img alt="Yuanta Securities logo" className="h-8 w-auto" src="https://www.yuanta.co.th/cms/uploads/Logo_aa5fd5a665.svg"/>
</a>

<nav className="hidden md:flex items-center gap-4 mx-auto text-sm">
<a className="px-2 py-1 rounded-md text-slate-600 hover:text-slate-900" href="#">Main Page</a>
<a className="px-2 py-1 rounded-md text-slate-600 hover:text-slate-900" href="#">Feed</a>
<a className="px-2 py-1 rounded-md text-slate-600 hover:text-slate-900" href="#">Markets</a>
<a className="px-2 py-1 rounded-md font-semibold text-blue-600 bg-blue-50" href="#">Asset</a>
<a className="px-2 py-1 rounded-md text-slate-600 hover:text-slate-900" href="#">Wallet</a>
</nav>

<nav className="hidden md:flex items-center gap-2">
<button aria-label="Search" className="grid place-items-center rounded-lg transition-colors text-blue-600 hover:bg-slate-50 h-9 w-9">
<svg className="lucide lucide-search w-[18px] h-[18px]" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<button aria-label="Messages" className="grid place-items-center rounded-lg transition-colors text-blue-600 hover:bg-slate-50 h-9 w-9">
<svg className="lucide lucide-message-square w-[18px] h-[18px]" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</button>
<button aria-label="Notifications" className="grid place-items-center rounded-lg transition-colors text-blue-600 hover:bg-slate-50 h-9 w-9">
<svg className="lucide lucide-bell w-[18px] h-[18px]" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>
<button aria-label="Profile" className="grid place-items-center rounded-lg transition-colors text-blue-600 hover:bg-slate-50 h-9 w-9">
<svg fill="none" height="18" stroke="currentColor" strokeWidth="12" viewbox="0 0 256 256" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="128" cy="128" r="96"></circle>
<circle cx="128" cy="108" r="28"></circle>
<path d="M64 200a64 64 0 0 1 128 0" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</nav>
</div>
</div>
</header>


<div className="pt-2 pb-2 px-2 sm:px-6">
<div className="mx-2 flex items-center gap-1 rounded-lg border border-neutral-200 bg-white p-1.5 overflow-x-auto">
<button className="tab-btn flex-1 min-w-[96px] whitespace-nowrap text-[13px] transition-all font-medium bg-neutral-100 rounded-md pt-2 pr-3 pb-2 pl-3" data-tab="overview" style={{color: 'rgb(10, 110, 231)'}}>Overview</button>
<button className="tab-btn flex-1 min-w-[96px] whitespace-nowrap text-[13px] transition-all hover:bg-neutral-50 font-medium rounded-md pt-2 pr-3 pb-2 pl-3" data-tab="holdings" style={{}}>Holdings</button>
<button className="tab-btn flex-1 min-w-[96px] whitespace-nowrap text-[13px] transition-all hover:bg-neutral-50 font-medium rounded-md pt-2 pr-3 pb-2 pl-3" data-tab="accounts" style={{}}>Accounts</button>
<button className="tab-btn flex-1 min-w-[96px] whitespace-nowrap text-[13px] transition-all hover:bg-neutral-50 font-medium rounded-md pt-2 pr-3 pb-2 pl-3" data-tab="plans" style={{}}>Plans</button>
</div>
</div>

<main className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">

<section className="space-y-4" id="section-overview">
<div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
<div className="">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
<div className="rounded-lg border border-neutral-200 bg-white p-4 hover:border-neutral-300 transition-colors">
<div className="flex items-center justify-between">
<span className="text-[12px] text-neutral-500">มูลค่าพอร์ต</span>
<svg className="lucide lucide-wallet h-4.5 w-4.5 text-neutral-500" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</div>
<div className="mt-2">
<div className="text-[24px] leading-7 tracking-tight font-semibold">฿ 7,850,000</div>
<div className="text-[12px] text-neutral-500">รวมทุกสินทรัพย์และบัญชี</div>
</div>
</div>
<div className="rounded-lg border border-neutral-200 bg-white p-4 hover:border-neutral-300 transition-colors">
<div className="flex items-center justify-between">
<span className="text-[12px] text-neutral-500">กำไร/ขาดทุนวันนี้</span>
<svg className="lucide lucide-trending-up h-4.5 w-4.5 text-neutral-500" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<div className="mt-2">
<div className="text-[24px] leading-7 tracking-tight font-semibold text-green-600">+฿ 28,450</div>
<div className="text-[12px] text-neutral-500">+0.36%</div>
</div>
</div>
<div className="rounded-lg border border-neutral-200 bg-white p-4 hover:border-neutral-300 transition-colors">
<div className="flex items-center justify-between">
<span className="text-[12px] text-neutral-500">กำไรสะสม (YTD)</span>
<svg className="lucide lucide-pie-chart h-4.5 w-4.5 text-neutral-500" data-lucide="pie-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path></svg>
</div>
<div className="mt-2">
<div className="text-[24px] leading-7 tracking-tight font-semibold text-green-600">+฿ 412,900</div>
<div className="text-[12px] text-neutral-500">+5.6%</div>
</div>
</div>
</div>
</div>

<div className="bg-white border-neutral-200 border rounded-lg pt-4 pr-4 pb-4 pl-4">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
<div className="lg:col-span-2">
<div className="flex items-center justify-between">
<h2 className="text-[18px] tracking-tight font-semibold">Asset Allocation</h2>
<div className="flex items-center gap-2">
<span className="text-[12px] text-neutral-500">ณ วันนี้</span>
</div>
</div>
<p className="text-[12px] text-neutral-500 mt-1">สัดส่วนพอร์ตตามประเภทสินทรัพย์</p>
<div className="mt-3">
<div className="w-full max-w-none">
<div className="aspect-[16/10] rounded-md border border-neutral-100 bg-white flex items-center justify-center">
<div className="w-full h-full p-2">
<canvas className="" height="770" id="allocChart" style={{display: 'block', boxSizing: 'border-box', height: '385px', width: '627px'}} width="1254"></canvas>
</div>
</div>
</div>
</div>
<div className="mt-3 grid grid-cols-2 gap-2">
<div className="flex items-center justify-between rounded-md border border-neutral-200 p-2">
<span className="text-[12px] text-neutral-600">หุ้นไทย</span>
<span className="text-[12px] font-medium">35%</span>
</div>
<div className="flex items-center justify-between rounded-md border border-neutral-200 p-2">
<span className="text-[12px] text-neutral-600">หุ้นต่างประเทศ</span>
<span className="text-[12px] font-medium">22%</span>
</div>
<div className="flex items-center justify-between rounded-md border border-neutral-200 p-2">
<span className="text-[12px] text-neutral-600">ตราสารหนี้</span>
<span className="text-[12px] font-medium">18%</span>
</div>
<div className="flex items-center justify-between rounded-md border border-neutral-200 p-2">
<span className="text-[12px] text-neutral-600">กองทุนรวม</span>
<span className="text-[12px] font-medium">12%</span>
</div>
<div className="flex items-center justify-between rounded-md border border-neutral-200 p-2">
<span className="text-[12px] text-neutral-600">Structured</span>
<span className="text-[12px] font-medium">8%</span>
</div>
<div className="flex items-center justify-between rounded-md border border-neutral-200 p-2">
<span className="text-[12px] text-neutral-600">อนุพันธ์</span>
<span className="text-[12px] font-medium">5%</span>
</div>
</div>
</div>
<div className="space-y-3">
<div className="rounded-lg border border-neutral-200 p-3 bg-white">
<div className="flex items-center justify-between">
<div>
<div className="text-[16px] font-semibold tracking-tight">Dividends</div>
<div className="text-[12px] text-neutral-500">เงินปันผล • 12 เดือนล่าสุด</div>
</div>
<span className="-md border border-neutral-200 px-2 py-0.5 text-[11px] text-neutral-700">Yield</span>
</div>
<div className="mt-3 grid grid-cols-2 gap-2">
<div className="rounded-md border border-neutral-200 p-2">
<div className="text-[12px] text-neutral-500">รวม 12 เดือน</div>
<div className="text-[18px] font-semibold tracking-tight">฿ 68,400</div>
</div>
<div className="rounded-md border border-neutral-200 p-2">
<div className="text-[12px] text-neutral-500">Dividend Yield</div>
<div className="text-[18px] font-semibold tracking-tight text-green-600">2.1%</div>
</div>
</div>
<div className="mt-3 grid grid-cols-1 gap-2 text-[12px]">
<div className="flex items-center justify-between rounded-md border border-neutral-200 p-2">
<div className="flex items-center gap-2">
<svg className="lucide lucide-calendar h-4 w-4 text-neutral-600" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="text-neutral-600">จ่ายครั้งถัดไป</span>
</div>
<span className="font-medium">28 ก.ย. 2025</span>
</div>
<div className="flex items-center justify-between rounded-md border border-neutral-200 p-2">
<div className="flex items-center gap-2">
<svg className="lucide lucide-coins h-4 w-4 text-neutral-600" data-lucide="coins" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
<span className="text-neutral-600">หุ้นที่กำลังจ่าย</span>
</div>
<span className="font-medium">PTT, SCC, KBANK</span>
</div>
</div>
<div className="mt-3">
<div className="flex justify-between text-[12px] text-neutral-600">
<span>สัดส่วนจาก หุ้นไทย</span><span>74%</span>
</div>
<div className="h-2 w-full bg-neutral-100 rounded-md overflow-hidden mt-1">
<div className="h-2 rounded-md bg-green-500" style={{width: '74%'}}></div>
</div>
</div>
</div>
<div className="rounded-lg border border-neutral-200 p-3 bg-white">
<div className="flex items-center justify-between">
<div className="">
<div className="text-[16px] font-semibold tracking-tight">Analyze</div>
<div className="text-[12px] text-neutral-500">ความเสี่ยงและความกระจุกตัว</div>
</div>
<span className="rounded-md border border-neutral-200 px-2 py-0.5 text-[11px] text-neutral-700">Risk 3/7</span>
</div>
<div className="mt-3">
<div className="flex justify-between text-[12px] text-neutral-600">
<span>ความผันผวน (30D)</span><span className="font-medium text-neutral-800">ต่ำ-ปานกลาง</span>
</div>
<div className="h-2 w-full bg-neutral-100 rounded-md overflow-hidden mt-1">
<div className="h-2 rounded-md" style={{width: '38%', backgroundColor: '#0A6EE7'}}></div>
</div>
</div>
<div className="mt-3">
<div className="flex justify-between text-[12px] text-neutral-600">
<span className="">กระจุกตัว Top 5</span><span className="font-medium text-neutral-800">58%</span>
</div>
<div className="h-2 w-full bg-neutral-100 rounded-md overflow-hidden mt-1">
<div className="h-2 rounded-md bg-neutral-800" style={{width: '58%'}}></div>
</div>
</div>
<div className="mt-3 grid grid-cols-2 gap-2 text-[12px]">
<div className="rounded-md border border-neutral-200 p-2 flex items-center justify-between">
<span className="text-neutral-600">Beta</span>
<span className="font-medium">0.92</span>
</div>
<div className="rounded-md border border-neutral-200 p-2 flex items-center justify-between">
<span className="text-neutral-600">Corr. Global</span>
<span className="font-medium">0.68</span>
</div>
</div>
<div className="mt-3 flex items-center gap-2">
<button className="rounded-lg px-3 py-2 text-[13px] text-white hover:opacity-90 transition-colors" style={{backgroundColor: '#0A6EE7'}}>
            ดูคำแนะนำ
          </button>
<button className="rounded-lg px-3 py-2 text-[13px] border border-neutral-200 hover:bg-neutral-50 transition-colors">
            Rebalance
          </button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="space-y-4 hidden" id="section-holdings">

<div className="px-0 sm:px-0 py-0 flex items-center gap-2">
<div className="flex-1">
<div className="relative">
<svg className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-neutral-500" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-full rounded-lg border border-neutral-200 bg-white pl-9 pr-10 py-2 text-[14px] placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-offset-0" id="searchInput" placeholder="ค้นหา: สัญลักษณ์ / กองทุน / ประเภท" style={{-TwRingColor: '#0A6EE7'}} type="text"/>
<button className="absolute right-1.5 top-1/2 -translate-y-1/2 h-7 px-2 rounded-md border border-neutral-200 text-[12px] bg-white hover:bg-neutral-50 flex items-center gap-1" id="openFilter">
<svg className="lucide lucide-sliders-horizontal h-4 w-4" data-lucide="sliders-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 5H3"></path><path d="M12 19H3"></path><path d="M14 3v4"></path><path d="M16 17v4"></path><path d="M21 12h-9"></path><path d="M21 19h-5"></path><path d="M21 5h-7"></path><path d="M8 10v4"></path><path d="M8 12H3"></path></svg>
                  Filter
                </button>
</div>
</div>
</div>

<div className="pb-0">
<div className="flex overflow-x-auto no-scrollbar gap-2">
<button className="chip-asset rounded-lg px-3 py-1.5 text-[12px] border border-neutral-200 whitespace-nowrap" data-asset="all">ทั้งหมด</button>
<button className="chip-asset text-[12px] hover:bg-neutral-50 whitespace-nowrap bg-white border-neutral-200 border rounded-lg pt-1.5 pr-3 pb-1.5 pl-3" data-asset="thai_stock">หุ้นไทย</button>
<button className="chip-asset rounded-lg px-3 py-1.5 text-[12px] border border-neutral-200 bg-white hover:bg-neutral-50 whitespace-nowrap" data-asset="global_stock">หุ้นต่างประเทศ</button>
<button className="chip-asset rounded-lg px-3 py-1.5 text-[12px] border border-neutral-200 bg-white hover:bg-neutral-50 whitespace-nowrap" data-asset="structured">Structured</button>
<button className="chip-asset rounded-lg px-3 py-1.5 text-[12px] border border-neutral-200 bg-white hover:bg-neutral-50 whitespace-nowrap" data-asset="fixed_income">ตราสารหนี้</button>
<button className="chip-asset rounded-lg px-3 py-1.5 text-[12px] border border-neutral-200 bg-white hover:bg-neutral-50 whitespace-nowrap" data-asset="derivatives">อนุพันธ์</button>
<button className="chip-asset rounded-lg px-3 py-1.5 text-[12px] border border-neutral-200 bg-white hover:bg-neutral-50 whitespace-nowrap" data-asset="mutual_fund">กองทุนรวม</button>
</div>
</div>

<div className="rounded-lg border border-neutral-200 bg-white p-3">
<div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
<div className="relative col-span-2 sm:col-span-1">
<label className="block text-[12px] text-neutral-600 mb-1">Asset Type</label>
<select className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-[13px] focus:outline-none focus:ring-2" id="filterAsset" style={{-TwRingColor: '#0A6EE7'}}>
<option value="all">All</option>
<option value="thai_stock">Thai Stock</option>
<option value="global_stock">Global Stock</option>
<option value="structured">Structured Product</option>
<option value="fixed_income">Fixed Income</option>
<option value="derivatives">Derivatives</option>
<option value="mutual_fund">Mutual Fund</option>
</select>
</div>
<div className="relative">
<label className="block text-[12px] text-neutral-600 mb-1">Account</label>
<select className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-[13px] focus:outline-none focus:ring-2" id="filterAccount" style={{-TwRingColor: '#0A6EE7'}}>
<option value="all">All</option>
<option value="cash_balance">Cash Balance</option>
<option value="cash_account">Cash Account (T+2)</option>
<option value="credit_balance">Credit Balance (Margin)</option>
<option value="other">Other</option>
</select>
</div>
<div className="relative">
<label className="block text-[12px] text-neutral-600 mb-1">Sort</label>
<select className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-[13px] focus:outline-none focus:ring-2" id="sortBy" style={{-TwRingColor: '#0A6EE7'}}>
<option value="value_desc">Market Value ↓</option>
<option value="value_asc">Market Value ↑</option>
<option value="pl_desc">P/L ↓</option>
<option value="pl_asc">P/L ↑</option>
</select>
</div>
<div className="flex items-end gap-2">
<button className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-[13px] bg-blue-500 text-white hover:bg-blue-900" id="resetFilters">Reset</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3" id="holdingsList">
<div className="holding-card rounded-lg border border-neutral-200 bg-white p-3 hover:border-neutral-300 transition-colors" data-account="other" data-pl="230000" data-type="global_stock" data-value="720000">
<div className="flex items-start justify-between">
<div>
<div className="text-[14px] font-medium tracking-tight">NVDA</div>
<div className="text-[12px] text-neutral-500">Global Stock • US</div>
</div>
<span className="rounded-md px-2 py-0.5 text-[11px] border border-neutral-200">x 60</span>
</div>
<div className="mt-3 flex items-center justify-between">
<div>
<div className="text-[12px] text-neutral-500">Market Value</div>
<div className="text-[18px] font-semibold tracking-tight">$ 36,200</div>
</div>
<div className="text-right">
<div className="text-[12px] text-neutral-500">P/L</div>
<div className="text-[14px] font-medium text-green-600">+$ 6,500</div>
</div>
</div>
</div><div className="holding-card rounded-lg border border-neutral-200 bg-white p-3 hover:border-neutral-300 transition-colors" data-account="other" data-pl="120000" data-type="global_stock" data-value="600000">
<div className="flex items-start justify-between">
<div>
<div className="text-[14px] font-medium tracking-tight">AAPL</div>
<div className="text-[12px] text-neutral-500">Global Stock • US</div>
</div>
<span className="rounded-md px-2 py-0.5 text-[11px] border border-neutral-200">x 150</span>
</div>
<div className="mt-3 flex items-center justify-between">
<div>
<div className="text-[12px] text-neutral-500">Market Value</div>
<div className="text-[18px] font-semibold tracking-tight">$ 16,400</div>
</div>
<div className="text-right">
<div className="text-[12px] text-neutral-500">P/L</div>
<div className="text-[14px] font-medium text-green-600">+$ 3,200</div>
</div>
</div>
</div><div className="holding-card rounded-lg border border-neutral-200 bg-white p-3 hover:border-neutral-300 transition-colors" data-account="cash_account" data-pl="-8000" data-type="thai_stock" data-value="520000">
<div className="flex items-start justify-between">
<div>
<div className="text-[14px] font-medium tracking-tight">KBANK</div>
<div className="text-[12px] text-neutral-500">Thai Stock • Cash Account (T+2)</div>
</div>
<span className="rounded-md px-2 py-0.5 text-[11px] border border-neutral-200">x 2,000</span>
</div>
<div className="mt-3 flex items-center justify-between">
<div>
<div className="text-[12px] text-neutral-500">Market Value</div>
<div className="text-[18px] font-semibold tracking-tight">฿ 520,000</div>
</div>
<div className="text-right">
<div className="text-[12px] text-neutral-500">P/L</div>
<div className="text-[14px] font-medium text-red-600">-฿ 8,000</div>
</div>
</div>
</div><div className="holding-card rounded-lg border border-neutral-200 bg-white p-3 hover:border-neutral-300 transition-colors" data-account="credit_balance" data-pl="16000" data-type="thai_stock" data-value="410000">
<div className="flex items-start justify-between">
<div>
<div className="text-[14px] font-medium tracking-tight">SCC</div>
<div className="text-[12px] text-neutral-500">Thai Stock • Credit Balance</div>
</div>
<span className="rounded-md px-2 py-0.5 text-[11px] border border-neutral-200">x 800</span>
</div>
<div className="mt-3 flex items-center justify-between">
<div>
<div className="text-[12px] text-neutral-500">Market Value</div>
<div className="text-[18px] font-semibold tracking-tight">฿ 410,000</div>
</div>
<div className="text-right">
<div className="text-[12px] text-neutral-500">P/L</div>
<div className="text-[14px] font-medium text-green-600">+฿ 16,000</div>
</div>
</div>
</div><div className="holding-card rounded-lg border border-neutral-200 bg-white p-3 hover:border-neutral-300 transition-colors" data-account="cash_balance" data-pl="22000" data-type="thai_stock" data-value="350000">
<div className="flex items-start justify-between">
<div>
<div className="text-[14px] font-medium tracking-tight">PTT</div>
<div className="text-[12px] text-neutral-500">Thai Stock • Cash Balance</div>
</div>
<span className="rounded-md px-2 py-0.5 text-[11px] border border-neutral-200">x 3,000</span>
</div>
<div className="mt-3 flex items-center justify-between">
<div>
<div className="text-[12px] text-neutral-500">Market Value</div>
<div className="text-[18px] font-semibold tracking-tight">฿ 350,000</div>
</div>
<div className="text-right">
<div className="text-[12px] text-neutral-500">P/L</div>
<div className="text-[14px] font-medium text-green-600">+฿ 22,000</div>
</div>
</div>
</div><div className="holding-card rounded-lg border border-neutral-200 bg-white p-3 hover:border-neutral-300 transition-colors" data-account="other" data-pl="15000" data-type="structured" data-value="300000">
<div className="flex items-start justify-between">
<div>
<div className="text-[14px] font-medium tracking-tight">Auto-callable Note</div>
<div className="text-[12px] text-neutral-500">Structured Product</div>
</div>
<span className="rounded-md px-2 py-0.5 text-[11px] border border-neutral-200">Notional ฿ 300k</span>
</div>
<div className="mt-3 flex items-center justify-between">
<div>
<div className="text-[12px] text-neutral-500">Est. Value</div>
<div className="text-[18px] font-semibold tracking-tight">฿ 300,000</div>
</div>
<div className="text-right">
<div className="text-[12px] text-neutral-500">Coupon</div>
<div className="text-[14px] font-medium text-neutral-800">6.2% p.a.</div>
</div>
</div>
</div><div className="holding-card rounded-lg border border-neutral-200 bg-white p-3 hover:border-neutral-300 transition-colors" data-account="other" data-pl="5000" data-type="fixed_income" data-value="250000">
<div className="flex items-start justify-between">
<div>
<div className="text-[14px] font-medium tracking-tight">TH Gov Bond 2028</div>
<div className="text-[12px] text-neutral-500">Fixed Income</div>
</div>
<span className="rounded-md px-2 py-0.5 text-[11px] border border-neutral-200">YTM 2.4%</span>
</div>
<div className="mt-3 flex items-center justify-between">
<div>
<div className="text-[12px] text-neutral-500">Market Value</div>
<div className="text-[18px] font-semibold tracking-tight">฿ 250,000</div>
</div>
<div className="text-right">
<div className="text-[12px] text-neutral-500">P/L</div>
<div className="text-[14px] font-medium text-green-600">+฿ 5,000</div>
</div>
</div>
</div><div className="holding-card rounded-lg border border-neutral-200 bg-white p-3 hover:border-neutral-300 transition-colors" data-account="other" data-pl="6000" data-type="mutual_fund" data-value="220000">
<div className="flex items-start justify-between">
<div>
<div className="text-[14px] font-medium tracking-tight">SCBSEMI</div>
<div className="text-[12px] text-neutral-500">Mutual Fund • Semiconductor</div>
</div>
<span className="rounded-md px-2 py-0.5 text-[11px] border border-neutral-200">Lumpsum</span>
</div>
<div className="mt-3 flex items-center justify-between">
<div>
<div className="text-[12px] text-neutral-500">Market Value</div>
<div className="text-[18px] font-semibold tracking-tight">฿ 220,000</div>
</div>
<div className="text-right">
<div className="text-[12px] text-neutral-500">P/L</div>
<div className="text-[14px] font-medium text-green-600">+฿ 6,000</div>
</div>
</div>
</div><div className="holding-card rounded-lg border border-neutral-200 bg-white p-3 hover:border-neutral-300 transition-colors" data-account="other" data-pl="9000" data-type="mutual_fund" data-value="180000">
<div className="flex items-start justify-between">
<div>
<div className="text-[14px] font-medium tracking-tight">K-USA</div>
<div className="text-[12px] text-neutral-500">Mutual Fund • Equity US</div>
</div>
<span className="rounded-md px-2 py-0.5 text-[11px] border border-neutral-200">DCA</span>
</div>
<div className="mt-3 flex items-center justify-between">
<div>
<div className="text-[12px] text-neutral-500">Market Value</div>
<div className="text-[18px] font-semibold tracking-tight">฿ 180,000</div>
</div>
<div className="text-right">
<div className="text-[12px] text-neutral-500">P/L</div>
<div className="text-[14px] font-medium text-green-600">+฿ 9,000</div>
</div>
</div>
</div><div className="holding-card rounded-lg border border-neutral-200 bg-white p-3 hover:border-neutral-300 transition-colors" data-account="other" data-pl="-4000" data-type="derivatives" data-value="120000">
<div className="flex items-start justify-between">
<div>
<div className="text-[14px] font-medium tracking-tight">S50Z25 Futures</div>
<div className="text-[12px] text-neutral-500">Derivatives • 2 Contracts</div>
</div>
<span className="rounded-md px-2 py-0.5 text-[11px] border border-neutral-200">Leverage</span>
</div>
<div className="mt-3 flex items-center justify-between">
<div>
<div className="text-[12px] text-neutral-500">Margin</div>
<div className="text-[18px] font-semibold tracking-tight">฿ 120,000</div>
</div>
<div className="text-right">
<div className="text-[12px] text-neutral-500">P/L</div>
<div className="text-[14px] font-medium text-red-600">-฿ 4,000</div>
</div>
</div>
</div></div>
</section>

<section className="space-y-4 hidden" id="section-accounts">
<div className="rounded-lg border border-neutral-200 bg-white p-4">
<div className="flex items-center justify-between">
<h2 className="text-[18px] tracking-tight font-semibold">Accounts Summary</h2>
<button className="rounded-lg px-3 py-2 text-[13px] text-white hover:opacity-90 transition-colors" style={{backgroundColor: '#0A6EE7'}}>Add Account</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">

<div className="rounded-lg border border-neutral-200 p-3">
<div className="flex items-center justify-between">
<div className="text-[13px] font-medium">Cash Balance</div>
<span className="rounded-md px-2 py-0.5 text-[11px] border border-neutral-200">TH</span>
</div>
<div className="mt-2 text-[20px] tracking-tight font-semibold">฿ 420,000</div>
<div className="mt-2 grid grid-cols-2 gap-2 text-[12px]">
<div className="rounded-md border border-neutral-200 p-2">
<div className="text-neutral-500">พร้อมใช้</div>
<div className="font-medium">฿ 380,000</div>
</div>
<div className="rounded-md border border-neutral-200 p-2">
<div className="text-neutral-500">ภาระผูกพัน</div>
<div className="font-medium">฿ 20,000</div>
</div>
</div>
</div>
<div className="rounded-lg border border-neutral-200 p-3">
<div className="flex items-center justify-between">
<div className="text-[13px] font-medium">Cash Account (T+2)</div>
<span className="rounded-md px-2 py-0.5 text-[11px] border border-neutral-200">TH</span>
</div>
<div className="mt-2 text-[20px] tracking-tight font-semibold">฿ 1,850,000</div>
<div className="mt-2 grid grid-cols-2 gap-2 text-[12px]">
<div className="rounded-md border border-neutral-200 p-2">
<div className="text-neutral-500">รอชำระ</div>
<div className="font-medium">฿ 120,000</div>
</div>
<div className="rounded-md border border-neutral-200 p-2">
<div className="text-neutral-500">เครดิตคงเหลือ</div>
<div className="font-medium">฿ 65,000</div>
</div>
</div>
</div>
<div className="rounded-lg border border-neutral-200 p-3">
<div className="flex items-center justify-between">
<div className="text-[13px] font-medium">Credit Balance (Margin)</div>
<span className="rounded-md px-2 py-0.5 text-[11px] border border-neutral-200">TH</span>
</div>
<div className="mt-2 text-[20px] tracking-tight font-semibold">Utilization 48%</div>
<div className="mt-2 grid grid-cols-2 gap-2 text-[12px]">
<div className="rounded-md border border-neutral-200 p-2">
<div className="text-neutral-500">Maintenance</div>
<div className="font-medium">25%</div>
</div>
<div className="rounded-md border border-neutral-200 p-2">
<div className="text-neutral-500">Call Level</div>
<div className="font-medium">75%</div>
</div>
</div>
</div>

<div className="rounded-lg border border-neutral-200 p-3">
<div className="flex items-center justify-between">
<div className="text-[13px] font-medium">Mutual Fund Account</div>
<span className="rounded-md px-2 py-0.5 text-[11px] border border-neutral-200">TH</span>
</div>
<div className="mt-2 text-[20px] tracking-tight font-semibold">฿ 640,000</div>
<div className="mt-2 grid grid-cols-2 gap-2 text-[12px]">
<div className="rounded-md border border-neutral-200 p-2">
<div className="text-neutral-500">เงินสดคงเหลือ</div>
<div className="font-medium">฿ 45,000</div>
</div>
<div className="rounded-md border border-neutral-200 p-2">
<div className="text-neutral-500">คำสั่งรอชำระ</div>
<div className="font-medium">฿ 12,000</div>
</div>
</div>
</div>

<div className="rounded-lg border border-neutral-200 p-3">
<div className="flex items-center justify-between">
<div className="text-[13px] font-medium">Fixed Income Account</div>
<span className="rounded-md px-2 py-0.5 text-[11px] border border-neutral-200">TH</span>
</div>
<div className="mt-2 text-[20px] tracking-tight font-semibold">฿ 430,000</div>
<div className="mt-2 grid grid-cols-2 gap-2 text-[12px]">
<div className="rounded-md border border-neutral-200 p-2">
<div className="text-neutral-500">ดอกเบี้ยสะสม</div>
<div className="font-medium">฿ 3,200</div>
</div>
<div className="rounded-md border border-neutral-200 p-2">
<div className="text-neutral-500">คูปองถัดไป</div>
<div className="font-medium">28 ก.ย. 2025</div>
</div>
</div>
</div>

<div className="rounded-lg border border-neutral-200 p-3">
<div className="flex items-center justify-between">
<div className="text-[13px] font-medium">Global Trade Account</div>
<span className="rounded-md px-2 py-0.5 text-[11px] border border-neutral-200">USD</span>
</div>
<div className="mt-2 text-[20px] tracking-tight font-semibold">$ 95,400</div>
<div className="mt-2 grid grid-cols-2 gap-2 text-[12px]">
<div className="rounded-md border border-neutral-200 p-2">
<div className="text-neutral-500">พร้อมใช้</div>
<div className="font-medium">$ 28,000</div>
</div>
<div className="rounded-md border border-neutral-200 p-2">
<div className="text-neutral-500">วงเงินซื้อขาย</div>
<div className="font-medium">$ 120,000</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="space-y-4 hidden" id="section-plans">
<div className="rounded-lg border border-neutral-200 bg-white p-4">
<div className="flex items-center justify-between">
<h2 className="text-[18px] tracking-tight font-semibold">Strategy Plans</h2>
<div className="flex items-center gap-2">
<button className="rounded-lg px-3 py-2 text-[13px] border border-neutral-200 hover:bg-neutral-50">Create Plan</button>
</div>
</div>
<div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="rounded-lg border border-neutral-200 p-4 bg-white">
<div className="flex items-center justify-between">
<div>
<h3 className="text-[18px] tracking-tight font-semibold">Retirement Plan</h3>
<p className="text-[12px] text-neutral-500">แผนเกษียณอายุ • ระยะยาว</p>
</div>
<span className="rounded-md px-2 py-1 text-[11px] border border-neutral-200 text-neutral-700">Risk 4/7</span>
</div>
<div className="mt-3">
<div className="flex justify-between text-[12px] text-neutral-600">
<span>Progress สู่เป้าหมาย</span><span>62%</span>
</div>
<div className="h-2 w-full bg-neutral-100 rounded-md overflow-hidden mt-1">
<div className="h-2 rounded-md" style={{width: '62%', backgroundColor: '#0A6EE7'}}></div>
</div>
<div className="mt-3 grid grid-cols-2 gap-2 text-[12px]">
<div className="rounded-md border border-neutral-200 p-2">
<div className="text-neutral-500">มูลค่าปัจจุบัน</div>
<div className="font-medium">฿ 1,250,000</div>
</div>
<div className="rounded-md border border-neutral-200 p-2">
<div className="text-neutral-500">เงินเป้าหมาย</div>
<div className="font-medium">฿ 2,000,000</div>
</div>
</div>
<div className="mt-3 flex items-center gap-2">
<button className="rounded-lg px-3 py-2 text-[13px] text-white shadow-sm hover:opacity-90 transition-colors" style={{backgroundColor: '#0A6EE7'}}>
                      รายละเอียด
                    </button>
<button className="rounded-lg px-3 py-2 text-[13px] border border-neutral-200 hover:bg-neutral-50 transition-colors">ปรับสัดส่วน</button>
</div>
</div>
</div>
<div className="rounded-lg border border-neutral-200 p-4 bg-white">
<div className="flex items-center justify-between">
<div>
<h3 className="text-[18px] tracking-tight font-semibold">Robo Advisory</h3>
<p className="text-[12px] text-neutral-500">อัตโนมัติ • ถ่วงน้ำหนักตามความเสี่ยง</p>
</div>
<span className="rounded-md px-2 py-1 text-[11px] border border-neutral-200 text-neutral-700">Rebalance: 12d</span>
</div>
<div className="mt-3">
<div className="flex justify-between text-[12px] text-neutral-600">
<span>ผลตอบแทนตั้งแต่เริ่ม</span><span className="text-green-600 font-medium">+7.8%</span>
</div>
<div className="h-2 w-full bg-neutral-100 rounded-md overflow-hidden mt-1">
<div className="h-2 rounded-md bg-green-500" style={{width: '32%'}}></div>
</div>
<div className="mt-3 grid grid-cols-2 gap-2 text-[12px]">
<div className="rounded-md border border-neutral-200 p-2">
<div className="text-neutral-500">มูลค่าปัจจุบัน</div>
<div className="font-medium">฿ 820,000</div>
</div>
<div className="rounded-md border border-neutral-200 p-2">
<div className="text-neutral-500">เงินลงทุนสุทธิ</div>
<div className="font-medium">฿ 760,000</div>
</div>
</div>
<div className="mt-3 flex items-center gap-2">
<button className="rounded-lg px-3 py-2 text-[13px] text-white shadow-sm hover:opacity-90 transition-colors" style={{backgroundColor: '#0A6EE7'}}>
                      รายละเอียด
                    </button>
<button className="rounded-lg px-3 py-2 text-[13px] border border-neutral-200 hover:bg-neutral-50 transition-colors">เพิ่มเงิน</button>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<div className="md:hidden sticky bottom-0 z-40 bg-white/90 backdrop-blur border-t border-neutral-200 hidden" id="mobileActionBar">
<div className="px-4 py-2 flex items-center justify-between">
<button className="flex items-center gap-2 rounded-lg px-3 py-2 text-[13px] border border-neutral-200 hover:bg-neutral-50" id="fabFilter">
<svg className="lucide lucide-filter h-4.5 w-4.5" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
            Filters
          </button>
<div className="flex items-center gap-2">
<button className="rounded-lg px-3 py-2 text-[13px] text-white hover:opacity-90" style={{backgroundColor: '#0A6EE7'}}>Rebalance</button>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="filterDrawer">
<div className="absolute inset-0 bg-black/30" id="closeDrawer"></div>
<div className="absolute bottom-0 left-0 right-0 rounded-t-2xl bg-white border-t border-neutral-200 shadow-xl">
<div className="px-4 py-3 flex items-center justify-between">
<div className="text-[16px] tracking-tight font-semibold">Filters</div>
<button className="h-9 w-9 rounded-lg border border-neutral-200 hover:bg-neutral-50 flex items-center justify-center" id="closeDrawerBtn">
<svg className="lucide lucide-x h-5 w-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="px-4 pb-4 space-y-4 max-h-[70vh] overflow-y-auto">

<div>
<div className="text-[12px] text-neutral-600 mb-2">Asset Types</div>
<div className="grid grid-cols-2 gap-2">

<label className="group flex items-center justify-between rounded-lg border border-neutral-200 px-3 py-2 text-[13px] hover:bg-neutral-50 cursor-pointer">
<span>Thai Stock</span>
<input className="hidden filter-asset-type" type="checkbox" value="thai_stock"/>
<span className="h-5 w-5 rounded-md border border-neutral-300 flex items-center justify-center group-has-[:checked]:bg-green-500 group-has-[:checked]:border-green-500">
<svg className="lucide lucide-check h-3.5 w-3.5 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
</label>
<label className="group flex items-center justify-between rounded-lg border border-neutral-200 px-3 py-2 text-[13px] hover:bg-neutral-50 cursor-pointer">
<span>Global Stock</span>
<input className="hidden filter-asset-type" type="checkbox" value="global_stock"/>
<span className="h-5 w-5 rounded-md border border-neutral-300 flex items-center justify-center group-has-[:checked]:bg-green-500 group-has-[:checked]:border-green-500">
<svg className="lucide lucide-check h-3.5 w-3.5 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
</label>
<label className="group flex items-center justify-between rounded-lg border border-neutral-200 px-3 py-2 text-[13px] hover:bg-neutral-50 cursor-pointer">
<span>Structured</span>
<input className="hidden filter-asset-type" type="checkbox" value="structured"/>
<span className="h-5 w-5 rounded-md border border-neutral-300 flex items-center justify-center group-has-[:checked]:bg-green-500 group-has-[:checked]:border-green-500">
<svg className="lucide lucide-check h-3.5 w-3.5 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
</label>
<label className="group flex items-center justify-between rounded-lg border border-neutral-200 px-3 py-2 text-[13px] hover:bg-neutral-50 cursor-pointer">
<span>Fixed Income</span>
<input className="hidden filter-asset-type" type="checkbox" value="fixed_income"/>
<span className="h-5 w-5 rounded-md border border-neutral-300 flex items-center justify-center group-has-[:checked]:bg-green-500 group-has-[:checked]:border-green-500">
<svg className="lucide lucide-check h-3.5 w-3.5 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
</label>
<label className="group flex items-center justify-between rounded-lg border border-neutral-200 px-3 py-2 text-[13px] hover:bg-neutral-50 cursor-pointer">
<span>Derivatives</span>
<input className="hidden filter-asset-type" type="checkbox" value="derivatives"/>
<span className="h-5 w-5 rounded-md border border-neutral-300 flex items-center justify-center group-has-[:checked]:bg-green-500 group-has-[:checked]:border-green-500">
<svg className="lucide lucide-check h-3.5 w-3.5 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
</label>
<label className="group flex items-center justify-between rounded-lg border border-neutral-200 px-3 py-2 text-[13px] hover:bg-neutral-50 cursor-pointer">
<span>Mutual Fund</span>
<input className="hidden filter-asset-type" type="checkbox" value="mutual_fund"/>
<span className="h-5 w-5 rounded-md border border-neutral-300 flex items-center justify-center group-has-[:checked]:bg-green-500 group-has-[:checked]:border-green-500">
<svg className="lucide lucide-check h-3.5 w-3.5 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
</label>
</div>
</div>

<div>
<div className="text-[12px] text-neutral-600 mb-2">Thai Stock Accounts</div>
<div className="grid grid-cols-1 gap-2">
<label className="group flex items-center justify-between rounded-lg border border-neutral-200 px-3 py-2 text-[13px] hover:bg-neutral-50 cursor-pointer">
<span>Cash Balance</span>
<input className="hidden filter-account" type="checkbox" value="cash_balance"/>
<span className="h-5 w-5 rounded-md border border-neutral-300 flex items-center justify-center group-has-[:checked]:bg-green-500 group-has-[:checked]:border-green-500">
<svg className="lucide lucide-check h-3.5 w-3.5 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
</label>
<label className="group flex items-center justify-between rounded-lg border border-neutral-200 px-3 py-2 text-[13px] hover:bg-neutral-50 cursor-pointer">
<span>Cash Account (T+2)</span>
<input className="hidden filter-account" type="checkbox" value="cash_account"/>
<span className="h-5 w-5 rounded-md border border-neutral-300 flex items-center justify-center group-has-[:checked]:bg-green-500 group-has-[:checked]:border-green-500">
<svg className="lucide lucide-check h-3.5 w-3.5 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
</label>
<label className="group flex items-center justify-between rounded-lg border border-neutral-200 px-3 py-2 text-[13px] hover:bg-neutral-50 cursor-pointer">
<span>Credit Balance (Margin)</span>
<input className="hidden filter-account" type="checkbox" value="credit_balance"/>
<span className="h-5 w-5 rounded-md border border-neutral-300 flex items-center justify-center group-has-[:checked]:bg-green-500 group-has-[:checked]:border-green-500">
<svg className="lucide lucide-check h-3.5 w-3.5 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
</label>
</div>
</div>

<div className="flex items-center gap-2 pt-2">
<button className="flex-1 rounded-lg px-3 py-2 text-[13px] text-white hover:opacity-90" id="applyFilters" style={{backgroundColor: '#0A6EE7'}}>Apply</button>
<button className="rounded-lg px-3 py-2 text-[13px] border border-neutral-200 hover:bg-neutral-50" id="clearFilters">Clear</button>
</div>
</div>
</div>
</div>


    </>
  );
}
