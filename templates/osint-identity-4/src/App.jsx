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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
zinc: {
850: '#1f1f22',
925: '#0c0c0e',
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
}



        (function () {
            const input = document.getElementById('search-input');
            const scanButton = document.getElementById('scan-button');
            const scanLabel = document.getElementById('scan-button-label');
            const scanSpinner = document.getElementById('scan-button-spinner');
            const footerDot = document.getElementById('footer-dot');
            const footerText = document.getElementById('footer-text');
            const resultsBody = document.getElementById('results-body');

            let isScanning = false;

            const demoAvatars = [
                "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64&q=80",
                "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64&q=80",
                "https://images.unsplash.com/photo-1521146764736-56c929d59c82?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64&q=80",
                "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64&q=80",
                "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64&q=80"
            ];

            const demoSources = [
                {
                    id: "instagram",
                    label: "Instagram",
                    sub: "Public profile",
                    badgeClass: "bg-gradient-to-tr from-yellow-600 via-pink-600 to-purple-600",
                    icon: "mdi:instagram",
                    dataPoints: ["Photos (public)", "Bio", "Followers (approx)"]
                },
                {
                    id: "linkedin",
                    label: "LinkedIn",
                    sub: "Public profile",
                    badgeClass: "bg-[#0077b5]",
                    icon: "mdi:linkedin",
                    dataPoints: ["Headline", "Company", "Location"]
                },
                {
                    id: "twitter",
                    label: "X (Twitter)",
                    sub: "Public posts",
                    badgeClass: "bg-black border border-white/10",
                    icon: "ri:twitter-x-fill",
                    iconWidth: 10,
                    dataPoints: ["Keyword hits", "Mentions", "Recent posts"]
                },
                {
                    id: "creator",
                    label: "Creator platform",
                    sub: "Public profile only",
                    badgeClass: "bg-gradient-to-tr from-purple-700 via-fuchsia-600 to-rose-500",
                    icon: "solar:users-group-two-rounded-linear",
                    dataPoints: ["Display name", "Profile link", "Tags"]
                }
            ];

            const randomFrom = (arr) => arr[Math.floor(Math.random() * arr.length)];

            function classifyQuery(q) {
                const value = q.trim();
                if (!value) return { type: "empty", descriptor: "ad-hoc" };
                if (value.includes("@") && value.includes(".")) {
                    return { type: "email", descriptor: "email match" };
                }
                const digits = value.replace(/[^\d]/g, "");
                if (digits.length >= 7) {
                    return { type: "phone", descriptor: "phone match" };
                }
                if (/^[@]/.test(value)) {
                    return { type: "handle", descriptor: "handle match" };
                }
                return { type: "name", descriptor: "name match" };
            }

            function suggestPrimarySource(meta) {
                switch (meta.type) {
                    case "email":
                        return randomFrom([demoSources[0], demoSources[1]]); // IG or LinkedIn
                    case "phone":
                        return randomFrom([demoSources[1], demoSources[2]]);
                    case "handle":
                        return randomFrom([demoSources[2], demoSources[3]]);
                    case "name":
                    default:
                        return randomFrom(demoSources);
                }
            }

            function buildDataPointBadges(source, meta) {
                const base = source.dataPoints;
                let extra = [];
                if (meta.type === "email") extra = ["Gravatar-style avatar"];
                if (meta.type === "phone") extra = ["Country (inferred)"];
                if (meta.type === "handle") extra = ["Username variants"];
                if (meta.type === "name") extra = ["Alt spellings"];

                const all = [...base.slice(0, 2), ...extra.slice(0, 1)];
                return all.map(label => {
                    const isHighlight = /keyword|hit/i.test(label);
                    const borderClass = isHighlight ? "border-rose-500/20 bg-rose-500/5 text-rose-400" : "border-white/5 bg-zinc-900 text-zinc-400";
                    return `<span class="inline-flex items-center px-1.5 py-0.5 rounded border ${borderClass} text-[10px]">${label}</span>`;
                }).join("");
            }

            function relativeTimeLabel(idx) {
                if (idx === 0) return "just now";
                if (idx === 1) return "30s ago";
                if (idx === 2) return "1m ago";
                return `${2 + idx}m ago`;
            }

            function buildDisplayName(meta, query, index) {
                const trimmed = query.trim();
                if (!trimmed) return "Demo identity";
                if (meta.type === "email") {
                    const local = trimmed.split("@")[0];
                    const parts = local.replace(/[._]/g, " ").split(" ");
                    const capitalized = parts.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(" ");
                    return capitalized || "Email match";
                }
                if (meta.type === "phone") {
                    return index === 0 ? "Possible primary match" : "Alternate match";
                }
                if (meta.type === "handle") {
                    return trimmed.replace(/^@/, "");
                }
                if (meta.type === "name") {
                    return index === 0 ? trimmed : `${trimmed} (variant)`;
                }
                return "Demo identity";
            }

            function setScanningState(active, query) {
                isScanning = active;
                scanButton.disabled = active;
                if (active) {
                    scanLabel.textContent = 'Scanning...';
                    scanSpinner.classList.remove('hidden');
                    scanButton.classList.add('cursor-wait');
                    footerDot.classList.remove('bg-zinc-500');
                    footerDot.classList.add('bg-emerald-500');
                    footerText.textContent = `Running demo scan for "${query}" (public data only)...`;
                } else {
                    scanLabel.textContent = 'Scan';
                    scanSpinner.classList.add('hidden');
                    scanButton.classList.remove('cursor-wait');
                    footerDot.classList.remove('bg-emerald-500');
                    footerDot.classList.add('bg-zinc-500');
                    footerText.textContent = 'Demo environment · public data only';
                }
            }

            function createDemoRow(query, index, total) {
                const meta = classifyQuery(query);
                const source = suggestPrimarySource(meta);
                const safeQuery = query.trim() || 'ad-hoc';
                const descriptor = meta.descriptor;
                const avatar = randomFrom(demoAvatars);
                const displayName = buildDisplayName(meta, query, index);
                const nowLabel = relativeTimeLabel(index);
                const dataBadges = buildDataPointBadges(source, meta);

                const emphasisFlag = index === 0;
                const presenceColor = emphasisFlag ? "bg-emerald-500" : "bg-amber-500";

                const iconWidth = source.iconWidth || 12;

                const tr = document.createElement('tr');
                tr.className = 'group hover:bg-white/[0.02] transition-colors cursor-pointer';

                tr.innerHTML = `
                    <td class="py-3 px-5">
                        <div class="flex items-center gap-3">
                            <div class="relative w-9 h-9">
                                <img src="${avatar}" class="w-full h-full rounded-full object-cover border border-white/10" alt="Avatar">
                                <div class="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-zinc-900 rounded-full flex items-center justify-center">
                                    <div class="w-1.5 h-1.5 ${presenceColor} rounded-full"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex items-center gap-1.5">
                                    <span class="text-xs font-medium text-zinc-200">${displayName}</span>
                                    ${emphasisFlag && meta.type !== "empty" ? `<iconify-icon icon="solar:verified-check-linear" class="text-blue-400" width="10"></iconify-icon>` : ""}
                                </div>
                                <div class="text-[10px] text-zinc-500 font-mono">Query: ${descriptor} · "${safeQuery}"</div>
                            </div>
                        </div>
                    </td>
                    <td class="py-3 px-5">
                        <div class="flex items-center gap-2">
                            <div class="w-5 h-5 rounded-md ${source.badgeClass} flex items-center justify-center text-white ${source.id === 'onlyfans.com' ? 'border border-white/10' : ''}">
                                <iconify-icon icon="${source.icon}" width="${iconWidth}"></iconify-icon>
                            </div>
                            <div class="flex flex-col">
                                <span class="text-[11px] text-zinc-300">${source.label}</span>
                                <span class="text-[9px] text-zinc-600">${source.sub}</span>
                            </div>
                        </div>
                    </td>
                    <td class="py-3 px-5">
                        <div class="flex flex-wrap gap-1.5">
                            ${dataBadges}
                        </div>
                    </td>
                    <td class="py-3 px-5 text-right">
                        <span class="text-[10px] text-zinc-500 font-mono">${nowLabel}</span>
                    </td>
                `;

                return tr;
            }

            function runDemoScan() {
                const query = input.value.trim();
                if (!query || isScanning) return;

                setScanningState(true, query);

                const matches = 1 + Math.floor(Math.random() * 3); // 1–3 demo rows
                const delayPerMatch = 260;

                // Insert multiple rows at the top while preserving original static rows below
                let inserted = 0;
                const intervalId = setInterval(() => {
                    const newRow = createDemoRow(query, inserted, matches);
                    if (resultsBody.firstChild) {
                        resultsBody.insertBefore(newRow, resultsBody.firstChild);
                    } else {
                        resultsBody.appendChild(newRow);
                    }
                    inserted += 1;
                    if (inserted >= matches) {
                        clearInterval(intervalId);
                        setTimeout(() => {
                            setScanningState(false, query);
                            input.focus();
                            input.select();
                        }, 200);
                    }
                }, delayPerMatch);
            }

            scanButton.addEventListener('click', runDemoScan);

            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    runDemoScan();
                }
            });

            document.addEventListener('keydown', (e) => {
                const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
                if ((isMac && e.metaKey && e.key.toLowerCase() === 'k') || (!isMac && e.ctrlKey && e.key.toLowerCase() === 'k')) {
                    e.preventDefault();
                    input.focus();
                    input.select();
                }
            });
        })();
    
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="relative w-6 h-6 flex items-center justify-center">
<div className="absolute inset-0 border border-white/20 rounded-md rotate-45"></div>
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
<span className="text-zinc-100 font-medium tracking-tight text-sm">OSINT.DB</span>
</div>
<div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-zinc-500">
<a className="hover:text-zinc-200 transition-colors" href="#">Sources</a>
<a className="hover:text-zinc-200 transition-colors" href="#">API Reference</a>
<a className="hover:text-zinc-200 transition-colors" href="#">Enterprise</a>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 px-2 py-1 bg-zinc-900 border border-white/5 rounded text-[10px] text-zinc-500">
<span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                    System Operational
                </div>
<a className="text-xs font-medium text-white px-3 py-1.5 rounded hover:bg-white/10 transition-colors border border-transparent hover:border-white/5" href="#">
                    Sign in
                </a>
</div>
</div>
</nav>

<main className="relative z-10 flex-grow flex flex-col items-center justify-start pt-32 px-4 pb-20 w-full max-w-6xl mx-auto">

<div className="text-center w-full max-w-2xl mx-auto mb-10">
<h1 className="text-5xl md:text-6xl font-medium text-white tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
                Identity Intelligence
            </h1>
<p className="text-zinc-500 text-lg font-light leading-relaxed max-w-lg mx-auto">
                Search public profiles across major social platforms using name, email, or phone. Results aggregate only publicly available records.
            </p>
</div>

<div className="w-full max-w-2xl relative group z-20 mb-16">
<div className="absolute -inset-0.5 bg-gradient-to-r from-zinc-700 to-zinc-800 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
<div className="relative glass-panel rounded-xl p-1.5 search-glow">
<div className="relative flex items-center">
<div className="absolute left-4 flex items-center pointer-events-none text-zinc-500">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<input className="w-full bg-zinc-900/40 border border-transparent rounded-lg py-3.5 pl-12 pr-32 text-sm text-white placeholder-zinc-600 focus:outline-none focus:bg-zinc-900/60 transition-all font-light" id="search-input" placeholder="Search public profiles by name, email, or phone..." type="text"/>
<div className="absolute right-1.5 flex items-center gap-1">
<kbd className="hidden md:inline-flex items-center px-2 py-1 rounded bg-zinc-800/50 border border-white/5 text-[10px] text-zinc-500 font-sans">⌘K</kbd>
<button className="h-8 px-4 bg-white hover:bg-zinc-200 text-black text-xs font-medium rounded-md transition-colors shadow-lg shadow-white/5 flex items-center gap-2" id="scan-button">
<span id="scan-button-label">Scan</span>
<span className="hidden w-3 h-3 border border-black/10 border-t-black rounded-full animate-spin" id="scan-button-spinner"></span>
</button>
</div>
</div>
</div>

<div className="mt-4 flex flex-wrap justify-center gap-4 opacity-60 hover:opacity-100 transition-opacity duration-300">
<div className="flex items-center gap-1.5 text-[10px] text-zinc-500 border border-white/5 bg-zinc-900/30 px-2 py-1 rounded-full">
<iconify-icon icon="solar:database-linear" width="12"></iconify-icon>
<span className="text-zinc-400">Instagram (public)</span>
</div>
<div className="flex items-center gap-1.5 text-[10px] text-zinc-500 border border-white/5 bg-zinc-900/30 px-2 py-1 rounded-full">
<iconify-icon icon="solar:database-linear" width="12"></iconify-icon>
<span className="text-zinc-400">LinkedIn (public)</span>
</div>
<div className="flex items-center gap-1.5 text-[10px] text-zinc-500 border border-white/5 bg-zinc-900/30 px-2 py-1 rounded-full">
<iconify-icon icon="solar:database-linear" width="12"></iconify-icon>
<span className="text-zinc-400">Twitter / X (public)</span>
</div>
<div className="flex items-center gap-1.5 text-[10px] text-zinc-500 border border-white/5 bg-zinc-900/30 px-2 py-1 rounded-full">
<iconify-icon icon="solar:database-linear" width="12"></iconify-icon>
<span className="text-zinc-400">Creator platforms (public)</span>
</div>
</div>
</div>

<div className="w-full">
<div className="flex items-end justify-between mb-4 px-1">
<div>
<h3 className="text-sm font-medium text-white tracking-tight">Recent Public Scans</h3>
<p className="text-[11px] text-zinc-500 mt-1">FULL feed of profiles and public metadata discovered across supported platforms public data for onlyfans.com.</p>
</div>
<div className="flex gap-2">
<button className="p-1.5 rounded-md hover:bg-white/5 text-zinc-500 hover:text-white transition-colors">
<iconify-icon icon="solar:list-linear" width="16"></iconify-icon>
</button>
<button className="p-1.5 rounded-md hover:bg-white/5 text-zinc-500 hover:text-white transition-colors">
<iconify-icon icon="solar:widget-2-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="glass-panel rounded-xl overflow-hidden">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-white/5 bg-white/[0.01]">
<th className="py-3 px-5 text-[10px] font-medium text-zinc-500 uppercase tracking-wider w-[40%]">Profile / Identity</th>
<th className="py-3 px-5 text-[10px] font-medium text-zinc-500 uppercase tracking-wider">Primary Source</th>
<th className="py-3 px-5 text-[10px] font-medium text-zinc-500 uppercase tracking-wider">Public Data Points</th>
<th className="py-3 px-5 text-[10px] font-medium text-zinc-500 uppercase tracking-wider text-right">Captured</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5" id="results-body">

<tr className="group hover:bg-white/[0.02] transition-colors cursor-pointer">
<td className="py-3 px-5">
<div className="flex items-center gap-3">
<div className="relative w-9 h-9">
<img alt="Avatar" className="w-full h-full rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=64&amp;h=64&amp;q=80"/>
<div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-zinc-900 rounded-full flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
</div>
</div>
<div>
<div className="flex items-center gap-1.5">
<span className="text-xs font-medium text-zinc-200">Elena V.</span>
<iconify-icon className="text-blue-400" icon="solar:verified-check-linear" width="10"></iconify-icon>
</div>
<div className="text-[10px] text-zinc-500 font-mono">Query: email match</div>
</div>
</div>
</td>
<td className="py-3 px-5">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-md bg-gradient-to-tr from-yellow-600 via-pink-600 to-purple-600 flex items-center justify-center text-white">
<iconify-icon icon="mdi:instagram" width="12"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-[11px] text-zinc-300">Instagram</span>
<span className="text-[9px] text-zinc-600">Public profile</span>
</div>
</div>
</td>
<td className="py-3 px-5">
<div className="flex gap-1.5">
<span className="inline-flex items-center px-1.5 py-0.5 rounded border border-white/5 bg-zinc-900 text-[10px] text-zinc-400">Photos (public)</span>
<span className="inline-flex items-center px-1.5 py-0.5 rounded border border-white/5 bg-zinc-900 text-[10px] text-zinc-400">Bio</span>
</div>
</td>
<td className="py-3 px-5 text-right">
<span className="text-[10px] text-zinc-500 font-mono">2m ago</span>
</td>
</tr>
<tr className="group hover:bg-white/[0.02] transition-colors cursor-pointer">
<td className="py-3 px-5">
<div className="flex items-center gap-3">
<div className="relative w-9 h-9">
<img alt="Avatar" className="w-full h-full rounded-full object-cover border border-white/10 grayscale group-hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=64&amp;h=64&amp;q=80"/>
</div>
<div>
<div className="flex items-center gap-1.5">
<span className="text-xs font-medium text-zinc-200">Marcus Wright</span>
</div>
<div className="text-[10px] text-zinc-500 font-mono">Query: phone match</div>
</div>
</div>
</td>
<td className="py-3 px-5">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-md bg-[#0077b5] flex items-center justify-center text-white">
<iconify-icon icon="mdi:linkedin" width="12"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-[11px] text-zinc-300">LinkedIn</span>
<span className="text-[9px] text-zinc-600">Public profile</span>
</div>
</div>
</td>
<td className="py-3 px-5">
<div className="flex gap-1.5">
<span className="inline-flex items-center px-1.5 py-0.5 rounded border border-white/5 bg-zinc-900 text-[10px] text-zinc-400">Headline</span>
<span className="inline-flex items-center px-1.5 py-0.5 rounded border border-white/5 bg-zinc-900 text-[10px] text-zinc-400">Location</span>
</div>
</td>
<td className="py-3 px-5 text-right">
<span className="text-[10px] text-zinc-500 font-mono">14m ago</span>
</td>
</tr>
<tr className="group hover:bg-white/[0.02] transition-colors cursor-pointer">
<td className="py-3 px-5">
<div className="flex items-center gap-3">
<div className="relative w-9 h-9">
<img alt="Avatar" className="w-full h-full rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=64&amp;h=64&amp;q=80"/>
<div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-zinc-900 rounded-full flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
</div>
</div>
<div>
<div className="flex items-center gap-1.5">
<span className="text-xs font-medium text-zinc-200">Sarah Chen</span>
</div>
<div className="text-[10px] text-zinc-500 font-mono">Query: name match</div>
</div>
</div>
</td>
<td className="py-3 px-5">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-md bg-black border border-white/10 flex items-center justify-center text-white">
<iconify-icon icon="ri:twitter-x-fill" width="10"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-[11px] text-zinc-300">X (Twitter)</span>
<span className="text-[9px] text-zinc-600">Public posts</span>
</div>
</div>
</td>
<td className="py-3 px-5">
<div className="flex gap-1.5">
<span className="inline-flex items-center px-1.5 py-0.5 rounded border border-rose-500/20 bg-rose-500/5 text-[10px] text-rose-400">Keyword hits</span>
<span className="inline-flex items-center px-1.5 py-0.5 rounded border border-white/5 bg-zinc-900 text-[10px] text-zinc-400">Mentions</span>
</div>
</td>
<td className="py-3 px-5 text-right">
<span className="text-[10px] text-zinc-500 font-mono">1h ago</span>
</td>
</tr>
<tr className="group hover:bg-white/[0.02] transition-colors cursor-pointer">
<td className="py-3 px-5">
<div className="flex items-center gap-3">
<div className="relative w-9 h-9">
<img alt="Avatar" className="w-full h-full rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=64&amp;h=64&amp;q=80"/>
</div>
<div>
<div className="flex items-center gap-1.5">
<span className="text-xs font-medium text-zinc-200">DK Studio</span>
</div>
<div className="text-[10px] text-zinc-500 font-mono">Query: handle match</div>
</div>
</div>
</td>
<td className="py-3 px-5">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-md bg-gradient-to-tr from-purple-700 via-fuchsia-600 to-rose-500 flex items-center justify-center text-white">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="12"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-[11px] text-zinc-300">Creator platform</span>
<span className="text-[9px] text-zinc-600">Public profile only</span>
</div>
</div>
</td>
<td className="py-3 px-5">
<div className="flex gap-1.5">
<span className="inline-flex items-center px-1.5 py-0.5 rounded border border-white/5 bg-zinc-900 text-[10px] text-zinc-400">Display name</span>
<span className="inline-flex items-center px-1.5 py-0.5 rounded border border-white/5 bg-zinc-900 text-[10px] text-zinc-400">Profile link</span>
</div>
</td>
<td className="py-3 px-5 text-right">
<span className="text-[10px] text-zinc-500 font-mono">3h ago</span>
</td>
</tr>
</tbody>
</table>

<div className="border-t border-white/5 p-2 bg-zinc-900/30">
<div className="flex items-center justify-center gap-2 py-1">
<div className="w-1 h-1 bg-zinc-500 rounded-full animate-pulse" id="footer-dot"></div>
<span className="text-[10px] text-zinc-500" id="footer-text">Demo environment · public data only</span>
</div>
</div>
</div>
</div>
</main>

<footer className="border-t border-white/5 bg-black py-8 relative z-10">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<span className="text-zinc-600 text-[11px] font-medium">OSINT.DB © 2024. All rights reserved.</span>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-1.5 text-zinc-600">
<div className="w-1.5 h-1.5 bg-green-900 rounded-full"></div>
<span className="text-[10px]">Monitoring public endpoints only</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
