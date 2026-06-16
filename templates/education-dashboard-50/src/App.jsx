import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // -- Login & Role State --
        let currentRole = 'Admin';
        
        function setRole(role) {
            currentRole = role;
            const roles = ['Admin', 'Teacher', 'Student'];
            roles.forEach(r => {
                const btn = document.getElementById('btn-' + r);
                if (r === role) {
                    btn.className = 'flex-1 text-xs font-semibold py-1.5 rounded-md bg-white text-gray-900 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all';
                } else {
                    btn.className = 'flex-1 text-xs font-semibold py-1.5 rounded-md text-gray-500 hover:text-gray-900 transition-all bg-transparent shadow-none';
                }
            });
            
            // Adjust email placeholder based on role
            const emailInput = document.getElementById('login-email');
            if (role === 'Admin') emailInput.placeholder = 'admin@albrighty.edu';
            if (role === 'Teacher') emailInput.placeholder = 'teacher.name@albrighty.edu';
            if (role === 'Student') emailInput.placeholder = 'student.id@albrighty.edu';
        }

        function handleLogin(e) {
            e.preventDefault();
            
            // Set Dashboard text based on role
            document.getElementById('sidebar-role-badge').innerText = currentRole + ' Portal';

            // Transition UI
            document.getElementById('login-section').classList.add('hidden');
            document.getElementById('dashboard-section').classList.remove('hidden');
            document.getElementById('dashboard-section').classList.add('flex');
            
            showToast(`Successfully signed in as ${currentRole}`);
        }

        function logout() {
            document.getElementById('dashboard-section').classList.add('hidden');
            document.getElementById('dashboard-section').classList.remove('flex');
            document.getElementById('login-section').classList.remove('hidden');
            showToast('You have been signed out.');
            
            // Ensure sidebar is closed if on mobile
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('sidebar-overlay');
            sidebar.classList.add('-translate-x-full');
            overlay.classList.add('hidden');
        }

        // -- Navigation & Sidebar --
        function toggleMenu() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('sidebar-overlay');
            
            sidebar.classList.toggle('-translate-x-full');
            overlay.classList.toggle('hidden');
        }

        function navigate(page, el) {
            // Remove active state from all
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.className = 'nav-btn flex w-full items-center gap-3 px-3 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md text-sm font-medium transition-colors group';
                btn.children[0].className = 'text-lg opacity-70 group-hover:opacity-100 transition-opacity';
            });
            
            // Add active state to clicked
            if (el) {
                el.className = 'nav-btn flex w-full items-center gap-3 px-3 py-2 bg-gray-100 text-gray-900 rounded-md text-sm font-medium transition-colors group';
                el.children[0].className = 'text-lg opacity-80';
            }
            
            showToast(`Navigated to ${page}`);
            
            // Close sidebar on mobile after clicking a link
            if(window.innerWidth < 768) {
                toggleMenu();
            }
        }

        // -- Actions & Modals --
        function generateReport() {
            showToast('Report generation has started. This may take a moment.');
        }

        function toggleTask(checkbox) {
            if(checkbox.checked) {
                showToast('Task marked as completed');
            } else {
                showToast('Task marked as pending');
            }
        }

        function openModal(id) {
            const modal = document.getElementById(id);
            const content = document.getElementById(id + '-content');
            const backdrop = document.getElementById(id + '-backdrop');
            
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            
            requestAnimationFrame(() => {
                backdrop.classList.remove('opacity-0');
                backdrop.classList.add('opacity-100');
                content.classList.remove('scale-95', 'opacity-0');
                content.classList.add('scale-100', 'opacity-100');
            });
        }

        function closeModal(id) {
            const modal = document.getElementById(id);
            const content = document.getElementById(id + '-content');
            const backdrop = document.getElementById(id + '-backdrop');
            
            backdrop.classList.remove('opacity-100');
            backdrop.classList.add('opacity-0');
            content.classList.remove('scale-100', 'opacity-100');
            content.classList.add('scale-95', 'opacity-0');
            
            setTimeout(() => {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            }, 200);
        }

        function submitAdmission(e) {
            e.preventDefault();
            closeModal('admission-modal');
            e.target.reset(); // clear form
            setTimeout(() => {
                showToast('New student registered successfully');
            }, 200);
        }

        // -- Toasts --
        function showToast(message) {
            const container = document.getElementById('toast-container');
            const toast = document.createElement('div');
            
            toast.className = 'bg-gray-900 text-white px-4 py-2.5 rounded-lg text-sm font-medium shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center gap-2 transform translate-y-full opacity-0 transition-all duration-300 ease-out';
            toast.innerHTML = `<iconify-icon icon="solar:info-circle-linear" class="text-lg opacity-80"></iconify-icon> ${message}`;
            
            container.appendChild(toast);
            
            // Slide in
            requestAnimationFrame(() => {
                toast.classList.remove('translate-y-full', 'opacity-0');
            });

            // Slide out and remove
            setTimeout(() => {
                toast.classList.add('translate-y-full', 'opacity-0');
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed bottom-6 right-6 z-[200] flex flex-col gap-3 pointer-events-none" id="toast-container"></div>



<section className="flex h-full w-full items-center justify-center p-4 relative z-50 bg-[#FAFAFA]" id="login-section">
<div className="w-full max-w-[360px] border rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-black border-gray-800/80">
<div className="text-center mb-8">
<h1 className="text-xl font-semibold tracking-tighter text-gray-100">ALBRIGHTY ACADEMY</h1>
<p className="text-sm text-gray-500 mt-1.5 tracking-tight">Sign in to your dashboard</p>
</div>

<div className="flex p-1 rounded-lg mb-6 border bg-gray-900/80 border-gray-800/50">
<button className="flex-1 text-xs font-semibold py-1.5 rounded-md shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all bg-black text-gray-100" id="btn-Admin" onclick="setRole('Admin')" type="button">Admin</button>
<button className="flex-1 text-xs font-semibold py-1.5 rounded-md text-gray-500 transition-all hover:text-gray-100" id="btn-Teacher" onclick="setRole('Teacher')" type="button">Teacher</button>
<button className="flex-1 text-xs font-semibold py-1.5 rounded-md text-gray-500 transition-all hover:text-gray-100" id="btn-Student" onclick="setRole('Student')" type="button">Student</button>
</div>

<form className="space-y-4" onsubmit="handleLogin(event)">
<div>
<label className="block text-xs font-medium mb-1.5 text-gray-300">Email or Username</label>
<input className="w-full px-3 py-2 border rounded-lg text-sm focus:bg-white focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300 transition-all placeholder-gray-400 bg-gray-950/50 border-gray-800" id="login-email" placeholder="admin@albrighty.edu" required="" type="text"/>
</div>
<div>
<div className="flex items-center justify-between mb-1.5">
<label className="block text-xs font-medium text-gray-300">Password</label>
<a className="text-xs font-medium text-gray-500 transition-colors hover:text-gray-100" href="#" onclick="showToast('Password reset link sent to your email.')">Forgot?</a>
</div>
<input className="w-full px-3 py-2 border rounded-lg text-sm focus:bg-white focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300 transition-all placeholder-gray-400 bg-gray-950/50 border-gray-800" placeholder="••••••••" required="" type="password"/>
</div>
<button className="w-full py-2.5 rounded-lg text-sm font-semibold transition-colors mt-2 shadow-sm flex items-center justify-center gap-2 bg-gray-100 text-black hover:bg-gray-200" type="submit">
                    Sign In <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</section>



<section className="hidden h-full w-full flex-row relative z-10" id="dashboard-section">

<div className="fixed inset-0 backdrop-blur-sm z-40 hidden md:hidden bg-gray-100/20" id="sidebar-overlay" onclick="toggleMenu()"></div>

<aside className="fixed inset-y-0 left-0 z-50 w-64 border-r transform -translate-x-full md:translate-x-0 md:static md:flex flex-col transition-transform duration-300 ease-in-out shrink-0 bg-black border-gray-800" id="sidebar">
<div className="h-16 flex items-center justify-between px-6 border-b border-gray-800/60">
<span className="text-base font-semibold tracking-tighter text-gray-100">ALBRIGHTY ACADEMY</span>
<button className="md:hidden text-gray-500 hover:text-gray-100" onclick="toggleMenu()">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto py-5 px-3 flex flex-col gap-6">
<div className="px-3 mb-1">
<p className="text-xs font-semibold text-gray-500 tracking-wider uppercase" id="sidebar-role-badge">Admin Portal</p>
</div>

<nav className="flex flex-col gap-1">
<button className="nav-btn flex w-full items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors bg-gray-900 text-gray-100" onclick="navigate('Dashboard', this)">
<iconify-icon className="text-lg opacity-80" icon="solar:widget-5-linear"></iconify-icon> Dashboard
                    </button>
<button className="nav-btn flex w-full items-center gap-3 px-3 py-2 text-gray-500 rounded-md text-sm font-medium transition-colors group hover:text-gray-100 hover:bg-gray-950" onclick="navigate('Students', this)">
<iconify-icon className="text-lg opacity-70 group-hover:opacity-100 transition-opacity" icon="solar:users-group-rounded-linear"></iconify-icon> Students
                    </button>
<button className="nav-btn flex w-full items-center gap-3 px-3 py-2 text-gray-500 rounded-md text-sm font-medium transition-colors group hover:text-gray-100 hover:bg-gray-950" onclick="navigate('Teachers', this)">
<iconify-icon className="text-lg opacity-70 group-hover:opacity-100 transition-opacity" icon="solar:user-id-linear"></iconify-icon> Teachers
                    </button>
<button className="nav-btn flex w-full items-center gap-3 px-3 py-2 text-gray-500 rounded-md text-sm font-medium transition-colors group hover:text-gray-100 hover:bg-gray-950" onclick="navigate('Classes', this)">
<iconify-icon className="text-lg opacity-70 group-hover:opacity-100 transition-opacity" icon="solar:book-bookmark-linear"></iconify-icon> Classes
                    </button>
<button className="nav-btn flex w-full items-center gap-3 px-3 py-2 text-gray-500 rounded-md text-sm font-medium transition-colors group hover:text-gray-100 hover:bg-gray-950" onclick="navigate('Schedule', this)">
<iconify-icon className="text-lg opacity-70 group-hover:opacity-100 transition-opacity" icon="solar:calendar-linear"></iconify-icon> Schedule
                    </button>
<button className="nav-btn flex w-full items-center gap-3 px-3 py-2 text-gray-500 rounded-md text-sm font-medium transition-colors group hover:text-gray-100 hover:bg-gray-950" onclick="navigate('Grades', this)">
<iconify-icon className="text-lg opacity-70 group-hover:opacity-100 transition-opacity" icon="solar:file-check-linear"></iconify-icon> Grades
                    </button>
</nav>

<div className="mt-auto flex flex-col gap-1 border-t pt-4 border-gray-800/60">
<button className="nav-btn flex w-full items-center gap-3 px-3 py-2 text-gray-500 rounded-md text-sm font-medium transition-colors group hover:text-gray-100 hover:bg-gray-950" onclick="navigate('Settings', this)">
<iconify-icon className="text-lg opacity-70 group-hover:opacity-100 transition-opacity" icon="solar:settings-linear"></iconify-icon> Settings
                    </button>
<button className="nav-btn flex w-full items-center gap-3 px-3 py-2 text-gray-500 rounded-md text-sm font-medium transition-colors group hover:text-gray-100 hover:bg-gray-950" onclick="navigate('Support', this)">
<iconify-icon className="text-lg opacity-70 group-hover:opacity-100 transition-opacity" icon="solar:help-linear"></iconify-icon> Support
                    </button>
<button className="flex w-full items-center gap-3 px-3 py-2 mt-2 text-gray-500 rounded-md text-sm font-medium transition-colors group hover:text-red-400 hover:bg-red-950" onclick="logout()">
<iconify-icon className="text-lg opacity-70 group-hover:opacity-100 transition-opacity" icon="solar:logout-2-linear"></iconify-icon> Sign Out
                    </button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 relative">

<header className="h-16 flex items-center justify-between px-6 lg:px-10 border-b backdrop-blur-md sticky top-0 z-30 border-gray-800 bg-black/80">
<div className="flex items-center gap-4 flex-1">
<button className="md:hidden text-gray-500 transition-colors hover:text-gray-100" onclick="toggleMenu()">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>

<div className="hidden sm:flex items-center w-full max-w-sm relative group">
<iconify-icon className="absolute left-3 group-focus-within:text-gray-900 transition-colors text-gray-600" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full pl-9 pr-4 py-1.5 border rounded-lg text-sm focus:bg-white focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300 transition-all placeholder-gray-400 bg-gray-950 border-gray-800 text-gray-100" placeholder="Search students, classes, or staff..." type="text"/>
<div className="absolute right-2.5 flex items-center gap-1 pointer-events-none">
<kbd className="hidden lg:inline-flex items-center justify-center px-1.5 py-0.5 border rounded text-[10px] font-semibold shadow-sm border-gray-800 text-gray-600 bg-black">⌘</kbd>
<kbd className="hidden lg:inline-flex items-center justify-center px-1.5 py-0.5 border rounded text-[10px] font-semibold shadow-sm border-gray-800 text-gray-600 bg-black">K</kbd>
</div>
</div>
</div>

<div className="flex items-center gap-5">
<button className="transition-colors relative text-gray-600 hover:text-gray-100" onclick="showToast('You have 3 new notifications')">
<iconify-icon className="text-xl" icon="solar:bell-linear"></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 rounded-full border-2 translate-x-1/4 -translate-y-1/4 bg-white border-black"></span>
</button>
<div className="w-[1px] h-4 bg-gray-800"></div>
<button className="flex items-center gap-2 hover:opacity-80 transition-opacity" onclick="showToast('Profile menu opened')">
<img alt="Profile" className="w-8 h-8 rounded-full border object-cover shadow-sm border-gray-800" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1d76351f-91ba-4823-b88d-8f8d68d1acfe_3840w.png"/>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto">
<div className="p-6 lg:p-10 max-w-7xl mx-auto space-y-8">

<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
<div>
<h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-100">Albrighty Academy Dashboard</h1>
<p className="text-sm text-gray-500 mt-1.5 flex flex-wrap items-center gap-1.5">
                                Overview of daily activities for KG 1 up to Grade 8
                                <span className="hidden sm:inline text-gray-700">•</span>
<span className="flex items-center gap-1 font-medium px-2 py-0.5 rounded-md border text-gray-300 bg-gray-900 border-gray-800/60">
<iconify-icon className="text-gray-500" icon="solar:map-point-linear"></iconify-icon>
                                    Shegar City Guje Gafarsa Kella
                                </span>
</p>
</div>
<div className="flex items-center gap-3 shrink-0">
<button className="px-4 py-2 border text-sm font-semibold rounded-lg transition-colors shadow-sm focus:ring-2 focus:ring-gray-200 focus:outline-none bg-black border-gray-800 text-gray-100 hover:bg-gray-950" onclick="generateReport()">
                                Generate Report
                            </button>
<button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition-colors shadow-sm focus:ring-2 focus:ring-gray-400 focus:outline-none focus:ring-offset-1 bg-gray-100 text-black hover:bg-gray-200" onclick="openModal('admission-modal')">
<iconify-icon className="text-base" icon="solar:add-circle-linear"></iconify-icon>
                                New Admission
                            </button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">

<div className="p-5 rounded-xl border flex flex-col gap-3 shadow-[0_1px_2px_rgba(0,0,0,0.01)] transition-colors cursor-default bg-black border-gray-800 hover:border-gray-700">
<div className="flex justify-between items-start">
<span className="text-sm font-medium text-gray-500">Total Students</span>
<div className="w-8 h-8 rounded-lg border flex items-center justify-center bg-gray-950 border-gray-800/60 text-gray-400">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-gray-100">2,841</div>
<div className="text-xs text-gray-500 flex items-center gap-1.5 mt-1.5">
<span className="flex items-center gap-0.5 font-semibold px-1.5 py-0.5 rounded-md border text-green-300 bg-green-950 border-green-900">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> 12%
                                    </span>
<span>vs last month</span>
</div>
</div>
</div>

<div className="p-5 rounded-xl border flex flex-col gap-3 shadow-[0_1px_2px_rgba(0,0,0,0.01)] transition-colors cursor-default bg-black border-gray-800 hover:border-gray-700">
<div className="flex justify-between items-start">
<span className="text-sm font-medium text-gray-500">Active Teachers</span>
<div className="w-8 h-8 rounded-lg border flex items-center justify-center bg-gray-950 border-gray-800/60 text-gray-400">
<iconify-icon className="text-lg" icon="solar:user-id-linear"></iconify-icon>
</div>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-gray-100">142</div>
<div className="text-xs text-gray-500 flex items-center gap-1.5 mt-1.5">
<span className="flex items-center gap-0.5 font-semibold px-1.5 py-0.5 rounded-md border text-gray-400 bg-gray-900 border-gray-800">
<iconify-icon icon="solar:minus-linear"></iconify-icon> 0%
                                    </span>
<span>vs last month</span>
</div>
</div>
</div>

<div className="p-5 rounded-xl border flex flex-col gap-3 shadow-[0_1px_2px_rgba(0,0,0,0.01)] transition-colors cursor-default bg-black border-gray-800 hover:border-gray-700">
<div className="flex justify-between items-start">
<span className="text-sm font-medium text-gray-500">Ongoing Classes</span>
<div className="w-8 h-8 rounded-lg border flex items-center justify-center bg-gray-950 border-gray-800/60 text-gray-400">
<iconify-icon className="text-lg" icon="solar:book-bookmark-linear"></iconify-icon>
</div>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-gray-100">86</div>
<div className="text-xs text-gray-500 flex items-center gap-1.5 mt-1.5">
<span className="flex items-center gap-0.5 font-semibold px-1.5 py-0.5 rounded-md border text-green-300 bg-green-950 border-green-900">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> 4%
                                    </span>
<span>vs last month</span>
</div>
</div>
</div>

<div className="p-5 rounded-xl border flex flex-col gap-3 shadow-[0_1px_2px_rgba(0,0,0,0.01)] transition-colors cursor-default bg-black border-gray-800 hover:border-gray-700">
<div className="flex justify-between items-start">
<span className="text-sm font-medium text-gray-500">Avg. Attendance</span>
<div className="w-8 h-8 rounded-lg border flex items-center justify-center bg-gray-950 border-gray-800/60 text-gray-400">
<iconify-icon className="text-lg" icon="solar:chart-2-linear"></iconify-icon>
</div>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-gray-100">94.2%</div>
<div className="text-xs text-gray-500 flex items-center gap-1.5 mt-1.5">
<span className="flex items-center gap-0.5 font-semibold px-1.5 py-0.5 rounded-md border text-red-400 bg-red-950 border-red-900">
<iconify-icon icon="solar:arrow-right-down-linear"></iconify-icon> 1.2%
                                    </span>
<span>vs last week</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

<div className="lg:col-span-2 space-y-6 lg:space-y-8">

<div className="border rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.01)] overflow-hidden bg-black border-gray-800">
<div className="px-6 py-4 border-b flex justify-between items-center border-gray-800 bg-gray-950/50">
<h2 className="text-sm font-semibold text-gray-100">Today's Schedule</h2>
<button className="text-xs text-gray-500 font-medium transition-colors flex items-center gap-1 hover:text-gray-100" onclick="navigate('Full Schedule', this)">
                                        View full calendar <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="divide-y divide-gray-900">

<button className="w-full px-6 py-4 flex items-center gap-4 transition-colors group text-left hover:bg-gray-950/50" onclick="showToast('Opened Math class details')">
<div className="w-12 h-12 rounded-xl border flex items-center justify-center text-gray-500 shrink-0 group-hover:bg-white transition-colors bg-gray-950 border-gray-800">
<iconify-icon className="text-xl" icon="solar:calculator-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2">
<h3 className="text-sm font-semibold truncate text-gray-100">Mathematics</h3>
<span className="px-2 py-0.5 text-[10px] font-semibold tracking-wide border rounded-full uppercase bg-blue-950 text-blue-400 border-blue-900">Live</span>
</div>
<div className="flex items-center gap-3 mt-1">
<p className="text-xs text-gray-500 truncate flex items-center gap-1">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> Grade 8-A
                                                </p>
<div className="w-1 h-1 rounded-full bg-gray-700"></div>
<p className="text-xs text-gray-500 truncate flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Room 402
                                                </p>
</div>
</div>
<div className="text-right shrink-0">
<div className="text-sm font-semibold text-gray-100">09:00 AM</div>
<div className="text-xs text-gray-500 mt-1">Mr. Smith</div>
</div>
</button>

<button className="w-full px-6 py-4 flex items-center gap-4 transition-colors group text-left hover:bg-gray-950/50" onclick="showToast('Opened Science Lab details')">
<div className="w-12 h-12 rounded-xl border flex items-center justify-center text-gray-500 shrink-0 group-hover:bg-white transition-colors bg-gray-950 border-gray-800">
<iconify-icon className="text-xl" icon="solar:test-tube-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<h3 className="text-sm font-semibold truncate text-gray-100">Science Lab</h3>
<div className="flex items-center gap-3 mt-1">
<p className="text-xs text-gray-500 truncate flex items-center gap-1">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> Grade 6-B
                                                </p>
<div className="w-1 h-1 rounded-full bg-gray-700"></div>
<p className="text-xs text-gray-500 truncate flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Lab 2
                                                </p>
</div>
</div>
<div className="text-right shrink-0">
<div className="text-sm font-semibold text-gray-100">11:30 AM</div>
<div className="text-xs text-gray-500 mt-1">Mrs. Chen</div>
</div>
</button>

<div className="px-6 py-4 flex items-center gap-4 transition-colors group opacity-60 hover:bg-gray-950/50">
<div className="w-12 h-12 rounded-xl border flex items-center justify-center text-gray-500 shrink-0 group-hover:bg-white transition-colors bg-gray-950 border-gray-800">
<iconify-icon className="text-xl" icon="solar:book-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<h3 className="text-sm font-semibold truncate line-through text-gray-100 decoration-gray-600">Social Studies</h3>
<div className="flex items-center gap-3 mt-1">
<p className="text-xs text-gray-500 truncate">Cancelled - Staff Absence</p>
</div>
</div>
<div className="text-right shrink-0">
<div className="text-sm font-semibold text-gray-500 line-through decoration-gray-600">02:00 PM</div>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-6 lg:space-y-8 flex flex-col">

<div className="border rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.01)] flex flex-col bg-black border-gray-800">
<div className="px-6 py-4 border-b flex justify-between items-center border-gray-800 bg-gray-950/50">
<h2 className="text-sm font-semibold text-gray-100">Action Items</h2>
<span className="text-[10px] font-semibold tracking-wide px-2 py-0.5 rounded border uppercase bg-gray-900 text-gray-400 border-gray-800">2 Pending</span>
</div>
<div className="p-6 flex flex-col gap-4">

<label className="flex items-start gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center mt-0.5">
<input className="peer sr-only" onchange="toggleTask(this)" type="checkbox"/>
<div className="w-4 h-4 border rounded-[4px] peer-checked:bg-gray-900 peer-checked:border-gray-900 transition-all flex items-center justify-center shadow-sm border-gray-700 bg-black">
<iconify-icon className="opacity-0 peer-checked:opacity-100 text-[10px] transition-opacity duration-200 text-black" icon="solar:check-read-linear"></iconify-icon>
</div>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium group-hover:text-gray-900 peer-checked:line-through peer-checked:text-gray-400 transition-colors text-gray-300">Review curriculum updates</span>
<span className="text-xs text-gray-500 mt-0.5">Due today, 5:00 PM</span>
</div>
</label>

<label className="flex items-start gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center mt-0.5">
<input className="peer sr-only" onchange="toggleTask(this)" type="checkbox"/>
<div className="w-4 h-4 border rounded-[4px] peer-checked:bg-gray-900 peer-checked:border-gray-900 transition-all flex items-center justify-center shadow-sm border-gray-700 bg-black">
<iconify-icon className="opacity-0 peer-checked:opacity-100 text-[10px] transition-opacity duration-200 text-black" icon="solar:check-read-linear"></iconify-icon>
</div>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium group-hover:text-gray-900 peer-checked:line-through peer-checked:text-gray-400 transition-colors text-gray-300">Approve leave requests</span>
<span className="text-xs text-gray-500 mt-0.5">3 pending requests</span>
</div>
</label>

<label className="flex items-start gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center mt-0.5">
<input checked="" className="peer sr-only" onchange="toggleTask(this)" type="checkbox"/>
<div className="w-4 h-4 border rounded-[4px] peer-checked:bg-gray-900 peer-checked:border-gray-900 transition-all flex items-center justify-center shadow-sm border-gray-700 bg-black">
<iconify-icon className="opacity-0 peer-checked:opacity-100 text-[10px] transition-opacity duration-200 text-black" icon="solar:check-read-linear"></iconify-icon>
</div>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium line-through transition-colors text-gray-600">Generate monthly payroll</span>
<span className="text-xs mt-0.5 text-gray-600">Completed by Sarah</span>
</div>
</label>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</section>



<div className="fixed inset-0 z-[100] hidden items-center justify-center p-4" id="admission-modal">

<div className="absolute inset-0 backdrop-blur-sm transition-opacity opacity-0 bg-gray-100/20" id="admission-modal-backdrop" onclick="closeModal('admission-modal')"></div>

<div className="relative border rounded-2xl w-full max-w-lg shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col transform scale-95 opacity-0 transition-all duration-200 bg-black border-gray-800" id="admission-modal-content">
<div className="flex items-center justify-between border-b px-6 py-4 border-gray-900">
<h2 className="text-base font-semibold tracking-tight text-gray-100">Register New Student</h2>
<button className="transition-colors p-1 rounded-md text-gray-600 hover:text-gray-100 hover:bg-gray-950" onclick="closeModal('admission-modal')">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<form className="p-6 flex flex-col gap-5" onsubmit="submitAdmission(event)">
<div className="grid grid-cols-2 gap-4">
<div className="col-span-2 sm:col-span-1">
<label className="block text-xs font-medium mb-1.5 text-gray-300">First Name</label>
<input className="w-full px-3 py-2 border rounded-lg text-sm focus:bg-white focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300 transition-all placeholder-gray-400 bg-gray-950/50 border-gray-800" placeholder="John" required="" type="text"/>
</div>
<div className="col-span-2 sm:col-span-1">
<label className="block text-xs font-medium mb-1.5 text-gray-300">Last Name</label>
<input className="w-full px-3 py-2 border rounded-lg text-sm focus:bg-white focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300 transition-all placeholder-gray-400 bg-gray-950/50 border-gray-800" placeholder="Doe" required="" type="text"/>
</div>
<div className="col-span-2">
<label className="block text-xs font-medium mb-1.5 text-gray-300">Grade Level</label>
<select className="w-full px-3 py-2 border rounded-lg text-sm focus:bg-white focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300 transition-all appearance-none cursor-pointer bg-gray-950/50 border-gray-800 text-gray-100">
<option disabled="" selected="" value="">Select a grade</option>
<option>KG 1</option>
<option>KG 2</option>
<option>Grade 1</option>
<option>Grade 2</option>
<option>Grade 3</option>
<option>Grade 8</option>
</select>
</div>
</div>
<div className="flex justify-end gap-3 pt-2">
<button className="px-4 py-2 border text-sm font-semibold rounded-lg transition-colors shadow-sm focus:ring-2 focus:ring-gray-200 focus:outline-none bg-black border-gray-800 text-gray-100 hover:bg-gray-950" onclick="closeModal('admission-modal')" type="button">Cancel</button>
<button className="px-4 py-2 text-sm font-semibold rounded-lg transition-colors shadow-sm focus:ring-2 focus:ring-gray-400 focus:outline-none focus:ring-offset-1 bg-gray-100 text-black hover:bg-gray-200" type="submit">Save Student</button>
</div>
</form>
</div>
</div>





    </>
  );
}
