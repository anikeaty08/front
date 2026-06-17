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



        // --- INITIAL DATA & STATE ---
        let courses = [
            { id: 1, code: 'CS-101', name: 'Algoritma Pemrograman', sks: 4 },
            { id: 2, code: 'CS-102', name: 'Kecerdasan Buatan', sks: 3 },
            { id: 3, code: 'IS-201', name: 'Basis Data', sks: 3 },
            { id: 4, code: 'SE-301', name: 'Rekayasa Perangkat Lunak', sks: 3 }
        ];

        let currentView = 'editor'; // Default view
        
        // --- NAVIGATION LOGIC ---
        function switchView(viewName) {
            // Hide all views
            ['dashboard', 'editor', 'library', 'history'].forEach(v => {
                document.getElementById('view-' + v).classList.add('hidden-view');
                document.getElementById('nav-' + v).classList.remove('active-nav', 'bg-white', 'border', 'border-slate-200', 'shadow-sm', 'font-medium');
                document.getElementById('nav-' + v).classList.add('text-slate-600', 'hover:bg-slate-100');
                
                // Reset icon color
                const icon = document.querySelector(`#nav-${v} i`);
                if(icon) icon.classList.add('text-slate-400');
            });

            // Show selected view
            document.getElementById('view-' + viewName).classList.remove('hidden-view');
            
            // Highlight nav
            const navBtn = document.getElementById('nav-' + viewName);
            navBtn.classList.remove('text-slate-600', 'hover:bg-slate-100');
            navBtn.classList.add('active-nav', 'bg-white', 'border', 'border-slate-200', 'shadow-sm', 'font-medium');
            
            // Highlight icon
            const activeIcon = document.querySelector(`#nav-${viewName} i`);
            if(activeIcon) activeIcon.classList.remove('text-slate-400');

            // Update Header Breadcrumb
            const breadcrumb = document.getElementById('header-breadcrumb');
            if(viewName === 'dashboard') breadcrumb.innerHTML = '<span class="text-slate-900 font-medium">Dashboard</span>';
            else if(viewName === 'editor') breadcrumb.innerHTML = '<span class="hover:text-slate-900 cursor-pointer transition-colors">Mata Kuliah</span><i data-lucide="chevron-right" class="w-3 h-3 text-slate-300"></i><span class="text-slate-900 font-medium">Pengantar Kecerdasan Buatan</span>';
            else if(viewName === 'library') breadcrumb.innerHTML = '<span class="text-slate-900 font-medium">Pustaka Mata Kuliah</span>';
            else if(viewName === 'history') breadcrumb.innerHTML = '<span class="text-slate-900 font-medium">Riwayat</span>';

            lucide.createIcons();
            
            if(viewName === 'library') renderLibraryTable();
        }

        // --- CRUD LIBRARY LOGIC ---
        function renderLibraryTable() {
            const tbody = document.getElementById('library-table-body');
            tbody.innerHTML = '';

            if (courses.length === 0) {
                document.getElementById('empty-state').classList.remove('hidden');
                return;
            } else {
                document.getElementById('empty-state').classList.add('hidden');
            }

            courses.forEach(course => {
                const tr = document.createElement('tr');
                tr.className = 'hover:bg-slate-50/50 group';
                tr.innerHTML = `
                    <td class="px-6 py-3 text-slate-600 font-medium font-mono text-xs">${course.code}</td>
                    <td class="px-6 py-3 text-slate-900 font-medium">${course.name}</td>
                    <td class="px-6 py-3 text-slate-500">${course.sks}</td>
                    <td class="px-6 py-3 text-right">
                        <button onclick="editCourse(${course.id})" class="text-slate-400 hover:text-blue-600 mr-3 transition-colors tooltip" title="Edit"><i data-lucide="pencil" class="w-3.5 h-3.5 inline"></i></button>
                        <button onclick="deleteCourse(${course.id})" class="text-slate-400 hover:text-red-600 transition-colors tooltip" title="Hapus"><i data-lucide="trash-2" class="w-3.5 h-3.5 inline"></i></button>
                    </td>
                `;
                tbody.appendChild(tr);
            });
            lucide.createIcons();
        }

        function deleteCourse(id) {
            if(confirm('Hapus mata kuliah ini?')) {
                courses = courses.filter(c => c.id !== id);
                renderLibraryTable();
                showToast('Mata kuliah dihapus');
            }
        }

        // Modal Logic
        let isEditing = false;
        function openModal(id = null) {
            const modal = document.getElementById('modal-overlay');
            const title = document.getElementById('modal-title');
            const form = document.getElementById('course-form');
            
            modal.classList.remove('hidden');
            if (id) {
                // Edit Mode
                isEditing = true;
                const course = courses.find(c => c.id === id);
                document.getElementById('course-id').value = course.id;
                document.getElementById('input-code').value = course.code;
                document.getElementById('input-name').value = course.name;
                document.getElementById('input-sks').value = course.sks;
                title.innerText = 'Edit Mata Kuliah';
            } else {
                // Add Mode
                isEditing = false;
                form.reset();
                title.innerText = 'Tambah Mata Kuliah';
            }
        }

        function closeModal() {
            document.getElementById('modal-overlay').classList.add('hidden');
        }

        function editCourse(id) {
            openModal(id);
        }

        function handleCourseSubmit(e) {
            e.preventDefault();
            const id = document.getElementById('course-id').value;
            const code = document.getElementById('input-code').value;
            const name = document.getElementById('input-name').value;
            const sks = document.getElementById('input-sks').value;

            if (isEditing) {
                const index = courses.findIndex(c => c.id == id);
                if(index !== -1) {
                    courses[index] = { id: parseInt(id), code, name, sks };
                    showToast('Data berhasil diperbarui');
                }
            } else {
                const newId = courses.length > 0 ? Math.max(...courses.map(c => c.id)) + 1 : 1;
                courses.push({ id: newId, code, name, sks });
                showToast('Mata kuliah ditambahkan');
            }
            
            closeModal();
            renderLibraryTable();
        }

        // --- EDITOR LOGIC (Original) ---
        const templates = [
             `<div class="flex justify-between items-end border-b-2 border-slate-900 pb-4 mb-8"><div><h1 class="!mt-0 !mb-1 text-2xl tracking-tight text-slate-900">RENCANA PEMBELAJARAN SEMESTER (RPS)</h1><p class="text-slate-500 text-sm">Fakultas Ilmu Komputer — Semester Ganjil 2024/2025</p></div><div class="text-right"><div class="text-xs font-bold text-slate-900">CS-102</div><div class="text-xs text-slate-500">3 SKS</div></div></div><h2>1. Deskripsi Mata Kuliah</h2><p>Mata kuliah ini memberikan pengantar komprehensif tentang konsep dasar, sejarah, dan aplikasi Kecerdasan Buatan (Artificial Intelligence). Mahasiswa akan mempelajari paradigma penyelesaian masalah melalui pencarian (searching), representasi pengetahuan, serta pengantar pembelajaran mesin.</p><h2>2. Capaian Pembelajaran Lulusan (CPL)</h2><ul><li>Mampu menerapkan konsep logis dan matematis dalam penyelesaian masalah komputasi.</li><li>Menguasai prinsip-prinsip dasar sistem cerdas dan penerapannya di berbagai domain.</li><li>Mampu merancang solusi algoritma untuk masalah pencarian dan optimasi sederhana.</li></ul><h2>3. Rencana Kegiatan</h2><table><thead><tr><th class="w-12">Mg</th><th>Kemampuan Akhir</th><th>Bahan Kajian</th><th>Metode</th><th>Bobot</th></tr></thead><tbody><tr><td class="text-center">1</td><td>Menjelaskan definisi AI.</td><td>Pengantar AI, Turing Test.</td><td>Ceramah</td><td class="text-center">5%</td></tr><tr><td class="text-center">2-3</td><td>Implementasi Blind Search.</td><td>BFS, DFS.</td><td>Praktikum</td><td class="text-center">10%</td></tr><tr><td class="text-center">4</td><td>Memahami Heuristic.</td><td>A* Algorithm.</td><td>Studi Kasus</td><td class="text-center">10%</td></tr></tbody></table>`,
             `<div class="flex justify-between items-end border-b-2 border-slate-900 pb-4 mb-8"><div><h1 class="!mt-0 !mb-1 text-2xl tracking-tight text-slate-900">SYLLABUS: AI FOR INDUSTRY</h1><p class="text-slate-500 text-sm">Program Vokasi Teknologi — Applied AI Track</p></div><div class="text-right"><div class="text-xs font-bold text-slate-900">WORKSHOP</div><div class="text-xs text-slate-500">4 SKS</div></div></div><h2>1. Ringkasan Modul</h2><p>Fokus pada penerapan library Python modern (Scikit-Learn, TensorFlow) untuk menyelesaikan masalah bisnis nyata. Teori diminimalisir demi memperbanyak jam terbang coding.</p><h2>2. Target Skill</h2><ul><li>Deploy model AI sederhana ke production.</li><li>Data cleaning dan preprocessing dataset riil.</li><li>Menggunakan API OpenAI untuk automasi.</li></ul><h2>3. Jadwal Workshop</h2><table><thead><tr><th class="w-12">Sesi</th><th>Topik Workshop</th><th>Output</th><th>Tools</th></tr></thead><tbody><tr><td class="text-center">1</td><td>Setup Environment</td><td>GitHub Repo Ready</td><td>VSCode, Git</td></tr><tr><td class="text-center">2</td><td>Data Wrangling</td><td>Clean CSV Dataset</td><td>Pandas</td></tr><tr><td class="text-center">3</td><td>Basic Prediction</td><td>Regression Model</td><td>Scikit-Learn</td></tr></tbody></table>`,
             `<div class="flex justify-between items-end border-b-2 border-slate-900 pb-4 mb-8"><div><h1 class="!mt-0 !mb-1 text-2xl tracking-tight text-slate-900">PROJECT GUIDE: AI SYSTEMS</h1><p class="text-slate-500 text-sm">Kelas Berbasis Proyek (PBL)</p></div><div class="text-right"><div class="text-xs font-bold text-slate-900">TEAM-BASED</div><div class="text-xs text-slate-500">3 SKS</div></div></div><h2>1. The Big Picture</h2><p>Mahasiswa bekerja dalam tim beranggotakan 4 orang untuk membangun satu sistem cerdas dari nol hingga demo day di akhir semester.</p><h2>2. Penilaian (Milestones)</h2><ul><li><strong>Minggu 4:</strong> Proposal & Dataset (20%)</li><li><strong>Minggu 8:</strong> MVP (Minimum Viable Product) (30%)</li><li><strong>Minggu 16:</strong> Final Demo & Report (50%)</li></ul><h2>3. Timeline Pengerjaan</h2><table><thead><tr><th class="w-12">Phase</th><th>Aktivitas Utama</th><th>Deliverables</th></tr></thead><tbody><tr><td class="text-center">I</td><td>Ideation & Data Collection</td><td>Project Proposal</td></tr><tr><td class="text-center">II</td><td>Model Training & Validation</td><td>Training Log</td></tr><tr><td class="text-center">III</td><td>Interface & Deployment</td><td>Web App (Streamlit)</td></tr></tbody></table>`
        ];

        let state = { currentIdx: 0, content: templates[0], timeoutId: null };

        function execCmd(command) { document.execCommand(command, false, null); document.getElementById('editor-content').focus(); handleInput(); }
        function handleInput() {
            clearTimeout(state.timeoutId);
            document.getElementById('save-status').classList.add('hidden');
            state.timeoutId = setTimeout(() => {
                const html = document.getElementById('editor-content').innerHTML;
                state.content = html;
                document.getElementById('save-status').innerHTML = '<i data-lucide="check" class="w-3 h-3"></i> Tersimpan';
                lucide.createIcons();
                document.getElementById('save-status').classList.remove('hidden');
                document.getElementById('last-saved').innerText = 'Disimpan: ' + new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
            }, 1000);
        }
        function selectTemplate(index) {
            if(index === state.currentIdx) return;
            if(document.getElementById('editor-content').innerHTML !== templates[state.currentIdx]) {
                if(!confirm("Anda telah mengubah konten. Ganti template akan mereset perubahan Anda. Lanjutkan?")) return;
            }
            state.currentIdx = index;
            [0, 1, 2].forEach(i => {
                const card = document.getElementById(`card-${i}`);
                const badge = document.getElementById(`badge-${i}`);
                const check = document.getElementById(`check-${i}`);
                if (i === index) {
                    card.className = "group relative rounded-lg border border-slate-900 ring-1 ring-slate-900 bg-slate-50/30 p-5 transition-all cursor-pointer";
                    badge.classList.remove('hidden');
                    check.checked = true;
                } else {
                    card.className = "group relative rounded-lg border border-slate-200 bg-white p-5 hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer";
                    badge.classList.add('hidden');
                    check.checked = false;
                }
            });
            const editor = document.getElementById('editor-content');
            editor.innerHTML = templates[index];
            editor.classList.add('opacity-0');
            setTimeout(() => editor.classList.remove('opacity-0'), 150);
            handleInput();
            showToast("Template berhasil diganti");
        }
        function regenerateContent() {
            const btn = document.getElementById('btn-regenerate');
            const icon = document.getElementById('icon-refresh');
            const text = document.getElementById('text-regenerate');
            btn.disabled = true; icon.classList.remove('w-3.5', 'h-3.5'); icon.classList.add('loader'); icon.innerHTML = ''; text.innerText = 'Generating...';
            setTimeout(() => {
                btn.disabled = false; icon.className = 'w-3.5 h-3.5'; icon.setAttribute('data-lucide', 'refresh-cw'); text.innerText = 'Regenerate'; lucide.createIcons();
                document.getElementById('editor-content').innerHTML += '<p class="bg-yellow-50 p-2 mt-2 border border-yellow-200 rounded text-xs text-yellow-800">✨ Updated by AI v2.1</p>';
                showToast("Konten berhasil diregenerasi"); handleInput();
            }, 2000);
        }

        // --- GLOBAL UTILS ---
        function showToast(message) {
            const container = document.getElementById('toast-container');
            const toast = document.createElement('div');
            toast.className = 'toast pointer-events-auto bg-slate-900 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 mb-3 text-xs font-medium';
            toast.innerHTML = `<i data-lucide="check-circle" class="w-4 h-4 text-green-400"></i> ${message}`;
            container.appendChild(toast);
            lucide.createIcons();
            setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translate(-50%, 20px)'; setTimeout(() => toast.remove(), 300); }, 3000);
        }
        function rate(stars) { showToast("Terima kasih atas penilaian Anda!"); }

        // --- INIT ---
        window.addEventListener('DOMContentLoaded', () => {
            lucide.createIcons();
            document.getElementById('editor-content').innerHTML = state.content;
            switchView('editor'); // Default view
        });
    
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
      

<div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none" id="toast-container"></div>

<div className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 hidden flex items-center justify-center p-4" id="modal-overlay">
<div className="bg-white rounded-lg shadow-xl border border-slate-200 w-full max-w-md p-6">
<h3 className="text-lg font-semibold text-slate-900 mb-4" id="modal-title">Tambah Mata Kuliah</h3>
<form id="course-form" onsubmit="handleCourseSubmit(event)">
<input id="course-id" type="hidden"/>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Kode MK</label>
<input className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900" id="input-code" placeholder="Contoh: CS-102" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Nama Mata Kuliah</label>
<input className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900" id="input-name" placeholder="Contoh: Kecerdasan Buatan" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">SKS</label>
<input className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900" id="input-sks" placeholder="3" required="" type="number"/>
</div>
</div>
<div className="flex justify-end gap-3 mt-6">
<button className="px-4 py-2 text-slate-600 hover:bg-slate-50 rounded-md text-xs font-medium" onclick="closeModal()" type="button">Batal</button>
<button className="px-4 py-2 bg-slate-900 text-white hover:bg-slate-800 rounded-md text-xs font-medium" type="submit">Simpan</button>
</div>
</form>
</div>
</div>

<aside className="w-64 border-r border-slate-100 flex flex-col bg-slate-50/50 hidden md:flex">
<div className="h-14 flex items-center px-6 border-b border-slate-100 bg-white">
<span className="tracking-tighter font-semibold text-base text-slate-900">DUAMINGGU</span>
<span className="ml-2 px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-500 text-xs font-medium border border-slate-200">Beta</span>
</div>
<nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
<button className="w-full flex items-center gap-3 px-3 py-2 text-slate-600 rounded-md hover:bg-slate-100 hover:text-slate-900 transition-colors group text-left" id="nav-dashboard" onclick="switchView('dashboard')">
<i className="w-4 h-4 text-slate-400 group-hover:text-slate-900" data-lucide="layout-grid"></i>
                Dashboard
            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 bg-white text-slate-900 border border-slate-200 shadow-sm rounded-md font-medium text-left" id="nav-editor" onclick="switchView('editor')">
<i className="w-4 h-4 text-slate-900" data-lucide="file-plus-2"></i>
                Buat RPS
            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-slate-600 rounded-md hover:bg-slate-100 hover:text-slate-900 transition-colors group text-left" id="nav-library" onclick="switchView('library')">
<i className="w-4 h-4 text-slate-400 group-hover:text-slate-900" data-lucide="library"></i>
                Pustaka Mata Kuliah
            </button>
<div className="pt-4 pb-2 px-3 text-xs font-medium text-slate-400 uppercase tracking-wider">Arsip</div>
<button className="w-full flex items-center gap-3 px-3 py-2 text-slate-600 rounded-md hover:bg-slate-100 hover:text-slate-900 transition-colors group text-left" id="nav-history" onclick="switchView('history')">
<i className="w-4 h-4 text-slate-400 group-hover:text-slate-900" data-lucide="history"></i>
                Riwayat Generate
            </button>
</nav>
<div className="p-4 border-t border-slate-100">
<div className="flex items-center gap-3 p-2 rounded-md hover:bg-slate-100 cursor-pointer transition-colors">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-medium text-xs">DS</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-900">Dr. Siti</span>
<span className="text-xs text-slate-500">Universitas Terbuka</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-white relative">

<header className="h-14 border-b border-slate-100 bg-white flex items-center justify-between px-6 sticky top-0 z-10">
<div className="flex items-center gap-4">
<button className="md:hidden text-slate-500 hover:text-slate-900">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
<div className="flex items-center gap-2 text-slate-500" id="header-breadcrumb">
<span className="text-slate-900 font-medium">Buat RPS Baru</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="hidden text-xs text-slate-400 flex items-center gap-1" id="save-status">
<i className="w-3 h-3" data-lucide="check"></i> Tersimpan
                </div>
<div className="flex items-center gap-1 text-slate-500 bg-slate-50 px-2 py-1 rounded border border-slate-100">
<i className="w-3 h-3" data-lucide="coins"></i>
<span className="text-xs font-medium">Model v2.1</span>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8 hidden-view" id="view-dashboard">
<h1 className="text-2xl font-semibold tracking-tight text-slate-900 mb-6">Dashboard Overview</h1>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
<div className="p-5 rounded-lg border border-slate-200 bg-slate-50/50">
<p className="text-slate-500 text-xs font-medium uppercase tracking-wide mb-2">Total RPS</p>
<div className="text-3xl font-semibold text-slate-900">12</div>
<p className="text-xs text-slate-400 mt-2">+2 minggu ini</p>
</div>
<div className="p-5 rounded-lg border border-slate-200 bg-slate-50/50">
<p className="text-slate-500 text-xs font-medium uppercase tracking-wide mb-2">Mata Kuliah</p>
<div className="text-3xl font-semibold text-slate-900">8</div>
</div>
<div className="p-5 rounded-lg border border-slate-200 bg-slate-50/50">
<p className="text-slate-500 text-xs font-medium uppercase tracking-wide mb-2">Token AI</p>
<div className="text-3xl font-semibold text-slate-900">85%</div>
</div>
</div>
<h2 className="text-lg font-medium text-slate-900 mb-4">Aktivitas Terbaru</h2>
<div className="border border-slate-200 rounded-lg bg-white">
<div className="p-4 border-b border-slate-100 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center"><i className="w-4 h-4 text-slate-500" data-lucide="file-text"></i></div>
<div>
<div className="text-xs font-medium text-slate-900">RPS: Kecerdasan Buatan</div>
<div className="text-[10px] text-slate-500">Dibuat 2 jam yang lalu</div>
</div>
</div>
<span className="px-2 py-1 bg-green-50 text-green-700 text-[10px] font-medium rounded-full">Selesai</span>
</div>
<div className="p-4 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center"><i className="w-4 h-4 text-slate-500" data-lucide="file-text"></i></div>
<div>
<div className="text-xs font-medium text-slate-900">RPS: Pemrograman Web</div>
<div className="text-[10px] text-slate-500">Diedit kemarin</div>
</div>
</div>
<span className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-medium rounded-full">Draft</span>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto bg-white relative scroll-container" id="view-editor">
<div className="max-w-5xl mx-auto px-6 py-8">

<div className="action-bar flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
<div>
<h1 className="text-2xl text-slate-900 font-semibold tracking-tight mb-1">Hasil Generasi RPS</h1>
<p className="text-slate-500 text-sm">AI telah menghasilkan 3 opsi berdasarkan kurikulum dan CPL input.</p>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-md text-slate-700 text-xs font-medium shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed" id="btn-regenerate" onclick="regenerateContent()">
<i className="w-3.5 h-3.5" data-lucide="refresh-cw" id="icon-refresh"></i>
<span id="text-regenerate">Regenerate</span>
</button>
<button className="flex items-center gap-2 px-3 py-2 bg-slate-900 text-white rounded-md text-xs font-medium shadow-sm hover:bg-slate-800 transition-all" onclick="window.print()">
<i className="w-3.5 h-3.5" data-lucide="download"></i>
                            Ekspor PDF
                        </button>
</div>
</div>

<div className="options-grid grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">


<div className="group relative rounded-lg border border-slate-900 ring-1 ring-slate-900 bg-slate-50/30 p-5 transition-all cursor-pointer" id="card-0" onclick="selectTemplate(0)">
<div className="absolute -top-3 left-4 bg-slate-900 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider" id="badge-0">Pilihan Anda</div>
<div className="flex justify-between items-start mb-4 mt-1">
<div className="flex items-center gap-2">
<div className="p-1.5 bg-slate-100 rounded-md border border-slate-200">
<i className="w-4 h-4 text-slate-700" data-lucide="graduation-cap"></i>
</div>
<h3 className="font-medium text-slate-900">Akademis Formal</h3>
</div>
<div className="custom-checkbox">
<label className="flex items-center cursor-pointer relative pointer-events-none"><input checked="" className="sr-only peer" id="check-0" type="checkbox"/><div className="w-5 h-5 border-2 border-slate-300 rounded-full peer-checked:bg-slate-900 peer-checked:border-slate-900 transition-all flex items-center justify-center"><i className="w-3 h-3 text-white hidden" data-lucide="check"></i></div></label>
</div>
</div>
<p className="text-xs text-slate-500 leading-relaxed mb-4">Struktur lengkap dan detail, menekankan pada teori dasar dan referensi buku teks standar.</p>
<div className="flex items-center gap-4 text-xs text-slate-400 border-t border-slate-200 pt-3"><span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="file-text"></i> 8 Hal</span></div>
</div>

<div className="group relative rounded-lg border border-slate-200 bg-white p-5 hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer" id="card-1" onclick="selectTemplate(1)">
<div className="absolute -top-3 left-4 bg-slate-900 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider hidden" id="badge-1">Pilihan Anda</div>
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-2">
<div className="p-1.5 bg-white rounded-md border border-slate-200 group-hover:bg-slate-50"><i className="w-4 h-4 text-slate-500 group-hover:text-slate-900" data-lucide="briefcase"></i></div>
<h3 className="font-medium text-slate-900">Praktis &amp; Ringkas</h3>
</div>
<div className="custom-checkbox">
<label className="flex items-center cursor-pointer relative pointer-events-none"><input className="sr-only peer" id="check-1" type="checkbox"/><div className="w-5 h-5 border-2 border-slate-200 rounded-full peer-checked:bg-slate-900 peer-checked:border-slate-900 transition-all flex items-center justify-center"><i className="w-3 h-3 text-white hidden" data-lucide="check"></i></div></label>
</div>
</div>
<p className="text-xs text-slate-500 leading-relaxed mb-4">Fokus pada implementasi industri dan studi kasus. Bahasa lebih lugas dengan bobot praktik tinggi.</p>
<div className="flex items-center gap-4 text-xs text-slate-400 border-t border-slate-100 pt-3"><span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="file-text"></i> 5 Hal</span></div>
</div>

<div className="group relative rounded-lg border border-slate-200 bg-white p-5 hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer" id="card-2" onclick="selectTemplate(2)">
<div className="absolute -top-3 left-4 bg-slate-900 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider hidden" id="badge-2">Pilihan Anda</div>
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-2">
<div className="p-1.5 bg-white rounded-md border border-slate-200 group-hover:bg-slate-50"><i className="w-4 h-4 text-slate-500 group-hover:text-slate-900" data-lucide="lightbulb"></i></div>
<h3 className="font-medium text-slate-900">Project-Based</h3>
</div>
<div className="custom-checkbox">
<label className="flex items-center cursor-pointer relative pointer-events-none"><input className="sr-only peer" id="check-2" type="checkbox"/><div className="w-5 h-5 border-2 border-slate-200 rounded-full peer-checked:bg-slate-900 peer-checked:border-slate-900 transition-all flex items-center justify-center"><i className="w-3 h-3 text-white hidden" data-lucide="check"></i></div></label>
</div>
</div>
<p className="text-xs text-slate-500 leading-relaxed mb-4">Kurikulum berbasis capaian proyek akhir semester. Evaluasi dilakukan secara milestone.</p>
<div className="flex items-center gap-4 text-xs text-slate-400 border-t border-slate-100 pt-3"><span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="file-text"></i> 6 Hal</span></div>
</div>
</div>

<div className="editor-wrapper border border-slate-200 rounded-lg bg-white shadow-sm overflow-hidden">
<div className="editor-toolbar border-b border-slate-100 bg-white px-4 py-2 flex items-center justify-between sticky top-0 z-20">
<div className="flex items-center gap-1 text-slate-500">
<div className="flex items-center gap-1 pr-3 border-r border-slate-100"><span className="text-xs font-medium text-slate-900">Mode Edit</span></div>
<button className="p-1.5 hover:bg-slate-100 rounded text-slate-700" onclick="execCmd('bold')"><i className="w-3.5 h-3.5" data-lucide="bold"></i></button>
<button className="p-1.5 hover:bg-slate-100 rounded" onclick="execCmd('italic')"><i className="w-3.5 h-3.5" data-lucide="italic"></i></button>
<button className="p-1.5 hover:bg-slate-100 rounded" onclick="execCmd('underline')"><i className="w-3.5 h-3.5" data-lucide="underline"></i></button>
<div className="w-px h-4 bg-slate-200 mx-1"></div>
<button className="p-1.5 hover:bg-slate-100 rounded" onclick="execCmd('insertUnorderedList')"><i className="w-3.5 h-3.5" data-lucide="list"></i></button>
</div>
<div className="flex items-center gap-3">
<span className="text-[10px] text-slate-400" id="last-saved">Autosave aktif</span>
<div className="flex items-center gap-2 text-xs">
<span className="text-slate-600">Publik</span>
<div className="relative inline-block w-8 mr-2 align-middle select-none transition duration-200 ease-in"><input className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 border-slate-300 appearance-none cursor-pointer transition-all duration-300" id="toggle" name="toggle" type="checkbox" /><label className="toggle-label block overflow-hidden h-4 rounded-full bg-slate-300 cursor-pointer" htmlFor="toggle"></label></input></div>
</div>
</div>
</div>
<div className="p-8 md:p-12 min-h-[600px] bg-white focus:outline-none" contenteditable="true" id="editor-content" oninput="handleInput()"></div>
</div>
<div className="feedback-section mt-10 mb-6 flex items-center justify-center">
<div className="bg-slate-50 border border-slate-200 rounded-lg p-4 max-w-lg w-full text-center">
<p className="text-xs text-slate-500 mb-3">Apakah hasil generasi RPS ini membantu pekerjaan Anda?</p>
<div className="flex justify-center gap-2 mb-3">
<button className="rate-btn w-8 h-8 rounded-full border border-slate-200 bg-white hover:border-slate-300 hover:scale-105 transition-all flex items-center justify-center text-slate-400 hover:text-yellow-500" onclick="rate(1)"><i className="w-4 h-4" data-lucide="star"></i></button>
<button className="rate-btn w-8 h-8 rounded-full border border-slate-200 bg-white hover:border-slate-300 hover:scale-105 transition-all flex items-center justify-center text-slate-400 hover:text-yellow-500" onclick="rate(2)"><i className="w-4 h-4" data-lucide="star"></i></button>
<button className="rate-btn w-8 h-8 rounded-full border border-slate-200 bg-white hover:border-slate-300 hover:scale-105 transition-all flex items-center justify-center text-slate-400 hover:text-yellow-500" onclick="rate(3)"><i className="w-4 h-4" data-lucide="star"></i></button>
<button className="rate-btn w-8 h-8 rounded-full border border-slate-200 bg-white hover:border-slate-300 hover:scale-105 transition-all flex items-center justify-center text-slate-400 hover:text-yellow-500" onclick="rate(4)"><i className="w-4 h-4" data-lucide="star"></i></button>
<button className="rate-btn w-8 h-8 rounded-full border border-slate-200 bg-white hover:border-slate-300 hover:scale-105 transition-all flex items-center justify-center text-slate-400 hover:text-yellow-500" onclick="rate(5)"><i className="w-4 h-4" data-lucide="star"></i></button>
</div>
</div>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto p-8 hidden-view" id="view-library">
<div className="max-w-5xl mx-auto">
<div className="flex justify-between items-center mb-6">
<h1 className="text-2xl font-semibold tracking-tight text-slate-900">Pustaka Mata Kuliah</h1>
<button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-md text-xs font-medium shadow-sm hover:bg-slate-800 transition-all" onclick="openModal()">
<i className="w-3.5 h-3.5" data-lucide="plus"></i> Tambah MK
                    </button>
</div>
<div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
<table className="w-full text-left text-sm">
<thead className="bg-slate-50 border-b border-slate-200">
<tr>
<th className="px-6 py-3 font-medium text-slate-900">Kode</th>
<th className="px-6 py-3 font-medium text-slate-900">Mata Kuliah</th>
<th className="px-6 py-3 font-medium text-slate-900">SKS</th>
<th className="px-6 py-3 font-medium text-slate-900 text-right">Aksi</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100" id="library-table-body">

</tbody>
</table>
<div className="hidden p-8 text-center" id="empty-state">
<div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3">
<i className="w-6 h-6 text-slate-400" data-lucide="inbox"></i>
</div>
<p className="text-slate-500">Belum ada data mata kuliah.</p>
</div>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto p-8 hidden-view" id="view-history">
<div className="max-w-5xl mx-auto">
<h1 className="text-2xl font-semibold tracking-tight text-slate-900 mb-6">Riwayat Generate</h1>
<div className="space-y-3">
<div className="p-4 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors bg-white group cursor-pointer">
<div className="flex justify-between items-start">
<div className="flex gap-3">
<div className="w-10 h-10 bg-slate-100 rounded-md flex items-center justify-center text-slate-500"><i className="w-5 h-5" data-lucide="file-clock"></i></div>
<div>
<h3 className="text-sm font-medium text-slate-900 group-hover:text-blue-600">Pengantar Kecerdasan Buatan</h3>
<p className="text-xs text-slate-500 mt-0.5">Versi 1.0 • Formal Template</p>
</div>
</div>
<span className="text-xs text-slate-400">2 jam yang lalu</span>
</div>
</div>
<div className="p-4 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors bg-white group cursor-pointer">
<div className="flex justify-between items-start">
<div className="flex gap-3">
<div className="w-10 h-10 bg-slate-100 rounded-md flex items-center justify-center text-slate-500"><i className="w-5 h-5" data-lucide="file-clock"></i></div>
<div>
<h3 className="text-sm font-medium text-slate-900 group-hover:text-blue-600">Pemrograman Berorientasi Objek</h3>
<p className="text-xs text-slate-500 mt-0.5">Versi 2.3 • Project Based</p>
</div>
</div>
<span className="text-xs text-slate-400">Kemarin</span>
</div>
</div>
</div>
</div>
</div>
</main>



    </>
  );
}
