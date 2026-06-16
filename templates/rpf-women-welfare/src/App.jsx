import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- DATA & STATE ---
        const state = {
            role: 'employee', // 'employee' | 'officer'
            grievances: [
                { id: 'GR-2023-8921', category: 'Infrastructure', level: 'Divisional', date: 'Oct 12, 2023', status: 'In Progress' },
                { id: 'GR-2023-8840', category: 'Transfer', level: 'Zonal', date: 'Oct 01, 2023', status: 'Escalated' },
                { id: 'GR-2023-7721', category: 'Medical', level: 'Divisional', date: 'Sep 15, 2023', status: 'Resolved' },
            ]
        };

        // --- AUTH LOGIC ---
        function handleLogin() {
            const pf = document.getElementById('pfInput').value;
            if(pf.length < 3) {
                alert("Please enter a valid PF Number");
                return;
            }
            // Simulate API Call delay
            const btn = document.querySelector('#view-login button');
            const originalText = btn.innerHTML;
            btn.innerHTML = `<iconify-icon icon="lucide:loader-2" class="animate-spin mr-2"></iconify-icon> Validating...`;
            btn.classList.add('opacity-80', 'cursor-not-allowed');
            
            setTimeout(() => {
                document.getElementById('view-login').classList.add('hidden');
                document.getElementById('view-otp').classList.remove('hidden');
                // Generate random Ref ID
                const ref = "REF" + Math.floor(1000 + Math.random() * 9000);
                document.getElementById('otpRef').innerText = ref;
                document.getElementById('otpMsg').innerText = `Enter code sent to mobile ending in ****** (Ref: ${ref})`;
            }, 800);
        }

        function backToLogin() {
            document.getElementById('view-otp').classList.add('hidden');
            document.getElementById('view-login').classList.remove('hidden');
            const btn = document.querySelector('#view-login button');
            btn.innerHTML = "Request OTP";
            btn.classList.remove('opacity-80', 'cursor-not-allowed');
        }

        function verifyOtp() {
            const otp = document.getElementById('otpInput').value;
            if(otp.length < 4) { alert("Enter 5 digit OTP"); return; }
            
            // Success
            const btn = document.querySelector('#view-otp button');
            btn.innerHTML = `<iconify-icon icon="lucide:loader-2" class="animate-spin mr-2"></iconify-icon> Verifying...`;
            
            setTimeout(() => {
                document.getElementById('view-otp').classList.add('hidden');
                document.getElementById('main-layout').classList.remove('hidden');
                renderGrievances();
            }, 600);
        }

        function logout() {
            location.reload();
        }

        // --- UI LOGIC ---
        function toggleRole() {
            state.role = state.role === 'employee' ? 'officer' : 'employee';
            
            // Update UI elements based on role
            const simBtn = document.getElementById('simRole');
            const userRoleTxt = document.getElementById('userRoleDisplay');
            const officerLinks = document.getElementById('officer-links');
            
            if (state.role === 'officer') {
                simBtn.innerText = "Employee View";
                simBtn.parentElement.classList.replace('bg-brand-50', 'bg-slate-200');
                simBtn.parentElement.classList.replace('text-brand-700', 'text-slate-700');
                simBtn.parentElement.classList.replace('border-brand-100', 'border-slate-300');
                
                userRoleTxt.innerText = "Divisional Security Commissioner";
                officerLinks.classList.remove('hidden');
            } else {
                simBtn.innerText = "Officer View";
                simBtn.parentElement.classList.replace('bg-slate-200', 'bg-brand-50');
                simBtn.parentElement.classList.replace('text-slate-700', 'text-brand-700');
                simBtn.parentElement.classList.replace('border-slate-300', 'border-brand-100');
                
                userRoleTxt.innerText = "Constable, Delhi Div";
                officerLinks.classList.add('hidden');
            }
            
            renderGrievances();
            showToast("Role Switched", `Now viewing as ${state.role === 'officer' ? 'Divisional Officer' : 'Employee'}`);
        }

        function renderGrievances() {
            const tbody = document.getElementById('grievanceTableBody');
            tbody.innerHTML = '';

            state.grievances.forEach(g => {
                // Officer view sees different actions
                let actionHTML = '';
                if(state.role === 'officer' && g.status !== 'Resolved') {
                    actionHTML = `
                        <div class="flex justify-end gap-3">
                            <button class="text-xs font-medium text-brand-600 hover:text-brand-800">Investigate</button>
                            <button class="text-xs font-medium text-slate-400 hover:text-slate-600">Forward</button>
                        </div>`;
                } else if (state.role === 'employee') {
                    actionHTML = `<button class="text-xs font-medium text-slate-400 hover:text-brand-600 transition-colors">Details</button>`;
                }

                // Status Badge Color
                let statusClass = 'bg-slate-100 text-slate-600 border border-slate-200';
                if(g.status === 'Resolved') statusClass = 'bg-green-50 text-green-700 border border-green-100';
                if(g.status === 'Escalated') statusClass = 'bg-brand-50 text-brand-700 border border-brand-100';
                if(g.status === 'In Progress') statusClass = 'bg-orange-50 text-orange-700 border border-orange-100';

                const row = `
                    <tr class="hover:bg-brand-50/40 transition-colors group">
                        <td class="px-6 py-4 font-mono text-[11px] text-slate-400 group-hover:text-brand-600 transition-colors">${g.id}</td>
                        <td class="px-6 py-4 text-slate-900 font-medium text-xs">${g.category}</td>
                        <td class="px-6 py-4 text-slate-500 text-xs">${g.level}</td>
                        <td class="px-6 py-4 text-slate-500 text-xs">${g.date}</td>
                        <td class="px-6 py-4">
                            <span class="inline-flex items-center rounded-md px-2 py-1 text-[10px] font-semibold uppercase tracking-wide ${statusClass}">${g.status}</span>
                        </td>
                        <td class="px-6 py-4 text-right">
                            ${actionHTML}
                        </td>
                    </tr>
                `;
                tbody.innerHTML += row;
            });
        }

        // --- MODAL & FORM ---
        function openModal(id) {
            document.getElementById(`modal-${id}`).classList.remove('hidden');
        }

        function closeModal(id) {
            document.getElementById(`modal-${id}`).classList.add('hidden');
        }

        function submitGrievance() {
            closeModal('new-grievance');
            
            // Add fake new item
            const newId = "GR-" + new Date().getFullYear() + "-" + Math.floor(1000 + Math.random() * 9000);
            const today = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
            
            state.grievances.unshift({
                id: newId,
                category: 'Workplace Harassment', 
                level: 'Divisional',
                date: today,
                status: 'In Progress'
            });
            
            renderGrievances();
            showToast("Grievance Submitted", `Reference ID: ${newId} sent to Division.`);
        }

        function showToast(title, msg) {
            const t = document.getElementById('toast');
            document.getElementById('toast-title').innerText = title;
            document.getElementById('toast-msg').innerText = msg;
            
            t.classList.remove('translate-y-20', 'opacity-0');
            setTimeout(() => {
                t.classList.add('translate-y-20', 'opacity-0');
            }, 3000);
        }

        function switchTab(tab) {
            document.querySelectorAll('.nav-item').forEach(el => {
                el.classList.remove('bg-brand-50', 'text-brand-900', 'border-brand-100/50');
                el.classList.add('text-slate-600', 'border-transparent');
            });
            event.currentTarget.classList.add('bg-brand-50', 'text-brand-900', 'border-brand-100/50');
            event.currentTarget.classList.remove('text-slate-600', 'border-transparent');
            
            // Icon color toggle
            document.querySelectorAll('.nav-item iconify-icon').forEach(icon => {
                icon.classList.remove('text-brand-600');
                icon.classList.add('text-slate-400');
            });
            event.currentTarget.querySelector('iconify-icon').classList.remove('text-slate-400');
            event.currentTarget.querySelector('iconify-icon').classList.add('text-brand-600');
        }

        // Init
        document.getElementById('pfInput').addEventListener('input', (e) => {
            if(e.target.value.length >= 4) document.getElementById('hrCheck').classList.remove('hidden');
            else document.getElementById('hrCheck').classList.add('hidden');
        });
        
        // Setup initial state
        renderGrievances();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative flex h-full w-full" id="app">

<div className="flex z-50 bg-gradient-to-br from-slate-400 to-slate-600 pr-4 pl-4 absolute top-0 right-0 bottom-0 left-0 items-center justify-center" id="view-login">

<div className="absolute top-[-10%] left-[-10%] w-96 h-96 rounded-full blur-3xl pointer-events-none bg-brand-900/40"></div>
<div className="w-full max-w-sm fade-in relative">
<div className="text-center mb-8">
<div className="flex shadow-brand-800 text-black bg-gradient-to-br from-brand-400 to-brand-300 w-14 h-14 rounded-2xl mr-auto ml-auto shadow-lg items-center justify-center">
<span className="font-bold text-xl font-geist tracking-tighter" style={{}}>RPF</span>
</div>
<h1 className="mt-6 text-2xl font-jakarta font-medium tracking-tighter text-slate-100" style={{}}>Women Welfare</h1>
<p className="text-sm text-slate-50 tracking-tighter font-geist mt-2">Secure Grievance Redressal System</p>
</div>
<div className="space-y-5 backdrop-blur-sm p-6 rounded-2xl border shadow-card bg-black/60 border-black">
<div className="">
<label className="block text-xs font-medium text-slate-400 tracking-tighter font-geist mb-1.5">PF Number</label>
<div className="relative group">
<input className="block placeholder-slate-400 focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-500 transition-all group-hover:border-brand-200 text-sm text-slate-950 bg-slate-200/80 w-full border-slate-800 border rounded-xl pt-3 pr-4 pb-3 pl-4 shadow-sm" id="pfInput" placeholder="Enter 11-digit PF Number" type="text"/>
<div className="absolute right-3 top-3 hidden text-green-400" id="hrCheck" style={{}}>
<iconify-icon icon="lucide:check-circle-2" width="18"></iconify-icon>
</div>
</div>
<p className="text-[11px] flex items-center text-slate-50 tracking-tighter font-geist mt-2">
<iconify-icon className="mr-1" icon="lucide:shield-check"></iconify-icon> 
                            Validated against HRMS Database
                        </p>
</div>
<button className="w-full rounded-xl py-3 text-sm font-medium shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition-all duration-300 font-geist tracking-tighter bg-slate-100 text-black shadow-slate-800 hover:bg-brand-300 hover:shadow-brand-800" onclick="handleLogin()" style={{}}>
                        Request OTP
                    </button>
</div>
<div className="mt-8 text-center">
<p className="text-[11px] uppercase text-brand-100/40 font-medium tracking-tighter font-geist">Restricted Official Access</p>
</div>
</div>
</div>

<div className="hidden absolute inset-0 z-50 flex items-center justify-center px-4 backdrop-blur-xl bg-black/90" id="view-otp">
<div className="w-full max-w-sm fade-in">
<button className="mb-8 flex items-center text-xs font-medium text-slate-500 transition-colors font-geist tracking-tighter hover:text-brand-400" onclick="backToLogin()" style={{}}>
<iconify-icon className="mr-1.5" icon="lucide:arrow-left" width="14"></iconify-icon> Return to Login
                </button>
<div className="text-center mb-8">
<div className="inline-flex h-12 w-12 items-center justify-center rounded-full mb-4 bg-brand-950 text-brand-400">
<iconify-icon icon="lucide:lock-keyhole" width="20"></iconify-icon>
</div>
<h2 className="text-xl font-semibold font-geist tracking-tighter text-slate-100" style={{}}>Verify Identity</h2>
<p className="mt-2 text-sm text-slate-500 max-w-[240px] mx-auto font-geist tracking-tighter" id="otpMsg" style={{}}>Enter the code sent to your registered mobile ending in ******</p>
<div className="mt-4 inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold border uppercase font-geist tracking-tighter bg-orange-950 text-orange-300 border-orange-900" style={{}}>
                        Ref: <span className="ml-1 font-mono" id="otpRef"></span>
</div>
</div>
<div className="space-y-6">
<input className="block w-full text-center tracking-[0.75em] rounded-xl border px-3 py-4 text-xl font-bold focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all shadow-subtle placeholder-slate-200 border-slate-800 bg-black text-slate-100" id="otpInput" maxlength="5" placeholder="•••••" style={{}} type="text"/>
<button className="w-full rounded-xl py-3 text-sm font-medium shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 transition-all transform active:scale-[0.98] font-geist tracking-tighter bg-brand-400 text-black shadow-brand-800 hover:bg-brand-300" onclick="verifyOtp()" style={{}}>
                        Verify &amp; Access
                    </button>
</div>
<div className="mt-6 text-center">
<button className="text-xs font-medium transition-colors font-geist tracking-tighter text-slate-600 hover:text-brand-400" style={{}}>Resend code in 24s</button>
</div>
</div>
</div>

<div className="hidden w-full h-full flex overflow-hidden" id="main-layout">

<aside className="w-64 flex-shrink-0 border-r backdrop-blur-md flex flex-col hidden md:flex z-20 border-brand-900/50 bg-black/80">
<div className="flex h-16 items-center px-6">
<div className="flex h-7 w-7 items-center justify-center rounded-lg shadow-md bg-brand-400 text-black shadow-brand-800">
<span className="font-bold text-[10px] font-geist tracking-tighter" style={{}}>RPF</span>
</div>
<span className="ml-3 text-sm font-semibold font-geist tracking-tighter text-slate-100" style={{}}>Women Welfare</span>
</div>
<div className="flex-1 overflow-y-auto px-3 py-6 space-y-1">
<p className="px-3 mb-2 text-[10px] font-bold uppercase font-geist tracking-tighter text-slate-600" style={{}}>Main Menu</p>
<a className="nav-item group flex items-center rounded-lg px-3 py-2 text-sm font-medium border transition-all font-geist tracking-tighter bg-brand-950 text-brand-100 border-brand-900/50" href="#" onclick="switchTab('dashboard')" style={{}}>
<iconify-icon className="mr-3 text-brand-400" icon="lucide:layout-grid" strokeWidth="1.5" width="18"></iconify-icon>
                        Dashboard
                    </a>
<a className="nav-item group flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-all border border-transparent font-geist tracking-tighter text-slate-400 hover:bg-slate-950 hover:text-slate-100 hover:border-slate-900" href="#" onclick="switchTab('grievances')" style={{}}>
<iconify-icon className="mr-3 group-hover:text-slate-600 text-slate-600" icon="lucide:file-heart" strokeWidth="1.5" style={{}} width="18"></iconify-icon>
                        My Grievances
                    </a>

<div className="hidden pt-6" id="officer-links">
<p className="px-3 mb-2 text-[10px] font-bold uppercase font-geist tracking-tighter text-slate-600" style={{}}>Division Mgmt</p>
<a className="group flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-all border border-transparent font-geist tracking-tighter text-slate-400 hover:bg-slate-950 hover:text-slate-100 hover:border-slate-900" href="#" style={{}}>
<iconify-icon className="mr-3 group-hover:text-slate-600 text-slate-600" icon="lucide:inbox" strokeWidth="1.5" style={{}} width="18"></iconify-icon>
                            Inbox <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold font-geist tracking-tighter bg-brand-900 text-brand-400" style={{}}>3</span>
</a>
<a className="group flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-all border border-transparent font-geist tracking-tighter text-slate-400 hover:bg-slate-950 hover:text-slate-100 hover:border-slate-900" href="#" style={{}}>
<iconify-icon className="mr-3 group-hover:text-slate-600 text-slate-600" icon="lucide:pie-chart" strokeWidth="1.5" style={{}} width="18"></iconify-icon>
                            Analytics
                        </a>
</div>
</div>
<div className="border-t p-4 bg-gradient-to-t to-transparent border-brand-900/50 from-brand-950/50">
<div className="flex items-center">
<div className="h-9 w-9 flex-shrink-0 rounded-full flex items-center justify-center font-bold text-xs border shadow-sm font-geist tracking-tighter bg-black text-brand-300 border-brand-800" style={{}}>AS</div>
<div className="ml-3">
<p className="text-xs font-semibold font-geist tracking-tighter text-slate-100" style={{}}>Aditi Singh</p>
<p className="text-[10px] text-slate-500 truncate w-24 font-geist tracking-tighter" id="userRoleDisplay" style={{}}>Constable, Delhi Div</p>
</div>
<button className="ml-auto transition-colors text-slate-600 hover:text-brand-400" onclick="logout()" style={{}}>
<iconify-icon icon="lucide:log-out" width="16"></iconify-icon>
</button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">

<div className="absolute inset-0 bg-gradient-to-br pointer-events-none -z-10 from-brand-950/40 via-black/40 to-black/80"></div>

<header className="flex h-16 items-center justify-between border-b backdrop-blur-sm px-6 sticky top-0 z-30 border-brand-900/50 bg-black/50">
<div className="flex items-center md:hidden">
<button className="mr-4 text-slate-500 hover:text-brand-400" style={{}}><iconify-icon icon="lucide:menu" width="20"></iconify-icon></button>
<span className="font-semibold text-sm font-geist tracking-tighter text-slate-100" style={{}}>RPF Welfare</span>
</div>
<div className="hidden md:flex items-center text-sm">
<span className="text-slate-500 font-medium font-geist tracking-tighter" style={{}}>Dashboard</span>
<iconify-icon className="mx-2 text-slate-700" icon="lucide:chevron-right" style={{}} width="14"></iconify-icon>
<span className="font-semibold font-geist tracking-tighter text-slate-100" style={{}}>Overview</span>
</div>
<div className="flex items-center gap-4">
<button className="text-[11px] font-semibold border px-3 py-1.5 rounded-full transition-colors shadow-sm font-geist tracking-tighter text-brand-300 bg-brand-950 border-brand-900 hover:bg-brand-900" onclick="toggleRole()" style={{}}>
                            Simulate: <span className="font-geist tracking-tighter" id="simRole" style={{}}>Officer View</span>
</button>
<button className="relative transition-colors text-slate-600 hover:text-slate-400" style={{}}>
<iconify-icon icon="lucide:bell" width="18"></iconify-icon>
<span className="absolute right-0.5 top-0.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-black"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 md:p-8">

<div className="max-w-5xl mx-auto space-y-8 fade-in" id="tab-dashboard">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
<div>
<h2 className="text-2xl font-jakarta font-medium tracking-tighter text-slate-100" style={{}}>Welcome, Aditi</h2>
<p className="text-sm text-slate-500 mt-1 font-geist tracking-tighter" style={{}}>Here is the status of your submitted welfare requests.</p>
</div>
<button className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-medium shadow-lg transition-all duration-300 group font-geist tracking-tighter bg-slate-100 text-black shadow-slate-800 hover:bg-brand-400 hover:shadow-brand-800" onclick="openModal('new-grievance')" style={{}}>
<iconify-icon className="mr-2 group-hover:rotate-90 transition-transform" icon="lucide:plus" width="16"></iconify-icon>
                                New Grievance
                            </button>
</div>

<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

<div className="relative overflow-hidden rounded-2xl border p-5 shadow-sm hover:shadow-md transition-shadow border-black bg-black/60">
<div className="absolute top-0 right-0 p-4 opacity-10">
<iconify-icon icon="lucide:files" width="60"></iconify-icon>
</div>
<div className="flex items-center justify-between">
<p className="text-xs font-bold uppercase font-geist tracking-tighter text-slate-600" style={{}}>Total Filed</p>
<div className="p-2 rounded-lg text-slate-500 bg-slate-900" style={{}}>
<iconify-icon icon="lucide:folder-open" width="16"></iconify-icon>
</div>
</div>
<p className="mt-4 text-3xl font-jakarta font-medium tracking-tighter text-slate-100" style={{}}>12</p>
</div>

<div className="relative overflow-hidden rounded-2xl border p-5 shadow-sm hover:shadow-md transition-shadow border-black bg-black/60">
<div className="flex items-center justify-between">
<p className="text-xs font-bold uppercase font-geist tracking-tighter text-brand-600" style={{}}>Processing</p>
<div className="p-2 rounded-lg text-orange-500 bg-orange-950" style={{}}>
<iconify-icon icon="lucide:loader-2" width="16"></iconify-icon>
</div>
</div>
<p className="mt-4 text-3xl font-jakarta font-medium tracking-tighter text-slate-100" style={{}}>2</p>
<p className="mt-1 text-[11px] font-medium font-geist tracking-tighter text-orange-400" style={{}}>1 awaiting DO response</p>
</div>

<div className="relative overflow-hidden rounded-2xl border p-5 shadow-sm hover:shadow-md transition-shadow border-black bg-black/60">
<div className="flex items-center justify-between">
<p className="text-xs font-bold uppercase font-geist tracking-tighter text-green-400/60" style={{}}>Resolved</p>
<div className="p-2 rounded-lg bg-green-950 text-green-400" style={{}}>
<iconify-icon icon="lucide:check" width="16"></iconify-icon>
</div>
</div>
<p className="mt-4 text-3xl font-jakarta font-medium tracking-tighter text-slate-100" style={{}}>9</p>
</div>

<div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br p-5 shadow-sm hover:shadow-md transition-shadow border-brand-900 from-black to-brand-950">
<div className="flex items-center justify-between">
<p className="text-xs font-bold uppercase font-geist tracking-tighter text-brand-400/60" style={{}}>Escalated</p>
<div className="p-2 rounded-lg bg-brand-900 text-brand-400">
<iconify-icon icon="lucide:alert-circle" width="16"></iconify-icon>
</div>
</div>
<p className="mt-4 text-3xl font-jakarta font-medium tracking-tighter text-slate-100" style={{}}>1</p>
<p className="mt-1 text-[11px] font-medium font-geist tracking-tighter text-brand-400" style={{}}>Requires Attention</p>
</div>
</div>

<div className="rounded-2xl border shadow-sm overflow-hidden border-brand-900/50 bg-black">
<div className="border-b px-6 py-5 flex items-center justify-between backdrop-blur-sm border-slate-950 bg-black/50" style={{}}>
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-brand-500"></div>
<h3 className="text-sm font-semibold font-geist tracking-tighter text-slate-100" style={{}}>Recent Activity</h3>
</div>
<button className="text-xs font-semibold transition-colors font-geist tracking-tighter text-brand-400 hover:text-brand-200" style={{}}>View All History</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm">
<thead className="text-xs font-semibold uppercase tracking-wider bg-slate-950/50 text-slate-600" style={{}}>
<tr>
<th className="px-6 py-4 font-medium font-geist tracking-tighter" style={{}}>Ref ID</th>
<th className="px-6 py-4 font-medium font-geist tracking-tighter" style={{}}>Category</th>
<th className="px-6 py-4 font-medium font-geist tracking-tighter" style={{}}>Level</th>
<th className="px-6 py-4 font-medium font-geist tracking-tighter" style={{}}>Submitted</th>
<th className="px-6 py-4 font-medium font-geist tracking-tighter" style={{}}>Status</th>
<th className="px-6 py-4 font-medium text-right font-geist tracking-tighter" style={{}}>Action</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-950" id="grievanceTableBody" style={{}}>
<tr className="hover:bg-brand-50/40 transition-colors group">
<td className="px-6 py-4 font-mono text-[11px] text-slate-400 group-hover:text-brand-600 transition-colors">GR-2023-8921</td>
<td className="px-6 py-4 text-slate-900 font-medium text-xs">Infrastructure</td>
<td className="px-6 py-4 text-slate-500 text-xs">Divisional</td>
<td className="px-6 py-4 text-slate-500 text-xs">Oct 12, 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center rounded-md px-2 py-1 text-[10px] font-semibold uppercase tracking-wide bg-orange-50 text-orange-700 border border-orange-100">In Progress</span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-xs font-medium text-slate-400 hover:text-brand-600 transition-colors">Details</button>
</td>
</tr>
<tr className="hover:bg-brand-50/40 transition-colors group">
<td className="px-6 py-4 font-mono text-[11px] text-slate-400 group-hover:text-brand-600 transition-colors">GR-2023-8840</td>
<td className="px-6 py-4 text-slate-900 font-medium text-xs">Transfer</td>
<td className="px-6 py-4 text-slate-500 text-xs">Zonal</td>
<td className="px-6 py-4 text-slate-500 text-xs">Oct 01, 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center rounded-md px-2 py-1 text-[10px] font-semibold uppercase tracking-wide bg-brand-50 text-brand-700 border border-brand-100">Escalated</span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-xs font-medium text-slate-400 hover:text-brand-600 transition-colors">Details</button>
</td>
</tr>
<tr className="hover:bg-brand-50/40 transition-colors group">
<td className="px-6 py-4 font-mono text-[11px] text-slate-400 group-hover:text-brand-600 transition-colors">GR-2023-7721</td>
<td className="px-6 py-4 text-slate-900 font-medium text-xs">Medical</td>
<td className="px-6 py-4 text-slate-500 text-xs">Divisional</td>
<td className="px-6 py-4 text-slate-500 text-xs">Sep 15, 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center rounded-md px-2 py-1 text-[10px] font-semibold uppercase tracking-wide bg-green-50 text-green-700 border border-green-100">Resolved</span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-xs font-medium text-slate-400 hover:text-brand-600 transition-colors">Details</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</main>
</div>

<div className="hidden fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm p-4 bg-slate-100/20" id="modal-new-grievance" style={{}}>
<div className="w-full max-w-lg rounded-2xl shadow-2xl ring-1 fade-in transform transition-all bg-black ring-white/5">
<div className="border-b px-6 py-5 flex items-center justify-between bg-gradient-to-r rounded-t-2xl border-slate-950 from-black to-brand-950/30" style={{}}>
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-950 text-brand-400">
<iconify-icon icon="lucide:pencil" width="14"></iconify-icon>
</div>
<h3 className="text-base font-semibold font-geist tracking-tighter text-slate-100" style={{}}>Submit Grievance</h3>
</div>
<button className="transition-colors rounded-full p-1 text-slate-600 hover:text-slate-400 bg-slate-950 hover:bg-slate-900" onclick="closeModal('new-grievance')" style={{}}><iconify-icon icon="lucide:x" width="18"></iconify-icon></button>
</div>
<div className="px-6 py-6 space-y-5">

<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-semibold mb-1.5 ml-1 font-geist tracking-tighter text-slate-300" style={{}}>Category</label>
<div className="relative">
<select className="appearance-none block w-full rounded-xl border px-4 py-2.5 text-sm focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-500 transition-colors border-slate-800 bg-slate-950 text-slate-100" style={{}}>
<option className="font-geist tracking-tighter" style={{}}>Workplace Harassment</option>
<option className="font-geist tracking-tighter" style={{}}>Transfer Request</option>
<option className="font-geist tracking-tighter" style={{}}>Infrastructure/Barracks</option>
<option className="font-geist tracking-tighter" style={{}}>Leave Issue</option>
<option className="font-geist tracking-tighter" style={{}}>Medical Welfare</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500" style={{}}>
<iconify-icon icon="lucide:chevron-down" width="14"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-xs font-semibold mb-1.5 ml-1 font-geist tracking-tighter text-slate-300" style={{}}>Priority</label>
<div className="relative">
<select className="appearance-none block w-full rounded-xl border px-4 py-2.5 text-sm focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-500 transition-colors border-slate-800 bg-slate-950 text-slate-100" style={{}}>
<option className="font-geist tracking-tighter" style={{}}>Normal</option>
<option className="font-geist tracking-tighter" style={{}}>High</option>
<option className="font-geist tracking-tighter" style={{}}>Urgent</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500" style={{}}>
<iconify-icon icon="lucide:chevron-down" width="14"></iconify-icon>
</div>
</div>
</div>
</div>

<div>
<label className="block text-xs font-semibold mb-1.5 ml-1 font-geist tracking-tighter text-slate-300" style={{}}>Description</label>
<textarea className="block w-full rounded-xl border px-4 py-3 text-sm placeholder-slate-400 focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-500 transition-colors resize-none border-slate-800 bg-slate-950 text-slate-100" placeholder="Please provide specific details regarding the incident or request..." rows="4" style={{}}></textarea>
</div>

<div>
<label className="block text-xs font-semibold mb-1.5 ml-1 font-geist tracking-tighter text-slate-300" style={{}}>Supporting Documents</label>
<div className="flex justify-center rounded-xl border border-dashed px-6 py-6 transition-colors cursor-pointer group relative overflow-hidden border-brand-800 bg-brand-950/30 hover:bg-brand-950">
<div className="text-center relative z-10">
<div className="mx-auto h-10 w-10 flex items-center justify-center rounded-full text-brand-500 shadow-sm mb-2 group-hover:scale-110 transition-transform bg-black">
<iconify-icon icon="lucide:upload-cloud" width="18"></iconify-icon>
</div>
<div className="mt-2 flex text-sm justify-center text-slate-400" style={{}}>
<label className="relative cursor-pointer rounded-md font-medium focus-within:outline-none hover:text-brand-500 hover:underline text-brand-400" htmlFor="file-upload">
<span className="font-geist tracking-tighter" style={{}}>Click to upload</span>
<input className="sr-only" id="file-upload" name="file-upload" type="file"/>
</label>
<p className="pl-1 font-geist tracking-tighter" style={{}}>or drag and drop</p>
</div>
<p className="text-[10px] mt-1 font-geist tracking-tighter text-slate-600" style={{}}>PDF, JPG up to 10MB</p>
</div>
</div>
</div>

<div className="flex items-center justify-between rounded-xl border p-3 shadow-sm border-brand-900 bg-black">
<div className="flex items-center">
<div className="h-8 w-8 rounded-lg flex items-center justify-center text-slate-500 mr-3 bg-slate-900" style={{}}>
<iconify-icon icon="lucide:venetian-mask" width="16"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold font-geist tracking-tighter text-slate-100" style={{}}>File Anonymously</p>
<p className="text-[10px] text-slate-500 font-geist tracking-tighter" style={{}}>Identity will be hidden from Divisional Officer</p>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-brand-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand-600 after:border-slate-300 bg-slate-800" style={{}}></div>
</label>
</div>
</div>
<div className="border-t px-6 py-4 flex justify-end gap-3 rounded-b-2xl border-slate-950 bg-slate-950/50" style={{}}>
<button className="rounded-xl border px-5 py-2.5 text-xs font-semibold transition-all font-geist tracking-tighter border-slate-800 bg-black text-slate-300 hover:bg-slate-950 hover:border-slate-700" onclick="closeModal('new-grievance')" style={{}}>Cancel</button>
<button className="rounded-xl px-5 py-2.5 text-xs font-semibold shadow-lg transition-all font-geist tracking-tighter bg-slate-100 text-black shadow-slate-800 hover:bg-brand-400 hover:shadow-brand-800" onclick="submitGrievance()" style={{}}>Submit Grievance</button>
</div>
</div>
</div>
</div>

<div className="fixed bottom-6 right-6 translate-y-20 opacity-0 transition-all duration-500 z-[60]" id="toast">
<div className="flex items-center gap-3 rounded-xl pl-4 pr-6 py-3.5 shadow-xl border bg-slate-100 text-black shadow-slate-600/20 border-slate-300" style={{}}>
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/20 ring-1 ring-inset ring-green-500/40 text-green-600" style={{}}>
<iconify-icon icon="lucide:check" strokeWidth="3" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold font-geist tracking-tighter" id="toast-title" style={{}}>Success</h4>
<p className="text-xs font-geist tracking-tighter text-slate-600" id="toast-msg" style={{}}>Action completed.</p>
</div>
</div>
</div>


    </>
  );
}
