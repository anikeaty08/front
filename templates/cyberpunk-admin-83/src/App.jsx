import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Mobile menu toggle
        document.getElementById('mobile-overlay').addEventListener('click', function() {
            document.getElementById('sidebar').classList.add('-translate-x-full');
            this.classList.add('hidden');
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 hidden md:hidden" id="mobile-overlay"></div>

<aside className="fixed inset-y-0 left-0 z-50 w-64 bg-[#0a0a0c] border-r border-gray-800/50 flex flex-col transition-transform duration-300 transform -translate-x-full md:relative md:translate-x-0" id="sidebar">
<div className="h-16 flex items-center px-6 border-b border-gray-800/50">
<span className="text-xl font-medium tracking-tighter neon-text">SCORFION</span>
<span className="ml-2 text-xs text-gray-500 font-medium px-1.5 py-0.5 rounded border border-gray-800 bg-gray-900/50">ADMIN</span>
</div>
<nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
<a className="flex items-center px-3 py-2 text-sm font-normal rounded-md bg-[#4da6ff]/10 text-[#4da6ff] group border border-[#4da6ff]/20" href="#">
<iconify-icon className="mr-3 text-lg drop-shadow-[0_0_5px_rgba(77,166,255,0.8)]" icon="solar:widget-linear" strokeWidth="1.5"></iconify-icon>
                Genel Bakış
            </a>
<a className="flex items-center px-3 py-2 text-sm font-normal rounded-md text-gray-400 hover:bg-gray-800/50 hover:text-gray-200 group transition-colors" href="#">
<iconify-icon className="mr-3 text-lg text-gray-500 group-hover:text-[#4da6ff] transition-colors" icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
                Sipariş Yönetimi
                <span className="ml-auto bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 py-0.5 px-2 rounded-full text-xs">12</span>
</a>
<a className="flex items-center px-3 py-2 text-sm font-normal rounded-md text-gray-400 hover:bg-gray-800/50 hover:text-gray-200 group transition-colors" href="#">
<iconify-icon className="mr-3 text-lg text-gray-500 group-hover:text-[#4da6ff] transition-colors" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
                Kullanıcılar
            </a>
<a className="flex items-center px-3 py-2 text-sm font-normal rounded-md text-gray-400 hover:bg-gray-800/50 hover:text-gray-200 group transition-colors" href="#">
<iconify-icon className="mr-3 text-lg text-gray-500 group-hover:text-[#4da6ff] transition-colors" icon="solar:server-square-linear" strokeWidth="1.5"></iconify-icon>
                Servisler
            </a>
<a className="flex items-center px-3 py-2 text-sm font-normal rounded-md text-gray-400 hover:bg-gray-800/50 hover:text-gray-200 group transition-colors" href="#">
<iconify-icon className="mr-3 text-lg text-gray-500 group-hover:text-[#4da6ff] transition-colors" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
                Ödemeler
                <span className="ml-auto bg-[#4da6ff]/10 text-[#4da6ff] border border-[#4da6ff]/20 py-0.5 px-2 rounded-full text-xs">3</span>
</a>
<div className="pt-4 mt-4 border-t border-gray-800/50">
<a className="flex items-center px-3 py-2 text-sm font-normal rounded-md text-gray-400 hover:bg-gray-800/50 hover:text-gray-200 group transition-colors" href="#">
<iconify-icon className="mr-3 text-lg text-gray-500 group-hover:text-[#4da6ff] transition-colors" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
                    Sistem Ayarları
                </a>
<a className="flex items-center px-3 py-2 text-sm font-normal rounded-md text-gray-400 hover:bg-gray-800/50 hover:text-gray-200 group transition-colors" href="#">
<iconify-icon className="mr-3 text-lg text-gray-500 group-hover:text-[#4da6ff] transition-colors" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
                    Kayıtlar &amp; Loglar
                </a>
</div>
</nav>
<div className="p-4 border-t border-gray-800/50">
<button className="flex items-center w-full px-3 py-2 text-sm font-normal rounded-md text-gray-400 hover:bg-gray-800/50 hover:text-gray-200 transition-colors group">
<iconify-icon className="mr-3 text-lg text-[#4da6ff] drop-shadow-[0_0_5px_rgba(77,166,255,0.5)]" icon="solar:shield-user-linear" strokeWidth="1.5"></iconify-icon>
<div className="flex flex-col items-start">
<span className="text-xs text-gray-200 font-medium">Yönetici</span>
<span className="text-xs text-gray-500 font-normal">Sistemi Kapat</span>
</div>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900/20 via-[#050507] to-[#050507]">

<header className="bg-[#0a0a0c]/80 backdrop-blur-md border-b border-gray-800/50 h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8 z-10">
<div className="flex items-center">
<button className="md:hidden text-gray-400 hover:text-white mr-4 focus:outline-none" onclick="document.getElementById('sidebar').classList.toggle('-translate-x-full'); document.getElementById('mobile-overlay').classList.toggle('hidden');">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
<h1 className="text-lg font-medium tracking-tight text-white hidden sm:block">Kontrol Merkezi</h1>
</div>
<div className="flex items-center space-x-4">
<div className="flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-md">
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse"></div>
<span className="text-xs text-emerald-500 font-medium tracking-wide">SİSTEM AKTİF</span>
</div>
<button className="relative p-2 text-gray-400 hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#4da6ff]"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 relative">

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none"></div>
<div className="max-w-[90rem] mx-auto space-y-6 relative z-10">

<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
<div className="bg-[#0a0a0c] border border-gray-800 rounded-lg p-5 flex items-center justify-between hover:border-gray-700 transition-colors relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
<iconify-icon className="text-6xl text-[#4da6ff]" icon="solar:box-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-normal text-gray-500">Toplam Sipariş</p>
<p className="text-xl font-medium text-white tracking-tight mt-1">124,592</p>
</div>
<div className="flex-shrink-0 h-10 w-10 bg-[#4da6ff]/10 rounded-md border border-[#4da6ff]/20 flex items-center justify-center">
<iconify-icon className="text-xl text-[#4da6ff]" icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="bg-[#0a0a0c] border border-gray-800 rounded-lg p-5 flex items-center justify-between hover:border-gray-700 transition-colors relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
<iconify-icon className="text-6xl text-[#4da6ff]" icon="solar:wad-of-money-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-normal text-gray-500">Toplam Gelir</p>
<p className="text-xl font-medium text-white tracking-tight mt-1">₺842,500</p>
</div>
<div className="flex-shrink-0 h-10 w-10 bg-[#4da6ff]/10 rounded-md border border-[#4da6ff]/20 flex items-center justify-center">
<iconify-icon className="text-xl text-[#4da6ff]" icon="solar:wad-of-money-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="bg-[#0a0a0c] border border-gray-800 rounded-lg p-5 flex items-center justify-between hover:border-gray-700 transition-colors relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
<iconify-icon className="text-6xl text-yellow-500" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-normal text-gray-500">Bekleyen İşlem</p>
<p className="text-xl font-medium text-white tracking-tight mt-1">48</p>
</div>
<div className="flex-shrink-0 h-10 w-10 bg-yellow-500/10 rounded-md border border-yellow-500/20 flex items-center justify-center">
<iconify-icon className="text-xl text-yellow-500" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="bg-[#0a0a0c] border border-gray-800 rounded-lg p-5 flex items-center justify-between hover:border-gray-700 transition-colors relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
<iconify-icon className="text-6xl text-emerald-500" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-normal text-gray-500">Aktif Kullanıcı</p>
<p className="text-xl font-medium text-white tracking-tight mt-1">3,402</p>
</div>
<div className="flex-shrink-0 h-10 w-10 bg-emerald-500/10 rounded-md border border-emerald-500/20 flex items-center justify-center">
<iconify-icon className="text-xl text-emerald-500" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>

<div className="bg-[#0a0a0c] border border-gray-800 rounded-lg overflow-hidden relative shadow-xl">

<div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#4da6ff]/30 to-transparent"></div>

<div className="px-6 py-4 border-b border-gray-800/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h3 className="text-base font-medium text-white tracking-tight">Sipariş Yönetimi</h3>
<p className="text-xs text-gray-500 mt-0.5">Sistemdeki tüm siparişleri buradan yönetin.</p>
</div>
<div className="flex items-center space-x-3">
<div className="relative neon-border rounded-md">
<iconify-icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" icon="solar:magnifer-linear"></iconify-icon>
<input className="block w-64 pl-9 pr-3 py-2 text-sm border border-gray-800 rounded-md bg-[#050507] text-white focus:outline-none placeholder-gray-600 transition-all" placeholder="ID, Kullanıcı veya Link ara..." type="text"/>
</div>
<div className="relative rounded-md border border-gray-800 bg-[#050507]">
<select className="block w-full pl-3 pr-8 py-2 text-sm focus:outline-none rounded-md bg-transparent text-gray-300">
<option>Tüm Durumlar</option>
<option>Bekliyor</option>
<option>İşleniyor</option>
<option>Tamamlandı</option>
</select>
</div>
<button className="flex items-center px-3 py-2 bg-gray-900 border border-gray-800 rounded-md text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">
<iconify-icon className="mr-2" icon="solar:export-linear" strokeWidth="1.5"></iconify-icon>
                                CSV
                            </button>
</div>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left border-collapse whitespace-nowrap">
<thead>
<tr className="bg-gray-900/30 border-b border-gray-800/80">
<th className="px-6 py-3 text-xs font-medium text-gray-500 tracking-wide">Sipariş ID</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 tracking-wide">Kullanıcı</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 tracking-wide">Servis / Link</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 tracking-wide">Miktar</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 tracking-wide">Tutar</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 tracking-wide">Durum</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 tracking-wide">Tarih</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 tracking-wide text-right">İşlem</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-800/50">

<tr className="hover:bg-gray-800/20 group">
<td className="px-6 py-4 text-sm font-medium text-gray-300">#89432</td>
<td className="px-6 py-4 text-sm text-gray-400">
<div className="flex flex-col">
<span className="text-gray-300">Gamer_01</span>
<span className="text-xs text-gray-600">₺140 Bakiye</span>
</div>
</td>
<td className="px-6 py-4 text-sm">
<div className="flex flex-col max-w-[200px]">
<span className="text-gray-300 truncate" title="ID 102 - Instagram Gerçek Takipçi">ID 102 - IG Takipçi...</span>
<a className="text-xs text-[#4da6ff] hover:underline truncate" href="#">instagram.com/test</a>
</div>
</td>
<td className="px-6 py-4 text-sm text-gray-300">5,000</td>
<td className="px-6 py-4 text-sm text-gray-300 font-medium">₺45.00</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-500/10 text-yellow-500 border border-yellow-500/20">
                                            Bekliyor
                                        </span>
</td>
<td className="px-6 py-4 text-sm text-gray-500">2 dk önce</td>
<td className="px-6 py-4 text-right space-x-2">

<button className="text-gray-500 hover:text-[#4da6ff] transition-colors" title="İşleme Al">
<iconify-icon className="text-lg" icon="solar:play-circle-linear"></iconify-icon>
</button>
<button className="text-gray-500 hover:text-rose-500 transition-colors" title="İptal Et">
<iconify-icon className="text-lg" icon="solar:close-circle-linear"></iconify-icon>
</button>
<button className="text-gray-500 hover:text-white transition-colors" title="Detaylar">
<iconify-icon className="text-lg" icon="solar:menu-dots-circle-linear"></iconify-icon>
</button>
</td>
</tr>

<tr className="hover:bg-gray-800/20 group">
<td className="px-6 py-4 text-sm font-medium text-gray-300">#89431</td>
<td className="px-6 py-4 text-sm text-gray-400">
<div className="flex flex-col">
<span className="text-gray-300">TechGuru</span>
<span className="text-xs text-gray-600">₺1,200 Bakiye</span>
</div>
</td>
<td className="px-6 py-4 text-sm">
<div className="flex flex-col max-w-[200px]">
<span className="text-gray-300 truncate">ID 205 - TikTok İzlenme</span>
<a className="text-xs text-[#4da6ff] hover:underline truncate" href="#">tiktok.com/@video123</a>
</div>
</td>
<td className="px-6 py-4 text-sm text-gray-300">100,000</td>
<td className="px-6 py-4 text-sm text-gray-300 font-medium">₺120.00</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-[#4da6ff]/10 text-[#4da6ff] border border-[#4da6ff]/20">
                                            İşleniyor
                                        </span>
</td>
<td className="px-6 py-4 text-sm text-gray-500">15 dk önce</td>
<td className="px-6 py-4 text-right space-x-2">
<button className="text-gray-500 hover:text-emerald-500 transition-colors" title="Tamamla">
<iconify-icon className="text-lg" icon="solar:check-circle-linear"></iconify-icon>
</button>
<button className="text-gray-500 hover:text-rose-500 transition-colors" title="İptal Et">
<iconify-icon className="text-lg" icon="solar:close-circle-linear"></iconify-icon>
</button>
<button className="text-gray-500 hover:text-white transition-colors" title="Detaylar">
<iconify-icon className="text-lg" icon="solar:menu-dots-circle-linear"></iconify-icon>
</button>
</td>
</tr>

<tr className="hover:bg-gray-800/20 group">
<td className="px-6 py-4 text-sm font-medium text-gray-300">#89430</td>
<td className="px-6 py-4 text-sm text-gray-400">
<div className="flex flex-col">
<span className="text-gray-300">VloggerTR</span>
<span className="text-xs text-gray-600">₺45 Bakiye</span>
</div>
</td>
<td className="px-6 py-4 text-sm">
<div className="flex flex-col max-w-[200px]">
<span className="text-gray-300 truncate">ID 301 - YouTube Abone</span>
<a className="text-xs text-[#4da6ff] hover:underline truncate" href="#">youtube.com/c/channel</a>
</div>
</td>
<td className="px-6 py-4 text-sm text-gray-300">1,000</td>
<td className="px-6 py-4 text-sm text-gray-300 font-medium">₺350.00</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                                            Tamamlandı
                                        </span>
</td>
<td className="px-6 py-4 text-sm text-gray-500">1 saat önce</td>
<td className="px-6 py-4 text-right space-x-2">
<button className="text-gray-500 hover:text-white transition-colors" title="Detaylar">
<iconify-icon className="text-lg" icon="solar:menu-dots-circle-linear"></iconify-icon>
</button>
</td>
</tr>

<tr className="hover:bg-gray-800/20 group">
<td className="px-6 py-4 text-sm font-medium text-gray-300">#89429</td>
<td className="px-6 py-4 text-sm text-gray-400">
<div className="flex flex-col">
<span className="text-gray-300">MüzikDiyar</span>
<span className="text-xs text-gray-600">₺0 Bakiye</span>
</div>
</td>
<td className="px-6 py-4 text-sm">
<div className="flex flex-col max-w-[200px]">
<span className="text-gray-300 truncate">ID 402 - Spotify Dinlenme</span>
<a className="text-xs text-gray-500 truncate" href="#">Hatalı Link</a>
</div>
</td>
<td className="px-6 py-4 text-sm text-gray-300">10,000</td>
<td className="px-6 py-4 text-sm text-gray-300 font-medium line-through opacity-50">₺80.00</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-rose-500/10 text-rose-500 border border-rose-500/20">
                                            İptal Edildi
                                        </span>
</td>
<td className="px-6 py-4 text-sm text-gray-500">2 saat önce</td>
<td className="px-6 py-4 text-right space-x-2">
<button className="text-gray-500 hover:text-yellow-500 transition-colors" title="Bakiye İade Et">
<iconify-icon className="text-lg" icon="solar:refresh-circle-linear"></iconify-icon>
</button>
<button className="text-gray-500 hover:text-white transition-colors" title="Detaylar">
<iconify-icon className="text-lg" icon="solar:menu-dots-circle-linear"></iconify-icon>
</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="px-6 py-3 border-t border-gray-800/50 flex items-center justify-between">
<p className="text-xs text-gray-500">Toplam <span className="text-gray-300">124,592</span> siparişten <span className="text-gray-300">1-4</span> arası gösteriliyor</p>
<div className="flex space-x-1">
<button className="px-2 py-1 bg-gray-900 border border-gray-800 rounded text-gray-500 cursor-not-allowed">
<iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<button className="px-2 py-1 bg-[#4da6ff]/10 border border-[#4da6ff]/30 text-[#4da6ff] rounded text-xs font-medium">1</button>
<button className="px-2 py-1 bg-gray-900 border border-gray-800 hover:border-gray-700 text-gray-400 rounded text-xs font-medium transition-colors">2</button>
<button className="px-2 py-1 bg-gray-900 border border-gray-800 hover:border-gray-700 text-gray-400 rounded text-xs font-medium transition-colors">3</button>
<button className="px-2 py-1 bg-gray-900 border border-gray-800 hover:border-gray-700 text-gray-400 rounded transition-colors">
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
