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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
50: '#f0f9ff',
100: '#e0f2fe',
200: '#bae6fd',
300: '#7dd3fc',
400: '#38bdf8',
500: '#0ea5e9', // Sky/Blue pastel primary
600: '#0284c7',
900: '#0c4a6e',
},
pastel: {
bg: '#f8fafc', // Slate 50
card: '#ffffff',
text: '#475569', // Slate 600
title: '#1e293b', // Slate 800
}
}
}
}
}



        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
        });

        // Close menu when clicking a link
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
                menu.classList.remove('flex');
            });
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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">

<div className="h-10 w-10 bg-brand-50 rounded-xl flex items-center justify-center overflow-hidden border border-brand-100 group-hover:shadow-sm transition-all duration-300">
<img alt="Logo" className="object-cover w-full h-full opacity-90 hover:opacity-100" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'" src="https://yarenimozelegitim.com.tr/images/logo.jpg"/>
<span className="hidden text-brand-600 font-bold text-lg tracking-tighter">YÖ</span>
</div>
<span className="text-lg font-semibold tracking-tight text-pastel-title group-hover:text-brand-600 transition-colors">Yarenim Özel Eğitim</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#home">Anasayfa</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#about">Hakkımızda</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#services">Hizmetlerimiz</a>
<a className="px-4 py-2 bg-brand-50 text-brand-700 text-sm font-medium rounded-lg hover:bg-brand-100 transition-colors border border-brand-200/50" href="#contact">İletişim</a>
</div>

<button className="md:hidden p-2 text-slate-500 hover:text-brand-600 focus:outline-none" id="mobile-menu-btn">
<iconify-icon height="24" icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>

<div className="hidden md:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-100 shadow-lg py-4 px-6 flex-col gap-4" id="mobile-menu">
<a className="block text-sm font-medium text-slate-600 hover:text-brand-600 py-2" href="#home">Anasayfa</a>
<a className="block text-sm font-medium text-slate-600 hover:text-brand-600 py-2" href="#about">Hakkımızda</a>
<a className="block text-sm font-medium text-slate-600 hover:text-brand-600 py-2" href="#services">Hizmetlerimiz</a>
<a className="block text-sm font-medium text-brand-600 py-2" href="#contact">İletişim</a>
</div>
</nav>

<section className="relative pt-32 pb-20 px-6 overflow-hidden" id="home">
<div className="absolute inset-0 z-0 opacity-40 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-100 via-transparent to-transparent"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
                Sevgi ve ilgiyle geleceğe
            </span>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-pastel-title mb-6 leading-[1.1]">
                Her Çocuk <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-indigo-500">Özeldir,</span><br/> Her Eğitim Bir Umut.
            </h1>
<p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Uzman kadromuz ile çocuklarımızın potansiyellerini en üst düzeye çıkarmak için bireysel ihtiyaçlarına uygun, sevgi dolu bir eğitim ortamı sunuyoruz.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-slate-900 text-white text-sm font-medium rounded-xl hover:bg-slate-800 transition-all shadow-lg shadow-slate-200/50 flex items-center justify-center gap-2" href="#contact">
                    Bize Ulaşın
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3 bg-white text-slate-700 text-sm font-medium rounded-xl border border-slate-200 hover:bg-slate-50 transition-all flex items-center justify-center gap-2" href="#services">
                    Hizmetlerimiz
                </a>
</div>
</div>
</section>

<div className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green-600 mb-4">
<iconify-icon height="20" icon="lucide:heart-handshake" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-pastel-title mb-1">Bireysel İlgi</h3>
<p className="text-sm text-slate-500 leading-relaxed">Her öğrencimiz için özel olarak hazırlanmış eğitim programları.</p>
</div>
<div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 mb-4">
<iconify-icon height="20" icon="lucide:graduation-cap" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-pastel-title mb-1">Uzman Kadro</h3>
<p className="text-sm text-slate-500 leading-relaxed">Alanında deneyimli eğitmenler ve terapistler.</p>
</div>
<div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600 mb-4">
<iconify-icon height="20" icon="lucide:smile" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-pastel-title mb-1">Güvenli Ortam</h3>
<p className="text-sm text-slate-500 leading-relaxed">Çocuklarınızın huzurla gelişebileceği sıcak bir yuva.</p>
</div>
</div>
</div>

<section className="py-24 bg-white relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-pastel-title mb-4">Hizmetlerimiz</h2>
<p className="text-slate-500 max-w-xl mx-auto">Çocuklarımızın gelişimine katkı sağlamak için sunduğumuz profesyonel destek alanları.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

<div className="group bg-slate-50 rounded-2xl overflow-hidden hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-lg transition-all duration-300">
<div className="h-48 overflow-hidden relative">
<img alt="Dil ve Konuşma" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
<div className="absolute bottom-4 left-4 text-white">
<iconify-icon className="mb-1 opacity-90" icon="lucide:mic" width="20"></iconify-icon>
</div>
</div>
<div className="p-5">
<h3 className="text-base font-semibold text-pastel-title mb-2 tracking-tight">Dil ve Konuşma Bozukluğu</h3>
<p className="text-xs text-slate-500 line-clamp-2">İletişim becerilerini geliştirmeye yönelik terapi yöntemleri.</p>
</div>
</div>

<div className="group bg-slate-50 rounded-2xl overflow-hidden hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-lg transition-all duration-300">
<div className="h-48 overflow-hidden relative">
<img alt="Dikkat Eksikliği" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
<div className="absolute bottom-4 left-4 text-white">
<iconify-icon className="mb-1 opacity-90" icon="lucide:focus" width="20"></iconify-icon>
</div>
</div>
<div className="p-5">
<h3 className="text-base font-semibold text-pastel-title mb-2 tracking-tight">Dikkat Eksikliği</h3>
<p className="text-xs text-slate-500 line-clamp-2">Odaklanma ve konsantrasyon becerilerini artırıcı çalışmalar.</p>
</div>
</div>

<div className="group bg-slate-50 rounded-2xl overflow-hidden hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-lg transition-all duration-300">
<div className="h-48 overflow-hidden relative">
<img alt="Otizm" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
<div className="absolute bottom-4 left-4 text-white">
<iconify-icon className="mb-1 opacity-90" icon="lucide:puzzle" width="20"></iconify-icon>
</div>
</div>
<div className="p-5">
<h3 className="text-base font-semibold text-pastel-title mb-2 tracking-tight">Otizm Spektrum Bozukluğu</h3>
<p className="text-xs text-slate-500 line-clamp-2">Sosyal etkileşim ve iletişim desteği.</p>
</div>
</div>

<div className="group bg-slate-50 rounded-2xl overflow-hidden hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-lg transition-all duration-300">
<div className="h-48 overflow-hidden relative">
<img alt="Öğrenme Güçlüğü" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
<div className="absolute bottom-4 left-4 text-white">
<iconify-icon className="mb-1 opacity-90" icon="lucide:book-open" width="20"></iconify-icon>
</div>
</div>
<div className="p-5">
<h3 className="text-base font-semibold text-pastel-title mb-2 tracking-tight">Öğrenme Güçlüğü</h3>
<p className="text-xs text-slate-500 line-clamp-2">Okuma, yazma ve matematiksel beceri desteği (Disleksi).</p>
</div>
</div>

<div className="group bg-slate-50 rounded-2xl overflow-hidden hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-lg transition-all duration-300">
<div className="h-48 overflow-hidden relative">
<img alt="Zihinsel Yetersizlik" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
<div className="absolute bottom-4 left-4 text-white">
<iconify-icon className="mb-1 opacity-90" icon="lucide:brain-circuit" width="20"></iconify-icon>
</div>
</div>
<div className="p-5">
<h3 className="text-base font-semibold text-pastel-title mb-2 tracking-tight">Zihinsel Yetersizlik</h3>
<p className="text-xs text-slate-500 line-clamp-2">Bilişsel gelişim ve bağımsız yaşam becerileri.</p>
</div>
</div>

<div className="group bg-slate-50 rounded-2xl overflow-hidden hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-lg transition-all duration-300">
<div className="h-48 overflow-hidden relative">
<img alt="Down Sendromu" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
<div className="absolute bottom-4 left-4 text-white">
<iconify-icon className="mb-1 opacity-90" icon="lucide:heart" width="20"></iconify-icon>
</div>
</div>
<div className="p-5">
<h3 className="text-base font-semibold text-pastel-title mb-2 tracking-tight">Down Sendromu</h3>
<p className="text-xs text-slate-500 line-clamp-2">Erken müdahale ve gelişimsel destek programları.</p>
</div>
</div>

<div className="group bg-slate-50 rounded-2xl overflow-hidden hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-lg transition-all duration-300">
<div className="h-48 overflow-hidden relative">
<img alt="Oyun Terapisi" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
<div className="absolute bottom-4 left-4 text-white">
<iconify-icon className="mb-1 opacity-90" icon="lucide:gamepad-2" width="20"></iconify-icon>
</div>
</div>
<div className="p-5">
<h3 className="text-base font-semibold text-pastel-title mb-2 tracking-tight">Oyun Terapisi</h3>
<p className="text-xs text-slate-500 line-clamp-2">Duygusal ifade ve sosyal beceriler için oyunla tedavi.</p>
</div>
</div>

<div className="group bg-slate-50 rounded-2xl overflow-hidden hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-lg transition-all duration-300">
<div className="h-48 overflow-hidden relative">
<img alt="Fizik Tedavi" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
<div className="absolute bottom-4 left-4 text-white">
<iconify-icon className="mb-1 opacity-90" icon="lucide:activity" width="20"></iconify-icon>
</div>
</div>
<div className="p-5">
<h3 className="text-base font-semibold text-pastel-title mb-2 tracking-tight">Fizik Tedavi</h3>
<p className="text-xs text-slate-500 line-clamp-2">Bedensel yetersizlikler için rehabilitasyon.</p>
</div>
</div>

<div className="group bg-slate-50 rounded-2xl overflow-hidden hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-lg transition-all duration-300">
<div className="h-48 overflow-hidden relative">
<img alt="Psikolojik Danışmanlık" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
<div className="absolute bottom-4 left-4 text-white">
<iconify-icon className="mb-1 opacity-90" icon="lucide:users" width="20"></iconify-icon>
</div>
</div>
<div className="p-5">
<h3 className="text-base font-semibold text-pastel-title mb-2 tracking-tight">Psikolojik Danışmanlık</h3>
<p className="text-xs text-slate-500 line-clamp-2">Bireysel ve ailevi psikolojik destek hizmetleri.</p>
</div>
</div>

<div className="group bg-slate-50 rounded-2xl overflow-hidden hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-lg transition-all duration-300">
<div className="h-48 overflow-hidden relative">
<img alt="Psikolojik Testler" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
<div className="absolute bottom-4 left-4 text-white">
<iconify-icon className="mb-1 opacity-90" icon="lucide:clipboard-list" width="20"></iconify-icon>
</div>
</div>
<div className="p-5">
<h3 className="text-base font-semibold text-pastel-title mb-2 tracking-tight">Psikolojik Testler</h3>
<p className="text-xs text-slate-500 line-clamp-2">Gelişimsel ve zihinsel değerlendirme testleri.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-50/50" id="about">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="order-2 lg:order-1">
<h2 className="text-3xl font-semibold tracking-tight text-pastel-title mb-6">Biz Kimiz?</h2>
<p className="text-slate-600 mb-6 leading-relaxed">
                    Yarenim Özel Eğitim ve Rehabilitasyon Merkezi olarak, İstanbul Sultangazi'de özel gereksinimli bireylerin hayatlarına dokunuyoruz. Bilimsel yöntemler, şefkatli yaklaşım ve modern eğitim materyalleri ile öğrencilerimizin bağımsız yaşama katılımlarını destekliyoruz.
                </p>
<p className="text-slate-600 mb-8 leading-relaxed">
                    Alanında uzman eğitimcilerimiz, psikologlarımız ve fizyoterapistlerimizle birlikte, her çocuğun biricik dünyasını keşfediyor ve onlara en uygun eğitim modelini sunuyoruz.
                </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-brand-500" icon="lucide:check-circle-2"></iconify-icon>
                        Bireyselleştirilmiş Eğitim Planları
                    </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-brand-500" icon="lucide:check-circle-2"></iconify-icon>
                        Aile Danışmanlığı ve Rehberlik
                    </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-brand-500" icon="lucide:check-circle-2"></iconify-icon>
                        Modern ve Güvenli Sınıflar
                    </li>
</ul>
<a className="inline-flex items-center text-brand-600 font-medium text-sm hover:underline" href="#contact">
                    Daha fazla bilgi alın <iconify-icon className="ml-1" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
<div className="order-1 lg:order-2">
<div className="relative">
<div className="absolute -inset-4 bg-brand-200/40 rounded-3xl transform rotate-3 z-0"></div>
<img alt="About Us" className="relative z-10 rounded-2xl shadow-xl w-full object-cover" src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-slate-50 rounded-3xl p-6 lg:p-12 border border-slate-100">

<div className="flex flex-col justify-center">
<h2 className="text-3xl font-semibold tracking-tight text-pastel-title mb-2">İletişime Geçin</h2>
<p className="text-slate-500 mb-10">Sorularınız için bizi arayın veya kurumumuzu ziyaret edin.</p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-brand-600 shrink-0">
<iconify-icon icon="lucide:map-pin" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-pastel-title mb-1">Adres</h4>
<p className="text-sm text-slate-600 leading-relaxed">Yunus Emre, 563/3. Sk. No:2<br/>34260 Sultangazi/İstanbul</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-brand-600 shrink-0">
<iconify-icon icon="lucide:phone" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-pastel-title mb-1">Telefon</h4>
<a className="text-sm text-slate-600 hover:text-brand-600 transition-colors" href="tel:05326129644">0532 612 96 44</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-brand-600 shrink-0">
<iconify-icon icon="lucide:instagram" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-pastel-title mb-1">Sosyal Medya</h4>
<a className="text-sm text-slate-600 hover:text-brand-600 transition-colors" href="https://www.instagram.com/yarenimozelegitim/" target="_blank">@yarenimozelegitim</a>
</div>
</div>
</div>
</div>

<div className="h-80 lg:h-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.903780305886!2d28.8929!3d41.0927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDA1JzMzLjciTiAyOMKwNTMnMzQuNCJF!5e0!3m2!1str!2str!4v1634567890123!5m2!1str!2str" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<span className="text-lg font-semibold tracking-tight text-pastel-title block mb-2">Yarenim Özel Eğitim</span>
<p className="text-xs text-slate-500">© 2023 Yarenim Özel Eğitim ve Rehabilitasyon. Tüm hakları saklıdır.</p>
</div>
<div className="flex gap-6">
<a className="text-xs text-slate-500 hover:text-brand-600 transition-colors" href="#home">Anasayfa</a>
<a className="text-xs text-slate-500 hover:text-brand-600 transition-colors" href="#services">Hizmetler</a>
<a className="text-xs text-slate-500 hover:text-brand-600 transition-colors" href="#contact">İletişim</a>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:bg-[#20bd5a] transition-all duration-300 group" href="https://wa.me/905326129644" target="_blank">
<iconify-icon height="28" icon="lucide:message-circle" strokeWidth="1.5" width="28"></iconify-icon>
<span className="absolute right-16 bg-white text-slate-700 text-xs font-medium px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-100">
            WhatsApp ile Yazın
        </span>
</a>



    </>
  );
}
