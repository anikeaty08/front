import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- DATA INITIALIZATION ---
        const initialData = [
            { "id": "elf", "displayName": "Elf", "tagline": "Agile and tireless, moves like the wind.", "healthBonus": 0.0, "staminaBonus": 15.0, "fallDamageReduction": 0.0, "healthRegenerationBonus": 0.0, "staminaRegenerationBonus": 0.5, "manaRegenerationBonus": 0.0, "oxygenRegenerationBonus": 0.0, "strengths": [ "100 HP (base)", "25 Stamina (+15)", "Extended mobility" ], "weaknesses": [ "No health bonus", "Stamina-dependent playstyle" ], "weapons": [], "damageResistances": {} },
            { "id": "orc", "displayName": "Orc", "tagline": "Brutish and relentless, crushes all opposition.", "healthBonus": 75.0, "staminaBonus": 0.0, "fallDamageReduction": 0.0, "healthRegenerationBonus": 0.2, "staminaRegenerationBonus": 0.0, "manaRegenerationBonus": 0.0, "oxygenRegenerationBonus": 0.0, "strengths": [ "175 HP (+75)", "Massive health pool", "Tank role" ], "weaknesses": [ "10 Stamina (base)", "Limited mobility" ], "weapons": [], "damageResistances": {} },
            { "id": "human", "displayName": "Human", "tagline": "Balanced and adaptable, jack of all trades.", "healthBonus": 35.0, "staminaBonus": 5.0, "fallDamageReduction": 0.0, "healthRegenerationBonus": 0.0, "staminaRegenerationBonus": 0.0, "manaRegenerationBonus": 0.0, "oxygenRegenerationBonus": 0.0, "strengths": [ "135 HP (+35)", "15 Stamina (+5)", "Well-rounded stats" ], "weaknesses": [ "No specialization", "Average at everything" ], "weapons": [], "damageResistances": {} },
            { "id": "tiefling", "displayName": "Tiefling", "tagline": "Demon-touched bloodline, born of fire.", "healthBonus": -15.0, "staminaBonus": 8.0, "fallDamageReduction": 0.0, "healthRegenerationBonus": 0.0, "staminaRegenerationBonus": 0.0, "manaRegenerationBonus": 0.5, "oxygenRegenerationBonus": 0.0, "strengths": [ "85 HP (-15)", "18 Stamina (+8)", "Immune to Fire Damage", "Immune to Lava Damage", "Infernal heritage" ], "weaknesses": [ "Fragile physique", "Vulnerable to Magic damage (+50%)", "Mistrusted by common folk" ], "weapons": [], "damageResistances": { "Fire": 0.0, "Magic": 1.5, "Lava": 0.0 } },
            { "id": "dwarf", "displayName": "Dwarf", "tagline": "Sturdy craftsmen with unbreakable resilience.", "healthBonus": 50.0, "staminaBonus": 0.0, "fallDamageReduction": 0.0, "healthRegenerationBonus": 0.0, "staminaRegenerationBonus": 0.0, "manaRegenerationBonus": 0.0, "oxygenRegenerationBonus": 0.2, "strengths": [ "150 HP (+50)", "10 Stamina (base)", "30% Physical resistance", "50% Fall resistance", "Tank Specialist" ], "weaknesses": [ "Short Stature (reduced reach)", "Very Low Mobility", "Slow Movement" ], "weapons": [], "damageResistances": { "Physical": 0.7, "Fall": 0.5 } }
        ];

        let races = JSON.parse(JSON.stringify(initialData));
        let selectedIndex = -1;

        // --- DOM ELEMENTS ---
        const dom = {
            raceList: document.getElementById('raceList'),
            editor: document.getElementById('editorContainer'),
            empty: document.getElementById('emptyState'),
            headerId: document.getElementById('headerId'),
            headerName: document.getElementById('headerName'),
            tagline: document.getElementById('taglineInput'),
            id: document.getElementById('idInput'),
            name: document.getElementById('nameInput'),
            
            // Stats
            health: document.getElementById('healthBonus'),
            stamina: document.getElementById('staminaBonus'),
            healthRegen: document.getElementById('healthRegen'),
            staminaRegen: document.getElementById('staminaRegen'),
            mana: document.getElementById('manaRegen'),
            oxygenRegen: document.getElementById('oxygenRegen'),
            fall: document.getElementById('fallDamage'),

            strengths: document.getElementById('strengthsInput'),
            weaknesses: document.getElementById('weaknessesInput'),
            resistancesContainer: document.getElementById('resistancesContainer'),
            noResistances: document.getElementById('noResistances')
        };

        // --- RENDER FUNCTIONS ---

        function renderSidebar() {
            dom.raceList.innerHTML = '';
            races.forEach((race, index) => {
                const isActive = index === selectedIndex;
                const btn = document.createElement('button');
                btn.className = `w-full text-left px-3 py-2.5 rounded text-xs font-medium flex items-center justify-between group transition-all ${
                    isActive ? 'bg-white text-black shadow-sm border border-gray-200' : 'text-gray-500 hover:bg-white hover:text-gray-800'
                }`;
                btn.onclick = () => selectRace(index);
                btn.innerHTML = `
                    <div class="flex items-center gap-2.5">
                        <div class="w-1.5 h-1.5 rounded-full ${isActive ? 'bg-black' : 'bg-transparent group-hover:bg-gray-300'}"></div>
                        <span>${race.displayName}</span>
                    </div>
                    ${isActive ? '<iconify-icon icon="solar:pen-new-square-linear" width="14"></iconify-icon>' : ''}
                `;
                dom.raceList.appendChild(btn);
            });
        }

        function selectRace(index) {
            selectedIndex = index;
            renderSidebar(); // Update active state
            dom.empty.classList.add('hidden');
            dom.editor.classList.remove('hidden');
            
            // Re-trigger animation
            dom.editor.classList.remove('animate-fade-in');
            void dom.editor.offsetWidth; 
            dom.editor.classList.add('animate-fade-in');

            populateEditor();
        }

        function populateEditor() {
            if(selectedIndex === -1) return;
            const data = races[selectedIndex];

            dom.headerId.innerText = data.id;
            dom.headerName.innerText = data.displayName;
            dom.tagline.value = data.tagline || "";
            dom.id.value = data.id;
            dom.name.value = data.displayName;

            // Stats
            dom.health.value = data.healthBonus;
            dom.stamina.value = data.staminaBonus;
            dom.healthRegen.value = data.healthRegenerationBonus || 0;
            dom.staminaRegen.value = data.staminaRegenerationBonus || 0;
            dom.mana.value = data.manaRegenerationBonus || 0;
            dom.oxygenRegen.value = data.oxygenRegenerationBonus || 0;
            dom.fall.value = data.fallDamageReduction || 0;

            // Text Areas (Arrays to Multi-line String)
            dom.strengths.value = (data.strengths || []).join('\n');
            dom.weaknesses.value = (data.weaknesses || []).join('\n');

            renderResistances(data.damageResistances);
        }

        function renderResistances(map) {
            dom.resistancesContainer.innerHTML = '';
            const keys = Object.keys(map || {});
            
            if (keys.length === 0) {
                dom.noResistances.classList.remove('hidden');
            } else {
                dom.noResistances.classList.add('hidden');
                keys.forEach(key => {
                    const val = map[key];
                    const div = document.createElement('div');
                    div.className = "flex items-center gap-2 animate-fade-in";
                    div.innerHTML = `
                        <input type="text" value="${key}" onchange="updateResKey('${key}', this.value)" class="flex-1 bg-white border border-gray-200 text-xs text-gray-700 rounded px-2 py-1.5 focus:border-gray-400 focus:outline-none focus:ring-0 placeholder-gray-300" placeholder="Type (e.g. Fire)">
                        <div class="flex items-center bg-gray-50 border border-gray-200 rounded px-2">
                            <span class="text-[10px] text-gray-400 font-mono">x</span>
                            <input type="number" step="0.1" value="${val}" onchange="updateResVal('${key}', this.value)" class="w-12 bg-transparent border-none text-xs text-center font-medium py-1.5 focus:ring-0">
                        </div>
                        <button onclick="removeRes('${key}')" class="text-gray-300 hover:text-red-500 transition-colors p-1">
                            <iconify-icon icon="solar:trash-bin-trash-linear" width="14"></iconify-icon>
                        </button>
                    `;
                    dom.resistancesContainer.appendChild(div);
                });
            }
        }

        // --- UPDATE LOGIC ---

        function updateData(key, value) {
            if(selectedIndex === -1) return;
            races[selectedIndex][key] = value;
            
            // Special updates for UI mirroring
            if(key === 'displayName') {
                dom.headerName.innerText = value;
                renderSidebar(); // Refresh list names
            }
            if(key === 'id') {
                dom.headerId.innerText = value;
            }
        }

        // Event Listeners for inputs
        dom.name.addEventListener('input', (e) => updateData('displayName', e.target.value));
        dom.id.addEventListener('input', (e) => updateData('id', e.target.value));
        dom.tagline.addEventListener('input', (e) => updateData('tagline', e.target.value));
        
        dom.health.addEventListener('input', (e) => updateData('healthBonus', parseFloat(e.target.value) || 0));
        dom.stamina.addEventListener('input', (e) => updateData('staminaBonus', parseFloat(e.target.value) || 0));
        dom.healthRegen.addEventListener('input', (e) => updateData('healthRegenerationBonus', parseFloat(e.target.value) || 0));
        dom.staminaRegen.addEventListener('input', (e) => updateData('staminaRegenerationBonus', parseFloat(e.target.value) || 0));
        dom.mana.addEventListener('input', (e) => updateData('manaRegenerationBonus', parseFloat(e.target.value) || 0));
        dom.oxygenRegen.addEventListener('input', (e) => updateData('oxygenRegenerationBonus', parseFloat(e.target.value) || 0));
        dom.fall.addEventListener('input', (e) => updateData('fallDamageReduction', parseFloat(e.target.value) || 0));
        
        dom.strengths.addEventListener('change', (e) => {
            const lines = e.target.value.split('\n').filter(line => line.trim() !== '');
            races[selectedIndex].strengths = lines;
        });

        dom.weaknesses.addEventListener('change', (e) => {
            const lines = e.target.value.split('\n').filter(line => line.trim() !== '');
            races[selectedIndex].weaknesses = lines;
        });

        // Resistance Logic
        function addResistance() {
            if(selectedIndex === -1) return;
            if(!races[selectedIndex].damageResistances) races[selectedIndex].damageResistances = {};
            
            const newKey = "New_Type_" + Object.keys(races[selectedIndex].damageResistances).length;
            races[selectedIndex].damageResistances[newKey] = 1.0;
            renderResistances(races[selectedIndex].damageResistances);
        }

        function removeRes(key) {
            delete races[selectedIndex].damageResistances[key];
            renderResistances(races[selectedIndex].damageResistances);
        }

        function updateResKey(oldKey, newKey) {
            if(oldKey === newKey) return;
            const val = races[selectedIndex].damageResistances[oldKey];
            delete races[selectedIndex].damageResistances[oldKey];
            races[selectedIndex].damageResistances[newKey] = val;
            renderResistances(races[selectedIndex].damageResistances); // Re-render to sort inputs correctly
        }

        function updateResVal(key, val) {
            races[selectedIndex].damageResistances[key] = parseFloat(val);
        }

        function createNewRace() {
            const newRace = {
                id: "new_race",
                displayName: "New Race",
                tagline: "Description pending...",
                healthBonus: 0, staminaBonus: 0, fallDamageReduction: 0,
                healthRegenerationBonus: 0, staminaRegenerationBonus: 0, manaRegenerationBonus: 0, oxygenRegenerationBonus: 0,
                strengths: [], weaknesses: [], weapons: [], damageResistances: {}
            };
            races.push(newRace);
            selectRace(races.length - 1);
        }

        function deleteCurrentRace() {
            if(confirm("Are you sure you want to delete " + races[selectedIndex].displayName + "?")) {
                races.splice(selectedIndex, 1);
                selectedIndex = -1;
                dom.editor.classList.add('hidden');
                dom.empty.classList.remove('hidden');
                renderSidebar();
            }
        }

        function exportJSON() {
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(races, null, 2));
            const downloadAnchorNode = document.createElement('a');
            downloadAnchorNode.setAttribute("href", dataStr);
            downloadAnchorNode.setAttribute("download", "races_config.json");
            document.body.appendChild(downloadAnchorNode);
            downloadAnchorNode.click();
            downloadAnchorNode.remove();
        }

        // --- GENERATOR LOGIC ---
        function autoGenerateDescriptions() {
            if(selectedIndex === -1) return;
            const race = races[selectedIndex];
            const s = [];
            const w = [];

            // Base Calculations
            const baseHp = 100 + race.healthBonus;
            const baseStam = 10 + race.staminaBonus;

            // Health Logic
            if(race.healthBonus > 0) s.push(`${baseHp} HP (+${race.healthBonus})`);
            else if(race.healthBonus < 0) w.push(`${baseHp} HP (Fragile physique)`);
            else s.push("100 HP (Base)");

            if(race.healthRegenerationBonus > 0) s.push("Accelerated Health Regen");

            if(race.healthBonus >= 50) s.push("Massive health pool");

            // Stamina Logic
            if(race.staminaBonus > 0) s.push(`${baseStam} Stamina (+${race.staminaBonus})`);
            else if (race.staminaBonus < 0) w.push("Low Stamina");
            else if (baseStam === 10) w.push("10 Stamina (Base)");

            if(race.staminaRegenerationBonus > 0) s.push("Fast Stamina Recovery");

            // Resistances
            Object.entries(race.damageResistances).forEach(([type, val]) => {
                if(val === 0) s.push(`Immune to ${type}`);
                else if(val < 1.0) s.push(`Resistant to ${type} (${Math.round((1-val)*100)}%)`);
                else if(val > 1.0) w.push(`Vulnerable to ${type} (+${Math.round((val-1)*100)}%)`);
            });

            // Fall Damage
            if(race.fallDamageReduction > 0) s.push("Reduced fall damage");
            
            // Mana
            if(race.manaRegenerationBonus > 0) s.push("Increased Mana Regeneration");

             // Oxygen
             if(race.oxygenRegenerationBonus > 0) s.push("Amphibious / High Oxygen Regen");

            // Update Model & UI
            race.strengths = s;
            race.weaknesses = w;
            dom.strengths.value = s.join('\n');
            dom.weaknesses.value = w.join('\n');
            
            // Flash effect to show update
            dom.strengths.classList.add('bg-emerald-50');
            setTimeout(() => dom.strengths.classList.remove('bg-emerald-50'), 300);
        }

        // Init
        renderSidebar();

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-full md:w-64 border-r border-gray-100 flex flex-col h-full bg-gray-50/50">
<div className="p-4 border-b border-gray-100 flex items-center justify-between">
<div className="flex items-center gap-2 text-gray-900 font-medium tracking-tight">
<div className="w-6 h-6 bg-black text-white flex items-center justify-center rounded">
<span className="text-xs font-bold">R</span>
</div>
<span>Race Editor</span>
</div>
<button className="text-gray-400 hover:text-black transition-colors" onclick="createNewRace()" title="Add New Race">
<iconify-icon icon="solar:add-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto p-2 space-y-0.5" id="raceList">

</div>
<div className="p-3 border-t border-gray-100">
<button className="w-full flex items-center justify-center gap-2 bg-black text-white py-2 rounded shadow-sm hover:bg-gray-800 transition-all font-medium text-xs" onclick="exportJSON()">
<iconify-icon icon="solar:download-linear" strokeWidth="1.5" width="16"></iconify-icon>
                Download JSON
            </button>
</div>
</aside>

<main className="flex-1 h-full overflow-y-auto bg-white relative">
<div className="max-w-4xl mx-auto min-h-full pb-20 animate-fade-in hidden" id="editorContainer">

<header className="sticky top-0 bg-white/80 backdrop-blur-sm z-10 px-8 py-6 border-b border-gray-100 flex justify-between items-start">
<div>
<div className="flex items-center gap-2 text-gray-400 mb-1">
<span className="text-xs uppercase tracking-wider font-medium">Configuration</span>
<iconify-icon icon="solar:alt-arrow-right-linear" width="10"></iconify-icon>
<span className="text-xs font-mono text-gray-500" id="headerId">elf</span>
</div>
<h1 className="text-2xl text-gray-900 font-medium tracking-tight" id="headerName">Elf</h1>
<input className="mt-2 w-full min-w-[300px] bg-transparent border-none p-0 text-gray-500 placeholder-gray-300 focus:ring-0 text-sm" id="taglineInput" placeholder="Enter a brief tagline description..." type="text"/>
</div>
<div className="flex gap-2">
<button className="text-red-500 hover:bg-red-50 p-2 rounded transition-colors" onclick="deleteCurrentRace()" title="Delete Race">
<iconify-icon icon="solar:trash-bin-trash-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</header>
<div className="px-8 py-8 space-y-10">

<section>
<div className="flex items-center gap-2 mb-4 text-gray-900 font-medium">
<iconify-icon icon="solar:user-id-linear" strokeWidth="1.5" width="18"></iconify-icon>
<h2>Identity</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="group">
<label className="block text-xs text-gray-500 mb-1.5 group-focus-within:text-black transition-colors">Display Name</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 text-gray-900 focus:outline-none focus:border-gray-400 focus:ring-0 transition-all placeholder-gray-300 font-medium" id="nameInput" type="text"/>
</div>
<div className="group">
<label className="block text-xs text-gray-500 mb-1.5 group-focus-within:text-black transition-colors">Unique ID (Internal)</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 text-gray-600 font-mono text-xs focus:outline-none focus:border-gray-400 focus:ring-0 transition-all placeholder-gray-300" id="idInput" type="text"/>
</div>
</div>
</section>
<hr className="border-gray-100"/>

<section>
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2 text-gray-900 font-medium">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="18"></iconify-icon>
<h2>Base Attributes</h2>
</div>
<span className="text-xs text-gray-400">Values are added to base player stats</span>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="bg-white border border-gray-200 rounded p-4 hover:border-gray-300 transition-colors group focus-within:ring-1 focus-within:ring-black focus-within:border-black">
<div className="flex items-center justify-between mb-2">
<label className="text-xs text-gray-500 font-medium">Health Bonus</label>
<iconify-icon className="text-gray-300 group-focus-within:text-black" icon="solar:heart-linear" width="16"></iconify-icon>
</div>
<div className="flex items-baseline gap-1">
<span className="text-gray-400 text-xs font-medium">+</span>
<input className="w-full bg-transparent border-none p-0 text-lg font-medium text-gray-900 focus:ring-0" id="healthBonus" placeholder="0" step="5" type="number"/>
</div>
</div>

<div className="bg-white border border-gray-200 rounded p-4 hover:border-gray-300 transition-colors group focus-within:ring-1 focus-within:ring-black focus-within:border-black">
<div className="flex items-center justify-between mb-2">
<label className="text-xs text-gray-500 font-medium">Stamina Bonus</label>
<iconify-icon className="text-gray-300 group-focus-within:text-black" icon="solar:bolt-linear" width="16"></iconify-icon>
</div>
<div className="flex items-baseline gap-1">
<span className="text-gray-400 text-xs font-medium">+</span>
<input className="w-full bg-transparent border-none p-0 text-lg font-medium text-gray-900 focus:ring-0" id="staminaBonus" placeholder="0" step="1" type="number"/>
</div>
</div>

<div className="bg-white border border-gray-200 rounded p-4 hover:border-gray-300 transition-colors group focus-within:ring-1 focus-within:ring-black focus-within:border-black">
<div className="flex items-center justify-between mb-2">
<label className="text-xs text-gray-500 font-medium">Health Regen</label>
<iconify-icon className="text-gray-300 group-focus-within:text-black" icon="solar:heart-pulse-linear" width="16"></iconify-icon>
</div>
<div className="flex items-baseline gap-1">
<span className="text-gray-400 text-xs font-medium">+</span>
<input className="w-full bg-transparent border-none p-0 text-lg font-medium text-gray-900 focus:ring-0" id="healthRegen" placeholder="0.0" step="0.1" type="number"/>
</div>
</div>

<div className="bg-white border border-gray-200 rounded p-4 hover:border-gray-300 transition-colors group focus-within:ring-1 focus-within:ring-black focus-within:border-black">
<div className="flex items-center justify-between mb-2">
<label className="text-xs text-gray-500 font-medium">Stamina Regen</label>
<iconify-icon className="text-gray-300 group-focus-within:text-black" icon="solar:battery-charge-linear" width="16"></iconify-icon>
</div>
<div className="flex items-baseline gap-1">
<span className="text-gray-400 text-xs font-medium">+</span>
<input className="w-full bg-transparent border-none p-0 text-lg font-medium text-gray-900 focus:ring-0" id="staminaRegen" placeholder="0.0" step="0.1" type="number"/>
</div>
</div>

<div className="bg-white border border-gray-200 rounded p-4 hover:border-gray-300 transition-colors group focus-within:ring-1 focus-within:ring-black focus-within:border-black">
<div className="flex items-center justify-between mb-2">
<label className="text-xs text-gray-500 font-medium">Mana Regen</label>
<iconify-icon className="text-gray-300 group-focus-within:text-black" icon="solar:magic-stick-3-linear" width="16"></iconify-icon>
</div>
<div className="flex items-baseline gap-1">
<span className="text-gray-400 text-xs font-medium">+</span>
<input className="w-full bg-transparent border-none p-0 text-lg font-medium text-gray-900 focus:ring-0" id="manaRegen" placeholder="0.0" step="0.1" type="number"/>
</div>
</div>

<div className="bg-white border border-gray-200 rounded p-4 hover:border-gray-300 transition-colors group focus-within:ring-1 focus-within:ring-black focus-within:border-black">
<div className="flex items-center justify-between mb-2">
<label className="text-xs text-gray-500 font-medium">Oxygen Regen</label>
<iconify-icon className="text-gray-300 group-focus-within:text-black" icon="solar:wind-linear" width="16"></iconify-icon>
</div>
<div className="flex items-baseline gap-1">
<span className="text-gray-400 text-xs font-medium">+</span>
<input className="w-full bg-transparent border-none p-0 text-lg font-medium text-gray-900 focus:ring-0" id="oxygenRegen" placeholder="0.0" step="0.1" type="number"/>
</div>
</div>

<div className="bg-white border border-gray-200 rounded p-4 hover:border-gray-300 transition-colors group focus-within:ring-1 focus-within:ring-black focus-within:border-black">
<div className="flex items-center justify-between mb-2">
<label className="text-xs text-gray-500 font-medium">Fall Dmg Red.</label>
<iconify-icon className="text-gray-300 group-focus-within:text-black" icon="solar:archive-down-minimlistic-linear" width="16"></iconify-icon>
</div>
<div className="flex items-center gap-2">
<input className="w-16 bg-transparent border-none p-0 text-lg font-medium text-gray-900 focus:ring-0" id="fallDamage" placeholder="0.0" step="0.1" type="number"/>
<span className="text-gray-400 text-xs">%</span>
</div>
</div>
</div>
</section>
<hr className="border-gray-100"/>

<section>
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2 text-gray-900 font-medium">
<iconify-icon icon="solar:shield-warning-linear" strokeWidth="1.5" width="18"></iconify-icon>
<h2>Damage Resistances</h2>
</div>
<button className="text-xs text-gray-500 hover:text-black flex items-center gap-1 transition-colors" onclick="addResistance()">
<iconify-icon icon="solar:add-circle-linear" width="14"></iconify-icon>
                            Add Resistance
                        </button>
</div>
<div className="space-y-2" id="resistancesContainer">

</div>
<div className="text-xs text-gray-400 italic py-2" id="noResistances">No special resistances configured.</div>
</section>
<hr className="border-gray-100"/>

<section className="bg-gray-50 rounded-lg p-6 border border-gray-100 relative">
<div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
<div className="flex items-center gap-2 text-gray-900 font-medium">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5" width="18"></iconify-icon>
<h2>Player Handbook Info</h2>
</div>
<button className="bg-white border border-gray-200 text-gray-700 hover:border-gray-400 hover:text-black px-3 py-1.5 rounded shadow-sm text-xs font-medium flex items-center gap-2 transition-all" onclick="autoGenerateDescriptions()">
<iconify-icon icon="solar:magic-stick-3-linear" width="14"></iconify-icon>
                            Auto-Generate from Stats
                        </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="flex flex-col h-full">
<div className="flex items-center justify-between mb-2">
<label className="text-xs text-emerald-700 font-medium uppercase tracking-wide">Strengths</label>
<span className="text-[10px] text-gray-400">One per line</span>
</div>
<textarea className="w-full bg-white border border-emerald-100 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded p-3 text-gray-700 text-xs leading-relaxed resize-none transition-all placeholder-gray-300" id="strengthsInput" placeholder="- 100 HP
- High Stamina" rows="6"></textarea>
</div>

<div className="flex flex-col h-full">
<div className="flex items-center justify-between mb-2">
<label className="text-xs text-rose-700 font-medium uppercase tracking-wide">Weaknesses</label>
<span className="text-[10px] text-gray-400">One per line</span>
</div>
<textarea className="w-full bg-white border border-rose-100 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 rounded p-3 text-gray-700 text-xs leading-relaxed resize-none transition-all placeholder-gray-300" id="weaknessesInput" placeholder="- Low Magic Resistance
- Slow movement" rows="6"></textarea>
</div>
</div>
</section>
</div>
</div>

<div className="flex flex-col items-center justify-center h-full text-gray-400" id="emptyState">
<iconify-icon className="mb-4 text-gray-300" icon="solar:users-group-rounded-linear" strokeWidth="1" width="48"></iconify-icon>
<p className="font-medium text-gray-500">Select a race to edit</p>
<p className="text-xs mt-2">Or create a new one from the sidebar.</p>
</div>
</main>


    </>
  );
}
