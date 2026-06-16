import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // Template for new Exercise Card
        const getExerciseTemplate = () => `
            <div class="exercise-card bg-white p-4 rounded-xl border border-gray-200 shadow-sm relative animate-[fadeIn_0.3s_ease-out]">
                <button onclick="removeExercise(this)" class="absolute top-4 right-4 text-gray-300 hover:text-red-500 transition-colors">
                    <i data-lucide="x" class="w-5 h-5"></i>
                </button>
                
                <div class="flex gap-3 mb-4 pr-8">
                    <div class="w-16">
                        <label class="block text-xs text-slate-400 uppercase tracking-wider font-medium mb-1">Order</label>
                        <input type="text" class="w-full text-lg text-slate-900 font-medium border-b border-gray-100 focus:border-slate-300 bg-transparent py-1 rounded-none placeholder-gray-200" placeholder="A1">
                    </div>
                    <div class="flex-1">
                        <label class="block text-xs text-slate-400 uppercase tracking-wider font-medium mb-1">Exercise</label>
                        <input type="text" class="w-full text-lg text-slate-900 font-medium border-b border-gray-100 focus:border-slate-300 bg-transparent py-1 rounded-none placeholder-gray-200" placeholder="Exercise Name">
                    </div>
                </div>
                
                <div class="grid grid-cols-4 gap-3">
                    <div>
                        <label class="block text-xs text-slate-400 uppercase tracking-wider font-medium mb-1">Reps</label>
                        <input type="text" class="w-full text-base text-slate-700 border-b border-gray-100 focus:border-slate-300 bg-transparent py-1 text-center rounded-none" placeholder="-">
                    </div>
                    <div>
                        <label class="block text-xs text-slate-400 uppercase tracking-wider font-medium mb-1">Sets</label>
                        <input type="text" class="w-full text-base text-slate-700 border-b border-gray-100 focus:border-slate-300 bg-transparent py-1 text-center rounded-none" placeholder="-">
                    </div>
                    <div>
                        <label class="block text-xs text-slate-400 uppercase tracking-wider font-medium mb-1">Tempo</label>
                        <input type="text" class="w-full text-base text-slate-700 border-b border-gray-100 focus:border-slate-300 bg-transparent py-1 text-center rounded-none" placeholder="-">
                    </div>
                    <div>
                        <label class="block text-xs text-slate-400 uppercase tracking-wider font-medium mb-1">Rest</label>
                        <input type="text" class="w-full text-base text-slate-700 border-b border-gray-100 focus:border-slate-300 bg-transparent py-1 text-center rounded-none" placeholder="-">
                    </div>
                </div>
            </div>
        `;

        // Template for new Day Section
        const getDayTemplate = () => `
             <div class="flex items-center justify-between mb-3">
                <input type="text" value="New Workout Day" class="text-xl tracking-tight font-medium text-slate-900 bg-transparent border-none focus:ring-0 w-full p-0" placeholder="Day Title">
                <button onclick="addExercise(this)" class="text-slate-400 hover:text-slate-600 p-2">
                    <i data-lucide="plus-circle" class="w-6 h-6"></i>
                </button>
            </div>
            <div class="space-y-3 exercise-list">
                ${getExerciseTemplate()}
            </div>
        `;

        function addExercise(btn) {
            const list = btn.closest('.day-section').querySelector('.exercise-list');
            const wrapper = document.createElement('div');
            wrapper.innerHTML = getExerciseTemplate();
            list.appendChild(wrapper.firstElementChild);
            lucide.createIcons();
        }

        function removeExercise(btn) {
            if(confirm('Delete this exercise?')) {
                btn.closest('.exercise-card').remove();
            }
        }

        function addDay() {
            const container = document.getElementById('app-container');
            const divider = document.createElement('hr');
            divider.className = "border-gray-200 border-dashed";
            
            const newDay = document.createElement('div');
            newDay.className = "day-section group";
            newDay.innerHTML = getDayTemplate();
            
            // Insert before the "Add Day" button container (last child)
            const addBtnContainer = container.lastElementChild;
            container.insertBefore(divider, addBtnContainer);
            container.insertBefore(newDay, addBtnContainer);
            
            lucide.createIcons();
            
            // Scroll to new day
            newDay.scrollIntoView({ behavior: 'smooth' });
        }

        function generatePDF() {
            // 1. Build the print HTML structure
            const printContent = document.getElementById('print-content');
            printContent.innerHTML = '';
            
            const days = document.querySelectorAll('.day-section');
            
            days.forEach(day => {
                const title = day.querySelector('input[type="text"]').value || "Untitled Day";
                const exercises = day.querySelectorAll('.exercise-card');
                
                if (exercises.length === 0) return;

                // Create Table Structure
                let tableRows = '';
                
                exercises.forEach((ex, index) => {
                    const inputs = ex.querySelectorAll('input');
                    // Input order in DOM: Order, Name, Reps, Sets, Tempo, Rest
                    const order = inputs[0].value;
                    const name = inputs[1].value;
                    const reps = inputs[2].value;
                    const sets = inputs[3].value;
                    const tempo = inputs[4].value;
                    const rest = inputs[5].value;
                    
                    // Zebra striping logic for rows
                    const bgClass = index % 2 === 0 ? 'bg-emerald-50/50' : 'bg-white';

                    tableRows += `
                        <tr class="${bgClass} border-b border-gray-200">
                            <td class="py-3 px-2 text-center font-semibold text-slate-800 text-sm border-r border-gray-200 w-12">${order}</td>
                            <td class="py-3 px-4 font-semibold text-slate-900 text-sm border-r border-gray-200">${name}</td>
                            <td class="py-3 px-2 text-center text-slate-700 text-sm border-r border-gray-200 w-24">${reps}</td>
                            <td class="py-3 px-2 text-center text-slate-700 text-sm border-r border-gray-200 w-16">${sets}</td>
                            <td class="py-3 px-2 text-center text-slate-700 text-sm border-r border-gray-200 w-20">${tempo}</td>
                            <td class="py-3 px-2 text-center text-slate-700 text-sm w-24">${rest}</td>
                        </tr>
                    `;
                });

                const dayBlock = `
                    <div class="mb-8 break-inside-avoid">
                        <h3 class="text-lg font-bold text-slate-900 mb-3 border-l-4 border-slate-900 pl-3 uppercase tracking-tight">${title}</h3>
                        <table class="w-full border-collapse border border-gray-200">
                            <thead>
                                <tr class="bg-slate-900 text-white">
                                    <th class="py-2 px-2 text-xs font-medium uppercase tracking-wider text-center border-r border-slate-700">Order</th>
                                    <th class="py-2 px-4 text-xs font-medium uppercase tracking-wider text-left border-r border-slate-700">Exercise</th>
                                    <th class="py-2 px-2 text-xs font-medium uppercase tracking-wider text-center border-r border-slate-700">Reps</th>
                                    <th class="py-2 px-2 text-xs font-medium uppercase tracking-wider text-center border-r border-slate-700">Sets</th>
                                    <th class="py-2 px-2 text-xs font-medium uppercase tracking-wider text-center border-r border-slate-700">Tempo</th>
                                    <th class="py-2 px-2 text-xs font-medium uppercase tracking-wider text-center">Rest</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${tableRows}
                            </tbody>
                        </table>
                    </div>
                `;
                
                printContent.innerHTML += dayBlock;
            });

            // 2. Configure html2pdf
            const element = document.getElementById('print-container');
            // Temporarily show it to render
            element.style.display = 'block';
            
            const opt = {
                margin:       0.5,
                filename:     'my-workout-plan.pdf',
                image:        { type: 'jpeg', quality: 0.98 },
                html2canvas:  { scale: 2 },
                jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
            };

            // 3. Generate and Save
            html2pdf().set(opt).from(element).save().then(() => {
                element.style.display = 'none';
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 px-4 py-4 mb-6">
<div className="max-w-lg mx-auto flex justify-between items-center">
<h1 className="text-xl font-semibold text-slate-900 tracking-tight">Ivan Coaching</h1>
<button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors flex items-center gap-2 shadow-sm active:scale-95 transform duration-100" onclick="generatePDF()">
<svg aria-hidden="true" className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
<span>Save PDF</span>
</button>
</div>
</nav>

<main className="max-w-lg mx-auto px-4 space-y-8" id="app-container">

<div className="day-section group" data-day="1">
<div className="flex items-center justify-between mb-3">
<input className="text-xl tracking-tight font-medium text-slate-900 bg-transparent border-none focus:ring-0 w-full p-0" placeholder="Day Title" type="text" value="Day 1: Upper Body Push"/>
<button className="text-slate-400 hover:text-slate-600 p-2" onclick="addExercise(this)">
<svg aria-hidden="true" className="lucide lucide-plus-circle w-6 h-6" data-lucide="plus-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
</button>
</div>
<div className="space-y-3 exercise-list">


<div className="exercise-card bg-white p-4 rounded-xl border border-gray-200 shadow-sm relative">
<button className="absolute top-4 right-4 text-gray-300 hover:text-red-500 transition-colors" onclick="removeExercise(this)">
<svg aria-hidden="true" className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<div className="flex gap-3 mb-4 pr-8">
<div className="w-16">
<label className="block text-xs text-slate-400 uppercase tracking-wider font-medium mb-1">Order</label>
<input className="w-full text-lg text-slate-900 font-medium border-b border-gray-100 focus:border-slate-300 bg-transparent py-1 rounded-none placeholder-gray-200" placeholder="A1" type="text" value="A1"/>
</div>
<div className="flex-1">
<label className="block text-xs text-slate-400 uppercase tracking-wider font-medium mb-1">Exercise</label>
<input className="w-full text-lg text-slate-900 font-medium border-b border-gray-100 focus:border-slate-300 bg-transparent py-1 rounded-none placeholder-gray-200" placeholder="Exercise Name" type="text" value="Incline DB Press"/>
</div>
</div>
<div className="grid grid-cols-4 gap-3">
<div>
<label className="block text-xs text-slate-400 uppercase tracking-wider font-medium mb-1">Reps</label>
<input className="w-full text-base text-slate-700 border-b border-gray-100 focus:border-slate-300 bg-transparent py-1 text-center rounded-none" type="text" value="10-12"/>
</div>
<div>
<label className="block text-xs text-slate-400 uppercase tracking-wider font-medium mb-1">Sets</label>
<input className="w-full text-base text-slate-700 border-b border-gray-100 focus:border-slate-300 bg-transparent py-1 text-center rounded-none" type="text" value="4"/>
</div>
<div>
<label className="block text-xs text-slate-400 uppercase tracking-wider font-medium mb-1">Tempo</label>
<input className="w-full text-base text-slate-700 border-b border-gray-100 focus:border-slate-300 bg-transparent py-1 text-center rounded-none" type="text" value="3010"/>
</div>
<div>
<label className="block text-xs text-slate-400 uppercase tracking-wider font-medium mb-1">Rest</label>
<input className="w-full text-base text-slate-700 border-b border-gray-100 focus:border-slate-300 bg-transparent py-1 text-center rounded-none" type="text" value="90s"/>
</div>
</div>
</div>

<div className="exercise-card bg-white p-4 rounded-xl border border-gray-200 shadow-sm relative">
<button className="absolute top-4 right-4 text-gray-300 hover:text-red-500 transition-colors" onclick="removeExercise(this)">
<svg aria-hidden="true" className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<div className="flex gap-3 mb-4 pr-8">
<div className="w-16">
<label className="block text-xs text-slate-400 uppercase tracking-wider font-medium mb-1">Order</label>
<input className="w-full text-lg text-slate-900 font-medium border-b border-gray-100 focus:border-slate-300 bg-transparent py-1 rounded-none placeholder-gray-200" placeholder="B1" type="text" value="B1"/>
</div>
<div className="flex-1">
<label className="block text-xs text-slate-400 uppercase tracking-wider font-medium mb-1">Exercise</label>
<input className="w-full text-lg text-slate-900 font-medium border-b border-gray-100 focus:border-slate-300 bg-transparent py-1 rounded-none placeholder-gray-200" placeholder="Exercise Name" type="text" value="Pull Ups"/>
</div>
</div>
<div className="grid grid-cols-4 gap-3">
<div>
<label className="block text-xs text-slate-400 uppercase tracking-wider font-medium mb-1">Reps</label>
<input className="w-full text-base text-slate-700 border-b border-gray-100 focus:border-slate-300 bg-transparent py-1 text-center rounded-none" type="text" value="AMRAP"/>
</div>
<div>
<label className="block text-xs text-slate-400 uppercase tracking-wider font-medium mb-1">Sets</label>
<input className="w-full text-base text-slate-700 border-b border-gray-100 focus:border-slate-300 bg-transparent py-1 text-center rounded-none" type="text" value="3"/>
</div>
<div>
<label className="block text-xs text-slate-400 uppercase tracking-wider font-medium mb-1">Tempo</label>
<input className="w-full text-base text-slate-700 border-b border-gray-100 focus:border-slate-300 bg-transparent py-1 text-center rounded-none" type="text" value="2011"/>
</div>
<div>
<label className="block text-xs text-slate-400 uppercase tracking-wider font-medium mb-1">Rest</label>
<input className="w-full text-base text-slate-700 border-b border-gray-100 focus:border-slate-300 bg-transparent py-1 text-center rounded-none" type="text" value="120s"/>
</div>
</div>
</div>
</div>
</div>

<hr className="border-gray-200 border-dashed"/>

<div className="day-section group" data-day="2">
<div className="flex items-center justify-between mb-3">
<input className="text-xl tracking-tight font-medium text-slate-900 bg-transparent border-none focus:ring-0 w-full p-0" placeholder="Day Title" type="text" value="Day 2: Lower Body"/>
<button className="text-slate-400 hover:text-slate-600 p-2" onclick="addExercise(this)">
<svg aria-hidden="true" className="lucide lucide-plus-circle w-6 h-6" data-lucide="plus-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
</button>
</div>
<div className="space-y-3 exercise-list">

<div className="exercise-card bg-white p-4 rounded-xl border border-gray-200 shadow-sm relative">
<button className="absolute top-4 right-4 text-gray-300 hover:text-red-500 transition-colors" onclick="removeExercise(this)">
<svg aria-hidden="true" className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<div className="flex gap-3 mb-4 pr-8">
<div className="w-16">
<label className="block text-xs text-slate-400 uppercase tracking-wider font-medium mb-1">Order</label>
<input className="w-full text-lg text-slate-900 font-medium border-b border-gray-100 focus:border-slate-300 bg-transparent py-1 rounded-none placeholder-gray-200" placeholder="A1" type="text" value="A1"/>
</div>
<div className="flex-1">
<label className="block text-xs text-slate-400 uppercase tracking-wider font-medium mb-1">Exercise</label>
<input className="w-full text-lg text-slate-900 font-medium border-b border-gray-100 focus:border-slate-300 bg-transparent py-1 rounded-none placeholder-gray-200" placeholder="Exercise Name" type="text" value="Hack Squat"/>
</div>
</div>
<div className="grid grid-cols-4 gap-3">
<div>
<label className="block text-xs text-slate-400 uppercase tracking-wider font-medium mb-1">Reps</label>
<input className="w-full text-base text-slate-700 border-b border-gray-100 focus:border-slate-300 bg-transparent py-1 text-center rounded-none" type="text" value="8,8,6"/>
</div>
<div>
<label className="block text-xs text-slate-400 uppercase tracking-wider font-medium mb-1">Sets</label>
<input className="w-full text-base text-slate-700 border-b border-gray-100 focus:border-slate-300 bg-transparent py-1 text-center rounded-none" type="text" value="3"/>
</div>
<div>
<label className="block text-xs text-slate-400 uppercase tracking-wider font-medium mb-1">Tempo</label>
<input className="w-full text-base text-slate-700 border-b border-gray-100 focus:border-slate-300 bg-transparent py-1 text-center rounded-none" type="text" value="3110"/>
</div>
<div>
<label className="block text-xs text-slate-400 uppercase tracking-wider font-medium mb-1">Rest</label>
<input className="w-full text-base text-slate-700 border-b border-gray-100 focus:border-slate-300 bg-transparent py-1 text-center rounded-none" type="text" value="180s"/>
</div>
</div>
</div>
</div>
</div>

<div className="pt-4 text-center">
<button className="text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors flex items-center justify-center gap-2 mx-auto" onclick="addDay()">
<svg aria-hidden="true" className="lucide lucide-calendar-plus w-4 h-4" data-lucide="calendar-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 19h6"></path><path d="M16 2v4"></path><path d="M19 16v6"></path><path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"></path><path d="M3 10h18"></path><path d="M8 2v4"></path></svg>
                Add Workout Day
            </button>
</div>
</main>

<div className="bg-white p-8 max-w-4xl mx-auto" id="print-container">

<div className="text-center mb-8 border-b-2 border-slate-900 pb-4">
<h1 className="text-3xl font-bold text-slate-900 uppercase tracking-wider mb-2">Workout Program</h1>
<p className="text-slate-500 text-sm">Generated Plan</p>
</div>

<div className="space-y-8" id="print-content"></div>
</div>


    </>
  );
}
