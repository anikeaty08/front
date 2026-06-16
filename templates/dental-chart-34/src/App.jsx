import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Icons
        lucide.createIcons();

        // Tooth Geometry Definitions (Simplified Vector Paths)
        // Designed to look like the Linear style sketch
        const PATHS = {
            molar: "M10,2 C15,-1 35,-1 40,2 C45,5 48,15 48,25 C48,35 45,40 40,42 L42,65 Q45,75 35,70 L30,55 L25,70 Q15,80 15,60 L12,70 Q5,75 8,55 L10,42 C5,40 2,35 2,25 C2,15 5,5 10,2 Z",
            premolar: "M10,5 C15,2 30,2 35,5 C40,10 42,20 42,28 C42,35 40,40 35,42 L36,65 C37,75 25,75 24,60 L22,75 C20,80 10,75 12,60 L10,42 C5,40 3,35 3,28 C3,20 5,10 10,5 Z",
            canine: "M10,10 C15,5 25,5 30,10 C35,15 38,25 35,35 L30,40 L25,75 C23,85 17,85 15,75 L10,40 C2,35 5,15 10,10 Z",
            incisor: "M8,10 C12,8 24,8 28,10 C32,12 34,20 32,35 L30,38 L22,70 C20,78 16,78 14,70 L6,38 C2,20 4,12 8,10 Z"
        };

        const WIDTHS = {
            molar: 50,
            premolar: 44,
            canine: 40,
            incisor: 36
        };

        // Data for Quadrants
        // Type: 1=Central, 2=Lateral, 3=Canine, 4-5=Premolar, 6-8=Molar
        const teethData = [
            // Q1: 18 -> 11
            { id: 18, type: 'molar', q: 1 }, { id: 17, type: 'molar', q: 1 }, { id: 16, type: 'molar', q: 1 },
            { id: 15, type: 'premolar', q: 1 }, { id: 14, type: 'premolar', q: 1 }, { id: 13, type: 'canine', q: 1 },
            { id: 12, type: 'incisor', q: 1 }, { id: 11, type: 'incisor', q: 1 },
            // Q2: 21 -> 28
            { id: 21, type: 'incisor', q: 2 }, { id: 22, type: 'incisor', q: 2 }, { id: 23, type: 'canine', q: 2 },
            { id: 24, type: 'premolar', q: 2 }, { id: 25, type: 'premolar', q: 2 }, { id: 26, type: 'molar', q: 2 },
            { id: 27, type: 'molar', q: 2 }, { id: 28, type: 'molar', q: 2 },
            // Q4: 48 -> 41
            { id: 48, type: 'molar', q: 4 }, { id: 47, type: 'molar', q: 4 }, { id: 46, type: 'molar', q: 4 },
            { id: 45, type: 'premolar', q: 4 }, { id: 44, type: 'premolar', q: 4 }, { id: 43, type: 'canine', q: 4 },
            { id: 42, type: 'incisor', q: 4 }, { id: 41, type: 'incisor', q: 4 },
            // Q3: 31 -> 38
            { id: 31, type: 'incisor', q: 3 }, { id: 32, type: 'incisor', q: 3 }, { id: 33, type: 'canine', q: 3 },
            { id: 34, type: 'premolar', q: 3 }, { id: 35, type: 'premolar', q: 3 }, { id: 36, type: 'molar', q: 3 },
            { id: 37, type: 'molar', q: 3 }, { id: 38, type: 'molar', q: 3 },
        ];

        const state = {
            selected: new Set()
        };

        function renderTooth(tooth) {
            const isLower = tooth.q === 3 || tooth.q === 4;
            const w = WIDTHS[tooth.type];
            const h = 85; // Fixed height for alignment
            
            // For upper teeth, we flip the path vertically to make roots point UP
            // For lower teeth, roots point DOWN (default path orientation roughly)
            // Actually, my paths are drawn with root down. 
            // So: Lower teeth = normal. Upper teeth = scale(1, -1).
            
            const transform = isLower ? '' : 'transform="scale(1, -1) translate(0, -80)"'; 
            
            // Create SVG
            const svgHtml = `
                <svg viewBox="0 0 50 85" width="${w}" height="${h}" class="overflow-visible">
                    <path d="${PATHS[tooth.type]}" 
                          ${transform}
                          class="tooth-path fill-white stroke-gray-300 stroke-1"
                          vector-effect="non-scaling-stroke" />
                    <!-- Crown Highlight detail (optional, subtle) -->
                    <path d="M10,25 Q25,30 40,25" 
                          ${transform}
                          class="stroke-gray-100 fill-none opacity-50 pointer-events-none" />
                </svg>
            `;

            const wrapper = document.createElement('div');
            wrapper.className = `tooth-container cursor-pointer flex flex-col items-center justify-end select-none transition-transform active:scale-95`;
            wrapper.style.width = `${w}px`;
            wrapper.dataset.id = tooth.id;
            wrapper.onclick = () => toggleTooth(tooth.id);
            wrapper.innerHTML = svgHtml;

            return wrapper;
        }

        function renderNumber(tooth) {
            const div = document.createElement('div');
            div.className = `tooth-number w-[${WIDTHS[tooth.type]}px] text-center transition-colors`;
            div.innerText = tooth.id;
            div.style.width = `${WIDTHS[tooth.type]}px`;
            div.id = `num-${tooth.id}`;
            return div;
        }

        function init() {
            // Render Teeth
            teethData.forEach(tooth => {
                const containerId = `q${tooth.q}-container`;
                const numberContainerId = `q${tooth.q}-numbers`;
                
                document.getElementById(containerId).appendChild(renderTooth(tooth));
                document.getElementById(numberContainerId).appendChild(renderNumber(tooth));
            });
        }

        function toggleTooth(id) {
            const el = document.querySelector(`.tooth-container[data-id="${id}"]`);
            const numEl = document.getElementById(`num-${id}`);
            
            if (state.selected.has(id)) {
                state.selected.delete(id);
                el.classList.remove('selected');
            } else {
                state.selected.add(id);
                el.classList.add('selected');
            }
            updateUI();
        }

        function resetSelection() {
            state.selected.clear();
            document.querySelectorAll('.tooth-container').forEach(el => el.classList.remove('selected'));
            updateUI();
        }

        function updateUI() {
            // Update Count
            document.getElementById('selection-count').innerText = state.selected.size;

            // Update List Panel
            const list = document.getElementById('selected-list');
            const panel = document.getElementById('details-panel');
            list.innerHTML = '';

            if (state.selected.size > 0) {
                panel.classList.remove('hidden');
                // Sort IDs for display
                const sortedIds = Array.from(state.selected).sort((a,b) => a - b);
                
                sortedIds.forEach(id => {
                    const pill = document.createElement('div');
                    pill.className = 'bg-gray-50 border border-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2';
                    pill.innerHTML = `
                        <span>#${id}</span>
                        <button onclick="toggleTooth(${id})" class="text-gray-400 hover:text-red-500">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                    `;
                    list.appendChild(pill);
                });
            } else {
                panel.classList.add('hidden');
            }
        }

        // Run
        init();

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="border-b border-gray-100 py-4 px-6 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-50">
<div className="flex items-center gap-3">
<div className="bg-gray-50 p-2 rounded-lg border border-gray-100">
<i className="w-5 h-5 text-gray-700" data-lucide="activity"></i>
</div>
<h1 className="text-lg font-medium tracking-tight text-gray-900">Odontogramma Paziente</h1>
</div>
<div className="flex items-center gap-4">
<button className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" onclick="resetSelection()">
                Reset
            </button>
<button className="bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium py-2 px-4 rounded-md shadow-sm transition-all flex items-center gap-2">
<i className="w-4 h-4" data-lucide="save"></i>
                Salva Piano
            </button>
</div>
</nav>

<main className="flex-1 max-w-7xl w-full mx-auto p-6 lg:p-10 flex flex-col items-center">

<div className="w-full flex justify-between items-end mb-12">
<div>
<h2 className="text-2xl font-medium tracking-tight mb-2">Stato Dentale</h2>
<p className="text-base text-gray-500 max-w-lg leading-relaxed">
                    Seleziona i denti per assegnare trattamenti o segnalare patologie. Clicca su un dente per selezionarlo o deselezionarlo.
                </p>
</div>
<div className="hidden md:flex flex-col items-end">
<span className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">Selezionati</span>
<div className="text-3xl font-medium tracking-tight text-gray-900" id="selection-count">0</div>
</div>
</div>

<div className="w-full bg-white rounded-2xl border border-gray-200 shadow-sm p-8 overflow-hidden relative">

<div className="absolute top-1/2 left-0 w-full h-12 -translate-y-1/2 bg-gradient-to-r from-orange-50 via-red-50 to-orange-50 opacity-40 blur-xl pointer-events-none"></div>
<div className="overflow-x-auto no-scrollbar pb-4">
<div className="min-w-[800px] flex flex-col gap-8 relative">


<div className="flex flex-col">
<div className="flex justify-center items-end gap-1 sm:gap-2 border-b border-gray-100 pb-6 relative">

<div className="flex gap-1 sm:gap-2 justify-end flex-1" id="q1-container">

</div>

<div className="h-24 w-px bg-gray-200 mx-2 self-end"></div>

<div className="flex gap-1 sm:gap-2 justify-start flex-1" id="q2-container">

</div>
</div>

<div className="flex justify-center pt-3 text-sm text-gray-500 font-medium">
<div className="flex gap-1 sm:gap-2 justify-end flex-1" id="q1-numbers"></div>
<div className="w-px mx-2"></div>
<div className="flex gap-1 sm:gap-2 justify-start flex-1" id="q2-numbers"></div>
</div>
</div>

<div className="absolute top-1/2 left-0 w-full border-t border-dashed border-gray-200 -mt-1 pointer-events-none"></div>

<div className="flex flex-col mt-2">

<div className="flex justify-center pb-3 text-sm text-gray-500 font-medium">
<div className="flex gap-1 sm:gap-2 justify-end flex-1" id="q4-numbers"></div>
<div className="w-px mx-2"></div>
<div className="flex gap-1 sm:gap-2 justify-start flex-1" id="q3-numbers"></div>
</div>
<div className="flex justify-center items-start gap-1 sm:gap-2 border-t border-gray-100 pt-6 relative">

<div className="flex gap-1 sm:gap-2 justify-end flex-1" id="q4-container">

</div>

<div className="h-24 w-px bg-gray-200 mx-2 self-start"></div>

<div className="flex gap-1 sm:gap-2 justify-start flex-1" id="q3-container">

</div>
</div>
</div>
</div>
</div>

<div className="mt-8 pt-6 border-t border-gray-100 hidden" id="details-panel">
<h3 className="text-base font-medium text-gray-900 mb-4 flex items-center gap-2">
<i className="w-4 h-4 text-gray-400" data-lucide="list-checks"></i>
                    Denti Selezionati
                </h3>
<div className="flex flex-wrap gap-2" id="selected-list">

</div>
</div>
</div>
</main>
<footer className="mt-auto py-8 text-center text-sm text-gray-400 border-t border-gray-50">
<p>© 2024 Dental Chart UI. Designed for precise clinical use.</p>
</footer>



    </>
  );
}
