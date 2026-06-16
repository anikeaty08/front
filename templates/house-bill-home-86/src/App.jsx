import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Simple slider value update
      const slider = document.querySelector('input[type="range"]');
      const output = slider.nextElementSibling;
      slider.addEventListener('input', function() {
          output.textContent = this.value + '%';
      });

      // Current Date highlight helper (just to demonstrate logic thought process)
      const dateInputs = document.querySelectorAll('input[type="date"]');
      dateInputs.forEach(input => {
          input.addEventListener('change', (e) => {
              // Validation Visual Logic
              if(input.value === "") input.classList.add('border-rose-300');
              else input.classList.remove('border-rose-300');
          })
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-[260px] bg-slate-900 border-r border-slate-800 flex flex-col justify-between hidden md:flex shrink-0 z-20">
<div>
<div className="h-16 flex items-center px-6 border-b border-slate-800">
<div className="flex items-center gap-2 text-indigo-500">
<iconify-icon icon="solar:buildings-bold-duotone" width="24"></iconify-icon>
<span className="font-bold tracking-tight text-white text-lg">
              SFMS
            </span>
</div>
</div>
<nav className="p-4 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg shadow-lg shadow-indigo-500/20" href="#">
<iconify-icon icon="solar:chart-square-bold-duotone" width="20"></iconify-icon>
            Dashboard
          </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-lg transition-colors" href="#">
<iconify-icon icon="solar:wallet-money-linear" width="20"></iconify-icon>
            Treasury
          </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-lg transition-colors" href="#">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
            Residents
          </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-lg transition-colors" href="#">
<iconify-icon icon="solar:bill-list-linear" width="20"></iconify-icon>
            Utility Bills
          </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-lg transition-colors" href="#">
<iconify-icon icon="solar:home-smile-linear" width="20"></iconify-icon>
            Rent &amp; Bond
          </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-lg transition-colors" href="#">
<iconify-icon icon="solar:card-send-linear" width="20"></iconify-icon>
            Outgoings
          </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-lg transition-colors" href="#">
<iconify-icon icon="solar:scale-linear" width="20"></iconify-icon>
            Fair Settlement
          </a>
</nav>
</div>
<div className="p-4 border-t border-slate-800">
<div className="flex items-center gap-3 px-3 py-2">
<div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-medium text-slate-400">
            JD
          </div>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-200">John Doe</span>
<span className="text-xs text-slate-500">Admin</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto relative">

<header className="md:hidden h-14 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-4 sticky top-0 z-10">
<span className="font-bold tracking-tight text-white">SFMS</span>
<button className="text-slate-400">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</header>
<div className="p-6 lg:p-10 max-w-7xl mx-auto space-y-8">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h1 className="text-xl font-semibold tracking-tight text-white">
              Financial Pulse
            </h1>
<p className="text-sm text-slate-400 mt-1">
              Dashboard overview of household finances.
            </p>
</div>
</div>
<div className="space-y-6">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-slate-800 p-5 rounded-xl border border-slate-700 shadow-sm relative overflow-hidden">
<div className="absolute right-0 top-0 p-4 opacity-10">
<iconify-icon className="text-white" icon="solar:wallet-money-linear" width="80"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Account Balance
                </p>
<h3 className="text-2xl font-bold text-white mt-1 font-mono tracking-tight">
                  $5,305.55
                </h3>
</div>
<div className="mt-4 flex items-center gap-1.5">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Total Cash
                </span>
</div>
</div>

<div className="bg-slate-800 p-5 rounded-xl border border-slate-700 shadow-sm relative overflow-hidden">
<div className="absolute right-0 top-0 p-4 opacity-10">
<iconify-icon className="text-white" icon="solar:safe-square-linear" width="80"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Bond Reserve
                </p>
<h3 className="text-2xl font-bold text-white mt-1 font-mono tracking-tight">
                  $2,980.00
                </h3>
</div>
<div className="mt-4 flex items-center gap-1.5">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  Held in Trust
                </span>
</div>
</div>

<div className="bg-slate-800 p-5 rounded-xl border border-slate-700 shadow-sm relative overflow-hidden">
<div className="absolute right-0 top-0 p-4 opacity-10">
<iconify-icon className="text-white" icon="solar:bill-list-linear" width="80"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Utility Fund
                </p>
<h3 className="text-2xl font-bold text-white mt-1 font-mono tracking-tight">
                  $633.55
                </h3>
</div>
<div className="mt-4 flex items-center gap-1.5">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  Collected
                </span>
</div>
</div>

<div className="bg-slate-800 p-5 rounded-xl border border-slate-700 shadow-sm relative overflow-hidden">
<div className="absolute right-0 top-0 p-4 opacity-10">
<iconify-icon className="text-white" icon="solar:hand-money-linear" width="80"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Receivables
                </p>
<h3 className="text-2xl font-bold text-white mt-1 font-mono tracking-tight">
                  $450.00
                </h3>
</div>
<div className="mt-4 flex items-center gap-1.5">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-rose-500/10 text-rose-400 border border-rose-500/20">
                  Not Taken
                </span>
</div>
</div>
</div>

<div className="bg-indigo-600 rounded-xl shadow-lg shadow-indigo-500/20 p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-white relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-600 to-indigo-500"></div>
<div className="flex items-center gap-3 z-10">
<div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
<iconify-icon className="text-white" icon="solar:bolt-bold" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-white">Quick Actions</h3>
<p className="text-xs text-indigo-100">
                  Manage treasury and residents
                </p>
</div>
</div>
<div className="flex items-center gap-3 z-10 w-full sm:w-auto">
<button className="flex-1 sm:flex-none inline-flex justify-center items-center gap-2 px-3 py-2 text-xs font-medium text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all">
<iconify-icon icon="solar:bill-list-bold" width="16"></iconify-icon>
                Add New Bill
              </button>
<button className="flex-1 sm:flex-none inline-flex justify-center items-center gap-2 px-3 py-2 text-xs font-medium text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all">
<iconify-icon icon="solar:card-send-bold" width="16"></iconify-icon>
                Add New Expense
              </button>
<button className="flex-1 sm:flex-none inline-flex justify-center items-center gap-2 px-3 py-2 text-xs font-medium text-indigo-900 bg-white hover:bg-indigo-50 border border-transparent rounded-lg transition-all shadow-sm">
<iconify-icon icon="solar:user-plus-bold" width="16"></iconify-icon>
                Add New Resident
              </button>
</div>
</div>
</div>

<div className="bg-slate-800 rounded-xl border border-slate-700 p-6 shadow-sm">
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-lg font-medium text-white">Cash Flow</h3>
<p className="text-sm text-slate-400">Monthly income vs. spending</p>
</div>
<select className="bg-slate-900 border border-slate-700 text-slate-300 text-xs rounded-lg p-2 outline-none">
<option>Last 6 Months</option>
<option>This Year</option>
</select>
</div>

<div className="h-64 w-full flex items-end justify-between gap-2 sm:gap-4 px-2">

<div className="flex-1 flex flex-col justify-end gap-2 group h-full">
<div className="flex items-end justify-center gap-1 h-[85%] w-full">
<div className="w-3 sm:w-6 bg-emerald-500/20 rounded-t-sm h-[45%] relative group-hover:bg-emerald-500/30 transition-colors">
<div className="absolute bottom-0 w-full bg-emerald-500 h-[20px]"></div>
</div>
<div className="w-3 sm:w-6 bg-indigo-500/20 rounded-t-sm h-[60%] relative group-hover:bg-indigo-500/30 transition-colors">
<div className="absolute bottom-0 w-full bg-indigo-500 h-[40px]"></div>
</div>
</div>
<span className="text-[10px] text-slate-500 text-center font-mono">
                MAY
              </span>
</div>
<div className="flex-1 flex flex-col justify-end gap-2 group h-full">
<div className="flex items-end justify-center gap-1 h-[85%] w-full">
<div className="w-3 sm:w-6 bg-emerald-500/20 rounded-t-sm h-[55%] relative group-hover:bg-emerald-500/30 transition-colors">
<div className="absolute bottom-0 w-full bg-emerald-500 h-[25px]"></div>
</div>
<div className="w-3 sm:w-6 bg-indigo-500/20 rounded-t-sm h-[40%] relative group-hover:bg-indigo-500/30 transition-colors">
<div className="absolute bottom-0 w-full bg-indigo-500 h-[30px]"></div>
</div>
</div>
<span className="text-[10px] text-slate-500 text-center font-mono">
                JUN
              </span>
</div>
<div className="flex-1 flex flex-col justify-end gap-2 group h-full">
<div className="flex items-end justify-center gap-1 h-[85%] w-full">
<div className="w-3 sm:w-6 bg-emerald-500/20 rounded-t-sm h-[65%] relative group-hover:bg-emerald-500/30 transition-colors">
<div className="absolute bottom-0 w-full bg-emerald-500 h-[35px]"></div>
</div>
<div className="w-3 sm:w-6 bg-indigo-500/20 rounded-t-sm h-[50%] relative group-hover:bg-indigo-500/30 transition-colors">
<div className="absolute bottom-0 w-full bg-indigo-500 h-[35px]"></div>
</div>
</div>
<span className="text-[10px] text-slate-500 text-center font-mono">
                JUL
              </span>
</div>
<div className="flex-1 flex flex-col justify-end gap-2 group h-full">
<div className="flex items-end justify-center gap-1 h-[85%] w-full">
<div className="w-3 sm:w-6 bg-emerald-500/20 rounded-t-sm h-[60%] relative group-hover:bg-emerald-500/30 transition-colors">
<div className="absolute bottom-0 w-full bg-emerald-500 h-[40px]"></div>
</div>
<div className="w-3 sm:w-6 bg-indigo-500/20 rounded-t-sm h-[45%] relative group-hover:bg-indigo-500/30 transition-colors">
<div className="absolute bottom-0 w-full bg-indigo-500 h-[30px]"></div>
</div>
</div>
<span className="text-[10px] text-slate-500 text-center font-mono">
                AUG
              </span>
</div>
<div className="flex-1 flex flex-col justify-end gap-2 group h-full">
<div className="flex items-end justify-center gap-1 h-[85%] w-full">
<div className="w-3 sm:w-6 bg-emerald-500/20 rounded-t-sm h-[70%] relative group-hover:bg-emerald-500/30 transition-colors">
<div className="absolute bottom-0 w-full bg-emerald-500 h-[50px]"></div>
</div>
<div className="w-3 sm:w-6 bg-indigo-500/20 rounded-t-sm h-[55%] relative group-hover:bg-indigo-500/30 transition-colors">
<div className="absolute bottom-0 w-full bg-indigo-500 h-[40px]"></div>
</div>
</div>
<span className="text-[10px] text-slate-500 text-center font-mono">
                SEP
              </span>
</div>
<div className="flex-1 flex flex-col justify-end gap-2 group h-full">
<div className="flex items-end justify-center gap-1 h-[85%] w-full">
<div className="w-3 sm:w-6 bg-emerald-500/20 rounded-t-sm h-[75%] relative group-hover:bg-emerald-500/30 transition-colors">
<div className="absolute bottom-0 w-full bg-emerald-500 h-[55px]"></div>
</div>
<div className="w-3 sm:w-6 bg-indigo-500/20 rounded-t-sm h-[40%] relative group-hover:bg-indigo-500/30 transition-colors">
<div className="absolute bottom-0 w-full bg-indigo-500 h-[25px]"></div>
</div>
</div>
<span className="text-[10px] text-slate-500 text-center font-mono">
                OCT
              </span>
</div>
</div>
<div className="flex items-center justify-center gap-6 mt-6">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-emerald-500"></div>
<span className="text-xs text-slate-400">Income</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-indigo-500"></div>
<span className="text-xs text-slate-400">Spending</span>
</div>
</div>
</div>

</div>
</main>



    </>
  );
}
