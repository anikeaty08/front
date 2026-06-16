import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        function submitForm() {
            const form = document.getElementById('report-form');
            const success = document.getElementById('success-message');
            form.style.display = 'none';
            success.classList.remove('hidden');
            success.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        function resetForm() {
            const form = document.getElementById('report-form');
            const success = document.getElementById('success-message');
            form.reset();
            success.classList.add('hidden');
            form.style.display = 'block';
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-stone-200 glass-panel">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-bold tracking-tight flex items-center gap-2.5 text-emerald-700" href="#">

<svg className="w-8 h-8 fill-current" viewbox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
<path d="M8 6h9l2 15c0.5 3 3.5 3 4 0l2-15h9l-6 28h-10l-3-16c-0.5-3-3.5-3-4 0l-3 16h-10z"></path>
</svg>
                WALK AT
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-500">
<a className="hover:text-emerald-700 transition-colors" href="#map">Peta</a>
<a className="hover:text-emerald-700 transition-colors" href="#report">Lapor</a>
<a className="hover:text-emerald-700 transition-colors" href="#insights">Statistik</a>
<a className="hover:text-emerald-700 transition-colors" href="#about">Tentang</a>
</div>
<a className="hidden md:flex items-center justify-center px-4 py-2 bg-emerald-800 text-emerald-50 text-xs font-medium rounded-md hover:bg-emerald-900 transition-all shadow-sm border border-emerald-900" href="#report">
                Lapor Sekarang
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-40 md:pb-24 px-6 max-w-7xl mx-auto overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="max-w-2xl relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-200 bg-white shadow-sm text-xs font-medium text-stone-600 mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Platform Partisipasi Warga
                </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-stone-900 leading-[1.05] mb-6">
                    WALK AT — <br/>
                    Warga Melapor, <br/>
<span className="text-stone-400">Kota Berbenah.</span>
</h1>
<p className="text-lg md:text-xl text-stone-600 font-light max-w-lg leading-relaxed mb-8">
                    Platform pelaporan kondisi trotoar Kota Malang untuk mewujudkan ruang berjalan kaki yang aman, nyaman, dan inklusif bagi semua.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mb-10">
<a className="inline-flex items-center justify-center px-6 py-3 bg-emerald-800 text-white text-sm font-medium rounded-lg hover:bg-emerald-900 transition-all shadow-lg shadow-emerald-900/10 gap-2 group" href="#report">
                        Laporkan Kondisi Trotoar
                        <i className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>

<div className="border-t border-stone-200 pt-8">
<h3 className="text-sm font-bold text-stone-900 uppercase tracking-wide mb-2">About Walk At</h3>
<p className="text-sm text-stone-600 leading-relaxed max-w-lg">
                        Walk At adalah platform partisipasi warga yang memungkinkan siapa saja menilai kondisi trotoar, mengunggah foto, dan melaporkan hambatan langsung ke pemerintah kota. Dengan data crowd-sourced, Walk At membantu Malang memperbaiki trotoar secara lebih cepat, tepat, dan transparan.
                    </p>
<p className="mt-4 text-emerald-800 font-medium text-sm italic">
                        "Bersama, kita membangun kota yang lebih aman untuk pejalan kaki."
                    </p>
</div>
</div>

<div className="relative h-full min-h-[400px] lg:h-[600px] w-full">

<div className="absolute inset-0 bg-stone-200 rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 ease-out">
<img alt="Pejalan Kaki di Trotoar" className="w-full h-full object-cover opacity-90 grayscale-[20%] hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white max-w-xs">
<p className="text-sm font-medium">Jl. Ijen Boulevard</p>
<p className="text-xs text-white/80">Malang, Jawa Timur</p>
</div>
</div>

<div className="absolute -bottom-6 -left-6 md:bottom-12 md:-left-12 bg-[#fdfbf7] p-5 rounded-xl shadow-xl border border-stone-100 max-w-[240px] z-20 hidden md:block">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
<i className="w-5 h-5" data-lucide="check"></i>
</div>
<div>
<div className="text-xs font-bold text-stone-900">Baru Diperbaiki</div>
<div className="text-[10px] text-stone-500">Jl. Kawi, 2 jam yang lalu</div>
</div>
</div>
<div className="h-1.5 w-full bg-stone-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-[80%] rounded-full"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#e7e5e4] border-y border-stone-200" id="map">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl font-medium tracking-tight text-stone-900 mb-4">Peta Walkability Kota Malang</h2>
<p className="text-stone-600 font-light">
                        Lihat laporan warga mengenai kondisi trotoar secara real-time. Setiap titik menunjukkan tingkat kelayakan jalur pejalan kaki di lokasi tertentu.
                    </p>
</div>
<div className="flex flex-col gap-2">
<div className="flex flex-wrap items-center gap-4 text-xs font-medium bg-[#fafaf9] px-4 py-3 rounded-lg border border-stone-300 shadow-sm">
<div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>Walkable: aman digunakan</div>
<div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>Moderate: ada gangguan ringan</div>
<div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-800"></span>Not Walkable: tidak aman/rusak</div>
</div>
<p className="text-[11px] text-stone-500 text-right italic mt-1">
                        *Klik titik pada peta untuk melihat detail laporan, foto, dan deskripsi masalah.
                    </p>
</div>
</div>
<div className="relative w-full aspect-[16/9] bg-[#f5f5f4] rounded-xl border border-stone-300 overflow-hidden shadow-md map-grid group">

<div className="absolute top-1/2 left-0 w-full h-3 bg-stone-200/50 -translate-y-1/2"></div>
<div className="absolute top-0 left-1/3 w-3 h-full bg-stone-200/50"></div>
<div className="absolute top-0 left-2/3 w-3 h-full bg-stone-200/50"></div>
<div className="absolute top-1/3 left-1/4 w-40 h-40 border-2 border-stone-300 rounded-full opacity-20"></div>

<div className="absolute top-[45%] left-[30%] group/point z-20">
<div className="w-4 h-4 bg-emerald-600 rounded-full border-2 border-white shadow-lg cursor-pointer hover:scale-125 transition-transform"></div>
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-56 bg-white p-0 rounded-lg shadow-xl border border-stone-100 opacity-0 group-hover/point:opacity-100 transition-opacity pointer-events-none overflow-hidden">
<img className="w-full h-24 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="p-3">
<div className="text-xs font-bold text-stone-900">Kayutangan Heritage</div>
<div className="text-[10px] text-stone-500 mt-1">Kondisi sangat baik, lebar dan bersih.</div>
</div>
</div>
</div>

<div className="absolute top-[55%] left-[70%] group/point z-20">
<div className="w-4 h-4 bg-red-800 rounded-full border-2 border-white shadow-lg cursor-pointer hover:scale-125 transition-transform animate-pulse"></div>
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-48 bg-white p-3 rounded-lg shadow-xl border border-stone-100 opacity-0 group-hover/point:opacity-100 transition-opacity pointer-events-none">
<div className="flex items-start gap-2">
<i className="w-4 h-4 text-red-600 shrink-0 mt-0.5" data-lucide="alert-triangle"></i>
<div>
<div className="text-xs font-bold text-stone-900">Pasar Besar</div>
<div className="text-[10px] text-stone-500 mt-1">Trotoar berlubang, tertutup PKL.</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-6xl mx-auto px-6" id="report">
<div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

<div className="lg:col-span-2 space-y-6">
<div className="sticky top-24">
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 mb-4">Laporkan Kondisi Trotoar</h2>
<p className="text-stone-600 font-light mb-8">
                        Bantu perbaikan trotoar di Kota Malang dengan memberikan laporan singkat berdasarkan pengalaman Anda berjalan kaki.
                    </p>
<div className="bg-emerald-900 rounded-2xl overflow-hidden shadow-lg relative aspect-[4/5]">
<img className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute bottom-0 left-0 w-full p-6 text-emerald-50 bg-gradient-to-t from-emerald-950 to-transparent">
<blockquote className="text-sm italic font-light mb-4">"Partisipasi Anda adalah langkah awal perubahan."</blockquote>
<div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-300">
<span className="w-8 h-[1px] bg-emerald-300"></span> Walk At Initiative
                            </div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3">
<div className="bg-white border border-stone-200 rounded-2xl p-6 md:p-10 shadow-sm relative" id="form-container">

<div className="absolute top-0 right-0 p-4 opacity-10">
<i className="w-24 h-24 text-stone-900" data-lucide="pen-tool"></i>
</div>
<form className="space-y-8 relative z-10" id="report-form" onsubmit="event.preventDefault(); submitForm();">

<div>
<label className="block text-sm font-semibold text-stone-900 mb-2 uppercase tracking-wide text-xs">Lokasi</label>
<div className="relative">
<input className="w-full rounded-lg border border-stone-200 bg-stone-100 p-3 pl-10 text-sm text-stone-500 cursor-not-allowed" readonly="" type="text" value="-7.983908, 112.621391 (Terdeteksi)"/>
<i className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="map-pin"></i>
</div>
<p className="text-[10px] text-stone-400 mt-1">Lokasi akan terdeteksi otomatis berdasarkan GPS.</p>
</div>

<div>
<label className="block text-sm font-semibold text-stone-900 mb-3 uppercase tracking-wide text-xs">Rating Trotoar</label>
<p className="text-xs text-stone-500 mb-3">Pilih tingkat kelayakan trotoar.</p>
<div className="grid grid-cols-2 gap-4">
<label className="relative cursor-pointer group">
<input className="peer sr-only" name="rating" type="radio" value="walkable"/>
<div className="p-4 rounded-xl border border-stone-200 bg-stone-50 peer-checked:border-emerald-600 peer-checked:bg-emerald-50 hover:border-emerald-300 transition-all flex flex-col items-center gap-3 text-center h-full justify-center">
<div className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center peer-checked:bg-emerald-600 peer-checked:text-white transition-colors">
<i className="w-5 h-5" data-lucide="thumbs-up"></i>
</div>
<span className="text-sm font-medium text-stone-700 peer-checked:text-emerald-800">Walkable</span>
</div>
</label>
<label className="relative cursor-pointer group">
<input className="peer sr-only" name="rating" type="radio" value="not-walkable"/>
<div className="p-4 rounded-xl border border-stone-200 bg-stone-50 peer-checked:border-red-700 peer-checked:bg-red-50 hover:border-red-300 transition-all flex flex-col items-center gap-3 text-center h-full justify-center">
<div className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center peer-checked:bg-red-700 peer-checked:text-white transition-colors">
<i className="w-5 h-5" data-lucide="thumbs-down"></i>
</div>
<span className="text-sm font-medium text-stone-700 peer-checked:text-red-800">Not Walkable</span>
</div>
</label>
</div>
</div>

<div>
<label className="block text-sm font-semibold text-stone-900 mb-3 uppercase tracking-wide text-xs">Unggah Foto</label>
<div className="border-2 border-dashed border-stone-300 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-stone-50 hover:border-emerald-500 transition-colors cursor-pointer group bg-[#fdfbf7]">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-stone-400 group-hover:text-emerald-600 transition-colors" data-lucide="camera"></i>
</div>
<p className="text-sm text-stone-600 font-medium">Tambahkan foto kondisi trotoar</p>
</div>
</div>

<div>
<label className="block text-sm font-semibold text-stone-900 mb-2 uppercase tracking-wide text-xs" htmlFor="desc">Deskripsi</label>
<textarea className="w-full rounded-lg border border-stone-200 bg-stone-50 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition-all placeholder:text-stone-400" id="desc" placeholder="Jelaskan gangguan atau masalah yang Anda temukan di lokasi..." rows="3"></textarea>
</div>

<div className="pt-2">
<button className="w-full py-4 bg-stone-900 text-[#fafaf9] text-sm font-semibold tracking-wide rounded-lg hover:bg-emerald-800 focus:ring-4 focus:ring-stone-200 transition-all flex items-center justify-center gap-2 shadow-lg" type="submit">
                                Kirim Laporan
                            </button>
</div>
</form>

<div className="hidden text-center py-20" id="success-message">
<div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
<i className="w-10 h-10 text-emerald-600" data-lucide="check"></i>
</div>
<h3 className="text-2xl font-semibold text-stone-900 mb-2">Terima kasih!</h3>
<p className="text-stone-500 text-sm max-w-sm mx-auto leading-relaxed mb-8">
                            Laporan Anda telah diterima dan diteruskan kepada Dinas Perhubungan Kota Malang untuk ditindaklanjuti.
                        </p>
<button className="px-6 py-2 rounded-full border border-stone-300 text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-50 transition-colors" onclick="resetForm()">
                            Kirim laporan lain
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#fafaf9] border-t border-stone-200" id="insights">
<div className="max-w-7xl mx-auto px-6">

<div className="mb-12 max-w-4xl">
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 mb-4">Data &amp; Statistik Trotoar Kota Malang</h2>
<p className="text-stone-600 leading-relaxed max-w-3xl">
                    Pantau perkembangan kondisi trotoar melalui data yang dikumpulkan dari laporan warga. Statistik ini membantu pemerintah dan masyarakat memahami area prioritas perbaikan.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

<div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 flex items-start gap-4 hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center shrink-0 text-white shadow-md shadow-blue-200">
<i className="w-6 h-6" data-lucide="file-text"></i>
</div>
<div>
<div className="text-sm text-stone-500 font-medium mb-1">Total Laporan Masuk</div>
<div className="text-2xl font-bold text-stone-900 tracking-tight">247</div>
</div>
</div>

<div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 flex items-start gap-4 hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center shrink-0 text-white shadow-md shadow-emerald-200">
<i className="w-6 h-6" data-lucide="check-circle"></i>
</div>
<div>
<div className="text-sm text-stone-500 font-medium mb-1">Persentase Trotoar Layak</div>
<div className="text-2xl font-bold text-stone-900 tracking-tight">62%</div>
</div>
</div>

<div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 flex items-start gap-4 hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-purple-500 flex items-center justify-center shrink-0 text-white shadow-md shadow-purple-200">
<i className="w-6 h-6" data-lucide="map-pin"></i>
</div>
<div>
<div className="text-sm text-stone-500 font-medium mb-1">Wilayah Tertinggi</div>
<div className="text-2xl font-bold text-stone-900 tracking-tight">Lowokwaru</div>
</div>
</div>

<div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 flex items-start gap-4 hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center shrink-0 text-white shadow-md shadow-orange-200">
<i className="w-6 h-6" data-lucide="trending-up"></i>
</div>
<div>
<div className="text-sm text-stone-500 font-medium mb-1">Tren Bulanan</div>
<div className="text-2xl font-bold text-stone-900 tracking-tight">+22%</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 h-full flex flex-col">
<h3 className="text-lg font-semibold text-stone-900 mb-8">Distribusi Rating Trotoar</h3>
<div className="flex-1 flex flex-col items-center justify-center relative min-h-[300px]">
<div className="w-64 h-64 rounded-full relative shadow-inner" style={{background: 'conic-gradient(#10b981 0% 62%, #eab308 62% 83%, #ef4444 83% 100%)'}}></div>

<div className="absolute top-[20%] right-[10%] lg:right-[5%] text-emerald-600 font-medium text-sm bg-white/90 border border-stone-100 px-3 py-1.5 rounded-lg shadow-sm backdrop-blur-sm pointer-events-none">
                            Walkable: 62%
                        </div>
<div className="absolute bottom-[20%] right-[10%] lg:right-[5%] text-red-600 font-medium text-sm bg-white/90 border border-stone-100 px-3 py-1.5 rounded-lg shadow-sm backdrop-blur-sm pointer-events-none">
                            Not Walkable: 17%
                        </div>
<div className="absolute bottom-[10%] left-[20%] lg:left-[15%] text-yellow-600 font-medium text-sm bg-white/90 border border-stone-100 px-3 py-1.5 rounded-lg shadow-sm backdrop-blur-sm pointer-events-none">
                            Moderate: 21%
                        </div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 h-full">
<h3 className="text-lg font-semibold text-stone-900 mb-8">Wilayah dengan Laporan Tertinggi</h3>
<div className="relative h-64 w-full mt-4">

<div className="absolute inset-0 flex flex-col justify-between text-xs text-stone-400 font-mono">
<div className="border-b border-stone-100 w-full h-0 relative"><span className="absolute -left-8 -top-2">80</span></div>
<div className="border-b border-stone-100 w-full h-0 relative"><span className="absolute -left-8 -top-2">60</span></div>
<div className="border-b border-stone-100 w-full h-0 relative"><span className="absolute -left-8 -top-2">40</span></div>
<div className="border-b border-stone-100 w-full h-0 relative"><span className="absolute -left-8 -top-2">20</span></div>
<div className="border-b border-stone-200 w-full h-0 relative"><span className="absolute -left-8 -top-2">0</span></div>
</div>

<div className="absolute inset-0 flex items-end justify-between pl-4 pr-2 pt-4">
<div className="w-full mx-2 flex flex-col justify-end group relative h-full">
<div className="bg-emerald-500 w-full rounded-t-sm hover:bg-emerald-600 transition-colors relative" style={{height: '87.5%'}}>
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-stone-900 text-white text-xs py-1 px-2 rounded transition-opacity shadow-lg z-10">70</div>
</div>
<div className="text-[10px] md:text-xs text-stone-500 mt-3 text-center -rotate-45 origin-top-left translate-y-2 font-medium truncate w-full">Lowokwaru</div>
</div>
<div className="w-full mx-2 flex flex-col justify-end group relative h-full">
<div className="bg-emerald-500 w-full rounded-t-sm hover:bg-emerald-600 transition-colors relative" style={{height: '68%'}}>
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-stone-900 text-white text-xs py-1 px-2 rounded transition-opacity shadow-lg z-10">55</div>
</div>
<div className="text-[10px] md:text-xs text-stone-500 mt-3 text-center -rotate-45 origin-top-left translate-y-2 font-medium truncate w-full">Kec. Klojen</div>
</div>
<div className="w-full mx-2 flex flex-col justify-end group relative h-full">
<div className="bg-emerald-500 w-full rounded-t-sm hover:bg-emerald-600 transition-colors relative" style={{height: '52%'}}>
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-stone-900 text-white text-xs py-1 px-2 rounded transition-opacity shadow-lg z-10">42</div>
</div>
<div className="text-[10px] md:text-xs text-stone-500 mt-3 text-center -rotate-45 origin-top-left translate-y-2 font-medium truncate w-full">Kec. Blimbing</div>
</div>
<div className="w-full mx-2 flex flex-col justify-end group relative h-full">
<div className="bg-emerald-500 w-full rounded-t-sm hover:bg-emerald-600 transition-colors relative" style={{height: '47%'}}>
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-stone-900 text-white text-xs py-1 px-2 rounded transition-opacity shadow-lg z-10">38</div>
</div>
<div className="text-[10px] md:text-xs text-stone-500 mt-3 text-center -rotate-45 origin-top-left translate-y-2 font-medium truncate w-full">Kec. Sukun</div>
</div>
<div className="w-full mx-2 flex flex-col justify-end group relative h-full">
<div className="bg-emerald-500 w-full rounded-t-sm hover:bg-emerald-600 transition-colors relative" style={{height: '56%'}}>
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-stone-900 text-white text-xs py-1 px-2 rounded transition-opacity shadow-lg z-10">45</div>
</div>
<div className="text-[10px] md:text-xs text-stone-500 mt-3 text-center -rotate-45 origin-top-left translate-y-2 font-medium truncate w-full">Kedungkandang</div>
</div>
</div>
</div>
<div className="h-10"></div>
</div>
</div>
<p className="text-center text-stone-500 text-sm italic">"Data Anda membantu membuat kota lebih ramah pejalan kaki."</p>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6 relative overflow-hidden" id="about">

<div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl -z-10 pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

<div className="lg:col-span-7 lg:pr-8">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-stone-900 mb-6 leading-[1.1]">
                    Tentang <span className="text-emerald-700">Walk At</span>
</h2>
<div className="space-y-6 text-lg text-stone-600 font-light leading-relaxed mb-10">
<p>
                        Walk At dikembangkan sebagai bagian dari inisiatif <strong className="text-stone-900 font-medium">Creative Governance for Urban Problems</strong> untuk menjawab tantangan keterbatasan fasilitas pejalan kaki di Kota Malang.
                    </p>
<p>
                        Platform ini menghubungkan warga dengan pemerintah melalui laporan trotoar yang cepat, mudah, dan akurat.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-stone-200 pt-10">
<div>
<h3 className="text-sm font-bold text-stone-900 uppercase tracking-wide mb-3 flex items-center gap-2">
<i className="w-4 h-4 text-emerald-600" data-lucide="target"></i> Mission Statement
                        </h3>
<p className="text-stone-600 text-sm leading-relaxed">
                            Mewujudkan trotoar yang aman, inklusif, dan dapat diakses semua orang.
                        </p>
</div>
<div>
<h3 className="text-sm font-bold text-stone-900 uppercase tracking-wide mb-3 flex items-center gap-2">
<i className="w-4 h-4 text-emerald-600" data-lucide="eye"></i> Vision Statement
                        </h3>
<p className="text-stone-600 text-sm leading-relaxed">
                            Kota Malang yang lebih manusiawi, ramah pejalan kaki, dan responsif terhadap kebutuhan publik.
                        </p>
</div>
</div>
<div className="mt-10 bg-stone-100 p-5 rounded-xl flex items-start gap-4">
<div className="p-2 bg-white rounded-lg shadow-sm">
<i className="w-5 h-5 text-stone-700" data-lucide="users"></i>
</div>
<div>
<h4 className="font-bold text-stone-900 text-sm">Team Note</h4>
<p className="text-stone-500 text-sm mt-1">
                            Walk At diciptakan oleh mahasiswa <span className="text-stone-900 font-medium">Universitas Brawijaya</span> sebagai bentuk kontribusi nyata terhadap tata kelola kota yang lebih baik.
                        </p>
</div>
</div>
</div>

<div className="lg:col-span-5 relative mt-8 lg:mt-0">

<div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white rotate-1 hover:rotate-0 transition-all duration-700 ease-out group">
<img alt="Komunitas Walk At" className="w-full h-auto object-cover grayscale-[10%] group-hover:grayscale-0 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>

<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
<p className="text-white text-sm font-medium">Kolaborasi Mahasiswa &amp; Warga</p>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 bg-stone-100 border-t border-stone-200">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">

<svg className="w-6 h-6 text-emerald-700 fill-current" viewbox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
<path d="M8 6h9l2 15c0.5 3 3.5 3 4 0l2-15h9l-6 28h-10l-3-16c-0.5-3-3.5-3-4 0l-3 16h-10z"></path>
</svg>
<span className="text-sm font-bold tracking-tight text-stone-900">WALK AT</span>
</div>
<div className="text-center md:text-right">
<p className="text-sm font-medium text-stone-600">© 2025 Walk At – Platform Pelaporan Trotoar Kota Malang</p>
<p className="text-xs text-stone-400 mt-1">Didukung oleh kolaborasi warga, komunitas, dan pemerintah kota</p>
</div>
</div>
</footer>


    </>
  );
}
