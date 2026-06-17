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



        // Simple Single Page Navigation Logic
        function navigate(pageId) {
            // Hide all sections
            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Show selected section
            const target = document.getElementById(pageId);
            if(target) target.classList.add('active');

            // Update Nav state
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
            });
            const navItem = document.getElementById('nav-' + pageId);
            if(navItem) navItem.classList.add('active');
        }

        // Initialize default view if needed, though HTML has 'active' class on dashboard
    
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
      

<aside className="w-full md:w-64 flex-shrink-0 bg-[#0a0a0a] border-b md:border-b-0 md:border-r border-white/5 flex flex-col h-auto md:h-screen z-20">

<div className="h-16 flex items-center px-6 border-b border-white/5">
<span className="text-sm font-semibold tracking-tighter text-white">N$B ADMIN</span>
</div>

<nav className="flex-1 overflow-y-auto py-4 space-y-1 px-3">
<button className="nav-item active w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-neutral-400 hover:text-white hover:bg-white/5 transition-all" id="nav-dashboard" onclick="navigate('dashboard')">
<iconify-icon icon="solar:widget-linear" width="18"></iconify-icon>
                Dashboard
            </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-neutral-400 hover:text-white hover:bg-white/5 transition-all" id="nav-songs" onclick="navigate('songs')">
<iconify-icon icon="solar:music-library-linear" width="18"></iconify-icon>
                Songs
            </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-neutral-400 hover:text-white hover:bg-white/5 transition-all" id="nav-videos" onclick="navigate('videos')">
<iconify-icon icon="solar:clapperboard-play-linear" width="18"></iconify-icon>
                Videos
            </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-neutral-400 hover:text-white hover:bg-white/5 transition-all" id="nav-tour" onclick="navigate('tour')">
<iconify-icon icon="solar:map-point-linear" width="18"></iconify-icon>
                Tour
            </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-neutral-400 hover:text-white hover:bg-white/5 transition-all" id="nav-merch" onclick="navigate('merch')">
<iconify-icon icon="solar:t-shirt-linear" width="18"></iconify-icon>
                Merch
            </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-neutral-400 hover:text-white hover:bg-white/5 transition-all" id="nav-store" onclick="navigate('store')">
<iconify-icon icon="solar:bag-linear" width="18"></iconify-icon>
                Store
            </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-neutral-400 hover:text-white hover:bg-white/5 transition-all" id="nav-settings" onclick="navigate('settings')">
<iconify-icon icon="solar:settings-linear" width="18"></iconify-icon>
                Settings
            </button>
</nav>

<div className="p-4 border-t border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs text-white border border-white/10">NB</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white">North$ideBaby</span>
<span className="text-[10px] text-neutral-500">Admin Access</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 h-screen overflow-y-auto bg-[#050505] relative scroll-smooth">

<section className="page-section active max-w-5xl mx-auto p-6 md:p-10" id="dashboard">
<header className="mb-10">
<h1 className="text-2xl font-semibold text-white tracking-tight mb-2">North$ideBaby – Artist Admin Dashboard</h1>
<p className="text-neutral-400 text-sm max-w-2xl leading-relaxed">
                    North$ideBaby is a Canadian hip-hop artist known for emotional storytelling, independent releases, and consistent touring across Canada.
                </p>
</header>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">

<div className="bg-neutral-900/40 border border-white/5 p-5 rounded-lg">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Total Songs</span>
<iconify-icon className="text-neutral-600" icon="solar:music-note-linear"></iconify-icon>
</div>
<div className="text-2xl font-medium text-white tracking-tight">42</div>
</div>

<div className="bg-neutral-900/40 border border-white/5 p-5 rounded-lg">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Total Videos</span>
<iconify-icon className="text-neutral-600" icon="solar:videocamera-linear"></iconify-icon>
</div>
<div className="text-2xl font-medium text-white tracking-tight">18</div>
</div>

<div className="bg-neutral-900/40 border border-white/5 p-5 rounded-lg">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Credit Holds</span>
<iconify-icon className="text-rose-500" icon="solar:danger-circle-linear"></iconify-icon>
</div>
<div className="text-2xl font-medium text-white tracking-tight text-rose-500">1</div>
<div className="text-xs text-rose-400 mt-1">Action Required</div>
</div>

<div className="bg-neutral-900/40 border border-white/5 p-5 rounded-lg">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Upcoming Videos</span>
<iconify-icon className="text-neutral-600" icon="solar:calendar-linear"></iconify-icon>
</div>
<div className="text-2xl font-medium text-white tracking-tight">2</div>
</div>
</div>

<div className="mb-8">
<h3 className="text-sm font-medium text-white mb-4">Recent Activity</h3>
<div className="bg-neutral-900/20 border border-white/5 rounded-lg divide-y divide-white/5">
<div className="p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
<iconify-icon icon="solar:upload-minimalistic-linear"></iconify-icon>
</div>
<div>
<p className="text-sm text-white">Latest Upload</p>
<p className="text-xs text-neutral-500">CANT LIVE WITHOUT ME - Music Video</p>
</div>
</div>
<span className="text-xs text-neutral-500">Feb 5, 2026</span>
</div>
<div className="p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-neutral-800 text-neutral-400 flex items-center justify-center">
<iconify-icon icon="solar:bill-list-linear"></iconify-icon>
</div>
<div>
<p className="text-sm text-white">Cost Usage</p>
<p className="text-xs text-neutral-500">Production budget allocation</p>
</div>
</div>
<span className="text-xs text-neutral-500">-$3,500.00</span>
</div>
<div className="p-4 flex items-center justify-between bg-rose-500/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-rose-500/10 text-rose-500 flex items-center justify-center">
<iconify-icon icon="solar:bell-linear"></iconify-icon>
</div>
<div>
<p className="text-sm text-white">Alert: Credit Hold</p>
<p className="text-xs text-rose-400">Miss U Bae upload interrupted</p>
</div>
</div>
<button className="text-xs border border-rose-500/30 text-rose-400 px-3 py-1 rounded hover:bg-rose-500/10 transition" onclick="navigate('videos')">Resolve</button>
</div>
</div>
</div>
</section>

<section className="page-section max-w-5xl mx-auto p-6 md:p-10" id="songs">
<header className="mb-8 flex justify-between items-end">
<div>
<h1 className="text-2xl font-semibold text-white tracking-tight">Songs Library</h1>
<p className="text-neutral-500 text-sm mt-1">Catalog management</p>
</div>
<button className="bg-white text-black hover:bg-neutral-200 text-xs font-medium px-3 py-2 rounded transition flex items-center gap-2">
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
                    New Entry
                </button>
</header>
<div className="border border-white/5 rounded-lg overflow-hidden bg-neutral-900/20">
<table className="w-full text-left border-collapse">
<thead className="bg-white/5 text-xs uppercase text-neutral-400 font-medium">
<tr>
<th className="p-4 font-medium border-b border-white/5">Song Title</th>
<th className="p-4 font-medium border-b border-white/5 w-40">Release Status</th>
<th className="p-4 font-medium border-b border-white/5">Notes</th>
</tr>
</thead>
<tbody className="text-sm divide-y divide-white/5">

<tr className="group hover:bg-white/[0.02]">
<td className="p-4 text-white">Cold Winters</td>
<td className="p-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Released</span></td>
<td className="p-4 text-neutral-500">Debut single.</td>
</tr>
<tr className="group hover:bg-white/[0.02]">
<td className="p-4 text-white">Northside Story</td>
<td className="p-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Released</span></td>
<td className="p-4 text-neutral-500">-</td>
</tr>
<tr className="group hover:bg-white/[0.02]">
<td className="p-4 text-white">Pain &amp; Paper</td>
<td className="p-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-neutral-100/10 text-neutral-300 border border-neutral-100/20">Upcoming</span></td>
<td className="p-4 text-neutral-500">Awaiting final mix.</td>
</tr>

<tr className="group hover:bg-white/[0.02]">
<td className="p-4 text-white">Dreams to Reality</td>
<td className="p-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-neutral-100/10 text-neutral-300 border border-neutral-100/20">Upcoming</span></td>
<td className="p-4 text-neutral-500">Scheduled for Q3.</td>
</tr>
</tbody>
</table>
</div>
</section>

<section className="page-section max-w-7xl mx-auto p-6 md:p-10" id="videos">
<header className="mb-8">
<h1 className="text-2xl font-semibold text-white tracking-tight">Video Management</h1>
<p className="text-neutral-500 text-sm mt-1">Manage uploads, credit allocations, and release schedules.</p>
</header>
<div className="border border-white/5 rounded-lg overflow-x-auto bg-neutral-900/20">
<table className="w-full text-left border-collapse whitespace-nowrap">
<thead className="bg-neutral-900 text-[11px] uppercase text-neutral-400 font-medium tracking-wide">
<tr>
<th className="p-4 font-medium border-b border-white/5">Video Title</th>
<th className="p-4 font-medium border-b border-white/5">Type</th>
<th className="p-4 font-medium border-b border-white/5">Dur</th>
<th className="p-4 font-medium border-b border-white/5">Size</th>
<th className="p-4 font-medium border-b border-white/5">Status</th>
<th className="p-4 font-medium border-b border-white/5">Date / Time</th>
<th className="p-4 font-medium border-b border-white/5 text-right">Credits</th>
<th className="p-4 font-medium border-b border-white/5 text-right">Cost</th>
<th className="p-4 font-medium border-b border-white/5 w-64">Actions / Notes</th>
</tr>
</thead>
<tbody className="text-sm divide-y divide-white/5">

<tr className="hover:bg-white/[0.02] transition-colors">
<td className="p-4 font-medium text-white">CANT LIVE WITHOUT ME</td>
<td className="p-4 text-neutral-400">Music Video</td>
<td className="p-4 text-neutral-400 font-mono text-xs">3:12</td>
<td className="p-4 text-neutral-400 font-mono text-xs">284 MB</td>
<td className="p-4">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                    Uploaded
                                </span>
</td>
<td className="p-4 text-neutral-400 text-xs">
<div className="text-white">Feb 5, 2026</div>
<div className="opacity-60">11:00 PM</div>
</td>
<td className="p-4 text-right text-neutral-300 font-mono">–120</td>
<td className="p-4 text-right text-neutral-300 font-mono">$3,500</td>
<td className="p-4">
<div className="text-xs text-neutral-500 mb-1">“Video successfully published.”</div>
<div className="text-[10px] text-emerald-500 uppercase font-semibold tracking-wide">Completed</div>
</td>
</tr>

<tr className="bg-rose-950/10 border-l-2 border-l-rose-500">
<td className="p-4 font-medium text-white">Miss U Bae</td>
<td className="p-4 text-neutral-400">Music Video</td>
<td className="p-4 text-neutral-400 font-mono text-xs">3:05</td>
<td className="p-4 text-neutral-400 font-mono text-xs">301 MB</td>
<td className="p-4">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-medium bg-rose-500/10 text-rose-400 border border-rose-500/20 animate-pulse">
<span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                                    Credit Hold
                                </span>
</td>
<td className="p-4 text-neutral-600 text-xs italic">
                                Feb 7, 2026
                            </td>
<td className="p-4 text-right text-rose-400 font-bold font-mono">–80</td>
<td className="p-4 text-right text-neutral-300 font-mono">$2,000</td>
<td className="p-4">
<div className="text-xs text-rose-300 mb-2">Upload interrupted. Restart required.</div>
<div className="flex gap-2">
<button className="bg-rose-600 hover:bg-rose-500 text-white text-[10px] font-medium px-2 py-1 rounded transition border border-transparent shadow-sm shadow-rose-900/50">Resolve Credit Hold</button>
<button className="bg-transparent border border-neutral-600 hover:border-neutral-400 text-neutral-300 hover:text-white text-[10px] font-medium px-2 py-1 rounded transition">Restart Process</button>
</div>
</td>
</tr>

<tr className="hover:bg-white/[0.02] transition-colors opacity-70">
<td className="p-4 font-medium text-white">Look In My Eyes</td>
<td className="p-4 text-neutral-400">Music Video</td>
<td className="p-4 text-neutral-400 font-mono text-xs">2:58</td>
<td className="p-4 text-neutral-400 font-mono text-xs">268 MB</td>
<td className="p-4">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-medium bg-neutral-700/30 text-neutral-300 border border-white/10">
                                    Upcoming
                                </span>
</td>
<td className="p-4 text-neutral-600 text-xs">---</td>
<td className="p-4 text-right text-neutral-600 font-mono">---</td>
<td className="p-4 text-right text-neutral-600 font-mono">---</td>
<td className="p-4">
<div className="text-[10px] text-neutral-500 uppercase font-semibold tracking-wide">Pending Upload</div>
</td>
</tr>

<tr className="hover:bg-white/[0.02] transition-colors opacity-70">
<td className="p-4 font-medium text-white">When I Join The Stars</td>
<td className="p-4 text-neutral-400">Music Video</td>
<td className="p-4 text-neutral-400 font-mono text-xs">3:34</td>
<td className="p-4 text-neutral-400 font-mono text-xs">332 MB</td>
<td className="p-4">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-medium bg-neutral-700/30 text-neutral-300 border border-white/10">
                                    Upcoming
                                </span>
</td>
<td className="p-4 text-neutral-600 text-xs">---</td>
<td className="p-4 text-right text-neutral-600 font-mono">---</td>
<td className="p-4 text-right text-neutral-600 font-mono">---</td>
<td className="p-4">
<div className="text-[10px] text-neutral-500 uppercase font-semibold tracking-wide">Pending Upload</div>
</td>
</tr>
</tbody>
</table>
</div>
</section>

<section className="page-section max-w-5xl mx-auto p-6 md:p-10" id="tour">
<header className="mb-8">
<h1 className="text-2xl font-semibold text-white tracking-tight">Tour Dates</h1>
<p className="text-neutral-500 text-sm mt-1">Live performance schedule</p>
</header>
<div className="bg-neutral-900/20 border border-white/5 rounded-lg">
<div className="grid grid-cols-12 px-6 py-3 border-b border-white/5 bg-white/5 text-xs font-medium text-neutral-400 uppercase tracking-wide">
<div className="col-span-3">City</div>
<div className="col-span-4">Venue</div>
<div className="col-span-3">Date</div>
<div className="col-span-2 text-right">Status</div>
</div>

<div className="grid grid-cols-12 px-6 py-4 border-b border-white/5 items-center hover:bg-white/[0.02]">
<div className="col-span-3 text-white font-medium">Toronto, ON</div>
<div className="col-span-4 text-neutral-400 text-sm">History</div>
<div className="col-span-3 text-neutral-400 text-sm">Mar 12, 2026</div>
<div className="col-span-2 text-right"><span className="text-xs bg-neutral-800 text-neutral-300 px-2 py-1 rounded">Upcoming</span></div>
</div>

<div className="grid grid-cols-12 px-6 py-4 border-b border-white/5 items-center hover:bg-white/[0.02]">
<div className="col-span-3 text-white font-medium">Vancouver, BC</div>
<div className="col-span-4 text-neutral-400 text-sm">Commodore Ballroom</div>
<div className="col-span-3 text-neutral-400 text-sm">Mar 15, 2026</div>
<div className="col-span-2 text-right"><span className="text-xs bg-neutral-800 text-neutral-300 px-2 py-1 rounded">Upcoming</span></div>
</div>

<div className="grid grid-cols-12 px-6 py-4 border-b border-white/5 items-center hover:bg-white/[0.02] opacity-60">
<div className="col-span-3 text-white font-medium">Montreal, QC</div>
<div className="col-span-4 text-neutral-400 text-sm">MTELUS</div>
<div className="col-span-3 text-neutral-400 text-sm">Feb 01, 2026</div>
<div className="col-span-2 text-right"><span className="text-xs bg-emerald-900/30 text-emerald-500 px-2 py-1 rounded border border-emerald-500/20">Completed</span></div>
</div>
</div>
</section>

<section className="page-section max-w-5xl mx-auto p-6 md:p-10" id="merch">
<header className="mb-8">
<h1 className="text-2xl font-semibold text-white tracking-tight">Merchandise</h1>
<p className="text-neutral-500 text-sm mt-1">Inventory status</p>
</header>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

<div className="bg-neutral-900/20 border border-white/5 rounded-lg p-4 hover:border-white/10 transition">
<div className="h-40 bg-neutral-800 rounded mb-4 flex items-center justify-center text-neutral-600">
<iconify-icon icon="solar:t-shirt-linear" width="32"></iconify-icon>
</div>
<h3 className="text-white font-medium text-sm">N$B Signature Hoodie</h3>
<div className="flex justify-between items-center mt-2">
<span className="text-xs text-emerald-400">Available</span>
<span className="text-xs text-neutral-500">SKU: NB-001</span>
</div>
</div>

<div className="bg-neutral-900/20 border border-white/5 rounded-lg p-4 hover:border-white/10 transition">
<div className="h-40 bg-neutral-800 rounded mb-4 flex items-center justify-center text-neutral-600">
<iconify-icon icon="solar:sticker-smile-circle-linear" width="32"></iconify-icon>
</div>
<h3 className="text-white font-medium text-sm">Vinyl - "Cold Winters"</h3>
<div className="flex justify-between items-center mt-2">
<span className="text-xs text-neutral-400">Coming Soon</span>
<span className="text-xs text-neutral-500">SKU: VIN-002</span>
</div>
</div>
</div>
</section>

<section className="page-section max-w-5xl mx-auto p-6 md:p-10 flex flex-col items-center justify-center h-[80vh]" id="store">
<div className="w-16 h-16 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-500 mb-6">
<iconify-icon icon="solar:shop-linear" width="32"></iconify-icon>
</div>
<h2 className="text-xl font-medium text-white mb-2">Store configuration coming soon.</h2>
<p className="text-neutral-500 text-sm max-w-md text-center">
                Digital and physical releases will be available here once the storefront integration is complete.
            </p>
</section>

<section className="page-section max-w-2xl mx-auto p-6 md:p-10" id="settings">
<h1 className="text-2xl font-semibold text-white tracking-tight mb-8">Settings</h1>
<div className="space-y-6">

<div className="bg-neutral-900/20 border border-white/5 rounded-lg p-6">
<h3 className="text-sm font-medium text-white mb-4">Profile Settings</h3>
<div className="grid grid-cols-1 gap-4">
<div>
<label className="block text-xs text-neutral-500 mb-1">Artist Name</label>
<input className="w-full bg-neutral-950 border border-white/10 rounded px-3 py-2 text-sm text-neutral-300 focus:outline-none focus:border-white/20" readonly="" type="text" value="North$ideBaby"/>
</div>
<div>
<label className="block text-xs text-neutral-500 mb-1">Email</label>
<input className="w-full bg-neutral-950 border border-white/10 rounded px-3 py-2 text-sm text-neutral-300 focus:outline-none focus:border-white/20" readonly="" type="text" value="mgmt@northsidebaby.ca"/>
</div>
</div>
</div>

<div className="bg-neutral-900/20 border border-white/5 rounded-lg p-6">
<h3 className="text-sm font-medium text-white mb-4">Credits &amp; Billing</h3>
<div className="flex items-center justify-between bg-neutral-950 border border-white/10 rounded p-4">
<div>
<span className="text-xs text-neutral-500 block">Available Balance</span>
<span className="text-xl font-medium text-white">4,250 Credits</span>
</div>
<button className="text-xs bg-white text-black font-medium px-3 py-2 rounded hover:bg-neutral-200 transition">Top Up</button>
</div>
</div>

<div className="bg-neutral-900/20 border border-white/5 rounded-lg p-6">
<h3 className="text-sm font-medium text-white mb-2">Account Status</h3>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-sm text-emerald-500">Active / Verified Artist</span>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
