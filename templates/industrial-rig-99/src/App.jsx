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
      

<aside className="w-[130px] bg-[#0D0D0F] border-r border-[#2A2A32] flex-shrink-0 flex flex-col h-full z-40 relative">
<div className="px-4 py-6 mb-4 flex justify-center">
<span className="text-base tracking-[0.2em] font-semibold text-[#F0F0F0]">NORAM</span>
</div>
<div className="flex flex-col w-full flex-1 gap-1">
<button className="w-full h-[56px] flex flex-col items-center justify-center gap-1.5 text-[#616161] hover:text-[#9E9E9E] hover:bg-[#141416] transition-colors duration-150 group">
<iconify-icon className="text-xl group-hover:scale-110 transition-transform" icon="solar:widget-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs">Dashboard</span>
</button>
<button className="w-full h-[56px] flex flex-col items-center justify-center gap-1.5 text-[#616161] hover:text-[#9E9E9E] hover:bg-[#141416] transition-colors duration-150 group">
<iconify-icon className="text-xl group-hover:scale-110 transition-transform" icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs">Assets</span>
</button>

<button className="w-full h-[56px] flex flex-col items-center justify-center gap-1.5 text-[#F0F0F0] bg-[#1A1A1E] border-l-[3px] border-[#6C4FD4] transition-all duration-150">
<iconify-icon className="text-xl" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium">Parts</span>
</button>
<button className="w-full h-[56px] flex flex-col items-center justify-center gap-1.5 text-[#616161] hover:text-[#9E9E9E] hover:bg-[#141416] transition-colors duration-150 group">
<iconify-icon className="text-xl group-hover:scale-110 transition-transform" icon="solar:cart-large-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs">Cart</span>
</button>
<button className="w-full h-[56px] flex flex-col items-center justify-center gap-1.5 text-[#616161] hover:text-[#9E9E9E] hover:bg-[#141416] transition-colors duration-150 group">
<iconify-icon className="text-xl group-hover:scale-110 transition-transform" icon="solar:transfer-horizontal-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs">Transfer</span>
</button>
</div>
<div className="flex flex-col w-full pb-4">
<button className="w-full h-[56px] flex flex-col items-center justify-center gap-1.5 text-[#616161] hover:text-[#9E9E9E] hover:bg-[#141416] transition-colors duration-150 group">
<iconify-icon className="text-xl group-hover:scale-110 transition-transform" icon="solar:qr-code-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs">Scan QR</span>
</button>
<button className="w-full h-[56px] flex flex-col items-center justify-center gap-1.5 text-[#616161] hover:text-[#9E9E9E] hover:bg-[#141416] transition-colors duration-150 group">
<iconify-icon className="text-xl group-hover:scale-110 transition-transform" icon="solar:settings-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs">Settings</span>
</button>
</div>
</aside>

<div className="flex-1 flex flex-col h-screen relative w-[calc(100%-130px)] bg-[#0D0D0F]">

<header className="h-[52px] bg-[#141416] border-b border-[#2A2A32] px-6 flex justify-between items-center flex-shrink-0 z-30">
<button className="flex items-center gap-1.5 text-[#9E9E9E] hover:text-[#F0F0F0] text-sm transition-colors duration-150">
<iconify-icon className="text-lg" icon="solar:alt-arrow-left-linear" strokeWidth="1.5"></iconify-icon> Back
            </button>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#4CAF50]"></div>
<span className="text-xs text-[#616161]">Auto-saved 2m ago</span>
</div>
<div className="flex items-center gap-3">
<button className="px-4 py-1.5 text-sm text-[#9E9E9E] border border-[#2A2A32] rounded-md hover:border-[#3D3D50] hover:text-[#F0F0F0] transition-all duration-150">Print / PDF</button>
<button className="px-4 py-1.5 text-sm text-[#9E9E9E] border border-[#2A2A32] rounded-md hover:border-[#3D3D50] hover:text-[#F0F0F0] transition-all duration-150">Save Draft</button>
<button className="px-4 py-1.5 text-sm text-[#F0F0F0] font-medium bg-[#6C4FD4] rounded-md hover:bg-[#7B5FE0] hover:shadow-[0_0_12px_rgba(108,79,212,0.4)] transition-all duration-150 active:scale-95">Submit</button>
</div>
</header>

<main className="flex-1 overflow-y-auto scrollbar-hide pb-[80px]">

<div className="px-8 pt-8 pb-0 flex justify-between items-end">
<div>
<h1 className="text-2xl tracking-tight font-semibold text-[#F0F0F0] uppercase">Weekly Rig Inspection</h1>
<p className="text-sm text-[#9E9E9E] mt-1">Complete all required inspection items before submission.</p>
</div>
<div className="flex flex-col items-end gap-1.5">
<span className="text-xs text-[#616161] uppercase tracking-wider">Progress</span>
<div className="text-lg font-medium">
<span className="text-[#6C4FD4]">05</span>
<span className="text-[#9E9E9E]"> / 64 Tasks</span>
</div>
<div className="w-48 h-1 bg-[#2A2A32] rounded-full overflow-hidden mt-1">
<div className="h-full bg-[#6C4FD4] rounded-full" style={{width: '8%', transition: 'width 0.3s ease'}}></div>
</div>
</div>
</div>

<div className="mt-6 px-8 grid grid-cols-4 gap-4">
<div className="flex flex-col gap-1">
<label className="text-xs text-[#9E9E9E] uppercase tracking-wider">Rig / Asset #</label>
<input className="h-10 bg-[#1A1A1E] border border-[#2A2A32] rounded-md px-3 text-sm text-[#F0F0F0] focus:outline-none focus:border-[#6C4FD4] focus:ring-2 focus:ring-[#6C4FD4]/20 transition-all" placeholder="MP-402-A" type="text" value="Rig 24"/>
</div>
<div className="flex flex-col gap-1">
<label className="text-xs text-[#9E9E9E] uppercase tracking-wider">Date</label>
<input className="h-10 bg-[#1A1A1E] border border-[#2A2A32] rounded-md px-3 text-sm text-[#F0F0F0] focus:outline-none focus:border-[#6C4FD4] focus:ring-2 focus:ring-[#6C4FD4]/20 transition-all [color-scheme:dark]" type="date" value="2023-10-24"/>
</div>
<div className="flex flex-col gap-1">
<label className="text-xs text-[#9E9E9E] uppercase tracking-wider">Inspector Name</label>
<input className="h-10 bg-[#1A1A1E] border border-[#2A2A32] rounded-md px-3 text-sm text-[#F0F0F0] focus:outline-none focus:border-[#6C4FD4] focus:ring-2 focus:ring-[#6C4FD4]/20 transition-all" placeholder="Full Name" type="text" value="James Holden"/>
</div>
<div className="flex flex-col gap-1">
<label className="text-xs text-[#9E9E9E] uppercase tracking-wider">Shift</label>
<div className="flex h-10 bg-[#1A1A1E] border border-[#2A2A32] rounded-md overflow-hidden p-0.5">
<button className="flex-1 flex items-center justify-center gap-1.5 bg-[#1C1825] border border-[#6C4FD4] rounded-sm text-[#F0F0F0] text-sm transition-colors">
<iconify-icon className="text-base" icon="solar:sun-linear"></iconify-icon> Day
                        </button>
<button className="flex-1 flex items-center justify-center gap-1.5 bg-transparent text-[#616161] hover:text-[#9E9E9E] text-sm transition-colors">
<iconify-icon className="text-base" icon="solar:moon-linear"></iconify-icon> Night
                        </button>
</div>
</div>
</div>

<div className="mt-8 px-8">
<div className="flex gap-1 overflow-x-auto scrollbar-hide border-b border-[#2A2A32]">
<button className="px-5 py-2.5 text-sm font-medium text-[#F0F0F0] border-b-2 border-[#6C4FD4] flex items-center gap-2 relative">
                        Policy Items
                        <span className="bg-[#1C1825] text-[#6C4FD4] text-xs px-2 py-0.5 rounded-full font-normal">16</span>
</button>
<button className="px-5 py-2.5 text-sm text-[#616161] hover:text-[#9E9E9E] hover:border-[#2A2A32] border-b-2 border-transparent transition-all flex items-center gap-2 relative">
                        Rig Floor
                        <span className="bg-[#1A1A1E] text-[#616161] text-xs px-2 py-0.5 rounded-full font-normal">8</span>
</button>
<button className="px-5 py-2.5 text-sm text-[#616161] hover:text-[#9E9E9E] hover:border-[#2A2A32] border-b-2 border-transparent transition-all flex items-center gap-2 relative">
                        Fall Protection
                        <span className="bg-[#1A1A1E] text-[#616161] text-xs px-2 py-0.5 rounded-full font-normal">6</span>
</button>
<button className="px-5 py-2.5 text-sm text-[#616161] hover:text-[#9E9E9E] hover:border-[#2A2A32] border-b-2 border-transparent transition-all flex items-center gap-2 relative">
                        Electrical
                        <span className="bg-[#1A1A1E] text-[#616161] text-xs px-2 py-0.5 rounded-full font-normal">8</span>
</button>
<button className="px-5 py-2.5 text-sm text-[#616161] hover:text-[#9E9E9E] hover:border-[#2A2A32] border-b-2 border-transparent transition-all flex items-center gap-2 relative">
                        General Safety
                        <span className="bg-[#1A1A1E] text-[#616161] text-xs px-2 py-0.5 rounded-full font-normal">26</span>
</button>
<button className="px-5 py-2.5 text-sm text-[#616161] hover:text-[#9E9E9E] hover:border-[#2A2A32] border-b-2 border-transparent transition-all flex items-center gap-2 ml-auto">
<iconify-icon className="text-base" icon="solar:paperclip-linear"></iconify-icon> Attachments
                    </button>
</div>
</div>

<div className="px-8 py-6 flex flex-col gap-3">

<div className="bg-[#141416] border border-[#2A2A32] border-l-[3px] border-l-[#6C4FD4] rounded-r-[10px] p-3 px-4 flex justify-between items-center mb-1">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-[#6C4FD4] rounded-sm"></div>
<h2 className="font-medium text-sm text-[#F0F0F0]">Policy Items</h2>
</div>
<div className="flex items-center gap-3">
<span className="bg-[#1C1825] text-[#6C4FD4] border border-[#6C4FD4]/30 px-3 py-1 rounded-full text-xs">2 / 16 Complete</span>
<iconify-icon className="text-[#9E9E9E] text-lg" icon="solar:alt-arrow-up-linear"></iconify-icon>
</div>
</div>

<div className="bg-[#141416] border border-[#2A2A32] rounded-[10px] p-4 flex flex-col hover:border-[#3D3D50] transition-colors duration-150">
<div className="flex justify-between items-start gap-6">
<div className="flex gap-3 max-w-[60%]">
<span className="text-xs font-medium text-[#616161] mt-0.5">01</span>
<p className="text-sm text-[#F0F0F0]">Safety Policy manual available, signed by upper management, and visibly posted?</p>
</div>
<div className="flex gap-2 flex-shrink-0">
<button className="h-8 px-3.5 bg-[#1A1A1E] border border-[#2A2A32] rounded-md text-sm font-medium text-[#616161] hover:bg-[#1E1E24] hover:text-[#9E9E9E] transition-all duration-150 active:scale-95">Pass</button>
<button className="h-8 px-3.5 bg-[#1A1A1E] border border-[#2A2A32] rounded-md text-sm font-medium text-[#616161] hover:bg-[#1E1E24] hover:text-[#9E9E9E] transition-all duration-150 active:scale-95">Fail</button>
<button className="h-8 px-3.5 bg-[#1A1A1E] border border-[#2A2A32] rounded-md text-sm font-medium text-[#616161] hover:bg-[#1E1E24] hover:text-[#9E9E9E] transition-all duration-150 active:scale-95">N/A</button>
</div>
</div>
<div className="mt-3">
<input className="w-full h-9 bg-[#1A1A1E] border border-transparent rounded-md px-3 text-sm text-[#9E9E9E] placeholder-[#3D3D3D] focus:bg-[#1E1E24] focus:border-[#2A2A32] focus:outline-none transition-all" placeholder="Add notes or observations..." type="text"/>
</div>
</div>

<div className="bg-[#141416] border border-[#2A2A32] rounded-[10px] p-4 flex flex-col hover:border-[#3D3D50] transition-colors duration-150">
<div className="flex justify-between items-start gap-6">
<div className="flex gap-3 max-w-[60%]">
<span className="text-xs font-medium text-[#616161] mt-0.5">02</span>
<p className="text-sm text-[#F0F0F0]">Daily inspection logs completed accurately for the previous week?</p>
</div>
<div className="flex gap-2 flex-shrink-0">
<button className="h-8 px-3.5 bg-[#1B3A1B] border border-[#2E7D32] rounded-md text-sm font-medium text-[#4CAF50] transition-all duration-150 active:scale-95">Pass</button>
<button className="h-8 px-3.5 bg-[#1A1A1E] border border-[#2A2A32] rounded-md text-sm font-medium text-[#616161] hover:bg-[#1E1E24] hover:text-[#9E9E9E] transition-all duration-150 active:scale-95">Fail</button>
<button className="h-8 px-3.5 bg-[#1A1A1E] border border-[#2A2A32] rounded-md text-sm font-medium text-[#616161] hover:bg-[#1E1E24] hover:text-[#9E9E9E] transition-all duration-150 active:scale-95">N/A</button>
</div>
</div>
<div className="mt-3">
<input className="w-full h-9 bg-[#1A1A1E] border border-transparent rounded-md px-3 text-sm text-[#F0F0F0] placeholder-[#3D3D3D] focus:bg-[#1E1E24] focus:border-[#2A2A32] focus:outline-none transition-all" placeholder="Add notes or observations..." type="text" value="All logs signed by supervisor."/>
</div>
</div>

<div className="bg-[#E53935]/[0.04] border border-[#C62828] rounded-[10px] p-4 flex flex-col transition-colors duration-150 overflow-hidden">
<div className="flex justify-between items-start gap-6">
<div className="flex gap-3 max-w-[60%]">
<span className="text-xs font-medium text-[#E53935] mt-0.5">03</span>
<p className="text-sm text-[#F0F0F0]">Emergency Response Plan posted and visible near the primary rig floor?</p>
</div>
<div className="flex gap-2 flex-shrink-0">
<button className="h-8 px-3.5 bg-[#1A1A1E] border border-[#2A2A32] rounded-md text-sm font-medium text-[#616161] hover:bg-[#1E1E24] hover:text-[#9E9E9E] transition-all duration-150 active:scale-95">Pass</button>
<button className="h-8 px-3.5 bg-[#3A1B1B] border border-[#C62828] rounded-md text-sm font-medium text-[#E53935] transition-all duration-150 active:scale-95">Fail</button>
<button className="h-8 px-3.5 bg-[#1A1A1E] border border-[#2A2A32] rounded-md text-sm font-medium text-[#616161] hover:bg-[#1E1E24] hover:text-[#9E9E9E] transition-all duration-150 active:scale-95">N/A</button>
</div>
</div>
<div className="mt-3">
<input className="w-full h-9 bg-[#1A1A1E] border border-transparent rounded-md px-3 text-sm text-[#F0F0F0] placeholder-[#3D3D3D] focus:bg-[#1E1E24] focus:border-[#2A2A32] focus:outline-none transition-all" placeholder="Add notes or observations..." type="text" value="Missing from primary clipboard zone."/>
</div>

<div className="mt-4 pt-4 border-t border-dashed border-[#C62828]/30 flex flex-col gap-4 animate-[slideDown_0.2s_ease-out]">

<div className="flex flex-col gap-1.5">
<label className="text-xs text-[#9E9E9E] uppercase tracking-wider">Issue Description</label>
<textarea className="w-full bg-[#1A1A1E] border border-[#2A2A32] rounded-md px-3 py-2 text-sm text-[#F0F0F0] focus:border-[#6C4FD4] focus:outline-none focus:ring-1 focus:ring-[#6C4FD4] transition-colors resize-none" placeholder="Describe the issue in detail..." rows="3">The ERP folder was removed from the rig floor station and not replaced. Required immediate supervisor review to replace.</textarea>
</div>

<div className="grid grid-cols-2 gap-4">

<div className="flex flex-col gap-1.5">
<label className="text-xs text-[#9E9E9E] flex items-center gap-1.5">
<iconify-icon className="text-sm" icon="solar:camera-linear"></iconify-icon> Photo Evidence
                                </label>
<div className="h-[90px] border-[1.5px] border-dashed border-[#2A2A32] bg-[#111113] rounded-lg flex flex-col items-center justify-center gap-1 hover:border-[#6C4FD4] hover:bg-[#13101F] transition-all cursor-pointer group">
<iconify-icon className="text-xl text-[#6C4FD4] group-hover:scale-110 transition-transform" icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-[#9E9E9E]">Click or drag photos here</span>
<span className="text-xs text-[#616161]">JPG, PNG — up to 10MB</span>
</div>

<div className="flex gap-2 mt-1">
<div className="w-16 h-16 rounded-md bg-[#1A1A1E] border border-[#2A2A32] overflow-hidden relative group">
<img alt="thumb" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer">
<iconify-icon className="text-[#E53935] text-lg hover:scale-110 transition-transform" icon="solar:close-circle-bold"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-1.5">
<label className="text-xs text-[#9E9E9E] flex items-center gap-1.5">
<iconify-icon className="text-sm" icon="solar:paperclip-linear"></iconify-icon> Documents
                                </label>
<div className="h-[90px] border-[1.5px] border-dashed border-[#2A2A32] bg-[#111113] rounded-lg flex flex-col items-center justify-center gap-1 hover:border-[#F5C518] transition-all cursor-pointer group">
<iconify-icon className="text-xl text-[#F5C518] group-hover:scale-110 transition-transform" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-[#9E9E9E]">Upload PDF, DOCX, XLSX</span>
</div>
</div>
</div>
</div>
</div>

<div className="h-px bg-[#2A2A32] my-4"></div>

<div className="bg-[#141416] border border-[#2A2A32] rounded-[10px] p-6 mb-2">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-lg text-[#F0F0F0]" icon="solar:paperclip-linear" strokeWidth="1.5"></iconify-icon>
<h2 className="text-base font-semibold text-[#F0F0F0] tracking-tight">WORK ORDER ATTACHMENTS</h2>
</div>
<p className="text-sm text-[#9E9E9E] mb-6">Attach all photos, reports, and documents for this inspection work order</p>
<div className="grid grid-cols-2 gap-6">

<div className="flex flex-col gap-3">
<div className="flex items-center gap-2">
<h3 className="text-sm font-semibold text-[#F0F0F0]">Inspection Photos</h3>
<span className="bg-[#1A1A1E] text-[#9E9E9E] text-[10px] px-2 py-0.5 rounded-full">2 files</span>
</div>
<div className="h-[180px] border-[1.5px] border-dashed border-[#2A2A32] bg-[#111113] rounded-lg flex flex-col items-center justify-center gap-2 hover:border-[#6C4FD4] hover:bg-[#13101F] transition-all group">
<iconify-icon className="text-[32px] text-[#6C4FD4] group-hover:scale-110 transition-transform" icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-[#F0F0F0] mt-1">Upload or drag photos here</span>
<span className="text-xs text-[#616161]">JPG, PNG — max 10MB each</span>
<div className="flex gap-2 mt-2">
<button className="bg-[#6C4FD4] text-white text-xs px-4 py-2 rounded-md font-medium hover:bg-[#7B5FE0] transition-colors active:scale-95 flex items-center gap-1.5"><iconify-icon icon="solar:camera-linear"></iconify-icon> Browse Photos</button>
<button className="border border-[#2A2A32] text-[#9E9E9E] text-xs px-4 py-2 rounded-md font-medium hover:bg-[#1A1A1E] hover:text-[#F0F0F0] transition-colors active:scale-95 flex items-center gap-1.5"><iconify-icon icon="solar:screencast-2-linear"></iconify-icon> Open Camera</button>
</div>
</div>

<div className="grid grid-cols-4 gap-2 mt-1">
<div className="aspect-square rounded-md border border-[#2A2A32] overflow-hidden relative group">
<div className="absolute top-1 left-1 bg-black/60 rounded text-[10px] px-1 text-white z-10">1</div>
<img alt="thumb" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&amp;fit=crop&amp;w=150&amp;h=150"/>
<div className="absolute inset-0 bg-[#0D0D0F]/70 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-2 transition-opacity cursor-pointer backdrop-blur-[1px]">
<button className="text-[#F0F0F0] hover:text-[#6C4FD4]"><iconify-icon className="text-base" icon="solar:eye-linear"></iconify-icon></button>
<button className="text-[#F0F0F0] hover:text-[#E53935]"><iconify-icon className="text-base" icon="solar:trash-bin-trash-linear"></iconify-icon></button>
</div>
</div>
<div className="aspect-square rounded-md border border-[#2A2A32] overflow-hidden relative group">
<div className="absolute top-1 left-1 bg-black/60 rounded text-[10px] px-1 text-white z-10">2</div>
<img alt="thumb" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&amp;fit=crop&amp;w=150&amp;h=150"/>
<div className="absolute inset-0 bg-[#0D0D0F]/70 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-2 transition-opacity cursor-pointer backdrop-blur-[1px]">
<button className="text-[#F0F0F0] hover:text-[#6C4FD4]"><iconify-icon className="text-base" icon="solar:eye-linear"></iconify-icon></button>
<button className="text-[#F0F0F0] hover:text-[#E53935]"><iconify-icon className="text-base" icon="solar:trash-bin-trash-linear"></iconify-icon></button>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-3">
<h3 className="text-sm font-semibold text-[#F0F0F0]">Documents &amp; Reports</h3>
<div className="h-[180px] border-[1.5px] border-dashed border-[#2A2A32] bg-[#111113] rounded-lg flex flex-col items-center justify-center gap-2 hover:border-[#F5C518] hover:bg-[#131310] transition-all group">
<iconify-icon className="text-[32px] text-[#F5C518] group-hover:scale-110 transition-transform" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-[#F0F0F0] mt-1">Upload documents here</span>
<span className="text-xs text-[#616161]">PDF, DOCX, XLSX — max 25MB</span>
<div className="mt-2">
<button className="bg-[#1C1A10] border border-[#F5C518] text-[#F5C518] text-xs px-4 py-2 rounded-md font-medium hover:bg-[#F5C518]/10 transition-colors active:scale-95 flex items-center gap-1.5"><iconify-icon icon="solar:file-text-linear"></iconify-icon> Browse Files</button>
</div>
</div>

<div className="flex flex-col gap-2 mt-1">
<div className="flex items-center justify-between bg-[#1A1A1E] hover:bg-[#1E1E24] border border-[#2A2A32] rounded-md px-3 py-2 transition-colors group">
<div className="flex items-center gap-3">
<iconify-icon className="text-[#E53935] text-xl" icon="solar:file-text-bold-duotone"></iconify-icon>
<span className="text-xs text-[#F0F0F0]">safety_audit_report.pdf</span>
<span className="text-xs text-[#616161]">2.4 MB</span>
</div>
<button className="text-[#616161] hover:text-[#E53935] transition-colors"><iconify-icon className="text-lg" icon="solar:close-circle-linear"></iconify-icon></button>
</div>
</div>
</div>
</div>
</div>

<div className="border-t border-[#2A2A32] pt-6 mt-4">
<div className="mb-5 flex flex-col gap-2">
<label className="text-sm text-[#9E9E9E]">Additional Comments</label>
<textarea className="w-full bg-[#1A1A1E] border border-[#2A2A32] rounded-md px-3 py-2 text-sm text-[#F0F0F0] focus:border-[#6C4FD4] focus:outline-none focus:ring-1 focus:ring-[#6C4FD4] transition-colors resize-none placeholder-[#3D3D3D]" rows="3"></textarea>
</div>
<div className="grid grid-cols-2 gap-6 pb-6">
<div className="flex flex-col gap-1.5">
<div className="flex justify-between items-end">
<label className="text-sm text-[#9E9E9E]">Rig Manager Signature</label>
<button className="text-xs text-[#616161] hover:text-[#E53935] transition-colors">Clear</button>
</div>
<div className="h-20 bg-[#111113] border border-dashed border-[#2A2A32] rounded-lg relative cursor-crosshair group flex items-center justify-center signature-canvas">
<span className="text-xs text-[#2A2A32] font-medium absolute pointer-events-none select-none uppercase tracking-wider">Sign Here</span>
<svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewbox="0 0 400 80">
<path d="M 40 40 Q 80 10, 120 45 T 220 30 T 300 50" fill="none" stroke="#6C4FD4" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<div className="flex flex-col gap-1.5">
<div className="flex justify-between items-end">
<label className="text-sm text-[#9E9E9E]">Driller Signature</label>
<button className="text-xs text-[#616161] hover:text-[#E53935] transition-colors">Clear</button>
</div>
<div className="h-20 bg-[#111113] border border-dashed border-[#2A2A32] rounded-lg relative cursor-crosshair group flex items-center justify-center signature-canvas">
<span className="text-xs text-[#2A2A32] font-medium absolute pointer-events-none select-none uppercase tracking-wider">Sign Here</span>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="h-[60px] bg-[#141416] border-t border-[#2A2A32] px-8 flex justify-between items-center absolute bottom-0 left-0 right-0 z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
<div className="flex items-center gap-3">
<span className="text-xs text-[#9E9E9E]">Require Supervisor Review for Failed Items</span>

<button className="w-10 h-5 bg-[#6C4FD4] rounded-full relative transition-colors duration-200 focus:outline-none">
<div className="w-4 h-4 bg-[#F0F0F0] rounded-full absolute right-0.5 top-0.5 shadow-sm transition-transform"></div>
</button>
</div>
<div className="flex items-center gap-4">
<button className="text-sm text-[#9E9E9E] hover:text-[#E53935] transition-colors px-2">Discard</button>
<button className="px-5 py-2 text-sm font-semibold bg-[#F5C518] text-[#0D0D0F] rounded-md hover:bg-[#FFD740] shadow-[0_0_14px_rgba(245,197,24,0.35)] transition-all duration-150 active:scale-95">Save Report</button>
</div>
</footer>
</div>

<div className="fixed top-6 right-6 z-50 flex flex-col gap-2 min-w-[280px]">
<div className="bg-[#1B3A1B] border border-[#2E7D32] rounded-lg px-4 py-3 shadow-2xl flex items-start gap-3 animate-[slideDown_0.3s_ease-out]">
<iconify-icon className="text-[#4CAF50] text-xl flex-shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<div className="flex flex-col">
<span className="text-sm font-medium text-[#F0F0F0]">Draft Saved</span>
<span className="text-xs text-[#4CAF50] opacity-80">Your progress has been auto-saved.</span>
</div>
</div>
</div>

    </>
  );
}
