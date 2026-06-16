import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const app = {
            data: [],
            students: {}, // Database for ID -> Name mapping
            
            init() {
                // Load Session Data
                const storedData = localStorage.getItem('labos_data');
                if (storedData) this.data = JSON.parse(storedData);
                else {
                    this.data = [];
                    this.save();
                }

                // Load Student Database
                const storedStudents = localStorage.getItem('labos_students');
                if (storedStudents) {
                    this.students = JSON.parse(storedStudents);
                } else {
                    // Seed initial data
                    this.students = {
                        '23001': 'Alex Smith',
                        '23002': 'Sarah Lee',
                        'admin': 'Admin User'
                    };
                    this.saveStudents();
                }

                this.renderTable();
                this.updateStats();
            },

            save() {
                localStorage.setItem('labos_data', JSON.stringify(this.data));
                this.updateStats();
            },

            saveStudents() {
                localStorage.setItem('labos_students', JSON.stringify(this.students));
            },

            // Check if user exists while typing
            checkIdExists(id) {
                const badge = document.getElementById('known-user-badge');
                const nameContainer = document.getElementById('name-field-container');
                const checkInBtnText = document.getElementById('btn-checkin-text');

                if (this.students[id]) {
                    // User Exists
                    badge.classList.remove('hidden');
                    nameContainer.classList.remove('expand-enter');
                    nameContainer.classList.add('expand-exit');
                    checkInBtnText.innerText = 'Check In';
                } else {
                    // User New
                    badge.classList.add('hidden');
                    // We don't show the name field immediately to keep UI clean, 
                    // we show it only when they try to check in
                    if(id.length === 0) {
                        nameContainer.classList.remove('expand-enter');
                        nameContainer.classList.add('expand-exit');
                        checkInBtnText.innerText = 'Check In';
                    }
                }
            },

            getStudentName(id) {
                return this.students[id] || `Unknown (${id})`;
            },

            generateAvatar(name) {
                const cleanName = name || 'User';
                const initials = cleanName.split(' ').map(n => n[0]).join('').substring(0,2).toUpperCase();
                const colors = ['bg-red-100 text-red-600', 'bg-blue-100 text-blue-600', 'bg-emerald-100 text-emerald-600', 'bg-orange-100 text-orange-600', 'bg-purple-100 text-purple-600'];
                const colorClass = colors[cleanName.length % colors.length];
                return `<div class="w-8 h-8 rounded-full ${colorClass} flex items-center justify-center text-xs font-semibold tracking-tight border border-white shadow-sm">${initials}</div>`;
            },

            formatTime(isoString) {
                if(!isoString) return '--';
                return new Date(isoString).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            },

            calculateDuration(start, end) {
                if (!end) return 'Current';
                const diff = new Date(end) - new Date(start);
                const minutes = Math.floor(diff / 60000);
                if (minutes < 60) return `${minutes}m`;
                const hours = Math.floor(minutes / 60);
                const mins = minutes % 60;
                return `${hours}h ${mins}m`;
            },

            // ACTIONS
            handleCheckIn() {
                const idInput = document.getElementById('studentInput');
                const nameInput = document.getElementById('nameInput');
                const nameContainer = document.getElementById('name-field-container');
                const checkInBtnText = document.getElementById('btn-checkin-text');

                const id = idInput.value.trim();
                
                if (!id) {
                    this.showToast('Error', 'Please enter a Student ID', 'error');
                    this.shakeInput(idInput);
                    return;
                }

                // CHECK IF NEW STUDENT
                if (!this.students[id]) {
                    // If name container is hidden, show it and ask for name
                    if (nameContainer.classList.contains('expand-exit')) {
                        nameContainer.classList.remove('expand-exit');
                        nameContainer.classList.add('expand-enter');
                        nameInput.focus();
                        checkInBtnText.innerText = 'Register & In';
                        this.showToast('New Student', 'Please enter full name to register.', 'neutral');
                        return; // Stop here, wait for name
                    }

                    // If name container is visible, validate name
                    const name = nameInput.value.trim();
                    if (!name) {
                        this.showToast('Required', 'Please enter a name for this ID.', 'error');
                        this.shakeInput(nameInput);
                        return;
                    }

                    // Register Student
                    this.students[id] = name;
                    this.saveStudents();
                    this.showToast('Registered', `${name} added to database.`, 'success');
                }

                // CHECK IF ALREADY ACTIVE
                const activeSession = this.data.find(r => r.studentId === id && r.status === 'active');
                if (activeSession) {
                    this.showToast('Already Active', `${this.students[id]} is already checked in.`, 'error');
                    return;
                }

                // CREATE RECORD
                const newRecord = {
                    uuid: Date.now().toString(),
                    studentId: id,
                    checkIn: new Date().toISOString(),
                    checkOut: null,
                    status: 'active'
                };

                this.data.unshift(newRecord); // Add to top
                this.save();
                this.renderTable();
                this.showToast('Success', `Checked in ${this.students[id]}`, 'success');
                
                // RESET FORM
                idInput.value = '';
                nameInput.value = '';
                nameContainer.classList.remove('expand-enter');
                nameContainer.classList.add('expand-exit');
                checkInBtnText.innerText = 'Check In';
                document.getElementById('known-user-badge').classList.add('hidden');
            },

            handleCheckOut() {
                const input = document.getElementById('studentInput');
                const id = input.value.trim();

                if (!id) {
                    this.showToast('Error', 'Please enter a Student ID', 'error');
                    this.shakeInput(input);
                    return;
                }

                const recordIndex = this.data.findIndex(r => r.studentId === id && r.status === 'active');

                if (recordIndex === -1) {
                    this.showToast('Not Found', `No active session for ID: ${id}`, 'error');
                    return;
                }

                const record = this.data[recordIndex];
                record.checkOut = new Date().toISOString();
                record.status = 'completed';
                
                this.save();
                this.renderTable();
                
                const studentName = this.students[id] || 'Student';
                this.showToast('Goodbye', `Checked out ${studentName}`, 'success');
                
                input.value = '';
                // Hide name field if it was open
                document.getElementById('name-field-container').classList.add('expand-exit');
                document.getElementById('name-field-container').classList.remove('expand-enter');
            },

            // UI UPDATES
            renderTable() {
                const tbody = document.getElementById('table-body');
                const search = document.getElementById('searchInput').value.toLowerCase();
                const emptyState = document.getElementById('empty-state');
                
                tbody.innerHTML = '';

                // Filter data
                const filtered = this.data.filter(r => {
                    const name = this.students[r.studentId] || '';
                    return name.toLowerCase().includes(search) || r.studentId.includes(search);
                });

                if (filtered.length === 0) {
                    emptyState.classList.remove('hidden');
                } else {
                    emptyState.classList.add('hidden');
                    
                    filtered.forEach(row => {
                        const name = this.students[row.studentId] || `Unknown (${row.studentId})`;
                        const tr = document.createElement('tr');
                        tr.className = 'group hover:bg-stone-50 transition-colors border-b border-stone-100 last:border-0';
                        
                        const statusBadge = row.status === 'active' 
                            ? `<span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Active</span>`
                            : `<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-stone-100 text-stone-600 border border-stone-200">Completed</span>`;

                        const durationClass = row.status === 'active' ? 'text-emerald-600 font-medium' : 'text-stone-600';

                        tr.innerHTML = `
                            <td class="py-3 px-4">
                                <div class="flex items-center gap-3">
                                    ${this.generateAvatar(name)}
                                    <div>
                                        <div class="text-sm font-medium text-stone-900">${name}</div>
                                        <div class="text-xs text-stone-400 font-mono">ID: ${row.studentId}</div>
                                    </div>
                                </div>
                            </td>
                            <td class="py-3 px-4">${statusBadge}</td>
                            <td class="py-3 px-4 text-sm text-stone-600 font-mono text-xs">${this.formatTime(row.checkIn)}</td>
                            <td class="py-3 px-4 text-sm text-stone-400 font-mono text-xs">${this.formatTime(row.checkOut)}</td>
                            <td class="py-3 px-4 text-sm text-right ${durationClass}">${this.calculateDuration(row.checkIn, row.checkOut)}</td>
                        `;
                        tbody.appendChild(tr);
                    });
                }
            },

            updateStats() {
                const active = this.data.filter(r => r.status === 'active').length;
                const total = this.data.length;
                
                const completed = this.data.filter(r => r.status === 'completed');
                let avg = 0;
                if (completed.length > 0) {
                    const totalMin = completed.reduce((acc, curr) => {
                        return acc + (new Date(curr.checkOut) - new Date(curr.checkIn));
                    }, 0) / 60000;
                    avg = Math.round(totalMin / completed.length);
                }

                document.getElementById('stat-active').innerText = active;
                document.getElementById('stat-total').innerText = total;
                document.getElementById('stat-duration').innerText = avg > 0 ? `${avg}m` : '--';
                
                const kioskText = document.getElementById('kiosk-status-text');
                kioskText.innerText = active > 0 ? `Lab Open • ${active} Present` : 'Lab Open • Empty';
            },

            // UTILS
            switchView(viewName) {
                const kioskView = document.getElementById('view-kiosk');
                const adminView = document.getElementById('view-admin');
                const btnKiosk = document.getElementById('btn-kiosk');
                const btnAdmin = document.getElementById('btn-admin');

                if(viewName === 'kiosk') {
                    kioskView.classList.remove('hidden');
                    adminView.classList.add('hidden');
                    btnKiosk.classList.replace('text-stone-500', 'bg-white');
                    btnKiosk.classList.add('shadow-sm', 'text-stone-900');
                    btnAdmin.classList.add('text-stone-500');
                    btnAdmin.classList.remove('bg-white', 'shadow-sm', 'text-stone-900');
                } else {
                    this.renderTable();
                    kioskView.classList.add('hidden');
                    adminView.classList.remove('hidden');
                    btnAdmin.classList.replace('text-stone-500', 'bg-white');
                    btnAdmin.classList.add('shadow-sm', 'text-stone-900');
                    btnKiosk.classList.add('text-stone-500');
                    btnKiosk.classList.remove('bg-white', 'shadow-sm', 'text-stone-900');
                }
            },

            showToast(title, msg, type) {
                const toast = document.getElementById('toast');
                const iconContainer = document.getElementById('toast-icon');
                const titleEl = document.getElementById('toast-title');
                const msgEl = document.getElementById('toast-msg');

                titleEl.innerText = title;
                msgEl.innerText = msg;

                if (type === 'success') {
                    iconContainer.innerHTML = '<iconify-icon icon="solar:check-circle-linear" class="text-emerald-400" width="24"></iconify-icon>';
                } else if (type === 'error') {
                    iconContainer.innerHTML = '<iconify-icon icon="solar:danger-circle-linear" class="text-red-400" width="24"></iconify-icon>';
                } else {
                    iconContainer.innerHTML = '<iconify-icon icon="solar:info-circle-linear" class="text-stone-400" width="24"></iconify-icon>';
                }

                toast.classList.add('toast-enter');
                setTimeout(() => {
                    toast.classList.remove('toast-enter');
                }, 3000);
            },

            shakeInput(element) {
                element.classList.add('ring-2', 'ring-red-200', 'border-red-400');
                setTimeout(() => element.classList.remove('ring-2', 'ring-red-200', 'border-red-400'), 500);
            },

            clearData() {
                if(confirm('Clear all records and student database?')) {
                    this.data = [];
                    this.students = {};
                    this.save();
                    this.saveStudents();
                    this.renderTable();
                    this.showToast('System', 'All records cleared.', 'success');
                }
            },

            exportCSV() {
                if(this.data.length === 0) return;
                let csvContent = "data:text/csv;charset=utf-8,";
                csvContent += "Name,ID,Status,CheckIn,CheckOut\n";
                this.data.forEach((row) => {
                    const name = this.students[row.studentId] || 'Unknown';
                    csvContent += `${name},${row.studentId},${row.status},${row.checkIn},${row.checkOut || ''}\n`;
                });
                const encodedUri = encodeURI(csvContent);
                const link = document.createElement("a");
                link.setAttribute("href", encodedUri);
                link.setAttribute("download", "lab_data.csv");
                document.body.appendChild(link);
                link.click();
            }
        };
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="fixed top-0 w-full h-screen -z-10 bg-cover bg-center" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9c78a081-43fc-417f-9d0f-b87ee6b9bf6a_3840w.jpg")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>


<div className="min-h-screen flex flex-col">

<nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-stone-200/60">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-stone-900 rounded-lg flex items-center justify-center text-white shadow-lg shadow-stone-200">
<iconify-icon icon="solar:atom-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-stone-900">LAB.OS</span>
</div>
<div className="flex bg-stone-100 rounded-lg p-1 gap-1">
<button className="px-3 py-1.5 text-xs font-medium rounded-md bg-white shadow-sm text-stone-900 transition-all" id="btn-kiosk" onclick="app.switchView('kiosk')">Kiosk</button>
<button className="px-3 py-1.5 text-xs font-medium rounded-md text-stone-500 hover:text-stone-900 transition-all" id="btn-admin" onclick="app.switchView('admin')">Admin</button>
</div>
</div>
</div>
</nav>

<main className="flex-grow sm:px-6 lg:px-8 w-full max-w-6xl mr-auto ml-auto pt-8 pr-4 pb-8 pl-4">

<div className="fade-in md:mt-16 max-w-lg mt-8 mr-auto ml-auto" id="view-kiosk">
<div className="mb-6 flex justify-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-medium transition-all" id="live-status-pill">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="" id="kiosk-status-text">Lab Open • 4 Present</span>
</div>
</div>
<div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden relative">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-stone-800 via-stone-600 to-stone-800"></div>
<div className="p-8">
<div className="text-center mb-8">
<h1 className="text-2xl font-medium text-stone-900 tracking-tight mb-2">Access Control</h1>
<p className="text-sm text-stone-500">Enter Student ID to record session.</p>
</div>
<form className="space-y-6" onsubmit="event.preventDefault();">

<div className="space-y-2">
<label className="text-xs font-medium text-stone-700 uppercase tracking-wide ml-1">Student Identifier</label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-400 group-focus-within:text-stone-900 transition-colors">
<iconify-icon icon="solar:user-id-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<input autocomplete="off" className="block w-full pl-10 pr-3 py-3 border border-stone-200 rounded-xl leading-5 bg-stone-50 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-900 focus:border-stone-900 focus:bg-white transition-all text-sm font-medium" id="studentInput" onkeyup="app.checkIdExists(this.value)" placeholder="e.g. 23001" type="text"/>

<div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none" id="known-user-badge">
<span className="text-xs text-emerald-600 font-medium bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">Found</span>
</div>
</div>
</div>

<div className="expand-exit transition-all duration-300 ease-in-out" id="name-field-container">
<div className="space-y-2">
<label className="text-xs font-medium text-stone-700 uppercase tracking-wide ml-1 flex justify-between">
<span>Full Name</span>
<span className="text-stone-400 font-normal normal-case">New student detected</span>
</label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-400 group-focus-within:text-stone-900 transition-colors">
<iconify-icon icon="solar:user-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<input autocomplete="off" className="block w-full pl-10 pr-3 py-3 border border-stone-200 rounded-xl leading-5 bg-stone-50 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-900 focus:border-stone-900 focus:bg-white transition-all text-sm font-medium" id="nameInput" placeholder="e.g. John Doe" type="text"/>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<button className="group relative flex justify-center items-center gap-2 py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-stone-900 hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-900 transition-all shadow-sm active:scale-[0.98]" id="btn-checkin" onclick="app.handleCheckIn()" type="button">
<iconify-icon icon="solar:login-2-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span id="btn-checkin-text">Check In</span>
</button>
<button className="group relative flex justify-center items-center gap-2 py-3 px-4 border border-stone-200 text-sm font-medium rounded-xl text-stone-700 bg-white hover:bg-stone-50 hover:border-stone-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-200 transition-all shadow-sm active:scale-[0.98]" onclick="app.handleCheckOut()" type="button">
<iconify-icon icon="solar:logout-2-linear" strokeWidth="1.5" width="18"></iconify-icon>
                                    Check Out
                                </button>
</div>
</form>
</div>
<div className="bg-stone-50 px-8 py-4 border-t border-stone-100 flex justify-between items-center">
<span className="text-xs text-stone-400">Database Connected (Local)</span>
<div className="flex items-center gap-1 text-xs text-stone-400">
<iconify-icon icon="solar:shield-check-linear" width="14"></iconify-icon>
<span>Secure</span>
</div>
</div>
</div>
</div>

<div className="fade-in hidden space-y-6" id="view-admin">

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm flex items-start justify-between">
<div>
<p className="text-xs font-medium text-stone-500 uppercase tracking-wide">Active Now</p>
<h3 className="text-2xl font-medium text-stone-900 mt-1 tracking-tight" id="stat-active">4</h3>
<p className="text-xs text-stone-400 mt-1">Students in lab</p>
</div>
<div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm flex items-start justify-between">
<div>
<p className="text-xs font-medium text-stone-500 uppercase tracking-wide">Total Visits</p>
<h3 className="text-2xl font-medium text-stone-900 mt-1 tracking-tight" id="stat-total">8</h3>
<p className="text-xs text-stone-400 mt-1">All time records</p>
</div>
<div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
<iconify-icon icon="solar:history-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm flex items-start justify-between">
<div>
<p className="text-xs font-medium text-stone-500 uppercase tracking-wide">Avg Duration</p>
<h3 className="text-2xl font-medium text-stone-900 mt-1 tracking-tight" id="stat-duration">--</h3>
<p className="text-xs text-stone-400 mt-1">Minutes per session</p>
</div>
<div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
<div className="relative w-full md:w-96">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-400">
<iconify-icon icon="solar:magnifer-linear" width="18"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-3 py-2 border border-stone-200 rounded-lg bg-white text-sm placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-900 focus:border-stone-900" id="searchInput" onkeyup="app.renderTable()" placeholder="Search students..." type="text"/>
</div>
<div className="flex gap-2">
<button className="flex items-center gap-2 px-3 py-2 bg-white border border-red-200 rounded-lg text-xs font-medium text-red-600 hover:bg-red-50 transition-colors" onclick="app.clearData()">
<iconify-icon icon="solar:trash-bin-trash-linear" width="16"></iconify-icon>
<span>Reset Data</span>
</button>
<button className="flex items-center gap-2 px-3 py-2 bg-stone-900 border border-transparent rounded-lg text-xs font-medium text-white hover:bg-stone-800 transition-colors shadow-sm" onclick="app.exportCSV()">
<iconify-icon icon="solar:file-download-linear" width="16"></iconify-icon>
<span>Export CSV</span>
</button>
</div>
</div>

<div className="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden min-h-[300px]">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-stone-50/50 border-b border-stone-100">
<th className="py-3 px-4 text-xs font-medium text-stone-500 uppercase tracking-wider">Student</th>
<th className="py-3 px-4 text-xs font-medium text-stone-500 uppercase tracking-wider">Status</th>
<th className="py-3 px-4 text-xs font-medium text-stone-500 uppercase tracking-wider">Check In</th>
<th className="py-3 px-4 text-xs font-medium text-stone-500 uppercase tracking-wider">Check Out</th>
<th className="py-3 px-4 text-xs font-medium text-stone-500 uppercase tracking-wider text-right">Duration</th>
</tr>
</thead>
<tbody className="divide-y divide-stone-100" id="table-body"><tr className="group hover:bg-stone-50 transition-colors border-b border-stone-100 last:border-0">
<td className="py-3 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-semibold tracking-tight border border-white shadow-sm">YJ</div>
<div>
<div className="text-sm font-medium text-stone-900">yash jangid</div>
<div className="text-xs text-stone-400 font-mono">ID: 102</div>
</div>
</div>
</td>
<td className="py-3 px-4"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-stone-100 text-stone-600 border border-stone-200">Completed</span></td>
<td className="py-3 px-4 text-sm text-stone-600 font-mono text-xs">04:50 PM</td>
<td className="py-3 px-4 text-sm text-stone-400 font-mono text-xs">04:51 PM</td>
<td className="py-3 px-4 text-sm text-right text-stone-600">0m</td>
</tr><tr className="group hover:bg-stone-50 transition-colors border-b border-stone-100 last:border-0">
<td className="py-3 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-semibold tracking-tight border border-white shadow-sm">A</div>
<div>
<div className="text-sm font-medium text-stone-900">anjali</div>
<div className="text-xs text-stone-400 font-mono">ID: 207</div>
</div>
</div>
</td>
<td className="py-3 px-4"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-stone-100 text-stone-600 border border-stone-200">Completed</span></td>
<td className="py-3 px-4 text-sm text-stone-600 font-mono text-xs">04:49 PM</td>
<td className="py-3 px-4 text-sm text-stone-400 font-mono text-xs">04:49 PM</td>
<td className="py-3 px-4 text-sm text-right text-stone-600">0m</td>
</tr><tr className="group hover:bg-stone-50 transition-colors border-b border-stone-100 last:border-0">
<td className="py-3 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-semibold tracking-tight border border-white shadow-sm">J</div>
<div>
<div className="text-sm font-medium text-stone-900">jayesh</div>
<div className="text-xs text-stone-400 font-mono">ID: 3</div>
</div>
</div>
</td>
<td className="py-3 px-4"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-stone-100 text-stone-600 border border-stone-200">Completed</span></td>
<td className="py-3 px-4 text-sm text-stone-600 font-mono text-xs">03:55 PM</td>
<td className="py-3 px-4 text-sm text-stone-400 font-mono text-xs">03:55 PM</td>
<td className="py-3 px-4 text-sm text-right text-stone-600">0m</td>
</tr><tr className="group hover:bg-stone-50 transition-colors border-b border-stone-100 last:border-0">
<td className="py-3 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-semibold tracking-tight border border-white shadow-sm">Y</div>
<div>
<div className="text-sm font-medium text-stone-900">yash</div>
<div className="text-xs text-stone-400 font-mono">ID: 2</div>
</div>
</div>
</td>
<td className="py-3 px-4"><span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Active</span></td>
<td className="py-3 px-4 text-sm text-stone-600 font-mono text-xs">03:54 PM</td>
<td className="py-3 px-4 text-sm text-stone-400 font-mono text-xs">--</td>
<td className="py-3 px-4 text-sm text-right text-emerald-600 font-medium">Current</td>
</tr><tr className="group hover:bg-stone-50 transition-colors border-b border-stone-100 last:border-0">
<td className="py-3 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-semibold tracking-tight border border-white shadow-sm">V</div>
<div>
<div className="text-sm font-medium text-stone-900">ved</div>
<div className="text-xs text-stone-400 font-mono">ID: 1</div>
</div>
</div>
</td>
<td className="py-3 px-4"><span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Active</span></td>
<td className="py-3 px-4 text-sm text-stone-600 font-mono text-xs">03:54 PM</td>
<td className="py-3 px-4 text-sm text-stone-400 font-mono text-xs">--</td>
<td className="py-3 px-4 text-sm text-right text-emerald-600 font-medium">Current</td>
</tr><tr className="group hover:bg-stone-50 transition-colors border-b border-stone-100 last:border-0">
<td className="py-3 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-semibold tracking-tight border border-white shadow-sm">YJ</div>
<div>
<div className="text-sm font-medium text-stone-900">yash jangid</div>
<div className="text-xs text-stone-400 font-mono">ID: 102</div>
</div>
</div>
</td>
<td className="py-3 px-4"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-stone-100 text-stone-600 border border-stone-200">Completed</span></td>
<td className="py-3 px-4 text-sm text-stone-600 font-mono text-xs">03:52 PM</td>
<td className="py-3 px-4 text-sm text-stone-400 font-mono text-xs">03:53 PM</td>
<td className="py-3 px-4 text-sm text-right text-stone-600">0m</td>
</tr><tr className="group hover:bg-stone-50 transition-colors border-b border-stone-100 last:border-0">
<td className="py-3 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-semibold tracking-tight border border-white shadow-sm">U(</div>
<div>
<div className="text-sm font-medium text-stone-900">Unknown (101)</div>
<div className="text-xs text-stone-400 font-mono">ID: 101</div>
</div>
</div>
</td>
<td className="py-3 px-4"><span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Active</span></td>
<td className="py-3 px-4 text-sm text-stone-600 font-mono text-xs">03:49 PM</td>
<td className="py-3 px-4 text-sm text-stone-400 font-mono text-xs">--</td>
<td className="py-3 px-4 text-sm text-right text-emerald-600 font-medium">Current</td>
</tr><tr className="group hover:bg-stone-50 transition-colors border-b border-stone-100 last:border-0">
<td className="py-3 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-semibold tracking-tight border border-white shadow-sm">U(</div>
<div>
<div className="text-sm font-medium text-stone-900">Unknown (vedant kankute)</div>
<div className="text-xs text-stone-400 font-mono">ID: vedant kankute</div>
</div>
</div>
</td>
<td className="py-3 px-4"><span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Active</span></td>
<td className="py-3 px-4 text-sm text-stone-600 font-mono text-xs">03:47 PM</td>
<td className="py-3 px-4 text-sm text-stone-400 font-mono text-xs">--</td>
<td className="py-3 px-4 text-sm text-right text-emerald-600 font-medium">Current</td>
</tr></tbody>
</table>
</div>
<div className="hidden flex flex-col items-center justify-center py-12 text-stone-400" id="empty-state">
<iconify-icon className="mb-2 opacity-50" icon="solar:folder-open-linear" width="48"></iconify-icon>
<p className="text-sm">No records found.</p>
</div>
</div>
</div>
</main>

<div className="fixed bottom-6 right-6 transform translate-y-20 opacity-0 transition-all duration-300 z-50 pointer-events-none" id="toast">
<div className="bg-stone-900 text-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-3 text-sm border border-stone-700/50">
<div id="toast-icon"></div>
<div>
<h4 className="font-medium" id="toast-title">Notification</h4>
<p className="text-stone-400 text-xs" id="toast-msg">Message goes here</p>
</div>
</div>
</div>
</div>



    </>
  );
}
