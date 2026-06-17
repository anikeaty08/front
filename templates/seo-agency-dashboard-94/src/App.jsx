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



        // Global App State
        const AppData = {
            currentUser: null,
            clients: [
                {
                    id: 1,
                    name: 'Demo Ajans',
                    user: 'demo',
                    pass: '1234',
                    domain: 'demoajans.com',
                    traffic: [850, 920, 1100, 1050, 1400, 1650, 1800, 2100, 2050, 2400, 2700, 3100],
                    keywords: [
                        { k: 'seo ajansı', i: 'C', v: 5400, kd: 72, cpc: 12.50, p: 3, u: '/seo' },
                        { k: 'dijital pazarlama', i: 'I', v: 12000, kd: 45, cpc: 4.20, p: 5, u: '/hizmetler' },
                        { k: 'google reklamları', i: 'T', v: 8000, kd: 85, cpc: 25.00, p: 2, u: '/ads' },
                        { k: 'kurumsal kimlik', i: 'I', v: 2200, kd: 30, cpc: 3.10, p: 1, u: '/tasarim' },
                        { k: 'web tasarım fiyatları', i: 'C', v: 4500, kd: 65, cpc: 8.90, p: 9, u: '/fiyatlar' },
                        { k: 'mobil uygulama', i: 'T', v: 9000, kd: 55, cpc: 15.00, p: 7, u: '/app' },
                    ]
                }
            ]
        };

        // --- AUTH SYSTEM ---
        function handleUnifiedLogin() {
            const user = document.getElementById('login-user').value.trim();
            const pass = document.getElementById('login-pass').value.trim();
            const errorMsg = document.getElementById('login-error');

            // 1. Check Admin
            if (user === 'admin' && pass === '1234') {
                errorMsg.classList.add('hidden-view');
                document.getElementById('view-login').classList.add('hidden-view');
                document.getElementById('view-admin').classList.remove('hidden-view');
                renderAdminList();
                return;
            }

            // 2. Check Clients
            const foundClient = AppData.clients.find(c => c.user === user && c.pass === pass);
            if (foundClient) {
                errorMsg.classList.add('hidden-view');
                AppData.currentUser = foundClient;
                document.getElementById('view-login').classList.add('hidden-view');
                initDashboard(foundClient);
                return;
            }

            // 3. Fail
            errorMsg.classList.remove('hidden-view');
        }

        function logout() {
            AppData.currentUser = null;
            document.getElementById('view-admin').classList.add('hidden-view');
            document.getElementById('view-dashboard').classList.add('hidden-view');
            document.getElementById('view-login').classList.remove('hidden-view');
            document.getElementById('login-user').value = '';
            document.getElementById('login-pass').value = '';
        }

        // --- ADMIN FUNCTIONS ---
        let selectedClientId = null;

        function renderAdminList() {
            const list = document.getElementById('admin-client-list');
            list.innerHTML = '';
            AppData.clients.forEach(client => {
                const isActive = selectedClientId === client.id;
                const div = document.createElement('div');
                div.className = `flex items-center justify-between px-3 py-2.5 rounded-md cursor-pointer text-xs font-medium transition-all ${isActive ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`;
                div.onclick = () => selectClient(client.id);
                div.innerHTML = `
                    <div class="flex items-center gap-3">
                        <div class="h-6 w-6 rounded bg-slate-200 text-slate-500 flex items-center justify-center font-bold text-[10px] uppercase">
                            ${client.name.substring(0,1)}
                        </div>
                        <span>${client.name}</span>
                    </div>
                `;
                list.appendChild(div);
            });
        }

        function selectClient(id) {
            selectedClientId = id;
            const client = AppData.clients.find(c => c.id === id);
            renderAdminList();

            document.getElementById('admin-empty-state').classList.add('hidden-view');
            document.getElementById('admin-client-detail').classList.remove('hidden-view');
            
            // Populate Details
            document.getElementById('detail-name').innerText = client.name;
            document.getElementById('detail-id').innerText = client.id;
            document.getElementById('detail-user').innerText = client.user;
            document.getElementById('detail-pass').innerText = client.pass;
            document.getElementById('detail-avatar').innerText = client.name.substring(0,1).toUpperCase();

            // Reset Badges
            resetBadge('traffic', client.traffic.length > 0);
            resetBadge('keywords', client.keywords.length > 0);
            resetBadge('backlinks', false); // Mock
        }

        function resetBadge(id, isActive) {
            const el = document.getElementById(`status-${id}`);
            if (isActive) {
                el.className = "text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-600";
                el.innerText = "YÜKLÜ";
            } else {
                el.className = "text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-500";
                el.innerText = "BOŞ";
            }
        }

        // Modal Logic
        function openModal(id) { document.getElementById(id).classList.remove('hidden-view'); }
        function closeModal(id) { document.getElementById(id).classList.add('hidden-view'); }

        function createClient() {
            const name = document.getElementById('new-name').value;
            const user = document.getElementById('new-user').value;
            const pass = document.getElementById('new-pass').value;

            if (name && user && pass) {
                const newClient = {
                    id: Date.now(),
                    name: name,
                    user: user,
                    pass: pass,
                    domain: name.toLowerCase().replace(' ', '') + '.com',
                    traffic: [],
                    keywords: []
                };
                AppData.clients.push(newClient);
                closeModal('modal-add-client');
                renderAdminList();
                // Select newly created client
                selectClient(newClient.id);
                // Clear inputs
                document.getElementById('new-name').value = '';
                document.getElementById('new-user').value = '';
                document.getElementById('new-pass').value = '';
                
                alert("Müşteri başarıyla oluşturuldu. Giriş bilgileri ile sisteme girebilirler.");
            } else {
                alert("Lütfen tüm alanları doldurun.");
            }
        }

        function deleteClient() {
            if (confirm("Bu kullanıcıyı silmek istediğinize emin misiniz?")) {
                AppData.clients = AppData.clients.filter(c => c.id !== selectedClientId);
                selectedClientId = null;
                renderAdminList();
                document.getElementById('admin-client-detail').classList.add('hidden-view');
                document.getElementById('admin-empty-state').classList.remove('hidden-view');
            }
        }

        function mockUpload(type) {
            const client = AppData.clients.find(c => c.id === selectedClientId);
            alert(`${type.toUpperCase()} dosyası işleniyor... (Simülasyon)`);
            setTimeout(() => {
                if(type === 'traffic') client.traffic = [100, 200, 300]; 
                if(type === 'keywords') client.keywords = [{k:'demo', v:100, kd:10, cpc:1, p:1, u:'/'}];
                resetBadge(type, true);
            }, 1000);
        }

        function previewDashboard() {
            const client = AppData.clients.find(c => c.id === selectedClientId);
            if(client) {
                document.getElementById('view-admin').classList.add('hidden-view');
                initDashboard(client);
            }
        }

        // --- CLIENT DASHBOARD LOGIC ---
        let chart1 = null;
        let chart2 = null;

        function initDashboard(client) {
            document.getElementById('view-dashboard').classList.remove('hidden-view');
            document.getElementById('dash-user-name').innerText = client.name;
            document.getElementById('dash-domain').innerText = client.domain;

            renderCharts(client);
            renderTable(client.keywords);
        }

        function renderCharts(client) {
            // Traffic Chart
            const ctx1 = document.getElementById('trafficChart').getContext('2d');
            if(chart1) chart1.destroy();
            
            const gradient = ctx1.createLinearGradient(0, 0, 0, 300);
            gradient.addColorStop(0, 'rgba(79, 70, 229, 0.1)');
            gradient.addColorStop(1, 'rgba(79, 70, 229, 0)');

            chart1 = new Chart(ctx1, {
                type: 'line',
                data: {
                    labels: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
                    datasets: [{
                        label: 'Organik Trafik',
                        data: client.traffic.length ? client.traffic : [0,0,0],
                        borderColor: '#4F46E5',
                        backgroundColor: gradient,
                        borderWidth: 2,
                        tension: 0.3,
                        pointRadius: 0,
                        pointHoverRadius: 6,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        x: { grid: { display: false }, ticks: { font: {size: 10} } },
                        y: { border: { display: false }, grid: { color: '#F1F5F9' }, ticks: { font: {size: 10} } }
                    }
                }
            });

            // Position Distribution Chart
            const ctx2 = document.getElementById('positionChart').getContext('2d');
            if(chart2) chart2.destroy();

            // Mock Distribution Data derived from keywords (or random for visual)
            chart2 = new Chart(ctx2, {
                type: 'doughnut',
                data: {
                    labels: ['Top 3', '4-10', '11-20', '21-50', '51+'],
                    datasets: [{
                        data: [15, 25, 20, 30, 10],
                        backgroundColor: ['#10B981', '#FBBF24', '#6366F1', '#94A3B8', '#E2E8F0'],
                        borderWidth: 0,
                        hoverOffset: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    cutout: '75%',
                    plugins: {
                        legend: { position: 'right', labels: { boxWidth: 10, font: { size: 10 } } }
                    }
                }
            });
        }

        function renderTable(keywords) {
            const tbody = document.getElementById('keywords-table-body');
            tbody.innerHTML = '';

            if(!keywords || keywords.length === 0) {
                tbody.innerHTML = '<tr><td colspan="7" class="px-6 py-4 text-center text-slate-400">Veri bulunamadı.</td></tr>';
                return;
            }

            keywords.forEach(kw => {
                let kdClass = 'kd-easy';
                if(kw.kd > 49) kdClass = 'kd-medium';
                if(kw.kd > 70) kdClass = 'kd-hard';

                let intentBadge = '';
                if(kw.i === 'C') intentBadge = '<span class="text-[9px] font-bold bg-blue-50 text-blue-600 px-1 rounded border border-blue-100">C</span>';
                if(kw.i === 'I') intentBadge = '<span class="text-[9px] font-bold bg-slate-100 text-slate-600 px-1 rounded border border-slate-200">I</span>';
                if(kw.i === 'T') intentBadge = '<span class="text-[9px] font-bold bg-amber-50 text-amber-600 px-1 rounded border border-amber-100">T</span>';

                tbody.innerHTML += `
                    <tr class="hover:bg-slate-50 transition-colors group">
                        <td class="px-6 py-3 font-medium text-slate-900">${kw.k}</td>
                        <td class="px-4 py-3 text-center" title="Intent">${intentBadge}</td>
                        <td class="px-4 py-3 text-right text-slate-600">${kw.v.toLocaleString()}</td>
                        <td class="px-4 py-3 text-center">
                            <span class="${kdClass} px-1.5 py-0.5 rounded text-[10px] font-bold">${kw.kd}</span>
                        </td>
                        <td class="px-4 py-3 text-right text-slate-600 text-xs">$${kw.cpc.toFixed(2)}</td>
                        <td class="px-4 py-3 text-center font-bold text-slate-800">${kw.p}</td>
                        <td class="px-6 py-3 text-xs text-slate-400 truncate max-w-[100px] group-hover:text-indigo-500">${kw.u}</td>
                    </tr>
                `;
            });
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
      

<div className="flex-1 flex flex-col z-50 bg-white w-full h-full pt-6 pr-6 pb-6 pl-6 relative items-center justify-center" id="view-login">
<div className="absolute top-8 left-8 flex items-center gap-2">
<div className="flex h-7 w-7 items-center justify-center rounded bg-slate-900 text-white shadow-md">
<iconify-icon icon="solar:graph-up-linear" width="16"></iconify-icon>
</div>
<span className="text-sm font-bold tracking-tight text-slate-900">SEO OS</span>
</div>
<div className="w-full max-w-[340px] animate-fade-in">
<div className="mb-8">
<h1 className="text-xl font-semibold tracking-tight text-slate-900">Giriş Yap</h1>
<p className="mt-2 text-xs text-slate-500">Panelinize erişmek için hesap bilgilerinizi girin.</p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); handleUnifiedLogin();">
<div className="">
<label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wide mb-1.5">Kullanıcı Adı</label>
<input className="block w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all" id="login-user" placeholder="admin" type="text"/>
</div>
<div className="">
<label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wide mb-1.5">Şifre</label>
<input className="block placeholder:text-slate-400 focus:bg-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all text-sm text-slate-900 bg-slate-50 w-full border-slate-200 border rounded-md pt-2.5 pr-3 pb-2.5 pl-3" id="login-pass" placeholder="1234" type="password"/>
</div>
<button className="w-full rounded-md bg-slate-900 py-2.5 text-xs font-semibold text-white hover:bg-slate-800 active:scale-[0.98] transition-all shadow-md shadow-slate-900/10 flex items-center justify-center gap-2" type="submit">
<span>Giriş Yap</span>
<iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</button>
</form>
<div className="hidden-view mt-4 p-3 rounded bg-rose-50 border border-rose-100 flex items-center gap-2" id="login-error">
<iconify-icon className="text-rose-600" icon="solar:danger-circle-linear"></iconify-icon>
<span className="text-xs text-rose-600 font-medium">Kullanıcı adı veya şifre hatalı.</span>
</div>
</div>
</div>

<div className="hidden-view h-screen flex overflow-hidden bg-white" id="view-admin">

<aside className="w-64 border-r border-slate-200 bg-slate-50/50 flex flex-col z-20">
<div className="h-14 flex items-center px-5 border-b border-slate-100">
<div className="flex items-center gap-2">
<div className="flex h-6 w-6 items-center justify-center rounded bg-indigo-600 text-white">
<iconify-icon icon="solar:crown-line-linear" width="14"></iconify-icon>
</div>
<span className="text-xs font-bold tracking-tight text-slate-900">YÖNETİCİ</span>
</div>
</div>
<div className="flex-1 overflow-y-auto custom-scroll py-4 px-3 space-y-6">
<div>
<div className="flex items-center justify-between mb-2 px-2">
<h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Müşteriler</h3>
<button className="text-indigo-600 hover:bg-indigo-50 p-1 rounded transition-colors" onclick="openModal('modal-add-client')" title="Yeni Müşteri Ekle">
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
</button>
</div>
<nav className="space-y-0.5" id="admin-client-list">

</nav>
</div>
</div>
<div className="p-3 border-t border-slate-200">
<button className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-xs font-medium text-slate-600 hover:text-rose-600 hover:bg-rose-50 transition-colors" onclick="logout()">
<iconify-icon icon="solar:logout-2-linear" width="14"></iconify-icon>
                    Çıkış Yap
                </button>
</div>
</aside>

<main className="flex-1 flex flex-col overflow-hidden bg-white relative">
<header className="h-14 flex items-center justify-between border-b border-slate-200 px-8 bg-white/80 backdrop-blur-md z-10">
<h2 className="text-sm font-semibold text-slate-900" id="admin-header-title">Müşteri Yönetimi</h2>
<div className="flex items-center gap-2 text-xs text-slate-500">
<iconify-icon className="text-emerald-500" icon="solar:shield-check-linear"></iconify-icon>
<span>Sistem Güvenli</span>
</div>
</header>
<div className="flex-1 overflow-y-auto custom-scroll p-8">

<div className="flex flex-col items-center justify-center h-full text-center opacity-60" id="admin-empty-state">
<iconify-icon className="text-slate-300 mb-4" icon="solar:users-group-rounded-linear" width="48"></iconify-icon>
<h3 className="text-sm font-medium text-slate-900">Müşteri Seçilmedi</h3>
<p className="text-xs text-slate-500 mt-1">İşlem yapmak için soldan bir müşteri seçin.</p>
</div>

<div className="hidden-view max-w-4xl mx-auto space-y-8 animate-fade-in" id="admin-client-detail">

<div className="bg-slate-50 rounded-lg border border-slate-200 p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded bg-white border border-slate-200 flex items-center justify-center text-lg font-bold text-slate-700 shadow-sm" id="detail-avatar">A</div>
<div>
<h1 className="text-base font-bold text-slate-900" id="detail-name">Şirket Adı</h1>
<div className="flex gap-3 text-xs text-slate-500 mt-0.5">
<span>ID: <span className="font-mono" id="detail-id">001</span></span>
<span className="text-slate-300">|</span>
<span>User: <span className="font-medium text-slate-700" id="detail-user">user</span></span>
<span className="text-slate-300">|</span>
<span>Pass: <span className="font-medium text-slate-700" id="detail-pass">***</span></span>
</div>
</div>
</div>
<div className="flex gap-2">
<button className="px-3 py-1.5 bg-white border border-slate-200 rounded text-xs font-medium text-slate-700 hover:border-indigo-300 hover:text-indigo-600 transition-all flex items-center gap-1.5 shadow-sm" onclick="previewDashboard()">
<iconify-icon icon="solar:eye-linear"></iconify-icon>
                                Önizle
                            </button>
<button className="px-3 py-1.5 bg-rose-50 border border-rose-100 rounded text-xs font-medium text-rose-600 hover:bg-rose-100 transition-all" onclick="deleteClient()">Sil</button>
</div>
</div>

<div>
<h3 className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-4 flex items-center gap-2">
<iconify-icon icon="solar:database-linear"></iconify-icon>
                            Veri Kaynakları
                        </h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="group relative rounded-lg border border-slate-200 bg-white p-4 hover:border-indigo-300 transition-all">
<div className="flex justify-between items-start mb-2">
<div className="p-1.5 rounded bg-indigo-50 text-indigo-600">
<iconify-icon icon="solar:chart-2-linear" width="18"></iconify-icon>
</div>
<span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-500" id="status-traffic">BOŞ</span>
</div>
<h4 className="text-sm font-semibold text-slate-900">Trafik Verisi</h4>
<p className="text-[11px] text-slate-500 mt-1 mb-3">Aylık organik trafik geçmişi.</p>
<label className="flex w-full cursor-pointer items-center justify-center rounded-md border border-dashed border-slate-300 py-2 text-xs font-medium text-slate-500 hover:bg-slate-50 hover:text-indigo-600 transition-colors">
<span>CSV Yükle</span>
<input className="hidden" onchange="mockUpload('traffic')" type="file"/>
</label>
</div>

<div className="group relative rounded-lg border border-slate-200 bg-white p-4 hover:border-indigo-300 transition-all">
<div className="flex justify-between items-start mb-2">
<div className="p-1.5 rounded bg-emerald-50 text-emerald-600">
<iconify-icon icon="solar:list-check-linear" width="18"></iconify-icon>
</div>
<span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-500" id="status-keywords">BOŞ</span>
</div>
<h4 className="text-sm font-semibold text-slate-900">Anahtar Kelimeler</h4>
<p className="text-[11px] text-slate-500 mt-1 mb-3">Sıralama, Hacim, KD, CPC.</p>
<label className="flex w-full cursor-pointer items-center justify-center rounded-md border border-dashed border-slate-300 py-2 text-xs font-medium text-slate-500 hover:bg-slate-50 hover:text-indigo-600 transition-colors">
<span>CSV Yükle</span>
<input className="hidden" onchange="mockUpload('keywords')" type="file"/>
</label>
</div>

<div className="group relative rounded-lg border border-slate-200 bg-white p-4 hover:border-indigo-300 transition-all">
<div className="flex justify-between items-start mb-2">
<div className="p-1.5 rounded bg-amber-50 text-amber-600">
<iconify-icon icon="solar:link-circle-linear" width="18"></iconify-icon>
</div>
<span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-500" id="status-backlinks">BOŞ</span>
</div>
<h4 className="text-sm font-semibold text-slate-900">Backlink / Değişim</h4>
<p className="text-[11px] text-slate-500 mt-1 mb-3">Referans domainler ve farklar.</p>
<label className="flex w-full cursor-pointer items-center justify-center rounded-md border border-dashed border-slate-300 py-2 text-xs font-medium text-slate-500 hover:bg-slate-50 hover:text-indigo-600 transition-colors">
<span>CSV Yükle</span>
<input className="hidden" onchange="mockUpload('backlinks')" type="file"/>
</label>
</div>
</div>
</div>
</div>
</div>
</main>
</div>

<div className="hidden-view h-screen flex flex-col bg-[#F8FAFC]" id="view-dashboard">

<nav className="sticky top-0 z-30 h-14 w-full bg-white border-b border-slate-200 px-6 flex items-center justify-between shadow-sm">
<div className="flex items-center gap-6">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-200">
<iconify-icon icon="solar:chart-square-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-bold tracking-tight text-slate-900">Analytics OS</span>
</div>
<div className="hidden md:flex h-5 w-px bg-slate-200"></div>
<div className="hidden md:flex items-center gap-2 text-xs font-medium text-slate-600 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
<iconify-icon icon="solar:globe-linear"></iconify-icon>
<span id="dash-domain">example.com</span>
</div>
</div>
<div className="flex items-center gap-4">
<span className="text-xs text-slate-500" id="dash-user-name">Kullanıcı</span>
<button className="text-slate-400 hover:text-rose-600 transition-colors" onclick="logout()">
<iconify-icon icon="solar:logout-linear" width="20"></iconify-icon>
</button>
</div>
</nav>

<main className="flex-1 overflow-y-auto custom-scroll p-6 md:p-8">
<div className="max-w-7xl mx-auto space-y-6 animate-fade-in">

<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
<div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
<div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-2">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> ORGANİK TRAFİK
                        </div>
<div className="flex items-end gap-2">
<span className="text-2xl font-bold text-slate-900">12.4K</span>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded mb-1 flex items-center">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> 12%
                            </span>
</div>
</div>
<div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
<div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-2">
<iconify-icon icon="solar:wad-of-money-linear"></iconify-icon> TRAFİK DEĞERİ
                        </div>
<div className="flex items-end gap-2">
<span className="text-2xl font-bold text-slate-900">$4.2K</span>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded mb-1 flex items-center">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> 5%
                            </span>
</div>
</div>
<div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
<div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-2">
<iconify-icon icon="solar:ranking-linear"></iconify-icon> TOP 3 KELİMELER
                        </div>
<div className="flex items-end gap-2">
<span className="text-2xl font-bold text-slate-900">142</span>
<span className="text-xs font-medium text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded mb-1 flex items-center">
<iconify-icon icon="solar:minus-circle-linear"></iconify-icon> 0%
                            </span>
</div>
</div>
<div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
<div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-2">
<iconify-icon icon="solar:link-linear"></iconify-icon> BACKLINKLER
                        </div>
<div className="flex items-end gap-2">
<span className="text-2xl font-bold text-slate-900">1.8K</span>
<span className="text-xs font-medium text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded mb-1 flex items-center">
<iconify-icon icon="solar:arrow-right-down-linear"></iconify-icon> 2%
                            </span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm p-5">
<div className="flex justify-between items-center mb-4">
<h3 className="text-sm font-bold text-slate-900">Organik Trafik Trendi</h3>
<div className="flex gap-2">
<button className="text-[10px] font-medium px-2 py-1 bg-slate-100 rounded text-slate-600">6 Ay</button>
<button className="text-[10px] font-medium px-2 py-1 text-slate-400 hover:text-slate-600">1 Yıl</button>
</div>
</div>
<div className="h-64 w-full">
<canvas id="trafficChart"></canvas>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
<h3 className="text-sm font-bold text-slate-900 mb-4">Pozisyon Dağılımı</h3>
<div className="h-64 w-full flex items-center justify-center">
<canvas id="positionChart"></canvas>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col">
<div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
<h3 className="text-sm font-bold text-slate-900">Organik Anahtar Kelimeler</h3>
<div className="flex gap-2">
<input className="px-3 py-1.5 text-xs border border-slate-200 rounded-md focus:outline-none focus:border-indigo-500 w-48" placeholder="Kelime ara..." type="text"/>
<button className="px-3 py-1.5 bg-indigo-600 text-white text-xs font-medium rounded-md shadow-sm hover:bg-indigo-700">Dışa Aktar</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse whitespace-nowrap">
<thead className="bg-slate-50/50 text-xs font-semibold text-slate-500">
<tr>
<th className="px-6 py-3 w-64">Keyword</th>
<th className="px-4 py-3 w-16 text-center">Intent</th>
<th className="px-4 py-3 text-right">Volume</th>
<th className="px-4 py-3 text-center">KD %</th>
<th className="px-4 py-3 text-right">CPC</th>
<th className="px-4 py-3 text-center">Pos.</th>
<th className="px-6 py-3">URL</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 text-sm" id="keywords-table-body">

</tbody>
</table>
</div>
<div className="p-4 border-t border-slate-100 bg-slate-50/30 flex justify-center">
<button className="text-xs font-medium text-slate-500 hover:text-indigo-600 transition-colors flex items-center gap-1">
                            Tüm sonuçları gör <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</main>
</div>

<div className="hidden-view fixed inset-0 z-50 flex items-center justify-center p-4" id="modal-add-client">
<div className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm transition-opacity" onclick="closeModal('modal-add-client')"></div>
<div className="animate-modal bg-white w-full max-w-sm rounded-xl pt-6 pr-6 pb-6 pl-6 relative shadow-2xl">
<h3 className="text-lg font-bold text-slate-900 mb-1">Yeni Müşteri</h3>
<p className="text-xs text-slate-500 mb-5">Müşteri paneli için erişim bilgileri.</p>
<div className="space-y-3">
<div>
<label className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Firma Adı</label>
<input className="w-full mt-1 border border-slate-200 rounded-md px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500" id="new-name" type="text"/>
</div>
<div>
<label className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Kullanıcı Adı (Giriş ID)</label>
<input className="w-full mt-1 border border-slate-200 rounded-md px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500" id="new-user" type="text"/>
</div>
<div>
<label className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Şifre</label>
<input className="w-full mt-1 border border-slate-200 rounded-md px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500" id="new-pass" type="text"/>
</div>
<button className="w-full bg-slate-900 text-white rounded-md py-2.5 text-xs font-bold uppercase tracking-wide mt-2 hover:bg-slate-800 transition-colors" onclick="createClient()">Hesabı Oluştur</button>
</div>
<button className="absolute top-4 right-4 text-slate-400 hover:text-slate-600" onclick="closeModal('modal-add-client')">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
</div>



    </>
  );
}
