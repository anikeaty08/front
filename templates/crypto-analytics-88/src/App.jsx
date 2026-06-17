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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // -- Mobile Menu --
        function toggleMobileMenu() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('mobileOverlay');
            sidebar.classList.toggle('-translate-x-full');
            if (overlay.classList.contains('hidden')) {
                overlay.classList.remove('hidden');
            } else {
                overlay.classList.add('hidden');
            }
        }
        function closeMobileMenu() {
            if(window.innerWidth < 768) {
                toggleMobileMenu();
            }
        }

        // -- Toast Notifications --
        function showToast(message) {
            const container = document.getElementById('toastContainer');
            const toast = document.createElement('div');
            toast.className = 'bg-[#16162a] border border-[#ffffff1a] text-sm text-slate-200 px-4 py-3 rounded-lg shadow-xl animate-slide-up flex items-center gap-3 pointer-events-auto';
            toast.innerHTML = `
                <iconify-icon icon="solar:check-circle-linear" class="text-[#00f2a0]" stroke-width="1.5"></iconify-icon>
                ${message}
            `;
            container.appendChild(toast);
            setTimeout(() => {
                toast.classList.replace('animate-slide-up', 'animate-fade-out');
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }

        // -- Search Cmd/Ctrl+K --
        function openSearch() {
            const modal = document.getElementById('searchModal');
            modal.classList.remove('hidden');
            setTimeout(() => document.getElementById('searchInput').focus(), 50);
        }
        function closeSearch() {
            document.getElementById('searchModal').classList.add('hidden');
            document.getElementById('searchInput').value = '';
        }
        document.addEventListener('keydown', (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                openSearch();
            }
            if (e.key === 'Escape') {
                closeSearch();
            }
        });

        // -- Scroll Spy Nav Links --
        const sections = document.querySelectorAll('.scroll-section');
        const navLinks = document.querySelectorAll('.nav-link');
        const mainScroll = document.getElementById('mainScroll');
        
        // Listen to appropriate scrolling element depending on screen size
        const scrollTarget = window.innerWidth >= 768 ? mainScroll : window;
        
        scrollTarget.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                // Adjusting offset to trigger active state slightly earlier
                const sectionTop = section.getBoundingClientRect().top;
                if (sectionTop < 250) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active', 'text-slate-200');
                link.classList.add('text-[#ffffff60]');
                const icon = link.querySelector('iconify-icon');
                if (link.getAttribute('data-target') === current) {
                    link.classList.add('active');
                    link.classList.remove('text-[#ffffff60]');
                }
            });
        });

        // -- Dashboard Edit Mode --
        function toggleEditMode() {
            const isChecked = document.getElementById('editToggle').checked;
            const grid = document.getElementById('bentoGrid');
            if (isChecked) {
                grid.classList.add('bento-edit-mode');
                showToast('Edit Mode Enabled');
            } else {
                grid.classList.remove('bento-edit-mode');
                showToast('Changes Saved');
            }
        }

        // -- Screener Filtering --
        function toggleDropdown(id) {
            const drop = document.getElementById(id);
            drop.classList.toggle('hidden');
        }
        function selectSector(val) {
            document.getElementById('selectedSector').innerText = val;
            document.getElementById('sectorDropdown').classList.add('hidden');
            showToast(`Filtered by ${val}`);
        }
        function toggleVolFilter() {
            const isChecked = document.getElementById('volFilter').checked;
            const rows = document.querySelectorAll('#screenerTable .row-item');
            rows.forEach(row => {
                if (row.getAttribute('data-vol') === 'low') {
                    if (isChecked) row.classList.add('hidden');
                    else row.classList.remove('hidden');
                }
            });
        }
        
        // Click outside dropdown to close
        document.addEventListener('click', (e) => {
            if(!e.target.closest('.group')) {
                const drop = document.getElementById('sectorDropdown');
                if(drop && !drop.classList.contains('hidden')) drop.classList.add('hidden');
            }
        });

        // -- Intelligence Chat --
        function handleChat(e) {
            if (e.key === 'Enter') submitChat();
        }
        function submitChat() {
            const input = document.getElementById('chatInput');
            const val = input.value.trim();
            if(!val) return;
            
            const history = document.getElementById('chatHistory');
            // Add user msg
            history.insertAdjacentHTML('beforeend', `
                <div class="flex gap-3 justify-end animate-fade-in">
                    <div class="bg-[#16162a] border border-[#ffffff08] rounded-2xl rounded-tr-none p-3 text-sm text-slate-200 font-light max-w-[80%]">${val}</div>
                </div>
            `);
            input.value = '';
            history.scrollTop = history.scrollHeight;
            
            // Loading msg
            const loadId = 'load-' + Date.now();
            history.insertAdjacentHTML('beforeend', `
                <div id="${loadId}" class="flex gap-3 animate-fade-in">
                    <div class="w-6 h-6 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#00f2a0] flex items-center justify-center shrink-0">
                        <iconify-icon icon="solar:stars-linear" class="text-white text-[10px]"></iconify-icon>
                    </div>
                    <div class="bg-[#ffffff05] border border-[#ffffff08] rounded-2xl rounded-tl-none p-4 flex items-center gap-1.5 h-[50px]">
                        <span class="w-1.5 h-1.5 bg-[#ffffff40] rounded-full animate-bounce"></span>
                        <span class="w-1.5 h-1.5 bg-[#ffffff40] rounded-full animate-bounce" style="animation-delay: 0.1s"></span>
                        <span class="w-1.5 h-1.5 bg-[#ffffff40] rounded-full animate-bounce" style="animation-delay: 0.2s"></span>
                    </div>
                </div>
            `);
            history.scrollTop = history.scrollHeight;

            // Reply after fake delay
            setTimeout(() => {
                document.getElementById(loadId).remove();
                history.insertAdjacentHTML('beforeend', `
                    <div class="flex gap-3 animate-fade-in">
                        <div class="w-6 h-6 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#00f2a0] flex items-center justify-center shrink-0">
                            <iconify-icon icon="solar:stars-linear" class="text-white text-[10px]"></iconify-icon>
                        </div>
                        <div class="bg-[#ffffff05] border border-[#ffffff08] rounded-2xl rounded-tl-none p-4 text-sm text-[#ffffff80] font-light max-w-[90%] leading-relaxed">
                            <p>Analysis complete. No immediate structural concerns detected for that query based on current real-time feeds.</p>
                        </div>
                    </div>
                `);
                history.scrollTop = history.scrollHeight;
            }, 1200);
        }

        // -- Copy Code block --
        function copyCode(btn) {
            const codeText = `type NormalizedAsset = {
  id: string;
  symbol: string;
  name: string;
  price: {
    usd: number;
    btc: number;
    change_24h: number;
  };
  volume_24h_usd: number;
  last_updated: string;
};`;
            navigator.clipboard.writeText(codeText).then(() => {
                const textSpan = btn.querySelector('.copy-text');
                const originalText = textSpan.innerText;
                const icon = btn.querySelector('iconify-icon');
                
                textSpan.innerText = 'Copied';
                icon.setAttribute('icon', 'solar:check-circle-linear');
                btn.classList.add('text-[#00f2a0]');
                btn.classList.remove('text-[#ffffff40]');
                
                setTimeout(() => {
                    textSpan.innerText = originalText;
                    icon.setAttribute('icon', 'solar:copy-linear');
                    btn.classList.remove('text-[#00f2a0]');
                    btn.classList.add('text-[#ffffff40]');
                }, 2000);
            });
        }

        // -- API Keys --
        function generateApiKey() {
            const list = document.getElementById('apiKeyList');
            const randomString = Math.random().toString(36).substring(2, 12);
            const html = `
                <div class="bg-[#16162a] border border-[#ffffff08] rounded-lg p-3 flex items-center justify-between group animate-fade-in">
                    <div class="flex flex-col gap-1">
                        <span class="text-xs text-slate-200">Staging Key</span>
                        <span class="text-[10px] font-mono text-[#ffffff40]">pk_test_${randomString}*********</span>
                    </div>
                    <button onclick="deleteApiKey(this)" class="text-[#ffffff40] hover:text-[#ff4d6d] transition-colors opacity-0 group-hover:opacity-100 focus:outline-none">
                        <iconify-icon icon="solar:trash-bin-trash-linear" stroke-width="1.5"></iconify-icon>
                    </button>
                </div>
            `;
            list.insertAdjacentHTML('beforeend', html);
            showToast('New API Key Generated');
        }
        function deleteApiKey(btn) {
            const row = btn.closest('.group');
            row.classList.add('opacity-0', 'transition-opacity');
            setTimeout(() => row.remove(), 200);
            showToast('API Key Revoked');
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
      

<header className="md:hidden flex items-center justify-between p-4 border-b border-[#ffffff08] bg-[#0f0f1a]/90 backdrop-blur-md sticky top-0 z-40">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-gradient-to-br from-[#7c3aed] to-violet-900 flex items-center justify-center font-medium tracking-tighter text-sm text-white shadow-[0_0_15px_rgba(124,58,237,0.3)]">
                CA
            </div>
<span className="font-medium tracking-tight text-sm">Analytics Spec</span>
</div>
<button className="text-[#ffffff80] hover:text-white transition-colors focus:outline-none" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</header>

<div className="hidden fixed inset-0 bg-[#080810]/80 backdrop-blur-sm z-40 md:hidden transition-opacity" id="mobileOverlay" onclick="toggleMobileMenu()"></div>

<aside className="fixed inset-y-0 left-0 transform -translate-x-full md:translate-x-0 transition-transform duration-300 ease-in-out md:static flex flex-col w-64 border-r border-[#ffffff08] bg-[#080810] h-screen z-50 shrink-0 shadow-2xl md:shadow-none" id="sidebar">
<div className="p-6 flex items-center justify-between gap-3 border-b border-[#ffffff08]">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-gradient-to-br from-[#7c3aed] to-violet-900 flex items-center justify-center font-medium tracking-tighter text-sm text-white shadow-[0_0_15px_rgba(124,58,237,0.3)]">
                    CA
                </div>
<div className="flex flex-col">
<span className="font-medium tracking-tight text-sm text-slate-200">Platform Core</span>
<span className="text-xs text-[#ffffff60] font-light">v2.4 Specification</span>
</div>
</div>
<button className="md:hidden text-[#ffffff60] hover:text-white focus:outline-none" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto p-4 flex flex-col gap-6">

<button className="flex items-center gap-2 w-full bg-[#0f0f1a] border border-[#ffffff08] rounded-md px-3 py-2 text-sm text-[#ffffff60] hover:border-[#ffffff1a] transition-colors group" onclick="openSearch()">
<iconify-icon className="group-hover:text-white transition-colors" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-light flex-1 text-left">Search docs...</span>
<kbd className="font-mono text-xs bg-[#ffffff08] px-1.5 py-0.5 rounded text-[#ffffff60]">⌘K</kbd>
</button>

<nav className="flex flex-col gap-1" id="navMenu">
<p className="text-xs font-medium text-[#ffffff40] uppercase tracking-widest px-2 mb-2">Overview</p>
<a className="nav-link flex items-center gap-3 px-2 py-1.5 text-sm text-[#ffffff60] hover:text-slate-200 hover:bg-[#ffffff05] rounded-md font-light transition-colors group" data-target="philosophy" href="#philosophy" onclick="closeMobileMenu()">
<iconify-icon className="group-hover:text-[#7c3aed] transition-colors" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
                    Product Philosophy
                </a>
<a className="nav-link flex items-center gap-3 px-2 py-1.5 text-sm text-[#ffffff60] hover:text-slate-200 hover:bg-[#ffffff05] rounded-md font-light transition-colors group" data-target="architecture" href="#architecture" onclick="closeMobileMenu()">
<iconify-icon className="group-hover:text-[#7c3aed] transition-colors" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
                    Architecture Phase
                </a>
</nav>
<nav className="flex flex-col gap-1">
<p className="text-xs font-medium text-[#ffffff40] uppercase tracking-widest px-2 mb-2">Modules</p>
<a className="nav-link flex items-center justify-between px-2 py-1.5 text-sm text-[#ffffff60] hover:text-slate-200 hover:bg-[#ffffff05] rounded-md font-light transition-colors group" data-target="dashboard" href="#dashboard" onclick="closeMobileMenu()">
<div className="flex items-center gap-3">
<iconify-icon className="group-hover:text-[#7c3aed] transition-colors" icon="solar:widget-linear" strokeWidth="1.5"></iconify-icon>
                        Dashboard Bento
                    </div>
<span className="w-1.5 h-1.5 rounded-full bg-[#00f2a0]"></span>
</a>
<a className="nav-link flex items-center gap-3 px-2 py-1.5 text-sm text-[#ffffff60] hover:text-slate-200 hover:bg-[#ffffff05] rounded-md font-light transition-colors group" data-target="analytics" href="#analytics" onclick="closeMobileMenu()">
<iconify-icon className="group-hover:text-[#7c3aed] transition-colors" icon="solar:chart-linear" strokeWidth="1.5"></iconify-icon>
                    Asset Analytics
                </a>
<a className="nav-link flex items-center gap-3 px-2 py-1.5 text-sm text-[#ffffff60] hover:text-slate-200 hover:bg-[#ffffff05] rounded-md font-light transition-colors group" data-target="portfolio" href="#portfolio" onclick="closeMobileMenu()">
<iconify-icon className="group-hover:text-[#7c3aed] transition-colors" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
                    Portfolio Engine
                </a>
<a className="nav-link flex items-center gap-3 px-2 py-1.5 text-sm text-[#ffffff60] hover:text-slate-200 hover:bg-[#ffffff05] rounded-md font-light transition-colors group" data-target="screener" href="#screener" onclick="closeMobileMenu()">
<iconify-icon className="group-hover:text-[#7c3aed] transition-colors" icon="solar:filters-linear" strokeWidth="1.5"></iconify-icon>
                    Screener
                </a>
</nav>
<nav className="flex flex-col gap-1">
<p className="text-xs font-medium text-[#ffffff40] uppercase tracking-widest px-2 mb-2">Systems</p>
<a className="nav-link flex items-center gap-3 px-2 py-1.5 text-sm text-[#ffffff60] hover:text-slate-200 hover:bg-[#ffffff05] rounded-md font-light transition-colors group" data-target="intelligence" href="#intelligence" onclick="closeMobileMenu()">
<iconify-icon className="group-hover:text-[#7c3aed] transition-colors" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
                    Intelligence Layer
                </a>
<a className="nav-link flex items-center gap-3 px-2 py-1.5 text-sm text-[#ffffff60] hover:text-slate-200 hover:bg-[#ffffff05] rounded-md font-light transition-colors group" data-target="pipeline" href="#pipeline" onclick="closeMobileMenu()">
<iconify-icon className="group-hover:text-[#7c3aed] transition-colors" icon="solar:database-linear" strokeWidth="1.5"></iconify-icon>
                    Data Pipeline
                </a>
<a className="nav-link flex items-center gap-3 px-2 py-1.5 text-sm text-[#ffffff60] hover:text-slate-200 hover:bg-[#ffffff05] rounded-md font-light transition-colors group" data-target="security" href="#security" onclick="closeMobileMenu()">
<iconify-icon className="group-hover:text-[#7c3aed] transition-colors" icon="solar:shield-keyhole-linear" strokeWidth="1.5"></iconify-icon>
                    Security Arch
                </a>
</nav>
</div>
<div className="p-4 border-t border-[#ffffff08]">
<div className="flex items-center gap-3 px-2 py-1.5 rounded-md hover:bg-[#ffffff05] cursor-pointer transition-colors" onclick="showToast('Profile settings not available in spec.')">
<div className="w-6 h-6 rounded-full bg-[#16162a] border border-[#ffffff1a] overflow-hidden flex items-center justify-center">
<iconify-icon className="text-xs text-[#ffffff60]" icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-200">Eng Team</span>
<span className="text-[10px] text-[#ffffff60] font-light">Lead Architect</span>
</div>
<iconify-icon className="ml-auto text-xs text-[#ffffff40]" icon="solar:alt-arrow-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</aside>

<main className="flex-1 flex justify-center bg-[#080810] min-w-0 md:h-screen md:overflow-y-auto overflow-x-hidden" id="mainScroll">
<div className="w-full max-w-5xl px-6 py-12 md:px-12 md:py-16 lg:py-24 flex flex-col gap-16 lg:gap-24">

<header className="flex flex-col gap-6">
<div className="flex items-center gap-2 text-xs font-mono text-[#7c3aed] bg-[#7c3aed]/10 border border-[#7c3aed]/20 px-2.5 py-1 rounded-full w-max">
<span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed] animate-pulse"></span>
                    Live Specification
                </div>
<h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
                    Institutional-Grade <br className="hidden md:block"/>
<span className="text-[#ffffff80]">Crypto Analytics Platform</span>
</h1>
<p className="text-base md:text-lg font-light text-[#ffffff80] max-w-2xl leading-relaxed">
                    A comprehensive architectural and design specification for a high-performance, real-time financial data platform. Focus on zero-surprise UX, data density without clutter, and extreme performance.
                </p>
</header>

<section className="scroll-section flex flex-col gap-6" id="philosophy">
<div className="flex items-center gap-3 border-b border-[#ffffff08] pb-4">
<div className="p-1.5 rounded bg-[#ffffff05] border border-[#ffffff08]">
<iconify-icon className="text-lg text-slate-200" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-xl font-medium tracking-tight text-white">Product Philosophy</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">

<div className="bg-[#0f0f1a] border border-[#ffffff08] rounded-xl p-6 flex flex-col gap-4 relative overflow-hidden group hover:border-[#ffffff1a] transition-colors">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#7c3aed]/5 rounded-bl-full blur-2xl group-hover:bg-[#7c3aed]/10 transition-colors"></div>
<div className="flex items-center justify-between">
<span className="text-xs font-mono text-[#ffffff40]">LAW 01</span>
<iconify-icon className="text-lg text-[#ffffff40] group-hover:text-[#7c3aed] transition-colors" icon="solar:eye-scan-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-slate-200">Zero Surprise Architecture</h3>
<p className="text-sm font-light text-[#ffffff60] leading-relaxed">Every interaction should feel known. No tooltips required for core flows. No "where did that go?" moments.</p>
</div>

<div className="bg-[#0f0f1a] border border-[#ffffff08] rounded-xl p-6 flex flex-col gap-4 relative overflow-hidden group hover:border-[#ffffff1a] transition-colors">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#00f2a0]/5 rounded-bl-full blur-2xl group-hover:bg-[#00f2a0]/10 transition-colors"></div>
<div className="flex items-center justify-between">
<span className="text-xs font-mono text-[#ffffff40]">LAW 02</span>
<iconify-icon className="text-lg text-[#ffffff40] group-hover:text-[#00f2a0] transition-colors" icon="solar:layers-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-slate-200">Data Density ≠ Clutter</h3>
<p className="text-sm font-light text-[#ffffff60] leading-relaxed">Organize dashboards around what a user is trying to decide, not just what data is available in the API.</p>
</div>

<div className="bg-[#0f0f1a] border border-[#ffffff08] rounded-xl p-6 flex flex-col gap-4 relative overflow-hidden group hover:border-[#ffffff1a] transition-colors">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#ff4d6d]/5 rounded-bl-full blur-2xl group-hover:bg-[#ff4d6d]/10 transition-colors"></div>
<div className="flex items-center justify-between">
<span className="text-xs font-mono text-[#ffffff40]">LAW 03</span>
<iconify-icon className="text-lg text-[#ffffff40] group-hover:text-[#ff4d6d] transition-colors" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-slate-200">Performance is a Feature</h3>
<p className="text-sm font-light text-[#ffffff60] leading-relaxed">An 80ms chart load vs 400ms is a UX differentiator. Architecture choices prioritize rendering speed.</p>
</div>
</div>
</section>

<section className="scroll-section flex flex-col gap-6" id="architecture">
<div className="flex items-center gap-3 border-b border-[#ffffff08] pb-4">
<div className="p-1.5 rounded bg-[#ffffff05] border border-[#ffffff08]">
<iconify-icon className="text-lg text-slate-200" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-col">
<h2 className="text-xl font-medium tracking-tight text-white">System Architecture</h2>
</div>
</div>
<div className="bg-[#0f0f1a] border border-[#ffffff08] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center justify-between relative">

<div className="flex flex-col gap-3 items-center w-full md:w-1/3 z-10">
<div className="w-16 h-16 rounded-xl bg-[#16162a] border border-[#ffffff1a] flex items-center justify-center shadow-lg">
<iconify-icon className="text-2xl text-slate-200" icon="solar:laptop-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-sm font-medium text-white">Client Edge</span>
<div className="flex flex-wrap justify-center gap-2">
<span className="text-[10px] font-mono text-[#ffffff60] bg-[#ffffff05] border border-[#ffffff08] px-2 py-1 rounded">React Server Components</span>
<span className="text-[10px] font-mono text-[#ffffff60] bg-[#ffffff05] border border-[#ffffff08] px-2 py-1 rounded">TailwindCSS</span>
</div>
</div>

<div className="hidden md:flex items-center justify-center w-8">
<iconify-icon className="text-xl text-[#ffffff40]" icon="solar:arrow-right-linear"></iconify-icon>
</div>

<div className="flex flex-col gap-3 items-center w-full md:w-1/3 z-10">
<div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#7c3aed]/20 to-transparent border border-[#7c3aed]/40 flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.1)]">
<iconify-icon className="text-2xl text-[#7c3aed]" icon="solar:server-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-sm font-medium text-white">API Gateway</span>
<div className="flex flex-wrap justify-center gap-2">
<span className="text-[10px] font-mono text-[#7c3aed] bg-[#7c3aed]/10 px-2 py-1 rounded">GraphQL API</span>
<span className="text-[10px] font-mono text-[#00f2a0] bg-[#00f2a0]/10 px-2 py-1 rounded flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-[#00f2a0] animate-pulse"></span> SSE Stream</span>
</div>
</div>

<div className="hidden md:flex items-center justify-center w-8">
<iconify-icon className="text-xl text-[#ffffff40]" icon="solar:arrow-right-linear"></iconify-icon>
</div>

<div className="flex flex-col gap-3 items-center w-full md:w-1/3 z-10">
<div className="w-16 h-16 rounded-xl bg-[#16162a] border border-[#ffffff1a] flex items-center justify-center shadow-lg">
<iconify-icon className="text-2xl text-slate-200" icon="solar:database-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-sm font-medium text-white">Data Core</span>
<div className="flex flex-wrap justify-center gap-2">
<span className="text-[10px] font-mono text-[#ffffff60] bg-[#ffffff05] border border-[#ffffff08] px-2 py-1 rounded">Go Microservices</span>
<span className="text-[10px] font-mono text-[#ffffff60] bg-[#ffffff05] border border-[#ffffff08] px-2 py-1 rounded">TimescaleDB</span>
</div>
</div>

<div className="md:hidden absolute left-1/2 top-16 bottom-16 w-px bg-[#ffffff08] -translate-x-1/2"></div>
</div>
</section>

<section className="scroll-section flex flex-col gap-6" id="dashboard">
<div className="flex items-center justify-between border-b border-[#ffffff08] pb-4">
<div className="flex items-center gap-3">
<div className="p-1.5 rounded bg-[#ffffff05] border border-[#ffffff08]">
<iconify-icon className="text-lg text-slate-200" icon="solar:widget-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-col">
<h2 className="text-xl font-medium tracking-tight text-white">Dashboard Layout</h2>
<p className="text-xs font-light text-[#ffffff60]">12-column responsive bento grid specification</p>
</div>
</div>

<label className="flex items-center gap-2 cursor-pointer group">
<span className="text-xs font-light text-[#ffffff60] group-hover:text-slate-200 transition-colors">Edit Mode</span>
<div className="relative">
<input className="sr-only peer" id="editToggle" onchange="toggleEditMode()" type="checkbox"/>
<div className="w-8 h-4 bg-[#16162a] border border-[#ffffff1a] rounded-full peer peer-checked:bg-[#7c3aed] peer-checked:border-[#7c3aed] transition-colors"></div>
<div className="absolute left-[2px] top-[2px] bg-[#ffffff60] peer-checked:bg-white w-3 h-3 rounded-full transition-all peer-checked:translate-x-4 shadow-sm"></div>
</div>
</label>
</div>

<div className="p-4 md:p-6 bg-[#0f0f1a] border border-[#ffffff08] rounded-2xl relative">

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] opacity-50 rounded-2xl pointer-events-none"></div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 relative z-10 transition-all duration-300" id="bentoGrid">

<div className="col-span-1 md:col-span-6 bg-[#16162a] border border-[#ffffff08] rounded-xl p-5 flex flex-col justify-between min-h-[160px] group hover:border-[#ffffff1a] transition-all cursor-default relative">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium text-[#ffffff60] flex items-center gap-1.5">
<iconify-icon icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon> Total Value
                                </span>
<div className="flex items-center gap-1 text-[10px] font-mono text-[#00f2a0] bg-[#00f2a0]/10 px-1.5 py-0.5 rounded">
<span className="w-1 h-1 rounded-full bg-[#00f2a0] animate-pulse"></span> Live
                                </div>
</div>
<div>
<div className="text-3xl font-medium tracking-tight text-white">$142,894.20</div>
<div className="flex items-center gap-2 mt-1">
<span className="text-sm font-medium text-[#00f2a0] flex items-center">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="2"></iconify-icon> 2.4%
                                    </span>
<span className="text-xs font-light text-[#ffffff40]">+$3,421.50 (24h)</span>
</div>
</div>

<div className="w-full h-8 mt-4 flex items-end gap-0.5 opacity-60">
<div className="w-full bg-gradient-to-t from-[#00f2a0]/0 to-[#00f2a0]/20 h-full relative rounded-sm">
<svg className="absolute inset-0 w-full h-full" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0 80 Q 20 70, 40 50 T 80 40 L 100 20 L 100 100 L 0 100 Z" fill="url(#grad)" opacity="0.2"></path>
<path d="M0 80 Q 20 70, 40 50 T 80 40 L 100 20" fill="none" stroke="#00f2a0" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
<defs>
<lineargradient id="grad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#00f2a0" stop-opacity="1"></stop>
<stop offset="100%" stop-color="#00f2a0" stop-opacity="0"></stop>
</lineargradient>
</defs>
</svg>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-6 bg-[#16162a] border border-[#ffffff08] rounded-xl p-5 flex flex-col min-h-[160px] group hover:border-[#ffffff1a] transition-all cursor-default">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-[#f59e0b] flex items-center justify-center text-[8px] text-black font-bold">₿</div>
<span className="text-xs font-medium text-slate-200">Bitcoin</span>
<span className="text-[10px] font-mono text-[#ffffff40]">BTC/USD</span>
</div>
<span className="text-sm font-medium text-white">$97,234.00</span>
</div>
<div className="flex-1 flex flex-col justify-end">

<div className="flex items-end gap-[2px] h-16 w-full mt-2">
<div className="w-full bg-transparent flex justify-between items-end h-full">
<div className="w-1.5 bg-[#ff4d6d] h-[40%] rounded-sm"></div>
<div className="w-1.5 bg-[#00f2a0] h-[55%] rounded-sm"></div>
<div className="w-1.5 bg-[#ff4d6d] h-[30%] rounded-sm"></div>
<div className="w-1.5 bg-[#00f2a0] h-[45%] rounded-sm"></div>
<div className="w-1.5 bg-[#00f2a0] h-[60%] rounded-sm"></div>
<div className="w-1.5 bg-[#ff4d6d] h-[50%] rounded-sm"></div>
<div className="w-1.5 bg-[#00f2a0] h-[70%] rounded-sm"></div>
<div className="w-1.5 bg-[#00f2a0] h-[85%] rounded-sm"></div>
<div className="w-1.5 bg-[#ff4d6d] h-[75%] rounded-sm"></div>
<div className="w-1.5 bg-[#00f2a0] h-[95%] rounded-sm shadow-[0_0_8px_rgba(0,242,160,0.5)] relative">

<div className="absolute -left-12 top-0 w-24 h-px bg-[#ffffff20] pointer-events-none"></div>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-4 bg-[#16162a] border border-[#ffffff08] rounded-xl p-5 flex flex-col items-center justify-center min-h-[140px] group hover:border-[#ffffff1a] transition-all relative overflow-hidden">
<span className="absolute top-4 left-4 text-xs font-medium text-[#ffffff60]">Market Mood</span>
<div className="relative mt-4">

<svg className="w-24 h-12" viewbox="0 0 100 50">
<path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#ffffff1a" strokeLinecap="round" strokeWidth="6"></path>
<path className="drop-shadow-[0_0_4px_rgba(0,242,160,0.5)]" d="M 10 50 A 40 40 0 0 1 75 15" fill="none" stroke="#00f2a0" strokeLinecap="round" strokeWidth="6"></path>
</svg>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
<span className="text-xl font-medium tracking-tight text-white">72</span>
<span className="text-[10px] uppercase tracking-widest text-[#00f2a0] mt-0.5">Greed</span>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-4 bg-[#16162a] border border-[#ffffff08] rounded-xl p-5 flex items-center gap-4 min-h-[140px] group hover:border-[#ffffff1a] transition-all">
<div className="relative w-16 h-16 shrink-0">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 36 36">
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#ffffff1a" strokeWidth="3"></path>
<path className="drop-shadow-[0_0_3px_rgba(245,158,11,0.5)]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#f59e0b" stroke-dasharray="52, 100" strokeWidth="3"></path>
</svg>
<div className="absolute inset-0 flex items-center justify-center text-[10px] font-medium text-slate-200">52%</div>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-[#ffffff60]">BTC Dominance</span>
<div className="flex items-center gap-1.5 mt-1">
<span className="text-lg font-medium tracking-tight text-white">52.4%</span>
<span className="text-[10px] font-medium text-[#00f2a0] bg-[#00f2a0]/10 px-1 py-0.5 rounded flex items-center">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="2"></iconify-icon> 0.2
                                    </span>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-4 grid grid-rows-2 gap-4">

<div className="bg-[#16162a] border border-[#ffffff08] rounded-xl p-4 flex items-center justify-between group hover:border-[#ffffff1a] transition-all">
<div className="flex flex-col gap-1">
<span className="text-[10px] uppercase tracking-widest text-[#ffffff40]">Top Sector</span>
<span className="text-sm font-medium text-slate-200">DeFi Bluechips</span>
</div>
<span className="text-sm font-medium text-[#00f2a0] bg-[#00f2a0]/5 px-2 py-1 rounded-md border border-[#00f2a0]/10">+4.2%</span>
</div>

<div className="bg-[#16162a] border border-[#ffffff08] rounded-xl p-4 flex items-center justify-between group hover:border-[#ffffff1a] hover:bg-[#ffffff05] transition-all cursor-pointer" onclick="showToast('Opening alerts center...')">
<div className="flex items-center gap-3">
<div className="p-1.5 rounded-full bg-[#7c3aed]/10 relative">
<iconify-icon className="text-sm text-[#7c3aed]" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#ff4d6d] rounded-full border border-[#16162a]"></span>
</div>
<div className="flex flex-col">
<span className="text-[10px] text-[#ffffff60] font-light">Active Alerts</span>
<span className="text-sm font-medium text-slate-200">3 Triggered</span>
</div>
</div>
<iconify-icon className="text-xs text-[#ffffff40] group-hover:text-slate-200 transition-colors" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-section flex flex-col gap-6" id="analytics">
<div className="flex items-center gap-3 border-b border-[#ffffff08] pb-4">
<div className="p-1.5 rounded bg-[#ffffff05] border border-[#ffffff08]">
<iconify-icon className="text-lg text-slate-200" icon="solar:chart-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-col">
<h2 className="text-xl font-medium tracking-tight text-white">Asset Analytics View</h2>
</div>
</div>
<div className="bg-[#0f0f1a] border border-[#ffffff08] rounded-2xl overflow-hidden flex flex-col">

<div className="p-4 border-b border-[#ffffff08] flex flex-wrap gap-4 items-center justify-between bg-[#16162a]/50">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#627eea] flex items-center justify-center">
<iconify-icon className="text-white text-lg" icon="mdi:ethereum"></iconify-icon>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="text-base font-medium text-white">Ethereum</span>
<span className="text-xs font-mono text-[#ffffff60]">ETH</span>
</div>
<span className="text-[10px] text-[#ffffff40]">Layer 1 Smart Contract</span>
</div>
</div>
<div className="flex items-center gap-6">
<div className="flex flex-col items-end">
<span className="text-xs text-[#ffffff40]">Price</span>
<span className="text-sm font-medium text-white">$3,421.90</span>
</div>
<div className="flex flex-col items-end">
<span className="text-xs text-[#ffffff40]">24h Vol</span>
<span className="text-sm font-medium text-white">$14.2B</span>
</div>
<div className="flex flex-col items-end hidden md:flex">
<span className="text-xs text-[#ffffff40]">Market Cap</span>
<span className="text-sm font-medium text-white">$410.5B</span>
</div>
</div>
</div>

<div className="h-[300px] w-full relative p-4 flex flex-col justify-end border-b border-[#ffffff08]">

<div className="absolute inset-0 flex flex-col justify-between p-4 pointer-events-none opacity-20">
<div className="w-full h-px bg-[#ffffff1a]"></div>
<div className="w-full h-px bg-[#ffffff1a]"></div>
<div className="w-full h-px bg-[#ffffff1a]"></div>
<div className="w-full h-px bg-[#ffffff1a]"></div>
<div className="w-full h-px bg-[#ffffff1a]"></div>
</div>

<svg className="w-full h-[80%] absolute bottom-0 left-0" preserveaspectratio="none" viewbox="0 0 1000 300">
<path d="M0 250 C 100 240, 200 150, 300 200 C 400 250, 500 100, 600 180 C 700 260, 800 80, 900 120 L 1000 50 L 1000 300 L 0 300 Z" fill="url(#chartGrad)" opacity="0.1"></path>
<path className="drop-shadow-[0_0_8px_rgba(124,58,237,0.5)]" d="M0 250 C 100 240, 200 150, 300 200 C 400 250, 500 100, 600 180 C 700 260, 800 80, 900 120 L 1000 50" fill="none" stroke="#7c3aed" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
<defs>
<lineargradient id="chartGrad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#7c3aed" stop-opacity="1"></stop>
<stop offset="100%" stop-color="#7c3aed" stop-opacity="0"></stop>
</lineargradient>
</defs>
</svg>

<div className="absolute right-1/3 top-10 flex flex-col items-center">
<div className="bg-[#16162a] border border-[#ffffff1a] px-3 py-2 rounded-lg shadow-xl mb-2 flex flex-col gap-1 z-10">
<span className="text-[10px] text-[#ffffff60]">Oct 24, 14:30</span>
<span className="text-sm font-medium text-white">$3,501.20</span>
</div>
<div className="w-px h-[200px] bg-[#ffffff20] border-l border-dashed border-[#ffffff40]"></div>
<div className="w-2 h-2 rounded-full bg-[#7c3aed] border-2 border-[#16162a] absolute bottom-[200px] -ml-[0.5px]"></div>
</div>
</div>
</div>
</section>

<section className="scroll-section flex flex-col gap-6" id="portfolio">
<div className="flex items-center gap-3 border-b border-[#ffffff08] pb-4">
<div className="p-1.5 rounded bg-[#ffffff05] border border-[#ffffff08]">
<iconify-icon className="text-lg text-slate-200" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-col">
<h2 className="text-xl font-medium tracking-tight text-white">Portfolio Engine</h2>
</div>
</div>
<div className="bg-[#0f0f1a] border border-[#ffffff08] rounded-2xl p-6 flex flex-col gap-8">

<div className="flex flex-col gap-3">
<div className="flex items-center justify-between text-xs">
<span className="font-medium text-slate-200">Asset Allocation</span>
<span className="text-[#ffffff60] font-light">Tax Lot: <span className="text-white font-mono bg-[#ffffff05] px-1 rounded">HIFO</span></span>
</div>
<div className="w-full h-2.5 rounded-full overflow-hidden flex bg-[#16162a] border border-[#ffffff08]">
<div className="h-full w-[45%] bg-[#f59e0b] hover:opacity-80 transition-opacity cursor-pointer" title="Bitcoin: 45%"></div>
<div className="h-full w-[30%] bg-[#627eea] hover:opacity-80 transition-opacity cursor-pointer" title="Ethereum: 30%"></div>
<div className="h-full w-[15%] bg-[#00f2a0] hover:opacity-80 transition-opacity cursor-pointer" title="Solana: 15%"></div>
<div className="h-full w-[10%] bg-[#ffffff20] hover:opacity-80 transition-opacity cursor-pointer" title="Stables: 10%"></div>
</div>
<div className="flex items-center gap-4 text-[10px] text-[#ffffff60]">
<div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#f59e0b]"></span> BTC 45%</div>
<div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#627eea]"></span> ETH 30%</div>
<div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#00f2a0]"></span> SOL 15%</div>
</div>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="text-xs text-[#ffffff40] border-b border-[#ffffff08]">
<th className="pb-3 font-medium px-2">Asset</th>
<th className="pb-3 font-medium text-right px-2">Balance</th>
<th className="pb-3 font-medium text-right px-2">Value (USD)</th>
<th className="pb-3 font-medium text-right px-2">24h P&amp;L</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="border-b border-[#ffffff05] hover:bg-[#ffffff02] transition-colors group">
<td className="py-4 px-2">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-[#f59e0b] flex items-center justify-center text-[10px] text-black font-bold">₿</div>
<span className="font-medium text-slate-200">Bitcoin</span>
</div>
</td>
<td className="py-4 px-2 text-right font-mono text-[#ffffff80]">1.2400</td>
<td className="py-4 px-2 text-right font-medium text-white">$120,569.76</td>
<td className="py-4 px-2 text-right text-[#00f2a0] font-medium">+$2,104.50</td>
</tr>
<tr className="hover:bg-[#ffffff02] transition-colors group">
<td className="py-4 px-2">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-[#627eea] flex items-center justify-center">
<iconify-icon className="text-white text-xs" icon="mdi:ethereum"></iconify-icon>
</div>
<span className="font-medium text-slate-200">Ethereum</span>
</div>
</td>
<td className="py-4 px-2 text-right font-mono text-[#ffffff80]">23.500</td>
<td className="py-4 px-2 text-right font-medium text-white">$80,414.65</td>
<td className="py-4 px-2 text-right text-[#ff4d6d] font-medium">-$412.20</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="scroll-section flex flex-col gap-6" id="screener">
<div className="flex items-center gap-3 border-b border-[#ffffff08] pb-4">
<div className="p-1.5 rounded bg-[#ffffff05] border border-[#ffffff08]">
<iconify-icon className="text-lg text-slate-200" icon="solar:filters-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-col">
<h2 className="text-xl font-medium tracking-tight text-white">Market Screener</h2>
</div>
</div>
<div className="flex flex-col gap-4">

<div className="flex flex-wrap items-center gap-3 bg-[#0f0f1a] border border-[#ffffff08] rounded-xl p-3">

<div className="relative group">
<div className="bg-[#16162a] border border-[#ffffff1a] rounded-lg px-3 py-1.5 flex items-center gap-2 cursor-pointer hover:border-[#ffffff33] transition-colors" onclick="toggleDropdown('sectorDropdown')">
<span className="text-xs font-light text-[#ffffff60]">Sector:</span>
<span className="text-xs font-medium text-slate-200" id="selectedSector">DeFi</span>
<iconify-icon className="text-[10px] text-[#ffffff40] ml-1" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="hidden absolute top-full left-0 mt-2 w-36 bg-[#16162a] border border-[#ffffff1a] rounded-lg shadow-xl z-20 py-1 overflow-hidden" id="sectorDropdown">
<div className="px-3 py-2 text-xs text-slate-200 hover:bg-[#ffffff05] cursor-pointer" onclick="selectSector('DeFi')">DeFi</div>
<div className="px-3 py-2 text-xs text-[#ffffff60] hover:bg-[#ffffff05] hover:text-slate-200 cursor-pointer" onclick="selectSector('L1/L2')">L1/L2</div>
<div className="px-3 py-2 text-xs text-[#ffffff60] hover:bg-[#ffffff05] hover:text-slate-200 cursor-pointer" onclick="selectSector('Gaming')">Gaming</div>
</div>
</div>

<label className="bg-[#16162a] border border-[#ffffff1a] rounded-lg px-3 py-1.5 flex items-center gap-2 cursor-pointer hover:border-[#ffffff33] transition-colors">
<span className="text-xs font-light text-[#ffffff60]">Vol &gt; $10M</span>
<div className="relative">
<input checked="" className="sr-only peer" id="volFilter" onchange="toggleVolFilter()" type="checkbox"/>
<div className="w-6 h-3 bg-[#ffffff1a] rounded-full peer peer-checked:bg-[#7c3aed] transition-colors"></div>
<div className="absolute left-[2px] top-[2px] bg-[#ffffff60] peer-checked:bg-white w-2 h-2 rounded-full transition-all peer-checked:translate-x-3 shadow-sm"></div>
</div>
</label>

<button className="flex items-center justify-center w-8 h-8 rounded-lg border border-dashed border-[#ffffff20] text-[#ffffff40] hover:text-white hover:border-[#ffffff40] transition-colors ml-auto focus:outline-none" onclick="showToast('Add new filter metric...')">
<iconify-icon icon="solar:add-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="bg-[#0f0f1a] border border-[#ffffff08] rounded-xl overflow-hidden">
<table className="w-full text-left text-sm border-collapse">
<thead className="bg-[#16162a]/50 text-xs text-[#ffffff60] border-b border-[#ffffff08]">
<tr>
<th className="py-3 px-4 font-medium">Asset</th>
<th className="py-3 px-4 font-medium text-right">Price</th>
<th className="py-3 px-4 font-medium text-right hidden sm:table-cell">Market Cap</th>
<th className="py-3 px-4 font-medium text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-[#ffffff05]" id="screenerTable">
<tr className="hover:bg-[#ffffff02] transition-colors row-item" data-vol="high">
<td className="py-3 px-4">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded bg-[#2a2a4a] text-white flex items-center justify-center text-[10px] font-bold">U</div>
<div className="flex flex-col">
<span className="font-medium text-slate-200 leading-none">Uniswap</span>
<span className="text-[10px] text-[#ffffff40]">UNI</span>
</div>
</div>
</td>
<td className="py-3 px-4 text-right font-mono text-white">$7.82</td>
<td className="py-3 px-4 text-right font-mono text-[#ffffff60] hidden sm:table-cell">$4.6B</td>
<td className="py-3 px-4 text-right">
<button className="text-[10px] font-medium text-[#7c3aed] bg-[#7c3aed]/10 px-2 py-1 rounded hover:bg-[#7c3aed]/20 transition-colors focus:outline-none" onclick="showToast('Trade UNI initiated')">Trade</button>
</td>
</tr>
<tr className="hover:bg-[#ffffff02] transition-colors row-item" data-vol="high">
<td className="py-3 px-4">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded bg-[#2a2a4a] text-white flex items-center justify-center text-[10px] font-bold">A</div>
<div className="flex flex-col">
<span className="font-medium text-slate-200 leading-none">Aave</span>
<span className="text-[10px] text-[#ffffff40]">AAVE</span>
</div>
</div>
</td>
<td className="py-3 px-4 text-right font-mono text-white">$104.20</td>
<td className="py-3 px-4 text-right font-mono text-[#ffffff60] hidden sm:table-cell">$1.5B</td>
<td className="py-3 px-4 text-right">
<button className="text-[10px] font-medium text-[#7c3aed] bg-[#7c3aed]/10 px-2 py-1 rounded hover:bg-[#7c3aed]/20 transition-colors focus:outline-none" onclick="showToast('Trade AAVE initiated')">Trade</button>
</td>
</tr>
<tr className="hover:bg-[#ffffff02] transition-colors row-item hidden" data-vol="low">
<td className="py-3 px-4">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded bg-[#2a2a4a] text-white flex items-center justify-center text-[10px] font-bold">S</div>
<div className="flex flex-col">
<span className="font-medium text-slate-200 leading-none">Sushi</span>
<span className="text-[10px] text-[#ffffff40]">SUSHI</span>
</div>
</div>
</td>
<td className="py-3 px-4 text-right font-mono text-white">$1.12</td>
<td className="py-3 px-4 text-right font-mono text-[#ffffff60] hidden sm:table-cell">$240M</td>
<td className="py-3 px-4 text-right">
<button className="text-[10px] font-medium text-[#7c3aed] bg-[#7c3aed]/10 px-2 py-1 rounded hover:bg-[#7c3aed]/20 transition-colors focus:outline-none" onclick="showToast('Trade SUSHI initiated')">Trade</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="scroll-section flex flex-col gap-6" id="intelligence">
<div className="flex items-center gap-3 border-b border-[#ffffff08] pb-4">
<div className="p-1.5 rounded bg-[#ffffff05] border border-[#ffffff08]">
<iconify-icon className="text-lg text-slate-200" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-col">
<h2 className="text-xl font-medium tracking-tight text-white">Intelligence Layer</h2>
</div>
</div>
<div className="bg-[#0f0f1a] border border-[#ffffff08] rounded-2xl p-4 flex flex-col gap-4 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7c3aed] to-[#00f2a0]"></div>

<div className="flex flex-col gap-4 mt-2 max-h-[300px] overflow-y-auto pr-2" id="chatHistory">

<div className="flex gap-3 justify-end animate-fade-in">
<div className="bg-[#16162a] border border-[#ffffff08] rounded-2xl rounded-tr-none p-3 text-sm text-slate-200 font-light max-w-[80%]">
                                Summarize the recent unusual options activity for ETH.
                            </div>
</div>

<div className="flex gap-3 animate-fade-in">
<div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#00f2a0] flex items-center justify-center shrink-0">
<iconify-icon className="text-white text-[10px]" icon="solar:stars-linear"></iconify-icon>
</div>
<div className="bg-[#ffffff05] border border-[#ffffff08] rounded-2xl rounded-tl-none p-4 text-sm text-[#ffffff80] font-light max-w-[90%] leading-relaxed flex flex-col gap-3">
<p>Over the last 4 hours, there's been a significant spike in <strong className="text-white font-medium">ETH call options</strong> expiring this Friday.</p>
<ul className="list-disc pl-4 space-y-1 text-[#ffffff60]">
<li>Volume is 3.4x the 30-day average.</li>
<li>Concentrated mostly at the $3,600 strike price.</li>
</ul>
<div className="flex items-center gap-2 mt-2">
<span className="text-[10px] border border-[#00f2a0]/30 bg-[#00f2a0]/5 text-[#00f2a0] px-2 py-1 rounded">Bullish Signal</span>
</div>
</div>
</div>
</div>

<div className="mt-4 relative">
<input className="w-full bg-[#16162a] border border-[#ffffff1a] rounded-xl pl-4 pr-10 py-3 text-sm text-white placeholder-[#ffffff40] outline-none focus:border-[#7c3aed] transition-colors" id="chatInput" onkeypress="handleChat(event)" placeholder="Ask the intelligence layer..." type="text"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-[#ffffff05] hover:bg-[#ffffff1a] transition-colors flex items-center justify-center text-[#ffffff60] hover:text-[#7c3aed] focus:outline-none" onclick="submitChat()">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="scroll-section flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8" id="pipeline">
<div className="flex flex-col gap-6 flex-1">
<div className="flex items-center gap-3 border-b border-[#ffffff08] pb-4">
<div className="p-1.5 rounded bg-[#ffffff05] border border-[#ffffff08]">
<iconify-icon className="text-lg text-slate-200" icon="solar:database-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-xl font-medium tracking-tight text-white">Data Pipeline Contract</h2>
</div>
<div className="prose prose-invert prose-sm">
<p className="text-sm font-light text-[#ffffff80] leading-relaxed">
                            Any external API (CoinGecko, Binance) must be transformed to an internal schema in the proxy layer. This decouples the UI from external provider changes.
                        </p>
</div>

<div className="rounded-xl overflow-hidden border border-[#ffffff1a] bg-[#0a0a14] relative text-sm group">
<div className="flex items-center justify-between px-4 py-2 border-b border-[#ffffff08] bg-[#0f0f1a]">
<span className="text-[10px] font-mono text-[#ffffff60]">types/market.ts</span>
<button className="text-[10px] font-mono text-[#ffffff40] hover:text-white transition-colors flex items-center gap-1 opacity-0 group-hover:opacity-100 focus:outline-none" onclick="copyCode(this)">
<iconify-icon icon="solar:copy-linear" strokeWidth="1.5"></iconify-icon> <span className="copy-text">Copy</span>
</button>
</div>
<div className="p-4 overflow-x-auto">
<pre className="font-mono text-xs leading-relaxed text-[#e2e8f0]" id="codeContent">
<span className="text-[#7c3aed]">type</span> <span className="text-slate-200">NormalizedAsset</span> = {
  <span className="text-[#ffffff60]">id:</span> <span className="text-[#00f2a0]">string</span>;           <span className="text-[#ffffff40] italic">// coingecko slug</span>
  <span className="text-[#ffffff60]">symbol:</span> <span className="text-[#00f2a0]">string</span>;       <span className="text-[#ffffff40] italic">// uppercase ticker</span>
  <span className="text-[#ffffff60]">name:</span> <span className="text-[#00f2a0]">string</span>;
  <span className="text-[#ffffff60]">price:</span> {
    <span className="text-[#ffffff60]">usd:</span> <span className="text-[#00f2a0]">number</span>;
    <span className="text-[#ffffff60]">btc:</span> <span className="text-[#00f2a0]">number</span>;
    <span className="text-[#ffffff60]">change_24h:</span> <span className="text-[#00f2a0]">number</span>;
  };
  <span className="text-[#ffffff60]">volume_24h_usd:</span> <span className="text-[#00f2a0]">number</span>;
  <span className="text-[#ffffff60]">last_updated:</span> <span className="text-[#00f2a0]">string</span>; <span className="text-[#ffffff40] italic">// ISO timestamp</span>
};
</pre>
</div>
</div>
</div>

<div className="flex-1 bg-[#0f0f1a] border border-[#ffffff08] rounded-xl p-6 flex flex-col gap-5">
<h3 className="text-sm font-medium text-slate-200 flex items-center gap-2">
<iconify-icon icon="solar:history-linear" strokeWidth="1.5"></iconify-icon>
                        Three-Tier Freshness Model
                    </h3>
<div className="flex flex-col gap-4">

<div className="flex gap-4 items-start">
<div className="w-2 h-2 rounded-full bg-[#ffffff40] mt-1.5 shrink-0"></div>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-slate-200">Tier 1: Static</span>
<span className="text-[10px] font-mono text-[#ffffff40] bg-[#ffffff08] px-1.5 rounded">3-24h</span>
</div>
<span className="text-xs font-light text-[#ffffff60]">Asset metadata, sector definitions. SSG with on-demand revalidation.</span>
</div>
</div>

<div className="flex gap-4 items-start">
<div className="w-2 h-2 rounded-full bg-[#f59e0b] mt-1.5 shrink-0 drop-shadow-[0_0_4px_rgba(245,158,11,0.3)]"></div>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-slate-200">Tier 2: Warm Cache</span>
<span className="text-[10px] font-mono text-[#f59e0b] bg-[#f59e0b]/10 px-1.5 rounded">60-180s</span>
</div>
<span className="text-xs font-light text-[#ffffff60]">OHLC candles, volumes. Server-side RSC with revalidate intervals.</span>
</div>
</div>

<div className="flex gap-4 items-start">
<div className="w-2 h-2 rounded-full bg-[#00f2a0] mt-1.5 shrink-0 drop-shadow-[0_0_6px_rgba(0,242,160,0.5)] relative">
<div className="absolute inset-0 rounded-full bg-[#00f2a0] animate-ping opacity-20"></div>
</div>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-slate-200">Tier 3: Live Edge</span>
<span className="text-[10px] font-mono text-[#00f2a0] bg-[#00f2a0]/10 px-1.5 rounded">&lt; 5s</span>
</div>
<span className="text-xs font-light text-[#ffffff60]">Order books, prices. SSE (Server-Sent Events) preferred over raw WebSockets.</span>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-section flex flex-col gap-6" id="security">
<div className="flex items-center gap-3 border-b border-[#ffffff08] pb-4">
<div className="p-1.5 rounded bg-[#ffffff05] border border-[#ffffff08]">
<iconify-icon className="text-lg text-slate-200" icon="solar:shield-keyhole-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-col">
<h2 className="text-xl font-medium tracking-tight text-white">Security &amp; Access</h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-[#0f0f1a] border border-[#ffffff08] rounded-xl p-6 flex flex-col gap-4">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium text-slate-200">API Keys</h3>
<button className="text-[10px] font-medium text-black bg-white px-2 py-1 rounded hover:bg-slate-200 transition-colors focus:outline-none" onclick="generateApiKey()">Generate New</button>
</div>
<div className="flex flex-col gap-3" id="apiKeyList">
<div className="bg-[#16162a] border border-[#ffffff08] rounded-lg p-3 flex items-center justify-between group">
<div className="flex flex-col gap-1">
<span className="text-xs text-slate-200">Production Key</span>
<span className="text-[10px] font-mono text-[#ffffff40]">pk_live_*******************</span>
</div>
<button className="text-[#ffffff40] hover:text-[#ff4d6d] transition-colors opacity-0 group-hover:opacity-100 focus:outline-none" onclick="deleteApiKey(this)">
<iconify-icon icon="solar:trash-bin-trash-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="bg-[#0f0f1a] border border-[#ffffff08] rounded-xl p-6 flex flex-col gap-4">
<h3 className="text-sm font-medium text-slate-200">Access Policies</h3>
<div className="flex flex-col gap-4">

<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="text-xs text-slate-200">Enforce MFA</span>
<span className="text-[10px] text-[#ffffff60]">Require TOTP for all team members</span>
</div>
<label className="relative cursor-pointer">
<input checked="" className="sr-only peer" onchange="showToast(this.checked ? 'MFA Enforced' : 'MFA Disabled')" type="checkbox"/>
<div className="w-8 h-4 bg-[#16162a] border border-[#ffffff1a] rounded-full peer peer-checked:bg-[#00f2a0]/20 peer-checked:border-[#00f2a0]/50 transition-colors"></div>
<div className="absolute left-[2px] top-[2px] bg-[#ffffff60] peer-checked:bg-[#00f2a0] w-3 h-3 rounded-full transition-all peer-checked:translate-x-4 shadow-sm"></div>
</label>
</div>

<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="text-xs text-slate-200">IP Whitelisting</span>
<span className="text-[10px] text-[#ffffff60]">Restrict API calls to specific IPs</span>
</div>
<label className="relative cursor-pointer">
<input className="sr-only peer" onchange="showToast(this.checked ? 'IP Whitelisting Enabled' : 'IP Whitelisting Disabled')" type="checkbox"/>
<div className="w-8 h-4 bg-[#16162a] border border-[#ffffff1a] rounded-full peer peer-checked:bg-[#00f2a0]/20 peer-checked:border-[#00f2a0]/50 transition-colors"></div>
<div className="absolute left-[2px] top-[2px] bg-[#ffffff60] peer-checked:bg-[#00f2a0] w-3 h-3 rounded-full transition-all peer-checked:translate-x-4 shadow-sm"></div>
</label>
</div>
</div>
</div>
</div>
</section>

<section className="flex flex-col gap-6">
<div className="flex items-center justify-between border-b border-[#ffffff08] pb-4">
<div className="flex items-center gap-3">
<div className="p-1.5 rounded bg-[#ffffff05] border border-[#ffffff08]">
<iconify-icon className="text-lg text-slate-200" icon="solar:checklist-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-xl font-medium tracking-tight text-white">Tier Feature Matrix</h2>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse text-sm min-w-[600px]">
<thead>
<tr className="border-b border-[#ffffff1a]">
<th className="py-3 px-4 font-medium text-[#ffffff60] w-1/4">Feature Capability</th>
<th className="py-3 px-4 font-medium text-slate-200 w-1/4 bg-[#ffffff02]">Free</th>
<th className="py-3 px-4 font-medium text-[#7c3aed] w-1/4 bg-[#7c3aed]/5 border-x border-[#7c3aed]/10 relative">
<div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#7c3aed] to-transparent opacity-50"></div>
                                    Pro <span className="text-[10px] font-light text-[#ffffff60] ml-1">$29/mo</span>
</th>
<th className="py-3 px-4 font-medium text-slate-200 w-1/4 bg-[#ffffff02]">Institutional</th>
</tr>
</thead>
<tbody className="font-light text-[#ffffff80]">
<tr className="border-b border-[#ffffff08] hover:bg-[#ffffff05] transition-colors">
<td className="py-3 px-4">Data Freshness</td>
<td className="py-3 px-4">5 min cached</td>
<td className="py-3 px-4 text-slate-200 bg-[#7c3aed]/[0.02] border-x border-[#7c3aed]/5">30 sec warm</td>
<td className="py-3 px-4 text-[#00f2a0]">Real-time SSE</td>
</tr>
<tr className="border-b border-[#ffffff08] hover:bg-[#ffffff05] transition-colors">
<td className="py-3 px-4">Portfolio Snapshots</td>
<td className="py-3 px-4">30 days history</td>
<td className="py-3 px-4 text-slate-200 bg-[#7c3aed]/[0.02] border-x border-[#7c3aed]/5">1 year history</td>
<td className="py-3 px-4">Unlimited</td>
</tr>
<tr className="border-b border-[#ffffff08] hover:bg-[#ffffff05] transition-colors">
<td className="py-3 px-4">Price Alerts</td>
<td className="py-3 px-4">5 max</td>
<td className="py-3 px-4 text-slate-200 bg-[#7c3aed]/[0.02] border-x border-[#7c3aed]/5">50 max</td>
<td className="py-3 px-4">Unlimited</td>
</tr>
<tr className="border-b border-[#ffffff08] hover:bg-[#ffffff05] transition-colors">
<td className="py-3 px-4">Alert Channels</td>
<td className="py-3 px-4">In-app only</td>
<td className="py-3 px-4 text-slate-200 bg-[#7c3aed]/[0.02] border-x border-[#7c3aed]/5">Email + Webhook</td>
<td className="py-3 px-4">All + Telegram</td>
</tr>
<tr className="border-b border-[#ffffff08] hover:bg-[#ffffff05] transition-colors">
<td className="py-3 px-4">AI Risk Summaries</td>
<td className="py-3 px-4 text-[#ffffff40]"><iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon></td>
<td className="py-3 px-4 text-slate-200 bg-[#7c3aed]/[0.02] border-x border-[#7c3aed]/5">50 calls/day</td>
<td className="py-3 px-4">Unlimited</td>
</tr>
<tr className="hover:bg-[#ffffff05] transition-colors">
<td className="py-3 px-4 rounded-bl-xl">Tax Lot Engine (HIFO)</td>
<td className="py-3 px-4 text-[#ffffff40]"><iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon></td>
<td className="py-3 px-4 text-slate-200 bg-[#7c3aed]/[0.02] border-x border-[#7c3aed]/5 border-b-0"><iconify-icon className="text-[#7c3aed]" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon></td>
<td className="py-3 px-4 rounded-br-xl"><iconify-icon className="text-slate-200" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon></td>
</tr>
</tbody>
</table>
</div>
</section>

<footer className="mt-8 pt-8 border-t border-[#ffffff08] text-center flex flex-col items-center gap-4 pb-12">
<div className="flex items-center gap-2 text-xs text-[#ffffff40] font-mono">
<iconify-icon icon="solar:code-circle-linear" strokeWidth="1.5"></iconify-icon>
                    System Architecture Document
                </div>
<p className="text-xs font-light text-[#ffffff60] max-w-md">
                    "This person understands that architecture is a series of tradeoffs, not a checklist."
                </p>
</footer>
</div>
</main>


<div className="hidden fixed inset-0 z-[60] flex items-start justify-center pt-20 px-4" id="searchModal">
<div className="fixed inset-0 bg-[#080810]/80 backdrop-blur-sm" onclick="closeSearch()"></div>
<div className="relative bg-[#0f0f1a] border border-[#ffffff1a] rounded-xl w-full max-w-lg shadow-2xl overflow-hidden animate-slide-up">
<div className="flex items-center gap-3 px-4 py-3 border-b border-[#ffffff08]">
<iconify-icon className="text-[#ffffff60]" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
<input autocomplete="off" className="flex-1 bg-transparent text-sm text-white placeholder-[#ffffff40] outline-none" id="searchInput" placeholder="Search documentation..." type="text"/>
<kbd className="font-mono text-[10px] bg-[#ffffff08] px-1.5 py-0.5 rounded text-[#ffffff60]">ESC</kbd>
</div>
<div className="p-2 flex flex-col gap-1">
<div className="px-3 py-1.5 text-xs font-medium text-[#ffffff40] uppercase tracking-wider">Quick Links</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#ffffff05] text-sm text-slate-200 transition-colors" href="#dashboard" onclick="closeSearch()">
<iconify-icon className="text-[#ffffff40]" icon="solar:widget-linear" strokeWidth="1.5"></iconify-icon> Dashboard Layout
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#ffffff05] text-sm text-slate-200 transition-colors" href="#pipeline" onclick="closeSearch()">
<iconify-icon className="text-[#ffffff40]" icon="solar:database-linear" strokeWidth="1.5"></iconify-icon> Data Pipeline Schema
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#ffffff05] text-sm text-slate-200 transition-colors" href="#security" onclick="closeSearch()">
<iconify-icon className="text-[#ffffff40]" icon="solar:shield-keyhole-linear" strokeWidth="1.5"></iconify-icon> API Keys &amp; Security
                </a>
</div>
</div>
</div>

<div className="fixed bottom-6 right-6 z-[70] flex flex-col gap-3 pointer-events-none" id="toastContainer"></div>



    </>
  );
}
