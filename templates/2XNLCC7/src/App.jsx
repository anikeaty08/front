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
      
    lucide.createIcons();
    const steps = ['step1','step2','step3'];
    let current = 0;

    function showStep(idx){
      steps.forEach((id,i)=>document.getElementById(id).classList.toggle('hidden',i!==idx));
      document.getElementById('bar').style.width=((idx+1)/steps.length*100)+'%';
      current=idx;
    }
    function next(){ if(current<steps.length-1) showStep(current+1) }
    function prev(){ if(current>0) showStep(current-1) }

    function markUploaded(){
      const input = document.getElementById('file');
      const label = document.getElementById('fileName');
      if(input.files.length){
        label.textContent = input.files[0].name;
        label.classList.remove('hidden');
        const btn = document.getElementById('submitBtn');
        btn.disabled = false;
        btn.classList.remove('opacity-40','cursor-not-allowed');
      }
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
      

<div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl overflow-hidden relative" id="app">

<div className="absolute top-0 left-0 w-full h-1 bg-gray-200">
<div className="h-1 bg-indigo-500 transition-all duration-500" id="bar" style={{width: '33%'}}></div>
</div>

<section className="p-8 space-y-6 animate-fadeIn" id="step1">
<h1 className="text-2xl font-semibold tracking-tight">Registrasi</h1>
<p className="text-sm text-gray-600">Isi data diri untuk melanjutkan ke pembayaran.</p>
<form className="space-y-5" id="regForm">
<div>
<label className="block text-sm font-medium mb-1">Nama Lengkap</label>
<input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Indonesia Eka" required="" type="text"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div>
<label className="block text-sm font-medium mb-1">Email</label>
<input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="nama@email.com" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium mb-1">Nomor HP / WA</label>
<input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="08xxxxxxxxxx" required="" type="tel"/>
</div>
</div>
<div>
<label className="block text-sm font-medium mb-1">Paket Pendaftaran</label>
<select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none">
<option>Basic – Rp150.000</option>
<option>Pro – Rp250.000</option>
<option>Elite – Rp450.000</option>
</select>
</div>
<button className="w-full inline-flex justify-center items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg px-4 py-3 transition" onclick="next()" type="button">
          Lanjut ke Pembayaran
          <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</form>
</section>

<section className="hidden p-8 space-y-6 animate-slideInRight" id="step2">
<h2 className="text-2xl font-semibold tracking-tight">Instruksi Pembayaran</h2>
<div className="divide-y divide-gray-200 rounded-lg border border-gray-200">

<div className="flex items-start gap-4 p-6">
<img alt="" className="w-12 h-12 rounded-lg object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="flex-1">
<p className="font-medium">Transfer Bank (ATM / m-Banking / iBanking)</p>
<p className="text-sm text-gray-600 mt-1">Silakan lakukan pembayaran ke rekening berikut:</p>
<ul className="mt-3 space-y-1 text-sm">
<li>Bank BCA – 123-456-789 a.n. PT Event Indonesia</li>
<li>Bank Mandiri – 987-654-321 a.n. PT Event Indonesia</li>
</ul>
</div>
</div>

<div className="flex items-start gap-4 p-6">
<img alt="" className="w-12 h-12 rounded-lg object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="flex-1">
<p className="font-medium">E-Wallet / QRIS</p>
<p className="text-sm text-gray-600 mt-1">Scan QRIS di bawah ini atau kirim ke nomor:</p>
<p className="text-sm font-medium mt-1">0812-3456-7890</p>
</div>
</div>
</div>

<div>
<label className="block text-sm font-medium mb-2">Upload Bukti Transfer</label>
<div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-indigo-400 transition" onclick="document.getElementById('file').click()">
<i className="w-8 h-8 text-gray-400 mb-3" data-lucide="upload-cloud"></i>
<p className="text-sm text-gray-600">Seret &amp; taruh atau klik untuk memilih file</p>
<input accept="image/*,application/pdf" className="hidden" id="file" onchange="markUploaded()" type="file"/>
<span className="mt-2 text-sm text-indigo-600 font-medium hidden" id="fileName"></span>
</div>
</div>
<div className="flex justify-between">
<button className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 transition" onclick="prev()" type="button">
<i className="w-4 h-4" data-lucide="arrow-left"></i>Kembali
        </button>
<button className="inline-flex justify-center items-center gap-2 bg-indigo-600 text-white font-medium rounded-lg px-5 py-3 opacity-40 cursor-not-allowed transition" disabled="" id="submitBtn" onclick="next()" type="button">
          Konfirmasi Pembayaran
          <i className="w-4 h-4" data-lucide="check-circle"></i>
</button>
</div>
</section>

<section className="hidden p-8 space-y-6 text-center animate-fadeIn" id="step3">
<i className="w-16 h-16 text-green-500 mx-auto" data-lucide="check-circle"></i>
<h3 className="text-2xl font-semibold tracking-tight">Pembayaran Berhasil Dikirim</h3>
<p className="text-gray-600 max-w-sm mx-auto">Terima kasih! Tim kami akan memverifikasi pembayaran Anda dalam 1×24 jam dan mengirimkan konfirmasi melalui email/WhatsApp.</p>
<a className="inline-flex items-center gap-2 mt-4 text-indigo-600 hover:underline" href="#">
        Kembali ke Beranda
        <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
</section>
</div>

<style>
    @keyframes fadeIn {from{opacity:0}to{opacity:1}}
    .animate-fadeIn{animation:fadeIn .6s both}
    @keyframes slideInRight {from{opacity:0;transform:translateX(40px)}to{opacity:1;transform:translateX(0)}}
    .animate-slideInRight{animation:slideInRight .6s both}
  </style>


    </>
  );
}
