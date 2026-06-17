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



        const apiUrl = "https://script.google.com/macros/s/AKfycbxeoMEt5hNYPK2XvvE71TWMxvzSminc-FXGECXyzhpIsr7EVsQxJn_or1Tx5L-zQ-6E/exec?noregis=";

    function toggleDarkMode() {
        document.body.classList.toggle('dark');
        const icon = document.getElementById('themeIcon');
        icon.style.display = 'inline-block';
        icon.animate([
            { transform: 'rotate(0deg) scale(1)' },
            { transform: 'rotate(180deg) scale(1.2)' },
            { transform: 'rotate(360deg) scale(1)' }
        ], { duration: 500, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' });

        setTimeout(() => {
            icon.innerText = document.body.classList.contains('dark') ? '☀️' : '🌙';
        }, 250);
    }

    async function checkResult() {
        const noregis = regInput.value.trim();
        if (!noregis) return;

        const btnSearch = document.getElementById('btnSearch');
        const btnText = document.getElementById('btnText');
        const resultArea = document.getElementById('resultArea');
        const errorArea = document.getElementById('errorArea');

        btnSearch.disabled = true;
        btnText.innerHTML = 'MENCARI DATA<span class="loading-dots"></span>';
        
        resultArea.classList.add('hidden');
        errorArea.classList.add('hidden');
        
        try {
            const res = await fetch(apiUrl + noregis);
            const json = await res.json();

            if (json.status && json.data) {
                showData(json.data);
            } else {
                errorArea.classList.remove('hidden');
            }
        } catch {
            errorArea.classList.remove('hidden');
        } finally {
            btnSearch.disabled = false;
            btnText.innerText = 'LIHAT HASIL TEST';
        }
    }

    function showData(data) {
        const resNama = document.getElementById('resNama');
        const resReg = document.getElementById('resReg');
        const resJK = document.getElementById('resJK');
        const resAsal = document.getElementById('resAsal');
        const resTempat = document.getElementById('resTempat');
        const labelHasil = document.getElementById('labelHasil');
        const bannerHasil = document.getElementById('bannerHasil');
        const resultArea = document.getElementById('resultArea');
        const greetingContent = document.getElementById('greetingContent');
        const waNotif = document.getElementById('waNotif');

        const isLulus = data["HASIL"].toUpperCase() === 'LULUS';

        resNama.innerText = data["NAMA LENGKAP"];
        resReg.innerText = data["NO REGIS"];
        resJK.innerText = data["JENIS KELAMIN"];
        resAsal.innerText = data["ASAL SEKOLAH"] || '-';
        resTempat.innerText = data["DITEMPATKAN DI"];
        labelHasil.innerText = data["HASIL"];

        // Render Greeting Content
        if (isLulus) {
            bannerHasil.style.backgroundColor = 'var(--teal)';
            labelHasil.style.color = 'var(--yellow)';
            waNotif.classList.remove('hidden');
            greetingContent.innerHTML = `
                Assalamu'alaikum Warahmatullahi Wabarakatuh<br><br>
                Kami Panitia Penerimaan Pendidikan Formal Al-Bahjah memberitahukan bahwa berdasarkan hasil seleksi Penerimaan Santri Baru, ananda dinyatakan <span class="bg-teal-600 text-white px-1">DITERIMA</span>.<br><br>
                Semoga ini menjadi awal yang baik dan penuh keberkahan bagi ananda dalam menuntut ilmu. Kami memohon doa restu agar proses pendidikan berjalan lancar dan diridhoi Allah SWT.<br><br>
                Informasi mengenai daftar ulang akan kami sampaikan pada notifikasi selanjutnya. <b>Jazakumullah khairan katsiran.</b>
            `;
        } else {
            bannerHasil.style.backgroundColor = 'var(--primary)';
            labelHasil.style.color = 'white';
            waNotif.classList.add('hidden');
            greetingContent.innerHTML = `
                Assalamu'alaikum Warahmatullahi Wabarakatuh<br><br>
                Kami Panitia Penerimaan Pendidikan Formal Al-Bahjah memberitahukan hasil seleksi sebagai berikut:
            `;
        }

        resultArea.classList.remove('hidden');
        resultArea.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    regInput.addEventListener('keypress', e => {
        if (e.key === 'Enter') checkResult();
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
      

<div className="fixed top-4 right-4 no-print z-50">
<button className="btn-neo bg-[#F1C40F] p-1.5 rounded-none flex items-center justify-center" onclick="toggleDarkMode()">
<span className="text-xl font-geist-mono" id="themeIcon" style={{}}>🌙</span>
</button>
</div>
<div className="w-full max-w-md" style={{}}>

<header className="text-center mb-10" style={{}}>
<div className="neo-box bg-[#A8DADC] inline-block px-6 py-2 mb-4" style={{}}>
<h1 className="text-xl font-extrabold font-geist-mono" style={{color: 'var(--navy)'}}>PSB AL-BAHJAH</h1>
</div>
<p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80 font-geist-mono" style={{}}>Portal Hasil Seleksi Pendidikan
                Formal</p>
</header>

<div className="neo-box p-6 mb-6" id="searchSection">
<label className="block text-[10px] font-black mb-3 uppercase tracking-tight font-geist-mono" style={{}}>Masukkan No. Registrasi</label>
<input className="input-neo w-full mb-4 text-sm bg-white" id="regInput" placeholder="Contoh: 20260238" type="text"/>
<button className="btn-neo bg-[#2A9D8F] text-white w-full py-4 text-sm tracking-widest" id="btnSearch" onclick="checkResult()">
<span className="font-geist-mono" id="btnText" style={{}}>LIHAT HASIL TEST</span>
</button>
</div>

<div className="hidden" id="resultArea">
<div className="neo-box overflow-hidden animate-reveal">

<div className="p-5 text-[10px] leading-relaxed font-bold border-b-2 border-dashed border-gray-400 bg-gray-50 dark:bg-[#112233] text-[#1D3557] dark:text-white transition-colors duration-300" id="greetingContent">

</div>

<div className="p-6 text-center transition-all duration-500" id="bannerHasil">
<span className="text-4xl font-black italic uppercase tracking-tighter" id="labelHasil"></span>
</div>

<div className="p-6 space-y-4">
<div className="flex justify-between items-end border-b-2 border-gray-100 dark:border-gray-700 pb-2">
<span className="label-text font-geist-mono" style={{}}>Nama Lengkap</span>
<span className="value-text text-xs uppercase font-geist-mono" id="resNama" style={{}}>-</span>
</div>
<div className="flex justify-between items-end border-b-2 border-gray-100 dark:border-gray-700 pb-2">
<span className="label-text font-geist-mono" style={{}}>No. Regis</span>
<span className="value-text text-xs font-geist-mono" id="resReg" style={{}}>-</span>
</div>
<div className="flex justify-between items-end border-b-2 border-gray-100 dark:border-gray-700 pb-2">
<span className="label-text font-geist-mono" style={{}}>Asal Sekolah</span>
<span className="value-text text-[10px] text-right max-w-[60%] font-geist-mono" id="resAsal" style={{}}>-</span>
</div>
<div className="flex justify-between items-end border-b-2 border-gray-100 dark:border-gray-700 pb-2">
<span className="label-text font-geist-mono" style={{}}>Unit Penempatan</span>
<span className="value-text text-[10px] text-right text-[#2A9D8F] dark:text-[#49e0d0] font-geist-mono" id="resTempat" style={{}}>-</span>
</div>
<div className="flex justify-between items-end">
<span className="label-text font-geist-mono" style={{}}>Jenis Kelamin</span>
<span className="value-text text-[10px] uppercase font-geist-mono" id="resJK" style={{}}>-</span>
</div>
</div>

<div className="hidden mx-5 mb-5 p-4 bg-green-50 border-2 border-green-600 dark:bg-green-900/20 dark:border-green-400" id="waNotif">
<div className="flex items-start gap-3">
<span className="text-xl font-geist-mono" style={{}}>📩</span>
<div>
<p className="text-[10px] font-black text-green-800 dark:text-green-300 uppercase mb-1 font-geist-mono" style={{}}>Dokumen
                                SK Telah Dikirim</p>
<p className="text-[9px] text-green-700 dark:text-green-400 leading-tight font-geist-mono" style={{}}>File PDF Surat
                                Keputusan (SK) kelulusan resmi telah dikirimkan secara otomatis ke nomor
                                 yang terdaftar. Silakan cek aplikasi WhatsApp Anda.</p>
</div>
</div>
</div>

<div className="p-5 text-[9px] bg-gray-50 dark:bg-[#112233] border-t-2 border-dashed border-gray-400 transition-colors duration-300">
<div className="text-right font-black uppercase text-[#1D3557] dark:text-white mb-4 font-geist-mono" style={{}}>
                        Pendidikan Formal Al-BahjahPanitia PSB
                    </div>
<p className="text-center font-black uppercase text-sm tracking-tight border-t border-gray-200 dark:border-gray-700 pt-4 font-geist-mono" style={{}}>
                        Wassalamu'alaikum Warahmatullahi Wabarakatuh
                    </p>
</div>
</div>
</div>

<div className="hidden neo-box bg-[#E63946] p-8 text-center text-white animate-reveal" id="errorArea">
<p className="text-base font-black uppercase tracking-widest font-geist-mono" style={{}}>Data Tidak Ditemukan</p>
<p className="text-[10px] mt-2 font-bold opacity-80 font-geist-mono" style={{}}>Mohon periksa kembali nomor registrasi Anda dengan teliti.
            </p>
</div>
<footer className="mt-12 text-center text-[10px] font-bold tracking-widest opacity-40 no-print uppercase font-geist-mono" style={{}}>
            Pendidikan Formal Al-Bahjah © 2026
        </footer>
</div>


    </>
  );
}
