import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Sample data
    var leads = [
      { id: 1, name: 'Sarah Johnson', email: 'sarah@example.com', status: 'in-progress', progress: 4, company: 'Acme Inc', lastMessage: '2 hours ago', nextScheduled: 'Tomorrow 9:00 AM' },
      { id: 2, name: 'Mike Chen', email: 'mike@example.com', status: 'in-progress', progress: 3, company: 'TechCorp', lastMessage: '5 hours ago', nextScheduled: 'Today 4:00 PM' },
      { id: 3, name: 'Emily Davis', email: 'emily@example.com', status: 'completed', progress: 7, company: 'StartupXYZ', lastMessage: 'Yesterday', nextScheduled: '-' },
      { id: 4, name: 'John Smith', email: 'john@example.com', status: 'new', progress: 0, company: 'BigCo', lastMessage: '-', nextScheduled: 'Pending' },
      { id: 5, name: 'Lisa Wang', email: 'lisa@example.com', status: 'failed', progress: 2, company: 'InnovateLab', lastMessage: '3 days ago', nextScheduled: '-' },
      { id: 6, name: 'David Brown', email: 'david@example.com', status: 'paused', progress: 5, company: 'GlobalTech', lastMessage: '1 week ago', nextScheduled: 'Paused' },
      { id: 7, name: 'Jennifer Lee', email: 'jennifer@example.com', status: 'in-progress', progress: 6, company: 'FutureCorp', lastMessage: '1 hour ago', nextScheduled: 'In 2 days' },
      { id: 8, name: 'Robert Taylor', email: 'robert@example.com', status: 'new', progress: 0, company: 'NewStart', lastMessage: '-', nextScheduled: 'Pending' }
    ];

    var selectedLeads = [];

    // Initialize
    document.addEventListener('DOMContentLoaded', function() {
      renderLeadsTable();
      renderKanban();
      setupEventListeners();
    });

    function setupEventListeners() {
      var selectAll = document.getElementById('select-all-checkbox');
      if (selectAll) {
        selectAll.addEventListener('change', function() {
          toggleAllLeads(this);
        });
      }

      var fileInput = document.getElementById('file-input');
      if (fileInput) {
        fileInput.addEventListener('change', handleFileSelect);
      }

      var dropzone = document.getElementById('dropzone');
      if (dropzone) {
        dropzone.addEventListener('click', function() {
          document.getElementById('file-input').click();
        });
        dropzone.addEventListener('dragover', handleDragOver);
        dropzone.addEventListener('dragleave', handleDragLeave);
        dropzone.addEventListener('drop', handleDrop);
      }
    }

    // Navigation
    function showSection(section) {
      var sections = document.querySelectorAll('main > section');
      for (var i = 0; i < sections.length; i++) {
        sections[i].classList.add('hidden');
      }
      
      var targetSection = document.getElementById('section-' + section);
      if (targetSection) {
        targetSection.classList.remove('hidden');
      }
      
      var navItems = document.querySelectorAll('.nav-item');
      for (var i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove('bg-neutral-800/50', 'text-neutral-100');
        navItems[i].classList.add('text-neutral-400');
      }
      
      var activeBtn = document.querySelector('[data-section="' + section + '"]');
      if (activeBtn) {
        activeBtn.classList.add('bg-neutral-800/50', 'text-neutral-100');
        activeBtn.classList.remove('text-neutral-400');
      }
      
      if (window.innerWidth < 1024) {
        document.getElementById('sidebar').classList.add('-translate-x-full');
      }
    }

    function toggleSidebar() {
      var sidebar = document.getElementById('sidebar');
      sidebar.classList.toggle('-translate-x-full');
    }

    function setView(view) {
      var tableBtn = document.getElementById('view-table');
      var kanbanBtn = document.getElementById('view-kanban');
      
      tableBtn.classList.remove('bg-neutral-800', 'text-neutral-100');
      kanbanBtn.classList.remove('bg-neutral-800', 'text-neutral-100');
      tableBtn.classList.add('text-neutral-400');
      kanbanBtn.classList.add('text-neutral-400');
      
      if (view === 'table') {
        tableBtn.classList.add('bg-neutral-800', 'text-neutral-100');
        tableBtn.classList.remove('text-neutral-400');
        document.getElementById('leads-table-view').classList.remove('hidden');
        document.getElementById('leads-kanban-view').classList.add('hidden');
      } else {
        kanbanBtn.classList.add('bg-neutral-800', 'text-neutral-100');
        kanbanBtn.classList.remove('text-neutral-400');
        document.getElementById('leads-table-view').classList.add('hidden');
        document.getElementById('leads-kanban-view').classList.remove('hidden');
      }
    }

    function renderLeadsTable() {
      var tbody = document.getElementById('leads-table-body');
      if (!tbody) return;
      
      var html = '';
      for (var i = 0; i < leads.length; i++) {
        var lead = leads[i];
        var nameParts = lead.name.split(' ');
        var initials = '';
        for (var j = 0; j < nameParts.length; j++) {
          initials += nameParts[j][0];
        }
        var statusClass = getStatusClass(lead.status);
        var statusLabel = formatStatus(lead.status);
        var progressPct = Math.round((lead.progress / 7) * 100);
        
        html += '<tr class="border-b border-neutral-800 hover:bg-neutral-800/30 transition-colors">';
        html += '<td class="px-4 py-3"><input type="checkbox" onchange="toggleLeadSelection(' + lead.id + ', this)" class="w-4 h-4 rounded bg-neutral-800 border-neutral-600 text-violet-600 focus:ring-violet-500/20"></td>';
        html += '<td class="px-4 py-3 cursor-pointer" onclick="openLeadDetail(' + lead.id + ')">';
        html += '<div class="flex items-center gap-3">';
        html += '<div class="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-xs font-medium">' + initials + '</div>';
        html += '<div><p class="text-sm font-medium">' + lead.name + '</p><p class="text-xs text-neutral-500">' + lead.email + '</p></div>';
        html += '</div></td>';
        html += '<td class="px-4 py-3"><span class="px-2 py-1 rounded text-xs font-medium ' + statusClass + '">' + statusLabel + '</span></td>';
        html += '<td class="px-4 py-3"><div class="flex items-center gap-2"><div class="w-20 h-1.5 bg-neutral-800 rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full" style="width: ' + progressPct + '%"></div></div><span class="text-xs text-neutral-400">' + lead.progress + '/7</span></div></td>';
        html += '<td class="px-4 py-3 text-sm text-neutral-400">' + lead.lastMessage + '</td>';
        html += '<td class="px-4 py-3 text-sm text-neutral-400">' + lead.nextScheduled + '</td>';
        html += '<td class="px-4 py-3 text-sm text-neutral-400">' + lead.company + '</td>';
        html += '<td class="px-4 py-3"><button onclick="event.stopPropagation(); showToast(\'More options\')" class="p-1.5 hover:bg-neutral-700 rounded transition-colors"><span class="iconify w-4 h-4" data-icon="lucide:more-horizontal" data-width="16"></span></button></td>';
        html += '</tr>';
      }
      tbody.innerHTML = html;
    }

    function renderKanban() {
      var statusMap = {
        'new': 'new',
        'in-progress': 'progress',
        'completed': 'completed',
        'failed': 'failed',
        'paused': 'paused'
      };
      
      var statuses = ['new', 'progress', 'completed', 'failed', 'paused'];
      for (var s = 0; s < statuses.length; s++) {
        var status = statuses[s];
        var container = document.getElementById('kanban-' + status);
        if (!container) continue;
        
        var statusLeads = [];
        for (var i = 0; i < leads.length; i++) {
          if (statusMap[leads[i].status] === status) {
            statusLeads.push(leads[i]);
          }
        }
        
        var html = '';
        var max = statusLeads.length > 3 ? 3 : statusLeads.length;
        for (var i = 0; i < max; i++) {
          var lead = statusLeads[i];
          var nameParts = lead.name.split(' ');
          var initials = '';
          for (var j = 0; j < nameParts.length; j++) {
            initials += nameParts[j][0];
          }
          var progressPct = Math.round((lead.progress / 7) * 100);
          
          html += '<div class="p-3 bg-neutral-800/50 border border-neutral-700 rounded-lg hover:border-neutral-600 transition-colors cursor-pointer" onclick="openLeadDetail(' + lead.id + ')">';
          html += '<div class="flex items-center gap-2 mb-2">';
          html += '<div class="w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-xs font-medium">' + initials + '</div>';
          html += '<span class="text-sm font-medium truncate">' + lead.name + '</span>';
          html += '</div>';
          html += '<p class="text-xs text-neutral-500 truncate">' + lead.email + '</p>';
          html += '<div class="flex items-center gap-2 mt-2">';
          html += '<div class="flex-1 h-1 bg-neutral-700 rounded-full overflow-hidden">';
          html += '<div class="h-full bg-violet-500 rounded-full" style="width: ' + progressPct + '%"></div>';
          html += '</div>';
          html += '<span class="text-xs text-neutral-500">' + lead.progress + '/7</span>';
          html += '</div></div>';
        }
        container.innerHTML = html;
      }
    }

    function getStatusClass(status) {
      var classes = {
        'new': 'bg-blue-500/20 text-blue-400',
        'in-progress': 'bg-amber-500/20 text-amber-400',
        'completed': 'bg-emerald-500/20 text-emerald-400',
        'failed': 'bg-red-500/20 text-red-400',
        'paused': 'bg-neutral-600/20 text-neutral-400'
      };
      return classes[status] || '';
    }

    function formatStatus(status) {
      var labels = {
        'new': 'New',
        'in-progress': 'In Progress',
        'completed': 'Completed',
        'failed': 'Failed',
        'paused': 'Paused'
      };
      return labels[status] || status;
    }

    function toggleLeadSelection(id, checkbox) {
      if (checkbox.checked) {
        selectedLeads.push(id);
      } else {
        var index = selectedLeads.indexOf(id);
        if (index > -1) {
          selectedLeads.splice(index, 1);
        }
      }
      updateBulkActions();
    }

    function toggleAllLeads(checkbox) {
      selectedLeads = [];
      if (checkbox.checked) {
        for (var i = 0; i < leads.length; i++) {
          selectedLeads.push(leads[i].id);
        }
      }
      renderulkActions();
    }

    function updateBulkActions() {
      var bulkActions = document.getElementById('bulk-actions');
      var selectedCount = document.getElementById('selected-count');
      
      if (selectedLeads.length > 0) {
        bulkActions.classList.remove('hidden');
        selectedCount.textContent = selectedLeads.length;} else {
        bulkActions.classList.add('hidden');
      }
    }

    function toggleFilterPanel() {
      document.getElementById('filter-panel').classList.toggle('hidden');
    }

    function openUploadModal() {
      var modal = document.getElementById('upload-modal');
      modal.style.display = 'flex';
    }

    function closeUploadModal() {
      var modal = document.getElementById('upload-modal');
      modal.style.display = 'none';
      removeFileDrop(e) {
      e.preventDefault();
      document.getElementById('dropzone').classList.remove('border-violet-500/50');
      var file = e.dataTransfer.files[0];
      processFile(file);
    }

    function handleDragOver(e) {
      e.preventDefault();
      document.getElementById('dropzone').classList.add('border-violet-500/50');
    }

    function handleDragLeave(e) {
      document.getElementById('dropzone').classList.remove('border-violet-500/50');
    }

    function handleFileSelect(e) {
      var file = e.target.files[0];
      processFile(file);
    }

    function processFile(file) {
      if (file) {
        document.getElementById('file-name').textContent = file.name;
        document.getElementById('file-info').textContent = Math.round(file.size / 1024) + ' KB';
        document.getElementById('file-preview').classList.remove('hidden');
        document.getElementById('import-btn').disabled = false;
      }
    }

    function removeFile() {
      document.getElementById('file-preview').classList.add('hidden');
      document.getElementById('import-btn').disabled = true;
      document.getElementById('file-input').value = '';
    }

    function importLeads() {
      showToast('156 leads imported successfully!');
      closeUploadModal();
    }

    function openLeadDetail(id) {
      var lead = null;
      for (var i = 0; i < leads.length; i++) {
        if (leads[i].id === id) {
          lead = leads[i];
          break;
        }
      }
      if (!lead) return;
      
      var nameParts = lead.name.split(' ');
      var initials = '';
      for (var j = 0; j < nameParts.length; j++) {
        initials += nameParts[j][0];
      }
      var progressPct = Math.round((lead.progress / 7) * 100);
      
      document.getElementById('detail-avatar').textContent = initials;
      document.getElementById('detail-name').textContent = lead.name;
      document.getElementById('detail-email').textContent = lead.email;
      document.getElementById('detail-company').value = lead.company;
      document.getElementById('detail-status').textContent = formatdocument.getElementById('detail-status').className = 'px-3 py-1.5 rounded-full text-xs font-medium ' + getStatusClass(lead.status);
      document.getElementById('detail-progress-badge').textContent = 'Message ' + lead.progress + '/7';
      document.getElementById('detail-progress-pct').textContent = progressPct + '%';
      document.getElementById('detail-progress-bar').style.width = progressPct + '%';
      
      document.getElementById('lead-detail-panel').classList.remove('translate-x-full');
      document.getElementById('panel-overlay').classList.remove('hidden');
    }

    function closeLeadDetail() {
      document.getElementById('lead-detail-panel').classList.add('translate-x-full');
      document.getElementById('panel-overlay').classList.add('hidden');
    }

    function closeAllPanels() {
      closeLeadDetail();
    }

    function toggleMessage(num) {
      var content = document.getElementById('message-' + num);
      var chevron = document.getElementById('chevron-' + num);
      content.classList.toggle('hidden');
      if (content.classList.contains('hidden')) {
        chevron.setAttribute('data-icon', 'lucide:chevron-right');
      } else {
        chevron.setAttribute('data-icon', 'lucide:chevron-down');
      }
    }

    function openWorkflowModal() {
      var modal = document.getElementById('workflow-modal');
      modal.style.display = 'flex';
    }

    function closeWorkflowModal() {
      var modal = document.getElementById('workflow-modal');
      modal.style.display = 'none';
    }

    function startWorkflow() {
      closeWorkflowModal();
      showToast('Workflow started successfully!');
    }

    function openAddLeadModal() {
      var modal = document.getElementById('add-lead-modal');
      modal.style.display = 'flex';
    }

    function closeAddLeadModal() {
      var modal = document.getElementById('add-lead-modal');
      modal.style.display = 'none';
    }

    function saveLead() {
      closeAddLeadModal();
      showToast('Lead added successfully!');
    }

    function openFieldModal() {
      var modal = document.getElementById('field-modal');
      modal.style.display = 'flex';
    }

    function closeFieldModal() {
      var modal = document.getElementById('field-modal');
      modal.style.display = 'none';
    }

    function addField() {
      closeFieldModal();
      showToast('Field added successfully!');
    }

    function showToast(message) {
      var toast = document.getElementById('toast');
      document.getElementById('toast-message').textContent = message;
      toast.classList.remove('translate-y-20', 'opacity-0');
      setTimeout(function() {
        toast.classList.add('translate-y-20', 'opacity-0');
      }, 3000);
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<aside className="fixed left-0 top-0 h-full w-64 bg-neutral-900/50 border-r border-neutral-800 flex flex-col z-50 transition-transform lg:translate-x-0 -translate-x-full" id="sidebar">
<div className="p-5 border-b border-neutral-800">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-lg flex items-center justify-center text-sm font-semibold tracking-tight">FC</div>
<span className="text-base font-semibold tracking-tight">FlowCRM</span>
</div>
</div>
<nav className="flex-1 p-3 space-y-1">
<button className="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/50 transition-colors" data-section="dashboard" onclick="showSection('dashboard')">
<span className="iconify w-5 h-5" data-icon="lucide:layout-dashboard" data-width="20"></span>
        Dashboard
      </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-100 bg-neutral-800/50 transition-colors" data-section="leads" onclick="showSection('leads')">
<span className="iconify w-5 h-5" data-icon="lucide:users" data-width="20"></span>
        Leads
      </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/50 transition-colors" data-section="sequences" onclick="showSection('sequences')">
<span className="iconify w-5 h-5" data-icon="lucide:git-branch" data-width="20"></span>
        Sequences
      </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/50 transition-colors" data-section="workflows" onclick="showSection('workflows')">
<span className="iconify w-5 h-5" data-icon="lucide:play-circle" data-width="20"></span>
        Workflows
      </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/50 transition-colors" data-section="fields" onclick="showSection('fields')">
<span className="iconify w-5 h-5" data-icon="lucide:sliders-horizontal" data-width="20"></span>
        Custom Fields
      </button>
</nav>
<div className="p-3 border-t border-neutral-800">
<div className="flex items-center gap-3 px-3 py-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-xs font-medium text-neutral-900">JD</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium truncate">John Doe</p>
<p className="text-xs text-neutral-500 truncate">john@company.com</p>
</div>
</div>
</div>
</aside>

<header className="lg:hidden fixed top-0 left-0 right-0 h-14 bg-neutral-900/80 backdrop-blur-xl border-b border-neutral-800 flex items-center justify-between px-4 z-40">
<button className="p-2 hover:bg-neutral-800 rounded-lg transition-colors" onclick="toggleSidebar()">
<span className="iconify w-5 h-5" data-icon="lucide:menu" data-width="20"></span>
</button>
<div className="flex items-center gap-2">
<div className="w-7 h-7 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-lg flex items-center justify-center text-xs font-semibold tracking-tight">FC</div>
<span className="text-sm font-semibold tracking-tight">FlowCRM</span>
</div>
<div className="w-9"></div>
</header>

<main className="lg:ml-64 pt-14 lg:pt-0 min-h-screen">

<section className="hidden p-4 lg:p-6" id="section-dashboard">-6"&gt;
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
<p className="text-sm text-neutral-400 mt-1">Overview of your workflow performance</p>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
<div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-5">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Total Leads</span>
<span className="iconify w-5 h-5 text-neutral-600" data-icon="lucide:users" data-width="20"></span>
</div>
<pxl font-semibold="" tracking-tight"="">2,847
<p className="text-xs text-emerald-400 mt-1">+12.5% from last month</p>
</pxl></div>
<div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-5">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Active Sequences</span>
<span className="iconify w-5 h-5 text-neutral-600" data-icon="lucide:git-branch" data-width="20"></span>
</div>
<p className="text-2xl font-semibold tracking-tight">1,234</p>
<p className="text-xs text-amber-400 mt-1">847 in progress</p>
</div>
<div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-5">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Messages Sent</span>
<span className="iconify w-5 h-5 text-neutral-600" data-icon="lucide:send" data-width="20"></span>
</div>
<p className="text-2xl font-semibold tracking-tight">18,492</p>
<p className="text-xs text-neutral-400 mt-1">Today: 342</p>
</div>
<div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-5">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Response className="iconify w-5 h-5 text-neutral-600" data-icon="lucide:message-circle" data-width="20"&gt;</span>
</div>
<p className="text-2xl font-semibold tracking-tight">24%</p>
<p className="text-xs text-emerald-400 mt-1">+3.2% improvement</p>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
<div className="lg:col-span-2 bg-neutral-900/50 border border-neutral-800 rounded-xl p-5">
<h3 className="text-sm font-medium mb-4">Recent Activity</h3>
<div className="space-y-3">
<div className="flex items-start gap-3 p-3 bg-neutral-800/30 rounded-lg">
<div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
<span className="iconify w-4 h-4 text-emerald-400" data-icon="lucide:check" data-width="16"></span>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm">Sequence completed for <span className="font-medium">Sarah Johnson</span></p>
<p className="text-xs text-neutral-500 mt-0.5">2 minutes ago</p>
</div>
</div>
<div className="flex items-start gap-3 p-3 bg-neutral-800/30 rounded-lg">
<div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
<span className="iconify w-4 h-4 text-blue-400" data-icon="lucide:send" data-width="16"></span>
</div>
<div className="flex-1 &lt;p class=" text-sm"="">Message 3 sent to <span className="font-medium">Mike Chen</span>
<p className="text-xs text-neutral-500 mt-0.5">5 minutes ago</p>
</div>
</div>
<div className="flex items-start gap-3 p-3 bg-neutral-800/30 rounded-lg">
<div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0">
<span className="iconify w-4 h-4 text-violet-400" data-icon="lucide:d" data-width="16"></span>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm"><span className="font-medium">156 leads</span> imported from CSV</p>
<p className="text-xs text-neutral-500 mt-0.5">23 minutes ago</p>
</div>
</div>
</div>
</div>
<div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-5">
<h3 className="text-sm font-medium mb-4">Lead Status</h3>
<div className="space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-blue-400"></div>
<span className="text-sm text-neutral-400">New</span>
</div>
<span className="text-sm font-medium">423</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-amber-400"></div>
<span className="text-sm text-neutral-400">In Progress</span>
</div>
<span className="text-sm font-medium">847</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-400"></div>
<span className="text-sm text-neutral-400">Completed</span>
</div>
<span className="text-sm font-medium">1,392</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-red-400"></div>
<span className="text-sm text-neutral-400">Failed</span>
</div>
<span className="text-sm font-medium">89</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-neutral-500"></div>
<span className="text-sm text-neutral-400">Paused</span>
</div>
<span className="text-sm font-medium">96</span>
</div>
</div>
</div>
</div>
</section>

<section className="p-4 lg:p-6" id="section-leads">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
<div>
<h1 className="text-2xl font-semibold tracking-tight">Leads</h1>
<p className="text-sm text-neutral-400 mt-1">Manage and track your lead database</p>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-4 py-2.5 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-lg text-sm font-medium transition-colors" onclick="openUploadModal()">
<span className="iconify w-4 h-4" data-icon="lucide:upload" data-width="16"></span>
            Upload
          </button>
<button className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 rounded-lg text-sm font-medium transition-all" onclick="openAddLeadModal()">
<span className="iconify w-4 h-4" data-icon="lucide:plus" data-width="16"></span>
            Add Lead
          </button>
</div>
</div>

<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
<div className="flex items-center gap-3 flex-wrap">
<div className="relative">
<span className="iconify absolute left/2 -w-4 h-4 text-neutral-500" data-icon="lucide:search" data-width="16"></span>
<input className="w-64 pl-10 pr-4 py-2 bg-neutral-900/50 border border-neutral-800 rounded-lg text-sm placeholder-neutral-500 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-colors" placeholder="Search leads..." type="text"/>
</div>
<button className="flex items-center gap-2 px-3 py-2 bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 rounded-lg text-sm transition-colors" onclick="toggleFilterPanel()">
<span className="iconify w-4 h-4" data-icon="lucide:filter" data-width="16"></span>
            Filters
          </button>
<div className="flex items-center gap-1 p-1 bg-neutral-900/50 border border-neutral-800 rounded-lg">
<button className="p-1.5 rounded bg-neutral-800 text-neutral-100 transition-colors" id="view-table" onclick="setView('table')">
<span className="iconify w-4 h-4" data-icon="lucide:table-2" data-width="16"></span>
</button>
<button className="p-1.5 rounded text-neutral-400 hover:text-neutral-100 transition-colors" id="view-kanban" onclick="setView('kanban')">
<span className="iconify w-4 h-4" data-icon="lucide:kanban" data-width="16"></span>
</button>
</div>
</div>
<div className="flex items-center gap-3">
<span className="text-sm text-neutral-500">2,847 leads</span>
<button className="flex items-center gap-2 px-3 py-2 bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 rounded-lg text-sm transition-colors">
<span className="iconify w-4 h-4" data-icon="lucide:download" data-width="16"></span>
            Export
          </button>
</div>
</div>

<div className="hidden mb-4 p-4 bg-neutral-900/50 border border-neutral-800 rounded-xl" id="filter-panel">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium">Advanced Filters</h3>
<button className="text-neutral-400 hover:text-neutral-100 transition-colors" onclick="toggleFilterPanel()">
<span className="iconify w-4 h-4" data-icon="lucide:x" data-width="16"></span>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1.5">Status</label>
<select className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-sm focus:outline-none focus:border-violet-500/50">
<option value="">All statuses</option>
<option value="new">New</option>
<option value="in-progress">In Progress</option>
<option value="completed">Completed</option>
<option value="failed">Failed</option>
<option value="paused">Paused</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1.5">Current Message</label>
<select className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-sm focus:outline-none focus:border-violet-500/50">
<option value="">Any message</option>
<option value="1">Message 1</option>
<option value="2">Message 2</option>
<option value="3">Message 3</option>
<option value="4">Message 4</option>
<option value="5">Message 5</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1.5">Date Added</label>
<input className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-sm focus:outline-none focus:border-violet-500/50" type="date"/>
</div>
<div classd="" gap-2"="">
<button className="flex-1 px-4 py-2 bg-violet-600 hover:bg-violet-500 rounded-lg text-sm font-medium transition-colors">Apply</button>
<button className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-sm font-medium transition-colors">Clear</button>
</div>
</div>
</div>

<div className="hidden mb-4 p-3 bg-violet-600/10 border border-violet-500/30 rounded-xl flex items-center justify-between" id="bulk-actions">
<div className="flex items-center gap-3">
<span className="text-sm"><span id="selected-count">0</span> leads selected</span>
<button className="text-sm text-violet-400 hover:text-violet-300 transition-colors">Select all</button>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-xs font-medium transition-colors">Update Status</button>
<button className="px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-xs font-medium transition-colors">Start Sequence</button>
<button className="px-3 py-1.5 bg-red-600/20 text-red-400 hover:bg-red-600/30 rounded-lg text-xs font-medium transition-colors">Delete</button>
</div>
</div>

<div className="bg-neutral-900/50 border border-neutral-800 rounded-xl overflow-hidden" id="leads-table-view">
<div className="overflow-x-auto">
<table className="w-full">
<thead>
<tr className="border-b border-neutral-800">
<th className="w-12 px-4 py-3 text-left">
<input className="w-4 h-4 rounded bg-600 text-violet-600 focus:ring-violet-500/20" id="select-all-checkbox" type="checkbox"/>
</th>
<th className="px-4 py-3 text-left text-xs font-medium text-neutral-400 uppercase tracking-wide">Lead</th>
<th className="px-4 py-3 text-left text-xs font-medium text-neutral-400 uppercase tracking-wide">Status</th>
<th className="px-4 py-3 text-left text-xs font-medium text-neutral-400 uppercase tracking-wide">Progress</th>
<th className="px-4 py-3 text-left text-xs font-medium text-neutral-400 uppercase tracking-wide">Last Message</th>
<th className="px-4 py-3 text-left text-xs font-medium text-neutral-400 uppercase tracking-wide">Next Scheduled</th>
<th className="px-4 py-3 text-left text-xs font-medium text-neutral-400 uppercase tracking-wide">Company</th>
<th className="w-12 px-4 py-3"></th>
</tr>
</thead>
<tbody id="leads-table-body">
</tbody>
</table>

<div className="px-4 py-3 border-t border-neutral-800 flex items-center justify-between">
<span className="text-sm text-neutral-400">Showing 1-8 of 2,847</span>
<div className="flex items-center gap-1">
<button class-2="" disabled="" disabled:opacity-50"="" hover:bg-neutral-800="" rounded-lg="" transition-colors="">
<span className="iconify w-4 h-4" data-icon="lucide:chevron-left" data-width="16"></span>
</button>
<button className="px-3 py-1.5 bg-violet-600 rounded-lg text-sm font-medium">1</button>
<button className="px-3 py-1.5 hover:bg-neutral-800 rounded-lg text-sm font-medium transition-colors">2</button>
<button className="px-3 py-1.5 hover:bg-neutral-800 rounded-lg text-sm font-medium transition-colors">3</button>
<span className="px-2 text-neutral-500">...</span>
<button className="px-3 py-1.5 hover:bg-neutral-800 rounded-lg text-sm font-medium transition-colors">114</button>
<button className="p-2 hover:bg-neutral-800 rounded-lg transition-colors">
<span className="iconify w-4 h-4" data-icon="lucide:chevron-right" data-width="16"></span>
</button>
</div>
</div>
</div>

<div className="hidden" id="leads-kanban-view">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
<div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-3">
<div className="flex items-center justify-between mb-3 px-1">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-blue-400"></div>
<span className="text-sm font-medium">New</span>
</div>
<span className="text-xs text-neutral-500">423</span>
</div>
<div className="space-y-2" id="kanban-new"></div>
</div>
<div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-3">
<div className="flex items-center justify-between mb-3 px-1">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-amber-400"></div>
<span className="text-sm font-medium">In Progress</span>
</div>
<span className="text-xs text-neutral-500">847</span>
</div>
<div className="space-y-2" id="kanban-progress"></div>
</div>
<div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-3">
<div className="flex items-center justify-between mb-3 px=" flex="" gap-2"="" items-center="">
<div className="w-2 h-2 rounded-full bg-emerald-400"></div>
<span className="text-sm font-medium">Completed</span>
</div>
<span className="text-xs text-neutral-500">1,392</span>
</div>
<div className="space-y-2" id="kanban-completed"></div>
</div>
<div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-3">
<div className="flex items-center justify-between mb-3 px-1">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-red-400"></div>
<span className="text-sm font-medium">Failed</span>
</div>
<span className="text-xs text-neutral-500">89</span>
</div>
<div className="space-y-2" id="kanban-failed"></div>
</div>
<div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-3">
<div className="flex items-center justify-between mb-3 px-1">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-neutral-500"></div>
<span className="text-sm font-medium">Paused</span>
</div>
<span className="text-xs text-neutral-500">96</span>
</div>
<div className="space-y-2" id="kanban-paused"></div>
</div>
</div>
</div>
</section>

<section className="hidden p-4 lg:p-6" id="section-sequences">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
<div>
<h1 className="text-2xl font-semibold tracking-tight">Message Sequences</h1>
<p className="text-sm text-neutral-400 mt-1">Configure automated message sequences</p>
</div>
<button className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 rounded-lg text-sm font-medium transition-all" onclick="showToast('New sequence modal opened')">
<span className="iconify w-4 h-4" data-icon="lucide:plus" data-width="16"></span>
          New Sequence
        </button>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
<div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-5 hover:border-neutral-700 transition-colors cursor-pointer">
<div className="flex items-start justify-between mb-4">
<div>
<h3 className="text-base font-medium">Welcome Sequence</h3>
<p className="text-sm text-neutral-400 mt-0.5">7 messages over 14 days</p>
</div>
<span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded text-xs font-medium">Active</span>
</div>
<div className="flex items-center gap-4 mb-4">
<div className="flex-1">
<div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full w-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"></div>
</div>
</div>
<span className="text-xs text-neutral-400">7/7 messages</span>
</div>
<div className="flex items-center gap-6 text-sm text-neutral-400">
<span>1,234 leads enrolled</span>
<span>847 in progress</span>
</div>
</div>
<div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-5 hover:border-neutral-700 transition-colors cursor-pointer">
<div className="flex items-start justify-between mb-4">
<div>
<h3 className="text-base font-medium">Re-engagement Campaign</h3>
<p className="text-sm text-neutral-400 mt-0.5">5 messages over 10 days</p>
</div>
<span className="px-2 py-1 bg-neutral-600/20 text-neutral-400 rounded text-xs font-medium">Draft</span>
</div>
<div className="flex items-center gap-4 mb-4">
<div className="flex-1">
<div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full w-3/5 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"></div>
</div>
</div>
<span className="text-xs text-neutral-400">3/5 messages</span>
</div>
<div className="flex items-center gap-6 text-sm text-neutral-400">
<span>0 leads enrolled</span>
<span>Not started</span>
</div>
</div>
</div>

<div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
<div className="p-5 border-b border-neutral-800">
<div className="flex items-center justify-between">
<div>
<h2 className="text-xl font-semibold tracking Sequence&lt;/h2&gt; &lt;p class=" mt-0.5"="" text-neutral-400="" text-sm="">Total duration: 14 days
</h2></div>
<div className="flex items-center gap-3">
<button className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-sm font-medium transition-colors">Preview</button>
<button className="px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 rounded-lg text-sm font-medium transition-all" onclick="showToast('Sequence saved!')">Save Sequence</button>
</div>
</div>
</div>

<div className="p-5">
<div className="space-y-0">

<div className="relative pl-8">
<div className="absolute left-3 top-0 bottom-0 w-0.5 bg-neutral-800"></div>
<div className="absolute left-1 top-6 w-5 h-5 rounded-full bg-violet-600 flex items-center justify-center text-xs font-medium z-10">1</div>
<div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-4 mb-2">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-3">
<h4 className="text-sm font-medium">Message 1</h4>
<span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded text-xs">Enabled</span>
</div>
<div className="flex items-center gap-2">
<button className="p-1.5 hover:bg-neutral-700 rounded transition-colors">
<span className="iconify w-4 h-4" data-icon="lucide:copy" data-width="16"></span>
</button>
<button className="p-1.5 hover:bg-neutral-700 rounded transition-colors" onclick="toggleMessage(1)">
<span className="iconify w-4 h-4" data-icon="lucide:chevron-down" data-width="16" id="chevron-1"></span>
</button>
</div>
</div>
<div className="space-y-3" id="message-1">
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1.5">Subject Line</label>
<input className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-sm focus:outline-none focus:border-violet-500/50" type="text" value="Welcome to {{company}}!"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1.5">Message Content</label>
<textarea className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-sm focus:outline-none focus:border-violet-500/50 resize-none" rows="4">Hi}},

Welcome! We're excited to have you on board. Here's what you can expect from us over the next few days...

Best,
The Team</textarea>
</div>
</div>
</div>

<div className="flex items-center gap-3 py-3 pl-4">
<span className="iconify w-4 h-4 text-neutral-500" data-icon="lucide:clock" data-width="16"></span>
<span className="text-xs text-neutral-500">Wait</span>
<input className="w-16 py-1 bg-neutral-800 border border-neutral-700 rounded text-sm text-center focus:outline-none focus:border-violet-500/50" type="number" value="1"/>
<select className="px-2 py-1 bg-neutral-800 border border-neutral-700 rounded text-sm focus:outline-none focus:border-violet-500/50">
<option selected="" value="days">days</option>
<option value="hours">hours</option>
</select>
<span className="text-xs text-neutral-500">before next message</span>
</div>
</div>

<div className="relative pl-8">
<div className="absolute left-3 top-0 bottom-0 w-0.5 bg-neutral-800"></div>
<div className="absolute left-1 top-6 w-5 h-5 rounded-full bg-violet-600 flex items-center justify-center text-xs font-medium z-10">2</div>
<div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-4 mb-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<h4 className="text-sm font-medium">Message 2</h4>
<span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded text-xs">Enabled</span>
</div>
<div className="flex items-center gap-2">
<button className="p-1.5 hover:bg-neutral-700 rounded transition-colors">
<span className="iconify w-4 h-4" data-icon="lucide:copy" data-width="16"></span>
</button>
<button className="p-1.5 hover:bg-neutral-700 rounded transition-colors" onclick="toggleMessage(2)">
<span className="iconify w-4 h-4" data-icon="lucide:chevron-right" data-width="16" id="chevron-2"></span>
</button>
</div>
</div>
<div block="" className="hidden space-y-3 &lt;div&gt; &lt;label class=" font-medium="" id="message-2" mb-1.5"="" text-neutral-400="" text-xs="">Subject Line
<input className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-sm focus:outline-none focus:border-violet-500/50" type="text" value="Getting Started Tips"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1.5">Message Content</label>
<textarea className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-sm focus:outline-none focus:border-violet-500/50 resize-none" rows="4">Hi {{firstName}},

Here are some tips to get you started...</textarea>
</div>
</div>
</div>
</div>

<div className="pl-8 pt-4">
<button className="flex items-center gap-2 px-4 py-2 border border-dashed border-neutral-700 hover:border-neutral-600 rounded-xl text-sm text-neutral-400 hover:text-neutral-300 transition-colors w-full justify-center" onclick="showToast('Add message clicked')">
<span className="iconify w-4 h-4" data-icon="lucide:plus" data-width="16"></span>
                Add Message (5 remaining)
              </button>
</div>
</div>
</div>

</section>

<section className="hidden p-4 lg:p-6" id="section-workflows">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
<div>
<h1 className="text-2xl font-semibold tracking-tight">Workflows</h1>
<p className="text-sm text-neutral-400 mt-1">Start and manage workflow executions</p>
</div>
</div>

<div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 mb-6">
<h3 className="text-lg font-medium tracking-tight mb-4">Start New Workflow</h3>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-neutral-300 mb-2">Select Sequence</label>
<select className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-sm focus:outline-none focus:border-violet-500/50">
<option value="">Choose a sequence...</option>
<option value="1">Welcome Sequence (7 messages, 14 days)</option>
<option value="2">Re-engagement Campaign (5 messages, 10 days)</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-neutral-300 mb-2">Select Leads</label>
<select className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-sm focus:outline-none focus:border-violet-500/50">
<option value="all">All leads (2,847)</option>
<option value="new">New leads only (423)</option>
<option value="filtered">Current (156)</option>
</select>
</div>
</div>
<div className="mt-6 p-4 bg-neutral-800/50 rounded-xl">
<h4 className="text-sm font-medium mb-3">Workflow Summary</h4>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div>
<p className="text-xs text-neutral-500">Leads to process</p>
<p className="text-lg font-semibold">2,847</p>
</div>
<div>
<p className="text-xs text-neutral-500">Messages per lead</p>
<p className="text-lg font-semibold">7</p>
</div>
<div>
<p className="text-xs text-neutral-500">Total messages</p>
<p className="text-lg font-semibold">19,</p>
</div>
<div>
<p className="text-xs text-neutral-500">Est. completion</p>
<p className="text-lg font-semibold">14 days</p>
</div>
</div>
</div>
<div className="mt-6 flex items-center justify-end gap-3">
<button className="px-4 py-2.5 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-sm font-medium transition-colors">Schedule for Later</button>
<button className="flex items-center gap-2 px-6 py-2.5 bg-gradient-toto-indigo-600 hover:from-violet-500 hover:to-indigo-500 rounded-lg text-sm font-medium transition-all" onclick="openWorkflowModal()">
<span className="iconify w-4 h-4" data-icon="lucide:play" data-width="16"></span>
            Start Workflow
          </button>
</div>
</div>

<h3 className="text-lg font-medium tracking-tight mb-4">Active Workflows</h3>
<div className="space-y-3">
<div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-4">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
<span className="iconify w-5 h-5 text-amber-400 animate-spin" data-icon="lucide:loader-" data-width="20"></span>
</div>
<div>
<h4 className="text-sm font-medium">Welcome Sequence - Batch #</h4>
<p className="text-xs text-neutral-500">Started 2 hours ago</p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="p-2 hover:bg-neutral-800 rounded-lg transition-colors" onclick="showToast('Workflow paused')" title="Pause">
<span className="iconify w-4 h-4" data-icon="lucide:pause" data-width="16"></span>
</button>
<button className="p-2 hover:bg-neutral-800 rounded-lg transition-colors" onclick="showToast('Workflow stopped')" title="Stop">
<span className="iconify w-4 h-4 text-red-400" data-icon="lucide:square" data-width="16"></span>
</button>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex-1">
<div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full transition-all" style={{width: '34%'}}></div>
</div>
</div>
<span className="text-sm text-neutral-400">847 / 2,500 leads</span>
</div>
<div className="flex items-center gap-6 mt-3 text-xs text-neutral-500">
<span>342 messages sent today</span>
<span>Est. 12 hours remaining</span>
</div>
</div>
</div>
</section>

<section className="hidden p-4 lg:p-6" id="section-fields">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
<div>
<h1 className="text-2xl font-semibold tracking-tight">Custom Fields</h1>
<p className="text-sm text-neutral-400 mt-1">Manage custom fields for your leads</p>
</div>
<button className="flex items-center gap-2 px-4 py-2.r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 rounded-lg text-sm font-medium transition-all" onclick="openFieldModal()">
<span className="iconify w-4 h-4" data-icon="lucide:plus" data-width="16"></span>
          Add Field
        </button>
</div>

<div className="mb-8">
<h3 className="text-sm font-medium text-neutral-400 mb-3 px-1">System Fields</h3>
<div className="bg-neutral-900/50 border border-neutral-800 rounded-xl overflow-hidden">
<div className="divide-y divide-neutral-800">
<div className="flex items-center justify-between p-4">
<div className="flex items-center gap-3">
<span className="iconify w-4 h-4 text-neutral-500" data-icon="lucide:user" data-width="16"></span>
<div>
<p className="text-sm font-medium">First Name</p>
<p className="text-xs text-neutral-500">Text • Required</p>
</div>
</div>
<span className="text-xs text-neutral-500">System field</span>
</div>
<div className="flex items-center justify-between p-4">
<div className="flex items-center gap-3">
<span className="iconify w-4 h-4 text-neutral-500" data-icon="lucide:user" data-width="16"></span>
<div>
<p className="text-sm font-medium">Last Name</p>
<p className="text-xs text-neutral-500">Text • Required</p>
</div>
</div>
<span className="text-xs text-neutral-500">System field</span>
</div>
<div className="flex items-center justify-between p-4">
<div className="flex items-center gap-3">
<span className="iconify w-4 h-4 text-neutral-500" data-icon="lucide:mail" data-width="16"></span>
<div>
<p className="text-sm font-medium">Email</p>
<p className="text-xs text-neutral-500">Email • Required</p>
</div>
</div>
<span className="text-xs text-neutral-500">System field</span>
</div>
</div>
</div>
</div>

<div>
<h3 className="text-sm font-medium text-neutral-400 mb-3 px-1">Custom Fields</h3>
<div className="bg-neutral-900/50 border border-neutral-800 rounded-xl overflow-hidden">
<div className="divide-y divide-neutral-800">
<div className="flex items-center justify-between p-4 group hover:bg-neutral-800/30 transition-colors">
<div className="flex items-center gap-3">
<span className="iconify w-4 h-4 text-neutral-500" data-icon="lucide:grip-vertical" data-width="16"></span>
<span className="iconify w-4 h-4 text-violet data-icon=" lucide:building-2="">
<div>
<p className="text-sm font-medium">Company</p>
<p className="text-xs text-neutral-500">Text • Optional</p>
</div>
</span></div>
<div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 hover:bg-neutral-700 rounded transition-colors" onclick="showToast('Edit field')">
<span className="iconify w-4 h-4" data-icon="lucide:pencil" data-width="16"></span>
</button>
<button className="p-1.5 hover:bg-neutral-700 rounded text-red-400 transition-colors" onclick="showToast('Delete field')">
<span className="iconify w-4 h-4" data-icon="lucide:trash-2" data-width="16"></span>
</button>
</div>
</div>
<div className="flex items-center justify-between p-4 group hover:bg-neutral-800/30 transition-colors">
<div className="flex items-center gap-3">
<span className="iconify w-4 h-4 text-neutral-500" data-icon="lucide:grip-vertical" data-width="16"></span>
<span className="iconify w-4 h-4 text-emerald-400" data-icon="lucide:tag" data-width="16"></span>
<div>
<p className="text-sm font-medium">Industry</p>
<p className="text-xs text-neutral-500">Select • Optional</p>
</div>
</div>
<div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 hover:bg-neutral-700 rounded transition-colors" onclick="showToast('Edit field')">
<span className="iconify w-4 h-4" data-icon="lucide:pencil" data-width="16"></span>
</button>
<button className="p-1.5 hover:bg-neutral-700 rounded text-red-400 transition-colors" onclick="showToast('Delete field')">
<span className="iconify w-4 h-4" data-icon="lucide:trash-2" data-width="16"></span>
</button>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" id="upload-modal" style={{display: 'none'}}>
<div className="bg-neutral-900 border border-neutral-800 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
<div className="p-5 -b border-neutral-800 flex items-center justify-between">
<h2 className="text-lg font-semibold tracking-tight">Upload Leads</h2>
<button className="p-2 hover:bg-neutral-800 rounded-lg transition-colors" onclick="closeUploadModal()">
<span className="iconify w-5 h-5" data-icon="lucide:x" data-width="20"></span>
</button>
</div>
<div className="p-5">
<div className="border-2 border-dashed border-neutral-700 rounded-xl p-10 text-center hover:border-violet-500/50 transition-colors cursor-pointer" id="dropzone">
<input accept=".csv,.xlsx,.xls" className="hidden" id="file-input" type="file"/>
<div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neutral-800 flex items-center justify-center">
<span className="iconify w-8 h-8 text-neutral-400" data-icon="lucide:upload-cloud" data-width="32"></span>
</div>
<p className="text-base font-medium mb-1">Drop your file here, or browse</p>
<p className="text-sm text-neutral-500">Supports CSV, XLSX, XLS (max 10MB)</p>
</div>
<div className="hidden mt-4 p/50 rounded-xl" id="file-preview">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
<span className="iconify w-5 h-5 text-emerald-400" data-icon="lucide:file-spreadsheet" data-width="20"></span>
</div>
<div>
<p className="text-sm font-medium" id="file-name">leads.csv</p>
<p className="p-2 hover:bg-neutral-700 rounded-lg transition-colors" id="file-info rows • 12 columns&lt;/p&gt;
              &lt;/div&gt;
            &lt;/div&gt;
            &lt;button onclick=" removefile()"="">
<span className="iconify w-4 h-4" data-icon="lucide:x" data-width="16"></span>

</p></div>
</div>
</div>
<div className="p-5 border-t border-neutral-800 flex items-center justify-end gap-3">
<button className="px-4 py-2.5 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-sm font-medium transition-colors" onclick="closeUploadModal()">Cancel</button>
<button className="px-6 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 rounded-lg text-sm font-medium transition-all disabled:opacity-50" disabled="" id="import-btn" onclick="importLeads()">Import</button>
</div>
</div>
</div>

<div className="fixed inset-y-0 right-0 w-full max-w-lg bg-neutral-900 border-l border-neutral-800 z-50 transform translate-x-full transition-transform duration-300" id="lead-detail-panel">
<div className="h-full flex flex-col">
<div className="p-5 border-b border-neutral-800 flex items-center justify-between">
<h2 className="text-lg font-semibold tracking-tight">Lead Details</h2>
<button className="p-2 hover:bg-neutral-800 rounded-lg transition-colors" onclick="closeLeadDetail()">
<span className="iconify w-5 h-5" data-icon="lucide:x" data-width="20"></span>
</button>
</div>
<div className="flex-1 overflow-y-auto p-5">
<div className="flex items-center gap-4 mb-6">
<div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-xl font-semibold" id="detail-avatar">SJ</div>
<div>
<h3 className="text-xl font-semibold tracking-tight" id="detail-name">Sarah Johnson</h3>
<p className="text-sm text-neutral-400" id="detail-email">sarah@example.com</p>
</div>
</div>
<div className="flex items-center gap-2 mb-6">
<span className="px-3 py-1.5 bg-neutral-800 text-neutral-300 rounded-full text-xs font-medium" detail-progress-badge"="" id="detail-status">Message 4/7</span>
</div>
<div className="mb=" flex="" items-center="" justify-between="" mb-2"="">
<span className="text-sm font-medium">Sequence Progress</span>
<span className="text-sm text-neutral-400" id="detail-progress-pct">57%</span>
</div>
<div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full" id="detail-progress-bar" style={{width: '57%'}}></div>
</div>
</div>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1.5">Phone</label>
<input className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-sm focus:outline-none focus:border-violet-500/50" type="text" value="+1 (555) 123-4567"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1.5">Company</label>
<input className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-sm focus:outline-none focus:border-violet-500/50" id="detail-company" type="text" value="Acme Inc"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1.5">Notes</label>
<textarea className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-sm focus:outline-none focus:border-violet-500/50 resize-none" placeholder="Add notes..." rows="3"></textarea>
</div>
</div>
<div className="mt-8">
<h4 className="text-sm font-medium mb-4">Activity</h4>
<div className="space-y-4">
<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
<span className="iconify w-4 h-4 text-blue-400" data-icon="lucide:send" data-width="16"></span>
</div>
<div>
<p className="text-sm">Message 4 sent</p>
<p className="text-xs text-neutral-500">Today at 2:34 PM</p>
</div>
</div>
<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
<span className="iconify w-4 h-4 text-emerald-400" data-icon="lucide:mail-open" data-width="16"></span>
</div>
<div>
<p className="text-sm">Message 3 opened</p>
<p className="text-xs text-neutral-500">Yesterday at 10:15 AM</p>
</div>
</div>
</div>
</div>
</div>
<div className="p-5 border-t border-neutral-800 flex items-center gap-3">
<button className="flex-1 px-4 py-2.5 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-sm font-medium transition-colors" onclick="showToast('Lead paused')">
<span className="flex items-center justify-center gap-2">
<span className="iconify w-4 h-4" data-icon="lucide:pause" data-width="16"></span>
            Pause
          </span>
</button>
<button className="flex-1 px-4 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 rounded-lg text-sm font-medium transition-all" onclick="showToast('Changes saved'); closeLeadDetail()">
          Save Changes
        </button>
</div>
</div>
</div>

<div className="fixed inset-0 bg-black/40 z-40 hidden" id="panel-overlay" onclick="closeAllPanels()"></div>

<div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" id="workflow-modal" style={{display: 'none'}}>
<div className="bg-neutral-900 border border-neutral-800 rounded-2xl w-full max-w-md">
<div className="p-6 text-center">
<div className="w-16 h-16 mx-auto mb-4 rounded-full bg-violet-500/20 flex items-center justify-center">
<span className="iconify w-8 h-8 text-violet-400" data-icon="lucide:play-circle" data-width="32"></span>
</div>
<h2 className="text-xl font-semibold tracking-tight mb-2">Start Workflow?</h2>
<p className="text-sm text-neutral-400 mb-6're about to start the Welcome Sequence for 2,847 leads. This will send up to 19,929 messages over 14 days.&lt;/p&gt; &lt;div class=" flex="" gap-3"="" items-center="">
<button className="flex-1 px-4 py-2.5 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-sm font-medium transition-colors" onclick="closeWorkflowModal()">Cancel</button>
<button className="flex-1 px-4 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 rounded-lg text-sm font-medium transition-all" onclick="startWorkflow()">
<span className="flex items-center justify-center gap-2">
<span className="iconify w-4 h-4" data-icon="lucide:play" data-width="16"></span>
              Start Now
            </span>
</button>
</p></div>
</div>
</div>
</div>

<div id="fiel-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" style={{display: 'none'}}>
<div className="bg-neutral-900 border border-neutral-800 rounded-2xl w-full max-w-md">
<div className="p-5 border-b border-neutral-800 flex items-center justify-between">
<h2 className="text-lg font-semibold tracking-tight">Add Custom Field</h2>
<button className="p-2 hover:bg-neutral-800 rounded-lg transition-colors" onclick="closeFieldModal()">
<span className="iconify w-5 h-5" data-icon="lucide:x" data-width="20"></span>
</button>
</div>
<div className="p-5 space-y-4">
<div>-sm font-medium text-neutral-300 mb-1.5"&gt;Field Name
<input className="w-full px-4 py-2.5 bg-neutral-800 border border-neutral-700 rounded-lg text-sm focus:outline-none focus:border-violet-500/50" placeholder="e.g., Job Title" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-neutral-300 mb-1.5">Field Type</label>
<select className="w-full px-4 py-2.5 bg-neutral-800 border border-neutral-700 rounded-lg text-sm focus:outline-none focus:border-violet-500/50">
<option value="text">Text (Single Line)</option>
<option value="textarea">Text (Multi-line)</option>
<option value="number">Number</option>
<option value="date">Date</option>
<option value="select">Select (Single)</option>
<option value="url">URL</option>
<option value="email">Email</option>
<option value="phone">Phone</option>
</select>
</div>
</div>
<div className="p-5 border-t border-neutral-800 flex items-center justify-end gap-3">
<button className="px-4 py-2.5 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-sm font-medium transition-colors" onclick="closeFieldModal()">Cancel</button>
<button className="px-6 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 rounded-lg text-sm font-medium transition-all" onclick="addField()">Add Field</button>
</div>
</div>
</div>

<div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" id="add-lead-modal" style={{display: 'none'}}>
<div className="bg-neutral-900 border border-neutral-800 rounded-2xl w-full max-w-md">
<div className="p-5 border-b border-neutral-800 flex items-center justify-between">
<h2 className="p-2 hover:bg-neutral-800 rounded-lg transition-colors" closeaddleadmodal()"="">
<span className="iconify w-5 h-5" data-icon="lucide:x" data-width="20"></span>

</h2></div>
<div className="p-5 space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-neutral-300 mb-1.5">First Name</label>
<input className="w-full px-4 py-2.5 bg-neutral-800 border border-neutral-700 rounded-lg text-sm focus:outline-none focus:border-violet-500/50" placeholder="John" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-neutral-300 mb-1.5">Last Name</label>
<input className="w-full px-4 py-2.5 bg-neutral-800 border border-neutral-700 rounded-lg text-sm focus:outline-none focus:border-violet-500/50" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-neutral-300 mb-1.5">Email</label>
<input className="w-full px-4 py-2.5 bg-neutral-800 border border-neutral-700 outline-none focus:border-violet-500/50" placeholder="john@example.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-neutral-300 mb-1.5">Company</label>
<input className="w-full px-4 py-2.5 bg-neutral-800 border border-neutral-700 rounded-lg text-sm focus:outline-none focus:border-violet-500/50" placeholder="Acme Inc" type="text"/>
</div>
</div>
<div className="p-5 border-t border-neutral-800 flex items-center justify-end gap-3">
<button className="px-4 py-2.5 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-sm font-medium transition-colors" onclick="closeAddLeadModal()">Cancel</button>
<button className="px-6 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 rounded-lg text-sm font-medium transition-all" onclick="saveLead()">Add Lead</button>
</div>
</div>
</div>

<div className="fixed bottom-4 right-4 z-50 transform translate-y-20 opacity-0 transition-all duration-300 pointer-events-none" id="toast">
<div className="bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 flex items-center gap-3 shadow-xl">
<span className="iconify w-5 h-5 text-emerald-400" data-icon="lucide:check-circle" data-width="20"></span>
<p className="text-sm" id="toast-message">Action completed successfully</p>
</div>
</div>


    </>
  );
}
