import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    document.addEventListener('DOMContentLoaded', () => {
      if (window.lucide) lucide.createIcons();

      // Utilities
      const $ = (s, r = document) => r.querySelector(s);
      const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
      const toast = $('#toast');
      const toastMsg = $('#toastMsg');
      let toastTimeout;

      function showToast(message = 'Saved') {
        toastMsg.textContent = message;
        toast.classList.remove('hidden');
        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => toast.classList.add('hidden'), 2200);
      }

      // Library collapse/expand - modified to show library when requested
      const mainGrid = $('#mainGrid');
      const timelineSection = $('#timelineSection');
      const libraryCard = $('#libraryCard');
      const libraryCollapsed = $('#libraryCollapsed');
      const toggleLibrary = $('#toggleLibrary');
      const expandLibrary = $('#expandLibrary');

      function showLibrary() {
        libraryCard.classList.remove('hidden');
        libraryCollapsed.classList.add('hidden');
        // Restore timeline to normal width
        timelineSection.className = 'lg:col-span-7 xl:col-span-8';
      }

      function hideLibrary() {
        libraryCard.classList.add('hidden');
        libraryCollapsed.classList.add('hidden');
        // Expand timeline to full width
        timelineSection.className = 'lg:col-span-12';
      }

      toggleLibrary?.addEventListener('click', hideLibrary);
      expandLibrary?.addEventListener('click', showLibrary);

      // Search and filter functionality
      const searchInput = $('#searchInput');
      const filterBtn = $('#filterBtn');
      const filterMenu = $('#filterMenu');
      const filterCheckboxes = $$('.filter-checkbox');
      const libraryItems = $$('.library-item');

      filterBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        filterMenu.classList.toggle('hidden');
      });

      document.addEventListener('click', (e) => {
        if (!filterMenu.contains(e.target)) {
          filterMenu.classList.add('hidden');
        }
      });

      function applyFilters() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategories = filterCheckboxes
          .filter(cb => cb.checked && cb.value !== 'all')
          .map(cb => cb.value);
        const showAll = filterCheckboxes.find(cb => cb.value === 'all')?.checked;

        libraryItems.forEach(item => {
          const title = item.querySelector('[draggable="true"]')?.textContent.toLowerCase() || '';
          const category = item.dataset.category || '';
          
          const matchesSearch = !searchTerm || title.includes(searchTerm);
          const matchesFilter = showAll || selectedCategories.length === 0 || selectedCategories.includes(category);
          
          item.style.display = (matchesSearch && matchesFilter) ? 'block' : 'none';
        });
      }

      searchInput?.addEventListener('input', applyFilters);
      
      filterCheckboxes.forEach(cb => {
        cb.addEventListener('change', () => {
          if (cb.value === 'all') {
            filterCheckboxes.forEach(other => {
              if (other.value !== 'all') other.checked = false;
            });
          } else {
            const allCheckbox = filterCheckboxes.find(c => c.value === 'all');
            if (allCheckbox) allCheckbox.checked = false;
          }
          applyFilters();
        });
      });

      // Quick Add menu
      const quickAdd = $('#quickAdd');
      const quickAddMenu = $('#quickAddMenu');
      const qaFromLibrary = $('#qaFromLibrary');
      
      quickAdd?.addEventListener('click', (e) => {
        e.stopPropagation();
        quickAddMenu.classList.toggle('hidden');
      });

      // NEW: Add from library button shows the library
      qaFromLibrary?.addEventListener('click', () => {
        showLibrary();
        quickAddMenu.classList.add('hidden');
        showToast('Mission library opened');
      });

      document.addEventListener('click', (e) => {
        if (!quickAddMenu.contains(e.target)) quickAddMenu.classList.add('hidden');
      });

      // Library expand/collapse for subtasks sections
      $$('[data-expand-trigger]').forEach(btn => {
        btn.addEventListener('click', () => {
          const target = document.querySelector(btn.dataset.expandTrigger);
          if (target) target.classList.toggle('hidden');
        });
      });

      // Mission dragging and resizing
      let draggedMission = null;
      let isResizing = false;
      let resizeData = null;

      function bindMissionInteractions(mission) {
        const titleElement = mission.querySelector('.mission-title');
        const resizeHandles = mission.querySelectorAll('.resize-handle');
        
        // Click on title opens modal
        titleElement?.addEventListener('click', (e) => {
          e.stopPropagation();
          openMissionModalFromBar(mission);
        });
        
        // Mission bar dragging (excluding handles and title)
        mission.addEventListener('mousedown', (e) => {
          if (e.target.closest('.resize-handle') || e.target.closest('.mission-title')) return;
          
          draggedMission = mission;
          mission.style.opacity = '0.7';
          mission.style.zIndex = '1000';
          
          const handleMouseMove = (e) => {
            const timelineGrid = $('#timelineGrid');
            const rect = timelineGrid.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const colWidth = rect.width / 12;
            let newColStart = Math.max(1, Math.min(12, Math.floor(x / colWidth) + 1));
            
            const container = mission.parentElement;
            const currentSpan = parseInt(container.dataset.colSpan, 10);
            const maxSpan = Math.min(currentSpan, 12 - newColStart + 1);
            
            container.style.gridColumn = `${newColStart} / span ${maxSpan}`;
            container.dataset.colStart = String(newColStart);
            container.dataset.colSpan = String(maxSpan);
          };
          
          const handleMouseUp = () => {
            if (draggedMission) {
              draggedMission.style.opacity = '';
              draggedMission.style.zIndex = '';
              draggedMission = null;
              showToast('Mission moved');
            }
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
          };
          
          document.addEventListener('mousemove', handleMouseMove);
          document.addEventListener('mouseup', handleMouseUp);
        });
        
        // Resize handles
        resizeHandles.forEach(handle => {
          handle.addEventListener('mousedown', (e) => {
            e.stopPropagation();
            isResizing = true;
            const container = mission.parentElement;
            const currentStart = parseInt(container.dataset.colStart, 10);
            const currentSpan = parseInt(container.dataset.colSpan, 10);
            const isLeftHandle = handle.classList.contains('left');
            
            resizeData = {
              mission,
              container,
              isLeftHandle,
              originalStart: currentStart,
              originalSpan: currentSpan,
              originalEnd: currentStart + currentSpan - 1
            };
            
            const handleMouseMove = (e) => {
              const timelineGrid = $('#timelineGrid');
              const rect = timelineGrid.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const colWidth = rect.width / 12;
              const mouseCol = Math.max(1, Math.min(12, Math.floor(x / colWidth) + 1));
              
              let newStart, newSpan;
              
              if (resizeData.isLeftHandle) {
                newStart = Math.min(mouseCol, resizeData.originalEnd);
                newSpan = resizeData.originalEnd - newStart + 1;
              } else {
                newStart = resizeData.originalStart;
                newSpan = Math.max(1, mouseCol - resizeData.originalStart + 1);
                newSpan = Math.min(newSpan, 12 - newStart + 1);
              }
              
              resizeData.container.style.gridColumn = `${newStart} / span ${newSpan}`;
              resizeData.container.dataset.colStart = String(newStart);
              resizeData.container.dataset.colSpan = String(newSpan);
            };
            
            const handleMouseUp = () => {
              isResizing = false;
              if (resizeData) {
                showToast('Mission resized');
                resizeData = null;
              }
              document.removeEventListener('mousemove', handleMouseMove);
              document.removeEventListener('mouseup', handleMouseUp);
            };
            
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
          });
        });
      }

      // Bind existing missions
      $$('.mission').forEach(bindMissionInteractions);

      // Timeline drop handling
      const timelineGrid = $('#timelineGrid');
      const dropGrid = timelineGrid?.querySelector('.grid');
      let currentDrag = null;

      function bindDraggables(scope = document) {
        $$('[draggable="true"]', scope).forEach(el => {
          el.addEventListener('dragstart', (e) => {
            const title = el.dataset.dragTitle || el.textContent.trim();
            const duration = parseInt(el.dataset.dragDuration || '2', 10);
            const subtasks = (() => {
              try { return JSON.parse(el.dataset.subtasks || '[]'); } catch { return []; }
            })();
            currentDrag = { title, duration, subtasks };
            e.dataTransfer.setData('text/plain', JSON.stringify(currentDrag));
            e.dataTransfer.effectAllowed = 'copy';
          });
        });
      }
      bindDraggables();

      if (timelineGrid) {
        timelineGrid.addEventListener('dragover', (e) => {
          e.preventDefault();
          e.dataTransfer.dropEffect = 'copy';
          timelineGrid.classList.add('ring-2', 'ring-[#AA1E23]/30');
        });
        timelineGrid.addEventListener('dragleave', () => {
          timelineGrid.classList.remove('ring-2', 'ring-[#AA1E23]/30');
        });

        // Subtask modal
        const subtaskModal = $('#subtaskModal');
        const subtaskTitle = $('#subtaskTitle');
        const subtaskList = $('#subtaskList');
        const subtaskAll = $('#subtaskAll');
        const subtaskConfirm = $('#subtaskConfirm');
        const subtaskClose = $('#subtaskClose');
        const subtaskCancel = $('#subtaskCancel');

        let pendingPlacement = null;

        function openSubtaskModal(payload) {
          subtaskTitle.textContent = payload.title;
          subtaskList.innerHTML = '';

          payload.subtasks.forEach((t, idx) => {
            const row = document.createElement('label');
            row.className = 'flex items-center gap-3 px-3 py-2 rounded border border-slate-200';
            row.innerHTML = `
              <input type="checkbox" class="h-4 w-4 rounded border-slate-300 text-[#AA1E23] focus:ring-[#AA1E23]/30" data-index="${idx}" checked>
              <span class="text-sm text-slate-800 font-sans">${t}</span>
            `;
            subtaskList.appendChild(row);
          });

          subtaskAll.checked = true;
          subtaskModal.classList.remove('hidden');
          if (window.lucide) lucide.createIcons();
        }

        function closeSubtaskModal() {
          subtaskModal.classList.add('hidden');
          pendingPlacement = null;
        }

        subtaskAll.addEventListener('change', () => {
          $$('input[type="checkbox"]', subtaskList).forEach(cb => cb.checked = subtaskAll.checked);
        });

        [subtaskClose, subtaskCancel].forEach(b => b.addEventListener('click', closeSubtaskModal));

        subtaskConfirm.addEventListener('click', () => {
          if (!pendingPlacement) return closeSubtaskModal();

          const selected = $$('input[type="checkbox"]', subtaskList).filter(cb => cb.checked).length;
          const total = $$('input[type="checkbox"]', subtaskList).length;

          addMissionToTimeline({
            title: pendingPlacement.title,
            colStart: pendingPlacement.colStart,
            colSpan: pendingPlacement.duration,
            color: 'indigo',
            subCount: total ? `${selected}/${total}` : ''
          });

          showToast('Mission added to timeline');
          closeSubtaskModal();
        });

        timelineGrid.addEventListener('drop', (e) => {
          e.preventDefault();
          timelineGrid.classList.remove('ring-2', 'ring-[#AA1E23]/30');

          const rect = timelineGrid.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const colWidth = rect.width / 12;
          let colStart = Math.max(1, Math.min(12, Math.floor(x / colWidth) + 1));

          let payload = currentDrag;
          if (!payload) {
            try { payload = JSON.parse(e.dataTransfer.getData('text/plain')); }
            catch { payload = null; }
          }
          if (!payload) return;

          let colSpan = Math.min(payload.duration || 2, 12 - colStart + 1);
          payload.duration = colSpan;

          pendingPlacement = {
            title: payload.title,
            duration: colSpan,
            colStart
          };

          openSubtaskModal(payload);
          currentDrag = null;
        });

        function addMissionToTimeline({ title, colStart, colSpan, color = 'indigo', subCount = '' }) {
          const row = document.createElement('div');
          row.className = `h-8 col-start-${colStart} col-span-${colSpan}`;
          row.style.gridColumn = `${colStart} / span ${colSpan}`;
          row.setAttribute('data-col-start', String(colStart));
          row.setAttribute('data-col-span', String(colSpan));

          const bar = document.createElement('div');
          bar.className = `group h-8 relative w-full min-w-0 rounded-lg bg-${color}-500/90 text-white text-sm inline-flex items-center pl-10 pr-10 shadow-sm overflow-hidden mission cursor-move`;
          if (color === 'crimson') bar.style.backgroundColor = '#AA1E23';

          bar.innerHTML = `
            <div class="resize-handle left absolute inset-y-0 left-0 w-7 flex items-center justify-center cursor-ew-resize">
              <div class="h-3 w-2 rounded bg-white/50 ring-1 ring-white/60 shadow-sm"></div>
            </div>
            <span class="truncate font-sans mission-title underline decoration-slate-400 underline-offset-2 hover:decoration-slate-500 cursor-pointer" title="${title}">${title}</span>
            ${subCount ? `<span class="ml-auto text-xs font-medium px-1.5 py-0.5 rounded bg-white/20 subtask-badge">${subCount}</span>` : ''}
            <div class="resize-handle right absolute inset-y-0 right-0 w-7 flex items-center justify-center cursor-ew-resize">
              <div class="h-3 w-2 rounded bg-white/50 ring-1 ring-white/60 shadow-sm"></div>
            </div>
          `;
          row.appendChild(bar);
          dropGrid.appendChild(row);
          bindMissionInteractions(bar);
          if (window.lucide) lucide.createIcons();
        }
      }

      // Mission modal with inline editing
      const missionModal = $('#missionModal');
      const missionTitleDisplay = $('#missionTitleDisplay');
      const missionTitleInput = $('#missionTitleInput');
      const missionDescriptionDisplay = $('#missionDescriptionDisplay');
      const missionDescription = $('#missionDescription');
      const missionSave = $('#missionSave');
      const missionCancel = $('#missionCancel');
      const missionClose = $('#missionClose');
      const missionDelete = $('#missionDelete');
      const hideInTimeline = $('#hideInTimeline');

      // Inline editing setup
      function setupInlineEdit(displayEl, inputEl) {
        displayEl?.addEventListener('click', () => {
          displayEl.classList.add('hidden');
          inputEl.classList.remove('hidden');
          inputEl.value = displayEl.textContent.trim();
          inputEl.focus();
          inputEl.select();
        });

        inputEl?.addEventListener('blur', () => {
          displayEl.textContent = inputEl.value || 'Click to edit';
          displayEl.classList.remove('hidden');
          inputEl.classList.add('hidden');
        });

        inputEl?.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            inputEl.blur();
          }
          if (e.key === 'Escape') {
            inputEl.blur();
          }
        });
      }

      setupInlineEdit(missionTitleDisplay, missionTitleInput);
      setupInlineEdit(missionDescriptionDisplay, missionDescription);

      // tags
      const categoryTag = $('#categoryTag');
      const categoryMenu = $('#categoryMenu');
      const categoryTagText = $('#categoryTagText');

      const statusTag = $('#statusTag');
      const statusMenu = $('#statusMenu');
      const statusTagText = $('#statusTagText');

      // tasks
      const missionTasks = $('#missionTasks');
      const addTask = $('#addTask');

      let editingMissionBar = null;

      function openMissionModalFromBar(bar) {
        editingMissionBar = bar;
        const title = $('.mission-title', bar)?.textContent?.trim() || '';
        missionTitleDisplay.textContent = title;
        missionTitleInput.value = title;
        
        const description = bar.dataset.description || 'This mission focuses on strengthening academic foundations and exploring advanced coursework opportunities. The goal is to build a solid base for college preparation while identifying areas of particular interest and aptitude.';
        missionDescriptionDisplay.textContent = description;
        missionDescription.value = description;

        // Load timing
        const container = bar.parentElement;
        const colStart = parseInt(container?.dataset.colStart || '1', 10);
        const colSpan = parseInt(container?.dataset.colSpan || '2', 10);
        $('#missionStartMonth').value = String(colStart);
        $('#missionEndMonth').value = String(Math.min(12, colStart + colSpan - 1));

        // Load tasks
        missionTasks.innerHTML = '';
        const badge = $('.subtask-badge', bar);
        let total = 0;
        if (badge && badge.textContent.includes('/')) {
          total = parseInt(badge.textContent.split('/')[1] || '0', 10);
        }
        const tasks = (bar.dataset.subtasks ? JSON.parse(bar.dataset.subtasks) : Array(total).fill(0).map((_, i) => `Complete milestone ${i + 1}`));
        tasks.forEach(t => addTaskRow(t));

        missionModal.classList.remove('hidden');
        if (window.lucide) lucide.createIcons();
      }

      function addTaskRow(text = 'Complete research phase', dueDate = '', description = '', attachments = []) {
        const row = document.createElement('div');
        row.className = 'border border-slate-200 rounded';
        
        const taskId = 'task-' + Math.random().toString(36).substr(2, 9);
        const expandId = 'expand-' + taskId;
        
        row.innerHTML = `
          <div class="flex items-center gap-2 px-3 py-2 hover:bg-slate-50 group">
            <i data-lucide="grip-vertical" class="w-4 h-4 text-slate-400"></i>
            <span class="flex-1 text-sm text-slate-800 cursor-pointer task-text" title="Click to edit">${text.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</span>
            <input type="text" class="hidden flex-1 text-sm px-2 py-1 border border-slate-200 rounded focus:ring-[#AA1E23]/30 focus:border-[#AA1E23]/40 task-input" value="${text.replace(/"/g, '&quot;')}">
            <span class="text-xs text-slate-500 due-date-display ${dueDate ? '' : 'hidden'}" title="Due date">${dueDate ? new Date(dueDate).toLocaleDateString() : ''}</span>
            <button class="expand-toggle p-1 rounded hover:bg-slate-200 text-slate-600" title="Show details" data-target="#${expandId}">
              <i data-lucide="chevron-down" class="w-4 h-4 transition-transform"></i>
            </button>
            <button class="remove-task opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-slate-200 text-slate-600 transition-opacity" title="Remove task">
              <i data-lucide="x" class="w-4 h-4"></i>
            </button>
          </div>
          <div id="${expandId}" class="hidden border-t border-slate-200 bg-slate-50">
            <div class="px-3 py-2 space-y-3">
              <div>
                <label class="block text-xs font-medium text-slate-600 mb-1 font-sans">Description</label>
                <span class="block w-full px-2 py-1 text-xs text-slate-700 border border-transparent rounded hover:border-slate-200 hover:bg-white cursor-text task-description" title="Click to edit">${description || 'Click to add task description'}</span>
                <textarea class="hidden w-full px-2 py-1 text-xs border border-slate-200 rounded focus:ring-[#AA1E23]/30 focus:border-[#AA1E23]/40 task-description-input" rows="2">${description}</textarea>
              </div>
              <div class="flex items-center gap-4">
                <div class="flex-1">
                  <label class="block text-xs font-medium text-slate-600 mb-1 font-sans">Due Date</label>
                  <input type="date" class="w-full px-2 py-1 text-xs border border-slate-200 rounded focus:ring-[#AA1E23]/30 focus:border-[#AA1E23]/40 task-due-date" value="${dueDate}">
                </div>
                <div class="flex-1">
                  <label class="block text-xs font-medium text-slate-600 mb-1 font-sans">Priority</label>
                  <select class="w-full px-2 py-1 text-xs border border-slate-200 rounded focus:ring-[#AA1E23]/30 focus:border-[#AA1E23]/40 task-priority">
                    <option value="low">Low</option>
                    <option value="medium" selected>Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
              </div>
              <div>
                <label class="block text-xs font-medium text-slate-600 mb-1 font-sans">Attachments</label>
                <div class="flex items-center gap-2">
                  <button class="inline-flex items-center gap-1 text-xs px-2 py-1 border border-slate-200 rounded hover:bg-white text-slate-600">
                    <i data-lucide="paperclip" class="w-3 h-3"></i>
                    Add file
                  </button>
                  <span class="text-xs text-slate-500">${attachments.length} files attached</span>
                </div>
              </div>
            </div>
          </div>
        `;
        
        missionTasks.appendChild(row);
        
        // Bind inline editing for task text
        const taskText = row.querySelector('.task-text');
        const taskInput = row.querySelector('.task-input');
        const taskDescription = row.querySelector('.task-description');
        const taskDescriptionInput = row.querySelector('.task-description-input');
        const expandToggle = row.querySelector('.expand-toggle');
        const expandSection = row.querySelector(`#${expandId}`);
        const removeBtn = row.querySelector('.remove-task');
        const dueDateInput = row.querySelector('.task-due-date');
        const dueDateDisplay = row.querySelector('.due-date-display');
        
        // Task text inline editing
        taskText.addEventListener('click', () => {
          taskText.classList.add('hidden');
          taskInput.classList.remove('hidden');
          taskInput.focus();
          taskInput.select();
        });
        
        taskInput.addEventListener('blur', () => {
          taskText.textContent = taskInput.value || 'New task';
          taskText.classList.remove('hidden');
          taskInput.classList.add('hidden');
        });
        
        taskInput.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            taskInput.blur();
          }
          if (e.key === 'Escape') {
            taskInput.value = taskText.textContent;
            taskInput.blur();
          }
        });
        
        // Task description inline editing
        taskDescription.addEventListener('click', () => {
          taskDescription.classList.add('hidden');
          taskDescriptionInput.classList.remove('hidden');
          taskDescriptionInput.focus();
        });
        
        taskDescriptionInput.addEventListener('blur', () => {
          taskDescription.textContent = taskDescriptionInput.value || 'Click to add task description';
          taskDescription.classList.remove('hidden');
          taskDescriptionInput.classList.add('hidden');
        });
        
        // Expand/collapse toggle
        expandToggle.addEventListener('click', () => {
          expandSection.classList.toggle('hidden');
          const chevron = expandToggle.querySelector('i');
          chevron.style.transform = expandSection.classList.contains('hidden') ? '' : 'rotate(180deg)';
        });
        
        // Remove task
        removeBtn.addEventListener('click', () => {
          row.remove();
        });
        
        // Due date handling
        dueDateInput.addEventListener('change', () => {
          if (dueDateInput.value) {
            dueDateDisplay.textContent = new Date(dueDateInput.value).toLocaleDateString();
            dueDateDisplay.classList.remove('hidden');
          } else {
            dueDateDisplay.classList.add('hidden');
          }
        });
        
        if (window.lucide) lucide.createIcons();
      }

      // Add task button
      addTask?.addEventListener('click', () => {
        addTaskRow();
      });

      // Tag dropdowns
      categoryTag?.addEventListener('click', (e) => {
        e.stopPropagation();
        categoryMenu.classList.toggle('hidden');
        statusMenu.classList.add('hidden');
      });

      statusTag?.addEventListener('click', (e) => {
        e.stopPropagation();
        statusMenu.classList.toggle('hidden');
        categoryMenu.classList.add('hidden');
      });

      // Category menu selections
      $$('button[data-value]', categoryMenu).forEach(btn => {
        btn.addEventListener('click', () => {
          categoryTagText.textContent = btn.dataset.value;
          const dot = btn.querySelector('span');
          const categoryDot = categoryTag.querySelector('span');
          if (dot && categoryDot) {
            categoryDot.className = dot.className;
          }
          categoryMenu.classList.add('hidden');
        });
      });

      // Status menu selections
      $$('button[data-value]', statusMenu).forEach(btn => {
        btn.addEventListener('click', () => {
          statusTagText.textContent = btn.dataset.value;
          const dot = btn.querySelector('span');
          const statusDot = statusTag.querySelector('span');
          if (dot && statusDot) {
            statusDot.className = dot.className;
          }
          statusMenu.classList.add('hidden');
        });
      });

      // Close dropdowns on outside click
      document.addEventListener('click', (e) => {
        if (!categoryTag.contains(e.target)) categoryMenu.classList.add('hidden');
        if (!statusTag.contains(e.target)) statusMenu.classList.add('hidden');
      });

      // Modal controls
      [missionClose, missionCancel].forEach(btn => {
        btn?.addEventListener('click', () => {
          missionModal.classList.add('hidden');
          editingMissionBar = null;
        });
      });

      missionSave?.addEventListener('click', () => {
        if (editingMissionBar) {
          const title = missionTitleDisplay.textContent.trim();
          const titleElement = editingMissionBar.querySelector('.mission-title');
          if (titleElement) {
            titleElement.textContent = title;
            titleElement.title = title;
          }

          // Save description as data attribute
          editingMissionBar.dataset.description = missionDescriptionDisplay.textContent.trim();

          // Update timeline position
          const container = editingMissionBar.parentElement;
          const startMonth = parseInt($('#missionStartMonth').value, 10);
          const endMonth = parseInt($('#missionEndMonth').value, 10);
          const colSpan = Math.max(1, endMonth - startMonth + 1);

          container.style.gridColumn = `${startMonth} / span ${colSpan}`;
          container.dataset.colStart = String(startMonth);
          container.dataset.colSpan = String(colSpan);

          showToast('Mission updated');
        }
        missionModal.classList.add('hidden');
        editingMissionBar = null;
      });

      missionDelete?.addEventListener('click', () => {
        if (editingMissionBar && confirm('Are you sure you want to delete this mission?')) {
          editingMissionBar.parentElement?.remove();
          missionModal.classList.add('hidden');
          editingMissionBar = null;
          showToast('Mission deleted');
        }
      });

      hideInTimeline?.addEventListener('click', () => {
        if (editingMissionBar) {
          editingMissionBar.parentElement.style.display = 'none';
          missionModal.classList.add('hidden');
          editingMissionBar = null;
          showToast('Mission hidden');
        }
      });

      // Grade navigation
      const grades = [
        '9th Grade',
        '10th Grade (current)',
        '11th Grade',
        '12th Grade'
      ];
      let currentGrade = 1;

      const gradeTitle = $('#gradeTitle');
      const gradePrev = $('#gradePrev');
      const gradeNext = $('#gradeNext');

      gradePrev?.addEventListener('click', () => {
        if (currentGrade > 0) {
          currentGrade--;
          gradeTitle.textContent = grades[currentGrade];
          showToast(`Switched to ${grades[currentGrade]}`);
        }
      });

      gradeNext?.addEventListener('click', () => {
        if (currentGrade < grades.length - 1) {
          currentGrade++;
          gradeTitle.textContent = grades[currentGrade];
          showToast(`Switched to ${grades[currentGrade]}`);
        }
      });

      // Export functionality
      const exportBtn = $('#exportBtn');
      exportBtn?.addEventListener('click', () => {
        showToast('Exporting timeline...');
      });

      // View switching
      const viewTimeline = $('#viewTimeline');
      const viewTasks = $('#viewTasks');

      viewTasks?.addEventListener('click', (e) => {
        e.preventDefault();
        showToast('Switching to task list view...');
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">

<div className="flex flex-col gap-1">
<nav className="flex items-center gap-2">
<a className="text-sm px-3 py-1.5 rounded border text-[#AA1E23] border-[#AA1E23]/30 bg-[#AA1E23]/5 font-sans inline-flex items-center" href="#" id="viewTimeline">
<i className="w-4 h-4 mr-1.5" data-lucide="calendar"></i>
            Timeline view
          </a>
<a className="text-sm px-3 py-1.5 rounded border border-slate-200 hover:border-slate-300 text-slate-600 font-sans inline-flex items-center" href="#" id="viewTasks">
<i className="w-4 h-4 mr-1.5" data-lucide="list-checks"></i>
            Task list
          </a>
</nav>
</div>

<div className="hidden sm:flex items-center gap-2">
<button className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded border border-slate-200 hover:border-slate-300 bg-white" id="exportBtn">
<i className="w-4 h-4 text-slate-600" data-lucide="download"></i>
<span className="text-slate-700 font-sans">Export</span>
</button>
</div>
</div>
</header>

<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

<div className="mb-6">
<div className="relative w-full h-10">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<h1 className="text-3xl tracking-tight text-slate-900 font-semibold pointer-events-auto" id="gradeTitle" style={{fontFamily: 'Bricolage Grotesque, Inter, ui-sans-serif'}}>10th Grade (current)</h1>
</div>

<div className="flex items-center justify-between h-10">
<button className="h-8 w-8 flex items-center justify-center rounded border border-slate-200 hover:bg-slate-50" id="gradePrev">
<i className="w-4 h-4 text-slate-700" data-lucide="chevron-left"></i>
</button>
<button className="h-8 w-8 flex items-center justify-center rounded border border-slate-200 hover:bg-slate-50" id="gradeNext">
<i className="w-4 h-4 text-slate-700" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6" id="mainGrid">

<section className="lg:col-span-7 xl:col-span-8" id="timelineSection">
<div className="bg-white rounded-lg border border-slate-200 shadow-sm h-full">

<div className="px-4 sm:px-6 pt-4">
<div className="grid grid-cols-12 text-sm text-slate-600">
<span className="text-center font-sans font-semibold">Sep</span>
<span className="text-center font-sans font-semibold">Oct</span>
<span className="text-center font-sans font-semibold">Nov</span>
<span className="text-center font-sans font-semibold">Dec</span>
<span className="relative text-center text-slate-900 font-sans font-semibold">
                Jan
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-0.5 w-6 rounded bg-[#AA1E23]"></span>
</span>
<span className="text-center font-sans font-semibold">Feb</span>
<span className="text-center font-sans font-semibold">Mar</span>
<span className="text-center font-sans font-semibold">Apr</span>
<span className="text-center font-sans font-semibold">May</span>
<span className="text-center font-sans font-semibold">Jun</span>
<span className="text-center font-sans font-semibold">Jul</span>
<span className="text-center font-sans font-semibold">Aug</span>
</div>
</div>

<div className="relative mt-5 p-4 sm:p-8" id="timeline">

<div className="relative rounded-lg border border-slate-200 bg-white" id="timelineGrid" style={{backgroundImage: 'linear-gradient(to right, rgba(15,23,42,0.06) 1px, transparent 1px)', backgroundSize: 'calc(100% / 12) 100%'}}>

<div className="grid grid-cols-12 gap-y-6 px-4 sm:px-6 py-8">

<div className="h-8 col-start-1 col-span-10" data-col-span="10" data-col-start="1">
<div className="group h-8 relative w-full min-w-0 rounded-lg bg-indigo-500/90 text-white text-sm inline-flex items-center pl-10 pr-10 shadow-sm overflow-hidden mission cursor-move">

<div className="resize-handle left absolute inset-y-0 left-0 w-7 flex items-center justify-center cursor-ew-resize">
<div className="h-3 w-2 rounded bg-white/50 ring-1 ring-white/60 shadow-sm"></div>
</div>
<span className="truncate font-sans mission-title underline decoration-slate-400 underline-offset-2 hover:decoration-slate-500 cursor-pointer" title="Grade 10 school work">Grade 10 school work</span>
<span className="ml-auto text-xs font-medium px-1.5 py-0.5 rounded bg-white/20 subtask-badge">3/8</span>

<div className="resize-handle right absolute inset-y-0 right-0 w-7 flex items-center justify-center cursor-ew-resize">
<div className="h-3 w-2 rounded bg-white/50 ring-1 ring-white/60 shadow-sm"></div>
</div>
</div>
</div>

<div className="h-8 col-start-3 col-span-2" data-col-span="2" data-col-start="3">
<div className="group h-8 relative w-full min-w-0 rounded-lg bg-fuchsia-500/90 text-white text-xs inline-flex items-center pl-10 pr-10 shadow-sm overflow-hidden mission cursor-move">
<div className="resize-handle left absolute inset-y-0 left-0 w-7 flex items-center justify-center cursor-ew-resize">
<div className="h-3 w-2 rounded bg-white/50 ring-1 ring-white/60 shadow-sm"></div>
</div>
<span className="truncate font-sans mission-title underline decoration-slate-400 underline-offset-2 hover:decoration-slate-500 cursor-pointer" title="PSAT test">PSAT test</span>
<span className="ml-auto text-[11px] font-medium px-1.5 py-0.5 rounded bg-white/20 subtask-badge">2/4</span>
<div className="resize-handle right absolute inset-y-0 right-0 w-7 flex items-center justify-center cursor-ew-resize">
<div className="h-3 w-2 rounded bg-white/50 ring-1 ring-white/60 shadow-sm"></div>
</div>
</div>
</div>
<div className="h-8 col-start-5 col-span-2" data-col-span="2" data-col-start="5">
<div className="group h-8 relative w-full min-w-0 rounded-lg bg-violet-500/90 text-white text-xs inline-flex items-center pl-10 pr-10 shadow-sm overflow-hidden mission cursor-move">
<div className="resize-handle left absolute inset-y-0 left-0 w-7 flex items-center justify-center cursor-ew-resize">
<div className="h-3 w-2 rounded bg-white/50 ring-1 ring-white/60 shadow-sm"></div>
</div>
<span className="truncate font-sans mission-title underline decoration-slate-400 underline-offset-2 hover:decoration-slate-500 cursor-pointer" title="TOEFL official test">TOEFL official test</span>

<div className="resize-handle right absolute inset-y-0 right-0 w-7 flex items-center justify-center cursor-ew-resize">
<div className="h-3 w-2 rounded bg-white/50 ring-1 ring-white/60 shadow-sm"></div>
</div>
</div>
</div>

<div className="h-8 col-start-1 col-span-7" data-col-span="7" data-col-start="1">
<div className="group h-8 relative w-full min-w-0 rounded-lg bg-emerald-500/90 text-white text-sm inline-flex items-center pl-10 pr-10 shadow-sm overflow-hidden mission cursor-move">
<div className="resize-handle left absolute inset-y-0 left-0 w-7 flex items-center justify-center cursor-ew-resize">
<div className="h-3 w-2 rounded bg-white/50 ring-1 ring-white/60 shadow-sm"></div>
</div>
<span className="truncate font-sans mission-title underline decoration-slate-400 underline-offset-2 hover:decoration-slate-500 cursor-pointer" title="Basketball club">Basketball club</span>
<span className="ml-auto text-xs font-medium px-1.5 py-0.5 rounded bg-white/20 subtask-badge">5/12</span>
<div className="resize-handle right absolute inset-y-0 right-0 w-7 flex items-center justify-center cursor-ew-resize">
<div className="h-3 w-2 rounded bg-white/50 ring-1 ring-white/60 shadow-sm"></div>
</div>
</div>
</div>
<div className="col-start-1 col-span-9 h-8" data-col-span="9" data-col-start="1">
<div className="group h-8 relative w-full min-w-0 rounded-lg bg-teal-500/90 text-white text-sm inline-flex items-center pl-10 pr-10 shadow-sm overflow-hidden mission cursor-move">
<div className="resize-handle left absolute inset-y-0 left-0 w-7 flex items-center justify-center cursor-ew-resize">
<div className="h-3 w-2 rounded bg-white/50 ring-1 ring-white/60 shadow-sm"></div>
</div>
<span className="truncate font-sans mission-title underline decoration-slate-400 underline-offset-2 hover:decoration-slate-500 cursor-pointer" title="School science club">School science club</span>
<span className="ml-auto text-xs font-medium px-1.5 py-0.5 rounded bg-white/20 subtask-badge">3/6</span>
<div className="resize-handle right absolute inset-y-0 right-0 w-7 flex items-center justify-center cursor-ew-resize">
<div className="h-3 w-2 rounded bg-white/50 ring-1 ring-white/60 shadow-sm"></div>
</div>
</div>
</div>
<div className="col-start-5 col-span-4 h-8" data-col-span="4" data-col-start="5">
<div className="group h-8 relative w-full min-w-0 rounded-lg bg-amber-500/90 text-white text-sm inline-flex items-center pl-10 pr-10 shadow-sm overflow-hidden mission cursor-move">
<div className="resize-handle left absolute inset-y-0 left-0 w-7 flex items-center justify-center cursor-ew-resize">
<div className="h-3 w-2 rounded bg-white/50 ring-1 ring-white/60 shadow-sm"></div>
</div>
<span className="truncate font-sans mission-title underline decoration-slate-400 underline-offset-2 hover:decoration-slate-500 cursor-pointer" title="Economics Olympiad">Economics Olympiad</span>

<div className="resize-handle right absolute inset-y-0 right-0 w-7 flex items-center justify-center cursor-ew-resize">
<div className="h-3 w-2 rounded bg-white/50 ring-1 ring-white/60 shadow-sm"></div>
</div>
</div>
</div>
<div className="col-start-7 col-span-3 h-8" data-col-span="3" data-col-start="7">
<div className="group h-8 relative w-full min-w-0 rounded-lg bg-rose-500/90 text-white text-sm inline-flex items-center pl-10 pr-10 shadow-sm overflow-hidden mission cursor-move">
<div className="resize-handle left absolute inset-y-0 left-0 w-7 flex items-center justify-center cursor-ew-resize">
<div className="h-3 w-2 rounded bg-white/50 ring-1 ring-white/60 shadow-sm"></div>
</div>
<span className="truncate font-sans mission-title underline decoration-slate-400 underline-offset-2 hover:decoration-slate-500 cursor-pointer" title="Research: Mobile app &amp; Depression">Research: Mobile app &amp; Depression</span>
<span className="ml-auto text-xs font-medium px-1.5 py-0.5 rounded bg-white/20 subtask-badge">1/5</span>
<div className="resize-handle right absolute inset-y-0 right-0 w-7 flex items-center justify-center cursor-ew-resize">
<div className="h-3 w-2 rounded bg-white/50 ring-1 ring-white/60 shadow-sm"></div>
</div>
</div>
</div>
<div className="col-start-10 col-span-2 h-8" data-col-span="2" data-col-start="10">
<div className="group h-8 relative w-full min-w-0 rounded-lg bg-orange-500/90 text-white text-sm inline-flex items-center pl-10 pr-10 shadow-sm overflow-hidden mission cursor-move">
<div className="resize-handle left absolute inset-y-0 left-0 w-7 flex items-center justify-center cursor-ew-resize">
<div className="h-3 w-2 rounded bg-white/50 ring-1 ring-white/60 shadow-sm"></div>
</div>
<span className="truncate font-sans mission-title underline decoration-slate-400 underline-offset-2 hover:decoration-slate-500 cursor-pointer" title="RSI">RSI</span>
<span className="ml-auto text-xs font-medium px-1.5 py-0.5 rounded bg-white/20 subtask-badge">0/1</span>
<div className="resize-handle right absolute inset-y-0 right-0 w-7 flex items-center justify-center cursor-ew-resize">
<div className="h-3 w-2 rounded bg-white/50 ring-1 ring-white/60 shadow-sm"></div>
</div>
</div>
</div>

<div className="col-span-12 pt-6">
<div className="inline-flex items-center gap-2">
<div className="rounded text-xs px-2.5 py-1 bg-slate-900 text-white shadow/50 shadow-sm font-sans">
                      Drag to timeline to add this mission
                    </div>
<div className="select-none cursor-grab active:cursor-grabbing inline-flex items-center text-sm rounded border border-dashed border-[#AA1E23] bg-[#AA1E23]/5 text-[#AA1E23] px-4 py-2 font-sans" data-drag-duration="3" data-drag-title="Plan 10th Grade Courses" data-subtasks='["Define course goals","Meet counselor","Finalize selections"]' draggable="true" id="draggableMission">
<i className="w-4 h-4 mr-2" data-lucide="move"></i>
                      Plan 10th Grade Courses
                    </div>
</div>
</div>

<div className="h-8 col-start-8 col-span-4" data-col-span="4" data-col-start="8">
<div className="group h-8 relative w-full min-w-0 rounded-lg bg-[#AA1E23]/90 text-white text-sm inline-flex items-center pl-10 pr-10 shadow-sm overflow-hidden mission cursor-move">
<div className="resize-handle left absolute inset-y-0 left-0 w-7 flex items-center justify-center cursor-ew-resize">
<div className="h-3 w-2 rounded bg-white/50 ring-1 ring-white/60 shadow-sm"></div>
</div>
<span className="truncate font-sans mission-title underline decoration-slate-400 underline-offset-2 hover:decoration-slate-500 cursor-pointer" title="Supplement core academics with external courses">Supplement core academics with external courses</span>
<span className="ml-auto text-xs font-medium px-1.5 py-0.5 rounded bg-white/20 subtask-badge">2/7</span>
<div className="resize-handle right absolute inset-y-0 right-0 w-7 flex items-center justify-center cursor-ew-resize">
<div className="h-3 w-2 rounded bg-white/50 ring-1 ring-white/60 shadow-sm"></div>
</div>
</div>
</div>
</div>

<div className="hidden absolute bottom-16 right-4 w-64 bg-white border border-slate-200 rounded shadow-lg p-2" id="quickAddMenu">
<button className="w-full flex items-center gap-3 px-3 py-2 rounded hover:bg-slate-50 text-sm text-slate-800" id="qaFromLibrary">
<i className="w-4 h-4 text-slate-600" data-lucide="library"></i>
<span className="font-sans">Add from mission library</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded hover:bg-slate-50 text-sm text-slate-800" id="qaFromTemplate">
<i className="w-4 h-4 text-slate-600" data-lucide="file-plus"></i>
<span className="font-sans">Add from template</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded hover:bg-slate-50 text-sm text-slate-800" id="qaNewMission">
<i className="w-4 h-4 text-slate-600" data-lucide="plus-square"></i>
<span className="font-sans">Add a new mission</span>
</button>
</div>

<button className="group absolute bottom-4 right-4 h-12 w-12 rounded-full shadow-sm shadow-slate-300 border border-slate-200 bg-[#AA1E23] text-white hover:bg-[#90191D] flex items-center justify-center" id="quickAdd">
<i className="w-5 h-5" data-lucide="plus"></i>
<span className="sr-only font-sans">Add</span>
</button>
</div>
</div>
</div>
</section>

<aside className="lg:col-span-5 xl:col-span-4" id="sidebar">
<div className="bg-white rounded border border-slate-200 shadow-sm p-4 sm:p-5 h-full flex flex-col" id="libraryCard">
<div className="flex items-center justify-between mb-3">
<h2 className="text-lg tracking-tight font-semibold text-slate-900 font-sans">Mission Library</h2>
<button className="p-2 rounded border border-slate-200 hover:bg-slate-50" id="toggleLibrary" title="Collapse library">
<i className="w-4 h-4 text-slate-600" data-lucide="panel-right-close"></i>
</button>
</div>

<div className="relative mb-4" id="librarySearch">
<i className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="search"></i>
<input className="w-full pl-9 pr-10 py-2 rounded border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#AA1E23]/30 focus:border-[#AA1E23]/40 text-sm placeholder:text-slate-400" id="searchInput" placeholder="Search missions..." type="text"/>
<button className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-slate-100" id="filterBtn">
<i className="w-4 h-4 text-slate-500" data-lucide="filter"></i>
</button>

<div className="hidden absolute top-full right-0 mt-1 w-48 bg-white border border-slate-200 rounded shadow-lg z-10" id="filterMenu">
<div className="p-2">
<div className="text-xs font-medium text-slate-600 mb-2 font-sans">Filter by category:</div>
<label className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-slate-50 text-sm">
<input checked="" className="filter-checkbox h-4 w-4 rounded border-slate-300 text-[#AA1E23] focus:ring-[#AA1E23]/30" type="checkbox" value="all"/>
<span className="font-sans">All</span>
</label>
<label className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-slate-50 text-sm">
<input className="filter-checkbox h-4 w-4 rounded border-slate-300 text-[#AA1E23] focus:ring-[#AA1E23]/30" type="checkbox" value="academics"/>
<span className="font-sans">Academics</span>
</label>
<label className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-slate-50 text-sm">
<input className="filter-checkbox h-4 w-4 rounded border-slate-300 text-[#AA1E23] focus:ring-[#AA1E23]/30" type="checkbox" value="testing"/>
<span className="font-sans">Testing</span>
</label>
<label className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-slate-50 text-sm">
<input className="filter-checkbox h-4 w-4 rounded border-slate-300 text-[#AA1E23] focus:ring-[#AA1E23]/30" type="checkbox" value="activities"/>
<span className="font-sans">Activities</span>
</label>
<label className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-slate-50 text-sm">
<input className="filter-checkbox h-4 w-4 rounded border-slate-300 text-[#AA1E23] focus:ring-[#AA1E23]/30" type="checkbox" value="honors"/>
<span className="font-sans">Honors</span>
</label>
<label className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-slate-50 text-sm">
<input className="filter-checkbox h-4 w-4 rounded border-slate-300 text-[#AA1E23] focus:ring-[#AA1E23]/30" type="checkbox" value="personal-development"/>
<span className="font-sans">Personal Development</span>
</label>
<label className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-slate-50 text-sm">
<input className="filter-checkbox h-4 w-4 rounded border-slate-300 text-[#AA1E23] focus:ring-[#AA1E23]/30" type="checkbox" value="majors-careers"/>
<span className="font-sans">Majors &amp; Careers</span>
</label>
</div>
</div>
</div>

<div className="flex-1" id="librarySections">
<div className="h-full overflow-y-auto p-2 space-y-2 max-h-[70vh]">

<div className="bg-slate-50 rounded border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-sm transition-all library-item" data-category="academics">
<div className="flex items-center justify-between px-3 py-3">
<div className="flex items-center gap-2 flex-1">
<i className="w-4 h-4 text-slate-400" data-lucide="grip-vertical"></i>
<div className="text-sm text-slate-800 text-left cursor-grab active:cursor-grabbing font-sans" data-drag-duration="3" data-drag-title="Course selection in school" data-subtasks='["List offered courses","Meet counselor","Finalize selections"]' draggable="true" style={{WebkitLineClamp: '2', display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden'}} title="Course selection in school">
                      Course selection in school
                    </div>
</div>
<button className="shrink-0 p-1.5 rounded text-slate-600 hover:bg-slate-50" data-expand-trigger="#subs-course-selection">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</button>
</div>
<div className="hidden mx-3 mb-3 rounded border border-slate-200 overflow-hidden" id="subs-course-selection">
<ul className="divide-y divide-slate-200 list-disc pl-5">
<li className="px-3 py-2 text-xs text-slate-700 font-sans">List offered courses</li>
<li className="px-3 py-2 text-xs text-slate-700 font-sans">Meet counselor</li>
<li className="px-3 py-2 text-xs text-slate-700 font-sans">Finalize selections</li>
</ul>
</div>
</div>

<div className="bg-slate-50 rounded border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-sm transition-all library-item" data-category="academics">
<div className="flex items-center justify-between px-3 py-3">
<div className="flex items-center gap-2 flex-1">
<i className="w-4 h-4 text-slate-400" data-lucide="grip-vertical"></i>
<div className="text-sm text-slate-800 text-left cursor-grab active:cursor-grabbing font-sans" data-drag-duration="3" data-drag-title="Supplement core academics with external courses" data-subtasks='["Reflect on Academic Strengths and Gaps","Identify Areas for Supplementation","Research Appropriate External Course Options","Confirm Institutional Policies","Evaluate Course Rigor and Credibility","Plan Timeline for Enrollment","Prepare for Course Enrollment","Register for the Course","Set Academic Goals for External Coursework","Track Progress and Performance","Document Completion and Outcomes","Strategically Integrate Into Application Materials"]' draggable="true" style={{WebkitLineClamp: '2', display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden'}} title="Supplement core academics with external courses">
                      Supplement core academics with external courses
                    </div>
</div>
<button className="shrink-0 p-1.5 rounded text-slate-600 hover:bg-slate-50" data-expand-trigger="#subs-external-courses">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</button>
</div>
<div className="hidden mx-3 mb-3 rounded border border-slate-200 overflow-hidden" id="subs-external-courses">
<ul className="divide-y divide-slate-200 list-disc pl-5">
<li className="px-3 py-2 text-xs text-slate-700 font-sans">Reflect on Academic Strengths and Gaps</li>
<li className="px-3 py-2 text-xs text-slate-700 font-sans">Identify Areas for Supplementation</li>
<li className="px-3 py-2 text-xs text-slate-700 font-sans">Research Appropriate External Course Options</li>
<li className="px-3 py-2 text-xs text-slate-700 font-sans">Confirm Institutional Policies</li>
<li className="px-3 py-2 text-xs text-slate-700 font-sans">Evaluate Course Rigor and Credibility</li>
<li className="px-3 py-2 text-xs text-slate-700 font-sans">Plan Timeline for Enrollment</li>
<li className="px-3 py-2 text-xs text-slate-700 font-sans">Prepare for Course Enrollment</li>
<li className="px-3 py-2 text-xs text-slate-700 font-sans">Register for the Course</li>
<li className="px-3 py-2 text-xs text-slate-700 font-sans">Set Academic Goals for External Coursework</li>
<li className="px-3 py-2 text-xs text-slate-700 font-sans">Track Progress and Performance</li>
<li className="px-3 py-2 text-xs text-slate-700 font-sans">Document Completion and Outcomes</li>
<li className="px-3 py-2 text-xs text-slate-700 font-sans">Strategically Integrate Into Application Materials</li>
</ul>
</div>
</div>
<div className="bg-slate-50 rounded border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-sm transition-all library-item" data-category="majors-careers">
<div className="flex items-center justify-between px-3 py-3">
<div className="flex items-center gap-2 flex-1">
<i className="w-4 h-4 text-slate-400" data-lucide="grip-vertical"></i>
<div className="text-sm text-slate-800 text-left cursor-grab active:cursor-grabbing font-sans" data-drag-duration="3" data-drag-title="Explore the Role of a Creative Portfolio for Your Major" data-subtasks='["Identify target programs","Review portfolio guidelines","Collect inspiration"]' draggable="true" style={{WebkitLineClamp: '2', display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden'}} title="Explore the Role of a Creative Portfolio for Your Major">
                      Explore the Role of a Creative Portfolio for Your Major
                    </div>
</div>
<button className="shrink-0 p-1.5 rounded text-slate-600 hover:bg-slate-50" data-expand-trigger="#subs-creative-role">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</button>
</div>
<div className="hidden mx-3 mb-3 rounded border border-slate-200 overflow-hidden" id="subs-creative-role">
<ul className="divide-y divide-slate-200 list-disc pl-5">
<li className="px-3 py-2 text-xs text-slate-700 font-sans">Identify target programs</li>
<li className="px-3 py-2 text-xs text-slate-700 font-sans">Review portfolio guidelines</li>
<li className="px-3 py-2 text-xs text-slate-700 font-sans">Collect inspiration</li>
</ul>
</div>
</div>
<div className="bg-slate-50 rounded border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-sm transition-all library-item" data-category="majors-careers">
<div className="flex items-center justify-between px-3 py-3">
<div className="flex items-center gap-2 flex-1">
<i className="w-4 h-4 text-slate-400" data-lucide="grip-vertical"></i>
<div className="text-sm text-slate-800 text-left cursor-grab active:cursor-grabbing font-sans" data-drag-duration="3" data-drag-title="Plan Your Creative Portfolio" data-subtasks='["Define concept and scope","Map milestones","Gather tools/resources"]' draggable="true" style={{WebkitLineClamp: '2', display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden'}} title="Plan Your Creative Portfolio">
                      Plan Your Creative Portfolio
                    </div>
</div>
<button className="shrink-0 p-1.5 rounded text-slate-600 hover:bg-slate-50" data-expand-trigger="#subs-creative-plan">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</button>
</div>
<div className="hidden mx-3 mb-3 rounded border border-slate-200 overflow-hidden" id="subs-creative-plan">
<ul className="divide-y divide-slate-200 list-disc pl-5">
<li className="px-3 py-2 text-xs text-slate-700 font-sans">Define concept and scope</li>
<li className="px-3 py-2 text-xs text-slate-700 font-sans">Map milestones</li>
<li className="px-3 py-2 text-xs text-slate-700 font-sans">Gather tools/resources</li>
</ul>
</div>
</div>
<div className="bg-slate-50 rounded border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-sm transition-all library-item" data-category="majors-careers">
<div className="flex items-center justify-between px-3 py-3">
<div className="flex items-center gap-2 flex-1">
<i className="w-4 h-4 text-slate-400" data-lucide="grip-vertical"></i>
<div className="text-sm text-slate-800 text-left cursor-grab active:cursor-grabbing font-sans" data-drag-duration="3" data-drag-title="Finalize Your Creative Portfolio" data-subtasks='["Curate final works","Peer review","Polish and export"]' draggable="true" style={{WebkitLineClamp: '2', display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden'}} title="Finalize Your Creative Portfolio">
                      Finalize Your Creative Portfolio
                    </div>
</div>
</div>
</div>
<div className="bg-slate-50 rounded border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-sm transition-all library-item" data-category="testing">
<div className="flex items-center justify-between px-3 py-3">
<div className="flex items-center gap-2 flex-1">
<i className="w-4 h-4 text-slate-400" data-lucide="grip-vertical"></i>
<div className="text-sm text-slate-800 text-left cursor-grab active:cursor-grabbing font-sans" data-drag-duration="3" data-drag-title="Explore Your Standardized Testing Options (SAT or ACT)" data-subtasks='["Compare SAT vs ACT","Check policies of target schools","Pick tentative date"]' draggable="true" style={{WebkitLineClamp: '2', display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden'}} title="Explore Your Standardized Testing Options (SAT or ACT)">
                      Explore Your Standardized Testing Options (SAT or ACT)
                    </div>
</div>
</div>
</div>
<div className="bg-slate-50 rounded border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-sm transition-all library-item" data-category="testing">
<div className="flex items-center justify-between px-3 py-3">
<div className="flex items-center gap-2 flex-1">
<i className="w-4 h-4 text-slate-400" data-lucide="grip-vertical"></i>
<div className="text-sm text-slate-800 text-left cursor-grab active:cursor-grabbing font-sans" data-drag-duration="3" data-drag-title="Create Your SAT/ACT Testing Timeline and Prep Plan" data-subtasks='["Choose prep resources","Set weekly schedule","Arrange practice tests"]' draggable="true" style={{WebkitLineClamp: '2', display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden'}} title="Create Your SAT/ACT Testing Timeline and Prep Plan">
                      Create Your SAT/ACT Testing Timeline and Prep Plan
                    </div>
</div>
</div>
</div>
<div className="bg-slate-50 rounded border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-sm transition-all library-item" data-category="testing">
<div className="flex items-center justify-between px-3 py-3">
<div className="flex items-center gap-2 flex-1">
<i className="w-4 h-4 text-slate-400" data-lucide="grip-vertical"></i>
<div className="text-sm text-slate-800 text-left cursor-grab active:cursor-grabbing font-sans" data-drag-duration="3" data-drag-title="Plan for English Language Proficiency Testing" data-subtasks='["Pick exam (TOEFL/IELTS)","Book test date","Set prep plan"]' draggable="true" style={{WebkitLineClamp: '2', display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden'}} title="Plan for English Language Proficiency Testing">
                      Plan for English Language Proficiency Testing
                    </div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden bg-white rounded border border-slate-200 shadow-sm p-4 flex items-center justify-center" id="libraryCollapsed">
<button className="p-2 rounded border border-slate-200 hover:bg-slate-50" id="expandLibrary" title="Expand library">
<i className="w-4 h-4 text-slate-600" data-lucide="panel-right-open"></i>
</button>
</div>
</aside>
</div>
</main>

<div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 hidden" id="toast">
<div className="flex items-center gap-2 bg-slate-900 text-white text-sm px-4 py-2 rounded shadow-lg">
<i className="w-4 h-4 text-emerald-400" data-lucide="check-circle"></i>
<span className="font-sans" id="toastMsg">Added to timeline</span>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="subtaskModal">
<div className="absolute inset-0 bg-slate-900/50"></div>
<div className="relative z-10 mx-auto mt-24 w-full max-w-lg px-4">
<div className="bg-white rounded border border-slate-200 shadow-xl overflow-hidden">
<div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between">
<h3 className="text-base tracking-tight font-semibold text-slate-900 font-sans">Select tasks to include</h3>
<button className="p-2 rounded hover:bg-slate-50" id="subtaskClose">
<i className="w-4 h-4 text-slate-600" data-lucide="x"></i>
</button>
</div>
<div className="px-5 py-4">
<p className="text-sm text-slate-600 mb-3 font-sans">
<span className="font-medium text-slate-900" id="subtaskTitle"></span>
</p>
<div className="max-h-64 overflow-y-auto space-y-2" id="subtaskList"></div>
</div>
<div className="px-5 py-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
<label className="inline-flex items-center gap-2 text-sm text-slate-700 font-sans">
<input className="h-4 w-4 rounded border-slate-300 text-[#AA1E23] focus:ring-[#AA1E23]/30" id="subtaskAll" type="checkbox"/>
            Select All
          </label>
<div className="flex items-center gap-2">
<button className="px-3 py-2 rounded border border-slate-200 hover:bg-slate-50 text-sm text-slate-700 font-sans" id="subtaskCancel">Cancel</button>
<button className="px-3 py-2 rounded bg-[#AA1E23] hover:bg-[#90191D] text-white text-sm font-medium font-sans" id="subtaskConfirm">Add to timeline</button>
</div>
</div>
</div>
</div>
</div>

<div aria-labelledby="missionModalTitle" aria-modal="true" className="fixed inset-0 z-50 hidden" id="missionModal" role="dialog">
<div className="absolute inset-0 bg-slate-900/50"></div>
<div className="relative z-10 mx-auto mt-8 w-full max-w-2xl px-4 h-full flex flex-col">
<div className="bg-white rounded border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[calc(100vh-4rem)]">

<div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between bg-white">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-[#AA1E23]" data-lucide="flag"></i>
<h3 className="text-base tracking-tight font-semibold text-slate-900 font-sans" id="missionModalTitle">Edit Mission</h3>
</div>
<button aria-label="Close" className="p-2 rounded hover:bg-slate-50" id="missionClose">
<i className="w-4 h-4 text-slate-600" data-lucide="x"></i>
</button>
</div>

<div className="flex-1 overflow-y-auto">
<div className="px-5 py-5 space-y-5">

<div className="group">
<label className="block text-xs font-medium text-slate-600 mb-1.5 font-sans">Title</label>
<div className="relative">
<span className="block w-full px-3 py-2 text-sm border border-transparent rounded hover:border-slate-200 hover:bg-slate-50 cursor-text font-sans min-h-[2.25rem] leading-6" id="missionTitleDisplay">Grade 10 school work</span>
<input className="hidden w-full rounded border border-[#AA1E23]/40 focus:ring-2 focus:ring-[#AA1E23]/30 focus:border-[#AA1E23]/40 px-3 py-2 text-sm font-sans" id="missionTitleInput" placeholder="e.g., Economics Olympiad" type="text"/>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="relative">
<label className="block text-xs font-medium text-slate-600 mb-1.5 font-sans">Category</label>
<button className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded text-xs border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 font-sans" id="categoryTag" type="button">
<span className="h-2 w-2 rounded bg-indigo-500"></span>
<span id="categoryTagText">Academics</span>
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="chevron-down"></i>
</button>

<div className="hidden absolute z-10 mt-2 w-44 bg-white border border-slate-200 rounded shadow-md overflow-hidden" id="categoryMenu">
<button className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-slate-50" data-value="Academics">
<span className="h-2 w-2 rounded bg-indigo-500"></span>
                    Academics
                  </button>
<button className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-slate-50" data-value="Testing">
<span className="h-2 w-2 rounded bg-amber-500"></span>
                    Testing
                  </button>
<button className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-slate-50" data-value="Activities">
<span className="h-2 w-2 rounded bg-emerald-500"></span>
                    Activities
                  </button>
<button className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-slate-50" data-value="Honors">
<span className="h-2 w-2 rounded bg-purple-500"></span>
                    Honors
                  </button>
<button className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-slate-50" data-value="Personal Development">
<span className="h-2 w-2 rounded bg-teal-500"></span>
                    Personal Development
                  </button>
<button className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-slate-50" data-value="Majors &amp; Careers">
<span className="h-2 w-2 rounded bg-rose-500"></span>
                    Majors &amp; Careers
                  </button>
</div>
</div>
<div className="relative">
<label className="block text-xs font-medium text-slate-600 mb-1.5 font-sans">Status</label>
<button className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded text-xs border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 font-sans" id="statusTag" type="button">
<span className="h-2 w-2 rounded bg-slate-400"></span>
<span id="statusTagText">Planned</span>
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute z-10 mt-2 w-44 bg-white border border-slate-200 rounded shadow-md overflow-hidden" id="statusMenu">
<button className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-slate-50" data-value="Planned">
<span className="h-2 w-2 rounded bg-slate-400"></span>
                    Planned
                  </button>
<button className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-slate-50" data-value="In Progress">
<span className="h-2 w-2 rounded bg-sky-500"></span>
                    In Progress
                  </button>
<button className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-slate-50" data-value="Completed">
<span className="h-2 w-2 rounded bg-emerald-500"></span>
                    Completed
                  </button>
<button className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-slate-50" data-value="Postponed">
<span className="h-2 w-2 rounded bg-amber-500"></span>
                    Postponed
                  </button>
<button className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-slate-50" data-value="Expired">
<span className="h-2 w-2 rounded bg-red-500"></span>
                    Expired
                  </button>
</div>
</div>
</div>

<div>
<label className="block text-xs font-medium text-slate-600 mb-1.5 font-sans">Timeline</label>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs text-slate-500 mb-1 font-sans">Start</label>
<select className="w-full rounded border border-slate-200 px-3 py-2 text-sm focus:ring-2 focus:ring-[#AA1E23]/30 focus:border-[#AA1E23]/40 font-sans" id="missionStartMonth">
<option value="1">Sep</option>
<option value="2">Oct</option>
<option value="3">Nov</option>
<option value="4">Dec</option>
<option value="5">Jan</option>
<option value="6">Feb</option>
<option value="7">Mar</option>
<option value="8">Apr</option>
<option value="9">May</option>
<option value="10">Jun</option>
<option value="11">Jul</option>
<option value="12">Aug</option>
</select>
</div>
<div>
<label className="block text-xs text-slate-500 mb-1 font-sans">End</label>
<select className="w-full rounded border border-slate-200 px-3 py-2 text-sm focus:ring-2 focus:ring-[#AA1E23]/30 focus:border-[#AA1E23]/40 font-sans" id="missionEndMonth">
<option value="1">Sep</option>
<option value="2">Oct</option>
<option value="3">Nov</option>
<option value="4">Dec</option>
<option value="5">Jan</option>
<option value="6">Feb</option>
<option value="7">Mar</option>
<option value="8">Apr</option>
<option value="9">May</option>
<option value="10">Jun</option>
<option value="11">Jul</option>
<option value="12">Aug</option>
</select>
</div>
</div>
</div>

<div className="group">
<label className="block text-xs font-medium text-slate-600 mb-1.5 font-sans">Description</label>
<div className="relative">
<div className="block w-full px-3 py-2 text-sm border border-transparent rounded hover:border-slate-200 hover:bg-slate-50 cursor-text font-sans min-h-[4rem] leading-6" id="missionDescriptionDisplay">This mission focuses on strengthening academic foundations and exploring advanced coursework opportunities. The goal is to build a solid base for college preparation while identifying areas of particular interest and aptitude.</div>
<textarea className="hidden w-full rounded border border-[#AA1E23]/40 px-3 py-2 text-sm focus:ring-2 focus:ring-[#AA1E23]/30 focus:border-[#AA1E23]/40 font-sans" id="missionDescription" placeholder="This mission focuses on strengthening academic foundations and exploring advanced coursework opportunities. The goal is to build a solid base for college preparation while identifying areas of particular interest and aptitude." rows="4"></textarea>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-2">
<label className="block text-xs font-medium text-slate-600 font-sans">Tasks</label>
<button className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded border border-slate-200 hover:bg-slate-50" id="addTask">
<i className="w-3.5 h-3.5 text-slate-600" data-lucide="plus"></i>
                  Add task
                </button>
</div>
<div className="space-y-2" id="missionTasks">

</div>
</div>
</div>
</div>

<div className="px-5 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded border border-slate-200 hover:bg-slate-100 text-slate-700" id="missionDelete">
<i className="w-4 h-4" data-lucide="trash-2"></i>
              Delete
            </button>
<button className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded border border-slate-200 hover:bg-slate-100 text-slate-700" id="hideInTimeline">
<i className="w-4 h-4" data-lucide="eye-off"></i>
              Hide in timeline view
            </button>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-2 rounded border border-slate-200 hover:bg-slate-100 text-sm text-slate-700" id="missionCancel">Cancel</button>
<button className="px-3 py-2 rounded bg-[#AA1E23] hover:bg-[#90191D] text-white text-sm font-medium" id="missionSave">Save changes</button>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
