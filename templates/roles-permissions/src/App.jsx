import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        window.toggleScopeObj = {
            activeClass: "group inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-blue-600 border border-blue-600 rounded-md text-white text-sm font-medium shadow-sm shadow-blue-200 transition-all cursor-pointer",
            inactiveClass: "group inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-slate-600 text-sm font-medium hover:bg-white hover:border-slate-300 hover:text-slate-900 transition-all shadow-sm cursor-pointer",
            checkIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><polyline points="20 6 9 17 4 12"></polyline></svg>',
            
            toggle: function(btn) {
                const container = btn.closest('[data-element-id="aura-emkh7hp6v5y6lt7y"]');
                const buttons = Array.from(container.querySelectorAll('button'));
                const text = btn.innerText.trim();
                const isAll = text === 'All';
                const isNone = text === 'None';
                const isActive = btn.classList.contains('bg-blue-600');

                const updateBtn = (b, active) => {
                    b.className = active ? this.activeClass : this.inactiveClass;
                    const icon = b.querySelector('svg');
                    if (active && !icon) b.insertAdjacentHTML('afterbegin', this.checkIcon);
                    if (!active && icon) icon.remove();
                };

                if (isAll || isNone) {
                    // Exclusive selection: Select clicked, deselect all others
                    buttons.forEach(b => updateBtn(b, b === btn));
                } else {
                    // Multi-selection: Toggle clicked
                    updateBtn(btn, !isActive);
                    // If turning ON, deselect 'All' and 'None'
                    if (!isActive) {
                        buttons.forEach(b => {
                            const t = b.innerText.trim();
                            if (t === 'All' || t === 'None') updateBtn(b, false);
                        });
                    }
                }
            }
        };
    


        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full max-w-5xl bg-white rounded-xl border border-slate-200 shadow-[0px_1px_2px_rgba(0,0,0,0.04)] overflow-hidden">

<div className="flex pt-6 pr-6 pb-6 pl-6 items-start justify-between">
<div className="max-w-2xl space-y-1.5">
<h1 className="text-lg font-semibold text-slate-900 tracking-tight">Manage Users</h1>
<p className="leading-relaxed text-sm text-slate-500">
                    User profiles and account information. Controls who can view, edit, and manage user data.
                </p>
</div>
<div className="flex gap-4 pt-1 gap-x-4 gap-y-4 items-center">
<span className="flex items-center gap-2 text-sm font-medium text-slate-400">
<span className="flex items-center gap-1.5 text-sm text-slate-700">
<span className="flex items-center justify-center min-w-[1.25rem] h-5 px-1 text-xs font-medium text-white bg-blue-600 rounded-full">2</span>
<span className="">scopes</span>
</span>
<span className="text-slate-300">•</span>
<span className="flex items-center gap-1.5 text-sm">
<span className="flex items-center justify-center min-w-[1.25rem] h-5 px-1 text-xs font-medium text-slate-500 bg-slate-100 rounded-full">0</span>
<span className="">actions</span>
</span>
</span>
<button className="flex items-center justify-center w-8 h-8 rounded-md bg-indigo-50/50 hover:bg-slate-100 text-slate-500 transition-colors border border-transparent">
<svg className="lucide lucide-chevron-up w-5 h-5" data-lucide="chevron-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6"></path></svg>
</button>
</div>
</div>

<div className="h-px w-full bg-slate-100"></div>

<div className="pt-6 pr-6 pb-6 pl-6 space-y-8">

<div className="space-y-4">
<h2 className="flex items-center gap-2 text-base font-medium text-slate-900">
    Scope
    <div className="group relative flex items-center justify-center">
<svg className="hover:text-slate-600 transition-colors cursor-help w-[16px] h-[16px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(71, 85, 105)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="12" cy="12" r="10"></circle>
<path className="" d="M12 16v-4"></path>
<path className="" d="M12 8h.01"></path>
</svg>
</div>
</h2>
<div className="flex flex-wrap gap-2 gap-x-2 gap-y-2">


<button className="group inline-flex gap-1.5 hover:bg-white hover:border-slate-300 hover:text-slate-900 transition-all cursor-pointer text-sm font-medium text-slate-600 bg-slate-50 border-slate-200 border rounded-md pt-1.5 pr-3 pb-1.5 pl-3 shadow-sm gap-x-1.5 gap-y-1.5 items-center justify-center" onclick="window.toggleScopeObj.toggle(this)">
        None
    </button>

<button className="group inline-flex hover:bg-white hover:border-slate-300 hover:text-slate-900 transition-all cursor-pointer text-sm font-medium text-slate-600 bg-slate-50 border-slate-200 border rounded-md pt-1.5 pr-3 pb-1.5 pl-3 shadow-sm gap-x-1.5 gap-y-1.5 items-center justify-center" onclick="window.toggleScopeObj.toggle(this)">
        Assigned
    </button>

<button className="group inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-blue-600 border border-blue-600 rounded-md text-white text-sm font-medium shadow-sm shadow-blue-200 transition-all cursor-pointer" onclick="window.toggleScopeObj.toggle(this)">
<svg className="lucide lucide-check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polyline className="" points="20 6 9 17 4 12"></polyline></svg>
        Employer
    </button>

<button className="group inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-blue-600 border border-blue-600 rounded-md text-white text-sm font-medium shadow-sm shadow-blue-200 transition-all cursor-pointer" onclick="window.toggleScopeObj.toggle(this)">
<svg className="lucide lucide-check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polyline className="" points="20 6 9 17 4 12"></polyline></svg>
        Group
    </button>

<button className="group inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-slate-600 text-sm font-medium hover:bg-white hover:border-slate-300 hover:text-slate-900 transition-all shadow-sm cursor-pointer" onclick="window.toggleScopeObj.toggle(this)">
        Tag
    </button>

<button className="group inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-slate-600 text-sm font-medium hover:bg-white hover:border-slate-300 hover:text-slate-900 transition-all shadow-sm cursor-pointer" onclick="window.toggleScopeObj.toggle(this)">
        All
    </button>
</div>
</div>

<div className="space-y-4">
<h2 className="text-base font-medium text-slate-900">Actions</h2>
<div className="grid grid-cols-1 md:grid-cols-3 text-sm gap-x-4 gap-y-4">

<label className="group flex items-center cursor-pointer hover:bg-slate-50 transition-colors text-sm bg-slate-50/30 border-slate-200 border rounded-lg pt-4 pr-4 pb-4 pl-4 relative">
<div className="flex items-center h-5">
<input className="peer sr-only" type="checkbox"/>
<div className="flex transition-all peer-checked:bg-blue-600 peer-checked:border-blue-600 bg-white w-5 h-5 border-slate-400 border-2 rounded items-center justify-center">

</div>
</div>
<span className="ml-3 text-sm font-medium text-slate-600 group-hover:text-slate-900">View</span>
</label>

<label className="group flex items-center cursor-pointer hover:bg-slate-50 transition-colors bg-slate-50/30 border-slate-200 border rounded-lg pt-4 pr-4 pb-4 pl-4 relative">
<div className="flex items-center h-5">
<input className="peer sr-only" type="checkbox"/>
<div className="flex transition-all peer-checked:bg-blue-600 peer-checked:border-blue-600 bg-white w-5 h-5 border-slate-400 border-2 rounded items-center justify-center">
</div>
</div>
<span className="ml-3 text-sm font-medium text-slate-600 group-hover:text-slate-900">Edit</span>
</label>

<label className="group flex items-center cursor-pointer hover:bg-slate-50 transition-colors bg-slate-50/30 border-slate-200 border rounded-lg pt-4 pr-4 pb-4 pl-4 relative">
<div className="flex items-center h-5">
<input className="peer sr-only" type="checkbox"/>
<div className="flex transition-all peer-checked:bg-blue-600 peer-checked:border-blue-600 bg-white w-5 h-5 border-slate-400 border-2 rounded items-center justify-center">
</div>
</div>
<span className="ml-3 text-sm font-medium text-slate-600 group-hover:text-slate-900">Contact</span>
</label>
</div>
</div>
</div>
</div>


    </>
  );
}
