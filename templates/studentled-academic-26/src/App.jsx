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



        // --- State Management ---
        const state = {
            role: null, // 'student' or 'teacher'
            isLoggedIn: false,
            currentView: 'landing'
        };

        // --- Navigation & View Switching ---
        function navigateTo(viewId) {
            // Check auth for protected routes
            if ((viewId === 'student-dashboard' || viewId === 'teacher-dashboard') && !state.isLoggedIn) {
                navigateTo('auth-select');
                return;
            }

            // Hide all views
            document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
            // Show target view
            document.getElementById(viewId).classList.add('active');
            
            // Scroll top
            window.scrollTo(0,0);
            
            // Re-render chart if student dashboard
            if(viewId === 'student-dashboard') renderChart();
        }

        // --- Authentication Mock Logic ---
        function showAuthForm(role) {
            state.role = role;
            const title = role === 'student' ? 'Student Portal' : 'Faculty Portal';
            document.getElementById('auth-title').innerText = title;
            
            // Toggle RegdNo field visibility
            const studentFields = document.getElementById('student-reg-fields');
            if(role === 'teacher') {
                studentFields.classList.add('hidden');
            } else {
                studentFields.classList.remove('hidden');
            }
            
            navigateTo('auth-form-container');
        }

        function toggleAuthMode(mode) {
            const loginForm = document.getElementById('login-form');
            const regForm = document.getElementById('register-form');
            const tabLogin = document.getElementById('tab-login');
            const tabReg = document.getElementById('tab-register');

            if(mode === 'login') {
                loginForm.classList.remove('hidden');
                regForm.classList.add('hidden');
                tabLogin.classList.replace('bg-transparent', 'bg-white');
                tabLogin.classList.replace('text-slate-500', 'text-slate-900');
                tabReg.classList.replace('bg-white', 'bg-transparent');
                tabReg.classList.replace('text-slate-900', 'text-slate-500');
            } else {
                loginForm.classList.add('hidden');
                regForm.classList.remove('hidden');
                tabReg.classList.replace('bg-transparent', 'bg-white');
                tabReg.classList.replace('text-slate-500', 'text-slate-900');
                tabLogin.classList.replace('bg-white', 'bg-transparent');
                tabLogin.classList.replace('text-slate-900', 'text-slate-500');
            }
        }

        function handleLogin(e) {
            e.preventDefault();
            // Simulate API call
            setTimeout(() => {
                state.isLoggedIn = true;
                document.getElementById('auth-buttons').classList.add('hidden');
                document.getElementById('user-menu').classList.remove('hidden');
                document.getElementById('user-name-display').innerText = state.role === 'teacher' ? 'Prof. User' : 'Student';
                
                if (state.role === 'teacher') navigateTo('teacher-dashboard');
                else navigateTo('student-dashboard');
            }, 800);
        }

        function handleRegister(e) {
            e.preventDefault();
            alert('Registration request sent to admin for verification.');
            toggleAuthMode('login');
        }

        function logout() {
            state.isLoggedIn = false;
            state.role = null;
            document.getElementById('auth-buttons').classList.remove('hidden');
            document.getElementById('user-menu').classList.add('hidden');
            navigateTo('landing');
        }

        // --- Teacher Dashboard Logic ---
        function lookupStudent() {
            const regdNo = document.getElementById('t-regd-lookup').value;
            if(regdNo.length > 3) {
                // Mock Fetch
                document.getElementById('student-details-panel').classList.remove('hidden');
                document.getElementById('sd-name').innerText = "Anjali Rao";
                document.getElementById('sd-roll').innerText = "21CSE045";
                document.getElementById('sd-branch').innerText = "CSE";
            } else {
                alert('Please enter a valid Regd No');
            }
        }

        function calcAttendance() {
            const conducted = parseFloat(document.getElementById('cls-conducted').value) || 0;
            const attended = parseFloat(document.getElementById('cls-attended').value) || 0;
            const pctField = document.getElementById('cls-percentage');
            
            if(conducted > 0) {
                const pct = ((attended / conducted) * 100).toFixed(1);
                pctField.value = pct + '%';
            } else {
                pctField.value = '';
            }
        }

        function savePerformance(e) {
            e.preventDefault();
            alert('Performance record saved successfully!');
            e.target.reset();
            document.getElementById('student-details-panel').classList.add('hidden');
        }

        // --- Modals ---
        function openModal(id) {
            document.getElementById(id).classList.remove('hidden');
            document.getElementById(id).classList.add('flex');
        }
        function closeModal(id) {
            document.getElementById(id).classList.add('hidden');
            document.getElementById(id).classList.remove('flex');
        }

        // --- Charts ---
        let chartInstance = null;
        function renderChart() {
            const ctx = document.getElementById('studentProgressChart').getContext('2d');
            
            if(chartInstance) chartInstance.destroy();

            chartInstance = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Sem 1', 'Sem 2', 'Sem 3'],
                    datasets: [{
                        label: 'CGPA',
                        data: [8.2, 8.5, 8.75],
                        borderColor: '#4f46e5', // Indigo 600
                        backgroundColor: 'rgba(79, 70, 229, 0.1)',
                        borderWidth: 2,
                        tension: 0.4,
                        fill: true,
                        pointBackgroundColor: '#ffffff',
                        pointBorderColor: '#4f46e5',
                        pointBorderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: { display: false }
                    },
                    scales: {
                        y: {
                            beginAtZero: false,
                            min: 5,
                            max: 10,
                            grid: { color: '#f1f5f9' }
                        },
                        x: {
                            grid: { display: false }
                        }
                    }
                }
            });
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
      

<nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-2 cursor-pointer" onclick="navigateTo('landing')">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
<span className="iconify" data-height="20" data-icon="lucide:book-open" data-width="20"></span>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">StudentLedger</span>
</div>
<div className="hidden md:flex items-center gap-6">
<button className="text-sm font-medium text-slate-500 hover:text-slate-900" onclick="navigateTo('landing')">Home</button>
<button className="text-sm font-medium text-slate-500 hover:text-slate-900" onclick="navigateTo('discussion')">Queries</button>
<div className="flex gap-3" id="auth-buttons">
<button className="text-sm font-medium text-slate-600 hover:text-slate-900" onclick="navigateTo('auth-select')">Log in</button>
<button className="rounded-lg bg-slate-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-slate-800" onclick="navigateTo('auth-select')">Get Started</button>
</div>
<div className="hidden flex items-center gap-3" id="user-menu">
<span className="text-sm font-medium text-slate-900" id="user-name-display">User</span>
<button className="text-sm font-medium text-red-500 hover:text-red-600" onclick="logout()">Logout</button>
</div>
</div>

<div className="md:hidden">
<button className="text-slate-500">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>
</nav>

<main className="min-h-screen w-full pb-20">

<section className="view-section active" id="landing">
<div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
<div className="text-center">
<div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/50 px-3 py-1 text-xs font-medium text-indigo-600 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                        Academic Cycle 2024-2025
                    </div>
<h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl mb-6">
                        A Complete Record of Your <br className="hidden sm:block"/>
<span className="text-indigo-600">Academic Journey</span>
</h1>
<p className="mx-auto max-w-2xl text-lg text-slate-500 mb-10">
                        StudentLedger is the centralized academic performance portal. 
                        Securely track attendance, internal marks, lab performance, and semester progress in real-time.
                    </p>
<div className="flex justify-center gap-4">
<button className="btn-primary px-8 py-3 text-base" onclick="navigateTo('auth-select')">
                            Access Portal
                            <span className="iconify" data-icon="lucide:arrow-right"></span>
</button>
<button className="btn-secondary px-8 py-3 text-base" onclick="navigateTo('discussion')">
                            View Queries
                        </button>
</div>
</div>

<div className="mt-24 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
<div className="card bg-slate-50/50 border-slate-100">
<div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
<span className="iconify" data-icon="lucide:bar-chart-2"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Real-time Analytics</h3>
<p className="text-sm text-slate-500">Visual charts for semester-wise progression and subject performance.</p>
</div>
<div className="card bg-slate-50/50 border-slate-100">
<div className="h-10 w-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
<span className="iconify" data-icon="lucide:check-circle"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Attendance Tracking</h3>
<p className="text-sm text-slate-500">Auto-calculated percentage tracking to ensure eligibility for finals.</p>
</div>
<div className="card bg-slate-50/50 border-slate-100">
<div className="h-10 w-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
<span className="iconify" data-icon="lucide:shield-check"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Secure Records</h3>
<p className="text-sm text-slate-500">Role-based access ensures data integrity between teachers and students.</p>
</div>
</div>
</div>
</section>

<section className="view-section" id="auth-select">
<div className="flex min-h-[80vh] flex-col items-center justify-center px-4">
<div className="w-full max-w-md space-y-8">
<div className="text-center">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Select your Role</h2>
<p className="mt-2 text-sm text-slate-500">Choose how you want to access the portal</p>
</div>
<div className="grid gap-4">
<button className="group relative flex w-full items-center rounded-xl border border-slate-200 p-4 hover:border-indigo-300 hover:bg-indigo-50/30 transition-all" onclick="showAuthForm('student')">
<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:graduation-cap" data-width="24"></span>
</div>
<div className="ml-4 text-left">
<h3 className="font-medium text-slate-900">Student Access</h3>
<p className="text-xs text-slate-500">View performance, attendance &amp; profile</p>
</div>
<span className="iconify ml-auto text-slate-300 group-hover:text-indigo-400" data-icon="lucide:chevron-right"></span>
</button>
<button className="group relative flex w-full items-center rounded-xl border border-slate-200 p-4 hover:border-emerald-300 hover:bg-emerald-50/30 transition-all" onclick="showAuthForm('teacher')">
<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:pen-tool" data-width="24"></span>
</div>
<div className="ml-4 text-left">
<h3 className="font-medium text-slate-900">Teacher Portal</h3>
<p className="text-xs text-slate-500">Manage subjects, enter marks &amp; remarks</p>
</div>
<span className="iconify ml-auto text-slate-300 group-hover:text-emerald-400" data-icon="lucide:chevron-right"></span>
</button>
</div>
</div>
</div>
</section>

<section className="view-section" id="auth-form-container">
<div className="flex min-h-[80vh] items-center justify-center px-4">
<div className="w-full max-w-md card">
<div className="mb-6 text-center">
<h2 className="text-xl font-semibold text-slate-900" id="auth-title">Student Login</h2>
<div className="mt-4 flex justify-center rounded-lg bg-slate-100 p-1">
<button className="w-1/2 rounded-md bg-white py-1.5 text-xs font-medium text-slate-900 shadow-sm transition-all" id="tab-login" onclick="toggleAuthMode('login')">Login</button>
<button className="w-1/2 rounded-md py-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 transition-all" id="tab-register" onclick="toggleAuthMode('register')">Register</button>
</div>
</div>
<form className="space-y-4" id="login-form" onsubmit="handleLogin(event)">
<div>
<label className="mb-1 block text-xs font-medium text-slate-700">Email Address</label>
<input className="input-primary" placeholder="you@university.edu" required="" type="email"/>
</div>
<div>
<label className="mb-1 block text-xs font-medium text-slate-700">Password</label>
<input className="input-primary" placeholder="••••••••" required="" type="password"/>
</div>
<button className="btn-primary w-full" type="submit">Sign In</button>
</form>
<form className="hidden space-y-4" id="register-form" onsubmit="handleRegister(event)">
<div>
<label className="mb-1 block text-xs font-medium text-slate-700">Full Name</label>
<input className="input-primary" required="" type="text"/>
</div>

<div className="space-y-4" id="student-reg-fields">
<div>
<label className="mb-1 block text-xs font-medium text-slate-700">Registration Number (Regd No)</label>
<input className="input-primary" id="reg-no-input" placeholder="e.g. 2105189001" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="mb-1 block text-xs font-medium text-slate-700">Roll Number</label>
<input className="input-primary" type="text"/>
</div>
<div>
<label className="mb-1 block text-xs font-medium text-slate-700">Branch</label>
<select className="input-primary">
<option>CSE</option>
<option>ECE</option>
<option>MECH</option>
<option>CIVIL</option>
</select>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="mb-1 block text-xs font-medium text-slate-700">Year</label>
<select className="input-primary">
<option>1st</option>
<option>2nd</option>
<option>3rd</option>
<option>4th</option>
</select>
</div>
<div>
<label className="mb-1 block text-xs font-medium text-slate-700">Semester</label>
<select className="input-primary">
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
<option>6</option>
<option>7</option>
<option>8</option>
</select>
</div>
</div>
</div>
<div>
<label className="mb-1 block text-xs font-medium text-slate-700">Email Address</label>
<input className="input-primary" required="" type="email"/>
</div>
<div>
<label className="mb-1 block text-xs font-medium text-slate-700">Create Password</label>
<input className="input-primary" required="" type="password"/>
</div>
<button className="btn-primary w-full" type="submit">Create Account</button>
</form>
</div>
</div>
</section>

<section className="view-section" id="teacher-dashboard">
<div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
<div className="mb-8 flex items-end justify-between">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-slate-900">Faculty Dashboard</h1>
<p className="text-sm text-slate-500">Manage subject performance and records.</p>
</div>
<button className="btn-secondary text-xs" onclick="openModal('add-subject-modal')">
<span className="iconify" data-icon="lucide:plus"></span> Add Subject
                    </button>
</div>
<div className="grid gap-8 lg:grid-cols-3">

<div className="lg:col-span-2 space-y-6">
<div className="card">
<div className="mb-4 border-b border-slate-100 pb-4">
<h3 className="text-lg font-medium text-slate-900">Performance Entry</h3>
</div>
<form id="performance-entry-form" onsubmit="savePerformance(event)">

<div className="grid gap-4 sm:grid-cols-2 mb-4">
<div>
<label className="mb-1 block text-xs font-medium text-slate-700">Select Subject</label>
<select className="input-primary" id="t-subject-select">
<option value="">Choose Subject...</option>
<option value="cs101">Data Structures (CSE-2nd Year)</option>
<option value="cs102">Algorithms (CSE-2nd Year)</option>
</select>
</div>
<div>
<label className="mb-1 block text-xs font-medium text-slate-700">Exam Type</label>
<select className="input-primary" id="t-exam-type" required="">
<option value="">Select Exam...</option>
<option>1st Internal</option>
<option>2nd Internal</option>
<option>1st Semester</option>
<option>2nd Semester</option>
<option>Monthly Test 1</option>
<option>1st Assignment</option>
</select>
</div>
</div>

<div className="mb-6 rounded-lg bg-slate-50 p-4 border border-slate-200">
<label className="mb-1 block text-xs font-medium text-slate-700">Student Regd No.</label>
<div className="flex gap-2">
<input className="input-primary" id="t-regd-lookup" placeholder="Enter Regd No" type="text"/>
<button className="btn-secondary whitespace-nowrap" onclick="lookupStudent()" type="button">Fetch Details</button>
</div>

<div className="hidden mt-4 grid grid-cols-2 gap-4 text-sm sm:grid-cols-3" id="student-details-panel">
<div><span className="block text-xs text-slate-400">Name</span> <span className="font-medium text-slate-900" id="sd-name">--</span></div>
<div><span className="block text-xs text-slate-400">Roll No</span> <span className="font-medium text-slate-900" id="sd-roll">--</span></div>
<div><span className="block text-xs text-slate-400">Branch</span> <span className="font-medium text-slate-900" id="sd-branch">--</span></div>
</div>
</div>

<div className="grid gap-4 sm:grid-cols-2 mb-4">
<div>
<label className="mb-1 block text-xs font-medium text-slate-700">Marks Obtained</label>
<input className="input-primary" placeholder="0" type="number"/>
</div>
<div>
<label className="mb-1 block text-xs font-medium text-slate-700">Max Marks</label>
<input className="input-primary" type="number" value="100"/>
</div>
</div>
<div className="grid gap-4 sm:grid-cols-3 mb-4">
<div>
<label className="mb-1 block text-xs font-medium text-slate-700">Classes Conducted</label>
<input className="input-primary" id="cls-conducted" oninput="calcAttendance()" type="number"/>
</div>
<div>
<label className="mb-1 block text-xs font-medium text-slate-700">Classes Attended</label>
<input className="input-primary" id="cls-attended" oninput="calcAttendance()" type="number"/>
</div>
<div>
<label className="mb-1 block text-xs font-medium text-slate-700">Percentage</label>
<input className="input-primary bg-slate-100" id="cls-percentage" readonly="" type="text"/>
</div>
</div>

<div className="grid gap-4 sm:grid-cols-2 mb-4">
<div>
<label className="mb-1 block text-xs font-medium text-slate-700">Lab Performance</label>
<select className="input-primary">
<option>Excellent</option>
<option>Good</option>
<option>Average</option>
<option>Poor</option>
</select>
</div>
<div>
<label className="mb-1 block text-xs font-medium text-slate-700">Theory Performance</label>
<select className="input-primary">
<option>Excellent</option>
<option>Good</option>
<option>Average</option>
<option>Poor</option>
</select>
</div>
</div>
<div className="mb-6">
<label className="mb-1 block text-xs font-medium text-slate-700">Remarks (Optional)</label>
<textarea className="input-primary h-20 resize-none"></textarea>
</div>
<div className="flex justify-end gap-3">
<button className="btn-secondary" type="reset">Clear</button>
<button className="btn-primary" type="submit">Save Record</button>
</div>
</form>
</div>
</div>

<div className="space-y-6">
<div className="card h-full">
<h3 className="text-sm font-medium text-slate-900 mb-4">Recent Uploads</h3>
<div className="space-y-4">

<div className="flex items-start gap-3 border-b border-slate-50 pb-3 last:border-0">
<div className="mt-0.5 h-2 w-2 rounded-full bg-emerald-500"></div>
<div>
<p className="text-sm font-medium text-slate-900">Anjali Rao (210518)</p>
<p className="text-xs text-slate-500">Data Structures • 1st Internal</p>
<span className="mt-1 inline-block rounded bg-emerald-50 px-1.5 py-0.5 text-[10px] font-medium text-emerald-600">Saved</span>
</div>
</div>
<div className="flex items-start gap-3 border-b border-slate-50 pb-3 last:border-0">
<div className="mt-0.5 h-2 w-2 rounded-full bg-emerald-500"></div>
<div>
<p className="text-sm font-medium text-slate-900">Rahul Verma (210519)</p>
<p className="text-xs text-slate-500">Data Structures • 1st Internal</p>
<span className="mt-1 inline-block rounded bg-emerald-50 px-1.5 py-0.5 text-[10px] font-medium text-emerald-600">Saved</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="view-section" id="student-dashboard">
<div className="bg-indigo-900 pb-24 pt-10 text-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
<div className="flex items-center gap-4">
<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-2xl font-bold text-white backdrop-blur-sm">
                                AR
                            </div>
<div>
<h1 className="text-2xl font-semibold tracking-tight">Anjali Rao</h1>
<p className="text-indigo-200 text-sm">Regd: 2105189001 • CSE • Sem 4</p>
</div>
</div>
<div className="flex gap-4">
<div className="text-right">
<p className="text-xs text-indigo-300">Overall CGPA</p>
<p className="text-xl font-bold">8.75</p>
</div>
<div className="h-10 w-px bg-white/20"></div>
<div className="text-right">
<p className="text-xs text-indigo-300">Attendance</p>
<p className="text-xl font-bold text-emerald-300">92%</p>
</div>
</div>
</div>
</div>
</div>
<div className="mx-auto mt-[-60px] max-w-7xl px-4 sm:px-6 lg:px-8 pb-10">
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

<div className="card col-span-1 lg:col-span-2">
<h3 className="mb-4 text-base font-medium text-slate-900">Subject Performance</h3>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm text-slate-600">
<thead className="border-b border-slate-100 bg-slate-50 text-xs uppercase text-slate-500">
<tr>
<th className="px-4 py-3 font-medium">Subject</th>
<th className="px-4 py-3 font-medium">Exam</th>
<th className="px-4 py-3 font-medium">Marks</th>
<th className="px-4 py-3 font-medium">Status</th>
<th className="px-4 py-3 font-medium text-right">Remarks</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr>
<td className="px-4 py-3 font-medium text-slate-900">Data Structures</td>
<td className="px-4 py-3">1st Internal</td>
<td className="px-4 py-3">28/30</td>
<td className="px-4 py-3"><span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700">Excellent</span></td>
<td className="px-4 py-3 text-right text-xs text-slate-400">Consistent effort</td>
</tr>
<tr>
<td className="px-4 py-3 font-medium text-slate-900">Digital Logic</td>
<td className="px-4 py-3">1st Internal</td>
<td className="px-4 py-3">24/30</td>
<td className="px-4 py-3"><span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700">Good</span></td>
<td className="px-4 py-3 text-right text-xs text-slate-400">-</td>
</tr>
<tr>
<td className="px-4 py-3 font-medium text-slate-900">Mathematics IV</td>
<td className="px-4 py-3">Assignment 1</td>
<td className="px-4 py-3">10/10</td>
<td className="px-4 py-3"><span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700">Excellent</span></td>
<td className="px-4 py-3 text-right text-xs text-slate-400">Well presented</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="card">
<h3 className="mb-4 text-base font-medium text-slate-900">Semester Progression</h3>
<canvas height="200" id="studentProgressChart"></canvas>
<div className="mt-4 grid grid-cols-2 gap-2 text-center text-xs text-slate-500">
<div className="rounded bg-slate-50 p-2">Lab: <span className="font-semibold text-slate-900">Excellent</span></div>
<div className="rounded bg-slate-50 p-2">Theory: <span className="font-semibold text-slate-900">Good</span></div>
</div>
</div>
</div>
</div>
</section>

<section className="view-section" id="discussion">
<div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
<div className="mb-8 flex items-center justify-between">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-slate-900">Student Queries</h1>
<p className="text-sm text-slate-500">Discussion board for academic and system queries.</p>
</div>
<button className="btn-primary" onclick="openModal('new-query-modal')">
<span className="iconify" data-icon="lucide:message-square-plus"></span>
                        Post Query
                    </button>
</div>

<div className="space-y-4">

<div className="card hover:shadow-md transition-shadow">
<div className="mb-2 flex items-center justify-between">
<span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">Academic</span>
<span className="text-xs text-slate-400">2 hours ago</span>
</div>
<h3 className="text-lg font-medium text-slate-900">Discrepancy in 1st Internal Marks (Data Structures)</h3>
<p className="mt-1 text-sm text-slate-600">My marks on the portal show 22, but on the paper I received 25. Can this be checked?</p>

<div className="mt-4 rounded-lg bg-indigo-50/50 p-3 ring-1 ring-indigo-100">
<div className="mb-1 flex items-center gap-2">
<span className="iconify text-indigo-600" data-icon="lucide:check-circle" data-width="16"></span>
<span className="text-xs font-bold text-indigo-900">Prof. Sharma (Verified Teacher)</span>
</div>
<p className="text-xs text-indigo-800">Please bring your answer script to the faculty room tomorrow at 11 AM for verification.</p>
</div>
</div>

<div className="card hover:shadow-md transition-shadow">
<div className="mb-2 flex items-center justify-between">
<span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">System</span>
<span className="text-xs text-slate-400">1 day ago</span>
</div>
<h3 className="text-lg font-medium text-slate-900">Unable to view Semester 3 Chart</h3>
<p className="mt-1 text-sm text-slate-600">The graph for semester 3 seems to be missing from my dashboard.</p>
</div>
</div>
</div>
</section>
</main>


<div className="fixed inset-0 z-50 hidden items-center justify-center bg-slate-900/50 backdrop-blur-sm" id="add-subject-modal">
<div className="w-full max-w-md card m-4">
<h3 className="mb-4 text-lg font-medium text-slate-900">Add New Subject</h3>
<div className="space-y-4">
<input className="input-primary" placeholder="Subject Name" type="text"/>
<select className="input-primary">
<option>CSE</option>
<option>ECE</option>
</select>
<div className="flex gap-4">
<select className="input-primary w-1/2"><option>Year 1</option><option>Year 2</option></select>
<select className="input-primary w-1/2"><option>Sem 1</option><option>Sem 2</option></select>
</div>
<div className="flex justify-end gap-3 pt-2">
<button className="btn-secondary" onclick="closeModal('add-subject-modal')">Cancel</button>
<button className="btn-primary" onclick="closeModal('add-subject-modal')">Add Subject</button>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden items-center justify-center bg-slate-900/50 backdrop-blur-sm" id="new-query-modal">
<div className="w-full max-w-lg card m-4">
<h3 className="mb-4 text-lg font-medium text-slate-900">Post New Query</h3>
<div className="space-y-4">
<input className="input-primary" placeholder="Query Title" type="text"/>
<select className="input-primary">
<option>Academic</option>
<option>Exam</option>
<option>Attendance</option>
<option>System</option>
</select>
<textarea className="input-primary h-32 resize-none" placeholder="Describe your issue detailedly..."></textarea>
<div className="flex justify-end gap-3 pt-2">
<button className="btn-secondary" onclick="closeModal('new-query-modal')">Cancel</button>
<button className="btn-primary" onclick="closeModal('new-query-modal')">Post Query</button>
</div>
</div>
</div>
</div>



    </>
  );
}
