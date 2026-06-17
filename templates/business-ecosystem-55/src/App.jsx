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



        lucide.createIcons();
    


        // Auto-show popup after delay
        setTimeout(function() {
          const popup = document.getElementById('lead-capture-overlay');
          if (popup && !localStorage.getItem('csiLeadPopupShown')) {
            popup.classList.add('show');
          }
        }, 8000);

        function closeLeadPopup(event) {
          if (event && event.target !== event.currentTarget) return;
          const popup = document.getElementById('lead-capture-overlay');
          popup.classList.remove('show');
          localStorage.setItem('csiLeadPopupShown', 'true');
        }

        function submitLeadForm(event) {
          event.preventDefault();
          
          const formData = new FormData(event.target);
          const name = formData.get('name');
          const phone = formData.get('phone');
          const company = formData.get('company');
          const message = formData.get('message');
          
          let leadMessage = '🏢 *Inquiry Baru - CSI Website*\n\n';
          leadMessage += '👤 *Nama:* ' + name + '\n';
          leadMessage += '📱 *HP:* ' + phone + '\n';
          
          if (company) {
            leadMessage += '🏢 *Perusahaan:* ' + company + '\n';
          }
          
          if (message) {
            leadMessage += '💬 *Kebutuhan:* ' + message + '\n';
          }
          
          leadMessage += '\n⏰ *Waktu:* ' + new Date().toLocaleString('id-ID');
          
          const whatsappUrl = 'https://wa.me/?text=' + encodeURIComponent(leadMessage);
          window.open(whatsappUrl, '_blank');
          
          // Show success message and close popup
          alert('✅ Terima kasih! Permintaan konsultasi Anda telah terkirim.');
          closeLeadPopup();
          
          // Reset form
          event.target.reset();
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
      

<nav className="fixed w-full z-40 glass border-b border-gray-200/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="bg-[#25D366]/10 p-1.5 rounded-lg group-hover:bg-[#25D366]/20 transition-colors">
<i className="w-5 h-5 text-[#25D366]" data-lucide="layers" strokeWidth="1.5"></i>
</div>
<span className="font-semibold text-[#1D1D1F] tracking-tight text-lg">CSI INDOSEWA</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
<a className="hover:text-[#25D366] transition-colors" href="#services">Layanan</a>
<a className="hover:text-[#25D366] transition-colors" href="#ecosystem">Ekosistem</a>
<a className="hover:text-[#25D366] transition-colors" href="#why-csi">Keunggulan</a>
</div>

<div className="flex items-center gap-4">
<button className="hidden md:flex text-sm font-medium text-[#1D1D1F] hover:text-[#25D366] transition-colors">Member Login</button>
<button className="bg-[#1D1D1F] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#25D366] hover:shadow-lg hover:shadow-[#25D366]/30 transition-all duration-300">
                    Hubungi Kami
                </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-white">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">

<div className="flex-1 text-center md:text-left space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] text-xs font-semibold uppercase tracking-wide">
<span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
                        Bisnis Terpadu
                    </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-[#1D1D1F] tracking-tight leading-[1.05]">
                        One Space. <br/>
<span className="text-[#25D366]">Complete Solutions.</span>
</h1>
<p className="text-lg text-gray-500 max-w-lg mx-auto md:mx-0 leading-relaxed font-normal">
                        Office Space · Legal · Tax · ISO · Digital · Studio
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
<button className="w-full sm:w-auto bg-[#25D366] text-white px-8 py-4 rounded-full font-medium hover:bg-[#20bd5a] transition-all shadow-xl shadow-[#25D366]/20 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group">
                            Sewa Ruang
                            <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<button className="w-full sm:w-auto px-8 py-4 rounded-full font-medium text-[#1D1D1F] hover:bg-gray-50 transition-all flex items-center justify-center gap-2 border border-gray-200">
                            Konsultasi Bisnis
                        </button>
</div>
<div className="pt-4 flex items-center justify-center md:justify-start gap-4 text-sm text-gray-400">
<div className="flex -space-x-3">
<div className="w-9 h-9 rounded-full bg-gray-200 border-[3px] border-white flex items-center justify-center text-[10px] text-gray-500 font-bold overflow-hidden">
<img alt="Partner" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div className="w-9 h-9 rounded-full bg-gray-300 border-[3px] border-white flex items-center justify-center text-[10px] text-gray-500 font-bold overflow-hidden">
<img alt="Partner" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div className="w-9 h-9 rounded-full bg-gray-400 border-[3px] border-white flex items-center justify-center text-[10px] text-gray-500 font-bold overflow-hidden">
<img alt="Partner" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
</div>
<p>Dipercaya 100+ Perusahaan</p>
</div>
</div>

<div className="flex-1 w-full relative">
<div className="absolute -inset-4 bg-gradient-to-tr from-[#25D366]/20 to-transparent rounded-[2.5rem] blur-3xl opacity-40"></div>
<div className="relative aspect-[4/5] md:aspect-square lg:aspect-[5/4] rounded-[2rem] overflow-hidden shadow-2xl shadow-gray-200/50 group">
<img alt="Modern Office Space" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-8 left-8 right-8 glass p-5 rounded-2xl shadow-lg border border-white/40 flex items-center justify-between">
<div>
<p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Status</p>
<p className="text-[#1D1D1F] font-semibold text-lg">Office Ready</p>
</div>
<div className="h-12 w-12 bg-[#25D366]/10 rounded-full flex items-center justify-center text-[#25D366]">
<i className="w-6 h-6" data-lucide="building-2" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="max-w-4xl mx-auto px-6 -mt-12 relative z-20">
<div className="glass p-8 rounded-3xl shadow-2xl shadow-gray-200/60 border border-white/50 text-center">
<h3 className="text-sm font-semibold uppercase tracking-wide text-[#25D366] mb-3">What is CSI</h3>
<p className="text-lg md:text-xl text-[#1D1D1F] font-medium leading-relaxed">
                Central Space Indosewa (CSI) adalah ekosistem bisnis terpadu yang menyediakan ruang kerja dan layanan profesional dalam satu tempat. CSI mendukung bisnis sejak tahap pendirian, operasional, hingga pengembangan.
            </p>
</div>
</div>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-[#1D1D1F] tracking-tight mb-4">Core Services Overview</h2>
<p className="text-gray-500 text-lg">Layanan komprehensif untuk mendukung pertumbuhan bisnis Anda.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-[#FAFAFA] p-8 rounded-[1.5rem] hover:bg-white hover:shadow-xl hover:shadow-[#25D366]/5 transition-all duration-300 group border border-transparent hover:border-[#25D366]/10">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm group-hover:bg-[#25D366] transition-colors duration-300">
<i className="w-6 h-6 text-[#25D366] group-hover:text-white transition-colors" data-lucide="armchair" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-[#1D1D1F] mb-2">Office Space</h3>
<p className="text-sm text-gray-500 leading-relaxed">Ruang kerja fleksibel, private office, dan virtual office.</p>
</div>

<div className="bg-[#FAFAFA] p-8 rounded-[1.5rem] hover:bg-white hover:shadow-xl hover:shadow-[#25D366]/5 transition-all duration-300 group border border-transparent hover:border-[#25D366]/10">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm group-hover:bg-[#25D366] transition-colors duration-300">
<i className="w-6 h-6 text-[#25D366] group-hover:text-white transition-colors" data-lucide="scale" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-[#1D1D1F] mb-2">Business Legal</h3>
<p className="text-sm text-gray-500 leading-relaxed">Pendirian PT, CV, dan perizinan usaha lengkap.</p>
</div>

<div className="bg-[#FAFAFA] p-8 rounded-[1.5rem] hover:bg-white hover:shadow-xl hover:shadow-[#25D366]/5 transition-all duration-300 group border border-transparent hover:border-[#25D366]/10">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm group-hover:bg-[#25D366] transition-colors duration-300">
<i className="w-6 h-6 text-[#25D366] group-hover:text-white transition-colors" data-lucide="calculator" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-[#1D1D1F] mb-2">Tax &amp; Admin</h3>
<p className="text-sm text-gray-500 leading-relaxed">Pelaporan pajak bulanan/tahunan dan administrasi.</p>
</div>

<div className="bg-[#FAFAFA] p-8 rounded-[1.5rem] hover:bg-white hover:shadow-xl hover:shadow-[#25D366]/5 transition-all duration-300 group border border-transparent hover:border-[#25D366]/10">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm group-hover:bg-[#25D366] transition-colors duration-300">
<i className="w-6 h-6 text-[#25D366] group-hover:text-white transition-colors" data-lucide="gavel" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-[#1D1D1F] mb-2">Debt Recovery</h3>
<p className="text-sm text-gray-500 leading-relaxed">Solusi legal recovery untuk piutang bisnis.</p>
</div>

<div className="bg-[#FAFAFA] p-8 rounded-[1.5rem] hover:bg-white hover:shadow-xl hover:shadow-[#25D366]/5 transition-all duration-300 group border border-transparent hover:border-[#25D366]/10">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm group-hover:bg-[#25D366] transition-colors duration-300">
<i className="w-6 h-6 text-[#25D366] group-hover:text-white transition-colors" data-lucide="award" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-[#1D1D1F] mb-2">ISO Certification</h3>
<p className="text-sm text-gray-500 leading-relaxed">Training dan sertifikasi standar internasional.</p>
</div>

<div className="bg-[#FAFAFA] p-8 rounded-[1.5rem] hover:bg-white hover:shadow-xl hover:shadow-[#25D366]/5 transition-all duration-300 group border border-transparent hover:border-[#25D366]/10">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm group-hover:bg-[#25D366] transition-colors duration-300">
<i className="w-6 h-6 text-[#25D366] group-hover:text-white transition-colors" data-lucide="megaphone" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-[#1D1D1F] mb-2">Digital Marketing</h3>
<p className="text-sm text-gray-500 leading-relaxed">Strategi digital untuk ekspansi pasar.</p>
</div>

<div className="bg-[#FAFAFA] p-8 rounded-[1.5rem] hover:bg-white hover:shadow-xl hover:shadow-[#25D366]/5 transition-all duration-300 group border border-transparent hover:border-[#25D366]/10 md:col-span-2 lg:col-span-2">
<div className="flex items-start gap-6">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm group-hover:bg-[#25D366] transition-colors duration-300 shrink-0">
<i className="w-6 h-6 text-[#25D366] group-hover:text-white transition-colors" data-lucide="mic" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-lg font-semibold text-[#1D1D1F] mb-2">Podcast &amp; Studio</h3>
<p className="text-sm text-gray-500 leading-relaxed">Fasilitas studio profesional untuk konten kreatif, podcast, dan livestreaming bisnis.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA]" id="ecosystem">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-[#1D1D1F] tracking-tight mb-4">Associate Ecosystem</h2>
<p className="text-gray-500 max-w-2xl text-lg">Seluruh layanan bisnis CSI ditangani oleh associate berlisensi dan berpengalaman di bidangnya.</p>
</div>
<a className="text-[#25D366] font-medium flex items-center gap-2 hover:gap-3 transition-all text-sm group" href="#">
                    Lihat Partner <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-[1.5rem] aspect-[3/4] mb-5 shadow-sm group-hover:shadow-2xl group-hover:shadow-[#25D366]/10 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
<img alt="Notary" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 z-20">
<h3 className="text-xl font-semibold text-white">Notary Associates</h3>
<p className="text-gray-300 text-sm mt-1">Legalitas Terjamin</p>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-[1.5rem] aspect-[3/4] mb-5 shadow-sm group-hover:shadow-2xl group-hover:shadow-[#25D366]/10 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
<img alt="Tax" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 z-20">
<h3 className="text-xl font-semibold text-white">Tax Consultants</h3>
<p className="text-gray-300 text-sm mt-1">Kepatuhan Pajak</p>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-[1.5rem] aspect-[3/4] mb-5 shadow-sm group-hover:shadow-2xl group-hover:shadow-[#25D366]/10 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
<img alt="Law" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 z-20">
<h3 className="text-xl font-semibold text-white">Law Firm</h3>
<p className="text-gray-300 text-sm mt-1">Advokasi Bisnis</p>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-[1.5rem] aspect-[3/4] mb-5 shadow-sm group-hover:shadow-2xl group-hover:shadow-[#25D366]/10 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
<img alt="ISO" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 z-20">
<h3 className="text-xl font-semibold text-white">ISO Consultants</h3>
<p className="text-gray-300 text-sm mt-1">Standar Mutu</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden" id="why-csi">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-[#1D1D1F] tracking-tight mb-4">Why CSI?</h2>
<p className="text-gray-500 text-lg">Solusi cerdas untuk kebutuhan bisnis modern.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-[#FAFAFA] rounded-[2rem] p-8 border border-gray-100 hover:border-[#25D366]/30 transition-all">
<div className="w-10 h-10 bg-[#25D366]/10 rounded-full flex items-center justify-center text-[#25D366] mb-6">
<i className="w-5 h-5" data-lucide="home" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-[#1D1D1F] mb-3">One Roof Solution</h3>
<p className="text-gray-500 text-sm leading-relaxed">Semua kebutuhan bisnis dari ruang kerja hingga legalitas tersedia dalam satu atap.</p>
</div>

<div className="bg-[#FAFAFA] rounded-[2rem] p-8 border border-gray-100 hover:border-[#25D366]/30 transition-all">
<div className="w-10 h-10 bg-[#25D366]/10 rounded-full flex items-center justify-center text-[#25D366] mb-6">
<i className="w-5 h-5" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-[#1D1D1F] mb-3">Legal &amp; Compliant</h3>
<p className="text-gray-500 text-sm leading-relaxed">Layanan sesuai regulasi pemerintah untuk memastikan keamanan usaha Anda.</p>
</div>

<div className="bg-[#FAFAFA] rounded-[2rem] p-8 border border-gray-100 hover:border-[#25D366]/30 transition-all">
<div className="w-10 h-10 bg-[#25D366]/10 rounded-full flex items-center justify-center text-[#25D366] mb-6">
<i className="w-5 h-5" data-lucide="users" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-[#1D1D1F] mb-3">Expert Partners</h3>
<p className="text-gray-500 text-sm leading-relaxed">Didukung oleh jaringan partner profesional terpercaya dan berpengalaman.</p>
</div>

<div className="bg-[#FAFAFA] rounded-[2rem] p-8 border border-gray-100 hover:border-[#25D366]/30 transition-all">
<div className="w-10 h-10 bg-[#25D366]/10 rounded-full flex items-center justify-center text-[#25D366] mb-6">
<i className="w-5 h-5" data-lucide="trending-up" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-[#1D1D1F] mb-3">Flexible &amp; Scalable</h3>
<p className="text-gray-500 text-sm leading-relaxed">Solusi yang dapat disesuaikan dengan skala dan pertumbuhan bisnis Anda.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#1D1D1F] relative overflow-hidden">
<div className="absolute inset-0 bg-[#25D366]/5 pattern-grid opacity-20"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">Talk to Our Business Advisor</h2>
<p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">Diskusikan kebutuhan bisnis Anda dengan tim ahli kami untuk mendapatkan solusi terbaik.</p>
<button className="bg-[#25D366] text-white px-8 py-4 rounded-full font-medium hover:bg-[#20bd5a] transition-all shadow-xl shadow-[#25D366]/20 transform hover:-translate-y-1">
                Request Consultation
            </button>
</div>
</section>

<footer className="bg-white border-t border-gray-100 pt-16 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="bg-[#25D366]/10 p-1.5 rounded-lg">
<i className="w-5 h-5 text-[#25D366]" data-lucide="layers" strokeWidth="1.5"></i>
</div>
<span className="font-semibold text-[#1D1D1F] tracking-tight">CSI INDOSEWA</span>
</a>
<p className="text-sm text-gray-500 mb-8 leading-relaxed">Ekosistem bisnis terpadu untuk pertumbuhan usaha Anda.</p>
<div className="flex gap-5">
<a className="text-gray-400 hover:text-[#25D366] transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i></a>
<a className="text-gray-400 hover:text-[#25D366] transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin" strokeWidth="1.5"></i></a>
<a className="text-gray-400 hover:text-[#25D366] transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i></a>
</div>
</div>
<div>
<h4 className="font-semibold text-[#1D1D1F] mb-6">Layanan</h4>
<ul className="space-y-4 text-sm text-gray-500">
<li><a className="hover:text-[#25D366] transition-colors" href="#">Office Space</a></li>
<li><a className="hover:text-[#25D366] transition-colors" href="#">Legal &amp; Tax</a></li>
<li><a className="hover:text-[#25D366] transition-colors" href="#">ISO Certification</a></li>
<li><a className="hover:text-[#25D366] transition-colors" href="#">Virtual Office</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-[#1D1D1F] mb-6">Perusahaan</h4>
<ul className="space-y-4 text-sm text-gray-500">
<li><a className="hover:text-[#25D366] transition-colors" href="#">Tentang CSI</a></li>
<li><a className="hover:text-[#25D366] transition-colors" href="#">Karir</a></li>
<li><a className="hover:text-[#25D366] transition-colors" href="#">Mitra Associate</a></li>
<li><a className="hover:text-[#25D366] transition-colors" href="#">Kontak</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-[#1D1D1F] mb-6">Newsletter</h4>
<p className="text-sm text-gray-500 mb-4">Dapatkan update seputar bisnis &amp; regulasi.</p>
<form className="flex gap-2">
<input className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#25D366] transition-colors" placeholder="Email Anda" type="email"/>
<button className="bg-[#1D1D1F] text-white px-5 py-2.5 rounded-lg hover:bg-[#25D366] transition-colors text-sm font-medium" type="button">
                            Join
                        </button>
</form>
</div>
</div>
<div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-400">© 2023 Central Space Indosewa. All rights reserved.</p>
<div className="flex items-center gap-1 text-xs text-gray-400">
<span>Designed for</span>
<i className="w-3 h-3 text-[#25D366] fill-[#25D366]" data-lucide="briefcase" strokeWidth="1.5"></i>
<span>business growth.</span>
</div>
</div>
</div>
</footer>

<button aria-label="Apri Widget" className="widgetify-widget" onclick="document.getElementById('lead-capture-overlay').classList.add('show')">
<svg fill="white" height="32" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
</button>

<div className="lead-popup-overlay" id="lead-capture-overlay" onclick="closeLeadPopup(event)">
<div className="lead-popup-container" onclick="event.stopPropagation()">
<button aria-label="Chiudi popup" className="lead-popup-close" onclick="closeLeadPopup()">×</button>
<h2 className="lead-popup-title">Konsultasi Bisnis</h2>
<p className="lead-popup-subtitle">Tinggalkan data Anda, tim kami akan segera menghubungi.</p>
<form id="lead-capture-form" onsubmit="submitLeadForm(event)">
<input className="lead-form-field" name="name" placeholder="Nama Lengkap *" required="" type="text"/>
<input className="lead-form-field" name="phone" placeholder="Nomor WhatsApp *" required="" type="tel"/>
<input className="lead-form-field" name="company" placeholder="Nama Perusahaan (Opsional)" type="text"/>
<textarea className="lead-form-field" name="message" placeholder="Kebutuhan Anda (Sewa Ruang / Legal / Pajak)" rows="3" style={{resize: 'vertical', minHeight: '80px'}}></textarea>
<button className="lead-form-button" type="submit">
<svg fill="currentColor" height="18" viewbox="0 0 24 24" width="18">
<path d="M17.6 6.32A7.85 7.85 0 0 0 12 4.02a7.95 7.95 0 0 0-6.9 12.07L4 20.02l4.05-1.06A8.02 8.02 0 0 0 12 20.02a7.98 7.98 0 0 0 8-7.93c0-2.12-.83-4.12-2.4-5.62V6.32z"></path>
</svg>
              Kirim Pesan
            </button>
</form>
<div className="lead-popup-footer">
<a href="#" target="_blank">Powered by Widgetify</a>
</div>
</div>
</div>





    </>
  );
}
