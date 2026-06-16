import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Formatted local file path
        const BASE_PATH = "file:///D:/R&D/01_In_progress/Fence%20system/IMG/";

        const elements = {
            fence: document.getElementById('sel_fence'),
            base: document.getElementById('sel_base'),
            gate: document.getElementById('sel_gate'),
            light: document.getElementById('sel_light'),
            length: document.getElementById('L_total')
        };

        function updateAll() {
            const fenceVal = elements.fence.value;
            const baseVal = elements.base.value;
            const gateVal = elements.gate.value;
            const lightVal = elements.light.value;
            const lengthVal = parseFloat(elements.length.value) || 0;

            setImage('view_fence', fenceVal);
            setImage('view_base', baseVal);
            setImage('view_gate', gateVal);
            setImage('view_light', lightVal);

            const n_panels = Math.ceil(lengthVal / 1.8);
            const n_pillars = n_panels > 0 ? n_panels + 1 : 0;
            const total = (n_panels * 215) + (n_pillars * 85);

            document.getElementById('out_panels').innerText = `${n_panels} buc`;
            document.getElementById('out_pillars').innerText = `${n_pillars} buc`;
            document.getElementById('total_price').innerText = `${total.toLocaleString()} EUR`;
        }

        function setImage(id, value) {
            const img = document.getElementById(id);
            if (value.includes('No_')) {
                img.style.opacity = '0';
            } else {
                // Set the exact path: e.g., file:///D:/R&D/01_In_progress/Fence%20system/IMG/WPC_A.png
                img.src = BASE_PATH + value + ".png";
                img.style.opacity = '1'; // Show immediately without waiting for onload
            }
        }

        Object.values(elements).forEach(el => {
            el.addEventListener('input', updateAll);
        });

        // Initialize display
        updateAll();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-full md:w-80 lg:w-[22rem] bg-white border-b md:border-b-0 md:border-r border-neutral-200 flex flex-col h-[50vh] md:h-full z-10 shrink-0">

<div className="px-6 py-5 border-b border-neutral-100 flex items-center gap-2">
<div className="w-6 h-6 rounded-md bg-neutral-900 flex items-center justify-center">
<iconify-icon className="text-white text-sm" icon="solar:widget-add-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="tracking-tighter font-medium text-base">FENCE<span className="text-neutral-400 font-light">SYS</span></div>
</div>

<div className="p-6 flex-1 overflow-y-auto flex flex-col gap-6">
<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-neutral-500 uppercase tracking-widest flex items-center gap-1.5" htmlFor="L_total">
<iconify-icon icon="solar:ruler-linear" strokeWidth="1.5"></iconify-icon>
                    Lungime Proiect (m)
                </label>
<div className="relative">
<input className="w-full bg-neutral-50/50 border border-neutral-200 text-sm rounded-lg px-3 py-2.5 focus:outline-none focus:border-neutral-400 focus:ring-1 focus:ring-neutral-400 focus:bg-white transition-colors shadow-sm text-neutral-800 font-light" id="L_total" step="0.5" type="number" value="16.25"/>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-neutral-500 uppercase tracking-widest flex items-center gap-1.5" htmlFor="sel_fence">
<iconify-icon icon="solar:slider-vertical-linear" strokeWidth="1.5"></iconify-icon>
                    Tip Panou
                </label>
<div className="relative">
<select className="appearance-none w-full bg-white border border-neutral-200 text-sm rounded-lg pl-3 pr-10 py-2.5 focus:outline-none focus:border-neutral-400 focus:ring-1 focus:ring-neutral-400 transition-colors cursor-pointer shadow-sm text-neutral-700 font-light hover:bg-neutral-50/50" id="sel_fence">
<option value="Sheet_metal">Sheet Metal</option>
<option value="WPC_A">WPC A</option>
<option value="Alu_rectangular">Alu Rectangular</option>
<option value="Alu_diamond">Alu Diamond</option>
<option value="WPC_Vertical">WPC Vertical</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-neutral-400">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-neutral-500 uppercase tracking-widest flex items-center gap-1.5" htmlFor="sel_base">
<iconify-icon icon="solar:layers-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
                    Bază Pilon
                </label>
<div className="relative">
<select className="appearance-none w-full bg-white border border-neutral-200 text-sm rounded-lg pl-3 pr-10 py-2.5 focus:outline-none focus:border-neutral-400 focus:ring-1 focus:ring-neutral-400 transition-colors cursor-pointer shadow-sm text-neutral-700 font-light hover:bg-neutral-50/50" id="sel_base">
<option value="Standard">Standard (Beton)</option>
<option value="Height_adjustment">Reglabil</option>
<option value="On_grass">Pe Pământ</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-neutral-400">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-neutral-500 uppercase tracking-widest flex items-center gap-1.5" htmlFor="sel_gate">
<iconify-icon icon="solar:door-linear" strokeWidth="1.5"></iconify-icon>
                    Tip Poartă
                </label>
<div className="relative">
<select className="appearance-none w-full bg-white border border-neutral-200 text-sm rounded-lg pl-3 pr-10 py-2.5 focus:outline-none focus:border-neutral-400 focus:ring-1 focus:ring-neutral-400 transition-colors cursor-pointer shadow-sm text-neutral-700 font-light hover:bg-neutral-50/50" id="sel_gate">
<option value="Gate_A">Poarta A</option>
<option value="Gate_B">Poarta B</option>
<option value="No_Gate">Fără Poartă</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-neutral-400">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-neutral-500 uppercase tracking-widest flex items-center gap-1.5" htmlFor="sel_light">
<iconify-icon icon="solar:lightbulb-linear" strokeWidth="1.5"></iconify-icon>
                    Iluminat
                </label>
<div className="relative">
<select className="appearance-none w-full bg-white border border-neutral-200 text-sm rounded-lg pl-3 pr-10 py-2.5 focus:outline-none focus:border-neutral-400 focus:ring-1 focus:ring-neutral-400 transition-colors cursor-pointer shadow-sm text-neutral-700 font-light hover:bg-neutral-50/50" id="sel_light">
<option value="No_lights">Fără Iluminat</option>
<option value="Profile_lights">Benzi Profile</option>
<option value="On_pillar_lights">Spoturi Pilon</option>
<option value="Top_pillar_lights">Capac Iluminat</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-neutral-400">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>

<div className="mt-4 bg-neutral-100/50 border border-neutral-200 rounded-xl p-5 shadow-sm">
<div className="text-xs text-neutral-500 uppercase tracking-widest font-medium mb-4 flex items-center gap-1.5">
<iconify-icon icon="solar:bill-list-linear" strokeWidth="1.5"></iconify-icon>
                    Sumar Comandă
                </div>
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-neutral-500 font-light">Panouri</span>
<span className="text-sm font-medium text-neutral-800" id="out_panels">0 buc</span>
</div>
<div className="flex items-center justify-between mb-4 pb-4 border-b border-neutral-200/60">
<span className="text-sm text-neutral-500 font-light">Piloni fixare</span>
<span className="text-sm font-medium text-neutral-800" id="out_pillars">0 buc</span>
</div>
<div className="flex items-end justify-between mt-2">
<span className="text-sm text-neutral-500 font-light mb-0.5">Total estimativ</span>
<span className="text-lg tracking-tight font-medium text-neutral-900" id="total_price">0 EUR</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 p-4 md:p-6 lg:p-8 h-[50vh] md:h-full overflow-y-auto overflow-x-hidden">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 h-full min-h-[600px] md:min-h-0">

<div className="flex flex-col bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden h-full">
<div className="px-4 py-3 border-b border-neutral-100 flex items-center justify-between bg-neutral-50/50">
<h3 className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Panou Gard</h3>
<iconify-icon className="text-neutral-400 text-sm" icon="solar:maximize-square-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1 relative flex items-center justify-center p-6 bg-white">
<img alt="Panou Gard" className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] object-contain transition-opacity duration-300" id="view_fence" src=""/>
</div>
</div>

<div className="flex flex-col bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden h-full">
<div className="px-4 py-3 border-b border-neutral-100 flex items-center justify-between bg-neutral-50/50">
<h3 className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Sistem Fixare</h3>
<iconify-icon className="text-neutral-400 text-sm" icon="solar:maximize-square-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1 relative flex items-center justify-center p-6 bg-white">
<img alt="Sistem Fixare" className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] object-contain transition-opacity duration-300" id="view_base" src=""/>
</div>
</div>

<div className="flex flex-col bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden h-full">
<div className="px-4 py-3 border-b border-neutral-100 flex items-center justify-between bg-neutral-50/50">
<h3 className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Acces</h3>
<iconify-icon className="text-neutral-400 text-sm" icon="solar:maximize-square-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1 relative flex items-center justify-center p-6 bg-white">
<img alt="Poartă" className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] object-contain transition-opacity duration-300" id="view_gate" src=""/>
</div>
</div>

<div className="flex flex-col bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden h-full">
<div className="px-4 py-3 border-b border-neutral-100 flex items-center justify-between bg-neutral-50/50">
<h3 className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Sistem Iluminat</h3>
<iconify-icon className="text-neutral-400 text-sm" icon="solar:maximize-square-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1 relative flex items-center justify-center p-6 bg-white">
<img alt="Sistem Iluminat" className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] object-contain transition-opacity duration-300" id="view_light" src=""/>
</div>
</div>
</div>
</main>


    </>
  );
}
