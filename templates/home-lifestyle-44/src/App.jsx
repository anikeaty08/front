import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
// Ivory / Graphite Theme
brand: {
50: '#F9F9F7',  // Ivory Background
100: '#F0F0EB', // Light Grey
200: '#E2E2DC', // Border
300: '#CdcDcF',
800: '#2C2C2C', // Graphite Text
900: '#111111', // Deep Black
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}



        // Simple router logic to switch sections
        function showPage(pageId) {
            // Hide all pages
            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.remove('active');
                setTimeout(() => {
                    if(!section.classList.contains('active')) section.style.display = 'none';
                }, 400); // Match transition duration
            });

            // Show target page
            const target = document.getElementById(pageId);
            if (target) {
                target.style.display = 'block';
                // Small delay to allow display block to apply before opacity transition
                setTimeout(() => {
                    target.classList.add('active');
                }, 10);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            const isOpen = !menu.classList.contains('translate-x-full');
            
            if (isOpen) {
                menu.classList.add('translate-x-full');
            } else {
                menu.classList.remove('translate-x-full');
            }
        }

        // Show cookie banner on load (delayed)
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('cookie-banner').classList.remove('hidden');
            }, 2000);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed bottom-4 left-4 right-4 md:left-8 md:max-w-md bg-white border border-brand-200 p-6 shadow-xl z-50 flex flex-col gap-4 rounded-lg hidden" id="cookie-banner">
<div className="flex items-start justify-between">
<h4 className="text-sm font-medium text-brand-900">Çerez Tercihleri</h4>
<button className="text-brand-800 hover:text-black" onclick="document.getElementById('cookie-banner').style.display='none'">
<span className="iconify" data-icon="lucide:x" data-width="16"></span>
</button>
</div>
<p className="text-xs text-gray-500 leading-relaxed">
            Deneyiminizi iyileştirmek için yasal mevzuata uygun çerezler kullanıyoruz. Detaylı bilgi için <a className="underline" href="#" onclick="showPage('legal-privacy')">Gizlilik Politikamızı</a> inceleyebilirsiniz.
        </p>
<div className="flex gap-3">
<button className="flex-1 bg-brand-900 text-white text-xs py-3 rounded-md hover:bg-black transition-colors" onclick="document.getElementById('cookie-banner').style.display='none'">Kabul Et</button>
<button className="flex-1 bg-transparent border border-brand-200 text-brand-900 text-xs py-3 rounded-md hover:bg-brand-100 transition-colors" onclick="document.getElementById('cookie-banner').style.display='none'">Reddet</button>
</div>
</div>

<a aria-label="WhatsApp ile iletişime geç" className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1 z-40 flex items-center justify-center group" href="#">
<span className="iconify" data-height="24" data-icon="lucide:message-circle" data-width="24" style={{strokeWidth: '1.5'}}></span>
<span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap text-sm font-medium ml-0 group-hover:ml-2">
            Bize Yazın
        </span>
</a>

<header className="fixed top-0 w-full bg-brand-50/80 backdrop-blur-md border-b border-brand-200 z-40 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-xl tracking-tighter font-semibold text-brand-900 z-50" href="#" onclick="showPage('home')">
                [MARKA ADI]
            </a>

<nav className="hidden md:flex items-center gap-8">
<button className="text-sm font-medium text-brand-800 hover:text-black transition-colors" onclick="showPage('catalog')">Koleksiyon</button>
<button className="text-sm font-medium text-brand-800 hover:text-black transition-colors" onclick="showPage('services')">Hizmetler</button>
<button className="text-sm font-medium text-brand-800 hover:text-black transition-colors" onclick="showPage('about')">Hikayemiz</button>
<button className="text-sm font-medium text-brand-800 hover:text-black transition-colors" onclick="showPage('contact')">İletişim</button>
</nav>

<div className="hidden md:flex items-center gap-4">
<button className="text-xs font-medium uppercase tracking-wider border border-brand-800 px-5 py-2.5 rounded-full hover:bg-brand-900 hover:text-white transition-all" onclick="showPage('catalog')">
                    Katalog İste
                </button>
</div>

<button className="md:hidden z-50 text-brand-900" onclick="toggleMobileMenu()">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>

<div className="fixed inset-0 bg-brand-50 z-40 flex flex-col items-center justify-center gap-8 translate-x-full transition-transform duration-300 md:hidden" id="mobile-menu">
<button className="text-2xl font-serif text-brand-900" onclick="showPage('catalog'); toggleMobileMenu()">Koleksiyon</button>
<button className="text-2xl font-serif text-brand-900" onclick="showPage('services'); toggleMobileMenu()">Hizmetler</button>
<button className="text-2xl font-serif text-brand-900" onclick="showPage('about'); toggleMobileMenu()">Hikayemiz</button>
<button className="text-2xl font-serif text-brand-900" onclick="showPage('contact'); toggleMobileMenu()">İletişim</button>
</div>
</header>

<main className="flex-grow pt-20">

<div className="page-section active" id="home">

<section className="relative min-h-[85vh] flex items-center justify-center px-6 border-b border-brand-200 overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&amp;fit=crop&amp;q=80')] bg-cover bg-center opacity-90 grayscale-[20%]"></div>
<div className="absolute inset-0 bg-brand-50/30"></div>
<div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
<span className="inline-block py-1 px-3 border border-brand-900/30 rounded-full text-xs font-medium uppercase tracking-widest bg-white/50 backdrop-blur-sm">Yeni Sezon 2024</span>
<h1 className="text-5xl md:text-7xl font-serif text-brand-900 leading-[1.1] tracking-tight">
                        Yaşam alanlarınız için <br/> <i className="font-serif italic">zamansız</i> bir dokunuş.
                    </h1>
<p className="text-lg text-brand-800 max-w-xl mx-auto leading-relaxed">
                        Seçkin tasarımlar, üstün teknoloji ve konfor. Evinizin her köşesi için özenle seçilmiş ürün koleksiyonunu keşfedin.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<button className="w-full sm:w-auto px-8 py-4 bg-brand-900 text-white text-sm font-medium rounded-full hover:bg-black transition-all" onclick="showPage('catalog')">
                            Kataloğu İncele
                        </button>
<button className="w-full sm:w-auto px-8 py-4 bg-white text-brand-900 text-sm font-medium border border-brand-200 rounded-full hover:bg-brand-100 transition-all flex items-center justify-center gap-2" onclick="showPage('contact')">
                            Mağaza Randevusu
                            <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</div>
</section>

<section className="py-24 px-6 bg-brand-50">
<div className="max-w-3xl mx-auto text-center space-y-6">
<span className="text-xs font-medium uppercase tracking-widest text-gray-500">Kürasyon Anlayışımız</span>
<h2 className="text-3xl font-serif text-brand-900">Estetik ve Fonksiyonun Uyumu</h2>
<p className="text-gray-600 leading-relaxed font-light">
                        [MARKA ADI] olarak, sadece ürün satmıyor; yaşam tarzı sunuyoruz. Seçkimizdeki her parça, dayanıklılık, estetik bütünlük ve teknolojik mükemmeliyet kriterlerine göre elenerek mağazamıza kabul edilir. Amacımız, evinizde geçirdiğiniz zamanın kalitesini artırmaktır.
                    </p>
</div>
</section>

<section className="py-12 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">

<div className="group relative aspect-[4/5] bg-brand-100 overflow-hidden cursor-pointer" onclick="showPage('catalog')">
<img alt="Mutfak Grubu" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
<div className="absolute bottom-8 left-8 text-white">
<h3 className="text-xl font-medium tracking-tight">Mutfak Teknolojileri</h3>
<p className="text-sm text-white/80 mt-1 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">Buzdolabı, Fırın, Ankastre</p>
</div>
</div>

<div className="group relative aspect-[4/5] bg-brand-100 overflow-hidden cursor-pointer" onclick="showPage('catalog')">
<img alt="Mobilya" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
<div className="absolute bottom-8 left-8 text-white">
<h3 className="text-xl font-medium tracking-tight">Oturma Grupları</h3>
<p className="text-sm text-white/80 mt-1 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">Koltuk, Berjer, Sehpa</p>
</div>
</div>

<div className="group relative aspect-[4/5] bg-brand-100 overflow-hidden cursor-pointer" onclick="showPage('catalog')">
<img alt="Ev Tekstili" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" src="https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
<div className="absolute bottom-8 left-8 text-white">
<h3 className="text-xl font-medium tracking-tight">Ev Tekstili &amp; Halı</h3>
<p className="text-sm text-white/80 mt-1 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">Halı, Perde, Yatak Örtüsü</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-y border-brand-200">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
<h2 className="text-3xl font-serif text-brand-900">Hizmet Standardımız</h2>
<a className="text-sm border-b border-brand-900 pb-1 mt-4 md:mt-0 hover:text-gray-600 hover:border-gray-600 transition-colors" href="#" onclick="showPage('services')">Tüm Hizmetler</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="space-y-4">
<span className="iconify text-brand-900" data-icon="lucide:truck" data-width="28" style={{strokeWidth: '1.25'}}></span>
<h3 className="text-base font-medium">Güvenli Teslimat</h3>
<p className="text-sm text-gray-500 leading-relaxed">Ürünleriniz, uzman ekibimiz tarafından sigortalı olarak adresinize teslim edilir.</p>
</div>
<div className="space-y-4">
<span className="iconify text-brand-900" data-icon="lucide:wrench" data-width="28" style={{strokeWidth: '1.25'}}></span>
<h3 className="text-base font-medium">Profesyonel Kurulum</h3>
<p className="text-sm text-gray-500 leading-relaxed">Teknik servisimiz, beyaz eşya ve mobilya kurulumlarını hassasiyetle gerçekleştirir.</p>
</div>
<div className="space-y-4">
<span className="iconify text-brand-900" data-icon="lucide:shield-check" data-width="28" style={{strokeWidth: '1.25'}}></span>
<h3 className="text-base font-medium">Garanti Desteği</h3>
<p className="text-sm text-gray-500 leading-relaxed">Tüm ürünler resmi üretici garantisi altındadır. Satış sonrası tam destek sağlanır.</p>
</div>
<div className="space-y-4">
<span className="iconify text-brand-900" data-icon="lucide:message-square" data-width="28" style={{strokeWidth: '1.25'}}></span>
<h3 className="text-base font-medium">Birebir İletişim</h3>
<p className="text-sm text-gray-500 leading-relaxed">Otomatik yanıtlar değil, sizinle ilgilenen özel müşteri temsilcisi deneyimi.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-7xl mx-auto">
<h2 className="text-2xl font-serif mb-12">Öne Çıkan Seçkiler</h2>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
<article className="space-y-4 cursor-pointer group">
<div className="aspect-[16/10] bg-brand-100 overflow-hidden rounded-sm">
<img alt="Sade Salonlar" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&amp;fit=crop&amp;q=80"/>
</div>
<h3 className="text-lg font-medium group-hover:text-gray-600 transition-colors">Sade Salonlar</h3>
<p className="text-sm text-gray-500 line-clamp-2">Minimalist mobilyalar ve nötr tonlarla dingin bir oturma odası kurgulamanın yolları.</p>
</article>
<article className="space-y-4 cursor-pointer group">
<div className="aspect-[16/10] bg-brand-100 overflow-hidden rounded-sm">
<img alt="Fonksiyonel Mutfak" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<h3 className="text-lg font-medium group-hover:text-gray-600 transition-colors">Fonksiyonel Mutfak</h3>
<p className="text-sm text-gray-500 line-clamp-2">Yeni nesil ankastre setler ile mutfakta hem hızı hem de şıklığı yakalayın.</p>
</article>
<article className="space-y-4 cursor-pointer group">
<div className="aspect-[16/10] bg-brand-100 overflow-hidden rounded-sm">
<img alt="Dokulu Ev Tekstili" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<h3 className="text-lg font-medium group-hover:text-gray-600 transition-colors">Doğal Dokular</h3>
<p className="text-sm text-gray-500 line-clamp-2">Keten perdelerden yün halılara; evinize sıcaklık katan malzeme rehberi.</p>
</article>
</div>
</div>
</section>
</div>

<div className="page-section" id="catalog">
<div className="bg-brand-900 text-brand-50 py-20 px-6">
<div className="max-w-7xl mx-auto">
<h1 className="text-4xl md:text-5xl font-serif mb-6">Koleksiyonlar</h1>
<p className="text-brand-300 max-w-2xl text-lg font-light">
                        Web sitemiz üzerinden doğrudan satış yapılmamaktadır. Detaylı bilgi, stok durumu ve fiyat teklifi için lütfen ilgilendiğiniz ürün grubunu belirterek kataloğumuzu talep edin.
                    </p>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">

<div className="group">
<div className="aspect-square bg-gray-100 mb-6 overflow-hidden rounded-sm relative">
<img alt="Buzdolabı" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
</div>
<h3 className="text-xl font-medium mb-2">Soğutma Grubu</h3>
<p className="text-sm text-gray-500 mb-4">Geniş iç hacimli gardırop tipi buzdolapları ve ankastre soğutucular.</p>
<button className="text-xs font-semibold uppercase tracking-wider border-b border-gray-300 pb-1 hover:border-black transition-colors" onclick="document.getElementById('catalog-form').scrollIntoView({behavior: 'smooth'})">Bilgi Al</button>
</div>
<div className="group">
<div className="aspect-square bg-gray-100 mb-6 overflow-hidden rounded-sm relative">
<img alt="Koltuk" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&amp;fit=crop&amp;q=80"/>
</div>
<h3 className="text-xl font-medium mb-2">Salon Mobilyaları</h3>
<p className="text-sm text-gray-500 mb-4">İtalyan deri ve premium kumaş seçenekleriyle modüler koltuk takımları.</p>
<button className="text-xs font-semibold uppercase tracking-wider border-b border-gray-300 pb-1 hover:border-black transition-colors" onclick="document.getElementById('catalog-form').scrollIntoView({behavior: 'smooth'})">Bilgi Al</button>
</div>
<div className="group">
<div className="aspect-square bg-gray-100 mb-6 overflow-hidden rounded-sm relative">
<img alt="Halı" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&amp;fit=crop&amp;q=80"/>
</div>
<h3 className="text-xl font-medium mb-2">El Dokuma Halılar</h3>
<p className="text-sm text-gray-500 mb-4">Geleneksel motiflerin modern yorumları, ipek ve yün karışımlı dokular.</p>
<button className="text-xs font-semibold uppercase tracking-wider border-b border-gray-300 pb-1 hover:border-black transition-colors" onclick="document.getElementById('catalog-form').scrollIntoView({behavior: 'smooth'})">Bilgi Al</button>
</div>
<div className="group">
<div className="aspect-square bg-gray-100 mb-6 overflow-hidden rounded-sm relative">
<img alt="Küçük Ev Aletleri" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&amp;fit=crop&amp;q=80"/>
</div>
<h3 className="text-xl font-medium mb-2">Küçük Ev Aletleri</h3>
<p className="text-sm text-gray-500 mb-4">Premium kahve makineleri, mikserler ve akıllı mutfak yardımcıları.</p>
<button className="text-xs font-semibold uppercase tracking-wider border-b border-gray-300 pb-1 hover:border-black transition-colors" onclick="document.getElementById('catalog-form').scrollIntoView({behavior: 'smooth'})">Bilgi Al</button>
</div>
</div>

<section className="bg-white py-24 px-6 border-t border-brand-200" id="catalog-form">
<div className="max-w-xl mx-auto">
<div className="text-center mb-10">
<h2 className="text-2xl font-serif text-brand-900 mb-3">Katalog ve Fiyat Listesi Talebi</h2>
<p className="text-sm text-gray-500">Formu doldurduktan sonra müşteri temsilcimiz sizinle WhatsApp veya E-posta yoluyla iletişime geçecektir.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="col-span-2 md:col-span-1">
<label className="block text-xs font-medium text-gray-700 mb-2">Ad Soyad</label>
<input className="w-full bg-brand-50 border-b border-gray-300 focus:border-brand-900 px-0 py-3 transition-colors text-sm" placeholder="İsim Giriniz" type="text"/>
</div>
<div className="col-span-2 md:col-span-1">
<label className="block text-xs font-medium text-gray-700 mb-2">Telefon</label>
<input className="w-full bg-brand-50 border-b border-gray-300 focus:border-brand-900 px-0 py-3 transition-colors text-sm" placeholder="05XX XXX XX XX" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-2">E-posta</label>
<input className="w-full bg-brand-50 border-b border-gray-300 focus:border-brand-900 px-0 py-3 transition-colors text-sm" placeholder="ornek@email.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-2">İlgilendiğiniz Ürün Grupları</label>
<select className="w-full bg-brand-50 border-b border-gray-300 focus:border-brand-900 px-0 py-3 transition-colors text-sm text-gray-600">
<option>Seçiniz...</option>
<option>Beyaz Eşya &amp; Ankastre</option>
<option>Mobilya &amp; Oturma Grubu</option>
<option>Ev Tekstili &amp; Halı</option>
<option>Tümü</option>
</select>
</div>
<div className="flex items-start gap-3 pt-2">
<input className="mt-1 border-gray-300 rounded text-brand-900 focus:ring-brand-900" id="kvkk-catalog" type="checkbox"/>
<label className="text-xs text-gray-500 leading-relaxed" htmlFor="kvkk-catalog">
<a className="underline hover:text-black" href="#" onclick="showPage('legal-kvkk')">KVKK Aydınlatma Metni</a>'ni okudum, kişisel verilerimin işlenmesine izin veriyorum.
                            </label>
</div>
<button className="w-full bg-brand-900 text-white py-4 rounded-full text-sm font-medium hover:bg-black transition-all" type="button">Gönder</button>
</form>
</div>
</section>
</div>

<div className="page-section" id="services">
<div className="max-w-7xl mx-auto px-6 py-20">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
<div className="lg:col-span-4 space-y-6">
<h1 className="text-4xl font-serif text-brand-900">Sizin İçin Buradayız</h1>
<p className="text-gray-600 leading-relaxed font-light">
                            [MARKA ADI] deneyimi, satın alma ile bitmez; tam tersine yeni başlar. Uzman teknik ekibimiz ve müşteri danışmanlarımız, ürünlerinizin ömrü boyunca yanınızdadır.
                        </p>
</div>
<div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
<div className="bg-white p-8 rounded-lg shadow-sm border border-brand-100">
<span className="iconify mb-4 text-brand-900" data-icon="lucide:package-check" data-width="32"></span>
<h3 className="text-lg font-medium mb-2">Beyaz Eldiven Teslimat</h3>
<p className="text-sm text-gray-500">Ürünleriniz kata kadar çıkartılır, ambalaj atıkları ekibimiz tarafından geri toplanır. Eviniz temiz bırakılır.</p>
</div>
<div className="bg-white p-8 rounded-lg shadow-sm border border-brand-100">
<span className="iconify mb-4 text-brand-900" data-icon="lucide:settings-2" data-width="32"></span>
<h3 className="text-lg font-medium mb-2">Ücretsiz Keşif &amp; Montaj</h3>
<p className="text-sm text-gray-500">Ankastre ürünler ve büyük mobilyalar için önceden keşif yapılır, mekanınıza en uygun kurulum sağlanır.</p>
</div>
<div className="bg-white p-8 rounded-lg shadow-sm border border-brand-100">
<span className="iconify mb-4 text-brand-900" data-icon="lucide:clock" data-width="32"></span>
<h3 className="text-lg font-medium mb-2">Hızlı Teknik Servis</h3>
<p className="text-sm text-gray-500">Olası arıza durumlarında 24 saat içinde randevu oluşturma garantisi sunuyoruz.</p>
</div>
<div className="bg-white p-8 rounded-lg shadow-sm border border-brand-100">
<span className="iconify mb-4 text-brand-900" data-icon="lucide:refresh-ccw" data-width="32"></span>
<h3 className="text-lg font-medium mb-2">Değişim Kolaylığı</h3>
<p className="text-sm text-gray-500">Satın aldığınız aksesuarlarda 14 gün, mobilyalarda üretim hatasına karşı koşulsuz destek.</p>
</div>
</div>
</div>
</div>

<div className="bg-brand-200/30 border-y border-brand-200 py-20 px-6">
<div className="max-w-xl mx-auto text-center">
<h2 className="text-2xl font-serif text-brand-900 mb-6">Servis Talebi Oluşturun</h2>
<p className="text-sm text-gray-500 mb-8">Mevcut ürünlerinizle ilgili destek almak için formu doldurun, sizi arayalım.</p>
<button className="px-8 py-3 border border-brand-900 text-brand-900 rounded-full text-sm font-medium hover:bg-brand-900 hover:text-white transition-all" onclick="showPage('contact')">İletişim Formuna Git</button>
</div>
</div>
</div>

<div className="page-section" id="about">
<section className="relative py-32 px-6 overflow-hidden">
<div className="max-w-4xl mx-auto text-center relative z-10">
<h1 className="text-4xl md:text-6xl font-serif text-brand-900 mb-8 tracking-tight">Köklerimiz ve Geleceğimiz</h1>
<p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                        "Evin kalbi detaylarda atar." Felsefemiz, sadece bir mağaza olmak değil, ev yaşam kültürüne değer katan bir rehber olmaktır.
                    </p>
</div>
</section>
<section className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="aspect-[4/5] bg-gray-200 relative rounded-sm overflow-hidden">
<img alt="Showroom" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&amp;fit=crop&amp;q=80"/>
</div>
<div className="space-y-8">
<div>
<h3 className="text-xl font-medium mb-3 text-brand-900">Hikayemiz</h3>
<p className="text-gray-600 leading-relaxed text-sm">
                            [Yıl] yılında kurulan [MARKA ADI], yerel zanaatkarlığı global tasarım standartlarıyla buluşturma vizyonuyla yola çıktı. Bugün, [Şehir] merkezli ana showroomumuzda, dünyanın önde gelen teknoloji markalarını ve özel tasarım mobilyaları aynı çatı altında sunuyoruz.
                        </p>
</div>
<div>
<h3 className="text-xl font-medium mb-3 text-brand-900">Mağaza Deneyimi</h3>
<p className="text-gray-600 leading-relaxed text-sm">
                            Showroomumuz bir satış noktasından çok, bir yaşam alanı simülasyonudur. Kahvenizi içerken kumaş kartelalarını inceleyebilir, ankastre mutfaklarımızda düzenlenen workshoplara katılabilirsiniz. Sizi aceleye getirmeyen, sakin bir keşif süreci sunuyoruz.
                        </p>
</div>
<div className="pt-4">
<div className="grid grid-cols-3 gap-4 border-t border-brand-200 pt-6">
<div>
<span className="block text-3xl font-serif text-brand-900">15+</span>
<span className="text-xs text-gray-500 uppercase tracking-wider">Yıllık Deneyim</span>
</div>
<div>
<span className="block text-3xl font-serif text-brand-900">50+</span>
<span className="text-xs text-gray-500 uppercase tracking-wider">Global Marka</span>
</div>
<div>
<span className="block text-3xl font-serif text-brand-900">2K+</span>
<span className="text-xs text-gray-500 uppercase tracking-wider">Mutlu Ev</span>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-section" id="contact">
<div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">

<div className="bg-brand-900 text-brand-50 p-12 lg:p-24 flex flex-col justify-center">
<h1 className="text-4xl font-serif mb-12">İletişime Geçin</h1>
<div className="space-y-8 mb-12">
<div>
<span className="text-xs font-semibold uppercase tracking-wider text-brand-300 block mb-2">Showroom Adresi</span>
<p className="text-lg leading-relaxed">[Mahalle Adı], [Cadde Adı] No:12<br/>[İlçe], [Şehir], Türkiye</p>
</div>
<div>
<span className="text-xs font-semibold uppercase tracking-wider text-brand-300 block mb-2">İletişim</span>
<p className="text-lg text-white hover:text-brand-300 transition-colors"><a href="tel:+902120000000">+90 (212) 000 00 00</a></p>
<p className="text-lg text-white hover:text-brand-300 transition-colors"><a href="mailto:info@markaadi.com">info@markaadi.com</a></p>
</div>
<div>
<span className="text-xs font-semibold uppercase tracking-wider text-brand-300 block mb-2">Çalışma Saatleri</span>
<p className="text-base text-gray-300">Pazartesi - Cumartesi: 09:00 - 19:00</p>
<p className="text-base text-gray-300">Pazar: Kapalı (Randevu ile)</p>
</div>
</div>

<div className="w-full h-64 bg-gray-800 rounded-sm overflow-hidden relative group">
<img alt="Harita" className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 flex items-center justify-center">
<button className="bg-white text-brand-900 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wide hover:bg-gray-100 transition-colors">Yol Tarifi Al</button>
</div>
</div>
</div>

<div className="bg-white p-12 lg:p-24 flex flex-col justify-center">
<h2 className="text-2xl font-serif text-brand-900 mb-8">Bize Yazın</h2>
<form className="space-y-8">
<div className="space-y-1">
<label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Konu</label>
<select className="w-full border-b border-gray-300 py-3 bg-transparent text-brand-900 text-sm focus:border-black transition-colors">
<option>Ürün Bilgisi / Fiyat Talebi</option>
<option>Mimari Destek</option>
<option>Teknik Servis</option>
<option>Diğer</option>
</select>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Ad Soyad</label>
<input className="w-full border-b border-gray-300 py-3 bg-transparent text-brand-900 text-sm placeholder-gray-300 focus:border-black transition-colors" placeholder="İsminiz" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-gray-500 uppercase tracking-wide">E-posta</label>
<input className="w-full border-b border-gray-300 py-3 bg-transparent text-brand-900 text-sm placeholder-gray-300 focus:border-black transition-colors" placeholder="eposta@adresiniz.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Mesajınız</label>
<textarea className="w-full border-b border-gray-300 py-3 bg-transparent text-brand-900 text-sm placeholder-gray-300 focus:border-black transition-colors resize-none" placeholder="Size nasıl yardımcı olabiliriz?" rows="4"></textarea>
</div>
<div className="flex items-start gap-3">
<input className="mt-1 border-gray-300 rounded text-brand-900 focus:ring-brand-900" id="kvkk-contact" type="checkbox"/>
<label className="text-xs text-gray-500 leading-relaxed" htmlFor="kvkk-contact">
                                Formu göndererek, <a className="underline hover:text-black" href="#" onclick="showPage('legal-kvkk')">Kişisel Verilerin Korunması Politikası</a>'nı okuduğumu ve onayladığımı beyan ederim.
                            </label>
</div>
<button className="bg-brand-900 text-white px-8 py-4 rounded-full text-sm font-medium w-full md:w-auto hover:bg-black transition-all shadow-lg hover:shadow-xl" type="button">Gönder</button>
</form>
</div>
</div>
</div>

<div className="page-section" id="legal-kvkk">
<div className="max-w-3xl mx-auto px-6 py-24">
<h1 className="text-3xl font-serif text-brand-900 mb-2">KVKK Aydınlatma Metni</h1>
<p className="text-sm text-gray-500 mb-12">Son Güncelleme: [Tarih]</p>
<div className="prose prose-stone prose-sm max-w-none text-gray-600 space-y-8">
<p className="italic text-xs border-l-2 border-brand-200 pl-4 text-gray-400">Bu metin genel bilgilendirme amaçlı bir şablondur; şirketinizin süreçlerine göre hukuk danışmanıyla uyarlanmalıdır.</p>
<div>
<h3 className="text-brand-900 font-medium text-lg mb-2">1. Veri Sorumlusu</h3>
<p>6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, kişisel verileriniz; veri sorumlusu olarak [Şirket Ünvanı] (“Şirket”) tarafından aşağıda açıklanan kapsamda işlenebilecektir.</p>
</div>
<div>
<h3 className="text-brand-900 font-medium text-lg mb-2">2. Kişisel Verilerin İşlenme Amacı</h3>
<p>Toplanan kişisel verileriniz; ürün ve hizmetlerimizden faydalanmanız, katalog ve fiyat teklifi taleplerinizin karşılanması, mağaza ziyaretlerinin planlanması ve satış sonrası destek hizmetlerinin yürütülmesi amaçlarıyla işlenmektedir.</p>
</div>
<div>
<h3 className="text-brand-900 font-medium text-lg mb-2">3. İşlenen Veri Kategorileri</h3>
<ul className="list-disc pl-5 space-y-1">
<li>Kimlik Bilgileri (Ad, Soyad)</li>
<li>İletişim Bilgileri (Telefon, E-posta, Adres)</li>
<li>Müşteri İşlem Bilgileri (Talep konusu, ürün tercihleri)</li>
</ul>
</div>
<div>
<h3 className="text-brand-900 font-medium text-lg mb-2">4. Haklarınız</h3>
<p>KVKK’nın 11. maddesi uyarınca, kişisel veri sahibi olarak; verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, amaca uygun kullanılıp kullanılmadığını öğrenme ve verilerin silinmesini isteme haklarına sahipsiniz. Taleplerinizi [E-posta] adresine iletebilirsiniz.</p>
</div>
</div>
</div>
</div>

<div className="page-section" id="legal-privacy">
<div className="max-w-3xl mx-auto px-6 py-24">
<h1 className="text-3xl font-serif text-brand-900 mb-2">Gizlilik ve Çerez Politikası</h1>
<p className="text-sm text-gray-500 mb-12">Son Güncelleme: [Tarih]</p>
<div className="prose prose-stone prose-sm max-w-none text-gray-600 space-y-8">
<p className="italic text-xs border-l-2 border-brand-200 pl-4 text-gray-400">Bu metin genel bilgilendirme amaçlı bir şablondur.</p>
<div>
<h3 className="text-brand-900 font-medium text-lg mb-2">Gizlilik Taahhüdü</h3>
<p>[MARKA ADI] olarak, web sitemizi ziyaret eden kullanıcılarımızın gizliliğine saygı duyuyoruz. Bu web sitesi üzerinden herhangi bir doğrudan online satış işlemi (kredi kartı ödemesi vb.) gerçekleştirilmemektedir.</p>
</div>
<div>
<h3 className="text-brand-900 font-medium text-lg mb-2">Çerez (Cookie) Kullanımı</h3>
<p>Sitemizde, kullanıcı deneyimini iyileştirmek, site trafiğini analiz etmek ve tercihlerinizi hatırlamak amacıyla çerezler kullanılmaktadır.</p>
<ul className="list-disc pl-5 space-y-1 mt-2">
<li><strong>Zorunlu Çerezler:</strong> Sitenin teknik olarak çalışması için gereklidir.</li>
<li><strong>Analitik Çerezler:</strong> Ziyaretçi sayıları ve trafik kaynaklarını görmemizi sağlar.</li>
</ul>
</div>
<div>
<h3 className="text-brand-900 font-medium text-lg mb-2">Güvenlik</h3>
<p>Kişisel verileriniz, yetkisiz erişimlere karşı endüstri standardı güvenlik önlemleri ile korunmaktadır. Ancak internet üzerinden veri iletiminin %100 güvenli olduğu garanti edilemez.</p>
</div>
</div>
</div>
</div>

<div className="page-section" id="legal-returns">
<div className="max-w-3xl mx-auto px-6 py-24">
<h1 className="text-3xl font-serif text-brand-900 mb-2">İade ve İptal Şartları</h1>
<p className="text-sm text-gray-500 mb-12">Showroom ve Kurumsal Satışlar İçin</p>
<div className="prose prose-stone prose-sm max-w-none text-gray-600 space-y-8">
<p className="italic text-xs border-l-2 border-brand-200 pl-4 text-gray-400">Bu metin fiziksel mağaza ve katalog satışlarına yöneliktir.</p>
<div>
<h3 className="text-brand-900 font-medium text-lg mb-2">Genel Prosedür</h3>
<p>Firmamızdan satın alınan ürünler için iade ve değişim süreçleri, 6502 sayılı Tüketicinin Korunması Hakkında Kanun çerçevesinde mağazalarımız üzerinden yürütülmektedir. Online satış (mesafeli satış) yapılmadığı için süreçler fiziksel fatura ibrazı ile başlatılır.</p>
</div>
<div>
<h3 className="text-brand-900 font-medium text-lg mb-2">İade Koşulları</h3>
<ul className="list-disc pl-5 space-y-1">
<li>Ürün ambalajı açılmamış ve hasar görmemiş olmalıdır.</li>
<li>Kişiye özel sipariş edilen (özel kumaş, özel ölçü mobilya vb.) ürünlerde üretim hatası dışında iade kabul edilmemektedir.</li>
<li>İade süresi teslimat tarihinden itibaren 14 gündür.</li>
</ul>
</div>
<div>
<h3 className="text-brand-900 font-medium text-lg mb-2">Sevkiyat ve Kurulum Sonrası</h3>
<p>Kurulumu yetkili servis tarafından yapılmış elektronik ürünlerde, iade işlemleri için yetkili servis tarafından "İadeye Uygundur" raporu düzenlenmesi gerekmektedir.</p>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-brand-50 border-t border-brand-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-4">
<h4 className="text-lg font-semibold tracking-tight text-brand-900">[MARKA ADI]</h4>
<p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                        Rafine yaşam alanları için teknoloji ve tasarımı buluşturan kürasyon markası.
                    </p>
</div>

<div className="space-y-4">
<h5 className="text-xs font-bold uppercase tracking-widest text-brand-900">Kurumsal</h5>
<ul className="space-y-2 text-sm text-gray-600">
<li><a className="hover:text-black transition-colors" href="#" onclick="showPage('about')">Hakkımızda</a></li>
<li><a className="hover:text-black transition-colors" href="#" onclick="showPage('services')">Hizmetlerimiz</a></li>
<li><a className="hover:text-black transition-colors" href="#" onclick="showPage('contact')">Mağazalar</a></li>
<li><a className="hover:text-black transition-colors" href="#" onclick="showPage('contact')">Kariyer (Yakında)</a></li>
</ul>
</div>

<div className="space-y-4">
<h5 className="text-xs font-bold uppercase tracking-widest text-brand-900">Yasal</h5>
<ul className="space-y-2 text-sm text-gray-600">
<li><a className="hover:text-black transition-colors" href="#" onclick="showPage('legal-kvkk')">KVKK Aydınlatma Metni</a></li>
<li><a className="hover:text-black transition-colors" href="#" onclick="showPage('legal-privacy')">Gizlilik Politikası</a></li>
<li><a className="hover:text-black transition-colors" href="#" onclick="showPage('legal-returns')">İade Koşulları</a></li>
<li><button className="hover:text-black transition-colors text-left" onclick="document.getElementById('cookie-banner').style.display='flex'">Çerez Ayarları</button></li>
</ul>
</div>

<div className="space-y-4">
<h5 className="text-xs font-bold uppercase tracking-widest text-brand-900">Bize Ulaşın</h5>
<p className="text-sm text-gray-600">[Adres Placeholder]<br/>[Şehir], Türkiye</p>
<p className="text-sm text-gray-600 font-medium">info@markaadi.com</p>
<div className="flex gap-4 pt-2">
<a className="text-gray-400 hover:text-brand-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="20"></span></a>
<a className="text-gray-400 hover:text-brand-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:facebook" data-width="20"></span></a>
<a className="text-gray-400 hover:text-brand-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="20"></span></a>
</div>
</div>
</div>
<div className="border-t border-brand-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-400">© 2024 [Şirket Ünvanı]. Tüm hakları saklıdır.</p>
<div className="flex gap-2 opacity-50">

<span className="iconify text-gray-400" data-icon="lucide:credit-card" data-width="20"></span>
</div>
</div>
</div>
</footer>



    </>
  );
}
