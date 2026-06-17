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



        const openModal = (modalId) => {
            const modal = document.getElementById(modalId);
            const overlay = modal.querySelector('.overlay-bg');
            const content = modal.querySelector('.content-box');
            
            modal.classList.remove('hidden');
            void modal.offsetWidth;
            
            overlay.classList.remove('opacity-0');
            overlay.classList.add('opacity-100');
            
            content.classList.remove('opacity-0', 'translate-y-8');
            content.classList.add('opacity-100', 'translate-y-0');
            
            document.body.style.overflow = 'hidden';
        };

        const closeModal = (modalId) => {
            const modal = document.getElementById(modalId);
            const overlay = modal.querySelector('.overlay-bg');
            const content = modal.querySelector('.content-box');
            
            overlay.classList.remove('opacity-100');
            overlay.classList.add('opacity-0');
            
            content.classList.remove('opacity-100', 'translate-y-0');
            content.classList.add('opacity-0', 'translate-y-8');
            
            setTimeout(() => {
                modal.classList.add('hidden');
                document.body.style.overflow = '';
            }, 500); 
        };

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const openModals = document.querySelectorAll('[id^="modal-"]:not(.hidden)');
                openModals.forEach(modal => closeModal(modal.id));
            }
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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(#292823 1px, transparent 1px), linear-gradient(90deg, #292823 1px, transparent 1px)', backgroundSize: '4rem 4rem'}}></div>

<div className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vh] bg-[#292823] rounded-[45%] mix-blend-multiply filter blur-[100px] lg:blur-[120px] opacity-[0.04] animate-[spin_40s_linear_infinite]"></div>
<div className="absolute -bottom-[20%] -right-[10%] w-[70vw] h-[50vh] bg-[#292823] rounded-[40%] mix-blend-multiply filter blur-[100px] lg:blur-[120px] opacity-[0.05] animate-[spin_30s_linear_infinite_reverse]"></div>

<div className="absolute top-[15%] right-[10%] md:right-[20%] text-[#292823] opacity-10 animate-[bounce_6s_infinite_ease-in-out]">
<iconify-icon className="animate-[spin_20s_linear_infinite]" height="32" icon="solar:asterisk-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="absolute bottom-[20%] left-[5%] md:left-[15%] text-[#292823] opacity-10 animate-[bounce_8s_infinite_ease-in-out]" style={{animationDelay: '1s'}}>
<iconify-icon className="animate-[spin_25s_linear_infinite_reverse]" height="40" icon="solar:add-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<div className="absolute top-[40%] left-[80%] text-[#292823] opacity-[0.07] animate-[bounce_10s_infinite_ease-in-out]" style={{animationDelay: '2s'}}>
<iconify-icon className="animate-[spin_35s_linear_infinite]" height="48" icon="solar:target-linear" strokeWidth="1.5" width="48"></iconify-icon>
</div>
<div className="absolute top-[70%] left-[40%] text-[#292823] opacity-[0.08] animate-[bounce_7s_infinite_ease-in-out]" style={{animationDelay: '0.5s'}}>
<iconify-icon className="animate-[spin_15s_linear_infinite_reverse]" height="24" icon="solar:maximize-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<main className="w-full max-w-4xl relative z-10 backdrop-blur-[2px]">

<header className="mb-12 md:mb-20 text-center md:text-left">
<h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#292823] mb-3">Muhammad A'bdulloh</h1>
<h2 className="text-lg md:text-xl font-medium tracking-tight text-[#292823]/80 mb-2">Aspirant Office Management &amp; Business Service Professional</h2>
<p className="text-xs md:text-sm font-semibold text-[#292823]/50 uppercase tracking-widest">SMK Informatika Bina Generasi 3</p>
</header>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

<button className="group text-left border border-[#292823]/10 backdrop-blur-md bg-white/5 rounded-2xl p-6 md:p-8 hover:bg-[#292823] hover:border-[#292823] transition-all duration-500 flex flex-col justify-between min-h-[200px] md:min-h-[240px] focus:outline-none focus:ring-2 focus:ring-[#292823]/50 hover:-translate-y-1 shadow-sm hover:shadow-2xl" onclick="openModal('modal-profile')">
<div className="text-[#292823] group-hover:text-[#d7d7d7] transition-colors duration-500 mb-6">
<iconify-icon height="28" icon="solar:user-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight text-[#292823] group-hover:text-[#d7d7d7] transition-colors duration-500 mb-2">Professional Profile</h3>
<p className="text-sm font-medium text-[#292823]/70 group-hover:text-[#d7d7d7]/80 transition-colors duration-500 leading-relaxed">Perkenalan diri, visi karier, dan keahlian inti.</p>
</div>
</button>

<button className="group text-left border border-[#292823]/10 backdrop-blur-md bg-white/5 rounded-2xl p-6 md:p-8 hover:bg-[#292823] hover:border-[#292823] transition-all duration-500 flex flex-col justify-between min-h-[200px] md:min-h-[240px] focus:outline-none focus:ring-2 focus:ring-[#292823]/50 hover:-translate-y-1 shadow-sm hover:shadow-2xl" onclick="openModal('modal-office')">
<div className="text-[#292823] group-hover:text-[#d7d7d7] transition-colors duration-500 mb-6">
<iconify-icon height="28" icon="solar:folder-with-files-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight text-[#292823] group-hover:text-[#d7d7d7] transition-colors duration-500 mb-2">Office Mastery</h3>
<p className="text-sm font-medium text-[#292823]/70 group-hover:text-[#d7d7d7]/80 transition-colors duration-500 leading-relaxed">Portofolio pengetikan cepat, kearsipan, dan administrasi.</p>
</div>
</button>

<button className="group text-left border border-[#292823]/10 backdrop-blur-md bg-white/5 rounded-2xl p-6 md:p-8 hover:bg-[#292823] hover:border-[#292823] transition-all duration-500 flex flex-col justify-between min-h-[200px] md:min-h-[240px] focus:outline-none focus:ring-2 focus:ring-[#292823]/50 hover:-translate-y-1 shadow-sm hover:shadow-2xl" onclick="openModal('modal-business')">
<div className="text-[#292823] group-hover:text-[#d7d7d7] transition-colors duration-500 mb-6">
<iconify-icon height="28" icon="solar:case-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight text-[#292823] group-hover:text-[#d7d7d7] transition-colors duration-500 mb-2">Business Services</h3>
<p className="text-sm font-medium text-[#292823]/70 group-hover:text-[#d7d7d7]/80 transition-colors duration-500 leading-relaxed">Pengalaman simulasi layanan pelanggan &amp; manajemen bisnis.</p>
</div>
</button>

<button className="group text-left border border-[#292823]/10 backdrop-blur-md bg-white/5 rounded-2xl p-6 md:p-8 hover:bg-[#292823] hover:border-[#292823] transition-all duration-500 flex flex-col justify-between min-h-[200px] md:min-h-[240px] focus:outline-none focus:ring-2 focus:ring-[#292823]/50 hover:-translate-y-1 shadow-sm hover:shadow-2xl" onclick="openModal('modal-contact')">
<div className="text-[#292823] group-hover:text-[#d7d7d7] transition-colors duration-500 mb-6">
<iconify-icon height="28" icon="solar:letter-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight text-[#292823] group-hover:text-[#d7d7d7] transition-colors duration-500 mb-2">Get In Touch</h3>
<p className="text-sm font-medium text-[#292823]/70 group-hover:text-[#d7d7d7]/80 transition-colors duration-500 leading-relaxed">Media sosial, WhatsApp, dan Email profesional.</p>
</div>
</button>
</div>
</main>


<div className="fixed inset-0 z-50 hidden" id="modal-profile">
<div className="overlay-bg absolute inset-0 bg-[#d7d7d7]/80 backdrop-blur-md opacity-0 transition-opacity duration-500" onclick="closeModal('modal-profile')"></div>
<div className="absolute inset-0 flex items-center justify-center p-4 md:p-12 pointer-events-none">
<div className="content-box pointer-events-auto w-full max-w-2xl bg-[#d7d7d7]/95 backdrop-blur-xl border border-[#292823]/10 rounded-2xl p-8 md:p-12 shadow-2xl opacity-0 translate-y-8 transition-all duration-500 ease-out max-h-full overflow-y-auto relative">
<button className="absolute top-6 right-6 text-[#292823]/40 hover:text-[#292823] transition-colors focus:outline-none" onclick="closeModal('modal-profile')">
<iconify-icon height="28" icon="solar:close-circle-linear" strokeWidth="1.5" width="28"></iconify-icon>
</button>
<div className="flex items-center gap-4 mb-8">
<div className="p-3 bg-[#292823] text-[#d7d7d7] rounded-xl shadow-lg">
<iconify-icon height="24" icon="solar:user-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#292823]">Professional Profile</h3>
</div>
<div className="space-y-8">
<p className="text-sm md:text-base font-medium text-[#292823]/80 leading-relaxed">
                        Saya adalah siswa produktif di SMK Informatika Bina Generasi 3 dengan fokus pada efisiensi perkantoran. Saya memiliki ketertarikan besar dalam mengelola sistem administrasi yang rapi dan memberikan pelayanan bisnis yang prima.
                    </p>
<div>
<h4 className="text-xs md:text-sm font-semibold tracking-tight text-[#292823] uppercase mb-4 opacity-60 tracking-widest">Soft Skills</h4>
<div className="flex flex-wrap gap-3">
<span className="px-4 py-2 border border-[#292823]/10 bg-white/40 shadow-sm rounded-full text-xs font-semibold tracking-tight text-[#292823]">Komunikasi Efektif</span>
<span className="px-4 py-2 border border-[#292823]/10 bg-white/40 shadow-sm rounded-full text-xs font-semibold tracking-tight text-[#292823]">Manajemen Waktu</span>
<span className="px-4 py-2 border border-[#292823]/10 bg-white/40 shadow-sm rounded-full text-xs font-semibold tracking-tight text-[#292823]">Ketelitian Tinggi</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="modal-office">
<div className="overlay-bg absolute inset-0 bg-[#d7d7d7]/80 backdrop-blur-md opacity-0 transition-opacity duration-500" onclick="closeModal('modal-office')"></div>
<div className="absolute inset-0 flex items-center justify-center p-4 md:p-12 pointer-events-none">
<div className="content-box pointer-events-auto w-full max-w-2xl bg-[#d7d7d7]/95 backdrop-blur-xl border border-[#292823]/10 rounded-2xl p-8 md:p-12 shadow-2xl opacity-0 translate-y-8 transition-all duration-500 ease-out max-h-full overflow-y-auto relative">
<button className="absolute top-6 right-6 text-[#292823]/40 hover:text-[#292823] transition-colors focus:outline-none" onclick="closeModal('modal-office')">
<iconify-icon height="28" icon="solar:close-circle-linear" strokeWidth="1.5" width="28"></iconify-icon>
</button>
<div className="flex items-center gap-4 mb-8">
<div className="p-3 bg-[#292823] text-[#d7d7d7] rounded-xl shadow-lg">
<iconify-icon height="24" icon="solar:folder-with-files-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#292823]">Office Mastery</h3>
</div>
<div className="space-y-8">
<div className="flex gap-4 md:gap-6 items-start group">
<div className="mt-1 flex-shrink-0 text-[#292823]/50 group-hover:text-[#292823] transition-colors duration-300">
<iconify-icon height="24" icon="solar:display-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-lg md:text-xl font-semibold tracking-tight text-[#292823] mb-2">Administrasi Digital</h4>
<p className="text-xs md:text-sm font-medium text-[#292823]/70 leading-relaxed">Penguasaan penuh terhadap suite produktivitas Microsoft Office (Word, Excel, PowerPoint) dan integrasi alur kerja melalui Google Workspace.</p>
</div>
</div>
<div className="w-full h-px bg-gradient-to-r from-transparent via-[#292823]/10 to-transparent"></div>
<div className="flex gap-4 md:gap-6 items-start group">
<div className="mt-1 flex-shrink-0 text-[#292823]/50 group-hover:text-[#292823] transition-colors duration-300">
<iconify-icon height="24" icon="solar:archive-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-lg md:text-xl font-semibold tracking-tight text-[#292823] mb-2">Kearsipan Terstruktur</h4>
<p className="text-xs md:text-sm font-medium text-[#292823]/70 leading-relaxed">Pemahaman mendalam mengenai sistem penyimpanan dokumen, pengindeksan abjad, dan kronologis untuk retensi data yang efisien.</p>
</div>
</div>
<div className="w-full h-px bg-gradient-to-r from-transparent via-[#292823]/10 to-transparent"></div>
<div className="flex gap-4 md:gap-6 items-start group">
<div className="mt-1 flex-shrink-0 text-[#292823]/50 group-hover:text-[#292823] transition-colors duration-300">
<iconify-icon height="24" icon="solar:document-text-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-lg md:text-xl font-semibold tracking-tight text-[#292823] mb-2">Korespondensi Bisnis</h4>
<p className="text-xs md:text-sm font-medium text-[#292823]/70 leading-relaxed">Kemampuan merancang dan menyusun draf surat menyurat formal, memo internal, dan komunikasi bisnis sesuai standar perusahaan.</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="modal-business">
<div className="overlay-bg absolute inset-0 bg-[#d7d7d7]/80 backdrop-blur-md opacity-0 transition-opacity duration-500" onclick="closeModal('modal-business')"></div>
<div className="absolute inset-0 flex items-center justify-center p-4 md:p-12 pointer-events-none">
<div className="content-box pointer-events-auto w-full max-w-2xl bg-[#d7d7d7]/95 backdrop-blur-xl border border-[#292823]/10 rounded-2xl p-8 md:p-12 shadow-2xl opacity-0 translate-y-8 transition-all duration-500 ease-out max-h-full overflow-y-auto relative">
<button className="absolute top-6 right-6 text-[#292823]/40 hover:text-[#292823] transition-colors focus:outline-none" onclick="closeModal('modal-business')">
<iconify-icon height="28" icon="solar:close-circle-linear" strokeWidth="1.5" width="28"></iconify-icon>
</button>
<div className="flex items-center gap-4 mb-8">
<div className="p-3 bg-[#292823] text-[#d7d7d7] rounded-xl shadow-lg">
<iconify-icon height="24" icon="solar:case-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#292823]">Business Services</h3>
</div>
<div className="grid grid-cols-1 gap-6">
<div className="p-6 border border-[#292823]/10 bg-white/40 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-[#292823]" height="22" icon="solar:buildings-2-linear" strokeWidth="1.5" width="22"></iconify-icon>
<h4 className="text-lg md:text-xl font-semibold tracking-tight text-[#292823]">Simulasi Kantor Praktikal</h4>
</div>
<p className="text-xs md:text-sm font-medium text-[#292823]/70 leading-relaxed">
                            Terlatih melalui kegiatan praktik kerja lapangan (PKL) dan simulasi internal sekolah untuk menangani operasional administratif harian dalam ritme lingkungan korporat yang dinamis.
                        </p>
</div>
<div className="p-6 border border-[#292823]/10 bg-white/40 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-[#292823]" height="22" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="22"></iconify-icon>
<h4 className="text-lg md:text-xl font-semibold tracking-tight text-[#292823]">Customer Service Berbasis SOP</h4>
</div>
<p className="text-xs md:text-sm font-medium text-[#292823]/70 leading-relaxed">
                            Dibekali keterampilan resolusi konflik dan penanganan klien. Memahami alur Standar Operasional Prosedur (SOP) untuk memberikan layanan front-desk yang representatif dan profesional.
                        </p>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="modal-contact">
<div className="overlay-bg absolute inset-0 bg-[#d7d7d7]/80 backdrop-blur-md opacity-0 transition-opacity duration-500" onclick="closeModal('modal-contact')"></div>
<div className="absolute inset-0 flex items-center justify-center p-4 md:p-12 pointer-events-none">
<div className="content-box pointer-events-auto w-full max-w-md bg-[#d7d7d7]/95 backdrop-blur-xl border border-[#292823]/10 rounded-2xl p-8 md:p-12 shadow-2xl opacity-0 translate-y-8 transition-all duration-500 ease-out max-h-full overflow-y-auto relative">
<button className="absolute top-6 right-6 text-[#292823]/40 hover:text-[#292823] transition-colors focus:outline-none" onclick="closeModal('modal-contact')">
<iconify-icon height="28" icon="solar:close-circle-linear" strokeWidth="1.5" width="28"></iconify-icon>
</button>
<div className="flex items-center gap-4 mb-8">
<div className="p-3 bg-[#292823] text-[#d7d7d7] rounded-xl shadow-lg">
<iconify-icon height="24" icon="solar:letter-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#292823]">Get In Touch</h3>
</div>
<div className="flex flex-col gap-4">
<a className="flex items-center justify-between p-4 rounded-xl border border-[#292823]/10 bg-white/40 hover:border-[#292823]/30 hover:bg-white/80 hover:shadow-md transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-[#292823]/50" href="mailto:dulloh2825@gmail.com">
<div className="flex items-center gap-4">
<iconify-icon className="text-[#292823]/50 group-hover:text-[#292823] transition-colors" height="24" icon="solar:letter-bold-duotone" width="24"></iconify-icon>
<span className="text-sm md:text-base font-semibold tracking-tight text-[#292823]">Email Address</span>
</div>
<iconify-icon className="text-[#292823]/40 group-hover:text-[#292823] transition-colors" height="18" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</a>
<a className="flex items-center justify-between p-4 rounded-xl border border-[#292823]/10 bg-white/40 hover:border-[#292823]/30 hover:bg-white/80 hover:shadow-md transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-[#292823]/50" href="https://wa.me/6285780748311">
<div className="flex items-center gap-4">
<iconify-icon className="text-[#292823]/50 group-hover:text-[#292823] transition-colors" height="24" icon="solar:phone-calling-bold-duotone" width="24"></iconify-icon>
<span className="text-sm md:text-base font-semibold tracking-tight text-[#292823]">WhatsApp</span>
</div>
<iconify-icon className="text-[#292823]/40 group-hover:text-[#292823] transition-colors" height="18" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</a>
<a className="flex items-center justify-between p-4 rounded-xl border border-[#292823]/10 bg-white/40 hover:border-[#292823]/30 hover:bg-white/80 hover:shadow-md transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-[#292823]/50" href="https://linkedin.com/in/muhammad-a-bdulloh-bb13b9294">
<div className="flex items-center gap-4">
<iconify-icon className="text-[#292823]/50 group-hover:text-[#292823] transition-colors" height="24" icon="solar:link-circle-bold-duotone" width="24"></iconify-icon>
<span className="text-sm md:text-base font-semibold tracking-tight text-[#292823]">LinkedIn Profile</span>
</div>
<iconify-icon className="text-[#292823]/40 group-hover:text-[#292823] transition-colors" height="18" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</div>


    </>
  );
}
