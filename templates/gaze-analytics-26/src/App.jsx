import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Simple Interaction Logic
        function handleLogin() {
            const loginView = document.getElementById('login-view');
            const dashboardView = document.getElementById('dashboard-view');
            
            // Fade out login
            loginView.style.opacity = '0';
            loginView.style.transition = 'opacity 0.3s ease';
            
            setTimeout(() => {
                loginView.style.display = 'none';
                dashboardView.classList.remove('hidden');
            }, 300);
        }

        function openPreview(id, title, duration) {
            const panel = document.getElementById('preview-panel');
            
            // Update Data
            document.getElementById('preview-title').innerText = title;
            document.getElementById('preview-id').innerText = id;
            document.getElementById('preview-duration').innerText = duration;

            // Reset toggles for demo
            document.getElementById('toggle-scanpath').checked = false;
            document.getElementById('toggle-heatmap').checked = false;
            toggleOverlay('scanpath');
            toggleOverlay('heatmap');

            // Show Panel
            panel.classList.remove('hidden');
        }

        function closePreview() {
            document.getElementById('preview-panel').classList.add('hidden');
        }

        function toggleOverlay(type) {
            const overlay = document.getElementById(`overlay-${type}`);
            const checkbox = document.getElementById(`toggle-${type}`);
            if(checkbox.checked) {
                overlay.classList.remove('hidden');
            } else {
                overlay.classList.add('hidden');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white p-6" id="login-view">
<div className="w-full max-w-sm fade-in">
<div className="mb-8 text-center">
<div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-900 border border-gray-200">
<iconify-icon icon="solar:eye-scan-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h1 className="text-xl font-medium tracking-tight text-gray-900">Sign in to Analytics</h1>
<p className="mt-2 text-gray-500">Enter your details to access the dashboard</p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); handleLogin();">
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-700 ml-1">Mobile Number</label>
<div className="relative group">
<input className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 pl-10 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-400 focus:bg-white focus:ring-0" placeholder="+1 (555) 000-0000" required="" type="tel"/>
<iconify-icon className="absolute left-3 top-2.5 text-gray-400 group-focus-within:text-gray-600" icon="solar:smartphone-linear" width="18"></iconify-icon>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-700 ml-1">Password</label>
<div className="relative group">
<input className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 pl-10 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-400 focus:bg-white focus:ring-0" placeholder="••••••••" required="" type="password"/>
<iconify-icon className="absolute left-3 top-2.5 text-gray-400 group-focus-within:text-gray-600" icon="solar:lock-password-linear" width="18"></iconify-icon>
</div>
</div>
<button className="mt-2 w-full rounded-lg bg-gray-900 py-2.5 text-center text-sm font-medium text-white shadow-sm transition hover:bg-gray-800 focus:ring-2 focus:ring-gray-900 focus:ring-offset-2" type="submit">
                    Continue
                </button>
</form>
<p className="mt-6 text-center text-xs text-gray-400">
                Protected by enterprise grade security
            </p>
</div>
</div>

<div className="hidden h-full flex bg-white" id="dashboard-view">

<aside className="flex w-64 flex-col border-r border-gray-100 bg-gray-50/50">

<div className="flex h-14 items-center gap-3 border-b border-gray-100 px-4">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-900 text-white">
<span className="font-medium tracking-tight">G</span>
</div>
<span className="font-medium tracking-tight text-gray-900">GazeLab Inc.</span>
</div>

<div className="flex-1 overflow-y-auto px-3 py-4">
<div className="mb-2 px-2 text-xs font-medium uppercase tracking-wider text-gray-400">Explorer</div>
<ul className="space-y-0.5">

<li>
<button className="flex w-full items-center gap-2.5 rounded-md bg-gray-200/60 px-2 py-1.5 text-left text-gray-900 transition">
<iconify-icon className="text-gray-500" icon="solar:folder-with-files-linear" width="18"></iconify-icon>
<span className="font-medium">Main Workspace</span>
</button>

<ul className="ml-4 mt-1 space-y-0.5 border-l border-gray-200 pl-2">
<li>
<div className="group flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-gray-600 hover:bg-gray-100 hover:text-gray-900">
<iconify-icon icon="solar:folder-linear" width="16"></iconify-icon>
<span>Gaze Project A</span>
</div>

<ul className="ml-4 mt-0.5 space-y-0.5 border-l border-gray-200 pl-2">
<li>
<div className="group flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-gray-600 hover:bg-gray-100 hover:text-gray-900">
<iconify-icon icon="solar:user-circle-linear" width="16"></iconify-icon>
<span>Exp: John Doe</span>
</div>
</li>
<li>
<div className="group flex cursor-pointer items-center gap-2 rounded-md bg-white border border-gray-200 shadow-sm px-2 py-1.5 text-gray-900">
<iconify-icon className="text-blue-600" icon="solar:user-circle-bold" width="16"></iconify-icon>
<span>Exp: Jane Smith</span>
</div>
</li>
</ul>
</li>
<li>
<div className="group flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-gray-600 hover:bg-gray-100 hover:text-gray-900">
<iconify-icon icon="solar:folder-linear" width="16"></iconify-icon>
<span>UX Testing B</span>
</div>
</li>
</ul>
</li>
</ul>
</div>

<div className="border-t border-gray-100 p-3">
<button className="flex w-full items-center gap-3 rounded-lg p-2 transition hover:bg-gray-100">
<div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
<iconify-icon icon="solar:user-linear" width="20"></iconify-icon>
</div>
<div className="text-left">
<div className="font-medium text-gray-900">Research Admin</div>
<div className="text-xs text-gray-500">admin@gazelab.io</div>
</div>
</button>
</div>
</aside>

<main className="flex flex-1 flex-col overflow-hidden relative">

<header className="flex h-14 items-center justify-between border-b border-gray-100 bg-white px-6">
<div className="flex items-center gap-2 text-gray-500">
<span>Main Workspace</span>
<iconify-icon icon="solar:alt-arrow-right-linear" width="14"></iconify-icon>
<span>Gaze Project A</span>
<iconify-icon icon="solar:alt-arrow-right-linear" width="14"></iconify-icon>
<span className="font-medium text-gray-900">Exp: Jane Smith</span>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 transition hover:bg-gray-50">
<iconify-icon icon="solar:export-linear" width="16"></iconify-icon>
                        Export Data
                    </button>
</div>
</header>
<div className="flex-1 overflow-y-auto bg-gray-50/30 p-6">

<div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

<div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-4 transition hover:border-gray-300 hover:shadow-sm">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-gray-500">Avg. Gaze Points</span>
<iconify-icon className="text-gray-400 group-hover:text-blue-500" icon="solar:eye-linear" width="20"></iconify-icon>
</div>
<div className="mt-2 text-2xl font-medium tracking-tight text-gray-900">12,405</div>
<div className="mt-1 flex items-center gap-1 text-xs text-green-600">
<iconify-icon icon="solar:trending-up-linear" width="12"></iconify-icon>
<span>+4.5% vs avg</span>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-4 transition hover:border-gray-300 hover:shadow-sm">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-gray-500">Scanpath Length</span>
<iconify-icon className="text-gray-400 group-hover:text-violet-500" icon="solar:route-linear" width="20"></iconify-icon>
</div>
<div className="mt-2 text-2xl font-medium tracking-tight text-gray-900">845<span className="text-sm font-normal text-gray-400 ml-1">px</span></div>
<div className="mt-1 text-xs text-gray-400">Total traversal</div>
</div>

<div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-4 transition hover:border-gray-300 hover:shadow-sm">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-gray-500">Fixation Points</span>
<iconify-icon className="text-gray-400 group-hover:text-orange-500" icon="solar:target-linear" width="20"></iconify-icon>
</div>
<div className="mt-2 text-2xl font-medium tracking-tight text-gray-900">82</div>
<div className="mt-1 flex items-center gap-1 text-xs text-red-500">
<iconify-icon icon="solar:trending-down-linear" width="12"></iconify-icon>
<span>-1.2% density</span>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-4 transition hover:border-gray-300 hover:shadow-sm">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-gray-500">Heatmap Intensity</span>
<iconify-icon className="text-gray-400 group-hover:text-rose-500" icon="solar:flame-linear" width="20"></iconify-icon>
</div>
<div className="mt-2 text-2xl font-medium tracking-tight text-gray-900">High</div>
<div className="mt-1 text-xs text-gray-400">Center focused</div>
</div>
</div>

<div className="rounded-xl border border-gray-200 bg-white shadow-sm">
<div className="border-b border-gray-100 px-5 py-4 flex justify-between items-center">
<h2 className="font-medium tracking-tight text-gray-900">Session Recordings</h2>
<div className="flex gap-2">
<div className="relative">
<iconify-icon className="absolute left-2.5 top-2 text-gray-400" icon="solar:magnifer-linear" width="14"></iconify-icon>
<input className="h-8 rounded-md border border-gray-200 pl-8 pr-3 text-xs placeholder:text-gray-400 focus:border-gray-400 outline-none" placeholder="Search ID..." type="text"/>
</div>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="bg-gray-50/50 text-xs font-medium text-gray-500 uppercase tracking-wide">
<th className="px-5 py-3 font-medium">Session ID</th>
<th className="px-5 py-3 font-medium">Name</th>
<th className="px-5 py-3 font-medium">Duration</th>
<th className="px-5 py-3 font-medium">Recorded At</th>
<th className="px-5 py-3 font-medium">Created</th>
<th className="px-5 py-3 font-medium">Status</th>
<th className="px-5 py-3 text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 text-sm text-gray-600">

<tr className="group cursor-pointer transition hover:bg-gray-50" onclick="openPreview('SES-001', 'Homepage Navigation A/B', '04:12')">
<td className="px-5 py-3.5 font-medium text-gray-900">SES-001</td>
<td className="px-5 py-3.5">Homepage Navigation A/B</td>
<td className="px-5 py-3.5 font-mono text-xs">04:12</td>
<td className="px-5 py-3.5 text-xs">Oct 24, 14:30</td>
<td className="px-5 py-3.5 text-xs text-gray-400">2 days ago</td>
<td className="px-5 py-3.5">
<span className="inline-flex items-center rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Completed</span>
</td>
<td className="px-5 py-3.5 text-right">
<iconify-icon className="text-gray-300 transition group-hover:text-gray-600" icon="solar:alt-arrow-right-linear"></iconify-icon>
</td>
</tr>

<tr className="group cursor-pointer transition hover:bg-gray-50" onclick="openPreview('SES-002', 'Checkout Flow Stress Test', '02:45')">
<td className="px-5 py-3.5 font-medium text-gray-900">SES-002</td>
<td className="px-5 py-3.5">Checkout Flow Stress Test</td>
<td className="px-5 py-3.5 font-mono text-xs">02:45</td>
<td className="px-5 py-3.5 text-xs">Oct 24, 15:15</td>
<td className="px-5 py-3.5 text-xs text-gray-400">2 days ago</td>
<td className="px-5 py-3.5">
<span className="inline-flex items-center rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Completed</span>
</td>
<td className="px-5 py-3.5 text-right">
<iconify-icon className="text-gray-300 transition group-hover:text-gray-600" icon="solar:alt-arrow-right-linear"></iconify-icon>
</td>
</tr>

<tr className="group cursor-pointer transition hover:bg-gray-50" onclick="openPreview('SES-003', 'Mobile Menu Interaction', '01:20')">
<td className="px-5 py-3.5 font-medium text-gray-900">SES-003</td>
<td className="px-5 py-3.5">Mobile Menu Interaction</td>
<td className="px-5 py-3.5 font-mono text-xs">01:20</td>
<td className="px-5 py-3.5 text-xs">Oct 23, 09:10</td>
<td className="px-5 py-3.5 text-xs text-gray-400">3 days ago</td>
<td className="px-5 py-3.5">
<span className="inline-flex items-center rounded-full bg-yellow-50 px-2 py-0.5 text-xs font-medium text-yellow-700 ring-1 ring-inset ring-yellow-600/20">Processing</span>
</td>
<td className="px-5 py-3.5 text-right">
<iconify-icon className="text-gray-300 transition group-hover:text-gray-600" icon="solar:alt-arrow-right-linear"></iconify-icon>
</td>
</tr>
</tbody>
</table>
</div>
<div className="border-t border-gray-100 px-5 py-3 flex items-center justify-between text-xs text-gray-500">
<span>Showing 1-3 of 12 sessions</span>
<div className="flex gap-2">
<button className="px-2 py-1 rounded border border-gray-200 hover:bg-gray-50 disabled:opacity-50" disabled="">Prev</button>
<button className="px-2 py-1 rounded border border-gray-200 hover:bg-gray-50">Next</button>
</div>
</div>
</div>
</div>

<div className="absolute inset-y-0 right-0 z-20 hidden w-[480px] flex-col border-l border-gray-200 bg-white shadow-2xl slide-in-right" id="preview-panel">

<div className="flex h-14 items-center justify-between border-b border-gray-100 px-5 bg-white">
<div>
<h3 className="font-medium tracking-tight text-gray-900" id="preview-title">Session Details</h3>
<p className="text-xs text-gray-500" id="preview-id">SES-001</p>
</div>
<div className="flex gap-2">
<button className="rounded-md p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</button>
<button className="rounded-md p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition" onclick="closePreview()">
<iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="flex-1 overflow-y-auto bg-gray-50/50 p-5">

<div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gray-900 shadow-lg mb-4 ring-1 ring-black/5">

<div className="absolute inset-0 flex items-center justify-center bg-gray-800">
<iconify-icon className="text-white/20" icon="solar:play-circle-linear" width="64"></iconify-icon>
</div>

<div className="hidden absolute inset-0 opacity-40 bg-gradient-to-br from-red-500/50 via-transparent to-blue-500/30 blur-2xl" id="overlay-heatmap"></div>
<div className="hidden absolute inset-0" id="overlay-scanpath">
<svg className="w-full h-full"><path d="M50 50 L 150 120 L 300 80" fill="none" stroke="#2563eb" stroke-dasharray="4" strokeWidth="2"></path></svg>
</div>

<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-3 pt-8">
<div className="mb-2 flex items-center justify-between text-xs text-white/90 font-mono">
<span>00:12</span>
<span id="preview-duration">04:12</span>
</div>
<div className="relative h-1 w-full cursor-pointer rounded-full bg-white/20 hover:h-1.5 transition-all">
<div className="absolute h-full w-1/4 rounded-full bg-white"></div>
</div>
<div className="mt-3 flex items-center justify-center gap-6 text-white">
<button className="hover:text-gray-200"><iconify-icon icon="solar:skip-previous-bold" width="20"></iconify-icon></button>
<button className="hover:text-gray-200 hover:scale-110 transition"><iconify-icon icon="solar:play-circle-bold" width="32"></iconify-icon></button>
<button className="hover:text-gray-200"><iconify-icon icon="solar:skip-next-bold" width="20"></iconify-icon></button>
</div>
</div>
</div>

<div className="mb-6 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
<h4 className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-500">Live Overlays</h4>
<div className="space-y-3">

<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-50 text-blue-600">
<iconify-icon icon="solar:eye-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-700">Gaze Point</span>
</div>
<label className="relative inline-flex cursor-pointer items-center">
<input className="peer sr-only" type="checkbox"/>
<div className="h-5 w-9 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-gray-900 peer-checked:after:translate-x-full peer-focus:outline-none"></div>
</label>
</div>

<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-violet-50 text-violet-600">
<iconify-icon icon="solar:route-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-700">Scan Path</span>
</div>
<label className="relative inline-flex cursor-pointer items-center">
<input className="peer sr-only" id="toggle-scanpath" onchange="toggleOverlay('scanpath')" type="checkbox"/>
<div className="h-5 w-9 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-gray-900 peer-checked:after:translate-x-full peer-focus:outline-none"></div>
</label>
</div>

<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-rose-50 text-rose-600">
<iconify-icon icon="solar:flame-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-700">Heatmap</span>
</div>
<label className="relative inline-flex cursor-pointer items-center">
<input className="peer sr-only" id="toggle-heatmap" onchange="toggleOverlay('heatmap')" type="checkbox"/>
<div className="h-5 w-9 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-gray-900 peer-checked:after:translate-x-full peer-focus:outline-none"></div>
</label>
</div>
</div>
</div>

<div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
<h4 className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-500">Session Metrics</h4>
<div className="grid grid-cols-2 gap-4">
<div>
<p className="text-xs text-gray-400">Total Fixations</p>
<p className="font-medium text-gray-900">245</p>
</div>
<div>
<p className="text-xs text-gray-400">Saccade Count</p>
<p className="font-medium text-gray-900">120</p>
</div>
<div>
<p className="text-xs text-gray-400">Avg Pupil Dia.</p>
<p className="font-medium text-gray-900">3.4mm</p>
</div>
<div>
<p className="text-xs text-gray-400">Blink Rate</p>
<p className="font-medium text-gray-900">12/min</p>
</div>
</div>
</div>
</div>

<div className="border-t border-gray-100 p-4 bg-gray-50">
<button className="w-full rounded-lg border border-gray-200 bg-white py-2 text-xs font-medium text-gray-700 shadow-sm transition hover:bg-gray-50 hover:text-gray-900">
                        Download Recording &amp; Data
                    </button>
</div>
</div>
</main>
</div>


    </>
  );
}
