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
neutral: {
50: '#F9FAFB',
100: '#F3F4F6',
200: '#E5E7EB',
300: '#D1D5DB',
400: '#9CA3AF',
500: '#6B7280',
600: '#4B5563',
700: '#374151',
800: '#1F2937',
900: '#111827',
}
},
boxShadow: {
'soft': '0 1px 2px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.02)',
'hover': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
},
transitionProperty: {
'width': 'width'
}
}
}
}



        // 1. Navigation Collapse Logic
        let isSidebarCollapsed = false;
        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            const icon = document.getElementById('sidebar-toggle-icon');
            
            isSidebarCollapsed = !isSidebarCollapsed;
            
            if (isSidebarCollapsed) {
                sidebar.classList.remove('sidebar-expanded');
                sidebar.classList.add('sidebar-collapsed');
                icon.setAttribute('icon', 'solar:alt-arrow-right-linear');
                
                // Add tooltips behavior implicitly by layout or JS libraries
                // For this prototype, the title attribute handles hover info
            } else {
                sidebar.classList.remove('sidebar-collapsed');
                sidebar.classList.add('sidebar-expanded');
                icon.setAttribute('icon', 'solar:alt-arrow-left-linear');
            }
        }

        // 2. Router Logic
        function router(pageId) {
            // Hide all sections
            document.querySelectorAll('.page-section').forEach(el => el.classList.add('hidden'));
            document.querySelectorAll('.page-section').forEach(el => el.classList.remove('fade-in'));
            
            // Show target
            const target = document.getElementById('page-' + pageId);
            if(target) {
                target.classList.remove('hidden');
                target.classList.add('fade-in');
            }

            // Update Header Title
            const titles = {
                'search': 'Otel Arama',
                'results': 'Arama Sonuçları',
                'details': 'Grand Hotel Wien',
                'bookings': 'Rezervasyonlar',
                'offers': 'Teklifler',
                'flights': 'Uçuş Talebi',
                'users': 'Kullanıcı Yönetimi',
                'support': 'Destek Merkezi',
                'profile': 'Profilim'
            };
            document.getElementById('page-title').innerText = titles[pageId] || 'Panel';

            // Active Nav State
            document.querySelectorAll('.nav-item').forEach(btn => {
                const isActive = btn.getAttribute('onclick').includes(pageId);
                if (isActive) {
                    btn.classList.add('bg-neutral-100', 'text-neutral-900');
                    btn.classList.remove('text-neutral-500');
                } else {
                    btn.classList.remove('bg-neutral-100', 'text-neutral-900');
                    btn.classList.add('text-neutral-500');
                }
            });
            
            document.getElementById('main-content').scrollTo(0,0);
        }

        // 3. Room Selection Logic (Sticky Summary Update)
        function selectRoom(id, name, price) {
            // Visual feedback on buttons
            document.querySelectorAll('.btn-select').forEach(btn => {
                btn.innerText = 'Seç';
                btn.className = 'btn-select px-4 py-2 bg-white border border-neutral-200 text-neutral-900 text-sm font-medium rounded-lg hover:bg-neutral-900 hover:text-white transition-colors';
            });
            
            const activeBtn = event.target;
            activeBtn.innerText = 'Seçildi';
            activeBtn.className = 'btn-select px-4 py-2 bg-neutral-900 text-white border border-neutral-900 text-sm font-medium rounded-lg transition-colors';

            // Update Summary
            document.getElementById('summary-empty').classList.add('hidden');
            document.getElementById('summary-content').classList.remove('hidden');
            document.getElementById('summary-room-name').innerText = name;
            document.getElementById('summary-room-price').innerText = price;
            document.getElementById('summary-total').innerText = price;
            
            // Enable Button
            document.getElementById('btn-continue').disabled = false;
        }

        // 4. View Toggle Logic (List vs Map)
        function toggleView(mode) {
            const listBtn = document.getElementById('btn-view-list');
            const mapBtn = document.getElementById('btn-view-map');
            const resultsContainer = document.getElementById('results-container');
            const mapContainer = document.getElementById('map-container');

            if (mode === 'list') {
                listBtn.classList.add('bg-neutral-900', 'text-white');
                listBtn.classList.remove('text-neutral-500');
                mapBtn.classList.remove('bg-neutral-900', 'text-white');
                mapBtn.classList.add('text-neutral-500');
                
                mapContainer.classList.add('hidden');
                resultsContainer.classList.remove('w-1/2');
                resultsContainer.classList.add('flex-1');
            } else {
                mapBtn.classList.add('bg-neutral-900', 'text-white');
                mapBtn.classList.remove('text-neutral-500');
                listBtn.classList.remove('bg-neutral-900', 'text-white');
                listBtn.classList.add('text-neutral-500');

                // Split View Logic
                resultsContainer.classList.remove('flex-1');
                resultsContainer.classList.add('w-1/2');
                mapContainer.classList.remove('hidden');
            }
        }

        // 5. Offer Basket Logic
        let offerCount = 0;
        function addToOffer() {
            offerCount++;
            const badge = document.getElementById('nav-offer-count');
            badge.innerText = offerCount;
            badge.classList.remove('hidden');
            
            // Show Toast
            const container = document.getElementById('toast-container');
            const toast = document.createElement('div');
            toast.className = 'bg-neutral-900 text-white text-sm font-medium px-4 py-3 rounded-lg shadow-hover flex items-center gap-3 fade-in min-w-[220px]';
            toast.innerHTML = `<iconify-icon icon="solar:check-circle-linear" class="text-green-400 text-lg"></iconify-icon> Teklife Eklendi`;
            
            container.appendChild(toast);
            setTimeout(() => {
                toast.style.opacity = '0';
                setTimeout(() => toast.remove(), 300);
            }, 2500);
        }

        // Initialize
        router('search');
    
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
      

<div className="fixed top-6 right-6 z-50 flex flex-col gap-3 pointer-events-none" id="toast-container"></div>

<aside className="sidebar-expanded bg-white border-r border-neutral-200 flex flex-col z-20 transition-all duration-300 relative shrink-0" id="sidebar">

<div className="h-16 flex items-center px-5 border-b border-neutral-100 overflow-hidden whitespace-nowrap">
<div className="flex items-center gap-3">
<div className="w-8 h-8 min-w-[32px] bg-neutral-900 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:buildings-2-bold" width="18"></iconify-icon>
</div>
<span className="logo-text text-sm font-semibold tracking-tight transition-opacity duration-300">NovaB2B</span>
</div>
</div>

<button className="absolute -right-3 top-[3.75rem] bg-white border border-neutral-200 rounded-full w-6 h-6 flex items-center justify-center shadow-soft text-neutral-500 hover:text-neutral-900 z-30" onclick="toggleSidebar()">
<iconify-icon icon="solar:alt-arrow-left-linear" id="sidebar-toggle-icon" width="14"></iconify-icon>
</button>

<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1 hide-scrollbar">
<button className="nav-item group w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900 transition-all" onclick="router('search')" title="Arama">
<iconify-icon className="min-w-[20px]" icon="solar:magnifer-linear" width="20"></iconify-icon>
<span className="nav-label whitespace-nowrap">Arama</span>
</button>
<button className="nav-item group w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900 transition-all" onclick="router('bookings')" title="Rezervasyonlar">
<iconify-icon className="min-w-[20px]" icon="solar:calendar-mark-linear" width="20"></iconify-icon>
<span className="nav-label whitespace-nowrap">Rezervasyonlar</span>
</button>
<button className="nav-item group w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900 transition-all" onclick="router('offers')" title="Teklifler">
<iconify-icon className="min-w-[20px]" icon="solar:file-text-linear" width="20"></iconify-icon>
<span className="nav-label whitespace-nowrap">Teklifler</span>
<span className="nav-label ml-auto bg-neutral-200 text-neutral-600 text-[10px] font-bold px-1.5 py-0.5 rounded-full hidden" id="nav-offer-count">0</span>
</button>
<button className="nav-item group w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900 transition-all" onclick="router('flights')" title="Uçuş Talebi">
<iconify-icon className="min-w-[20px]" icon="solar:plane-linear" width="20"></iconify-icon>
<span className="nav-label whitespace-nowrap">Uçuş Talebi</span>
</button>
<div className="pt-6 pb-2 nav-group-title">
<p className="px-3 text-[10px] font-semibold text-neutral-400 uppercase tracking-wider transition-opacity duration-300">Yönetim</p>
</div>
<button className="nav-item group w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900 transition-all" onclick="router('users')" title="Kullanıcılar">
<iconify-icon className="min-w-[20px]" icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
<span className="nav-label whitespace-nowrap">Kullanıcılar</span>
</button>
<button className="nav-item group w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900 transition-all" onclick="router('support')" title="Destek">
<iconify-icon className="min-w-[20px]" icon="solar:headset-help-linear" width="20"></iconify-icon>
<span className="nav-label whitespace-nowrap">Destek</span>
</button>
</nav>

<div className="p-3 border-t border-neutral-100 mt-auto">
<button className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-neutral-50 transition-colors text-left group" onclick="router('profile')" title="Profil">
<div className="w-8 h-8 min-w-[32px] rounded-full bg-neutral-200 flex items-center justify-center text-xs font-semibold text-neutral-600 ring-2 ring-white">
                    EK
                </div>
<div className="nav-label min-w-0 transition-opacity duration-300">
<p className="text-xs font-medium text-neutral-900 truncate">Emre Kaya</p>
<p className="text-[10px] text-neutral-500 truncate">Global Turizm</p>
</div>
</button>
</div>
</aside>

<div className="flex-1 flex flex-col h-full overflow-hidden relative bg-neutral-50">

<header className="h-16 flex items-center justify-between px-6 bg-white border-b border-neutral-200 z-10 shrink-0">

<div className="flex items-center gap-2">
<h2 className="text-sm font-semibold text-neutral-900 tracking-tight" id="page-title">Otel Arama</h2>
</div>

<div className="flex items-center gap-3">
<button className="h-8 px-3 rounded-md bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-xs font-medium text-neutral-600 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:wallet-linear"></iconify-icon>
                    Bakiye: 150.000 ₺
                </button>
<div className="h-4 w-px bg-neutral-200"></div>
<button className="relative p-2 text-neutral-400 hover:text-neutral-900 transition-colors rounded-full hover:bg-neutral-50">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-neutral-900 rounded-full border border-white"></span>
</button>
<button className="p-2 text-neutral-400 hover:text-neutral-900 transition-colors rounded-full hover:bg-neutral-50">
<iconify-icon icon="solar:settings-linear" width="20"></iconify-icon>
</button>
</div>
</header>

<main className="flex-1 overflow-y-auto scroll-smooth relative" id="main-content">

<section className="page-section flex flex-col justify-center items-center h-full p-6" id="page-search">
<div className="w-full max-w-4xl space-y-8 -mt-20 fade-in">
<div className="text-center space-y-2">
<h1 className="text-3xl font-semibold tracking-tight text-neutral-900">B2B Rezervasyon Portalı</h1>
<p className="text-neutral-500 text-sm">Dünya genelinde 1.2M+ otel ve özel B2B oranları.</p>
</div>
<div className="bg-white p-2 rounded-2xl shadow-soft border border-neutral-200">
<div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-neutral-100">

<div className="flex-1 p-4 hover:bg-neutral-50 rounded-xl transition-colors cursor-pointer group">
<label className="block text-[10px] font-semibold text-neutral-400 uppercase tracking-wider mb-1.5">Nereye</label>
<div className="flex items-center gap-3">
<iconify-icon className="text-neutral-400 group-hover:text-neutral-900" icon="solar:map-point-linear" width="20"></iconify-icon>
<input className="w-full bg-transparent border-none p-0 text-sm font-medium text-neutral-900 placeholder-neutral-300 focus:ring-0 outline-none" placeholder="Şehir, Otel veya Bölge" type="text"/>
</div>
</div>

<div className="w-full md:w-72 p-4 hover:bg-neutral-50 rounded-xl transition-colors cursor-pointer group">
<label className="block text-[10px] font-semibold text-neutral-400 uppercase tracking-wider mb-1.5">Tarihler</label>
<div className="flex items-center gap-3">
<iconify-icon className="text-neutral-400 group-hover:text-neutral-900" icon="solar:calendar-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-neutral-900">24 Eki - 27 Eki (3 Gece)</span>
</div>
</div>

<div className="w-full md:w-56 p-4 hover:bg-neutral-50 rounded-xl transition-colors cursor-pointer group">
<label className="block text-[10px] font-semibold text-neutral-400 uppercase tracking-wider mb-1.5">Misafirler</label>
<div className="flex items-center gap-3">
<iconify-icon className="text-neutral-400 group-hover:text-neutral-900" icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-neutral-900">2 Yetişkin, 1 Oda</span>
</div>
</div>

<div className="p-2 flex items-center">
<button className="w-full md:w-auto h-14 px-8 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl flex items-center justify-center gap-2 shadow-soft hover:shadow-hover transition-all active:scale-95" onclick="router('results')">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
<span className="font-medium text-sm">Ara</span>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden h-full flex flex-col" id="page-results">

<div className="bg-white border-b border-neutral-200 sticky top-0 z-30 shadow-sm">
<div className="max-w-[1600px] mx-auto">

<div className="px-6 py-3 flex items-center justify-between gap-4 border-b border-neutral-100">
<div className="flex items-center gap-6 text-sm">
<div className="flex items-center gap-2 text-neutral-900 font-medium">
<iconify-icon className="text-neutral-900" icon="solar:map-point-bold"></iconify-icon>
                                    Viyana, Avusturya
                                </div>
<div className="h-4 w-px bg-neutral-200"></div>
<div className="text-neutral-600">24 Eki - 27 Eki • 3 Gece</div>
<div className="h-4 w-px bg-neutral-200"></div>
<div className="text-neutral-600">2 Yetişkin, 1 Oda</div>
</div>
<div className="flex gap-3">
<button className="text-xs font-medium text-neutral-900 hover:underline" onclick="router('search')">Aramayı Düzenle</button>
<button className="text-xs font-medium text-neutral-500 hover:text-neutral-900" onclick="router('search')">Yeni Arama</button>
</div>
</div>

<div className="px-6 py-2.5 flex items-center justify-between bg-neutral-50/50">
<div className="flex items-center gap-3">
<span className="text-xs font-semibold text-neutral-900">128 Otel</span>
<div className="flex gap-2">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded border border-neutral-200 bg-white text-[10px] font-medium text-neutral-600">
                                        5 Yıldız <button className="hover:text-red-500"><iconify-icon icon="solar:close-circle-linear"></iconify-icon></button>
</span>
</div>
</div>
<div className="flex items-center gap-4">

<div className="relative group">
<button className="flex items-center gap-2 text-xs font-medium text-neutral-700 hover:text-neutral-900">
<iconify-icon icon="solar:sort-vertical-linear" width="14"></iconify-icon>
                                        Önerilen
                                    </button>
</div>
<div className="h-4 w-px bg-neutral-200"></div>

<div className="flex bg-white rounded-lg border border-neutral-200 p-0.5">
<button className="px-3 py-1 rounded-md text-xs font-medium bg-neutral-900 text-white shadow-sm transition-all flex items-center gap-1" id="btn-view-list" onclick="toggleView('list')">
<iconify-icon icon="solar:list-linear"></iconify-icon> Liste
                                    </button>
<button className="px-3 py-1 rounded-md text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-all flex items-center gap-1" id="btn-view-map" onclick="toggleView('map')">
<iconify-icon icon="solar:map-linear"></iconify-icon> Harita
                                    </button>
</div>
</div>
</div>
</div>
</div>

<div className="flex-1 overflow-hidden relative">
<div className="h-full flex max-w-[1600px] mx-auto">

<aside className="w-64 flex-shrink-0 border-r border-neutral-200 bg-white overflow-y-auto hidden md:block pb-20">
<div className="p-5 space-y-6">
<div className="flex justify-between items-center">
<h3 className="text-sm font-semibold text-neutral-900">Filtreler</h3>
<button className="text-[10px] font-medium text-neutral-500 hover:text-neutral-900">Temizle</button>
</div>

<details className="group" open="">
<summary className="flex justify-between items-center cursor-pointer text-xs font-semibold text-neutral-900 mb-3">
                                        FİYAT ARALIĞI (Gecelik)
                                        <iconify-icon className="group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="space-y-4">
<div className="h-1 bg-neutral-200 rounded-full relative">
<div className="absolute left-0 right-1/3 top-0 bottom-0 bg-neutral-900 rounded-full"></div>
</div>
<div className="flex gap-2">
<input className="w-full border border-neutral-200 rounded px-2 py-1 text-xs text-center" placeholder="Min" type="number" value="1500"/>
<input className="w-full border border-neutral-200 rounded px-2 py-1 text-xs text-center" placeholder="Max" type="number" value="8000"/>
</div>
<label className="flex items-center gap-2 cursor-pointer">
<input className="w-3.5 h-3.5 rounded border-neutral-300 text-neutral-900 focus:ring-0 custom-checkbox" type="checkbox"/>
<span className="text-xs text-neutral-600">Vergiler Dahil</span>
</label>
</div>
</details>
<div className="h-px bg-neutral-100"></div>

<details className="group" open="">
<summary className="flex justify-between items-center cursor-pointer text-xs font-semibold text-neutral-900 mb-3">
                                        YILDIZ SAYISI
                                        <iconify-icon className="group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="flex gap-1">
<button className="flex-1 h-8 border border-neutral-200 rounded flex items-center justify-center text-xs hover:border-neutral-900 transition-colors">1</button>
<button className="flex-1 h-8 border border-neutral-200 rounded flex items-center justify-center text-xs hover:border-neutral-900 transition-colors">2</button>
<button className="flex-1 h-8 border border-neutral-200 rounded flex items-center justify-center text-xs hover:border-neutral-900 transition-colors">3</button>
<button className="flex-1 h-8 border border-neutral-200 rounded flex items-center justify-center text-xs hover:border-neutral-900 transition-colors">4</button>
<button className="flex-1 h-8 bg-neutral-900 text-white rounded flex items-center justify-center text-xs border border-neutral-900">5</button>
</div>
</details>
<div className="h-px bg-neutral-100"></div>

<details className="group" open="">
<summary className="flex justify-between items-center cursor-pointer text-xs font-semibold text-neutral-900 mb-3">
                                        PANSİYON TİPİ
                                        <iconify-icon className="group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="space-y-2">
<label className="flex items-center gap-2 cursor-pointer group/item">
<input className="custom-checkbox w-4 h-4 rounded border-neutral-300 text-neutral-900 focus:ring-0" type="checkbox"/>
<span className="text-xs text-neutral-600 group-hover/item:text-neutral-900">Sadece Oda</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group/item">
<input className="custom-checkbox w-4 h-4 rounded border-neutral-300 text-neutral-900 focus:ring-0" type="checkbox"/>
<span className="text-xs text-neutral-600 group-hover/item:text-neutral-900">Kahvaltı Dahil</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group/item">
<input className="custom-checkbox w-4 h-4 rounded border-neutral-300 text-neutral-900 focus:ring-0" type="checkbox"/>
<span className="text-xs text-neutral-600 group-hover/item:text-neutral-900">Her Şey Dahil</span>
</label>
</div>
</details>
</div>

<div className="sticky bottom-0 p-4 bg-white border-t border-neutral-200 z-10">
<button className="w-full py-2.5 bg-neutral-900 text-white text-xs font-semibold rounded-lg hover:bg-neutral-800 transition-colors">
                                    Filtreleri Uygula
                                </button>
</div>
</aside>

<div className="flex-1 bg-neutral-50 overflow-y-auto p-6 relative" id="results-container">
<div className="max-w-4xl mx-auto space-y-4">

<div className="bg-white border border-neutral-200 rounded-xl p-4 flex flex-col sm:flex-row gap-5 hover:shadow-hover hover:border-neutral-300 transition-all duration-200 group">

<div className="w-full sm:w-64 h-44 bg-neutral-200 rounded-lg overflow-hidden relative shrink-0 cursor-pointer" onclick="router('details')">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale-[10%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<span className="absolute top-2 left-2 bg-neutral-900/90 text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide">Fırsat</span>
</div>

<div className="flex-1 flex flex-col justify-between">
<div className="cursor-pointer" onclick="router('details')">
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-bold text-neutral-900 leading-tight group-hover:text-blue-600 transition-colors">Grand Hotel Wien</h3>
<div className="flex items-center gap-2 mt-1">
<div className="flex text-neutral-900 text-[10px]"><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon></div>
<span className="text-xs text-neutral-500">• Viyana Merkez</span>
<button className="text-[10px] font-medium text-neutral-900 underline">Haritada</button>
</div>
</div>
<div className="flex flex-col items-end">
<div className="flex items-center gap-1 bg-neutral-900 text-white px-1.5 py-0.5 rounded text-xs font-bold">9.4</div>
<span className="text-[10px] text-neutral-500 mt-0.5">240 Yorum</span>
</div>
</div>
<div className="flex gap-2 mt-3">
<span className="text-[10px] bg-neutral-50 text-neutral-600 px-2 py-1 rounded border border-neutral-100">İade Edilebilir</span>
<span className="text-[10px] bg-neutral-50 text-neutral-600 px-2 py-1 rounded border border-neutral-100">Kahvaltı Dahil</span>
</div>
</div>

<div className="flex justify-between items-end mt-4 pt-4 border-t border-neutral-100 border-dashed">
<div className="flex flex-col">
<span className="text-[10px] font-medium text-neutral-400">Toplam (Vergiler dahil)</span>
<div className="flex items-baseline gap-1.5">
<span className="text-xl font-bold text-neutral-900">12.450 ₺</span>
<span className="text-xs text-neutral-500 line-through decoration-neutral-300">14.200 ₺</span>
</div>
<span className="text-[10px] text-green-700 font-medium">Net: 11.200 ₺ + %11 Komisyon</span>
</div>
<div className="flex gap-2">
<button className="px-3 py-2 border border-neutral-200 rounded-lg text-neutral-500 hover:text-neutral-900 hover:border-neutral-900 transition-colors text-xs font-medium" onclick="addToOffer()" title="Teklife Ekle">
                                                    + Teklif
                                                </button>
<button className="px-5 py-2 bg-neutral-900 text-white text-sm font-medium rounded-lg hover:bg-neutral-800 transition-colors shadow-soft" onclick="router('details')">
                                                    Detaylar
                                                </button>
</div>
</div>
</div>
</div>

<div className="bg-white border border-neutral-200 rounded-xl p-4 flex flex-col sm:flex-row gap-5 hover:shadow-hover hover:border-neutral-300 transition-all duration-200 group">
<div className="w-full sm:w-64 h-44 bg-neutral-200 rounded-lg overflow-hidden relative shrink-0 cursor-pointer" onclick="router('details')">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale-[10%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="flex-1 flex flex-col justify-between">
<div className="cursor-pointer" onclick="router('details')">
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-bold text-neutral-900 leading-tight group-hover:text-blue-600 transition-colors">Hilton Vienna Park</h3>
<div className="flex items-center gap-2 mt-1">
<div className="flex text-neutral-900 text-[10px]"><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon></div>
<span className="text-xs text-neutral-500">• Stadtpark Yanı</span>
<button className="text-[10px] font-medium text-neutral-900 underline">Haritada</button>
</div>
</div>
<div className="flex flex-col items-end">
<div className="flex items-center gap-1 bg-neutral-900 text-white px-1.5 py-0.5 rounded text-xs font-bold">8.9</div>
<span className="text-[10px] text-neutral-500 mt-0.5">1,240 Yorum</span>
</div>
</div>
<div className="flex gap-2 mt-3">
<span className="text-[10px] bg-neutral-50 text-neutral-600 px-2 py-1 rounded border border-neutral-100">Sadece Oda</span>
<span className="text-[10px] bg-neutral-50 text-neutral-600 px-2 py-1 rounded border border-neutral-100">Spa</span>
</div>
</div>
<div className="flex justify-between items-end mt-4 pt-4 border-t border-neutral-100 border-dashed">
<div className="flex flex-col">
<span className="text-[10px] font-medium text-neutral-400">Toplam (Vergiler dahil)</span>
<div className="flex items-baseline gap-1.5">
<span className="text-xl font-bold text-neutral-900">9.850 ₺</span>
</div>
<span className="text-[10px] text-green-700 font-medium">Net: 8.900 ₺ + %10 Komisyon</span>
</div>
<div className="flex gap-2">
<button className="px-3 py-2 border border-neutral-200 rounded-lg text-neutral-500 hover:text-neutral-900 hover:border-neutral-900 transition-colors text-xs font-medium" onclick="addToOffer()" title="Teklife Ekle">
                                                    + Teklif
                                                </button>
<button className="px-5 py-2 bg-neutral-900 text-white text-sm font-medium rounded-lg hover:bg-neutral-800 transition-colors shadow-soft" onclick="router('details')">
                                                    Detaylar
                                                </button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden w-1/2 bg-map-pattern border-l border-neutral-200 relative" id="map-container">
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-white p-4 rounded-xl shadow-lg border border-neutral-200 text-center">
<iconify-icon className="text-neutral-900 text-4xl mb-2" icon="solar:map-point-bold-duotone"></iconify-icon>
<p className="text-sm font-medium text-neutral-900">Harita Modu</p>
<p className="text-xs text-neutral-500 mt-1">İnteraktif harita burada görüntülenecek.</p>
<button className="mt-3 px-4 py-2 bg-neutral-900 text-white text-xs rounded-lg">Bölgede Ara</button>
</div>
</div>

<div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
<div className="bg-neutral-900 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg group-hover:scale-110 transition-transform">12.450 ₺</div>
<div className="w-0 h-0 border-l-[6px] border-l-transparent border-t-[6px] border-t-neutral-900 border-r-[6px] border-r-transparent mx-auto"></div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden max-w-[1600px] mx-auto p-6 md:p-8" id="page-details">

<div className="flex flex-col gap-6 mb-8 fade-in">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
<div>
<button className="flex items-center gap-1 text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors mb-3" onclick="router('results')">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Sonuçlara Dön
                            </button>
<h1 className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight">Grand Hotel Wien</h1>
<div className="flex items-center gap-3 mt-2 text-sm text-neutral-600">
<div className="flex text-neutral-900 text-xs"><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon></div>
<span className="w-1 h-1 bg-neutral-300 rounded-full"></span>
<span className="underline decoration-dotted cursor-pointer hover:text-neutral-900">Kärntner Ring 9, 1010 Wien, Avusturya</span>
<span className="w-1 h-1 bg-neutral-300 rounded-full"></span>
<button className="flex items-center gap-1 text-neutral-900 font-medium text-xs"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Haritada Göster</button>
</div>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 bg-neutral-50 border border-neutral-100 px-3 py-1.5 rounded-lg">
<div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center text-sm font-bold">9.4</div>
<div className="flex flex-col">
<span className="text-xs font-bold text-neutral-900">Mükemmel</span>
<span className="text-[10px] text-neutral-500">240 yorum</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-4 md:grid-cols-5 gap-2 h-[320px] rounded-2xl overflow-hidden relative group">
<div className="col-span-2 md:col-span-3 h-full bg-neutral-200">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
<div className="col-span-2 md:col-span-1 grid grid-rows-2 gap-2 h-full">
<div className="bg-neutral-200 h-full"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/></div>
<div className="bg-neutral-200 h-full"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/></div>
</div>
<div className="hidden md:grid col-span-1 grid-rows-2 gap-2 h-full">
<div className="bg-neutral-200 h-full"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/></div>
<div className="relative bg-neutral-200 h-full cursor-pointer hover:opacity-90 transition-opacity">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute inset-0 bg-neutral-900/40 flex items-center justify-center text-white text-xs font-semibold backdrop-blur-[1px]">
                                    +24 Fotoğraf
                                </div>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">

<div className="lg:col-span-2 space-y-8">

<div className="flex flex-wrap gap-2 pb-6 border-b border-neutral-100">
<span className="px-3 py-1.5 rounded-full bg-neutral-50 border border-neutral-200 text-xs font-medium text-neutral-600 flex items-center gap-1.5"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Giriş 15:00</span>
<span className="px-3 py-1.5 rounded-full bg-neutral-50 border border-neutral-200 text-xs font-medium text-neutral-600 flex items-center gap-1.5"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Çıkış 12:00</span>
<span className="px-3 py-1.5 rounded-full bg-neutral-50 border border-neutral-200 text-xs font-medium text-neutral-600 flex items-center gap-1.5"><iconify-icon icon="solar:verified-check-linear"></iconify-icon> Anında Onay</span>
</div>

<div className="flex border-b border-neutral-200">
<button className="px-5 py-3 text-sm font-semibold text-neutral-900 border-b-2 border-neutral-900 -mb-px">Oda Seçenekleri</button>
<button className="px-5 py-3 text-sm font-medium text-neutral-500 hover:text-neutral-900">Özellikler</button>
<button className="px-5 py-3 text-sm font-medium text-neutral-500 hover:text-neutral-900">Kurallar</button>
<button className="px-5 py-3 text-sm font-medium text-neutral-500 hover:text-neutral-900">Harita</button>
</div>

<div className="bg-neutral-50 p-3 rounded-lg flex flex-wrap gap-3 items-center">
<div className="text-xs font-semibold text-neutral-500 uppercase mr-2">Filtrele:</div>
<label className="flex items-center gap-2 cursor-pointer bg-white px-3 py-1.5 rounded border border-neutral-200 hover:border-neutral-300">
<input className="custom-checkbox w-3.5 h-3.5 rounded" type="checkbox"/>
<span className="text-xs font-medium text-neutral-700">Ücretsiz İptal</span>
</label>
<label className="flex items-center gap-2 cursor-pointer bg-white px-3 py-1.5 rounded border border-neutral-200 hover:border-neutral-300">
<input className="custom-checkbox w-3.5 h-3.5 rounded" type="checkbox"/>
<span className="text-xs font-medium text-neutral-700">Kahvaltı Dahil</span>
</label>
<label className="flex items-center gap-2 cursor-pointer bg-white px-3 py-1.5 rounded border border-neutral-200 hover:border-neutral-300">
<input className="custom-checkbox w-3.5 h-3.5 rounded" type="checkbox"/>
<span className="text-xs font-medium text-neutral-700">2 Yatak</span>
</label>
</div>

<div className="space-y-6">

<div className="border border-neutral-200 rounded-xl overflow-hidden">
<div className="bg-neutral-50 p-4 border-b border-neutral-200 flex gap-4">
<img className="w-20 h-20 rounded object-cover bg-neutral-200" src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
<div>
<h3 className="font-bold text-neutral-900">Superior Oda, King Yatak</h3>
<p className="text-xs text-neutral-500 mt-1">35 m² • Şehir Manzaralı • Maks 2 Yetişkin</p>
<div className="flex gap-2 mt-2">
<span className="text-[10px] bg-white border border-neutral-200 px-1.5 py-0.5 rounded text-neutral-600">WiFi</span>
<span className="text-[10px] bg-white border border-neutral-200 px-1.5 py-0.5 rounded text-neutral-600">Klima</span>
<span className="text-[10px] bg-white border border-neutral-200 px-1.5 py-0.5 rounded text-neutral-600">Minibar</span>
</div>
</div>
</div>
<div className="divide-y divide-neutral-100">

<div className="p-4 hover:bg-neutral-50 transition-colors flex flex-col sm:flex-row justify-between items-center gap-4">
<div className="space-y-1.5">
<span className="text-sm font-semibold text-neutral-900 block">Sadece Oda</span>
<div className="flex items-center gap-2 text-xs text-green-700 font-medium">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> 23 Eki'ye kadar ücretsiz iptal
                                            </div>
<div className="flex items-center gap-2 text-xs text-neutral-500">
<iconify-icon icon="solar:card-linear"></iconify-icon> Şimdi öde
                                            </div>
</div>
<div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
<div className="text-right">
<span className="block text-lg font-bold text-neutral-900">10.500 ₺</span>
<span className="text-[10px] text-neutral-400">3 Gece Toplam</span>
</div>
<div className="flex gap-2">
<button className="p-2.5 rounded-lg border border-neutral-200 text-neutral-400 hover:text-neutral-900 hover:border-neutral-900 transition-colors" onclick="addToOffer()" title="Teklife Ekle">
<iconify-icon icon="solar:file-plus-linear" width="18"></iconify-icon>
</button>
<button className="btn-select px-4 py-2 bg-white border border-neutral-200 text-neutral-900 text-sm font-medium rounded-lg hover:bg-neutral-900 hover:text-white transition-colors" onclick="selectRoom('room1', 'Superior Oda - Sadece Oda', '10.500 ₺')">
                                                    Seç
                                                </button>
</div>
</div>
</div>

<div className="p-4 hover:bg-neutral-50 transition-colors flex flex-col sm:flex-row justify-between items-center gap-4">
<div className="space-y-1.5">
<span className="text-sm font-semibold text-neutral-900 block">Kahvaltı Dahil</span>
<div className="flex items-center gap-2 text-xs text-green-700 font-medium">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> 23 Eki'ye kadar ücretsiz iptal
                                            </div>
<div className="flex items-center gap-2 text-xs text-neutral-500">
<iconify-icon icon="solar:card-linear"></iconify-icon> Şimdi öde
                                            </div>
</div>
<div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
<div className="text-right">
<span className="block text-lg font-bold text-neutral-900">12.450 ₺</span>
<span className="text-[10px] text-neutral-400">3 Gece Toplam</span>
</div>
<div className="flex gap-2">
<button className="p-2.5 rounded-lg border border-neutral-200 text-neutral-400 hover:text-neutral-900 hover:border-neutral-900 transition-colors" onclick="addToOffer()" title="Teklife Ekle">
<iconify-icon icon="solar:file-plus-linear" width="18"></iconify-icon>
</button>
<button className="btn-select px-4 py-2 bg-white border border-neutral-200 text-neutral-900 text-sm font-medium rounded-lg hover:bg-neutral-900 hover:text-white transition-colors" onclick="selectRoom('room2', 'Superior Oda - Kahvaltı Dahil', '12.450 ₺')">
                                                    Seç
                                                </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-1">
<div className="sticky top-24 space-y-4">

<div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-soft">
<h3 className="text-sm font-semibold text-neutral-900 mb-4 pb-3 border-b border-neutral-100">Rezervasyon Özeti</h3>
<div className="space-y-4 text-sm">
<div className="grid grid-cols-2 gap-4">
<div>
<span className="text-[10px] text-neutral-400 uppercase font-semibold block mb-0.5">Giriş</span>
<span className="font-medium text-neutral-900">24 Eki, Per</span>
</div>
<div>
<span className="text-[10px] text-neutral-400 uppercase font-semibold block mb-0.5">Çıkış</span>
<span className="font-medium text-neutral-900">27 Eki, Paz</span>
</div>
</div>
<div className="py-4 text-center border-y border-dashed border-neutral-200 bg-neutral-50/50 rounded" id="summary-empty">
<span className="text-xs text-neutral-500 italic">Lütfen bir oda seçin</span>
</div>
<div className="hidden space-y-3 py-3 border-y border-dashed border-neutral-200" id="summary-content">
<div className="flex justify-between items-start">
<div>
<span className="font-semibold text-neutral-900 block text-xs" id="summary-room-name">Room Name</span>
<span className="text-[10px] text-neutral-500">2 Yetişkin, 3 Gece</span>
</div>
<span className="font-bold text-neutral-900" id="summary-room-price">0 ₺</span>
</div>
<div className="flex justify-between text-xs text-neutral-500">
<span>Vergiler &amp; Ücretler</span>
<span>Dahil</span>
</div>
</div>
<div className="flex justify-between items-center pt-2">
<span className="font-semibold text-neutral-900">Toplam</span>
<span className="text-xl font-bold text-neutral-900" id="summary-total">-</span>
</div>
<button className="w-full py-3 bg-neutral-900 disabled:bg-neutral-200 disabled:text-neutral-400 disabled:cursor-not-allowed text-white text-sm font-medium rounded-lg hover:bg-neutral-800 transition-all shadow-md" disabled="" id="btn-continue">
                                        Devam Et
                                    </button>
</div>
<div className="mt-3 text-center">
<p className="text-[10px] text-neutral-400">Fiyatlar dinamiktir ve değişebilir.</p>
</div>
</div>

<div className="bg-neutral-50 border border-neutral-200 rounded-lg p-3 flex gap-3 items-start">
<iconify-icon className="text-neutral-500 mt-0.5" icon="solar:info-circle-linear"></iconify-icon>
<p className="text-xs text-neutral-600 leading-relaxed">
                                    Bu otel için B2B oranlarında son 2 oda kalmıştır. İşlem süresi 15 dakikadır.
                                </p>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden p-6 text-center text-neutral-500" id="page-bookings">Rezervasyonlar sayfası...</section>
<section className="page-section hidden p-6 text-center text-neutral-500" id="page-offers">Teklifler sayfası...</section>
<section className="page-section hidden p-6 text-center text-neutral-500" id="page-flights">Uçuş sayfası...</section>
<section className="page-section hidden p-6 text-center text-neutral-500" id="page-users">Kullanıcılar sayfası...</section>
<section className="page-section hidden p-6 text-center text-neutral-500" id="page-support">Destek sayfası...</section>
<section className="page-section hidden p-6 text-center text-neutral-500" id="page-profile">Profil sayfası...</section>
</main>
</div>


    </>
  );
}
