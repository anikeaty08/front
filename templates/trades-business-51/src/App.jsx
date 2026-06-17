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
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex-shrink-0 flex items-center gap-2">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
<iconify-icon className="text-white text-lg" icon="solar:widget-5-linear"></iconify-icon>
</div>
<span className="font-semibold text-lg tracking-tighter">USTAPLAN</span>
</div>
<div className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#ozellikler">Özellikler</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#moduller">Modüller</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#nasil-calisir">Nasıl Çalışır?</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#fiyatlar">Fiyatlandırma</a>
</div>
<div className="flex items-center space-x-4">
<a className="hidden sm:block text-sm font-medium text-gray-600 hover:text-gray-900" href="#">Giriş Yap</a>
<a className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm" href="#">
                        Ücretsiz Dene
                    </a>
</div>
</div>
</div>
</nav>

<section className="relative pt-20 pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">

<div className="lg:col-span-6 text-center lg:text-left mb-16 lg:mb-0">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                        Yeni nesil esnaf uygulaması
                    </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 mb-6 leading-tight">
                        Defteri, WhatsApp'ı bırakın. İşinizi <span className="text-blue-600">tek ekrandan</span> yönetin.
                    </h1>
<p className="text-base sm:text-lg text-gray-500 mb-8 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                        UstaPlan; müşteri, alacak, randevu ve stok takibini cebinize getiren en pratik iş yönetim sistemidir. Kim ne borçlu, hangi iş ne zaman teslim edilecek derdine son.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm" href="#">
                            Ücretsiz Dene
                        </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-gray-200 text-base font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 transition-colors gap-2 shadow-sm" href="#">
<iconify-icon className="text-xl text-gray-400" icon="solar:play-circle-linear"></iconify-icon>
                            Demo İzle
                        </a>
</div>
<div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500 font-medium">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
</div>
<span>500+ usta kullanıyor</span>
</div>
</div>

<div className="lg:col-span-6 relative">

<div className="absolute inset-0 bg-blue-400/20 blur-[100px] rounded-full w-3/4 h-3/4 mx-auto top-1/2 -translate-y-1/2 -z-10"></div>
<div className="relative mx-auto w-72 sm:w-80 h-[38rem] border-[8px] sm:border-[10px] border-gray-900 rounded-[2.5rem] sm:rounded-[3rem] bg-gray-50 overflow-hidden shadow-2xl flex flex-col">

<div className="absolute top-0 inset-x-0 h-6 bg-gray-900 rounded-b-2xl w-32 mx-auto z-20"></div>

<div className="bg-white px-5 pt-10 pb-4 border-b border-gray-100 flex justify-between items-center sticky top-0 z-10">
<div>
<p className="text-xs text-gray-500 font-medium">Merhaba,</p>
<p className="text-base font-semibold tracking-tight">Ahmet Usta</p>
</div>
<div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
<iconify-icon className="text-lg" icon="solar:bell-linear"></iconify-icon>
</div>
</div>

<div className="flex-1 overflow-y-auto p-5 space-y-5 hide-scrollbar">

<div className="bg-blue-600 rounded-2xl p-5 text-white shadow-md relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
<p className="text-xs font-medium text-blue-100 mb-1">Toplam Alacak</p>
<h3 className="text-2xl font-semibold tracking-tight">24.500 TL</h3>
<div className="mt-4 flex items-center gap-2 text-xs font-medium text-blue-100 bg-white/10 w-fit px-2 py-1 rounded-md">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
                                    Bu hafta +3.200 TL
                                </div>
</div>

<div className="grid grid-cols-2 gap-3">
<button className="bg-white border border-gray-100 rounded-xl p-3 flex flex-col items-center justify-center gap-2 shadow-sm hover:border-blue-200 transition-colors">
<div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:add-circle-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-gray-700">Yeni İş</span>
</button>
<button className="bg-white border border-gray-100 rounded-xl p-3 flex flex-col items-center justify-center gap-2 shadow-sm hover:border-blue-200 transition-colors">
<div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:wallet-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-gray-700">Tahsilat Al</span>
</button>
</div>

<div>
<h4 className="text-sm font-semibold tracking-tight text-gray-900 mb-3">Bugünkü Randevular</h4>
<div className="space-y-3">
<div className="bg-white border border-gray-100 rounded-xl p-3 shadow-sm flex items-start gap-3">
<div className="w-2 h-2 mt-1.5 rounded-full bg-orange-400 flex-shrink-0"></div>
<div className="flex-1">
<p className="text-sm font-medium text-gray-900">Fren Balatası Değişimi</p>
<p className="text-xs text-gray-500 mt-0.5">34 ABC 123 • Mehmet Y.</p>
</div>
<span className="text-xs font-medium text-gray-900 bg-gray-50 px-2 py-1 rounded-md">14:30</span>
</div>
<div className="bg-white border border-gray-100 rounded-xl p-3 shadow-sm flex items-start gap-3">
<div className="w-2 h-2 mt-1.5 rounded-full bg-blue-400 flex-shrink-0"></div>
<div className="flex-1">
<p className="text-sm font-medium text-gray-900">Periyodik Bakım</p>
<p className="text-xs text-gray-500 mt-0.5">34 DEF 456 • Ali K.</p>
</div>
<span className="text-xs font-medium text-gray-900 bg-gray-50 px-2 py-1 rounded-md">16:00</span>
</div>
</div>
</div>
</div>

<div className="bg-white border-t border-gray-100 px-6 py-4 flex justify-between items-center sticky bottom-0 z-10">
<div className="flex flex-col items-center gap-1 text-blue-600">
<iconify-icon className="text-xl" icon="solar:home-smile-linear"></iconify-icon>
</div>
<div className="flex flex-col items-center gap-1 text-gray-400">
<iconify-icon className="text-xl" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<div className="flex flex-col items-center gap-1 text-gray-400">
<iconify-icon className="text-xl" icon="solar:calendar-linear"></iconify-icon>
</div>
<div className="flex flex-col items-center gap-1 text-gray-400">
<iconify-icon className="text-xl" icon="solar:settings-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">Eski usul çalışmak size para ve müşteri kaybettiriyor</h2>
<p className="text-base text-gray-500 font-normal">Defter karıştırmak, WhatsApp mesajlarında iş aramak veya her şeyi akılda tutmaya çalışmak sadece yorucu değil, aynı zamanda maliyetlidir.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
<div className="w-12 h-12 bg-white rounded-xl border border-gray-200 flex items-center justify-center mb-4 text-gray-600 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:notebook-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">Bilgiler Kayboluyor</h3>
<p className="text-sm text-gray-500 font-normal">Defter sayfaları arasında müşteri numaralarını ve eski işleri ararken vakit kaybedersiniz.</p>
</div>

<div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
<div className="w-12 h-12 bg-white rounded-xl border border-gray-200 flex items-center justify-center mb-4 text-gray-600 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">Hesaplar Karışıyor</h3>
<p className="text-sm text-gray-500 font-normal">"Kim ne kadar peşinat verdi, ne borcu kaldı?" soruları cevapsız kalır, tahsilatlar gecikir.</p>
</div>

<div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
<div className="w-12 h-12 bg-white rounded-xl border border-gray-200 flex items-center justify-center mb-4 text-gray-600 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:calendar-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">Randevular Unutuluyor</h3>
<p className="text-sm text-gray-500 font-normal">Aynı saate iki iş yazılır veya müşteri unutulur. Müşteri memnuniyeti ve itibar zedelenir.</p>
</div>

<div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
<div className="w-12 h-12 bg-white rounded-xl border border-gray-200 flex items-center justify-center mb-4 text-gray-600 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:box-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">Stok Bitiyor</h3>
<p className="text-sm text-gray-500 font-normal">Tam işe başlayacakken malzemenin bittiğini fark edersiniz, işler aksar ve süreç uzar.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50" id="ozellikler">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">İhtiyacınız olan her şey tek bir yerde</h2>
<p className="text-base text-gray-500 font-normal">UstaPlan karmaşık yazılımlar gibi kafa karıştırmaz. Sadece bir ustanın günlük hayatta ihtiyaç duyduğu araçları en basit haliyle sunar.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Müşteri Rehberi</h3>
<p className="text-sm text-gray-500 font-normal mb-4">Tüm müşterilerinizin iletişim bilgileri, araç/cihaz detayları ve geçmiş iş kayıtları tek tuş uzağınızda.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-sm font-medium text-gray-700">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Plaka veya isimle arama
                        </li>
<li className="flex items-center gap-2 text-sm font-medium text-gray-700">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Geçmiş iş dökümü
                        </li>
</ul>
</div>

<div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:clipboard-list-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">İş &amp; Hizmet Takibi</h3>
<p className="text-sm text-gray-500 font-normal mb-4">Hangi iş ne aşamada, hangi parçalar kullanıldı, işi kim yaptı hepsini detaylıca kaydedin.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-sm font-medium text-gray-700">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Fotoğraf ekleme özelliği
                        </li>
<li className="flex items-center gap-2 text-sm font-medium text-gray-700">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Durum güncellemeleri
                        </li>
</ul>
</div>

<div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:bill-list-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Alacak/Verecek Hesabı</h3>
<p className="text-sm text-gray-500 font-normal mb-4">Kasaya giren ve çıkan parayı anlık görün. Geciken ödemeleri sistem size hatırlatsın.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-sm font-medium text-gray-700">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Kısmi ödeme takibi
                        </li>
<li className="flex items-center gap-2 text-sm font-medium text-gray-700">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Toplam bakiye raporu
                        </li>
</ul>
</div>

<div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:calendar-date-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Randevu Takvimi</h3>
<p className="text-sm text-gray-500 font-normal">Gününüzü planlayın. Müşterilerinize randevu saatinde WhatsApp üzerinden otomatik hatırlatma gönderin.</p>
</div>

<div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm lg:col-span-2">
<div className="flex flex-col sm:flex-row gap-6 items-start">
<div className="w-12 h-12 flex-shrink-0 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
<iconify-icon className="text-2xl" icon="solar:box-minimalistic-linear"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">Basit Stok Yönetimi</h3>
<p className="text-sm text-gray-500 font-normal mb-4 max-w-lg">Sık kullandığınız parçaları sisteme ekleyin. İşe malzeme ekledikçe stoktan otomatik düşsün. Kritik seviyeye inen ürünler için uyarı alın.</p>
<div className="flex gap-4">
<span className="inline-flex items-center gap-1 text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-md">Motor Yağı (12 adet)</span>
<span className="inline-flex items-center gap-1 text-xs font-medium bg-red-50 text-red-600 px-2 py-1 rounded-md">Fren Balatası (Kritik: 2 adet)</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-gray-100 overflow-hidden" id="moduller">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">

<div className="mb-16 lg:mb-0">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-6">Sadece kullandığınız özelliklere sahip olun. Kalabalıktan kurtulun.</h2>
<p className="text-base text-gray-500 font-normal mb-8 leading-relaxed">
                        Her işletmenin ihtiyacı farklıdır. Bir berber stok takibi yapmak istemeyebilir veya bir tamirci randevu sistemine ihtiyaç duymayabilir. UstaPlan modülerdir; menüden sektörünüzü seçin veya sadece ihtiyacınız olan özellikleri açık bırakın. Kullanmadığınız butonları görmezsiniz.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-600">
<iconify-icon className="text-xl" icon="solar:tuning-square-2-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold tracking-tight text-gray-900 mb-1">Kişiselleştirilebilir Menü</h4>
<p className="text-sm text-gray-500 font-normal">Sadece açık olan modüller uygulamanızda görünür. Ekranınız sade kalır.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-600">
<iconify-icon className="text-xl" icon="solar:tag-price-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold tracking-tight text-gray-900 mb-1">Esnek Fiyatlandırma</h4>
<p className="text-sm text-gray-500 font-normal">Kullanmadığınız modüllere para ödemezsiniz. İhtiyacınız oldukça yeni özellik açın.</p>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute inset-0 bg-gray-100 transform rotate-3 rounded-[2rem] -z-10"></div>
<div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-2 sm:p-4 max-w-md mx-auto relative z-10">
<div className="px-4 py-3 border-b border-gray-100 mb-2">
<h3 className="text-sm font-semibold text-gray-900">Modül Yönetimi</h3>
<p className="text-xs text-gray-500 mt-1">Uygulama menünüzü özelleştirin</p>
</div>
<div className="space-y-1">

<div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600">
<iconify-icon icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Müşteri &amp; Alacak</p>
<p className="text-xs text-gray-500">Temel modül (Zorunlu)</p>
</div>
</div>

<div className="w-11 h-6 bg-blue-600 rounded-full relative opacity-50 cursor-not-allowed">
<div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
</div>
</div>

<div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600">
<iconify-icon icon="solar:calendar-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Randevu Takvimi</p>
<p className="text-xs text-gray-500">Açık</p>
</div>
</div>

<div className="w-11 h-6 bg-blue-600 rounded-full relative cursor-pointer shadow-inner">
<div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
</div>
</div>

<div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600">
<iconify-icon icon="solar:box-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Stok Yönetimi</p>
<p className="text-xs text-gray-500">Kapalı</p>
</div>
</div>

<div className="w-11 h-6 bg-gray-200 rounded-full relative cursor-pointer shadow-inner">
<div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
</div>
</div>

<div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600">
<iconify-icon icon="solar:user-id-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Personel Takibi</p>
<p className="text-xs text-gray-500">Kapalı</p>
</div>
</div>

<div className="w-11 h-6 bg-gray-200 rounded-full relative cursor-pointer shadow-inner">
<div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50" id="nasil-calisir">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">Başlamak sadece 3 dakika sürer</h2>
<p className="text-base text-gray-500 font-normal">Teknik bilgiye ihtiyacınız yok. Telefon numaranızla hemen kullanmaya başlayın.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">

<div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-gray-200"></div>

<div className="relative text-center">
<div className="w-12 h-12 mx-auto bg-blue-600 text-white rounded-2xl flex items-center justify-center text-lg font-semibold mb-6 shadow-md ring-8 ring-gray-50 relative z-10">
                        1
                    </div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">Kaydolun</h3>
<p className="text-sm text-gray-500 font-normal">Uygulamayı indirin veya webden girin. Telefon numaranızla saniyeler içinde hesabınızı açın.</p>
</div>

<div className="relative text-center">
<div className="w-12 h-12 mx-auto bg-blue-600 text-white rounded-2xl flex items-center justify-center text-lg font-semibold mb-6 shadow-md ring-8 ring-gray-50 relative z-10">
                        2
                    </div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">İşinizi Ekleyin</h3>
<p className="text-sm text-gray-500 font-normal">Sektörünüzü seçin ve sadece işinize yarayan modülleri açın. Menünüzü isteğinize göre ayarlayın.</p>
</div>

<div className="relative text-center">
<div className="w-12 h-12 mx-auto bg-blue-600 text-white rounded-2xl flex items-center justify-center text-lg font-semibold mb-6 shadow-md ring-8 ring-gray-50 relative z-10">
                        3
                    </div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">Takibe Başlayın</h3>
<p className="text-sm text-gray-500 font-normal">İlk müşterinizi ve işinizi ekleyerek defterden dijitale geçişin rahatlığını yaşayın.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-12 text-center">UstaPlan ile hayatınız nasıl değişecek?</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="flex flex-col items-center text-center">
<div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-4 border border-gray-100">
<iconify-icon className="text-2xl text-blue-600" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h4 className="text-base font-semibold text-gray-900 mb-2">Daha Fazla Kontrol</h4>
<p className="text-sm text-gray-500">İşinizin her detayı cebinizde. Süprizlere yer yok.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-4 border border-gray-100">
<iconify-icon className="text-2xl text-blue-600" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h4 className="text-base font-semibold text-gray-900 mb-2">Daha Az Karışıklık</h4>
<p className="text-sm text-gray-500">Temiz ve basit arayüz ile aradığınızı anında bulun.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-4 border border-gray-100">
<iconify-icon className="text-2xl text-blue-600" icon="solar:graph-up-linear"></iconify-icon>
</div>
<h4 className="text-base font-semibold text-gray-900 mb-2">Daha Fazla Kazanç</h4>
<p className="text-sm text-gray-500">Unutulan alacakları tahsil edin, boşa giden malzemeyi önleyin.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-4 border border-gray-100">
<iconify-icon className="text-2xl text-blue-600" icon="solar:stopwatch-linear"></iconify-icon>
</div>
<h4 className="text-base font-semibold text-gray-900 mb-2">Zamandan Tasarruf</h4>
<p className="text-sm text-gray-500">Hesap kitap yaparken harcadığınız saatleri ailenize ayırın.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-blue-600">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<iconify-icon className="text-4xl text-blue-300/50 mb-6" icon="solar:quote-right-linear"></iconify-icon>
<p className="text-xl sm:text-2xl font-medium text-white mb-8 leading-relaxed tracking-tight">
                "Eskiden akşamları defterdeki hesapları temize çekerken saatlerim gidiyordu. Şimdi işi bitiriyorum, telefondan anında giriyorum. Kimin ne borcu var, hangi parça değişti hepsi elimde. Kafam çok rahat."
            </p>
<div className="flex items-center justify-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-500 border border-blue-400 flex items-center justify-center text-white font-semibold text-sm">A</div>
<div className="text-left">
<p className="text-sm font-semibold text-white">Ahmet Yılmaz</p>
<p className="text-xs text-blue-200">Oto Servis Sahibi</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50" id="fiyatlar">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">Küçük işletmelere uygun fiyatlar</h2>
<p className="text-base text-gray-500 font-normal">Sürpriz ödemeler, gizli ücretler yok. Sadece işinize yarayan paketle başlayın.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col">
<div className="mb-6">
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">Temel Başlangıç</h3>
<p className="text-sm text-gray-500 font-normal">Sadece müşteri ve hesap kaydı tutmak isteyenler için.</p>
</div>
<div className="mb-6 flex items-baseline text-4xl font-semibold tracking-tight text-gray-900">
                        Ücretsiz
                    </div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-blue-600 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-gray-700">50 Müşteri Kaydı</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-blue-600 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-gray-700">Temel Alacak/Verecek Takibi</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-blue-600 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-gray-700">İş Geçmişi Görüntüleme</span>
</li>
</ul>
<a className="w-full inline-flex justify-center items-center px-4 py-3 border border-gray-200 text-sm font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 transition-colors" href="#">
                        Hemen Başla
                    </a>
</div>

<div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 shadow-xl flex flex-col relative overflow-hidden">
<div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-bl-xl rounded-tr-xl">
                        En Çok Tercih Edilen
                    </div>
<div className="mb-6 relative z-10">
<h3 className="text-xl font-semibold tracking-tight text-white mb-2">Usta Pro</h3>
<p className="text-sm text-gray-400 font-normal">İşini tam anlamıyla kontrol altına almak isteyen profesyoneller için.</p>
</div>
<div className="mb-6 flex items-baseline text-4xl font-semibold tracking-tight text-white relative z-10">
                        299 ₺<span className="text-lg text-gray-400 font-normal ml-2">/ay</span>
</div>
<ul className="space-y-4 mb-8 flex-1 relative z-10">
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-blue-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-gray-300">Sınırsız Müşteri Kaydı</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-blue-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-gray-300">Tüm Modüllere Erişim (Stok, Randevu)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-blue-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-gray-300">WhatsApp Hatırlatmaları</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-blue-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-gray-300">Detaylı Raporlama</span>
</li>
</ul>
<a className="relative z-10 w-full inline-flex justify-center items-center px-4 py-3 border border-transparent text-sm font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.4)]" href="#">
                        14 Gün Ücretsiz Dene
                    </a>
</div>
</div>
<p className="text-center text-sm text-gray-500 mt-8">
                Sadece belirli modülleri almak isterseniz fiyatlar içeriden ayarlanabilir. Kart gerektirmez.
            </p>
</div>
</section>

<section className="py-24 bg-white border-t border-gray-100">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-6">Defterle uğraşmayı bırak, işini kontrol altına al.</h2>
<p className="text-base text-gray-500 mb-8 max-w-2xl mx-auto">Kurulum ücreti yok. Teknik bilgi gerekmez. Uygulamayı indir ve işinin patronu gerçekten sen ol.</p>
<a className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20" href="#">
                Hemen Başla
            </a>
</div>
</section>

<footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
<div className="md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-gray-900 rounded-md flex items-center justify-center">
<iconify-icon className="text-white text-sm" icon="solar:widget-5-linear"></iconify-icon>
</div>
<span className="font-semibold text-base tracking-tighter text-gray-900">USTAPLAN</span>
</div>
<p className="text-sm text-gray-500 max-w-xs mb-6">
                        Esnafın dijital yardımcısı. Karmaşık programlara son, pratik yönetime merhaba.
                    </p>
<a className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366]/10 text-[#128C7E] rounded-lg text-sm font-medium hover:bg-[#25D366]/20 transition-colors w-fit" href="#">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear"></iconify-icon>
                        WhatsApp Destek
                    </a>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 mb-4">Ürün</h4>
<ul className="space-y-3">
<li><a className="text-sm text-gray-500 hover:text-gray-900" href="#">Özellikler</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900" href="#">Modüller</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900" href="#">Fiyatlandırma</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900" href="#">Sektörler</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 mb-4">Kurumsal</h4>
<ul className="space-y-3">
<li><a className="text-sm text-gray-500 hover:text-gray-900" href="#">Hakkımızda</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900" href="#">İletişim</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900" href="#">Gizlilik Politikası</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900" href="#">Kullanım Koşulları</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-500">© 2023 UstaPlan. Tüm hakları saklıdır.</p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-gray-600" href="#">
<span className="sr-only">Facebook</span>
<iconify-icon className="text-xl" icon="solar:facebook-linear"></iconify-icon>
</a>
<a className="text-gray-400 hover:text-gray-600" href="#">
<span className="sr-only">Instagram</span>
<iconify-icon className="text-xl" icon="solar:camera-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
