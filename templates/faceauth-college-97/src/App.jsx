import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- Mock Data ---
        const students = [
            { id: 'CS-2024-001', name: 'Emma Wilson', dept: 'Computer Science', img: 'EW' },
            { id: 'CS-2024-002', name: 'Liam Chen', dept: 'Information Tech', img: 'LC' },
            { id: 'CS-2024-003', name: 'Noah Patel', dept: 'Data Science', img: 'NP' },
            { id: 'CS-2024-004', name: 'Olivia Davis', dept: 'Computer Science', img: 'OD' },
            { id: 'CS-2024-005', name: 'James Rod', dept: 'Cyber Security', img: 'JR' },
        ];

        // --- Navigation ---
        function switchView(viewName) {
            // Hide all views
            ['dashboard', 'scan', 'students'].forEach(v => {
                document.getElementById(`view-${v}`).classList.add('hidden');
                
                // Reset Nav styles
                const btn = document.getElementById(`nav-${v}`);
                if(btn) {
                    if (v === viewName) {
                        btn.classList.remove('text-zinc-500', 'bg-transparent');
                        btn.classList.add('bg-zinc-100', 'text-zinc-900');
                    } else {
                        btn.classList.add('text-zinc-500', 'bg-transparent');
                        btn.classList.remove('bg-zinc-100', 'text-zinc-900');
                    }
                }
            });

            // Show selected
            document.getElementById(`view-${viewName}`).classList.remove('hidden');
        }

        // --- Render Student Table ---
        const studentTable = document.getElementById('student-table-body');
        students.forEach(s => {
            const tr = document.createElement('tr');
            tr.className = "hover:bg-zinc-50/50 transition";
            tr.innerHTML = `
                <td class="px-6 py-4 flex items-center gap-3">
                    <div class="w-8 h-8 rounded-full bg-zinc-100 text-zinc-600 text-xs font-bold flex items-center justify-center border border-zinc-200">${s.img}</div>
                    <span class="font-medium text-zinc-900">${s.name}</span>
                </td>
                <td class="px-6 py-4 text-zinc-500 tabular-nums">${s.id}</td>
                <td class="px-6 py-4 text-zinc-500">${s.dept}</td>
                <td class="px-6 py-4"><span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">Registered</span></td>
                <td class="px-6 py-4 text-right">
                    <button class="text-zinc-400 hover:text-zinc-900 transition"><iconify-icon icon="solar:menu-dots-bold" width="20"></iconify-icon></button>
                </td>
            `;
            studentTable.appendChild(tr);
        });

        // --- Camera & Attendance Logic ---
        let stream = null;
        let isScanning = false;
        let scanInterval = null;
        const video = document.getElementById('webcam');
        const overlay = document.getElementById('scan-overlay');
        const placeholder = document.getElementById('camera-placeholder');
        const scanLine = document.getElementById('scan-line');
        const logContainer = document.getElementById('log-container');
        const btnText = document.getElementById('camera-btn-text');

        async function toggleCamera() {
            if (stream) {
                stopCamera();
            } else {
                await startCamera();
            }
        }

        async function startCamera() {
            try {
                stream = await navigator.mediaDevices.getUserMedia({ video: true });
                video.srcObject = stream;
                video.play();
                
                placeholder.classList.add('hidden');
                overlay.classList.remove('hidden');
                scanLine.style.display = 'block';
                btnText.innerText = "Stop Camera";
                isScanning = true;
                
                log("System", "Camera started. Access granted.");
                startRecognitionSimulation();

            } catch (err) {
                alert("Could not access camera. Please allow permissions.");
                console.error(err);
            }
        }

        function stopCamera() {
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
                stream = null;
            }
            video.srcObject = null;
            placeholder.classList.remove('hidden');
            overlay.classList.add('hidden');
            scanLine.style.display = 'none';
            btnText.innerText = "Start Camera";
            isScanning = false;
            if(scanInterval) clearInterval(scanInterval);
            log("System", "Camera stopped.");
        }

        function log(source, message, type = 'neutral') {
            const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            const div = document.createElement('div');
            let colorClass = type === 'success' ? 'text-emerald-600' : (type === 'error' ? 'text-rose-600' : 'text-zinc-600');
            
            div.className = "flex gap-3 text-xs p-2 rounded hover:bg-zinc-50 transition border-l-2 border-transparent animate-pulse-once";
            if(type === 'success') div.classList.add('border-emerald-500', 'bg-emerald-50/30');
            
            div.innerHTML = `
                <span class="text-zinc-400 tabular-nums shrink-0 font-mono">${time}</span>
                <div class="flex flex-col">
                     <span class="font-semibold text-zinc-800 mb-0.5">${source}</span>
                     <span class="${colorClass}">${message}</span>
                </div>
            `;
            
            // Clear initial message
            if(logContainer.innerText.includes('Waiting')) logContainer.innerHTML = '';
            
            logContainer.prepend(div);
            // Keep only last 20 logs
            if (logContainer.children.length > 20) logContainer.lastChild.remove();
        }

        function showToast(title, msg) {
            const toast = document.getElementById('toast');
            document.getElementById('toast-title').innerText = title;
            document.getElementById('toast-msg').innerText = msg;
            
            toast.classList.remove('translate-y-20', 'opacity-0');
            setTimeout(() => {
                toast.classList.add('translate-y-20', 'opacity-0');
            }, 3000);
        }

        // --- Simulation of Face Recognition ---
        // Since we cannot implement real face-api models in a single HTML file easily without heavy external fetches,
        // we simulate the matching logic.
        
        let recognizedCache = new Set(); // Prevent spamming the same person immediately

        function startRecognitionSimulation() {
            log("AI Engine", "Loading face models...", 'neutral');
            
            setTimeout(() => {
                log("AI Engine", "Models loaded. Scanning active.", 'neutral');
                
                scanInterval = setInterval(() => {
                    if(!isScanning) return;

                    // 30% chance to detect a face every 2 seconds
                    if (Math.random() > 0.7) {
                        const randomStudent = students[Math.floor(Math.random() * students.length)];
                        
                        // If recently recognized, skip to simulate real life "already marked"
                        if(recognizedCache.has(randomStudent.id)) return;

                        // Simulate Processing time
                        log("Detector", "Face detected. Analyzing...", 'neutral');
                        
                        setTimeout(() => {
                            if(!isScanning) return;
                            
                            // Successful Match
                            log("Recognition", `Match found: ${randomStudent.name} (${Math.floor(Math.random() * (99 - 92) + 92)}%)`, 'success');
                            showToast("Attendance Marked", `${randomStudent.name} is present.`);
                            
                            // Update Dashboard Stats (Visual only for demo)
                            const statCount = document.getElementById('stat-present');
                            statCount.innerText = parseInt(statCount.innerText) + 1;

                            // Add to cache to prevent double scan for 10 seconds
                            recognizedCache.add(randomStudent.id);
                            setTimeout(() => recognizedCache.delete(randomStudent.id), 10000);

                        }, 800);
                    }
                }, 2000);

            }, 1000);
        }

        // Init
        document.querySelector('.animate-pulse-once')?.addEventListener('animationend', (e) => {
            e.target.classList.remove('animate-pulse-once');
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="hidden md:flex flex-col w-64 border-r h-full border-gray-800 bg-black">
<div className="p-6 border-b flex items-center justify-between border-gray-900">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-md flex items-center justify-center bg-gray-100 text-black">
<iconify-icon icon="solar:face-scan-square-linear" width="16"></iconify-icon>
</div>
<span className="font-semibold tracking-tight text-sm">FaceAuth</span>
</div>
</div>
<nav className="flex-1 p-4 space-y-1">
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors bg-gray-900 text-gray-100" id="nav-dashboard" onclick="switchView('dashboard')">
<iconify-icon icon="solar:widget-2-linear" width="18"></iconify-icon>
                Dashboard
            </button>
<button className="flex gap-3 transition-colors hover:text-gray-100 hover:bg-gray-950 text-sm font-medium text-gray-500 w-full rounded-md pt-2 pr-3 pb-2 pl-3 gap-x-3 gap-y-3 items-center" id="nav-scan" onclick="switchView('scan')">
<iconify-icon icon="solar:camera-linear" width="18"></iconify-icon>
                Live Attendance
            </button>
<button className="flex gap-3 transition-colors hover:text-gray-100 hover:bg-gray-950 text-sm font-medium text-gray-500 w-full rounded-md pt-2 pr-3 pb-2 pl-3 gap-x-3 gap-y-3 items-center" id="nav-students" onclick="switchView('students')">
<iconify-icon icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
                Student Directory
            </button>
<button className="flex gap-3 transition-colors hover:text-gray-100 hover:bg-gray-950 text-sm font-medium text-gray-500 w-full rounded-md pt-2 pr-3 pb-2 pl-3 gap-x-3 gap-y-3 items-center">
<iconify-icon icon="solar:chart-square-linear" width="18"></iconify-icon>
                Reports
            </button>
</nav>
<div className="p-4 border-t border-gray-900">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full overflow-hidden bg-gray-800">
<img alt="Admin" className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Admin+User&amp;background=random"/>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-gray-100">Dr. A. Roberts</span>
<span className="text-xs text-gray-500">Computer Science Dept.</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col overflow-y-auto hide-scrollbar h-full relative">

<header className="md:hidden flex items-center justify-between p-4 border-b sticky top-0 z-20 border-gray-800 bg-black">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-md flex items-center justify-center bg-gray-100 text-black">
<iconify-icon icon="solar:face-scan-square-linear" width="16"></iconify-icon>
</div>
<span className="font-semibold tracking-tight text-sm">FaceAuth</span>
</div>
<button className="text-gray-500">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</header>

<div className="p-4 md:p-8 max-w-7xl mx-auto w-full space-y-8" id="content-area">

<div className="fade-in space-y-6" id="view-dashboard">
<div className="flex items-end justify-between">
<div className="">
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-100">Dashboard</h1>
<p className="text-sm text-gray-500 mt-1">Overview of today's session activity.</p>
</div>
<div className="hidden md:flex gap-2">
<button className="text-xs font-medium border px-3 py-1.5 rounded-md shadow-sm transition bg-black border-gray-800 text-gray-300 hover:bg-gray-950">Export CSV</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="border rounded-xl p-5 shadow-sm bg-black border-gray-800">
<div className="flex justify-between items-start">
<div>
<p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Present Today</p>
<h3 className="text-3xl font-semibold mt-2 tabular-nums text-gray-100" id="stat-present">42</h3>
</div>
<div className="p-2 rounded-lg bg-blue-950 text-blue-400">
<iconify-icon icon="solar:user-check-linear" width="24"></iconify-icon>
</div>
</div>
<div className="mt-4 flex items-center text-xs font-medium text-blue-400">
<iconify-icon className="mr-1" icon="solar:arrow-right-up-linear" width="14"></iconify-icon>
<span>12% vs yesterday</span>
</div>
</div>
<div className="border rounded-xl p-5 shadow-sm bg-black border-gray-800">
<div className="flex justify-between items-start">
<div>
<p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Absent</p>
<h3 className="text-3xl font-semibold mt-2 tabular-nums text-gray-100">8</h3>
</div>
<div className="p-2 rounded-lg bg-purple-950 text-purple-400">
<iconify-icon icon="solar:user-cross-linear" width="24"></iconify-icon>
</div>
</div>
<div className="mt-4 flex items-center text-xs font-medium text-purple-400">
<iconify-icon className="mr-1" icon="solar:arrow-right-down-linear" width="14"></iconify-icon>
<span>2% vs yesterday</span>
</div>
</div>
<div className="border rounded-xl p-5 shadow-sm bg-black border-gray-800">
<div className="flex justify-between items-start">
<div>
<p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Accuracy</p>
<h3 className="text-3xl font-semibold mt-2 tabular-nums text-gray-100">99.2%</h3>
</div>
<div className="p-2 rounded-lg bg-pink-950 text-pink-400">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
</div>
<div className="mt-4 flex items-center text-xs text-gray-600">
<span>Last system check: 2m ago</span>
</div>
</div>
</div>
<div className="border rounded-xl shadow-sm overflow-hidden bg-black border-gray-800">
<div className="p-5 border-b flex justify-between items-center border-gray-900">
<h3 className="font-semibold text-sm text-gray-100">Recent Activity</h3>
<button className="text-xs text-gray-500 transition hover:text-gray-100">View all</button>
</div>
<div className="divide-y divide-gray-900" id="recent-activity-list">

<div className="p-4 flex items-center justify-between transition hover:bg-gray-950">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 bg-gray-900">
<span className="text-xs font-semibold">JD</span>
</div>
<div>
<p className="text-sm font-medium text-gray-100">John Doe</p>
<p className="text-xs text-gray-500">CS-2023-001</p>
</div>
</div>
<div className="text-right">
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-950 text-blue-300">Present</span>
<p className="text-xs mt-0.5 tabular-nums text-gray-600">09:41 AM</p>
</div>
</div>
<div className="p-4 flex items-center justify-between transition hover:bg-gray-950">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 bg-gray-900">
<span className="text-xs font-semibold">AS</span>
</div>
<div>
<p className="text-sm font-medium text-gray-100">Alice Smith</p>
<p className="text-xs text-gray-500">CS-2023-042</p>
</div>
</div>
<div className="text-right">
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-950 text-blue-300">Present</span>
<p className="text-xs mt-0.5 tabular-nums text-gray-600">09:45 AM</p>
</div>
</div>
</div>
</div>
</div>

<div className="hidden fade-in space-y-6" id="view-scan">
<div className="flex items-center justify-between">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-gray-100">Live Attendance</h1>
<p className="text-sm text-gray-500 mt-1">Ensure good lighting for accurate detection.</p>
</div>
<div className="flex gap-2">
<button className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg transition shadow-sm bg-gray-100 text-black hover:bg-gray-200" id="toggle-camera-btn" onclick="toggleCamera()">
<iconify-icon icon="solar:videocamera-record-linear" width="18"></iconify-icon>
<span id="camera-btn-text">Start Camera</span>
</button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[500px]">

<div className="lg:col-span-2 rounded-xl overflow-hidden relative shadow-md flex items-center justify-center group bg-gray-100">
<video className="w-full h-full object-cover transform scale-x-[-1]" id="webcam" muted="" playsinline=""></video>

<div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 z-10 bg-gray-950/5" id="camera-placeholder">
<iconify-icon className="opacity-50 mb-3" icon="solar:camera-off-linear" width="48"></iconify-icon>
<span className="text-sm font-medium text-gray-600">Camera is inactive</span>
</div>

<div className="absolute inset-0 hidden pointer-events-none" id="scan-overlay">
<div className="absolute inset-0 border-[40px] backdrop-blur-sm border-gray-100/50"></div>
<div className="absolute top-[40px] left-[40px] right-[40px] bottom-[40px] border rounded-lg overflow-hidden border-black/20">

<div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 rounded-tl-lg border-blue-600"></div>
<div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 rounded-tr-lg border-blue-600"></div>
<div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 rounded-bl-lg border-blue-600"></div>
<div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 rounded-br-lg border-blue-600"></div>
<div className="scanning-line" id="scan-line"></div>
<div className="absolute bottom-4 left-0 right-0 text-center">
<span className="backdrop-blur text-xs px-3 py-1 rounded-full font-medium tracking-wide animate-pulse bg-white/60 text-black">
                                        SCANNING FACES...
                                    </span>
</div>
</div>
</div>
</div>

<div className="border rounded-xl shadow-sm flex flex-col overflow-hidden h-full bg-black border-gray-800">
<div className="p-4 border-b border-gray-900 bg-gray-950/50">
<h3 className="font-semibold text-sm text-gray-100">Real-time Logs</h3>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-3" id="log-container">

<div className="text-xs text-center italic mt-10 text-gray-600">Waiting for camera input...</div>
</div>
</div>
</div>
</div>

<div className="hidden fade-in space-y-6" id="view-students">
<div className="flex items-center justify-between">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-gray-100">Student Directory</h1>
<p className="text-sm text-gray-500 mt-1">Manage registered faces and profiles.</p>
</div>
<button className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg transition shadow-sm bg-gray-100 text-black hover:bg-gray-200" onclick="alert('Feature simulated: This would open a modal to capture 5 angles of the face.')">
<iconify-icon icon="solar:user-plus-linear" width="18"></iconify-icon>
                        Register Student
                    </button>
</div>
<div className="border rounded-xl shadow-sm overflow-hidden bg-black border-gray-800">
<div className="overflow-x-auto">
<table className="w-full text-left text-sm">
<thead className="border-b bg-gray-950 border-gray-900">
<tr>
<th className="px-6 py-3 font-medium text-gray-500">Student</th>
<th className="px-6 py-3 font-medium text-gray-500">ID Number</th>
<th className="px-6 py-3 font-medium text-gray-500">Department</th>
<th className="px-6 py-3 font-medium text-gray-500">Status</th>
<th className="px-6 py-3 font-medium text-gray-500 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-900" id="student-table-body">

<tr className="hover:bg-zinc-50/50 transition">
<td className="px-6 py-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-100 text-zinc-600 text-xs font-bold flex items-center justify-center border border-zinc-200">EW</div>
<span className="font-medium text-zinc-900">Emma Wilson</span>
</td>
<td className="px-6 py-4 text-zinc-500 tabular-nums">CS-2024-001</td>
<td className="px-6 py-4 text-zinc-500">Computer Science</td>
<td className="px-6 py-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">Registered</span></td>
<td className="px-6 py-4 text-right">
<button className="text-zinc-400 hover:text-zinc-900 transition"><iconify-icon icon="solar:menu-dots-bold" width="20"></iconify-icon></button>
</td>
</tr><tr className="hover:bg-zinc-50/50 transition">
<td className="px-6 py-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-100 text-zinc-600 text-xs font-bold flex items-center justify-center border border-zinc-200">LC</div>
<span className="font-medium text-zinc-900">Liam Chen</span>
</td>
<td className="px-6 py-4 text-zinc-500 tabular-nums">CS-2024-002</td>
<td className="px-6 py-4 text-zinc-500">Information Tech</td>
<td className="px-6 py-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">Registered</span></td>
<td className="px-6 py-4 text-right">
<button className="text-zinc-400 hover:text-zinc-900 transition"><iconify-icon icon="solar:menu-dots-bold" width="20"></iconify-icon></button>
</td>
</tr><tr className="hover:bg-zinc-50/50 transition">
<td className="px-6 py-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-100 text-zinc-600 text-xs font-bold flex items-center justify-center border border-zinc-200">NP</div>
<span className="font-medium text-zinc-900">Noah Patel</span>
</td>
<td className="px-6 py-4 text-zinc-500 tabular-nums">CS-2024-003</td>
<td className="px-6 py-4 text-zinc-500">Data Science</td>
<td className="px-6 py-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">Registered</span></td>
<td className="px-6 py-4 text-right">
<button className="text-zinc-400 hover:text-zinc-900 transition"><iconify-icon icon="solar:menu-dots-bold" width="20"></iconify-icon></button>
</td>
</tr><tr className="hover:bg-zinc-50/50 transition">
<td className="px-6 py-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-100 text-zinc-600 text-xs font-bold flex items-center justify-center border border-zinc-200">OD</div>
<span className="font-medium text-zinc-900">Olivia Davis</span>
</td>
<td className="px-6 py-4 text-zinc-500 tabular-nums">CS-2024-004</td>
<td className="px-6 py-4 text-zinc-500">Computer Science</td>
<td className="px-6 py-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">Registered</span></td>
<td className="px-6 py-4 text-right">
<button className="text-zinc-400 hover:text-zinc-900 transition"><iconify-icon icon="solar:menu-dots-bold" width="20"></iconify-icon></button>
</td>
</tr><tr className="hover:bg-zinc-50/50 transition">
<td className="px-6 py-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-100 text-zinc-600 text-xs font-bold flex items-center justify-center border border-zinc-200">JR</div>
<span className="font-medium text-zinc-900">James Rod</span>
</td>
<td className="px-6 py-4 text-zinc-500 tabular-nums">CS-2024-005</td>
<td className="px-6 py-4 text-zinc-500">Cyber Security</td>
<td className="px-6 py-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">Registered</span></td>
<td className="px-6 py-4 text-right">
<button className="text-zinc-400 hover:text-zinc-900 transition"><iconify-icon icon="solar:menu-dots-bold" width="20"></iconify-icon></button>
</td>
</tr></tbody>
</table>
</div>
</div>
</div>
</div>
</main>

<div className="fixed bottom-6 right-6 translate-y-20 opacity-0 transition-all duration-500 z-50" id="toast">
<div className="border shadow-lg rounded-lg p-4 flex items-center gap-3 w-80 bg-black border-gray-800">
<div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-blue-900 text-blue-400">
<iconify-icon icon="solar:check-circle-bold" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-100" id="toast-title">Success</h4>
<p className="text-xs text-gray-500" id="toast-msg">Attendance marked.</p>
</div>
</div>
</div>


    </>
  );
}
