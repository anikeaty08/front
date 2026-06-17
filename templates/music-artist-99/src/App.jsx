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



        function showPage(pageId) {
            // Hide all pages
            document.querySelectorAll('[id^="page-"]').forEach(page => {
                page.classList.add('hide-section');
            });
            
            // Remove active state from all nav items
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active-nav');
                item.classList.add('text-[#A1A1A6]');
            });

            // Show selected page
            const targetPage = document.getElementById('page-' + pageId);
            if(targetPage) {
                targetPage.classList.remove('hide-section');
            }

            // Set active nav state
            const activeNav = document.getElementById('nav-' + pageId);
            if(activeNav) {
                activeNav.classList.add('active-nav');
                activeNav.classList.remove('text-[#A1A1A6]');
            }
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
      

<aside className="w-[240px] flex-shrink-0 bg-[#0A0A0C] border-r border-[#38383A] flex flex-col justify-between h-full z-20">
<div>

<div className="h-20 flex items-center px-6 border-b border-[#38383A]">
<h1 className="text-base font-semibold tracking-tighter text-white uppercase">NORTH$IDEBABY</h1>
</div>

<nav className="flex flex-col py-6 space-y-1">
<button className="nav-item active-nav w-full flex items-center gap-3 px-6 py-3 text-left transition-colors" id="nav-dashboard" onclick="showPage('dashboard')">
<iconify-icon icon="solar:widget-linear" width="20"></iconify-icon>
<span className="font-medium">Dashboard</span>
</button>
<button className="nav-item w-full flex items-center gap-3 px-6 py-3 text-[#A1A1A6] text-left transition-colors" id="nav-songs" onclick="showPage('songs')">
<iconify-icon icon="solar:music-library-2-linear" width="20"></iconify-icon>
<span className="font-medium">Songs</span>
</button>
<button className="nav-item w-full flex items-center gap-3 px-6 py-3 text-[#A1A1A6] text-left transition-colors" id="nav-videos" onclick="showPage('videos')">
<iconify-icon icon="solar:videocamera-record-linear" width="20"></iconify-icon>
<span className="font-medium">Videos</span>
</button>
<button className="nav-item w-full flex items-center gap-3 px-6 py-3 text-[#A1A1A6] text-left transition-colors" id="nav-production" onclick="showPage('production')">
<iconify-icon icon="solar:tuning-4-linear" width="20"></iconify-icon>
<span className="font-medium leading-tight">Production<br/>Control Room</span>
</button>
<button className="nav-item w-full flex items-center gap-3 px-6 py-3 text-[#A1A1A6] text-left transition-colors" id="nav-tour" onclick="showPage('tour')">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
<span className="font-medium">Tour</span>
</button>
<button className="nav-item w-full flex items-center gap-3 px-6 py-3 text-[#A1A1A6] text-left transition-colors" id="nav-merch" onclick="showPage('merch')">
<iconify-icon icon="solar:t-shirt-linear" width="20"></iconify-icon>
<span className="font-medium">Merch</span>
</button>
<button className="nav-item w-full flex items-center gap-3 px-6 py-3 text-[#A1A1A6] text-left transition-colors" id="nav-store" onclick="showPage('store')">
<iconify-icon icon="solar:cart-linear" width="20"></iconify-icon>
<span className="font-medium">Store</span>
</button>
<button className="nav-item w-full flex items-center gap-3 px-6 py-3 text-[#A1A1A6] text-left transition-colors" id="nav-settings" onclick="showPage('settings')">
<iconify-icon icon="solar:settings-linear" width="20"></iconify-icon>
<span className="font-medium">Settings</span>
</button>
</nav>
</div>

<div className="p-6 border-t border-[#38383A]">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#1C1C1E] flex items-center justify-center text-[#A1A1A6]">
<iconify-icon icon="solar:user-linear" width="16"></iconify-icon>
</div>
<div>
<div className="text-xs font-semibold text-white">North$ideBaby</div>
<div className="text-[10px] text-[#A1A1A6]">Admin Access</div>
</div>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto bg-[#0F0F11] relative">

<div className="absolute top-8 right-8 text-right z-10 pointer-events-none">
<div className="text-xs font-medium text-[#A1A1A6] uppercase tracking-wider">Today</div>
<div className="text-sm font-semibold text-white">Feb 12, 2026</div>
</div>

<div className="p-8 max-w-7xl mx-auto space-y-8" id="page-dashboard">
<div className="space-y-2">
<h2 className="text-2xl font-semibold tracking-tight text-white">Dashboard</h2>
<p className="text-[#A1A1A6] max-w-2xl leading-relaxed">
                    North$ideBaby is a Canadian hip-hop artist known for emotional storytelling, independent releases, and consistent touring across Canada.
                </p>
</div>

<div className="grid grid-cols-5 gap-4">
<div className="bg-[#0A0A0C] border border-[#38383A] p-4 rounded-xl">
<div className="text-[#A1A1A6] text-xs font-medium mb-1">Total Songs</div>
<div className="text-2xl font-semibold">24</div>
</div>
<div className="bg-[#0A0A0C] border border-[#38383A] p-4 rounded-xl">
<div className="text-[#A1A1A6] text-xs font-medium mb-1">Total Videos</div>
<div className="text-2xl font-semibold">18</div>
</div>
<div className="bg-[#0A0A0C] border border-[#38383A] p-4 rounded-xl">
<div className="text-[#A1A1A6] text-xs font-medium mb-1">Uploaded</div>
<div className="text-2xl font-semibold">16</div>
</div>
<div className="bg-[#0A0A0C] border border-[#38383A] p-4 rounded-xl">
<div className="text-[#A1A1A6] text-xs font-medium mb-1">Pending</div>
<div className="text-2xl font-semibold text-[#0A84FF]">2</div>
</div>
<div className="bg-[#0A0A0C] border border-[#38383A] p-4 rounded-xl">
<div className="text-[#A1A1A6] text-xs font-medium mb-1">Upcoming</div>
<div className="text-2xl font-semibold">2</div>
</div>
</div>

<div className="grid grid-cols-2 gap-6">

<div className="bg-[#0A0A0C] border border-[#38383A] rounded-xl p-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-base font-semibold">Latest Upload</h3>
<span className="text-xs text-[#34C759] font-medium bg-[#34C759]/10 px-2 py-1 rounded">✅ Uploaded</span>
</div>
<div className="space-y-3">
<div>
<div className="text-lg font-semibold text-white">CANT LIVE WITHOUT ME</div>
<div className="text-[#A1A1A6] text-xs mt-1">Released Feb 5, 2026</div>
</div>
<div className="flex items-center gap-4 text-xs text-[#A1A1A6] border-t border-[#38383A] pt-3">
<div>Cost: <span className="text-white">$3,500</span></div>
<div>Credits: <span className="text-white">-120</span></div>
</div>
</div>
</div>

<div className="bg-[#0A0A0C] border border-[#38383A] rounded-xl p-6 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10">
<iconify-icon icon="solar:upload-linear" width="64"></iconify-icon>
</div>
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-[#0A84FF]" icon="solar:upload-minimalistic-linear"></iconify-icon>
<h3 className="text-base font-semibold text-[#0A84FF] uppercase tracking-wide">Upload Required</h3>
</div>
<div className="flex justify-between items-end">
<div className="space-y-1">
<div className="text-lg font-semibold text-white">Miss U Bae</div>
<div className="text-xs text-[#A1A1A6]">Pending Upload · Feb 12, 2026</div>
<div className="text-xs text-white pt-2">Est. Cost: $4,000</div>
</div>
<button className="bg-[#0A84FF] hover:bg-[#0063CE] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors" onclick="showPage('production')">
                            Upload Now
                        </button>
</div>
</div>
</div>
</div>

<div className="hide-section p-8 max-w-7xl mx-auto space-y-8" id="page-songs">
<h2 className="text-2xl font-semibold tracking-tight">Songs Library</h2>
<div className="border border-[#38383A] rounded-xl overflow-hidden bg-[#0A0A0C]">
<table className="w-full text-left border-collapse">
<thead className="bg-[#1C1C1E] text-[#A1A1A6] text-xs uppercase tracking-wider">
<tr>
<th className="p-4 border-b border-[#38383A] font-medium">Song Title</th>
<th className="p-4 border-b border-[#38383A] font-medium">Release</th>
<th className="p-4 border-b border-[#38383A] font-medium">Status</th>
<th className="p-4 border-b border-[#38383A] font-medium">Notes</th>
</tr>
</thead>
<tbody className="text-sm divide-y divide-[#38383A]">
<tr className="hover:bg-[#1C1C1E]/50">
<td className="p-4 font-medium text-white">When I Join The Stars</td>
<td className="p-4 text-[#A1A1A6]">Upcoming</td>
<td className="p-4 text-[#5E5E62]">Final mix pending</td>
<td className="p-4 text-[#A1A1A6]">Est. Q2 2026</td>
</tr>
<tr className="hover:bg-[#1C1C1E]/50">
<td className="p-4 font-medium text-white">Look In My Eyes</td>
<td className="p-4 text-[#A1A1A6]">Upcoming</td>
<td className="p-4 text-[#5E5E62]">Video in pre-production</td>
<td className="p-4 text-[#A1A1A6]">-</td>
</tr>
<tr className="hover:bg-[#1C1C1E]/50">
<td className="p-4 font-medium text-white">Miss U Bae</td>
<td className="p-4 text-[#A1A1A6]">Upcoming</td>
<td className="p-4 text-[#0A84FF]">Video pending upload</td>
<td className="p-4 text-[#A1A1A6]">Feb 12, 2026</td>
</tr>
<tr className="hover:bg-[#1C1C1E]/50">
<td className="p-4 font-medium text-white">CANT LIVE WITHOUT ME</td>
<td className="p-4 text-[#A1A1A6]">Released</td>
<td className="p-4 text-[#34C759]">Published</td>
<td className="p-4 text-[#A1A1A6]">Feb 5, 2026</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="hide-section p-8 max-w-7xl mx-auto space-y-8" id="page-videos">
<h2 className="text-2xl font-semibold tracking-tight">Video Management</h2>
<div className="border border-[#38383A] rounded-xl overflow-hidden bg-[#0A0A0C] overflow-x-auto">
<table className="w-full text-left border-collapse min-w-[1000px]">
<thead className="bg-[#1C1C1E] text-[#A1A1A6] text-xs uppercase tracking-wider">
<tr>
<th className="p-4 border-b border-[#38383A] font-medium">Video Title</th>
<th className="p-4 border-b border-[#38383A] font-medium">Type</th>
<th className="p-4 border-b border-[#38383A] font-medium">Spec</th>
<th className="p-4 border-b border-[#38383A] font-medium">Status</th>
<th className="p-4 border-b border-[#38383A] font-medium">Date</th>
<th className="p-4 border-b border-[#38383A] font-medium">Cost</th>
<th className="p-4 border-b border-[#38383A] font-medium">Notes</th>
<th className="p-4 border-b border-[#38383A] font-medium text-right">Actions</th>
</tr>
</thead>
<tbody className="text-sm divide-y divide-[#38383A]">

<tr className="hover:bg-[#1C1C1E]/50 group">
<td className="p-4 font-medium text-white">CANT LIVE WITHOUT ME</td>
<td className="p-4 text-[#A1A1A6]">Music Video</td>
<td className="p-4 text-[#A1A1A6]">3:12 · 284MB</td>
<td className="p-4">
<span className="flex items-center gap-1.5 text-[#34C759] font-bold">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> Uploaded
                                </span>
</td>
<td className="p-4 text-[#A1A1A6]">Feb 5, 2026</td>
<td className="p-4 text-white">$3,500</td>
<td className="p-4 text-[#A1A1A6]">Published</td>
<td className="p-4 text-right">
<span className="text-[#34C759] text-xs font-medium bg-[#34C759]/10 px-2 py-1 rounded">Completed</span>
</td>
</tr>

<tr className="bg-[#0A84FF]/5 hover:bg-[#0A84FF]/10 transition-colors">
<td className="p-4 font-medium text-white">Miss U Bae</td>
<td className="p-4 text-[#A1A1A6]">Music Video</td>
<td className="p-4 text-[#A1A1A6]">3:05 · 301MB</td>
<td className="p-4">
<span className="flex items-center gap-1.5 text-[#0A84FF] font-bold">
<iconify-icon icon="solar:upload-square-linear"></iconify-icon> Pending Upload
                                </span>
</td>
<td className="p-4 text-white font-medium">Feb 12, 2026</td>
<td className="p-4 text-white font-medium">$4,000</td>
<td className="p-4 text-[#A1A1A6]">Ready for upload.</td>
<td className="p-4 text-right">
<button className="bg-[#0A84FF] hover:bg-[#0063CE] text-white text-xs font-medium px-4 py-2 rounded-md shadow-lg shadow-blue-900/20 transition-all" onclick="showPage('production')">
                                    UPLOAD
                                </button>
</td>
</tr>

<tr className="hover:bg-[#1C1C1E]/50">
<td className="p-4 font-medium text-[#A1A1A6]">Look In My Eyes</td>
<td className="p-4 text-[#5E5E62]">Music Video</td>
<td className="p-4 text-[#5E5E62]">2:58 · 268MB</td>
<td className="p-4">
<span className="flex items-center gap-1.5 text-[#5E5E62]">
<div className="w-2 h-2 rounded-full bg-[#5E5E62]"></div> Upcoming
                                </span>
</td>
<td className="p-4 text-[#5E5E62]">-</td>
<td className="p-4 text-[#5E5E62]">-</td>
<td className="p-4 text-[#5E5E62]">Pending upload</td>
<td className="p-4 text-right">
<span className="text-[#5E5E62] text-xs">Pending</span>
</td>
</tr>

<tr className="hover:bg-[#1C1C1E]/50">
<td className="p-4 font-medium text-[#A1A1A6]">When I Join The Stars</td>
<td className="p-4 text-[#5E5E62]">Music Video</td>
<td className="p-4 text-[#5E5E62]">3:34 · 332MB</td>
<td className="p-4">
<span className="flex items-center gap-1.5 text-[#5E5E62]">
<div className="w-2 h-2 rounded-full bg-[#5E5E62]"></div> Upcoming
                                </span>
</td>
<td className="p-4 text-[#5E5E62]">-</td>
<td className="p-4 text-[#5E5E62]">-</td>
<td className="p-4 text-[#5E5E62]">Pending upload</td>
<td className="p-4 text-right">
<span className="text-[#5E5E62] text-xs">Pending</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="hide-section p-8 max-w-6xl mx-auto space-y-6" id="page-production">

<div className="flex items-center justify-between border-b border-[#38383A] pb-6">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-white flex items-center gap-3">
                        Production Control Room
                        <span className="text-base text-[#A1A1A6] font-normal">Miss U Bae</span>
</h2>
<div className="flex items-center gap-2 mt-2 text-[#0A84FF] text-sm font-medium">
<div className="w-2 h-2 bg-[#0A84FF] rounded-full animate-pulse"></div>
                        Pending Upload · Ready to Process · Feb 12, 2026
                    </div>
</div>
<div className="flex items-center gap-4">
<div className="text-right">
<div className="text-xs text-[#A1A1A6] uppercase tracking-wider">Estimated Cost</div>
<div className="text-xl font-semibold">$4,000</div>
</div>
<button className="bg-gradient-to-r from-[#0A84FF] to-[#0063CE] text-white px-8 py-3 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all">
                        📤 UPLOAD VIDEO
                    </button>
</div>
</div>
<div className="grid grid-cols-12 gap-6">

<div className="col-span-8 space-y-6">

<div className="grid grid-cols-2 gap-4">
<div className="bg-[#0A0A0C] border border-[#38383A] rounded-xl p-5">
<h3 className="text-xs font-medium text-[#A1A1A6] uppercase mb-4 tracking-wider">File Diagnostics</h3>
<div className="space-y-3">
<div className="flex items-center gap-2 text-sm">
<iconify-icon className="text-[#34C759]" icon="solar:file-check-linear"></iconify-icon>
<span className="text-white">master_missubae_v3.mp4</span>
<span className="text-[#5E5E62] text-xs ml-auto">301 MB</span>
</div>
<div className="flex items-center gap-2 text-sm">
<iconify-icon className="text-[#34C759]" icon="solar:monitor-linear"></iconify-icon>
<span className="text-[#A1A1A6]">1920x1080 · 23.976 fps</span>
</div>
<div className="flex items-center gap-2 text-sm">
<iconify-icon className="text-[#34C759]" icon="solar:music-note-linear"></iconify-icon>
<span className="text-[#A1A1A6]">AAC 320 kbps · Verified</span>
</div>
<div className="flex items-center gap-2 text-sm">
<iconify-icon className="text-[#34C759]" icon="solar:server-linear"></iconify-icon>
<span className="text-[#A1A1A6]">Storage OK · 2.4 TB free</span>
</div>
</div>
</div>
<div className="bg-[#0A0A0C] border border-[#38383A] rounded-xl p-5 flex flex-col justify-between">
<h3 className="text-xs font-medium text-[#A1A1A6] uppercase tracking-wider">Status</h3>
<div className="flex flex-col items-center justify-center flex-1 py-4">
<div className="w-16 h-16 rounded-full border-4 border-[#0A84FF] flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(10,132,255,0.2)]">
<iconify-icon className="text-[#0A84FF]" icon="solar:upload-linear" width="32"></iconify-icon>
</div>
<div className="text-[#0A84FF] font-semibold text-lg">READY TO RECORD</div>
<div className="text-[#5E5E62] text-xs mt-1">System ready — Upload not started</div>
</div>
</div>
</div>

<div className="bg-[#0A0A0C] border border-[#38383A] rounded-xl p-8">
<div className="flex justify-between items-center mb-6 border-b border-[#38383A] pb-2">
<div className="text-xs text-[#A1A1A6] font-mono">CHANNEL STRIP [01-04]</div>
<div className="text-xs text-[#0A84FF] font-mono font-bold tracking-widest">MASTER: READY</div>
</div>
<div className="flex justify-between gap-8 h-48 px-8">

<div className="flex flex-col items-center h-full w-8">
<div className="flex-1 w-1 bg-[#2C2C2E] rounded-full relative">
<div className="absolute bottom-[60%] w-6 h-10 bg-[#38383A] -left-2.5 rounded shadow-lg border-t border-white/20"></div>
</div>
<div className="mt-4 text-[10px] text-[#A1A1A6] font-mono uppercase">Kick</div>
<div className="text-[10px] text-[#34C759] font-mono">-6dB</div>
</div>

<div className="flex flex-col items-center h-full w-8">
<div className="flex-1 w-1 bg-[#2C2C2E] rounded-full relative">
<div className="absolute bottom-[75%] w-6 h-10 bg-[#38383A] -left-2.5 rounded shadow-lg border-t border-white/20"></div>
</div>
<div className="mt-4 text-[10px] text-[#A1A1A6] font-mono uppercase">808</div>
<div className="text-[10px] text-[#34C759] font-mono">-3dB</div>
</div>

<div className="flex flex-col items-center h-full w-8">
<div className="flex-1 w-1 bg-[#2C2C2E] rounded-full relative">
<div className="absolute bottom-[70%] w-6 h-10 bg-[#38383A] -left-2.5 rounded shadow-lg border-t border-white/20"></div>
</div>
<div className="mt-4 text-[10px] text-[#A1A1A6] font-mono uppercase">Vocal</div>
<div className="text-[10px] text-[#34C759] font-mono">-2dB</div>
</div>

<div className="flex flex-col items-center h-full w-12 border-l border-[#38383A] pl-8">
<div className="flex-1 w-1 bg-[#2C2C2E] rounded-full relative">

<div className="absolute bottom-0 w-8 h-12 bg-[#0A84FF] -left-3.5 rounded shadow-[0_0_15px_rgba(10,132,255,0.4)] border-t border-white/40 flex items-center justify-center">
<div className="w-4 h-[2px] bg-white/50"></div>
</div>
</div>
<div className="mt-4 text-[10px] text-[#0A84FF] font-bold font-mono uppercase">MASTER</div>
<div className="text-[10px] text-[#A1A1A6] font-mono">READY</div>
</div>
</div>
</div>
</div>

<div className="col-span-4 space-y-6">

<div className="bg-[#0A0A0C] rounded-lg p-4 font-mono text-xs leading-relaxed border border-[#38383A] h-64 overflow-y-auto shadow-inner">
<div className="text-[#5E5E62] mb-2">System Console v2.4.1</div>
<div className="text-[#A1A1A6]"><span className="text-[#5E5E62]">[09:23:15]</span> File loaded — ready for upload</div>
<div className="text-[#A1A1A6]"><span className="text-[#5E5E62]">[09:23:17]</span> Format verification complete — <span className="text-[#34C759]">passed</span></div>
<div className="text-[#A1A1A6]"><span className="text-[#5E5E62]">[09:23:20]</span> Credit check: 0 credits required upfront</div>
<div className="text-[#A1A1A6]"><span className="text-[#5E5E62]">[09:23:22]</span> Cost estimate: $4,000</div>
<div className="text-[#0A84FF] font-semibold mt-2"><span className="text-[#5E5E62]">[09:23:25]</span> Status: AWAITING USER ACTION</div>
<div className="text-[#E31B23] mt-1"><span className="text-[#5E5E62]">[09:23:27]</span> ⚠️ Upload not started — press UPLOAD to begin</div>
<div className="animate-pulse text-[#0A84FF] mt-2">_</div>
</div>

<div className="bg-[#1C1C1E] rounded-xl p-6 space-y-4">
<div className="flex justify-between text-sm">
<span className="text-[#A1A1A6]">Upload Cost</span>
<span className="text-white font-medium">$4,000</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-[#A1A1A6]">Credits Upfront</span>
<span className="text-white font-medium">0</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-[#A1A1A6]">Est. Time</span>
<span className="text-white font-medium">3-5 mins</span>
</div>
<div className="h-px bg-[#38383A]"></div>
<button className="w-full bg-[#0A84FF] hover:bg-[#0063CE] text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:upload-linear" width="18"></iconify-icon>
                            UPLOAD NOW
                        </button>
</div>

<div>
<label className="block text-xs font-medium text-[#A1A1A6] mb-2">Admin Notes</label>
<div className="w-full bg-[#0A0A0C] border border-[#38383A] rounded-lg p-3 text-xs text-[#A1A1A6] leading-relaxed">
                            Miss U Bae video is ready for first-time upload. File verified, format confirmed, no issues detected. Upload cost: $4,000. No credits required upfront.
                        </div>
</div>
</div>
</div>
</div>

<div className="hide-section p-8 max-w-7xl mx-auto space-y-8" id="page-tour">
<h2 className="text-2xl font-semibold tracking-tight">Tour Dates — Winter/Spring 2026</h2>
<div className="border border-[#38383A] rounded-xl overflow-hidden bg-[#0A0A0C]">
<table className="w-full text-left border-collapse">
<thead className="bg-[#1C1C1E] text-[#A1A1A6] text-xs uppercase tracking-wider">
<tr>
<th className="p-4 border-b border-[#38383A] font-medium">City</th>
<th className="p-4 border-b border-[#38383A] font-medium">Venue</th>
<th className="p-4 border-b border-[#38383A] font-medium">Date</th>
<th className="p-4 border-b border-[#38383A] font-medium">Status</th>
</tr>
</thead>
<tbody className="text-sm divide-y divide-[#38383A]">
<tr className="hover:bg-[#1C1C1E]/50">
<td className="p-4 font-medium text-white">Vancouver</td>
<td className="p-4 text-[#A1A1A6]">Fortune Sound Club</td>
<td className="p-4 text-white">Mar 12, 2026</td>
<td className="p-4"><span className="text-[#34C759] bg-[#34C759]/10 px-2 py-1 rounded text-xs font-medium">🟢 Upcoming</span></td>
</tr>
<tr className="hover:bg-[#1C1C1E]/50">
<td className="p-4 font-medium text-white">Calgary</td>
<td className="p-4 text-[#A1A1A6]">The Palace</td>
<td className="p-4 text-white">Mar 15, 2026</td>
<td className="p-4"><span className="text-[#34C759] bg-[#34C759]/10 px-2 py-1 rounded text-xs font-medium">🟢 Upcoming</span></td>
</tr>
<tr className="hover:bg-[#1C1C1E]/50">
<td className="p-4 font-medium text-white">Toronto</td>
<td className="p-4 text-[#A1A1A6]">Drake Underground</td>
<td className="p-4 text-white">Mar 22, 2026</td>
<td className="p-4"><span className="text-[#34C759] bg-[#34C759]/10 px-2 py-1 rounded text-xs font-medium">🟢 Upcoming</span></td>
</tr>
<tr className="hover:bg-[#1C1C1E]/50">
<td className="p-4 font-medium text-white">Montreal</td>
<td className="p-4 text-[#A1A1A6]">Newspeak</td>
<td className="p-4 text-white">Mar 25, 2026</td>
<td className="p-4"><span className="text-[#34C759] bg-[#34C759]/10 px-2 py-1 rounded text-xs font-medium">🟢 Upcoming</span></td>
</tr>
<tr className="hover:bg-[#1C1C1E]/50">
<td className="p-4 font-medium text-white">Halifax</td>
<td className="p-4 text-[#A1A1A6]">The Marquee</td>
<td className="p-4 text-white">Mar 29, 2026</td>
<td className="p-4"><span className="text-[#34C759] bg-[#34C759]/10 px-2 py-1 rounded text-xs font-medium">🟢 Upcoming</span></td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="hide-section p-8 max-w-7xl mx-auto space-y-8" id="page-merch">
<h2 className="text-2xl font-semibold tracking-tight">Merchandise Catalog</h2>
<div className="grid grid-cols-3 gap-6">

<div className="bg-[#0A0A0C] border border-[#38383A] rounded-xl p-6 hover:border-[#5E5E62] transition-colors">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 bg-[#1C1C1E] rounded-full flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:t-shirt-bold" width="20"></iconify-icon>
</div>
<span className="text-[#34C759] text-xs font-medium bg-[#34C759]/10 px-2 py-1 rounded">🟢 Available</span>
</div>
<h3 className="font-medium text-lg text-white">North$ideBaby Hoodie (Black)</h3>
<div className="text-[#A1A1A6] text-xs mt-2">Updated Feb 12, 2026</div>
</div>

<div className="bg-[#0A0A0C] border border-[#38383A] rounded-xl p-6 hover:border-[#5E5E62] transition-colors">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 bg-[#1C1C1E] rounded-full flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:t-shirt-bold" width="20"></iconify-icon>
</div>
<span className="text-[#5E5E62] text-xs font-medium bg-[#5E5E62]/10 px-2 py-1 rounded">⚪ Coming Soon</span>
</div>
<h3 className="font-medium text-lg text-white">Miss U Bae Tee</h3>
<div className="text-[#A1A1A6] text-xs mt-2">Updated Feb 12, 2026</div>
</div>

<div className="bg-[#0A0A0C] border border-[#38383A] rounded-xl p-6 hover:border-[#5E5E62] transition-colors">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 bg-[#1C1C1E] rounded-full flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:sticker-smile-circle-bold" width="20"></iconify-icon>
</div>
<span className="text-[#34C759] text-xs font-medium bg-[#34C759]/10 px-2 py-1 rounded">🟢 Available</span>
</div>
<h3 className="font-medium text-lg text-white">Sticker Pack</h3>
<div className="text-[#A1A1A6] text-xs mt-2">Updated Feb 12, 2026</div>
</div>
</div>
</div>

<div className="hide-section p-8 max-w-7xl mx-auto space-y-8 flex flex-col items-center justify-center h-full" id="page-store">
<div className="text-center space-y-4 max-w-md">
<div className="w-16 h-16 bg-[#1C1C1E] rounded-full flex items-center justify-center mx-auto mb-6">
<iconify-icon className="text-[#A1A1A6]" icon="solar:cart-large-linear" width="32"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold tracking-tight">Store Configuration</h2>
<p className="text-[#A1A1A6]">Digital and physical releases will be available here. Store configuration coming soon.</p>
<div className="text-xs text-[#5E5E62] border-t border-[#38383A] pt-4 mt-4">
                    Last updated: February 12, 2026
                </div>
</div>
</div>

<div className="hide-section p-8 max-w-2xl mx-auto space-y-8" id="page-settings">
<h2 className="text-2xl font-semibold tracking-tight">Account Settings</h2>

<div className="bg-[#1C1C1E] border border-[#38383A] rounded-xl p-6 flex justify-between items-center">
<div>
<div className="text-[#A1A1A6] text-xs font-medium uppercase tracking-wider mb-1">Current Credits</div>
<div className="text-3xl font-semibold text-white">2,140</div>
<div className="text-xs text-[#5E5E62] mt-1">Next reset: March 1, 2026</div>
</div>
<div className="text-right">
<iconify-icon className="text-[#A1A1A6]" icon="solar:wallet-linear" width="32"></iconify-icon>
</div>
</div>

<div className="space-y-6 pt-6">
<div className="grid grid-cols-3 gap-4 items-center border-b border-[#38383A] pb-4">
<div className="text-[#A1A1A6]">Artist Name</div>
<div className="col-span-2 font-medium text-white">North$ideBaby</div>
</div>
<div className="grid grid-cols-3 gap-4 items-center border-b border-[#38383A] pb-4">
<div className="text-[#A1A1A6]">Email</div>
<div className="col-span-2 font-medium text-white">admin@northsidebaby.ca</div>
</div>
<div className="grid grid-cols-3 gap-4 items-center border-b border-[#38383A] pb-4">
<div className="text-[#A1A1A6]">Label Status</div>
<div className="col-span-2 font-medium text-white">Independent</div>
</div>
<div className="grid grid-cols-3 gap-4 items-center pb-4">
<div className="text-[#A1A1A6]">Account Status</div>
<div className="col-span-2 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#34C759]"></span>
<span className="font-medium text-white">Active · Verified</span>
</div>
</div>
</div>
<div className="text-xs text-[#5E5E62] text-center pt-8">
                Last Login: February 12, 2026 — 9:32 AM
            </div>
</div>
</main>



    </>
  );
}
