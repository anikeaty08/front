import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
slate: {
850: '#151e2e',
900: '#0f172a',
950: '#020617',
},
tbt: {
blue: '#3b82f6',
dark: '#081c3a',
}
},
letterSpacing: {
tightest: '-.075em',
tighter: '-.05em',
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 glass-panel border-b-0 border-b-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

<div className="flex items-center gap-8">
<a className="group flex items-center gap-2" href="/">
<div className="w-8 h-8 rounded bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold tracking-tighter">
                        T
                    </div>
<span className="text-white font-semibold tracking-tight text-lg group-hover:text-blue-400 transition-colors">Tahribat.com</span>
</a>

<nav className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-400">
<a className="px-3 py-2 rounded-md hover:text-white hover:bg-white/5 transition-all flex items-center gap-2" href="#">
<iconify-icon icon="solar:folder-with-files-linear"></iconify-icon> Bölümler
                    </a>
<a className="px-3 py-2 rounded-md hover:text-white hover:bg-white/5 transition-all flex items-center gap-2" href="#">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> Topluluk
                    </a>
<a className="px-3 py-2 rounded-md hover:text-white hover:bg-white/5 transition-all flex items-center gap-2" href="#">
<iconify-icon icon="solar:info-circle-linear"></iconify-icon> Hakkımızda
                    </a>
</nav>
</div>

<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center gap-3 pl-4 border-l border-white/10">
<div className="text-right hidden lg:block">
<div className="text-sm font-medium text-white">Arlong</div>
<div className="text-xs text-emerald-500 flex items-center justify-end gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Online
                        </div>
</div>
<button className="w-9 h-9 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-white/30 transition-all">
<iconify-icon icon="solar:user-circle-linear" width="20"></iconify-icon>
</button>
<button className="w-9 h-9 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-white/30 transition-all relative">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-slate-900"></span>
</button>
</div>

<button className="md:hidden text-slate-400 hover:text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</header>

<main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<aside className="hidden lg:block lg:col-span-3 space-y-6">

<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500 group-focus-within:text-blue-500">
<iconify-icon icon="solar:magnifer-linear" width="18"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-3 py-2 border border-slate-800 rounded-lg leading-5 bg-slate-900/50 text-slate-300 placeholder-slate-500 focus:outline-none focus:bg-slate-900 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 sm:text-sm transition-all" placeholder="Ara..." type="text"/>
</div>

<div className="glass-panel rounded-xl p-4">
<h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Kısayollar</h3>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-2 py-1.5 text-sm text-slate-400 hover:text-white hover:bg-white/5 rounded-md transition-colors" href="#">
<iconify-icon className="text-blue-500" icon="solar:document-text-linear"></iconify-icon> Dökümanlar
                        </a>
<a className="flex items-center gap-3 px-2 py-1.5 text-sm text-slate-400 hover:text-white hover:bg-white/5 rounded-md transition-colors" href="#">
<iconify-icon className="text-emerald-500" icon="solar:users-group-two-rounded-linear"></iconify-icon> Online Kullanıcılar
                        </a>
<a className="flex items-center gap-3 px-2 py-1.5 text-sm text-slate-400 hover:text-white hover:bg-white/5 rounded-md transition-colors" href="#">
<iconify-icon className="text-purple-500" icon="solar:server-square-linear"></iconify-icon> TBT Servisler
                        </a>
<a className="flex items-center gap-3 px-2 py-1.5 text-sm text-slate-400 hover:text-white hover:bg-white/5 rounded-md transition-colors" href="#">
<iconify-icon className="text-orange-500" icon="solar:gallery-wide-linear"></iconify-icon> Resim Galerisi
                        </a>
</nav>
</div>

<div className="glass-panel rounded-xl p-4">
<h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Durumunuz</h3>
<div className="space-y-3">
<div className="flex justify-between items-center text-sm">
<span className="text-slate-500">IP Adresi</span>
<span className="font-mono text-slate-300">x.x.x.x</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-slate-500">Son Giriş</span>
<span className="font-mono text-slate-300 text-xs">19.01.2026 14:15</span>
</div>
</div>
</div>

<div className="glass-panel rounded-xl p-4">
<h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">İstatistikler</h3>
<div className="grid grid-cols-2 gap-3">
<div className="bg-white/5 rounded-lg p-3">
<div className="text-xs text-slate-500 mb-1">Başlık</div>
<div className="text-lg font-semibold text-white tracking-tight">220K</div>
</div>
<div className="bg-white/5 rounded-lg p-3">
<div className="text-xs text-slate-500 mb-1">Mesaj</div>
<div className="text-lg font-semibold text-white tracking-tight">3.0M</div>
</div>
<div className="bg-white/5 rounded-lg p-3">
<div className="text-xs text-slate-500 mb-1">Haber</div>
<div className="text-lg font-semibold text-white tracking-tight">5K</div>
</div>
<div className="bg-white/5 rounded-lg p-3">
<div className="text-xs text-slate-500 mb-1">Döküman</div>
<div className="text-lg font-semibold text-white tracking-tight">460</div>
</div>
</div>
<div className="mt-4 pt-4 border-t border-white/5">
<div className="text-xs text-slate-500 text-center uppercase tracking-wider mb-2">Toplam Hit</div>
<div className="text-xl font-mono text-center text-blue-400">743.268.155</div>
</div>
</div>

<div className="glass-panel rounded-xl p-4">
<div className="flex justify-between items-center mb-4">
<h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Etiketler</h3>
<div className="flex gap-1">
<button className="p-1 hover:text-white transition-colors"><iconify-icon icon="solar:list-linear"></iconify-icon></button>
<button className="p-1 hover:text-white transition-colors"><iconify-icon icon="solar:sort-from-bottom-to-top-linear"></iconify-icon></button>
</div>
</div>
<div className="flex flex-wrap gap-2">
<a className="px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-medium hover:bg-blue-500/20 transition-colors" href="#">android</a>
<a className="px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-medium hover:bg-blue-500/20 transition-colors" href="#">php</a>
<a className="px-2 py-1 rounded bg-slate-800 text-slate-400 border border-slate-700 text-xs hover:bg-slate-700 hover:text-slate-200 transition-colors" href="#">wordpress</a>
<a className="px-2 py-1 rounded bg-slate-800 text-slate-400 border border-slate-700 text-xs hover:bg-slate-700 hover:text-slate-200 transition-colors" href="#">satılık</a>
<a className="px-2 py-1 rounded bg-slate-800 text-slate-400 border border-slate-700 text-xs hover:bg-slate-700 hover:text-slate-200 transition-colors" href="#">iphone</a>
<a className="px-2 py-1 rounded bg-slate-800 text-slate-400 border border-slate-700 text-xs hover:bg-slate-700 hover:text-slate-200 transition-colors" href="#">python</a>
<a className="px-2 py-1 rounded bg-slate-800 text-slate-400 border border-slate-700 text-xs hover:bg-slate-700 hover:text-slate-200 transition-colors" href="#">c#</a>
<a className="px-2 py-1 rounded bg-slate-800 text-slate-400 border border-slate-700 text-xs hover:bg-slate-700 hover:text-slate-200 transition-colors" href="#">vpn</a>
</div>
</div>

<div className="glass-panel rounded-xl p-4 border-l-4 border-l-indigo-500">
<h3 className="text-sm font-semibold text-white mb-2">Anket: İsraili mi İranı mı?</h3>
<div className="space-y-2 mt-3">
<label className="flex items-center gap-3 p-2 rounded hover:bg-white/5 cursor-pointer transition-colors group">
<input className="accent-indigo-500 w-4 h-4 bg-slate-800 border-slate-600" name="survey" type="radio"/>
<span className="text-sm text-slate-400 group-hover:text-slate-200">İsrail</span>
</label>
<label className="flex items-center gap-3 p-2 rounded hover:bg-white/5 cursor-pointer transition-colors group">
<input className="accent-indigo-500 w-4 h-4 bg-slate-800 border-slate-600" name="survey" type="radio"/>
<span className="text-sm text-slate-400 group-hover:text-slate-200">İran</span>
</label>
<label className="flex items-center gap-3 p-2 rounded hover:bg-white/5 cursor-pointer transition-colors group">
<input className="accent-indigo-500 w-4 h-4 bg-slate-800 border-slate-600" name="survey" type="radio"/>
<span className="text-sm text-slate-400 group-hover:text-slate-200">Tarafsız</span>
</label>
</div>
<button className="mt-4 w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors">Gönder</button>
</div>
</aside>

<div className="col-span-1 lg:col-span-9 space-y-8">

<div className="flex items-center justify-between">
<h2 className="text-2xl font-semibold text-white tracking-tight flex items-center gap-2">
<iconify-icon className="text-orange-500" icon="solar:fire-linear"></iconify-icon>
                        Gündem &amp; Haberler
                    </h2>
<a className="text-sm text-blue-500 hover:text-blue-400 font-medium" href="/News">Tümünü Gör →</a>
</div>

<div className="glass-panel rounded-xl overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-white/5 bg-white/[0.02]">
<th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Başlık</th>
<th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider w-40">Yazar</th>
<th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider w-32 hidden sm:table-cell">Tarih</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-3">
<a className="flex items-center gap-3 group-hover:translate-x-1 transition-transform" href="#">
<div className="w-8 h-8 rounded bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:code-circle-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-200 group-hover:text-blue-400 transition-colors">Safranbolu Temel Python Eğitimi Başlıyor</span>
</a>
</td>
<td className="px-6 py-3">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-600" icon="solar:user-rounded-linear"></iconify-icon>
<span className="text-sm text-slate-400">yarasaadam</span>
</div>
</td>
<td className="px-6 py-3 hidden sm:table-cell text-xs text-slate-500 font-mono">12 Ağu 2024</td>
</tr>
<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-3">
<a className="flex items-center gap-3 group-hover:translate-x-1 transition-transform" href="#">
<div className="w-8 h-8 rounded bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:shield-check-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-200 group-hover:text-blue-400 transition-colors">Siber Kulüpler Birliği Yaz Kampı 2024</span>
</a>
</td>
<td className="px-6 py-3">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-600" icon="solar:user-rounded-linear"></iconify-icon>
<span className="text-sm text-slate-400">yarasaadam</span>
</div>
</td>
<td className="px-6 py-3 hidden sm:table-cell text-xs text-slate-500 font-mono">08 Ağu 2024</td>
</tr>
<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-3">
<a className="flex items-center gap-3 group-hover:translate-x-1 transition-transform" href="#">
<div className="w-8 h-8 rounded bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:gamepad-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-200 group-hover:text-blue-400 transition-colors">Mersin Üniversitesi Unity Oyun Geliştirme Atölyesi</span>
</a>
</td>
<td className="px-6 py-3">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-600" icon="solar:user-rounded-linear"></iconify-icon>
<span className="text-sm text-slate-400">yarasaadam</span>
</div>
</td>
<td className="px-6 py-3 hidden sm:table-cell text-xs text-slate-500 font-mono">08 Ağu 2024</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="flex items-center justify-between pt-4">
<h2 className="text-2xl font-semibold text-white tracking-tight flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:chat-round-dots-linear"></iconify-icon>
                        Aktif Konular
                    </h2>
<div className="flex gap-2">
<span className="px-2 py-1 rounded bg-slate-800 text-xs text-slate-400 border border-slate-700">Tümü</span>
<span className="px-2 py-1 rounded hover:bg-slate-800 text-xs text-slate-500 cursor-pointer transition-colors">Favoriler</span>
</div>
</div>

<div className="glass-panel rounded-xl overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-white/5 bg-white/[0.02]">
<th className="pl-6 py-3 w-8"></th>
<th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Konu</th>
<th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider w-32">Açan</th>
<th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider w-32 hidden sm:table-cell">Son Yazan</th>
<th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider w-20 text-right">Hit</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="pl-6 py-3">
<iconify-icon className="text-red-500 text-lg" icon="solar:folder-error-linear"></iconify-icon>
</td>
<td className="px-4 py-3">
<a className="text-sm font-medium text-slate-200 group-hover:text-blue-400 transition-colors block" href="#">Ülke Ve Dünya Gündem Konusu 2026 Ocak</a>
</td>
<td className="px-4 py-3 text-sm text-slate-400">mkyb</td>
<td className="px-4 py-3 text-sm text-slate-400 hidden sm:table-cell">Davos</td>
<td className="px-4 py-3 text-sm font-mono text-slate-500 text-right">42.2k</td>
</tr>
<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="pl-6 py-3">
<iconify-icon className="text-blue-500 text-lg" icon="solar:folder-with-files-linear"></iconify-icon>
</td>
<td className="px-4 py-3">
<a className="text-sm font-medium text-slate-200 group-hover:text-blue-400 transition-colors block" href="#">Kahve Çekirdeği Önerileriniz</a>
</td>
<td className="px-4 py-3 text-sm text-slate-400">korkarabatak</td>
<td className="px-4 py-3 text-sm text-slate-400 hidden sm:table-cell">qoqo</td>
<td className="px-4 py-3 text-sm font-mono text-slate-500 text-right">2.2k</td>
</tr>
<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="pl-6 py-3">
<iconify-icon className="text-emerald-500 text-lg" icon="solar:folder-security-linear"></iconify-icon>
</td>
<td className="px-4 py-3">
<a className="text-sm font-medium text-slate-200 group-hover:text-blue-400 transition-colors block" href="#">Araba Alacam Ne Almalıyım</a>
</td>
<td className="px-4 py-3 text-sm text-slate-400">u235</td>
<td className="px-4 py-3 text-sm text-slate-400 hidden sm:table-cell">Seminerist</td>
<td className="px-4 py-3 text-sm font-mono text-slate-500 text-right">1.6k</td>
</tr>
<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="pl-6 py-3">
<iconify-icon className="text-slate-500 text-lg" icon="solar:folder-linear"></iconify-icon>
</td>
<td className="px-4 py-3">
<a className="text-sm font-medium text-slate-200 group-hover:text-blue-400 transition-colors block" href="#">Android Yedeğini Alma Programı?</a>
</td>
<td className="px-4 py-3 text-sm text-slate-400">FiL3MAN</td>
<td className="px-4 py-3 text-sm text-slate-400 hidden sm:table-cell">ajan1111</td>
<td className="px-4 py-3 text-sm font-mono text-slate-500 text-right">21</td>
</tr>
<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="pl-6 py-3">
<iconify-icon className="text-orange-500 text-lg" icon="solar:fire-square-linear"></iconify-icon>
</td>
<td className="px-4 py-3">
<a className="text-sm font-medium text-slate-200 group-hover:text-blue-400 transition-colors block" href="#">Sıcak Fırsatlar 21</a>
</td>
<td className="px-4 py-3 text-sm text-slate-400">mkyb</td>
<td className="px-4 py-3 text-sm text-slate-400 hidden sm:table-cell">tahta</td>
<td className="px-4 py-3 text-sm font-mono text-slate-500 text-right">48.1k</td>
</tr>
<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="pl-6 py-3">
<iconify-icon className="text-blue-500 text-lg" icon="solar:folder-with-files-linear"></iconify-icon>
</td>
<td className="px-4 py-3">
<a className="text-sm font-medium text-slate-200 group-hover:text-blue-400 transition-colors block" href="#">Ortaya Karışık Lisanslar Geldi Hanımmmm V2</a>
</td>
<td className="px-4 py-3 text-sm text-slate-400">M-S-T-F</td>
<td className="px-4 py-3 text-sm text-slate-400 hidden sm:table-cell">LaNCeLoT</td>
<td className="px-4 py-3 text-sm font-mono text-slate-500 text-right">6.6k</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-3 border-t border-white/5 bg-white/[0.01]">
<a className="text-xs font-medium text-slate-500 hover:text-white transition-colors flex items-center justify-center gap-1" href="/Forum/ActiveTopics">
                            Tüm aktif konuları görüntüle <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="pt-4">
<h2 className="text-2xl font-semibold text-white tracking-tight flex items-center gap-2 mb-6">
<iconify-icon className="text-emerald-500" icon="solar:documents-minimalistic-linear"></iconify-icon>
                        Son Eklenen Dökümanlar
                    </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group glass-panel rounded-xl overflow-hidden hover-card transition-all duration-300">
<div className="h-40 bg-slate-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60 z-10"></div>
<img alt="Doc" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://placehold.co/600x400/0f172a/334155?text=WhatsApp"/>
</div>
<div className="p-5">
<div className="flex items-center gap-2 mb-3">
<span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Mobil</span>
<span className="text-xs text-slate-500">07 Kas 2024</span>
</div>
<h3 className="text-base font-semibold text-white leading-tight mb-2 group-hover:text-blue-400 transition-colors">WhatsApp Hesabını Taşırken Onay Sorunu Çözümü</h3>
<p className="text-sm text-slate-400 line-clamp-3 mb-4">WhatsApp business ve normal WhatsApp Hesabınızı Başka bir telefona taşımak istediğinizde...</p>
<div className="flex items-center gap-2 pt-4 border-t border-white/5">
<iconify-icon className="text-slate-500" icon="solar:user-circle-linear"></iconify-icon>
<span className="text-xs font-medium text-slate-400">SeRDaR</span>
</div>
</div>
</div>

<div className="group glass-panel rounded-xl overflow-hidden hover-card transition-all duration-300">
<div className="h-40 bg-slate-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60 z-10"></div>
<img alt="Doc" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://placehold.co/600x400/0f172a/334155?text=SQL"/>
</div>
<div className="p-5">
<div className="flex items-center gap-2 mb-3">
<span className="text-[10px] font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">Database</span>
<span className="text-xs text-slate-500">02 Eyl 2024</span>
</div>
<h3 className="text-base font-semibold text-white leading-tight mb-2 group-hover:text-blue-400 transition-colors">SQL'de Cursor (İmleç) Kullanımı</h3>
<p className="text-sm text-slate-400 line-clamp-3 mb-4">Veritabanı sistemlerinde tablo verileri arasında satır satır gezebileceğimiz yapılar olan Cursor'ı inceleyelim.</p>
<div className="flex items-center gap-2 pt-4 border-t border-white/5">
<iconify-icon className="text-slate-500" icon="solar:user-circle-linear"></iconify-icon>
<span className="text-xs font-medium text-slate-400">ontedi</span>
</div>
</div>
</div>

<div className="group glass-panel rounded-xl overflow-hidden hover-card transition-all duration-300">
<div className="h-40 bg-slate-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60 z-10"></div>
<img alt="Doc" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://placehold.co/600x400/0f172a/334155?text=VPN"/>
</div>
<div className="p-5">
<div className="flex items-center gap-2 mb-3">
<span className="text-[10px] font-semibold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">Network</span>
<span className="text-xs text-slate-500">24 Eyl 2023</span>
</div>
<h3 className="text-base font-semibold text-white leading-tight mb-2 group-hover:text-blue-400 transition-colors">Softether VPN Ağına OpenVPN İle Bağlanma</h3>
<p className="text-sm text-slate-400 line-clamp-3 mb-4">Yeni android telefonlar L2TP desteklemediği için tüm platformlarda çalışan openvpn ile nasıl bağlanırız...</p>
<div className="flex items-center gap-2 pt-4 border-t border-white/5">
<iconify-icon className="text-slate-500" icon="solar:user-circle-linear"></iconify-icon>
<span className="text-xs font-medium text-slate-400">x-files</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="mt-12 border-t border-white/5 bg-black/30 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-slate-500 text-sm">
                    © 2026 Tahribat.com. Tüm hakları saklıdır.
                    <span className="block text-xs mt-1 opacity-50 font-mono">Load time: 12.0016ms</span>
</div>
<ul className="flex items-center gap-6 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">Gizlilik</a></li>
<li><a className="hover:text-white transition-colors" href="#">Kurallar</a></li>
<li><a className="hover:text-white transition-colors" href="#">Hakkımızda</a></li>
<li><a className="hover:text-white transition-colors" href="#">İletişim</a></li>
</ul>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:plain-linear" width="20"></iconify-icon></a> 
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:letter-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
