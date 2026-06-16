import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function switchScreen(screenId, navElement) {
            // Hide all screens
            document.querySelectorAll('.app-screen').forEach(el => {
                el.classList.add('hidden');
                el.classList.remove('flex');
            });
            
            // Show target screen
            const targetScreen = document.getElementById(screenId);
            if(targetScreen) {
                targetScreen.classList.remove('hidden');
                targetScreen.classList.add('flex');
            }

            // Update navigation styles
            document.querySelectorAll('.nav-item').forEach(el => {
                el.classList.remove('text-lime-400', 'bg-zinc-900/50', 'border-lime-400/30', 'shadow-[inset_0_0_10px_rgba(163,230,53,0.05)]');
                el.classList.add('text-zinc-500', 'border-transparent');
            });

            // Set active state on clicked icon
            if(navElement) {
                navElement.classList.remove('text-zinc-500', 'border-transparent');
                navElement.classList.add('text-lime-400', 'bg-zinc-900/50', 'border-lime-400/30', 'shadow-[inset_0_0_10px_rgba(163,230,53,0.05)]');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="w-14 shrink-0 bg-zinc-950 border-r border-zinc-800/60 flex flex-col items-center py-4 gap-6 z-30 shadow-[4px_0_24px_rgba(0,0,0,0.4)]">

<div className="h-8 w-8 rounded border border-lime-400/30 bg-lime-400/10 flex items-center justify-center text-lime-400 font-semibold tracking-tighter text-xs">
            RG
        </div>

<div className="flex flex-col gap-2 w-full px-2">
<button aria-label="Dashboard" className="nav-item flex items-center justify-center h-10 w-full rounded-lg border border-transparent text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900/50 transition-all group relative" onclick="switchScreen('screen-dashboard', this)">
<iconify-icon height="20" icon="solar:widget-5-linear" width="20"></iconify-icon>
<span className="absolute left-14 bg-zinc-800 text-zinc-200 text-xs px-2 py-1 rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">Dashboard</span>
</button>
<button aria-label="Builder" className="nav-item flex items-center justify-center h-10 w-full rounded-lg border border-lime-400/30 text-lime-400 bg-zinc-900/50 transition-all shadow-[inset_0_0_10px_rgba(163,230,53,0.05)] group relative" onclick="switchScreen('screen-builder', this)">
<iconify-icon height="20" icon="solar:pen-new-square-linear" width="20"></iconify-icon>
<span className="absolute left-14 bg-zinc-800 text-zinc-200 text-xs px-2 py-1 rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">Builder</span>
</button>
<button aria-label="Submissions" className="nav-item flex items-center justify-center h-10 w-full rounded-lg border border-transparent text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900/50 transition-all group relative" onclick="switchScreen('screen-submissions', this)">
<iconify-icon height="20" icon="solar:database-linear" width="20"></iconify-icon>
<span className="absolute left-14 bg-zinc-800 text-zinc-200 text-xs px-2 py-1 rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">Submissions</span>
</button>
</div>

<div className="mt-auto flex flex-col gap-3 w-full px-2">
<button className="flex items-center justify-center h-10 w-full rounded-lg text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900/50 transition-all">
<iconify-icon height="20" icon="solar:settings-linear" width="20"></iconify-icon>
</button>
<div className="h-8 w-8 rounded-full bg-zinc-800 border border-zinc-700 mx-auto overflow-hidden">

<div className="w-full h-full bg-gradient-to-br from-zinc-600 to-zinc-800"></div>
</div>
</div>
</nav>

<div className="flex-1 flex flex-col h-full overflow-hidden relative bg-[#0a0a0c]">



<div className="app-screen hidden flex-col h-full w-full" id="screen-dashboard">
<header className="h-14 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md flex items-center justify-between px-6 z-20 shrink-0">
<h1 className="text-sm font-medium tracking-tight text-zinc-50">Workspace Overview</h1>
<button className="text-xs font-medium bg-lime-400 text-zinc-950 px-4 py-1.5 rounded-md hover:bg-lime-300 transition-colors shadow-[0_0_15px_rgba(163,230,53,0.15)] flex items-center gap-2" onclick="switchScreen('screen-builder', document.querySelectorAll('.nav-item')[1])">
<iconify-icon height="14" icon="solar:add-square-linear" width="14"></iconify-icon>
                    New Registry
                </button>
</header>
<main className="flex-1 overflow-y-auto p-6 md:p-8">
<div className="max-w-5xl mx-auto space-y-8">

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="p-4 rounded-xl border border-zinc-800/60 bg-zinc-950/50 flex flex-col gap-2">
<span className="text-xs text-zinc-500 font-medium tracking-tight uppercase">Total Registries</span>
<span className="text-2xl font-medium text-zinc-100 tracking-tight">12</span>
</div>
<div className="p-4 rounded-xl border border-zinc-800/60 bg-zinc-950/50 flex flex-col gap-2">
<span className="text-xs text-zinc-500 font-medium tracking-tight uppercase">Active Submissions</span>
<span className="text-2xl font-medium text-zinc-100 tracking-tight">1,204</span>
</div>
<div className="p-4 rounded-xl border border-zinc-800/60 bg-zinc-950/50 flex flex-col gap-2">
<span className="text-xs text-zinc-500 font-medium tracking-tight uppercase">Pending Reviews</span>
<span className="text-2xl font-medium text-lime-400 tracking-tight">38</span>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-4">
<h2 className="text-sm font-medium text-zinc-200">Recent Registries</h2>
<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" height="14" icon="solar:magnifer-linear" width="14"></iconify-icon>
<input className="w-48 bg-zinc-900 border border-zinc-800 rounded-md pl-8 pr-3 py-1.5 text-xs text-zinc-200 focus:outline-none focus:border-zinc-600 transition-all" placeholder="Search..." type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="group p-5 rounded-xl border border-zinc-800/60 bg-zinc-950 hover:bg-zinc-900/50 hover:border-zinc-700 transition-all cursor-pointer flex flex-col gap-4" onclick="switchScreen('screen-builder', document.querySelectorAll('.nav-item')[1])">
<div className="flex items-start justify-between">
<div className="h-10 w-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-lime-400 transition-colors">
<iconify-icon height="20" icon="solar:buildings-linear" width="20"></iconify-icon>
</div>
<span className="px-2 py-0.5 rounded border border-zinc-700 bg-zinc-800/50 text-xs text-zinc-400 font-medium">Draft</span>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-100 mb-1">Vendor Onboarding v2</h3>
<p className="text-xs text-zinc-500 line-clamp-2">Collect necessary compliance and tax details for new software and service vendors.</p>
</div>
<div className="mt-auto pt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-500">
<span className="flex items-center gap-1.5"><iconify-icon height="14" icon="solar:database-linear" width="14"></iconify-icon> 0 entries</span>
<span>Updated 2m ago</span>
</div>
</div>

<div className="group p-5 rounded-xl border border-zinc-800/60 bg-zinc-950 hover:bg-zinc-900/50 hover:border-zinc-700 transition-all cursor-pointer flex flex-col gap-4">
<div className="flex items-start justify-between">
<div className="h-10 w-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-lime-400 transition-colors">
<iconify-icon height="20" icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<span className="px-2 py-0.5 rounded border border-lime-400/20 bg-lime-400/10 text-xs text-lime-400 font-medium flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-lime-400"></span> Active
                                    </span>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-100 mb-1">Employee Intake Form</h3>
<p className="text-xs text-zinc-500 line-clamp-2">Standardized equipment and software request form for all new HR hires.</p>
</div>
<div className="mt-auto pt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-500">
<span className="flex items-center gap-1.5"><iconify-icon height="14" icon="solar:database-linear" width="14"></iconify-icon> 142 entries</span>
<span>Updated 3d ago</span>
</div>
</div>

<div className="group p-5 rounded-xl border border-zinc-800/60 bg-zinc-950 hover:bg-zinc-900/50 hover:border-zinc-700 transition-all cursor-pointer flex flex-col gap-4">
<div className="flex items-start justify-between">
<div className="h-10 w-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-lime-400 transition-colors">
<iconify-icon height="20" icon="solar:laptop-linear" width="20"></iconify-icon>
</div>
<span className="px-2 py-0.5 rounded border border-lime-400/20 bg-lime-400/10 text-xs text-lime-400 font-medium flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-lime-400"></span> Active
                                    </span>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-100 mb-1">Hardware Asset Request</h3>
<p className="text-xs text-zinc-500 line-clamp-2">Internal registry for logging requested laptops, monitors, and peripherals.</p>
</div>
<div className="mt-auto pt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-500">
<span className="flex items-center gap-1.5"><iconify-icon height="14" icon="solar:database-linear" width="14"></iconify-icon> 89 entries</span>
<span>Updated 1w ago</span>
</div>
</div>
</div>
</div>
</div>
</main>
</div>



<div className="app-screen flex flex-col h-full w-full" id="screen-builder">

<header className="h-14 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md flex items-center justify-between px-4 z-20 shrink-0">
<div className="flex items-center gap-6">

<nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs text-zinc-500">
<span className="text-zinc-200 font-medium">Vendor Onboarding v2</span>
<span className="px-1.5 py-0.5 rounded bg-zinc-800/50 text-zinc-400 text-xs ml-2">Draft</span>
</nav>
</div>
<div className="flex items-center gap-3">
<button aria-label="View Audit Log" className="hidden md:flex items-center gap-2 text-xs text-zinc-400 hover:text-zinc-200 transition-colors px-3 py-1.5 rounded-md hover:bg-zinc-800/50">
<iconify-icon height="16" icon="solar:history-linear" width="16"></iconify-icon>
<span>History</span>
</button>
<div className="w-px h-4 bg-zinc-800"></div>
<button className="text-xs font-medium text-zinc-300 px-3 py-1.5 rounded-md hover:bg-zinc-800/50 transition-colors border border-transparent hover:border-zinc-700">
                        Preview
                    </button>
<button className="text-xs font-medium bg-lime-400 text-zinc-950 px-4 py-1.5 rounded-md hover:bg-lime-300 transition-colors shadow-[0_0_15px_rgba(163,230,53,0.15)] flex items-center gap-2">
<iconify-icon height="14" icon="solar:upload-linear" width="14"></iconify-icon>
                        Publish
                    </button>
</div>
</header>

<main className="flex flex-1 overflow-hidden relative">

<aside className="w-64 border-r border-zinc-800/60 bg-zinc-950/50 flex flex-col shrink-0 hidden lg:flex relative z-10">

<div className="p-3 border-b border-zinc-800/60">
<div className="relative flex items-center">
<iconify-icon className="absolute left-3 text-zinc-500" height="16" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-md pl-9 pr-3 py-1.5 text-xs text-zinc-200 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder:text-zinc-600 shadow-inner" placeholder="Search components..." type="text"/>
</div>
</div>

<div className="flex-1 overflow-y-auto p-3 space-y-6">

<div>
<h3 className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-3 px-1">Basic Fields</h3>
<div className="grid grid-cols-2 gap-2">

<div className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg border border-zinc-800/50 bg-zinc-900/30 hover:bg-zinc-800/50 hover:border-zinc-700 transition-all cursor-grab active:cursor-grabbing text-zinc-400 hover:text-zinc-200" role="button" tabindex="0">
<iconify-icon height="20" icon="solar:text-field-linear" width="20"></iconify-icon>
<span className="text-xs">Text</span>
</div>
<div className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg border border-zinc-800/50 bg-zinc-900/30 hover:bg-zinc-800/50 hover:border-zinc-700 transition-all cursor-grab active:cursor-grabbing text-zinc-400 hover:text-zinc-200" role="button" tabindex="0">
<iconify-icon height="20" icon="solar:document-text-linear" width="20"></iconify-icon>
<span className="text-xs">Textarea</span>
</div>
<div className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg border border-zinc-800/50 bg-zinc-900/30 hover:bg-zinc-800/50 hover:border-zinc-700 transition-all cursor-grab active:cursor-grabbing text-zinc-400 hover:text-zinc-200" role="button" tabindex="0">
<iconify-icon height="20" icon="solar:calculator-linear" width="20"></iconify-icon>
<span className="text-xs">Number</span>
</div>
<div className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg border border-zinc-800/50 bg-zinc-900/30 hover:bg-zinc-800/50 hover:border-zinc-700 transition-all cursor-grab active:cursor-grabbing text-zinc-400 hover:text-zinc-200" role="button" tabindex="0">
<iconify-icon height="20" icon="solar:list-down-linear" width="20"></iconify-icon>
<span className="text-xs">Dropdown</span>
</div>
<div className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg border border-zinc-800/50 bg-zinc-900/30 hover:bg-zinc-800/50 hover:border-zinc-700 transition-all cursor-grab active:cursor-grabbing text-zinc-400 hover:text-zinc-200" role="button" tabindex="0">
<iconify-icon height="20" icon="solar:check-square-linear" width="20"></iconify-icon>
<span className="text-xs">Checkbox</span>
</div>
<div className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg border border-zinc-800/50 bg-zinc-900/30 hover:bg-zinc-800/50 hover:border-zinc-700 transition-all cursor-grab active:cursor-grabbing text-zinc-400 hover:text-zinc-200" role="button" tabindex="0">
<iconify-icon height="20" icon="solar:calendar-linear" width="20"></iconify-icon>
<span className="text-xs">Date</span>
</div>
</div>
</div>

<div>
<h3 className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-3 px-1">Advanced</h3>
<div className="grid grid-cols-1 gap-2">
<div className="flex items-center gap-3 p-2.5 rounded-lg border border-zinc-800/50 bg-zinc-900/30 hover:bg-zinc-800/50 hover:border-zinc-700 transition-all cursor-grab active:cursor-grabbing text-zinc-400 hover:text-zinc-200" role="button" tabindex="0">
<iconify-icon height="18" icon="solar:file-download-linear" width="18"></iconify-icon>
<span className="text-xs flex-1">File Upload (PDF)</span>
<iconify-icon className="text-zinc-600" height="14" icon="solar:menu-dots-linear" width="14"></iconify-icon>
</div>
<div className="flex items-center gap-3 p-2.5 rounded-lg border border-zinc-800/50 bg-zinc-900/30 hover:bg-zinc-800/50 hover:border-zinc-700 transition-all cursor-grab active:cursor-grabbing text-zinc-400 hover:text-zinc-200" role="button" tabindex="0">
<iconify-icon height="18" icon="solar:user-id-linear" width="18"></iconify-icon>
<span className="text-xs flex-1">Personal Data Preset</span>
<iconify-icon className="text-zinc-600" height="14" icon="solar:menu-dots-linear" width="14"></iconify-icon>
</div>
</div>
</div>
</div>
</aside>

<section className="flex-1 overflow-y-auto relative flex justify-center pb-24" style={{backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(39, 39, 42, 0.4) 0%, transparent 60%)'}}>
<div className="w-full max-w-3xl mt-12 px-4 md:px-8 flex flex-col gap-6 relative z-10">

<div className="flex items-center justify-between border-b border-zinc-800/80 pb-px">
<div className="flex gap-6">
<button className="pb-3 text-sm font-medium text-zinc-50 border-b-2 border-lime-400 transition-colors">
                                    General Info
                                </button>
<button className="pb-3 text-sm font-medium text-zinc-500 hover:text-zinc-300 border-b-2 border-transparent transition-colors">
                                    Compliance Docs
                                </button>
<button className="pb-3 text-sm font-medium text-zinc-500 hover:text-zinc-300 border-b-2 border-transparent transition-colors flex items-center gap-1">
<iconify-icon height="16" icon="solar:add-square-linear" width="16"></iconify-icon>
                                    Add Section
                                </button>
</div>
<div className="pb-3 flex items-center gap-2">
<span className="text-xs text-zinc-500">Autosaved 2m ago</span>
<iconify-icon className="text-lime-400/70" height="16" icon="solar:cloud-check-linear" width="16"></iconify-icon>
</div>
</div>

<div className="bg-zinc-950 border border-zinc-800/60 rounded-xl shadow-2xl p-2 min-h-[500px] flex flex-col gap-1">

<div className="group relative p-4 rounded-lg border border-transparent hover:border-zinc-800 hover:bg-zinc-900/30 transition-colors cursor-pointer">
<div className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
<button className="p-1 rounded text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800"><iconify-icon height="14" icon="solar:copy-linear" width="14"></iconify-icon></button>
<button className="p-1 rounded text-zinc-500 hover:text-red-400 hover:bg-zinc-800"><iconify-icon height="14" icon="solar:trash-bin-trash-linear" width="14"></iconify-icon></button>
</div>
<label className="block text-xs font-medium text-zinc-300 mb-1.5 flex items-center gap-2">
                                    Company Name <span className="text-red-400">*</span>
</label>
<div className="w-full h-9 rounded-md border border-zinc-800 bg-zinc-950 flex items-center px-3">
<span className="text-sm text-zinc-500">e.g. Acme Corp</span>
</div>
</div>

<div className="group relative p-4 rounded-lg border border-transparent hover:border-zinc-800 hover:bg-zinc-900/30 transition-colors cursor-pointer">
<div className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
<button className="p-1 rounded text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800"><iconify-icon height="14" icon="solar:copy-linear" width="14"></iconify-icon></button>
<button className="p-1 rounded text-zinc-500 hover:text-red-400 hover:bg-zinc-800"><iconify-icon height="14" icon="solar:trash-bin-trash-linear" width="14"></iconify-icon></button>
</div>
<label className="block text-xs font-medium text-zinc-300 mb-1.5 flex items-center gap-2">
                                    Vendor Category
                                </label>
<div className="w-full h-9 rounded-md border border-zinc-800 bg-zinc-950 flex items-center justify-between px-3">
<span className="text-sm text-zinc-500">Select an option...</span>
<iconify-icon className="text-zinc-500" height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>

<div className="group relative p-4 rounded-lg border border-lime-400/40 bg-lime-400/[0.02] shadow-[inset_0_0_20px_rgba(163,230,53,0.02)] transition-colors cursor-pointer ring-1 ring-lime-400/20">

<div className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-1 h-6 bg-lime-400 rounded-r-full"></div>
<div className="absolute right-3 top-3 flex gap-1">
<div className="px-2 py-0.5 rounded bg-lime-400/10 text-lime-400 text-xs font-medium uppercase tracking-wider border border-lime-400/20 mr-2 flex items-center">Editing</div>
<button className="p-1 rounded text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800"><iconify-icon height="14" icon="solar:copy-linear" width="14"></iconify-icon></button>
<button className="p-1 rounded text-zinc-400 hover:text-red-400 hover:bg-zinc-800"><iconify-icon height="14" icon="solar:trash-bin-trash-linear" width="14"></iconify-icon></button>
</div>
<label className="block text-xs font-medium text-zinc-100 mb-1.5 flex items-center gap-2">
                                    Primary Contact Email <span className="text-red-400">*</span>
</label>
<p className="text-xs text-zinc-500 mb-2">We will send all technical notifications to this address.</p>
<div className="w-full h-9 rounded-md border border-lime-400/30 bg-zinc-950 flex items-center px-3 ring-1 ring-lime-400/10">
<span className="text-sm text-zinc-300">hello@company.com</span>
</div>
</div>

<div className="my-2 h-10 border-2 border-dashed border-zinc-800/60 rounded-lg bg-zinc-900/20 flex items-center justify-center text-xs text-zinc-600">
                                Drag components here
                            </div>
</div>
</div>
</section>

<aside className="w-80 border-l border-zinc-800/60 bg-zinc-950 flex flex-col shrink-0 hidden md:flex z-10 shadow-[-10px_0_30px_rgba(0,0,0,0.5)]">

<div className="p-4 border-b border-zinc-800/60 flex items-center justify-between bg-zinc-950/80 backdrop-blur-sm sticky top-0 z-10">
<div className="flex items-center gap-2">
<iconify-icon className="text-lime-400" height="16" icon="solar:text-field-linear" width="16"></iconify-icon>
<h2 className="text-sm font-medium text-zinc-100 tracking-tight">Email Input</h2>
</div>
<span className="text-xs uppercase tracking-wider text-zinc-500 font-medium">Field_03</span>
</div>

<div className="flex-1 overflow-y-auto p-5 space-y-6">

<div className="space-y-4">
<h3 className="text-xs font-medium text-zinc-100 tracking-tight">Configuration</h3>
<div className="space-y-1.5">
<label className="text-xs text-zinc-400 flex justify-between">
                                    Field Label
                                </label>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-md px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:border-lime-400/50 focus:ring-1 focus:ring-lime-400/50 transition-all shadow-sm" type="text" value="Primary Contact Email"/>
</div>
<div className="space-y-1.5">
<label className="text-xs text-zinc-400 flex justify-between">
                                    Placeholder text
                                </label>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-md px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:border-lime-400/50 focus:ring-1 focus:ring-lime-400/50 transition-all shadow-sm" type="text" value="hello@company.com"/>
</div>
<div className="space-y-1.5">
<label className="text-xs text-zinc-400 flex justify-between">
                                    Help text <span className="text-zinc-600">Optional</span>
</label>
<textarea className="w-full bg-zinc-900 border border-zinc-800 rounded-md px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:border-lime-400/50 focus:ring-1 focus:ring-lime-400/50 transition-all shadow-sm resize-none" rows="2">We will send all technical notifications to this address.</textarea>
</div>
</div>
<div className="h-px w-full bg-zinc-800/60"></div>

<div className="space-y-4">
<h3 className="text-xs font-medium text-zinc-100 tracking-tight">Validation</h3>

<div className="flex items-center justify-between group">
<div className="flex flex-col">
<span className="text-sm text-zinc-200">Required field</span>
<span className="text-xs text-zinc-500">Prevent submission if empty</span>
</div>
<div aria-checked="true" className="w-9 h-5 bg-lime-400/20 rounded-full flex items-center px-0.5 cursor-pointer border border-lime-400/30 transition-colors relative" role="checkbox" tabindex="0">
<div className="w-4 h-4 bg-lime-400 rounded-full translate-x-4 transition-transform shadow-[0_0_10px_rgba(163,230,53,0.5)]"></div>
</div>
</div>

<div className="flex items-center justify-between group mt-3">
<div className="flex flex-col">
<span className="text-sm text-zinc-200">Email format</span>
<span className="text-xs text-zinc-500">Must contain @ and domain</span>
</div>
<div aria-checked="true" className="w-9 h-5 bg-lime-400/20 rounded-full flex items-center px-0.5 cursor-pointer border border-lime-400/30 transition-colors relative" role="checkbox" tabindex="0">
<div className="w-4 h-4 bg-lime-400 rounded-full translate-x-4 transition-transform shadow-[0_0_10px_rgba(163,230,53,0.5)]"></div>
</div>
</div>

<div className="flex items-center justify-between group mt-3 opacity-60">
<div className="flex flex-col">
<span className="text-sm text-zinc-200">Enforce uniqueness</span>
<span className="text-xs text-zinc-500">Across all entries</span>
</div>
<div aria-checked="false" className="w-9 h-5 bg-zinc-800 rounded-full flex items-center px-0.5 cursor-pointer border border-zinc-700 transition-colors relative" role="checkbox" tabindex="0">
<div className="w-4 h-4 bg-zinc-400 rounded-full translate-x-0 transition-transform"></div>
</div>
</div>
</div>
<div className="h-px w-full bg-zinc-800/60"></div>

<div className="space-y-4 pb-6">
<div className="flex items-center justify-between">
<h3 className="text-xs font-medium text-zinc-100 tracking-tight">Conditional Logic</h3>
<span className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 uppercase tracking-widest">Pro</span>
</div>
<button className="w-full py-2 border border-dashed border-zinc-700 rounded-md text-xs text-zinc-400 hover:text-zinc-200 hover:border-zinc-500 hover:bg-zinc-900/50 transition-colors flex items-center justify-center gap-2">
<iconify-icon height="14" icon="solar:branching-paths-up-linear" width="14"></iconify-icon>
                                Add Rule
                            </button>
</div>
</div>
</aside>
</main>
</div>



<div className="app-screen hidden flex-col h-full w-full bg-[#0a0a0c]" id="screen-submissions">
<header className="h-14 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md flex items-center justify-between px-6 z-20 shrink-0">

<nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs text-zinc-500">
<span className="text-zinc-400">Vendor Onboarding v2</span>
<iconify-icon height="14" icon="solar:alt-arrow-right-linear" width="14"></iconify-icon>
<span className="text-zinc-200 font-medium">Submissions Data</span>
</nav>
<div className="flex items-center gap-3">
<button className="text-xs font-medium text-zinc-300 px-3 py-1.5 rounded-md hover:bg-zinc-800/50 transition-colors border border-zinc-700 bg-zinc-900 flex items-center gap-2">
<iconify-icon height="14" icon="solar:export-linear" width="14"></iconify-icon>
                        Export CSV
                    </button>
</div>
</header>
<main className="flex-1 overflow-y-auto p-6 md:p-8">
<div className="max-w-6xl mx-auto space-y-4">

<div className="flex items-center justify-between">
<div className="flex gap-2">
<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" height="14" icon="solar:magnifer-linear" width="14"></iconify-icon>
<input className="w-64 bg-zinc-950 border border-zinc-800 rounded-md pl-8 pr-3 py-1.5 text-xs text-zinc-200 focus:outline-none focus:border-zinc-600 transition-all" placeholder="Filter records..." type="text"/>
</div>
<button className="px-3 py-1.5 border border-zinc-800 rounded-md bg-zinc-950 text-xs text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 transition-colors flex items-center gap-2">
<iconify-icon height="14" icon="solar:filter-linear" width="14"></iconify-icon>
                                Status
                            </button>
</div>
<span className="text-xs text-zinc-500">Showing 3 of 3 entries</span>
</div>

<div className="border border-zinc-800/60 rounded-xl overflow-hidden bg-zinc-950">
<table className="w-full text-left text-xs text-zinc-300">
<thead className="bg-zinc-900/50 border-b border-zinc-800/60 text-zinc-400">
<tr>
<th className="px-4 py-3 font-medium w-10">
<div className="w-4 h-4 rounded border border-zinc-700 bg-zinc-900 flex items-center justify-center"></div>
</th>
<th className="px-4 py-3 font-medium">Company Name</th>
<th className="px-4 py-3 font-medium">Category</th>
<th className="px-4 py-3 font-medium">Contact Email</th>
<th className="px-4 py-3 font-medium">Status</th>
<th className="px-4 py-3 font-medium text-right">Submitted</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-800/60">
<tr className="hover:bg-zinc-900/30 transition-colors cursor-pointer">
<td className="px-4 py-3">
<div className="w-4 h-4 rounded border border-zinc-700 bg-zinc-900 flex items-center justify-center"></div>
</td>
<td className="px-4 py-3 font-medium text-zinc-200">Acme Corp</td>
<td className="px-4 py-3 text-zinc-500">Software</td>
<td className="px-4 py-3">hello@acme.com</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-lime-400/10 text-lime-400 border border-lime-400/20">
<span className="w-1.5 h-1.5 rounded-full bg-lime-400"></span> Approved
                                        </span>
</td>
<td className="px-4 py-3 text-right text-zinc-500">Oct 24, 2023</td>
</tr>
<tr className="hover:bg-zinc-900/30 transition-colors cursor-pointer">
<td className="px-4 py-3">
<div className="w-4 h-4 rounded border border-zinc-700 bg-zinc-900 flex items-center justify-center"></div>
</td>
<td className="px-4 py-3 font-medium text-zinc-200">Globex Inc</td>
<td className="px-4 py-3 text-zinc-500">Consulting</td>
<td className="px-4 py-3">info@globex.io</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20">
<span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Pending
                                        </span>
</td>
<td className="px-4 py-3 text-right text-zinc-500">Oct 23, 2023</td>
</tr>
<tr className="hover:bg-zinc-900/30 transition-colors cursor-pointer">
<td className="px-4 py-3">
<div className="w-4 h-4 rounded border border-zinc-700 bg-zinc-900 flex items-center justify-center"></div>
</td>
<td className="px-4 py-3 font-medium text-zinc-200">Initech</td>
<td className="px-4 py-3 text-zinc-500">Hardware</td>
<td className="px-4 py-3">support@initech.net</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-red-400/10 text-red-400 border border-red-400/20">
<span className="w-1.5 h-1.5 rounded-full bg-red-400"></span> Rejected
                                        </span>
</td>
<td className="px-4 py-3 text-right text-zinc-500">Oct 21, 2023</td>
</tr>
</tbody>
</table>
</div>
</div>
</main>
</div>
</div>



    </>
  );
}
