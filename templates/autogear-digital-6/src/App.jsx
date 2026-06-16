import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- DATA STORE ---
        let products = [
            { id: 1, name: "LED Fog Lamp Pro", code: "M-204", category: "Lampu", price: 450000, img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=600" },
            { id: 2, name: "Heavy Duty Mud Flap", code: "T-882", category: "Eksterior", price: 125000, img: "https://images.unsplash.com/photo-1594818379496-da1e345b0ded?auto=format&fit=crop&q=80&w=600" },
            { id: 3, name: "Steering Cover Leather", code: "I-101", category: "Interior", price: 210000, img: "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&q=80&w=600" },
            { id: 4, name: "Turbo Air Filter Racing", code: "E-550", category: "Mesin", price: 850000, img: "https://images.unsplash.com/photo-1486262715619-01b8824d9674?auto=format&fit=crop&q=80&w=600" },
            { id: 5, name: "Roof Rack Universal", code: "X-900", category: "Eksterior", price: 1250000, img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=600" },
            { id: 6, name: "Ambient Light Kit RGB", code: "L-331", category: "Interior", price: 350000, img: "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?auto=format&fit=crop&q=80&w=600" }
        ];

        let currentCategory = "Semua";
        let searchQuery = "";

        // --- UTILS ---
        function formatRupiah(number) {
            return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
        }

        function showToast(message) {
            const toast = document.getElementById("toast");
            toast.innerText = message;
            toast.className = "show";
            setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
        }

        // --- RENDER FUNCTIONS ---
        function renderCatalog() {
            const grid = document.getElementById('product-grid');
            const empty = document.getElementById('empty-state');
            grid.innerHTML = '';

            const filtered = products.filter(p => {
                const matchCat = currentCategory === 'Semua' || p.category === currentCategory;
                const matchSearch = p.name.toLowerCase().includes(searchQuery) || p.code.toLowerCase().includes(searchQuery);
                return matchCat && matchSearch;
            });

            if (filtered.length === 0) {
                empty.classList.remove('hidden');
            } else {
                empty.classList.add('hidden');
                filtered.forEach(p => {
                    const html = `
                    <div class="group bg-white rounded-2xl p-4 border border-stone-100 shadow-sm hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-300 hover:-translate-y-1">
                        <div class="relative aspect-[4/3] bg-stone-100 rounded-xl overflow-hidden mb-4">
                            <img src="${p.img}" alt="${p.name}" class="object-cover w-full h-full mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-xs font-semibold text-stone-900 border border-stone-100 shadow-sm">
                                ${p.code}
                            </div>
                        </div>
                        <div class="flex justify-between items-start">
                            <div>
                                <h3 class="font-medium text-stone-900 truncate pr-2 w-40 md:w-48">${p.name}</h3>
                                <p class="text-xs text-stone-500 mt-1">${p.category}</p>
                            </div>
                            <span class="text-sm font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg whitespace-nowrap">${formatRupiah(p.price).replace(',00', '')}</span>
                        </div>
                    </div>`;
                    grid.innerHTML += html;
                });
            }
            lucide.createIcons();
        }

        function renderAdminTable() {
            const tbody = document.getElementById('admin-table-body');
            document.getElementById('total-count').innerText = products.length;
            tbody.innerHTML = '';

            products.forEach(p => {
                const html = `
                <tr class="group hover:bg-stone-50/50 transition-colors">
                    <td class="px-6 py-4">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-lg bg-stone-100 overflow-hidden">
                                <img src="${p.img}" class="w-full h-full object-cover">
                            </div>
                            <span class="font-medium text-stone-900 line-clamp-1">${p.name}</span>
                        </div>
                    </td>
                    <td class="px-6 py-4 text-stone-500 font-mono text-xs">${p.code}</td>
                    <td class="px-6 py-4"><span class="px-2 py-1 rounded-md bg-stone-100 text-stone-600 text-xs">${p.category}</span></td>
                    <td class="px-6 py-4 font-medium text-stone-900">${formatRupiah(p.price).replace(',00', '')}</td>
                    <td class="px-6 py-4 text-right">
                        <div class="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button onclick="deleteProduct(${p.id})" class="p-2 hover:bg-red-50 hover:text-red-500 rounded-lg text-stone-500 transition-colors"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
                        </div>
                    </td>
                </tr>`;
                tbody.innerHTML += html;
            });
            lucide.createIcons();
        }

        // --- INTERACTION ---
        function setCategory(cat) {
            currentCategory = cat;
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            document.getElementById('cat-' + cat).classList.add('active');
            renderCatalog();
        }

        document.getElementById('search-input').addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase();
            renderCatalog();
        });

        // --- ADMIN LOGIC ---
        function deleteProduct(id) {
            if(confirm('Hapus produk ini dari katalog?')) {
                products = products.filter(p => p.id !== id);
                renderAdminTable();
                renderCatalog(); // sync catalog
                showToast('Produk berhasil dihapus');
            }
        }

        // Modal Logic
        const modal = document.getElementById('add-product-modal');
        function openAddModal() { modal.classList.remove('hidden'); }
        function closeModal() { modal.classList.add('hidden'); document.getElementById('add-form').reset(); }

        document.getElementById('add-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('new-name').value;
            const code = document.getElementById('new-code').value;
            const cat = document.getElementById('new-category').value;
            const price = document.getElementById('new-price').value;

            // Simple ID generation
            const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
            
            // Push to array
            products.unshift({
                id: newId,
                name: name,
                code: code,
                category: cat,
                price: parseInt(price),
                img: "https://images.unsplash.com/photo-1486262715619-01b8824d9674?auto=format&fit=crop&q=80&w=600" // Default Placeholder
            });

            closeModal();
            renderAdminTable();
            renderCatalog();
            showToast('Produk baru ditambahkan');
        });

        // Login Logic
        document.getElementById('login-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const eVal = document.getElementById('email').value;
            const pVal = document.getElementById('password').value;
            
            if(eVal === 'admin@autogear.com' && pVal === 'admin123') {
                toggleView('dashboard');
                showToast('Selamat datang, Admin');
            } else {
                showToast('Email atau password salah!');
            }
        });

        // Navigation Router
        function toggleView(viewName) {
            const views = ['catalog', 'login', 'dashboard'];
            const hero = document.getElementById('hero-section');
            
            // Hide all
            views.forEach(v => {
                const el = document.getElementById(v + '-view');
                if(el) el.classList.add('hidden');
            });

            // Logic specifically for Hero section (only show on catalog)
            if(viewName === 'catalog') {
                hero.classList.remove('hidden');
            } else {
                hero.classList.add('hidden');
            }

            // Show target
            const target = document.getElementById(viewName + '-view');
            if(target) {
                target.classList.remove('hidden');
                target.classList.remove('slide-up');
                void target.offsetWidth; 
                target.classList.add('slide-up');
                
                if(viewName === 'dashboard') renderAdminTable();
                if(viewName === 'catalog') renderCatalog();
            }
        }

        // Init
        renderCatalog();
        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="toast">Notification Message</div>

<div className="fixed inset-0 z-[60] hidden bg-stone-900/20 backdrop-blur-sm flex items-center justify-center p-4" id="add-product-modal">
<div className="bg-white rounded-3xl p-6 w-full max-w-md shadow-2xl border border-stone-200 slide-up">
<h3 className="font-geist text-lg font-medium mb-4">Tambah Produk Baru</h3>
<form className="space-y-3" id="add-form">
<input className="w-full px-4 py-2 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-blue-500" id="new-name" placeholder="Nama Produk" required="" type="text"/>
<div className="flex gap-3">
<input className="w-1/2 px-4 py-2 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-blue-500" id="new-code" placeholder="Kode (ex: A-123)" required="" type="text"/>
<select className="w-1/2 px-4 py-2 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-blue-500" id="new-category">
<option value="Lampu">Lampu</option>
<option value="Eksterior">Eksterior</option>
<option value="Interior">Interior</option>
<option value="Mesin">Mesin</option>
</select>
</div>
<input className="w-full px-4 py-2 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-blue-500" id="new-price" placeholder="Harga (IDR)" required="" type="number"/>
<div className="flex gap-3 pt-2">
<button className="flex-1 py-2.5 rounded-xl text-sm font-medium text-stone-500 hover:bg-stone-50" onclick="closeModal()" type="button">Batal</button>
<button className="flex-1 py-2.5 rounded-xl text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20" type="submit">Simpan</button>
</div>
</form>
</div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-stone-200/50 bg-stone-50/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer" onclick="toggleView('catalog')">
<div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
<i className="w-5 h-5" data-lucide="car-front"></i>
</div>
<span className="font-geist font-medium text-lg tracking-tight text-stone-900">AutoGear</span>
</div>
<div className="flex items-center gap-4">
<button className="group relative px-4 py-2 text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" onclick="toggleView('login')">
                    Admin Portal
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-stone-900 transition-all group-hover:w-full"></span>
</button>
<button className="hidden md:flex bg-stone-900 hover:bg-stone-800 text-white text-sm font-medium px-5 py-2 rounded-full transition-all shadow-lg shadow-stone-900/10 hover:shadow-stone-900/20 items-center gap-2" onclick="showToast('Mengunduh Katalog PDF...')">
<i className="w-4 h-4" data-lucide="download"></i> Katalog PDF
                </button>
</div>
</div>
</nav>

<main className="pt-28 pb-20 px-4 md:px-6 max-w-7xl mx-auto min-h-screen flex flex-col items-center justify-start">

<div className="text-center mb-12 slide-up" id="hero-section" style={{animationDelay: '0.1s'}}>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                Katalog Edisi 2025
            </span>
<h1 className="font-geist font-medium text-4xl md:text-5xl text-stone-900 tracking-normal mb-4 leading-[1.1]">
                Aksesoris Premium untuk<br/>
<span className="text-stone-400">Mobil &amp; Truk Komersial</span>
</h1>
</div>

<div className="w-full max-w-6xl mx-auto relative z-10 slide-up" style={{animationDelay: '0.2s'}}>

<div className="ios-card rounded-[2.5rem] p-2 md:p-3 transition-all duration-500" id="catalog-view">
<div className="bg-white/50 rounded-[2rem] p-6 md:p-8 border border-white/50 min-h-[600px]">

<div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
<div className="flex p-1 bg-stone-200/50 rounded-xl overflow-x-auto max-w-full hide-scrollbar gap-1">
<button className="category-btn active px-4 py-2 rounded-lg text-sm font-medium text-stone-500 hover:text-stone-900 transition-all whitespace-nowrap" id="cat-Semua" onclick="setCategory('Semua')">Semua</button>
<button className="category-btn px-4 py-2 rounded-lg text-sm font-medium text-stone-500 hover:text-stone-900 transition-all whitespace-nowrap" id="cat-Lampu" onclick="setCategory('Lampu')">Lampu</button>
<button className="category-btn px-4 py-2 rounded-lg text-sm font-medium text-stone-500 hover:text-stone-900 transition-all whitespace-nowrap" id="cat-Eksterior" onclick="setCategory('Eksterior')">Eksterior</button>
<button className="category-btn px-4 py-2 rounded-lg text-sm font-medium text-stone-500 hover:text-stone-900 transition-all whitespace-nowrap" id="cat-Interior" onclick="setCategory('Interior')">Interior</button>
<button className="category-btn px-4 py-2 rounded-lg text-sm font-medium text-stone-500 hover:text-stone-900 transition-all whitespace-nowrap" id="cat-Mesin" onclick="setCategory('Mesin')">Mesin</button>
</div>
<div className="relative w-full md:w-80 group">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 group-focus-within:text-blue-500 transition-colors" data-lucide="search"></i>
<input className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-stone-400" id="search-input" placeholder="Cari kode atau nama..." type="text"/>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="product-grid">

</div>

<div className="hidden text-center py-20" id="empty-state">
<div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
<i className="w-8 h-8 text-stone-400" data-lucide="package-open"></i>
</div>
<h3 className="text-stone-900 font-medium">Tidak ada produk ditemukan</h3>
<p className="text-stone-500 text-sm mt-1">Coba ubah kata kunci pencarian atau kategori.</p>
</div>
</div>
</div>

<div className="hidden ios-card rounded-[2.5rem] p-2 md:p-3 max-w-md mx-auto mt-10" id="login-view">
<div className="bg-white/80 rounded-[2rem] p-10 border border-white/50 text-center relative overflow-hidden">
<div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6">
<i className="w-5 h-5 text-stone-500" data-lucide="lock"></i>
</div>
<h2 className="font-geist font-medium text-2xl text-stone-900 mb-2">Admin Portal</h2>
<p className="text-stone-500 text-sm mb-8">Masuk untuk mengelola daftar produk.</p>

<div className="bg-blue-50 border border-blue-100 rounded-xl p-3 mb-6 text-left">
<p className="text-xs text-blue-800 font-semibold mb-1">Demo Credentials:</p>
<p className="text-xs text-blue-600 font-mono">Email: admin@autogear.com</p>
<p className="text-xs text-blue-600 font-mono">Pass: admin123</p>
</div>
<form className="space-y-4" id="login-form">
<div className="text-left">
<label className="text-xs font-medium text-stone-700 ml-1 mb-1 block">Email</label>
<input className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" id="email" type="email" value="admin@autogear.com"/>
</div>
<div className="text-left">
<label className="text-xs font-medium text-stone-700 ml-1 mb-1 block">Password</label>
<input className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" id="password" type="password" value="admin123"/>
</div>
<button className="w-full bg-stone-900 hover:bg-stone-800 text-white font-medium py-3 rounded-xl transition-all shadow-lg shadow-stone-900/10 active:scale-95" type="submit">
                            Masuk Dashboard
                        </button>
</form>
<button className="mt-6 text-xs text-stone-400 hover:text-stone-600" onclick="toggleView('catalog')">Kembali ke Katalog</button>
</div>
</div>

<div className="hidden ios-card rounded-[2.5rem] p-2 md:p-3" id="dashboard-view">
<div className="bg-white/50 rounded-[2rem] p-6 md:p-8 border border-white/50 min-h-[600px]">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 border-b border-stone-200 pb-8">
<div>
<h2 className="font-geist font-medium text-2xl text-stone-900">Manajemen Katalog</h2>
<p className="text-stone-500 text-sm mt-1">Tambah atau hapus item dari katalog digital.</p>
</div>
<div className="flex gap-3">
<button className="px-4 py-2.5 rounded-xl border border-stone-200 bg-white text-stone-600 text-sm font-medium hover:bg-stone-50 transition-all flex items-center gap-2" onclick="showToast('Fitur Import dalam pengembangan')">
<i className="w-4 h-4" data-lucide="upload-cloud"></i> Import
                            </button>
<button className="px-4 py-2.5 rounded-xl bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 shadow-lg shadow-blue-500/20 transition-all flex items-center gap-2" onclick="openAddModal()">
<i className="w-4 h-4" data-lucide="plus"></i> Tambah Produk
                            </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
<div className="bg-white p-4 rounded-2xl border border-stone-100 shadow-sm flex items-center gap-4">
<div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center"><i className="w-5 h-5" data-lucide="package"></i></div>
<div>
<p className="text-xs text-stone-500 uppercase font-semibold tracking-wider">Total Item</p>
<p className="text-lg font-bold text-stone-900" id="total-count">0</p>
</div>
</div>
<div className="bg-white p-4 rounded-2xl border border-stone-100 shadow-sm flex items-center gap-4">
<div className="w-10 h-10 bg-green-50 text-green-600 rounded-lg flex items-center justify-center"><i className="w-5 h-5" data-lucide="tag"></i></div>
<div>
<p className="text-xs text-stone-500 uppercase font-semibold tracking-wider">Kategori Aktif</p>
<p className="text-lg font-bold text-stone-900">4</p>
</div>
</div>
</div>

<div className="overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm">
<table className="w-full text-left text-sm">
<thead className="bg-stone-50 border-b border-stone-100">
<tr>
<th className="px-6 py-4 font-medium text-stone-500">Produk</th>
<th className="px-6 py-4 font-medium text-stone-500">Kode</th>
<th className="px-6 py-4 font-medium text-stone-500">Kategori</th>
<th className="px-6 py-4 font-medium text-stone-500">Harga</th>
<th className="px-6 py-4 font-medium text-stone-500 text-right">Aksi</th>
</tr>
</thead>
<tbody className="divide-y divide-stone-100" id="admin-table-body">

</tbody>
</table>
</div>
<div className="mt-6 flex justify-between items-center">
<button className="text-sm text-stone-400 hover:text-stone-600 flex items-center gap-2" onclick="toggleView('catalog')"><i className="w-4 h-4" data-lucide="log-out"></i> Logout</button>
</div>
</div>
</div>
</div>
</main>

<footer className="border-t border-stone-200 bg-stone-50 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-stone-400 text-sm">© 2025 AutoGear Indonesia. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-stone-400 hover:text-stone-600 transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-stone-400 hover:text-stone-600 transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
</div>
</div>
</footer>


    </>
  );
}
