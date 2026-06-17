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
    


        // Auto-show popup delay (removed for UX, only triggered by click, but keeping logic structure)
        setTimeout(function() {
          const popup = document.getElementById('lead-capture-overlay');
          // Uncomment below to enable auto-popup
          // if (popup && !localStorage.getItem('sycPopupShown')) {
          //   popup.classList.add('show');
          // }
        }, 8000);

        function closeLeadPopup(event) {
          if (event && event.target !== event.currentTarget) return;
          const popup = document.getElementById('lead-capture-overlay');
          popup.classList.remove('show');
          localStorage.setItem('sycPopupShown', 'true');
        }

        function submitLeadForm(event) {
          event.preventDefault();
          
          const formData = new FormData(event.target);
          const name = formData.get('name');
          const phone = formData.get('phone');
          const type = formData.get('type');
          const message = formData.get('message');
          
          let leadMessage = '🏗️ *Yeni Proje Talebi - Sycgrup*\n\n';
          leadMessage += '👤 *İsim:* ' + name + '\n';
          leadMessage += '📱 *Tel:* ' + phone + '\n';
          
          if (type) {
            leadMessage += '📋 *Tip:* ' + type + '\n';
          }
          
          if (message) {
            leadMessage += '💬 *Detay:* ' + message + '\n';
          }
          
          // Using dummy WhatsApp link logic
          const whatsappUrl = 'https://wa.me/?text=' + encodeURIComponent(leadMessage);
          window.open(whatsappUrl, '_blank');
          
          alert('✅ Talebiniz alındı! Uzmanlarımız en kısa sürede sizinle iletişime geçecektir.');
          closeLeadPopup();
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
      

<nav className="fixed w-full z-40 glass border-b border-gray-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="bg-[#5E6C46] p-2 rounded-lg group-hover:bg-[#4b5736] transition-colors shadow-sm">
<i className="w-5 h-5 text-white" data-lucide="building" strokeWidth="1.5"></i>
</div>
<span className="font-semibold text-[#1A1A1A] tracking-tight text-lg">Sycgrup</span>
</a>

<div className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-500">
<a className="hover:text-[#5E6C46] transition-colors" href="#services">Hizmetler</a>
<a className="hover:text-[#5E6C46] transition-colors" href="#projects">Projeler</a>
<a className="hover:text-[#5E6C46] transition-colors" href="#why-us">Kurumsal</a>
</div>

<div className="flex items-center gap-5">
<button className="hidden md:flex text-sm font-medium text-[#1A1A1A] hover:text-[#5E6C46] transition-colors">Giriş Yap</button>
<button className="bg-[#1A1A1A] text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-[#5E6C46] hover:shadow-lg hover:shadow-[#5E6C46]/20 transition-all duration-300 flex items-center gap-2" onclick="document.getElementById('lead-capture-overlay').classList.add('show')">
                    Bize Ulaşın
                    <i className="w-3.5 h-3.5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
</nav>

<section className="relative pt-36 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-white">

<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#5E6C46]/5 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">

<div className="flex-1 text-center md:text-left space-y-8">
<div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#5E6C46]/5 border border-[#5E6C46]/10 text-[#5E6C46] text-xs font-semibold uppercase tracking-wider">
<span className="w-1.5 h-1.5 rounded-full bg-[#5E6C46]"></span>
                        Mükemmelliği İnşa Ediyoruz
                    </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-[#1A1A1A] tracking-tight leading-[1.05]">
                        Geleceğin <br/>
<span className="text-[#5E6C46] relative">
                            Yapılarını
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#5E6C46]/20" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path>
</svg>
</span> 
                        Tasarlıyoruz.
                    </h1>
<p className="text-lg text-gray-500 max-w-lg mx-auto md:mx-0 leading-relaxed font-normal">
                        Konut, ticari ve endüstriyel projelerde estetik, dayanıklılık ve sürdürülebilirliği bir araya getiren modern inşaat çözümleri.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
<button className="w-full sm:w-auto bg-[#5E6C46] text-white px-8 py-4 rounded-full font-medium hover:bg-[#4b5736] transition-all shadow-xl shadow-[#5E6C46]/20 transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 group">
                            Projelerimizi İnceleyin
                            <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<button className="w-full sm:w-auto px-8 py-4 rounded-full font-medium text-[#1A1A1A] hover:bg-gray-50 transition-all flex items-center justify-center gap-2 border border-gray-200">
                            Teklif Al
                        </button>
</div>
<div className="pt-6 flex items-center justify-center md:justify-start gap-6 text-sm text-gray-400 border-t border-gray-100 mt-4">
<div className="flex flex-col gap-0.5">
<span className="text-2xl font-semibold text-[#1A1A1A] tracking-tight">150+</span>
<span className="text-xs font-medium uppercase tracking-wide">Tamamlanan Proje</span>
</div>
<div className="w-px h-8 bg-gray-200"></div>
<div className="flex flex-col gap-0.5">
<span className="text-2xl font-semibold text-[#1A1A1A] tracking-tight">25</span>
<span className="text-xs font-medium uppercase tracking-wide">Yıllık Tecrübe</span>
</div>
</div>
</div>

<div className="flex-1 w-full relative">
<div className="absolute -inset-4 bg-[#5E6C46] rounded-[2.5rem] blur-3xl opacity-10"></div>
<div className="relative aspect-[4/5] md:aspect-[5/6] rounded-[2rem] overflow-hidden shadow-2xl shadow-gray-200 group">
<img alt="Construction Site Architecture" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-xl shadow-lg border border-white/50 flex items-center justify-between backdrop-blur-md">
<div>
<p className="text-[11px] text-[#5E6C46] font-semibold uppercase tracking-wide mb-1">Son Proje</p>
<p className="text-[#1A1A1A] font-semibold text-lg tracking-tight">Vadi Residence</p>
<p className="text-xs text-gray-500 mt-1">İstanbul, Türkiye</p>
</div>
<div className="h-12 w-12 bg-[#5E6C46] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#5E6C46]/30">
<i className="w-5 h-5" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="max-w-5xl mx-auto px-6 -mt-16 relative z-20">
<div className="glass p-10 rounded-2xl shadow-xl shadow-gray-200/40 border border-white/60 text-center">
<h3 className="text-xs font-semibold uppercase tracking-widest text-[#5E6C46] mb-4">Sycgrup Vizyonu</h3>
<p className="text-xl md:text-2xl text-[#1A1A1A] font-medium leading-relaxed tracking-tight">
                "Sadece binalar değil, yaşam alanları inşa ediyoruz. Mühendislik hassasiyeti ve doğaya saygılı yaklaşımımızla, her projede sürdürülebilir bir gelecek hedefliyoruz."
            </p>
</div>
</div>

<section className="py-24 bg-white relative" id="services">
<div className="absolute top-0 left-0 w-full h-full pattern-grid opacity-5 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] tracking-tight mb-4">Uzmanlık Alanlarımız</h2>
<p className="text-gray-500 text-lg">Projenin başlangıcından anahtar teslimine kadar kapsamlı inşaat çözümleri.</p>
</div>
<a className="text-[#5E6C46] font-medium flex items-center gap-2 hover:gap-3 transition-all text-sm group px-4 py-2 rounded-full hover:bg-[#5E6C46]/5" href="#">
                    Tüm Hizmetler <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-[#FBFBFB] p-8 rounded-2xl border border-gray-100 hover:border-[#5E6C46]/30 hover:shadow-xl hover:shadow-[#5E6C46]/5 transition-all duration-300 group">
<div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm border border-gray-100 group-hover:bg-[#5E6C46] group-hover:border-[#5E6C46] transition-colors duration-300">
<i className="w-6 h-6 text-[#5E6C46] group-hover:text-white transition-colors" data-lucide="hard-hat" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-[#1A1A1A] mb-3 tracking-tight">Genel Müteahhitlik</h3>
<p className="text-sm text-gray-500 leading-relaxed mb-6">Büyük ölçekli konut, ofis ve ticari yapıların anahtar teslim inşası.</p>
<ul className="space-y-2 text-sm text-gray-600">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[#5E6C46]" data-lucide="check"></i> Proje Yönetimi</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[#5E6C46]" data-lucide="check"></i> Kalite Kontrol</li>
</ul>
</div>

<div className="bg-[#FBFBFB] p-8 rounded-2xl border border-gray-100 hover:border-[#5E6C46]/30 hover:shadow-xl hover:shadow-[#5E6C46]/5 transition-all duration-300 group">
<div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm border border-gray-100 group-hover:bg-[#5E6C46] group-hover:border-[#5E6C46] transition-colors duration-300">
<i className="w-6 h-6 text-[#5E6C46] group-hover:text-white transition-colors" data-lucide="ruler" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-[#1A1A1A] mb-3 tracking-tight">Mimari Tasarım</h3>
<p className="text-sm text-gray-500 leading-relaxed mb-6">Fonksiyonel, estetik ve modern mimari çözümlerle projelerinizi hayata geçiriyoruz.</p>
<ul className="space-y-2 text-sm text-gray-600">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[#5E6C46]" data-lucide="check"></i> 3D Modelleme</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[#5E6C46]" data-lucide="check"></i> İç Mimari</li>
</ul>
</div>

<div className="bg-[#FBFBFB] p-8 rounded-2xl border border-gray-100 hover:border-[#5E6C46]/30 hover:shadow-xl hover:shadow-[#5E6C46]/5 transition-all duration-300 group">
<div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm border border-gray-100 group-hover:bg-[#5E6C46] group-hover:border-[#5E6C46] transition-colors duration-300">
<i className="w-6 h-6 text-[#5E6C46] group-hover:text-white transition-colors" data-lucide="wrench" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-[#1A1A1A] mb-3 tracking-tight">Kentsel Dönüşüm</h3>
<p className="text-sm text-gray-500 leading-relaxed mb-6">Eski yapıların modern standartlara uygun, depreme dayanıklı yaşam alanlarına dönüşümü.</p>
<ul className="space-y-2 text-sm text-gray-600">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[#5E6C46]" data-lucide="check"></i> Risk Analizi</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[#5E6C46]" data-lucide="check"></i> Yasal Danışmanlık</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F8F9FA]" id="projects">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-[#5E6C46] font-semibold text-xs uppercase tracking-wider mb-2 block">Portföyümüz</span>
<h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] tracking-tight mb-4">Öne Çıkan Projeler</h2>
<p className="text-gray-500 max-w-2xl mx-auto text-lg">Şehir silüetini değiştiren imza niteliğindeki yapılarımız.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group cursor-pointer relative rounded-2xl overflow-hidden shadow-sm">
<div className="aspect-[16/9] overflow-hidden">
<img alt="Commercial Building" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex justify-between items-end">
<div>
<p className="text-[#5E6C46] text-xs font-bold uppercase tracking-wider mb-2 bg-white/10 backdrop-blur-sm inline-block px-3 py-1 rounded-full text-white">Ticari Plaza</p>
<h3 className="text-2xl font-semibold text-white tracking-tight">Skyline Tower</h3>
<p className="text-gray-300 text-sm mt-2">Levent, İstanbul</p>
</div>
<div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
<i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>

<div className="group cursor-pointer relative rounded-2xl overflow-hidden shadow-sm">
<div className="aspect-[16/9] overflow-hidden">
<img alt="Luxury Residence" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2053&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex justify-between items-end">
<div>
<p className="text-[#5E6C46] text-xs font-bold uppercase tracking-wider mb-2 bg-white/10 backdrop-blur-sm inline-block px-3 py-1 rounded-full text-white">Konut</p>
<h3 className="text-2xl font-semibold text-white tracking-tight">Marina Villaları</h3>
<p className="text-gray-300 text-sm mt-2">Bodrum, Muğla</p>
</div>
<div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
<i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">

<div className="group cursor-pointer relative rounded-2xl overflow-hidden shadow-sm aspect-[4/3]">
<img alt="Interior" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-lg font-semibold text-white">İç Mekan Tasarımı</h3>
<p className="text-gray-300 text-xs mt-1">Ofis &amp; Showroom</p>
</div>
</div>

<div className="group cursor-pointer relative rounded-2xl overflow-hidden shadow-sm aspect-[4/3]">
<img alt="Industrial" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-lg font-semibold text-white">Endüstriyel Yapılar</h3>
<p className="text-gray-300 text-xs mt-1">Fabrika &amp; Depo</p>
</div>
</div>

<div className="group cursor-pointer relative rounded-2xl overflow-hidden shadow-sm aspect-[4/3]">
<img alt="Engineering" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-lg font-semibold text-white">Altyapı Çalışmaları</h3>
<p className="text-gray-300 text-xs mt-1">Yol &amp; Köprü</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden" id="why-us">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] tracking-tight mb-6">Neden Sycgrup?</h2>
<p className="text-gray-500 text-lg mb-8 leading-relaxed">
                        İnşaat sektöründeki deneyimimiz ve uzman kadromuzla, projelerinizi en yüksek standartlarda hayata geçiriyoruz.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-[#5E6C46]/10 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-[#5E6C46]" data-lucide="shield-check"></i>
</div>
<div>
<h4 className="font-semibold text-[#1A1A1A] text-lg">Güvenlik ve Kalite</h4>
<p className="text-sm text-gray-500 mt-1">ISO standartlarında iş güvenliği ve kalite kontrol süreçleri.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-[#5E6C46]/10 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-[#5E6C46]" data-lucide="clock"></i>
</div>
<div>
<h4 className="font-semibold text-[#1A1A1A] text-lg">Zamanında Teslim</h4>
<p className="text-sm text-gray-500 mt-1">Gelişmiş proje yönetim teknikleri ile taahhüt edilen sürede teslimat.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-[#5E6C46]/10 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-[#5E6C46]" data-lucide="leaf"></i>
</div>
<div>
<h4 className="font-semibold text-[#1A1A1A] text-lg">Çevre Dostu Yaklaşım</h4>
<p className="text-sm text-gray-500 mt-1">Sürdürülebilir malzemeler ve enerji verimliliği odaklı tasarımlar.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-[#5E6C46]/10 rounded-[2rem] -rotate-2"></div>
<img alt="Construction Planning" className="relative rounded-[1.8rem] shadow-2xl w-full" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&amp;w=1931&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#1A1A1A] relative overflow-hidden">
<div className="absolute inset-0 bg-[#5E6C46]/10 pattern-grid opacity-10"></div>

<div className="absolute top-0 right-0 w-96 h-96 bg-[#5E6C46] rounded-full blur-[128px] opacity-20"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">Projenizi Birlikte Hayata Geçirelim</h2>
<p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">Hayalinizdeki yapıyı inşa etmek için uzman ekibimizle tanışın. Ücretsiz keşif ve danışmanlık hizmetimizden yararlanın.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-[#5E6C46] text-white px-8 py-4 rounded-full font-medium hover:bg-[#4b5736] transition-all shadow-xl shadow-[#5E6C46]/20 transform hover:-translate-y-1" onclick="document.getElementById('lead-capture-overlay').classList.add('show')">
                    Hemen Başvur
                </button>
<button className="px-8 py-4 rounded-full font-medium text-white border border-white/20 hover:bg-white/10 transition-all">
                    Bizi Arayın
                </button>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-100 pt-20 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="bg-[#5E6C46] p-1.5 rounded-lg">
<i className="w-5 h-5 text-white" data-lucide="building" strokeWidth="1.5"></i>
</div>
<span className="font-semibold text-[#1A1A1A] tracking-tight">SYCGRUP</span>
</a>
<p className="text-sm text-gray-500 mb-8 leading-relaxed">Güven, kalite ve estetiğin adresi. Geleceği sağlam temeller üzerine kuruyoruz.</p>
<div className="flex gap-5">
<a className="text-gray-400 hover:text-[#5E6C46] transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i></a>
<a className="text-gray-400 hover:text-[#5E6C46] transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin" strokeWidth="1.5"></i></a>
<a className="text-gray-400 hover:text-[#5E6C46] transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i></a>
</div>
</div>
<div>
<h4 className="font-semibold text-[#1A1A1A] mb-6">Hizmetler</h4>
<ul className="space-y-4 text-sm text-gray-500">
<li><a className="hover:text-[#5E6C46] transition-colors" href="#">Genel Müteahhitlik</a></li>
<li><a className="hover:text-[#5E6C46] transition-colors" href="#">Proje Yönetimi</a></li>
<li><a className="hover:text-[#5E6C46] transition-colors" href="#">Mimari Tasarım</a></li>
<li><a className="hover:text-[#5E6C46] transition-colors" href="#">Danışmanlık</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-[#1A1A1A] mb-6">Kurumsal</h4>
<ul className="space-y-4 text-sm text-gray-500">
<li><a className="hover:text-[#5E6C46] transition-colors" href="#">Hakkımızda</a></li>
<li><a className="hover:text-[#5E6C46] transition-colors" href="#">Kariyer</a></li>
<li><a className="hover:text-[#5E6C46] transition-colors" href="#">Sürdürülebilirlik</a></li>
<li><a className="hover:text-[#5E6C46] transition-colors" href="#">İletişim</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-[#1A1A1A] mb-6">E-Bülten</h4>
<p className="text-sm text-gray-500 mb-4">Yeni projelerimizden haberdar olun.</p>
<form className="flex gap-2">
<input className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#5E6C46] transition-colors text-gray-700" placeholder="E-posta adresi" type="email"/>
<button className="bg-[#1A1A1A] text-white px-5 py-2.5 rounded-lg hover:bg-[#5E6C46] transition-colors text-sm font-medium" type="button">
                            Kayıt
                        </button>
</form>
</div>
</div>
<div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-400">© 2024 Sycgrup İnşaat A.Ş. Tüm hakları saklıdır.</p>
<div className="flex items-center gap-1.5 text-xs text-gray-400">
<span className="w-2 h-2 rounded-full bg-[#5E6C46]"></span>
<span>Designed with precision.</span>
</div>
</div>
</div>
</footer>

<button aria-label="İletişime Geç" className="widgetify-widget" onclick="document.getElementById('lead-capture-overlay').classList.add('show')">
<svg fill="none" height="28" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
</button>

<div className="lead-popup-overlay" id="lead-capture-overlay" onclick="closeLeadPopup(event)">
<div className="lead-popup-container" onclick="event.stopPropagation()">
<button aria-label="Kapat" className="lead-popup-close" onclick="closeLeadPopup()">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg>
</button>
<h2 className="lead-popup-title">Teklif İste</h2>
<p className="lead-popup-subtitle">Projeniz için detayları paylaşın, uzmanlarımız size dönüş yapsın.</p>
<form id="lead-capture-form" onsubmit="submitLeadForm(event)">
<input className="lead-form-field" name="name" placeholder="Ad Soyad *" required="" type="text"/>
<input className="lead-form-field" name="phone" placeholder="Telefon Numarası *" required="" type="tel"/>
<div className="relative">
<select className="lead-form-field appearance-none cursor-pointer" name="type">
<option disabled="" selected="" value="">Proje Tipi Seçiniz</option>
<option value="Konut">Konut İnşaatı</option>
<option value="Ticari">Ticari / Ofis</option>
<option value="Tadilat">Tadilat &amp; Dekorasyon</option>
<option value="Diger">Diğer</option>
</select>
<div className="absolute right-4 top-4 pointer-events-none text-gray-400">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16"><polyline points="6 9 12 15 18 9"></polyline></svg>
</div>
</div>
<textarea className="lead-form-field" name="message" placeholder="Proje Detayları (Konum, m², vb.)" rows="3" style={{resize: 'vertical', minHeight: '80px'}}></textarea>
<button className="lead-form-button" type="submit">
              Gönder
              <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16"><line x1="22" x2="11" y1="2" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
</button>
</form>
<div className="lead-popup-footer">
<a href="#" target="_blank">Sycgrup Müşteri Hizmetleri</a>
</div>
</div>
</div>





    </>
  );
}
