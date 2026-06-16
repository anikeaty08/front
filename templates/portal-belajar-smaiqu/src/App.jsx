import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: "class",
theme: {
extend: {
colors: {
"primary": "#136dec",
"primary-dark": "#0f5bbd",
"background-light": "#f8fafc", /* Slate 50 */
"background-dark": "#0f172a", /* Slate 900 */
},
fontFamily: {
"display": ["Lexend", "sans-serif"]
},
borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "2xl": "1rem", "full": "9999px" },
animation: {
'spin-slow': 'spin 3s linear infinite',
}
},
},
}



        const API_URL = "https://script.google.com/macros/s/AKfycbxJs17ZYExHUKtdsTmA445whRKa7WiEbfrAgB0Dk-Jwo60LdcQJAjsA7c0wQDCQclmR/exec";

        // Elements
        const pageHome = document.getElementById('page-home');
        const pageDetail = document.getElementById('page-detail');
        const nisInput = document.getElementById('nis-input');
        const searchBtn = document.getElementById('search-btn');
        const errorMsg = document.getElementById('error-message');
        const backBtn = document.getElementById('back-btn');
        const homeBtn = document.getElementById('home-btn');
        
        // Button States
        const btnText = document.getElementById('btn-text');
        const btnLoader = document.getElementById('btn-loader');
        const btnIcon = document.getElementById('btn-icon');

        // Result Elements
        const resNama = document.getElementById('res-nama');
        const resNis = document.getElementById('res-nis');
        const resKehadiran = document.getElementById('res-kehadiran');
        const resPts = document.getElementById('res-pts');
        const resRapor = document.getElementById('res-rapor');

        // Theme Elements
        const themeToggle = document.getElementById('theme-toggle');
        const iconSun = document.getElementById('icon-sun');
        const iconMoon = document.getElementById('icon-moon');
        const html = document.documentElement;

        // Theme Logic
        const toggleTheme = () => {
            if (html.classList.contains('dark')) {
                html.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                updateThemeIcon(false);
            } else {
                html.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                updateThemeIcon(true);
            }
        };

        const updateThemeIcon = (isDark) => {
            if (isDark) {
                iconMoon.classList.add('hidden');
                iconSun.classList.remove('hidden');
                iconSun.classList.add('theme-icon-enter');
            } else {
                iconSun.classList.add('hidden');
                iconMoon.classList.remove('hidden');
                iconMoon.classList.add('theme-icon-enter');
            }
            // Remove animation class after playing
            setTimeout(() => {
                iconSun.classList.remove('theme-icon-enter');
                iconMoon.classList.remove('theme-icon-enter');
            }, 500);
        };

        // Check Saved Theme
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            html.classList.add('dark');
            updateThemeIcon(true);
        } else {
            html.classList.remove('dark');
            updateThemeIcon(false);
        }

        themeToggle.addEventListener('click', toggleTheme);


        // Helper: Toggle Loading
        const setLoading = (isLoading) => {
            if (isLoading) {
                searchBtn.disabled = true;
                searchBtn.classList.add('opacity-80', 'cursor-not-allowed');
                btnText.innerText = "Memuat...";
                btnLoader.classList.remove('hidden');
                btnIcon.classList.add('hidden');
                errorMsg.classList.add('hidden');
            } else {
                searchBtn.disabled = false;
                searchBtn.classList.remove('opacity-80', 'cursor-not-allowed');
                btnText.innerText = "Cari Data";
                btnLoader.classList.add('hidden');
                btnIcon.classList.remove('hidden');
            }
        };

        // Helper: Switch Pages
        const showDetail = () => {
            pageHome.classList.add('hidden');
            pageDetail.classList.remove('hidden');
            window.scrollTo(0, 0);
        };

        const showHome = () => {
            pageDetail.classList.add('hidden');
            pageHome.classList.remove('hidden');
            nisInput.value = '';
            nisInput.focus();
        };

        // Logic: Fetch Data
        const handleSearch = async () => {
            const nis = nisInput.value.trim();
            if (!nis) {
                alert("Mohon masukkan NIS terlebih dahulu.");
                return;
            }

            setLoading(true);

            try {
                const response = await fetch(`${API_URL}?nis=${nis}`);
                const data = await response.json();

                if (data && (data.nis == nis)) {
                    resNama.innerText = data.nama || "Tanpa Nama";
                    resNis.innerText = data.nis;
                    resKehadiran.innerText = data.kehadiran || "-";
                    resPts.innerText = data.nilai_pts !== undefined ? data.nilai_pts : "-";
                    resRapor.innerText = data.nilai_rapor !== undefined ? data.nilai_rapor : "-";
                    
                    showDetail();
                } else {
                    if(data.result === 'error' || !data.nis) {
                         throw new Error("Siswa tidak ditemukan");
                    }
                    if (Array.isArray(data)) {
                        const student = data.find(s => s.nis == nis);
                        if(student) {
                            resNama.innerText = student.nama;
                            resNis.innerText = student.nis;
                            resKehadiran.innerText = student.kehadiran;
                            resPts.innerText = student.nilai_pts;
                            resRapor.innerText = student.nilai_rapor;
                            showDetail();
                            return;
                        }
                    }
                    throw new Error("NIS tidak ditemukan");
                }

            } catch (error) {
                console.error(error);
                errorMsg.classList.remove('hidden');
                errorMsg.innerHTML = '<iconify-icon icon="lucide:alert-circle" width="14" height="14"></iconify-icon> Data tidak ditemukan.';
            } finally {
                setLoading(false);
            }
        };

        // Event Listeners
        searchBtn.addEventListener('click', handleSearch);
        
        nisInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleSearch();
        });

        backBtn.addEventListener('click', showHome);
        homeBtn.addEventListener('click', showHome);

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<button aria-label="Toggle Dark Mode" className="fixed bottom-6 right-6 z-[100] flex size-12 items-center justify-center rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-yellow-400 shadow-xl shadow-slate-300/50 dark:shadow-slate-950/50 ring-1 ring-slate-900/5 dark:ring-slate-700 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer" id="theme-toggle">
<span className="hidden" id="icon-sun">
<iconify-icon height="24" icon="lucide:sun" strokeWidth="1.5" width="24"></iconify-icon>
</span>
<span className="flex" id="icon-moon">
<iconify-icon height="24" icon="lucide:moon" strokeWidth="1.5" width="24"></iconify-icon>
</span>
</button>

<div className="relative flex h-full min-h-screen w-full max-w-[480px] flex-col bg-white dark:bg-[#0f172a] shadow-2xl overflow-x-hidden transition-colors duration-300 ring-1 ring-slate-900/5">

<div className="flex flex-col h-full min-h-screen" id="page-home">

<div className="flex items-center p-4 pb-2 justify-between sticky top-0 z-20 bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
<div className="flex items-center gap-3">
<div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/20 ring-1 ring-inset ring-primary/20 transition-colors">
<iconify-icon height="24" icon="lucide:graduation-cap" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight flex-1">SMK Negeri 1</h2>
</div>
<div className="flex items-center justify-end">
<button className="flex size-10 cursor-pointer items-center justify-center overflow-hidden rounded-full text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors">
<iconify-icon height="24" icon="lucide:help-circle" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="flex-1 flex flex-col">

<div className="relative w-full aspect-[16/10] bg-slate-100 dark:bg-slate-800 overflow-hidden mt-0 group transition-colors duration-300">
<img alt="School Illustration" className="w-full h-full object-cover opacity-100 dark:opacity-80 transition-all duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARrCrMCDahJcrwObKTjDtdAWB_ez6vlwX2CPcUjYSTu2Nu_VI9XG3lCctscJqgSsQJ-Jl0JDURKHBA7vA3Z3H0rgEZMCQNC2QzdIHbtEKMNySs1JE5SIwY-WXVWaDT9mjxdB-73v4cJvKU_WLGqdcQL5nBnJWQQcSJp19cerXfF4Dv6m1AYVDneyYoiu30zTS_zrDdzVLZFOvmWbq2SlS391fkru6zFbRY3es3UH7g5foVG71naZRB-kpmBZMekMhvYlBZmIzdU-U"/>
<div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white dark:from-[#0f172a] to-transparent transition-colors duration-300"></div>
</div>

<div className="px-6 pt-4 pb-2 text-center relative z-10">
<h1 className="text-slate-900 dark:text-white tracking-tight text-[32px] font-bold leading-tight mb-3 transition-colors">
                        Cek Prestasi Belajar
                    </h1>
<p className="text-slate-600 dark:text-slate-300 text-base font-normal leading-relaxed max-w-[90%] mx-auto transition-colors">
                        Pantau kehadiran, nilai PTS, dan hasil rapor siswa dengan memasukkan Nomor Induk Siswa.
                    </p>
</div>

<div className="px-6 py-6 w-full mt-2">
<div className="flex flex-col gap-5">
<label className="flex flex-col gap-2">
<span className="text-sm font-bold text-slate-800 dark:text-slate-200 ml-1 transition-colors">Nomor Induk Siswa (NIS)</span>
<div className="relative group">
<div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
<iconify-icon height="20" icon="lucide:id-card" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 focus:border-primary border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 h-14 placeholder:text-slate-500 dark:placeholder:text-slate-500 pl-12 pr-4 text-base font-medium leading-normal transition-all shadow-sm hover:border-slate-400" id="nis-input" inputmode="numeric" placeholder="Contoh: 1234" type="text"/>
</div>
<p className="hidden text-red-600 dark:text-red-400 text-xs ml-1 font-semibold mt-1 flex items-center gap-1" id="error-message">
<iconify-icon height="14" icon="lucide:alert-circle" width="14"></iconify-icon>
                                NIS tidak ditemukan atau terjadi kesalahan.
                            </p>
</label>
<button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-5 bg-primary hover:bg-primary-dark text-white text-base font-bold leading-normal tracking-[0.015em] transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 active:scale-[0.98] ring-1 ring-inset ring-white/20" id="search-btn">
<span id="btn-text">Cari Data</span>
<span className="hidden animate-spin" id="btn-loader">
<iconify-icon height="20" icon="lucide:loader-2" width="20"></iconify-icon>
</span>
<span className="ml-2" id="btn-icon">
<iconify-icon height="20" icon="lucide:search" strokeWidth="2" width="20"></iconify-icon>
</span>
</button>
</div>
</div>
<div className="flex-1"></div>

<div className="px-6 pb-8 pt-4 flex flex-col items-center gap-6">
<div className="w-full h-px bg-slate-200 dark:bg-slate-800 transition-colors"></div>
<div className="text-center">
<p className="text-slate-900 dark:text-white text-xs font-bold tracking-wide transition-colors">SMK NEGERI 1</p>
<p className="text-slate-500 dark:text-slate-400 text-[10px] mt-1 font-medium transition-colors">© 2024 Portal Akademik.</p>
</div>
</div>
</div>
</div>

<div className="hidden flex-col h-full min-h-screen bg-white dark:bg-[#0f172a] fade-in transition-colors duration-300" id="page-detail">

<div className="sticky top-0 z-50 flex items-center bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-md p-4 pb-2 border-b border-slate-100 dark:border-slate-800 transition-colors">
<button className="text-slate-700 dark:text-white flex size-12 shrink-0 items-center justify-center cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors" id="back-btn">
<iconify-icon height="24" icon="lucide:chevron-left" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight flex-1 text-center pr-12 transition-colors">Detail Laporan</h2>
</div>

<div className="p-6 flex flex-col items-center gap-4">
<div className="flex flex-col items-center gap-3 w-full">
<div className="relative h-24 w-24 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center overflow-hidden border-2 border-primary shadow-lg shadow-primary/20 ring-4 ring-white dark:ring-[#0f172a] transition-all">
<iconify-icon className="text-primary" height="40" icon="lucide:user" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<div className="flex flex-col items-center justify-center">
<h1 className="text-slate-900 dark:text-white text-xl font-bold leading-tight text-center capitalize tracking-tight transition-colors" id="res-nama">Loading...</h1>
<div className="flex items-center gap-2 mt-2">
<span className="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 uppercase tracking-wider transition-colors">NIS: <span className="font-mono text-sm" id="res-nis">...</span></span>
</div>
</div>
</div>
</div>
<div className="h-2 bg-slate-50 dark:bg-slate-950 w-full border-y border-slate-100 dark:border-slate-800 transition-colors"></div>

<div className="flex flex-col">
<div className="px-6 pt-6 pb-3 flex justify-between items-center">
<h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight transition-colors">Status Kehadiran</h3>
<span className="text-xs font-bold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-700 transition-colors">Semester Ini</span>
</div>

<div className="px-6 pb-6">
<div className="w-full bg-gradient-to-br from-primary to-blue-700 rounded-2xl p-5 text-white shadow-xl shadow-primary/25 flex items-center justify-between ring-1 ring-white/10">
<div className="flex flex-col gap-1">
<span className="text-blue-50 text-sm font-semibold opacity-90">Keterangan</span>
<span className="text-3xl font-bold capitalize tracking-tight drop-shadow-sm" id="res-kehadiran">...</span>
</div>
<div className="size-12 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-inner">
<iconify-icon className="text-white" height="24" icon="lucide:calendar" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="h-2 bg-slate-50 dark:bg-slate-950 w-full border-y border-slate-100 dark:border-slate-800 transition-colors"></div>

<div className="flex flex-col flex-1 pb-24">
<h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight px-6 pt-6 pb-2 tracking-tight transition-colors">Ringkasan Nilai</h3>
<div className="px-6 flex flex-col gap-3 mt-2">

<div className="flex justify-between items-center p-4 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/50 rounded-xl shadow-sm hover:border-primary/50 transition-all group">
<div className="flex items-center gap-4">
<div className="size-11 rounded-lg bg-orange-50 dark:bg-orange-900/20 border border-orange-100 dark:border-orange-800/30 flex items-center justify-center text-orange-600 dark:text-orange-400 group-hover:scale-105 transition-transform">
<iconify-icon height="22" icon="lucide:file-text" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-sm font-bold text-slate-900 dark:text-white transition-colors">Nilai PTS</span>
<span className="text-xs font-medium text-slate-500 dark:text-slate-400 transition-colors">Penilaian Tengah Semester</span>
</div>
</div>
<div className="flex flex-col items-end">
<span className="text-xl font-bold text-slate-900 dark:text-white tabular-nums tracking-tight transition-colors" id="res-pts">...</span>
</div>
</div>

<div className="flex justify-between items-center p-4 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/50 rounded-xl shadow-sm hover:border-primary/50 transition-all group">
<div className="flex items-center gap-4">
<div className="size-11 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform">
<iconify-icon height="22" icon="lucide:clipboard-list" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-sm font-bold text-slate-900 dark:text-white transition-colors">Nilai Rapor</span>
<span className="text-xs font-medium text-slate-500 dark:text-slate-400 transition-colors">Hasil Akhir</span>
</div>
</div>
<div className="flex flex-col items-end">
<span className="text-xl font-bold text-slate-900 dark:text-white tabular-nums tracking-tight transition-colors" id="res-rapor">...</span>
</div>
</div>
</div>
</div>

<div className="fixed bottom-0 w-full max-w-[480px] bg-white/90 dark:bg-[#0f172a]/90 backdrop-blur-md p-4 border-t border-slate-200 dark:border-slate-800 z-40 transition-colors">
<button className="w-full rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold h-12 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-2 active:scale-[0.99]" id="home-btn">
<iconify-icon height="18" icon="lucide:search" strokeWidth="2.5" width="18"></iconify-icon>
                    Cari Siswa Lain
                </button>
</div>
</div>
</div>



    </>
  );
}
