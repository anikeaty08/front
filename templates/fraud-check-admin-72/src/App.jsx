import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- DATABASE & STATE ---
        // Initial Dummy Data
        let db = [
            { id: 1, bank: 'BCA', number: '1234567890', name: 'Budi Santoso', reports: 12, date: '2023-10-25', reason: 'Penipuan jual beli HP murah di IG, uang ditransfer barang tidak dikirim.' },
            { id: 2, bank: 'BRI', number: '0987654321', name: 'Siti Aminah', reports: 5, date: '2023-10-24', reason: 'Meminta DP sewa kontrakan lalu menghilang.' },
            { id: 3, bank: 'Mandiri', number: '1122334455', name: 'Toko Murah Jaya', reports: 2, date: '2023-10-20', reason: 'Barang tidak sesuai pesanan dan menolak refund.' },
            { id: 4, bank: 'Dana', number: '08123456789', name: 'Topup Game', reports: 3, date: '2023-10-26', reason: 'Jasa joki game palsu.' },
            { id: 5, bank: 'BCA', number: '5544332211', name: 'Admin Palsu', reports: 8, date: '2023-10-22', reason: 'Mengaku admin bank meminta OTP.' },
            { id: 6, bank: 'GoPay', number: '0899887766', name: 'Layanan CS', reports: 15, date: '2023-10-27', reason: 'Phishing link dikirim via WA.' },
        ];

        let state = {
            user: null, // 'admin' or null
            view: 'landing', // 'landing', 'login', 'dashboard'
            currentPage: 1,
            itemsPerPage: 5,
            itemToDelete: null
        };

        // --- AUTHENTICATION ---
        
        function navigateTo(view) {
            // Check Auth for Dashboard
            if (view === 'dashboard' && !state.user) {
                navigateTo('login');
                return;
            }
            if (view === 'login' && state.user) {
                navigateTo('dashboard');
                return;
            }

            // Hide all views
            ['view-landing', 'view-login', 'view-dashboard'].forEach(id => {
                document.getElementById(id).classList.add('hidden');
            });
            
            // Handle Navigation
            if (view === 'landing') {
                document.getElementById('public-nav').classList.remove('-translate-y-full');
                document.getElementById('view-landing').classList.remove('hidden');
            } else if (view === 'login') {
                document.getElementById('public-nav').classList.add('-translate-y-full');
                document.getElementById('view-login').classList.remove('hidden');
            } else if (view === 'dashboard') {
                document.getElementById('public-nav').classList.add('-translate-y-full');
                document.getElementById('view-dashboard').classList.remove('hidden');
                updateDashboardStats();
                renderTable();
            }

            state.view = view;
            window.scrollTo(0,0);
        }

        function handleAuth(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const errorDiv = document.getElementById('login-error');

            if (email === 'haikal@clapham.id' && password === '123456') {
                // Success
                state.user = { email: email, name: 'Admin' };
                errorDiv.classList.add('hidden');
                navigateTo('dashboard');
            } else {
                // Fail
                errorDiv.classList.remove('hidden');
                // Shake animation
                const form = e.target;
                form.classList.add('animate-[pulse_0.2s_ease-in-out_2]');
                setTimeout(() => form.classList.remove('animate-[pulse_0.2s_ease-in-out_2]'), 500);
            }
        }

        function handleLogout() {
            if(confirm('Apakah Anda yakin ingin keluar?')) {
                state.user = null;
                document.getElementById('email').value = '';
                document.getElementById('password').value = '';
                navigateTo('login');
            }
        }

        // --- PUBLIC SEARCH LOGIC ---

        function handleUserSearch() {
            const bank = document.getElementById('search-bank').value;
            const input = document.getElementById('search-input').value.trim();
            const container = document.getElementById('result-container');
            const safe = document.getElementById('result-safe');
            const danger = document.getElementById('result-danger');

            if (!input) {
                alert('Mohon masukkan nomor rekening');
                return;
            }

            // Loading State
            const btn = document.querySelector('button[onclick="handleUserSearch()"]');
            const oldText = btn.innerHTML;
            btn.innerHTML = '<iconify-icon icon="lucide:loader-2" class="animate-spin"></iconify-icon>';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerHTML = oldText;
                btn.disabled = false;
                container.classList.remove('hidden');

                // Search Algorithm
                const found = db.find(item => 
                    item.number === input && 
                    (bank === "" || item.bank.toLowerCase() === bank.toLowerCase())
                );

                document.querySelectorAll('.result-display-number').forEach(el => el.textContent = input);

                if (found) {
                    safe.classList.add('hidden');
                    danger.classList.remove('hidden');
                    
                    document.getElementById('result-name').textContent = found.name || 'Tidak diketahui';
                    document.getElementById('result-count').textContent = found.reports;
                    document.getElementById('result-date').textContent = formatDate(found.date);
                    document.getElementById('result-reason').textContent = found.reason || '-';
                    
                } else {
                    danger.classList.add('hidden');
                    safe.classList.remove('hidden');
                }
                
                container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

            }, 600); // Fake delay for realism
        }

        // --- ADMIN DASHBOARD LOGIC ---

        function updateDashboardStats() {
            // Count total reports (sum of all reports field)
            const totalReports = db.reduce((acc, curr) => acc + parseInt(curr.reports), 0);
            document.getElementById('stat-total-accounts').textContent = db.length;
            document.getElementById('stat-total-reports').textContent = totalReports;

            // Find Top Bank
            const bankCounts = {};
            db.forEach(item => {
                bankCounts[item.bank] = (bankCounts[item.bank] || 0) + 1;
            });
            const topBank = Object.entries(bankCounts).sort((a,b) => b[1] - a[1])[0];
            document.getElementById('stat-top-bank').textContent = topBank ? topBank[0] : '-';
        }

        function getFilteredData() {
            const query = document.getElementById('admin-search').value.toLowerCase();
            const bankFilter = document.getElementById('admin-filter-bank').value;

            return db.filter(item => {
                const matchesSearch = item.number.includes(query) || item.name.toLowerCase().includes(query);
                const matchesBank = bankFilter === "" || item.bank === bankFilter;
                return matchesSearch && matchesBank;
            }).sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date desc
        }

        function renderTable() {
            const tbody = document.getElementById('table-body');
            tbody.innerHTML = '';
            
            const filteredData = getFilteredData();
            document.getElementById('showing-count').textContent = filteredData.length;

            // Simple Pagination Logic
            const start = (state.currentPage - 1) * state.itemsPerPage;
            const paginatedData = filteredData.slice(start, start + state.itemsPerPage);

            if (paginatedData.length === 0) {
                document.getElementById('table-empty').classList.remove('hidden');
            } else {
                document.getElementById('table-empty').classList.add('hidden');
                
                paginatedData.forEach(item => {
                    const tr = document.createElement('tr');
                    tr.className = 'hover:bg-slate-50 transition-colors group';
                    tr.innerHTML = `
                        <td class="px-6 py-4">
                            <div class="flex flex-col">
                                <span class="font-medium text-slate-900">${item.bank}</span>
                                <span class="font-mono text-xs text-slate-500">${item.number}</span>
                            </div>
                        </td>
                        <td class="px-6 py-4 text-slate-700">${item.name || '-'}</td>
                        <td class="px-6 py-4">
                            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-50 text-red-700 border border-red-100">
                                <span class="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                                Penipuan
                            </span>
                        </td>
                        <td class="px-6 py-4">
                            <span class="text-sm font-semibold text-slate-900">${item.reports}</span> <span class="text-xs text-slate-500">x dilaporkan</span>
                        </td>
                        <td class="px-6 py-4 text-xs text-slate-500">
                            ${formatDate(item.date)}
                        </td>
                        <td class="px-6 py-4 text-right">
                            <div class="flex items-center justify-end gap-2">
                                <button onclick="openModal(${item.id})" class="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                                    <iconify-icon icon="lucide:pencil" width="16"></iconify-icon>
                                </button>
                                <button onclick="confirmDelete(${item.id})" class="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                    <iconify-icon icon="lucide:trash-2" width="16"></iconify-icon>
                                </button>
                            </div>
                        </td>
                    `;
                    tbody.appendChild(tr);
                });
            }

            // Pagination Buttons
            document.getElementById('btn-prev').disabled = state.currentPage === 1;
            document.getElementById('btn-next').disabled = start + state.itemsPerPage >= filteredData.length;
        }

        function nextPage() { state.currentPage++; renderTable(); }
        function prevPage() { state.currentPage--; renderTable(); }

        // --- CRUD ACTIONS ---

        function openModal(id = null) {
            const modal = document.getElementById('modal-form');
            const title = document.getElementById('modal-title');
            
            // Reset Form
            document.querySelector('form').reset();
            
            // Set Date Default to Today
            document.getElementById('form-date').valueAsDate = new Date();

            if (id) {
                // Edit Mode
                const item = db.find(i => i.id === id);
                if (item) {
                    title.textContent = "Edit Data Rekening";
                    document.getElementById('form-id').value = item.id;
                    document.getElementById('form-bank').value = item.bank;
                    document.getElementById('form-number').value = item.number;
                    document.getElementById('form-name').value = item.name;
                    document.getElementById('form-reports').value = item.reports;
                    document.getElementById('form-date').value = item.date;
                    document.getElementById('form-reason').value = item.reason;
                }
            } else {
                // Create Mode
                title.textContent = "Tambah Data Rekening";
                document.getElementById('form-id').value = '';
            }
            
            modal.classList.remove('hidden');
        }

        function closeModal() {
            document.getElementById('modal-form').classList.add('hidden');
        }

        function handleSave(e) {
            e.preventDefault();
            const id = document.getElementById('form-id').value;
            const newData = {
                bank: document.getElementById('form-bank').value,
                number: document.getElementById('form-number').value,
                name: document.getElementById('form-name').value,
                reports: parseInt(document.getElementById('form-reports').value),
                date: document.getElementById('form-date').value,
                reason: document.getElementById('form-reason').value
            };

            if (id) {
                // Update
                const index = db.findIndex(i => i.id == id);
                if (index !== -1) {
                    db[index] = { ...db[index], ...newData };
                    showToast('Data berhasil diperbarui');
                }
            } else {
                // Create
                const newId = Math.max(...db.map(i => i.id), 0) + 1;
                db.unshift({ id: newId, ...newData }); // Add to top
                showToast('Data baru berhasil ditambahkan');
            }

            closeModal();
            updateDashboardStats();
            renderTable();
        }

        function confirmDelete(id) {
            state.itemToDelete = id;
            document.getElementById('modal-delete').classList.remove('hidden');
        }

        function closeDeleteModal() {
            state.itemToDelete = null;
            document.getElementById('modal-delete').classList.add('hidden');
        }

        // Attach event listener to confirm button dynamically or in HTML
        document.getElementById('btn-confirm-delete').onclick = function() {
            if (state.itemToDelete) {
                db = db.filter(i => i.id !== state.itemToDelete);
                showToast('Data berhasil dihapus');
                closeDeleteModal();
                updateDashboardStats();
                renderTable();
            }
        };

        // --- UTILS ---
        
        function formatDate(dateString) {
            const options = { year: 'numeric', month: 'short', day: 'numeric' };
            return new Date(dateString).toLocaleDateString('id-ID', options);
        }

        function showToast(msg) {
            const toast = document.getElementById('toast');
            document.getElementById('toast-message').textContent = msg;
            toast.classList.remove('translate-y-20', 'opacity-0');
            setTimeout(() => {
                toast.classList.add('translate-y-20', 'opacity-0');
            }, 3000);
        }

        // --- INIT ---
        window.onload = function() {
            // Check url for simulated routing (optional, keeping it simple for now)
            // By default show landing
            navigateTo('landing');
        };

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-slate-200/60 transition-transform duration-300" id="public-nav">
<div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
<div className="cursor-pointer flex items-center gap-2 group" onclick="navigateTo('landing')">
<div className="w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center shadow-md group-hover:bg-indigo-600 transition-colors">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight text-slate-800">CekRekening</span>
</div>
<button className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors px-3 py-1.5 rounded-md hover:bg-slate-100" onclick="navigateTo('login')">
                Admin Panel
            </button>
</div>
</nav>

<main className="min-h-screen relative" id="app-container">

<div className="pt-24 pb-12 flex flex-col min-h-screen" id="view-landing">

<section className="relative px-4 pb-10 pt-10 md:pt-20">
<div className="absolute inset-0 bg-grid -z-10 h-[600px] pointer-events-none"></div>
<div className="max-w-3xl mx-auto text-center space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-medium animate-fade-in">
<span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                        Database Realtime
                    </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1] animate-fade-in">
                        Cek Rekening <br/> <span className="text-slate-400">Sebelum Transfer</span>
</h1>
<p className="text-slate-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed animate-fade-in">
                        Verifikasi nomor rekening penjual online. Cegah penipuan dengan melihat riwayat laporan dari komunitas.
                    </p>

<div className="mt-8 max-w-xl mx-auto bg-white p-2 rounded-2xl shadow-xl shadow-slate-200/50 ring-1 ring-slate-900/5 animate-fade-in">
<div className="flex flex-col md:flex-row gap-2">
<div className="relative w-full md:w-1/3">
<select className="w-full h-11 pl-10 pr-4 bg-slate-50 border-0 rounded-xl text-sm font-medium text-slate-700 focus:ring-2 focus:ring-indigo-500/20 cursor-pointer hover:bg-slate-100 outline-none appearance-none" id="search-bank">
<option selected="" value="">Semua Bank</option>
<option value="BCA">BCA</option>
<option value="Mandiri">Mandiri</option>
<option value="BRI">BRI</option>
<option value="BNI">BNI</option>
<option value="Dana">Dana</option>
<option value="Ovo">Ovo</option>
<option value="GoPay">GoPay</option>
</select>
<iconify-icon className="absolute left-3 top-3 text-slate-400" icon="lucide:building-2" width="18"></iconify-icon>
<iconify-icon className="absolute right-3 top-3.5 text-slate-400 pointer-events-none" icon="lucide:chevron-down" width="14"></iconify-icon>
</div>
<div className="relative w-full md:w-2/3 flex gap-2">
<div className="relative w-full">
<input className="w-full h-11 pl-10 pr-4 bg-slate-50 border-0 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500/20 hover:bg-slate-100 outline-none transition-colors" id="search-input" placeholder="Masukkan nomor rekening..." type="number"/>
<iconify-icon className="absolute left-3 top-3 text-slate-400" icon="lucide:credit-card" width="18"></iconify-icon>
</div>
<button className="h-11 px-6 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-xl transition-all shadow-lg shadow-slate-900/20 flex items-center gap-2 whitespace-nowrap" onclick="handleUserSearch()">
<span>Cek</span>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="hidden max-w-2xl mx-auto px-4 w-full" id="result-container">

<div className="hidden animate-fade-in bg-white rounded-2xl p-6 md:p-8 shadow-sm ring-1 ring-emerald-100 border-l-4 border-emerald-500" id="result-safe">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 text-emerald-600">
<iconify-icon icon="lucide:check-circle-2" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold text-emerald-900 tracking-tight">Belum Ada Laporan</h3>
<p className="text-emerald-700/80 text-sm mt-1">
                                Nomor <span className="font-mono font-medium bg-emerald-100/50 px-1.5 py-0.5 rounded text-emerald-800 result-display-number"></span> belum tercatat di database kami sebagai penipu.
                            </p>
</div>
</div>
</div>

<div className="hidden animate-fade-in bg-white rounded-2xl p-6 md:p-8 shadow-sm ring-1 ring-red-100 border-l-4 border-red-500" id="result-danger">
<div className="flex items-start gap-4 mb-6">
<div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 text-red-600">
<iconify-icon icon="lucide:alert-triangle" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold text-red-900 tracking-tight">Waspada! Terindikasi Penipuan</h3>
<p className="text-red-700/80 text-sm mt-1">
                                Rekening <span className="font-mono font-medium bg-red-100/50 px-1.5 py-0.5 rounded text-red-800 result-display-number"></span> atas nama <span className="font-semibold" id="result-name"></span> telah dilaporkan.
                            </p>
</div>
</div>
<div className="bg-red-50/50 rounded-xl p-4 border border-red-100/60 mb-4">
<div className="flex justify-between items-center mb-2">
<h4 className="text-xs font-bold uppercase tracking-wider text-red-400">Total Laporan</h4>
<span className="text-lg font-bold text-red-600" id="result-count">0</span>
</div>
<div className="flex justify-between items-center">
<h4 className="text-xs font-bold uppercase tracking-wider text-red-400">Terakhir Dilaporkan</h4>
<span className="text-xs font-medium text-red-600" id="result-date"></span>
</div>
</div>
<div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
<h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Kronologi / Alasan</h4>
<p className="text-sm text-slate-600 italic" id="result-reason">"-"</p>
</div>
</div>
</section>

<div className="mt-auto pt-10 text-center">
<p className="text-xs text-slate-400">© 2023 CekRekening System. Data is user-generated.</p>
</div>
</div>

<div className="hidden fixed inset-0 z-50 bg-white flex items-center justify-center p-4" id="view-login">
<div className="w-full max-w-[360px]">
<div className="text-center mb-8">
<div className="cursor-pointer inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900 text-white mb-6 shadow-xl shadow-slate-900/10 hover:scale-105 transition-transform" onclick="navigateTo('landing')">
<iconify-icon icon="lucide:lock" width="20"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Admin Login</h2>
<p className="text-sm text-slate-500 mt-2">Masuk untuk mengelola database rekening.</p>
</div>
<form className="space-y-4" onsubmit="handleAuth(event)">

<div className="hidden p-3 rounded-lg bg-red-50 border border-red-100 text-xs font-medium text-red-600 flex items-center gap-2" id="login-error">
<iconify-icon icon="lucide:alert-circle" width="14"></iconify-icon>
                        Email atau password salah.
                    </div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-slate-700 ml-1">Email</label>
<input className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 outline-none transition-all" id="email" placeholder="name@company.com" required="" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-slate-700 ml-1">Password</label>
<input className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 outline-none transition-all" id="password" placeholder="••••••" required="" type="password"/>
</div>
<button className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-xl transition-all shadow-lg shadow-slate-900/20 mt-2" type="submit">
                        Masuk Dashboard
                    </button>
<button className="w-full py-2.5 text-slate-500 hover:text-slate-800 text-sm font-medium rounded-xl transition-colors" onclick="navigateTo('landing')" type="button">
                        ← Kembali ke Beranda
                    </button>
</form>
</div>
</div>

<div className="hidden min-h-screen bg-slate-50/50" id="view-dashboard">

<aside className="fixed inset-y-0 left-0 w-64 bg-white border-r border-slate-200 hidden md:flex flex-col z-30">
<div className="p-6 h-16 flex items-center border-b border-slate-100">
<div className="flex items-center gap-2 text-slate-900">
<iconify-icon className="text-indigo-600" icon="lucide:shield-check" width="20"></iconify-icon>
<span className="font-semibold tracking-tight">Admin Panel</span>
</div>
</div>
<nav className="flex-1 p-4 space-y-1 overflow-y-auto">
<a className="flex items-center gap-3 px-3 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg shadow-sm" href="#">
<iconify-icon icon="lucide:database" width="16"></iconify-icon>
                        Database Rekening
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-50 hover:text-slate-900 text-sm font-medium rounded-lg transition-colors" href="#" onclick="alert('Fitur belum tersedia')">
<iconify-icon icon="lucide:users" width="16"></iconify-icon>
                        User Management
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-50 hover:text-slate-900 text-sm font-medium rounded-lg transition-colors" href="#" onclick="alert('Fitur belum tersedia')">
<iconify-icon icon="lucide:settings" width="16"></iconify-icon>
                        Pengaturan
                    </a>
</nav>
<div className="p-4 border-t border-slate-100">
<div className="flex items-center gap-3 px-3 py-3 mb-2">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-semibold text-xs">A</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-900">Admin</span>
<span className="text-[10px] text-slate-400">haikal@clapham.id</span>
</div>
</div>
<button className="w-full flex items-center justify-center gap-2 px-3 py-2 border border-slate-200 text-slate-600 hover:text-red-600 hover:bg-red-50 hover:border-red-100 text-xs font-medium rounded-lg transition-all" onclick="handleLogout()">
<iconify-icon icon="lucide:log-out" width="14"></iconify-icon>
                        Keluar
                    </button>
</div>
</aside>

<div className="md:hidden bg-white border-b border-slate-200 p-4 flex items-center justify-between sticky top-0 z-20">
<span className="font-semibold text-slate-900 text-sm">Admin Dashboard</span>
<button className="text-xs font-medium text-red-600" onclick="handleLogout()">Keluar</button>
</div>

<main className="md:ml-64 p-4 md:p-8">

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Total Rekening</p>
<h3 className="text-2xl font-semibold text-slate-900" id="stat-total-accounts">0</h3>
</div>
<div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
<iconify-icon icon="lucide:list" width="20"></iconify-icon>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Total Laporan</p>
<h3 className="text-2xl font-semibold text-slate-900" id="stat-total-reports">0</h3>
</div>
<div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center">
<iconify-icon icon="lucide:file-warning" width="20"></iconify-icon>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Bank Terbanyak</p>
<h3 className="text-2xl font-semibold text-slate-900" id="stat-top-bank">-</h3>
</div>
<div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
<iconify-icon icon="lucide:trending-up" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col h-[calc(100vh-200px)]">

<div className="p-4 border-b border-slate-200 flex flex-col md:flex-row gap-3 justify-between items-center">
<div className="flex gap-2 w-full md:w-auto">
<div className="relative flex-1 md:w-64">
<iconify-icon className="absolute left-3 top-2.5 text-slate-400" icon="lucide:search" width="16"></iconify-icon>
<input className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-slate-900/10" id="admin-search" onkeyup="renderTable()" placeholder="Cari nomor rekening / nama..." type="text"/>
</div>
<select className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700 outline-none focus:ring-2 focus:ring-slate-900/10" id="admin-filter-bank" onchange="renderTable()">
<option value="">Semua Bank</option>
<option value="BCA">BCA</option>
<option value="Mandiri">Mandiri</option>
<option value="BRI">BRI</option>
<option value="BNI">BNI</option>
<option value="Dana">Dana</option>
</select>
</div>
<button className="w-full md:w-auto px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-2" onclick="openModal()">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
                            Tambah Data
                        </button>
</div>

<div className="flex-1 overflow-auto custom-scrollbar relative">
<table className="w-full text-left text-sm whitespace-nowrap">
<thead className="bg-slate-50 text-slate-500 font-medium text-xs uppercase tracking-wider sticky top-0 z-10">
<tr>
<th className="px-6 py-3 border-b border-slate-200">Bank &amp; No. Rek</th>
<th className="px-6 py-3 border-b border-slate-200">Pemilik</th>
<th className="px-6 py-3 border-b border-slate-200">Status</th>
<th className="px-6 py-3 border-b border-slate-200">Total Laporan</th>
<th className="px-6 py-3 border-b border-slate-200">Terakhir Lapor</th>
<th className="px-6 py-3 border-b border-slate-200 text-right">Aksi</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100" id="table-body">

</tbody>
</table>

<div className="hidden flex flex-col items-center justify-center h-48 text-slate-400" id="table-empty">
<iconify-icon className="mb-2 opacity-50" icon="lucide:search-x" width="32"></iconify-icon>
<span className="text-sm">Tidak ada data ditemukan</span>
</div>
</div>

<div className="p-3 border-t border-slate-200 flex justify-between items-center bg-slate-50/50 rounded-b-xl">
<span className="text-xs text-slate-500 pl-2">Menampilkan <span className="font-medium text-slate-900" id="showing-count">0</span> data</span>
<div className="flex gap-2">
<button className="px-3 py-1.5 border border-slate-200 bg-white text-slate-600 rounded-md text-xs font-medium hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed" id="btn-prev" onclick="prevPage()">Previous</button>
<button className="px-3 py-1.5 border border-slate-200 bg-white text-slate-600 rounded-md text-xs font-medium hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed" id="btn-next" onclick="nextPage()">Next</button>
</div>
</div>
</div>
</main>
</div>
</main>

<div className="fixed inset-0 z-50 hidden" id="modal-form">
<div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" onclick="closeModal()"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 border border-slate-200 animate-fade-in">
<div className="flex justify-between items-center mb-5">
<h3 className="text-lg font-semibold text-slate-900" id="modal-title">Tambah Data Rekening</h3>
<button className="text-slate-400 hover:text-slate-600 p-1 rounded-md hover:bg-slate-100 transition-colors" onclick="closeModal()"><iconify-icon icon="lucide:x" width="20"></iconify-icon></button>
</div>
<form className="space-y-4" onsubmit="handleSave(event)">
<input id="form-id" type="hidden"/>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-semibold text-slate-700 mb-1.5">Bank</label>
<select className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-slate-900/10 outline-none" id="form-bank" required="">
<option disabled="" selected="" value="">Pilih...</option>
<option value="BCA">BCA</option>
<option value="Mandiri">Mandiri</option>
<option value="BRI">BRI</option>
<option value="BNI">BNI</option>
<option value="Dana">Dana</option>
<option value="Ovo">Ovo</option>
<option value="GoPay">GoPay</option>
<option value="Lainnya">Lainnya</option>
</select>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 mb-1.5">No. Rekening</label>
<input className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-slate-900/10 outline-none" id="form-number" placeholder="Contoh: 1234567890" required="" type="number"/>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 mb-1.5">Nama Pemilik (Opsional)</label>
<input className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-slate-900/10 outline-none" id="form-name" placeholder="Nama sesuai buku tabungan" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 mb-1.5">Kronologi / Alasan</label>
<textarea className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-slate-900/10 outline-none resize-none" id="form-reason" placeholder="Contoh: Penipuan jual beli online Instagram..." rows="2"></textarea>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-semibold text-slate-700 mb-1.5">Jumlah Laporan</label>
<input className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-slate-900/10 outline-none" id="form-reports" min="1" type="number" value="1"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 mb-1.5">Tanggal Laporan</label>
<input className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-slate-900/10 outline-none text-slate-500" id="form-date" required="" type="date"/>
</div>
</div>
<div className="pt-4 flex gap-3">
<button className="flex-1 py-2.5 bg-white border border-slate-200 text-slate-600 text-sm font-medium rounded-xl hover:bg-slate-50 transition-colors" onclick="closeModal()" type="button">Batal</button>
<button className="flex-1 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-xl hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10" type="submit">Simpan Data</button>
</div>
</form>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="modal-delete">
<div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" onclick="closeDeleteModal()"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm bg-white rounded-2xl shadow-2xl p-6 border border-slate-200 animate-fade-in text-center">
<div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center mx-auto mb-4">
<iconify-icon icon="lucide:trash-2" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900">Hapus Data?</h3>
<p className="text-sm text-slate-500 mt-2 mb-6">Tindakan ini tidak dapat dibatalkan. Data rekening ini akan dihapus dari database.</p>
<div className="flex gap-3">
<button className="flex-1 py-2.5 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-xl hover:bg-slate-50" onclick="closeDeleteModal()">Batal</button>
<button className="flex-1 py-2.5 bg-red-600 text-white text-sm font-medium rounded-xl hover:bg-red-700 shadow-lg shadow-red-600/20" id="btn-confirm-delete">Ya, Hapus</button>
</div>
</div>
</div>

<div className="fixed bottom-6 right-6 transform translate-y-20 opacity-0 transition-all duration-300 z-50 bg-slate-900 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 text-sm font-medium" id="toast">
<iconify-icon className="text-emerald-400" icon="lucide:check-circle" width="18"></iconify-icon>
<span id="toast-message">Operation successful</span>
</div>


    </>
  );
}
