import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
heading: ['Nunito', 'sans-serif'],
body: ['Geist Sans', 'sans-serif'],
},
colors: {
neutral: {
850: '#1f1f1f',
900: '#171717', // Custom base
950: '#0a0a0a',
},
yellow: {
500: '#eab308', // Tailwind yellow-500
600: '#ca8a04',
}
},
backgroundImage: {
'grid-pattern': "linear-gradient(to right, #262626 1px, transparent 1px), linear-gradient(to bottom, #262626 1px, transparent 1px)",
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none technical-grid bg-grid-pattern opacity-20"></div>

<nav className="fixed top-0 w-full z-50 border-b border-neutral-800 glass-panel">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-500 group-hover:bg-yellow-500 group-hover:text-neutral-900 transition-colors duration-300">
<iconify-icon icon="solar:layers-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="font-heading font-bold text-white tracking-tighter text-lg uppercase">AJ Design<span className="text-neutral-600 font-medium">Group</span></span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium hover:text-white transition-colors" href="#">Services</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#">Portfolio</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#">Code Compliance</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#">About</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:flex text-sm font-medium text-white hover:text-yellow-500 transition-colors" href="#">Client Portal</a>
<button className="bg-white text-neutral-900 px-4 py-2 rounded text-sm font-semibold hover:bg-yellow-500 transition-colors duration-300">
                    Get a Quote
                </button>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8 max-w-2xl">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
</span>
<span className="text-xs font-medium tracking-wide text-neutral-300 uppercase">Serving Greater Los Angeles</span>
</div>

<div className="space-y-4">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold text-white tracking-tight leading-[1.1]">
                        Precision MEP <br/> 
                        Engineering Plans.
                    </h1>
<p className="text-lg text-neutral-400 font-light leading-relaxed max-w-lg">
                        Comprehensive mechanical, electrical, and plumbing design solutions for residential and commercial builds. Fully compliant, delivered in <span className="text-white font-medium">AutoCAD</span> &amp; <span className="text-white font-medium">Revit</span>.
                    </p>
</div>

<div className="flex flex-col sm:flex-row gap-4 pt-2">
<button className="group relative px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-neutral-900 rounded font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden">
<span>Start Your Project</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="2" width="18"></iconify-icon>
</button>
<button className="px-6 py-3 border border-neutral-700 hover:border-neutral-500 text-white rounded font-medium text-sm transition-colors duration-300 flex items-center justify-center gap-2 bg-neutral-900/50">
<iconify-icon icon="solar:folder-open-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        View Projects
                    </button>
</div>

<div className="pt-8 border-t border-neutral-800">
<p className="text-xs text-neutral-500 font-mono mb-4 uppercase tracking-widest">Industry Standards</p>
<div className="flex flex-wrap gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2">
<iconify-icon className="text-yellow-500" icon="solar:file-check-linear" width="20"></iconify-icon>
<span className="font-bold tracking-tighter text-white">AUTODESK</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-yellow-500" icon="solar:buildings-2-linear" width="20"></iconify-icon>
<span className="font-bold tracking-tighter text-white">LADBS</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-yellow-500" icon="solar:box-minimalistic-linear" width="20"></iconify-icon>
<span className="font-bold tracking-tighter text-white">REVIT</span>
</div>
</div>
</div>
</div>

<div className="relative w-full h-full min-h-[400px] lg:h-auto flex items-center justify-center perspective-[2000px]">

<div className="absolute inset-0 bg-yellow-500/5 blur-3xl rounded-full"></div>

<div className="relative w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-lg shadow-2xl overflow-hidden transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700 ease-out">

<div className="h-10 border-b border-neutral-800 bg-neutral-900 flex items-center justify-between px-4">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
<span className="text-xs font-mono text-neutral-500 ml-2">AJ_Design_System_v2.4.rvt</span>
</div>
<iconify-icon className="text-neutral-600" icon="solar:menu-dots-linear"></iconify-icon>
</div>

<div className="p-6 space-y-6">

<div className="flex items-center justify-between">
<div>
<p className="text-xs text-neutral-500 uppercase tracking-wider">Project Status</p>
<p className="text-white font-medium flex items-center gap-2 mt-1">
<span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
                                    In Review (LADBS)
                                </p>
</div>
<div className="text-right">
<p className="text-xs text-neutral-500 uppercase tracking-wider">Project ID</p>
<p className="text-neutral-300 font-mono mt-1">LA-24-8902</p>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="p-4 rounded border border-neutral-800 bg-neutral-850/50 hover:border-yellow-500/30 transition-colors">
<iconify-icon className="text-yellow-500 mb-2" icon="solar:bolt-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
<p className="text-xs text-neutral-500">Electrical Load</p>
<p className="text-lg font-medium text-white">400A / 3ph</p>
</div>
<div className="p-4 rounded border border-neutral-800 bg-neutral-850/50 hover:border-yellow-500/30 transition-colors">
<iconify-icon className="text-yellow-500 mb-2" icon="solar:wind-linear" strokeWidth="1.5" width="24"></iconify-icon>
<p className="text-xs text-neutral-500">HVAC Zone</p>
<p className="text-lg font-medium text-white">VRF System</p>
</div>
</div>

<div className="space-y-2">
<div className="flex justify-between text-xs">
<span className="text-neutral-400">Code Compliance Check</span>
<span className="text-yellow-500">98%</span>
</div>
<div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-yellow-500 w-[98%] rounded-full"></div>
</div>
</div>

<div className="space-y-3 pt-2">
<div className="flex items-center gap-3 p-2 rounded hover:bg-neutral-800/50 transition-colors cursor-pointer group">
<div className="p-1.5 rounded bg-blue-900/20 text-blue-400 border border-blue-900/30">
<iconify-icon icon="solar:document-text-linear" width="16"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-sm text-neutral-300 group-hover:text-white">M_Plan_Level_01.dwg</p>
<p className="text-[10px] text-neutral-600">Updated 2h ago</p>
</div>
<iconify-icon className="text-neutral-600 group-hover:text-yellow-500" icon="solar:cloud-upload-linear"></iconify-icon>
</div>
<div className="flex items-center gap-3 p-2 rounded hover:bg-neutral-800/50 transition-colors cursor-pointer group">
<div className="p-1.5 rounded bg-purple-900/20 text-purple-400 border border-purple-900/30">
<iconify-icon icon="solar:box-minimalistic-linear" width="16"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-sm text-neutral-300 group-hover:text-white">E_Schematic_R24.rvt</p>
<p className="text-[10px] text-neutral-600">Updated 5h ago</p>
</div>
<iconify-icon className="text-neutral-600 group-hover:text-yellow-500" icon="solar:cloud-upload-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="absolute -right-4 top-10 p-3 bg-neutral-900 border border-neutral-800 rounded shadow-xl animate-bounce duration-[3000ms]">
<div className="flex items-center gap-2">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-xs font-semibold text-white">Permit Approved</span>
</div>
</div>
<div className="absolute -left-8 bottom-20 p-3 bg-neutral-900 border border-neutral-800 rounded shadow-xl">
<div className="flex items-center gap-3">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-neutral-700 border border-neutral-900 flex items-center justify-center text-[10px] text-white">A</div>
<div className="w-6 h-6 rounded-full bg-yellow-600 border border-neutral-900 flex items-center justify-center text-[10px] text-white">J</div>
</div>
<span className="text-xs text-neutral-400">Team Active</span>
</div>
</div>
</div>
</div>

<div className="mt-20 border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600">
<p>© 2024 AJ Design Group. Los Angeles, CA.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-neutral-400 transition-colors" href="#">Privacy</a>
<a className="hover:text-neutral-400 transition-colors" href="#">Terms</a>
<a className="hover:text-neutral-400 transition-colors" href="#">Sitemap</a>
</div>
</div>
</main>

    </>
  );
}
