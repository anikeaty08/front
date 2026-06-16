import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Simple Markdown parser
        function parseMarkdown(markdown) {
            if (!markdown) return '';
            
            // Escape HTML
            let html = markdown
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");
            
            // Headers
            html = html.replace(/^(#{1,6})\s+(.*)$/gm, (match, hashes, content) => {
                const level = hashes.length;
                return `<h${level}>${content}</h${level}>`;
            });
            
            // Bold
            html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            html = html.replace(/__(.*?)__/g, '<strong>$1</strong>');
            
            // Italic
            html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
            html = html.replace(/_(.*?)_/g, '<em>$1</em>');
            
            // Strikethrough
            html = html.replace(/~~(.*?)~~/g, '<del>$1</del>');
            
            // Code blocks
            html = html.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
            
            // Inline code
            html = html.replace(/`(.*?)`/g, '<code>$1</code>');
            
            // Blockquotes
            html = html.replace(/^>\s+(.*)$/gm, '<blockquote>$1</blockquote>');
            
            // Unordered lists
            html = html.replace(/^\s*-\s+(.*)/gm, '<li>$1</li>');
            html = html.replace(/(<li>.*<\/li>)/g, '<ul>$1</ul>');
            
            // Ordered lists
            html = html.replace(/^\s*\d+\.\s+(.*)/gm, '<li>$1</li>');
            html = html.replace(/(<li>.*<\/li>)/g, '<ol>$1</ol>');
            
            // Links
            html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
            
            // Images
            html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1">');
            
            // Horizontal rules
            html = html.replace(/^-{3,}$/gm, '<hr>');
            
            // Paragraphs
            html = html.replace(/\n{2,}/g, '</p><p>');
            html = html.replace(/^([^\s<].*)$/gm, '<p>$1</p>');
            
            // Fix empty paragraphs
            html = html.replace(/<p><\/p>/g, '');
            
            // Remove leading/trailing paragraphs if they're empty
            html = html.replace(/^<p><\/p>/, '');
            html = html.replace(/<p><\/p>$/, '');
            
            // Wrap in container
            if (html.trim() === '') {
                html = '<p><br></p>';
            }
            
            return html;
        }

        let notes = [];
        let currentNoteId = null;
        let isEditing = false;
        let isMarkdownMode = 'edit'; // 'edit' or 'preview'
        let saveTimeout = null;
        let currentFilter = 'all';
        let currentTemplate = 'none';

        function loadNotes() {
            const saved = localStorage.getItem('notepro_notes');
            if (saved) {
                notes = JSON.parse(saved);
                renderNotesList();
                updateStats();
            }
        }

        function saveNotes() {
            localStorage.setItem('notepro_notes', JSON.stringify(notes));
        }

        function createNewNote() {
            const note = {
                id: Date.now(),
                title: 'Untitled Note',
                content: '',
                tags: [],
                bookmarked: false,
                template: 'none',
                created: new Date().toISOString(),
                modified: new Date().toISOString()
            };
            notes.unshift(note);
            saveNotes();
            renderNotesList();
            selectNote(note.id);
            updateStats();
            toggleEdit();
        }

        function renderNotesList() {
            const list = document.getElementById('notesList');
            const filteredNotes = currentFilter === 'all' 
                ? notes 
                : notes.filter(note => note.bookmarked);

            list.innerHTML = filteredNotes.map(note => {
                const preview = note.content.replace(/<[^>]*>/g, '').substring(0, 60) || 
                                note.content.substring(0, 60);
                const date = new Date(note.modified).toLocaleDateString();
                let templateIcon = '';
                if (note.template === 'cornell') templateIcon = 'C';
                else if (note.template === 'outline') templateIcon = 'O';
                else if (note.template === 'mindmap') templateIcon = 'M';
                else if (note.template === 'charting') templateIcon = 'Ch';
                else if (note.template === 'sentence') templateIcon = 'S';
                else if (note.template === 'daily') templateIcon = 'D';
                else if (note.template === 'weekly') templateIcon = 'W';
                else if (note.template === 'monthly') templateIcon = 'M';
                else if (note.template === 'markdown') templateIcon = 'MD';
                
                return `
                    <div class="note-item ${note.id === currentNoteId ? 'active' : ''}" onclick="selectNote(${note.id})" style="position: relative;">
                        ${note.bookmarked ? '<div class="bookmark-indicator"></div>' : ''}
                        <div class="note-item-title" style="display: flex; justify-content: space-between; align-items: center;">
                            <span>${note.title || 'Untitled'}</span>
                            ${templateIcon ? `<span style="background: #ffedd5; color: #ea580c; font-size: 10px; padding: 2px 6px; border-radius: 10px;">${templateIcon}</span>` : ''}
                        </div>
                        <div class="note-item-preview">${preview || 'No content'}</div>
                        <div class="note-item-date">${date}</div>
                    </div>
                `;
            }).join('');
        }

        function filterNotes(filter) {
            currentFilter = filter;
            
            // Update active tab
            document.querySelectorAll('.filter-tab').forEach(tab => {
                if (tab.getAttribute('data-filter') === filter) {
                    tab.classList.add('active');
                } else {
                    tab.classList.remove('active');
                }
            });

            renderNotesList();
            updateStats();
        }

        function selectNote(id) {
            currentNoteId = id;
            isEditing = false;
            isMarkdownMode = 'edit';
            updateMarkdownToggle();
            
            const note = notes.find(n => n.id === id);
            if (!note) return;

            currentTemplate = note.template || 'none';
            updateTemplateSelector();
            
            const container = document.getElementById('editorContainer');
            document.getElementById('toolbar').style.display = 'flex';
            updateEditButton();
            updateBookmarkButton();
            
            // Set title and tags
            container.innerHTML = `
                <input type="text" class="note-title" id="noteTitle" value="${note.title}" placeholder="Untitled Note" oninput="updateNoteTitle(this.value)" disabled>
                <div class="tag-container" id="tagContainer">
                    ${note.tags.map(tag => `<span class="tag">${tag} <span class="tag-remove" onclick="removeTag('${tag}')" style="display: none;">×</span></span>`).join('')}
                    <input type="text" class="tag-input" placeholder="Add tag..." onkeypress="addTag(event)" style="display: none;">
                </div>
            `;
            
            // Set content based on template
            const contentContainer = document.createElement('div');
            contentContainer.id = 'noteContent';
            contentContainer.contentEditable = 'false';
            contentContainer.oninput = "updateNoteContent()";
            
            // Special handling for markdown template
            if (note.template === 'markdown') {
                contentContainer.className = 'note-content';
                contentContainer.textContent = note.content || '# Welcome to Markdown\n\nStart writing in **Markdown**!\n\n- List item\n- Another item\n\n> Blockquote\n\n```js\n// Code block\nconst hello = "world";\n```\n\n[Visit NotePro](https://notepro.com)';
            } 
            // Handle planner templates
            else if (note.template === 'daily') {
                const dailyContent = note.content || `
                    <div class="planner-container">
                        <div class="planner-card">
                            <div class="planner-header">Priority Tasks</div>
                            <div class="planner-item">
                                <input type="checkbox" class="planner-checkbox">
                                <div class="planner-text">Important task 1</div>
                            </div>
                            <div class="planner-item">
                                <input type="checkbox" class="planner-checkbox">
                                <div class="planner-text">Important task 2</div>
                            </div>
                        </div>
                        
                        <div class="planner-card">
                            <div class="planner-header">Schedule</div>
                            <div class="daily-planner">
                                <div class="daily-time-column">
                                    <div class="daily-time-slot">
                                        <div class="time-label">9:00 AM</div>
                                        <div class="time-content"></div>
                                    </div>
                                    <div class="daily-time-slot">
                                        <div class="time-label">11:00 AM</div>
                                        <div class="time-content"></div>
                                    </div>
                                    <div class="daily-time-slot">
                                        <div class="time-label">1:00 PM</div>
                                        <div class="time-content"></div>
                                    </div>
                                    <div class="daily-time-slot">
                                        <div class="time-label">3:00 PM</div>
                                        <div class="time-content"></div>
                                    </div>
                                </div>
                                <div class="daily-time-column">
                                    <div class="daily-time-slot">
                                        <div class="time-label">10:00 AM</div>
                                        <div class="time-content"></div>
                                    </div>
                                    <div class="daily-time-slot">
                                        <div class="time-label">12:00 PM</div>
                                        <div class="time-content"></div>
                                    </div>
                                    <div class="daily-time-slot">
                                        <div class="time-label">2:00 PM</div>
                                        <div class="time-content"></div>
                                    </div>
                                    <div class="daily-time-slot">
                                        <div class="time-label">4:00 PM</div>
                                        <div class="time-content"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="planner-card">
                            <div class="planner-header">Notes & Ideas</div>
                            <div contenteditable="false"></div>
                        </div>
                    </div>
                `;
                contentContainer.innerHTML = dailyContent;
                contentContainer.className = 'daily-template';
            } else if (note.template === 'weekly') {
                const weeklyContent = note.content || `
                    <div class="weekly-planner">
                        <div class="weekly-day">
                            <div class="weekly-day-header">Monday</div>
                            <div class="planner-item">
                                <input type="checkbox" class="planner-checkbox">
                                <div class="planner-text">Task 1</div>
                            </div>
                            <div class="planner-item">
                                <input type="checkbox" class="planner-checkbox">
                                <div class="planner-text">Task 2</div>
                            </div>
                        </div>
                        <div class="weekly-day">
                            <div class="weekly-day-header">Tuesday</div>
                            <div class="planner-item">
                                <input type="checkbox" class="planner-checkbox">
                                <div class="planner-text">Task 1</div>
                            </div>
                            <div class="planner-item">
                                <input type="checkbox" class="planner-checkbox">
                                <div class="planner-text">Task 2</div>
                            </div>
                        </div>
                        <div class="weekly-day">
                            <div class="weekly-day-header">Wednesday</div>
                            <div class="planner-item">
                                <input type="checkbox" class="planner-checkbox">
                                <div class="planner-text">Task 1</div>
                            </div>
                            <div class="planner-item">
                                <input type="checkbox" class="planner-checkbox">
                                <div class="planner-text">Task 2</div>
                            </div>
                        </div>
                        <div class="weekly-day">
                            <div class="weekly-day-header">Thursday</div>
                            <div class="planner-item">
                                <input type="checkbox" class="planner-checkbox">
                                <div class="planner-text">Task 1</div>
                            </div>
                            <div class="planner-item">
                                <input type="checkbox" class="planner-checkbox">
                                <div class="planner-text">Task 2</div>
                            </div>
                        </div>
                        <div class="weekly-day">
                            <div class="weekly-day-header">Friday</div>
                            <div class="planner-item">
                                <input type="checkbox" class="planner-checkbox">
                                <div class="planner-text">Task 1</div>
                            </div>
                            <div class="planner-item">
                                <input type="checkbox" class="planner-checkbox">
                                <div class="planner-text">Task 2</div>
                            </div>
                        </div>
                        <div class="weekly-day">
                            <div class="weekly-day-header">Saturday</div>
                            <div class="planner-item">
                                <input type="checkbox" class="planner-checkbox">
                                <div class="planner-text">Task 1</div>
                            </div>
                            <div class="planner-item">
                                <input type="checkbox" class="planner-checkbox">
                                <div class="planner-text">Task 2</div>
                            </div>
                        </div>
                        <div class="weekly-day">
                            <div class="weekly-day-header">Sunday</div>
                            <div class="planner-item">
                                <input type="checkbox" class="planner-checkbox">
                                <div class="planner-text">Task 1</div>
                            </div>
                            <div class="planner-item">
                                <input type="checkbox" class="planner-checkbox">
                                <div class="planner-text">Task 2</div>
                            </div>
                        </div>
                    </div>
                `;
                contentContainer.innerHTML = weeklyContent;
                contentContainer.className = 'weekly-template';
            } else if (note.template === 'monthly') {
                // Generate monthly calendar
                const today = new Date();
                const year = today.getFullYear();
                const month = today.getMonth();
                const firstDay = new Date(year, month, 1);
                const lastDay = new Date(year, month + 1, 0);
                const daysInMonth = lastDay.getDate();
                const startDay = firstDay.getDay(); // 0 = Sunday, 1 = Monday, etc.
                
                let calendarHTML = '<div class="monthly-planner">';
                
                // Day headers
                const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                for (let i = 0; i < 7; i++) {
                    calendarHTML += `<div class="monthly-day-header">${days[i]}</div>`;
                }
                
                // Empty cells before first day
                for (let i = 0; i < startDay; i++) {
                    calendarHTML += '<div class="monthly-day empty"></div>';
                }
                
                // Days of the month
                for (let day = 1; day <= daysInMonth; day++) {
                    calendarHTML += `
                        <div class="monthly-day">
                            <div class="monthly-day-header">${day}</div>
                            <div class="planner-item">
                                <input type="checkbox" class="planner-checkbox">
                                <div class="planner-text"></div>
                            </div>
                        </div>
                    `;
                }
                
                // Fill remaining cells
                const totalCells = 42; // 6 weeks * 7 days
                const remainingCells = totalCells - startDay - daysInMonth;
                for (let i = 0; i < remainingCells; i++) {
                    calendarHTML += '<div class="monthly-day empty"></div>';
                }
                
                calendarHTML += '</div>';
                
                contentContainer.innerHTML = calendarHTML;
                contentContainer.className = 'monthly-template';
            } 
            // Handle other templates
            else if (note.template === 'cornell') {
                const cornellContent = note.content || '<div class="cornell-section-title">Cues</div><p></p><div class="cornell-section-title">Notes</div><p></p><div class="cornell-section-title">Summary</div><p></p>';
                contentContainer.innerHTML = cornellContent;
                contentContainer.className = 'cornell-template';
            } else if (note.template === 'outline') {
                const outlineContent = note.content || '<div class="outline-item">Main Topic</div><div class="outline-subitem">Subtopic</div>';
                contentContainer.innerHTML = outlineContent;
                contentContainer.className = 'outline-template';
            } else if (note.template === 'mindmap') {
                const mindmapContent = note.content || `
                    <div class="mindmap-center">Main Topic</div>
                    <div class="mindmap-branches">
                        <div class="mindmap-branch">
                            <div class="mindmap-leaf">Branch 1</div>
                            <div class="mindmap-leaf">Branch 2</div>
                        </div>
                        <div class="mindmap-branch">
                            <div class="mindmap-leaf">Branch 3</div>
                            <div class="mindmap-leaf">Branch 4</div>
                        </div>
                    </div>
                `;
                contentContainer.innerHTML = mindmapContent;
                contentContainer.className = 'mindmap-template';
            } else if (note.template === 'charting') {
                const chartingContent = note.content || `
                    <table class="charting-table">
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Item</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                `;
                contentContainer.innerHTML = chartingContent;
                contentContainer.className = 'charting-template';
            } else if (note.template === 'sentence') {
                const sentenceContent = note.content || '<div class="sentence-item">Key point from lecture or reading</div><div class="sentence-item">Another important point</div>';
                contentContainer.innerHTML = sentenceContent;
                contentContainer.className = 'sentence-template';
            } else {
                // Default content
                contentContainer.className = 'note-content';
                contentContainer.innerHTML = note.content;
            }
            
            container.appendChild(contentContainer);
            renderNotesList();
        }

        function toggleBookmark() {
            const note = notes.find(n => n.id === currentNoteId);
            if (note) {
                note.bookmarked = !note.bookmarked;
                note.modified = new Date().toISOString();
                saveNotes();
                updateBookmarkButton();
                renderNotesList();
                updateStats();
            }
        }

        function updateBookmarkButton() {
            const bookmarkBtn = document.getElementById('bookmarkBtn');
            const note = notes.find(n => n.id === currentNoteId);
            
            if (note && note.bookmarked) {
                bookmarkBtn.classList.add('bookmarked');
            } else {
                bookmarkBtn.classList.remove('bookmarked');
            }
        }

        function toggleEdit() {
            isEditing = !isEditing;
            updateEditButton();
            
            const titleInput = document.getElementById('noteTitle');
            const contentDiv = document.getElementById('noteContent');
            const tagInput = document.querySelector('.tag-input');
            const tagRemoves = document.querySelectorAll('.tag-remove');
            
            if (titleInput) titleInput.disabled = !isEditing;
            if (contentDiv) {
                // Special handling for markdown
                if (currentTemplate === 'markdown') {
                    contentDiv.contentEditable = isEditing && isMarkdownMode === 'edit';
                } else {
                    contentDiv.contentEditable = isEditing;
                }
            }
            if (tagInput) tagInput.style.display = isEditing ? 'inline-block' : 'none';
            tagRemoves.forEach(el => el.style.display = isEditing ? 'inline' : 'none');
            
            // Make checkboxes editable in planners
            const checkboxes = document.querySelectorAll('.planner-checkbox');
            checkboxes.forEach(checkbox => {
                checkbox.disabled = !isEditing;
            });
            
            // Make time content editable
            const timeContents = document.querySelectorAll('.time-content');
            timeContents.forEach(time => {
                time.contentEditable = isEditing;
            });
            
            // Make planner text editable
            const plannerTexts = document.querySelectorAll('.planner-text');
            plannerTexts.forEach(text => {
                if (!text.querySelector('input')) {
                    text.contentEditable = isEditing;
                }
            });
        }

        function updateEditButton() {
            const editBtn = document.getElementById('editBtn');
            const formatTools = document.getElementById('formatTools');
            
            if (isEditing) {
                editBtn.classList.add('active');
                editBtn.querySelector('.edit-btn-label').textContent = 'Editing';
                formatTools.style.display = 'flex';
            } else {
                editBtn.classList.remove('active');
                editBtn.querySelector('.edit-btn-label').textContent = 'Edit';
                formatTools.style.display = 'none';
            }
        }

        function updateNoteTitle(title) {
            const note = notes.find(n => n.id === currentNoteId);
            if (note) {
                note.title = title || 'Untitled Note';
                note.modified = new Date().toISOString();
                debounceSave();
            }
        }

        function updateNoteContent() {
            const note = notes.find(n => n.id === currentNoteId);
            if (note) {
                const content = document.getElementById('noteContent');
                note.content = currentTemplate === 'markdown' ? content.textContent : content.innerHTML;
                note.modified = new Date().toISOString();
                debounceSave();
            }
        }

        function debounceSave() {
            clearTimeout(saveTimeout);
            saveTimeout = setTimeout(() => {
                saveNotes();
                renderNotesList();
            }, 500);
        }

        function formatText(command, value) {
            // Only format if in edit mode and not markdown mode
            if (currentTemplate === 'markdown' && isMarkdownMode === 'preview') {
                return;
            }
            
            document.execCommand(command, false, value);
            const content = document.getElementById('noteContent');
            if (content) {
                content.focus();
                updateNoteContent();
            }
        }

        function insertBulletList() {
            // Only insert if in edit mode and not markdown mode
            if (currentTemplate === 'markdown' && isMarkdownMode === 'preview') {
                return;
            }
            
            document.execCommand('insertUnorderedList');
            const content = document.getElementById('noteContent');
            if (content) content.focus();
        }

        function insertCheckbox() {
            // Only insert if in edit mode and not markdown mode
            if (currentTemplate === 'markdown' && isMarkdownMode === 'preview') {
                return;
            }
            
            const checkbox = '<input type="checkbox" style="margin-right: 8px;"> ';
            document.execCommand('insertHTML', false, checkbox);
        }

        function insertDivider() {
            // Only insert if in edit mode and not markdown mode
            if (currentTemplate === 'markdown' && isMarkdownMode === 'preview') {
                return;
            }
            
            const divider = '<div class="divider-separator" contenteditable="false"></div><p><br></p>';
            document.execCommand('insertHTML', false, divider);
            const content = document.getElementById('noteContent');
            if (content) {
                content.focus();
                updateNoteContent();
            }
        }

        function addTag(e) {
            if (e.key === 'Enter' && e.target.value.trim()) {
                const note = notes.find(n => n.id === currentNoteId);
                if (note && !note.tags.includes(e.target.value.trim())) {
                    note.tags.push(e.target.value.trim());
                    saveNotes();
                    selectNote(currentNoteId);
                    toggleEdit();
                }
            }
        }

        function removeTag(tag) {
            const note = notes.find(n => n.id === currentNoteId);
            if (note) {
                note.tags = note.tags.filter(t => t !== tag);
                saveNotes();
                const wasEditing = isEditing;
                selectNote(currentNoteId);
                if (wasEditing) toggleEdit();
            }
        }

        function deleteCurrentNote() {
            if (!currentNoteId || !confirm('Delete this note?')) return;
            notes = notes.filter(n => n.id !== currentNoteId);
            saveNotes();
            currentNoteId = null;
            isEditing = false;
            document.getElementById('toolbar').style.display = 'none';
            document.getElementById('editorContainer').innerHTML = `
                <div class="empty-state">
                    <svg class="empty-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                    </svg>
                    <div class="empty-state-title">Note Deleted</div>
                    <div class="empty-state-text">Create a new note to continue</div>
                </div>
            `;
            renderNotesList();
            updateStats();
        }

        function searchNotes(query) {
            const baseNotes = currentFilter === 'all' 
                ? notes 
                : notes.filter(note => note.bookmarked);
                
            const filtered = baseNotes.filter(note => 
                note.title.toLowerCase().includes(query.toLowerCase()) ||
                note.content.toLowerCase().includes(query.toLowerCase()) ||
                note.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
            );
            
            const list = document.getElementById('notesList');
            list.innerHTML = filtered.map(note => {
                const preview = note.content.replace(/<[^>]*>/g, '').substring(0, 60) || 
                                note.content.substring(0, 60);
                const date = new Date(note.modified).toLocaleDateString();
                let templateIcon = '';
                if (note.template === 'cornell') templateIcon = 'C';
                else if (note.template === 'outline') templateIcon = 'O';
                else if (note.template === 'mindmap') templateIcon = 'M';
                else if (note.template === 'charting') templateIcon = 'Ch';
                else if (note.template === 'sentence') templateIcon = 'S';
                else if (note.template === 'daily') templateIcon = 'D';
                else if (note.template === 'weekly') templateIcon = 'W';
                else if (note.template === 'monthly') templateIcon = 'M';
                else if (note.template === 'markdown') templateIcon = 'MD';
                
                return `
                    <div class="note-item ${note.id === currentNoteId ? 'active' : ''}" onclick="selectNote(${note.id})" style="position: relative;">
                        ${note.bookmarked ? '<div class="bookmark-indicator"></div>' : ''}
                        <div class="note-item-title" style="display: flex; justify-content: space-between; align-items: center;">
                            <span>${note.title || 'Untitled'}</span>
                            ${templateIcon ? `<span style="background: #ffedd5; color: #ea580c; font-size: 10px; padding: 2px 6px; border-radius: 10px;">${templateIcon}</span>` : ''}
                        </div>
                        <div class="note-item-preview">${preview || 'No content'}</div>
                        <div class="note-item-date">${date}</div>
                    </div>
                `;
            }).join('');
        }

        function updateStats() {
            const count = currentFilter === 'all' 
                ? notes.length 
                : notes.filter(n => n.bookmarked).length;
            const label = currentFilter === 'all' ? 'note' : 'bookmarked';
            document.getElementById('stats').textContent = `${count} ${label}${count !== 1 ? 's' : ''}`;
        }

        // Template Selection Functions
        function toggleTemplateDropdown() {
            document.getElementById('templateSelector').classList.toggle('active');
        }

        function updateTemplateSelector() {
            const templateNames = {
                'cornell': 'Cornell Method',
                'outline': 'Outline Method',
                'mindmap': 'Mind Mapping',
                'charting': 'Charting Method',
                'sentence': 'Sentence Method',
                'daily': 'Daily Planner',
                'weekly': 'Weekly Planner',
                'monthly': 'Monthly Planner',
                'markdown': 'Markdown',
                'none': 'Select Template'
            };
            document.getElementById('currentTemplate').textContent = templateNames[currentTemplate];
        }

        function selectTemplate(template) {
            if (!currentNoteId) return;
            
            const note = notes.find(n => n.id === currentNoteId);
            if (note) {
                note.template = template;
                note.modified = new Date().toISOString();
                currentTemplate = template;
                saveNotes();
                selectNote(currentNoteId);
                updateTemplateSelector();
                document.getElementById('templateSelector').classList.remove('active');
            }
        }

        // Markdown Toggle Functions
        function toggleMarkdownMode(mode) {
            if (currentTemplate !== 'markdown') return;
            
            isMarkdownMode = mode;
            updateMarkdownToggle();
            
            const contentDiv = document.getElementById('noteContent');
            if (!contentDiv) return;
            
            if (mode === 'edit') {
                // Show raw markdown
                contentDiv.className = 'note-content';
                contentDiv.textContent = notes.find(n => n.id === currentNoteId).content;
                contentDiv.contentEditable = isEditing;
            } else {
                // Show preview
                const markdown = notes.find(n => n.id === currentNoteId).content;
                const html = parseMarkdown(markdown);
                contentDiv.innerHTML = `<div class="markdown-preview">${html}</div>`;
                contentDiv.contentEditable = false;
            }
        }

        function updateMarkdownToggle() {
            const editBtn = document.getElementById('mdEditBtn');
            const previewBtn = document.getElementById('mdPreviewBtn');
            
            if (isMarkdownMode === 'edit') {
                editBtn.classList.add('active');
                previewBtn.classList.remove('active');
            } else {
                editBtn.classList.remove('active');
                previewBtn.classList.add('active');
            }
            
            // Show/hide markdown toggle based on template
            const mdToggle = document.querySelector('.md-toggle');
            if (currentTemplate === 'markdown') {
                mdToggle.style.display = 'flex';
            } else {
                mdToggle.style.display = 'none';
            }
        }

        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            const templateSelector = document.getElementById('templateSelector');
            if (!templateSelector.contains(event.target)) {
                templateSelector.classList.remove('active');
            }
        });

        loadNotes();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="container">
<div className="sidebar" id="sidebar">
<div className="sidebar-header">
<div className="logo" style={{}}>
<svg className="logo-icon" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                    Neutron
                </div>
<button className="new-note-btn" onclick="createNewNote()" style={{}}>
<svg className="" fill="none" height="20" stroke="currentColor" viewbox="0 0 24 24" width="20">
<path className="" d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                    New Note
                </button>
</div>
<div className="filter-tabs">
<button className="filter-tab active" data-filter="all" onclick="filterNotes('all')" style={{}}>
<svg className="filter-icon" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                    All
                </button>
<button className="filter-tab" data-filter="bookmarked" onclick="filterNotes('bookmarked')" style={{}}>
<svg className="filter-icon" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                    Bookmarked
                </button>
</div>
<div className="search-box">
<div className="search-container">
<svg className="search-icon" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<input className="search-input" oninput="searchNotes(this.value)" placeholder="Search notes..." type="text"/>
</div>
</div>
<div className="notes-list" id="notesList"></div>
<div className="stats" id="stats">0 notes</div>
<button className="gradient-button">
<span className="gradient-text" style={{}}>β Beta Version 1.01 </span>
</button>
</div>
<div className="main-content">
<div className="toolbar" id="toolbar" style={{display: 'none'}}>
<button className="edit-btn" id="editBtn" onclick="toggleEdit()">
<svg className="edit-icon" fill="none" viewbox="0 0 24 24">
<g strokeLinecap="round" strokeWidth="2">
<path d="m20 20h-16"></path>
<path clip-rule="evenodd" d="m14.5858 4.41422c.781-.78105 2.0474-.78105 2.8284 0 .7811.78105.7811 2.04738 0 2.82843l-8.28322 8.28325-3.03046.202.20203-3.0304z" fill-rule="evenodd"></path>
</g>
</svg>
<span className="edit-btn-label" style={{}}>Edit</span>
</button>
<div className="md-toggle">
<button className="md-toggle-btn active" id="mdEditBtn" onclick="toggleMarkdownMode('edit')" style={{}}>Edit</button>
<button className="md-toggle-btn" id="mdPreviewBtn" onclick="toggleMarkdownMode('preview')" style={{}}>Preview</button>
</div>
<div className="template-selector" id="templateSelector">
<div className="template-dropdown" onclick="toggleTemplateDropdown()">
<svg className="template-icon" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span id="currentTemplate" style={{}}>Select Template</span>
<svg fill="none" height="16" stroke="currentColor" viewbox="0 0 24 24" width="16">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="template-options">
<div className="template-option" onclick="selectTemplate('cornell')" style={{}}>
<svg className="template-icon" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                            Cornell Method
                        </div>
<div className="template-option" onclick="selectTemplate('outline')" style={{}}>
<svg className="template-icon" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M4 6h16M4 10h16M4 14h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                            Outline Method
                        </div>
<div className="template-option" onclick="selectTemplate('mindmap')" style={{}}>
<svg className="template-icon" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                            Mind Mapping
                        </div>
<div className="template-option" onclick="selectTemplate('charting')" style={{}}>
<svg className="template-icon" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                            Charting Method
                        </div>
<div className="template-option" onclick="selectTemplate('sentence')" style={{}}>
<svg className="template-icon" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                            Sentence Method
                        </div>
<div className="template-option" onclick="selectTemplate('daily')" style={{}}>
<svg className="template-icon" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                            Daily Planner
                        </div>
<div className="template-option" onclick="selectTemplate('weekly')" style={{}}>
<svg className="template-icon" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                            Weekly Planner
                        </div>
<div className="template-option" onclick="selectTemplate('monthly')" style={{}}>
<svg className="template-icon" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                            Monthly Planner
                        </div>
<div className="template-option" onclick="selectTemplate('markdown')" style={{}}>
<svg className="template-icon" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                            Markdown
                        </div>
</div>
</div>
<div id="formatTools" style={{gap: '8px', display: 'none'}}>
<button className="toolbar-btn" onclick="formatText('bold')" title="Bold">
<svg className="toolbar-icon" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M6 4h8a4 4 0 014 4 4 4 0 01-4 4H6z M6 12h9a4 4 0 014 4 4 4 0 01-4 4H6z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="toolbar-btn" onclick="formatText('italic')" title="Italic">
<svg className="toolbar-icon" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M10 4h4M14 20h-4M15 4L9 20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="toolbar-btn" onclick="formatText('underline')" title="Underline">
<svg className="toolbar-icon" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M17 4v7a5 5 0 01-10 0V4M4 21h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="toolbar-btn" onclick="formatText('strikeThrough')" title="Strikethrough">
<svg className="toolbar-icon" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 12h14M9 5h6v3M9 19h6v-3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="toolbar-btn" onclick="insertBulletList()" title="Bullet List">
<svg className="toolbar-icon" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="toolbar-btn" onclick="insertCheckbox()" title="Checkbox">
<svg className="toolbar-icon" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="toolbar-btn" onclick="insertDivider()" title="Insert Divider">
<svg className="toolbar-icon" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M20 12H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<input className="color-picker" onchange="formatText('foreColor', this.value)" title="Text Color" type="color"/>
</div>
<button className="bookmark-btn" id="bookmarkBtn" onclick="toggleBookmark()" title="Bookmark">
<svg className="pin-icon" fill="none" viewbox="0 0 75 100" xmlns="http://www.w3.org/2000/svg">
<line stroke="black" strokeWidth="12" x1="37" x2="37" y1="64" y2="100"></line>
<path d="M16.5 36V4.5H58.5V36V53.75V54.9752L59.1862 55.9903L66.9674 67.5H8.03256L15.8138 55.9903L16.5 54.9752V53.75V36Z" stroke="black" strokeWidth="10"></path>
</svg>
</button>
<button className="delete-btn" onclick="deleteCurrentNote()" style={{}}>
<svg fill="none" height="18" stroke="currentColor" viewbox="0 0 24 24" width="18">
<path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                    Delete
                </button>
</div>
<div className="editor-container" id="editorContainer">
<div className="empty-state">
<svg className="empty-icon" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path className="" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<div className="empty-state-title" style={{}}>Welcome to Neutron Note</div>
<div className="empty-state-text">Create a new note to get started</div>
</div>
</div>
</div>
</div>


    </>
  );
}
