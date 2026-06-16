import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
<h1 className="font-bold tracking-tighter text-[30vw] text-red-600/5" style={{lineHeight: '0.8'}}>AMD</h1>
</div>

<div className="relative z-10 flex flex-col min-h-screen">

<header className="flex items-center justify-between px-6 py-4 border-b bg-zinc-950/80 backdrop-blur-md border-zinc-800/80 sticky top-0 z-20">
<div className="flex items-center gap-8">

<div className="text-xl font-semibold tracking-tighter text-zinc-100 flex items-center gap-2">
<iconify-icon className="text-red-500 text-2xl" icon="solar:cpu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    PS<span className="text-red-500">VAL</span>
</div>

<div className="hidden md:flex items-center p-1 space-x-1 rounded-md bg-zinc-900 border border-zinc-800">
<button className="px-3 py-1.5 text-xs font-medium rounded bg-zinc-800 text-zinc-100 shadow-sm transition-all">
                        Administrator
                    </button>
<button className="px-3 py-1.5 text-xs font-medium rounded text-zinc-500 hover:text-zinc-300 transition-all">
                        Validation Engineer
                    </button>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-zinc-400 hover:text-zinc-200 transition-colors relative">
<iconify-icon className="text-xl" icon="solar:bell-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-red-500 ring-2 ring-zinc-950"></span>
</button>
<div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400">
<iconify-icon icon="solar:user-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</header>

<main className="flex-1 p-6 lg:p-8 max-w-7xl mx-auto w-full">
<div className="mb-8">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-100">Validation Analysis</h2>
<p className="text-sm text-zinc-500 mt-1">Configure parameters and review automated log summarization.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<div className="lg:col-span-4 space-y-6">

<div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-sm">
<h3 className="text-sm font-medium text-zinc-100 mb-4 flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:server-square-linear"></iconify-icon>
                            Target Platform
                        </h3>
<div className="space-y-2">

<label className="flex items-center justify-between p-3 rounded-lg border border-red-500/30 bg-red-500/5 cursor-pointer group transition-colors">
<div className="flex items-center gap-3">
<div className="relative flex items-center justify-center w-4 h-4 rounded-full border border-red-500 bg-zinc-950">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
</div>
<span className="text-sm font-medium text-red-100">Genoa SP5</span>
</div>
<span className="text-xs text-red-400/70">Active</span>
</label>

<label className="flex items-center justify-between p-3 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-zinc-950/50 cursor-pointer group transition-colors">
<div className="flex items-center gap-3">
<div className="relative flex items-center justify-center w-4 h-4 rounded-full border border-zinc-700 bg-zinc-950 group-hover:border-zinc-500 transition-colors">
</div>
<span className="text-sm font-medium text-zinc-400 group-hover:text-zinc-300">Bergamo SP5</span>
</div>
</label>

<label className="flex items-center justify-between p-3 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-zinc-950/50 cursor-pointer group transition-colors">
<div className="flex items-center gap-3">
<div className="relative flex items-center justify-center w-4 h-4 rounded-full border border-zinc-700 bg-zinc-950 group-hover:border-zinc-500 transition-colors">
</div>
<span className="text-sm font-medium text-zinc-400 group-hover:text-zinc-300">Turin SP5</span>
</div>
</label>
</div>
</div>

<div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-sm">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-zinc-100 flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:test-tube-linear"></iconify-icon>
                                Test Suites
                            </h3>
<span className="text-xs text-zinc-500">3 Selected</span>
</div>
<div className="space-y-3">

<label className="flex items-start gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-4 h-4 mt-0.5 border rounded border-red-500 bg-red-500 transition-colors">
<iconify-icon className="text-zinc-950 text-xs" icon="solar:check-read-linear" style={{strokeWidth: '2'}}></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm text-zinc-200 group-hover:text-white transition-colors">PCIe Gen5 Compliance</span>
<span className="text-xs text-zinc-500">Lane margining &amp; protocol checks</span>
</div>
</label>

<label className="flex items-start gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-4 h-4 mt-0.5 border rounded border-red-500 bg-red-500 transition-colors">
<iconify-icon className="text-zinc-950 text-xs" icon="solar:check-read-linear" style={{strokeWidth: '2'}}></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm text-zinc-200 group-hover:text-white transition-colors">DDR5 Memory Training</span>
<span className="text-xs text-zinc-500">JEDEC specs &amp; thermal throttling</span>
</div>
</label>

<label className="flex items-start gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-4 h-4 mt-0.5 border rounded border-red-500 bg-red-500 transition-colors">
<iconify-icon className="text-zinc-950 text-xs" icon="solar:check-read-linear" style={{strokeWidth: '2'}}></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm text-zinc-200 group-hover:text-white transition-colors">Infinity Fabric Link</span>
<span className="text-xs text-zinc-500">Cross-die bandwidth &amp; latency</span>
</div>
</label>

<label className="flex items-start gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-4 h-4 mt-0.5 border rounded border-zinc-700 bg-zinc-950 group-hover:border-zinc-500 transition-colors">
</div>
<div className="flex flex-col">
<span className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">Power Management States</span>
<span className="text-xs text-zinc-600">C-states &amp; P-states transitions</span>
</div>
</label>
</div>
</div>
<button className="w-full py-2.5 rounded-lg bg-zinc-800 text-zinc-400 text-sm font-medium border border-zinc-700 cursor-not-allowed flex items-center justify-center gap-2">
<iconify-icon icon="solar:play-linear"></iconify-icon>
                        Validation Completed
                    </button>
</div>

<div className="lg:col-span-8 space-y-6">

<div className="flex items-center justify-between p-4 rounded-xl bg-zinc-900/80 border border-zinc-800">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20 text-red-500">
<iconify-icon className="text-lg" icon="solar:danger-triangle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-100">Log Analysis Complete</h3>
<p className="text-xs text-zinc-400 mt-0.5">Automated summarization generated from 14.2 GB of trace data.</p>
</div>
</div>
<span className="px-2.5 py-1 rounded text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20">
                            Critical Failures Detected
                        </span>
</div>

<div className="grid grid-cols-3 gap-4">
<div className="p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/30 flex flex-col justify-between">
<span className="text-xs font-medium text-zinc-500 flex items-center gap-1.5">
<iconify-icon icon="solar:document-text-linear"></iconify-icon>
                                Total Logs Parsed
                            </span>
<span className="text-2xl font-semibold tracking-tight text-zinc-100 mt-2">1,248,590</span>
</div>
<div className="p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/30 flex flex-col justify-between">
<span className="text-xs font-medium text-zinc-500 flex items-center gap-1.5">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
                                Assertions Passed
                            </span>
<span className="text-2xl font-semibold tracking-tight text-zinc-300 mt-2">142.3k</span>
</div>
<div className="p-4 rounded-xl border border-red-900/30 bg-red-950/10 flex flex-col justify-between relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent"></div>
<span className="relative z-10 text-xs font-medium text-red-400 flex items-center gap-1.5">
<iconify-icon icon="solar:close-circle-linear"></iconify-icon>
                                Failures Logged
                            </span>
<span className="relative z-10 text-2xl font-semibold tracking-tight text-red-500 mt-2">47</span>
</div>
</div>

<div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-sm overflow-hidden">
<div className="px-5 py-4 border-b border-zinc-800/80 flex items-center justify-between bg-zinc-900/50">
<h3 className="text-sm font-medium text-zinc-100 flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:sort-from-bottom-to-top-linear"></iconify-icon>
                                Failure Summarization
                            </h3>
<button className="text-xs font-medium text-red-400 hover:text-red-300 transition-colors flex items-center gap-1">
                                Export Report
                                <iconify-icon icon="solar:download-linear"></iconify-icon>
</button>
</div>
<div className="divide-y divide-zinc-800/50">

<div className="p-5 hover:bg-zinc-800/30 transition-colors">
<div className="flex items-start justify-between mb-2">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
<h4 className="text-sm font-medium text-zinc-200">PCIe L0s to L1 State Transition Timeout</h4>
</div>
<span className="text-xs font-mono text-zinc-500">ERR_PCIE_0x4A</span>
</div>
<p className="text-sm text-zinc-400 leading-relaxed mb-3">
                                    Root complex failed to acknowledge ASPM L1 entry request within the 50us window. Trace shows LTSSM stuck in Recovery.RcvrLock prior to timeout.
                                </p>
<div className="flex items-center gap-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-800 text-zinc-300 border border-zinc-700">
                                        Suite: PCIe Gen5
                                    </span>
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-800 text-zinc-300 border border-zinc-700">
                                        Occurrences: 12
                                    </span>
</div>
</div>

<div className="p-5 hover:bg-zinc-800/30 transition-colors">
<div className="flex items-start justify-between mb-2">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
<h4 className="text-sm font-medium text-zinc-200">DDR5 Write Leveling Phase Error</h4>
</div>
<span className="text-xs font-mono text-zinc-500">ERR_MEM_0x12</span>
</div>
<p className="text-sm text-zinc-400 leading-relaxed mb-3">
                                    DQS-to-CK delay calibration failed on Channel A, DIMM 0. Recorded phase delta exceeded JEDEC specified limits across 3 consecutive training iterations.
                                </p>
<div className="flex items-center gap-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-800 text-zinc-300 border border-zinc-700">
                                        Suite: Memory Training
                                    </span>
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-800 text-zinc-300 border border-zinc-700">
                                        Occurrences: 35
                                    </span>
</div>
</div>

<div className="p-5 hover:bg-zinc-800/30 transition-colors">
<div className="flex items-start justify-between mb-2">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
<h4 className="text-sm font-medium text-zinc-200">Infinity Fabric Bandwidth Degradation</h4>
</div>
<span className="text-xs font-mono text-zinc-500">WARN_IF_0x8C</span>
</div>
<p className="text-sm text-zinc-400 leading-relaxed mb-3">
                                    Cross-die sustained bandwidth dropped 15% below expected threshold during concurrent heavy memory write operations. Suspect thermal throttling on Die 1.
                                </p>
<div className="flex items-center gap-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-800 text-zinc-300 border border-zinc-700">
                                        Suite: Infinity Fabric
                                    </span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>

    </>
  );
}
