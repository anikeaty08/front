import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-full md:w-64 bg-white border-r border-zinc-200 flex flex-col h-full shrink-0 z-20">
<div className="h-16 flex items-center px-6 border-b border-zinc-100">
<span className="text-xl font-medium tracking-tighter text-black">NEXUS</span>
</div>
<nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
<div className="text-xs font-medium text-zinc-400 tracking-tight uppercase mb-2 px-3 mt-4">Mimari</div>
<a className="flex items-center gap-3 px-3 py-2 text-zinc-900 bg-zinc-100 rounded-lg" href="#">
<iconify-icon icon="solar:layers-linear" width="18"></iconify-icon>
<span>Genel Bakış</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-lg transition-colors" href="#">
<iconify-icon icon="solar:database-linear" width="18"></iconify-icon>
<span>Veri Modelleri</span>
</a>
<div className="text-xs font-medium text-zinc-400 tracking-tight uppercase mb-2 px-3 mt-6">Arayüzler &amp; Akış</div>
<a className="flex items-center gap-3 px-3 py-2 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-lg transition-colors" href="#">
<iconify-icon icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
<span>Roller ve Yetkiler</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-lg transition-colors" href="#">
<iconify-icon icon="solar:widget-add-linear" width="18"></iconify-icon>
<span>Modüller</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-lg transition-colors" href="#">
<iconify-icon icon="solar:branching-paths-up-linear" width="18"></iconify-icon>
<span>Akıllı Bağlantılar</span>
</a>
<div className="text-xs font-medium text-zinc-400 tracking-tight uppercase mb-2 px-3 mt-6">Sistem</div>
<a className="flex items-center gap-3 px-3 py-2 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-lg transition-colors" href="#">
<iconify-icon icon="solar:cpu-linear" width="18"></iconify-icon>
<span>BYOK AI Katmanı</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-lg transition-colors" href="#">
<iconify-icon icon="solar:cloud-cross-linear" width="18"></iconify-icon>
<span>Offline Senaryolar</span>
</a>
</nav>
<div className="p-4 border-t border-zinc-100">
<div className="flex items-center gap-3 text-zinc-500">
<div className="w-2 h-2 rounded-full bg-emerald-400"></div>
<span className="text-xs">Geliştirmeye Hazır</span>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto h-full scroll-smooth">

<header className="h-16 bg-white/80 backdrop-blur-md border-b border-zinc-200 sticky top-0 z-10 flex items-center justify-between px-8">
<h1 className="text-lg font-medium tracking-tight text-zinc-900">Teknik Çözüm Dokümanı v1.0</h1>
<div className="flex items-center gap-4">
<button className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900">
<iconify-icon icon="solar:document-text-linear" width="18"></iconify-icon>
<span>Dışa Aktar</span>
</button>
</div>
</header>
<div className="p-8 max-w-6xl mx-auto space-y-12">

<section className="space-y-6">
<div className="space-y-2">
<h2 className="text-2xl font-medium tracking-tight text-black">Platform ve Teknoloji</h2>
<p className="text-zinc-500 text-base leading-relaxed">Çoklu platform, çevrimdışı öncelikli ve sıfır mesuliyet ilkesine dayanan temel mimari kararları.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white rounded-xl border border-zinc-200 p-6 shadow-sm space-y-4">
<iconify-icon className="text-zinc-800" icon="solar:smartphone-rotate-2-linear" width="24"></iconify-icon>
<h3 className="text-base font-medium tracking-tight text-zinc-900">Tek Codebase (React Native Web / Expo)</h3>
<p className="text-zinc-500">iOS, Android, Tablet ve Masaüstü için tek kod tabanı. Tüm arayüzler dokunmatik ve klavye/fare uyumlu responsive tasarıma sahiptir.</p>
</div>
<div className="bg-white rounded-xl border border-zinc-200 p-6 shadow-sm space-y-4">
<iconify-icon className="text-zinc-800" icon="solar:cloud-cross-linear" width="24"></iconify-icon>
<h3 className="text-base font-medium tracking-tight text-zinc-900">Offline-First (WatermelonDB/Local)</h3>
<p className="text-zinc-500">Kritik fonksiyonlar (yoklama, program akışı, notlar) internet yokken çalışır. Bağlantı sağlandığında arka planda sessiz senkronizasyon (CRDT) yapılır.</p>
</div>
<div className="bg-white rounded-xl border border-zinc-200 p-6 shadow-sm space-y-4">
<iconify-icon className="text-zinc-800" icon="solar:shield-keyhole-linear" width="24"></iconify-icon>
<h3 className="text-base font-medium tracking-tight text-zinc-900">Sıfır Mesuliyet (BYOK)</h3>
<p className="text-zinc-500">AI ve harici servisler için sadece entegrasyon arayüzleri mevcuttur. Kullanıcılar kendi API anahtarlarını girerek özellikleri aktif eder. Gömülü ücretli bağımlılık yoktur.</p>
</div>
</div>
</section>

<section className="space-y-6">
<div className="space-y-2">
<h2 className="text-2xl font-medium tracking-tight text-black">Modlar ve Rol Matrisi</h2>
<p className="text-zinc-500 text-base leading-relaxed">Uygulama, seçilen moda ve kullanıcının yetki seviyesine göre dinamik olarak şekillenir.</p>
</div>
<div className="bg-white rounded-xl border border-zinc-200 overflow-hidden shadow-sm">
<div className="grid grid-cols-4 border-b border-zinc-100 bg-zinc-50 text-xs text-zinc-500 font-medium tracking-tight uppercase">
<div className="p-4 border-r border-zinc-100">Mod / Kategori</div>
<div className="p-4 border-r border-zinc-100">Yönetim <span className="lowercase normal-case">(Ana Beyin)</span></div>
<div className="p-4 border-r border-zinc-100">Koordinasyon <span className="lowercase normal-case">(Saha)</span></div>
<div className="p-4">Halka <span className="lowercase normal-case">(İnteraktif)</span></div>
</div>
<div className="divide-y divide-zinc-100">
<div className="grid grid-cols-4 items-center transition-colors hover:bg-zinc-50/50">
<div className="p-4 font-medium text-zinc-900 border-r border-zinc-100">Admin (Sahip)</div>
<div className="p-4 border-r border-zinc-100 flex justify-center"><iconify-icon className="text-zinc-800" icon="solar:check-circle-linear" width="20"></iconify-icon></div>
<div className="p-4 border-r border-zinc-100 flex justify-center"><iconify-icon className="text-zinc-800" icon="solar:check-circle-linear" width="20"></iconify-icon></div>
<div className="p-4 flex justify-center"><iconify-icon className="text-zinc-800" icon="solar:check-circle-linear" width="20"></iconify-icon></div>
</div>
<div className="grid grid-cols-4 items-center transition-colors hover:bg-zinc-50/50">
<div className="p-4 font-medium text-zinc-900 border-r border-zinc-100">Koordinatör</div>
<div className="p-4 border-r border-zinc-100 flex justify-center"><iconify-icon className="text-zinc-300" icon="solar:minus-circle-linear" width="20"></iconify-icon></div>
<div className="p-4 border-r border-zinc-100 flex justify-center"><iconify-icon className="text-zinc-800" icon="solar:check-circle-linear" width="20"></iconify-icon></div>
<div className="p-4 flex justify-center"><iconify-icon className="text-zinc-800" icon="solar:check-circle-linear" width="20"></iconify-icon></div>
</div>
<div className="grid grid-cols-4 items-center transition-colors hover:bg-zinc-50/50">
<div className="p-4 font-medium text-zinc-900 border-r border-zinc-100">Katılımcı</div>
<div className="p-4 border-r border-zinc-100 flex justify-center"><iconify-icon className="text-zinc-300" icon="solar:minus-circle-linear" width="20"></iconify-icon></div>
<div className="p-4 border-r border-zinc-100 flex justify-center"><iconify-icon className="text-zinc-300" icon="solar:minus-circle-linear" width="20"></iconify-icon></div>
<div className="p-4 flex justify-center"><iconify-icon className="text-zinc-800" icon="solar:check-circle-linear" width="20"></iconify-icon></div>
</div>
</div>
</div>
</section>

<section className="space-y-6">
<div className="space-y-2">
<h2 className="text-2xl font-medium tracking-tight text-black">Akıllı Bağlantılar &amp; Entegrasyon</h2>
<p className="text-zinc-500 text-base leading-relaxed">Modüller arası veri senkronizasyonu ve cihaz seviyesi doğal entegrasyonlar.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="bg-white rounded-xl border border-zinc-200 p-6 shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-zinc-800" icon="solar:link-linear" width="20"></iconify-icon>
<h3 className="text-base font-medium tracking-tight text-zinc-900">Smart Linking Mantığı</h3>
</div>
<p className="text-zinc-500 mb-6">Bir modülde yapılan değişiklik diğerlerini etkilediğinde sistem kullanıcıya sorar. İsteğe bağlı uygulanır, geri alınabilir (undo).</p>
<div className="bg-zinc-50 p-4 rounded-lg border border-zinc-100 space-y-4">
<p className="text-zinc-700">"Kamp tarihleri güncellendi. İlgili alanlara uygulansın mı?"</p>

<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-4 h-4 border border-zinc-300 rounded-[4px] bg-white group-hover:border-zinc-400 transition-colors">
<input checked="" className="peer sr-only" type="checkbox"/>
<svg className="w-3 h-3 text-zinc-800 opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<span className="text-zinc-600 group-hover:text-zinc-900 transition-colors">Oda giriş/çıkış tarihlerini senkronize et</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-4 h-4 border border-zinc-300 rounded-[4px] bg-white group-hover:border-zinc-400 transition-colors">
<input checked="" className="peer sr-only" type="checkbox"/>
<svg className="w-3 h-3 text-zinc-800 opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<span className="text-zinc-600 group-hover:text-zinc-900 transition-colors">Program akışı başlangıç tarihlerini kaydır</span>
</label>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-zinc-200 p-6 shadow-sm">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-zinc-800" icon="solar:share-circle-linear" width="20"></iconify-icon>
<h3 className="text-base font-medium tracking-tight text-zinc-900">Doğal Cihaz Entegrasyonları</h3>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-zinc-700" icon="solar:calendar-date-linear"></iconify-icon>
</div>
<div>
<div className="font-medium text-zinc-900">Takvim (ICS) Aktarımı</div>
<div className="text-zinc-500 mt-1">Program akışı Google/Apple Calendar'a eklenebilir formatta (deep link) üretilir.</div>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-zinc-700" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<div className="font-medium text-zinc-900">Navigasyon Tetikleyici</div>
<div className="text-zinc-500 mt-1">Organizasyon adresine tıklandığında `geo:` veya `maps:` şeması ile harita uygulamaları açılır.</div>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-zinc-700" icon="solar:qr-code-linear"></iconify-icon>
</div>
<div>
<div className="font-medium text-zinc-900">Dinamik QR ve Davet Linki</div>
<div className="text-zinc-500 mt-1">Uygulama indirmeyi veya web sürümünü tetikleyen evrensel linkler. İşletim sistemi paylaşım menüsü ile entegre.</div>
</div>
</li>
</ul>
</div>
</div>
</section>

<section className="space-y-6">
<div className="space-y-2">
<h2 className="text-2xl font-medium tracking-tight text-black">Veri Modeli ve Oda Yönetimi</h2>
<p className="text-zinc-500 text-base leading-relaxed">İlişkisel altyapı ve çoklu etkinlik desteği.</p>
</div>
<div className="bg-[#111111] rounded-xl p-6 text-zinc-300 font-mono text-xs overflow-x-auto">
<pre className="leading-loose"><code><span className="text-zinc-500">// Çekirdek Şemalar (Basitleştirilmiş)</span>
<span className="text-pink-400">type</span> <span className="text-emerald-400">Organization</span> = {
  id: string;
  name: string;
  managers: UserID[];
  events: EventID[];
};

<span className="text-pink-400">type</span> <span className="text-emerald-400">Event</span> = {
  id: string;
  orgId: OrganizationID;
  title: string;
  dateRange: { start: Date; end: Date };
  address: string;
  modules: ModuleConfig; <span className="text-zinc-500">// Aktif modüller (SOS, Quiz, vs.)</span>
};

<span className="text-pink-400">type</span> <span className="text-emerald-400">Participant</span> = {
  id: string;
  eventId: EventID;
  userId: UserID;
  paymentStatus: <span className="text-amber-300">'paid'</span> | <span className="text-amber-300">'pending'</span>;
  amountDue: number;
};

<span className="text-pink-400">type</span> <span className="text-emerald-400">Room</span> = {
  id: string;
  eventId: EventID;
  name: string;
  capacity: number; <span className="text-zinc-500">// Varsayılan: 2, override edilebilir</span>
  occupants: UserID[];
  dates: { checkIn: Date; checkOut: Date }; <span className="text-zinc-500">// Etkinlik tarihi baz alınır, manuel değişebilir</span>
};</code></pre>
</div>
</section>

<section className="space-y-6">
<div className="space-y-2">
<h2 className="text-2xl font-medium tracking-tight text-black">Temel Modül Akışları</h2>
<p className="text-zinc-500 text-base leading-relaxed">Etkileşimli saha modülleri, katılımcı deneyimi ve profil entegrasyonları.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="border border-zinc-200 bg-white rounded-xl p-5 flex flex-col">
<div className="flex justify-between items-start mb-2">
<div className="font-medium text-zinc-900">Kayıt ve Yoklama</div>
<span className="bg-zinc-100 text-zinc-600 px-2 py-1 rounded text-xs uppercase tracking-wide">Koordinasyon</span>
</div>
<p className="text-zinc-500 mb-4">Davetli linkle gelir, form doldurur. Yönetici bekleyen başvuruyu onaylar. Sahada QR okutularak veya listeden "Buradayım" butonuna basılarak yoklama alınır.</p>
<div className="mt-auto h-1 w-full bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-zinc-400 w-1/3"></div>
</div>
</div>
<div className="border border-zinc-200 bg-white rounded-xl p-5 flex flex-col">
<div className="flex justify-between items-start mb-2">
<div className="font-medium text-zinc-900">İnteraktif Halka (Quiz &amp; Anket)</div>
<span className="bg-zinc-100 text-zinc-600 px-2 py-1 rounded text-xs uppercase tracking-wide">Halka</span>
</div>
<p className="text-zinc-500 mb-4">Eş zamanlı canlı yarışmalar (Kahoot tarzı), ortak okuma takibi ve "Programın En'leri" liderlik tablosu. Katılımcı anında sonuçları görür.</p>
<div className="mt-auto h-1 w-full bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-zinc-400 w-full"></div>
</div>
</div>
<div className="border border-zinc-200 bg-white rounded-xl p-5 flex flex-col">
<div className="flex justify-between items-start mb-2">
<div className="font-medium text-zinc-900">SOS ve Sağlık</div>
<span className="bg-zinc-100 text-zinc-600 px-2 py-1 rounded text-xs uppercase tracking-wide">Kritik</span>
</div>
<p className="text-zinc-500 mb-4">Tek tuşla acil yardım çağrısı. Katılımcının girdiği spesifik sağlık verileri (alerji vb.) sadece yöneticiler tarafından görülebilir.</p>
<div className="mt-auto flex items-center justify-between text-xs text-zinc-400">
<span>Öncelikli Bildirimler Aktif</span>
<iconify-icon icon="solar:bell-bing-linear"></iconify-icon>
</div>
</div>
<div className="border border-zinc-200 bg-white rounded-xl p-5 flex flex-col">
<div className="flex justify-between items-start mb-2">
<div className="font-medium text-zinc-900">Bütçe ve Rapor (AI Destekli)</div>
<span className="bg-zinc-100 text-zinc-600 px-2 py-1 rounded text-xs uppercase tracking-wide">Yönetim</span>
</div>
<p className="text-zinc-500 mb-4">Gider kalemleri girilir. Kullanıcı API key girmişse, veriler AI'a gönderilerek otomatik "Organizasyon Durum Raporu" taslağı oluşturulur.</p>

<div className="mt-auto flex items-center justify-between">
<span className="text-xs text-zinc-600">AI Asistan (BYOK)</span>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-zinc-800"></div>
</label>
</div>
</div>

<div className="border border-zinc-200 bg-white rounded-xl p-5 flex flex-col">
<div className="flex justify-between items-start mb-2">
<div className="font-medium text-zinc-900">Profil ve Yardım Merkezi</div>
<span className="bg-zinc-100 text-zinc-600 px-2 py-1 rounded text-xs uppercase tracking-wide">Destek</span>
</div>
<p className="text-zinc-500 mb-6">Kullanıcı profiline entegre edilmiş, uygulamanın nasıl kullanılacağını anlatan SSS (FAQ) bölümü. İçerikler kullanıcının rolüne göre özelleşir.</p>

<div className="mt-auto space-y-2">
<div className="border border-zinc-100 rounded-lg p-3 bg-zinc-50/50 flex items-center justify-between cursor-pointer hover:bg-zinc-50 transition-colors">
<span className="text-xs font-medium text-zinc-700">QR Kod ile Yoklama Nasıl Verilir?</span>
<iconify-icon className="text-zinc-400" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
<div className="border border-zinc-100 rounded-lg p-3 bg-zinc-50/50 flex items-center justify-between cursor-pointer hover:bg-zinc-50 transition-colors">
<span className="text-xs font-medium text-zinc-700">Oda Arkadaşımı Değiştirebilir miyim?</span>
<iconify-icon className="text-zinc-400" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="border border-zinc-200 bg-white rounded-xl p-5 flex flex-col">
<div className="flex justify-between items-start mb-4">
<div className="font-medium text-zinc-900">Katılımcı Ödemeleri</div>
<span className="bg-zinc-100 text-zinc-600 px-2 py-1 rounded text-xs uppercase tracking-wide">Yönetim</span>
</div>
<p className="text-zinc-500 mb-6 w-full">Yöneticiler, katılımcıların ödeme durumlarını anlık görüntüleyebilir ve tahsilat girebilir.</p>

<div className="border border-zinc-100 rounded-lg overflow-hidden bg-zinc-50/50 mt-auto">
<div className="grid grid-cols-3 px-3 py-2 border-b border-zinc-100 text-[10px] font-medium tracking-tight text-zinc-400 uppercase">
<div className="col-span-1">Katılımcı</div>
<div className="text-center">Durum</div>
<div className="text-right">Tutar</div>
</div>
<div className="divide-y divide-zinc-100 text-xs">
<div className="grid grid-cols-3 items-center px-3 py-2 bg-white transition-colors hover:bg-zinc-50 cursor-pointer">
<div className="col-span-1 flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center text-[10px] font-medium text-zinc-600 tracking-tight">AH</div>
<span className="text-zinc-900 font-medium truncate">Ahmet Y.</span>
</div>
<div className="text-center flex justify-center">
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[10px] font-medium">
                                            Ödendi
                                        </span>
</div>
<div className="text-right text-zinc-600 font-medium">₺1,250</div>
</div>
<div className="grid grid-cols-3 items-center px-3 py-2 bg-white transition-colors hover:bg-zinc-50 cursor-pointer">
<div className="col-span-1 flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center text-[10px] font-medium text-zinc-600 tracking-tight">AD</div>
<span className="text-zinc-900 font-medium truncate">Ayşe D.</span>
</div>
<div className="text-center flex justify-center">
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-amber-50 text-amber-700 text-[10px] font-medium">
                                            Bekliyor
                                        </span>
</div>
<div className="text-right text-zinc-600 font-medium">₺1,250</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="space-y-6 pb-20">
<div className="space-y-2">
<h2 className="text-2xl font-medium tracking-tight text-black">Altyapı (i18n) &amp; Gelecek (SaaS)</h2>
<p className="text-zinc-500 text-base leading-relaxed">Uluslararasılaşma ve ücretli modele geçiş için hazırlık.</p>
</div>
<div className="flex flex-col md:flex-row gap-6">
<div className="flex-1 bg-white rounded-xl border border-zinc-200 p-6 shadow-sm">
<div className="font-medium text-zinc-900 mb-2">Çok Dilli Yapı (i18n)</div>
<p className="text-zinc-500 mb-4">Profil ayarlarından anında TR, DE, EN dil değişimi. Veritabanında sabit içerikler çok dilli JSON formatında (<code>{"tr": "...", "en": "..."}</code>) tutulur. Kullanıcı ürettiği içerikler anlık dil modeline tabidir.</p>
</div>
<div className="flex-1 bg-white rounded-xl border border-zinc-200 p-6 shadow-sm">
<div className="font-medium text-zinc-900 mb-2">Payment Service Layer</div>
<p className="text-zinc-500 mb-4">Abonelik veya organizasyon başı ücretlendirme için mimari hazırdır. <code>BillingProvider</code> arayüzü soyutlanmıştır. İleride Stripe vb. entegre edildiğinde core mantık değişmeden lisanslama devreye alınabilir.</p>
</div>
</div>
</section>
</div>
</main>

    </>
  );
}
