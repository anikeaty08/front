import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
gray: {
50: '#f9fafb',
100: '#f3f4f6',
200: '#e5e7eb',
300: '#d1d5db',
400: '#9ca3af',
500: '#6b7280',
600: '#4b5563',
700: '#374151',
800: '#1f2937',
900: '#111827',
950: '#030712',
}
}
}
}
}



        // --- THEME TOGGLE LOGIC ---
        function toggleTheme() {
            const html = document.documentElement;
            if (html.classList.contains('dark')) {
                html.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            } else {
                html.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            }
        }
        
        // Check preference
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        }

        // --- 1. CONFIGURATION & STATE ---

        const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
        const TIMES = [
            "08:00-09:00", "09:00-10:00", "10:00-11:00", 
            "11:00-12:00", "12:00-13:00", "13:00-14:00"
        ];

        const generateId = () => Math.random().toString(36).substr(2, 9);

        let scheduleData = [];

        const initialClasses = [
            { id: generateId(), subject: "CSE101", teacher: "Dr. Rahman", room: "B202", section: "1 AM", day: "Sunday", time: "08:00-09:00" },
            { id: generateId(), subject: "CSE101", teacher: "Dr. Rahman", room: "B202", section: "1 AM", day: "Sunday", time: "09:00-10:00" },
            { id: generateId(), subject: "ENG102", teacher: "Ms. Sarah", room: "A101", section: "1 AM", day: "Sunday", time: "11:00-12:00" },
            { id: generateId(), subject: "PHY103", teacher: "Prof. Ali", room: "Lab 3", section: "1 AM", day: "Monday", time: "10:00-11:00" },
            { id: generateId(), subject: "PHY103", teacher: "Prof. Ali", room: "Lab 3", section: "1 AM", day: "Monday", time: "11:00-12:00" },
            { id: generateId(), subject: "MAT201", teacher: "Mr. Khan", room: "C304", section: "1 AM", day: "Tuesday", time: "09:00-10:00" },
            { id: generateId(), subject: "MAT201", teacher: "Mr. Khan", room: "C304", section: "1 AM", day: "Wednesday", time: "09:00-10:00" },
        ];

        const initializeState = () => {
            scheduleData = [];
            DAYS.forEach(day => {
                TIMES.forEach(time => {
                    const existing = initialClasses.find(c => c.day === day && c.time === time);
                    if (existing) {
                        scheduleData.push({ ...existing });
                    } else {
                        scheduleData.push({
                            id: `empty-${day}-${time}`,
                            subject: null,
                            teacher: null,
                            room: null,
                            section: "1 AM",
                            day: day,
                            time: time
                        });
                    }
                });
            });
        };

        const getEntry = (day, time) => {
            return scheduleData.find(e => e.day === day && e.time === time);
        };

        const updateEntryPosition = (entryId, newDay, newTime) => {
            const entryIndex = scheduleData.findIndex(e => e.id === entryId);
            if (entryIndex === -1) return;

            const targetEntry = getEntry(newDay, newTime);
            const sourceEntry = scheduleData[entryIndex];
            
            const oldDay = sourceEntry.day;
            const oldTime = sourceEntry.time;

            sourceEntry.day = newDay;
            sourceEntry.time = newTime;

            targetEntry.day = oldDay;
            targetEntry.time = oldTime;
        };

        // --- 3. RENDERING ---

        const renderSchedule = () => {
            const root = document.getElementById('schedule-root');
            let html = '';

            // Header Row
            html += `<div class="grid grid-cols-[100px_repeat(${TIMES.length},1fr)] border-b border-gray-100 dark:border-gray-800/50">`;
            html += `<div class="p-4 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider flex items-center justify-center bg-gray-50/50 dark:bg-gray-800/20">Day</div>`;
            TIMES.forEach(time => {
                html += `<div class="p-4 text-xs font-medium text-gray-500 dark:text-gray-400 text-center border-l border-gray-100 dark:border-gray-800/50">${time}</div>`;
            });
            html += `</div>`;

            // Body Rows (Days)
            DAYS.forEach(day => {
                html += `<div class="grid grid-cols-[100px_repeat(${TIMES.length},1fr)] border-b border-gray-100 dark:border-gray-800/50 last:border-0 group">`;
                
                // Day Label
                html += `<div class="p-4 text-xs font-semibold text-gray-900 dark:text-gray-200 flex items-center justify-center bg-gray-50/30 dark:bg-gray-800/10 group-hover:bg-gray-50 dark:group-hover:bg-gray-800/30 transition-colors">${day.substring(0,3)}</div>`;

                // Time Slots
                let skipCount = 0;

                TIMES.forEach((time, index) => {
                    if (skipCount > 0) {
                        skipCount--;
                        return;
                    }

                    const entry = getEntry(day, time);
                    let span = 1;
                    if (entry.subject !== null) {
                        for (let i = index + 1; i < TIMES.length; i++) {
                            const nextTime = TIMES[i];
                            const nextEntry = getEntry(day, nextTime);
                            if (nextEntry.subject === entry.subject && nextEntry.teacher === entry.teacher && nextEntry.room === entry.room && nextEntry.subject !== null) {
                                span++;
                            } else {
                                break;
                            }
                        }
                    }

                    skipCount = span - 1;
                    const colSpanClass = span > 1 ? `col-span-${span}` : 'col-span-1';
                    
                    html += `
                        <div 
                            class="${colSpanClass} relative p-2 h-32 border-l border-gray-100 dark:border-gray-800/50 transition-colors"
                            ondragover="handleDragOver(event)"
                            ondrop="handleDrop(event, '${day}', '${time}')"
                        >
                            ${renderCellContent(entry, span)}
                        </div>
                    `;
                });

                html += `</div>`;
            });

            root.innerHTML = html;
            lucide.createIcons();
        };

        const renderCellContent = (entry, span) => {
            const isEmpty = entry.subject === null;
            
            if (isEmpty) {
                return `
                    <div 
                        draggable="true"
                        ondragstart="handleDragStart(event, '${entry.id}')"
                        class="w-full h-full rounded-lg border border-dashed border-gray-200 dark:border-gray-800 flex flex-col items-center justify-center gap-1 text-gray-300 dark:text-gray-700 hover:text-gray-400 dark:hover:text-gray-500 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all cursor-grab group slot-transition"
                    >
                        <i data-lucide="plus" class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"></i>
                        <span class="text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity">Add</span>
                    </div>
                `;
            }

            const isMerged = span > 1;
            const bgClass = isMerged 
                ? 'bg-indigo-50/50 dark:bg-indigo-500/10 border-indigo-100 dark:border-indigo-500/20' 
                : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700';
            const accentClass = isMerged ? 'bg-indigo-600 dark:bg-indigo-500' : 'bg-gray-900 dark:bg-gray-100';
            const textClass = 'text-gray-900 dark:text-gray-100';
            const subTextClass = 'text-gray-500 dark:text-gray-400';

            return `
                <div 
                    draggable="true"
                    ondragstart="handleDragStart(event, '${entry.id}')"
                    class="w-full h-full rounded-lg border ${bgClass} shadow-sm p-3 flex flex-col justify-between cursor-grab active:cursor-grabbing card-hover slot-transition relative overflow-hidden group"
                >
                    <div class="absolute left-0 top-0 bottom-0 w-1 ${accentClass}"></div>

                    <div class="pl-2">
                        <div class="flex items-start justify-between">
                            <h3 class="text-sm font-semibold ${textClass} leading-tight tracking-tight">${entry.subject}</h3>
                            <button class="text-gray-300 dark:text-gray-600 hover:text-gray-500 dark:hover:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
                                <i data-lucide="more-horizontal" class="w-4 h-4"></i>
                            </button>
                        </div>
                        <p class="text-xs ${subTextClass} mt-1 font-medium">${entry.teacher}</p>
                    </div>

                    <div class="pl-2 flex items-center justify-between mt-2">
                        <div class="flex items-center gap-1 text-gray-400 dark:text-gray-500">
                            <i data-lucide="map-pin" class="w-3 h-3"></i>
                            <span class="text-[10px] font-medium uppercase tracking-wide">${entry.room}</span>
                        </div>
                        ${isMerged ? `<div class="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-1.5 py-0.5 rounded text-[10px] font-semibold tracking-tight">2h</div>` : ''}
                    </div>
                </div>
            `;
        };

        // --- 4. DRAG & DROP HANDLERS ---

        let draggedEntryId = null;

        window.handleDragStart = (e, id) => {
            draggedEntryId = id;
            e.dataTransfer.effectAllowed = "move";
            e.dataTransfer.setData("text/plain", id);
            setTimeout(() => {
                e.target.classList.add('dragging');
            }, 0);
        };

        window.handleDragOver = (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = "move";
        };

        window.handleDrop = (e, targetDay, targetTime) => {
            e.preventDefault();
            const draggingEl = document.querySelector('.dragging');
            if (draggingEl) draggingEl.classList.remove('dragging');

            if (!draggedEntryId) return;

            const sourceEntry = scheduleData.find(x => x.id === draggedEntryId);
            const targetEntry = getEntry(targetDay, targetTime);

            if (!sourceEntry || !targetEntry) return;

            updateEntryPosition(draggedEntryId, targetDay, targetTime);
            renderSchedule();
            draggedEntryId = null;
        };

        // --- 5. INITIALIZATION ---

        document.addEventListener('DOMContentLoaded', () => {
            initializeState();
            renderSchedule();
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
<div>
<div className="flex items-center gap-2 mb-1">
<div className="h-6 w-6 rounded bg-gray-900 dark:bg-white flex items-center justify-center text-white dark:text-gray-900 font-medium text-xs tracking-tighter transition-colors">RS</div>
<h1 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Routine System</h1>
</div>
<p className="text-sm text-gray-500 dark:text-gray-400 font-normal">Manage academic schedules with drag-and-drop merging.</p>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center justify-center w-8 h-8 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 transition-colors" onclick="toggleTheme()">
<i className="w-4 h-4 hidden dark:block" data-lucide="moon"></i>
<i className="w-4 h-4 block dark:hidden" data-lucide="sun"></i>
</button>
<div className="h-4 w-px bg-gray-300 dark:bg-gray-700"></div>
<button className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-md shadow-sm text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
<i className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" data-lucide="filter"></i>
                Filter
            </button>
<button className="flex items-center gap-2 px-3 py-1.5 bg-gray-900 dark:bg-white border border-transparent rounded-md shadow-sm text-xs font-medium text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
<i className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500" data-lucide="save"></i>
                Save Changes
            </button>
</div>
</header>

<main className="flex-1 w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm overflow-hidden flex flex-col transition-colors duration-300">

<div className="overflow-x-auto no-scrollbar">
<div className="min-w-[1000px] w-full" id="schedule-root">

</div>
</div>
</main>

<footer className="mt-6 flex items-center justify-between text-xs text-gray-400 dark:text-gray-600">
<div className="flex items-center gap-4">
<span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-indigo-500"></div> Merged Class</span>
<span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700"></div> Single Slot</span>
<span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full border border-dashed border-gray-300 dark:border-gray-700"></div> Empty</span>
</div>
<p>Drag to move. Drop on existing to swap.</p>
</footer>



    </>
  );
}
