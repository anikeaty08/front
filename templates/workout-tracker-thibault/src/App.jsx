import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
neon: {
400: '#FACC15',
500: '#EAB308',
900: '#422006',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
}
}
}
}



        // DATA
        let sessions = [
            { id: 'lundi', name: 'Lundi - Athlétisme Sprint', icon: 'solar:running-linear' },
            { id: 'mardi', name: 'Mardi - Wod & Deadlift', icon: 'solar:dumbbell-large-linear' },
            { id: 'mercredi', name: 'Mercredi - Technique', icon: 'solar:stopwatch-linear' },
            { id: 'jeudi', name: 'Jeudi - Haltéro', icon: 'solar:bolt-linear' },
            { id: 'vendredi', name: 'Vendredi - PPG/Aéro', icon: 'solar:heart-pulse-linear' },
            { id: 'samedi', name: 'Samedi - Jambes & Core', icon: 'solar:body-linear' },
            { id: 'dimanche', name: 'Dimanche - Upper Body', icon: 'solar:users-group-two-rounded-linear' }
        ];

        // INIT
        document.addEventListener('DOMContentLoaded', () => {
            renderNav();
            switchTab('samedi'); // Default as requested last time
            
            // Init weight inputs
            document.querySelectorAll('.sets-input').forEach(input => {
                // If container is empty, fill it. If manually filled (custom html), leave it.
                const container = input.closest('.exercise-card').querySelector('.weight-inputs-container');
                if(container.children.length === 0) updateWeightInputs(input);
            });

            setupDragAndDrop();
        });

        // NAV & TABS
        function renderNav() {
            const container = document.getElementById('nav-container');
            // Keep the header, clear buttons
            const header = container.firstElementChild;
            container.innerHTML = '';
            container.appendChild(header);

            sessions.forEach(session => {
                const isActive = !document.getElementById(session.id).classList.contains('hidden');
                
                const btn = document.createElement('div');
                btn.className = 'group relative flex items-center';
                
                btn.innerHTML = `
                    <button onclick="switchTab('${session.id}')" class="nav-item w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all text-left border border-transparent ${isActive ? 'bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white' : 'text-zinc-500 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900'}">
                        <iconify-icon icon="${session.icon}" class="${isActive ? 'text-neon-400' : 'text-zinc-400 group-hover:text-neon-400 transition-colors'}" width="18"></iconify-icon>
                        <span class="truncate">${session.name}</span>
                    </button>
                    <div class="absolute right-2 hidden group-hover:flex items-center bg-white dark:bg-zinc-950 shadow-sm rounded-md border border-zinc-200 dark:border-zinc-800">
                        <button onclick="renameSession('${session.id}')" class="p-1.5 text-zinc-400 hover:text-blue-500"><iconify-icon icon="solar:pen-linear" width="14"></iconify-icon></button>
                        <button onclick="deleteSession('${session.id}')" class="p-1.5 text-zinc-400 hover:text-red-500"><iconify-icon icon="solar:trash-bin-trash-linear" width="14"></iconify-icon></button>
                    </div>
                `;
                container.appendChild(btn);
            });
        }

        function switchTab(tabId) {
            document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
            const target = document.getElementById(tabId);
            if(target) target.classList.remove('hidden');
            renderNav();
            if(window.innerWidth < 1024) document.getElementById('mobile-menu').classList.add('hidden');
        }

        // SESSION MANAGEMENT
        function addNewSession() {
            const id = 'session-' + Date.now();
            const name = 'Nouvelle Séance';
            sessions.push({ id, name, icon: 'solar:notes-linear' });
            
            // Create Section DOM
            const section = document.createElement('section');
            section.id = id;
            section.className = 'tab-content hidden';
            section.innerHTML = `
                <div class="flex items-baseline justify-between border-b border-zinc-200 dark:border-zinc-800 pb-4 mb-6">
                    <h2 class="text-xl font-semibold tracking-tight">${name}</h2>
                </div>
                <div class="exercise-list space-y-4" id="list-${id}"></div>
                <div class="mt-6"><button onclick="addExercise('list-${id}')" class="w-full py-3 border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex items-center justify-center gap-2 text-sm font-medium"><iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon>Ajouter un exercice</button></div>
            `;
            document.querySelector('main').appendChild(section);
            
            renderNav();
            switchTab(id);
        }

        function renameSession(id) {
            const session = sessions.find(s => s.id === id);
            const newName = prompt('Nom de la séance:', session.name);
            if (newName) {
                session.name = newName;
                document.querySelector(`#${id} h2`).innerText = newName;
                renderNav();
            }
        }

        function deleteSession(id) {
            if(confirm('Supprimer cette séance ?')) {
                sessions = sessions.filter(s => s.id !== id);
                document.getElementById(id).remove();
                renderNav();
                if(sessions.length > 0) switchTab(sessions[0].id);
            }
        }

        // EXERCISE LOGIC
        function updateWeightInputs(setInput) {
            const card = setInput.closest('.exercise-card');
            const container = card.querySelector('.weight-inputs-container');
            const numSets = parseInt(setInput.value) || 0;
            const defaultWeight = container.dataset.defaultWeight || '';

            const existingInputs = Array.from(container.querySelectorAll('input'));
            const existingValues = existingInputs.map(input => input.value);
            container.innerHTML = ''; 

            for (let i = 0; i < numSets; i++) {
                const wrapper = document.createElement('div');
                wrapper.className = 'flex flex-col gap-1';
                wrapper.innerHTML = `
                    <label class="text-[10px] uppercase text-zinc-400 font-medium">Set ${i + 1}</label>
                    <div class="relative">
                        <input type="text" value="${existingValues[i] || defaultWeight}" class="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md py-1.5 px-2 text-center text-sm font-mono focus:border-neon-400 focus:outline-none transition-all">
                        <span class="absolute right-2 top-1.5 text-[10px] text-zinc-400 pointer-events-none">kg</span>
                    </div>
                `;
                container.appendChild(wrapper);
            }
        }

        function addExercise(listId) {
            const template = document.getElementById('exercise-template');
            const clone = template.content.cloneNode(true);
            const list = document.getElementById(listId);
            list.appendChild(clone);
            const newCard = list.lastElementChild;
            updateWeightInputs(newCard.querySelector('.sets-input'));
            setupDragAndDrop(); // Re-bind events
        }

        // DRAG AND DROP
        function setupDragAndDrop() {
            const draggables = document.querySelectorAll('.draggable');
            const containers = document.querySelectorAll('.exercise-list');

            draggables.forEach(draggable => {
                const handle = draggable.querySelector('.drag-handle');
                if(!handle) return;

                handle.addEventListener('mousedown', () => { draggable.setAttribute('draggable', 'true'); });
                handle.addEventListener('mouseup', () => { draggable.setAttribute('draggable', 'false'); });
                
                draggable.addEventListener('dragstart', () => {
                    draggable.classList.add('dragging');
                });
                draggable.addEventListener('dragend', () => {
                    draggable.classList.remove('dragging');
                    draggable.setAttribute('draggable', 'false'); // Reset
                });
            });

            containers.forEach(container => {
                container.addEventListener('dragover', e => {
                    e.preventDefault();
                    const afterElement = getDragAfterElement(container, e.clientY);
                    const draggable = document.querySelector('.dragging');
                    if (afterElement == null) {
                        container.appendChild(draggable);
                    } else {
                        container.insertBefore(draggable, afterElement);
                    }
                });
            });
        }

        function getDragAfterElement(container, y) {
            const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];
            return draggableElements.reduce((closest, child) => {
                const box = child.getBoundingClientRect();
                const offset = y - box.top - box.height / 2;
                if (offset < 0 && offset > closest.offset) {
                    return { offset: offset, element: child };
                } else {
                    return closest;
                }
            }, { offset: Number.NEGATIVE_INFINITY }).element;
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="lg:hidden flex items-center justify-between p-4 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 sticky top-0 z-50">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-neon-400 rounded-lg flex items-center justify-center text-black font-semibold tracking-tighter">FP</div>
<span className="font-semibold tracking-tight text-lg">TRACKER</span>
</div>
<button className="p-2 text-zinc-500" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
<div className="flex min-h-screen relative">

<aside className="hidden lg:flex flex-col w-full lg:w-64 fixed lg:sticky top-16 lg:top-0 h-[calc(100vh-64px)] lg:h-screen bg-white dark:bg-zinc-950 border-r border-zinc-200 dark:border-zinc-800 z-40 overflow-y-auto group/sidebar" id="mobile-menu">
<div className="p-6 hidden lg:flex items-center gap-3 mb-2">
<div className="w-8 h-8 bg-neon-400 rounded flex items-center justify-center text-black font-semibold tracking-tighter shadow-[0_0_15px_rgba(250,204,21,0.4)]">FP</div>
<span className="font-semibold tracking-tight text-xl">TRACKER</span>
</div>
<nav className="flex-1 px-4 space-y-1" id="nav-container">
<div className="px-2 mb-2 flex items-center justify-between">
<span className="text-xs font-medium text-zinc-400 uppercase tracking-widest">Planning</span>
<button className="text-zinc-400 hover:text-neon-400 transition-colors" onclick="addNewSession()" title="Ajouter une séance">
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
</button>
</div>


</nav>
<div className="p-4 border-t border-zinc-200 dark:border-zinc-800">
<button className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-zinc-50 dark:bg-zinc-900 text-xs font-medium text-zinc-500 hover:text-black dark:hover:text-white transition-colors" onclick="document.querySelector('html').classList.toggle('dark')">
<span>Theme</span>
<iconify-icon className="text-zinc-400" icon="solar:moon-stars-linear"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 p-4 lg:p-10 max-w-5xl mx-auto w-full">

<header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-black dark:text-white" id="page-title">Séance du jour</h1>
<p className="text-zinc-500 text-sm mt-1">Gérez vos séries, répétitions et charges.</p>
</div>
<div className="flex items-center gap-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg px-3 py-1.5 shadow-sm">
<span className="text-xs text-zinc-400 font-medium uppercase tracking-wide">BW</span>
<input className="w-10 bg-transparent text-right font-mono text-sm focus:outline-none focus:text-neon-400" type="text" value="78.5"/>
<span className="text-sm text-zinc-500">kg</span>
</div>
</header>

<template id="exercise-template">
<div className="exercise-card draggable group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 transition-all hover:border-zinc-300 dark:hover:border-zinc-700 shadow-sm mb-4" draggable="true">
<div className="absolute left-2 top-1/2 -translate-y-1/2 cursor-grab opacity-0 group-hover:opacity-100 text-zinc-300 dark:text-zinc-700 hover:text-zinc-500 p-2 drag-handle">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</div>
<div className="pl-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
<div className="flex-1">
<input className="w-full bg-transparent font-medium text-lg text-black dark:text-white placeholder-zinc-500 focus:outline-none border-b border-transparent focus:border-zinc-300 dark:focus:border-zinc-700 transition-colors pb-1" placeholder="Nom de l'exercice" type="text" value="Nouvel Exercice"/>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-1 border border-zinc-200 dark:border-zinc-800">
<div className="flex flex-col px-2 text-center border-r border-zinc-200 dark:border-zinc-700">
<span className="text-[10px] uppercase text-zinc-400 font-semibold tracking-wider">Séries</span>
<input className="sets-input bg-transparent w-8 text-center font-mono text-sm focus:outline-none focus:text-neon-400" max="15" min="1" oninput="updateWeightInputs(this)" type="number" value="3"/>
</div>
<div className="flex flex-col px-2 text-center">
<span className="text-[10px] uppercase text-zinc-400 font-semibold tracking-wider">Reps</span>
<input className="bg-transparent w-10 text-center font-mono text-sm focus:outline-none focus:text-neon-400" type="text" value="8"/>
</div>
</div>
<button className="text-zinc-400 hover:text-red-500 transition-colors p-1" onclick="this.closest('.exercise-card').remove()">
<iconify-icon icon="solar:trash-bin-trash-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="pl-6 weight-inputs-container grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3"></div>
</div>
</template>


<section className="tab-content hidden" id="lundi">
<div className="flex items-baseline justify-between border-b border-zinc-200 dark:border-zinc-800 pb-4 mb-6">
<h2 className="text-xl font-semibold tracking-tight">Lundi - Athlétisme Sprint long lactique</h2>
</div>
<div className="exercise-list space-y-4" id="list-lundi">

</div>
<div className="mt-6"><button className="w-full py-3 border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex items-center justify-center gap-2 text-sm font-medium" onclick="addExercise('list-lundi')"><iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon>Ajouter un exercice</button></div>
</section>

<section className="tab-content hidden" id="mardi">
<div className="flex items-baseline justify-between border-b border-zinc-200 dark:border-zinc-800 pb-4 mb-6">
<h2 className="text-xl font-semibold tracking-tight">Mardi - Wod + Deadlift</h2>
</div>
<div className="exercise-list space-y-4" id="list-mardi">

<div className="exercise-card draggable group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm" draggable="true">
<div className="absolute left-2 top-1/2 -translate-y-1/2 cursor-grab opacity-0 group-hover:opacity-100 text-zinc-300 dark:text-zinc-700 hover:text-zinc-500 p-2 drag-handle"><iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon></div>
<div className="pl-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
<div className="flex-1"><input className="w-full bg-transparent font-medium text-lg text-black dark:text-white focus:outline-none border-b border-transparent focus:border-neon-400 pb-1" type="text" value='Deadlift (Pause 1" sous genoux)'/><div className="text-xs text-neon-500 mt-1 font-mono">EMOM 8x1'</div></div>
<div className="flex items-center gap-3">
<div className="flex items-center bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-1 border border-zinc-200 dark:border-zinc-800">
<div className="flex flex-col px-2 text-center border-r border-zinc-200 dark:border-zinc-700"><span className="text-[10px] uppercase text-zinc-400 font-semibold tracking-wider">Sets</span><input className="sets-input bg-transparent w-8 text-center font-mono text-sm focus:outline-none focus:text-neon-400" oninput="updateWeightInputs(this)" type="number" value="8"/></div>
<div className="flex flex-col px-2 text-center"><span className="text-[10px] uppercase text-zinc-400 font-semibold tracking-wider">Reps</span><input className="bg-transparent w-10 text-center font-mono text-sm focus:outline-none focus:text-neon-400" type="text" value="4"/></div>
</div>
<button className="text-zinc-400 hover:text-red-500 p-1" onclick="this.closest('.exercise-card').remove()"><iconify-icon icon="solar:trash-bin-trash-linear" width="18"></iconify-icon></button>
</div>
</div>
<div className="pl-6 weight-inputs-container grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3" data-default-weight="90"></div>
</div>

<div className="exercise-card draggable group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm" draggable="true">
<div className="absolute left-2 top-1/2 -translate-y-1/2 cursor-grab opacity-0 group-hover:opacity-100 text-zinc-300 dark:text-zinc-700 hover:text-zinc-500 p-2 drag-handle"><iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon></div>
<div className="pl-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
<div className="flex-1"><input className="w-full bg-transparent font-medium text-lg text-black dark:text-white focus:outline-none border-b border-transparent focus:border-neon-400 pb-1" type="text" value="Tibial Raises (Par jambe)"/></div>
<div className="flex items-center gap-3">
<div className="flex items-center bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-1 border border-zinc-200 dark:border-zinc-800">
<div className="flex flex-col px-2 text-center border-r border-zinc-200 dark:border-zinc-700"><span className="text-[10px] uppercase text-zinc-400 font-semibold tracking-wider">Sets</span><input className="sets-input bg-transparent w-8 text-center font-mono text-sm focus:outline-none focus:text-neon-400" oninput="updateWeightInputs(this)" type="number" value="3"/></div>
<div className="flex flex-col px-2 text-center"><span className="text-[10px] uppercase text-zinc-400 font-semibold tracking-wider">Reps</span><input className="bg-transparent w-10 text-center font-mono text-sm focus:outline-none focus:text-neon-400" type="text" value="15"/></div>
</div>
<button className="text-zinc-400 hover:text-red-500 p-1" onclick="this.closest('.exercise-card').remove()"><iconify-icon icon="solar:trash-bin-trash-linear" width="18"></iconify-icon></button>
</div>
</div>
<div className="pl-6 weight-inputs-container grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3" data-default-weight="4"></div>
</div>
</div>
<div className="mt-6"><button className="w-full py-3 border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex items-center justify-center gap-2 text-sm font-medium" onclick="addExercise('list-mardi')"><iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon>Ajouter un exercice</button></div>
</section>

<section className="tab-content hidden" id="mercredi">
<div className="flex items-baseline justify-between border-b border-zinc-200 dark:border-zinc-800 pb-4 mb-6">
<h2 className="text-xl font-semibold tracking-tight">Mercredi - Athlétisme technique sprint court</h2>
</div>
<div className="exercise-list space-y-4" id="list-mercredi"></div>
<div className="mt-6"><button className="w-full py-3 border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex items-center justify-center gap-2 text-sm font-medium" onclick="addExercise('list-mercredi')"><iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon>Ajouter un exercice</button></div>
</section>

<section className="tab-content hidden" id="jeudi">
<div className="flex items-baseline justify-between border-b border-zinc-200 dark:border-zinc-800 pb-4 mb-6">
<h2 className="text-xl font-semibold tracking-tight">Jeudi - Haltérophilie + Explosivité</h2>
</div>
<div className="exercise-list space-y-4" id="list-jeudi">

<div className="exercise-card draggable group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm" draggable="true">
<div className="absolute left-2 top-1/2 -translate-y-1/2 cursor-grab opacity-0 group-hover:opacity-100 text-zinc-300 dark:text-zinc-700 hover:text-zinc-500 p-2 drag-handle"><iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon></div>
<div className="pl-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
<div className="flex-1"><input className="w-full bg-transparent font-medium text-lg text-black dark:text-white focus:outline-none border-b border-transparent focus:border-neon-400 pb-1" type="text" value="1 Clean &amp; Jerk + 1 Sq Clean + 1 Pow Clean"/><div className="text-xs text-neon-500 mt-1 font-mono">EMOM 8x1'30</div></div>
<div className="flex items-center gap-3">
<div className="flex items-center bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-1 border border-zinc-200 dark:border-zinc-800">
<div className="flex flex-col px-2 text-center border-r border-zinc-200 dark:border-zinc-700"><span className="text-[10px] uppercase text-zinc-400 font-semibold tracking-wider">Sets</span><input className="sets-input bg-transparent w-8 text-center font-mono text-sm focus:outline-none focus:text-neon-400" oninput="updateWeightInputs(this)" type="number" value="8"/></div>
<div className="flex flex-col px-2 text-center"><span className="text-[10px] uppercase text-zinc-400 font-semibold tracking-wider">Reps</span><input className="bg-transparent w-10 text-center font-mono text-sm focus:outline-none focus:text-neon-400" type="text" value="1"/></div>
</div>
<button className="text-zinc-400 hover:text-red-500 p-1" onclick="this.closest('.exercise-card').remove()"><iconify-icon icon="solar:trash-bin-trash-linear" width="18"></iconify-icon></button>
</div>
</div>
<div className="pl-6 weight-inputs-container grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3" data-default-weight="65"></div>
</div>

<div className="exercise-card draggable group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm" draggable="true">
<div className="absolute left-2 top-1/2 -translate-y-1/2 cursor-grab opacity-0 group-hover:opacity-100 text-zinc-300 dark:text-zinc-700 hover:text-zinc-500 p-2 drag-handle"><iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon></div>
<div className="pl-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
<div className="flex-1"><input className="w-full bg-transparent font-medium text-lg text-black dark:text-white focus:outline-none border-b border-transparent focus:border-neon-400 pb-1" type="text" value="Tirage lourd prise Clean"/><div className="text-xs text-neon-500 mt-1 font-mono">EMOM 8x30"</div></div>
<div className="flex items-center gap-3">
<div className="flex items-center bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-1 border border-zinc-200 dark:border-zinc-800">
<div className="flex flex-col px-2 text-center border-r border-zinc-200 dark:border-zinc-700"><span className="text-[10px] uppercase text-zinc-400 font-semibold tracking-wider">Sets</span><input className="sets-input bg-transparent w-8 text-center font-mono text-sm focus:outline-none focus:text-neon-400" oninput="updateWeightInputs(this)" type="number" value="8"/></div>
<div className="flex flex-col px-2 text-center"><span className="text-[10px] uppercase text-zinc-400 font-semibold tracking-wider">Reps</span><input className="bg-transparent w-10 text-center font-mono text-sm focus:outline-none focus:text-neon-400" type="text" value="1"/></div>
</div>
<button className="text-zinc-400 hover:text-red-500 p-1" onclick="this.closest('.exercise-card').remove()"><iconify-icon icon="solar:trash-bin-trash-linear" width="18"></iconify-icon></button>
</div>
</div>
<div className="pl-6 weight-inputs-container grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3" data-default-weight="80"></div>
</div>

<div className="exercise-card draggable group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm" draggable="true">
<div className="absolute left-2 top-1/2 -translate-y-1/2 cursor-grab opacity-0 group-hover:opacity-100 text-zinc-300 dark:text-zinc-700 hover:text-zinc-500 p-2 drag-handle"><iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon></div>
<div className="pl-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
<div className="flex-1"><input className="w-full bg-transparent font-medium text-lg text-black dark:text-white focus:outline-none border-b border-transparent focus:border-neon-400 pb-1" type="text" value="Power Snatch"/><div className="text-xs text-neon-500 mt-1 font-mono">EMOM 8x1'</div></div>
<div className="flex items-center gap-3">
<div className="flex items-center bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-1 border border-zinc-200 dark:border-zinc-800">
<div className="flex flex-col px-2 text-center border-r border-zinc-200 dark:border-zinc-700"><span className="text-[10px] uppercase text-zinc-400 font-semibold tracking-wider">Sets</span><input className="sets-input bg-transparent w-8 text-center font-mono text-sm focus:outline-none focus:text-neon-400" oninput="updateWeightInputs(this)" type="number" value="8"/></div>
<div className="flex flex-col px-2 text-center"><span className="text-[10px] uppercase text-zinc-400 font-semibold tracking-wider">Reps</span><input className="bg-transparent w-10 text-center font-mono text-sm focus:outline-none focus:text-neon-400" type="text" value="4"/></div>
</div>
<button className="text-zinc-400 hover:text-red-500 p-1" onclick="this.closest('.exercise-card').remove()"><iconify-icon icon="solar:trash-bin-trash-linear" width="18"></iconify-icon></button>
</div>
</div>
<div className="pl-6 weight-inputs-container grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3" data-default-weight="43"></div>
</div>

<div className="exercise-card draggable group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm" draggable="true">
<div className="absolute left-2 top-1/2 -translate-y-1/2 cursor-grab opacity-0 group-hover:opacity-100 text-zinc-300 dark:text-zinc-700 hover:text-zinc-500 p-2 drag-handle"><iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon></div>
<div className="pl-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
<div className="flex-1"><input className="w-full bg-transparent font-medium text-lg text-black dark:text-white focus:outline-none border-b border-transparent focus:border-neon-400 pb-1" type="text" value="Tirage lourd prise Snatch"/><div className="text-xs text-neon-500 mt-1 font-mono">EMOM 8x30"</div></div>
<div className="flex items-center gap-3">
<div className="flex items-center bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-1 border border-zinc-200 dark:border-zinc-800">
<div className="flex flex-col px-2 text-center border-r border-zinc-200 dark:border-zinc-700"><span className="text-[10px] uppercase text-zinc-400 font-semibold tracking-wider">Sets</span><input className="sets-input bg-transparent w-8 text-center font-mono text-sm focus:outline-none focus:text-neon-400" oninput="updateWeightInputs(this)" type="number" value="8"/></div>
<div className="flex flex-col px-2 text-center"><span className="text-[10px] uppercase text-zinc-400 font-semibold tracking-wider">Reps</span><input className="bg-transparent w-10 text-center font-mono text-sm focus:outline-none focus:text-neon-400" type="text" value="1"/></div>
</div>
<button className="text-zinc-400 hover:text-red-500 p-1" onclick="this.closest('.exercise-card').remove()"><iconify-icon icon="solar:trash-bin-trash-linear" width="18"></iconify-icon></button>
</div>
</div>
<div className="pl-6 weight-inputs-container grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3" data-default-weight="65"></div>
</div>

<div className="exercise-card draggable group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm" draggable="true">
<div className="absolute left-2 top-1/2 -translate-y-1/2 cursor-grab opacity-0 group-hover:opacity-100 text-zinc-300 dark:text-zinc-700 hover:text-zinc-500 p-2 drag-handle"><iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon></div>
<div className="pl-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
<div className="flex-1"><input className="w-full bg-transparent font-medium text-lg text-black dark:text-white focus:outline-none border-b border-transparent focus:border-neon-400 pb-1" type="text" value="5 Back Squat (Box) + 10 Low Box Jump"/></div>
<div className="flex items-center gap-3">
<div className="flex items-center bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-1 border border-zinc-200 dark:border-zinc-800">
<div className="flex flex-col px-2 text-center border-r border-zinc-200 dark:border-zinc-700"><span className="text-[10px] uppercase text-zinc-400 font-semibold tracking-wider">Sets</span><input className="sets-input bg-transparent w-8 text-center font-mono text-sm focus:outline-none focus:text-neon-400" oninput="updateWeightInputs(this)" type="number" value="4"/></div>
<div className="flex flex-col px-2 text-center"><span className="text-[10px] uppercase text-zinc-400 font-semibold tracking-wider">Reps</span><input className="bg-transparent w-10 text-center font-mono text-sm focus:outline-none focus:text-neon-400" type="text" value="1"/></div>
</div>
<button className="text-zinc-400 hover:text-red-500 p-1" onclick="this.closest('.exercise-card').remove()"><iconify-icon icon="solar:trash-bin-trash-linear" width="18"></iconify-icon></button>
</div>
</div>
<div className="pl-6 weight-inputs-container grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3" data-default-weight="100"></div>
</div>
</div>
<div className="mt-6"><button className="w-full py-3 border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex items-center justify-center gap-2 text-sm font-medium" onclick="addExercise('list-jeudi')"><iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon>Ajouter un exercice</button></div>
</section>

<section className="tab-content hidden" id="vendredi">
<div className="flex items-baseline justify-between border-b border-zinc-200 dark:border-zinc-800 pb-4 mb-6">
<h2 className="text-xl font-semibold tracking-tight">Vendredi - PPG Athlétisme + Aérobie</h2>
</div>
<div className="exercise-list space-y-4" id="list-vendredi"></div>
<div className="mt-6"><button className="w-full py-3 border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex items-center justify-center gap-2 text-sm font-medium" onclick="addExercise('list-vendredi')"><iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon>Ajouter un exercice</button></div>
</section>

<section className="tab-content hidden" id="samedi">
<div className="flex items-baseline justify-between border-b border-zinc-200 dark:border-zinc-800 pb-4 mb-6">
<h2 className="text-xl font-semibold tracking-tight">Samedi - Musculation jambes / bras</h2>
<span className="text-xs font-mono text-neon-500 px-2 py-1 rounded bg-neon-400/10 border border-neon-400/20">HYPERTROPHIE</span>
</div>
<div className="exercise-list space-y-4" id="list-samedi">

<div className="exercise-card draggable group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm" draggable="true">
<div className="absolute left-2 top-1/2 -translate-y-1/2 cursor-grab opacity-0 group-hover:opacity-100 text-zinc-300 dark:text-zinc-700 hover:text-zinc-500 p-2 drag-handle"><iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon></div>
<div className="pl-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
<div className="flex-1"><input className="w-full bg-transparent font-medium text-lg text-black dark:text-white focus:outline-none border-b border-transparent focus:border-neon-400 pb-1" type="text" value="Bulgarian Split Squat"/></div>
<div className="flex items-center gap-3">
<div className="flex items-center bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-1 border border-zinc-200 dark:border-zinc-800"><div className="flex flex-col px-2 text-center border-r border-zinc-200 dark:border-zinc-700"><span className="text-[10px] uppercase text-zinc-400 font-semibold tracking-wider">Sets</span><input className="sets-input bg-transparent w-8 text-center font-mono text-sm focus:outline-none focus:text-neon-400" oninput="updateWeightInputs(this)" type="number" value="3"/></div><div className="flex flex-col px-2 text-center"><span className="text-[10px] uppercase text-zinc-400 font-semibold tracking-wider">Reps</span><input className="bg-transparent w-10 text-center font-mono text-sm focus:outline-none focus:text-neon-400" type="text" value="8"/></div></div>
<button className="text-zinc-400 hover:text-red-500 p-1" onclick="this.closest('.exercise-card').remove()"><iconify-icon icon="solar:trash-bin-trash-linear" width="18"></iconify-icon></button>
</div>
</div>
<div className="pl-6 weight-inputs-container grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3" data-default-weight="24"></div>
</div>

<div className="exercise-card draggable group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm" draggable="true">
<div className="absolute left-2 top-1/2 -translate-y-1/2 cursor-grab opacity-0 group-hover:opacity-100 text-zinc-300 dark:text-zinc-700 hover:text-zinc-500 p-2 drag-handle"><iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon></div>
<div className="pl-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
<div className="flex-1"><input className="w-full bg-transparent font-medium text-lg text-black dark:text-white focus:outline-none border-b border-transparent focus:border-neon-400 pb-1" type="text" value="Back Squat"/></div>
<div className="flex items-center gap-3">
<div className="flex items-center bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-1 border border-zinc-200 dark:border-zinc-800"><div className="flex flex-col px-2 text-center border-r border-zinc-200 dark:border-zinc-700"><span className="text-[10px] uppercase text-zinc-400 font-semibold tracking-wider">Sets</span><input className="sets-input bg-transparent w-8 text-center font-mono text-sm focus:outline-none focus:text-neon-400" oninput="updateWeightInputs(this)" type="number" value="3"/></div><div className="flex flex-col px-2 text-center"><span className="text-[10px] uppercase text-zinc-400 font-semibold tracking-wider">Reps</span><input className="bg-transparent w-10 text-center font-mono text-sm focus:outline-none focus:text-neon-400" type="text" value="6"/></div></div>
<button className="text-zinc-400 hover:text-red-500 p-1" onclick="this.closest('.exercise-card').remove()"><iconify-icon icon="solar:trash-bin-trash-linear" width="18"></iconify-icon></button>
</div>
</div>
<div className="pl-6 weight-inputs-container grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3" data-default-weight="90"></div>
</div>

<div className="exercise-card draggable group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm" draggable="true">
<div className="absolute left-2 top-1/2 -translate-y-1/2 cursor-grab opacity-0 group-hover:opacity-100 text-zinc-300 dark:text-zinc-700 hover:text-zinc-500 p-2 drag-handle"><iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon></div>
<div className="pl-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
<div className="flex-1"><input className="w-full bg-transparent font-medium text-lg text-black dark:text-white focus:outline-none border-b border-transparent focus:border-neon-400 pb-1" type="text" value="Seated Curl Leg (-1 Amplitude)"/><div className="text-xs text-zinc-500 mt-1">4 longueur 4 rondin</div></div>
<div className="flex items-center gap-3">
<div className="flex items-center bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-1 border border-zinc-200 dark:border-zinc-800"><div className="flex flex-col px-2 text-center border-r border-zinc-200 dark:border-zinc-700"><span className="text-[10px] uppercase text-zinc-400 font-semibold tracking-wider">Sets</span><input className="sets-input bg-transparent w-8 text-center font-mono text-sm focus:outline-none focus:text-neon-400" oninput="updateWeightInputs(this)" type="number" value="3"/></div><div className="flex flex-col px-2 text-center"><span className="text-[10px] uppercase text-zinc-400 font-semibold tracking-wider">Reps</span><input className="bg-transparent w-10 text-center font-mono text-sm focus:outline-none focus:text-neon-400" type="text" value="9"/></div></div>
<button className="text-zinc-400 hover:text-red-500 p-1" onclick="this.closest('.exercise-card').remove()"><iconify-icon icon="solar:trash-bin-trash-linear" width="18"></iconify-icon></button>
</div>
</div>
<div className="pl-6 weight-inputs-container grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3" data-default-weight="55"></div>
</div>

<div className="exercise-card draggable group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm" draggable="true">
<div className="absolute left-2 top-1/2 -translate-y-1/2 cursor-grab opacity-0 group-hover:opacity-100 text-zinc-300 dark:text-zinc-700 hover:text-zinc-500 p-2 drag-handle"><iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon></div>
<div className="pl-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
<div className="flex-1"><input className="w-full bg-transparent font-medium text-lg text-black dark:text-white focus:outline-none border-b border-transparent focus:border-neon-400 pb-1" type="text" value="Triceps Press Down"/></div>
<div className="flex items-center gap-3">
<div className="flex items-center bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-1 border border-zinc-200 dark:border-zinc-800"><div className="flex flex-col px-2 text-center border-r border-zinc-200 dark:border-zinc-700"><span className="text-[10px] uppercase text-zinc-400 font-semibold tracking-wider">Sets</span><input className="sets-input bg-transparent w-8 text-center font-mono text-sm focus:outline-none focus:text-neon-400" oninput="updateWeightInputs(this)" type="number" value="3"/></div><div className="flex flex-col px-2 text-center"><span className="text-[10px] uppercase text-zinc-400 font-semibold tracking-wider">Reps</span><input className="bg-transparent w-10 text-center font-mono text-sm focus:outline-none focus:text-neon-400" type="text" value="8"/></div></div>
<button className="text-zinc-400 hover:text-red-500 p-1" onclick="this.closest('.exercise-card').remove()"><iconify-icon icon="solar:trash-bin-trash-linear" width="18"></iconify-icon></button>
</div>
</div>

<div className="pl-6 weight-inputs-container grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
<div className="flex flex-col gap-1"><label className="text-[10px] uppercase text-zinc-400 font-medium">Set 1</label><div className="relative"><input className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md py-1.5 px-2 text-center text-sm font-mono focus:border-neon-400 focus:outline-none transition-all" type="text" value="20"/><span className="absolute right-2 top-1.5 text-[10px] text-zinc-400 pointer-events-none">kg</span></div></div>
<div className="flex flex-col gap-1"><label className="text-[10px] uppercase text-zinc-400 font-medium">Set 2</label><div className="relative"><input className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md py-1.5 px-2 text-center text-sm font-mono focus:border-neon-400 focus:outline-none transition-all" type="text" value="20"/><span className="absolute right-2 top-1.5 text-[10px] text-zinc-400 pointer-events-none">kg</span></div></div>
<div className="flex flex-col gap-1"><label className="text-[10px] uppercase text-zinc-400 font-medium">Set 3</label><div className="relative"><input className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md py-1.5 px-2 text-center text-sm font-mono focus:border-neon-400 focus:outline-none transition-all" type="text" value="17.5"/><span className="absolute right-2 top-1.5 text-[10px] text-zinc-400 pointer-events-none">kg</span></div></div>
</div>
</div>

<div className="exercise-card draggable group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm" draggable="true">
<div className="absolute left-2 top-1/2 -translate-y-1/2 cursor-grab opacity-0 group-hover:opacity-100 text-zinc-300 dark:text-zinc-700 hover:text-zinc-500 p-2 drag-handle"><iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon></div>
<div className="pl-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
<div className="flex-1"><input className="w-full bg-transparent font-medium text-lg text-black dark:text-white focus:outline-none border-b border-transparent focus:border-neon-400 pb-1" type="text" value="Cable Curl"/></div>
<div className="flex items-center gap-3">
<div className="flex items-center bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-1 border border-zinc-200 dark:border-zinc-800"><div className="flex flex-col px-2 text-center border-r border-zinc-200 dark:border-zinc-700"><span className="text-[10px] uppercase text-zinc-400 font-semibold tracking-wider">Sets</span><input className="sets-input bg-transparent w-8 text-center font-mono text-sm focus:outline-none focus:text-neon-400" oninput="updateWeightInputs(this)" type="number" value="3"/></div><div className="flex flex-col px-2 text-center"><span className="text-[10px] uppercase text-zinc-400 font-semibold tracking-wider">Reps</span><input className="bg-transparent w-10 text-center font-mono text-sm focus:outline-none focus:text-neon-400" type="text" value="8-10"/></div></div>
<button className="text-zinc-400 hover:text-red-500 p-1" onclick="this.closest('.exercise-card').remove()"><iconify-icon icon="solar:trash-bin-trash-linear" width="18"></iconify-icon></button>
</div>
</div>
<div className="pl-6 weight-inputs-container grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
<div className="flex flex-col gap-1"><label className="text-[10px] uppercase text-zinc-400 font-medium">Set 1</label><div className="relative"><input className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md py-1.5 px-2 text-center text-sm font-mono focus:border-neon-400 focus:outline-none transition-all" type="text" value="10"/><span className="absolute right-2 top-1.5 text-[10px] text-zinc-400 pointer-events-none">kg</span></div></div>
<div className="flex flex-col gap-1"><label className="text-[10px] uppercase text-zinc-400 font-medium">Set 2</label><div className="relative"><input className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md py-1.5 px-2 text-center text-sm font-mono focus:border-neon-400 focus:outline-none transition-all" type="text" value="10"/><span className="absolute right-2 top-1.5 text-[10px] text-zinc-400 pointer-events-none">kg</span></div></div>
<div className="flex flex-col gap-1"><label className="text-[10px] uppercase text-zinc-400 font-medium">Set 3</label><div className="relative"><input className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md py-1.5 px-2 text-center text-sm font-mono focus:border-neon-400 focus:outline-none transition-all" type="text" value="7.5"/><span className="absolute right-2 top-1.5 text-[10px] text-zinc-400 pointer-events-none">kg</span></div></div>
</div>
</div>

<div className="exercise-card draggable group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm" draggable="true">
<div className="absolute left-2 top-1/2 -translate-y-1/2 cursor-grab opacity-0 group-hover:opacity-100 text-zinc-300 dark:text-zinc-700 hover:text-zinc-500 p-2 drag-handle"><iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon></div>
<div className="pl-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
<div className="flex-1"><input className="w-full bg-transparent font-medium text-lg text-black dark:text-white focus:outline-none border-b border-transparent focus:border-neon-400 pb-1" type="text" value="Deadlift Hexagonal Bar"/></div>
<div className="flex items-center gap-3">
<div className="flex items-center bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-1 border border-zinc-200 dark:border-zinc-800"><div className="flex flex-col px-2 text-center border-r border-zinc-200 dark:border-zinc-700"><span className="text-[10px] uppercase text-zinc-400 font-semibold tracking-wider">Sets</span><input className="sets-input bg-transparent w-8 text-center font-mono text-sm focus:outline-none focus:text-neon-400" oninput="updateWeightInputs(this)" type="number" value="3"/></div><div className="flex flex-col px-2 text-center"><span className="text-[10px] uppercase text-zinc-400 font-semibold tracking-wider">Reps</span><input className="bg-transparent w-10 text-center font-mono text-sm focus:outline-none focus:text-neon-400" type="text" value="6"/></div></div>
<button className="text-zinc-400 hover:text-red-500 p-1" onclick="this.closest('.exercise-card').remove()"><iconify-icon icon="solar:trash-bin-trash-linear" width="18"></iconify-icon></button>
</div>
</div>
<div className="pl-6 weight-inputs-container grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3" data-default-weight="120"></div>
</div>

<div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800">
<h3 className="text-lg font-semibold tracking-tight mb-4">Core / Abs</h3>
<p className="text-sm text-zinc-500 italic">Ajouter les exercices ici...</p>
</div>
</div>
<div className="mt-6"><button className="w-full py-3 border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex items-center justify-center gap-2 text-sm font-medium" onclick="addExercise('list-samedi')"><iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon>Ajouter un exercice</button></div>
</section>

<section className="tab-content hidden" id="dimanche">
<div className="flex items-baseline justify-between border-b border-zinc-200 dark:border-zinc-800 pb-4 mb-6">
<h2 className="text-xl font-semibold tracking-tight">Dimanche - Musculation pec / épaules / dos</h2>
<span className="text-xs font-mono text-neon-500 px-2 py-1 rounded bg-neon-400/10 border border-neon-400/20">STRENGTH</span>
</div>
<div className="exercise-list space-y-4" id="list-dimanche">

<div className="exercise-card draggable group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm" draggable="true">
<div className="absolute left-2 top-1/2 -translate-y-1/2 cursor-grab opacity-0 group-hover:opacity-100 text-zinc-300 dark:text-zinc-700 hover:text-zinc-500 p-2 drag-handle"><iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon></div>
<div className="pl-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
<div className="flex-1"><input className="w-full bg-transparent font-medium text-lg text-black dark:text-white focus:outline-none border-b border-transparent focus:border-neon-400 pb-1" type="text" value="Bench Press"/></div>
<div className="flex items-center gap-3">
<div className="flex items-center bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-1 border border-zinc-200 dark:border-zinc-800"><div className="flex flex-col px-2 text-center border-r border-zinc-200 dark:border-zinc-700"><span className="text-[10px] uppercase text-zinc-400 font-semibold tracking-wider">Sets</span><input className="sets-input bg-transparent w-8 text-center font-mono text-sm focus:outline-none focus:text-neon-400" oninput="updateWeightInputs(this)" type="number" value="3"/></div><div className="flex flex-col px-2 text-center"><span className="text-[10px] uppercase text-zinc-400 font-semibold tracking-wider">Reps</span><input className="bg-transparent w-10 text-center font-mono text-sm focus:outline-none focus:text-neon-400" type="text" value="6"/></div></div>
<button className="text-zinc-400 hover:text-red-500 p-1" onclick="this.closest('.exercise-card').remove()"><iconify-icon icon="solar:trash-bin-trash-linear" width="18"></iconify-icon></button>
</div>
</div>
<div className="pl-6 weight-inputs-container grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
<div className="flex flex-col gap-1"><label className="text-[10px] uppercase text-zinc-400 font-medium">Set 1</label><div className="relative"><input className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md py-1.5 px-2 text-center text-sm font-mono focus:border-neon-400 focus:outline-none transition-all" type="text" value="67.5"/><span className="absolute right-2 top-1.5 text-[10px] text-zinc-400 pointer-events-none">kg</span></div></div>
<div className="flex flex-col gap-1"><label className="text-[10px] uppercase text-zinc-400 font-medium">Set 2</label><div className="relative"><input className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md py-1.5 px-2 text-center text-sm font-mono focus:border-neon-400 focus:outline-none transition-all" type="text" value="65"/><span className="absolute right-2 top-1.5 text-[10px] text-zinc-400 pointer-events-none">kg</span></div></div>
<div className="flex flex-col gap-1"><label className="text-[10px] uppercase text-zinc-400 font-medium">Set 3</label><div className="relative"><input className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md py-1.5 px-2 text-center text-sm font-mono focus:border-neon-400 focus:outline-none transition-all" type="text" value="65"/><span className="absolute right-2 top-1.5 text-[10px] text-zinc-400 pointer-events-none">kg</span></div></div>
</div>
</div>

<div className="exercise-card draggable group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm" draggable="true">
<div className="absolute left-2 top-1/2 -translate-y-1/2 cursor-grab opacity-0 group-hover:opacity-100 text-zinc-300 dark:text-zinc-700 hover:text-zinc-500 p-2 drag-handle"><iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon></div>
<div className="pl-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
<div className="flex-1"><input className="w-full bg-transparent font-medium text-lg text-black dark:text-white focus:outline-none border-b border-transparent focus:border-neon-400 pb-1" type="text" value="Tirage Vertical (Pronation)"/></div>
<div className="flex items-center gap-3">
<div className="flex items-center bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-1 border border-zinc-200 dark:border-zinc-800"><div className="flex flex-col px-2 text-center border-r border-zinc-200 dark:border-zinc-700"><span className="text-[10px] uppercase text-zinc-400 font-semibold tracking-wider">Sets</span><input className="sets-input bg-transparent w-8 text-center font-mono text-sm focus:outline-none focus:text-neon-400" oninput="updateWeightInputs(this)" type="number" value="3"/></div><div className="flex flex-col px-2 text-center"><span className="text-[10px] uppercase text-zinc-400 font-semibold tracking-wider">Reps</span><input className="bg-transparent w-10 text-center font-mono text-sm focus:outline-none focus:text-neon-400" type="text" value="8"/></div></div>
<button className="text-zinc-400 hover:text-red-500 p-1" onclick="this.closest('.exercise-card').remove()"><iconify-icon icon="solar:trash-bin-trash-linear" width="18"></iconify-icon></button>
</div>
</div>
<div className="pl-6 weight-inputs-container grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
<div className="flex flex-col gap-1"><label className="text-[10px] uppercase text-zinc-400 font-medium">Set 1</label><div className="relative"><input className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md py-1.5 px-2 text-center text-sm font-mono focus:border-neon-400 focus:outline-none transition-all" type="text" value="65"/><span className="absolute right-2 top-1.5 text-[10px] text-zinc-400 pointer-events-none">kg</span></div></div>
<div className="flex flex-col gap-1"><label className="text-[10px] uppercase text-zinc-400 font-medium">Set 2</label><div className="relative"><input className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md py-1.5 px-2 text-center text-sm font-mono focus:border-neon-400 focus:outline-none transition-all" type="text" value="65"/><span className="absolute right-2 top-1.5 text-[10px] text-zinc-400 pointer-events-none">kg</span></div></div>
<div className="flex flex-col gap-1"><label className="text-[10px] uppercase text-zinc-400 font-medium">Set 3</label><div className="relative"><input className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md py-1.5 px-2 text-center text-sm font-mono focus:border-neon-400 focus:outline-none transition-all" type="text" value="60"/><span className="absolute right-2 top-1.5 text-[10px] text-zinc-400 pointer-events-none">kg</span></div></div>
</div>
</div>

<div className="exercise-card draggable group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm" draggable="true">
<div className="absolute left-2 top-1/2 -translate-y-1/2 cursor-grab opacity-0 group-hover:opacity-100 text-zinc-300 dark:text-zinc-700 hover:text-zinc-500 p-2 drag-handle"><iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon></div>
<div className="pl-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
<div className="flex-1"><input className="w-full bg-transparent font-medium text-lg text-black dark:text-white focus:outline-none border-b border-transparent focus:border-neon-400 pb-1" type="text" value="Standing Chest Press"/></div>
<div className="flex items-center gap-3">
<div className="flex items-center bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-1 border border-zinc-200 dark:border-zinc-800"><div className="flex flex-col px-2 text-center border-r border-zinc-200 dark:border-zinc-700"><span className="text-[10px] uppercase text-zinc-400 font-semibold tracking-wider">Sets</span><input className="sets-input bg-transparent w-8 text-center font-mono text-sm focus:outline-none focus:text-neon-400" oninput="updateWeightInputs(this)" type="number" value="3"/></div><div className="flex flex-col px-2 text-center"><span className="text-[10px] uppercase text-zinc-400 font-semibold tracking-wider">Reps</span><input className="bg-transparent w-10 text-center font-mono text-sm focus:outline-none focus:text-neon-400" type="text" value="10"/></div></div>
<button className="text-zinc-400 hover:text-red-500 p-1" onclick="this.closest('.exercise-card').remove()"><iconify-icon icon="solar:trash-bin-trash-linear" width="18"></iconify-icon></button>
</div>
</div>
<div className="pl-6 weight-inputs-container grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3" data-default-weight="27.5"></div>
</div>

<div className="exercise-card draggable group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm" draggable="true">
<div className="absolute left-2 top-1/2 -translate-y-1/2 cursor-grab opacity-0 group-hover:opacity-100 text-zinc-300 dark:text-zinc-700 hover:text-zinc-500 p-2 drag-handle"><iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon></div>
<div className="pl-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
<div className="flex-1"><input className="w-full bg-transparent font-medium text-lg text-black dark:text-white focus:outline-none border-b border-transparent focus:border-neon-400 pb-1" type="text" value="Tirage Horizontal"/></div>
<div className="flex items-center gap-3">
<div className="flex items-center bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-1 border border-zinc-200 dark:border-zinc-800"><div className="flex flex-col px-2 text-center border-r border-zinc-200 dark:border-zinc-700"><span className="text-[10px] uppercase text-zinc-400 font-semibold tracking-wider">Sets</span><input className="sets-input bg-transparent w-8 text-center font-mono text-sm focus:outline-none focus:text-neon-400" oninput="updateWeightInputs(this)" type="number" value="3"/></div><div className="flex flex-col px-2 text-center"><span className="text-[10px] uppercase text-zinc-400 font-semibold tracking-wider">Reps</span><input className="bg-transparent w-10 text-center font-mono text-sm focus:outline-none focus:text-neon-400" type="text" value="10"/></div></div>
<button className="text-zinc-400 hover:text-red-500 p-1" onclick="this.closest('.exercise-card').remove()"><iconify-icon icon="solar:trash-bin-trash-linear" width="18"></iconify-icon></button>
</div>
</div>
<div className="pl-6 weight-inputs-container grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
<div className="flex flex-col gap-1"><label className="text-[10px] uppercase text-zinc-400 font-medium">Set 1</label><div className="relative"><input className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md py-1.5 px-2 text-center text-sm font-mono focus:border-neon-400 focus:outline-none transition-all" type="text" value="50"/><span className="absolute right-2 top-1.5 text-[10px] text-zinc-400 pointer-events-none">kg</span></div></div>
<div className="flex flex-col gap-1"><label className="text-[10px] uppercase text-zinc-400 font-medium">Set 2</label><div className="relative"><input className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md py-1.5 px-2 text-center text-sm font-mono focus:border-neon-400 focus:outline-none transition-all" type="text" value="45"/><span className="absolute right-2 top-1.5 text-[10px] text-zinc-400 pointer-events-none">kg</span></div></div>
<div className="flex flex-col gap-1"><label className="text-[10px] uppercase text-zinc-400 font-medium">Set 3</label><div className="relative"><input className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md py-1.5 px-2 text-center text-sm font-mono focus:border-neon-400 focus:outline-none transition-all" type="text" value="40"/><span className="absolute right-2 top-1.5 text-[10px] text-zinc-400 pointer-events-none">kg</span></div></div>
</div>
</div>

<div className="exercise-card draggable group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm" draggable="true">
<div className="absolute left-2 top-1/2 -translate-y-1/2 cursor-grab opacity-0 group-hover:opacity-100 text-zinc-300 dark:text-zinc-700 hover:text-zinc-500 p-2 drag-handle"><iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon></div>
<div className="pl-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
<div className="flex-1"><input className="w-full bg-transparent font-medium text-lg text-black dark:text-white focus:outline-none border-b border-transparent focus:border-neon-400 pb-1" type="text" value="Smith-Machine Overhead"/></div>
<div className="flex items-center gap-3">
<div className="flex items-center bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-1 border border-zinc-200 dark:border-zinc-800"><div className="flex flex-col px-2 text-center border-r border-zinc-200 dark:border-zinc-700"><span className="text-[10px] uppercase text-zinc-400 font-semibold tracking-wider">Sets</span><input className="sets-input bg-transparent w-8 text-center font-mono text-sm focus:outline-none focus:text-neon-400" oninput="updateWeightInputs(this)" type="number" value="3"/></div><div className="flex flex-col px-2 text-center"><span className="text-[10px] uppercase text-zinc-400 font-semibold tracking-wider">Reps</span><input className="bg-transparent w-10 text-center font-mono text-sm focus:outline-none focus:text-neon-400" type="text" value="8"/></div></div>
<button className="text-zinc-400 hover:text-red-500 p-1" onclick="this.closest('.exercise-card').remove()"><iconify-icon icon="solar:trash-bin-trash-linear" width="18"></iconify-icon></button>
</div>
</div>
<div className="pl-6 weight-inputs-container grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
<div className="flex flex-col gap-1"><label className="text-[10px] uppercase text-zinc-400 font-medium">Set 1</label><div className="relative"><input className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md py-1.5 px-2 text-center text-sm font-mono focus:border-neon-400 focus:outline-none transition-all" type="text" value="15"/><span className="absolute right-2 top-1.5 text-[10px] text-zinc-400 pointer-events-none">kg</span></div></div>
<div className="flex flex-col gap-1"><label className="text-[10px] uppercase text-zinc-400 font-medium">Set 2</label><div className="relative"><input className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md py-1.5 px-2 text-center text-sm font-mono focus:border-neon-400 focus:outline-none transition-all" type="text" value="15"/><span className="absolute right-2 top-1.5 text-[10px] text-zinc-400 pointer-events-none">kg</span></div></div>
<div className="flex flex-col gap-1"><label className="text-[10px] uppercase text-zinc-400 font-medium">Set 3</label><div className="relative"><input className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md py-1.5 px-2 text-center text-sm font-mono focus:border-neon-400 focus:outline-none transition-all" type="text" value="12.5"/><span className="absolute right-2 top-1.5 text-[10px] text-zinc-400 pointer-events-none">kg</span></div></div>
</div>
</div>

<div className="exercise-card draggable group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm" draggable="true">
<div className="absolute left-2 top-1/2 -translate-y-1/2 cursor-grab opacity-0 group-hover:opacity-100 text-zinc-300 dark:text-zinc-700 hover:text-zinc-500 p-2 drag-handle"><iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon></div>
<div className="pl-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
<div className="flex-1"><input className="w-full bg-transparent font-medium text-lg text-black dark:text-white focus:outline-none border-b border-transparent focus:border-neon-400 pb-1" type="text" value="Pull-up (Lesté)"/></div>
<div className="flex items-center gap-3">
<div className="flex items-center bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-1 border border-zinc-200 dark:border-zinc-800"><div className="flex flex-col px-2 text-center border-r border-zinc-200 dark:border-zinc-700"><span className="text-[10px] uppercase text-zinc-400 font-semibold tracking-wider">Sets</span><input className="sets-input bg-transparent w-8 text-center font-mono text-sm focus:outline-none focus:text-neon-400" oninput="updateWeightInputs(this)" type="number" value="3"/></div><div className="flex flex-col px-2 text-center"><span className="text-[10px] uppercase text-zinc-400 font-semibold tracking-wider">Reps</span><input className="bg-transparent w-10 text-center font-mono text-sm focus:outline-none focus:text-neon-400" type="text" value="6-10"/></div></div>
<button className="text-zinc-400 hover:text-red-500 p-1" onclick="this.closest('.exercise-card').remove()"><iconify-icon icon="solar:trash-bin-trash-linear" width="18"></iconify-icon></button>
</div>
</div>
<div className="pl-6 weight-inputs-container grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
<div className="flex flex-col gap-1"><label className="text-[10px] uppercase text-zinc-400 font-medium">Set 1</label><div className="relative"><input className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md py-1.5 px-2 text-center text-sm font-mono focus:border-neon-400 focus:outline-none transition-all" type="text" value="12"/><span className="absolute right-2 top-1.5 text-[10px] text-zinc-400 pointer-events-none">kg</span></div></div>
<div className="flex flex-col gap-1"><label className="text-[10px] uppercase text-zinc-400 font-medium">Set 2</label><div className="relative"><input className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md py-1.5 px-2 text-center text-sm font-mono focus:border-neon-400 focus:outline-none transition-all" type="text" value="12"/><span className="absolute right-2 top-1.5 text-[10px] text-zinc-400 pointer-events-none">kg</span></div></div>
<div className="flex flex-col gap-1"><label className="text-[10px] uppercase text-zinc-400 font-medium">Set 3</label><div className="relative"><input className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md py-1.5 px-2 text-center text-sm font-mono focus:border-neon-400 focus:outline-none transition-all" type="text" value="0"/><span className="absolute right-2 top-1.5 text-[10px] text-zinc-400 pointer-events-none">kg</span></div></div>
</div>
</div>

<div className="exercise-card draggable group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm" draggable="true">
<div className="absolute left-2 top-1/2 -translate-y-1/2 cursor-grab opacity-0 group-hover:opacity-100 text-zinc-300 dark:text-zinc-700 hover:text-zinc-500 p-2 drag-handle"><iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon></div>
<div className="pl-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
<div className="flex-1"><input className="w-full bg-transparent font-medium text-lg text-black dark:text-white focus:outline-none border-b border-transparent focus:border-neon-400 pb-1" type="text" value="Cable Fly"/></div>
<div className="flex items-center gap-3">
<div className="flex items-center bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-1 border border-zinc-200 dark:border-zinc-800"><div className="flex flex-col px-2 text-center border-r border-zinc-200 dark:border-zinc-700"><span className="text-[10px] uppercase text-zinc-400 font-semibold tracking-wider">Sets</span><input className="sets-input bg-transparent w-8 text-center font-mono text-sm focus:outline-none focus:text-neon-400" oninput="updateWeightInputs(this)" type="number" value="3"/></div><div className="flex flex-col px-2 text-center"><span className="text-[10px] uppercase text-zinc-400 font-semibold tracking-wider">Reps</span><input className="bg-transparent w-10 text-center font-mono text-sm focus:outline-none focus:text-neon-400" type="text" value="8"/></div></div>
<button className="text-zinc-400 hover:text-red-500 p-1" onclick="this.closest('.exercise-card').remove()"><iconify-icon icon="solar:trash-bin-trash-linear" width="18"></iconify-icon></button>
</div>
</div>
<div className="pl-6 weight-inputs-container grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3" data-default-weight="12.5"></div>
</div>
</div>
<div className="mt-6"><button className="w-full py-3 border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex items-center justify-center gap-2 text-sm font-medium" onclick="addExercise('list-dimanche')"><iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon>Ajouter un exercice</button></div>
</section>
</main>
</div>


    </>
  );
}
