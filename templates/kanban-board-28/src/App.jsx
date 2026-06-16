import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- Drag and Drop Logic ---
        const draggables = document.querySelectorAll('.draggable');
        const dropzones = document.querySelectorAll('.dropzone');
        let draggedElement = null;

        // Initialize drag events for existing cards
        draggables.forEach(draggable => {
            addDragEvents(draggable);
        });

        // Setup dropzones (Columns)
        function setupDropzone(zone) {
            zone.addEventListener('dragover', e => {
                e.preventDefault(); // Required to allow dropping
                zone.parentElement.classList.add('drag-over');
                
                const afterElement = getDragAfterElement(zone, e.clientY);
                if (afterElement == null) {
                    zone.appendChild(draggedElement);
                } else {
                    zone.insertBefore(draggedElement, afterElement);
                }
            });

            zone.addEventListener('dragleave', () => {
                zone.parentElement.classList.remove('drag-over');
            });

            zone.addEventListener('drop', e => {
                e.preventDefault();
                zone.parentElement.classList.remove('drag-over');
                updateCounts();
            });
        }

        dropzones.forEach(zone => setupDropzone(zone));

        function addDragEvents(element) {
            element.addEventListener('dragstart', () => {
                draggedElement = element;
                setTimeout(() => element.classList.add('is-dragging'), 0);
            });

            element.addEventListener('dragend', () => {
                element.classList.remove('is-dragging');
                draggedElement = null;
                updateCounts();
            });
        }

        // Determine where to place the card based on mouse Y position
        function getDragAfterElement(container, y) {
            const draggableElements = [...container.querySelectorAll('.draggable:not(.is-dragging)')];

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

        function updateCounts() {
            document.querySelectorAll('[data-column]').forEach(column => {
                const count = column.querySelectorAll('.draggable').length;
                column.querySelector('.count-badge').textContent = count;
            });
        }

        // --- Add Column Logic ---
        function addNewColumn(btnElement) {
            const title = prompt("Введите название новой колонки:");
            if (!title) return;

            const board = document.getElementById('board');
            const columnId = 'col-' + Date.now();
            
            const newColumn = document.createElement('div');
            newColumn.className = 'w-80 shrink-0 flex flex-col max-h-full bg-neutral-50/80 border border-neutral-200/60 rounded-xl shadow-sm transition-colors duration-200';
            newColumn.setAttribute('data-column', columnId);
            
            // Pick a random color for the dot
            const colors = ['bg-indigo-500', 'bg-cyan-500', 'bg-emerald-500', 'bg-amber-500', 'bg-rose-500', 'bg-purple-500'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];

            newColumn.innerHTML = `
                <div class="p-3.5 flex items-center justify-between shrink-0 border-b border-neutral-100/50">
                    <div class="flex items-center gap-2">
                        <div class="w-2 h-2 rounded-full ${randomColor}"></div>
                        <h3 class="font-medium text-sm text-neutral-700 tracking-tight">${title}</h3>
                    </div>
                    <span class="text-xs bg-neutral-200/50 text-neutral-500 px-2 py-0.5 rounded-full font-medium count-badge">0</span>
                </div>
                <div class="p-3 pt-2.5 flex-1 overflow-y-auto space-y-2.5 dropzone min-h-[150px] board-scroll">
                </div>
                <div class="p-2 shrink-0 border-t border-neutral-100/50">
                    <button onclick="toggleAddCardForm(this, true)" class="add-card-btn w-full flex items-center gap-2 text-sm text-neutral-500 hover:bg-neutral-200/50 hover:text-neutral-800 py-1.5 px-2 rounded-md transition-colors">
                        <iconify-icon icon="solar:add-square-linear" class="text-base"></iconify-icon> Добавить карточку
                    </button>
                    <div class="add-card-form hidden flex-col gap-2 mt-1 px-1 pb-1">
                        <textarea class="card-input w-full text-sm text-neutral-900 bg-white border border-neutral-200 rounded-lg p-2.5 min-h-[64px] focus:outline-none focus:border-neutral-400 focus:ring-1 focus:ring-neutral-400 shadow-sm resize-none transition-colors" placeholder="Что нужно сделать?" onkeydown="handleCardInputKeydown(event, this)"></textarea>
                        <div class="flex items-center gap-2">
                            <button onclick="submitNewCard(this)" class="bg-neutral-900 text-white text-xs px-3.5 py-1.5 rounded-md font-medium hover:bg-neutral-800 transition-colors shadow-sm">Добавить</button>
                            <button onclick="toggleAddCardForm(this, false)" class="text-neutral-400 hover:text-neutral-700 p-1 rounded-md hover:bg-neutral-100 transition-colors" title="Отмена">
                                <iconify-icon icon="solar:close-circle-linear" class="text-lg"></iconify-icon>
                            </button>
                        </div>
                    </div>
                </div>
            `;

            board.insertBefore(newColumn, btnElement);

            // Initialize drag and drop for the new column
            const newDropzone = newColumn.querySelector('.dropzone');
            setupDropzone(newDropzone);
            
            // Scroll to the right to see the new column
            board.parentElement.scrollLeft = board.parentElement.scrollWidth;
        }

        // --- Add Card Logic (Inline Form) ---
        function toggleAddCardForm(element, show) {
            const container = element.closest('.p-2');
            const addBtn = container.querySelector('.add-card-btn');
            const form = container.querySelector('.add-card-form');
            const textarea = container.querySelector('.card-input');

            if (show) {
                addBtn.classList.add('hidden');
                form.classList.remove('hidden');
                form.classList.add('flex');
                textarea.value = '';
                textarea.focus();
            } else {
                addBtn.classList.remove('hidden');
                form.classList.add('hidden');
                form.classList.remove('flex');
            }
        }

        function handleCardInputKeydown(event, textarea) {
            if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault();
                submitNewCard(textarea);
            } else if (event.key === 'Escape') {
                toggleAddCardForm(textarea, false);
            }
        }

        function submitNewCard(element) {
            const container = element.closest('.p-2');
            const column = element.closest('[data-column]').querySelector('.dropzone');
            const textarea = container.querySelector('.card-input');
            const title = textarea.value.trim();

            if (!title) {
                textarea.focus();
                return;
            }

            const newCard = document.createElement('div');
            newCard.className = 'bg-white p-3.5 rounded-lg shadow-sm border border-neutral-200 cursor-grab hover:border-neutral-300 transition-all draggable group relative';
            newCard.setAttribute('draggable', 'true');
            newCard.onclick = function() { openModal(this); };
            
            newCard.innerHTML = `
                <h4 class="text-sm font-medium mb-1.5 text-neutral-900 leading-snug card-title">${title}</h4>
                <div class="flex items-center justify-between mt-3 pt-1 border-t border-neutral-50">
                    <span class="text-[10px] text-neutral-400">Только что</span>
                </div>
            `;
            
            column.appendChild(newCard);
            addDragEvents(newCard);
            updateCounts();
            
            // Scroll down to show new card
            column.scrollTop = column.scrollHeight;
            
            // Clear and keep focus for adding multiple cards quickly
            textarea.value = '';
            textarea.focus();
        }

        // --- Modal Logic ---
        const modal = document.getElementById('card-modal');
        const modalContent = document.getElementById('modal-content');
        const modalTitleInput = document.getElementById('modal-title-input');
        const modalColumnName = document.getElementById('modal-column-name');
        let currentCardEditing = null;

        function openModal(cardElement) {
            // Prevent opening if dragging
            if (cardElement.classList.contains('is-dragging')) return;

            currentCardEditing = cardElement;
            const title = cardElement.querySelector('.card-title').textContent;
            const columnTitle = cardElement.closest('[data-column]').querySelector('h3').textContent;

            modalTitleInput.value = title;
            modalColumnName.textContent = columnTitle;

            modal.classList.remove('hidden');
            // Trigger reflow for animation
            void modal.offsetWidth;
            modal.classList.remove('opacity-0');
            modalContent.classList.remove('scale-95');
            modalContent.classList.add('scale-100');
            
            document.body.style.overflow = 'hidden'; // Prevent background scrolling

            // Update card title on input change
            modalTitleInput.oninput = function() {
                if(currentCardEditing) {
                    currentCardEditing.querySelector('.card-title').textContent = this.value;
                }
            }
        }

        function closeModal() {
            modal.classList.add('opacity-0');
            modalContent.classList.remove('scale-100');
            modalContent.classList.add('scale-95');
            
            setTimeout(() => {
                modal.classList.add('hidden');
                document.body.style.overflow = '';
                currentCardEditing = null;
            }, 200); // match transition duration
        }

        function handleModalClickOutside(e) {
            if (e.target === modal) {
                closeModal();
            }
        }

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                closeModal();
            }
        });

        // --- Project Sidebar Logic ---
        function addProject() {
            const name = prompt("Название нового проекта:");
            if(!name) return;
            
            const list = document.getElementById('project-list');
            const li = document.createElement('li');
            li.className = 'group flex items-center justify-between p-2 rounded-md text-sm text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 cursor-pointer transition-colors';
            li.onclick = function() { switchProject(this); };
            li.innerHTML = `
                <div class="flex items-center gap-2.5 truncate">
                    <iconify-icon icon="solar:folder-linear" class="text-neutral-400 group-hover:text-neutral-500"></iconify-icon> 
                    <span class="truncate">${name}</span>
                </div>
                <button onclick="deleteProject(event, this)" class="opacity-0 group-hover:opacity-100 text-neutral-400 hover:text-blue-500 transition-all p-1 rounded hover:bg-neutral-200">
                    <iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon>
                </button>
            `;
            list.appendChild(li);
        }

        function deleteProject(event, btn) {
            event.stopPropagation(); // Prevent switching project
            if(confirm('Удалить этот проект?')) {
                btn.closest('li').remove();
            }
        }

        function switchProject(el) {
            // Reset others
            document.querySelectorAll('#project-list li').forEach(li => {
                li.className = 'group flex items-center justify-between p-2 rounded-md text-sm text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 cursor-pointer transition-colors';
                const icon = li.querySelector('iconify-icon');
                if(icon) icon.setAttribute('icon', 'solar:folder-linear');
            });
            
            // Set active
            el.className = 'group flex items-center justify-between p-2 rounded-md bg-neutral-100 text-sm font-medium text-neutral-900 cursor-pointer';
            el.querySelector('iconify-icon').setAttribute('icon', 'solar:folder-with-files-linear');
            
            // Update title
            const projectName = el.querySelector('span').textContent;
            document.getElementById('current-project-title').textContent = projectName;
        }

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 border-r border-neutral-200/80 bg-white flex flex-col shrink-0 z-10 transition-all duration-300 relative">

<div className="h-14 flex items-center px-5 border-b border-neutral-100 shrink-0">
<span className="font-medium text-lg tracking-tight flex items-center gap-2">
<div className="w-6 h-6 bg-neutral-900 rounded-[4px] flex items-center justify-center text-white">
<iconify-icon icon="solar:kanban-linear"></iconify-icon>
</div>
                K N B N
            </span>
</div>

<div className="flex-1 overflow-y-auto flex flex-col pt-4 pr-4 pb-4 pl-4 gap-x-6 gap-y-6">
<div className="">
<div className="flex items-center justify-between mb-2 text-xs font-medium text-neutral-500 tracking-wide px-1">
<span>ПРОЕКТЫ</span>
<button className="text-neutral-400 hover:text-neutral-800 transition-colors p-1 rounded hover:bg-neutral-100" onclick="addProject()" title="Добавить проект">
<iconify-icon className="text-base" icon="solar:add-circle-linear"></iconify-icon>
</button>
</div>
<ul className="space-y-0.5" id="project-list">

<li className="group flex items-center justify-between p-2 rounded-md bg-neutral-100 text-sm font-medium text-neutral-900 cursor-pointer">
<div className="flex items-center gap-2.5 truncate">
<iconify-icon className="text-neutral-500" icon="solar:folder-with-files-linear"></iconify-icon>
<span className="truncate">Редизайн Сайта</span>
</div>
</li>

<li className="group flex items-center justify-between p-2 rounded-md text-sm text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 cursor-pointer transition-colors" onclick="switchProject(this)">
<div className="flex items-center gap-2.5 truncate">
<iconify-icon className="text-neutral-400 group-hover:text-neutral-500" icon="solar:folder-linear"></iconify-icon>
<span className="truncate">Мобильное Приложение</span>
</div>
<button className="opacity-0 group-hover:opacity-100 text-neutral-400 hover:text-blue-500 transition-all p-1 rounded hover:bg-neutral-200" onclick="deleteProject(event, this)">
<iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</li>
<li className="group flex items-center justify-between p-2 rounded-md text-sm text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 cursor-pointer transition-colors" onclick="switchProject(this)">
<div className="flex items-center gap-2.5 truncate">
<iconify-icon className="text-neutral-400 group-hover:text-neutral-500" icon="solar:folder-linear"></iconify-icon>
<span className="truncate">Маркетинг Q3</span>
</div>
<button className="opacity-0 group-hover:opacity-100 text-neutral-400 hover:text-blue-500 transition-all p-1 rounded hover:bg-neutral-200" onclick="deleteProject(event, this)">
<iconify-icon className="" icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</li>
</ul>
</div>
</div>

<div className="p-4 border-t border-neutral-100 shrink-0">
<div className="flex items-center gap-3 px-1 cursor-pointer hover:opacity-80 transition-opacity">
<div className="w-8 h-8 rounded-full bg-neutral-200 border border-neutral-300 flex items-center justify-center overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix&amp;backgroundColor=f3f4f6"/>
</div>
<div className="flex-1 overflow-hidden">
<p className="text-sm font-medium text-neutral-900 truncate">Алексей С.</p>
<p className="text-xs text-neutral-500 truncate">Студия Дизайна</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-white shadow-[inset_1px_0_0_rgba(0,0,0,0.05)]">

<header className="h-14 border-b border-neutral-200/80 bg-white/50 backdrop-blur-md flex items-center px-8 shrink-0 justify-between sticky top-0 z-10">
<div className="flex items-center gap-4">
<h1 className="text-xl font-medium tracking-tight text-neutral-900" id="current-project-title">Редизайн Сайта</h1>
<span className="text-xs px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100 font-medium">Активный</span>
</div>
<div className="flex items-center gap-3">
<div className="relative">
<iconify-icon className="absolute left-2.5 top-1/2 -translate-y-1/2 text-neutral-400" icon="solar:magnifer-linear"></iconify-icon>
<input className="pl-8 pr-3 py-1.5 text-sm bg-neutral-50 border border-neutral-200 rounded-md focus:outline-none focus:ring-1 focus:ring-neutral-300 focus:bg-white w-48 transition-all" placeholder="Поиск задач..." type="text"/>
</div>
<button className="flex items-center justify-center w-8 h-8 rounded-md border border-neutral-200 text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 transition-colors">
<iconify-icon icon="solar:filter-linear"></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 overflow-x-auto overflow-y-hidden p-8 board-scroll bg-[#FBFBFB]">
<div className="flex h-full gap-x-6 gap-y-6 items-start" id="board">

<div className="w-80 shrink-0 flex flex-col max-h-full bg-neutral-50/80 border border-neutral-200/60 rounded-xl shadow-sm transition-colors duration-200" data-column="todo">
<div className="p-3.5 flex items-center justify-between shrink-0 border-b border-neutral-100/50">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-neutral-300"></div>
<h3 className="font-medium text-sm text-neutral-700 tracking-tight">К выполнению</h3>
</div>
<span className="text-xs bg-neutral-200/50 text-neutral-500 px-2 py-0.5 rounded-full font-medium count-badge">3</span>
</div>

<div className="p-3 pt-2.5 flex-1 overflow-y-auto space-y-2.5 dropzone min-h-[150px] board-scroll">

<div className="bg-white p-3.5 rounded-lg shadow-sm border border-neutral-200 cursor-grab hover:border-neutral-300 transition-all draggable group relative" draggable="true" onclick="openModal(this)">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-medium px-2 py-0.5 rounded bg-indigo-50 text-indigo-600 border border-indigo-100">Дизайн</span>
<button className="opacity-0 group-hover:opacity-100 text-neutral-400 hover:text-neutral-700 transition-opacity"><iconify-icon icon="solar:menu-dots-linear"></iconify-icon></button>
</div>
<h4 className="text-sm font-medium mb-1.5 text-neutral-900 leading-snug card-title">Создать UI Kit компонентов</h4>
<p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed mb-3">Определить цвета, типографику, стили кнопок и полей ввода согласно новому брендбуку.</p>
<div className="flex items-center justify-between mt-auto pt-1">
<div className="flex items-center gap-3 text-neutral-400">
<span className="flex items-center gap-1 text-xs"><iconify-icon icon="solar:paperclip-linear"></iconify-icon> 2</span>
<span className="flex items-center gap-1 text-xs"><iconify-icon icon="solar:chat-line-linear"></iconify-icon> 5</span>
</div>
<img className="w-5 h-5 rounded-full border border-neutral-200" src="https://api.dicebear.com/7.x/notionists/svg?seed=Alex&amp;backgroundColor=f3f4f6"/>
</div>
</div>

<div className="bg-white p-3.5 rounded-lg shadow-sm border border-neutral-200 cursor-grab hover:border-neutral-300 transition-all draggable group relative" draggable="true" onclick="openModal(this)">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-medium px-2 py-0.5 rounded bg-indigo-50 text-indigo-600 border border-indigo-100">Исследование</span>
</div>
<h4 className="text-sm font-medium mb-1.5 text-neutral-900 leading-snug card-title">Анализ конкурентов</h4>
<p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed mb-3">Собрать референсы с сайтов топ-3 конкурентов в нише SaaS.</p>
</div>

<div className="bg-white p-3.5 rounded-lg shadow-sm border border-neutral-200 cursor-grab hover:border-neutral-300 transition-all draggable group relative" draggable="true" onclick="openModal(this)">
<h4 className="text-sm font-medium mb-1.5 text-neutral-900 leading-snug card-title">Подготовить ТЗ для копирайтера</h4>
<div className="flex items-center justify-between mt-3 pt-1 border-t border-neutral-50">
<div className="flex items-center gap-3 text-neutral-400">
<span className="flex items-center gap-1 text-xs text-indigo-500 bg-indigo-50 px-1.5 rounded"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Завтра</span>
</div>
</div>
</div>
</div>

<div className="p-2 shrink-0 border-t border-neutral-100/50">
<button className="add-card-btn w-full flex items-center gap-2 text-sm text-neutral-500 hover:bg-neutral-200/50 hover:text-neutral-800 py-1.5 px-2 rounded-md transition-colors" onclick="toggleAddCardForm(this, true)">
<iconify-icon className="text-base" icon="solar:add-square-linear"></iconify-icon> Добавить карточку
                        </button>
<div className="add-card-form hidden flex-col gap-2 mt-1 px-1 pb-1">
<textarea className="card-input w-full text-sm text-neutral-900 bg-white border border-neutral-200 rounded-lg p-2.5 min-h-[64px] focus:outline-none focus:border-neutral-400 focus:ring-1 focus:ring-neutral-400 shadow-sm resize-none transition-colors" onkeydown="handleCardInputKeydown(event, this)" placeholder="Что нужно сделать?"></textarea>
<div className="flex items-center gap-2">
<button className="bg-neutral-900 text-white text-xs px-3.5 py-1.5 rounded-md font-medium hover:bg-neutral-800 transition-colors shadow-sm" onclick="submitNewCard(this)">Добавить</button>
<button className="text-neutral-400 hover:text-neutral-700 p-1 rounded-md hover:bg-neutral-100 transition-colors" onclick="toggleAddCardForm(this, false)" title="Отмена">
<iconify-icon className="text-lg" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="w-80 shrink-0 flex flex-col max-h-full bg-neutral-50/80 border border-neutral-200/60 rounded-xl shadow-sm transition-colors duration-200" data-column="in-progress">
<div className="p-3.5 flex items-center justify-between shrink-0 border-b border-neutral-100/50">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-indigo-500"></div>
<h3 className="font-medium text-sm text-neutral-700 tracking-tight">В процессе</h3>
</div>
<span className="text-xs bg-neutral-200/50 text-neutral-500 px-2 py-0.5 rounded-full font-medium count-badge">1</span>
</div>
<div className="p-3 pt-2.5 flex-1 overflow-y-auto space-y-2.5 dropzone min-h-[150px] board-scroll">

<div className="bg-white p-3.5 rounded-lg shadow-sm border border-neutral-200 cursor-grab hover:border-neutral-300 transition-all draggable group relative" draggable="true" onclick="openModal(this)">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-medium px-2 py-0.5 rounded bg-cyan-50 text-cyan-600 border border-cyan-100">Фронтенд</span>
</div>
<h4 className="text-sm font-medium mb-1.5 text-neutral-900 leading-snug card-title">Верстка главной страницы</h4>
<div className="w-full bg-neutral-100 rounded-full h-1.5 mb-3 mt-2 overflow-hidden">
<div className="bg-indigo-500 h-1.5 rounded-full" style={{width: '45%'}}></div>
</div>
<div className="flex items-center justify-between mt-auto">
<div className="flex items-center gap-3 text-neutral-400">
<span className="flex items-center gap-1 text-xs"><iconify-icon icon="solar:checklist-minimalistic-linear"></iconify-icon> 3/7</span>
</div>
<div className="flex -space-x-1.5">
<img className="w-5 h-5 rounded-full border border-white relative z-10" src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix&amp;backgroundColor=f3f4f6"/>
<img className="w-5 h-5 rounded-full border border-white relative z-0" src="https://api.dicebear.com/7.x/notionists/svg?seed=Maria&amp;backgroundColor=f3f4f6"/>
</div>
</div>
</div>
</div>

<div className="p-2 shrink-0 border-t border-neutral-100/50">
<button className="add-card-btn w-full flex items-center gap-2 text-sm text-neutral-500 hover:bg-neutral-200/50 hover:text-neutral-800 py-1.5 px-2 rounded-md transition-colors" onclick="toggleAddCardForm(this, true)">
<iconify-icon className="text-base" icon="solar:add-square-linear"></iconify-icon> Добавить карточку
                        </button>
<div className="add-card-form hidden flex-col gap-2 mt-1 px-1 pb-1">
<textarea className="card-input w-full text-sm text-neutral-900 bg-white border border-neutral-200 rounded-lg p-2.5 min-h-[64px] focus:outline-none focus:border-neutral-400 focus:ring-1 focus:ring-neutral-400 shadow-sm resize-none transition-colors" onkeydown="handleCardInputKeydown(event, this)" placeholder="Что нужно сделать?"></textarea>
<div className="flex items-center gap-2">
<button className="bg-neutral-900 text-white text-xs px-3.5 py-1.5 rounded-md font-medium hover:bg-neutral-800 transition-colors shadow-sm" onclick="submitNewCard(this)">Добавить</button>
<button className="text-neutral-400 hover:text-neutral-700 p-1 rounded-md hover:bg-neutral-100 transition-colors" onclick="toggleAddCardForm(this, false)" title="Отмена">
<iconify-icon className="text-lg" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="w-80 shrink-0 flex flex-col max-h-full bg-neutral-50/80 border border-neutral-200/60 rounded-xl shadow-sm transition-colors duration-200" data-column="done">
<div className="p-3.5 flex items-center justify-between shrink-0 border-b border-neutral-100/50">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-cyan-500"></div>
<h3 className="font-medium text-sm text-neutral-700 tracking-tight">Готово</h3>
</div>
<span className="text-xs bg-neutral-200/50 text-neutral-500 px-2 py-0.5 rounded-full font-medium count-badge">2</span>
</div>
<div className="p-3 pt-2.5 flex-1 overflow-y-auto space-y-2.5 dropzone min-h-[150px] board-scroll">

<div className="bg-white/60 p-3.5 rounded-lg border border-neutral-200 cursor-grab hover:border-neutral-300 transition-all draggable group relative opacity-80 hover:opacity-100" draggable="true" onclick="openModal(this)">
<h4 className="text-sm font-medium mb-1 text-neutral-700 line-through card-title">Структура базы данных</h4>
<p className="text-xs text-neutral-400 mb-2">Спроектировать архитектуру таблиц для MVP.</p>
<div className="flex items-center gap-3 text-cyan-500">
<span className="flex items-center gap-1 text-xs bg-cyan-50 px-1.5 rounded"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Выполнено</span>
</div>
</div>

<div className="bg-white/60 p-3.5 rounded-lg border border-neutral-200 cursor-grab hover:border-neutral-300 transition-all draggable group relative opacity-80 hover:opacity-100" draggable="true" onclick="openModal(this)">
<div className="flex justify-between items-start mb-1">
<span className="text-xs font-medium px-2 py-0.5 rounded bg-neutral-100 text-neutral-600 border border-neutral-200">Настройка</span>
</div>
<h4 className="text-sm font-medium mb-1 text-neutral-700 line-through card-title">Создать репозиторий GitHub</h4>
</div>
</div>

<div className="p-2 shrink-0 border-t border-neutral-100/50">
<button className="add-card-btn w-full flex items-center gap-2 text-sm text-neutral-500 hover:bg-neutral-200/50 hover:text-neutral-800 py-1.5 px-2 rounded-md transition-colors" onclick="toggleAddCardForm(this, true)">
<iconify-icon className="text-base" icon="solar:add-square-linear"></iconify-icon> Добавить карточку
                        </button>
<div className="add-card-form hidden flex-col gap-2 mt-1 px-1 pb-1">
<textarea className="card-input w-full text-sm text-neutral-900 bg-white border border-neutral-200 rounded-lg p-2.5 min-h-[64px] focus:outline-none focus:border-neutral-400 focus:ring-1 focus:ring-neutral-400 shadow-sm resize-none transition-colors" onkeydown="handleCardInputKeydown(event, this)" placeholder="Что нужно сделать?"></textarea>
<div className="flex items-center gap-2">
<button className="bg-neutral-900 text-white text-xs px-3.5 py-1.5 rounded-md font-medium hover:bg-neutral-800 transition-colors shadow-sm" onclick="submitNewCard(this)">Добавить</button>
<button className="text-neutral-400 hover:text-neutral-700 p-1 rounded-md hover:bg-neutral-100 transition-colors" onclick="toggleAddCardForm(this, false)" title="Отмена">
<iconify-icon className="text-lg" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<button className="w-80 shrink-0 h-12 flex items-center justify-center gap-2 text-sm font-medium text-neutral-500 bg-neutral-50/50 border border-dashed border-neutral-300 rounded-xl hover:bg-neutral-100 hover:text-neutral-800 transition-colors" onclick="addNewColumn(this)">
<iconify-icon className="text-lg" icon="solar:add-circle-linear"></iconify-icon> Добавить колонку
                </button>
</div>
</div>
</main>

<div className="fixed inset-0 bg-neutral-900/20 backdrop-blur-[2px] z-50 hidden items-center justify-center p-4 sm:p-6 transition-opacity duration-200 opacity-0" id="card-modal" onclick="handleModalClickOutside(event)">
<div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-full flex flex-col overflow-hidden transform scale-95 transition-transform duration-200" id="modal-content">

<div className="px-6 py-4 border-b border-neutral-100 flex items-start justify-between shrink-0 bg-white sticky top-0 z-10">
<div className="flex-1 mr-4">
<div className="flex items-center gap-2 text-xs text-neutral-500 mb-1.5 font-medium">
<span className="bg-neutral-100 px-2 py-0.5 rounded text-neutral-600" id="modal-column-name">К выполнению</span>
<span>•</span>
<span className="flex items-center gap-1 hover:text-neutral-800 cursor-pointer"><iconify-icon icon="solar:folder-linear"></iconify-icon> Редизайн Сайта</span>
</div>
<input className="text-2xl font-medium tracking-tight bg-transparent border-none focus:ring-0 p-0 w-full text-neutral-900 outline-none hover:bg-neutral-50 rounded px-1 -ml-1 transition-colors" id="modal-title-input" type="text" value="Создать UI Kit компонентов"/>
</div>
<div className="flex items-center gap-1">
<button className="text-neutral-400 hover:text-neutral-700 p-1.5 rounded-md hover:bg-neutral-100 transition-colors tooltip" title="Поделиться">
<iconify-icon className="text-xl" icon="solar:share-linear"></iconify-icon>
</button>
<button className="text-neutral-400 hover:text-neutral-700 p-1.5 rounded-md hover:bg-neutral-100 transition-colors" onclick="closeModal()" title="Закрыть (Esc)">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
</div>

<div className="p-6 flex-1 overflow-y-auto modal-scroll bg-[#FAFAFA]/50 space-y-8">

<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-white p-4 rounded-xl border border-neutral-100 shadow-sm">
<div>
<span className="block text-xs text-neutral-500 mb-1">Исполнитель</span>
<div className="flex items-center gap-2 cursor-pointer hover:bg-neutral-50 p-1 -ml-1 rounded">
<img className="w-6 h-6 rounded-full border border-neutral-200" src="https://api.dicebear.com/7.x/notionists/svg?seed=Alex&amp;backgroundColor=f3f4f6"/>
<span className="text-sm font-medium text-neutral-700">Алексей С.</span>
</div>
</div>
<div>
<span className="block text-xs text-neutral-500 mb-1">Дедлайн</span>
<div className="flex items-center gap-2 cursor-pointer hover:bg-neutral-50 p-1 -ml-1 rounded text-sm font-medium text-neutral-700">
<iconify-icon className="text-neutral-400" icon="solar:calendar-linear"></iconify-icon>
                            12 Окт
                        </div>
</div>
<div>
<span className="block text-xs text-neutral-500 mb-1">Приоритет</span>
<div className="flex items-center gap-2 cursor-pointer hover:bg-neutral-50 p-1 -ml-1 rounded text-sm font-medium text-blue-600">
<iconify-icon icon="solar:danger-circle-linear"></iconify-icon>
                            Высокий
                        </div>
</div>
<div>
<span className="block text-xs text-neutral-500 mb-1">Метки</span>
<div className="flex flex-wrap gap-1 mt-1">
<span className="text-[10px] font-medium px-2 py-0.5 rounded bg-indigo-50 text-indigo-600 border border-indigo-100 cursor-pointer">Дизайн</span>
<span className="text-[10px] text-neutral-400 bg-neutral-100 hover:bg-neutral-200 px-1.5 py-0.5 rounded cursor-pointer transition-colors">+</span>
</div>
</div>
</div>

<div>
<h3 className="text-sm font-medium text-neutral-900 flex items-center gap-2 mb-3">
<iconify-icon className="text-neutral-400 text-base" icon="solar:text-align-left-linear"></iconify-icon> Описание
                    </h3>
<div className="relative group">
<textarea className="w-full text-sm text-neutral-700 bg-white border border-neutral-200 rounded-xl p-4 min-h-[120px] focus:bg-white focus:border-neutral-400 focus:ring-0 outline-none resize-y transition-colors leading-relaxed shadow-sm hover:border-neutral-300" placeholder="Добавьте более подробное описание задачи..."></textarea>
<div className="absolute bottom-3 right-3 opacity-0 group-focus-within:opacity-100 transition-opacity">
<button className="bg-neutral-900 text-white text-xs px-3 py-1.5 rounded-md font-medium hover:bg-neutral-800">Сохранить</button>
</div>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-neutral-900 flex items-center gap-2">
<iconify-icon className="text-neutral-400 text-base" icon="solar:paperclip-linear"></iconify-icon> Вложения <span className="text-neutral-400 font-normal text-xs ml-1">3</span>
</h3>
<button className="text-xs font-medium text-neutral-700 bg-white border border-neutral-200 hover:bg-neutral-50 hover:border-neutral-300 px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 shadow-sm">
<iconify-icon className="text-sm" icon="solar:upload-linear"></iconify-icon> Добавить файл
                        </button>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
<div className="group relative rounded-xl border border-neutral-200/80 bg-neutral-50 aspect-video overflow-hidden shadow-sm flex items-center justify-center cursor-pointer transition-all hover:shadow-md">
<img alt="Цветовая палитра" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-2">
<div className="flex justify-end">
<button className="text-white/70 hover:text-white p-1 backdrop-blur-sm bg-black/20 rounded"><iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon></button>
</div>
<div className="text-white text-xs truncate drop-shadow-md px-1">palette_v2.jpg</div>
</div>
</div>
<div className="group relative rounded-xl border border-neutral-200/80 bg-white aspect-video overflow-hidden shadow-sm flex flex-col items-center justify-center cursor-pointer hover:border-neutral-300 transition-all hover:shadow-md">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-indigo-50 opacity-50"></div>
<div className="relative z-10 text-indigo-500 flex flex-col items-center gap-2">
<div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:play-circle-bold-duotone"></iconify-icon>
</div>
<span className="text-xs font-medium text-neutral-700">Анимация.mp4</span>
</div>
<div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
<button className="text-neutral-400 hover:text-blue-500 p-1 bg-white rounded shadow-sm"><iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon></button>
</div>
</div>
<div className="group relative rounded-xl border border-neutral-200/80 bg-white p-3.5 flex flex-col justify-between shadow-sm hover:border-neutral-300 transition-all hover:shadow-md cursor-pointer aspect-video">
<div className="flex items-start gap-3">
<div className="bg-blue-50 text-blue-500 p-2.5 rounded-lg shrink-0">
<iconify-icon className="text-xl" icon="solar:document-text-linear"></iconify-icon>
</div>
<div className="overflow-hidden min-w-0 pt-0.5">
<p className="text-sm font-medium text-neutral-800 truncate" title="Брендбук_2024_финал.pdf">Брендбук_2024.pdf</p>
<p className="text-[11px] text-neutral-400 mt-0.5">PDF • 4.2 MB</p>
</div>
</div>
<div className="flex items-center justify-between text-neutral-400 mt-2">
<span className="text-[10px]">Добавлено сегодня</span>
<button className="opacity-0 group-hover:opacity-100 hover:text-blue-500 transition-opacity"><iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon></button>
</div>
</div>
</div>
</div>

<div className="pb-6">
<h3 className="text-sm font-medium text-neutral-900 flex items-center gap-2 mb-4">
<iconify-icon className="text-neutral-400 text-base" icon="solar:list-bold-duotone"></iconify-icon> Активность
                    </h3>
<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-200 border border-neutral-300 shrink-0 overflow-hidden">
<img className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix&amp;backgroundColor=f3f4f6"/>
</div>
<div className="flex-1">
<div className="relative flex items-center">
<input className="w-full text-sm bg-white border border-neutral-200 rounded-xl py-2.5 pl-3 pr-10 focus:outline-none focus:border-neutral-400 shadow-sm transition-colors" placeholder="Написать комментарий..." type="text"/>
<button className="absolute right-2 text-neutral-400 hover:text-neutral-800 p-1"><iconify-icon className="text-lg" icon="solar:plain-2-linear"></iconify-icon></button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
