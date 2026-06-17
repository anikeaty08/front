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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<aside className="w-[260px] flex-shrink-0 border-r border-[#ebebeb] bg-white flex flex-col z-20 transition-all duration-300">

<div className="h-16 px-4 flex items-center justify-between border-b border-transparent mt-2">
<div className="flex items-center gap-3">
<div className="w-7 h-7 bg-[#111111] rounded flex items-center justify-center text-white">
<iconify-icon icon="solar:shield-keyhole-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-[#111111] leading-none">E. Blackwood</span>
<span className="text-xs text-[#888888] font-medium mt-1 leading-none">Admin</span>
</div>
</div>
<button className="text-[#888888] hover:text-[#111111] transition-colors rounded p-1 hover:bg-[#f4f4f4]">
<iconify-icon icon="solar:sidebar-minimalistic-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>

<div className="px-4 mt-4">
<div className="bg-[#f2f2f2] rounded-md flex items-center px-2.5 py-1.5 border border-transparent focus-within:border-[#111111] transition-colors group cursor-text">
<iconify-icon className="text-[#888888] group-focus-within:text-[#111111] transition-colors" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="bg-transparent border-none outline-none text-sm ml-2 w-full text-[#111111] placeholder:text-[#888888]" placeholder="Search agents, sessions..." type="text"/>
<span className="text-xs text-[#888888] font-medium bg-[#e5e5e5] px-1.5 rounded text-opacity-80">⌘K</span>
</div>
</div>

<div className="flex-1 overflow-y-auto mt-6 pb-6 space-y-6 px-3">

<div>
<div className="text-xs uppercase text-[#888888] font-medium tracking-widest px-2 mb-2 flex items-center justify-between">
<span>Overview</span>
</div>
<ul className="space-y-0.5">
<li>
<a className="flex items-center gap-3 px-2 py-1.5 rounded-md text-[#444444] hover:bg-[#f4f4f4] transition-colors cursor-pointer" href="#">
<iconify-icon icon="solar:home-2-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="font-medium">Dashboard</span>
</a>
</li>
<li>

<a className="flex items-center gap-3 px-2 py-1.5 rounded-md bg-[#efefef] text-[#111111] font-medium border-l-[3px] border-[#111111] -ml-[3px] cursor-pointer" href="#">
<iconify-icon className="ml-[3px]" icon="solar:target-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span>Agents</span>
<span className="ml-auto bg-white border border-[#e5e5e5] text-xs px-1.5 rounded-full text-[#111111]">14</span>
</a>
</li>
<li>
<a className="flex items-center justify-between px-2 py-1.5 rounded-md text-[#444444] hover:bg-[#f4f4f4] transition-colors cursor-pointer group" href="#">
<div className="flex items-center gap-3">
<iconify-icon icon="solar:terminal-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="font-medium">Sessions</span>
</div>
<iconify-icon className="text-[#888888] opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</a>
</li>
</ul>
</div>

<div>
<div className="text-xs uppercase text-[#888888] font-medium tracking-widest px-2 mb-2 flex items-center justify-between group">
<span>Infrastructure</span>
<button className="text-[#888888] hover:text-[#111111] opacity-0 group-hover:opacity-100 transition-all"><iconify-icon icon="solar:add-square-linear" width="14"></iconify-icon></button>
</div>
<ul className="space-y-0.5">
<li>
<a className="flex items-center gap-3 px-2 py-1.5 rounded-md text-[#444444] hover:bg-[#f4f4f4] transition-colors cursor-pointer" href="#">
<iconify-icon icon="solar:radar-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="font-medium">Listeners</span>
<span className="ml-auto flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16a34a] opacity-50"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#16a34a]"></span>
</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-2 py-1.5 rounded-md text-[#444444] hover:bg-[#f4f4f4] transition-colors cursor-pointer" href="#">
<iconify-icon icon="solar:box-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="font-medium">Payload Builder</span>
</a>
</li>
</ul>
</div>

<div>
<div className="text-xs uppercase text-[#888888] font-medium tracking-widest px-2 mb-2">
<span>Operations</span>
</div>
<ul className="space-y-0.5">
<li>
<a className="flex items-center gap-3 px-2 py-1.5 rounded-md text-[#444444] hover:bg-[#f4f4f4] transition-colors cursor-pointer" href="#">
<iconify-icon icon="solar:server-square-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="font-medium">Tasks &amp; Jobs</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-2 py-1.5 rounded-md text-[#444444] hover:bg-[#f4f4f4] transition-colors cursor-pointer" href="#">
<iconify-icon icon="solar:folder-with-files-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="font-medium">File Manager</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-2 py-1.5 rounded-md text-[#444444] hover:bg-[#f4f4f4] transition-colors cursor-pointer" href="#">
<iconify-icon icon="solar:layers-minimalistic-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="font-medium">Post-Exploitation</span>
</a>
</li>
</ul>
</div>

<div>
<div className="text-xs uppercase text-[#888888] font-medium tracking-widest px-2 mb-2">
<span>System</span>
</div>
<ul className="space-y-0.5">
<li>
<a className="flex items-center gap-3 px-2 py-1.5 rounded-md text-[#444444] hover:bg-[#f4f4f4] transition-colors cursor-pointer" href="#">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="font-medium">Logs &amp; History</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-2 py-1.5 rounded-md text-[#444444] hover:bg-[#f4f4f4] transition-colors cursor-pointer" href="#">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="font-medium">Settings</span>
</a>
</li>
</ul>
</div>
</div>

<div className="h-12 border-t border-[#ebebeb] flex items-center justify-center font-bold tracking-tighter text-lg text-[#111111]">
            AURC2
        </div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-[#ffffff] relative pb-6">

<div className="flex-1 overflow-y-auto px-8 pt-8 pb-16">

<div className="flex items-end justify-between mb-8">
<div>
<div className="text-xs text-[#888888] font-medium mb-1 flex items-center gap-1.5">
<iconify-icon icon="solar:home-2-linear" width="12"></iconify-icon>
<span>/</span>
<span>Overview</span>
<span>/</span>
<span className="text-[#111111]">Agents</span>
</div>
<h1 className="text-3xl font-bold tracking-tight text-[#111111]">Active Agents</h1>
<div className="h-[2px] w-6 bg-[#111111] mt-2"></div>
</div>
<div className="flex items-center gap-3">
<button className="bg-white border border-[#e5e5e5] text-[#111111] rounded-md px-3 py-1.5 text-sm font-medium hover:bg-[#f8f8f8] transition-colors flex items-center gap-2">
<iconify-icon icon="solar:filter-linear" width="16"></iconify-icon>
                        Filter ▾
                    </button>
<button className="bg-[#111111] text-white rounded-md px-3 py-1.5 text-sm font-medium hover:bg-[#1a1a1a] transition-colors flex items-center gap-2 shadow-sm">
<iconify-icon icon="solar:box-linear" width="16"></iconify-icon>
                        Generate Payload
                    </button>
</div>
</div>

<div className="flex items-center gap-6 mb-6">
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-[#888888] mr-1 uppercase">OS</span>
<button className="bg-[#111111] text-white border border-[#111111] rounded-full px-3 py-1 text-xs font-medium cursor-pointer transition-colors">All</button>
<button className="bg-white text-[#444444] border border-[#e5e5e5] rounded-full px-3 py-1 text-xs font-medium hover:bg-[#f8f8f8] cursor-pointer transition-colors flex items-center gap-1.5">
<iconify-icon icon="solar:windows-linear" width="14"></iconify-icon> Windows
                    </button>
<button className="bg-white text-[#444444] border border-[#e5e5e5] rounded-full px-3 py-1 text-xs font-medium hover:bg-[#f8f8f8] cursor-pointer transition-colors flex items-center gap-1.5">
<iconify-icon icon="solar:programming-linear" width="14"></iconify-icon> Linux
                    </button>
<button className="bg-white text-[#444444] border border-[#e5e5e5] rounded-full px-3 py-1 text-xs font-medium hover:bg-[#f8f8f8] cursor-pointer transition-colors flex items-center gap-1.5">
<iconify-icon icon="solar:apple-linear" width="14"></iconify-icon> macOS
                    </button>
</div>
<div className="w-[1px] h-4 bg-[#ebebeb]"></div>
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-[#888888] mr-1 uppercase">Status</span>
<button className="bg-[#111111] text-white border border-[#111111] rounded-full px-3 py-1 text-xs font-medium cursor-pointer transition-colors">All</button>
<button className="bg-white text-[#444444] border border-[#e5e5e5] rounded-full px-3 py-1 text-xs font-medium hover:bg-[#f8f8f8] cursor-pointer transition-colors flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-[#16a34a]"></div> Active
                    </button>
<button className="bg-white text-[#444444] border border-[#e5e5e5] rounded-full px-3 py-1 text-xs font-medium hover:bg-[#f8f8f8] cursor-pointer transition-colors flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-[#d97706]"></div> Idle
                    </button>
<button className="bg-white text-[#444444] border border-[#e5e5e5] rounded-full px-3 py-1 text-xs font-medium hover:bg-[#f8f8f8] cursor-pointer transition-colors flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-[#dc2626]"></div> Dead
                    </button>
</div>
</div>

<div className="w-full">
<table className="w-full text-left border-collapse whitespace-nowrap">
<thead>
<tr>
<th className="border-b border-[#e5e5e5] pb-3 px-3 w-8">
<label className="custom-checkbox relative cursor-pointer block">
<input className="sr-only" type="checkbox"/>
<div className="w-3.5 h-3.5 border border-[#d0d0d0] rounded-[3px] flex items-center justify-center transition-colors">
<svg className="hidden w-2.5 h-2.5 text-white pointer-events-none" fill="none" viewbox="0 0 14 14">
<path d="M3 7L6 10L11 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</label>
</th>
<th className="text-xs font-medium text-[#888888] border-b border-[#e5e5e5] pb-3 px-3 cursor-pointer hover:text-[#111111] group">Agent ID <iconify-icon className="inline opacity-0 group-hover:opacity-100" icon="solar:alt-arrow-down-linear" width="12"></iconify-icon></th>
<th className="text-xs font-semibold text-[#111111] border-b border-[#e5e5e5] pb-3 px-3 cursor-pointer">Hostname <iconify-icon className="inline" icon="solar:alt-arrow-down-linear" width="12"></iconify-icon></th>
<th className="text-xs font-medium text-[#888888] border-b border-[#e5e5e5] pb-3 px-3">Networks</th>
<th className="text-xs font-medium text-[#888888] border-b border-[#e5e5e5] pb-3 px-3">System</th>
<th className="text-xs font-medium text-[#888888] border-b border-[#e5e5e5] pb-3 px-3">Channel</th>
<th className="text-xs font-medium text-[#888888] border-b border-[#e5e5e5] pb-3 px-3 text-right">Timer</th>
<th className="text-xs font-medium text-[#888888] border-b border-[#e5e5e5] pb-3 px-3 text-right">Last Seen</th>
<th className="border-b border-[#e5e5e5] pb-3 px-3 w-10 text-center"></th>
<th className="border-b border-[#e5e5e5] pb-3 px-3 text-right"></th>
</tr>
</thead>
<tbody>

<tr className="group hover:bg-[#f8f8f8] transition-colors cursor-pointer border-b border-[#ebebeb]">
<td className="py-3 px-3">
<label className="custom-checkbox relative cursor-pointer block opacity-0 group-hover:opacity-100 transition-opacity">
<input className="sr-only" type="checkbox"/>
<div className="w-3.5 h-3.5 border border-[#d0d0d0] rounded-[3px] flex items-center justify-center bg-white transition-colors">
<svg className="hidden w-2.5 h-2.5 text-white pointer-events-none" fill="none" viewbox="0 0 14 14">
<path d="M3 7L6 10L11 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</label>
</td>
<td className="py-3 px-3 font-mono text-xs font-semibold text-[#111111]">TITAN-7</td>
<td className="py-3 px-3 text-sm font-semibold text-[#111111]">DESKTOP-X9L2Q</td>
<td className="py-3 px-3 font-mono text-xs text-[#888888] leading-tight">
<div>10.0.5.14</div>
<div className="opacity-60">198.51.100.42</div>
</td>
<td className="py-3 px-3">
<div className="flex items-center gap-2 text-xs">
<iconify-icon className="text-[#888888]" icon="solar:windows-linear" width="16"></iconify-icon>
<div className="flex flex-col">
<span className="text-[#444444]">ntauthority\system</span>
<span className="font-mono text-[#888888] opacity-80">svchost.exe (4012)</span>
</div>
<iconify-icon className="text-[#d97706]" icon="solar:crown-linear" width="14"></iconify-icon>
</div>
</td>
<td className="py-3 px-3">
<span className="bg-[#eff6ff] text-[#2563eb] text-xs px-2 py-0.5 rounded font-medium border border-[#bfdbfe]">HTTPS</span>
</td>
<td className="py-3 px-3 font-mono text-xs text-[#888888] text-right">
                                10s <span className="opacity-50">±5%</span>
</td>
<td className="py-3 px-3 text-xs text-[#444444] text-right relative">
                                2s ago
                            </td>
<td className="py-3 px-3 text-center">
<div className="w-2.5 h-2.5 rounded-full bg-[#16a34a] mx-auto relative shadow-[0_0_0_3px_#f0fff4]"></div>
</td>
<td className="py-3 px-3 text-right">
<div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="text-sm font-medium text-[#111111] hover:underline">Interact</span>
<button className="text-[#888888] hover:text-[#111111] p-1 rounded hover:bg-[#efefef]"><iconify-icon icon="solar:menu-dots-bold" width="16"></iconify-icon></button>
</div>
</td>
</tr>

<tr className="group hover:bg-[#f8f8f8] transition-colors cursor-pointer border-b border-[#ebebeb]">
<td className="py-3 px-3">
<label className="custom-checkbox relative cursor-pointer block opacity-0 group-hover:opacity-100 transition-opacity">
<input className="sr-only" type="checkbox"/>
<div className="w-3.5 h-3.5 border border-[#d0d0d0] rounded-[3px] flex items-center justify-center bg-white transition-colors">
<svg className="hidden w-2.5 h-2.5 text-white pointer-events-none" fill="none" viewbox="0 0 14 14">
<path d="M3 7L6 10L11 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</label>
</td>
<td className="py-3 px-3 font-mono text-xs font-semibold text-[#111111]">APOLLO-3</td>
<td className="py-3 px-3 text-sm font-semibold text-[#111111]">prod-db-01</td>
<td className="py-3 px-3 font-mono text-xs text-[#888888] leading-tight">
<div>172.16.20.5</div>
<div className="opacity-60">203.0.113.88</div>
</td>
<td className="py-3 px-3">
<div className="flex items-center gap-2 text-xs">
<iconify-icon className="text-[#888888]" icon="solar:programming-linear" width="16"></iconify-icon>
<div className="flex flex-col">
<span className="text-[#444444]">postgres</span>
<span className="font-mono text-[#888888] opacity-80">bash (1104)</span>
</div>
</div>
</td>
<td className="py-3 px-3">
<span className="bg-[#fff8ee] text-[#d97706] text-xs px-2 py-0.5 rounded font-medium border border-[#fde68a]">DNS</span>
</td>
<td className="py-3 px-3 font-mono text-xs text-[#888888] text-right">
                                5m <span className="opacity-50">±15%</span>
</td>
<td className="py-3 px-3 text-xs text-[#444444] text-right">
                                4m ago
                            </td>
<td className="py-3 px-3 text-center">
<div className="w-2.5 h-2.5 rounded-full bg-[#d97706] mx-auto shadow-[0_0_0_3px_#fff8ee]"></div>
</td>
<td className="py-3 px-3 text-right">
<div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="text-sm font-medium text-[#111111] hover:underline">Interact</span>
<button className="text-[#888888] hover:text-[#111111] p-1 rounded hover:bg-[#efefef]"><iconify-icon icon="solar:menu-dots-bold" width="16"></iconify-icon></button>
</div>
</td>
</tr>

<tr className="group hover:bg-[#f8f8f8] transition-colors cursor-pointer border-b border-[#ebebeb]">
<td className="py-3 px-3">
<label className="custom-checkbox relative cursor-pointer block opacity-0 group-hover:opacity-100 transition-opacity">
<input className="sr-only" type="checkbox"/>
<div className="w-3.5 h-3.5 border border-[#d0d0d0] rounded-[3px] flex items-center justify-center bg-white transition-colors">
<svg className="hidden w-2.5 h-2.5 text-white pointer-events-none" fill="none" viewbox="0 0 14 14">
<path d="M3 7L6 10L11 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</label>
</td>
<td className="py-3 px-3 font-mono text-xs font-semibold text-[#111111]">HERMES-1</td>
<td className="py-3 px-3 text-sm font-semibold text-[#888888] line-through decoration-[#d0d0d0]">Janes-MacBook-Pro</td>
<td className="py-3 px-3 font-mono text-xs text-[#888888] leading-tight opacity-60">
<div>192.168.1.105</div>
<div className="opacity-60">104.28.19.4</div>
</td>
<td className="py-3 px-3 opacity-60">
<div className="flex items-center gap-2 text-xs">
<iconify-icon className="text-[#888888]" icon="solar:apple-linear" width="16"></iconify-icon>
<div className="flex flex-col">
<span className="text-[#444444]">jdoe</span>
<span className="font-mono text-[#888888] opacity-80">Updater (842)</span>
</div>
</div>
</td>
<td className="py-3 px-3 opacity-60">
<span className="bg-[#f0fff4] text-[#16a34a] text-xs px-2 py-0.5 rounded font-medium border border-[#bbf7d0]">mTLS</span>
</td>
<td className="py-3 px-3 font-mono text-xs text-[#888888] text-right opacity-60">
                                30s <span className="opacity-50">±0%</span>
</td>
<td className="py-3 px-3 text-xs text-[#dc2626] text-right">
                                14h ago
                            </td>
<td className="py-3 px-3 text-center">
<div className="w-2.5 h-2.5 rounded-full bg-[#dc2626] mx-auto shadow-[0_0_0_3px_#fff0f0]"></div>
</td>
<td className="py-3 px-3 text-right">
<div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="text-sm font-medium text-[#111111] hover:underline">Interact</span>
<button className="text-[#888888] hover:text-[#111111] p-1 rounded hover:bg-[#efefef]"><iconify-icon icon="solar:menu-dots-bold" width="16"></iconify-icon></button>
</div>
</td>
</tr>

<tr className="group hover:bg-[#f8f8f8] transition-colors cursor-pointer border-b border-[#ebebeb]">
<td className="py-3 px-3">
<label className="custom-checkbox relative cursor-pointer block opacity-0 group-hover:opacity-100 transition-opacity">
<input className="sr-only" type="checkbox"/>
<div className="w-3.5 h-3.5 border border-[#d0d0d0] rounded-[3px] flex items-center justify-center bg-white transition-colors">
<svg className="hidden w-2.5 h-2.5 text-white pointer-events-none" fill="none" viewbox="0 0 14 14">
<path d="M3 7L6 10L11 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</label>
</td>
<td className="py-3 px-3 font-mono text-xs font-semibold text-[#111111]">ARES-9</td>
<td className="py-3 px-3 text-sm font-semibold text-[#111111]">DC-PRIMARY</td>
<td className="py-3 px-3 font-mono text-xs text-[#888888] leading-tight">
<div>10.0.0.2</div>
<div className="opacity-60">198.51.100.42</div>
</td>
<td className="py-3 px-3">
<div className="flex items-center gap-2 text-xs">
<iconify-icon className="text-[#888888]" icon="solar:windows-linear" width="16"></iconify-icon>
<div className="flex flex-col">
<span className="text-[#444444]">CORP\Administrator</span>
<span className="font-mono text-[#888888] opacity-80">lsass.exe (644)</span>
</div>
<iconify-icon className="text-[#d97706]" icon="solar:crown-linear" width="14"></iconify-icon>
</div>
</td>
<td className="py-3 px-3">
<span className="bg-[#f2f2f2] text-[#555555] text-xs px-2 py-0.5 rounded font-medium border border-[#e5e5e5]">HTTP</span>
</td>
<td className="py-3 px-3 font-mono text-xs text-[#888888] text-right">
                                60s <span className="opacity-50">±20%</span>
</td>
<td className="py-3 px-3 text-xs text-[#444444] text-right relative">
                                12s ago
                            </td>
<td className="py-3 px-3 text-center">
<div className="w-2.5 h-2.5 rounded-full bg-[#16a34a] mx-auto relative shadow-[0_0_0_3px_#f0fff4]"></div>
</td>
<td className="py-3 px-3 text-right">
<div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="text-sm font-medium text-[#111111] hover:underline">Interact</span>
<button className="text-[#888888] hover:text-[#111111] p-1 rounded hover:bg-[#efefef]"><iconify-icon icon="solar:menu-dots-bold" width="16"></iconify-icon></button>
</div>
</td>
</tr>
</tbody>
</table>
</div>


</div>

<div className="h-6 w-full absolute bottom-0 left-0 right-0 border-t border-[#ebebeb] bg-white flex items-center justify-between px-4 font-mono text-[11px] z-50 text-[#888888]">
<div className="flex items-center gap-3">
<span className="text-[#111111] font-semibold flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-[#16a34a]"></div> TITAN-7</span>
<span>·</span>
<span>2s ago</span>
<span>·</span>
<span>10s</span>
<span>·</span>
<span>HTTPS</span>
<span>·</span>
<span>3 ops online</span>
</div>
<div className="flex items-center">
<button className="border border-[#dc2626] text-[#dc2626] bg-white rounded-full px-2.5 py-[2px] font-sans font-medium text-[10px] uppercase tracking-wider hover:bg-[#fff0f0] transition-colors flex items-center gap-1">
<iconify-icon icon="solar:danger-triangle-linear" width="10"></iconify-icon> Emergency Stop
                </button>
</div>
</div>
</main>

    </>
  );
}
