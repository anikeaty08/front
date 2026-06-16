import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Clock functionality
    function updateClock() {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      const timeString = `${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
      document.getElementById('clock').textContent = timeString;
    }
    setInterval(updateClock, 1000);
    updateClock();

    // Window management
    let windowStates = {
      'safari-app': { isMaximized: false, prevStyle: {} },
      'calculator-app': { isMaximized: false, prevStyle: {} },
      'notes-app': { isMaximized: false, prevStyle: {} },
      'photos-app': { isMaximized: false, prevStyle: {} },
      'settings-app': { isMaximized: false, prevStyle: {} },
      'files-app': { isMaximized: false, prevStyle: {} },
      'data-mapper-app': { isMaximized: false, prevStyle: {} },
      'trash-viewer': { isMaximized: false, prevStyle: {} }
    };

    function openApp(id) {
      const app = document.getElementById(id);
      app.classList.remove('hidden');
      bringToFront(id);
    }

    function closeApp(id) {
      document.getElementById(id).classList.add('hidden');
      const minimizedIcon = document.querySelector(`#minimized-tray [data-app="${id}"]`);
      if (minimizedIcon) minimizedIcon.remove();
    }

    function minimizeApp(id) {
      const app = document.getElementById(id);
      app.classList.add('hidden');
      
      const tray = document.getElementById('minimized-tray');
      if (!document.querySelector(`#minimized-tray [data-app="${id}"]`)) {
        const icon = document.createElement('div');
        icon.className = 'w-10 h-10 bg-gray-800 bg-opacity-70 rounded-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform';
        icon.setAttribute('data-app', id);
        icon.innerHTML = getAppIcon(id);
        icon.onclick = () => {
          app.classList.remove('hidden');
          icon.remove();
          bringToFront(id);
        };
        tray.appendChild(icon);
      }
    }

    function getAppIcon(id) {
      const icons = {
        'safari-app': '<i class="fa-solid fa-compass text-white"></i>',
        'calculator-app': '<i class="fa-solid fa-calculator text-white"></i>',
        'notes-app': '<i class="fa-solid fa-note-sticky text-white"></i>',
        'photos-app': '<i class="fa-solid fa-image text-white"></i>',
        'settings-app': '<i class="fa-solid fa-gear text-white"></i>',
        'files-app': '<i class="fa-solid fa-folder text-white"></i>',
        'data-mapper-app': '<i class="fa-solid fa-file-import text-white"></i>',
        'trash-viewer': '<i class="fa-solid fa-trash text-white"></i>'
      };
      return icons[id] || '<i class="fa-solid fa-window-maximize text-white"></i>';
    }

    function maximizeApp(id) {
      const app = document.getElementById(id);
      const state = windowStates[id];
      
      if (!state.isMaximized) {
        state.prevStyle = {
          top: app.style.top,
          left: app.style.left,
          width: app.style.width,
          height: app.style.height,
          transform: app.style.transform
        };
        
        app.style.top = '7px';
        app.style.left = '0';
        app.style.width = '100%';
        app.style.height = 'calc(100vh - 7px)';
        app.style.borderRadius = '0';
        app.style.transform = 'none';
        state.isMaximized = true;
      } else {
        app.style.top = state.prevStyle.top || '40px';
        app.style.left = state.prevStyle.left || '40px';
        app.style.width = state.prevStyle.width || '';
        app.style.height = state.prevStyle.height || '';
        app.style.borderRadius = '0.5rem';
        app.style.transform = state.prevStyle.transform || '';
        state.isMaximized = false;
      }
    }

    function bringToFront(id) {
      const windows = document.querySelectorAll('.app-window');
      windows.forEach(win => win.style.zIndex = 5);
      document.getElementById(id).style.zIndex = 10;
    }

    // Make windows draggable
    function makeDraggable(elmnt, header) {
      let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      const headerEl = document.getElementById(header);
      if (!headerEl) return;
      
      headerEl.onmousedown = dragMouseDown;

      function dragMouseDown(e) {
        if (windowStates[elmnt] && windowStates[elmnt].isMaximized) return;
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
        bringToFront(elmnt);
      }

      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        const el = document.getElementById(elmnt);
        el.style.top = (el.offsetTop - pos2) + "px";
        el.style.left = (el.offsetLeft - pos1) + "px";
      }

      function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }

    // DATA MAPPER FUNCTIONALITY
    let uploadedFiles = [];
    let currentMappings = {};
    let activityLogs = [];
    let currentLogFilter = 'all';
    let stats = { filesProcessed: 0, recordsMapped: 0, successRate: 100 };

    // Destination Schema (predefined target fields)
    const destinationSchema = [
      { name: 'id', type: 'number', required: true },
      { name: 'first_name', type: 'string', required: true },
      { name: 'last_name', type: 'string', required: true },
      { name: 'email', type: 'email', required: true },
      { name: 'phone', type: 'string', required: false },
      { name: 'address', type: 'string', required: false },
      { name: 'city', type: 'string', required: false },
      { name: 'state', type: 'string', required: false },
      { name: 'zip_code', type: 'string', required: false },
      { name: 'country', type: 'string', required: false },
      { name: 'created_at', type: 'date', required: false }
    ];

    // Show mapper view
    function showMapperView(view) {
      // Hide all views
      ['upload', 'mapping', 'logs', 'pricing', 'mapper-settings'].forEach(v => {
        document.getElementById(`view-${v}`).classList.add('hidden');
        const navBtn = document.getElementById(`nav-${v}`);
        if (navBtn) {
          navBtn.className = 'w-full flex items-center space-x-3 px-3 py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors';
        }
      });
      
      // Show selected view
      document.getElementById(`view-${view}`).classList.remove('hidden');
      const activeBtn = document.getElementById(`nav-${view}`);
      if (activeBtn) {
        activeBtn.className = 'w-full flex items-center space-x-3 px-3 py-2.5 bg-green-100 text-green-700 rounded-lg font-medium transition-colors';
      }
    }

    // File upload handling
    function handleDragOver(e) {
      e.preventDefault();
      e.stopPropagation();
      document.getElementById('upload-area').classList.add('drag-over');
    }

    function handleDragLeave(e) {
      e.preventDefault();
      e.stopPropagation();
      document.getElementById('upload-area').classList.remove('drag-over');
    }

    function handleFileDrop(e) {
      e.preventDefault();
      e.stopPropagation();
      document.getElementById('upload-area').classList.remove('drag-over');
      
      const files = e.dataTransfer.files;
      processFiles(files);
    }

    function handleFileSelect(e) {
      const files = e.target.files;
      processFiles(files);
    }

    function processFiles(files) {
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        
        reader.onload = (e) => {
          const fileData = {
            id: Date.now() + Math.random(),
            name: file.name,
            size: formatFileSize(file.size),
            type: file.type || getFileExtension(file.name),
            uploadedAt: new Date().toLocaleString(),
            content: e.target.result,
            fields: [],
            data: []
          };

          // Parse file content
          if (file.name.endsWith('.csv')) {
            parseCSV(fileData);
          } else if (file.name.endsWith('.json')) {
            parseJSON(fileData);
          }

          uploadedFiles.push(fileData);
          displayUploadedFiles();
          updateFileSelector();
          
          // Add log
          addLog('success', `File "${file.name}" uploaded successfully`, `${fileData.data.length} records detected`);
          
          // Update stats
          stats.filesProcessed++;
          updateStats();
        };

        reader.readAsText(file);
      });
    }

    function parseCSV(fileData) {
      const lines = fileData.content.split('\n').filter(line => line.trim());
      if (lines.length === 0) return;

      // First line is headers
      const headers = lines[0].split(',').map(h => h.trim());
      fileData.fields = headers;

      // Parse data rows
      for (let i = 1; i < Math.min(lines.length, 101); i++) { // Limit to 100 rows
        const values = lines[i].split(',').map(v => v.trim());
        const row = {};
        headers.forEach((header, index) => {
          row[header] = values[index] || '';
        });
        fileData.data.push(row);
      }
    }

    function parseJSON(fileData) {
      try {
        const jsonData = JSON.parse(fileData.content);
        const dataArray = Array.isArray(jsonData) ? jsonData : [jsonData];
        
        if (dataArray.length > 0) {
          fileData.fields = Object.keys(dataArray[0]);
          fileData.data = dataArray.slice(0, 100); // Limit to 100 rows
        }
      } catch (e) {
        addLog('error', `Failed to parse JSON file "${fileData.name}"`, e.message);
      }
    }

    function displayUploadedFiles() {
      const container = document.getElementById('uploaded-files-container');
      const list = document.getElementById('uploaded-files-list');
      
      if (uploadedFiles.length === 0) {
        container.classList.add('hidden');
        return;
      }

      container.classList.remove('hidden');
      list.innerHTML = '';

      uploadedFiles.forEach((file, index) => {
        const fileDiv = document.createElement('div');
        fileDiv.className = 'flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-all';
        fileDiv.innerHTML = `
          <div class="flex items-center space-x-4 flex-1">
            <div class="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center">
              <i class="fa-solid ${getFileIcon(file.name)} text-white text-xl"></i>
            </div>
            <div class="flex-1">
              <p class="font-semibold text-gray-800">${file.name}</p>
              <p class="text-xs text-gray-500">${file.size} • ${file.data.length} records • ${file.fields.length} fields</p>
            </div>
          </div>
          <div class="flex items-center space-x-2">
            <button onclick="viewFileDetails(${index})" class="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors">
              <i class="fa-solid fa-eye mr-1"></i>View
            </button>
            <button onclick="removeFile(${index})" class="px-3 py-1.5 bg-red-100 text-red-700 rounded-lg text-sm font-medium hover:bg-red-200 transition-colors">
              <i class="fa-solid fa-trash mr-1"></i>Remove
            </button>
          </div>
        `;
        list.appendChild(fileDiv);
      });
    }

    function getFileIcon(filename) {
      if (filename.endsWith('.csv')) return 'fa-file-csv';
      if (filename.endsWith('.json')) return 'fa-file-code';
      if (filename.endsWith('.xlsx') || filename.endsWith('.xls')) return 'fa-file-excel';
      return 'fa-file';
    }

    function formatFileSize(bytes) {
      if (bytes < 1024) return bytes + ' B';
      if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
      return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
    }

    function getFileExtension(filename) {
      return filename.split('.').pop().toUpperCase();
    }

    function clearUploadedFiles() {
      if (confirm('Remove all uploaded files?')) {
        uploadedFiles = [];
        displayUploadedFiles();
        updateFileSelector();
        addLog('warning', 'All files cleared', 'Upload queue emptied');
      }
    }

    function removeFile(index) {
      const file = uploadedFiles[index];
      if (confirm(`Remove "${file.name}"?`)) {
        uploadedFiles.splice(index, 1);
        displayUploadedFiles();
        updateFileSelector();
        addLog('warning', `File "${file.name}" removed`, 'Removed from upload queue');
      }
    }

    function viewFileDetails(index) {
      const file = uploadedFiles[index];
      showMapperView('mapping');
      document.getElementById('mapping-file-select').value = index;
      loadFileForMapping();
    }

    // Update file selector in mapping view
    function updateFileSelector() {
      const select = document.getElementById('mapping-file-select');
      select.innerHTML = '<option value="">Choose a file...</option>';
      
      uploadedFiles.forEach((file, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = `${file.name} (${file.data.length} records)`;
        select.appendChild(option);
      });
    }

    // Load file for mapping
    function loadFileForMapping() {
      const selectValue = document.getElementById('mapping-file-select').value;
      
      if (selectValue === '') {
        document.getElementById('mapping-empty-state').classList.remove('hidden');
        document.getElementById('mapping-content').classList.add('hidden');
        return;
      }

      const fileIndex = parseInt(selectValue);
      const file = uploadedFiles[fileIndex];

      document.getElementById('mapping-empty-state').classList.add('hidden');
      document.getElementById('mapping-content').classList.remove('hidden');

      // Display source fields
      const sourceList = document.getElementById('source-fields-list');
      sourceList.innerHTML = '';
      file.fields.forEach((field, index) => {
        const fieldDiv = document.createElement('div');
        fieldDiv.className = 'p-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors';
        fieldDiv.id = `source-field-${index}`;
        fieldDiv.innerHTML = `
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <i class="fa-solid fa-grip-vertical text-gray-400"></i>
              <span class="font-medium text-gray-800">${field}</span>
            </div>
            <div class="flex items-center space-x-2">
              <span class="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded">${detectFieldType(file.data, field)}</span>
              <i class="fa-solid fa-arrow-right text-gray-400"></i>
            </div>
          </div>
        `;
        sourceList.appendChild(fieldDiv);
      });

      // Display destination fields
      const destList = document.getElementById('destination-fields-list');
      destList.innerHTML = '';
      destinationSchema.forEach((field, index) => {
        const fieldDiv = document.createElement('div');
        fieldDiv.className = 'p-3 bg-gray-50 border border-gray-200 rounded-lg';
        fieldDiv.id = `dest-field-${index}`;
        fieldDiv.innerHTML = `
          <div class="flex items-center justify-between mb-2">
            <span class="font-medium text-gray-800">${field.name}</span>
            ${field.required ? '<span class="text-xs px-2 py-0.5 bg-red-100 text-red-700 rounded">Required</span>' : ''}
          </div>
          <select id="mapping-${field.name}" class="w-full px-2 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500">
            <option value="">-- Not Mapped --</option>
            ${file.fields.map(f => `<option value="${f}">${f}</option>`).join('')}
          </select>
        `;
        destList.appendChild(fieldDiv);
      });

      // Show data preview
      showDataPreview(file);
    }

    function detectFieldType(data, fieldName) {
      if (data.length === 0) return 'string';
      
      const sample = data[0][fieldName];
      if (!isNaN(sample)) return 'number';
      if (sample && sample.includes('@')) return 'email';
      if (sample && /^\d{4}-\d{2}-\d{2}/.test(sample)) return 'date';
      return 'string';
    }

    function showDataPreview(file) {
      const preview = document.getElementById('mapping-preview');
      
      if (file.data.length === 0) {
        preview.innerHTML = '<p class="text-gray-500 text-center py-4">No data to preview</p>';
        return;
      }

      let html = '<table class="min-w-full text-sm"><thead class="bg-gray-100"><tr>';
      file.fields.forEach(field => {
        html += `<th class="px-4 py-2 text-left font-semibold text-gray-700">${field}</th>`;
      });
      html += '</tr></thead><tbody>';

      file.data.slice(0, 5).forEach((row, index) => {
        html += `<tr class="${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}">`;
        file.fields.forEach(field => {
          html += `<td class="px-4 py-2 text-gray-800 border-t border-gray-200">${row[field] || '-'}</td>`;
        });
        html += '</tr>';
      });

      html += '</tbody></table>';
      preview.innerHTML = html;
    }

    // Auto-map fields
    function autoMapFields() {
      const selectValue = document.getElementById('mapping-file-select').value;
      if (selectValue === '') {
        alert('Please select a file first!');
        return;
      }

      const fileIndex = parseInt(selectValue);
      const file = uploadedFiles[fileIndex];

      let mappedCount = 0;

      destinationSchema.forEach(destField => {
        const select = document.getElementById(`mapping-${destField.name}`);
        
        // Try to find matching source field
        const match = file.fields.find(sourceField => {
          const srcLower = sourceField.toLowerCase().replace(/[_\s]/g, '');
          const destLower = destField.name.toLowerCase().replace(/[_\s]/g, '');
          return srcLower === destLower || srcLower.includes(destLower) || destLower.includes(srcLower);
        });

        if (match) {
          select.value = match;
          mappedCount++;
        }
      });

      addLog('success', 'Auto-mapping completed', `${mappedCount} fields mapped automatically`);
      
      // Show notification
      showNotification('success', 'Auto-Mapping Complete', `${mappedCount} fields mapped successfully`);
    }

    function resetMapping() {
      destinationSchema.forEach(field => {
        const select = document.getElementById(`mapping-${field.name}`);
        if (select) select.value = '';
      });
      addLog('info', 'Mapping reset', 'All field mappings cleared');
    }

    function applyMapping() {
      const selectValue = document.getElementById('mapping-file-select').value;
      if (selectValue === '') {
        alert('Please select a file first!');
        return;
      }

      const fileIndex = parseInt(selectValue);
      const file = uploadedFiles[fileIndex];

      // Collect mappings
      const mappings = {};
      let mappedFields = 0;
      let requiredMissing = [];

      destinationSchema.forEach(field => {
        const select = document.getElementById(`mapping-${field.name}`);
        if (select && select.value) {
          mappings[field.name] = select.value;
          mappedFields++;
        } else if (field.required) {
          requiredMissing.push(field.name);
        }
      });

      if (requiredMissing.length > 0) {
        alert(`Required fields not mapped: ${requiredMissing.join(', ')}`);
        return;
      }

      // Apply transformation
      const transformedData = file.data.map(row => {
        const newRow = {};
        Object.keys(mappings).forEach(destField => {
          const sourceField = mappings[destField];
          newRow[destField] = row[sourceField] || null;
        });
        return newRow;
      });

      // Update stats
      stats.recordsMapped += transformedData.length;
      updateStats();

      addLog('success', `Mapping applied to "${file.name}"`, `${transformedData.length} records transformed`);
      showNotification('success', 'Mapping Applied', `${transformedData.length} records successfully transformed`);

      // Log mapping details
      console.log('Transformed Data:', transformedData);
    }

    // Activity Logs
    function addLog(type, title, description) {
      const log = {
        id: Date.now(),
        type: type, // success, warning, error, info
        title: title,
        description: description,
        timestamp: new Date().toLocaleString()
      };

      activityLogs.unshift(log);
      if (activityLogs.length > 50) activityLogs.pop();

      renderLogs();
    }

    function renderLogs() {
      const logsList = document.getElementById('logs-list');
      const emptyState = document.getElementById('logs-empty-state');

      const filteredLogs = currentLogFilter === 'all' 
        ? activityLogs 
        : activityLogs.filter(log => log.type === currentLogFilter);

      if (filteredLogs.length === 0) {
        logsList.innerHTML = '';
        emptyState.classList.remove('hidden');
        return;
      }

      emptyState.classList.add('hidden');
      logsList.innerHTML = '';

      filteredLogs.forEach(log => {
        const logDiv = document.createElement('div');
        const iconClass = {
          success: 'fa-check-circle text-green-600',
          warning: 'fa-exclamation-triangle text-yellow-600',
          error: 'fa-times-circle text-red-600',
          info: 'fa-info-circle text-blue-600'
        }[log.type];

        const bgClass = {
          success: 'bg-green-50 border-green-200',
          warning: 'bg-yellow-50 border-yellow-200',
          error: 'bg-red-50 border-red-200',
          info: 'bg-blue-50 border-blue-200'
        }[log.type];

        logDiv.className = `p-4 ${bgClass} border rounded-lg`;
        logDiv.innerHTML = `
          <div class="flex items-start space-x-3">
            <i class="fa-solid ${iconClass} text-xl mt-0.5"></i>
            <div class="flex-1">
              <div class="flex items-start justify-between">
                <div>
                  <p class="font-semibold text-gray-800">${log.title}</p>
                  <p class="text-sm text-gray-600 mt-1">${log.description}</p>
                </div>
                <span class="text-xs text-gray-500 whitespace-nowrap ml-4">${log.timestamp}</span>
              </div>
            </div>
          </div>
        `;
        logsList.appendChild(logDiv);
      });
    }

    function filterLogs(filter) {
      currentLogFilter = filter;
      
      // Update button styles
      ['all', 'success', 'warning', 'error'].forEach(f => {
        const btn = document.getElementById(`filter-${f}`);
        if (btn) {
          btn.className = f === filter
            ? 'px-3 py-1.5 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors'
            : 'px-3 py-1.5 text-gray-700 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors';
        }
      });

      renderLogs();
    }

    function clearLogs() {
      if (confirm('Clear all activity logs?')) {
        activityLogs = [];
        renderLogs();
      }
    }

    // Stats
    function updateStats() {
      document.getElementById('stats-files').textContent = stats.filesProcessed;
      document.getElementById('stats-records').textContent = stats.recordsMapped;
      document.getElementById('stats-success').textContent = stats.successRate + '%';
    }

    // Settings
    function saveMapperSettings() {
      const settings = {
        autoMap: document.getElementById('setting-auto-map').checked,
        smartDetect: document.getElementById('setting-smart-detect').checked,
        trim: document.getElementById('setting-trim').checked,
        validate: document.getElementById('setting-validate').checked,
        handleNulls: document.getElementById('setting-nulls').checked
      };

      console.log('Settings saved:', settings);
      showNotification('success', 'Settings Saved', 'Your preferences have been updated');
      addLog('info', 'Settings updated', 'Mapper configuration saved');
    }

    // Update confidence slider
    document.getElementById('confidence-slider')?.addEventListener('input', function(e) {
      document.getElementById('confidence-value').textContent = e.target.value + '%';
    });

    // Notifications
    function showNotification(type, title, message) {
      const notification = document.createElement('div');
      const bgColor = {
        success: 'bg-green-600',
        error: 'bg-red-600',
        warning: 'bg-yellow-600',
        info: 'bg-blue-600'
      }[type];

      notification.className = `fixed top-10 right-4 ${bgColor} text-white p-4 rounded-lg shadow-2xl z-50 animate-pulse`;
      notification.innerHTML = `
        <div class="flex items-center space-x-3">
          <i class="fa-solid fa-check-circle text-2xl"></i>
          <div>
            <p class="font-bold">${title}</p>
            <p class="text-sm">${message}</p>
          </div>
        </div>
      `;
      document.body.appendChild(notification);

      setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.3s ease';
        setTimeout(() => notification.remove(), 300);
      }, 3000);
    }

    // Virus function (placeholder)
    function activateVirus() {
      showNotification('error', 'Virus Detected!', 'Just kidding! This is a demo.');
    }

    // Trash functions (simplified)
    function allowDrop(e) {
      e.preventDefault();
    }

    function trashDragLeave(e) {
      // Reset appearance
    }

    function dropInTrash(e) {
      e.preventDefault();
      // Handle drop
    }

    function openTrashViewer() {
      document.getElementById('trash-viewer').classList.remove('hidden');
    }

    function closeTrashViewer() {
      document.getElementById('trash-viewer').classList.add('hidden');
    }

    function emptyTrash() {
      alert('Trash is empty!');
    }

    // Initialize draggable windows
    makeDraggable('safari-app', 'safari-header');
    makeDraggable('calculator-app', 'calculator-header');
    makeDraggable('notes-app', 'notes-header');
    makeDraggable('photos-app', 'photos-header');
    makeDraggable('settings-app', 'settings-header');
    makeDraggable('files-app', 'files-header');
    makeDraggable('data-mapper-app', 'data-mapper-header');
    makeDraggable('trash-viewer', 'trash-viewer-header');

    // Initialize logs and stats
    renderLogs();
    updateStats();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-gray-800 bg-opacity-80 backdrop-blur-md text-white h-7 flex items-center justify-between px-4">
<div className="flex items-center space-x-4">
<i className="fa-brands fa-apple"></i>
<span className="font-semibold">Finder</span>
<span>File</span>
<span>Edit</span>
<span>View</span>
</div>
<div className="flex items-center space-x-4">
<span id="clock">12:00 PM</span>
<i className="fa-solid fa-wifi" id="wifi-icon"></i>
<i className="fa-solid fa-battery-full"></i>
</div>
</div>

<div className="h-[calc(100vh-7rem)] p-4 relative" id="desktop">

<div className="grid grid-cols-1 gap-6 w-24">
<div className="flex flex-col items-center cursor-pointer" onclick="openApp('safari-app')">
<div className="w-16 h-16 bg-gradient-to-b from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
<i className="fa-solid fa-compass text-white text-3xl"></i>
</div>
<span className="text-white text-xs mt-1 text-center">Safari</span>
</div>
<div className="flex flex-col items-center cursor-pointer" onclick="openApp('calculator-app')">
<div className="w-16 h-16 bg-gradient-to-b from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
<i className="fa-solid fa-calculator text-white text-3xl"></i>
</div>
<span className="text-white text-xs mt-1 text-center">Calculator</span>
</div>
<div className="flex flex-col items-center cursor-pointer" onclick="openApp('notes-app')">
<div className="w-16 h-16 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
<i className="fa-solid fa-note-sticky text-white text-3xl"></i>
</div>
<span className="text-white text-xs mt-1 text-center">Notes</span>
</div>
<div className="flex flex-col items-center cursor-pointer" onclick="openApp('data-mapper-app')">
<div className="w-16 h-16 bg-gradient-to-b from-green-400 to-green-600 rounded-lg flex items-center justify-center">
<i className="fa-solid fa-file-import text-white text-3xl"></i>
</div>
<span className="text-white text-xs mt-1 text-center">Data Mapper</span>
</div>
<div className="flex flex-col items-center cursor-pointer" onclick="openApp('photos-app')">
<div className="w-16 h-16 bg-gradient-to-b from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
<i className="fa-solid fa-image text-white text-3xl"></i>
</div>
<span className="text-white text-xs mt-1 text-center">Photos</span>
</div>
<div className="flex flex-col items-center cursor-pointer" onclick="openApp('settings-app')">
<div className="w-16 h-16 bg-gradient-to-b from-gray-400 to-gray-600 rounded-lg flex items-center justify-center">
<i className="fa-solid fa-gear text-white text-3xl"></i>
</div>
<span className="text-white text-xs mt-1 text-center">Settings</span>
</div>
<div className="flex flex-col items-center cursor-pointer" onclick="openApp('files-app')">
<div className="w-16 h-16 bg-gradient-to-b from-blue-300 to-blue-500 rounded-lg flex items-center justify-center">
<i className="fa-solid fa-folder text-white text-3xl"></i>
</div>
<span className="text-white text-xs mt-1 text-center">Files</span>
</div>
<div className="flex flex-col items-center cursor-pointer" onclick="activateVirus()">
<div className="w-16 h-16 bg-gradient-to-b from-red-500 to-red-700 rounded-lg flex items-center justify-center animate-pulse">
<i className="fa-solid fa-virus text-white text-3xl"></i>
</div>
<span className="text-white text-xs mt-1 text-center">VIRUS.exe</span>
</div>
</div>

<div className="absolute top-4 left-32 grid grid-cols-2 gap-6" id="downloaded-apps"></div>

<div className="absolute bottom-4 right-4 flex flex-col items-center cursor-pointer transition-all" id="trash-bin" onclick="openTrashViewer()" ondragleave="trashDragLeave(event)" ondragover="allowDrop(event)" ondrop="dropInTrash(event)">
<div className="w-20 h-20 bg-gray-700 bg-opacity-80 backdrop-blur-md rounded-xl flex items-center justify-center transition-all hover:scale-110" id="trash-icon-container">
<i className="fa-solid fa-trash text-white text-4xl" id="trash-icon"></i>
</div>
<span className="text-white text-xs mt-2 font-medium">Trash</span>
<span className="hidden absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold" id="trash-count">0</span>
</div>
</div>

<div className="app-window hidden absolute top-20 left-1/2 transform -translate-x-1/2 w-[700px] h-[500px] bg-white rounded-lg shadow-2xl overflow-hidden z-20" id="trash-viewer">
<div className="bg-gray-100 border-b border-gray-200 h-8 flex items-center px-3 cursor-move" id="trash-viewer-header">
<div className="flex space-x-2">
<div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer" onclick="closeTrashViewer()"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500 cursor-pointer" onclick="minimizeApp('trash-viewer')"></div>
<div className="w-3 h-3 rounded-full bg-green-500 cursor-pointer" onclick="maximizeApp('trash-viewer')"></div>
</div>
<div className="mx-auto text-sm text-gray-700 font-medium">Trash</div>
</div>
<div className="h-[calc(100%-2rem)] flex flex-col">
<div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
<div className="flex items-center space-x-2">
<i className="fa-solid fa-trash text-gray-600 text-xl"></i>
<div>
<h2 className="font-semibold text-gray-800">Trash</h2>
<p className="text-xs text-gray-500" id="trash-item-count">0 items</p>
</div>
</div>
<div className="flex space-x-2">
<button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors text-sm" onclick="emptyTrash()">
<i className="fa-solid fa-trash-can mr-2"></i>Empty Trash
          </button>
</div>
</div>
<div className="flex-1 p-4 overflow-y-auto bg-gray-50" id="trash-content">
<div className="flex flex-col items-center justify-center h-full text-gray-400" id="trash-empty-message">
<i className="fa-solid fa-trash text-8xl mb-4 opacity-20"></i>
<p className="text-xl font-semibold">Trash is Empty</p>
<p className="text-sm mt-2">Drag apps here to delete them</p>
</div>
<div className="hidden space-y-2" id="trash-items-list">
</div>
</div>
</div>
</div>

<div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2" id="minimized-tray"></div>

<div className="app-window hidden absolute top-10 left-1/2 transform -translate-x-1/2 w-[1200px] h-[700px] bg-white rounded-lg shadow-2xl overflow-hidden z-10" id="data-mapper-app">
<div className="bg-gradient-to-r from-green-500 to-emerald-600 h-8 flex items-center px-3 cursor-move" id="data-mapper-header">
<div className="flex space-x-2">
<div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer" onclick="closeApp('data-mapper-app')"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500 cursor-pointer" onclick="minimizeApp('data-mapper-app')"></div>
<div className="w-3 h-3 rounded-full bg-green-500 cursor-pointer" onclick="maximizeApp('data-mapper-app')"></div>
</div>
<div className="mx-auto text-sm text-white font-semibold">Data Mapper Pro</div>
</div>
<div className="h-[calc(100%-2rem)] flex">

<div className="w-56 bg-gray-50 border-r border-gray-200 flex flex-col">
<div className="p-4 border-b border-gray-200">
<h2 className="text-lg font-bold text-gray-800">Data Mapper</h2>
<p className="text-xs text-gray-500">Import &amp; Transform Data</p>
</div>
<nav className="flex-1 p-3 space-y-1 overflow-y-auto">
<button className="w-full flex items-center space-x-3 px-3 py-2.5 bg-green-100 text-green-700 rounded-lg font-medium transition-colors" id="nav-upload" onclick="showMapperView('upload')">
<i className="fa-solid fa-upload"></i>
<span>Upload Files</span>
</button>
<button className="w-full flex items-center space-x-3 px-3 py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors" id="nav-mapping" onclick="showMapperView('mapping')">
<i className="fa-solid fa-code-branch"></i>
<span>Field Mapping</span>
</button>
<button className="w-full flex items-center space-x-3 px-3 py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors" id="nav-logs" onclick="showMapperView('logs')">
<i className="fa-solid fa-list-check"></i>
<span>Activity Logs</span>
</button>
<button className="w-full flex items-center space-x-3 px-3 py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors" id="nav-pricing" onclick="showMapperView('pricing')">
<i className="fa-solid fa-dollar-sign"></i>
<span>Pricing</span>
</button>
<button className="w-full flex items-center space-x-3 px-3 py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors" id="nav-mapper-settings" onclick="showMapperView('mapper-settings')">
<i className="fa-solid fa-gear"></i>
<span>Settings</span>
</button>
</nav>

<div className="p-4 border-t border-gray-200 bg-gradient-to-br from-green-50 to-emerald-50">
<div className="space-y-2">
<div className="flex justify-between text-sm">
<span className="text-gray-600">Files Processed</span>
<span className="font-bold text-green-600" id="stats-files">0</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-gray-600">Records Mapped</span>
<span className="font-bold text-green-600" id="stats-records">0</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-gray-600">Success Rate</span>
<span className="font-bold text-green-600" id="stats-success">100%</span>
</div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col overflow-hidden">

<div className="flex-1 overflow-y-auto" id="view-upload">
<div className="p-6">
<div className="mb-6">
<h2 className="text-2xl font-bold text-gray-800 mb-2 tracking-tight">Upload Data Files</h2>
<p className="text-gray-600">Upload CSV, JSON, or Excel files for automatic mapping and transformation</p>
</div>

<div className="upload-area border-2 border-dashed border-gray-300 rounded-xl p-12 text-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer mb-6" id="upload-area" onclick="document.getElementById('file-input').click()" ondragleave="handleDragLeave(event)" ondragover="handleDragOver(event)" ondrop="handleFileDrop(event)">
<input accept=".csv,.json,.xlsx,.xls" className="hidden" id="file-input" multiple="" onchange="handleFileSelect(event)" type="file"/>
<div className="flex flex-col items-center">
<i className="fa-solid fa-cloud-arrow-up text-6xl text-gray-400 mb-4"></i>
<h3 className="text-xl font-semibold text-gray-700 mb-2">Drag &amp; Drop Files Here</h3>
<p className="text-gray-500 mb-4">or click to browse</p>
<div className="flex items-center space-x-2 text-sm text-gray-500">
<span className="px-3 py-1 bg-white border border-gray-300 rounded-full">CSV</span>
<span className="px-3 py-1 bg-white border border-gray-300 rounded-full">JSON</span>
<span className="px-3 py-1 bg-white border border-gray-300 rounded-full">Excel</span>
</div>
</div>
</div>

<div className="hidden" id="uploaded-files-container">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-semibold text-gray-800">Uploaded Files</h3>
<button className="text-sm text-red-600 hover:text-red-700 font-medium" onclick="clearUploadedFiles()">
<i className="fa-solid fa-xmark mr-1"></i>Clear All
                </button>
</div>
<div className="space-y-3" id="uploaded-files-list"></div>
</div>

<div className="grid grid-cols-3 gap-4 mt-6">
<div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
<i className="fa-solid fa-robot text-blue-600 text-2xl mb-2"></i>
<h4 className="font-semibold text-gray-800 mb-1">Auto-Mapping</h4>
<p className="text-xs text-gray-600">AI-powered field detection and mapping</p>
</div>
<div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
<i className="fa-solid fa-wand-magic-sparkles text-purple-600 text-2xl mb-2"></i>
<h4 className="font-semibold text-gray-800 mb-1">Data Transform</h4>
<p className="text-xs text-gray-600">Clean and transform data automatically</p>
</div>
<div className="p-4 bg-green-50 border border-green-200 rounded-lg">
<i className="fa-solid fa-gauge-high text-green-600 text-2xl mb-2"></i>
<h4 className="font-semibold text-gray-800 mb-1">Fast Processing</h4>
<p className="text-xs text-gray-600">Process thousands of records instantly</p>
</div>
</div>
</div>
</div>

<div className="hidden flex-1 flex flex-col overflow-hidden" id="view-mapping">
<div className="p-6 border-b border-gray-200 bg-white">
<div className="flex items-center justify-between mb-4">
<div>
<h2 className="text-2xl font-bold text-gray-800 tracking-tight">Field Mapping</h2>
<p className="text-sm text-gray-600">Map source fields to destination schema</p>
</div>
<div className="flex space-x-2">
<button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors" onclick="autoMapFields()">
<i className="fa-solid fa-wand-magic-sparkles mr-2"></i>Auto-Map
                </button>
<button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-medium transition-colors" onclick="resetMapping()">
<i className="fa-solid fa-rotate-left mr-2"></i>Reset
                </button>
<button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors" onclick="applyMapping()">
<i className="fa-solid fa-check mr-2"></i>Apply Mapping
                </button>
</div>
</div>

<div className="flex items-center space-x-3" id="mapping-file-selector">
<label className="text-sm font-medium text-gray-700">Select File:</label>
<select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm" id="mapping-file-select" onchange="loadFileForMapping()">
<option value="">Choose a file...</option>
</select>
</div>
</div>

<div className="flex-1 overflow-auto p-6 bg-gray-50" id="mapping-canvas">
<div className="flex flex-col items-center justify-center h-full text-gray-400" id="mapping-empty-state">
<i className="fa-solid fa-diagram-project text-6xl mb-4 opacity-50"></i>
<p className="text-xl font-semibold">No File Selected</p>
<p className="text-sm mt-2">Upload a file and select it to start mapping</p>
</div>
<div className="hidden" id="mapping-content">
<div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">

<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
<h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
<i className="fa-solid fa-database text-blue-600 mr-2"></i>
                    Source Fields
                  </h3>
<div className="space-y-2" id="source-fields-list"></div>
</div>

<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
<h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
<i className="fa-solid fa-table text-green-600 mr-2"></i>
                    Destination Schema
                  </h3>
<div className="space-y-2" id="destination-fields-list"></div>
</div>
</div>

<div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-200 p-4">
<h3 className="text-lg font-semibold text-gray-800 mb-3">
<i className="fa-solid fa-eye text-purple-600 mr-2"></i>
                  Data Preview
                </h3>
<div className="overflow-x-auto" id="mapping-preview"></div>
</div>
</div>
</div>
</div>

<div className="hidden flex-1 overflow-y-auto" id="view-logs">
<div className="p-6">
<div className="flex items-center justify-between mb-6">
<div>
<h2 className="text-2xl font-bold text-gray-800 tracking-tight">Activity Logs</h2>
<p className="text-gray-600">View all file processing and mapping activities</p>
</div>
<div className="flex space-x-2">
<button className="px-3 py-1.5 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors" id="filter-all" onclick="filterLogs('all')">All</button>
<button className="px-3 py-1.5 text-gray-700 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors" id="filter-success" onclick="filterLogs('success')">Success</button>
<button className="px-3 py-1.5 text-gray-700 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors" id="filter-warning" onclick="filterLogs('warning')">Warnings</button>
<button className="px-3 py-1.5 text-gray-700 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors" id="filter-error" onclick="filterLogs('error')">Errors</button>
<button className="px-3 py-1.5 bg-red-100 text-red-700 rounded-lg text-sm font-medium hover:bg-red-200 transition-colors" onclick="clearLogs()">
<i className="fa-solid fa-trash mr-1"></i>Clear
                </button>
</div>
</div>

<div className="space-y-3" id="logs-list"></div>

<div className="flex flex-col items-center justify-center py-20 text-gray-400" id="logs-empty-state">
<i className="fa-solid fa-file-lines text-6xl mb-4 opacity-50"></i>
<p className="text-xl font-semibold">No Activity Yet</p>
<p className="text-sm mt-2">Upload and process files to see logs here</p>
</div>
</div>
</div>

<div className="hidden flex-1 overflow-y-auto" id="view-pricing">
<div className="p-6">
<div className="text-center mb-8">
<h2 className="text-3xl font-bold text-gray-800 mb-2 tracking-tight">Choose Your Plan</h2>
<p className="text-gray-600">Select the perfect plan for your data mapping needs</p>
</div>
<div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">

<div className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:shadow-lg transition-shadow">
<div className="text-center mb-6">
<h3 className="text-xl font-bold text-gray-800 mb-2">Free</h3>
<div className="text-4xl font-bold text-gray-900 mb-1">$0</div>
<p className="text-sm text-gray-500">per month</p>
</div>
<ul className="space-y-3 mb-6">
<li className="flex items-start text-sm">
<i className="fa-solid fa-check text-green-600 mt-1 mr-2"></i>
<span className="text-gray-700">Up to 100 records/month</span>
</li>
<li className="flex items-start text-sm">
<i className="fa-solid fa-check text-green-600 mt-1 mr-2"></i>
<span className="text-gray-700">Basic auto-mapping</span>
</li>
<li className="flex items-start text-sm">
<i className="fa-solid fa-check text-green-600 mt-1 mr-2"></i>
<span className="text-gray-700">CSV support</span>
</li>
<li className="flex items-start text-sm">
<i className="fa-solid fa-check text-green-600 mt-1 mr-2"></i>
<span className="text-gray-700">Email support</span>
</li>
<li className="flex items-start text-sm text-gray-400">
<i className="fa-solid fa-xmark mt-1 mr-2"></i>
<span>Advanced transformations</span>
</li>
</ul>
<button className="w-full py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-semibold transition-colors">
                  Current Plan
                </button>
</div>

<div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl border-2 border-green-400 p-6 text-white relative overflow-hidden shadow-xl scale-105">
<div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                  POPULAR
                </div>
<div className="text-center mb-6">
<h3 className="text-xl font-bold mb-2">Pro</h3>
<div className="text-4xl font-bold mb-1">$29</div>
<p className="text-sm opacity-90">per month</p>
</div>
<ul className="space-y-3 mb-6">
<li className="flex items-start text-sm">
<i className="fa-solid fa-check mt-1 mr-2"></i>
<span>Up to 10,000 records/month</span>
</li>
<li className="flex items-start text-sm">
<i className="fa-solid fa-check mt-1 mr-2"></i>
<span>AI-powered auto-mapping</span>
</li>
<li className="flex items-start text-sm">
<i className="fa-solid fa-check mt-1 mr-2"></i>
<span>CSV, JSON, Excel support</span>
</li>
<li className="flex items-start text-sm">
<i className="fa-solid fa-check mt-1 mr-2"></i>
<span>Advanced transformations</span>
</li>
<li className="flex items-start text-sm">
<i className="fa-solid fa-check mt-1 mr-2"></i>
<span>Priority support</span>
</li>
</ul>
<button className="w-full py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Upgrade to Pro
                </button>
</div>

<div className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:shadow-lg transition-shadow">
<div className="text-center mb-6">
<h3 className="text-xl font-bold text-gray-800 mb-2">Enterprise</h3>
<div className="text-4xl font-bold text-gray-900 mb-1">$99</div>
<p className="text-sm text-gray-500">per month</p>
</div>
<ul className="space-y-3 mb-6">
<li className="flex items-start text-sm">
<i className="fa-solid fa-check text-green-600 mt-1 mr-2"></i>
<span className="text-gray-700">Unlimited records</span>
</li>
<li className="flex items-start text-sm">
<i className="fa-solid fa-check text-green-600 mt-1 mr-2"></i>
<span className="text-gray-700">Custom AI models</span>
</li>
<li className="flex items-start text-sm">
<i className="fa-solid fa-check text-green-600 mt-1 mr-2"></i>
<span className="text-gray-700">All file formats</span>
</li>
<li className="flex items-start text-sm">
<i className="fa-solid fa-check text-green-600 mt-1 mr-2"></i>
<span className="text-gray-700">API access</span>
</li>
<li className="flex items-start text-sm">
<i className="fa-solid fa-check text-green-600 mt-1 mr-2"></i>
<span className="text-gray-700">24/7 dedicated support</span>
</li>
</ul>
<button className="w-full py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-semibold transition-colors">
                  Contact Sales
                </button>
</div>
</div>

<div className="mt-12 max-w-6xl mx-auto">
<h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Feature Comparison</h3>
<div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
<table className="w-full text-sm">
<thead className="bg-gray-50">
<tr>
<th className="px-6 py-3 text-left font-semibold text-gray-700">Feature</th>
<th className="px-6 py-3 text-center font-semibold text-gray-700">Free</th>
<th className="px-6 py-3 text-center font-semibold text-green-700">Pro</th>
<th className="px-6 py-3 text-center font-semibold text-gray-700">Enterprise</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-200">
<tr>
<td className="px-6 py-3 text-gray-700">Records per month</td>
<td className="px-6 py-3 text-center text-gray-600">100</td>
<td className="px-6 py-3 text-center text-gray-600">10,000</td>
<td className="px-6 py-3 text-center text-gray-600">Unlimited</td>
</tr>
<tr className="bg-gray-50">
<td className="px-6 py-3 text-gray-700">File formats</td>
<td className="px-6 py-3 text-center text-gray-600">CSV</td>
<td className="px-6 py-3 text-center text-gray-600">CSV, JSON, Excel</td>
<td className="px-6 py-3 text-center text-gray-600">All formats</td>
</tr>
<tr>
<td className="px-6 py-3 text-gray-700">Auto-mapping</td>
<td className="px-6 py-3 text-center"><i className="fa-solid fa-check text-green-600"></i></td>
<td className="px-6 py-3 text-center"><i className="fa-solid fa-check text-green-600"></i></td>
<td className="px-6 py-3 text-center"><i className="fa-solid fa-check text-green-600"></i></td>
</tr>
<tr className="bg-gray-50">
<td className="px-6 py-3 text-gray-700">API Access</td>
<td className="px-6 py-3 text-center"><i className="fa-solid fa-xmark text-gray-400"></i></td>
<td className="px-6 py-3 text-center"><i className="fa-solid fa-xmark text-gray-400"></i></td>
<td className="px-6 py-3 text-center"><i className="fa-solid fa-check text-green-600"></i></td>
</tr>
<tr>
<td className="px-6 py-3 text-gray-700">Support</td>
<td className="px-6 py-3 text-center text-gray-600">Email</td>
<td className="px-6 py-3 text-center text-gray-600">Priority</td>
<td className="px-6 py-3 text-center text-gray-600">24/7 Dedicated</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>

<div className="hidden flex-1 overflow-y-auto" id="view-mapper-settings">
<div className="p-6">
<div className="mb-6">
<h2 className="text-2xl font-bold text-gray-800 tracking-tight">Mapper Settings</h2>
<p className="text-gray-600">Configure your data mapping preferences</p>
</div>
<div className="max-w-3xl space-y-6">

<div className="bg-white rounded-lg border border-gray-200 p-6">
<h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
<i className="fa-solid fa-robot text-blue-600 mr-2"></i>
                  Auto-Mapping Configuration
                </h3>
<div className="space-y-4">
<div className="flex items-center justify-between">
<div>
<p className="font-medium text-gray-700">Enable Auto-Mapping</p>
<p className="text-sm text-gray-500">Automatically detect and map fields</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" id="setting-auto-map" type="checkbox"/>
<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
</label>
</div>
<div className="flex items-center justify-between">
<div>
<p className="font-medium text-gray-700">Smart Field Detection</p>
<p className="text-sm text-gray-500">Use AI to detect field types and formats</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" id="setting-smart-detect" type="checkbox"/>
<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
</label>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Confidence Threshold</label>
<input className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" id="confidence-slider" max="100" min="50" type="range" value="80"/>
<div className="flex justify-between text-xs text-gray-500 mt-1">
<span>50%</span>
<span id="confidence-value">80%</span>
<span>100%</span>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-lg border border-gray-200 p-6">
<h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
<i className="fa-solid fa-cog text-purple-600 mr-2"></i>
                  Data Processing
                </h3>
<div className="space-y-4">
<div className="flex items-center justify-between">
<div>
<p className="font-medium text-gray-700">Trim Whitespace</p>
<p className="text-sm text-gray-500">Remove leading/trailing spaces</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" id="setting-trim" type="checkbox"/>
<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
</label>
</div>
<div className="flex items-center justify-between">
<div>
<p className="font-medium text-gray-700">Validate Data Types</p>
<p className="text-sm text-gray-500">Check data matches expected types</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" id="setting-validate" type="checkbox"/>
<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
</label>
</div>
<div className="flex items-center justify-between">
<div>
<p className="font-medium text-gray-700">Handle Null Values</p>
<p className="text-sm text-gray-500">Convert empty fields to null</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" id="setting-nulls" type="checkbox"/>
<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
</label>
</div>
</div>
</div>

<div className="bg-white rounded-lg border border-gray-200 p-6">
<h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
<i className="fa-solid fa-download text-green-600 mr-2"></i>
                  Export Settings
                </h3>
<div className="space-y-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Default Export Format</label>
<select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
<option>JSON</option>
<option>CSV</option>
<option>Excel</option>
<option>XML</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Date Format</label>
<select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
<option>YYYY-MM-DD</option>
<option>MM/DD/YYYY</option>
<option>DD/MM/YYYY</option>
<option>ISO 8601</option>
</select>
</div>
</div>
</div>

<div className="flex justify-end">
<button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors" onclick="saveMapperSettings()">
<i className="fa-solid fa-save mr-2"></i>Save Settings
                </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="app-window hidden absolute top-20 left-1/2 transform -translate-x-1/2 w-[900px] h-[600px] bg-white rounded-lg shadow-2xl overflow-hidden" id="safari-app">
<div className="bg-gray-100 border-b border-gray-200 h-8 flex items-center px-3 cursor-move" id="safari-header">
<div className="flex space-x-2">
<div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer" onclick="closeApp('safari-app')"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500 cursor-pointer" onclick="minimizeApp('safari-app')"></div>
<div className="w-3 h-3 rounded-full bg-green-500 cursor-pointer" onclick="maximizeApp('safari-app')"></div>
</div>
<div className="mx-auto text-sm text-gray-700 font-medium">Safari</div>
</div>
<div className="h-[calc(100%-2rem)] flex items-center justify-center bg-gray-50">
<div className="text-center">
<i className="fa-solid fa-compass text-gray-300 text-8xl mb-4"></i>
<p className="text-gray-500">Safari Browser</p>
</div>
</div>
</div>

<div className="app-window hidden absolute top-20 left-40 w-64 bg-gray-800 rounded-lg shadow-2xl overflow-hidden" id="calculator-app">
<div className="bg-gray-700 h-8 flex items-center px-3 cursor-move" id="calculator-header">
<div className="flex space-x-2">
<div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer" onclick="closeApp('calculator-app')"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500 cursor-pointer" onclick="minimizeApp('calculator-app')"></div>
<div className="w-3 h-3 rounded-full bg-green-500 cursor-pointer" onclick="maximizeApp('calculator-app')"></div>
</div>
<div className="mx-auto text-sm text-gray-300">Calculator</div>
</div>
<div className="p-4 flex items-center justify-center h-[calc(100%-2rem)]">
<p className="text-white">Calculator</p>
</div>
</div>

<div className="app-window hidden absolute top-40 left-80 w-[500px] h-[400px] bg-white rounded-lg shadow-2xl overflow-hidden" id="notes-app">
<div className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-8 flex items-center px-3 cursor-move" id="notes-header">
<div className="flex space-x-2">
<div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer" onclick="closeApp('notes-app')"></div>
<div className="w-3 h-3 rounded-full bg-yellow-600 cursor-pointer" onclick="minimizeApp('notes-app')"></div>
<div className="w-3 h-3 rounded-full bg-green-500 cursor-pointer" onclick="maximizeApp('notes-app')"></div>
</div>
<div className="mx-auto text-sm text-white font-semibold">Notes</div>
</div>
<div className="p-4 flex items-center justify-center h-[calc(100%-2rem)]">
<p className="text-gray-500">Notes App</p>
</div>
</div>

<div className="app-window hidden absolute top-60 left-60 w-[500px] h-[400px] bg-white rounded-lg shadow-2xl overflow-hidden" id="photos-app">
<div className="bg-gray-100 border-b border-gray-200 h-8 flex items-center px-3 cursor-move" id="photos-header">
<div className="flex space-x-2">
<div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer" onclick="closeApp('photos-app')"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500 cursor-pointer" onclick="minimizeApp('photos-app')"></div>
<div className="w-3 h-3 rounded-full bg-green-500 cursor-pointer" onclick="maximizeApp('photos-app')"></div>
</div>
<div className="mx-auto text-sm text-gray-700 font-medium">Photos</div>
</div>
<div className="p-4 flex items-center justify-center h-[calc(100%-2rem)]">
<p className="text-gray-500">Photos App</p>
</div>
</div>

<div className="app-window hidden absolute top-32 left-96 w-[500px] h-[400px] bg-white rounded-lg shadow-2xl overflow-hidden" id="settings-app">
<div className="bg-gray-200 h-8 flex items-center px-3 cursor-move" id="settings-header">
<div className="flex space-x-2">
<div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer" onclick="closeApp('settings-app')"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500 cursor-pointer" onclick="minimizeApp('settings-app')"></div>
<div className="w-3 h-3 rounded-full bg-green-500 cursor-pointer" onclick="maximizeApp('settings-app')"></div>
</div>
<div className="mx-auto text-sm text-gray-600">System Settings</div>
</div>
<div className="p-4 flex items-center justify-center h-[calc(100%-2rem)]">
<p className="text-gray-500">Settings App</p>
</div>
</div>

<div className="app-window hidden absolute top-20 left-1/2 transform -translate-x-1/2 w-[600px] h-[500px] bg-white rounded-lg shadow-2xl overflow-hidden" id="files-app">
<div className="bg-gray-100 border-b border-gray-200 h-8 flex items-center px-3 cursor-move" id="files-header">
<div className="flex space-x-2">
<div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer" onclick="closeApp('files-app')"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500 cursor-pointer" onclick="minimizeApp('files-app')"></div>
<div className="w-3 h-3 rounded-full bg-green-500 cursor-pointer" onclick="maximizeApp('files-app')"></div>
</div>
<div className="mx-auto text-sm text-gray-700 font-medium">Files</div>
</div>
<div className="p-4 flex items-center justify-center h-[calc(100%-2rem)]">
<p className="text-gray-500">Files App</p>
</div>
</div>

<div className="fixed bottom-2 left-1/2 transform -translate-x-1/2 h-16 bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl px-2 flex items-center space-x-2">
<div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer" onclick="openApp('safari-app')">
<i className="fa-solid fa-compass text-white text-2xl"></i>
</div>
<div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer" onclick="openApp('data-mapper-app')">
<i className="fa-solid fa-file-import text-white text-2xl"></i>
</div>
<div className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer" onclick="openApp('files-app')">
<i className="fa-solid fa-folder text-white text-2xl"></i>
</div>
<div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer" onclick="openApp('photos-app')">
<i className="fa-solid fa-image text-white text-2xl"></i>
</div>
<div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer" onclick="openApp('notes-app')">
<i className="fa-solid fa-note-sticky text-white text-2xl"></i>
</div>
<div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer" onclick="openApp('calculator-app')">
<i className="fa-solid fa-calculator text-white text-2xl"></i>
</div>
<div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer" onclick="openApp('settings-app')">
<i className="fa-solid fa-gear text-white text-2xl"></i>
</div>
</div>


    </>
  );
}
